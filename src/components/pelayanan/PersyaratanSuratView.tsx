import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, ExternalLink } from 'lucide-react';
import { JENIS_SURAT_LIST } from '../../data/mockData';
import { PageRoute } from '../../types';

interface PersyaratanSuratProps {
  onNavigate: (page: PageRoute, params?: any) => void;
}

export const PersyaratanSuratView: React.FC<PersyaratanSuratProps> = ({ onNavigate }) => {
  const [selectedSuratId, setSelectedSuratId] = useState<string>(JENIS_SURAT_LIST[0].id);

  const selectedSurat = JENIS_SURAT_LIST.find(s => s.id === selectedSuratId) || JENIS_SURAT_LIST[0];

  const handleAjukanSurat = () => {
    if (selectedSurat.targetPage) {
      onNavigate(selectedSurat.targetPage, selectedSurat.targetParams);
    } else {
      onNavigate('pelayanan-pengajuan', { defaultSuratId: selectedSurat.id });
    }
  };

  const getTargetMenuName = (page?: PageRoute) => {
    switch (page) {
      case 'pelayanan-surat-keterangan':
        return 'Surat Keterangan';
      case 'pelayanan-pindah-datang':
        return 'Pindah Datang';
      case 'pelayanan-layanan-pernikahan':
        return 'Layanan Pernikahan';
      default:
        return 'Pelayanan Desa';
    }
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="bg-emerald-500/30 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-400/30">
              Daftar Layanan Surat
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif]">
              Persyaratan Pengajuan Surat
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Panduan lengkap berkas persyaratan administrasi kependudukan di Desa Warung Menteng. Pilih jenis surat di bawah ini dan klik ajukan surat untuk langsung mengisi formulir online resmi.
            </p>
          </div>
        </div>

        {/* Master Detail Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Kolom Kiri: Menu Jenis Surat (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-2">
            <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                PILIH JENIS SURAT
              </span>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                10 Jenis Layanan
              </span>
            </div>

            <div className="space-y-1.5 pt-1">
              {JENIS_SURAT_LIST.map((surat, index) => {
                const isSelected = selectedSuratId === surat.id;
                const nomor = index + 1;
                return (
                  <button
                    key={surat.id}
                    onClick={() => setSelectedSuratId(surat.id)}
                    className={`w-full text-left p-3.5 rounded-2xl transition-all duration-150 flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? 'bg-[#0e3e2f] text-white shadow-sm'
                        : 'bg-slate-50 hover:bg-slate-100/80 text-slate-800'
                    }`}
                  >
                    <div className="flex items-start gap-3 min-w-0 pr-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                        isSelected ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-700 group-hover:bg-slate-300'
                      }`}>
                        {nomor}
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold leading-snug truncate">
                          {nomor}. {surat.nama}
                        </h4>
                        <p className={`text-[11px] mt-0.5 flex items-center gap-2 ${
                          isSelected ? 'text-emerald-100' : 'text-slate-500'
                        }`}>
                          <span>Menu: {getTargetMenuName(surat.targetPage)}</span>
                          <span>•</span>
                          <span>Gratis (Rp 0)</span>
                        </p>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-emerald-300 translate-x-0.5' : 'text-slate-400 group-hover:translate-x-0.5'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Kolom Kanan: Detail Persyaratan (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-0.5 rounded-full">
                  Layanan Administrasi Desa
                </span>
                <span className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <span>Halaman Pelayanan:</span>
                  <strong className="text-slate-900">{getTargetMenuName(selectedSurat.targetPage)}</strong>
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2 font-['Playfair_Display',serif]">
                {selectedSurat.nama}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                {selectedSurat.deskripsi}
              </p>
            </div>

            {/* Syarat List */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Dokumen yang Wajib Disiapkan:</span>
              </h4>
              <div className="space-y-2">
                {selectedSurat.persyaratan.map((syarat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 leading-relaxed">{syarat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Waktu & Biaya */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 text-xs">
              <div>
                <span className="text-slate-500 block text-[11px]">Waktu Pemrosesan:</span>
                <span className="font-extrabold text-slate-900 flex items-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  {selectedSurat.estimasiWaktu}
                </span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Biaya Retribusi:</span>
                <span className="font-extrabold text-emerald-800 flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Gratis (Rp 0 / Bebas Pungli)
                </span>
              </div>
            </div>

            {/* Kegunaan Umum */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
              <span className="font-bold text-slate-800 block mb-1">Kegunaan Umum:</span>
              <p className="text-slate-600 leading-relaxed">{selectedSurat.kegunaanUmum}</p>
            </div>

            {/* Action Button - Direct route to corresponding Pelayanan page */}
            <div className="pt-2">
              <button
                onClick={handleAjukanSurat}
                className="w-full py-4 bg-[#0e3e2f] hover:bg-[#14533e] text-white rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2.5 shadow-md shadow-emerald-950/10 cursor-pointer"
              >
                <span>Ajukan Surat Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-slate-500 mt-2">
                Membuka formulir pengajuan langsung pada menu <strong>Pelayanan &gt; {getTargetMenuName(selectedSurat.targetPage)}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
