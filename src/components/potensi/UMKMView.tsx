import React from 'react';
import { ArrowRight, Store } from 'lucide-react';
import { UMKM_VISUAL_LIST } from '../../data/potensiVisualData';
import { PageRoute } from '../../types';

interface UMKMViewProps {
  onNavigate?: (page: PageRoute | string, params?: any) => void;
}

export const UMKMView: React.FC<UMKMViewProps> = ({ onNavigate }) => {
  const openDetail = (id: string) => {
    onNavigate?.('potensi-umkm-detail', { umkmId: id });
  };

  return (
    <div className="py-8 bg-[#f8faf8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Hero Banner: UMKM */}
        <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-[260px] sm:min-h-[290px] flex items-center bg-slate-900">
          {/* Background image: Local handicrafts, market & farm products */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1920&q=80"
              alt="Produk UMKM Desa Warung Menteng"
              className="w-full h-full object-cover object-center brightness-90"
            />
            {/* Dark green gradient overlay on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#062c1e]/95 via-[#083b28]/85 to-transparent sm:w-4/5" />
          </div>

          {/* Wooden signboard ornament on right desktop (matching reference image) */}
          <div className="hidden lg:flex absolute right-12 bottom-8 z-10 items-center">
            <div className="bg-[#613c20]/90 border-2 border-[#82532c] rounded-xl px-5 py-3.5 shadow-xl text-center backdrop-blur-xs transform -rotate-1 hover:rotate-0 transition">
              <div className="text-[10px] uppercase font-mono tracking-widest text-amber-200">Karya Tangan Warga</div>
              <div className="text-base font-black tracking-wide text-amber-100 font-serif border-t border-b border-amber-400/40 my-1 py-0.5">
                PRODUK LOKAL DESA
              </div>
              <div className="text-[11px] text-amber-300 font-semibold">WARUNG MENTENG</div>
            </div>
          </div>

          {/* Banner Content */}
          <div className="relative z-10 max-w-2xl px-6 sm:px-12 py-10 text-white space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans">
              UMKM
            </h1>
            <p className="text-emerald-100 text-xs sm:text-sm sm:leading-relaxed max-w-xl font-normal">
              Mendukung produk lokal unggulan dari masyarakat Desa Warung Menteng untuk meningkatkan perekonomian desa secara mandiri dan berkelanjutan.
            </p>
          </div>
        </div>

        {/* Section Title */}
        <div className="flex items-end justify-between gap-3 flex-wrap">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Daftar UMKM Desa Warung Menteng
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Klik "Lihat Selengkapnya" untuk membuka halaman detail setiap UMKM.
            </p>
          </div>
          <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1">
            {UMKM_VISUAL_LIST.length} UMKM
          </span>
        </div>

        {/* UMKM Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {UMKM_VISUAL_LIST.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden group"
            >
              {/* Photo (klik untuk buka halaman detail) */}
              <button
                onClick={() => openDetail(item.id)}
                className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer"
                aria-label={`Lihat detail ${item.nama}`}
              >
                {item.fotoUrl ? (
                  <img
                    src={item.fotoUrl}
                    alt={item.nama}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-300">
                    <Store className="w-8 h-8" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                <span className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition">
                  Detail
                </span>
              </button>

              <div className="p-4 flex flex-col flex-1 gap-3">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm leading-snug">
                    {item.nama}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed line-clamp-2">
                    {item.deskripsi}
                  </p>
                </div>

                {/* Tombol Lihat Selengkapnya -> halaman detail */}
                <button
                  onClick={() => openDetail(item.id)}
                  className="mt-auto w-full inline-flex items-center justify-center gap-1.5 bg-[#0b3b29] hover:bg-[#082a1d] text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-xs"
                >
                  <span>Lihat Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};