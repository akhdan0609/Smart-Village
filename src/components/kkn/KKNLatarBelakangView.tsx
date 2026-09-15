import React, { useState } from 'react';
import { 
  Clock, 
  MapPin, 
  BookOpen, 
  ClipboardList, 
  Globe, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck, 
  X, 
  ZoomIn, 
  Instagram, 
   
  Mail,
  ArrowLeft,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';
import { PageRoute } from '../../types';

// Program Kerja Detail Routes (setiap proker punya halaman sendiri)
const PROKER_ROUTES: Record<string, PageRoute> = {
  'proker-1': 'kkn-proker-1',
  'proker-2': 'kkn-proker-2',
  'proker-3': 'kkn-proker-3',
  'proker-4': 'kkn-proker-4'
};

// Image Assets
import kknHeroGroup from '../../assets/images/kkn_hero_group_1788604287174.jpg';
import kknActivityUmkm from '../../assets/images/kkn_activity_umkm_1788604303052.jpg';
import kknProkerWebsite from '../../assets/images/kkn_proker_website_1788606042072.jpg';
import kknProkerCyberbullying from '../../assets/images/kkn_proker_cyberbullying_1788606061840.jpg';
import kknProkerBudaya from '../../assets/images/kkn_proker_budaya_1788606079432.jpg';
import kknProkerKekerasan from '../../assets/images/kkn_proker_kekerasan_1788606094172.jpg';
import kknTeamMedia from '../../assets/images/kkn_team_media_1788605216631.jpg';
import kknLogo from '../../assets/images/logo.png';

interface ModalImage {
  src: string;
  title: string;
  caption?: string;
}

interface KKNLatarBelakangViewProps {
  onNavigate?: (page: PageRoute) => void;
}

export const KKNLatarBelakangView: React.FC<KKNLatarBelakangViewProps> = ({ onNavigate }) => {
  const [activeModalImage, setActiveModalImage] = useState<ModalImage | null>(null);

  // Strip 1: Kisah Awal & Observasi (5 Photos)
  const journeyStrip1 = [
    {
      src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80',
      title: 'Hari Pertama di Desa',
      caption: 'Penerimaan dan sambutan hangat oleh pamong desa di Balai Desa Warung Menteng.'
    },
    {
      src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80',
      title: 'Musyawarah di Posko',
      caption: 'Koordinasi internal kelompok dalam merumuskan pemetaan masalah desa.'
    },
    {
      src: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80',
      title: 'Silaturahmi Tokoh Masyarakat',
      caption: 'Sowan ke kediaman Ketua RW dan sesepuh desa untuk memohon doa restu.'
    },
    {
      src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
      title: 'Observasi Lingkungan',
      caption: 'Penelusuran potensi pertanian dan sumber mata air bersih lereng Gunung Salak.'
    },
    {
      src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',
      title: 'Keindahan Warung Menteng',
      caption: 'Pemandangan asri dan sejuk kawasan perbukitan Desa Warung Menteng.'
    }
  ];

  // Strip 2: Dinamika & Evaluasi Akhir (5 Photos)
  const journeyStrip2 = [
    {
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80',
      title: 'Kebersamaan Pemuda',
      caption: 'Diskusi santai dan ramah tamah bersama rekan-rekan Karang Taruna.'
    },
    {
      src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
      title: 'Senyum Anak-Anak Desa',
      caption: 'Keceriaan bimbingan belajar dan permainan edukatif di posko.'
    },
    {
      src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
      title: 'Malam Ramah Tamah',
      caption: 'Momen keakraban bersama warga menjelang penutupan program KKN.'
    },
    {
      src: kknActivityUmkm,
      title: 'Sinergi Warga',
      caption: 'Pemberdayaan dan gotong royong bersama pelaku ekonomi lokal.'
    },
    {
      src: kknTeamMedia,
      title: 'Pelepasan & Perpisahan',
      caption: 'Momen haru berpamitan dengan seluruh pamong dan keluarga asuh desa.'
    }
  ];

  // 4 Main Programs with 3 Photos each (Exact match to galeri.jpeg)
  const programKerjaList = [
    {
      id: 'proker-1',
      icon: Globe,
      title: 'Pembuatan Website Desa Warung Menteng',
      description: 'Membangun website desa sebagai media informasi digital yang menyajikan profil desa, berita, potensi, layanan, dan program desa secara transparan dan mudah diakses masyarakat.',
      photos: [
        {
          src: kknProkerWebsite,
          title: 'Sosialisasi Website Desa',
          caption: 'Demonstrasi modul sistem informasi desa dan formulir pelayanan surat online.'
        },
        {
          src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=80',
          title: 'Pengembangan Konten Web',
          caption: 'Input data profil, demografi, dan struktur kelembagaan desa.'
        },
        {
          src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80',
          title: 'Uji Coba Portal Desa',
          caption: 'Pengujian kecepatan akses dan kemudahan antarmuka bagi warga desa.'
        }
      ]
    },
    {
      id: 'proker-2',
      icon: MessageSquare,
      title: 'Edukasi Cyber Bullying',
      description: 'Memberikan edukasi kepada siswa tentang bahaya cyber bullying, etika digital, dan cara menggunakan internet dengan bijak agar tercipta lingkungan digital yang aman dan positif.',
      photos: [
        {
          src: kknProkerCyberbullying,
          title: 'Kelas Literasi Digital',
          caption: 'Penyampaian materi anti cyber-bullying dan etika bermedia sosial di sekolah.'
        },
        {
          src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=500&q=80',
          title: 'Diskusi Interaktif Murid',
          caption: 'Sesi tanya jawab studi kasus dan contoh perilaku bijak bermedia.'
        },
        {
          src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500&q=80',
          title: 'Simulasi Perilaku Positif',
          caption: 'Praktik saling mendukung dan menjaga persahabatan di era digital.'
        }
      ]
    },
    {
      id: 'proker-3',
      icon: Sparkles,
      title: 'Bangga Budaya',
      description: 'Mengajak generasi muda untuk mencintai dan melestarikan budaya daerah melalui kegiatan edukatif dan kreatif seperti pengenalan seni, tradisi, dan permainan tradisional.',
      photos: [
        {
          src: kknProkerBudaya,
          title: 'Apresiasi Budaya Lokal',
          caption: 'Mengenalkan permainan tradisional Sunda dan kesenian calung kepada generasi muda.'
        },
        {
          src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=500&q=80',
          title: 'Pentas Seni Cilik',
          caption: 'Pertunjukan tari daerah anak-anak binaan posko KKN.'
        },
        {
          src: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=500&q=80',
          title: 'Eksplorasi Batik & Kerajinan',
          caption: 'Mendukung pengrajin anyaman bambu dan cinderamata khas desa.'
        }
      ]
    },
    {
      id: 'proker-4',
      icon: ShieldCheck,
      title: 'Pencegahan Kekerasan & Pelecehan Seksual',
      description: 'Meningkatkan kesadaran masyarakat tentang pentingnya pencegahan kekerasan dan pelecehan seksual di lingkungan sekitar melalui sosialisasi dan diskusi interaktif.',
      photos: [
        {
          src: kknProkerKekerasan,
          title: 'Sosialisasi Perlindungan Warga',
          caption: 'Penyuluhan hak perlindungan anak dan perempuan di Balai Pertemuan Warga.'
        },
        {
          src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=500&q=80',
          title: 'Forum Komunikasi Warga',
          caption: 'Diskusi terbuka bersama ibu-ibu kader PKK dan tokoh masyarakat.'
        },
        {
          src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=80',
          title: 'Komitmen Bersama',
          caption: 'Penandatanganan deklarasi lingkungan desa ramah anak dan bebas kekerasan.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f7f9f8] text-slate-800 font-sans relative overflow-x-hidden">
      
      {/* Subtle Botanical Leaf Watermark on Edges */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed inset-y-0 left-0 w-24 opacity-15 bg-[radial-gradient(#1e5838_1px,transparent_1px)] [background-size:24px_24px] z-0" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed inset-y-0 right-0 w-24 opacity-15 bg-[radial-gradient(#1e5838_1px,transparent_1px)] [background-size:24px_24px] z-0" 
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        
        {/* Navigation Breadcrumb & Back button */}
        {onNavigate && (
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate('kkn')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Portal KKN</span>
            </button>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <span className="cursor-pointer hover:text-emerald-700" onClick={() => onNavigate('kkn')}>KKN</span>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className="font-semibold text-emerald-800">Latar Belakang</span>
            </div>
          </div>
        )}

        {/* TOP HERO SECTION (matches the upper half of galeri.jpeg) */}
        <section className="bg-white rounded-3xl sm:rounded-[36px] border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Decorative Handwritten Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="font-serif italic text-lg sm:text-xl text-[#2a5b3f] tracking-wide">
                  Latar Belakang
                </span>
                <span className="text-emerald-700 text-xs select-none">🍃</span>
              </div>

              {/* Main Heading */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  Perjalanan KKN
                </h2>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a3828] tracking-tight leading-tight uppercase mt-0.5">
                  WIGATA DHARMA
                </h1>
              </div>

              {/* Narrative Text */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify max-w-xl">
                Kuliah Kerja Nyata (KKN) WIGATA DHARMA merupakan wujud nyata pengabdian mahasiswa kepada masyarakat. Selama 60 hari, kami hadir di Desa Warung Menteng untuk belajar, berbagi, dan berkolaborasi bersama masyarakat desa. Banyak momen kebersamaan, tantangan, kerja sama, serta kebersamaan yang akan selalu kami kenang.
              </p>

              {/* Info Badges (Durasi KKN & Lokasi) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-lg">
                
                {/* Durasi Badge */}
                <div className="flex items-center gap-3 p-3 rounded-2xl border border-slate-200/90 bg-slate-50/70">
                  <div className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center shrink-0 text-slate-700 shadow-2xs">
                    <Clock className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-500 font-medium">Durasi KKN</span>
                    <span className="block text-sm font-extrabold text-slate-900 leading-tight">60 Hari</span>
                    <span className="block text-[10px] text-slate-500">11 Agustus - 3 Oktober</span>
                  </div>
                </div>

                {/* Lokasi Badge */}
                <div className="flex items-center gap-3 p-3 rounded-2xl border border-slate-200/90 bg-slate-50/70">
                  <div className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center shrink-0 text-slate-700 shadow-2xs">
                    <MapPin className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-500 font-medium">Lokasi</span>
                    <span className="block text-sm font-extrabold text-slate-900 leading-tight">Desa Warung Menteng</span>
                    <span className="block text-[10px] text-slate-500">Kec. Cipeundeuy, Kab. Bogor</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Hero Image with Authentic Wooden Signboard */}
            <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-slate-200/80 group">
              <img
                src={kknHeroGroup}
                alt="Seluruh Anggota KKN Wigata Dharma UNUSIA di Desa Warung Menteng"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              
              {/* Wooden Signpost on the top right ("Desa Warung Menteng") */}
              <div className="absolute top-4 right-4 bg-[#c88d55] text-amber-950 font-black px-4 py-2 rounded-xl shadow-lg border-2 border-[#8f5e31] rotate-1 select-none backdrop-blur-xs flex flex-col items-center justify-center">
                {/* Faux screw nails */}
                <span className="absolute top-1 left-1.5 w-1.5 h-1.5 rounded-full bg-[#5c3719]" />
                <span className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-full bg-[#5c3719]" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#4a2609] leading-tight">
                  Desa
                </span>
                <span className="text-base sm:text-lg font-black tracking-tight leading-none text-[#2f1604]">
                  Warung
                </span>
                <span className="text-base sm:text-lg font-black tracking-tight leading-none text-[#2f1604]">
                  Menteng
                </span>
                <span className="absolute bottom-1 left-1.5 w-1.5 h-1.5 rounded-full bg-[#5c3719]" />
                <span className="absolute bottom-1 right-1.5 w-1.5 h-1.5 rounded-full bg-[#5c3719]" />
              </div>

            </div>

          </div>
        </section>

        {/* BOTTOM TWO-COLUMN CONTAINER: Kisah Perjalanan (Left) & Program Kerja (Right) */}
        <section className="bg-white rounded-3xl sm:rounded-[36px] border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-xs relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* LEFT COLUMN: Kisah Perjalanan Kami */}
            <div className="lg:col-span-6 space-y-5 lg:pr-4">
              
              {/* Header with Book / Quill Icon */}
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0a3828] flex items-center justify-center border border-emerald-200/60 shadow-2xs">
                  <BookOpen className="w-4 h-4 text-[#0a3828]" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                  Kisah Perjalanan Kami
                </h3>
              </div>

              {/* Story Paragraph 1 */}
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed text-justify">
                Perjalanan KKN kami dimulai pada tanggal 11 Agustus 2026, hari pertama kami tiba di Desa Warung Menteng dengan penuh semangat dan rasa ingin tahu. Kami disambut hangat oleh perangkat desa dan masyarakat yang begitu terbuka. Hari-hari awal kami gunakan untuk beradaptasi, mengenal lingkungan, serta membangun kedekatan dengan warga.
              </p>

              {/* Story Paragraph 2 */}
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed text-justify">
                Selama proses penerjunan, kami melakukan observasi untuk memahami kondisi desa, potensi yang ada, serta permasalahan yang dihadapi. Dari sinilah kami menyusun program kerja yang relevan dan bermanfaat bagi masyarakat.
              </p>

              {/* FIRST PHOTO STRIP (5 Photos in a Row) */}
              <div className="py-2">
                <div className="grid grid-cols-5 gap-2 sm:gap-2.5">
                  {journeyStrip1.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveModalImage(item)}
                      className="group/photo relative aspect-4/3 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover/photo:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/photo:bg-black/30 flex items-center justify-center transition-all opacity-0 group-hover/photo:opacity-100">
                        <ZoomIn className="w-4 h-4 text-white drop-shadow-md" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Story Paragraph 3 */}
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed text-justify">
                Memasuki minggu-minggu berikutnya, kami mulai menjalankan program kerja unggulan yang telah disusun. Kami percaya bahwa perubahan kecil yang konsisten akan memberikan dampak besar bagi desa. Setiap kegiatan kami rancang tidak hanya untuk memberikan manfaat jangka pendek, tetapi juga meninggalkan jejak positif yang berkelanjutan.
              </p>

              {/* Story Paragraph 4 */}
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed text-justify">
                Selama 60 hari, kami tidak hanya bekerja, tetapi juga belajar banyak hal dari masyarakat. Kami belajar tentang gotong royong, kesederhanaan, kekeluargaan, dan bagaimana hidup selaras dengan alam. Banyak momen berkesan yang kami alami, mulai dari kegiatan formal hingga obrolan santai di sore hari bersama warga.
              </p>

              {/* Story Paragraph 5 */}
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed text-justify">
                Menjelang akhir masa KKN, kami bersama masyarakat melakukan evaluasi atas program-program yang telah berjalan. Kami bahagia melihat antusiasme warga yang luar biasa serta harapan mereka agar program-program baik ini dapat terus berlanjut.
              </p>

              {/* Story Paragraph 6 */}
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed text-justify">
                Tanggal 3 Oktober 2026 menjadi hari perpisahan kami dengan Desa Warung Menteng. Dengan penuh haru, kami pamit kepada warga yang sudah kami anggap seperti keluarga sendiri. Meskipun perjalanan KKN ini berakhir, hubungan dan kenangan yang telah terjalin akan selalu kami bawa dalam hati.
              </p>

              {/* Closing Gratitude Note */}
              <p className="text-xs sm:text-[13px] font-semibold text-slate-800 italic leading-relaxed pt-1">
                Terima kasih, Warung Menteng, atas pengalaman dan pelajaran hidup yang tak ternilai harganya.
              </p>

              {/* SECOND PHOTO STRIP (5 Photos in a Row) */}
              <div className="pt-2">
                <div className="grid grid-cols-5 gap-2 sm:gap-2.5">
                  {journeyStrip2.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveModalImage(item)}
                      className="group/photo relative aspect-4/3 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover/photo:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/photo:bg-black/30 flex items-center justify-center transition-all opacity-0 group-hover/photo:opacity-100">
                        <ZoomIn className="w-4 h-4 text-white drop-shadow-md" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Program Kerja KKN */}
            <div className="lg:col-span-6 space-y-5 lg:pl-2">
              
              {/* Header with Clipboard / List Icon */}
              <div className="space-y-1.5 pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0a3828] flex items-center justify-center border border-emerald-200/60 shadow-2xs">
                    <ClipboardList className="w-4 h-4 text-[#0a3828]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                    Program Kerja KKN
                  </h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Berikut adalah program kerja utama yang kami laksanakan selama KKN di Desa Warung Menteng. Setiap program dirancang untuk menjawab kebutuhan desa dan memberikan manfaat nyata bagi masyarakat.
                </p>
              </div>

              {/* 4 PROGRAM CARDS (Exact match to galeri.jpeg screenshot) */}
              <div className="space-y-4">
                {programKerjaList.map((prog) => {
                  const Icon = prog.icon;
                  return (
                    <div
                      key={prog.id}
                      className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-emerald-200 transition-all duration-200 space-y-3.5"
                    >
                      {/* Top Info: Icon + Title + Description */}
                      <div className="flex items-start gap-3.5">
                        <div className="w-11 h-11 bg-[#0a3828] text-white rounded-xl flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <h4 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight leading-snug">
                            {prog.title}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed text-justify">
                            {prog.description}
                          </p>
                        </div>
                      </div>

                      {/* Right/Bottom 3 Photos Row */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
                        {prog.photos.map((photo, pIdx) => (
                          <div
                            key={pIdx}
                            onClick={() => setActiveModalImage(photo)}
                            className="group/photo relative aspect-16/10 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xs cursor-pointer hover:shadow-sm transition-all"
                          >
                            <img
                              src={photo.src}
                              alt={photo.title}
                              className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover/photo:bg-black/30 flex items-center justify-center transition-all opacity-0 group-hover/photo:opacity-100">
                              <ZoomIn className="w-4 h-4 text-white drop-shadow-md" />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tombol Lihat Selengkapnya */}
                      <button
                        onClick={() => onNavigate ? onNavigate(PROKER_ROUTES[prog.id]) : null}
                        className="w-full inline-flex items-center justify-center gap-1.5 bg-[#0a3828] hover:bg-[#06352a] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition duration-200 shadow-2xs cursor-pointer active:scale-[0.98] group/btn"
                      >
                        <span>Lihat Selengkapnya</span>
                        <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                      </button>

                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </section>

      </div>

      {/* FULLSCREEN PHOTO ZOOM MODAL */}
      {activeModalImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 animate-in fade-in duration-150"
          onClick={() => setActiveModalImage(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute top-4 right-4 z-10 p-2 text-white bg-black/50 hover:bg-black/80 rounded-full transition cursor-pointer"
              aria-label="Tutup foto"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image display */}
            <div className="w-full max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeModalImage.src}
                alt={activeModalImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            {/* Caption */}
            <div className="p-5 bg-white space-y-1">
              <h4 className="text-base font-extrabold text-slate-900">
                {activeModalImage.title}
              </h4>
              {activeModalImage.caption && (
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeModalImage.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER KHUSUS KKN WIGATA DHARMA */}
      <footer className="bg-[#06301f] text-white py-6 px-4 sm:px-8 mt-12 border-t border-emerald-900/60 relative z-10">
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
