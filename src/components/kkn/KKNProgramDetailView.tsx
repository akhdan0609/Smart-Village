import React from 'react';
import { 
  ArrowLeft, 
  ChevronRight, 
  Globe, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck, 
  Target, 
  Users, 
  Calendar, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';
import { PageRoute } from '../../types';

// Image Assets
import kknProkerWebsite from '../../assets/images/kkn_proker_website_1788606042072.jpg';
import Cyberbuliying_KKN from '../../assets/images/Cyberbuliying_KKN.jpeg';
import Kepala_MTS_KKN from '../../assets/images/Kepala_MTS_KKN.jpeg';
import Siswi_MTS_KKN from '../../assets/images/Siswi_MTS_KKN.jpeg';
import Bangga_Budaya_KKN from '../../assets/images/Banggabudaya_KKN.jpeg';
import Kepala_SDN_KKN from '../../assets/images/Kepala_SDN_KKN.jpeg';
import Pembagian_hadiah_KKN from '../../assets/images/Pembagian_hadiah_KKN.jpeg';
import Edukasi_KKN from '../../assets/images/Edukasi_KKN.jpeg';
import Sertif_pemateri_KKN from '../../assets/images/Sertif_pemateri_KKN.jpeg';
import Pengajaran_KKN from '../../assets/images/Pengajaran_KKN.jpeg';

interface ProkerDetail {
  id: string;
  route: PageRoute;
  icon: React.ElementType;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  longDescription: string;
  goals: string[];
  target: string;
  schedule: string;
  photos: { src: string; title: string; caption: string }[];
}

interface KKNProgramDetailViewProps {
  prokerId: string;
  onNavigate?: (page: PageRoute) => void;
}

const PROKER_DETAILS: ProkerDetail[] = [
  {
    id: 'proker-1',
    route: 'kkn-proker-1' as PageRoute,
    icon: Globe,
    title: 'Pembuatan Website Desa Warung Menteng',
    badge: 'Digitalisasi Desa',
    tagline: 'Membangun portal informasi digital resmi Desa Warung Menteng.',
    description: 'Membangun website desa sebagai media informasi digital yang menyajikan profil desa, berita, potensi, layanan, dan program desa secara transparan dan mudah diakses masyarakat.',
    longDescription: 'Program ini fokus pada pembangunan portal resmi Desa Warung Menteng yang menjadi pusat informasi terpadu bagi masyarakat. Tahapan dimulai dari analisis kebutuhan informasi desa, perancangan struktur konten, pengembangan tampilan, hingga uji coba portal bersama perangkat desa dan warga. Hasilnya diharapkan memberikan transparansi informasi, kemudahan layanan publik, serta promosi potensi desa yang lebih luas.',
    goals: [
      'Menyediakan informasi profil dan berita desa yang transparan',
      'Mempermudah masyarakat mengakses layanan administrasi online',
      'Membantu promosi potensi wisata dan UMKM desa'
    ],
    target: 'Perangkat Desa & Masyarakat Umum',
    schedule: 'Minggu ke-1 s.d. ke-4 (Pembuatan & Peluncuran)',
    photos: [
      {
        src: kknProkerWebsite,
        title: 'Sosialisasi Website Desa',
        caption: 'Demonstrasi modul sistem informasi desa dan formulir pelayanan surat online.'
      },
      {
        src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=700&q=80',
        title: 'Pengembangan Konten Web',
        caption: 'Input data profil, demografi, dan struktur kelembagaan desa.'
      },
      {
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80',
        title: 'Uji Coba Portal Desa',
        caption: 'Pengujian kecepatan akses dan kemudahan antarmuka bagi warga desa.'
      }
    ]
  },
  {
    id: 'proker-2',
    route: 'kkn-proker-2' as PageRoute,
    icon: MessageSquare,
    title: 'Edukasi Cyber Bullying',
    badge: 'Edukasi & Kesadaran Digital',
    tagline: 'Menciptakan lingkungan digital yang aman dan positif bagi generasi muda.',
    description: 'Memberikan edukasi kepada siswa tentang bahaya cyber bullying, etika digital, dan cara menggunakan internet dengan bijak agar tercipta lingkungan digital yang aman dan positif.',
    longDescription: 'Peserta KKN melaksanakan sosialisasi "Cyber Bullying" di MTs Arrosyid II sebagai bagian dari Proker Divisi Pendidikan PJ FTIK.',
    goals: [
      'Meningkatkan kesadaran siswa akan bahaya cyber bullying',
      'Menanamkan etika digital dan perilaku bijak bermedia sosial',
      'Mendorong budaya saling menjaga di lingkungan digital'
    ],
    target: 'Siswa Siswi kelas 9 Sekolah MTS Ar-Rosyid 2 Desa Warung Menteng',
    schedule: 'Minggu ke-4 di hari rabu tanggal 9 September 2026 jam 08.30 s.d. 10.15 (Kegiatan Sekolah)',
    photos: [
      {
        src:  Cyberbuliying_KKN,
        title: 'Kelas Literasi Digital',
        caption: 'Penyampaian materi anti cyber-bullying dan etika bermedia sosial di sekolah dan Sesi tanya jawab studi kasus dan contoh perilaku bijak bermedia.'
      },
      {
        src: Kepala_MTS_KKN,
        title: 'Pembagian Sertifikat',
        caption: 'Memberikan Cinderamata kepada pihak kepala Sekolah yang telah memberikan Ruang pembelajaran kepada Kelompok KKN Wigataha Dharma.'
      },
      {
        src: Siswi_MTS_KKN,
        title: 'Simulasi Perilaku Positif',
        caption: 'Praktik saling mendukung dan menjaga persahabatan di era digital melalui potret lewat frame foto booth yang di buat oleh Kelompok KKN.'
      }
    ]
  },
  {
    id: 'proker-3',
    route: 'kkn-proker-3' as PageRoute,
    icon: Sparkles,
    title: 'Bangga Budaya',
    badge: 'Pelestarian Budaya Lokal',
    tagline: 'Menumbuhkan kecintaan generasi muda terhadap budaya daerah.',
    description: 'Mengajak generasi muda untuk mencintai dan melestarikan budaya daerah melalui kegiatan edukatif dan kreatif seperti pengenalan seni, tradisi, dan permainan tradisional.',
    longDescription: 'Peserta KKN melaksanakan sosialisasi "Aku Cinta Budaya" di SDN Lengis. Kegiatan ini merupakan Proker Pertama Divisi Pendidikan dengan Prodi SPI sebagai penanggung jawab (PJ).',
    goals: [
      'Menghidupkan kembali permainan tradisional Sunda',
      'Mengenalkan kesenian dan seni budaya lokal kepada generasi muda',
      'Mendukung pengrajin kerajinan budaya khas desa'
    ],
    target: 'Siswa-siswi Sekolah Dasar negri Lengis',
    schedule: 'Minggu ke-3 di hari senin tanggal 31 Agustus 2026 jam 09.30 s.d. 11.53 (Kegiatan Sekolah)',
    photos: [
      {
        src: Bangga_Budaya_KKN,
        title: 'Apresiasi Budaya Lokal',
        caption: 'Mengenalkan permainan tradisional Sunda dan kesenian calung kepada generasi muda.'
      },
      {
        src: Kepala_SDN_KKN,
        title: 'Pembagian Sertifikat ',
        caption: 'Memberikan Cinderamata kepada pihak kepala Sekolah yang telah memberikan Ruang pembelajaran kepada Kelompok KKN Wigataha Dharma.'
      },
      {
        src: Pembagian_hadiah_KKN,
        title: 'Bentuk Apresiasi Peserta',
        caption: 'Memberikan hadiah kepada mereka yang berhasil dalam mengikuti kegiatan Tentang Bangga budaya.'
      }
    ]
  },
  {
    id: 'proker-4',
    route: 'kkn-proker-4' as PageRoute,
    icon: ShieldCheck,
    title: 'Pencegahan Kekerasan & Pelecehan Seksual',
    badge: 'Sosialisasi & Perlindungan',
    tagline: 'Menumbuhkan lingkungan desa yang aman, ramah anak, dan bebas kekerasan.',
    description: 'Meningkatkan kesadaran masyarakat tentang pentingnya pencegahan kekerasan dan pelecehan seksual di lingkungan sekitar melalui sosialisasi dan diskusi interaktif.',
    longDescription: 'Peserta KKN melaksanakan sosialisasi "Anti Pelecehan Seksual" di SMK As-Syukur sebagai bagian dari Proker Divisi Pendidikan dengan Prodi Ilmu Hukum sebagai PJ.',
    goals: [
      'Meningkatkan kesadaran masyarakat akan perlindungan anak & perempuan',
      'Menyediakan ruang diskusi dan konsultasi bagi warga',
      'Mewujudkan deklarasi lingkungan desa bebas kekerasan'
    ],
    target: 'Siswa-siswi SMK As-Syukur',
    schedule: 'Minggu ke-4 tanggal 10 September 2026 jam 09.30 s.d. 12.08  (Sosialisasi)',
    photos: [
      {
        src: Edukasi_KKN,
        title: 'Sosialisasi Perlindungan anak',
        caption: 'Penyuluhan tentang perlindungan anak dan perempuan bersama Siswa-Siswi SMK As-Syukur.'
      },
      {
        src: Sertif_pemateri_KKN,
        title: 'Pembagian Sertifikat Pemateri',
        caption: 'Diskusi Terbuka anatara Pemateri bersama Siswa-Siswi SMK As-Syukur Tentang Edukasi anti pelecehan Sexsual.'
      },
      {
        src: Pengajaran_KKN,
        title: 'Komitmen Bersama',
        caption: 'Penandatanganan deklarasi lingkungan desa ramah anak dan bebas kekerasan.'
      }
    ]
  }
];

export const KKNProgramDetailView: React.FC<KKNProgramDetailViewProps> = ({ prokerId, onNavigate }) => {
  const proker = PROKER_DETAILS.find(p => p.id === prokerId) || PROKER_DETAILS[0];
  const Icon = proker.icon;

  const otherProkers = PROKER_DETAILS.filter(p => p.id !== proker.id);

  return (
    <div className="min-h-screen bg-[#f7f9f8] text-slate-800 font-sans pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">

        {/* Breadcrumb & Back */}
        <div className="flex items-center justify-between text-xs text-slate-500 pb-1">
          <button
            onClick={() => onNavigate ? onNavigate('kkn-latar-belakang') : null}
            className="inline-flex items-center gap-1.5 text-emerald-800 hover:text-emerald-950 font-semibold transition cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Latar Belakang</span>
          </button>
          <div className="flex items-center gap-1.5">
            <span className="cursor-pointer hover:text-emerald-700" onClick={() => onNavigate ? onNavigate('kkn') : null}>KKN</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="cursor-pointer hover:text-emerald-700" onClick={() => onNavigate ? onNavigate('kkn-latar-belakang') : null}>Latar Belakang</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-semibold text-emerald-800">Program Kerja</span>
          </div>
        </div>

        {/* HERO BANNER */}
        <div className="relative rounded-3xl sm:rounded-[32px] overflow-hidden shadow-sm bg-[#0a3828] min-h-[220px] sm:min-h-[260px] flex items-end">
          <div className="absolute inset-0">
            <img
              src={proker.photos[0].src}
              alt={proker.title}
              className="w-full h-full object-cover object-center brightness-[0.5]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#032e1c]/95 via-[#064228]/70 to-[#032e1c]/30" />
          </div>

          <div className="relative z-10 w-full p-6 sm:p-10 lg:p-12 text-white space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 border border-white/20 text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase backdrop-blur-xs">
              <Layers className="w-3.5 h-3.5 text-emerald-300" />
              <span>Program Kerja KKN • {proker.badge}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug drop-shadow-sm max-w-3xl">
              {proker.title}
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-2xl">
              {proker.tagline}
            </p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* LEFT: Description & Photos */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 bg-[#0a3828] text-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                    {proker.badge}
                  </h2>
                  <p className="text-xs text-slate-500">Program Kerja Unggulan KKN Wigata Dharma</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                {proker.longDescription}
              </p>
            </div>

            {/* Tujuan Program */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-7 shadow-xs space-y-4">
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <Target className="w-4.5 h-4.5 text-emerald-700" />
                Tujuan Program
              </h3>
              <div className="space-y-2.5">
                {proker.goals.map((goal, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">{goal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dokumentasi Kegiatan */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 pt-1">
                <div className="w-1.5 h-6 bg-[#0a3828] rounded-full shrink-0" />
                <h3 className="text-base sm:text-lg font-extrabold text-[#0a3828] tracking-tight">
                  Dokumentasi Kegiatan
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {proker.photos.map((photo, idx) => (
                  <div key={idx} className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-2xs">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-2.5 sm:p-3">
                      <p className="text-[11px] sm:text-xs font-bold text-white leading-snug">{photo.title}</p>
                      <p className="text-[10px] text-white/80 leading-snug mt-0.5 line-clamp-2">{photo.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Info & Other Programs */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900 tracking-tight">Informasi Program</h3>
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Sasaran</p>
                    <p className="text-xs text-slate-700 font-semibold leading-snug">{proker.target}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Pelaksanaan</p>
                    <p className="text-xs text-slate-700 font-semibold leading-snug">{proker.schedule}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Penyelenggara</p>
                    <p className="text-xs text-slate-700 font-semibold leading-snug">KKN Wigata Dharma UNUSIA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Lainnya */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs space-y-3">
              <h3 className="text-sm font-extrabold text-slate-900 tracking-tight">Program Lainnya</h3>
              <div className="space-y-2">
                {otherProkers.map((p) => {
                  const PIcon = p.icon;
                  return (
                    <button
                      key={p.id}
                      onClick={() => onNavigate ? onNavigate(p.route) : null}
                      className="w-full text-left flex items-center gap-3 p-3 rounded-xl border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/50 transition cursor-pointer group"
                    >
                      <div className="w-9 h-9 bg-[#0a3828] text-white rounded-lg flex items-center justify-center shrink-0">
                        <PIcon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-slate-800 leading-snug group-hover:text-emerald-900 line-clamp-2">
                          {p.title}
                        </p>
                        <p className="text-[10px] text-slate-500 mt-0.5">{p.badge}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};