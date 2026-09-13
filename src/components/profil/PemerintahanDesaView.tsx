import React, { useState } from 'react';
import { Users, Building, ShieldCheck, Phone, BookOpen, GraduationCap, ArrowRight } from 'lucide-react';
import { PERANGKAT_DESA_LIST } from '../../data/mockData';
import { PerangkatDesa } from '../../types';

export const PemerintahanDesaView: React.FC = () => {
  const [selectedKategori, setSelectedKategori] = useState<string>('Semua');
  const [activeModalPerson, setActiveModalPerson] = useState<PerangkatDesa | null>(null);

  const kategoriTabs = ['Semua', 'Pemerintah Desa', 'Kadus', 'BPD', 'LPMD'];

  const filteredList = selectedKategori === 'Semua' 
    ? PERANGKAT_DESA_LIST 
    : PERANGKAT_DESA_LIST.filter(p => p.kategori === selectedKategori);

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="bg-emerald-500/30 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-400/30">
              Tata Kelola Pemerintahan
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif]">
              Pemerintahan Desa Warung Menteng
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Susunan organisasi Pemerintah Desa, Badan Permusyawaratan Desa (BPD), Lembaga Pemberdayaan Masyarakat Desa (LPMD), serta Kepala Dusun yang bertugas melayani masyarakat dengan integritas dan dedikasi.
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
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab === 'Semua' ? 'Semua Aparatur & Lembaga' : tab}
            </button>
          ))}
        </div>

        {/* Grid Kartu Perangkat Desa */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredList.map(person => (
            <div
              key={person.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="h-56 bg-slate-100 overflow-hidden relative">
                  <img
                    src={person.fotoUrl}
                    alt={person.nama}
                    className="w-full h-full object-cover object-top hover:scale-105 transition duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-emerald-800/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
                    {person.kategori}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-xs font-bold text-emerald-700 block uppercase tracking-wide">
                    {person.jabatan}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                    {person.nama}
                  </h3>

                  <div className="pt-2 text-xs text-slate-500 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{person.pendidikan}</span>
                    </div>
                    {person.kontak && (
                      <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                        <Phone className="w-3.5 h-3.5 shrink-0" />
                        <span>{person.kontak}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 mt-3 pt-3 border-t border-slate-100 leading-relaxed">
                    <strong>Tupoksi:</strong> {person.tupoksi}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => setActiveModalPerson(person)}
                  className="w-full py-2 bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5"
                >
                  <span>Detail Tugas & Wewenang</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail Tupoksi */}
        {activeModalPerson && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 animate-in fade-in zoom-in-95 duration-150 relative">
              <div className="flex items-start gap-4">
                <img
                  src={activeModalPerson.fotoUrl}
                  alt={activeModalPerson.nama}
                  className="w-20 h-24 rounded-2xl object-cover object-top border-2 border-emerald-500 shadow shrink-0"
                />
                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase bg-emerald-50 px-2 py-0.5 rounded">
                    {activeModalPerson.jabatan}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 mt-1">
                    {activeModalPerson.nama}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{activeModalPerson.kategori}</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="font-bold text-slate-800 block mb-1">Pendidikan Terakhir:</span>
                  <span>{activeModalPerson.pendidikan}</span>
                </div>
                <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100">
                  <span className="font-bold text-emerald-900 block mb-1">Tugas Pokok & Fungsi (Tupoksi):</span>
                  <p className="leading-relaxed text-slate-700">{activeModalPerson.tupoksi}</p>
                </div>
              </div>

              <button
                onClick={() => setActiveModalPerson(null)}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition"
              >
                Tutup Jendela
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
