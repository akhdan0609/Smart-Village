import React, { useState } from 'react';
import { 
  X, 
  ArrowRight,
  ShoppingBag,
  MessageCircle,
  Tag,
  Phone,
  ExternalLink,
  MapPin,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { UMKM_VISUAL_LIST, PotensiCardItem } from '../../data/potensiVisualData';
import { PageRoute } from '../../types';

interface UMKMViewProps {
  onNavigate?: (page: PageRoute, params?: any) => void;
}

export const UMKMView: React.FC<UMKMViewProps> = ({ onNavigate }) => {
  const [activeItem, setActiveItem] = useState<PotensiCardItem | null>(null);
  const [previewImages, setPreviewImages] = useState<{ [id: string]: number }>({});

  const getWhatsAppLink = (item: PotensiCardItem) => {
    const rawNumber = item.nomorWA || item.kontak?.replace(/[^0-9]/g, '') || '628992022422';
    const formattedNumber = rawNumber.startsWith('0') ? '62' + rawNumber.slice(1) : rawNumber;
    const text = encodeURIComponent(
      `Halo, saya ingin menanyakan produk UMKM Desa Warung Menteng: *${item.nama}*. Mohon info ketersediaan stok & pemesanan. Terima kasih.`
    );
    return `https://wa.me/${formattedNumber}?text=${text}`;
  };

  const handleOpenDetail = (item: PotensiCardItem) => {
    if (onNavigate) {
      onNavigate('potensi-umkm-detail', { umkmId: item.id });
    } else {
      setActiveItem(item);
    }
  };

  return (
    <div className="py-6 sm:py-8 bg-[#f8faf8] min-h-screen">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 space-y-6 sm:space-y-8">
        
        {/* Hero Banner: UMKM Desa Warung Menteng */}
        <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-[220px] sm:min-h-[280px] flex items-center bg-slate-900">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1920&q=80" 
              alt="Produk UMKM Desa Warung Menteng" 
              className="w-full h-full object-cover object-center brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#062c1e]/95 via-[#083b28]/85 to-transparent sm:w-4/5" />
          </div>

          <div className="hidden lg:flex absolute right-12 bottom-8 z-10 items-center">
            <div className="bg-[#613c20]/90 border-2 border-[#82532c] rounded-xl px-5 py-3.5 shadow-xl text-center backdrop-blur-xs transform -rotate-1 hover:rotate-0 transition">
              <div className="text-[10px] uppercase font-mono tracking-widest text-amber-200">13 Usaha Warga</div>
              <div className="text-base font-black tracking-wide text-amber-100 font-serif border-t border-b border-amber-400/40 my-1 py-0.5">
                PRODUK LOKAL DESA
              </div>
              <div className="text-[11px] text-amber-300 font-semibold">WARUNG MENTENG</div>
            </div>
          </div>

          <div className="relative z-10 max-w-2xl px-5 sm:px-12 py-8 text-white space-y-2.5">
            <div className="inline-flex items-center gap-2 bg-emerald-800/80 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-emerald-100 border border-emerald-600/40">
              <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
              <span>Sentra UMKM & Wirausaha Warga (13 Usaha Terdaftar)</span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans">
              UMKM Desa Warung Menteng
            </h1>
            <p className="text-emerald-100 text-xs sm:text-sm sm:leading-relaxed max-w-xl font-normal">
              Mendukung produk dan karya mandiri masyarakat Desa Warung Menteng. Hubungi pemilik usaha langsung via WhatsApp untuk pemesanan cepat dan mudah.
            </p>
          </div>
        </div>

        {/* 13 UMKM Cards Grid: Responsif Smartphone, Tablet, & Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {UMKM_VISUAL_LIST.map((item) => {
            const images = item.galeriFoto && item.galeriFoto.length > 0 
              ? item.galeriFoto 
              : [item.fotoUrl];
            const currentImgIdx = previewImages[item.id] || 0;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between p-3.5 sm:p-4 group"
              >
                <div className="space-y-3">
                  {/* Image Display with Interactive Thumbnail Scroll & Click */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                    <img
                      src={images[currentImgIdx]}
                      alt={item.nama}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() => handleOpenDetail(item)}
                      loading="lazy"
                    />
                    
                    {/* Category pill */}
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded-md">
                      {item.kategori || 'UMKM'}
                    </div>

                    {/* Image indicator if multiple */}
                    {images.length > 1 && (
                      <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium px-1.5 py-0.5 rounded">
                        {currentImgIdx + 1}/{images.length}
                      </div>
                    )}
                  </div>

                  {/* Horizontal Scrollable/Clickable Gallery Thumbnails (Point 4) */}
                  {images.length > 1 && (
                    <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                      {images.map((img, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setPreviewImages(prev => ({ ...prev, [item.id]: idx }))}
                          aria-label={`Foto ${idx + 1}`}
                          className={`relative w-12 h-9 rounded-lg overflow-hidden shrink-0 border transition cursor-pointer ${
                            currentImgIdx === idx 
                              ? 'border-emerald-600 ring-1 ring-emerald-500' 
                              : 'border-slate-200 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Card Title & Phone */}
                  <div>
                    <h3 
                      onClick={() => handleOpenDetail(item)}
                      className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug line-clamp-1 hover:text-emerald-800 cursor-pointer transition"
                    >
                      {item.nama}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-emerald-800 font-semibold">
                      <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item.kontak}</span>
                    </div>
                  </div>

                  {/* Card Description */}
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.deskripsi}
                  </p>
                </div>

                {/* Bottom Actions: Lihat Selengkapnya & WhatsApp Button */}
                <div className="pt-4 border-t border-slate-100 mt-3 flex items-center gap-2">
                  <button
                    onClick={() => handleOpenDetail(item)}
                    className="flex-1 inline-flex items-center justify-center gap-1 bg-[#0b3b29] hover:bg-[#082a1d] text-white text-xs font-bold py-2.5 px-3 rounded-xl transition shadow-xs cursor-pointer active:scale-98"
                  >
                    <span>Lihat Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsAppLink(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Hubungi WhatsApp ${item.nama}`}
                    className="inline-flex items-center justify-center p-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl transition shadow-xs active:scale-98 cursor-pointer"
                    title="Hubungi WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                  </a>

                  {item.mapsLink && (
                    <a
                      href={item.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Lihat lokasi ${item.nama} di Google Maps`}
                      className="inline-flex items-center justify-center p-2.5 bg-white hover:bg-slate-50 text-emerald-700 border border-emerald-200 rounded-xl transition shadow-xs active:scale-98 cursor-pointer"
                      title="Lihat Lokasi di Google Maps"
                    >
                      <MapPin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fallback In-page Modal if opened without onNavigate */}
      {activeItem && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-150 my-4">
            <div className="relative aspect-[16/10] w-full bg-slate-100">
              <img
                src={activeItem.fotoUrl}
                alt={activeItem.nama}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveItem(null)}
                aria-label="Tutup modal"
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 sm:p-6 space-y-3.5">
              <div>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  {activeItem.kategori || 'UMKM'}
                </span>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1.5">{activeItem.nama}</h2>
                <div className="text-xs font-semibold text-slate-500 mt-0.5">
                  Desa Warung Menteng • {activeItem.kontak}
                </div>
              </div>

              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-1.5">
                <p>{activeItem.deskripsi}</p>
                {activeItem.detailLengkap && (
                  <p className="text-xs text-slate-500">{activeItem.detailLengkap}</p>
                )}
              </div>

              {/* Order via WhatsApp */}
              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-100 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Nomor WhatsApp:</span>
                  <span className="font-bold text-emerald-900 text-sm">{activeItem.kontak}</span>
                </div>
                <a
                  href={getWhatsAppLink(activeItem)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Hubungi Penjual via WhatsApp</span>
                </a>
              </div>

              {activeItem.mapsLink && (
                <a
                  href={activeItem.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-emerald-800 border border-emerald-200 text-xs font-bold py-2.5 px-4 rounded-xl transition shadow-xs"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Lihat Lokasi di Google Maps</span>
                </a>
              )}
            </div>

            <div className="p-3 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveItem(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-xl transition cursor-pointer"
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
