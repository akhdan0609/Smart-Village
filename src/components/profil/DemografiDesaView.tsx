import React, { useState } from 'react';
import { 
  Users, 
  PieChart as PieIcon, 
  BarChart3, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Heart,
  Baby,
  TrendingUp
} from 'lucide-react';
import { DEMOGRAFI_DATA, PROFIL_DESA_DATA } from '../../data/mockData';

export const DemografiDesaView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dusun' | 'usia' | 'pendidikan' | 'pekerjaan' | 'agama'>('dusun');

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="bg-emerald-500/30 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-400/30">
              Data & Kependudukan
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-['Playfair_Display',serif]">
              Statistik Demografi Desa Warung Menteng
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Penyajian data kependudukan terperinci berdasarkan sebaran dusun/RW, kelompok umur, jenjang pendidikan, mata pencaharian, dan komposisi keagamaan.
            </p>
          </div>
        </div>

        {/* Quick Highlights Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <Users className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
            <div className="text-2xl font-black text-slate-900">{PROFIL_DESA_DATA.statistik.totalPenduduk.toLocaleString('id-ID')}</div>
            <div className="text-xs text-slate-500 font-medium">Total Penduduk (Jiwa)</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <Heart className="w-6 h-6 text-teal-600 mx-auto mb-2" />
            <div className="text-2xl font-black text-slate-900">{PROFIL_DESA_DATA.statistik.kepalaKeluarga.toLocaleString('id-ID')}</div>
            <div className="text-xs text-slate-500 font-medium">Kepala Keluarga (KK)</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <TrendingUp className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-black text-slate-900">{PROFIL_DESA_DATA.statistik.lakiLaki.toLocaleString('id-ID')} / {PROFIL_DESA_DATA.statistik.perempuan.toLocaleString('id-ID')}</div>
            <div className="text-xs text-slate-500 font-medium">Laki-laki / Perempuan</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <MapPin className="w-6 h-6 text-amber-600 mx-auto mb-2" />
            <div className="text-2xl font-black text-slate-900">{PROFIL_DESA_DATA.statistik.jumlahDusun} Dusun / {PROFIL_DESA_DATA.statistik.jumlahRW} RW</div>
            <div className="text-xs text-slate-500 font-medium">Wilayah Administrasi</div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2">
          <button
            onClick={() => setActiveTab('dusun')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition ${
              activeTab === 'dusun'
                ? 'bg-emerald-700 text-white shadow'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Per Dusun & RW</span>
          </button>
          <button
            onClick={() => setActiveTab('usia')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition ${
              activeTab === 'usia'
                ? 'bg-emerald-700 text-white shadow'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Baby className="w-4 h-4" />
            <span>Kelompok Usia</span>
          </button>
          <button
            onClick={() => setActiveTab('pendidikan')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition ${
              activeTab === 'pendidikan'
                ? 'bg-emerald-700 text-white shadow'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Jenjang Pendidikan</span>
          </button>
          <button
            onClick={() => setActiveTab('pekerjaan')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition ${
              activeTab === 'pekerjaan'
                ? 'bg-emerald-700 text-white shadow'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Mata Pencaharian</span>
          </button>
          <button
            onClick={() => setActiveTab('agama')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition ${
              activeTab === 'agama'
                ? 'bg-emerald-700 text-white shadow'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>Agama</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          {activeTab === 'dusun' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-['Playfair_Display',serif]">
                  Distribusi Penduduk Berdasarkan Dusun & Wilayah RW
                </h3>
                <p className="text-xs text-slate-500">
                  Desa Warung Menteng terbagi atas 3 Dusun utama, 7 RW, dan 28 RT.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {DEMOGRAFI_DATA.pendudukBerdasarkanDusun.map((d, idx) => (
                  <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
                    <div className="border-b border-slate-200 pb-3">
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                        {d.rw}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 mt-1">{d.namaDusun}</h4>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between text-slate-600">
                        <span>Jumlah KK:</span>
                        <span className="font-bold text-slate-900">{d.jumlahKK} KK</span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>Laki-laki:</span>
                        <span className="font-semibold text-slate-800">{d.lakiLaki} Jiwa</span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>Perempuan:</span>
                        <span className="font-semibold text-slate-800">{d.perempuan} Jiwa</span>
                      </div>
                      <div className="flex justify-between text-slate-900 font-bold pt-2 border-t border-slate-200">
                        <span>Total Jiwa:</span>
                        <span className="text-emerald-700 text-sm">{d.totalJiwa} Jiwa</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'usia' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-['Playfair_Display',serif]">
                  Komposisi Penduduk Berdasarkan Kelompok Usia
                </h3>
                <p className="text-xs text-slate-500">
                  Mayoritas penduduk berada pada rentang usia produktif (15 - 54 tahun).
                </p>
              </div>

              <div className="space-y-4">
                {DEMOGRAFI_DATA.pendudukBerdasarkanKelompokUsia.map((u, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold text-slate-700">
                      <span>{u.rentang}</span>
                      <span className="text-emerald-700 font-bold">{u.jumlah} Jiwa ({u.persen}%)</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-emerald-600 to-teal-500 h-full rounded-full transition-all duration-500" 
                        style={{ width: `${u.persen * 2}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'pendidikan' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-['Playfair_Display',serif]">
                  Tingkat Pendidikan Terakhir Warga
                </h3>
                <p className="text-xs text-slate-500">
                  Data jenjang pendidikan formal yang telah diselesaikan warga Desa Warung Menteng.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {DEMOGRAFI_DATA.pendudukBerdasarkanPendidikan.map((p, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                    <div className="text-xs font-bold text-slate-800">{p.tingkat}</div>
                    <div className="text-2xl font-black text-emerald-800">{p.jumlah} <span className="text-xs font-normal text-slate-500">Jiwa</span></div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-emerald-600 h-full rounded-full" style={{ width: `${p.persen * 2.5}%` }} />
                    </div>
                    <div className="text-[11px] text-slate-500 text-right">{p.persen}% dari total penduduk</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'pekerjaan' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-['Playfair_Display',serif]">
                  Mata Pencaharian & Profesi Utama
                </h3>
                <p className="text-xs text-slate-500">
                  Sebagian besar warga bermata pencaharian di sektor pertanian, perikanan air tawar, dan UMKM dagang.
                </p>
              </div>

              <div className="space-y-4">
                {DEMOGRAFI_DATA.pendudukBerdasarkanPekerjaan.map((pek, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold text-slate-700">
                      <span>{pek.profesi}</span>
                      <span className="text-emerald-700 font-bold">{pek.jumlah} Orang ({pek.persen}%)</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-teal-600 to-emerald-500 h-full rounded-full transition-all duration-500" 
                        style={{ width: `${pek.persen * 2.5}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'agama' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-['Playfair_Display',serif]">
                  Komposisi Keberagamaan Warga
                </h3>
                <p className="text-xs text-slate-500">
                  Masyarakat Desa Warung Menteng hidup rukun berdampingan dalam toleransi yang harmonis.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {DEMOGRAFI_DATA.pendudukBerdasarkanAgama.map((ag, idx) => (
                  <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-1">
                    <div className="text-xs font-bold text-slate-700">{ag.agama}</div>
                    <div className="text-2xl font-black text-slate-900">{ag.jumlah} <span className="text-xs font-normal text-slate-500">Jiwa</span></div>
                    <div className="text-xs font-bold text-emerald-700">{ag.persen}%</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
