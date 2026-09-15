import React, { useState, useEffect } from 'react';
import { 
  Search, 
  FileText, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Printer, 
  User, 
  Calendar, 
  MapPin, 
  Phone,
  ShieldCheck
} from 'lucide-react';
import { PengajuanSurat } from '../../types';
import { getStoredPengajuanSurat } from '../../utils/storage';

export const CekStatusPengajuanView: React.FC<{ initialRegNumber?: string }> = ({ initialRegNumber = '' }) => {
  const [searchTerm, setSearchTerm] = useState(initialRegNumber);
  const [allList, setAllList] = useState<PengajuanSurat[]>([]);
  const [searchResult, setSearchResult] = useState<PengajuanSurat | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const list = getStoredPengajuanSurat();
    setAllList(list);

    if (initialRegNumber) {
      const match = list.find(s => 
        s.nomorRegistrasi.toLowerCase() === initialRegNumber.toLowerCase() ||
        s.nik === initialRegNumber
      );
      if (match) {
        setSearchResult(match);
        setHasSearched(true);
      }
    }
  }, [initialRegNumber]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const trimmed = searchTerm.trim().toLowerCase();
    const found = allList.find(s => 
      s.nomorRegistrasi.toLowerCase() === trimmed || 
      s.nik === trimmed
    );
    setSearchResult(found || null);
  };

  const steps = [
    { label: 'Diajukan Online', key: 'Diajukan' },
    { label: 'Verifikasi Berkas', key: 'Diproses' },
    { label: 'Tanda Tangan Kades', key: 'TtdKades' },
    { label: 'Selesai & Siap Ambil', key: 'Selesai' }
  ];

  const getStepIndex = (status: string) => {
    switch (status) {
      case 'Diajukan': return 0;
      case 'Diproses': return 1;
      case 'Selesai': return 3;
      case 'Ditolak': return -1;
      default: return 0;
    }
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-md relative overflow-hidden">
          <div className="relative z-10 space-y-3">
            <span className="bg-emerald-500/30 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-400/30">
              Pelacak Surat Real-Time
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif]">
              Cek Status Pengajuan Surat
            </h1>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              Masukkan <strong>Nomor Registrasi</strong> (contoh: <code>SRT-2026-9812</code>) atau <strong>NIK 16 Digit</strong> untuk mengetahui progres pemrosesan dokumen Anda.
            </p>
          </div>
        </div>

        {/* Search Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                required
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Ketik Nomor Registrasi / NIK Pemohon..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-600 focus:bg-white"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-2xl text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Lacak Dokumen</span>
            </button>
          </form>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Contoh nomor demo:</span>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('SRT-2026-001');
              }}
              className="text-emerald-700 font-mono font-bold hover:underline"
            >
              SRT-2026-001
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('SRT-2026-002');
              }}
              className="text-emerald-700 font-mono font-bold hover:underline"
            >
              SRT-2026-002
            </button>
          </div>
        </div>

        {/* Search Result */}
        {hasSearched && searchResult && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8 animate-in fade-in duration-200">
            {/* Header Result */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Nomor Registrasi:
                </span>
                <h3 className="text-2xl font-black text-emerald-900 font-mono">
                  {searchResult.nomorRegistrasi}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">{searchResult.jenisSurat}</p>
              </div>

              <div className="flex items-center gap-3">
                <span className={`px-4 py-1.5 rounded-full text-xs font-extrabold ${
                  searchResult.status === 'Selesai' ? 'bg-emerald-100 text-emerald-800' :
                  searchResult.status === 'Diproses' ? 'bg-blue-100 text-blue-800' :
                  searchResult.status === 'Ditolak' ? 'bg-rose-100 text-rose-800' :
                  'bg-amber-100 text-amber-800'
                }`}>
                  Status: {searchResult.status}
                </span>
              </div>
            </div>

            {/* Stepper Timeline */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Progres Tahapan Pemrosesan:
              </h4>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {steps.map((step, idx) => {
                  const currentIdx = getStepIndex(searchResult.status);
                  const isPassed = currentIdx >= idx;
                  const isCurrent = currentIdx === idx;

                  return (
                    <div 
                      key={idx}
                      className={`p-3.5 rounded-2xl border text-center space-y-1 transition ${
                        isCurrent
                          ? 'bg-emerald-50 border-emerald-500 shadow-sm'
                          : isPassed
                          ? 'bg-slate-50 border-emerald-200'
                          : 'bg-slate-50/50 border-slate-200 opacity-60'
                      }`}
                    >
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs mx-auto ${
                        isPassed ? 'bg-emerald-700 text-white' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {idx + 1}
                      </div>
                      <h5 className="text-xs font-bold text-slate-900">{step.label}</h5>
                      <span className="text-[10px] text-slate-500 block">
                        {isPassed ? 'Selesai' : 'Menunggu'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Detail Data Pemohon & Catatan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-slate-50 rounded-2xl space-y-2">
                <span className="font-bold text-slate-800 block text-xs border-b border-slate-200 pb-1">
                  Data Pemohon:
                </span>
                <p><strong>Nama:</strong> {searchResult.namaPemohon}</p>
                <p><strong>NIK:</strong> <span className="font-mono">{searchResult.nik}</span></p>
                <p><strong>WhatsApp:</strong> {searchResult.nomorWA}</p>
                <p><strong>Alamat:</strong> {searchResult.alamat}</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl space-y-2">
                <span className="font-bold text-slate-800 block text-xs border-b border-slate-200 pb-1">
                  Detail Pengajuan & Catatan Petugas:
                </span>
                <p><strong>Keperluan:</strong> {searchResult.keperluan}</p>
                <p><strong>Tanggal Pengajuan:</strong> {searchResult.tanggalPengajuan}</p>
                <div className="p-2.5 bg-emerald-100/60 rounded-xl border border-emerald-200 mt-2">
                  <span className="font-bold text-emerald-900 block text-[11px]">Catatan Pelayanan:</span>
                  <p className="text-slate-700 text-xs mt-0.5">{searchResult.catatanPetugas}</p>
                </div>
              </div>
            </div>

            {/* Tombol Cetak / Ambil Dokumen */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => window.print()}
                className="flex-1 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak / Simpan Bukti Registrasi</span>
              </button>
            </div>
          </div>
        )}

        {/* Not Found */}
        {hasSearched && !searchResult && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center space-y-3 animate-in fade-in duration-200">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Data Pengajuan Tidak Ditemukan
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Pastikan Anda memasukkan Nomor Registrasi (contoh: <code>SRT-2026-001</code>) atau NIK 16 digit yang terdaftar dengan benar.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
