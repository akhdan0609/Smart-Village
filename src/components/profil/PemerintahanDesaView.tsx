import React, { useState } from 'react';
import {
  Landmark,
  Users,
  X,
  ShieldCheck,
  GraduationCap,
  FileText,
  CheckCircle2,
  Leaf
} from 'lucide-react';
import { PERANGKAT_DESA_LIST } from '../../data/mockData';
import { PerangkatDesa, PageRoute } from '../../types';

// Images
import panoramaImg from '../../assets/images/desa_cijeruk_panorama_1789390926013.jpg';
import kadesPortrait from '../../assets/images/kades_portrait_1789390945641.jpg';
import pMale1 from '../../assets/images/perangkat_desa_male_1789390956915.jpg';
import pMale2 from '../../assets/images/perangkat_desa_two_1789390973775.jpg';
import pMale3 from '../../assets/images/perangkat_desa_three_1789390988234.jpg';

interface PemerintahanDesaViewProps {
  onNavigate?: (page: PageRoute, params?: any) => void;
}

// Decorative Corner Leaf Accent matching user reference
const CornerLeafBadge: React.FC = () => (
  <div className="absolute top-0 left-0 w-8 h-8 pointer-events-none overflow-hidden rounded-tl-2xl z-10">
    <div className="w-12 h-12 bg-gradient-to-br from-[#194432] via-[#20533e] to-transparent -translate-x-4 -translate-y-4 rounded-full flex items-center justify-center">
      <Leaf className="w-3.5 h-3.5 text-emerald-200 translate-x-1 translate-y-1 opacity-90" />
    </div>
  </div>
);

// Botanical Leaf Silhouette SVG for soft backgrounds
const BotanicalLeafDecoration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    className={`pointer-events-none text-emerald-800/10 ${className}`}
  >
    <path d="M50 0 C65 25 80 40 100 50 C75 65 60 80 50 100 C35 75 20 60 0 50 C25 35 40 20 50 0 Z" />
    <path d="M50 0 Q50 100 50 100" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

export const PemerintahanDesaView: React.FC<PemerintahanDesaViewProps> = () => {
  const [selectedOfficial, setSelectedOfficial] = useState<PerangkatDesa | null>(null);

  // Helper to map official to matching portrait photo
  const getOfficialPhoto = (id: string, fallback: string): string => {
    if (id === 'kades-1') return kadesPortrait;
    if (id === 'sekdes-1') return pMale1;
    if (id === 'kaur-keu-1') return pMale2;
    if (id === 'kasi-pem-1') return pMale3;
    if (id === 'kasi-kesejahteraan-1') return pMale1;
    if (id === 'kasi-pelayanan-1') return pMale2;
    if (id === 'kaur-rencana-1') return pMale3;
    if (id === 'kaur-umum-1') return pMale1;
    if (id === 'kadus-1') return pMale2;
    if (id === 'kadus-2') return pMale3;
    if (id === 'kadus-3') return pMale1;
    return fallback;
  };

  const findOfficial = (id: string): PerangkatDesa => {
    return PERANGKAT_DESA_LIST.find((p) => p.id === id) || PERANGKAT_DESA_LIST[0];
  };

  // Structured Officials exactly matching the reference screenshot
  const kades = findOfficial('kades-1');
  const sekdes = findOfficial('sekdes-1');

  const rowOfficials = [
    {
      person: findOfficial('kaur-keu-1'),
      badge: 'Bendahara Desa',
      name: 'Nasrudin',
      photoId: 'kaur-keu-1'
    },
    {
      person: findOfficial('kasi-pem-1'),
      badge: 'Kasi Pemerintahan',
      name: 'M. Fajar Sandika',
      photoId: 'kasi-pem-1'
    },
    {
      person: findOfficial('kasi-kesejahteraan-1'),
      badge: 'Kasi Kesra',
      name: 'M. Risman',
      photoId: 'kasi-kesejahteraan-1'
    },
    {
      person: findOfficial('kasi-pelayanan-1'),
      badge: 'Kasi Pelayanan',
      name: 'M. Alwi Farhan Jamil',
      photoId: 'kasi-pelayanan-1'
    },
    {
      person: findOfficial('kaur-rencana-1'),
      badge: 'Kasi Perencanaan',
      name: 'M. Farhan Maulana',
      photoId: 'kaur-rencana-1'
    },
    {
      person: findOfficial('kaur-umum-1'),
      badge: 'Kasi TUTR',
      name: 'M. Rizky Saefah',
      photoId: 'kaur-umum-1'
    }
  ];

  const kadusList = [
    {
      person: findOfficial('kadus-1'),
      badge: 'Kadus 1',
      name: 'Bagus Hadi',
      photoId: 'kadus-1'
    },
    {
      person: findOfficial('kadus-2'),
      badge: 'Kadus 2',
      name: 'Rahmat Setiyono',
      photoId: 'kadus-2'
    },
    {
      person: findOfficial('kadus-3'),
      badge: 'Kadus 3',
      name: 'Diki Mahardika',
      photoId: 'kadus-3'
    }
  ];

  return (
    <div className="bg-[#eef5f0] text-slate-800 font-sans min-h-screen relative pb-16 overflow-x-hidden">
      
      {/* ========================================================
          HERO & HEADER BANNER (EXACT REPLICA OF SCREENSHOT)
          ======================================================== */}
      <div className="relative w-full bg-[#1b4835] overflow-hidden">
        
        {/* Landscape Panoramic Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={panoramaImg}
            alt="Pemandangan Desa Warung Menteng & Pegunungan Salak"
            className="w-full h-full object-cover object-top opacity-85"
          />
          {/* Subtle overlay gradient to match the screenshot atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#173e2d]/90 via-[#173e2d]/30 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b4835] via-transparent to-transparent" />
        </div>

        {/* Decorative Green Organic Wave Borders on Left and Edges */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#163f2d]/80 rounded-full blur-3xl pointer-events-none -translate-x-20 -translate-y-20 z-0" />
        <div className="absolute top-4 left-6 sm:left-12 pointer-events-none opacity-25 z-0">
          <BotanicalLeafDecoration className="w-32 h-32 text-white" />
        </div>

        {/* Top Header Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Left: Badge, Title & Subtitle */}
          <div className="space-y-2">
            {/* Profil Desa Pill Badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#173f2e] text-white text-xs font-semibold px-3.5 py-1 rounded-full shadow-md border border-emerald-500/30">
              <Landmark className="w-3.5 h-3.5 text-emerald-300" />
              <span>Profil Desa</span>
            </div>

            {/* Main Headline: Struktur Organisasi */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white sm:text-[#f8faf9] tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              Struktur Organisasi
            </h1>

            {/* Subtitle */}
            <div className="pt-0.5">
              <p className="text-sm sm:text-base font-semibold text-emerald-100 drop-shadow-sm">
                Pemerintahan Desa Warung Menteng
              </p>
              {/* Short Green Underline */}
              <div className="w-14 h-1 bg-emerald-400 rounded-full mt-2 shadow-xs" />
            </div>
          </div>

          {/* Right: Cursive Slogan "Bersama Membangun Desa yang Lebih Baik" */}
          <div className="md:text-right">
            <p className="font-serif italic text-white text-lg sm:text-2xl lg:text-[26px] tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] font-medium">
              &ldquo;Bersama Membangun Desa yang Lebih Baik&rdquo;
            </p>
          </div>
        </div>

        {/* Organic Curved Cutout Wave at Bottom of Hero */}
        <div className="relative w-full h-8 sm:h-12 overflow-hidden z-10">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-full text-[#eef5f0]"
          >
            <path
              d="M0,0 C360,70 1080,70 1440,0 L1440,80 L0,80 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* ========================================================
          MAIN ORGANIZATIONAL CHART CONTAINER
          ======================================================== */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 -mt-4 sm:-mt-6 relative z-20">
        <div className="bg-gradient-to-b from-[#fbfdfc] via-[#f5faf7] to-[#ecf6f0] rounded-3xl border-2 border-emerald-200/90 shadow-xl p-4 sm:p-8 lg:p-10 relative overflow-hidden">
          
          {/* Subtle Background Watermark Leaf Decors */}
          <BotanicalLeafDecoration className="absolute top-6 left-6 w-44 h-44 opacity-20 -rotate-45" />
          <BotanicalLeafDecoration className="absolute top-1/3 right-6 w-52 h-52 opacity-20 rotate-45" />
          <BotanicalLeafDecoration className="absolute bottom-6 left-12 w-48 h-48 opacity-20 rotate-12" />
          <BotanicalLeafDecoration className="absolute bottom-6 right-12 w-40 h-40 opacity-20 -rotate-12" />

          {/* Interactive Hint */}
          <div className="text-center mb-6">
            <span className="inline-block text-[11px] font-medium text-emerald-800/80 bg-emerald-100/70 border border-emerald-200 px-3 py-1 rounded-full">
              Klik pada kartu perangkat desa untuk melihat informasi profil & tupoksi
            </span>
          </div>

          <div className="relative z-10">
            
            {/* ----------------------------------------------------
                LEVEL 1: KEPALA DESA (TOP CENTER)
                ---------------------------------------------------- */}
            <div className="flex flex-col items-center">
              <button
                type="button"
                onClick={() => setSelectedOfficial(kades)}
                className="bg-white rounded-2xl border border-emerald-200/90 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all p-3 sm:py-3.5 sm:px-5 flex items-center gap-4 w-fit min-w-[280px] sm:min-w-[320px] max-w-sm relative group cursor-pointer text-left"
              >
                <CornerLeafBadge />

                {/* Circular Photo */}
                <div className="relative">
                  <img
                    src={getOfficialPhoto('kades-1', kades.fotoUrl)}
                    alt={kades.nama}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover object-top border-2 border-emerald-600 shrink-0 shadow-xs group-hover:scale-105 transition-transform"
                  />
                </div>

                {/* Badge & Name */}
                <div className="space-y-1">
                  <div className="bg-[#184631] text-white text-[11px] sm:text-xs font-semibold px-3 py-0.5 rounded-full w-fit shadow-2xs">
                    Kepala Desa
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-800 leading-snug group-hover:text-[#184631] transition-colors">
                    A. Zaenal Arifin S.ag
                  </h3>
                </div>
              </button>

              {/* Vertical Connector: Kepala Desa -> Sekretaris Desa */}
              <div className="w-0.5 h-8 sm:h-10 bg-[#184631]" />
            </div>

            {/* ----------------------------------------------------
                LEVEL 2: SEKRETARIS DESA (CENTER)
                ---------------------------------------------------- */}
            <div className="flex flex-col items-center">
              <button
                type="button"
                onClick={() => setSelectedOfficial(sekdes)}
                className="bg-white rounded-2xl border border-emerald-200/90 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all p-3 sm:py-3.5 sm:px-5 flex items-center gap-4 w-fit min-w-[280px] sm:min-w-[320px] max-w-sm relative group cursor-pointer text-left"
              >
                <CornerLeafBadge />

                {/* Circular Photo */}
                <div className="relative">
                  <img
                    src={getOfficialPhoto('sekdes-1', sekdes.fotoUrl)}
                    alt={sekdes.nama}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover object-top border-2 border-emerald-600 shrink-0 shadow-xs group-hover:scale-105 transition-transform"
                  />
                </div>

                {/* Badge & Name */}
                <div className="space-y-1">
                  <div className="bg-[#184631] text-white text-[11px] sm:text-xs font-semibold px-3 py-0.5 rounded-full w-fit shadow-2xs">
                    Sekretaris Desa
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-800 leading-snug group-hover:text-[#184631] transition-colors">
                    Agil Asmi Farizi S.H
                  </h3>
                </div>
              </button>

              {/* Vertical Connector: Sekretaris Desa -> Horizontal Tree Bar */}
              <div className="w-0.5 h-8 sm:h-10 bg-[#184631]" />
            </div>

            {/* ----------------------------------------------------
                LEVEL 3: HORIZONTAL TREE ROW (6 DIVISION HEADS)
                Bendahara Desa | Kasi Pemerintahan | Kasi Kesra | 
                Kasi Pelayanan | Kasi Perencanaan | Kasi TUTR
                ---------------------------------------------------- */}
            <div className="relative mt-0">
              
              {/* Connector Lines for Level 3 on Large Screens */}
              <div className="hidden lg:block relative w-full mb-0">
                {/* Horizontal Spanning Branch Line */}
                <div className="mx-[8%] border-t-2 border-[#184631]" />
                
                {/* 6 Vertical Drop Pins aligned with the 6 columns */}
                <div className="grid grid-cols-6 gap-3 sm:gap-4 px-1">
                  {[0, 1, 2, 3, 4, 5].map((idx) => (
                    <div key={idx} className="flex justify-center">
                      <div className="w-0.5 h-6 bg-[#184631]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsive Grid of the 6 Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                {rowOfficials.map((item, idx) => {
                  const photoSrc = getOfficialPhoto(item.photoId, item.person.fotoUrl);
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedOfficial(item.person)}
                      className="bg-white border border-emerald-200/90 rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all flex flex-col items-center text-center relative group cursor-pointer"
                    >
                      <CornerLeafBadge />

                      {/* Photo */}
                      <div className="relative mt-1">
                        <img
                          src={photoSrc}
                          alt={item.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover object-top border-2 border-emerald-600 shadow-xs group-hover:scale-105 transition-transform"
                        />
                      </div>

                      {/* Dark Green Pill Badge */}
                      <div className="bg-[#184631] text-white text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-full mt-2.5 whitespace-nowrap shadow-2xs">
                        {item.badge}
                      </div>

                      {/* Name */}
                      <h4 className="font-bold text-slate-800 text-xs sm:text-[13px] mt-1.5 leading-snug group-hover:text-[#184631] transition-colors">
                        {item.name}
                      </h4>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ----------------------------------------------------
                LEVEL 4: KADUS (KEPALA DUSUN) SECTION
                Connected from tree bottom to 3 Dusun heads
                ---------------------------------------------------- */}
            <div className="mt-8 flex flex-col items-center">
              
              {/* Vertical Connector from Level 3 to Kadus Pill */}
              <div className="w-0.5 h-6 sm:h-8 bg-[#184631]" />

              {/* Kadus Header Badge */}
              <div className="inline-flex items-center justify-center gap-2 bg-[#184631] text-white text-xs sm:text-sm font-bold px-6 py-1.5 rounded-full shadow-sm">
                <Users className="w-4 h-4 text-emerald-300" />
                <span>Kadus</span>
              </div>

              {/* Vertical Connector from Kadus Pill to Kadus Branch */}
              <div className="w-0.5 h-6 bg-[#184631]" />

              {/* Kadus Branch Line & Vertical Pins */}
              <div className="w-full max-w-lg hidden sm:block">
                <div className="mx-[16%] border-t-2 border-[#184631]" />
                <div className="grid grid-cols-3">
                  {[0, 1, 2].map((idx) => (
                    <div key={idx} className="flex justify-center">
                      <div className="w-0.5 h-5 bg-[#184631]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* 3 Kadus Cards */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-6 w-full max-w-2xl mt-1">
                {kadusList.map((k, idx) => {
                  const photoSrc = getOfficialPhoto(k.photoId, k.person.fotoUrl);
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedOfficial(k.person)}
                      className="bg-white border border-emerald-200/90 rounded-2xl p-3 sm:p-4 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all flex flex-col items-center text-center w-36 sm:w-44 relative group cursor-pointer"
                    >
                      <CornerLeafBadge />

                      {/* Photo */}
                      <div className="relative mt-1">
                        <img
                          src={photoSrc}
                          alt={k.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover object-top border-2 border-emerald-600 shadow-xs group-hover:scale-105 transition-transform"
                        />
                      </div>

                      {/* Name */}
                      <h4 className="font-bold text-slate-800 text-xs sm:text-sm mt-2 leading-snug group-hover:text-[#184631] transition-colors">
                        {k.name}
                      </h4>

                      {/* Soft Mint Pill Badge */}
                      <div className="bg-emerald-100/90 text-[#184631] border border-emerald-300/60 text-[11px] font-bold px-3 py-0.5 rounded-full mt-1.5 shadow-2xs">
                        {k.badge}
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      </main>

      {/* ========================================================
          MODAL DETAIL PERANGKAT DESA
          ======================================================== */}
      {selectedOfficial && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn"
          onClick={() => setSelectedOfficial(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-emerald-200 animate-scaleUp text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#173e2d] to-[#1e503b] text-white p-6 relative">
              <button
                onClick={() => setSelectedOfficial(null)}
                aria-label="Tutup modal"
                className="absolute top-4 right-4 text-emerald-200 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4">
                <img
                  src={getOfficialPhoto(selectedOfficial.id, selectedOfficial.fotoUrl)}
                  alt={selectedOfficial.nama}
                  className="w-20 h-20 rounded-full object-cover border-2 border-emerald-400 shadow-md bg-white shrink-0"
                />
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-700/80 text-emerald-100 border border-emerald-500/40 mb-1">
                    {selectedOfficial.jabatan}
                  </span>
                  <h3 className="text-xl font-bold leading-snug">
                    {selectedOfficial.nama}
                  </h3>
                  {selectedOfficial.nip && (
                    <p className="text-xs text-emerald-200 font-mono mt-0.5">
                      NIP: {selectedOfficial.nip}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 text-sm">
              {/* Profile Details */}
              <div className="grid grid-cols-2 gap-3 bg-[#f6faf7] p-3.5 rounded-2xl border border-emerald-100">
                <div className="flex items-center gap-2 text-slate-700">
                  <GraduationCap className="w-4 h-4 text-emerald-700 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-600 block">Pendidikan Terakhir</span>
                    <span className="font-semibold text-xs text-slate-800">
                      {selectedOfficial.pendidikan || 'Pendidikan Tinggi'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-600 block">Status Jabatan</span>
                    <span className="font-semibold text-xs text-slate-800">
                      Perangkat Desa Aktif
                    </span>
                  </div>
                </div>
              </div>

              {/* Tugas Pokok & Fungsi */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-800 text-xs tracking-wider uppercase flex items-center gap-1.5 text-emerald-900">
                  <FileText className="w-4 h-4 text-emerald-700" />
                  <span>Tugas Pokok & Fungsi (Tupoksi)</span>
                </h4>
                <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 text-slate-700 text-xs sm:text-sm leading-relaxed">
                  {selectedOfficial.tupoksi ||
                    'Melaksanakan tugas pemerintahan desa dan memberikan pelayanan prima kepada masyarakat Desa Warung Menteng sesuai dengan peraturan perundang-undangan.'}
                </div>
              </div>

              {/* Key Responsibilities Bullet List */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-800 text-xs tracking-wider uppercase flex items-center gap-1.5 text-emerald-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Fokus Pelayanan</span>
                </h4>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                  <li>Pelayanan administrasi warga yang transparan dan bebas pungli.</li>
                  <li>Koordinasi aktif bersama lembaga RT/RW dan masyarakat.</li>
                  <li>Mendukung keterbukaan informasi dan digitalisasi Desa Warung Menteng.</li>
                </ul>
              </div>

              {/* Modal Footer Button */}
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedOfficial(null)}
                  className="px-5 py-2.5 rounded-full bg-[#173e2d] hover:bg-[#1f533d] text-white font-bold text-xs transition-colors cursor-pointer shadow-sm"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PemerintahanDesaView;
