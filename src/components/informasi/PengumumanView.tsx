import React, { useState, useEffect } from 'react';
import { Bell, Clock, FileText, Download, CheckCircle, Search } from 'lucide-react';
import { PengumumanItem } from '../../types';
import { getStoredPengumuman } from '../../utils/storage';

export const PengumumanView: React.FC = () => {
  const [pengumumanList, setPengumumanList] = useState<PengumumanItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setPengumumanList(getStoredPengumuman());
  }, []);

  const filtered = pengumumanList.filter(p => 
    p.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.isi.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.nomorSurat.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="bg-amber-500/30 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-amber-400/30">
              Pemberitahuan & Edaran Resmi
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif]">
              Pengumuman Desa Warung Menteng
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Surat edaran, jadwal penyaluran bansos BLT-DD, informasi Posyandu, dan agenda kerja bakti resmi Pemerintah Desa Warung Menteng.
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Cari surat edaran / kata kunci..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:bg-white"
            />
          </div>
        </div>

        {/* List Pengumuman */}
        <div className="space-y-4">
          {filtered.map(peng => (
            <div
              key={peng.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:border-amber-300 transition duration-200 space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-amber-100 text-amber-900 font-mono text-xs font-bold px-2.5 py-0.5 rounded-lg border border-amber-200">
                    No: {peng.nomorSurat}
                  </span>
                  <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-0.5 rounded-lg">
                    {peng.kategori}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Diterbitkan: {peng.tanggal}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                  {peng.judul}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                  {peng.isi}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs bg-slate-50 p-3 rounded-2xl">
                <span className="text-slate-600">
                  <strong>Penanggung Jawab:</strong> {peng.penanggungJawab}
                </span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Surat Resmi Terverifikasi</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
