import React, { useState } from 'react';
import { 
  X, 
  ArrowRight,
  ShoppingBag,
  MessageCircle,
  Tag
} from 'lucide-react';
import { UMKM_VISUAL_LIST, PotensiCardItem } from '../../data/potensiVisualData';

export const UMKMView: React.FC = () => {
  const [activeItem, setActiveItem] = useState<PotensiCardItem | null>(null);

  const getWhatsAppLink = (item: PotensiCardItem) => {
    const rawNumber = item.kontak?.replace(/[^0-9]/g, '') || '6281234567890';
    const formattedNumber = rawNumber.startsWith('0') ? '62' + rawNumber.slice(1) : rawNumber;
    const text = encodeURIComponent(`Halo, saya tertarik dengan produk UMKM Desa Warung Menteng: *${item.nama}*. Boleh info cara pemesanan? Terima kasih.`);
    return `https://wa.me/${formattedNumber}?text=${text}`;
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

        {/* 18 Cards Grid: 6 Columns on Desktop (as shown in reference image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3.5 sm:gap-4">
          {UMKM_VISUAL_LIST.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-200 flex flex-col justify-between p-3 group"
            >
              <div>
                {/* Photo Thumbnail */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-2.5">
                  <img
                    src={item.fotoUrl}
                    alt={item.nama}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Card Title */}
                <h3 className="font-bold text-slate-900 text-[13px] leading-snug line-clamp-1">
                  {item.nama}
                </h3>

                {/* Card Description */}
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {item.deskripsi}
                </p>
              </div>

              {/* Action Button: Baca Selengkapnya -> */}
              <div className="pt-2.5">
                <button
                  onClick={() => setActiveItem(item)}
                  className="inline-flex items-center gap-1 bg-[#0b3b29] hover:bg-[#082a1d] text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg transition-colors shadow-xs"
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
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-150 my-8">
            <div className="relative h-56 w-full bg-slate-100">
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
              <div className="absolute bottom-3 left-3 bg-[#0b3b29]/90 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
                <span>Produk Asli Desa</span>
              </div>
            </div>

            <div className="p-5 sm:p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">{activeItem.nama}</h2>
                {activeItem.harga && (
                  <div className="flex items-center gap-1.5 mt-1 text-emerald-800 font-bold text-sm">
                    <Tag className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{activeItem.harga}</span>
                  </div>
                )}
              </div>

              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
                <p>{activeItem.detailLengkap || activeItem.deskripsi}</p>
              </div>

              {/* Order via WhatsApp */}
              {activeItem.kontak && (
                <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-100 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600">Kontak Penjual:</span>
                    <span className="font-bold text-emerald-900">{activeItem.kontak}</span>
                  </div>
                  <a
                    href={getWhatsAppLink(activeItem)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Hubungi Penjual via WhatsApp</span>
                  </a>
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
