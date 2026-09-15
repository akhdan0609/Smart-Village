import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Calendar, 
  Camera, 
  Megaphone, 
  GraduationCap, 
  ArrowLeft, 
  Home, 
  ChevronRight,
  Instagram,
  Mail,
  X,
  Sparkles
} from 'lucide-react';
import { PageRoute } from '../../types';

// Imported team banners
import bphBanner from '../../assets/images/kkn_team_bph_1788605172906.jpg';
import acaraBanner from '../../assets/images/kkn_team_acara_1788605188095.jpg';
import humasBanner from '../../assets/images/kkn_team_humas_1788605201912.jpg';
import mediaBanner from '../../assets/images/kkn_team_media_1788605216631.jpg';

// Individual student portraits
import avatarFajry from '../../assets/images/kkn_avatar_fajry_1788605245239.jpg';
import avatarAyu from '../../assets/images/kkn_avatar_ayu_1788605263318.jpg';
import avatarMale2 from '../../assets/images/kkn_avatar_male2_1788605278034.jpg';
import avatarMale3 from '../../assets/images/kkn_avatar_male3_1788605294027.jpg';
import kknLogo from '../../assets/images/logo.png';

export type DivisionType = 'BPH' | 'ACARA' | 'HUMAS' | 'MEDIA';

interface MemberItem {
  id: string;
  name: string;
  fullName?: string;
  role: string;
  quote: string;
  prodi: string;
  photo: string;
  gender: 'm' | 'f';
}

interface DivisionConfig {
  code: DivisionType;
  title: string;
  subtitle: string;
  breadcrumbLabel: string;
  description: string;
  icon: React.ElementType;
  heroImage: string;
  sectionTitle: string;
  gridColsClass: string;
  members: MemberItem[];
}

const DIVISIONS_DATA: Record<DivisionType, DivisionConfig> = {
  BPH: {
    code: 'BPH',
    title: 'BPH',
    subtitle: 'Badan Pengurus Harian',
    breadcrumbLabel: 'BPH',
    description: 'BPH merupakan inti kepengurusan yang bertugas menjalankan roda organisasi, mengambil keputusan strategis, serta memastikan setiap program kerja berjalan dengan baik.',
    icon: Users,
    heroImage: bphBanner,
    sectionTitle: 'Struktur BPH',
    gridColsClass: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4',
    members: [
      {
        id: 'fajri-maulana',
        name: 'Fajri Maulana',
        fullName: 'Fajri Maulana',
        role: 'Ketua',
        quote: 'Memimpin dengan tanggung jawab, bergerak dengan tujuan, menginspirasi untuk kebaikan bersama.',
        prodi: 'Ilmu Hukum',
        photo: avatarFajry,
        gender: 'm'
      },
      {
        id: 'ayu-rahmadini',
        name: 'Ayu Rahmadini',
        fullName: 'Ayu Rahmadini',
        role: 'Wakil Ketua',
        quote: 'Bersama bukan hanya tentang berdiri di samping, tapi berjalan searah menuju perubahan yang bermakna.',
        prodi: 'Sejarah Peradaban Islam',
        photo: avatarAyu,
        gender: 'f'
      },
      {
        id: 'akhdan-fadhil-santoso',
        name: 'Akhdan Fadhil Santoso',
        fullName: 'Akhdan Fadhil Santoso',
        role: 'Secretaries Umum',
        quote: 'Mencatat bukan sekadar tulisan, tapi setiap langkah menuju organisasi yang terarah dan teratur.',
        prodi: 'Teknik Informatika',
        photo: avatarMale3,
        gender: 'm'
      },
      {
        id: 'safitri-naufal',
        name: 'Safitri Naufal',
        fullName: 'Safitri Naufal',
        role: 'Wakil Secretaries',
        quote: 'Terorganisir, terkomunikasi, terdokumentasi untuk mewujudkan tujuan bersama.',
        prodi: 'Sejarah Peradaban Islam',
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80',
        gender: 'f'
      },
      {
        id: 'arjuna',
        name: 'Arjuna',
        fullName: 'Arjuna',
        role: 'Bendahara Umum',
        quote: 'Mengelola bukan sekadar angka, tapi tentang amanah, kejujuran, dan tanggung jawab.',
        prodi: 'Sistem Informasi',
        photo: avatarMale2,
        gender: 'm'
      },
      {
        id: 'difina-agusti-rahmawati',
        name: 'Difina Agusti Rahmawati',
        fullName: 'Difina Agusti Rahmawati',
        role: 'Wakil Bendahara',
        quote: 'Mendukung dengan teliti, membantu dengan hati, menjalankan amanah sepenuh arti.',
        prodi: 'Ilmu Hukum',
        photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80',
        gender: 'f'
      }
    ]
  },
  ACARA: {
    code: 'ACARA',
    title: 'ACARA',
    subtitle: 'Divisi Acara',
    breadcrumbLabel: 'Acara',
    description: 'Divisi Acara bertanggung jawab dalam merancang, mengorganisir, dan melaksanakan setiap kegiatan program kerja KKN dengan terencana, terkoordinasi, dan berkesan.',
    icon: Calendar,
    heroImage: acaraBanner,
    sectionTitle: 'Struktur Divisi Acara',
    gridColsClass: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4',
    members: [
      {
        id: 'munhamir-nadzir',
        name: 'Munhamir Nadzir',
        fullName: 'Munhamir Nadzir',
        role: 'Koordinator Acara',
        quote: 'Mengatur jalannya acara dengan rapi, tertib, dan penuh tanggung jawab.',
        prodi: 'Teknik Informatika',
        photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80',
        gender: 'm'
      },
      {
        id: 'devran-azzahra',
        name: 'Devran Azzahra',
        fullName: 'Devran Azzahra',
        role: 'Anggota Acara',
        quote: 'Kolaborasi yang solid menghasilkan acara yang luar biasa.',
        prodi: 'Teknik Informatika',
        photo: avatarMale3,
        gender: 'm'
      },
      {
        id: 'andika-febriansyah',
        name: 'Andika Febriansyah',
        fullName: 'Andika Febriansyah',
        role: 'Anggota Acara',
        quote: 'Menyampaikan gagasan, beraksi bersama untuk kesuksesan setiap program.',
        prodi: 'Sejarah Peradaban Islam',
        photo: avatarFajry,
        gender: 'm'
      },
      {
        id: 'risna',
        name: 'RISNA',
        fullName: 'RISNA',
        role: 'Anggota Acara',
        quote: 'Setiap acara bermakna, setiap momen berharga, setiap kerja berbuah cerita.',
        prodi: 'Sejarah Peradaban Islam',
        photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80',
        gender: 'f'
      },
      {
        id: 'achmad-pahlevi-ramadhan',
        name: 'Achmad Pahlevi Ramadhan',
        fullName: 'Achmad Pahlevi Ramadhan',
        role: 'Anggota Acara',
        quote: 'Perencanaan matang, pelaksanaan hebat, hasil penuh manfaat.',
        prodi: 'Ilmu Hukum',
        photo: avatarMale2,
        gender: 'm'
      },
      {
        id: 'ikmal-nur-awaludin',
        name: 'Ikmal Nur Awaludin',
        fullName: 'Ikmal Nur Awaludin',
        role: 'Anggota Acara',
        quote: 'Detail kecil adalah kunci keberhasilan acara yang besar.',
        prodi: 'Teknik Informatika',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80',
        gender: 'm'
      },
      {
        id: 'caisar-fayth-isyardirda',
        name: 'Caisar Fayth Isyadirda',
        fullName: 'Caisar Fayth Isyadirda',
        role: 'Anggota Acara',
        quote: 'Saling bekerja sama dan penuh semangat untuk setiap acara yang berkesan.',
        prodi: 'Sejarah Peradaban Islam',
        photo: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=300&auto=format&fit=crop&q=80',
        gender: 'm'
      }
    ]
  },
  HUMAS: {
    code: 'HUMAS',
    title: 'HUMAS',
    subtitle: 'Divisi Humas & Komunikasi',
    breadcrumbLabel: 'Humas',
    description: 'Divisi Humas & Komunikasi berperan dalam membangun dan menjaga hubungan baik dengan masyarakat, mitra, serta pihak eksternal. Kami menjadi jembatan komunikasi yang efektif untuk menyampaikan informasi, memperkuat citra positif, dan mendukung kelancaran program kerja KKN.',
    icon: Megaphone,
    heroImage: humasBanner,
    sectionTitle: 'Struktur Divisi Humas',
    gridColsClass: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto gap-4 sm:gap-5',
    members: [
      {
        id: 'muhammad-arifin-fadhillah',
        name: 'Muhammad Arifin Fadhillah',
        fullName: 'Muhammad Arifin Fadhillah',
        role: 'Koordinator HUMAS',
        quote: 'Humas bukan sekadar bicara, tapi tentang membangun citra dan kepercayaan bersama.',
        prodi: 'Ilmu Hukum',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80',
        gender: 'm'
      },
      {
        id: 'muhammad-ramadhan-giri-wardana',
        name: 'Muhammad Ramadhan Giri Wardana',
        fullName: 'Muhammad Ramadhan Giri Wardana',
        role: 'Anggota HUMAS',
        quote: 'Komunikasi yang baik adalah kunci membangun hubungan yang kuat dan kepercayaan yang tulus.',
        prodi: 'Ilmu Hukum',
        photo: avatarMale3,
        gender: 'm'
      },
      {
        id: 'siti-khoiroh',
        name: 'Siti Khoiroh',
        fullName: 'Siti Khoiroh',
        role: 'Anggota HUMAS',
        quote: 'Kreatif dalam ide, komunikatif dalam aksi, berdampak untuk negeri.',
        prodi: 'Sejarah Peradaban Islam',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
        gender: 'f'
      },
      {
        id: 'try-mauna',
        name: 'Try Mauna',
        fullName: 'Try Mauna',
        role: 'Anggota HUMAS',
        quote: 'Membangun koneksi, mempererat sinergi, dan mengabdi dengan sepenuh hati.',
        prodi: 'Sejarah Peradaban Islam',
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80',
        gender: 'f'
      }
    ]
  },
  MEDIA: {
    code: 'MEDIA',
    title: 'MEDIA',
    subtitle: 'Divisi Media & Dokumentasi',
    breadcrumbLabel: 'Media',
    description: 'Divisi Media & Dokumentasi bertanggung jawab dalam mengelola informasi, dokumentasi kegiatan, serta publikasi program kerja KKN melalui berbagai media yang kreatif dan informatif.',
    icon: Camera,
    heroImage: mediaBanner,
    sectionTitle: 'Struktur Divisi Media',
    gridColsClass: 'grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto',
    members: [
      {
        id: 'qomarudin-tokan',
        name: 'Qomarudin Tokan',
        fullName: 'Qomarudin Tokan',
        role: 'Koordinator MEDIA',
        quote: 'Dokumentasi hari ini, menjadi cerita berharga untuk masa depan.',
        prodi: 'Teknik Informatika',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
        gender: 'm'
      },
      {
        id: 'akhsan-efriel-wanda-yuda-pratama',
        name: 'Akhsan efriel wanda yuda pratama',
        fullName: 'Akhsan efriel wanda yuda pratama',
        role: 'Anggota MEDIA',
        quote: 'Menyampaikan informasi dengan kreatif, mendokumentasikan momen dengan penuh makna.',
        prodi: 'Teknik Informatika',
        photo: avatarMale2,
        gender: 'm'
      },
      {
        id: 'aisyah-al-atas',
        name: 'Aisyah al atas',
        fullName: 'Aisyah al atas',
        role: 'Anggota MEDIA',
        quote: 'Kreativitas dalam setiap karya, informasi dalam setiap langkah.',
        prodi: 'Ilmu Hukum',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
        gender: 'f'
      }
    ]
  }
};

interface KKNDivisionViewProps {
  initialDivision?: DivisionType;
  onNavigate?: (page: PageRoute) => void;
  onSelectDivision?: (div: DivisionType | 'SEMUA') => void;
}

export const KKNDivisionView: React.FC<KKNDivisionViewProps> = ({
  initialDivision = 'BPH',
  onNavigate,
  onSelectDivision
}) => {
  const [currentDivision, setCurrentDivision] = useState<DivisionType>(initialDivision);
  const [selectedMember, setSelectedMember] = useState<MemberItem | null>(null);

  useEffect(() => {
    if (initialDivision) {
      setCurrentDivision(initialDivision);
    }
  }, [initialDivision]);

  const division = DIVISIONS_DATA[currentDivision];
  const IconComponent = division.icon;

  const handleBackToProfile = () => {
    if (onSelectDivision) {
      onSelectDivision('SEMUA');
    } else if (onNavigate) {
      onNavigate('profil-desa');
    }
  };

  const handleBreadcrumbHome = () => {
    if (onNavigate) {
      onNavigate('beranda');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top Breadcrumb & Switcher Bar */}
      <div className="bg-white border-b border-slate-200/80 sticky top-16 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Breadcrumb matching user's image: Beranda > [Division] */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
            <button 
              onClick={handleBreadcrumbHome}
              className="flex items-center gap-1 hover:text-emerald-800 transition font-medium cursor-pointer"
            >
              <Home className="w-4 h-4 text-slate-400" />
              <span>Beranda</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button
              onClick={() => {
                if (onSelectDivision) onSelectDivision('SEMUA');
                else if (onNavigate) onNavigate('kkn');
              }}
              className="hover:text-emerald-800 transition font-medium cursor-pointer"
            >
              KKN
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold capitalize">{division.breadcrumbLabel}</span>
          </nav>

          {/* Quick Division Selector Tabs including Semua Anggota */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200/80 overflow-x-auto">
            <button
              onClick={() => {
                if (onSelectDivision) onSelectDivision('SEMUA');
                else if (onNavigate) onNavigate('kkn');
              }}
              className="px-3 py-1 text-xs font-bold rounded-lg transition-all text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 cursor-pointer whitespace-nowrap"
            >
              Semua Anggota
            </button>
            {(['BPH', 'ACARA', 'HUMAS', 'MEDIA'] as DivisionType[]).map((divKey) => {
              const isActive = currentDivision === divKey;
              return (
                <button
                  key={divKey}
                  onClick={() => {
                    setCurrentDivision(divKey);
                    if (onSelectDivision) onSelectDivision(divKey);
                  }}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#0a3828] shadow-xs border border-slate-200/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {divKey}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-10">
        
        {/* HERO SECTION: Left text & Right team photo (matches the 4 images) */}
        <section className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Column: Icon, Title, Subtitle, Description & Back Button */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-center">
              {/* Dark Green Square Icon */}
              <div className="w-14 h-14 bg-[#0a3828] text-white rounded-2xl flex items-center justify-center shadow-md mb-4 shrink-0">
                <IconComponent className="w-7 h-7" />
              </div>

              {/* Title & Subtitle */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                {division.title}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-slate-700 mt-1">
                {division.subtitle}
              </p>

              {/* Description Paragraph */}
              <div className="w-full h-px bg-slate-200 my-4" />
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
                {division.description}
              </p>

              {/* Return Button */}
              <div className="mt-6 sm:mt-8">
                <button
                  onClick={handleBackToProfile}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 font-medium text-xs sm:text-sm hover:bg-slate-50 hover:border-slate-400 transition shadow-xs cursor-pointer active:scale-98"
                >
                  <ArrowLeft className="w-4 h-4 text-slate-600" />
                  <span>Kembali ke Profil Desa</span>
                </button>
              </div>
            </div>

            {/* Right Column: Hero Team Banner with Landscape */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[420px] w-full bg-slate-100 overflow-hidden">
              <img
                src={division.heroImage}
                alt={`Tim ${division.title} KKN Wigata Dharma`}
                className="w-full h-full object-cover object-center"
              />
              {/* Left subtle soft fade gradient on desktop to blend seamlessly with white container */}
              <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none" />
              {/* Bottom subtle gradient on mobile */}
              <div className="block lg:hidden absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>

          </div>
        </section>

        {/* SECTION DIVIDER & TITLE: Horizontal lines with Icon & Title (exact match to screenshots) */}
        <section className="space-y-2 text-center pt-2">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-slate-300 flex-1 max-w-[120px] sm:max-w-[200px]" />
            <div className="flex items-center gap-2 text-[#0a3828] font-extrabold text-xl sm:text-2xl">
              <IconComponent className="w-6 h-6 text-[#0a3828]" />
              <h2>{division.sectionTitle}</h2>
            </div>
            <div className="h-px bg-slate-300 flex-1 max-w-[120px] sm:max-w-[200px]" />
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-medium tracking-wide">
            Kelompok KKN Wigata Dharma
          </p>
        </section>

        {/* CARDS GRID: 6, 5, or 3 cards based on Division (exact match) */}
        <section>
          <div className={`grid ${division.gridColsClass} gap-4 sm:gap-5`}>
            {division.members.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs flex flex-col items-center text-center relative hover:shadow-md hover:border-emerald-300/80 transition-all duration-200 cursor-pointer group"
              >
                {/* Circular Portrait with Emerald Studio Green Backdrop */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-[#2d774a] p-1 border-2 border-emerald-600/30 relative shadow-sm group-hover:scale-105 transition-transform duration-200">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top rounded-full"
                    loading="lazy"
                  />
                </div>

                {/* Member Name */}
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-4 tracking-tight">
                  {member.name}
                </h3>

                {/* Role Badge */}
                <div className="mt-1 px-3 py-0.5 rounded-full text-xs font-semibold bg-[#eaf4ee] text-[#1e5838] border border-emerald-200/60 shadow-xs">
                  {member.role}
                </div>

                {/* Quotation Body */}
                <div className="w-full flex-1 flex flex-col justify-center my-3 min-h-[72px]">
                  <span className="text-xl sm:text-2xl font-serif text-emerald-700 select-none block text-left w-full -mb-2 pl-2">
                    “
                  </span>
                  <p className="text-[11px] sm:text-xs text-slate-600 italic leading-relaxed px-1 my-1">
                    {member.quote}
                  </p>
                  <span className="text-xl sm:text-2xl font-serif text-emerald-700 select-none block text-right w-full -mt-2 pr-2">
                    ”
                  </span>
                </div>

                {/* Card Footer: Graduation Cap & Major */}
                <div className="w-full pt-2 border-t border-slate-100 flex flex-col items-center justify-center">
                  <div className="flex items-center gap-1.5 text-emerald-900 text-[11px] font-bold tracking-wider uppercase">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-800" />
                    <span>Prodi</span>
                  </div>
                  <p className="text-xs font-medium text-slate-700 mt-0.5">
                    {member.prodi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* MODAL DETAIL ANGGOTA */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-full overflow-hidden bg-[#2d774a] p-1 border-2 border-emerald-600 shadow-md mb-4">
                <img
                  src={selectedMember.photo}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>

              <h3 className="text-2xl font-black text-slate-900">{selectedMember.fullName || selectedMember.name}</h3>
              {selectedMember.fullName && selectedMember.fullName !== selectedMember.name && (
                <p className="text-xs text-slate-500 font-medium mt-0.5">Panggilan: {selectedMember.name}</p>
              )}
              <span className="mt-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#eaf4ee] text-[#1e5838] border border-emerald-200">
                {selectedMember.role} • {division.title}
              </span>

              <div className="my-4 bg-emerald-50/70 border border-emerald-100 p-4 rounded-2xl w-full">
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{selectedMember.quote}"
                </p>
              </div>

              <div className="w-full space-y-2 text-left bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Program Studi:</span>
                  <span className="font-semibold text-slate-800">{selectedMember.prodi}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Universitas:</span>
                  <span className="font-semibold text-slate-800">UNUSIA Jakarta</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Kelompok:</span>
                  <span className="font-semibold text-emerald-800">KKN Wigata Dharma 2026</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedMember(null)}
                className="mt-5 w-full py-2.5 bg-[#0a3828] hover:bg-[#0e4834] text-white text-xs font-bold rounded-xl transition shadow-sm"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER KHUSUS KKN WIGATA DHARMA (Exact match to screenshot bottom bar) */}
      <footer className="bg-[#06301f] text-white py-6 px-4 sm:px-8 mt-12 border-t border-emerald-900/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Logo & Kelompok Info */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-1 shadow-md shrink-0 border border-amber-300/60 overflow-hidden">
              <img
                src={kknLogo}
                alt="Logo KKN Wigata Dharma"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-wide text-white">
                Kelompok KKN WIGATA DHARMA
              </h4>
              <p className="text-xs text-emerald-200/90">
                Mahasiswa Universitas Nahdlatul Ulama Indonesia (UNUSIA)
              </p>
              <p className="text-[11px] text-emerald-300/80">
                Tahun 2026
              </p>
            </div>
          </div>

          {/* Center: Cursive / Calligraphic Slogan */}
          <div className="text-center">
            <p className="text-base sm:text-lg italic font-serif text-emerald-100 tracking-wide">
              “Bersama Warga, Membangun Warung Menteng”
            </p>
          </div>

          {/* Right: Social Media Icon Circles */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#0a422b] hover:bg-[#0f5438] text-white flex items-center justify-center border border-emerald-800/60 transition"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#0a422b] hover:bg-[#0f5438] text-white flex items-center justify-center border border-emerald-800/60 transition"
              aria-label="TikTok"
            >
              <span className="text-xs font-bold font-sans">d</span>
            </a>
            <a
              href="mailto:kkn.wigatadharma@gmail.com"
              className="w-9 h-9 rounded-full bg-[#0a422b] hover:bg-[#0f5438] text-white flex items-center justify-center border border-emerald-800/60 transition"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
};
