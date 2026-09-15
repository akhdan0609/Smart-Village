import React, { useState, useEffect, useMemo } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Eye, 
  Clock, 
  Share2, 
  Check, 
  MessageSquare, 
  Send, 
  Tag, 
  ChevronRight, 
  ChevronLeft,
  Users, 
  Landmark, 
  Hammer, 
  HeartHandshake, 
  MoreHorizontal,
  Building2,
  Bookmark,
  ExternalLink,
  Image as ImageIcon
} from 'lucide-react';
import { PageRoute, BeritaItem } from '../../types';
import { getStoredBerita } from '../../utils/storage';

interface BeritaDetailViewProps {
  beritaId?: string;
  onNavigate: (page: PageRoute, params?: any) => void;
}

export const BeritaDetailView: React.FC<BeritaDetailViewProps> = ({ beritaId, onNavigate }) => {
  const [beritaList, setBeritaList] = useState<BeritaItem[]>([]);
  const [currentBerita, setCurrentBerita] = useState<BeritaItem | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Komentar state with initial default data
  const [comments, setComments] = useState<{ [id: string]: Array<{ nama: string; komentar: string; waktu: string }> }>({
    'berita-stunting': [
      { nama: 'Ibu Ratna (Kader Posyandu RW 04)', komentar: 'Program PMT olahan ikan nila sangat disukai anak-anak balita. Terima kasih Pemdes Warung Menteng!', waktu: '12 Agustus 2025' },
      { nama: 'Bpk. Herman (Ketua RT 02)', komentar: 'Semoga angka stunting di desa kita terus ditekan hingga benar-benar nihil.', waktu: '13 Agustus 2025' }
    ],
    'berita-musdes': [
      { nama: 'Kang Asep Supriadi', komentar: 'Mohon usulan perbaikan drainase di RW 03 dapat diakomodir di RKPDes 2026.', waktu: '9 Agustus 2025' },
      { nama: 'Ibu Eni Kartika', komentar: 'Apresiasi partisipasi perempuan dalam perumusan kebijakan pembangunan desa.', waktu: '10 Agustus 2025' }
    ],
    'berita-jalan': [
      { nama: 'Pak Ujang (Warga Kp. Cijeruk)', komentar: 'Alhamdulillah akhirnya jalan beton masuk kampung, mobilitas panen salak jadi lancar.', waktu: '6 Agustus 2025' }
    ],
    'berita-sanggar': [
      { nama: 'Teh Nuraeni', komentar: 'Bangga sekali melihat adik-adik sanggar seni tampil membawa nama harum Desa Warung Menteng.', waktu: '3 Agustus 2025' }
    ],
    'berita-umkm': [
      { nama: 'Ibu Dewi Keripik Singkong', komentar: 'Pelatihan QRIS dan foto produk kemarin sangat bermanfaat untuk promosi di media sosial.', waktu: '29 Juli 2025' }
    ]
  });

  const [namaKomentar, setNamaKomentar] = useState('');
  const [isiKomentar, setIsiKomentar] = useState('');
  const [commentSuccess, setCommentSuccess] = useState(false);

  useEffect(() => {
    const list = getStoredBerita();
    setBeritaList(list);

    if (beritaId) {
      const found = list.find(b => b.id === beritaId);
      if (found) {
        setCurrentBerita(found);
      } else if (list.length > 0) {
        setCurrentBerita(list[0]);
      }
    } else if (list.length > 0) {
      setCurrentBerita(list[0]);
    }
  }, [beritaId]);

  // Scroll to top when switching article
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentBerita?.id]);

  // Related news (excluding current)
  const relatedNews = useMemo(() => {
    if (!currentBerita) return [];
    return beritaList
      .filter(b => b.id !== currentBerita.id)
      .slice(0, 3);
  }, [beritaList, currentBerita]);

  // Helper for category icon
  const getCategoryIcon = (kat: string) => {
    switch (kat) {
      case 'Pemerintahan': return Landmark;
      case 'Kegiatan Desa': return Users;
      case 'Pembangunan': return Hammer;
      case 'Pemberdayaan Masyarakat': return HeartHandshake;
      default: return MoreHorizontal;
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleShareWhatsApp = () => {
    if (!currentBerita) return;
    const text = encodeURIComponent(`Baca Siaran Pers Resmi Desa Warung Menteng: "${currentBerita.judul}" melalui portal resmi desa.`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!namaKomentar.trim() || !isiKomentar.trim() || !currentBerita) return;

    const idKey = currentBerita.id;
    const existing = comments[idKey] || [];

    setComments({
      ...comments,
      [idKey]: [
        ...existing,
        {
          nama: namaKomentar.trim(),
          komentar: isiKomentar.trim(),
          waktu: 'Baru saja'
        }
      ]
    });

    setNamaKomentar('');
    setIsiKomentar('');
    setCommentSuccess(true);
    setTimeout(() => setCommentSuccess(false), 3500);
  };

  if (!currentBerita) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="text-center space-y-4 max-w-md">
          <p className="text-sm text-slate-500">Memuat warta berita...</p>
          <button
            onClick={() => onNavigate('berita-press-release')}
            className="px-4 py-2 bg-emerald-800 text-white rounded-xl text-xs font-semibold"
          >
            Kembali ke Daftar Press Release
          </button>
        </div>
      </div>
    );
  }

  const CatIcon = getCategoryIcon(currentBerita.kategori);
  const currentComments = comments[currentBerita.id] || [];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 pb-16">
      
      {/* Top Breadcrumbs Bar */}
      <div className="bg-white border-b border-slate-200/80 sticky top-0 z-20 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between text-xs">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-1.5 text-slate-500 overflow-x-auto whitespace-nowrap scrollbar-none py-0.5">
            <button 
              onClick={() => onNavigate('beranda')}
              className="hover:text-emerald-800 transition cursor-pointer font-medium"
            >
              Beranda
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <button 
              onClick={() => onNavigate('berita-press-release')}
              className="hover:text-emerald-800 transition cursor-pointer font-medium"
            >
              Humas
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <button 
              onClick={() => onNavigate('berita-press-release')}
              className="hover:text-emerald-800 transition cursor-pointer font-medium"
            >
              Press Release
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-[320px]">
              {currentBerita.judul}
            </span>
          </nav>

          {/* Quick Back Button */}
          <button
            onClick={() => onNavigate('berita-press-release')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-emerald-800 font-semibold transition cursor-pointer shrink-0 ml-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Semua Press Release</span>
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        
        {/* Mobile Back Button */}
        <div className="sm:hidden mb-4">
          <button
            onClick={() => onNavigate('berita-press-release')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Press Release</span>
          </button>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT / MAIN ARTICLE COLUMN (8 cols) ================= */}
          <main className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
            
            {/* Header / Meta Information */}
            <div className="space-y-3 pb-4 border-b border-slate-100">
              
              {/* Category & Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-800 text-white shadow-xs">
                  <CatIcon className="w-3.5 h-3.5 text-emerald-200" />
                  <span>{currentBerita.kategori}</span>
                </span>

                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                  <Building2 className="w-3 h-3 text-slate-400" />
                  <span>Siaran Pers Resmi Humas</span>
                </span>
              </div>

              {/* Title Headline */}
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug tracking-tight">
                {currentBerita.judul}
              </h1>

              {/* Meta Stats Bar */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 pt-1">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                  <span className="font-medium text-slate-700">{currentBerita.tanggal}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Penulis: <strong className="text-slate-800">{currentBerita.penulis}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{currentBerita.dibaca} Kali Dilihat</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-700" />
                  <span>3 Menit Baca</span>
                </div>
              </div>

            </div>

            {/* Featured Image */}
            <div className="space-y-2">
              <div className="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm max-h-[440px]">
                <img
                  src={currentBerita.fotoUrl}
                  alt={currentBerita.judul}
                  className="w-full h-full object-cover select-none"
                />
              </div>
              <p className="text-[11px] text-slate-500 italic text-center">
                Dokumentasi: {currentBerita.judul} — Pemerintah Desa Warung Menteng, Kecamatan Cijeruk
              </p>
            </div>

            {/* Summary Lead Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-emerald-950 text-xs sm:text-sm leading-relaxed font-medium">
              <p className="font-semibold text-emerald-900 mb-1 flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-emerald-700" />
                <span>Ringkasan Warta:</span>
              </p>
              {currentBerita.ringkasan}
            </div>

            {/* Full Article Content */}
            <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
              {currentBerita.isiLengkap.split('\n\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-justify sm:text-left">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags & Keywords */}
            {currentBerita.tags && currentBerita.tags.length > 0 && (
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Topik & Tag Terkait:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentBerita.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 text-slate-600 px-3 py-1 rounded-full font-medium transition cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Social Share Bar */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-slate-800 block">Bagikan Siaran Pers Ini</span>
                <span className="text-[11px] text-slate-500">Bantu sebarkan informasi resmi bagi seluruh warga</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShareWhatsApp}
                  className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 transition shadow-xs cursor-pointer"
                >
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={handleShare}
                  className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold flex items-center gap-1.5 transition shadow-xs cursor-pointer"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Link Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Salin Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Interactive Comments Section */}
            <section className="pt-6 border-t border-slate-200 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-emerald-800" />
                  <h3 className="text-base font-bold text-slate-900">
                    Komentar & Aspirasi Warga ({currentComments.length})
                  </h3>
                </div>
                <span className="text-[11px] text-slate-500">Moderasi Positif</span>
              </div>

              {/* Comments List */}
              <div className="space-y-3">
                {currentComments.length === 0 ? (
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center text-xs text-slate-500">
                    Belum ada komentar untuk warta ini. Jadilah yang pertama memberikan tanggapan warga.
                  </div>
                ) : (
                  currentComments.map((comment, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-emerald-700 text-white text-[10px] font-bold flex items-center justify-center">
                            {comment.nama.charAt(0).toUpperCase()}
                          </div>
                          <span className="text-xs font-bold text-slate-800">{comment.nama}</span>
                        </div>
                        <span className="text-[10px] text-slate-400">{comment.waktu}</span>
                      </div>
                      <p className="text-xs text-slate-600 pl-8 leading-relaxed">
                        {comment.komentar}
                      </p>
                    </div>
                  ))
                )}
              </div>

              {/* Form Tulis Komentar */}
              <form onSubmit={handleAddComment} className="p-4 sm:p-5 rounded-2xl bg-[#f8fafc] border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold text-slate-800">
                  Tulis Tanggapan atau Aspirasi Anda
                </h4>
                <div className="space-y-2">
                  <input
                    type="text"
                    required
                    value={namaKomentar}
                    onChange={(e) => setNamaKomentar(e.target.value)}
                    placeholder="Nama lengkap Anda (contoh: Pak Bambang RW 03)..."
                    className="w-full p-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                  <textarea
                    required
                    rows={3}
                    value={isiKomentar}
                    onChange={(e) => setIsiKomentar(e.target.value)}
                    placeholder="Tuliskan aspirasi, saran, atau apresiasi Anda terhadap berita ini..."
                    className="w-full p-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
                <div className="flex items-center justify-between pt-1">
                  {commentSuccess && (
                    <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Tanggapan berhasil ditambahkan!
                    </span>
                  )}
                  <button
                    type="submit"
                    className="ml-auto px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Komentar</span>
                  </button>
                </div>
              </form>
            </section>

          </main>

          {/* ================= RIGHT / SIDEBAR COLUMN (4 cols) ================= */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Box 1: Redaksi Humas Desa */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5 text-[#0e3e2f] pb-2 border-b border-slate-100">
                <Building2 className="w-5 h-5 text-emerald-700" />
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900">Humas & Protokoler</h3>
                  <p className="text-[10px] text-slate-500">Pemerintah Desa Warung Menteng</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kanal publikasi resmi siaran pers, dokumentasi kegiatan, transparansi kebijakan, dan agenda pembangunan desa bagi masyarakat luas.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => onNavigate('berita-press-release')}
                  className="w-full py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Daftar Press Release</span>
                </button>
                <button
                  onClick={() => onNavigate('berita-galeri')}
                  className="w-full py-2 px-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Lihat Galeri Foto Humas</span>
                </button>
              </div>
            </div>

            {/* Box 2: Berita / Siaran Pers Lainnya */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-1.5">
                  <span>Siaran Pers Lainnya</span>
                </h3>
                <span className="text-[10px] text-slate-400">Terbaru</span>
              </div>

              <div className="space-y-3">
                {relatedNews.map((news) => (
                  <div
                    key={news.id}
                    onClick={() => {
                      setCurrentBerita(news);
                    }}
                    className="flex gap-3 p-2 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition cursor-pointer group"
                  >
                    <img
                      src={news.fotoUrl}
                      alt={news.judul}
                      className="w-16 h-16 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div className="min-w-0 flex flex-col justify-between py-0.5">
                      <span className="text-[10px] font-semibold text-emerald-800 line-clamp-1">
                        {news.kategori}
                      </span>
                      <h4 className="text-xs font-bold text-slate-800 group-hover:text-emerald-800 transition line-clamp-2 leading-snug">
                        {news.judul}
                      </h4>
                      <span className="text-[10px] text-slate-400">
                        {news.tanggal}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 3: Bantuan & Kontak Redaksi */}
            <div className="bg-gradient-to-br from-[#0e3e2f] to-[#092920] rounded-3xl p-5 text-white shadow-sm space-y-3">
              <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-300">
                Kontak Redaksi & Pengaduan
              </span>
              <h4 className="text-sm font-bold text-white leading-snug">
                Punya Liputan atau Informasi Warga?
              </h4>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                Hubungi Sekretariat Desa Warung Menteng untuk konfirmasi siaran pers atau usulan agenda liputan warga.
              </p>
              <button
                onClick={() => onNavigate('aspirasi-pengaduan')}
                className="w-full py-2 px-3 rounded-xl bg-white hover:bg-emerald-50 text-[#0e3e2f] text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>Kirim Aspirasi & Info</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </aside>

        </div>

      </div>

    </div>
  );
};
