import React, { useState } from 'react';
import {
  Users,
  ShieldCheck,
  Leaf,
  MapPin,
  Phone,
  Clock,
  Mail,
  ArrowRight,
  GraduationCap,
  Building2
} from 'lucide-react';
import { PERANGKAT_DESA_LIST } from '../../data/mockData';
import { PerangkatDesa } from '../../types';
import heroKantorImg from '../../assets/images/pelayanan_hero_kantor_desa_1788325727506.jpg';
import heroPanoramaImg from '../../assets/images/profil_hero_panorama_1789112047188.jpg';

interface StrukturCardProps {
  person: PerangkatDesa;
  highlight?: boolean;
}

const StrukturCard: React.FC<StrukturCardProps> = ({ person, highlight }) => (
  <div
    className={`w-full max-w-[240px] mx-auto rounded-2xl border p-4 text-center transition duration-200 ${
      highlight
        ? 'bg-gradient-to-b from-emerald-700 to-emerald-900 text-white border-emerald-800 shadow-lg'
        : 'bg-gradient-to-b from-emerald-50 to-white text-slate-900 border-emerald-200 shadow-sm'
    }`}
  >
    <img
      src={person.fotoUrl}
      alt={person.nama}
      className={`w-16 h-20 rounded-xl object-cover object-top mx-auto border-2 shadow-sm ${
        highlight ? 'border-white/40' : 'border-emerald-500/40'
      }`}
    />
    <h3 className={`text-sm font-extrabold leading-snug mt-3 ${highlight ? 'text-white' : 'text-slate-900'}`}>
      {person.nama}
    </h3>
    <span className={`block text-[10px] uppercase tracking-wide font-bold mt-1 ${highlight ? 'text-emerald-100' : 'text-emerald-700'}`}>
      {person.jabatan}
    </span>
  </div>
);

interface StumpRowProps {
  cols: number;
}

const StumpRow: React.FC<StumpRowProps> = ({ cols }) => (
  <div
    className="hidden sm:grid grid-cols-2 sm:grid-cols-5"
    style={cols === 2 ? { gridTemplateColumns: 'repeat(2, 1fr)' } : cols === 3 ? { gridTemplateColumns: 'repeat(3, 1fr)' } : cols === 1 ? { gridTemplateColumns: '1fr' } : undefined}
  >
    {Array.from({ length: cols }).map((_, i) => (
      <div key={i} className="mx-auto w-px h-8 bg-emerald-300/70" />
    ))}
  </div>
);

interface BarRowProps {
  cols: number;
}

const BarRow: React.FC<BarRowProps> = ({ cols }) => (
  <div className="relative hidden sm:block h-px">
    <div className="absolute top-0 h-px bg-emerald-300/70" style={{ left: `calc(100% / ${cols * 2})`, right: `calc(100% / ${cols * 2})` }} />
  </div>
);

export const PemerintahanDesaView: React.FC = () => {
  const [showAllPerangkat, setShowAllPerangkat] = useState(false);
  const [activeModalPerson, setActiveModalPerson] = useState<PerangkatDesa | null>(null);

  const findPerson = (id: string): PerangkatDesa => PERANGKAT_DESA_LIST.find(p => p.id === id)!;

  const kades = findPerson('kades-1');
  const level2Persons = ['sekdes-1', 'kaur-keu-1'].map(findPerson);
  const level3Persons = ['kasi-pem-1', 'kasi-kesejahteraan-1', 'kasi-pelayanan-1', 'kaur-rencana-1', 'kaur-umum-1'].map(findPerson);
  const level4Persons = ['kadus-1', 'kadus-2', 'kadus-3'].map(findPerson);

  const perangkatGridList = showAllPerangkat
    ? PERANGKAT_DESA_LIST
    : PERANGKAT_DESA_LIST.filter(p => p.kategori !== 'BPD' && p.kategori !== 'LPMD');

  const scrollToPerangkat = () => {
    document.getElementById('profil-perangkat')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const fiturUnggulan = [
    { icon: Users, label: 'Pelayanan', sub: 'Cepat & Profesional' },
    { icon: ShieldCheck, label: 'Transparansi', sub: 'Transparan & Akuntabel' },
    { icon: Leaf, label: 'Bersama Membangun', sub: 'Desa yang Lebih Baik' }
  ];

  const infoKontak = [
    { icon: MapPin, label: 'Alamat Kantor', value: 'Jl. Raya Warung Menteng No. 01, Kec. Cijeruk, Kab. Bogor' },
    { icon: Phone, label: 'Kontak / Telepon', value: '0813-2211-9988 (Kantor) • 0812-8877-6611 (Mobile)' },
    { icon: Clock, label: 'Jam Pelayanan', value: 'Senin – Jumat, 08.00 – 16.00 WIB' },
    { icon: Mail, label: 'Email Resmi', value: 'desa@warungmenteng.desa.id' }
  ];

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">

        {/* Banner Utama / Hero Section */}
        <section className="relative rounded-3xl overflow-hidden shadow-md text-white">
          <img src={heroKantorImg} alt="Kantor Desa Warung Menteng" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-teal-900/90 to-emerald-900/70" />

          <div className="relative z-10 p-8 sm:p-12 space-y-6">
            <span className="inline-block bg-emerald-500/30 text-emerald-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-400/30">
              Tata Kelola Pemerintahan
            </span>

            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif]">
              Mengenal Pemerintahan Desa Warung Menteng
            </h1>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-3xl">
              Mewujudkan pemerintahan desa yang transparan, akuntabel, dan partisipatif dalam melayani masyarakat serta membangun Desa Warung Menteng yang maju dan sejahtera.
            </p>

            {/* Tiga Fitur Unggulan */}
            <div className="flex flex-wrap gap-3 pt-2">
              {fiturUnggulan.map(f => (
                <div key={f.label} className="flex items-center gap-3 bg-white/10 border border-white/25 rounded-2xl px-4 py-3 backdrop-blur-sm">
                  <span className="w-10 h-10 rounded-xl bg-emerald-400/20 border border-emerald-300/30 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-emerald-300" />
                  </span>
                  <span>
                    <span className="block text-sm font-extrabold text-white">{f.label}</span>
                    <span className="block text-[11px] text-emerald-200">{f.sub}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bagian Struktur Organisasi */}
        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="space-y-2 max-w-xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                <Building2 className="w-3.5 h-3.5" />
                Struktur Organisasi
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Playfair_Display',serif]">
                Struktur Organisasi Pemerintahan Desa
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Bagan hierarki Pemerintah Desa Warung Menteng mulai dari Kepala Desa, Sekretariat, Kepala Seksi, hingga Kepala Dusun di setiap wilayah.
              </p>
            </div>
            <button
              onClick={scrollToPerangkat}
              className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition shadow-sm"
            >
              <span>Lihat Detail Tugas & Fungsi</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Bagan Hierarki */}
          <div className="mt-10 space-y-0">
            {/* Level 1: Kepala Desa */}
            <div className="flex justify-center">
              <StrukturCard person={kades} highlight />
            </div>
            <StumpRow cols={1} />
            <BarRow cols={2} />

            {/* Level 2: Sekretariat */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {level2Persons.map(p => <StrukturCard key={p.id} person={p} />)}
            </div>
            <StumpRow cols={2} />
            <BarRow cols={5} />

            {/* Level 3: Kepala Seksi */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
              {level3Persons.map(p => <StrukturCard key={p.id} person={p} />)}
            </div>
            <StumpRow cols={5} />
            <BarRow cols={3} />

            {/* Level 4: Kepala Dusun */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              {level4Persons.map(p => <StrukturCard key={p.id} person={p} />)}
            </div>
          </div>
        </section>

        {/* Bagian Profil Perangkat Desa */}
        <section id="profil-perangkat" className="scroll-mt-24 space-y-6">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div className="space-y-2 max-w-xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                <Users className="w-3.5 h-3.5" />
                Profil Perangkat
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Playfair_Display',serif]">
                Profil Perangkat Desa
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Mengenal lebih dekat Kepala Desa, Sekretariat, Kepala Seksi, hingga Kepala Dusun yang bertugas melayani masyarakat.
              </p>
            </div>
            <button
              onClick={() => { setShowAllPerangkat(true); scrollToPerangkat(); }}
              className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded-xl text-xs font-bold transition shadow-sm"
            >
              <span>Lihat Semua Perangkat</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {perangkatGridList.map(person => (
              <div
                key={person.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 sm:h-56 bg-gradient-to-b from-emerald-50 to-slate-100 overflow-hidden">
                    <img
                      src={person.fotoUrl}
                      alt={person.nama}
                      className="w-full h-full object-cover object-top"
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

                    <div className="pt-1 text-xs text-slate-500 space-y-1">
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
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => setActiveModalPerson(person)}
                    className="w-full py-2 bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5"
                  >
                    <span>Lihat Profil</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Banner Penutup */}
        <section className="relative rounded-3xl overflow-hidden shadow-md text-white">
          <img src={heroPanoramaImg} alt="Pemandangan Desa Warung Menteng" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 to-teal-900/85" />
          <div className="relative z-10 p-10 sm:p-14 text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Playfair_Display',serif]">
              Bersama Warga Membangun Desa
            </h2>
            <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Pemerintah Desa Warung Menteng berkomitmen melayani, membangun, dan memberdayakan masyarakat secara gotong royong.
            </p>
          </div>
        </section>

        {/* Kotak Informasi Kontak Pemerintahan Desa */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {infoKontak.map(item => (
            <div key={item.label} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <span className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-3">
                <item.icon className="w-5 h-5 text-emerald-700" />
              </span>
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1">
                {item.label}
              </h4>
              <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                {item.value}
              </p>
            </div>
          ))}
        </section>

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