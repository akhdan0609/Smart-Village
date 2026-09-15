import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  Megaphone, 
  Camera, 
  BookOpen, 
  Image as ImageIcon, 
  Network, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Instagram, 
   
  Mail, 
  User
} from 'lucide-react';
import { PageRoute } from '../../types';
import { KKNDivisionView } from './KKNDivisionView';
import kknHeroGroup from '../../assets/images/kkn_hero_group_1788604287174.jpg';
import kknActivityUmkm from '../../assets/images/kkn_activity_umkm_1788604303052.jpg';
import kknProkerWebsite from '../../assets/images/kkn_proker_website_1788606042072.jpg';
import kknProkerBudaya from '../../assets/images/kkn_proker_budaya_1788606079432.jpg';
import kknMengajarBale from '../../assets/images/kkn_mengajar_bale_1788606733812.jpg';
import kknKerjaBakti from '../../assets/images/kkn_kerja_bakti_1788606750207.jpg';
import kknPanorama from '../../assets/images/kkn_galeri_hero_panorama_1788606671947.jpg';
import avatarFajry from '../../assets/images/kkn_avatar_fajry_1788605245239.jpg';
import avatarAyu from '../../assets/images/kkn_avatar_ayu_1788605263318.jpg';
import avatarMale2 from '../../assets/images/kkn_avatar_male2_1788605278034.jpg';
import avatarMale3 from '../../assets/images/kkn_avatar_male3_1788605294027.jpg';
import kknLogo from '../../assets/images/logo.png';

export interface KKNMember {
  id: string;
  name: string;
  role: string;
  division: 'BPH' | 'ACARA' | 'HUMAS' | 'MEDIA' | 'DPL';
  photo: string;
  prodi?: string;
  quote?: string;
  whatsapp?: string;
  instagram?: string;
}

// 18 Anggota KKN Kelompok Wigata Dharma (UNUSIA) + 1 DPL
export const KKN_MEMBERS: KKNMember[] = [
  // PEMBIMBING LAPANGAN (DPL)
  {
    id: 'dpl-1',
    name: 'Dr. Muhammad Afifi, M.H.',
    role: 'DPL',
    division: 'DPL',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    prodi: 'Dosen Pembimbing Lapangan (UNUSIA)',
    quote: 'Membimbing generasi muda menjadi agen perubahan berakar nilai keislaman dan kebangsaan.',
    whatsapp: '6281234567801',
    instagram: 'afifi.unusia'
  },
  // BPH (Badan Pengurus Harian)
  {
    id: 'bph-1',
    name: 'Fajri Maulana',
    role: 'Ketua',
    division: 'BPH',
    photo: avatarFajry,
    prodi: 'Ilmu Hukum (UNUSIA)',
    quote: 'Memimpin dengan tanggung jawab, bergerak dengan tujuan, menginspirasi untuk kebaikan bersama.',
    whatsapp: '6281234567802',
    instagram: 'fajri_maulana'
  },
  {
    id: 'bph-2',
    name: 'Ayu Rahmadini',
    role: 'Wakil Ketua',
    division: 'BPH',
    photo: avatarAyu,
    prodi: 'Sejarah Peradaban Islam (UNUSIA)',
    quote: 'Bersama bukan hanya tentang berdiri di samping, tapi berjalan searah menuju perubahan yang bermakna.',
    whatsapp: '6281234567803',
    instagram: 'ayu_rahmadini'
  },
  {
    id: 'bph-3',
    name: 'Akhdan Fadhil Santoso',
    role: 'Secretaries Umum',
    division: 'BPH',
    photo: avatarMale3,
    prodi: 'Teknik Informatika (UNUSIA)',
    quote: 'Mencatat bukan sekadar tulisan, tapi setiap langkah menuju organisasi yang terarah dan teratur.',
    whatsapp: '6281234567806',
    instagram: 'akhdan_fadhil'
  },
  {
    id: 'bph-4',
    name: 'Safitri Naufal',
    role: 'Wakil Secretaries',
    division: 'BPH',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80',
    prodi: 'Sejarah Peradaban Islam (UNUSIA)',
    quote: 'Terorganisir, terkomunikasi, terdokumentasi untuk mewujudkan tujuan bersama.',
    whatsapp: '6281234567807',
    instagram: 'safitri_naufal'
  },
  {
    id: 'bph-5',
    name: 'Arjuna',
    role: 'Bendahara Umum',
    division: 'BPH',
    photo: avatarMale2,
    prodi: 'Sistem Informasi (UNUSIA)',
    quote: 'Mengelola bukan sekadar angka, tapi tentang amanah, kejujuran, dan tanggung jawab.',
    whatsapp: '6281234567804',
    instagram: 'arjuna_acc'
  },
  {
    id: 'bph-6',
    name: 'Difina Agusti Rahmawati',
    role: 'Wakil Bendahara',
    division: 'BPH',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80',
    prodi: 'Ilmu Hukum (UNUSIA)',
    quote: 'Mendukung dengan teliti, membantu dengan hati, menjalankan amanah sepenuh arti.',
    whatsapp: '6281234567805',
    instagram: 'difina_agusti'
  },

  // ACARA
  {
    id: 'acara-1',
    name: 'Munhamir Nadzir',
    role: 'Koordinator Acara',
    division: 'ACARA',
    photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80',
    prodi: 'Teknik Informatika (UNUSIA)',
    quote: 'Mengatur jalannya acara dengan rapi, tertib, dan penuh tanggung jawab.',
    whatsapp: '6281234567811',
    instagram: 'munhamir_nadzir'
  },
  {
    id: 'acara-2',
    name: 'Devran Azzahra',
    role: 'Anggota Acara',
    division: 'ACARA',
    photo: avatarMale3,
    prodi: 'Teknik Informatika (UNUSIA)',
    quote: 'Kolaborasi yang solid menghasilkan acara yang luar biasa.',
    whatsapp: '6281234567816',
    instagram: 'devran_azzahra'
  },
  {
    id: 'acara-3',
    name: 'Andika Febriansyah',
    role: 'Anggota Acara',
    division: 'ACARA',
    photo: avatarFajry,
    prodi: 'Sejarah Peradaban Islam (UNUSIA)',
    quote: 'Menyampaikan gagasan, beraksi bersama untuk kesuksesan setiap program.',
    whatsapp: '6281234567819',
    instagram: 'andika_febriansyah'
  },
  {
    id: 'acara-4',
    name: 'RISNA',
    role: 'Anggota Acara',
    division: 'ACARA',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80',
    prodi: 'Sejarah Peradaban Islam (UNUSIA)',
    quote: 'Setiap acara bermakna, setiap momen berharga, setiap kerja berbuah cerita.',
    whatsapp: '6281234567813',
    instagram: 'risna_acara'
  },
  {
    id: 'acara-5',
    name: 'Achmad Pahlevi Ramadhan',
    role: 'Anggota Acara',
    division: 'ACARA',
    photo: avatarMale2,
    prodi: 'Ilmu Hukum (UNUSIA)',
    quote: 'Perencanaan matang, pelaksanaan hebat, hasil penuh manfaat.',
    whatsapp: '6281234567815',
    instagram: 'achmad_pahlevi'
  },
  {
    id: 'acara-6',
    name: 'Ikmal Nur Awaludin',
    role: 'Anggota Acara',
    division: 'ACARA',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80',
    prodi: 'Teknik Informatika (UNUSIA)',
    quote: 'Detail kecil adalah kunci keberhasilan acara yang besar.',
    whatsapp: '6281234567812',
    instagram: 'ikmal_nur_awaludin'
  },
  {
    id: 'acara-7',
    name: 'Caisar Fayth Isyadirda',
    role: 'Anggota Acara',
    division: 'ACARA',
    photo: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=300&auto=format&fit=crop&q=80',
    prodi: 'Sejarah Peradaban Islam (UNUSIA)',
    quote: 'Saling bekerja sama dan penuh semangat untuk setiap acara yang berkesan.',
    whatsapp: '6281234567822',
    instagram: 'caisar_fayth'
  },

  // HUMAS
  {
    id: 'humas-1',
    name: 'Muhammad Arifin Fadhillah',
    role: 'Koordinator HUMAS',
    division: 'HUMAS',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80',
    prodi: 'Ilmu Hukum (UNUSIA)',
    quote: 'Humas bukan sekadar bicara, tapi tentang membangun citra dan kepercayaan bersama.',
    whatsapp: '6281234567817',
    instagram: 'arifin_fadhillah'
  },
  {
    id: 'humas-2',
    name: 'Muhammad Ramadhan Giri Wardana',
    role: 'Anggota HUMAS',
    division: 'HUMAS',
    photo: avatarMale3,
    prodi: 'Ilmu Hukum (UNUSIA)',
    quote: 'Komunikasi yang baik adalah kunci membangun hubungan yang kuat dan kepercayaan yang tulus.',
    whatsapp: '6281234567818',
    instagram: 'ramadhan_giri'
  },
  {
    id: 'humas-3',
    name: 'Siti Khoiroh',
    role: 'Anggota HUMAS',
    division: 'HUMAS',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
    prodi: 'Sejarah Peradaban Islam (UNUSIA)',
    quote: 'Kreatif dalam ide, komunikatif dalam aksi, berdampak untuk negeri.',
    whatsapp: '6281234567820',
    instagram: 'siti_khoiroh'
  },
  {
    id: 'humas-4',
    name: 'Try Mauna',
    role: 'Anggota HUMAS',
    division: 'HUMAS',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80',
    prodi: 'Sejarah Peradaban Islam (UNUSIA)',
    quote: 'Membangun koneksi, mempererat sinergi, dan mengabdi dengan sepenuh hati.',
    whatsapp: '6281234567821',
    instagram: 'try_mauna'
  },

  // MEDIA
  {
    id: 'media-1',
    name: 'Qomarudin Tokan',
    role: 'Koordinator MEDIA',
    division: 'MEDIA',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    prodi: 'Teknik Informatika (UNUSIA)',
    quote: 'Dokumentasi hari ini, menjadi cerita berharga untuk masa depan.',
    whatsapp: '6281234567810',
    instagram: 'qomarudin_tokan'
  },
  {
    id: 'media-2',
    name: 'Akhsan efriel wanda yuda pratama',
    role: 'Anggota MEDIA',
    division: 'MEDIA',
    photo: avatarMale2,
    prodi: 'Teknik Informatika (UNUSIA)',
    quote: 'Menyampaikan informasi dengan kreatif, mendokumentasikan momen dengan penuh makna.',
    whatsapp: '6281234567808',
    instagram: 'akhsan_efriel'
  },
  {
    id: 'media-3',
    name: 'Aisyah al atas',
    role: 'Anggota MEDIA',
    division: 'MEDIA',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    prodi: 'Ilmu Hukum (UNUSIA)',
    quote: 'Kreativitas dalam setiap karya, informasi dalam setiap langkah.',
    whatsapp: '6281234567809',
    instagram: 'aisyah_al_atas'
  }
];

// TikTok Vector Icon
const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.3 6.3 0 0 0 1.94-4.49V8.78a8.21 8.21 0 0 0 4.83 1.57V6.9a4.84 4.84 0 0 1-1-.21z"/>
  </svg>
);

interface KKNViewProps {
  onNavigate?: (page: PageRoute) => void;
  initialTab?: 'SEMUA' | 'BPH' | 'ACARA' | 'HUMAS' | 'MEDIA';
}

export const KKNView: React.FC<KKNViewProps> = ({ onNavigate, initialTab = 'SEMUA' }) => {
  const [activeTab, setActiveTab] = useState<'SEMUA' | 'BPH' | 'ACARA' | 'HUMAS' | 'MEDIA'>(initialTab);
  const [selectedMember, setSelectedMember] = useState<KKNMember | null>(null);
  const [activeModal, setActiveModal] = useState<'latar-belakang' | 'program-kerja' | 'galeri' | 'struktur' | null>(null);
  const [selectedGalleryPhoto, setSelectedGalleryPhoto] = useState<string | null>(null);

  if (activeTab !== 'SEMUA') {
    return (
      <KKNDivisionView
        initialDivision={activeTab}
        onSelectDivision={(div) => {
          setActiveTab(div);
        }}
        onNavigate={onNavigate}
      />
    );
  }

  const filteredMembers = KKN_MEMBERS;

  const programKerjaList = [
    {
      title: 'Pemberdayaan UMKM dan ekonomi desa',
      desc: 'Pelatihan pembuatan NIB online, foto produk profesional, dan pengemasan produk khas olahan salak dan kopi robusta lereng Gunung Salak.',
      target: '30+ Pelaku Usaha Mikro & Pengrajin Bambu',
      output: 'Katalog Digital UMKM & Sertifikasi Halal/NIB'
    },
    {
      title: 'Edukasi dan literasi masyarakat',
      desc: 'Bimbingan belajar matematika & bahasa Inggris gratis untuk anak SD/MI serta pengadaan pojok baca interaktif di Balai Warga.',
      target: '120+ Siswa/Siswi SD & Remaja Desa',
      output: 'Pojok Baca Mandiri & Bank Buku 300+ Eksemplar'
    },
    {
      title: 'Pemanfaatan teknologi dan digitalisasi desa',
      desc: 'Pengembangan portal website resmi Desa Warung Menteng, sistem permohonan surat administrasi online terintegrasi, dan pemetaan potensi via GIS.',
      target: 'Aparatur Desa & Seluruh Warga Masyarakat',
      output: 'Portal Web Desa Aktif & Sistem Layanan Mandiri'
    },
    {
      title: 'Pengelolaan lingkungan dan penghijauan',
      desc: 'Aksi penanaman bibit pohon buah dan vetiver di tebing rawan longsor lereng Gunung Salak, serta perintisan bank sampah organik warga.',
      target: 'Kawasan Dusun I & Dusun II (Zona Konservasi)',
      output: '500+ Bibit Pohon Tertanam & Komposter Dusun'
    },
    {
      title: 'Pengembangan potensi wisata desa',
      desc: 'Pembuatan papan penunjuk arah wisata ramah lingkungan menuju Curug Menteng dan Bukit Menteng Asri, serta video dokumenter pesona desa.',
      target: 'Kelompok Sadar Wisata (POKDARWIS)',
      output: 'Video Dokumenter Resmi & Papan Informasi Rute'
    },
    {
      title: 'Kegiatan sosial dan keagamaan',
      desc: 'Pendampingan posyandu balita & lansia bersama Bidan Desa, peringatan hari besar Islam, serta pengajian rutin pemuda majelis taklim.',
      target: 'Kader PKK, Posyandu, dan Jamaah Warga',
      output: 'Buku Pantau Gizi Balita & Tabligh Akbar Silaturahmi'
    }
  ];

  const galleryItems = [
    {
      src: kknActivityUmkm,
      caption: 'Workshop Digitalisasi & Pendampingan Pelaku UMKM Desa Warung Menteng',
      category: 'Ekonomi'
    },
    {
      src: kknProkerBudaya,
      caption: 'Musyawarah Kerja dan Koordinasi Bersama Tokoh Masyarakat & RT/RW',
      category: 'Sosial'
    },
    {
      src: kknProkerWebsite,
      caption: 'Sosialisasi Website & Digitalisasi Pelayanan Administrasi Desa',
      category: 'Teknologi'
    },
    {
      src: kknKerjaBakti,
      caption: 'Aksi Bersih Lingkungan & Gotong Royong Bersama Warga',
      category: 'Lingkungan'
    },
    {
      src: kknMengajarBale,
      caption: 'Bimbingan Belajar dan Edukasi Literasi Anak-Anak Desa',
      category: 'Pendidikan'
    },
    {
      src: kknPanorama,
      caption: 'Pesona Lanskap Alam dan Masjid Desa Warung Menteng',
      category: 'Panorama'
    }
  ];

  return (
    <div className="bg-[#f8faf9] min-h-screen text-slate-800 font-sans pb-12">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-6">
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs border border-slate-200/90 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column Text & Yellow CTA Button */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-2xl sm:text-3xl font-medium text-slate-800 tracking-tight block">
                  Desa
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-none mt-1">
                  Warung Menteng
                </h1>
              </div>

              <div className="space-y-2 pt-1">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  Bersama Mahasiswa, Membangun Desa<br /> Menuju Masa Depan yang Lebih Baik
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
                  Menggabungkan ilmu, pengalaman, dan pengabdian untuk tumbuh bersama menuju desa yang mandiri, maju, dan sejahtera.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate ? onNavigate('kkn-galeri') : setActiveModal('galeri')}
                  className="bg-[#facc15] hover:bg-[#eab308] text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition duration-200 shadow-xs inline-flex items-center gap-2 cursor-pointer hover:shadow-md active:scale-95"
                >
                  <User className="w-4 h-4 text-slate-950" />
                  <span>Lihat Album Kami</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>
            </div>

            {/* Right Column: Group Photo with Wooden Village Sign Replica */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-sm group">
                <img
                  src={kknHeroGroup}
                  alt="Kelompok KKN Wigata Dharma Desa Warung Menteng"
                  referrerPolicy="no-referrer"
                  className="w-full h-[260px] sm:h-[340px] lg:h-[380px] object-cover object-center group-hover:scale-[1.01] transition duration-500"
                />

                {/* Wooden Sign Board: Desa Warung Menteng */}
                <div className="absolute top-4 right-4 sm:top-5 sm:right-6 bg-gradient-to-b from-[#b57a48] to-[#875027] text-[#fff8ed] border-2 border-[#573014] rounded-xl px-3.5 sm:px-4 py-2 sm:py-2.5 shadow-2xl text-center transform rotate-1 hover:rotate-0 transition duration-300">
                  <span className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-[#3d210b] border border-[#d6a575]" />
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#3d210b] border border-[#d6a575]" />
                  <span className="absolute bottom-1 left-1 w-1.5 h-1.5 rounded-full bg-[#3d210b] border border-[#d6a575]" />
                  <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-[#3d210b] border border-[#d6a575]" />
                  <div className="text-[10px] sm:text-xs font-serif font-bold tracking-widest uppercase text-amber-200/90 leading-tight">
                    Desa
                  </div>
                  <div className="text-xs sm:text-sm font-serif font-black tracking-wide uppercase leading-tight drop-shadow-xs">
                    Warung
                  </div>
                  <div className="text-xs sm:text-sm font-serif font-black tracking-wide uppercase leading-tight drop-shadow-xs">
                    Menteng
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECTION ANGGOTA KKN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-5">
        
        {/* Section Title & Subtitle */}
        <div className="text-center space-y-1">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center justify-center gap-2">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-800" />
            <span>Anggota KKN Kelompok Wigata Dharma</span>
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Desa Warung Menteng - Kec. Cipeundeuy, Kab. Bogor
          </p>
        </div>

        {/* 5 Filter Tabs Bar */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 pt-1">
          
          {/* Semua Anggota Tab */}
          <button
            onClick={() => setActiveTab('SEMUA')}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition duration-200 flex items-center gap-2 border cursor-pointer ${
              activeTab === 'SEMUA'
                ? 'bg-[#064e3b] text-white border-[#064e3b] shadow-md ring-2 ring-emerald-600/30'
                : 'bg-white text-slate-700 border-slate-200/90 hover:border-emerald-300 hover:bg-emerald-50/40 shadow-2xs'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Semua Anggota</span>
          </button>

          {/* BPH Tab */}
          <button
            onClick={() => setActiveTab('BPH')}
            className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl text-left transition duration-200 border cursor-pointer ${
              activeTab === 'BPH'
                ? 'bg-[#064e3b] text-white border-[#064e3b] shadow-md ring-2 ring-emerald-600/30'
                : 'bg-white text-slate-700 border-slate-200/90 hover:border-emerald-300 hover:bg-emerald-50/40 shadow-2xs'
            }`}
          >
            <div className="flex items-center gap-2">
              <User className={`w-4 h-4 ${activeTab === 'BPH' ? 'text-amber-300' : 'text-slate-500'}`} />
              <div>
                <span className="block text-xs font-black uppercase tracking-wider leading-none">
                  BPH
                </span>
                <span className={`text-[10px] leading-tight block mt-0.5 ${activeTab === 'BPH' ? 'text-emerald-100' : 'text-slate-500'}`}>
                  Badan Pengurus Harian
                </span>
              </div>
            </div>
          </button>

          {/* ACARA Tab */}
          <button
            onClick={() => setActiveTab('ACARA')}
            className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl text-left transition duration-200 border cursor-pointer ${
              activeTab === 'ACARA'
                ? 'bg-[#064e3b] text-white border-[#064e3b] shadow-md ring-2 ring-emerald-600/30'
                : 'bg-white text-slate-700 border-slate-200/90 hover:border-emerald-300 hover:bg-emerald-50/40 shadow-2xs'
            }`}
          >
            <div className="flex items-center gap-2">
              <Calendar className={`w-4 h-4 ${activeTab === 'ACARA' ? 'text-amber-300' : 'text-slate-500'}`} />
              <div>
                <span className="block text-xs font-black uppercase tracking-wider leading-none">
                  ACARA
                </span>
                <span className={`text-[10px] leading-tight block mt-0.5 ${activeTab === 'ACARA' ? 'text-emerald-100' : 'text-slate-500'}`}>
                  Divisi Acara
                </span>
              </div>
            </div>
          </button>

          {/* HUMAS Tab */}
          <button
            onClick={() => setActiveTab('HUMAS')}
            className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl text-left transition duration-200 border cursor-pointer ${
              activeTab === 'HUMAS'
                ? 'bg-[#064e3b] text-white border-[#064e3b] shadow-md ring-2 ring-emerald-600/30'
                : 'bg-white text-slate-700 border-slate-200/90 hover:border-emerald-300 hover:bg-emerald-50/40 shadow-2xs'
            }`}
          >
            <div className="flex items-center gap-2">
              <Megaphone className={`w-4 h-4 ${activeTab === 'HUMAS' ? 'text-amber-300' : 'text-slate-500'}`} />
              <div>
                <span className="block text-xs font-black uppercase tracking-wider leading-none">
                  HUMAS
                </span>
                <span className={`text-[10px] leading-tight block mt-0.5 ${activeTab === 'HUMAS' ? 'text-emerald-100' : 'text-slate-500'}`}>
                  Divisi Hubungan Masyarakat
                </span>
              </div>
            </div>
          </button>

          {/* MEDIA Tab */}
          <button
            onClick={() => setActiveTab('MEDIA')}
            className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl text-left transition duration-200 border cursor-pointer ${
              activeTab === 'MEDIA'
                ? 'bg-[#064e3b] text-white border-[#064e3b] shadow-md ring-2 ring-emerald-600/30'
                : 'bg-white text-slate-700 border-slate-200/90 hover:border-emerald-300 hover:bg-emerald-50/40 shadow-2xs'
            }`}
          >
            <div className="flex items-center gap-2">
              <Camera className={`w-4 h-4 ${activeTab === 'MEDIA' ? 'text-amber-300' : 'text-slate-500'}`} />
              <div>
                <span className="block text-xs font-black uppercase tracking-wider leading-none">
                  MEDIA
                </span>
                <span className={`text-[10px] leading-tight block mt-0.5 ${activeTab === 'MEDIA' ? 'text-emerald-100' : 'text-slate-500'}`}>
                  Divisi Media & Dokumentasi
                </span>
              </div>
            </div>
          </button>

        </div>

        {/* Member Cards Grid */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-xs">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-3 sm:gap-3.5">
            {filteredMembers.map(member => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group flex flex-col items-center text-center cursor-pointer p-2 rounded-2xl hover:bg-emerald-50/50 transition duration-200 border border-transparent hover:border-emerald-200"
              >
                {/* Circle Avatar with Vibrant Green Border Ring */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-0.5 border-2 border-emerald-600 bg-white shadow-2xs group-hover:scale-105 transition-transform duration-200">
                  <img
                    src={member.photo}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>

                {/* Name */}
                <h3 className="text-xs font-bold text-slate-900 mt-2 line-clamp-1 group-hover:text-emerald-800">
                  {member.name}
                </h3>

                {/* Role */}
                <span className="text-[10px] font-semibold text-slate-500 mt-0.5 block leading-none">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 3. FOUR BENTO CARDS (Latar Belakang, Program Kerja, Galeri, Struktur) */}
      <section id="kkn-program-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          
          {/* Card 1: Latar Belakang */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm sm:text-base border-b border-slate-100 pb-2.5">
                <BookOpen className="w-4 h-4 text-emerald-800" />
                <span>Latar Belakang</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed text-justify">
                Desa Warung Menteng memiliki potensi besar dalam bidang pertanian, pariwisata alam, dan budaya lokal. Namun masih dihadapkan pada berbagai tantangan seperti keterbatasan akses informasi, pelayanan publik, serta pengembangan SDM. Melalui program KKN, kami berkomitmen untuk hadir memberikan kontribusi nyata bagi masyarakat.
              </p>
            </div>

            <div>
              <button
                onClick={() => onNavigate ? onNavigate('kkn-latar-belakang') : setActiveModal('latar-belakang')}
                className="w-full bg-[#064e3b] hover:bg-[#043d2c] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition duration-200 flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
              >
                <span>Lihat Selengkapnya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Album Kami */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm sm:text-base border-b border-slate-100 pb-2.5">
                <ImageIcon className="w-4 h-4 text-emerald-800" />
                <span>Album Kami</span>
              </div>

              {/* Photo Collage Preview (2 rows x 3 photos) */}
              <div className="grid grid-cols-3 gap-1.5">
                {galleryItems.map((photo, idx) => (
                  <img
                    key={idx}
                    src={photo.src}
                    alt={photo.caption}
                    referrerPolicy="no-referrer"
                    onClick={() => setSelectedGalleryPhoto(photo.src)}
                    className="w-full h-14 sm:h-16 rounded-lg object-cover cursor-pointer hover:opacity-90 transition border border-slate-100 shadow-2xs"
                  />
                ))}
              </div>
            </div>

            <div>
              <button
                onClick={() => onNavigate ? onNavigate('kkn-galeri') : setActiveModal('galeri')}
                className="w-full bg-[#064e3b] hover:bg-[#043d2c] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition duration-200 flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
              >
                <span>Lihat Selengkapnya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: Struktur Organisasi Diagram */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-sm sm:text-base border-b border-slate-100 pb-2.5">
                <Network className="w-4 h-4 text-emerald-800" />
                <span>Struktur Organisasi</span>
              </div>

              {/* Organogram Chart Schematic */}
              <div className="bg-emerald-50/20 rounded-2xl p-2.5 border border-emerald-200/70 space-y-1.5 text-[9px]">
                
                {/* DPL */}
                <div className="flex justify-center">
                  <div className="bg-white border border-slate-300/80 px-2.5 py-0.5 rounded text-center shadow-2xs">
                    <span className="block font-bold text-slate-400 text-[8px] uppercase">DPL</span>
                    <span className="font-extrabold text-slate-800 text-[9px]">Dr. Muhammad Afifi, M.H.</span>
                  </div>
                </div>

                {/* Line connector */}
                <div className="w-px h-1.5 bg-slate-300 mx-auto" />

                {/* Ketua & Wakil */}
                <div className="grid grid-cols-2 gap-1">
                  <div className="bg-white border border-slate-300/80 px-1.5 py-0.5 rounded text-center shadow-2xs">
                    <span className="block text-[7px] text-slate-400 font-bold uppercase">Ketua</span>
                    <span className="font-extrabold text-slate-800 truncate block text-[9px]">Fajri Maulana</span>
                  </div>
                  <div className="bg-white border border-slate-300/80 px-1.5 py-0.5 rounded text-center shadow-2xs">
                    <span className="block text-[7px] text-slate-400 font-bold uppercase">Wakil Ketua</span>
                    <span className="font-extrabold text-slate-800 truncate block text-[9px]">Ayu Rahmadini</span>
                  </div>
                </div>

                {/* Line connector */}
                <div className="w-px h-1.5 bg-slate-300 mx-auto" />

                {/* BPH Tier */}
                <div className="grid grid-cols-4 gap-1 text-[8px]">
                  <div className="bg-white border border-slate-200 p-0.5 rounded text-center">
                    <span className="block text-[7px] text-slate-400 leading-none">Secretaries Umum</span>
                    <span className="font-bold text-slate-800 truncate block">Akhdan F.</span>
                  </div>
                  <div className="bg-white border border-slate-200 p-0.5 rounded text-center">
                    <span className="block text-[7px] text-slate-400 leading-none">Wakil Secretaries</span>
                    <span className="font-bold text-slate-800 truncate block">Safitri N.</span>
                  </div>
                  <div className="bg-white border border-slate-200 p-0.5 rounded text-center">
                    <span className="block text-[7px] text-slate-400">Bendahara Umum</span>
                    <span className="font-bold text-slate-800 truncate block">Arjuna</span>
                  </div>
                  <div className="bg-white border border-slate-200 p-0.5 rounded text-center">
                    <span className="block text-[7px] text-slate-400 leading-none">Wakil Bendahara</span>
                    <span className="font-bold text-slate-800 truncate block">Difina A.</span>
                  </div>
                </div>

                {/* Divisi Tier */}
                <div className="grid grid-cols-3 gap-1 text-[8px] pt-0.5">
                  <div className="bg-emerald-50/80 border border-emerald-200/80 p-1 rounded text-center">
                    <span className="block font-bold text-emerald-900 text-[8px]">Acara</span>
                    <span className="text-[7px] text-slate-500 leading-tight block">Munhamir (Koord), Devran, Andika, RISNA, Achmad, Ikmal, Caisar</span>
                  </div>
                  <div className="bg-emerald-50/80 border border-emerald-200/80 p-1 rounded text-center">
                    <span className="block font-bold text-emerald-900 text-[8px]">Humas</span>
                    <span className="text-[7px] text-slate-500 leading-tight block">M. Arifin (Koord), M. Ramadhan Giri, Siti Khoiroh, Try Mauna</span>
                  </div>
                  <div className="bg-emerald-50/80 border border-emerald-200/80 p-1 rounded text-center">
                    <span className="block font-bold text-emerald-900 text-[8px]">Media</span>
                    <span className="text-[7px] text-slate-500 leading-tight block">Qomarudin (Koord), Akhsan, Aisyah</span>
                  </div>
                </div>

              </div>
            </div>

            <div>
              <button
                onClick={() => setActiveModal('struktur')}
                className="w-full bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold py-2 px-3 rounded-xl border border-slate-300 shadow-2xs flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <Users className="w-3.5 h-3.5 text-emerald-700" />
                <span>20 Mahasiswa & DPL</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FOOTER BANNER KKN WIGATA DHARMA */}
      <footer className="bg-[#064e3b] text-white mt-8 border-t border-emerald-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            
            {/* Left Brand Identity */}
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="w-11 h-11 rounded-full bg-white border-2 border-emerald-300 overflow-hidden shadow-md shrink-0">
                <img
                  src={kknLogo}
                  alt="Logo KKN Wigata Dharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                  Kelompok KKN WIGATA DHARMA
                </h4>
                <p className="text-[11px] text-emerald-100/90 font-medium">
                  Mahasiswa Universitas Nahdlatul Ulama Indonesia (UNUSIA)
                </p>
                <span className="text-[10px] text-amber-300/90 font-semibold block">
                  Tahun 2026
                </span>
              </div>
            </div>

            {/* Center Cursive Quote */}
            <div className="text-center italic font-serif text-emerald-100 text-sm sm:text-base tracking-wide px-2">
              &ldquo;Bersama Warga, Membangun Warung Menteng&rdquo;
            </div>

            {/* Right Social Media & Contacts */}
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram KKN"
                className="w-8 h-8 rounded-full border border-white/60 hover:bg-white/15 text-white flex items-center justify-center transition shadow-2xs"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok KKN"
                className="w-8 h-8 rounded-full border border-white/60 hover:bg-white/15 text-white flex items-center justify-center transition shadow-2xs"
              >
                <TikTokIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:kkn.warungmenteng@gmail.com"
                aria-label="Email KKN"
                className="w-8 h-8 rounded-full border border-white/60 hover:bg-white/15 text-white flex items-center justify-center transition shadow-2xs"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* MODALS SECTION */}
      {/* ========================================================================= */}

      {/* MODAL 1: Detail Anggota KKN */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200 space-y-4">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-24 h-24 rounded-full p-1 border-2 border-emerald-600 bg-white shadow-md">
                <img
                  src={selectedMember.photo}
                  alt={selectedMember.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">{selectedMember.name}</h3>
                <span className="text-xs font-extrabold text-emerald-800 bg-emerald-100 px-3 py-0.5 rounded-full inline-block mt-1">
                  {selectedMember.role} - Divisi {selectedMember.division}
                </span>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  {selectedMember.prodi || 'Mahasiswa UNUSIA 2024'}
                </p>
              </div>
            </div>

            {selectedMember.quote && (
              <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-2xl p-4 text-xs text-emerald-950 italic text-center">
                &ldquo;{selectedMember.quote}&rdquo;
              </div>
            )}

            <div className="space-y-2 text-xs border-t border-slate-100 pt-3">
              <div className="flex items-center justify-between text-slate-600 py-1">
                <span className="text-slate-400">Lembaga Perguruan Tinggi</span>
                <span className="font-semibold text-slate-800">Universitas Nahdlatul Ulama Indonesia</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 py-1">
                <span className="text-slate-400">Wilayah Pengabdian</span>
                <span className="font-semibold text-slate-800">Desa Warung Menteng</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 py-1">
                <span className="text-slate-400">Status Tugas</span>
                <span className="font-semibold text-emerald-700">Aktif Lapangan 2026</span>
              </div>
            </div>

            <div className="pt-2 flex gap-2">
              <button
                onClick={() => setSelectedMember(null)}
                className="w-full bg-[#064e3b] hover:bg-[#043d2c] text-white font-bold py-2.5 rounded-xl text-xs transition"
              >
                Tutup Profil
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Latar Belakang Detail */}
      {activeModal === 'latar-belakang' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto space-y-4">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 text-slate-900 font-extrabold text-xl border-b border-slate-100 pb-3">
              <BookOpen className="w-6 h-6 text-emerald-800" />
              <span>Latar Belakang KKN Kelompok Wigata Dharma</span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                Kuliah Kerja Nyata (KKN) Kelompok <strong>Wigata Dharma</strong> merupakan bentuk pengejawantahan Tri Dharma Perguruan Tinggi oleh mahasiswa <strong>Universitas Nahdlatul Ulama Indonesia (UNUSIA)</strong> tahun 2026 yang ditempatkan di <strong>Desa Warung Menteng</strong>, Kecamatan Cijeruk, Kabupaten Bogor.
              </p>
              
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-1.5">
                <h4 className="font-bold text-emerald-900 text-xs sm:text-sm">
                  Tujuan Utama Pengabdian:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-emerald-800">
                  <li>Mengakselerasi digitalisasi sistem administrasi dan pelayanan publik desa.</li>
                  <li>Mendorong hilirisasi produk UMKM olahan pangan lokal dan kerajinan bambu.</li>
                  <li>Meningkatkan indeks literasi dan minat baca generasi penerus desa.</li>
                  <li>Menjaga kelestarian lingkungan dan ketahanan bencana lereng Gunung Salak.</li>
                </ul>
              </div>

              <p>
                Dengan semangat <em>&ldquo;Bersama Warga, Membangun Warung Menteng&rdquo;</em>, tim KKN beranggotakan 21 mahasiswa lintas program studi berkolaborasi secara intensif bersama Kepala Desa, perangkat desa, tokoh agama, ketua RT/RW, dan generasi pemuda Karang Taruna.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="bg-[#064e3b] hover:bg-[#043d2c] text-white font-bold px-5 py-2.5 rounded-xl text-xs transition"
              >
                Selesai Membaca
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: Program Kerja KKN Detail */}
      {activeModal === 'program-kerja' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto space-y-5">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 text-slate-900 font-extrabold text-xl border-b border-slate-100 pb-3">
              <Calendar className="w-6 h-6 text-emerald-800" />
              <span>Rincian 6 Program Kerja Utama KKN</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {programKerjaList.map((item, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  
                  <div className="pt-2 border-t border-slate-200/80 text-[11px] space-y-1">
                    <div className="text-slate-500">
                      <strong>Sasaran:</strong> {item.target}
                    </div>
                    <div className="text-emerald-700 font-medium">
                      <strong>Output:</strong> {item.output}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="bg-[#064e3b] hover:bg-[#043d2c] text-white font-bold px-5 py-2.5 rounded-xl text-xs transition"
              >
                Tutup Rincian
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 4: Galeri Foto Lightbox */}
      {activeModal === 'galeri' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto space-y-5">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 text-slate-900 font-extrabold text-xl border-b border-slate-100 pb-3">
              <ImageIcon className="w-6 h-6 text-emerald-800" />
              <span>Dokumentasi Kegiatan KKN Wigata Dharma</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {galleryItems.map((photo, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedGalleryPhoto(photo.src)}
                  className="group rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 cursor-pointer shadow-2xs hover:shadow-md transition"
                >
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    <span className="absolute top-2 left-2 bg-slate-950/70 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                      {photo.category}
                    </span>
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-slate-700 font-medium leading-snug line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="bg-[#064e3b] hover:bg-[#043d2c] text-white font-bold px-5 py-2.5 rounded-xl text-xs transition"
              >
                Tutup Galeri
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 5: Struktur Organisasi Lengkap */}
      {activeModal === 'struktur' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto space-y-5">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 text-slate-900 font-extrabold text-xl border-b border-slate-100 pb-3">
              <Network className="w-6 h-6 text-emerald-800" />
              <span>Struktur Kepengurusan KKN Kelompok Wigata Dharma</span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-center justify-between">
                <span>Dosen Pembimbing Lapangan (DPL):</span>
                <span className="font-extrabold text-sm">Dr. Muhammad Afifi, M.H.</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                    Badan Pengurus Harian (BPH)
                  </h4>
                  <ul className="text-xs space-y-1.5 text-slate-800">
                    <li><strong>1. Ketua:</strong> Fajri Maulana</li>
                    <li><strong>2. Wakil Ketua:</strong> Ayu Rahmadini</li>
                    <li><strong>3. Secretaries Umum:</strong> Akhdan Fadhil Santoso</li>
                    <li><strong>4. Wakil Secretaries:</strong> Safitri Naufal</li>
                    <li><strong>5. Bendahara Umum:</strong> Arjuna</li>
                    <li><strong>6. Wakil Bendahara:</strong> Difina Agusti Rahmawati</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                      Divisi Humas
                    </h4>
                    <ul className="text-xs space-y-1 text-slate-800 mt-1">
                      <li><strong>1. Koordinator HUMAS:</strong> Muhammad Arifin Fadhillah</li>
                      <li><strong>2. Anggota HUMAS:</strong> Muhammad Ramadhan Giri Wardana</li>
                      <li><strong>3. Anggota HUMAS:</strong> Siti Khoiroh</li>
                      <li><strong>4. Anggota HUMAS:</strong> Try Mauna</li>
                    </ul>
                  </div>

                  <div className="border-t border-slate-200/80 pt-2">
                    <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                      Divisi Media
                    </h4>
                    <ul className="text-xs space-y-1 text-slate-800 mt-1">
                      <li><strong>1. Koordinator MEDIA:</strong> Qomarudin Tokan</li>
                      <li><strong>2. Anggota MEDIA:</strong> Akhsan efriel wanda yuda pratama</li>
                      <li><strong>3. Anggota MEDIA:</strong> Aisyah al atas</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                  Divisi Acara
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-800">
                  <p><strong>1. Koordinator Acara:</strong> Munhamir Nadzir</p>
                  <p><strong>2. Anggota Acara:</strong> Devran Azzahra</p>
                  <p><strong>3. Anggota Acara:</strong> Andika Febriansyah</p>
                  <p><strong>4. Anggota Acara:</strong> RISNA</p>
                  <p><strong>5. Anggota Acara:</strong> Achmad Pahlevi Ramadhan</p>
                  <p><strong>6. Anggota Acara:</strong> Ikmal Nur Awaludin</p>
                  <p><strong>7. Anggota Acara:</strong> Caisar Fayth Isyadirda</p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="bg-[#064e3b] hover:bg-[#043d2c] text-white font-bold px-5 py-2.5 rounded-xl text-xs transition"
              >
                Tutup Struktur
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SINGLE PHOTO LIGHTBOX */}
      {selectedGalleryPhoto && (
        <div 
          onClick={() => setSelectedGalleryPhoto(null)}
          className="fixed inset-0 z-60 bg-slate-950/90 flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in"
        >
          <div className="max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/20 shadow-2xl relative">
            <img
              src={selectedGalleryPhoto}
              alt="Pratinjau Foto Dokumentasi KKN"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setSelectedGalleryPhoto(null)}
              className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full hover:bg-black transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
