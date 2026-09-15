import React, { useState } from 'react';
import { 
  Users, 
  ArrowRight, 
  Calendar, 
  FileText, 
  CalendarCheck, 
  Clock, 
  Camera, 
  ChevronRight, 
  CheckCircle2, 
  Code, 
  Database, 
  Scale, 
  Landmark, 
  X, 
  Download, 
  BookOpen, 
  Sparkles, 
  Check, 
  ExternalLink,
  MapPin,
  Target,
  GraduationCap
} from 'lucide-react';
import { PageRoute } from '../../types';
import kknHeroGroup from '../../assets/images/kkn_hero_group_1788604287174.jpg';
import kknPanorama from '../../assets/images/kkn_galeri_hero_panorama_1788606671947.jpg';
import kknActivityUmkm from '../../assets/images/kkn_activity_umkm_1788604303052.jpg';
import kknProkerWebsite from '../../assets/images/kkn_proker_website_1788606042072.jpg';
import kknMengajarBale from '../../assets/images/kkn_mengajar_bale_1788606733812.jpg';
import kknKerjaBakti from '../../assets/images/kkn_kerja_bakti_1788606750207.jpg';

interface KKNProgramKerjaViewProps {
  onNavigate?: (page: PageRoute) => void;
}

interface ProdiProgram {
  id: 'ti' | 'si' | 'hukum' | 'spi';
  name: string;
  shortName: string;
  icon: React.ReactNode;
  photo: string;
  tagline: string;
  description: string;
  bulletPoints: string[];
  fullPrograms: {
    title: string;
    description: string;
    target: string;
    output: string;
    schedule: string;
    pj: string;
  }[];
}

const PRODI_DATA: ProdiProgram[] = [
  {
    id: 'ti',
    name: 'Teknik Informatika',
    shortName: 'Informatika',
    icon: <Code className="w-5 h-5 text-white" />,
    photo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80',
    tagline: 'Meningkatkan literasi digital dan pengembangan teknologi informasi di desa melalui pelatihan dan pendampingan.',
    description: 'Fokus pada penguatan infrastruktur digital, pembuatan portal informasi desa, pelatihan teknologi bagi pemuda desa, serta pendampingan UMKM dalam adopsi pemasaran digital.',
    bulletPoints: [
      'Pelatihan dasar komputer & internet',
      'Pembuatan website desa',
      'Pendampingan digitalisasi UMKM'
    ],
    fullPrograms: [
      {
        title: 'Pembuatan & Pengembangan Website Resmi Desa Warung Menteng',
        description: 'Membangun portal informasi terpadu yang menampilkan profil, potensi wisata, administrasi pelayanan publik, serta transparansi kegiatan desa.',
        target: 'Aparatur Desa & Masyarakat Umum',
        output: 'Website desa aktif, terintegrasi, dan mudah diakses publik',
        schedule: '14 – 24 Juli 2026',
        pj: 'Akhdan Fadhil Santoso & Tim TI'
      },
      {
        title: 'Pelatihan Dasar Komputer & Literasi Internet Sehat',
        description: 'Edukasi pengoperasian komputer dan pemanfaatan internet sehat bagi siswa sekolah dan pemuda Karang Taruna Desa Warung Menteng.',
        target: 'Remaja & Siswa Desa Warung Menteng',
        output: 'Peningkatan kecakapan digital dan pemahaman cyber safety',
        schedule: '16 – 21 Juli 2026',
        pj: 'Munhamir Nadzir & Devran Azzahra'
      },
      {
        title: 'Pendampingan Digitalisasi & Katalog Online UMKM Desa',
        description: 'Membantu pelaku usaha lokal membuat foto produk profesional, Google Business Profile, dan katalog promosi digital di media sosial.',
        target: 'Pelaku UMKM dan Pengrajin Lokal',
        output: 'Listing Google Maps & materi promosi digital UMKM',
        schedule: '18 – 26 Juli 2026',
        pj: 'Ikmal Nur Awaludin & Akhsan Efriel'
      }
    ]
  },
  {
    id: 'si',
    name: 'Sistem Informasi',
    shortName: 'Sistem Informasi',
    icon: <Database className="w-5 h-5 text-white" />,
    photo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80',
    tagline: 'Mengoptimalkan pengelolaan data dan informasi desa untuk mendukung pelayanan dan administrasi yang lebih baik.',
    description: 'Berperan dalam merapikan tata kelola basis data kependudukan, pemetaan potensi wilayah, dan perancangan alur pelayanan surat digital desa.',
    bulletPoints: [
      'Pengelolaan data kependudukan',
      'Sistem informasi pelayanan desa',
      'Pelatihan penggunaan aplikasi'
    ],
    fullPrograms: [
      {
        title: 'Digitalisasi & Verifikasi Database Kependudukan',
        description: 'Membantu sinkronisasi dan penataan arsip data warga berbasis spreadsheet terstruktur agar rekapitulasi data demografis lebih cepat dan akurat.',
        target: 'Staf Administrasi & Kasi Pemerintahan Desa',
        output: 'Database kependudukan rapi dan mudah dicari',
        schedule: '13 – 20 Juli 2026',
        pj: 'Arjuna & Tim Sistem Informasi'
      },
      {
        title: 'Perancangan Alur Pengajuan Surat Digital Terpadu',
        description: 'Merancang alur verifikasi berkas permohonan surat pengantar, surat domisili, dan surat keterangan usaha secara transparan.',
        target: 'Perangkat Desa & RT/RW',
        output: 'SOP dan formulir pelayanan digital yang efisien',
        schedule: '17 – 25 Juli 2026',
        pj: 'Arjuna & Staf Desa'
      },
      {
        title: 'Bimtek Penggunaan Aplikasi Administrasi Desa',
        description: 'Bimbingan teknis intensif kepada perangkat desa mengenai pemeliharaan data dan keamanan sistem informasi desa.',
        target: 'Perangkat Desa Warung Menteng',
        output: 'Kemandirian aparatur dalam mengelola sistem digital',
        schedule: '22 – 27 Juli 2026',
        pj: 'Arjuna & Tim Teknis'
      }
    ]
  },
  {
    id: 'hukum',
    name: 'Ilmu Hukum',
    shortName: 'Ilmu Hukum',
    icon: <Scale className="w-5 h-5 text-white" />,
    photo: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=700&q=80',
    tagline: 'Memberikan edukasi hukum dan pendampingan masyarakat dalam memahami hak dan kewajibannya.',
    description: 'Menyediakan pemahaman hukum praktis bagi masyarakat mengenai pertanahan, pencegahan kekerasan dalam rumah tangga, perlindungan anak, serta mediasi sengketa kekeluargaan.',
    bulletPoints: [
      'Penyuluhan hukum di masyarakat',
      'Bantuan hukum sederhana',
      'Sosialisasi perlindungan hukum'
    ],
    fullPrograms: [
      {
        title: 'Penyuluhan Hukum: Hak Keperdataan & Sertifikasi Tanah',
        description: 'Sosialisasi mengenai tertib administrasi kepemilikan tanah, hak waris, dan tata cara pendaftaran tanah sistematis lengkap (PTSL).',
        target: 'Warga Desa & Tokoh Masyarakat',
        output: 'Pemahaman warga mengenai kepastian hak atas tanah',
        schedule: '15 – 22 Juli 2026',
        pj: 'Fajri Maulana & Achmad Pahlevi Ramadhan'
      },
      {
        title: 'Posko Konsultasi & Bantuan Hukum Sederhana (Gratis)',
        description: 'Membuka layanan konsultasi ramah warga di balai desa untuk memberikan pandangan hukum dasar dan pendampingan mediasi damai.',
        target: 'Seluruh Warga Desa Warung Menteng',
        output: 'Konsultasi hukum terbuka dan pencatatan aspirasi',
        schedule: 'Setiap Hari Kerja (16 – 28 Juli 2026)',
        pj: 'Muhammad Arifin Fadhillah & Difina Agusti'
      },
      {
        title: 'Sosialisasi Perlindungan Perempuan, Anak & Anti Cyberbullying',
        description: 'Edukasi mengenai pencegahan kekerasan berbasis gender, hak perlindungan anak, serta bahaya hukum dari ujaran kebencian di media sosial.',
        target: 'Ibu-ibu PKK, Kader Posyandu, & Remaja',
        output: 'Peningkatan kesadaran hukum dan lingkungan aman',
        schedule: '19 – 25 Juli 2026',
        pj: 'Aisyah Al Atas & Tim Hukum'
      }
    ]
  },
  {
    id: 'spi',
    name: 'Sejarah Peradaban Islam',
    shortName: 'SPI',
    icon: <Landmark className="w-5 h-5 text-white" />,
    photo: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80',
    tagline: 'Menumbuhkan kesadaran sejarah Islam dan nilai-nilai perjuangan ulama dalam kehidupan modern.',
    description: 'Menggali dan mendokumentasikan jejak sejarah keislaman lokal, menguatkan literasi pesantren dan madrasah, serta menghidupkan tradisi keagamaan yang mengakar di masyarakat.',
    bulletPoints: [
      'Kajian sejarah Islam lokal',
      'Wisata religi dan edukasi sejarah',
      'Pelatihan literasi keislaman'
    ],
    fullPrograms: [
      {
        title: 'Kajian & Penelusuran Tokoh Ulama Penyiar Islam Lokal',
        description: 'Wawancara dengan sesepuh dan tokoh agama untuk membukukan riwayat dakwah ulama perintis di wilayah Warung Menteng dan sekitarnya.',
        target: 'Masyarakat, Majelis Taklim, & Santri',
        output: 'Naskah dokumentasi sejarah dakwah Islam Warung Menteng',
        schedule: '15 – 23 Juli 2026',
        pj: 'Ayu Rahmadini & Safitri Naufal'
      },
      {
        title: 'Pelatihan Literasi Keislaman & Bimbingan Belajar Madrasah',
        description: 'Mendampingi anak-anak madrasah dan TPA dalam membaca Al-Quran, tajwid, adab Islami, serta pengenalan kisah keteladanan para Nabi dan Sahabat.',
        target: 'Santri TPA/TPQ & Anak-anak Desa',
        output: 'Peningkatan kecintaan belajar ilmu agama dan akhlak mulia',
        schedule: '14 – 26 Juli 2026',
        pj: 'Andika Febriansyah & RISNA'
      },
      {
        title: 'Dokumentasi Situs Religi & Pengembangan Wisata Ziarah',
        description: 'Penyusunan profil naratif cagar religi desa yang dikemas menjadi panduan wisata edukasi sejarah Islam bagi generasi muda.',
        target: 'Generasi Muda & Wisatawan Religi',
        output: 'Brosur & artikel digital jejak sejarah keislaman desa',
        schedule: '20 – 27 Juli 2026',
        pj: 'Siti Khoiroh & Try Mauna'
      }
    ]
  }
];

export const KKNProgramKerjaView: React.FC<KKNProgramKerjaViewProps> = ({ onNavigate }) => {
  const [selectedProdi, setSelectedProdi] = useState<ProdiProgram | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeSidebarItem, setActiveSidebarItem] = useState<string>('program-kerja');
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const filteredProdis = activeFilter === 'all' 
    ? PRODI_DATA 
    : PRODI_DATA.filter(p => p.id === activeFilter);

  const handleSidebarClick = (key: string) => {
    setActiveSidebarItem(key);
    if (key === 'program-kerja') {
      setActiveFilter('all');
    } else if (key === 'galeri') {
      if (onNavigate) onNavigate('kkn-galeri');
    } else if (key === 'dokumentasi') {
      if (onNavigate) onNavigate('kkn-galeri');
    } else if (key === 'jadwal') {
      setIsScheduleModalOpen(true);
    } else if (key === 'laporan') {
      setIsReportModalOpen(true);
    } else if (key === 'lihat-program') {
      setActiveFilter('all');
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#f7faf8] min-h-screen text-slate-800 pb-16">
      
      {/* 1. TOP SUBTLE OPTION BADGE (Matches screenshot top-left indicator) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 pt-4 pb-1">
        <div className="inline-flex items-center gap-2 bg-[#0a3828] text-emerald-100 text-xs font-semibold px-3 py-1 rounded-full shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Opsi 1 — Tampilan Utama (Lengkap & Detail)</span>
        </div>
      </div>

      {/* 2. HERO SECTION (Identical to reference screenshot) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 mt-3">
        <div className="relative rounded-3xl overflow-hidden shadow-sm border border-emerald-900/20 bg-[#072418] min-h-[260px] sm:min-h-[290px] flex flex-col md:flex-row items-stretch">
          
          {/* Hero Left Content */}
          <div className="relative z-10 w-full md:w-[50%] p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-r from-[#072418] via-[#072418]/95 to-transparent text-white">
            
            {/* Tag / Category Badge */}
            <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-xs border border-white/20 text-emerald-200 text-xs font-bold px-3 py-1 rounded-full w-fit mb-3">
              <Users className="w-3.5 h-3.5 text-emerald-300" />
              <span>KKN</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
              Program Kerja KKN
            </h1>

            {/* Description Subtitle */}
            <p className="mt-2.5 text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-xl">
              Program kerja KKN merupakan serangkaian kegiatan yang dirancang untuk memberikan kontribusi nyata kepada masyarakat Desa Warung Menteng melalui kolaborasi antara mahasiswa dan warga desa.
            </p>

            {/* Slogan */}
            <p className="mt-3 text-sm sm:text-base italic font-serif text-emerald-200 tracking-wide">
              &ldquo;Bersama Warga, Membangun Warung Menteng&rdquo;
            </p>

            {/* Amber Action Button */}
            <div className="mt-5">
              <button
                onClick={() => onNavigate ? onNavigate('kkn') : null}
                className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-slate-950 font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Users className="w-4 h-4 text-slate-900" />
                <span>Lihat Profil KKN</span>
                <ArrowRight className="w-4 h-4 text-slate-900" />
              </button>
            </div>
          </div>

          {/* Hero Right: Panoramic Photograph of Landscape & KKN Team with Wooden Signboard */}
          <div className="relative w-full md:w-[50%] min-h-[220px] md:min-h-full overflow-hidden">
            <img
              src={kknHeroGroup}
              alt="KKN Mahasiswa Desa Warung Menteng"
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient Overlay for seamless blend */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#072418] via-transparent to-black/30" />

            {/* Rustic Wooden Signboard for "Desa Warung Menteng" on the Far Right */}
            <div className="absolute right-4 sm:right-8 bottom-6 sm:bottom-8 z-10 hidden sm:flex flex-col items-center">
              <div className="bg-[#5c3a21] border-2 border-[#3d2412] text-[#fbf0d9] px-4 py-2 rounded-lg shadow-xl transform rotate-[-2deg] text-center font-serif">
                <span className="block text-[10px] uppercase font-bold tracking-widest text-amber-200">Desa</span>
                <span className="block text-sm font-black leading-none">Warung</span>
                <span className="block text-sm font-black leading-none">Menteng</span>
              </div>
              {/* Wooden post leg */}
              <div className="w-2.5 h-6 bg-[#3d2412] shadow-sm -mt-0.5 rounded-b-xs" />
            </div>
          </div>

        </div>
      </section>

      {/* 3. MAIN 3-COLUMN CONTENT GRID (Left Sidebar + Center Proker Cards + Right Widgets) */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 mt-6 sm:mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* ============================================================
              LEFT COLUMN: MENU KKN & INSPIRING QUOTE (3 Cols)
              ============================================================ */}
          <aside className="lg:col-span-3 space-y-5">
            
            {/* Navigation Menu Card */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
              
              {/* Menu Card Header */}
              <div className="bg-[#0b3b29] text-white px-5 py-3.5 flex items-center gap-2.5">
                <Users className="w-4 h-4 text-emerald-300" />
                <h3 className="font-extrabold text-sm tracking-wide">Menu KKN</h3>
              </div>

              {/* Menu Items List */}
              <div className="p-2 space-y-1 text-xs">
                
                {/* 1. Lihat Album Kami */}
                <button
                  onClick={() => handleSidebarClick('galeri')}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between font-semibold transition cursor-pointer ${
                    activeSidebarItem === 'galeri' 
                      ? 'bg-emerald-50 text-[#0b3b29] border border-emerald-200' 
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-4 h-4 text-slate-400" />
                    <span>Lihat Album Kami</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {/* 2. Program Kerja KKN (ACTIVE BY DEFAULT) */}
                <button
                  onClick={() => handleSidebarClick('program-kerja')}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between font-bold bg-[#0b3b29] text-white shadow-2xs transition cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>Program Kerja KKN</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-300" />
                </button>

                {/* 3. Album Kami */}
                <button
                  onClick={() => handleSidebarClick('galeri')}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Camera className="w-4 h-4 text-slate-400" />
                    <span>Album Kami</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {/* 4. Dokumentasi */}
                <button
                  onClick={() => handleSidebarClick('dokumentasi')}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-slate-400" />
                    <span>Dokumentasi</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {/* 5. Jadwal Kegiatan */}
                <button
                  onClick={() => handleSidebarClick('jadwal')}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span>Jadwal Kegiatan</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {/* 6. Laporan KKN */}
                <button
                  onClick={() => handleSidebarClick('laporan')}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Download className="w-4 h-4 text-slate-400" />
                    <span>Laporan KKN</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </button>

              </div>
            </div>

            {/* Quote Card (with subtle botanical illustration feel) */}
            <div className="relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-[#e8f5ed] to-[#d8ede0] border border-emerald-200/80 shadow-xs">
              {/* Big Quote Symbol */}
              <span className="text-4xl font-serif text-emerald-700 select-none block leading-none -mb-2">
                “
              </span>
              <p className="text-xs sm:text-[13px] text-emerald-950 font-medium italic leading-relaxed relative z-10 pl-1">
                Setiap program kerja adalah langkah kecil yang membawa perubahan besar untuk desa.
              </p>
              <span className="text-4xl font-serif text-emerald-700 select-none block leading-none -mt-1 text-right">
                ”
              </span>

              {/* Leaf silhouettes watermark in bottom left */}
              <div className="absolute -bottom-4 -left-4 text-emerald-600/10 pointer-events-none">
                <Sparkles className="w-20 h-20" />
              </div>
            </div>

          </aside>

          {/* ============================================================
              MIDDLE COLUMN: PROGRAM KERJA KKN + 4 PRODI CARDS (6 Cols)
              ============================================================ */}
          <section className="lg:col-span-6 space-y-6">
            
            {/* Center Section Header */}
            <div>
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-lg sm:text-xl">
                <Users className="w-5 h-5 text-[#0b3b29]" />
                <h2>Program Kerja KKN</h2>
              </div>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Berbagai program kerja yang akan dilaksanakan selama kegiatan KKN di Desa Warung Menteng, dengan fokus pada pemberdayaan masyarakat dan pengembangan potensi desa.
              </p>
            </div>

            {/* 4 Prodi Filter Tabs (Matching Screenshot) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              
              {/* Tab 1: Teknik Informatika */}
              <button
                onClick={() => setActiveFilter(activeFilter === 'ti' ? 'all' : 'ti')}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition border cursor-pointer ${
                  activeFilter === 'ti' || activeFilter === 'all'
                    ? 'bg-[#0b3b29] text-white border-[#0b3b29] shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Code className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Teknik Informatika</span>
              </button>

              {/* Tab 2: Sistem Informasi */}
              <button
                onClick={() => setActiveFilter(activeFilter === 'si' ? 'all' : 'si')}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition border cursor-pointer ${
                  activeFilter === 'si'
                    ? 'bg-[#0b3b29] text-white border-[#0b3b29] shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Database className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Sistem Informasi</span>
              </button>

              {/* Tab 3: Ilmu Hukum */}
              <button
                onClick={() => setActiveFilter(activeFilter === 'hukum' ? 'all' : 'hukum')}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition border cursor-pointer ${
                  activeFilter === 'hukum'
                    ? 'bg-[#0b3b29] text-white border-[#0b3b29] shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Scale className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Ilmu Hukum</span>
              </button>

              {/* Tab 4: Sejarah Peradaban Islam */}
              <button
                onClick={() => setActiveFilter(activeFilter === 'spi' ? 'all' : 'spi')}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition border cursor-pointer ${
                  activeFilter === 'spi'
                    ? 'bg-[#0b3b29] text-white border-[#0b3b29] shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Landmark className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">SPI</span>
              </button>

            </div>

            {/* 4 Prodi Program Cards (Responsive: 1 col on mobile, 2 cols on tablet/desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {filteredProdis.map((prodi) => (
                <div 
                  key={prodi.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Card Photo with Floating Icon Badge */}
                    <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                      <img
                        src={prodi.photo}
                        alt={prodi.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      {/* Floating Circular Green Badge */}
                      <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-[#0b3b29] border-2 border-white shadow-md flex items-center justify-center">
                        {prodi.icon}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 sm:p-5">
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight">
                        {prodi.name}
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {prodi.tagline}
                      </p>

                      {/* 3 Bullet Points */}
                      <div className="mt-3.5 space-y-1.5 text-xs text-slate-700 border-t border-slate-100 pt-3">
                        {prodi.bulletPoints.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-tight font-medium text-[11px] sm:text-xs text-slate-700">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Button */}
                  <div className="p-4 sm:p-5 pt-0">
                    <button
                      onClick={() => setSelectedProdi(prodi)}
                      className="w-full bg-[#0b3b29] hover:bg-[#082e20] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition duration-200 flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                    >
                      <span>Selengkapnya</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Banner: "Tujuan Program Kerja" (Spans width of middle column) */}
            <div className="rounded-2xl p-5 bg-gradient-to-r from-[#e7f5ee] via-[#edf7f2] to-[#e0f1e8] border border-emerald-200/90 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-lg">
                <div className="flex items-center gap-2 text-emerald-950 font-extrabold text-sm">
                  <Sparkles className="w-4 h-4 text-emerald-700 shrink-0" />
                  <h4>Tujuan Program Kerja</h4>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed">
                  Mewujudkan masyarakat desa yang lebih mandiri, berdaya saing, dan sejahtera melalui peningkatan kualitas sumber daya manusia, pemanfaatan teknologi, serta penguatan nilai-nilai agama dan budaya.
                </p>
              </div>

              <button
                onClick={() => onNavigate ? onNavigate('kkn-latar-belakang') : null}
                className="bg-[#0b3b29] hover:bg-[#082e20] text-white font-bold text-xs px-4 py-2.5 rounded-xl transition shrink-0 flex items-center gap-1.5 shadow-2xs cursor-pointer"
              >
                <span>Lihat Latar Belakang KKN</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </section>

          {/* ============================================================
              RIGHT COLUMN: WIDGET AREA (3 Cols)
              - Informasi Program (4 stats)
              - Timeline KKN
              - Dokumentasi Kegiatan
              ============================================================ */}
          <aside className="lg:col-span-3 space-y-5">
            
            {/* Widget 1: Informasi Program */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5">
              
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm border-b border-slate-100 pb-3">
                <Users className="w-4 h-4 text-[#0b3b29]" />
                <h3 className="tracking-tight">Informasi Program</h3>
              </div>

              {/* 2x2 Grid of Stat Cards */}
              <div className="grid grid-cols-2 gap-2.5 mt-3.5">
                
                {/* Stat 1: Kategori Program */}
                <div className="bg-[#f0f7f3] border border-emerald-100 rounded-xl p-3 flex flex-col items-start">
                  <div className="w-7 h-7 rounded-lg bg-white text-emerald-800 flex items-center justify-center shadow-2xs mb-1.5">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span className="text-xl font-black text-slate-900 leading-none">4</span>
                  <span className="text-[10px] text-slate-600 font-semibold mt-1">Kategori Program</span>
                </div>

                {/* Stat 2: Program Kerja */}
                <div className="bg-[#f0f7f3] border border-emerald-100 rounded-xl p-3 flex flex-col items-start">
                  <div className="w-7 h-7 rounded-lg bg-white text-emerald-800 flex items-center justify-center shadow-2xs mb-1.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-xl font-black text-slate-900 leading-none">12</span>
                  <span className="text-[10px] text-slate-600 font-semibold mt-1">Program Kerja</span>
                </div>

                {/* Stat 3: Mahasiswa KKN */}
                <div className="bg-[#f0f7f3] border border-emerald-100 rounded-xl p-3 flex flex-col items-start">
                  <div className="w-7 h-7 rounded-lg bg-white text-emerald-800 flex items-center justify-center shadow-2xs mb-1.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-xl font-black text-slate-900 leading-none">19</span>
                  <span className="text-[10px] text-slate-600 font-semibold mt-1">Mahasiswa KKN</span>
                </div>

                {/* Stat 4: Tahun Pelaksanaan */}
                <div className="bg-[#f0f7f3] border border-emerald-100 rounded-xl p-3 flex flex-col items-start">
                  <div className="w-7 h-7 rounded-lg bg-white text-emerald-800 flex items-center justify-center shadow-2xs mb-1.5">
                    <CalendarCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xl font-black text-slate-900 leading-none">1</span>
                  <span className="text-[10px] text-slate-600 font-semibold mt-1">Tahun Pelaksanaan</span>
                </div>

              </div>
            </div>

            {/* Widget 2: Timeline KKN */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5">
              
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm border-b border-slate-100 pb-3">
                <Clock className="w-4 h-4 text-[#0b3b29]" />
                <h3 className="tracking-tight">Timeline KKN</h3>
              </div>

              {/* Vertical Stepper with Green Dots & Line */}
              <div className="relative mt-4 pl-6 space-y-4 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-emerald-600">
                
                {/* Step 1 */}
                <div className="relative">
                  <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-emerald-600 ring-4 ring-emerald-100" />
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">12 Juli 2026</h5>
                    <p className="text-[11px] text-slate-600 leading-tight mt-0.5">
                      Pembukaan & Penerimaan Mahasiswa KKN
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-emerald-600 ring-4 ring-emerald-100" />
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">12 Juli – 28 Juli 2026</h5>
                    <p className="text-[11px] text-slate-600 leading-tight mt-0.5">
                      Pelaksanaan Program Kerja
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-emerald-600 ring-4 ring-emerald-100" />
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">29 Juli 2026</h5>
                    <p className="text-[11px] text-slate-600 leading-tight mt-0.5">
                      Penutupan & Evaluasi
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Widget 3: Dokumentasi Kegiatan */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5">
              
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm border-b border-slate-100 pb-3">
                <Camera className="w-4 h-4 text-[#0b3b29]" />
                <h3 className="tracking-tight">Dokumentasi Kegiatan</h3>
              </div>

              {/* 4 Thumbnail Photos in a Grid */}
              <div className="grid grid-cols-4 gap-1.5 mt-3.5">
                <div className="aspect-square rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                  <img src={kknHeroGroup} alt="Dokumentasi 1" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                  <img src={kknActivityUmkm} alt="Dokumentasi 2" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                  <img src={kknKerjaBakti} alt="Dokumentasi 3" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                  <img src={kknMengajarBale} alt="Dokumentasi 4" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* View All Documentation Button */}
              <div className="mt-4">
                <button
                  onClick={() => onNavigate ? onNavigate('kkn-galeri') : null}
                  className="w-full bg-[#0b3b29] hover:bg-[#082e20] text-white text-xs font-bold py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                >
                  <span>Lihat Semua Dokumentasi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </aside>

        </div>
      </main>

      {/* ============================================================
          MODAL DETAIL PRODI & PROGRAM KERJA
          ============================================================ */}
      {selectedProdi && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative">
            
            {/* Modal Header Banner */}
            <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-[#072418]">
              <img
                src={selectedProdi.photo}
                alt={selectedProdi.name}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProdi(null)}
                className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title on Banner */}
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/30 border border-emerald-400/40 text-emerald-200 text-xs font-bold mb-2">
                  {selectedProdi.icon}
                  <span>Bidang {selectedProdi.name}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">
                  {selectedProdi.name}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-7 space-y-6">
              
              {/* Overview */}
              <div>
                <h4 className="text-xs font-bold uppercase text-emerald-800 tracking-wider">
                  Fokus Pengabdian
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {selectedProdi.description}
                </p>
              </div>

              {/* Rincian 3 Program Unggulan */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase text-emerald-800 tracking-wider">
                  Rincian 3 Program Kerja Utama:
                </h4>

                <div className="space-y-3">
                  {selectedProdi.fullPrograms.map((program, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/70 space-y-2"
                    >
                      <div className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#0b3b29] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <h5 className="font-extrabold text-xs sm:text-sm text-slate-900 leading-snug">
                          {program.title}
                        </h5>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed pl-7">
                        {program.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-2 border-t border-emerald-200/50 pl-7 text-slate-600">
                        <div>
                          <span className="text-slate-400 font-medium">Sasaran: </span>
                          <span className="font-semibold text-slate-800">{program.target}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 font-medium">Jadwal: </span>
                          <span className="font-semibold text-emerald-800">{program.schedule}</span>
                        </div>
                        <div className="sm:col-span-2">
                          <span className="text-slate-400 font-medium">Penanggung Jawab: </span>
                          <span className="font-semibold text-slate-800">{program.pj}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  onClick={() => setSelectedProdi(null)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#0b3b29] hover:bg-[#082e20] text-white font-bold rounded-xl text-xs transition cursor-pointer"
                >
                  Tutup Rincian
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* ============================================================
          MODAL JADWAL KEGIATAN KKN
          ============================================================ */}
      {isScheduleModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setIsScheduleModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-slate-900 font-extrabold text-base border-b border-slate-100 pb-3">
              <Calendar className="w-5 h-5 text-[#0b3b29]" />
              <span>Jadwal Lengkap KKN 2026</span>
            </div>

            <div className="mt-4 space-y-3 text-xs">
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                <span className="font-bold text-emerald-900 block">Minggu I (11 – 15 Juli 2026)</span>
                <p className="text-slate-600 mt-1">Penerjunan, sowan tokoh desa, silaturahmi RT/RW, dan observasi lapangan lanjutan.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-800 block">Minggu II (16 – 22 Juli 2026)</span>
                <p className="text-slate-600 mt-1">Eksekusi program kerja teknologi informasi, penyuluhan hukum, bimbingan belajar santri.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-800 block">Minggu III (23 – 28 Juli 2026)</span>
                <p className="text-slate-600 mt-1">Pendampingan digital UMKM, posko hukum, kajian ulama lokal, dan kerja bakti desa.</p>
              </div>
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                <span className="font-bold text-emerald-900 block">Minggu IV (29 Juli 2026)</span>
                <p className="text-slate-600 mt-1">Gelar karya desa, penutupan KKN, evaluasi bersama DPL, dan pelepasan mahasiswa.</p>
              </div>
            </div>

            <button
              onClick={() => setIsScheduleModalOpen(false)}
              className="mt-5 w-full bg-[#0b3b29] hover:bg-[#082e20] text-white font-bold py-2.5 rounded-xl text-xs transition cursor-pointer"
            >
              Tutup Jadwal
            </button>
          </div>
        </div>
      )}

      {/* ============================================================
          MODAL LAPORAN KKN
          ============================================================ */}
      {isReportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setIsReportModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-slate-900 font-extrabold text-base border-b border-slate-100 pb-3">
              <Download className="w-5 h-5 text-[#0b3b29]" />
              <span>Laporan & Dokumen KKN</span>
            </div>

            <div className="mt-4 space-y-2.5 text-xs">
              <div className="p-3 rounded-xl border border-slate-200 hover:border-emerald-300 flex items-center justify-between transition">
                <div>
                  <span className="font-bold text-slate-800 block">Proposal Program Kerja KKN 2026</span>
                  <span className="text-[10px] text-slate-400">PDF • 2.4 MB</span>
                </div>
                <button 
                  onClick={() => alert('Mengunduh Proposal Program Kerja KKN 2026')}
                  className="px-3 py-1.5 bg-emerald-50 text-emerald-800 font-bold rounded-lg hover:bg-emerald-100 text-xs flex items-center gap-1 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh</span>
                </button>
              </div>

              <div className="p-3 rounded-xl border border-slate-200 hover:border-emerald-300 flex items-center justify-between transition">
                <div>
                  <span className="font-bold text-slate-800 block">Matriks Jadwal Kerja & Logbook</span>
                  <span className="text-[10px] text-slate-400">XLSX • 1.1 MB</span>
                </div>
                <button 
                  onClick={() => alert('Mengunduh Matriks Jadwal Kerja KKN 2026')}
                  className="px-3 py-1.5 bg-emerald-50 text-emerald-800 font-bold rounded-lg hover:bg-emerald-100 text-xs flex items-center gap-1 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh</span>
                </button>
              </div>

              <div className="p-3 rounded-xl border border-slate-200 hover:border-emerald-300 flex items-center justify-between transition">
                <div>
                  <span className="font-bold text-slate-800 block">Laporan Akhir & Dokumentasi Pengabdian</span>
                  <span className="text-[10px] text-slate-400">PDF • 8.5 MB</span>
                </div>
                <button 
                  onClick={() => alert('Mengunduh Laporan Akhir KKN 2026')}
                  className="px-3 py-1.5 bg-emerald-50 text-emerald-800 font-bold rounded-lg hover:bg-emerald-100 text-xs flex items-center gap-1 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh</span>
                </button>
              </div>
            </div>

            <button
              onClick={() => setIsReportModalOpen(false)}
              className="mt-5 w-full bg-[#0b3b29] hover:bg-[#082e20] text-white font-bold py-2.5 rounded-xl text-xs transition cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
