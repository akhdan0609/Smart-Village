import React from 'react';
import { 
  Newspaper, 
  Bell, 
  Calendar, 
  ArrowRight, 
  Eye, 
  Tag, 
  Clock, 
  FileText 
} from 'lucide-react';
import { PageRoute } from '../../types';
import { BERITA_LIST, PENGUMUMAN_LIST } from '../../data/mockData';

interface LatestUpdatesProps {
  onNavigate: (page: PageRoute, params?: any) => void;
}

export const LatestUpdates: React.FC<LatestUpdatesProps> = ({ onNavigate }) => {
  const latestNews = BERITA_LIST.slice(0, 3);
  const latestAnnouncements = PENGUMUMAN_LIST.slice(0, 3);

  return (
    <section className="py-14 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Kolom Kiri: Publikasi HUMAS Desa (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <Newspaper className="w-4 h-4" />
                  <span>Warta & HUMAS Desa</span>
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 mt-1 font-['Playfair_Display',serif]">
                  Publikasi HUMAS & Warta Terkini
                </h2>
              </div>
              <button
                onClick={() => onNavigate('informasi-berita')}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition"
              >
                <span>Lihat Semua HUMAS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {latestNews.map(item => (
                <div
                  key={item.id}
                  onClick={() => onNavigate('informasi-berita', { selectedBeritaId: item.id })}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 overflow-hidden bg-slate-100">
                      <img
                        src={item.fotoUrl}
                        alt={item.judul}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                      <span className="absolute top-2.5 left-2.5 bg-emerald-700/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
                        {item.kategori}
                      </span>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{item.tanggal}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{item.dibaca}x</span>
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition line-clamp-2 leading-snug">
                        {item.judul}
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                        {item.ringkasan}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <span className="text-xs font-bold text-emerald-700 group-hover:underline flex items-center gap-1">
                      <span>Baca Selengkapnya</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Pengumuman Resmi (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-amber-700 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <Bell className="w-4 h-4" />
                  <span>Surat Edaran</span>
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 mt-1 font-['Playfair_Display',serif]">
                  Pengumuman Resmi
                </h2>
              </div>
              <button
                onClick={() => onNavigate('informasi-pengumuman')}
                className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg transition"
              >
                <span>Semua</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-3.5">
              {latestAnnouncements.map(peng => (
                <div
                  key={peng.id}
                  onClick={() => onNavigate('informasi-pengumuman')}
                  className="bg-amber-50/40 hover:bg-amber-50/80 border border-amber-200/70 p-4 rounded-2xl transition cursor-pointer group shadow-sm"
                >
                  <div className="flex items-center justify-between text-[11px] text-amber-800 font-semibold mb-1">
                    <span className="bg-amber-100 px-2 py-0.5 rounded-md font-mono text-[10px]">
                      {peng.kategori}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <Clock className="w-3 h-3" />
                      <span>{peng.tanggal}</span>
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-800 transition line-clamp-2 mt-1">
                    {peng.judul}
                  </h3>

                  <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                    {peng.isi}
                  </p>

                  <div className="mt-2 text-[11px] text-slate-500 font-medium">
                    PJ: {peng.penanggungJawab}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
