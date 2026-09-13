import React, { useState } from 'react';
import { 
  Calendar,
  Coins,
  Wallet,
  Banknote,
  FileCheck2,
  FileText,
  Download,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  X,
  TrendingUp,
  ClipboardList,
  Building,
  ShieldCheck,
  Award,
  Layers,
  Sparkles
} from 'lucide-react';
import { PageRoute } from '../../types';

interface AnggaranDesaViewProps {
  onNavigate?: (page: PageRoute) => void;
}

interface DokumenItem {
  id: string;
  nama: string;
  tipe: string;
  ukuran: string;
  tahun: string;
  deskripsi: string;
}

const DOKUMEN_LIST: DokumenItem[] = [
  {
    id: 'dok-1',
    nama: 'Peraturan Desa tentang APBDes 2025',
    tipe: 'PDF',
    ukuran: '11,2 MB',
    tahun: '2025',
    deskripsi: 'Peraturan Desa Warung Menteng No. 04 Tahun 2024 tentang Anggaran Pendapatan dan Belanja Desa Tahun Anggaran 2025.'
  },
  {
    id: 'dok-2',
    nama: 'Rencana APBDes 2025',
    tipe: 'PDF',
    ukuran: '980 KB',
    tahun: '2025',
    deskripsi: 'Rencana kerja anggaran pendapatan dan belanja desa beserta rincian program kerja tahun 2025.'
  },
  {
    id: 'dok-3',
    nama: 'Laporan Realisasi APBDes 2024',
    tipe: 'PDF',
    ukuran: '1,1 MB',
    tahun: '2024',
    deskripsi: 'Laporan pertanggungjawaban realisasi penyerapan anggaran pendapatan dan belanja desa tahun 2024.'
  },
  {
    id: 'dok-4',
    nama: 'Rencana Kerja Pemerintah Desa (RKPDes) 2025',
    tipe: 'PDF',
    ukuran: '850 KB',
    tahun: '2025',
    deskripsi: 'Dokumen perencanaan tahunan desa yang memuat rancangan kerangka ekonomi desa dan prioritas pembangunan.'
  }
];

export const AnggaranDesaView: React.FC<AnggaranDesaViewProps> = ({ onNavigate }) => {
  const [activeModal, setActiveModal] = useState<
    'apbdes' | 'pendapatan' | 'belanja' | 'rencana' | 'realisasi' | null
  >(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const handleDownload = (doc: DokumenItem) => {
    // Show download feedback toast
    setDownloadToast(`Mengunduh: ${doc.nama} (${doc.ukuran})...`);
    
    // Create synthetic text blob download
    const content = `PEMERINTAH KABUPATEN BOGOR
KECAMATAN CIJERUK - DESA WARUNG MENTENG
TRANSPARANSI KEUANGAN DESA

DOKUMEN RESMI: ${doc.nama}
Tahun Anggaran: ${doc.tahun}
Format: ${doc.tipe}
Ukuran File: ${doc.ukuran}

Deskripsi:
${doc.deskripsi}

Ringkasan APBDes TA 2025:
- Total Pendapatan : Rp 2.450.000.000 (100%)
- Total Belanja    : Rp 2.450.000.000 (100%)
- Status Anggaran  : Berimbang & Akuntabel

Dokumen ini diunduh secara resmi melalui Portal Transparansi Desa Warung Menteng.`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${doc.nama.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setDownloadToast(`Berhasil mengunduh ${doc.nama}!`);
      setTimeout(() => setDownloadToast(null), 3500);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#f8faf9] text-slate-800 relative overflow-hidden pb-16">
      
      {/* Toast Notifikasi Unduh */}
      {downloadToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0e4b37] text-white px-5 py-3 rounded-2xl shadow-xl border border-emerald-500/40 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{downloadToast}</span>
        </div>
      )}

      {/* 1. HERO HEADER WITH MOUNTAIN PANORAMA */}
      <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden bg-slate-900">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85"
          alt="Panorama Alam Desa Warung Menteng di Kaki Gunung Salak"
          className="w-full h-full object-cover object-center brightness-95 transform scale-105"
        />
        {/* Subtle Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/85 via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8faf9] via-transparent to-transparent opacity-90" />

        {/* Hero Decorative Leaf Graphic on right corner */}
        <div className="absolute -bottom-2 -right-4 pointer-events-none opacity-40 md:opacity-60">
          <svg width="220" height="140" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M220 140C160 140 120 100 110 50C100 0 160 10 200 40C220 55 220 110 220 140Z" fill="#10b981" fillOpacity="0.25" />
            <path d="M180 140C140 130 130 90 140 60C160 30 190 60 200 80C210 100 200 130 180 140Z" fill="#059669" fillOpacity="0.3" />
            <path d="M140 140C100 120 90 80 120 40C130 30 150 50 140 80C135 95 130 120 140 140Z" fill="#34d399" fillOpacity="0.35" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center space-y-2.5 pb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-sm font-['Playfair_Display',serif]">
            Anggaran Desa
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-100 font-medium">
            <button
              onClick={() => onNavigate?.('beranda')}
              className="hover:text-white transition flex items-center gap-1 cursor-pointer"
            >
              Beranda
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-300/80" />
            <span className="text-white font-semibold">Anggaran Desa</span>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-slate-100/90 max-w-2xl leading-relaxed pt-1">
            Transparansi pengelolaan keuangan desa untuk pembangunan yang lebih baik
          </p>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-20 space-y-10 sm:space-y-12">
        
        {/* 2. TOP ROW - 3 EQUAL SPACIOUS CARDS (APBDes 2025, Total Pendapatan, Total Belanja) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: APBDes Tahun 2025 (Soft sage-green tinted background) */}
          <div className="bg-[#eaf4ee] border border-[#cbe4d2] rounded-3xl p-7 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-xs">
            {/* Decorative leaf watermark in bottom right */}
            <div className="absolute -bottom-4 -right-4 pointer-events-none opacity-25 text-emerald-800">
              <svg width="130" height="130" viewBox="0 0 100 100" fill="currentColor">
                <path d="M10 90 Q 50 10 90 10 Q 90 50 10 90 Z" />
                <path d="M30 90 Q 70 30 95 30 Q 80 70 30 90 Z" opacity="0.6" />
              </svg>
            </div>

            <div className="space-y-3.5 relative z-10">
              {/* Icon */}
              <div className="w-11 h-11 rounded-2xl bg-white/95 border border-emerald-300/70 text-[#0e4b37] flex items-center justify-center shadow-xs">
                <Calendar className="w-5 h-5 text-[#0e4b37]" />
              </div>

              <h3 className="text-xl font-black text-slate-900 tracking-tight">
                APBDes Tahun 2025
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Anggaran Pendapatan dan Belanja Desa (APBDes) merupakan rencana keuangan tahunan desa yang ditetapkan oleh Kepala Desa bersama Badan Permusyawaratan Desa (BPD) melalui Peraturan Desa.
              </p>
            </div>

            <div className="pt-6 relative z-10">
              <button
                onClick={() => setActiveModal('apbdes')}
                className="bg-[#0e4b37] hover:bg-[#093526] text-white text-xs font-bold py-2.5 px-5 rounded-xl inline-flex items-center gap-2 transition duration-200 shadow-sm cursor-pointer"
              >
                <span>Lihat Detail APBDes 2025</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Total Pendapatan (White Card) */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-3.5">
              {/* Icon */}
              <div className="w-11 h-11 rounded-2xl bg-[#eaf4ee] text-[#0e4b37] flex items-center justify-center">
                <Coins className="w-5 h-5 text-[#0e4b37]" />
              </div>

              <div>
                <span className="text-xs sm:text-sm font-semibold text-slate-600">
                  Total Pendapatan
                </span>
                <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1.5">
                  Rp 2.450.000.000
                </h4>
                <p className="text-xs text-slate-400 font-medium mt-1">
                  100% dari anggaran
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => setActiveModal('pendapatan')}
                className="bg-[#eaf4ee] hover:bg-[#d8ecdf] text-[#0e4b37] text-xs font-bold px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition duration-150 cursor-pointer"
              >
                <span>Baca Selengkapnya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Total Belanja (White Card) */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-3.5">
              {/* Icon */}
              <div className="w-11 h-11 rounded-2xl bg-[#eaf4ee] text-[#0e4b37] flex items-center justify-center">
                <Wallet className="w-5 h-5 text-[#0e4b37]" />
              </div>

              <div>
                <span className="text-xs sm:text-sm font-semibold text-slate-600">
                  Total Belanja
                </span>
                <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1.5">
                  Rp 2.450.000.000
                </h4>
                <p className="text-xs text-slate-400 font-medium mt-1">
                  100% dari anggaran
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => setActiveModal('belanja')}
                className="bg-[#eaf4ee] hover:bg-[#d8ecdf] text-[#0e4b37] text-xs font-bold px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition duration-150 cursor-pointer"
              >
                <span>Baca Selengkapnya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* 3. MIDDLE ROW - 2 COLUMNS (Rincian Anggaran Desa 2025 & Dokumen Anggaran) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Rincian Anggaran Desa 2025 */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-8 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#eaf4ee] text-[#0e4b37] flex items-center justify-center">
                  <Banknote className="w-5 h-5 text-[#0e4b37]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Rincian Anggaran Desa 2025
                </h3>
              </div>

              {/* Body: Donut Chart + Breakdown List */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-2">
                
                {/* SVG Donut Chart */}
                <div className="shrink-0 flex flex-col items-center justify-center relative">
                  <div className="relative w-48 h-48 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                      {/* Background Ring */}
                      <circle
                        cx="80"
                        cy="80"
                        r="60"
                        stroke="#e2e8f0"
                        strokeWidth="24"
                        fill="none"
                      />

                      {/* Segment 1: Penyelenggaraan Pemerintahan (34.8%) */}
                      {/* Circumference = 2 * PI * 60 = 376.99. 34.8% = 131.19 */}
                      <circle
                        cx="80"
                        cy="80"
                        r="60"
                        stroke="#0e4b37"
                        strokeWidth="24"
                        fill="none"
                        strokeDasharray="131.19 376.99"
                        strokeDashoffset="0"
                        className="transition-all duration-500 hover:opacity-90"
                      />

                      {/* Segment 2: Pelaksanaan Pembangunan (41.6%) -> 156.83 */}
                      <circle
                        cx="80"
                        cy="80"
                        r="60"
                        stroke="#16a34a"
                        strokeWidth="24"
                        fill="none"
                        strokeDasharray="156.83 376.99"
                        strokeDashoffset="-131.19"
                        className="transition-all duration-500 hover:opacity-90"
                      />

                      {/* Segment 3: Pembinaan Kemasyarakatan (15.0%) -> 56.55 */}
                      <circle
                        cx="80"
                        cy="80"
                        r="60"
                        stroke="#34d399"
                        strokeWidth="24"
                        fill="none"
                        strokeDasharray="56.55 376.99"
                        strokeDashoffset="-288.02"
                        className="transition-all duration-500 hover:opacity-90"
                      />

                      {/* Segment 4: Pemberdayaan Masyarakat (8.6%) -> 32.42 */}
                      <circle
                        cx="80"
                        cy="80"
                        r="60"
                        stroke="#86efac"
                        strokeWidth="24"
                        fill="none"
                        strokeDasharray="32.42 376.99"
                        strokeDashoffset="-344.57"
                        className="transition-all duration-500 hover:opacity-90"
                      />
                    </svg>

                    {/* Donut Chart Inner Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-2">
                      <span className="text-[11px] font-semibold text-slate-500 leading-tight">
                        Total Belanja
                      </span>
                      <span className="text-xs sm:text-sm font-black text-slate-900 leading-tight mt-0.5">
                        Rp 2.450.000.000
                      </span>
                    </div>
                  </div>
                </div>

                {/* Breakdown List */}
                <div className="flex-1 w-full space-y-3.5 text-xs sm:text-sm">
                  {/* Row 1 */}
                  <div className="flex items-center justify-between gap-3 py-1 border-b border-slate-50">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#0e4b37] shrink-0" />
                      <span className="text-slate-700 font-medium">
                        Penyelenggaraan Pemerintahan Desa
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 shrink-0 text-right">
                      <span className="font-bold text-slate-800">Rp 852.000.000</span>
                      <span className="text-slate-500 font-semibold w-12 text-right">34,8%</span>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex items-center justify-between gap-3 py-1 border-b border-slate-50">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#16a34a] shrink-0" />
                      <span className="text-slate-700 font-medium">
                        Pelaksanaan Pembangunan Desa
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 shrink-0 text-right">
                      <span className="font-bold text-slate-800">Rp 1.020.000.000</span>
                      <span className="text-slate-500 font-semibold w-12 text-right">41,6%</span>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="flex items-center justify-between gap-3 py-1 border-b border-slate-50">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#34d399] shrink-0" />
                      <span className="text-slate-700 font-medium">
                        Pembinaan Kemasyarakatan
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 shrink-0 text-right">
                      <span className="font-bold text-slate-800">Rp 367.000.000</span>
                      <span className="text-slate-500 font-semibold w-12 text-right">15,0%</span>
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div className="flex items-center justify-between gap-3 py-1">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#86efac] shrink-0" />
                      <span className="text-slate-700 font-medium">
                        Pemberdayaan Masyarakat
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 shrink-0 text-right">
                      <span className="font-bold text-slate-800">Rp 211.000.000</span>
                      <span className="text-slate-500 font-semibold w-12 text-right">8,6%</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Dasar Hukum: Peraturan Desa No. 04 Tahun 2024</span>
              <button
                onClick={() => setActiveModal('belanja')}
                className="text-[#0e4b37] hover:underline font-bold cursor-pointer"
              >
                Lihat Rincian Kegiatan →
              </button>
            </div>
          </div>

          {/* Right Column: Dokumen Anggaran */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-8 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              {/* Header */}
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#eaf4ee] text-[#0e4b37] flex items-center justify-center">
                    <FileCheck2 className="w-5 h-5 text-[#0e4b37]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    Dokumen Anggaran
                  </h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed pt-1">
                  Berikut adalah dokumen perencanaan dan realisasi anggaran desa tahun 2025 yang dapat diunduh.
                </p>
              </div>

              {/* Document List */}
              <div className="space-y-3 pt-3">
                {DOKUMEN_LIST.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl hover:bg-slate-50/90 border border-slate-100 transition duration-150 gap-2"
                  >
                    <div className="flex items-center gap-3 truncate">
                      {/* Green PDF Icon */}
                      <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center shrink-0">
                        <FileText className="w-4 h-4 text-[#0e4b37]" />
                      </div>

                      <div className="truncate">
                        <h5 className="text-xs sm:text-[13px] font-semibold text-slate-800 truncate">
                          {doc.nama}
                        </h5>
                        <p className="text-[11px] text-slate-400 font-medium">
                          {doc.tipe} · {doc.ukuran} · {doc.tahun}
                        </p>
                      </div>
                    </div>

                    {/* Download Button */}
                    <button
                      onClick={() => handleDownload(doc)}
                      className="px-3 py-1.5 rounded-lg border border-emerald-600/30 text-[#0e4b37] hover:bg-[#eaf4ee] text-xs font-bold inline-flex items-center gap-1 transition shrink-0 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Unduh</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 text-center text-[11px] text-slate-400">
              Dokumen resmi diterbitkan oleh Sekretariat Desa Warung Menteng
            </div>
          </div>

        </div>

        {/* 4. BOTTOM ROW - 2 CARDS (Rencana Belanja Desa & Realisasi Belanja Desa) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Rencana Belanja Desa */}
          <div className="bg-[#edf6f0] border border-[#d6ebd9] rounded-3xl p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
            {/* Custom SVG Graphic: Clipboard with Checklist and Leaves */}
            <div className="absolute right-3 sm:right-6 bottom-0 w-32 sm:w-40 pointer-events-none opacity-80 select-none">
              <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Decorative leaves */}
                <path d="M145 130C155 110 150 85 130 80C125 100 135 120 145 130Z" fill="#10b981" fillOpacity="0.4" />
                <path d="M125 145C115 125 95 120 85 135C100 145 115 145 125 145Z" fill="#059669" fillOpacity="0.45" />
                
                {/* Clipboard body */}
                <rect x="35" y="30" width="80" height="110" rx="10" fill="#ffffff" stroke="#cbe4d2" strokeWidth="3" />
                
                {/* Clip at top */}
                <rect x="58" y="20" width="34" height="16" rx="4" fill="#0e4b37" />
                <circle cx="75" cy="28" r="3" fill="#ffffff" />
                
                {/* Checklist items */}
                {/* Item 1 */}
                <path d="M48 55L52 59L60 51" stroke="#0e4b37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="68" y1="55" x2="98" y2="55" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
                
                {/* Item 2 */}
                <path d="M48 75L52 79L60 71" stroke="#0e4b37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="68" y1="75" x2="98" y2="75" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
                
                {/* Item 3 */}
                <path d="M48 95L52 99L60 91" stroke="#0e4b37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="68" y1="95" x2="98" y2="95" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
                
                {/* Item 4 */}
                <path d="M48 115L52 119L60 111" stroke="#0e4b37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="68" y1="115" x2="88" y2="115" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            <div className="space-y-2.5 relative z-10 max-w-xs sm:max-w-sm">
              <div className="w-11 h-11 rounded-2xl bg-white/90 border border-emerald-300/80 text-[#0e4b37] flex items-center justify-center shadow-2xs">
                <ClipboardList className="w-5 h-5 text-[#0e4b37]" />
              </div>

              <h4 className="text-xl font-bold text-slate-900 tracking-tight pt-1">
                Rencana Belanja Desa
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rincian rencana penggunaan anggaran desa yang berdasarkan prioritas pembangunan.
              </p>
            </div>

            <div className="pt-6 relative z-10">
              <button
                onClick={() => setActiveModal('rencana')}
                className="bg-[#0e4b37] hover:bg-[#093526] text-white text-xs font-bold py-2.5 px-5 rounded-xl inline-flex items-center gap-1.5 transition duration-200 shadow-sm cursor-pointer"
              >
                <span>Lihat Detail</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Realisasi Belanja Desa */}
          <div className="bg-[#edf6f0] border border-[#d6ebd9] rounded-3xl p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between shadow-xs min-h-[220px]">
            {/* Custom SVG Graphic: Ascending Bar Chart with Upward Trend Arrow and Leaves */}
            <div className="absolute right-3 sm:right-6 bottom-0 w-36 sm:w-44 pointer-events-none opacity-80 select-none">
              <svg viewBox="0 0 180 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Decorative leaves */}
                <path d="M165 125C175 105 165 80 145 75C140 95 155 115 165 125Z" fill="#10b981" fillOpacity="0.4" />
                <path d="M140 140C125 125 110 120 100 135C115 145 130 145 140 140Z" fill="#059669" fillOpacity="0.4" />

                {/* Base Card Frame */}
                <rect x="25" y="25" width="120" height="105" rx="10" fill="#ffffff" stroke="#cbe4d2" strokeWidth="3" />
                
                {/* Bar 1 */}
                <rect x="42" y="85" width="14" height="35" rx="3" fill="#cbd5e1" />
                {/* Bar 2 */}
                <rect x="64" y="65" width="14" height="55" rx="3" fill="#86efac" />
                {/* Bar 3 */}
                <rect x="86" y="48" width="14" height="72" rx="3" fill="#34d399" />
                {/* Bar 4 */}
                <rect x="108" y="32" width="14" height="88" rx="3" fill="#0e4b37" />
                
                {/* Trend Up Arrow */}
                <path
                  d="M38 90 L60 70 L85 55 L118 30"
                  stroke="#15803d"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M108 28 L122 28 L122 42"
                  stroke="#15803d"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="space-y-2.5 relative z-10 max-w-xs sm:max-w-sm">
              <div className="w-11 h-11 rounded-2xl bg-white/90 border border-emerald-300/80 text-[#0e4b37] flex items-center justify-center shadow-2xs">
                <TrendingUp className="w-5 h-5 text-[#0e4b37]" />
              </div>

              <h4 className="text-xl font-bold text-slate-900 tracking-tight pt-1">
                Realisasi Belanja Desa
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Perkembangan realisasi anggaran desa dari tahun ke tahun.
              </p>
            </div>

            <div className="pt-6 relative z-10">
              <button
                onClick={() => setActiveModal('realisasi')}
                className="bg-[#0e4b37] hover:bg-[#093526] text-white text-xs font-bold py-2.5 px-5 rounded-xl inline-flex items-center gap-1.5 transition duration-200 shadow-sm cursor-pointer"
              >
                <span>Lihat Detail</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* 5. CORNER BOTANICAL LEAF ACCENTS (Bottom Left & Bottom Right) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex items-center justify-between opacity-70 pointer-events-none">
        {/* Bottom Left Foliage */}
        <svg width="120" height="70" viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 70C20 40 50 30 80 50C90 55 100 65 100 70H0Z" fill="#10b981" fillOpacity="0.25" />
          <path d="M10 70C25 45 45 35 65 55C75 60 80 65 80 70H10Z" fill="#059669" fillOpacity="0.3" />
          <circle cx="85" cy="45" r="4" fill="#0e4b37" fillOpacity="0.3" />
        </svg>

        {/* Bottom Right Foliage */}
        <svg width="120" height="70" viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M120 70C100 40 70 30 40 50C30 55 20 65 20 70H120Z" fill="#10b981" fillOpacity="0.25" />
          <path d="M110 70C95 45 75 35 55 55C45 60 40 65 40 70H110Z" fill="#059669" fillOpacity="0.3" />
          <circle cx="35" cy="45" r="4" fill="#0e4b37" fillOpacity="0.3" />
        </svg>
      </div>

      {/* ===================== MODALS ===================== */}

      {/* MODAL 1: Detail APBDes 2025 */}
      {activeModal === 'apbdes' && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative my-8 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#eaf4ee] text-[#0e4b37] flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#0e4b37]" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Detail APBDes Tahun Anggaran 2025
                </h3>
                <p className="text-xs text-slate-500">
                  Peraturan Desa Warung Menteng No. 04 Tahun 2024
                </p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                Anggaran Pendapatan dan Belanja Desa (APBDes) Tahun Anggaran 2025 disusun secara transparan, partisipatif, dan akuntabel melalui rangkaian Musyawarah Dusun (Musdus) dan Musyawarah Desa (Musdes) bersama Badan Permusyawaratan Desa (BPD) dan tokoh masyarakat.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 bg-[#eaf4ee] rounded-xl border border-[#cbe4d2]">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">Target Pendapatan</span>
                  <div className="text-base sm:text-lg font-black text-[#0e4b37] mt-0.5">
                    Rp 2.450.000.000
                  </div>
                  <span className="text-[11px] text-emerald-700 font-medium">Dana Desa, ADD, PADes & Bantuan</span>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">Rencana Belanja</span>
                  <div className="text-base sm:text-lg font-black text-slate-900 mt-0.5">
                    Rp 2.450.000.000
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Alokasi 4 Bidang Pembangunan</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <h5 className="font-bold text-slate-900 text-xs sm:text-sm">
                  Fokus Prioritas Pembangunan Tahun 2025:
                </h5>
                <ul className="space-y-1.5 list-disc list-inside text-slate-600 text-xs">
                  <li>Pembangunan dan pemeliharaan jalan lingkungan, drainase, dan TPT (RW 01 s/d RW 07)</li>
                  <li>Pengentasan stunting melalui intervensi gizi terpadu Posyandu dan PMT balita</li>
                  <li>Penguatan modal dan digitalisasi BUMDes Menteng Berkah serta pelatihan 45 UMKM lokal</li>
                  <li>Ketahanan pangan hewani dan nabati (budidaya ikan nila kolam deras & hidroponik)</li>
                  <li>Penyaluran Bantuan Langsung Tunai Dana Desa (BLT-DD) bagi keluarga pra-sejahtera</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => handleDownload(DOKUMEN_LIST[0])}
                className="px-4 py-2 border border-emerald-600/30 text-[#0e4b37] hover:bg-[#eaf4ee] rounded-xl text-xs font-bold inline-flex items-center gap-1.5 transition cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh Perdes APBDes 2025</span>
              </button>
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 bg-[#0e4b37] text-white text-xs font-bold rounded-xl hover:bg-[#093526] transition cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Total Pendapatan Detail */}
      {activeModal === 'pendapatan' && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative my-8 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#eaf4ee] text-[#0e4b37] flex items-center justify-center">
                <Coins className="w-5 h-5 text-[#0e4b37]" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Rincian Sumber Pendapatan Desa TA 2025
                </h3>
                <p className="text-xs text-slate-500">
                  Total Pendapatan: Rp 2.450.000.000 (100%)
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                      <th className="p-3 rounded-l-xl font-bold">Sumber Pendapatan</th>
                      <th className="p-3 font-bold text-right">Alokasi (Rp)</th>
                      <th className="p-3 rounded-r-xl font-bold text-right">Porsi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-medium text-slate-800">
                        Dana Desa (DD - APBN)
                      </td>
                      <td className="p-3 text-right font-mono font-bold text-[#0e4b37]">
                        Rp 1.180.000.000
                      </td>
                      <td className="p-3 text-right text-slate-600 font-semibold">48,2%</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-medium text-slate-800">
                        Alokasi Dana Desa (ADD - APBD Kab. Bogor)
                      </td>
                      <td className="p-3 text-right font-mono font-bold text-[#0e4b37]">
                        Rp 685.000.000
                      </td>
                      <td className="p-3 text-right text-slate-600 font-semibold">28,0%</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-medium text-slate-800">
                        Bantuan Keuangan Provinsi Jabar & Samisade
                      </td>
                      <td className="p-3 text-right font-mono font-bold text-[#0e4b37]">
                        Rp 250.000.000
                      </td>
                      <td className="p-3 text-right text-slate-600 font-semibold">10,2%</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-medium text-slate-800">
                        Bagi Hasil Pajak & Retribusi (BHPR)
                      </td>
                      <td className="p-3 text-right font-mono font-bold text-[#0e4b37]">
                        Rp 190.000.000
                      </td>
                      <td className="p-3 text-right text-slate-600 font-semibold">7,8%</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-medium text-slate-800">
                        Pendapatan Asli Desa (PADes - BUMDes & Sewa)
                      </td>
                      <td className="p-3 text-right font-mono font-bold text-[#0e4b37]">
                        Rp 145.000.000
                      </td>
                      <td className="p-3 text-right text-slate-600 font-semibold">5,8%</td>
                    </tr>
                    <tr className="bg-[#eaf4ee]/70 font-black text-slate-900">
                      <td className="p-3 rounded-l-xl">Total Pendapatan</td>
                      <td className="p-3 text-right font-mono text-[#0e4b37]">Rp 2.450.000.000</td>
                      <td className="p-3 rounded-r-xl text-right">100,0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 bg-[#0e4b37] text-white text-xs font-bold rounded-xl hover:bg-[#093526] transition cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: Total Belanja Detail */}
      {activeModal === 'belanja' && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative my-8 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#eaf4ee] text-[#0e4b37] flex items-center justify-center">
                <Wallet className="w-5 h-5 text-[#0e4b37]" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Rincian Alokasi Belanja Desa 4 Bidang TA 2025
                </h3>
                <p className="text-xs text-slate-500">
                  Total Belanja: Rp 2.450.000.000 (100%)
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                      <th className="p-3 rounded-l-xl font-bold">Bidang Belanja</th>
                      <th className="p-3 font-bold text-right">Alokasi (Rp)</th>
                      <th className="p-3 rounded-r-xl font-bold text-right">Persentase</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3">
                        <div className="font-medium text-slate-900">Pelaksanaan Pembangunan Desa</div>
                        <div className="text-[11px] text-slate-500">Jalan lingkungan, drainase, renovasi posyandu, irigasi</div>
                      </td>
                      <td className="p-3 text-right font-mono font-bold text-slate-900">Rp 1.020.000.000</td>
                      <td className="p-3 text-right font-semibold text-emerald-700">41,6%</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3">
                        <div className="font-medium text-slate-900">Penyelenggaraan Pemerintahan Desa</div>
                        <div className="text-[11px] text-slate-500">Siltap aparatur, operasional BPD, RT/RW, kantor desa</div>
                      </td>
                      <td className="p-3 text-right font-mono font-bold text-slate-900">Rp 852.000.000</td>
                      <td className="p-3 text-right font-semibold text-emerald-700">34,8%</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3">
                        <div className="font-medium text-slate-900">Pembinaan Kemasyarakatan</div>
                        <div className="text-[11px] text-slate-500">Kegiatan kepemudaan, PKK, keagamaan, seni budaya Sunda</div>
                      </td>
                      <td className="p-3 text-right font-mono font-bold text-slate-900">Rp 367.000.000</td>
                      <td className="p-3 text-right font-semibold text-emerald-700">15,0%</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3">
                        <div className="font-medium text-slate-900">Pemberdayaan Masyarakat</div>
                        <div className="text-[11px] text-slate-500">Pelatihan UMKM, bibit perikanan & sayur, modal BUMDes</div>
                      </td>
                      <td className="p-3 text-right font-mono font-bold text-slate-900">Rp 211.000.000</td>
                      <td className="p-3 text-right font-semibold text-emerald-700">8,6%</td>
                    </tr>
                    <tr className="bg-[#eaf4ee]/70 font-black text-slate-900">
                      <td className="p-3 rounded-l-xl">Total Belanja</td>
                      <td className="p-3 text-right font-mono text-[#0e4b37]">Rp 2.450.000.000</td>
                      <td className="p-3 rounded-r-xl text-right">100,0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 bg-[#0e4b37] text-white text-xs font-bold rounded-xl hover:bg-[#093526] transition cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 4: Rencana Belanja Desa Detail */}
      {activeModal === 'rencana' && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative my-8 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#eaf4ee] text-[#0e4b37] flex items-center justify-center">
                <ClipboardList className="w-5 h-5 text-[#0e4b37]" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Rencana Belanja Desa Berdasarkan Prioritas 2025
                </h3>
                <p className="text-xs text-slate-500">
                  Rencana Kerja Pemerintah Desa (RKPDes) 2025
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <p>
                Daftar program fisik dan non-fisik yang dijadwalkan pelaksanaannya pada Tahun Anggaran 2025:
              </p>

              <div className="space-y-2.5">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Betonisasi & Pengaspalan Jalan Lingkungan Dusun II & III</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Volume: 1.200 meter | Anggaran: Rp 380.000.000 | Sumber: Dana Desa</p>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Pembangunan Tembok Penahan Tanah (TPT) & Saluran Irigasi Cikahuripan</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Volume: 350 meter | Anggaran: Rp 215.000.000 | Sumber: Bantuan Samisade</p>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Pemberian Makanan Tambahan (PMT) & Alat Ukur Antropometri Posyandu</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Sasaran: 7 Posyandu RW | Anggaran: Rp 140.000.000 | Sumber: Dana Desa</p>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Bantuan Sarana Budidaya Perikanan Air Deras & Pelatihan Packaging UMKM</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Sasaran: 4 Kelompok Tani/UMKM | Anggaran: Rp 120.000.000 | Sumber: Dana Desa</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 bg-[#0e4b37] text-white text-xs font-bold rounded-xl hover:bg-[#093526] transition cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 5: Realisasi Belanja Desa Detail */}
      {activeModal === 'realisasi' && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative my-8 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#eaf4ee] text-[#0e4b37] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#0e4b37]" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Perkembangan Realisasi Belanja Dari Tahun ke Tahun
                </h3>
                <p className="text-xs text-slate-500">
                  Tren Akuntabilitas Pengelolaan Keuangan Desa Warung Menteng
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                      <th className="p-3 rounded-l-xl font-bold">Tahun Anggaran</th>
                      <th className="p-3 font-bold">Target Belanja (Rp)</th>
                      <th className="p-3 font-bold">Realisasi (Rp)</th>
                      <th className="p-3 rounded-r-xl font-bold text-right">Capaian</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">TA 2023</td>
                      <td className="p-3 font-mono">Rp 2.120.000.000</td>
                      <td className="p-3 font-mono font-bold text-slate-800">Rp 2.085.000.000</td>
                      <td className="p-3 text-right font-bold text-emerald-700">98,3%</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900">TA 2024</td>
                      <td className="p-3 font-mono">Rp 2.310.000.000</td>
                      <td className="p-3 font-mono font-bold text-slate-800">Rp 2.290.000.000</td>
                      <td className="p-3 text-right font-bold text-emerald-700">99,1%</td>
                    </tr>
                    <tr className="bg-[#eaf4ee]/70 hover:bg-[#eaf4ee]">
                      <td className="p-3 font-bold text-[#0e4b37] rounded-l-xl">TA 2025 (Target)</td>
                      <td className="p-3 font-mono font-semibold">Rp 2.450.000.000</td>
                      <td className="p-3 font-mono font-bold text-[#0e4b37]">Rp 2.450.000.000</td>
                      <td className="p-3 text-right font-bold text-[#0e4b37] rounded-r-xl">100,0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-3 bg-[#eaf4ee] rounded-xl border border-[#cbe4d2] text-xs text-slate-700 space-y-1">
                <span className="font-bold text-[#0e4b37]">Catatan Transparansi:</span>
                <p>
                  Tingkat serapan belanja Desa Warung Menteng senantiasa berada di atas 98% selama tiga tahun berturut-turut, dengan opini wajar tanpa pengecualian dalam pemeriksaan Inspektorat Kabupaten Bogor.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 bg-[#0e4b37] text-white text-xs font-bold rounded-xl hover:bg-[#093526] transition cursor-pointer"
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
