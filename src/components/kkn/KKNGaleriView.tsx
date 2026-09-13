import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  AlertTriangle, 
  ZoomIn, 
  X, 
  ChevronLeft, 
  ChevronRight,
  ArrowLeft
} from 'lucide-react';
import { PageRoute } from '../../types';

// Images
import kknHeroPanorama from '../../assets/images/kkn_galeri_hero_panorama_1788606671947.jpg';
import kknMasakBersama from '../../assets/images/kkn_masak_bersama_1788606697755.jpg';
import kknMancingKolam from '../../assets/images/kkn_mancing_kolam_1788606715319.jpg';
import kknMengajarBale from '../../assets/images/kkn_mengajar_bale_1788606733812.jpg';
import kknKerjaBakti from '../../assets/images/kkn_kerja_bakti_1788606750207.jpg';
import kknApiUnggun from '../../assets/images/kkn_api_unggun_1788606764323.jpg';
import kknProkerBudaya from '../../assets/images/kkn_proker_budaya_1788606079432.jpg';
import kknProkerKekerasan from '../../assets/images/kkn_proker_kekerasan_1788606094172.jpg';
import kknProkerWebsite from '../../assets/images/kkn_proker_website_1788606042072.jpg';
import kknProkerCyberbullying from '../../assets/images/kkn_proker_cyberbullying_1788606061840.jpg';
import kknActivityUmkm from '../../assets/images/kkn_activity_umkm_1788604303052.jpg';
import kknHeroGroup from '../../assets/images/kkn_hero_group_1788604287174.jpg';
import kknTeamMedia from '../../assets/images/kkn_team_media_1788605216631.jpg';

interface GalleryPhoto {
  id: number;
  src: string;
  title: string;
  caption: string;
}

interface KKNGaleriViewProps {
  onNavigate?: (page: PageRoute) => void;
}

export const KKNGaleriView: React.FC<KKNGaleriViewProps> = ({ onNavigate }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // 12 photos matching the 4x3 grid in the user's reference image
  const galleryPhotos: GalleryPhoto[] = [
    // Row 1
    {
      id: 1,
      src: kknMasakBersama,
      title: 'Memasak Bersama di Dapur Posko',
      caption: 'Mahasiswa KKN bersama-sama menyiapkan santapan dan konsumsi kegiatan pengabdian di dapur posko.'
    },
    {
      id: 2,
      src: kknMancingKolam,
      title: 'Observasi Potensi Kolam Ikan Air Tawar',
      caption: 'Mahasiswa berinteraksi santai bersama warga di tepian kolam perikanan air tawar Desa Warung Menteng.'
    },
    {
      id: 3,
      src: kknMengajarBale,
      title: 'Bimbingan Belajar di Saung Desa',
      caption: 'Sesi belajar membaca dan bimbingan edukatif bersama adik-adik desa di saung terbuka yang asri.'
    },
    {
      id: 4,
      src: kknKerjaBakti,
      title: 'Kerja Bakti Kebersihan Lingkungan',
      caption: 'Aksi gotong royong mahasiswa KKN membersihkan pekarangan dan halaman sekitar rumah warga menggunakan sapu lidi.'
    },

    // Row 2
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=700&q=80',
      title: 'Olahraga Bola Voli Bersama Pemuda Desa',
      caption: 'Pertandingan persahabatan bola voli di lapangan tanah desa mempererat keakraban dengan Karang Taruna.'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=700&q=80',
      title: 'Persiapan Masak Bersama Ibu-Ibu PKK',
      caption: 'Kolaborasi hangat mengolah sayuran segar dan bumbu dapur tradisional bersama ibu-ibu kader desa.'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=700&q=80',
      title: 'Mendongeng & Membaca Buku Ceria',
      caption: 'Mahasiswi KKN mendampingi anak-anak desa membaca buku cerita edukatif di beranda rumah warga.'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=700&q=80',
      title: 'Aksi Penanaman Bibit Penghijauan',
      caption: 'Penyerahan dan penanaman bibit pohon di lahan kebun desa sebagai wujud pelestarian lingkungan.'
    },

    // Row 3
    {
      id: 9,
      src: kknProkerKekerasan,
      title: 'Sosialisasi & Rembuk Warga di Balai',
      caption: 'Pertemuan interaktif dan pemaparan materi perlindungan hak anak serta perempuan di Balai Warga.'
    },
    {
      id: 10,
      src: kknApiUnggun,
      title: 'Malam Keakraban di Depan Api Unggun',
      caption: 'Hangatnya obrolan malam santai dan refleksi mingguan di sekeliling api unggun bersama rekan mahasiswa.'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=700&q=80',
      title: 'Pembersihan Saluran Air & Sampah',
      caption: 'Kerja bakti pembersihan saluran drainase dan halaman lingkungan menggunakan gerobak dorong.'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80',
      title: 'Eksplorasi Kerajinan & Pengemasan Produk',
      caption: 'Mahasiswa KKN berkumpul melingkar meracik kemasan kreatif produk khas hasil bumi desa.'
    }
  ];

  const handlePrev = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + galleryPhotos.length) % galleryPhotos.length);
    }
  };

  const handleNext = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % galleryPhotos.length);
    }
  };

  const activePhoto = selectedPhotoIndex !== null ? galleryPhotos[selectedPhotoIndex] : null;

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">

        {/* Top Breadcrumb & Optional Back Navigation */}
        {onNavigate && (
          <div className="flex items-center justify-between text-xs text-slate-500 pb-1">
            <button
              onClick={() => onNavigate('kkn')}
              className="inline-flex items-center gap-1.5 text-emerald-800 hover:text-emerald-950 font-semibold transition cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Portal KKN</span>
            </button>
            <span>Beranda / Galeri KKN</span>
          </div>
        )}

        {/* 1. HERO BANNER: EXACT MATCH TO REFERENCE IMAGE */}
        <div className="relative rounded-3xl sm:rounded-[32px] overflow-hidden shadow-sm h-64 sm:h-72 lg:h-80 border border-slate-200/80">
          
          {/* Panoramic background image */}
          <img
            src={kknHeroPanorama}
            alt="Pemandangan Asri Terasering Sawah dan Perbukitan Desa Warung Menteng"
            className="w-full h-full object-cover object-center"
          />

          {/* Deep green gradient overlay from left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#032e1c]/95 via-[#064228]/85 to-black/20" />

          {/* Banner Content Container */}
          <div className="absolute inset-0 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            
            {/* Top Row: Pill Badge on Left, Cursive Script on Right */}
            <div className="flex items-start justify-between">
              
              {/* Badge "GALERI KKN" */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/25 border border-white/20 text-white backdrop-blur-xs shadow-xs">
                <ImageIcon className="w-3.5 h-3.5 text-white" />
                <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase">
                  GALERI KKN
                </span>
              </div>

              {/* Cursive / Calligraphic Script on Top-Right */}
              <div className="text-right text-white select-none hidden sm:block">
                <p className="font-serif italic text-lg sm:text-xl md:text-2xl font-normal leading-tight text-white/95 drop-shadow-md">
                  Bersama Masyarakat
                </p>
                <p className="font-serif italic text-lg sm:text-xl md:text-2xl font-normal leading-tight text-white/95 drop-shadow-md">
                  Membangun Desa
                </p>
              </div>

            </div>

            {/* Bottom Row: Main Title & Subtitle */}
            <div className="max-w-2xl space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug drop-shadow-sm">
                Galeri KKN Desa Warung Menteng
              </h1>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-xl">
                Merekam setiap langkah, kebersamaan, dan pengabdian kami selama berada di Desa Warung Menteng.
              </p>
            </div>

          </div>

        </div>

        {/* 2. WARNING BANNER: EXACT MATCH TO REFERENCE IMAGE */}
        <div className="bg-[#fffbeb] border border-[#fde68a] rounded-2xl p-4 sm:p-5 shadow-2xs">
          <div className="flex items-start gap-3 sm:gap-4">
            
            {/* Warning Triangle Icon */}
            <div className="shrink-0 mt-0.5">
              <div className="w-9 h-9 rounded-xl bg-amber-400/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-amber-500 fill-amber-500" />
              </div>
            </div>

            {/* Warning Text */}
            <div className="space-y-1 text-slate-800">
              <h3 className="text-sm sm:text-[15px] font-extrabold text-slate-900 tracking-tight leading-snug">
                Peringatan:
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed text-justify">
                Fitur galeri ini berisi dokumentasi kegiatan KKN Kelompok Wigata Dharma di Desa Warung Menteng. Dilarang menggunakan, menyalin, atau menyebarkan foto-foto ini untuk kepentingan pribadi, komersial, atau tindakan yang melanggar hak cipta tanpa izin dari pihak terkait. Penggunaan yang <strong className="font-extrabold text-slate-900">tidak bertanggung jawab</strong> dapat dikenai sanksi sesuai peraturan yang berlaku.
              </p>
            </div>

          </div>
        </div>

        {/* 3. SECTION HEADER WITH GREEN VERTICAL ACCENT */}
        <div className="pt-2 space-y-1">
          <div className="flex items-center gap-2.5">
            <div className="w-1.5 h-6 bg-[#0a3828] rounded-full shrink-0" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a3828] tracking-tight">
              Foto-foto Kegiatan KKN
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 pl-4">
            Dokumentasi berbagai kegiatan dan momen kebersamaan kami selama KKN di Desa Warung Menteng.
          </p>
        </div>

        {/* 4. 4x3 PHOTO GRID (12 PHOTOS EXACTLY AS IN SCREENSHOT) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 pt-1">
          {galleryPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(idx)}
              className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Hover overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                <div className="w-10 h-10 rounded-full bg-white/90 text-[#0a3828] flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xs p-4 animate-in fade-in duration-150"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-100 relative flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300">
                Foto {selectedPhotoIndex! + 1} dari {galleryPhotos.length}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition cursor-pointer"
                  title="Foto sebelumnya"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition cursor-pointer"
                  title="Foto selanjutnya"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedPhotoIndex(null)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-700 text-white transition ml-2 cursor-pointer"
                  title="Tutup"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Image Display */}
            <div className="bg-black flex items-center justify-center overflow-hidden flex-1 min-h-[260px] max-h-[60vh]">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="w-full h-full object-contain max-h-[60vh]"
              />
            </div>

            {/* Modal Caption */}
            <div className="p-5 bg-white space-y-1.5 border-t border-slate-100">
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                {activePhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
