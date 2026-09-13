import React, { useState } from 'react';
import { Image, Calendar, Tag, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALERI_LIST } from '../../data/mockData';
import { GaleriItem } from '../../types';

export const GaleriView: React.FC = () => {
  const [selectedKategori, setSelectedKategori] = useState<string>('Semua');
  const [activePhoto, setActivePhoto] = useState<GaleriItem | null>(null);

  const kategoriTabs = ['Semua', 'Kegiatan Warga', 'Pembangunan', 'Kebudayaan', 'Pariwisata', 'Perikanan'];

  const filtered = selectedKategori === 'Semua'
    ? GALERI_LIST
    : GALERI_LIST.filter(g => g.kategori === selectedKategori);

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="bg-teal-500/30 text-teal-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-teal-400/30">
              Dokumentasi & Potret
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif]">
              Galeri Foto Desa Warung Menteng
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Kumpulan rekaman visual aktivitas kemasyarakatan, pembangunan sarana prasarana, panen raya ikan air tawar, upacara adat Seren Taun, dan pesona alam Warung Menteng.
            </p>
          </div>
        </div>

        {/* Filter Kategori */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {kategoriTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setSelectedKategori(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                selectedKategori === tab
                  ? 'bg-teal-700 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Foto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img
                  src={item.fotoUrl}
                  alt={item.judul}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {item.kategori}
                </span>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <div className="bg-white/90 text-slate-900 rounded-full p-2.5 shadow-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-1">
                <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{item.tanggal}</span>
                </span>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition">
                  {item.judul}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {item.deskripsi}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activePhoto && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-150 relative">
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-900 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-80 sm:h-96 bg-black flex items-center justify-center">
                <img
                  src={activePhoto.fotoUrl}
                  alt={activePhoto.judul}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="p-6 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                    {activePhoto.kategori}
                  </span>
                  <span className="text-xs text-slate-400">• {activePhoto.tanggal}</span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">{activePhoto.judul}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{activePhoto.deskripsi}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
