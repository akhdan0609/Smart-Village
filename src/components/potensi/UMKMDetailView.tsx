import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  MessageCircle,
  ChevronRight,
  ChevronLeft,
  Store,
  Share2,
  Check,
  Phone,
  Sparkles
} from 'lucide-react';
import { PageRoute } from '../../types';
import { UMKM_VISUAL_LIST, PotensiCardItem } from '../../data/potensiVisualData';

interface UMKMDetailViewProps {
  umkmId?: string;
  onNavigate: (page: PageRoute, params?: any) => void;
}

const getFotoList = (item: PotensiCardItem) => {
  const list: string[] = [];
  if (item.fotoUrl) list.push(item.fotoUrl);
  if (item.galeriFoto) list.push(...item.galeriFoto);
  return list;
};

const getWhatsAppLink = (item: PotensiCardItem) => {
  const rawNumber = (item.kontak || '').replace(/[^0-9]/g, '');
  const formattedNumber = rawNumber.startsWith('0') ? '62' + rawNumber.slice(1) : rawNumber;
  const text = encodeURIComponent(`Halo, saya tertarik dengan produk *${item.nama}* dari UMKM Desa Warung Menteng. Mohon info pemesanannya. Terima kasih.`);
  return `https://wa.me/${formattedNumber}?text=${text}`;
};

export const UMKMDetailView: React.FC<UMKMDetailViewProps> = ({ umkmId, onNavigate }) => {
  const item = useMemo(
    () => UMKM_VISUAL_LIST.find((p) => p.id === umkmId) || UMKM_VISUAL_LIST[0],
    [umkmId]
  );
  const [activeFoto, setActiveFoto] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const fotoList = useMemo(() => getFotoList(item), [item]);
  const umkmLainnya = useMemo(
    () => UMKM_VISUAL_LIST.filter((p) => p.id !== item.id),
    [item]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [item.id]);

  useEffect(() => {
    setActiveFoto(0);
  }, [item.id]);

  const handleShareLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`Lihat produk *${item.nama}* dari UMKM Desa Warung Menteng di portal resmi desa.`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#f8faf8] text-slate-900 pb-24 lg:pb-16">
      {/* Top Breadcrumbs Bar */}
      <div className="bg-white border-b border-slate-200/80 sticky top-0 z-20 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between text-xs">
          <nav className="flex items-center gap-1.5 text-slate-500 overflow-x-auto whitespace-nowrap scrollbar-none py-0.5">
            <button
              onClick={() => onNavigate('beranda')}
              className="hover:text-emerald-800 transition cursor-pointer font-medium"
            >
              Beranda
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <button
              onClick={() => onNavigate('potensi-desa')}
              className="hover:text-emerald-800 transition cursor-pointer font-medium"
            >
              Potensi Desa
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <button
              onClick={() => onNavigate('potensi-umkm')}
              className="hover:text-emerald-800 transition cursor-pointer font-medium"
            >
              UMKM
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="text-slate-900 font-semibold truncate max-w-[160px] sm:max-w-[320px]">
              {item.nama}
            </span>
          </nav>

          <button
            onClick={() => onNavigate('potensi-umkm')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-emerald-800 font-semibold transition cursor-pointer shrink-0 ml-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Semua UMKM</span>
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        {/* Mobile Back Button */}
        <div className="sm:hidden mb-4">
          <button
            onClick={() => onNavigate('potensi-umkm')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke UMKM</span>
          </button>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Galeri + Deskripsi */}
          <main className="lg:col-span-8 space-y-6">
            {/* Galeri Foto */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
              <div className="relative h-64 sm:h-80 lg:h-96 w-full bg-slate-100">
                <img
                  src={fotoList[activeFoto] || 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=1200&q=80'}
                  alt={item.nama}
                  className="w-full h-full object-cover"
                />

                {fotoList.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveFoto((i) => (i - 1 + fotoList.length) % fotoList.length)}
                      aria-label="Foto sebelumnya"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setActiveFoto((i) => (i + 1) % fotoList.length)}
                      aria-label="Foto selanjutnya"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-lg">
                  {activeFoto + 1} / {fotoList.length || 1}
                </span>
              </div>

              {/* Thumbnails */}
              {fotoList.length > 1 && (
                <div className="flex gap-2 px-4 py-3 overflow-x-auto">
                  {fotoList.map((foto, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveFoto(i)}
                      className={`shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition cursor-pointer ${
                        i === activeFoto ? 'border-[#0b3b29]' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={foto} alt={`${item.nama} ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Deskripsi */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-800 text-white shadow-xs">
                  <Store className="w-3.5 h-3.5 text-emerald-200" />
                  <span>Produk Asli Desa Warung Menteng</span>
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span>UMKM Lokal</span>
                </span>
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug tracking-tight">
                {item.nama}
              </h1>

              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
                <p>{item.detailLengkap || item.deskripsi}</p>
                <p className="text-slate-500">{item.deskripsi}</p>
              </div>
            </div>
          </main>

          {/* RIGHT: Info & Chat */}
          <aside className="lg:col-span-4 space-y-5 lg:sticky lg:top-20">
            {/* Kartu Hubungi Penjual */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-slate-900">Hubungi Penjual</h3>
                  <p className="text-[11px] text-slate-500">Klik untuk chat langsung via WhatsApp</p>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Nomor WhatsApp</p>
                  <p className="font-bold text-emerald-900 text-sm mt-0.5 tracking-wide">{item.kontak}</p>
                </div>
                <span className="w-10 h-10 rounded-full bg-[#25D366]/15 text-[#128C7E] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </span>
              </div>

              <a
                href={getWhatsAppLink(item)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold py-3 px-4 rounded-2xl transition shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat via WhatsApp</span>
              </a>
            </div>

            {/* Kartu Bagikan */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 space-y-3">
              <h3 className="font-extrabold text-sm text-slate-900">Bagikan Halaman Ini</h3>
              <button
                onClick={handleShareLink}
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition cursor-pointer"
              >
                {copiedLink ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                <span>{copiedLink ? 'Tautan Tersalin!' : 'Salin Tautan'}</span>
              </button>
              <button
                onClick={handleShareWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold py-2.5 px-4 rounded-xl transition cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Bagikan ke WhatsApp</span>
              </button>
            </div>
          </aside>
        </div>

        {/* UMKM Lainnya */}
        <div className="pt-12">
          <div className="flex items-end justify-between gap-3 mb-5">
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">UMKM Lainnya</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Produk lokal lain yang bisa kamu kunjungi.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {umkmLainnya.slice(0, 6).map((other) => (
              <button
                key={other.id}
                onClick={() => onNavigate('potensi-umkm-detail', { umkmId: other.id })}
                className="group bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-200 overflow-hidden text-left cursor-pointer"
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100">
                  {other.fotoUrl ? (
                    <img
                      src={other.fotoUrl}
                      alt={other.nama}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                      <Store className="w-8 h-8" />
                    </div>
                  )}
                </div>
                <div className="p-4 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm leading-snug">{other.nama}</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{other.deskripsi}</p>
                  </div>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center group-hover:bg-[#0b3b29] group-hover:text-white transition">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Bottom CTA (Mobile) */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 px-4 py-3 border-t border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="flex gap-2">
          <a
            href={getWhatsAppLink(item)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-3 px-4 rounded-2xl transition shadow-xs"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat WhatsApp</span>
          </a>
          <button
            onClick={() => onNavigate('potensi-umkm')}
            className="inline-flex items-center justify-center px-4 py-3 rounded-2xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold transition"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};