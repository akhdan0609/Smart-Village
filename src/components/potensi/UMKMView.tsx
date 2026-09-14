import React from 'react';
import { MessageCircle, Store } from 'lucide-react';
import { UMKM_VISUAL_LIST, PotensiCardItem } from '../../data/potensiVisualData';

export const UMKMView: React.FC = () => {
  const getWhatsAppLink = (item: PotensiCardItem) => {
    const rawNumber = (item.kontak || '').replace(/[^0-9]/g, '');
    const formattedNumber = rawNumber.startsWith('0') ? '62' + rawNumber.slice(1) : rawNumber;
    const text = encodeURIComponent(`Halo, saya tertarik dengan produk *${item.nama}* dari UMKM Desa Warung Menteng. Mohon info pemesanannya. Terima kasih.`);
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

        {/* Section Title */}
        <div className="flex items-end justify-between gap-3 flex-wrap">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Daftar UMKM Desa Warung Menteng
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Klik tombol WhatsApp untuk langsung terhubung dengan penjual.
            </p>
          </div>
          <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1">
            {UMKM_VISUAL_LIST.length} UMKM
          </span>
        </div>

        {/* UMKM Cards: klik nomor WhatsApp untuk chat langsung */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {UMKM_VISUAL_LIST.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-200 flex flex-col justify-between p-4 gap-3"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm leading-snug">
                    {item.nama}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                    {item.deskripsi}
                  </p>
                </div>
              </div>

              {/* WhatsApp Button: nomor langsung klik untuk chat */}
              <a
                href={getWhatsAppLink(item)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs transition"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp · {item.kontak}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};