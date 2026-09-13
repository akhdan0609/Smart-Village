import React, { useState } from 'react';
import { 
  Download, 
  FileText, 
  Search, 
  CheckCircle, 
  FileSpreadsheet, 
  FileCode,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { DOKUMEN_DOWNLOAD_LIST } from '../../data/mockData';
import { PageRoute } from '../../types';

interface DownloadFormulirProps {
  onNavigate: (page: PageRoute, params?: any) => void;
}

export const DownloadFormulirView: React.FC<DownloadFormulirProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedKategori, setSelectedKategori] = useState<string>('semua');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const filteredDocs = DOKUMEN_DOWNLOAD_LIST.filter(doc => {
    const matchSearch = doc.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        doc.deskripsi.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = selectedKategori === 'semua' || doc.kategori === selectedKategori;
    return matchSearch && matchCat;
  });

  const handleDownload = (judul: string) => {
    setDownloadSuccess(judul);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="bg-emerald-500/30 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-400/30">
              Pusat Unduhan & Dokumen
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-['Playfair_Display',serif]">
              Unduh Formulir & Dokumen Resmi Desa
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Unduh blanko surat pengantar RT/RW, formulir permohonan administrasi kependudukan, buku SOP pelayanan, dan laporan transparansi APBDes secara gratis.
            </p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama formulir atau regulasi..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {['semua', 'Formulir Surat', 'Regulasi & Perdes', 'Laporan Transparansi', 'Panduan Layanan'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedKategori(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  selectedKategori === cat
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat === 'semua' ? 'Semua Dokumen' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Download Success Alert */}
        {downloadSuccess && (
          <div className="p-4 bg-emerald-100 border border-emerald-300 text-emerald-900 rounded-2xl flex items-center justify-between text-xs sm:text-sm animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-700" />
              <span>Memulai pengunduhan: <strong>{downloadSuccess}</strong> (Simulasi berkas terunduh).</span>
            </div>
            <button onClick={() => setDownloadSuccess(null)} className="font-bold underline text-xs">
              Tutup
            </button>
          </div>
        )}

        {/* Documents List */}
        <div className="space-y-4">
          {filteredDocs.map(doc => (
            <div 
              key={doc.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                      {doc.kategori}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {doc.format} • {doc.ukuran}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {doc.judul}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {doc.deskripsi}
                  </p>
                  <div className="flex items-center gap-4 text-[11px] text-slate-400 pt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>Diperbarui: {doc.tanggalUpdate}</span>
                    </span>
                    <span>•</span>
                    <span>{doc.jumlahUnduh.toLocaleString('id-ID')} kali diunduh</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => handleDownload(doc.judul)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Unduh Berkas</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA Persuratan Online */}
        <div className="bg-gradient-to-r from-teal-900 to-emerald-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold font-['Playfair_Display',serif]">
              Ingin Mengajukan Surat Secara Langsung Tanpa Perlu Mencetak?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100">
              Gunakan layanan mandiri pengajuan surat online PTSP Desa Warung Menteng secara cepat dan gratis.
            </p>
          </div>
          <button
            onClick={() => onNavigate('pelayanan-pengajuan')}
            className="shrink-0 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center gap-2 shadow-lg"
          >
            <span>Ajukan Surat Online</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
