import React from 'react';
import { 
  Image as ImageIcon, 
  AlertTriangle, 
  ArrowLeft
} from 'lucide-react';
import { PageRoute } from '../../types';

// Images
import kknHeroPanorama from '../../assets/images/kkn_galeri_hero_panorama_1788606671947.jpg';
import kknActivityUmkm from '../../assets/images/kkn_activity_umkm_1788604303052.jpg';
import kknProkerWebsite from '../../assets/images/kkn_proker_website_1788606042072.jpg';
import kknKerjaBakti from '../../assets/images/kkn_kerja_bakti_1788606750207.jpg';
import kknMengajarBale from '../../assets/images/kkn_mengajar_bale_1788606733812.jpg';

interface GalleryAlbum {
  id: number;
  src: string;
  title: string;
}

interface KKNGaleriViewProps {
  onNavigate?: (page: PageRoute) => void;
}

export const KKNGaleriView: React.FC<KKNGaleriViewProps> = ({ onNavigate }) => {
  // Album foto kegiatan KKN sesuai urutan daftar resmi
  const galleryAlbums: GalleryAlbum[] = [
    {
      id: 1,
      src: kknActivityUmkm,
      title: 'Pendampingan dan Promosi UMKM Desa'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80',
      title: 'Edukasi dan Pencegahan Penipuan Digital Bagi Masyarakat Desa'
    },
    {
      id: 3,
      src: kknKerjaBakti,
      title: 'Gotong Royong'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80',
      title: "BIAS Cek Kesehatan Gratis Bersama Puskesmas Cijeruk"
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=700&q=80',
      title: 'Posyiandu'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=80',
      title: 'Senam Sehat'
    },
    {
      id: 7,
      src: kknMengajarBale,
      title: 'Mengajar Ngaji'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=80',
      title: "Jum'at Berkisah"
    }
  ];

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
            <span>Beranda / Album Kami</span>
          </div>
        )}

        {/* 1. HERO BANNER */}
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

              {/* Badge "ALBUM KAMI" */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/25 border border-white/20 text-white backdrop-blur-xs shadow-xs">
                <ImageIcon className="w-3.5 h-3.5 text-white" />
                <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase">
                  ALBUM KAMI
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
                Album Kami KKN Wigata Dharma
              </h1>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-xl">
                Dokumentasi setiap kegiatan dan kebersamaan kami selama KKN di Desa Warung Menteng.
              </p>
            </div>

          </div>

        </div>

        {/* 2. WARNING BANNER */}
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
                Album ini berisi dokumentasi kegiatan KKN Kelompok Wigata Dharma di Desa Warung Menteng. Dilarang menggunakan, menyalin, atau menyebarkan foto-foto ini untuk kepentingan pribadi, komersial, atau tindakan yang melanggar hak cipta tanpa izin dari pihak terkait. Penggunaan yang <strong className="font-extrabold text-slate-900">tidak bertanggung jawab</strong> dapat dikenai sanksi sesuai peraturan yang berlaku.
              </p>
            </div>

          </div>
        </div>

        {/* 3. SECTION HEADER WITH GREEN VERTICAL ACCENT */}
        <div className="pt-2 space-y-1">
          <div className="flex items-center gap-2.5">
            <div className="w-1.5 h-6 bg-[#0a3828] rounded-full shrink-0" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a3828] tracking-tight">
              Album Foto Kegiatan KKN
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 pl-4">
            Dokumentasi berbagai kegiatan kami selama KKN di Desa Warung Menteng.
          </p>
        </div>

        {/* 4. ALBUM GRID - Foto tidak dapat diklik */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 pt-2">
          {galleryAlbums.map((album) => (
            <div
              key={album.id}
              className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-2xs"
            >
              <img
                src={album.src}
                alt={album.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Album Title */}
              <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
                <h3 className="text-[13px] sm:text-sm font-extrabold text-white leading-snug drop-shadow-sm">
                  {album.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};