import React, { useState } from 'react';
import { 
  Menu, 
  BookOpen, 
  Palmtree, 
  Users, 
  Newspaper, 
  GraduationCap, 
  ChevronRight, 
  Map, 
  Plus, 
  Minus,
  MapPin,
  ExternalLink,
  Sparkles,
  QrCode,
  Download,
  X
} from 'lucide-react';
import { PageRoute } from '../../types';
import warungMentengMapImg from '../../assets/images/WarungMenteng.png';
import warungMentengQrSvg from '../../assets/images/WarungMenteng.svg';

interface HomeBentoGridProps {
  onNavigate: (page: PageRoute, params?: any) => void;
}

export const HomeBentoGrid: React.FC<HomeBentoGridProps> = ({ onNavigate }) => {
  const [mapModalOpen, setMapModalOpen] = useState(false);
  const [mapZoom, setMapZoom] = useState(1);
  const [activeModalTab, setActiveModalTab] = useState<'barcode' | 'maps'>('barcode');

  const menuItems = [
    {
      icon: BookOpen,
      label: 'Profil Desa',
page: 'profil-desa' as PageRoute
    },
    {
      icon: Palmtree,
      label: 'Potensi Desa',
      page: 'potensi-desa' as PageRoute
    },
    {
      icon: Users,
      label: 'Pelayanan',
      page: 'pelayanan-desa' as PageRoute
    },
    {
      icon: Newspaper,
      label: 'HUMAS',
      page: 'berita-press-release' as PageRoute
    },
    {
      icon: GraduationCap,
      label: 'KKN',
      page: 'kkn' as PageRoute
    }
  ];

  const newsItems = [
    {
      id: 'berita-stunting',
      title: 'Pemerintah Desa Warung Menteng Gelar Sosialisasi Pencegahan Stunting',
      date: '12 Agustus 2025',
      image: '/src/assets/images/berita_stunting_1788954573683.jpg'
    },
    {
      id: 'berita-musdes',
      title: 'Musyawarah Desa (Musdes) RKPDES Tahun 2026 Resmi Dibuka',
      date: '8 Agustus 2025',
      image: '/src/assets/images/berita_musdes_gate_1788954594566.jpg'
    },
    {
      id: 'berita-jalan',
      title: 'Pembangunan Jalan Lingkungan di Kp. Cijeruk Mulai Dikerjakan',
      date: '5 Agustus 2025',
      image: '/src/assets/images/berita_jalan_lingkungan_1788954608799.jpg'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      {/* 4-Card Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        
        {/* ================= CARD 1: MENU ================= */}
        <div className="beranda-bento-card beranda-card-menu bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex flex-col justify-between hover:shadow-md transition will-change-transform">
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 text-slate-800 font-bold text-sm mb-4">
              <Menu className="w-4 h-4 text-emerald-700 stroke-[2.5]" />
              <span>Menu</span>
            </div>

            {/* Menu List */}
            <div className="space-y-2.5">
              {menuItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => onNavigate(item.page)}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 bg-[#f4f7f2] hover:bg-[#e9f0e6] text-slate-800 rounded-xl transition duration-150 group text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-emerald-800 stroke-[1.8] group-hover:scale-110 transition" />
                      <span className="text-xs font-semibold text-slate-800">
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-800 group-hover:translate-x-0.5 transition" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= CARD 2: TENTANG DESA WARUNG MENTENG ================= */}
        <div 
          onClick={() => onNavigate('profil-tentang')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onNavigate('profil-tentang');
            }
          }}
          role="button"
          tabIndex={0}
          className="beranda-bento-card beranda-card-tentang bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-emerald-200 p-5 flex flex-col justify-between hover:shadow-md transition cursor-pointer will-change-transform group focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
        >
          <div className="space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between text-slate-800 font-bold text-sm">
              <div className="flex items-center gap-2">
                <span className="text-emerald-700 text-base">🍃</span>
                <span className="group-hover:text-emerald-800 transition">Tentang Desa Warung Menteng</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition" />
            </div>

            {/* Description */}
            <p className="text-xs text-slate-600 leading-relaxed font-normal text-justify">
              Desa Warung Menteng adalah desa yang terletak di Kecamatan Cijeruk, Kabupaten Bogor, Jawa Barat. Dengan potensi alam yang melimpah dan masyarakat yang ramah, desa ini terus berkembang menjadi desa yang mandiri dan sejahtera.
            </p>

            {/* Landscape Photo with subtle hover indicator */}
            <div className="rounded-xl overflow-hidden shadow-xs mt-2 border border-slate-100 relative">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" 
                alt="Pemandangan Desa Warung Menteng dan Gunung Salak"
                className="w-full h-32 sm:h-36 object-cover group-hover:scale-105 transition duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                <span className="text-[11px] font-semibold text-white flex items-center gap-1">
                  Buka Informasi Lengkap <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CARD 3: PETA DESA (BARCODE DIGITAL) ================= */}
        <div className="beranda-bento-card beranda-card-peta bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex flex-col justify-between hover:shadow-md transition will-change-transform">
          <div className="space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between text-slate-800 font-bold text-sm">
              <div className="flex items-center gap-2">
                <QrCode className="w-4 h-4 text-emerald-700" />
                <span>Peta Desa</span>
              </div>
              <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full">
                Barcode Digital
              </span>
            </div>

            {/* Stylized Barcode Viewport - Matching Lihat Barcode */}
            <div 
              onClick={() => {
                setActiveModalTab('barcode');
                setMapModalOpen(true);
              }}
              className="relative bg-gradient-to-b from-slate-50 to-emerald-50/50 rounded-xl h-40 overflow-hidden border border-emerald-100 flex items-center justify-center p-2 group cursor-pointer select-none shadow-xs"
            >
              {/* White card container framing the QR barcode */}
              <div 
                className="bg-white p-2.5 rounded-xl border border-emerald-200/90 shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                style={{ transform: `scale(${mapZoom})` }}
              >
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent('https://maps.app.goo.gl/y4hKRrMnF5d28LQz9')}`}
                  alt="Barcode Resmi Peta Desa Warung Menteng"
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-md"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = warungMentengQrSvg;
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Badge Overlay */}
              <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-md border border-emerald-200 shadow-2xs flex items-center gap-1 pointer-events-none">
                <QrCode className="w-3 h-3 text-emerald-700" />
                <span className="text-[9.5px] font-bold text-slate-800">Scan Peta Digital</span>
              </div>

              {/* Zoom Controls */}
              <div 
                className="absolute bottom-1.5 right-1.5 flex flex-col bg-white rounded-md shadow-xs border border-slate-200 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setMapZoom(prev => Math.min(prev + 0.2, 1.8))}
                  className="p-1 hover:bg-slate-100 border-b border-slate-200 text-slate-700 cursor-pointer"
                  aria-label="Zoom in"
                >
                  <Plus className="w-3 h-3" />
                </button>
                <button 
                  onClick={() => setMapZoom(prev => Math.max(prev - 0.2, 0.8))}
                  className="p-1 hover:bg-slate-100 text-slate-700 cursor-pointer"
                  aria-label="Zoom out"
                >
                  <Minus className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons: Lihat Barcode & Google Maps */}
          <div className="pt-3 flex items-center gap-2">
            <button
              onClick={() => {
                setActiveModalTab('barcode');
                setMapModalOpen(true);
              }}
              className="flex-1 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 rounded-lg text-xs font-semibold transition text-center shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
            >
              <QrCode className="w-3.5 h-3.5 text-emerald-700" />
              <span>Lihat Barcode</span>
            </button>
            <a
              href="https://maps.app.goo.gl/y4hKRrMnF5d28LQz9"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold transition text-center shadow-xs flex items-center gap-1 cursor-pointer"
              title="Buka di Google Maps"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="text-[11px]">Maps</span>
            </a>
          </div>
        </div>

        {/* ================= CARD 4: HUMAS & WARTA ================= */}
        <div className="beranda-bento-card beranda-card-berita bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex flex-col justify-between hover:shadow-md transition will-change-transform">
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 text-slate-800 font-bold text-sm mb-3">
              <Newspaper className="w-4 h-4 text-emerald-700" />
              <span>HUMAS Terbaru</span>
            </div>

            {/* News List - Clicking navigates directly to each dedicated news page */}
            <div className="space-y-3">
              {newsItems.map((news) => (
                <div 
                  key={news.id}
                  onClick={() => onNavigate('berita-detail', { beritaId: news.id })}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-14 h-11 rounded-lg object-cover shrink-0 group-hover:opacity-90 group-hover:scale-105 transition shadow-xs"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 leading-snug group-hover:text-emerald-700 transition line-clamp-2">
                      {news.title}
                    </h4>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      {news.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Button: Lihat Semua HUMAS */}
          <div className="pt-3">
            <button
              onClick={() => onNavigate('berita-press-release')}
              className="w-full py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 rounded-lg text-xs font-semibold transition text-center shadow-xs cursor-pointer"
            >
              Lihat Semua HUMAS
            </button>
          </div>
        </div>

      </div>

      {/* Interactive Map & Barcode Modal */}
      {mapModalOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-150"
          onClick={() => setMapModalOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] my-auto animate-in zoom-in-95 duration-150"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                  <QrCode className="w-4 h-4 text-emerald-800" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Barcode Peta Digital Desa Warung Menteng</h3>
                  <p className="text-xs text-slate-500">Kecamatan Cijeruk, Kabupaten Bogor, Jawa Barat</p>
                </div>
              </div>
              <button
                onClick={() => setMapModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer transition"
                aria-label="Tutup modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="flex border-b border-slate-200 bg-slate-50/70 px-4 pt-2 gap-2 text-xs font-semibold">
              <button
                onClick={() => setActiveModalTab('barcode')}
                className={`pb-2.5 px-3 border-b-2 transition flex items-center gap-1.5 cursor-pointer ${
                  activeModalTab === 'barcode'
                    ? 'border-emerald-700 text-emerald-800 font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>Barcode Peta Digital</span>
              </button>
              <button
                onClick={() => setActiveModalTab('maps')}
                className={`pb-2.5 px-3 border-b-2 transition flex items-center gap-1.5 cursor-pointer ${
                  activeModalTab === 'maps'
                    ? 'border-emerald-700 text-emerald-800 font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                <Map className="w-3.5 h-3.5" />
                <span>Peta Satelit Interaktif</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
              {activeModalTab === 'barcode' ? (
                <div className="space-y-4">
                  {/* High-res Barcode Card */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col items-center justify-center space-y-3 shadow-inner text-center">
                    <a 
                      href="https://maps.app.goo.gl/y4hKRrMnF5d28LQz9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200/80 hover:ring-2 hover:ring-emerald-500/30 transition block cursor-pointer group"
                      title="Klik untuk membuka lokasi di Google Maps"
                    >
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent('https://maps.app.goo.gl/y4hKRrMnF5d28LQz9')}`}
                        alt="Barcode Resmi Peta Desa Warung Menteng"
                        className="max-h-60 w-auto object-contain mx-auto transition-transform group-hover:scale-102"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = warungMentengQrSvg;
                        }}
                      />
                    </a>
                    <div className="text-center space-y-1 max-w-md">
                      <span className="text-xs font-bold text-slate-900 block">
                        Scan atau Klik Barcode untuk Membuka Maps
                      </span>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        Arahkan kamera smartphone atau aplikasi pemindai QR ke barcode di atas untuk membuka navigasi digital instan Desa Warung Menteng di Google Maps.
                      </p>
                    </div>
                  </div>

                  {/* Actions & Coordinates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-emerald-50/80 rounded-xl p-3 border border-emerald-200/70 text-xs space-y-1">
                      <span className="font-bold text-emerald-900 block">Koordinat Geografis Desa</span>
                      <p className="text-slate-700 font-mono text-[11px]">6°42'08.4"S 106°47'20.8"E</p>
                      <p className="text-[10.5px] text-slate-500">Kecamatan Cijeruk, Kabupaten Bogor</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent('https://maps.app.goo.gl/y4hKRrMnF5d28LQz9')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        download="Barcode-Peta-Desa-Warung-Menteng.png"
                        className="flex-1 py-3 px-4 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 text-center transition flex items-center justify-center gap-1.5 shadow-xs"
                      >
                        <Download className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Unduh Barcode</span>
                      </a>
                      <a
                        href="https://maps.app.goo.gl/y4hKRrMnF5d28LQz9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold text-center transition flex items-center justify-center gap-1.5 shadow-xs"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Google Maps</span>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                    <iframe
                      title="Peta Desa Warung Menteng"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15850.55397441165!2d106.78768000000001!3d-6.691459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69cd181adbe4a5%3A0x6a0c0e7b7eb74b39!2sWarung%20Menteng%2C%20Kec.%20Cijeruk%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-200/60">
                      <span className="text-[10px] font-bold text-emerald-800 uppercase block">Kantor Desa</span>
                      <p className="text-xs text-slate-700 font-medium">Jl. Raya Cijeruk No. 12</p>
                    </div>
                    <div className="bg-teal-50 rounded-xl p-3 border border-teal-200/60">
                      <span className="text-[10px] font-bold text-teal-800 uppercase block">Kawasan Lereng</span>
                      <p className="text-xs text-slate-700 font-medium">600 - 900 mdpl (Gunung Salak)</p>
                    </div>
                    <div className="bg-cyan-50 rounded-xl p-3 border border-cyan-200/60">
                      <span className="text-[10px] font-bold text-cyan-800 uppercase block">Akses Tol</span>
                      <p className="text-xs text-slate-700 font-medium">±15 Menit Tol Bocimi</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">
                Pemerintah Desa Warung Menteng
              </span>
              <button
                onClick={() => setMapModalOpen(false)}
                className="bg-emerald-800 hover:bg-emerald-900 text-white font-semibold px-5 py-2 rounded-xl text-xs transition cursor-pointer"
              >
                Tutup Peta
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
