import React, { useState } from 'react';
import { FileText, CheckCircle2, Clock, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { JENIS_SURAT_LIST } from '../../data/mockData';
import { PageRoute } from '../../types';

interface PersyaratanSuratProps {
  onNavigate: (page: PageRoute, params?: any) => void;
}

export const PersyaratanSuratView: React.FC<PersyaratanSuratProps> = ({ onNavigate }) => {
  const [selectedSuratId, setSelectedSuratId] = useState<string>(JENIS_SURAT_LIST[0].id);

  const selectedSurat = JENIS_SURAT_LIST.find(s => s.id === selectedSuratId) || JENIS_SURAT_LIST[0];

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
              Panduan lengkap syarat berkas yang diperlukan untuk pengajuan Surat Keterangan Usaha (SKU), SKTM, Pengantar SKCK, Domisili, dan surat administrasi kependudukan lainnya.
            </p>
          </div>
        </div>

        {/* Master Detail Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Kolom Kiri: Menu Jenis Surat (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-3 py-1">
              Pilih Jenis Surat:
            </span>
            {JENIS_SURAT_LIST.map(surat => (
              <button
                key={surat.id}
                onClick={() => setSelectedSuratId(surat.id)}
                className={`w-full text-left p-4 rounded-2xl transition flex items-center justify-between ${
                  selectedSuratId === surat.id
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-800'
                }`}
              >
                <div>
                  <h4 className="text-xs sm:text-sm font-bold leading-snug">{surat.nama}</h4>
                  <p className={`text-[11px] mt-0.5 ${selectedSuratId === surat.id ? 'text-emerald-100' : 'text-slate-500'}`}>
                    Estimasi: {surat.estimasiWaktu} • Biaya: Gratis (Rp 0)
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            ))}
          </div>

          {/* Kolom Kanan: Detail Persyaratan (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-0.5 rounded-full">
                Layanan Administrasi Desa
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2 font-['Playfair_Display',serif]">
                {selectedSurat.nama}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {selectedSurat.deskripsi}
              </p>
            </div>

            {/* Syarat List */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Dokumen yang Wajib Disiapkan:
              </h4>
              <div className="space-y-2">
                {selectedSurat.persyaratan.map((syarat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700">{syarat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Waktu & Biaya */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 text-xs">
              <div>
                <span className="text-slate-500 block text-[11px]">Waktu Pemrosesan:</span>
                <span className="font-extrabold text-slate-900">{selectedSurat.estimasiWaktu}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Biaya Retribusi:</span>
                <span className="font-extrabold text-emerald-800">Gratis (Rp 0 / Bebas Pungli)</span>
              </div>
            </div>

            {/* Kegunaan Umum */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
              <span className="font-bold text-slate-800 block mb-1">Kegunaan Umum:</span>
              <p className="text-slate-600 leading-relaxed">{selectedSurat.kegunaanUmum}</p>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                onClick={() => onNavigate('pelayanan-pengajuan', { defaultSuratId: selectedSurat.id })}
                className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Ajukan {selectedSurat.nama} Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
