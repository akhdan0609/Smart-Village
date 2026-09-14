import React from 'react';

interface LogoKKNWigataProps {
  className?: string;
  size?: number | string;
}

export const LogoKKNWigata: React.FC<LogoKKNWigataProps> = ({ 
  className = 'w-12 h-12',
  size 
}) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <div 
      className={`relative rounded-full overflow-hidden shrink-0 select-none shadow-md ${className}`} 
      style={style}
    >
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full block"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Logo KKN Wigata Dharma Desa Warung Menteng 2026"
      >
        <defs>
          {/* Radial Gradient for Inner Medallion */}
          <radialGradient id="kknInnerGlow" cx="50%" cy="42%" r="55%">
            <stop offset="0%" stopColor="#4a0c18" />
            <stop offset="35%" stopColor="#320813" />
            <stop offset="70%" stopColor="#121828" />
            <stop offset="100%" stopColor="#080d1a" />
          </radialGradient>

          {/* Top Text Path: KKN DESA WARUNG MENTENG */}
          <path
            id="kknTopArc"
            d="M 66 250 A 184 184 0 1 1 434 250"
            fill="none"
          />

          {/* Bottom Text Path: WIGATA DHARMA */}
          <path
            id="kknBottomArc"
            d="M 76 272 A 186 186 0 0 0 424 272"
            fill="none"
          />

          {/* Single Feather Quill Pen */}
          <g id="kknSingleQuill">
            {/* Rachis / Spine */}
            <line x1="0" y1="-115" x2="0" y2="65" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            {/* Pen Nib at Bottom */}
            <path d="M -4 65 L 0 88 L 4 65 Z" fill="#ffffff" />
            <line x1="0" y1="65" x2="0" y2="80" stroke="#121828" strokeWidth="1.5" />

            {/* Feather Outer Vane */}
            <path
              d="M 0 -115 
                 C -26 -80 -44 -20 -40 25 
                 C -37 45 -18 60 0 65 
                 C 18 60 37 45 40 25 
                 C 44 -20 26 -80 0 -115 Z"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.6"
              strokeLinejoin="round"
            />

            {/* Left Vane Slits */}
            <path d="M -35 -4 L -12 -18" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M -37 14 L -10 0" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M -29 -38 L -12 -46" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />

            {/* Right Vane Slits */}
            <path d="M 35 -4 L 12 -18" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 37 14 L 10 0" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 29 -38 L 12 -46" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
          </g>

          {/* Inkwell Bottle */}
          <g id="kknInkwell">
            <rect x="-16" y="-32" width="32" height="7" rx="3" fill="none" stroke="#ffffff" strokeWidth="2.6" />
            <path d="M -11 -25 L -11 -20 L 11 -20 L 11 -25 Z" fill="none" stroke="#ffffff" strokeWidth="2.6" />
            <path d="M -11 -20 L -24 -2 L -21 16 L 21 16 L 24 -2 L 11 -20 Z" fill="none" stroke="#ffffff" strokeWidth="2.6" strokeLinejoin="round" />
            <rect x="-14" y="-3" width="28" height="12" rx="3" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.95" />
          </g>
        </defs>

        {/* Outer Dark Navy Base Circle */}
        <circle cx="250" cy="250" r="242" fill="#0d1424" stroke="#ffffff" strokeWidth="4.5" />
        <circle cx="250" cy="250" r="234" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />

        {/* Inner Separator Ring */}
        <circle cx="250" cy="250" r="168" fill="none" stroke="#ffffff" strokeWidth="3.5" />

        {/* Inner Radial Medallion Disc */}
        <circle cx="250" cy="250" r="166" fill="url(#kknInnerGlow)" />

        {/* Top Text: KKN DESA WARUNG MENTENG */}
        <text
          fill="#ffffff"
          fontFamily="'Montserrat', 'Arial Black', -apple-system, sans-serif"
          fontSize="23"
          fontWeight="800"
          letterSpacing="3.6"
        >
          <textPath href="#kknTopArc" startOffset="50%" textAnchor="middle">
            KKN DESA WARUNG MENTENG
          </textPath>
        </text>

        {/* Left Star ★ */}
        <g transform="translate(84, 294) rotate(-38)">
          <polygon points="0,-9 2.7,-2.7 9,-2.7 4,1.8 5.8,8 0,4.2 -5.8,8 -4,1.8 -9,-2.7 -2.7,-2.7" fill="#ffffff" />
        </g>

        {/* Right Star ★ */}
        <g transform="translate(416, 294) rotate(38)">
          <polygon points="0,-9 2.7,-2.7 9,-2.7 4,1.8 5.8,8 0,4.2 -5.8,8 -4,1.8 -9,-2.7 -2.7,-2.7" fill="#ffffff" />
        </g>

        {/* Bottom Text: WIGATA DHARMA */}
        <text
          fill="#ffffff"
          fontFamily="'Montserrat', 'Arial Black', -apple-system, sans-serif"
          fontSize="35"
          fontWeight="900"
          letterSpacing="5.5"
        >
          <textPath href="#kknBottomArc" startOffset="50%" textAnchor="middle">
            WIGATA DHARMA
          </textPath>
        </text>

        {/* Central Halo Ring (behind pens) */}
        <circle cx="250" cy="236" r="68" fill="none" stroke="#ffffff" strokeWidth="2.2" opacity="0.95" />

        {/* Crossed Quills */}
        <g transform="translate(250, 236) rotate(-28)">
          <use href="#kknSingleQuill" />
        </g>
        <g transform="translate(250, 236) rotate(28)">
          <use href="#kknSingleQuill" />
        </g>

        {/* Left & Right Inkwells */}
        <g transform="translate(191, 268) rotate(-4)">
          <use href="#kknInkwell" />
        </g>
        <g transform="translate(309, 268) rotate(4)">
          <use href="#kknInkwell" />
        </g>

        {/* Wireframe Globe */}
        <g transform="translate(250, 298)">
          <circle cx="0" cy="0" r="20" fill="#0d1424" stroke="#ffffff" strokeWidth="2.5" />
          <ellipse cx="0" cy="0" rx="8.5" ry="20" fill="none" stroke="#ffffff" strokeWidth="1.8" />
          <line x1="0" y1="-20" x2="0" y2="20" stroke="#ffffff" strokeWidth="1.8" />
          <line x1="-20" y1="0" x2="20" y2="0" stroke="#ffffff" strokeWidth="1.8" />
          <path d="M -17 -8 Q 0 -5 17 -8" fill="none" stroke="#ffffff" strokeWidth="1.5" />
          <path d="M -17 8 Q 0 5 17 8" fill="none" stroke="#ffffff" strokeWidth="1.5" />
        </g>

        {/* Digital Tech Circuit Board Lines */}
        <g stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Left Branch */}
          <path d="M 230 298 L 209 298 L 199 286 L 199 284" />
          <path d="M 209 298 L 201 308 L 174 308" />
          <path d="M 193 308 L 185 317 L 167 317" />
          <circle cx="174" cy="308" r="3.2" fill="#ffffff" />
          <circle cx="167" cy="317" r="3.2" fill="#ffffff" />

          {/* Right Branch */}
          <path d="M 270 298 L 291 298 L 301 286 L 301 284" />
          <path d="M 291 298 L 299 308 L 326 308" />
          <path d="M 307 308 L 315 317 L 333 317" />
          <circle cx="326" cy="308" r="3.2" fill="#ffffff" />
          <circle cx="333" cy="317" r="3.2" fill="#ffffff" />
        </g>

        {/* Year text: • 2026 • */}
        <text
          x="250"
          y="346"
          fill="#ffffff"
          fontFamily="'Montserrat', -apple-system, sans-serif"
          fontSize="18"
          fontWeight="800"
          letterSpacing="3.5"
          textAnchor="middle"
        >
          • 2026 •
        </text>
      </svg>
    </div>
  );
};

export default LogoKKNWigata;
