const QRCode = require('qrcode');
const { Jimp, rgbaToInt } = require('jimp');
const fs = require('fs');

const MAP_URL = 'https://maps.google.com/?q=Warung+Menteng+Cijeruk+Bogor';

async function main() {
  const WIDTH = 800;
  const qrBuffer = await QRCode.toBuffer(MAP_URL, {
    errorCorrectionLevel: 'H',
    width: WIDTH,
    margin: 3,
    color: {
      dark: '#000000',
      light: '#ffffff'
    }
  });

  const image = await Jimp.read(qrBuffer);
  const cx = WIDTH / 2;
  const cy = WIDTH / 2;
  const R_OUTER = 140;
  const R_BORDER = 148;

  // Colors
  const WHITE = { r: 255, g: 255, b: 255, a: 255 };
  const DARK_GREEN = { r: 14, g: 62, b: 47, a: 255 };
  const GOLD = { r: 202, g: 154, b: 39, a: 255 };
  const SKY_BLUE = { r: 224, g: 242, b: 254, a: 255 };
  const MOUNTAIN_DARK = { r: 20, g: 83, b: 45, a: 255 };
  const MOUNTAIN_MID = { r: 22, g: 101, b: 52, a: 255 };
  const GREEN_TERRACE = { r: 34, g: 197, b: 94, a: 255 };
  const GREEN_TERRACE_DARK = { r: 21, g: 128, b: 61, a: 255 };
  const BROWN = { r: 120, g: 53, b: 15, a: 255 };

  function setPixel(x, y, color) {
    if (x < 0 || x >= WIDTH || y < 0 || y >= WIDTH) return;
    const idx = (y * WIDTH + x) * 4;
    image.bitmap.data[idx] = color.r;
    image.bitmap.data[idx + 1] = color.g;
    image.bitmap.data[idx + 2] = color.b;
    image.bitmap.data[idx + 3] = color.a;
  }

  // Draw circular emblem in center
  for (let y = cy - R_BORDER - 5; y <= cy + R_BORDER + 5; y++) {
    for (let x = cx - R_BORDER - 5; x <= cx + R_BORDER + 5; x++) {
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= R_BORDER) {
        if (dist > R_OUTER + 2) {
          // White outer clearing to separate QR dots
          setPixel(x, y, WHITE);
        } else if (dist > R_OUTER) {
          // Thin subtle border
          setPixel(x, y, { r: 226, g: 232, b: 240, a: 255 });
        } else if (dist > R_OUTER - 6) {
          // Gold outer rim
          setPixel(x, y, GOLD);
        } else if (dist > R_OUTER - 14) {
          // Dark green circle
          setPixel(x, y, DARK_GREEN);
        } else if (dist > R_OUTER - 17) {
          // Inner gold ring
          setPixel(x, y, GOLD);
        } else {
          // Inside the circular emblem!
          // Normalized coordinates within inner circle (-1 to 1)
          const inR = R_OUTER - 17;
          const nx = dx / inR;
          const ny = dy / inR;

          // Default: Sky Blue
          let c = SKY_BLUE;

          // Gunung Salak (Mountains)
          // Mountain peak 1 at nx = -0.3, peak 2 at nx = 0.35
          const m1 = -0.4 + 0.9 * Math.abs(nx + 0.3);
          const m2 = -0.25 + 0.85 * Math.abs(nx - 0.35);
          const mLevel = Math.min(m1, m2);

          if (ny > mLevel && ny < 0.35) {
            c = (nx < 0) ? MOUNTAIN_DARK : MOUNTAIN_MID;
          }

          // Green terraced fields below mountain
          if (ny >= 0.35 && ny < 0.65) {
            c = (ny < 0.5) ? GREEN_TERRACE : GREEN_TERRACE_DARK;
          }

          // Bottom base: Dark Green
          if (ny >= 0.65) {
            c = DARK_GREEN;
          }

          // Golden emblem / tugu in center (-0.1 < nx < 0.1, -0.3 < ny < 0.25)
          if (Math.abs(nx) < 0.08 && ny > -0.28 && ny < 0.22) {
            c = GOLD;
          }
          if (Math.abs(nx) < 0.14 && ny > -0.12 && ny < 0.16) {
            const wingDist = Math.abs(nx) * 2 + Math.abs(ny);
            if (wingDist < 0.28) {
              c = GOLD;
            }
          }

          // Left Pavilion (Rumah Adat) at nx ~ -0.45, ny ~ 0.15
          if (nx > -0.65 && nx < -0.3 && ny > 0.05 && ny < 0.32) {
            // Roof triangle
            const roofH = 0.15 - (ny - 0.05);
            if (Math.abs(nx + 0.475) < 0.18 * (ny - 0.05) / 0.1) {
              c = BROWN;
            } else if (ny >= 0.15) {
              c = { r: 217, g: 119, b: 6, a: 255 }; // Amber walls
            }
          }

          // Right Tea Leaves at nx ~ 0.45, ny ~ 0.15
          if (nx > 0.3 && nx < 0.65 && ny > 0.05 && ny < 0.35) {
            const lDist = Math.sqrt((nx - 0.45) ** 2 + (ny - 0.2) ** 2);
            if (lDist < 0.14) {
              c = { r: 21, g: 128, b: 61, a: 255 };
            }
          }

          // White Banner for "WARUNG MENTENG"
          // Banner runs from ny = 0.22 to ny = 0.52, nx between -0.75 and 0.75
          if (ny >= 0.24 && ny <= 0.54 && Math.abs(nx) <= 0.72) {
            // Banner border
            if (ny < 0.26 || ny > 0.52 || Math.abs(nx) > 0.70) {
              c = DARK_GREEN;
            } else {
              c = WHITE;
            }
          }

          setPixel(x, y, c);
        }
      }
    }
  }

  // Write PNG files
  await image.write('public/WarungMenteng.png');
  await image.write('src/assets/images/WarungMenteng.png');
  console.log('Successfully wrote WarungMenteng.png to public and src/assets/images!');
}

main().catch(console.error);
