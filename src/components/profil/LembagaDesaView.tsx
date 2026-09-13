import React, { useState } from 'react';
import { 
  Users, 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  Phone, 
  CheckCircle2, 
  Search,
  Building2,
  Award
} from 'lucide-react';
import { LEMBAGA_DESA_LIST } from '../../data/mockData';

export const LembagaDesaView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLembaga, setSelectedLembaga] = useState<string>('all');

  const filteredList = LEMBAGA_DESA_LIST.filter(item => {
    const matchSearch = item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.singkatan.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.ketua.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.deskripsi.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = selectedLembaga === 'all' || item.id === selectedLembaga;
    return matchSearch && matchCat;
  });

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="bg-emerald-500/30 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-400/30">
              Mitra & Kelembagaan Desa
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-['Playfair_Display',serif]">
              Lembaga Kemasyarakatan Desa Warung Menteng
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Sinergi kelembagaan desa (BPD, LPMD, PKK, Karang Taruna, Linmas, dan Pokdarwis) dalam mewujudkan pembangunan partisipatif, kesejahteraan sosial, dan ketenteraman masyarakat.
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari lembaga, ketua, atau program..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedLembaga('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                selectedLembaga === 'all'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Semua Lembaga ({LEMBAGA_DESA_LIST.length})
            </button>
            {LEMBAGA_DESA_LIST.map(lem => (
              <button
                key={lem.id}
                onClick={() => setSelectedLembaga(lem.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  selectedLembaga === lem.id
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {lem.singkatan}
              </button>
            ))}
          </div>
        </div>

        {/* Lembaga Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.map(item => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between group"
            >
              <div>
                {/* Image & Singkatan Badge */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={item.fotoUrl}
                    alt={item.nama}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 bg-emerald-600 text-white text-xs font-black px-3 py-1 rounded-lg shadow">
                    {item.singkatan}
                  </span>
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-slate-200 flex items-center gap-1">
                    <Users className="w-3 h-3 text-emerald-600" />
                    <span>{item.jumlahAnggota} Anggota</span>
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition font-['Playfair_Display',serif]">
                      {item.nama}
                    </h3>
                    <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                      Ketua: {item.ketua}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.deskripsi}
                  </p>

                  {/* Program Utama */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      <span>Fokus & Program Utama:</span>
                    </span>
                    <ul className="space-y-1.5">
                      {item.programUtama.map((prog, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{prog}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 px-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">Kontak Sekretariat:</span>
                <a
                  href={`https://wa.me/${item.kontak.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{item.kontak}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
