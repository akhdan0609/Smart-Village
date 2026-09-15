const QRCode = require('qrcode');
const fs = require('fs');
const { execSync } = require('child_process');

// Maps link to Desa Warung Menteng, Cijeruk, Bogor
const MAP_URL = 'https://maps.google.com/?q=Warung+Menteng+Cijeruk+Bogor';

async function generate() {
  const qr = QRCode.create(MAP_URL, {
    errorCorrectionLevel: 'H'
  });

  const modules = qr.modules;
  const size = modules.size;
  const margin = 3;
  const totalSize = size + margin * 2;
  const scale = 24; // 24px per module -> high res ~800-1000px
  const imgSize = totalSize * scale;

  const centerPos = (margin + size / 2) * scale;
  const centerRadius = (size * 0.17) * scale; // Center clearing radius for emblem

  // Function to check if a module is inside the 3 corner finder patterns
  function isFinderPattern(r, c) {
    // Top-left
    if (r < 7 && c < 7) return true;
    // Top-right
    if (r < 7 && c >= size - 7) return true;
    // Bottom-left
    if (r >= size - 7 && c < 7) return true;
    return false;
  }

  // Generate SVG elements
  let dotsSvg = '';

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (modules.get(r, c)) {
        if (isFinderPattern(r, c)) {
          // Handled separately for classic sharp look
          continue;
        }

        const cx = (margin + c + 0.5) * scale;
        const cy = (margin + r + 0.5) * scale;

        // Skip if inside center logo circle
        const dist = Math.sqrt((cx - centerPos) ** 2 + (cy - centerPos) ** 2);
        if (dist < centerRadius + scale * 0.3) {
          continue;
        }

        // Circular dot style
        const dotRadius = scale * 0.44;
        dotsSvg += `<circle cx="${cx}" cy="${cy}" r="${dotRadius}" fill="#000000" />\n`;
      }
    }
  }

  // Draw 3 finder patterns
  function drawFinder(rOffset, cOffset) {
    const x = (margin + cOffset) * scale;
    const y = (margin + rOffset) * scale;
    const s7 = 7 * scale;
    const s5 = 5 * scale;
    const s3 = 3 * scale;
    const p1 = 1 * scale;
    const p2 = 2 * scale;

    return `
      <!-- Finder Pattern at (${rOffset}, ${cOffset}) -->
      <rect x="${x}" y="${y}" width="${s7}" height="${s7}" rx="${scale * 0.8}" ry="${scale * 0.8}" fill="#000000" />
      <rect x="${x + p1}" y="${y + p1}" width="${s5}" height="${s5}" rx="${scale * 0.5}" ry="${scale * 0.5}" fill="#ffffff" />
      <rect x="${x + p2}" y="${y + p2}" width="${s3}" height="${s3}" rx="${scale * 0.3}" ry="${scale * 0.3}" fill="#000000" />
    `;
  }

  const findersSvg = `
    ${drawFinder(0, 0)}
    ${drawFinder(0, size - 7)}
    ${drawFinder(size - 7, 0)}
  `;

  // Center Emblem SVG (Warung Menteng Logo)
  const emblemSvg = `
    <!-- Center Emblem Group -->
    <g transform="translate(${centerPos}, ${centerPos})">
      <!-- White Backdrop Circle with subtle border -->
      <circle cx="0" cy="0" r="${centerRadius + 6}" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />
      
      <!-- Outer Ring of Logo -->
      <circle cx="0" cy="0" r="${centerRadius}" fill="#0e3e2f" stroke="#c59b27" stroke-width="4" />
      <circle cx="0" cy="0" r="${centerRadius - 5}" fill="#f8faf9" stroke="#b48c20" stroke-width="1.5" />
      
      <!-- Inner Background: Sky & Salak Mountain -->
      <defs>
        <clipPath id="emblem-clip">
          <circle cx="0" cy="0" r="${centerRadius - 7}" />
        </clipPath>
      </defs>
      
      <g clip-path="url(#emblem-clip)">
        <!-- Sky gradient -->
        <rect x="-150" y="-150" width="300" height="300" fill="#e0f2fe" />
        
        <!-- Mountains (Gunung Salak) -->
        <polygon points="-120,40 -40,-45 40,20 120,-30 150,50 -150,50" fill="#14532d" />
        <polygon points="-80,40 10,-35 80,30" fill="#166534" opacity="0.85" />
        <polygon points="-30,30 30,-25 90,40" fill="#15803d" opacity="0.7" />

        <!-- Green Terraced Rice Fields -->
        <ellipse cx="0" cy="50" rx="110" ry="35" fill="#22c55e" />
        <ellipse cx="0" cy="65" rx="120" ry="30" fill="#16a34a" />
        <ellipse cx="0" cy="80" rx="130" ry="25" fill="#15803d" />
        
        <!-- Traditional Sundanese Pavilion on Left -->
        <g transform="translate(-48, 15) scale(0.65)">
          <polygon points="0,-18 24,0 -24,0" fill="#78350f" />
          <rect x="-18" y="0" width="36" height="18" fill="#d97706" />
          <rect x="-12" y="5" width="8" height="13" fill="#451a03" />
          <rect x="4" y="5" width="8" height="13" fill="#451a03" />
          <line x1="-20" y1="18" x2="20" y2="18" stroke="#451a03" stroke-width="2" />
        </g>
        
        <!-- Golden Bird / Tugu Symbol in Center -->
        <g transform="translate(0, -2) scale(0.85)">
          <!-- Golden Wings / Flame -->
          <path d="M0,-32 C-14,-20 -18,-5 0,18 C18,-5 14,-20 0,-32 Z" fill="#eab308" stroke="#ca8a04" stroke-width="1.5" />
          <path d="M0,-24 C-8,-14 -10,-4 0,12 C10,-4 8,-14 0,-24 Z" fill="#facc15" />
          <circle cx="0" cy="-28" r="3.5" fill="#ca8a04" />
        </g>

        <!-- Lush Green Tea Leaves on Right -->
        <g transform="translate(45, 16) scale(0.7)">
          <path d="M0,15 C-15,5 -20,-15 0,-25 C20,-15 15,5 0,15 Z" fill="#15803d" />
          <path d="M0,15 L0,-25" stroke="#86efac" stroke-width="1.5" />
          <path d="M-12,8 C-25,2 -25,-12 -10,-20 C5,-12 0,2 -12,8 Z" fill="#22c55e" opacity="0.9" />
        </g>

        <!-- White Ribbon Banner for "WARUNG MENTENG" -->
        <rect x="-85" y="24" width="170" height="24" rx="5" fill="#ffffff" stroke="#0e3e2f" stroke-width="1.5" />
        <text x="0" y="40" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="900" font-size="12" fill="#0e3e2f" letter-spacing="1.2">WARUNG MENTENG</text>
        
        <!-- Subtext -->
        <text x="0" y="58" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="700" font-size="8" fill="#ffffff" letter-spacing="1">KEC. CIJERUK - BOGOR</text>
      </g>
    </g>
  `;

  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${imgSize}" height="${imgSize}" viewBox="0 0 ${imgSize} ${imgSize}" xmlns="http://www.w3.org/2000/svg">
  <!-- Clean White Background -->
  <rect width="${imgSize}" height="${imgSize}" fill="#ffffff" />
  
  <!-- QR Code Modules (Dots) -->
  ${dotsSvg}
  
  <!-- Finder Patterns -->
  ${findersSvg}
  
  <!-- Center Village Logo -->
  ${emblemSvg}
</svg>`;

  fs.writeFileSync('public/WarungMenteng.svg', svgContent);
  fs.writeFileSync('src/assets/images/WarungMenteng.svg', svgContent);

  // Convert to PNG using ImageMagick
  try {
    execSync(`convert -density 150 public/WarungMenteng.svg public/WarungMenteng.png`);
    execSync(`convert -density 150 src/assets/images/WarungMenteng.svg src/assets/images/WarungMenteng.png`);
    console.log('Successfully generated public/WarungMenteng.png and src/assets/images/WarungMenteng.png');
  } catch (err) {
    console.error('ImageMagick convert failed:', err);
  }
}

generate().catch(console.error);
