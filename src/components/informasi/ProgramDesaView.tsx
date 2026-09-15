import React, { useState } from 'react';
import { Target, MapPin, DollarSign, CheckCircle2, Clock, Layers, Sparkles } from 'lucide-react';
import { PROGRAM_DESA_LIST } from '../../data/mockData';

export const ProgramDesaView: React.FC = () => {
  const [selectedBidang, setSelectedBidang] = useState<string>('Semua');

  const bidangTabs = ['Semua', 'Infrastruktur', 'Ekonomi & UMKM', 'Kesehatan & Gizi', 'Digitalisasi & Pelayanan'];

  const filtered = selectedBidang === 'Semua'
    ? PROGRAM_DESA_LIST
    : PROGRAM_DESA_LIST.filter(p => p.bidang === selectedBidang);

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="bg-emerald-500/30 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-400/30">
              RKPDes & Realisasi Pembangunan
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif]">
              Program Kerja & Pembangunan Desa
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Daftar program kerja prioritas Pemerintah Desa Warung Menteng tahun anggaran 2026. Pantau progres fisik di lapangan, sumber pembiayaan, target sasaran, dan transparansi pelaksanaan.
            </p>
          </div>
        </div>

        {/* Filter Bidang */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {bidangTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setSelectedBidang(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                selectedBidang === tab
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid Program */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                    {item.bidang}
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    item.status === 'Selesai' 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-amber-100 text-amber-900 border border-amber-200'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                  {item.namaProgram}
                </h3>

                <div className="space-y-1.5 text-xs text-slate-600">
                  <p><strong>Target Output:</strong> {item.target}</p>
                  <p className="flex items-center gap-1 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Lokasi: {item.lokasi}</span>
                  </p>
                </div>
              </div>

              {/* Progres & Anggaran */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-500">Capaian Progres:</span>
                  <span className="text-emerald-700 font-mono">{item.progres}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${item.progres === 100 ? 'bg-emerald-600' : 'bg-amber-500'}`}
                    style={{ width: `${item.progres}%` }}
                  />
                </div>

                <div className="p-3 bg-slate-50 rounded-2xl flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">Alokasi Anggaran</span>
                    <span className="font-extrabold text-slate-900 font-mono">{item.anggaran}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block font-semibold">Sumber Dana</span>
                    <span className="font-bold text-emerald-700">{item.sumberDana}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
