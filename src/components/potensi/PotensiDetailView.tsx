import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Phone,
  MapPin,
  Clock,
  Tag,
  Share2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  X,
  Calendar,
  Users,
  TrendingUp,
  MessageCircle,
  ExternalLink,
  CheckCircle,
  Info
} from 'lucide-react';
import { PotensiCardItem } from '../../data/potensiVisualData';
import { PageRoute } from '../../types';

interface PotensiDetailViewProps {
  itemId?: string;
  items: PotensiCardItem[];
  backRoute: PageRoute;
  backLabel: string;
  categoryLabel: string;
  listTitle: string;
  seeAllLabel: string;
  contactLabel: string;
  onNavigate: (page: PageRoute, params?: any) => void;
}

export const PotensiDetailView: React.FC<PotensiDetailViewProps> = ({
  itemId,
  items,
  backRoute,
  backLabel,
  categoryLabel,
  listTitle,
  seeAllLabel,
  contactLabel = 'Kontak / Pengelola',
  onNavigate,
}) => {
  const currentItem: PotensiCardItem = items.find(item => item.id === itemId) || items[0];

  const images = currentItem.galeriFoto && currentItem.galeriFoto.length > 0
    ? currentItem.galeriFoto
    : [currentItem.fotoUrl];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [zoomModalOpen, setZoomModalOpen] = useState(false);
  const [copiedNotification, setCopiedNotification] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveImageIndex(0);
  }, [itemId]);

  const formatDisplayPhone = (num: string) => {
    const clean = num.replace(/[^0-9]/g, '');
    if (clean.length >= 10 && clean.length <= 12) {
      return `${clean.slice(0, 4)}-${clean.slice(4, 8)}-${clean.slice(8)}`;
    }
    return num;
  };

  const rawPhone = currentItem.nomorWA || (currentItem.kontak?.match(/\(?\d{3,4}\)?[\s-]?\d{3,4}[\s-]?\d{3,4}/)?.[0] || '');

  const waNumber = currentItem.nomorWA || (rawPhone ? '62' + rawPhone.replace(/[^0-9]/g, '').replace(/^0/, '') : '');
  const waLink = waNumber
    ? `https://wa.me/${waNumber}?text=${encodeURIComponent(`Halo, saya ingin bertanya tentang ${currentItem.nama} di Desa Warung Menteng. Mohon informasinya. Terima kasih.`)}`
    : undefined;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentItem.nama,
        text: `${currentItem.nama} - ${categoryLabel} Desa Warung Menteng`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    }
  };

  const handleRelated = (id: string) => {
    onNavigate(backRoute === 'potensi-akomodasi' ? 'potensi-akomodasi-detail' : backRoute, { itemId: id });
  };

  const detailRoute: PageRoute =
    backRoute === 'potensi-akomodasi'
      ? 'potensi-akomodasi-detail'
      : backRoute === 'potensi-budaya'
        ? 'potensi-budaya-detail'
        : 'potensi-budidaya-detail';

  return (
    <div className="bg-[#f8faf8] min-h-screen py-4 sm:py-8">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 space-y-4 sm:space-y-6">

        {/* Top Navigation Bar: Tombol Kembali & Kategori */}
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => onNavigate(backRoute)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-emerald-900 hover:border-emerald-300 transition text-xs sm:text-sm font-semibold shadow-2xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{backLabel}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 transition text-xs font-semibold shadow-2xs cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Bagikan</span>
            </button>
          </div>
        </div>

        {copiedNotification && (
          <div className="p-3 bg-emerald-100 text-emerald-900 rounded-xl text-xs font-semibold flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>Tautan halaman berhasil disalin!</span>
          </div>
        )}

        {/* Main Detail Card Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">

            {/* Left Column: Interactive Gallery */}
            <div className="lg:col-span-5 space-y-3">
              <div
                onClick={() => setZoomModalOpen(true)}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 cursor-zoom-in group shadow-xs"
              >
                <img
                  src={images[activeImageIndex]}
                  alt={`${currentItem.nama} - Foto ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white p-1.5 rounded-lg opacity-80 group-hover:opacity-100 transition">
                  <ZoomIn className="w-4 h-4" />
                </div>
                <div className="absolute bottom-2.5 left-2.5 bg-black/65 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                  Foto {activeImageIndex + 1} dari {images.length}
                </div>

                {images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
                      }}
                      aria-label="Foto Sebelumnya"
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-md hover:bg-white transition cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
                      }}
                      aria-label="Foto Selanjutnya"
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-md hover:bg-white transition cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span>Galeri Foto (Geser & Klik):</span>
                    <span>{images.length} Foto</span>
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-1.5 pt-0.5 no-scrollbar scroll-smooth">
                    {images.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-20 sm:w-24 aspect-[4/3] rounded-xl overflow-hidden shrink-0 border-2 transition cursor-pointer ${
                          activeImageIndex === idx
                            ? 'border-emerald-600 ring-2 ring-emerald-500/20 shadow-xs'
                            : 'border-slate-200 hover:border-emerald-300 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={imgUrl}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Information, Description & Contact */}
            <div className="lg:col-span-7 space-y-4">
              {/* Badges & Title */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <Tag className="w-3 h-3" />
                    <span>{categoryLabel}</span>
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                    Desa Warung Menteng
                  </span>
                </div>

                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {currentItem.nama}
                </h1>
              </div>

              {/* Quick Info Contact Card */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50/80 border border-emerald-200/90 rounded-2xl p-4 sm:p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                      {contactLabel}
                    </span>
                    <div className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
                      {formatDisplayPhone(currentItem.kontak || '-')}
                    </div>
                  </div>
                  {currentItem.jamOperasional && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-600 text-white">
                      <Clock className="w-3 h-3" />
                      Buka: {currentItem.jamOperasional}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3">
                  {waLink ? (
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-xl transition shadow-xs active:scale-[0.98]"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Hubungi via WhatsApp</span>
                    </a>
                  ) : (
                    <div className="w-full inline-flex items-center justify-center gap-2 bg-white text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm px-4 py-3 rounded-xl shadow-xs">
                      <Info className="w-4 h-4 text-emerald-700" />
                      <span>{currentItem.kontak}</span>
                    </div>
                  )}

                  {currentItem.lokasi && (
                    <div className="w-full inline-flex items-center gap-2 bg-white text-slate-800 border border-slate-300 font-semibold text-xs sm:text-sm px-4 py-3 rounded-xl shadow-2xs">
                      <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span className="line-clamp-2">{currentItem.lokasi}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description & Full Detail */}
              <div className="space-y-2">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Informasi Lengkap:
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {currentItem.deskripsi}
                </p>
                {currentItem.detailLengkap && (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {currentItem.detailLengkap}
                  </p>
                )}
              </div>

              {/* Meta Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1 text-xs">
                {currentItem.kategori && (
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[11px] text-slate-400 block">Kategori</span>
                    <span className="font-semibold text-slate-800 mt-0.5 block">{currentItem.kategori}</span>
                  </div>
                )}
                {currentItem.harga && (
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[11px] text-slate-400 block">Biaya / Harga</span>
                    <span className="font-bold text-slate-800 mt-0.5 block">{currentItem.harga}</span>
                  </div>
                )}
                {currentItem.jamOperasional && (
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[11px] text-slate-400 block flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      Jam Buka
                    </span>
                    <span className="font-semibold text-slate-800 mt-0.5 block">{currentItem.jamOperasional}</span>
                  </div>
                )}
                {currentItem.pelaku && (
                  <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-100">
                    <span className="text-[11px] text-amber-700 block flex items-center gap-1">
                      <Users className="w-3 h-3 text-amber-600" />
                      Pelaku Seni / Adat
                    </span>
                    <span className="font-semibold text-slate-800 mt-0.5 block">{currentItem.pelaku}</span>
                  </div>
                )}
                {currentItem.waktuPelaksanaan && (
                  <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-100">
                    <span className="text-[11px] text-amber-700 block flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-amber-600" />
                      Waktu Pelaksanaan
                    </span>
                    <span className="font-semibold text-slate-800 mt-0.5 block">{currentItem.waktuPelaksanaan}</span>
                  </div>
                )}
                {currentItem.komoditas && (
                  <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100">
                    <span className="text-[11px] text-emerald-800 block">Komoditas</span>
                    <span className="font-semibold text-emerald-950 mt-0.5 block">{currentItem.komoditas}</span>
                  </div>
                )}
                {currentItem.kapasitas && (
                  <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100">
                    <span className="text-[11px] text-emerald-800 block flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-emerald-700" />
                      Estimasi Kapasitas Produksi
                    </span>
                    <span className="font-semibold text-emerald-950 mt-0.5 block">{currentItem.kapasitas}</span>
                  </div>
                )}
                {currentItem.kelompok && (
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[11px] text-slate-400 block flex items-center gap-1">
                      <Users className="w-3 h-3 text-slate-400" />
                      Kelompok Pengelola
                    </span>
                    <span className="font-semibold text-slate-800 mt-0.5 block">{currentItem.kelompok}</span>
                  </div>
                )}
              </div>

              {/* Fasilitas */}
              {currentItem.fasilitas && currentItem.fasilitas.length > 0 && (
                <div className="pt-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Fasilitas Tersedia:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentItem.fasilitas.map((f, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg"
                      >
                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section: Rekomendasi Item Lainnya */}
        <div className="pt-4 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm sm:text-base font-bold text-slate-900">
              {listTitle}
            </h2>
            <button
              onClick={() => onNavigate(backRoute)}
              className="text-xs font-bold text-emerald-800 hover:text-emerald-950 transition cursor-pointer"
            >
              {seeAllLabel}
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3">
            {items.filter(item => item.id !== currentItem.id).slice(0, 6).map(other => (
              <button
                key={other.id}
                onClick={() => handleRelated(other.id)}
                className="bg-white p-2.5 rounded-xl border border-slate-200/90 text-left hover:border-emerald-500 transition group shadow-2xs cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 mb-2">
                    <img
                      src={other.fotoUrl}
                      alt={other.nama}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className="text-[11px] font-bold text-slate-900 line-clamp-1 leading-snug">
                    {other.nama}
                  </div>
                  <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                    {other.lokasi || other.kontak}
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 mt-1.5 flex items-center gap-0.5">
                  <span>Lihat</span> &rarr;
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox / Zoom Modal */}
      {zoomModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setZoomModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setZoomModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-emerald-400 transition cursor-pointer p-1"
              aria-label="Tutup"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={images[activeImageIndex]}
              alt={currentItem.nama}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
          </div>
        </div>
      )}

    </div>
  );
};