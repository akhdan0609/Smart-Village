import React, { useEffect, useState } from 'react';
import {
  X,
  ArrowRight,
  MessageCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { UMKM_VISUAL_LIST, PotensiCardItem } from '../../data/potensiVisualData';

export const UMKMView: React.FC = () => {
  const [activeItem, setActiveItem] = useState<PotensiCardItem | null>(null);
  const [activeFoto, setActiveFoto] = useState(0);

  const getFotoList = (item: PotensiCardItem) => {
    const list: string[] = [];
    if (item.fotoUrl) list.push(item.fotoUrl);
    if (item.galeriFoto) list.push(...item.galeriFoto);
    return list;
  };

  const openModal = (item: PotensiCardItem) => {
    setActiveFoto(0);
    setActiveItem(item);
  };

  const getWhatsAppLink = (item: PotensiCardItem) => {
    const rawNumber = (item.kontak || '').replace(/[^0-9]/g, '');
    const formattedNumber = rawNumber.startsWith('0') ? '62' + rawNumber.slice(1) : rawNumber;
    const text = encodeURIComponent(`Halo, saya tertarik dengan produk *${item.nama}* dari UMKM Desa Warung Menteng. Mohon info pemesanannya. Terima kasih.`);
    return `https://wa.me/${formattedNumber}?text=${text}`;
  };

  useEffect(() => {
    if (!activeItem) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveItem(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeItem]);

  const fotoList = activeItem ? getFotoList(activeItem) : [];

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
              Klik foto produk untuk melihat galeri dan klik "Lihat Selengkapnya" untuk detail selengkapnya.
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
              {/* Photo (klik untuk lihat galeri) */}
              <button
                onClick={() => openModal(item)}
                className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer"
                aria-label={`Lihat galeri ${item.nama}`}
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
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                <span className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition">
                  Lihat Foto
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

                {/* Tombol Lihat Selengkapnya */}
                <button
                  onClick={() => openModal(item)}
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

      {/* Detail Modal - layout pas mengisi layar perangkat tanpa perlu scroll */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full sm:max-w-lg rounded-t-2xl sm:rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-[100dvh] sm:max-h-[calc(100dvh-2rem)] overflow-hidden"
          >
            {/* Galeri Foto */}
            <div className="relative h-44 sm:h-52 w-full shrink-0 bg-slate-100">
              <img
                src={fotoList[activeFoto] || 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=800&q=80'}
                alt={activeItem.nama}
                className="w-full h-full object-cover"
              />

              {/* Navigasi panah */}
              {fotoList.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveFoto((i) => (i - 1 + fotoList.length) % fotoList.length)}
                    aria-label="Foto sebelumnya"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveFoto((i) => (i + 1) % fotoList.length)}
                    aria-label="Foto selanjutnya"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <button
                onClick={() => setActiveItem(null)}
                aria-label="Tutup modal"
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition"
              >
                <X className="w-4 h-4" />
              </button>

              <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-lg">
                {activeFoto + 1} / {fotoList.length || 1}
              </span>
            </div>

            {/* Thumbnail scrollable (klik untuk ganti foto) */}
            {fotoList.length > 1 && (
              <div className="flex gap-2 px-3 py-2.5 overflow-x-auto shrink-0 bg-slate-50 border-b border-slate-100">
                {fotoList.map((foto, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveFoto(i)}
                    className={`shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition cursor-pointer ${
                      i === activeFoto ? 'border-[#0b3b29]' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={foto} alt={`${activeItem.nama} ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Deskripsi - memakai sisa ruang agar nomor WA tetap terlihat */}
            <div className="flex-1 overflow-y-auto min-h-0 px-5 sm:px-6 py-4 space-y-2">
              <h2 className="text-xl font-extrabold text-slate-900 leading-snug">{activeItem.nama}</h2>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>{activeItem.detailLengkap || activeItem.deskripsi}</p>
              </div>
            </div>

            {/* Nomor WhatsApp - selalu terlihat tanpa scroll */}
            {activeItem.kontak && (
              <div className="px-5 sm:px-6 py-4 bg-emerald-50/70 border-t border-emerald-100 shrink-0 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Nomor WhatsApp:</span>
                  <span className="font-bold text-emerald-900">{activeItem.kontak}</span>
                </div>
                <a
                  href={getWhatsAppLink(activeItem)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Hubungi Penjual via WhatsApp</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};