import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  HelpCircle, 
  AlertTriangle, 
  Lightbulb, 
  Search, 
  Send, 
  CheckCircle, 
  Copy, 
  Lock, 
  Clock, 
  User, 
  MapPin,
  ArrowRight
} from 'lucide-react';
import { LaporanAspirasi, LaporanKategori } from '../../types';
import { getStoredLaporan, saveLaporan } from '../../utils/storage';

export const AspirasiPengaduanView: React.FC<{ initialTab?: LaporanKategori | 'cek-status' }> = ({ initialTab = 'pengaduan' }) => {
  const [activeTab, setActiveTab] = useState<LaporanKategori | 'cek-status'>(initialTab);
  const [laporanList, setLaporanList] = useState<LaporanAspirasi[]>([]);

  // Form State
  const [kategori, setKategori] = useState<LaporanKategori>('pengaduan');
  const [namaPelapor, setNamaPelapor] = useState('');
  const [nik, setNik] = useState('');
  const [nomorWA, setNomorWA] = useState('');
  const [dusun, setDusun] = useState('Dusun I (Cimenteng)');
  const [rtRw, setRtRw] = useState('RT 002 / RW 001');
  const [judul, setJudul] = useState('');
  const [isiLaporan, setIsiLaporan] = useState('');
  const [isAnonim, setIsAnonim] = useState(false);

  // Success Ticket Modal
  const [generatedTicket, setGeneratedTicket] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Search State
  const [searchTicket, setSearchTicket] = useState('');
  const [searchResult, setSearchResult] = useState<LaporanAspirasi | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    setLaporanList(getStoredLaporan());
  }, []);

  const handleTabChange = (tab: LaporanKategori | 'cek-status') => {
    setActiveTab(tab);
    if (tab !== 'cek-status') {
      setKategori(tab);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const ticketNo = `LAP-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    const newLap: LaporanAspirasi = {
      id: `lap-${Date.now()}`,
      nomorTiket: ticketNo,
      kategori: kategori,
      judul: judul,
      isiLaporan: isiLaporan,
      namaPelapor: isAnonim ? 'Warga Warung Menteng (Anonim)' : namaPelapor,
      nik: nik,
      nomorWA: nomorWA,
      lokasiKejadian: `${rtRw}, ${dusun}`,
      tanggalLapor: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      status: 'Menunggu',
      isAnonim: isAnonim
    };

    saveLaporan(newLap);
    setLaporanList(getStoredLaporan());
    setGeneratedTicket(ticketNo);

    // Reset form
    setJudul('');
    setIsiLaporan('');
  };

  const handleSearchTicket = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const trimmed = searchTicket.trim().toLowerCase();
    const found = laporanList.find(l => l.nomorTiket.toLowerCase() === trimmed);
    setSearchResult(found || null);
  };

  const handleCopyTicket = () => {
    if (generatedTicket) {
      navigator.clipboard.writeText(generatedTicket);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="bg-teal-500/30 text-teal-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-teal-400/30">
              Kanal Partisipasi Publik
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif]">
              Layanan Aspirasi, Tanya Informasi & Pengaduan
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Ruang keterbukaan bagi seluruh warga Desa Warung Menteng untuk menanyakan informasi regulasi desa, menyampaikan aspirasi usulan pembangunan, maupun melaporkan pengaduan fasilitas umum.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
          <button
            onClick={() => handleTabChange('tanya-informasi')}
            className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 ${
              activeTab === 'tanya-informasi'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Tanya Informasi</span>
          </button>

          <button
            onClick={() => handleTabChange('pengaduan')}
            className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 ${
              activeTab === 'pengaduan'
                ? 'bg-rose-700 text-white shadow-sm'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>Pengaduan</span>
          </button>

          <button
            onClick={() => handleTabChange('aspirasi')}
            className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 ${
              activeTab === 'aspirasi'
                ? 'bg-blue-700 text-white shadow-sm'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Lightbulb className="w-4 h-4" />
            <span>Aspirasi & Saran</span>
          </button>

          <button
            onClick={() => handleTabChange('cek-status')}
            className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 ${
              activeTab === 'cek-status'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>Cek Status Laporan</span>
          </button>
        </div>

        {/* Tab Konten: Form Pengajuan (Tanya, Pengaduan, Aspirasi) */}
        {activeTab !== 'cek-status' && (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                activeTab === 'pengaduan' ? 'bg-rose-100 text-rose-800' :
                activeTab === 'aspirasi' ? 'bg-blue-100 text-blue-800' :
                'bg-emerald-100 text-emerald-800'
              }`}>
                Formulir {activeTab === 'pengaduan' ? 'Pengaduan Masalah Warga' : activeTab === 'aspirasi' ? 'Aspirasi & Usulan Pembangunan' : 'Tanya Informasi Publik'}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2 font-['Playfair_Display',serif]">
                {activeTab === 'pengaduan' && 'Laporkan Kendala Lingkungan, Jalan Rusak, atau Pelayanan'}
                {activeTab === 'aspirasi' && 'Sampaikan Gagasan & Usulan Inovatif untuk Desa'}
                {activeTab === 'tanya-informasi' && 'Ajukan Pertanyaan Seputar Program / Administrasi Desa'}
              </h2>
            </div>

            {/* Identitas Pelapor */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                1. Identitas Pelapor
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Nama Lengkap *</label>
                  <input
                    type="text"
                    required
                    disabled={isAnonim}
                    value={namaPelapor}
                    onChange={e => setNamaPelapor(e.target.value)}
                    placeholder={isAnonim ? 'Identitas Disamarkan' : 'Nama Anda'}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:bg-white disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">NIK (16 Digit) *</label>
                  <input
                    type="text"
                    required
                    maxLength={16}
                    value={nik}
                    onChange={e => setNik(e.target.value.replace(/\D/g, ''))}
                    placeholder="3201xxxxxxxxxxxx"
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-mono focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Nomor WhatsApp *</label>
                  <input
                    type="text"
                    required
                    value={nomorWA}
                    onChange={e => setNomorWA(e.target.value)}
                    placeholder="0812xxxxxxxx"
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                </div>
              </div>

              {/* Checkbox Anonim / Rahasia */}
              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <input
                  type="checkbox"
                  id="anonimCheck"
                  checked={isAnonim}
                  onChange={e => setIsAnonim(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                />
                <label htmlFor="anonimCheck" className="text-slate-700 font-medium cursor-pointer flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-slate-500" />
                  <span>Sembunyikan nama saya dari publik (Laporan Anonim/Rahasia)</span>
                </label>
              </div>
            </div>

            {/* Wilayah & Isi Laporan */}
            <div className="space-y-4 pt-2 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                2. Lokasi & Rincian Laporan
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Dusun Wilayah</label>
                  <select
                    value={dusun}
                    onChange={e => setDusun(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  >
                    <option value="Dusun I (Cimenteng)">Dusun I (Cimenteng)</option>
                    <option value="Dusun II (Warung Menteng)">Dusun II (Warung Menteng)</option>
                    <option value="Dusun III (Pasir Angin)">Dusun III (Pasir Angin)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Lokasi Detail / RT & RW</label>
                  <input
                    type="text"
                    required
                    value={rtRw}
                    onChange={e => setRtRw(e.target.value)}
                    placeholder="Contoh: Depan Pos Kamling RT 03/RW 02"
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Judul Pokok Bahasan / Laporan *</label>
                <input
                  type="text"
                  required
                  value={judul}
                  onChange={e => setJudul(e.target.value)}
                  placeholder="Contoh: Usulan Perbaikan Lampu PJU di Gang Sukamaju"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Deskripsi Lengkap & Kronologi *</label>
                <textarea
                  required
                  rows={4}
                  value={isiLaporan}
                  onChange={e => setIsiLaporan(e.target.value)}
                  placeholder="Jelaskan secara runtut fakta di lapangan, kronologi masalah, saran atau pertanyaan Anda..."
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:bg-white leading-relaxed"
                />
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-4 rounded-2xl text-white font-extrabold text-sm transition flex items-center justify-center gap-2 shadow-md ${
                activeTab === 'pengaduan' ? 'bg-rose-700 hover:bg-rose-800' :
                activeTab === 'aspirasi' ? 'bg-blue-700 hover:bg-blue-800' :
                'bg-emerald-700 hover:bg-emerald-800'
              }`}
            >
              <Send className="w-4 h-4" />
              <span>Kirim {activeTab === 'pengaduan' ? 'Pengaduan' : activeTab === 'aspirasi' ? 'Aspirasi' : 'Pertanyaan'} Sekarang</span>
            </button>
          </form>
        )}

        {/* Tab Konten: Cek Status Laporan */}
        {activeTab === 'cek-status' && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Lacak Tanggapan Laporan Warga</h3>
              <form onSubmit={handleSearchTicket} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
                  <input
                    type="text"
                    required
                    value={searchTicket}
                    onChange={e => setSearchTicket(e.target.value)}
                    placeholder="Masukkan Nomor Tiket (contoh: LAP-2026-001)..."
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-slate-900 focus:bg-white font-mono"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl text-xs sm:text-sm transition flex items-center justify-center gap-2"
                >
                  <span>Cari Tiket</span>
                </button>
              </form>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>Contoh nomor tiket demo:</span>
                <button
                  type="button"
                  onClick={() => setSearchTicket('LAP-2026-001')}
                  className="text-emerald-700 font-mono font-bold hover:underline"
                >
                  LAP-2026-001
                </button>
                <span>•</span>
                <button
                  type="button"
                  onClick={() => setSearchTicket('LAP-2026-002')}
                  className="text-emerald-700 font-mono font-bold hover:underline"
                >
                  LAP-2026-002
                </button>
              </div>
            </div>

            {/* Hasil Tiket */}
            {hasSearched && searchResult && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 animate-in fade-in duration-200">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Nomor Tiket:
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 font-mono">
                      {searchResult.nomorTiket}
                    </h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    searchResult.status === 'Selesai' ? 'bg-emerald-100 text-emerald-800' :
                    searchResult.status === 'Diproses' ? 'bg-blue-100 text-blue-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    Status: {searchResult.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-500 uppercase">Perihal:</span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">{searchResult.judul}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100 whitespace-pre-line">
                    {searchResult.isiLaporan}
                  </p>
                </div>

                {/* Respon Tindak Lanjut Pemdes */}
                <div className="p-5 bg-emerald-50/80 rounded-2xl border border-emerald-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-emerald-700" />
                      <span>Tanggapan Resmi Pemerintah Desa:</span>
                    </span>
                    {searchResult.tanggalRespon && (
                      <span className="text-[11px] text-slate-500">{searchResult.tanggalRespon}</span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {searchResult.responPetugas || 'Laporan Anda telah tercatat dan sedang dalam antrean verifikasi petugas instansi terkait.'}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Modal Berhasil Kirim Laporan */}
        {generatedTicket && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-150 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-['Playfair_Display',serif]">
                  Laporan Berhasil Diterima!
                </h3>
                <p className="text-xs text-slate-500">
                  Terima kasih atas kepedulian Anda terhadap kemajuan Desa Warung Menteng.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border-2 border-slate-300 space-y-1">
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                  Nomor Tiket Laporan Anda:
                </span>
                <div className="text-2xl font-black text-slate-900 font-mono tracking-wider">
                  {generatedTicket}
                </div>
                <button
                  onClick={handleCopyTicket}
                  className="mt-2 text-xs font-bold text-slate-700 hover:text-slate-900 flex items-center justify-center gap-1 mx-auto bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-sm"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Tersalin!' : 'Salin Nomor Tiket'}</span>
                </button>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => {
                    setGeneratedTicket(null);
                    setActiveTab('cek-status');
                    setSearchTicket(generatedTicket);
                  }}
                  className="flex-1 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition"
                >
                  Lacak Tiket Sekarang
                </button>
                <button
                  onClick={() => setGeneratedTicket(null)}
                  className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
