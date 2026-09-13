import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  Calendar, 
  Eye, 
  ArrowRight, 
  Users, 
  Landmark, 
  Hammer, 
  HeartHandshake, 
  MoreHorizontal, 
  Megaphone, 
  MessageSquare, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Share2, 
  Send, 
  Check, 
  Sparkles,
  ChevronRight as ChevronNext
} from 'lucide-react';
import { BeritaItem } from '../../types';
import { getStoredBerita } from '../../utils/storage';
import heroBannerImg from '../../assets/images/berita_hero_panorama_1788954557336.jpg';

interface BeritaViewProps {
  selectedBeritaId?: string;
  onNavigate?: (page: string, params?: any) => void;
}

export const BeritaView: React.FC<BeritaViewProps> = ({ selectedBeritaId, onNavigate }) => {
  const [beritaList, setBeritaList] = useState<BeritaItem[]>([]);
  const [selectedKategori, setSelectedKategori] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  // Active detail modal
  const [activeBerita, setActiveBerita] = useState<BeritaItem | null>(null);
  
  // Comments sidebar modal
  const [showCommentsModal, setShowCommentsModal] = useState(false);

  // Share feedback
  const [copiedLink, setCopiedLink] = useState(false);

  // Komentar state with persistence
  const [comments, setComments] = useState<{ [id: string]: Array<{ nama: string; komentar: string; waktu: string; approved?: boolean }> }>({
    'berita-stunting': [
      { nama: 'Ibu Ratna (Kader Posyandu RW 04)', komentar: 'Program PMT olahan ikan nila sangat disukai anak-anak balita. Terima kasih Pemdes Warung Menteng!', waktu: '12 Agustus 2025', approved: true },
      { nama: 'Bpk. Herman (Ketua RT 02)', komentar: 'Semoga angka stunting di desa kita terus ditekan hingga benar-benar nihil.', waktu: '13 Agustus 2025', approved: true }
    ],
    'berita-musdes': [
      { nama: 'Kang Asep Supriadi', komentar: 'Mohon usulan perbaikan drainase di RW 03 dapat diakomodir di RKPDes 2026.', waktu: '9 Agustus 2025', approved: true }
    ],
    'berita-jalan': [
      { nama: 'Pak Ujang (Warga Kp. Cijeruk)', komentar: 'Alhamdulillah akhirnya jalan beton masuk kampung, mobilitas panen salak jadi lancar.', waktu: '6 Agustus 2025', approved: true }
    ],
    'general': [
      { nama: 'Siti Aminah', komentar: 'Apresiasi keterbukaan informasi publik desa yang sangat rapi dan informatif.', waktu: '10 Agustus 2025', approved: true },
      { nama: 'Dedi Kusnadi', komentar: 'Semoga kegiatan sanggar seni pemuda terus dibina dan diwadahi.', waktu: '4 Agustus 2025', approved: true }
    ]
  });

  const [namaKomentar, setNamaKomentar] = useState('');
  const [isiKomentar, setIsiKomentar] = useState('');
  const [commentSuccess, setCommentSuccess] = useState(false);

  useEffect(() => {
    const list = getStoredBerita();
    setBeritaList(list);

    if (selectedBeritaId) {
      const found = list.find(b => b.id === selectedBeritaId);
      if (found) setActiveBerita(found);
    }
  }, [selectedBeritaId]);

  // Categories matching the screenshot layout
  const kategoriTabs = [
    { label: 'Semua', icon: Users },
    { label: 'Pemerintahan', icon: Landmark },
    { label: 'Kegiatan Desa', icon: Users },
    { label: 'Pembangunan', icon: Hammer },
    { label: 'Pemberdayaan Masyarakat', icon: HeartHandshake },
    { label: 'Lainnya', icon: MoreHorizontal, display: '••• Lainnya' }
  ];

  // Filtering
  const filteredBerita = useMemo(() => {
    return beritaList.filter(item => {
      const matchCat = selectedKategori === 'Semua' || item.kategori === selectedKategori;
      const matchSearch = 
        item.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ringkasan.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tags && item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchCat && matchSearch;
    });
  }, [beritaList, selectedKategori, searchQuery]);

  // Pagination calculation
  const totalItems = filteredBerita.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredBerita.slice(startIndex, startIndex + itemsPerPage);

  // Reset to page 1 on filter or search change
  const handleCategoryChange = (kat: string) => {
    setSelectedKategori(kat);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  // Top 5 Latest News for Sidebar (matches the right card in screenshot)
  const latestFiveNews = useMemo(() => {
    return [...beritaList].slice(0, 5);
  }, [beritaList]);

  // Submit comment
  const handleAddComment = (e: React.FormEvent, targetId?: string) => {
    e.preventDefault();
    if (!namaKomentar.trim() || !isiKomentar.trim()) return;

    const idKey = targetId || activeBerita?.id || 'general';
    const existing = comments[idKey] || [];
    
    setComments({
      ...comments,
      [idKey]: [
        ...existing,
        {
          nama: namaKomentar.trim(),
          komentar: isiKomentar.trim(),
          waktu: 'Baru saja',
          approved: true
        }
      ]
    });

    setNamaKomentar('');
    setIsiKomentar('');
    setCommentSuccess(true);
    setTimeout(() => setCommentSuccess(false), 3500);
  };

  // Share article
  const handleShare = (item: BeritaItem) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleOpenBerita = (item: BeritaItem) => {
    if (onNavigate) {
      onNavigate('berita-detail', { beritaId: item.id });
    } else {
      setActiveBerita(item);
    }
  };

  const getCategoryIcon = (kat: string) => {
    switch (kat) {
      case 'Pemerintahan': return Landmark;
      case 'Kegiatan Desa': return Users;
      case 'Pembangunan': return Hammer;
      case 'Pemberdayaan Masyarakat': return HeartHandshake;
      default: return Sparkles;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 pb-20 relative overflow-hidden font-sans">
      {/* Decorative leaf/botanical accents matching the reference visual */}
      <div className="absolute -top-10 -right-10 w-96 h-96 pointer-events-none opacity-20 bg-emerald-300 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 pointer-events-none opacity-25 bg-emerald-200 rounded-full blur-3xl" />

      {/* HERO SECTION BANNER */}
      <div className="relative w-full bg-slate-900 overflow-hidden min-h-[260px] sm:min-h-[300px] lg:min-h-[320px] flex items-center">
        {/* Background Image */}
        <img 
          src={heroBannerImg} 
          alt="Lanskap Desa Warung Menteng"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />

        {/* Scenic Dark / Deep Emerald Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />

        {/* Stylized Organic Green Leaf Curves Overlay (as in reference image) */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 sm:w-1/4 pointer-events-none opacity-85 hidden md:block">
          <svg viewBox="0 0 200 300" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M120 -30 C 60 70, 140 180, 260 220 C 220 260, 130 190, 120 -30 Z" fill="#065f46" fillOpacity="0.45" />
            <path d="M160 -10 C 100 90, 160 210, 270 240 C 220 230, 150 160, 160 -10 Z" fill="#047857" fillOpacity="0.4" />
            <path d="M190 -50 C 130 60, 180 180, 290 200" stroke="#34d399" strokeWidth="2.5" strokeOpacity="0.3" strokeLinecap="round" />
          </svg>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16">
          <div className="max-w-2xl space-y-3">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-medium text-slate-300">
              <button 
                onClick={() => onNavigate?.('beranda')}
                className="hover:text-emerald-300 transition cursor-pointer flex items-center gap-1 text-slate-300"
              >
                Beranda
              </button>
              <span className="text-slate-400 font-semibold">&gt;</span>
              <span className="text-white font-semibold">Hubungan Masyarakat</span>
            </nav>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Hubungan Masyarakat Desa
            </h1>

            {/* Description */}
            <p className="text-slate-200 text-xs sm:text-sm lg:text-base font-normal max-w-xl leading-relaxed">
              Pusat publikasi resmi Hubungan Masyarakat (HUMAS), siaran pers, dokumentasi warta, dan transparansi kebijakan Desa Warung Menteng.
            </p>
          </div>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 space-y-8">
        
        {/* CATEGORY FILTER PILLS & SEARCH BAR ROW */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {kategoriTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = selectedKategori === tab.label;
              return (
                <button
                  key={tab.label}
                  onClick={() => handleCategoryChange(tab.label)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
                    isActive
                      ? 'bg-[#064e3b] text-white shadow-sm ring-1 ring-[#064e3b]'
                      : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/90'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-200' : 'text-slate-500'}`} />
                  <span>{tab.display || tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Cari rilis HUMAS & warta..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200/90 rounded-full text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent shadow-xs transition"
            />
            {searchQuery && (
              <button 
                onClick={() => handleSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* TWO-COLUMN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* LEFT COLUMN: BERITA CARDS (8 COLS) */}
          <div className="lg:col-span-8 space-y-6">
            
            {filteredBerita.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/90 space-y-3">
                <Search className="w-8 h-8 text-slate-300 mx-auto" />
                <h3 className="text-base font-bold text-slate-800">Tidak ada publikasi HUMAS ditemukan</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Silakan coba dengan kata kunci lain atau pilih kategori "Semua" untuk melihat publikasi HUMAS desa.
                </p>
                <button
                  onClick={() => { setSelectedKategori('Semua'); setSearchQuery(''); }}
                  className="mt-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-4 py-2 rounded-full hover:bg-emerald-100 transition"
                >
                  Reset Pencarian
                </button>
              </div>
            ) : currentPage === 1 && selectedKategori === 'Semua' && !searchQuery ? (
              /* EXACT 2-ROW LAYOUT FROM SCREENSHOT FOR DEFAULT PAGE 1 */
              <div className="space-y-6">
                
                {/* ROW 1: 2 COLUMNS (FEATURED FULL-IMAGE CARD ON LEFT, HALF CARD ON RIGHT) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
                  
                  {/* CARD 1: FEATURED CARD (SOSIALISASI PENCEGAHAN STUNTING) */}
                  {currentItems[0] && (
                    <div 
                      key={currentItems[0].id}
                      onClick={() => handleOpenBerita(currentItems[0])}
                      className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer min-h-[380px] flex flex-col justify-between p-5 sm:p-6"
                    >
                      {/* Background Image */}
                      <img 
                        src={currentItems[0].fotoUrl} 
                        alt={currentItems[0].judul} 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Contrast Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-black/25" />
                      
                      {/* Top Left Badge */}
                      <div className="relative z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#064e3b]/90 backdrop-blur-sm text-white border border-emerald-400/20 shadow-xs">
                          <Users className="w-3.5 h-3.5 text-emerald-200" />
                          <span>{currentItems[0].kategori}</span>
                        </span>
                      </div>

                      {/* Bottom Content Area */}
                      <div className="relative z-10 space-y-3">
                        <h2 className="text-white text-base sm:text-lg font-bold leading-snug group-hover:text-emerald-200 transition">
                          {currentItems[0].judul}
                        </h2>

                        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-white/10">
                          {/* Date & Views */}
                          <div className="flex items-center gap-3 text-xs text-slate-200 font-normal">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-slate-300" />
                              <span>{currentItems[0].tanggal}</span>
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Eye className="w-3.5 h-3.5 text-slate-300" />
                              <span>{currentItems[0].dibaca} Dilihat</span>
                            </span>
                          </div>

                          {/* White Read Button */}
                          <button className="bg-white hover:bg-slate-100 text-slate-900 rounded-full px-4 py-1.5 text-xs font-bold flex items-center gap-1.5 shadow-sm transition shrink-0 cursor-pointer">
                            <span>Baca Selengkapnya</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CARD 2: MUSDES RKPDes (WHITE CARD WITH TOP IMAGE) */}
                  {currentItems[1] && (
                    <div 
                      key={currentItems[1].id}
                      onClick={() => handleOpenBerita(currentItems[1])}
                      className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
                    >
                      {/* Image container */}
                      <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                        <img 
                          src={currentItems[1].fotoUrl} 
                          alt={currentItems[1].judul} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Badge on image */}
                        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#064e3b]/90 backdrop-blur-sm text-white border border-emerald-400/20 shadow-xs">
                          <Landmark className="w-3.5 h-3.5 text-emerald-200" />
                          <span>{currentItems[1].kategori}</span>
                        </span>
                      </div>

                      {/* Content Body */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-slate-900 font-bold text-sm sm:text-base leading-snug group-hover:text-emerald-800 transition line-clamp-2">
                            {currentItems[1].judul}
                          </h3>
                          <div className="flex items-center gap-3 text-xs text-slate-400">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{currentItems[1].tanggal}</span>
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="w-3.5 h-3.5" />
                              <span>{currentItems[1].dibaca} Dilihat</span>
                            </span>
                          </div>
                        </div>

                        {/* Light Green Button */}
                        <div>
                          <span className="inline-flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs font-bold transition">
                            <span>Baca Selengkapnya</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* ROW 2: 3 COLUMNS CARDS (PEMBANGUNAN JALAN, SANGGAR SENI, PELATIHAN UMKM) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {currentItems.slice(2, 5).map((item) => {
                    const KatIcon = getCategoryIcon(item.kategori);
                    return (
                      <div 
                        key={item.id}
                        onClick={() => handleOpenBerita(item)}
                        className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
                      >
                        {/* Image */}
                        <div className="relative h-40 sm:h-44 overflow-hidden bg-slate-100">
                          <img 
                            src={item.fotoUrl} 
                            alt={item.judul} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {/* Badge */}
                          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#064e3b]/90 backdrop-blur-sm text-white border border-emerald-400/20 shadow-xs">
                            <KatIcon className="w-3 h-3 text-emerald-200" />
                            <span>{item.kategori === 'Lainnya' ? '••• Lainnya' : item.kategori}</span>
                          </span>
                        </div>

                        {/* Card Body */}
                        <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                          <div className="space-y-1.5">
                            <h3 className="text-slate-900 font-bold text-xs sm:text-sm leading-snug group-hover:text-emerald-800 transition line-clamp-2">
                              {item.judul}
                            </h3>
                            <div className="flex items-center gap-2 text-[11px] text-slate-400">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>{item.tanggal}</span>
                              </span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                <span>{item.dibaca} Dilihat</span>
                              </span>
                            </div>
                          </div>

                          {/* Button */}
                          <div>
                            <span className="inline-flex items-center gap-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-[11px] font-bold transition">
                              <span>Baca Selengkapnya</span>
                              <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            ) : (
              /* STANDARD GRID FOR FILTERED / SUBSEQUENT PAGES */
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {currentItems.map((item) => {
                  const KatIcon = getCategoryIcon(item.kategori);
                  return (
                    <div 
                      key={item.id}
                      onClick={() => handleOpenBerita(item)}
                      className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
                    >
                      <div className="relative h-44 overflow-hidden bg-slate-100">
                        <img 
                          src={item.fotoUrl} 
                          alt={item.judul} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#064e3b]/90 backdrop-blur-sm text-white border border-emerald-400/20 shadow-xs">
                          <KatIcon className="w-3 h-3 text-emerald-200" />
                          <span>{item.kategori}</span>
                        </span>
                      </div>

                      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                        <div className="space-y-1.5">
                          <h3 className="text-slate-900 font-bold text-xs sm:text-sm leading-snug group-hover:text-emerald-800 transition line-clamp-2">
                            {item.judul}
                          </h3>
                          <div className="flex items-center gap-2 text-[11px] text-slate-400">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{item.tanggal}</span>
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              <span>{item.dibaca} Dilihat</span>
                            </span>
                          </div>
                        </div>

                        <div>
                          <span className="inline-flex items-center gap-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-[11px] font-bold transition">
                            <span>Baca Selengkapnya</span>
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* PAGINATION CONTROLS (MATCHES SCREENSHOT) */}
            {totalItems > 0 && (
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/80">
                {/* Number Buttons */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    aria-label="Halaman sebelumnya"
                    className="w-8 h-8 rounded-lg border border-slate-200/90 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition text-xs font-semibold"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`min-w-[32px] h-8 px-2 rounded-lg text-xs font-bold transition flex items-center justify-center ${
                        currentPage === pageNum
                          ? 'bg-[#064e3b] text-white shadow-xs'
                          : 'border border-slate-200/90 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    aria-label="Halaman selanjutnya"
                    className="w-8 h-8 rounded-lg border border-slate-200/90 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition text-xs font-semibold"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Counter Label (e.g. "Menampilkan 1–6 dari 18 publikasi HUMAS") */}
                <div className="text-xs text-slate-500 font-medium">
                  Menampilkan {startIndex + 1}–{Math.min(startIndex + itemsPerPage, totalItems)} dari {totalItems} publikasi HUMAS
                </div>
              </div>
            )}

          </div>

          {/* RIGHT COLUMN: SIDEBAR WIDGETS (4 COLS) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* WIDGET 1: PUBLIKASI HUMAS TERBARU */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs space-y-4">
              {/* Header with Megaphone */}
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base pb-2 border-b border-slate-100">
                <Megaphone className="w-5 h-5 text-emerald-800" />
                <span>Publikasi HUMAS Terbaru</span>
              </div>

              {/* 5 News List */}
              <div className="divide-y divide-slate-100">
                {latestFiveNews.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleOpenBerita(item)}
                    className="py-3 first:pt-1 last:pb-1 flex items-start gap-3 group cursor-pointer"
                  >
                    {/* Thumbnail */}
                    <div className="w-20 h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-100 shadow-2xs">
                      <img 
                        src={item.fotoUrl} 
                        alt={item.judul}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Meta & Title */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <h4 className="text-xs font-bold text-slate-800 group-hover:text-emerald-800 transition line-clamp-2 leading-snug">
                        {item.judul}
                      </h4>
                      <div className="flex items-center gap-2 text-[11px] text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{item.tanggal}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{item.dibaca} Dilihat</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WIDGET 2: KOMENTAR (MATCHES SCREENSHOT) */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs space-y-4">
              {/* Header with Speech Bubble */}
              <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                <MessageSquare className="w-5 h-5 text-emerald-800" />
                <span>Komentar</span>
              </div>

              {/* Privacy Notice Box in Light Green */}
              <div className="bg-emerald-50 border border-emerald-200/70 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-emerald-900">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Fitur komentar hanya dapat dilihat oleh pemilik komentar dan admin.
                </p>
              </div>

              {/* Action Button: Lihat Komentar */}
              <button
                onClick={() => setShowCommentsModal(true)}
                className="w-full p-3 rounded-xl border border-slate-200 hover:border-emerald-700 hover:bg-emerald-50/50 flex items-center justify-between text-xs font-bold text-slate-700 hover:text-emerald-900 transition cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-slate-400 group-hover:text-emerald-800 transition" />
                  <span>Lihat Komentar</span>
                </div>
                <ChevronNext className="w-4 h-4 text-slate-400 group-hover:text-emerald-800 transition" />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* FULL ARTICLE DETAIL MODAL */}
      {activeBerita && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveBerita(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition cursor-pointer"
              aria-label="Tutup berita"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header info */}
            <div className="space-y-2 pr-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#064e3b] text-white text-xs font-semibold px-3 py-0.5 rounded-full">
                  {activeBerita.kategori}
                </span>
                <span className="text-xs text-slate-400">• {activeBerita.tanggal}</span>
                <span className="text-xs text-slate-400">• {activeBerita.penulis}</span>
                <span className="text-xs text-slate-400">• {activeBerita.dibaca} Dilihat</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                {activeBerita.judul}
              </h2>
            </div>

            {/* Main Photo */}
            <div className="rounded-2xl overflow-hidden max-h-[380px] bg-slate-100 shadow-inner">
              <img
                src={activeBerita.fotoUrl}
                alt={activeBerita.judul}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line space-y-3 font-normal">
              {activeBerita.isiLengkap}
            </div>

            {/* Tags & Share */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {activeBerita.tags?.map((tag, i) => (
                  <span key={i} className="text-[11px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium">
                    #{tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => handleShare(activeBerita)}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-emerald-800 bg-slate-100 hover:bg-emerald-50 px-3 py-1.5 rounded-full transition cursor-pointer"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Link Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Bagikan Berita</span>
                  </>
                )}
              </button>
            </div>

            {/* Section Komentar untuk Berita Ini */}
            <div className="pt-4 border-t border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-800" />
                  <span>Komentar Warga ({(comments[activeBerita.id] || []).length})</span>
                </h4>
                <span className="text-[11px] text-slate-400">Moderasi Otomatis</span>
              </div>

              {/* List Komentar */}
              <div className="space-y-2.5 max-h-52 overflow-y-auto pr-1">
                {(comments[activeBerita.id] || []).length === 0 ? (
                  <p className="text-xs text-slate-400 italic py-2">Belum ada komentar untuk warta ini. Jadilah yang pertama berkomentar.</p>
                ) : (
                  (comments[activeBerita.id] || []).map((c, i) => (
                    <div key={i} className="p-3 bg-slate-50 rounded-xl text-xs space-y-1 border border-slate-100">
                      <div className="flex items-center justify-between font-bold text-slate-800">
                        <span>{c.nama}</span>
                        <span className="text-[10px] text-slate-400 font-normal">{c.waktu}</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{c.komentar}</p>
                    </div>
                  ))
                )}
              </div>

              {/* Form Tulis Komentar */}
              <form onSubmit={(e) => handleAddComment(e, activeBerita.id)} className="space-y-2 pt-2 bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100">
                <div className="text-xs font-bold text-slate-700">Tulis Tanggapan Warga</div>
                <input
                  type="text"
                  required
                  value={namaKomentar}
                  onChange={e => setNamaKomentar(e.target.value)}
                  placeholder="Nama lengkap Anda..."
                  className="w-full p-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
                <textarea
                  required
                  rows={2}
                  value={isiKomentar}
                  onChange={e => setIsiKomentar(e.target.value)}
                  placeholder="Tuliskan aspirasi atau tanggapan positif Anda..."
                  className="w-full p-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
                <div className="flex items-center justify-between pt-1">
                  {commentSuccess && (
                    <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Tanggapan terkirim!
                    </span>
                  )}
                  <button
                    type="submit"
                    className="ml-auto px-4 py-2 bg-[#064e3b] hover:bg-emerald-900 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer shadow-xs"
                  >
                    <Send className="w-3 h-3" />
                    <span>Kirim Tanggapan</span>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      )}

      {/* COMMENTS MODAL / DRAWER (FROM SIDEBAR "LIHAT KOMENTAR" BUTTON) */}
      {showCommentsModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-7 space-y-5 relative shadow-2xl">
            
            <button
              onClick={() => setShowCommentsModal(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-lg">
              <MessageSquare className="w-5 h-5 text-emerald-800" />
              <span>Daftar Komentar Warga</span>
            </div>

            {/* Notice Box */}
            <div className="bg-emerald-50 border border-emerald-200/70 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-emerald-900">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Fitur komentar hanya dapat dilihat oleh pemilik komentar dan admin. Komentar yang tampil telah melalui verifikasi kesantunan.
              </p>
            </div>

            {/* List of comments */}
            <div className="space-y-3 max-h-72 overflow-y-auto pr-1 divide-y divide-slate-100">
              {Object.values(comments).flat().map((c: { nama: string; komentar: string; waktu: string; approved?: boolean }, idx: number) => (
                <div key={idx} className="pt-3 first:pt-0 space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                    <span>{c.nama}</span>
                    <span className="text-[10px] text-slate-400 font-normal">{c.waktu}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.komentar}</p>
                </div>
              ))}
            </div>

            {/* Comment submission form */}
            <form onSubmit={(e) => handleAddComment(e, 'general')} className="space-y-2.5 pt-3 border-t border-slate-100">
              <div className="text-xs font-bold text-slate-800">Kirim Komentar Baru</div>
              <input
                type="text"
                required
                value={namaKomentar}
                onChange={e => setNamaKomentar(e.target.value)}
                placeholder="Nama Anda..."
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
              />
              <textarea
                required
                rows={2}
                value={isiKomentar}
                onChange={e => setIsiKomentar(e.target.value)}
                placeholder="Tuliskan komentar atau pertanyaan Anda..."
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
              />
              <div className="flex items-center justify-between pt-1">
                {commentSuccess && (
                  <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Komentar terkirim!
                  </span>
                )}
                <button
                  type="submit"
                  className="ml-auto px-4 py-2 bg-[#064e3b] hover:bg-emerald-900 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer shadow-xs"
                >
                  <Send className="w-3 h-3" />
                  <span>Kirim</span>
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};
