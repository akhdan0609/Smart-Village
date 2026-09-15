import React, { useState } from 'react';
import { 
  Building2, 
  Clock, 
  MapPin, 
  Home, 
  Landmark, 
  Users, 
  Trees, 
  Eye, 
  Target, 
  ListOrdered, 
  BookOpen, 
  Compass, 
  Sparkles, 
  Store, 
  Sprout, 
  Coffee, 
  User, 
  UserCheck, 
  ChevronRight, 
  Maximize2, 
  X, 
  Plus, 
  Minus, 
  Camera, 
  Layers, 
  ChevronLeft, 
  Info,
  Calendar,
  Phone,
  FileText,
  QrCode,
  ExternalLink,
  Download
} from 'lucide-react';
import { PageRoute } from '../../types';

// Asset Images
import heroBannerImg from '../../assets/images/tentang_desa_hero_1789110414479.jpg';
import curugImg from '../../assets/images/curug_menteng_1789110427235.jpg';
import rumahAdatImg from '../../assets/images/rumah_adat_sunda_1788955442032.jpg';
import budayaImg from '../../assets/images/tradisi_budaya_lokal_1788955478016.jpg';
import potensiHeroImg from '../../assets/images/potensi_hero_banner_1788325154234.jpg';
import warungMentengMapImg from '../../assets/images/WarungMenteng.png';
import warungMentengQrSvg from '../../assets/images/WarungMenteng.svg';

interface TentangDesaViewProps {
  onNavigate?: (page: PageRoute, params?: any) => void;
}

export const TentangDesaView: React.FC<TentangDesaViewProps> = ({ onNavigate }) => {
  // Modals state
  const [modalSejarahOpen, setModalSejarahOpen] = useState(false);
  const [modalPetaOpen, setModalPetaOpen] = useState(false);
  const [modalStrukturOpen, setModalStrukturOpen] = useState(false);

  // Map interactive state
  const [mapZoom, setMapZoom] = useState(1);
  const [mapLayer, setMapLayer] = useState<'streets' | 'topo'>('streets');

  const handleNav = (page: PageRoute, params?: any) => {
    if (onNavigate) {
      onNavigate(page, params);
    }
  };

  // Gallery Photos
  const galleryPhotos = [
    {
      url: potensiHeroImg,
      title: 'Panorama Alam & Lembah Persawahan Warung Menteng',
      desc: 'Keindahan perbukitan hijau dan persawahan terasering yang subur di lereng Gunung Salak'
    },
    {
      url: rumahAdatImg,
      title: 'Balai Warga & Rumah Tradisional Sunda',
      desc: 'Pusat musyawarah mufakat warga dengan arsitektur panggung warisan leluhur Sunda'
    },
    {
      url: budayaImg,
      title: 'Kesenian Tradisional & Tari Jaipong Cijeruk',
      desc: 'Pelestarian seni budaya tradisional yang rutin ditampilkan pada perayaan desa'
    },
    {
      url: curugImg,
      title: 'Wisata Air Terjun Curug Menteng',
      desc: 'Pesona air terjun alami dengan air pegunungan jernih dan udara sejuk pegunungan'
    }
  ];

  return (
    <div className="bg-[#f0f4f1] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <div className="relative w-full overflow-hidden bg-emerald-950 min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] flex items-center">
        {/* Background Panorama Image */}
        <img
          src={heroBannerImg}
          alt="Pemandangan Alam Desa Warung Menteng"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Soft misty gradient overlay on left for readable high-contrast typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 sm:via-white/75 to-transparent lg:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent hidden sm:block" />

        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            
            {/* Left Column: Heading & Description */}
            <div className="max-w-xl space-y-3 sm:space-y-4">
              {/* Script Accent Subtitle */}
              <p className="font-['Caveat',cursive] text-2xl sm:text-3xl text-amber-600 font-bold tracking-wide">
                Mengenal Lebih Dekat
              </p>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e3e2f] tracking-tight leading-[1.15]">
                Tentang Desa<br />
                Warung Menteng
              </h1>

              {/* Description Paragraph */}
              <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg font-normal">
                Desa Warung Menteng adalah desa yang berada di Kecamatan Cijeruk, Kabupaten Bogor. Desa ini memiliki potensi alam, budaya, dan masyarakat yang hidup rukun dalam keberagaman.
              </p>

              {/* Primary Action Button */}
              <div className="pt-2 flex items-center">
                <button
                  onClick={() => handleNav('profil-desa')}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-[#0e3e2f] hover:bg-[#0a2f23] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
                >
                  <Building2 className="w-4 h-4 text-emerald-300" />
                  <span>Halaman Profil Desa</span>
                  <ChevronRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Side: Tilted Slogan Tagline */}
            <div className="hidden lg:flex flex-col items-end pr-8 select-none">
              <div className="rotate-[-5deg] text-right space-y-0.5 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                <p className="font-['Caveat',cursive] text-3xl xl:text-4xl text-white font-bold tracking-wider">
                  Desa Maju
                </p>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-2xl xl:text-3xl text-white font-black tracking-tight">
                  Masyarakat Sejahtera
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT BODY */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-5 sm:space-y-6">
        
        {/* ROW 1: 2 Landscape Feature Cards (Visi & Misi Desa + Peta Desa) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          
          {/* Card 1: Visi & Misi Desa */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5 text-[#0e3e2f]">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#0e3e2f] flex items-center justify-center shrink-0">
                    <Eye className="w-5 h-5 text-emerald-800" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg tracking-tight text-[#0e3e2f]">
                      Visi & Misi Desa
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Pedoman & Arah Pembangunan Desa Warung Menteng
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                {/* Visi */}
                <div className="space-y-2 p-3.5 sm:p-4 rounded-xl bg-emerald-50/60 border border-emerald-100/90 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 font-bold text-[#0e3e2f] text-xs sm:text-sm">
                      <Target className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Visi Desa</span>
                    </div>
                    <p className="text-slate-700 italic leading-relaxed text-xs sm:text-[12.5px] bg-white/80 p-3 rounded-lg border border-emerald-100/80 shadow-2xs">
                      "Terwujudnya Desa Warung Menteng yang maju, mandiri, sejahtera, dan berakhlak mulia dengan memanfaatkan potensi lokal serta partisipasi aktif masyarakat."
                    </p>
                  </div>
                  <div className="pt-2 text-[10.5px] text-emerald-800/80 font-medium">
                    Fokus: Kemandirian, Kesejahteraan & Partisipasi Warga
                  </div>
                </div>

                {/* Misi */}
                <div className="space-y-2 p-3.5 sm:p-4 rounded-xl bg-slate-50/90 border border-slate-100">
                  <div className="flex items-center gap-2 font-bold text-[#0e3e2f] text-xs sm:text-sm">
                    <ListOrdered className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Misi Desa</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#0e3e2f] text-white text-[9px] flex items-center justify-center shrink-0 mt-0.5 font-bold">1</span>
                      <span>Meningkatkan kualitas pelayanan publik.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#0e3e2f] text-white text-[9px] flex items-center justify-center shrink-0 mt-0.5 font-bold">2</span>
                      <span>Mengembangkan potensi ekonomi desa.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#0e3e2f] text-white text-[9px] flex items-center justify-center shrink-0 mt-0.5 font-bold">3</span>
                      <span>Meningkatkan sarana dan prasarana desa.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#0e3e2f] text-white text-[9px] flex items-center justify-center shrink-0 mt-0.5 font-bold">4</span>
                      <span>Melestarikan lingkungan hidup & budaya lokal.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#0e3e2f] text-white text-[9px] flex items-center justify-center shrink-0 mt-0.5 font-bold">5</span>
                      <span>Meningkatkan kesejahteraan masyarakat.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Peta Desa */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5 text-[#0e3e2f]">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#0e3e2f] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-800" />
                  </div>
                  <div>
                    <h2 className="font-bold text-base sm:text-lg tracking-tight text-[#0e3e2f]">
                      Peta Desa
                    </h2>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Peta Interaktif Wilayah & Letak Geografis
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-100">
                  Kec. Cijeruk
                </span>
              </div>

              {/* Stylized Barcode Viewport - Matching Lihat Barcode */}
              <div 
                onClick={() => setModalPetaOpen(true)}
                className="relative w-full h-52 sm:h-56 rounded-xl bg-gradient-to-b from-slate-50 to-emerald-50/50 border border-emerald-100 overflow-hidden flex items-center justify-center p-3 group cursor-pointer select-none shadow-xs"
              >
                {/* White card framing the QR barcode */}
                <div 
                  className="bg-white p-3 rounded-xl border border-emerald-200/90 shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                  style={{ transform: `scale(${mapZoom})` }}
                >
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent('https://maps.app.goo.gl/y4hKRrMnF5d28LQz9')}`}
                    alt="Barcode Peta Digital Desa Warung Menteng"
                    className="w-28 h-28 sm:w-32 sm:h-32 object-contain rounded-md"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = warungMentengQrSvg;
                    }}
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Badge Overlay */}
                <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs flex items-center gap-1.5 pointer-events-none">
                  <QrCode className="w-3.5 h-3.5 text-emerald-700" />
                  <span className="text-[10px] font-bold text-slate-800">Scan Peta Digital</span>
                </div>

                {/* Zoom Controls */}
                <div className="absolute bottom-3 right-3 flex flex-col bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => setMapZoom(prev => Math.min(prev + 0.2, 1.8))}
                    className="w-7 h-7 flex items-center justify-center text-slate-700 hover:bg-slate-100 border-b border-slate-200 text-xs font-bold cursor-pointer"
                    aria-label="Zoom In"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setMapZoom(prev => Math.max(prev - 0.2, 0.8))}
                    className="w-7 h-7 flex items-center justify-center text-slate-700 hover:bg-slate-100 text-xs font-bold cursor-pointer"
                    aria-label="Zoom Out"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => setModalPetaOpen(true)}
                className="flex-1 py-2.5 px-4 rounded-xl border border-[#0e3e2f] text-[#0e3e2f] hover:bg-emerald-50 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                <BookOpen className="w-4 h-4 text-emerald-700" />
                <span>Lihat Peta Lengkap</span>
              </button>
              <a
                href="https://maps.app.goo.gl/y4hKRrMnF5d28LQz9"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-xs cursor-pointer active:scale-[0.99]"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Google Maps</span>
              </a>
            </div>
          </div>

        </div>

        {/* ROW 2: 3 Cards Aligned Symmetrically (Sejarah Desa, Potensi Desa, Galeri Desa) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          
          {/* Card 3: Sejarah Desa */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3.5">
              <div className="flex items-center gap-2.5 text-[#0e3e2f] pb-3 border-b border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0e3e2f] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-emerald-800" />
                </div>
                <div>
                  <h2 className="font-bold text-sm sm:text-base tracking-tight text-[#0e3e2f]">
                    Sejarah Desa
                  </h2>
                  <p className="text-[10.5px] text-slate-500 font-medium">Garis Waktu Perjalanan</p>
                </div>
              </div>

              {/* Vertical Timeline */}
              <div className="relative pl-6 space-y-4 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-emerald-600">
                {/* Node 1 */}
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-white border-3 border-emerald-600 flex items-center justify-center" />
                  <div className="space-y-0.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#0e3e2f] text-white text-[10px] font-bold tracking-wide">
                      Tahun 1960
                    </span>
                    <h4 className="text-xs font-bold text-slate-800">
                      Awal Berdirinya Desa
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Desa Warung Menteng resmi berdiri sebagai bagian dari wilayah Kecamatan Cijeruk.
                    </p>
                  </div>
                </div>

                {/* Node 2 */}
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-white border-3 border-emerald-600 flex items-center justify-center" />
                  <div className="space-y-0.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#0e3e2f] text-white text-[10px] font-bold tracking-wide">
                      Tahun 1983
                    </span>
                    <h4 className="text-xs font-bold text-slate-800">
                      Perkembangan Infrastruktur
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Pembangunan jalan desa dan fasilitas umum mulai dilakukan secara bertahap.
                    </p>
                  </div>
                </div>

                {/* Node 3 */}
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-white border-3 border-emerald-600 flex items-center justify-center" />
                  <div className="space-y-0.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#0e3e2f] text-white text-[10px] font-bold tracking-wide">
                      Tahun 2005
                    </span>
                    <h4 className="text-xs font-bold text-slate-800">
                      Pemekaran Wilayah
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Terjadi beberapa penyesuaian batas wilayah dan peningkatan pelayanan administrasi desa.
                    </p>
                  </div>
                </div>

                {/* Node 4 */}
                <div className="relative">
                  <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-white border-3 border-emerald-600 flex items-center justify-center" />
                  <div className="space-y-0.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#0e3e2f] text-white text-[10px] font-bold tracking-wide">
                      Tahun 2015 - Sekarang
                    </span>
                    <h4 className="text-xs font-bold text-slate-800">
                      Desa Menuju Mandiri
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Dengan dukungan masyarakat dan pemerintah, Desa Warung Menteng terus berkembang.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Link Button */}
            <div className="pt-3 border-t border-slate-100 mt-2">
              <button
                onClick={() => handleNav('profil-sejarah')}
                className="w-full py-2.5 px-3 text-[#0e3e2f] hover:bg-emerald-50 rounded-xl border border-emerald-900/20 text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
                <span>Lihat Selengkapnya</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: Potensi Desa */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-[#0e3e2f] pb-3 border-b border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0e3e2f] flex items-center justify-center shrink-0">
                  <Sprout className="w-4 h-4 text-emerald-800" />
                </div>
                <div>
                  <h2 className="font-bold text-sm sm:text-base tracking-tight text-[#0e3e2f]">
                    Potensi Desa
                  </h2>
                  <p className="text-[10.5px] text-slate-500 font-medium">Sektor Unggulan Masyarakat</p>
                </div>
              </div>

              {/* 2x3 Grid */}
              <div className="grid grid-cols-2 gap-2 text-slate-800">
                {/* Pertanian */}
                <div className="p-2.5 rounded-xl bg-[#eef7f2] border border-[#d2ebd9] flex flex-col gap-1 hover:border-emerald-300 transition">
                  <div className="flex items-center gap-1.5 text-[#0e3e2f] font-bold text-xs">
                    <Sprout className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Pertanian</span>
                  </div>
                  <p className="text-[10.5px] text-slate-600 leading-tight">
                    Padi, sayuran, palawija
                  </p>
                </div>

                {/* Perkebunan */}
                <div className="p-2.5 rounded-xl bg-[#eef7f2] border border-[#d2ebd9] flex flex-col gap-1 hover:border-emerald-300 transition">
                  <div className="flex items-center gap-1.5 text-[#0e3e2f] font-bold text-xs">
                    <Coffee className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Perkebunan</span>
                  </div>
                  <p className="text-[10.5px] text-slate-600 leading-tight">
                    Kopi, teh, buah-buahan
                  </p>
                </div>

                {/* Peternakan */}
                <div className="p-2.5 rounded-xl bg-[#eef7f2] border border-[#d2ebd9] flex flex-col gap-1 hover:border-emerald-300 transition">
                  <div className="flex items-center gap-1.5 text-[#0e3e2f] font-bold text-xs">
                    <Trees className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Peternakan</span>
                  </div>
                  <p className="text-[10.5px] text-slate-600 leading-tight">
                    Sapi, kambing, unggas
                  </p>
                </div>

                {/* UMKM */}
                <div className="p-2.5 rounded-xl bg-[#eef7f2] border border-[#d2ebd9] flex flex-col gap-1 hover:border-emerald-300 transition">
                  <div className="flex items-center gap-1.5 text-[#0e3e2f] font-bold text-xs">
                    <Store className="w-3.5 h-3.5 text-emerald-700" />
                    <span>UMKM</span>
                  </div>
                  <p className="text-[10.5px] text-slate-600 leading-tight">
                    Olahan pangan & kerajinan
                  </p>
                </div>

                {/* Wisata Alam */}
                <div className="p-2.5 rounded-xl bg-[#eef7f2] border border-[#d2ebd9] flex flex-col gap-1 hover:border-emerald-300 transition">
                  <div className="flex items-center gap-1.5 text-[#0e3e2f] font-bold text-xs">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Wisata Alam</span>
                  </div>
                  <p className="text-[10.5px] text-slate-600 leading-tight">
                    Curug Menteng, Bukit Salak
                  </p>
                </div>

                {/* Budaya */}
                <div className="p-2.5 rounded-xl bg-[#eef7f2] border border-[#d2ebd9] flex flex-col gap-1 hover:border-emerald-300 transition">
                  <div className="flex items-center gap-1.5 text-[#0e3e2f] font-bold text-xs">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Budaya</span>
                  </div>
                  <p className="text-[10.5px] text-slate-600 leading-tight">
                    Tradisi & kesenian lokal
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-3 border-t border-slate-100 mt-2">
              <button
                onClick={() => handleNav('potensi-desa')}
                className="w-full py-2.5 px-3 text-[#0e3e2f] hover:bg-emerald-50 rounded-xl border border-emerald-900/20 text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <Sprout className="w-3.5 h-3.5 text-emerald-700" />
                <span>Jelajahi Potensi Desa</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 5: Galeri Desa */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-[#0e3e2f] pb-3 border-b border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0e3e2f] flex items-center justify-center shrink-0">
                  <Camera className="w-4 h-4 text-emerald-800" />
                </div>
                <div>
                  <h2 className="font-bold text-sm sm:text-base tracking-tight text-[#0e3e2f]">
                    Galeri Desa
                  </h2>
                  <p className="text-[10.5px] text-slate-500 font-medium">Dokumentasi & Keindahan Alam</p>
                </div>
              </div>

              {/* 2x2 Photo Grid */}
              <div className="grid grid-cols-2 gap-2">
                {galleryPhotos.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleNav('profil-galeri')}
                    className="relative w-full h-22 sm:h-24 rounded-xl overflow-hidden border border-slate-100 group cursor-pointer shadow-2xs"
                  >
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Camera className="w-4 h-4 text-white drop-shadow" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-3 border-t border-slate-100 mt-2">
              <button
                onClick={() => handleNav('profil-galeri')}
                className="w-full py-2.5 px-3 rounded-xl border border-[#0e3e2f] text-[#0e3e2f] hover:bg-emerald-50 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.99]"
              >
                <Camera className="w-3.5 h-3.5 text-emerald-700" />
                <span>Lihat Semua Dokumentasi</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE MODALS */}
      {/* ========================================================================= */}

      {/* Modal 1: Sejarah Lengkap Desa */}
      {modalSejarahOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 space-y-5 border border-slate-200 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5 text-[#0e3e2f]">
                <Clock className="w-5 h-5 text-emerald-700" />
                <h3 className="text-lg font-bold">Sejarah Lengkap Desa Warung Menteng</h3>
              </div>
              <button
                onClick={() => setModalSejarahOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                Asal usul nama <strong>"Warung Menteng"</strong> berakar dari sejarah masa lampau ketika kawasan ini menjadi perlintasan pedagang dan pengelana antara kaki Gunung Salak dan Bogor. Dahulu, terdapat sebuah warung persinggahan yang sangat dikenal yang berada tepat di bawah rindangnya pohon buah Menteng (Baccaurea dulcis) yang berbuah lebat.
              </p>
              
              <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200/80 space-y-2">
                <h4 className="font-bold text-[#0e3e2f] text-sm">Garis Waktu Perjalanan Desa</h4>
                <ul className="space-y-2 text-xs">
                  <li><strong>Tahun 1960:</strong> Penetapan dan pembentukan struktur pemerintahan desa awal di bawah naungan Kecamatan Cijeruk.</li>
                  <li><strong>Tahun 1983:</strong> Swadaya masyarakat dan pembukaan akses jalan utama penghubung antar-dusun serta pengaspalan jalan desa.</li>
                  <li><strong>Tahun 2005:</strong> Pemekaran wilayah administrasi guna pemerataan pembangunan dan kemudahan pelayanan warga.</li>
                  <li><strong>Tahun 2015 – Sekarang:</strong> Era digitalisasi desa, pengembangan pariwisata Curug Menteng, serta penguatan ketahanan pangan dan UMKM.</li>
                </ul>
              </div>

              <p>
                Kini Desa Warung Menteng terus melangkah maju dengan mengedepankan semangat gotong royong, kearifan lokal Sunda, dan pemanfaatan teknologi untuk mewujudkan masyarakat yang adil, makmur, dan berakhlak mulia.
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setModalSejarahOpen(false)}
                className="px-4 py-2 bg-[#0e3e2f] hover:bg-[#0a2f23] text-white text-xs font-semibold rounded-xl cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2: Peta Lengkap & Lokasi Geografis */}
      {modalPetaOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-6 space-y-5 border border-slate-200 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5 text-[#0e3e2f]">
                <MapPin className="w-5 h-5 text-emerald-700" />
                <h3 className="text-lg font-bold">Peta Wilayah & Titik Penting Desa Warung Menteng</h3>
              </div>
              <button
                onClick={() => setModalPetaOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
              {/* QR Code Column */}
              <div className="md:col-span-5 bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col items-center text-center space-y-3">
                <a 
                  href="https://maps.app.goo.gl/y4hKRrMnF5d28LQz9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-48 h-48 sm:w-52 sm:h-52 bg-white p-3 rounded-xl border border-slate-200 shadow-xs flex items-center justify-center cursor-pointer group hover:ring-2 hover:ring-emerald-500/30 transition"
                  title="Klik untuk buka Google Maps"
                >
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent('https://maps.app.goo.gl/y4hKRrMnF5d28LQz9')}`}
                    alt="Barcode Resmi Peta Desa Warung Menteng"
                    className="w-full h-full object-contain transition-transform group-hover:scale-102"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = warungMentengQrSvg;
                    }}
                    referrerPolicy="no-referrer"
                  />
                </a>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-800">
                    Peta Digital & Navigasi Desa
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Arahkan kamera smartphone Anda ke barcode di atas untuk membuka peta digital langsung di Google Maps.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 w-full pt-1">
                  <a
                    href="https://maps.app.goo.gl/y4hKRrMnF5d28LQz9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Buka Maps</span>
                  </a>
                  <a
                    href={`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent('https://maps.app.goo.gl/y4hKRrMnF5d28LQz9')}`}
                    download="Barcode_Peta_Desa_Warung_Menteng.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold transition flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Unduh Barcode</span>
                  </a>
                </div>
              </div>

              {/* Geographic Info Column */}
              <div className="md:col-span-7 space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
                  <p className="font-semibold text-slate-900 flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-emerald-700" />
                    <span>Koordinat: 6°42'08.4"S 106°47'20.8"E (-6.702333, 106.789111)</span>
                  </p>
                  <p>Ketinggian: 600 - 950 mdpl (Meter di Atas Permukaan Laut) di lereng timur Gunung Salak, Kecamatan Cijeruk, Kabupaten Bogor.</p>
                </div>

                {/* Titik Lokasi Penting */}
                <div className="space-y-2 text-xs">
                  <span className="font-bold text-slate-800 text-[11px] uppercase tracking-wider block">
                    Titik Lokasi Strategis
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="p-2.5 rounded-xl border border-slate-200 bg-white space-y-0.5">
                      <span className="font-bold text-[#0e3e2f] block">1. Kantor Kepala Desa</span>
                      <p className="text-slate-500 text-[11px]">Jl. Raya Warung Menteng No. 1, Cijeruk</p>
                    </div>
                    <div className="p-2.5 rounded-xl border border-slate-200 bg-white space-y-0.5">
                      <span className="font-bold text-[#0e3e2f] block">2. Curug Menteng</span>
                      <p className="text-slate-500 text-[11px]">Wisata Alam Sumber Air Pegunungan Salak</p>
                    </div>
                    <div className="p-2.5 rounded-xl border border-slate-200 bg-white space-y-0.5">
                      <span className="font-bold text-[#0e3e2f] block">3. Bukit Salak Asri</span>
                      <p className="text-slate-500 text-[11px]">Agrowisata & Kopi Lereng Gunung</p>
                    </div>
                    <div className="p-2.5 rounded-xl border border-slate-200 bg-white space-y-0.5">
                      <span className="font-bold text-[#0e3e2f] block">4. Puskesmas Pembantu</span>
                      <p className="text-slate-500 text-[11px]">Layanan Kesehatan Dusun II</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end border-t border-slate-100">
              <button
                onClick={() => setModalPetaOpen(false)}
                className="px-5 py-2 bg-[#0e3e2f] hover:bg-[#0a2f23] text-white text-xs font-semibold rounded-xl cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 3: Struktur Pemerintahan Lengkap */}
      {modalStrukturOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 space-y-5 border border-slate-200 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5 text-[#0e3e2f]">
                <Landmark className="w-5 h-5 text-emerald-700" />
                <h3 className="text-lg font-bold">Struktur Lengkap Perangkat Desa Warung Menteng</h3>
              </div>
              <button
                onClick={() => setModalStrukturOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex justify-between items-center">
                <div>
                  <span className="text-[10px] text-slate-500 font-semibold uppercase block">Kepala Desa</span>
                  <span className="font-bold text-sm text-[#0e3e2f]">Bapak H. Ahmad Saepudin</span>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-[#0e3e2f] text-white text-[10px] font-bold">Periode 2020-2026</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
                <div>
                  <span className="text-[10px] text-slate-500 font-semibold uppercase block">Sekretaris Desa (Sekdes)</span>
                  <span className="font-bold text-slate-900">Dadang Hendrawan, S.AP</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 font-semibold uppercase block">Kasi Pemerintahan</span>
                  <span className="font-bold text-slate-900 block mt-0.5">Budi I S.Pd</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 font-semibold uppercase block">Kasi Pelayanan</span>
                  <span className="font-bold text-slate-900 block mt-0.5">Rina H, S.Kom</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 font-semibold uppercase block">Kasi Kesra</span>
                  <span className="font-bold text-slate-900 block mt-0.5">Tuti Nurhayati</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 font-semibold uppercase block">Kaur Keuangan</span>
                  <span className="font-bold text-slate-900 block mt-0.5">Hendra Wijaya, SE</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 font-semibold uppercase block">Kaur Umum & Tata Usaha</span>
                  <span className="font-bold text-slate-900 block mt-0.5">Siti Maryam</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 font-semibold uppercase block">Kaur Perencanaan</span>
                  <span className="font-bold text-slate-900 block mt-0.5">Asep Kurniawan</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setModalStrukturOpen(false)}
                className="px-4 py-2 bg-[#0e3e2f] hover:bg-[#0a2f23] text-white text-xs font-semibold rounded-xl cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
