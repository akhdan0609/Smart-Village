import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Ticket, 
  Phone, 
  X, 
  ArrowRight,
  ExternalLink,
  Info
} from 'lucide-react';
import { AKOMODASI_LIST, PotensiCardItem } from '../../data/potensiVisualData';
import { PageRoute } from '../../types';

interface AkomodasiViewProps {
  onNavigate?: (page: PageRoute, params?: any) => void;
}

export const AkomodasiView: React.FC<AkomodasiViewProps> = ({ onNavigate }) => {
  const [activeItem, setActiveItem] = useState<PotensiCardItem | null>(null);

  const handleOpenDetail = (item: PotensiCardItem) => {
    if (onNavigate) {
      onNavigate('potensi-akomodasi-detail', { itemId: item.id });
    } else {
      setActiveItem(item);
    }
  };

  return (
    <div className="py-8 bg-[#f8faf8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Hero Banner: Akomodasi */}
        <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-[260px] sm:min-h-[290px] flex items-center bg-slate-900">
          {/* Background image & scenic elements */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80" 
              alt="Panorama Akomodasi & Wisata Warung Menteng" 
              className="w-full h-full object-cover object-center brightness-90"
            />
            {/* Dark green gradient overlay on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#062c1e]/95 via-[#083b28]/85 to-transparent sm:w-4/5" />
          </div>

          {/* Wooden signboard ornament on right desktop */}
          <div className="hidden lg:flex absolute right-12 bottom-8 z-10 items-center">
            <div className="bg-[#694224]/90 border-2 border-[#8c5932] rounded-xl px-5 py-3 shadow-xl text-center backdrop-blur-xs transform rotate-1 hover:rotate-0 transition">
              <div className="text-[10px] uppercase font-mono tracking-widest text-amber-200">Pesona Alam Desa</div>
              <div className="text-lg font-black tracking-wider text-amber-100 font-serif border-t border-b border-amber-400/40 my-1 py-0.5">
                ✦ WARUNG MENTENG ✦
              </div>
              <div className="text-[10px] text-amber-300 font-medium">Kec. Cijeruk, Kab. Bogor</div>
            </div>
          </div>

          {/* Banner Content */}
          <div className="relative z-10 max-w-2xl px-6 sm:px-12 py-10 text-white space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans">
              Akomodasi
            </h1>
            <p className="text-emerald-100 text-xs sm:text-sm sm:leading-relaxed max-w-xl font-normal">
              Jelajahi keindahan alam, budaya, dan pesona wisata di Desa Warung Menteng. Nikmati pengalaman berwisata yang menyegarkan dan penuh makna.
            </p>
          </div>
        </div>

        {/* 15 Cards Grid: 5 Columns on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
          {AKOMODASI_LIST.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-200 flex flex-col justify-between p-3 sm:p-3.5 group"
            >
              <div>
                {/* Photo Thumbnail */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-3">
                  <img
                    src={item.fotoUrl}
                    alt={item.nama}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Card Title */}
                <h3 className="font-bold text-slate-900 text-sm leading-snug line-clamp-1">
                  {item.nama}
                </h3>

                {/* Card Description */}
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {item.deskripsi}
                </p>
              </div>

              {/* Action Button: Baca Selengkapnya -> */}
              <div className="pt-3">
                <button
                  onClick={() => handleOpenDetail(item)}
                  className="inline-flex items-center gap-1.5 bg-[#0b3b29] hover:bg-[#082a1d] text-white text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-colors shadow-xs"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {activeItem && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
        >
          <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-150 my-8">
            <div className="relative h-60 w-full bg-slate-100">
              <img
                src={activeItem.fotoUrl}
                alt={activeItem.nama}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveItem(null)}
                aria-label="Tutup modal"
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-3 bg-[#0b3b29]/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Akomodasi & Wisata
              </div>
            </div>

            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">{activeItem.nama}</h2>
                {activeItem.lokasi && (
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>{activeItem.lokasi}</span>
                  </p>
                )}
              </div>

              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
                <p>{activeItem.detailLengkap || activeItem.deskripsi}</p>
              </div>

              {/* Spesifikasi Fasilitas / Tiket / Kontak */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs pt-2">
                {activeItem.jamOperasional && (
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 block">Jam Buka:</span>
                      <span className="font-semibold text-slate-800">{activeItem.jamOperasional}</span>
                    </div>
                  </div>
                )}
                {activeItem.harga && (
                  <div className="p-2.5 bg-emerald-50/70 rounded-xl border border-emerald-100 flex items-center gap-2">
                    <Ticket className="w-4 h-4 text-emerald-700 shrink-0" />
                    <div>
                      <span className="text-[10px] text-emerald-800 block">Biaya / HTM:</span>
                      <span className="font-semibold text-emerald-950">{activeItem.harga}</span>
                    </div>
                  </div>
                )}
              </div>

              {activeItem.fasilitas && activeItem.fasilitas.length > 0 && (
                <div className="pt-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Fasilitas Tersedia:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeItem.fasilitas.map((f, idx) => (
                      <span key={idx} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg">
                        • {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeItem.kontak && (
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Kontak Pengelola:</span>
                  <span className="font-bold text-emerald-800">{activeItem.kontak}</span>
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-2">
              <button
                onClick={() => setActiveItem(null)}
                className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-xl transition"
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
