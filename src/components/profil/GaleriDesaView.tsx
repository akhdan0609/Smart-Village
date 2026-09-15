import React, { useState } from 'react';
import { 
  Camera, 
  MapPin, 
  Calendar, 
  Tag, 
  ChevronRight, 
  ChevronLeft, 
  X, 
  ZoomIn, 
  ArrowLeft, 
  Filter, 
  Sparkles, 
  Layers, 
  Share2, 
  Download,
  Check
} from 'lucide-react';
import { PageRoute } from '../../types';

// Asset Images
import heroPanoramaImg from '../../assets/images/profil_hero_panorama_1789112047188.jpg';
import tentangDesaHeroImg from '../../assets/images/tentang_desa_hero_1789110414479.jpg';
import curugMentengImg from '../../assets/images/curug_menteng_1789110427235.jpg';
import rumahAdatImg from '../../assets/images/rumah_adat_sunda_1788955442032.jpg';
import tradisiBudayaImg from '../../assets/images/tradisi_budaya_lokal_1788955478016.jpg';
import potensiHeroImg from '../../assets/images/potensi_hero_banner_1788325154234.jpg';
import gapuraDesaImg from '../../assets/images/profil_gapura_desa_1789112062623.jpg';
import kantorDesaImg from '../../assets/images/pelayanan_hero_kantor_desa_1788325727506.jpg';
import sanggarSeniImg from '../../assets/images/berita_sanggar_seni_1788954626818.jpg';
import musdesImg from '../../assets/images/berita_musdes_gate_1788954594566.jpg';
import jalanLingkunganImg from '../../assets/images/berita_jalan_lingkungan_1788954608799.jpg';
import umkmPelatihanImg from '../../assets/images/berita_pelatihan_umkm_1788954647146.jpg';
import kerjaBaktiImg from '../../assets/images/kkn_kerja_bakti_1788606750207.jpg';
import kolamIkanImg from '../../assets/images/kkn_mancing_kolam_1788606715319.jpg';
import makamEyangImg from '../../assets/images/makam_eyang_menteng_1788955428651.jpg';
import batuPeringatanImg from '../../assets/images/batu_peringatan_desa_1788955460192.jpg';

interface GaleriDesaViewProps {
  onNavigate: (page: PageRoute, params?: any) => void;
}

interface GalleryItem {
  id: string;
  title: string;
  category: 'alam' | 'budaya' | 'kegiatan' | 'sarana';
  categoryLabel: string;
  date: string;
  location: string;
  imageUrl: string;
  description: string;
  photographer: string;
}

export const GaleriDesaView: React.FC<GaleriDesaViewProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('semua');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Gallery items dataset
  const galleryItems: GalleryItem[] = [
    {
      id: 'g-1',
      title: 'Panorama Lembah Persawahan Terasering Kaki Gn. Salak',
      category: 'alam',
      categoryLabel: 'Alam & Panorama',
      date: '14 Agustus 2024',
      location: 'Dusun Cisalopa, Warung Menteng',
      imageUrl: potensiHeroImg,
      description: 'Hamparan sawah berundak hijau nan subur di lembah lereng kaki Gunung Salak dengan sistem irigasi mata air alami yang terjaga sejak turun-temurun.',
      photographer: 'Tim Dokumentasi HUMAS Desa'
    },
    {
      id: 'g-2',
      title: 'Pemandangan Lanskap Gugusan Bukit & Perkebunan Hijau',
      category: 'alam',
      categoryLabel: 'Alam & Panorama',
      date: '10 Juli 2024',
      location: 'Bukit Menteng Hijau, RT 03/RW 02',
      imageUrl: tentangDesaHeroImg,
      description: 'Panorama dataran tinggi desa yang sejuk berkabut tipis di pagi hari, menjadi salah satu spot favorit warga dan wisatawan untuk menikmati udara segar pegunungan.',
      photographer: 'Pokdarwis Warung Menteng'
    },
    {
      id: 'g-3',
      title: 'Keasrian Alami Air Terjun Curug Menteng',
      category: 'alam',
      categoryLabel: 'Alam & Panorama',
      date: '28 Juni 2024',
      location: 'Kawasan Hutan Lindung Lereng Salak',
      imageUrl: curugMentengImg,
      description: 'Destinasi wisata alam air terjun alami dengan debit air jernih dan kolam alami yang dikelilingi rimbunnya vegetasi hutan tropis pegunungan.',
      photographer: 'Relawan Lingkungan Desa'
    },
    {
      id: 'g-4',
      title: 'Balai Warga & Rumah Panggung Tradisional Sunda Buhun',
      category: 'budaya',
      categoryLabel: 'Seni & Budaya',
      date: '12 Mei 2024',
      location: 'Kampung Adat Pasir Menteng',
      imageUrl: rumahAdatImg,
      description: 'Rumah panggung tradisional khas Sunda berlantai bambu pelupuh dan beratap ijuk yang difungsikan sebagai rumah singgah tetua adat dan pusat musyawarah rembug warga.',
      photographer: 'Lembaga Adat Desa'
    },
    {
      id: 'g-5',
      title: 'Prosesi Adat Seren Taun & Perayaan Syukur Hasil Bumi',
      category: 'budaya',
      categoryLabel: 'Seni & Budaya',
      date: '22 Juli 2024',
      location: 'Lapangan Utama Desa Warung Menteng',
      imageUrl: tradisiBudayaImg,
      description: 'Masyarakat desa berbusana pangsi dan kebaya Sunda mengarak rengkong hasil panen padi sebagai wujud rasa syukur atas kelimpahan rezeki dan keharmonisan alam.',
      photographer: 'Seksi Kebudayaan Desa'
    },
    {
      id: 'g-6',
      title: 'Latihan Kesenian Musik Tradisional Calung & Gamelan',
      category: 'budaya',
      categoryLabel: 'Seni & Budaya',
      date: '05 Agustus 2024',
      location: 'Sanggar Seni Budaya Sunda Menteng',
      imageUrl: sanggarSeniImg,
      description: 'Generasi muda desa aktif mempelajari alat musik bambu calung dan gamelan salendro dalam rangka melestarikan kearifan seni leluhur tanah Pasundan.',
      photographer: 'Karang Taruna Tunas Harapan'
    },
    {
      id: 'g-7',
      title: 'Situs Bersejarah Makam Leluhur Pendiri Kampung',
      category: 'budaya',
      categoryLabel: 'Seni & Budaya',
      date: '18 Mei 2024',
      location: 'Kompleks Makam Kuno Pasir Ki Ageng',
      imageUrl: makamEyangImg,
      description: 'Situs cagar budaya makam para perintis permukiman Desa Warung Menteng abad ke-18 yang senantiasa dirawat bersih melalui kegiatan ziarah tahunan warga.',
      photographer: 'Juru Pelihara Cagar Budaya'
    },
    {
      id: 'g-8',
      title: 'Batu Peringatan Megalitikum & Prasasti Tapak Desa',
      category: 'budaya',
      categoryLabel: 'Seni & Budaya',
      date: '19 April 2024',
      location: 'Tepi Aliran Sungai Cimande Kulon',
      imageUrl: batuPeringatanImg,
      description: 'Peninggalan batu menhir bersejarah yang menjadi saksi bisu penetapan batas wilayah ulayat Sunda buhun di lembah Cijeruk.',
      photographer: 'Tim Riset Sejarah Desa'
    },
    {
      id: 'g-9',
      title: 'Gerbang Gapura Megah Penyambutan Desa Warung Menteng',
      category: 'sarana',
      categoryLabel: 'Sarana & Prasarana',
      date: '02 Februari 2024',
      location: 'Jalan Raya Utama Masuk Desa',
      imageUrl: gapuraDesaImg,
      description: 'Gapura masuk bernuansa ornamen etnik Sunda modern yang menjadi penanda selamat datang bagi seluruh warga, pengunjung wisata, dan tamu dinas.',
      photographer: 'BPD Desa Warung Menteng'
    },
    {
      id: 'g-10',
      title: 'Kantor Balai Pelayanan Terpadu Pemerintahan Desa',
      category: 'sarana',
      categoryLabel: 'Sarana & Prasarana',
      date: '15 Januari 2024',
      location: 'Kompleks Perkantoran Desa, Jl. Balai Desa No. 1',
      imageUrl: kantorDesaImg,
      description: 'Gedung kantor desa representatif yang dilengkapi loket pelayanan administrasi kependudukan cepat, ruang rapat umum, dan ruang pengaduan warga.',
      photographer: 'Aparatur Perangkat Desa'
    },
    {
      id: 'g-11',
      title: 'Peningkatan Pengaspalan Jalan Lingkungan Antar-Dusun',
      category: 'sarana',
      categoryLabel: 'Sarana & Prasarana',
      date: '09 Juli 2024',
      location: 'Dusun Babakan Menteng',
      imageUrl: jalanLingkunganImg,
      description: 'Realisasi anggaran Dana Desa (APBDes) untuk pemeliharaan infrastruktur jalan aspal mulus guna memperlancar mobilitas pertanian warga.',
      photographer: 'Tim Pelaksana Kegiatan (TPK)'
    },
    {
      id: 'g-12',
      title: 'Sentra Kolam Budidaya Ikan Air Deras Pegunungan',
      category: 'sarana',
      categoryLabel: 'Sarana & Prasarana',
      date: '11 Agustus 2024',
      location: 'Kawasan Budidaya Perikanan Cipari',
      imageUrl: kolamIkanImg,
      description: 'Petak-petak kolam budidaya pembesaran ikan mas, nila, dan gurame yang memanfaatkan aliran air pegunungan dengan kadar oksigen tinggi.',
      photographer: 'Kelompok Tani Perikanan'
    },
    {
      id: 'g-13',
      title: 'Aksi Gotong Royong Kebersihan Saluran & Lingkungan',
      category: 'kegiatan',
      categoryLabel: 'Kegiatan Masyarakat',
      date: '18 Agustus 2024',
      location: 'RW 02 & Saluran Irigasi Tersier',
      imageUrl: kerjaBaktiImg,
      description: 'Antusiasme warga desa lintas generasi bersama mahasiswa KKN bahu-membahu membersihkan rumput liar dan saluran drainase kampung demi mencegah genangan air.',
      photographer: 'HUMAS Karang Taruna'
    },
    {
      id: 'g-14',
      title: 'Pelatihan Pemberdayaan & Kemasan Produk UMKM Olahan',
      category: 'kegiatan',
      categoryLabel: 'Kegiatan Masyarakat',
      date: '25 Juli 2024',
      location: 'Aula Serbaguna Kantor Desa',
      imageUrl: umkmPelatihanImg,
      description: 'Workshop pendampingan digital marketing dan sertifikasi halal bagi para pelaku industri olahan keripik pisang, talas menteng, dan kopi arabika lokal.',
      photographer: 'Pendamping UMKM Desa'
    },
    {
      id: 'g-15',
      title: 'Musyawarah Perencanaan Pembangunan Desa (Musrenbangdes)',
      category: 'kegiatan',
      categoryLabel: 'Kegiatan Masyarakat',
      date: '12 Juni 2024',
      location: 'Balai Pertemuan Warga Desa',
      imageUrl: musdesImg,
      description: 'Musyawarah terbuka penyusunan RKPDes yang dihadiri Kepala Desa, BPD, tokoh agama, tokoh adat, perwakilan perempuan PKK, dan delegasi pemuda.',
      photographer: 'Sekretariat BPD Warung Menteng'
    },
    {
      id: 'g-16',
      title: 'Bentang Alam Perbukitan & Kabut Pagi Warung Menteng',
      category: 'alam',
      categoryLabel: 'Alam & Panorama',
      date: '03 Maret 2024',
      location: 'Puncak Panyawangan Gunung Salak',
      imageUrl: heroPanoramaImg,
      description: 'Keindahan bentang alam Desa Warung Menteng dilihat dari ketinggian dengan siluet megah perbukitan tropis dan hamparan pepohonan rindang.',
      photographer: 'Komunitas Pecinta Alam Cijeruk'
    }
  ];

  // Filtered dataset
  const filteredItems = activeCategory === 'semua'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  // Category Tabs Configuration
  const categories = [
    { key: 'semua', label: 'Semua Dokumentasi', count: galleryItems.length },
    { key: 'alam', label: 'Alam & Panorama', count: galleryItems.filter((i) => i.category === 'alam').length },
    { key: 'budaya', label: 'Seni & Kebudayaan', count: galleryItems.filter((i) => i.category === 'budaya').length },
    { key: 'kegiatan', label: 'Kegiatan Masyarakat', count: galleryItems.filter((i) => i.category === 'kegiatan').length },
    { key: 'sarana', label: 'Sarana & Pembangunan', count: galleryItems.filter((i) => i.category === 'sarana').length },
  ];

  // Lightbox navigation helpers
  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
  };

  const currentModalItem = selectedPhotoIndex !== null ? filteredItems[selectedPhotoIndex] : null;

  const handleCopyShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8faf9] text-slate-800 pb-20">
      
      {/* 1. HERO BANNER: GALERI DOKUMENTASI DESA */}
      <div className="relative w-full overflow-hidden bg-[#0e3e2f] min-h-[360px] sm:min-h-[400px] flex items-center">
        {/* Background Landscape Panorama Image */}
        <img
          src={tentangDesaHeroImg}
          alt="Panorama Dokumentasi Desa Warung Menteng"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 filter brightness-75"
        />

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e3e2f]/95 via-[#0e3e2f]/85 to-[#0e3e2f]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e3e2f] via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-2xl space-y-4">
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-200/90">
              <button 
                onClick={() => onNavigate('beranda')}
                className="hover:text-white transition cursor-pointer"
              >
                Beranda
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-emerald-400/80" />
              <button 
                onClick={() => onNavigate('berita-press-release')}
                className="hover:text-white transition cursor-pointer"
              >
                Humas
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-emerald-400/80" />
              <span className="text-white">Galeri Foto</span>
            </div>

            {/* Script Accent Subtitle */}
            <p className="font-['Caveat',cursive] text-2xl sm:text-3xl text-amber-400 font-bold tracking-wide">
              Dokumentasi & Keindahan Desa
            </p>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Galeri Resmi Desa Warung Menteng
            </h1>

            {/* Description */}
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed font-normal">
              Arsip visual resmi yang merekam keasrian alam kaki Gunung Salak, kehangatan kegiatan gotong royong warga, kemegahan tradisi adat Sunda, serta pembangunan infrastruktur desa yang terus berlanjut.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('berita-press-release')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-semibold backdrop-blur-xs border border-white/20 transition cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Press Release Humas</span>
              </button>
              <button
                onClick={() => onNavigate('beranda')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs sm:text-sm font-semibold transition cursor-pointer"
              >
                <span>Kembali ke Beranda</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 2. MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 space-y-8">
        
        {/* STATS & FILTER BAR */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-lg shadow-slate-900/5">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            
            {/* Header / Info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0e3e2f] flex items-center justify-center shrink-0">
                <Camera className="w-5 h-5 text-emerald-800" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-[#0e3e2f]">Koleksi Foto & Dokumentasi</h2>
                <p className="text-xs text-slate-500 font-medium">
                  Menampilkan {filteredItems.length} dari total {galleryItems.length} foto beresolusi tinggi
                </p>
              </div>
            </div>

            {/* Share / Action Button */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyShare}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition cursor-pointer"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Tautan Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-slate-500" />
                    <span>Bagikan Galeri</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                    isActive
                      ? 'bg-[#0e3e2f] text-white shadow-sm'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/70'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-600'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. PHOTO GRID */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
            <Camera className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700">Belum ada foto untuk kategori ini</h3>
            <p className="text-xs text-slate-500 mt-1">Silakan pilih kategori lainnya untuk melihat dokumentasi desa.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhotoIndex(index)}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Category Pill Over Image */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg text-[10.5px] font-bold tracking-wide uppercase bg-black/60 text-white backdrop-blur-xs shadow-xs">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-white/90 text-[#0e3e2f] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 line-clamp-2 group-hover:text-[#0e3e2f] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span className="truncate max-w-[140px]">{item.location}</span>
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Calendar className="w-3 h-3 shrink-0" />
                      <span>{item.date}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* 4. LIGHTBOX / FULLSCREEN MODAL VIEWER */}
      {currentModalItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Close Button on Top Right */}
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer backdrop-blur-xs"
            aria-label="Tutup Galeri"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Card Container */}
          <div 
            className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col border border-slate-700/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Stage */}
            <div className="relative w-full bg-black flex items-center justify-center min-h-[300px] sm:min-h-[420px] max-h-[58vh] overflow-hidden select-none">
              <img
                src={currentModalItem.imageUrl}
                alt={currentModalItem.title}
                className="w-full h-full object-contain max-h-[58vh]"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition cursor-pointer border border-white/10"
                aria-label="Foto Sebelumnya"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition cursor-pointer border border-white/10"
                aria-label="Foto Selanjutnya"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Counter Pill */}
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/70 text-white text-xs font-semibold backdrop-blur-xs border border-white/10">
                {selectedPhotoIndex! + 1} / {filteredItems.length}
              </div>
            </div>

            {/* Details Footer */}
            <div className="p-5 sm:p-6 overflow-y-auto max-h-[34vh] bg-white space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900">
                  {currentModalItem.categoryLabel}
                </span>

                <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                    {currentModalItem.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                    {currentModalItem.location}
                  </span>
                </div>
              </div>

              <h2 className="text-base sm:text-xl font-extrabold text-slate-900 leading-snug">
                {currentModalItem.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentModalItem.description}
              </p>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Fotografer / Sumber: <strong className="text-slate-800 font-semibold">{currentModalItem.photographer}</strong></span>
                <button
                  onClick={() => setSelectedPhotoIndex(null)}
                  className="px-4 py-1.5 rounded-xl bg-[#0e3e2f] hover:bg-[#0a2f23] text-white text-xs font-semibold transition cursor-pointer"
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
