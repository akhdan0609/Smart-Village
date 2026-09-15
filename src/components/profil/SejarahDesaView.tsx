import React, { useState } from 'react';
import { 
  Home, 
  ChevronRight, 
  Landmark, 
  BookOpen, 
  Users, 
  Sprout, 
  TrendingUp, 
  Mountain, 
  ArrowRight,
  X,
  MapPin,
  Calendar,
  ShieldCheck,
  Share2,
  Check
} from 'lucide-react';
import { PageRoute } from '../../types';

// Images for cultural heritage sites
import makamEyangImg from '../../assets/images/makam_eyang_menteng_1788955428651.jpg';
import rumahAdatImg from '../../assets/images/rumah_adat_sunda_1788955442032.jpg';
import batuPeringatanImg from '../../assets/images/batu_peringatan_desa_1788955460192.jpg';
import tradisiBudayaImg from '../../assets/images/tradisi_budaya_lokal_1788955478016.jpg';

interface SejarahDesaViewProps {
  onNavigate?: (page: PageRoute) => void;
}

interface HeritageItem {
  id: string;
  nama: string;
  fotoUrl: string;
  ringkasan: string;
  deskripsiLengkap: string;
  lokasi: string;
  tahun: string;
  kategori: string;
}

export const SejarahDesaView: React.FC<SejarahDesaViewProps> = ({ onNavigate }) => {
  const [selectedHeritage, setSelectedHeritage] = useState<HeritageItem | null>(null);
  const [copied, setCopied] = useState(false);

  // 5 Tahapan Penting Perjalanan Sejarah Desa (01 - 05) - Sesuai Gambar
  const timelineSteps = [
    {
      step: '01',
      title: 'Masa Pemekaran',
      period: '± 2020 - Sekarang',
      icon: Users,
      desc: 'Pada masa ini, Desa Warung Menteng resmi dimekarkan dari desa induk, sebagai bagian dari upaya pemerintah untuk meningkatkan pelayanan kepada masyarakat dan mempercepat pembangunan di wilayah ini. Pemekaran ini menjadi titik awal kemandirian desa dalam mengelola potensi dan kebutuhan masyarakatnya.'
    },
    {
      step: '02',
      title: 'Masa Awal Pembentukan',
      period: '± 1900 - 1950',
      icon: Home,
      desc: 'Desa Warung Menteng mulai dihuni oleh masyarakat yang berasal dari berbagai daerah, terutama dari wilayah Cijeruk dan sekitarnya. Pada masa ini, daerah ini dikenal dengan sebutan "Warung" karena terdapat sebuah warung kecil yang menjadi tempat berkumpul warga.'
    },
    {
      step: '03',
      title: 'Masa Perkembangan',
      period: '± 1950 - 1970',
      icon: Sprout,
      desc: 'Seiring bertambahnya jumlah penduduk, wilayah desa mulai terbentuk dengan jelas. Infrastruktur sederhana seperti jalan desa dan fasilitas umum mulai dibangun secara gotong royong oleh masyarakat.'
    },
    {
      step: '04',
      title: 'Menuju Desa Administratif',
      period: '± 1970 - 2000',
      icon: Landmark,
      desc: 'Desa Warung Menteng resmi menjadi salah satu desa administratif di Kecamatan Cijeruk, Kabupaten Bogor. Pada masa ini, kegiatan pemerintahan dan pelayanan masyarakat mulai terorganisir dengan lebih baik.'
    },
    {
      step: '05',
      title: 'Desa yang Maju dan Mandiri',
      period: '± 2000 - Sekarang',
      icon: TrendingUp,
      desc: 'Hingga saat ini, Desa Warung Menteng terus berkembang dengan berbagai program pembangunan, peningkatan ekonomi masyarakat, serta pelestarian lingkungan dan budaya lokal.'
    }
  ];

  // 4 Situs Sejarah & Cagar Budaya - Sesuai Gambar
  const heritageSites: HeritageItem[] = [
    {
      id: 'makam-eyang',
      nama: 'Makam Eyang Warung Menteng',
      fotoUrl: makamEyangImg,
      ringkasan: 'Makam ini merupakan salah satu peninggalan bersejarah yang diyakini sebagai tempat peristirahatan tokoh penyebar agama di Desa Warung Menteng.',
      deskripsiLengkap: 'Makam Eyang Warung Menteng adalah situs religi dan cagar budaya yang sangat dihormati oleh masyarakat desa. Menurut cerita sesepuh, makam ini merupakan tempat peristirahatan tokoh pendahulu yang turut membuka pemukiman awal dan menyebarkan nilai-nilai luhur di kaki Gunung Salak. Bangunan makam telah dirawat secara swadaya oleh warga dengan tetap mempertahankan arsitektur kayu jati dan bebatuan aslinya.',
      lokasi: 'Kp. Pasir Pogor, RT 02/RW 01, Desa Warung Menteng',
      tahun: 'Abad ke-19',
      kategori: 'Situs Religi & Sejarah'
    },
    {
      id: 'rumah-adat',
      nama: 'Situs Rumah Adat (Lama)',
      fotoUrl: rumahAdatImg,
      ringkasan: 'Situs bangunan rumah adat yang masih tersisa hingga kini menjadi bukti kehidupan masyarakat pada masa lalu, dengan arsitektur khas Sunda.',
      deskripsiLengkap: 'Rumah panggung tradisional Sunda ini menggunakan fondasi umpak batu alami, dinding anyaman bambu (sasag/gedek), serta atap genteng tanah liat dengan ventilasi alami yang sejuk. Struktur bangunan ini merefleksikan kearifan lokal masa lalu yang selaras dengan iklim pegunungan dan tahan terhadap getaran gempa bumi.',
      lokasi: 'Kp. Babakan RT 03/RW 02, Desa Warung Menteng',
      tahun: '± Tahun 1928',
      kategori: 'Arsitektur Tradisional'
    },
    {
      id: 'batu-peringatan',
      nama: 'Batu Peringatan',
      fotoUrl: batuPeringatanImg,
      ringkasan: 'Batu ini dipercaya sebagai penanda sejarah penting dalam perjalanan desa, yang hingga kini masih dijaga oleh masyarakat setempat.',
      deskripsiLengkap: 'Monolit batu tegak prasejarah (menhir) ini berdiri kokoh diselimuti lumut alami di kawasan teduh perbukitan desa. Dipercaya oleh para peneliti lokal sebagai penanda batas wilayah kuno atau tapak kesepakatan damai para leluhur Sunda. Hingga kini kawasan sekitar batu peringatan senantiasa dijaga kebersihannya.',
      lokasi: 'Kawasan Hutan Lindung Desa, Kp. Pasir Jeruk',
      tahun: 'Zaman Megalitikum / Penanda Sejarah',
      kategori: 'Cagar Budaya Batu'
    },
    {
      id: 'tradisi-budaya',
      nama: 'Tradisi dan Budaya Lokal',
      fotoUrl: tradisiBudayaImg,
      ringkasan: 'Beberapa tradisi adat dan kesenian khas Warung Menteng juga menjadi bagian dari warisan budaya yang terus dilestarikan, sebagai identitas dan kebanggaan desa.',
      deskripsiLengkap: 'Tradisi Seren Taun, upacara syukuran panen salak dan padi, pentas wayang golek, serta seni calung dan pencak silat terus dihidupkan melalui paguyuban pemuda dan sesepuh adat. Bale tradisi menjadi pusat rembug warga sekaligus arena pembinaan kesenian bagi generasi muda.',
      lokasi: 'Bale Sawala Budaya, Desa Warung Menteng',
      tahun: 'Turun-temurun',
      kategori: 'Adat & Seni Budaya'
    }
  ];

  const handleShare = (nama: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.href}#${nama}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-[#f8faf8] min-h-screen text-slate-800 pb-16 font-sans relative overflow-x-hidden">
      
      {/* ======================================================== */}
      {/* HERO SECTION WITH BOTANICAL WATERMARK & MOUNTAIN MOTIFS */}
      {/* ======================================================== */}
      <div className="relative bg-gradient-to-b from-[#e8f3ec] via-[#f1f8f4] to-[#f8faf8] border-b border-emerald-100/60 pt-6 pb-10 overflow-hidden">
        
        {/* Left Botanical Leaves Illustration (matching the green leaves in reference) */}
        <div className="absolute -top-6 -left-10 w-48 sm:w-64 h-64 pointer-events-none opacity-80 z-0">
          <svg viewBox="0 0 200 240" className="w-full h-full text-[#0a4732] fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M-10,120 C40,70 80,10 110,-20 C100,50 60,110 -10,120 Z" fill="#0b4e37" />
            <path d="M-20,180 C50,150 90,80 130,40 C100,110 50,180 -20,180 Z" fill="#13674b" opacity="0.85" />
            <path d="M-10,210 C40,190 80,150 110,120 C80,170 30,220 -10,210 Z" fill="#2d8563" opacity="0.7" />
            <path d="M10,80 Q40,130 90,170" stroke="#a7f3d0" strokeWidth="2" fill="none" opacity="0.4" />
          </svg>
        </div>

        {/* Right Botanical Leaves & Rosette Mandala Illustration (matching reference) */}
        <div className="absolute top-0 right-0 w-80 sm:w-96 h-full pointer-events-none z-0 overflow-hidden">
          {/* Subtle Rosette Mandala */}
          <svg viewBox="0 0 200 200" className="absolute -top-10 -right-10 w-64 h-64 text-emerald-600/20 stroke-current fill-none">
            <circle cx="100" cy="100" r="85" strokeWidth="0.8" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="70" strokeWidth="0.8" />
            <circle cx="100" cy="100" r="50" strokeWidth="0.8" strokeDasharray="2 2" />
            <circle cx="100" cy="100" r="30" strokeWidth="0.8" />
            {Array.from({ length: 12 }).map((_, i) => (
              <path key={i} d={`M100 100 L${100 + 75 * Math.cos((i * 30 * Math.PI) / 180)} ${100 + 75 * Math.sin((i * 30 * Math.PI) / 180)}`} strokeWidth="0.6" />
            ))}
          </svg>

          {/* Mountains Silhouette */}
          <svg viewBox="0 0 300 120" className="absolute bottom-0 right-0 w-full h-24 text-emerald-800/10 fill-current">
            <path d="M0,120 L80,50 L160,80 L230,30 L300,90 L300,120 Z" />
          </svg>

          {/* Lush Green Foliage on Right Edge */}
          <svg viewBox="0 0 200 240" className="absolute -top-8 -right-8 w-56 h-64 text-[#064e3b] fill-current opacity-70">
            <path d="M210,120 C160,70 120,10 90,-20 C100,50 140,110 210,120 Z" />
            <path d="M220,180 C150,150 110,80 70,40 C100,110 150,180 220,180 Z" fill="#0f766e" opacity="0.6" />
          </svg>
        </div>

        {/* Hero Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          
          {/* Breadcrumb: Profil Desa > Sejarah Desa */}
          <nav className="flex items-center gap-1.5 text-xs text-[#064e3b] font-medium">
            <button 
              onClick={() => onNavigate?.('profil-desa')}
              className="inline-flex items-center gap-1.5 hover:underline cursor-pointer text-[#064e3b]"
            >
              <Landmark className="w-3.5 h-3.5 text-[#064e3b]" />
              <span>Profil Desa</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-600/70" />
            <span className="font-semibold text-slate-900">Sejarah Desa</span>
          </nav>

          {/* Main Title & Quote Header Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-1">
            
            {/* Left Title Block */}
            <div className="space-y-2">
              <div className="flex items-center gap-3.5">
                {/* Temple/Landmark Emblem */}
                <div className="w-11 h-11 rounded-xl bg-[#064e3b] text-white flex items-center justify-center shadow-xs shrink-0">
                  <Landmark className="w-6 h-6 text-white" />
                </div>
                {/* Large Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#064e3b] tracking-tight">
                  Sejarah Desa
                </h1>
              </div>

              {/* Subtitle with small green underline */}
              <div className="space-y-1.5 pl-0.5">
                <div className="w-8 h-1 bg-[#064e3b] rounded-full" />
                <p className="italic text-xs sm:text-sm text-slate-600 font-normal">
                  Jejak masa lalu, fondasi untuk masa depan
                </p>
              </div>
            </div>

            {/* Right Summary Quote with Green Vertical Divider Bar */}
            <div className="flex items-start gap-4 max-w-lg md:pl-6">
              <div className="w-1 self-stretch bg-emerald-600 rounded-full shrink-0 min-h-[52px]" />
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                Desa Warung Menteng memiliki perjalanan panjang yang penuh perjuangan, mulai dari masa pembentukan, perkembangan, hingga menjadi desa yang maju dan mandiri seperti sekarang.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* ======================================================== */}
      {/* MAIN CONTENT TWO-COLUMN GRID */}
      {/* ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ------------------------------------------------------ */}
          {/* LEFT COLUMN: PERJALANAN SEJARAH DESA (7 COLS) */}
          {/* ------------------------------------------------------ */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-xs p-5 sm:p-7 space-y-6">
            
            {/* Header: Book icon + Title + Subtitle */}
            <div className="flex items-start gap-3.5 pb-2">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-[#064e3b] shrink-0 border border-emerald-100">
                <BookOpen className="w-6 h-6 text-[#064e3b]" />
              </div>
              <div className="space-y-0.5">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#064e3b] tracking-tight">
                  Perjalanan Sejarah Desa
                </h2>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Berikut adalah tahapan penting dalam perjalanan panjang Desa Warung Menteng yang membentuk desa ini hingga seperti sekarang.
                </p>
              </div>
            </div>

            {/* Timeline Vertical Flow */}
            <div className="relative pl-2 sm:pl-4 space-y-5 before:content-[''] before:absolute before:left-[17px] sm:before:left-[25px] before:top-6 before:bottom-8 before:w-[2px] before:bg-emerald-300">
              {timelineSteps.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="relative flex items-start gap-3 sm:gap-4 group">
                    
                    {/* Node Dot / Badge Number */}
                    <div className="relative z-10 flex flex-col items-center shrink-0">
                      <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#064e3b] text-white flex items-center justify-center font-bold text-xs shadow-xs ring-4 ring-white">
                        {item.step}
                      </span>
                    </div>

                    {/* Timeline Inner Card Container (Matches Reference Box) */}
                    <div className="flex-1 bg-white hover:bg-emerald-50/20 border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs transition-all duration-200">
                      
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-start">
                        
                        {/* Left Sub-Column: Icon + Title + Period Pill (5 cols) */}
                        <div className="md:col-span-5 flex items-start gap-3">
                          {/* Round Mint Icon Circle */}
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                            <IconComp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-800" />
                          </div>

                          {/* Title and Year Period */}
                          <div className="space-y-1.5 min-w-0">
                            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                              {item.title}
                            </h3>
                            <span className="inline-block text-[11px] font-semibold text-emerald-900 bg-emerald-100/70 border border-emerald-200/80 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                              {item.period}
                            </span>
                          </div>
                        </div>

                        {/* Right Sub-Column: Narrative Paragraph (7 cols) */}
                        <div className="md:col-span-7 text-xs text-slate-600 leading-relaxed text-left md:border-l md:border-slate-100 md:pl-4">
                          {item.desc}
                        </div>

                      </div>

                    </div>

                  </div>
                );
              })}
            </div>

          </div>

          {/* ------------------------------------------------------ */}
          {/* RIGHT COLUMN: SITUS SEJARAH & CAGAR BUDAYA (5 COLS) */}
          {/* ------------------------------------------------------ */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden flex flex-col justify-between">
            
            {/* Header Dark Green Banner with Landmark Icon */}
            <div className="bg-[#064e3b] px-5 sm:px-6 py-4 text-white flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
                <Landmark className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
                  Situs Sejarah & Cagar Budaya
                </h3>
                <p className="text-xs text-emerald-100/90 pt-0.5">
                  Warisan masa lalu yang menjadi identitas dan kebanggaan desa
                </p>
              </div>
            </div>

            {/* Content Body: Grid of Cultural Heritage Sites */}
            <div className="p-5 sm:p-6 space-y-6 flex-1 flex flex-col justify-between">
              
              {/* TOP ROW: 3 HERITAGE SITES (Makam, Rumah Adat, Batu Peringatan) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {heritageSites.slice(0, 3).map((site) => (
                  <div 
                    key={site.id}
                    className="flex flex-col justify-between bg-white rounded-2xl border border-slate-100 hover:border-emerald-200 transition group p-2.5 shadow-2xs hover:shadow-xs"
                  >
                    {/* Thumbnail Image */}
                    <div className="h-28 rounded-xl overflow-hidden bg-slate-100 mb-2.5">
                      <img 
                        src={site.fotoUrl} 
                        alt={site.nama}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Site Details */}
                    <div className="space-y-1.5 flex-1 flex flex-col justify-between">
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 transition line-clamp-2 leading-snug">
                        {site.nama}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-snug line-clamp-3">
                        {site.ringkasan}
                      </p>

                      {/* Read More Link */}
                      <button 
                        onClick={() => setSelectedHeritage(site)}
                        className="pt-2 text-[11px] font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer transition mt-auto"
                      >
                        <span>Baca selengkapnya</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* BOTTOM ROW: TRADISI DAN BUDAYA LOKAL (Horizontal Card) */}
              {heritageSites[3] && (
                <div className="bg-white rounded-2xl border border-slate-100 hover:border-emerald-200 p-3 shadow-2xs hover:shadow-xs transition group">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    {/* Left Image Thumbnail */}
                    <div className="w-full sm:w-36 h-28 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                      <img 
                        src={heritageSites[3].fotoUrl} 
                        alt={heritageSites[3].nama}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Right Content */}
                    <div className="flex-1 space-y-1.5">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition">
                        {heritageSites[3].nama}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-3">
                        {heritageSites[3].ringkasan}
                      </p>
                      
                      <button 
                        onClick={() => setSelectedHeritage(heritageSites[3])}
                        className="text-[11px] font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer transition pt-1"
                      >
                        <span>Baca selengkapnya</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ACTION BUTTON: LIHAT LEBIH BANYAK */}
              <div className="pt-2">
                <button
                  onClick={() => onNavigate?.('potensi-situs-sejarah')}
                  className="w-full py-3 px-4 rounded-xl bg-[#064e3b] hover:bg-[#043e2f] text-white text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer shadow-xs"
                >
                  <Landmark className="w-4 h-4 text-emerald-200" />
                  <span>Lihat Lebih Banyak Situs Sejarah & Cagar Budaya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* BOTTOM SECTION: 4 VALUES + CALLIGRAPHIC SLOGAN */}
        {/* ======================================================== */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 sm:p-8 relative overflow-hidden">
          
          {/* Stylized Botanical Leaf vectors at bottom right corner (matches reference) */}
          <div className="absolute -bottom-6 -right-6 w-44 h-44 pointer-events-none opacity-85 z-0">
            <svg viewBox="0 0 160 160" className="w-full h-full text-[#064e3b] fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M160,160 C120,130 90,80 80,20 C100,60 130,110 160,160 Z" fill="#064e3b" />
              <path d="M160,110 C130,90 100,50 90,10 C110,40 140,80 160,110 Z" fill="#047857" opacity="0.8" />
              <path d="M120,160 C100,130 70,100 50,80 C80,100 100,130 120,160 Z" fill="#10b981" opacity="0.5" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-center relative z-10">
            
            {/* 1. Nilai-Nilai Sejarah (2 cols) */}
            <div className="lg:col-span-2 flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#064e3b] border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Nilai-Nilai Sejarah
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Mengajarkan kita tentang perjuangan, gotong royong, dan kebersamaan sebagai warisan leluhur.
                </p>
              </div>
            </div>

            {/* 2. Warisan Budaya (2 cols) */}
            <div className="lg:col-span-2 flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#064e3b] border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                <Users className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Warisan Budaya
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Melestarikan tradisi, adat istiadat, dan kearifan lokal yang menjadi identitas desa.
                </p>
              </div>
            </div>

            {/* 3. Semangat Masyarakat (2 cols) */}
            <div className="lg:col-span-2 flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#064e3b] border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                <Sprout className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Semangat Masyarakat
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Terus menjaga persatuan dan kekompakan untuk membangun desa yang lebih baik.
                </p>
              </div>
            </div>

            {/* 4. Masa Depan (2 cols) */}
            <div className="lg:col-span-2 flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#064e3b] border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                <Mountain className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Masa Depan
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Bersama melangkah menuju desa yang maju, mandiri, dan sejahtera.
                </p>
              </div>
            </div>

            {/* 5. Calligraphic Slogan on Right (4 cols) */}
            <div className="lg:col-span-4 lg:border-l lg:border-slate-200 lg:pl-6 text-center lg:text-left py-1">
              <p className="text-[#064e3b] font-serif italic text-lg sm:text-xl font-bold leading-snug tracking-tight">
                “Sejarah adalah akar, pembangunan adalah daunnya”
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* ======================================================== */}
      {/* MODAL: DETAIL CAGAR BUDAYA (BACA SELENGKAPNYA) */}
      {/* ======================================================== */}
      {selectedHeritage && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 space-y-5 relative shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedHeritage(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition cursor-pointer"
              aria-label="Tutup detail"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Badge & Title */}
            <div className="space-y-2 pr-8">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="bg-[#064e3b] text-white font-semibold px-3 py-0.5 rounded-full">
                  {selectedHeritage.kategori}
                </span>
                <span className="text-slate-400">• {selectedHeritage.tahun}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                {selectedHeritage.nama}
              </h3>
            </div>

            {/* Photo */}
            <div className="rounded-2xl overflow-hidden max-h-[320px] bg-slate-100 shadow-inner">
              <img
                src={selectedHeritage.fotoUrl}
                alt={selectedHeritage.nama}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Location & Status Info */}
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-900 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-medium">{selectedHeritage.lokasi}</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Terdaftar Inventaris Desa</span>
              </div>
            </div>

            {/* Narrative Description */}
            <div className="text-slate-700 text-xs sm:text-sm leading-relaxed space-y-3 font-normal">
              <p>{selectedHeritage.deskripsiLengkap}</p>
            </div>

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                onClick={() => handleShare(selectedHeritage.nama)}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-emerald-800 bg-slate-100 hover:bg-emerald-50 px-3.5 py-2 rounded-full transition cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Tautan Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Bagikan Informasi</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setSelectedHeritage(null)}
                className="px-5 py-2 rounded-full bg-[#064e3b] text-white text-xs font-bold hover:bg-[#043e2f] transition cursor-pointer"
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
