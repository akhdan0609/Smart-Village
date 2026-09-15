import React from 'react';
import { 
  Users, 
  UserCheck, 
  GraduationCap, 
  Mail, 
  Award, 
  Phone, 
  MapPin, 
  Layers,
  Sparkles
} from 'lucide-react';

interface AnggotaTim {
  nama: string;
  peran: string;
  divisi: 'BPH' | 'ACARA' | 'HUMAS' | 'MEDIA';
  prodi?: string;
  tugas?: string;
  fotoUrl: string;
}

export const KKNStrukturalView: React.FC = () => {
  const pembinaDPL = [
    {
      nama: 'Dr. Muhammad Afifi, M.H.',
      peran: 'Dosen Pembimbing Lapangan (DPL)',
      instansi: 'Universitas Nahdlatul Ulama Indonesia (UNUSIA)',
      fotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    {
      nama: 'H. Mulyadi, S.AP.',
      peran: 'Kepala Desa & Penasihat Lapangan',
      instansi: 'Pemerintah Desa Warung Menteng',
      fotoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const strukturBPH: AnggotaTim[] = [
    {
      nama: 'Fajri Maulana',
      peran: 'Ketua',
      divisi: 'BPH',
      prodi: 'Ilmu Hukum (UNUSIA)',
      tugas: 'Memimpin dengan tanggung jawab, bergerak dengan tujuan, menginspirasi untuk kebaikan bersama.',
      fotoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80'
    },
    {
      nama: 'Ayu Rahmadini',
      peran: 'Wakil Ketua',
      divisi: 'BPH',
      prodi: 'Sejarah Peradaban Islam (UNUSIA)',
      tugas: 'Bersama bukan hanya tentang berdiri di samping, tapi berjalan searah menuju perubahan yang bermakna.',
      fotoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    },
    {
      nama: 'Akhdan Fadhil Santoso',
      peran: 'Secretaries Umum',
      divisi: 'BPH',
      prodi: 'Teknik Informatika (UNUSIA)',
      tugas: 'Mencatat bukan sekadar tulisan, tapi setiap langkah menuju organisasi yang terarah dan teratur.',
      fotoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
    },
    {
      nama: 'Safitri Naufal',
      peran: 'Wakil Secretaries',
      divisi: 'BPH',
      prodi: 'Sejarah Peradaban Islam (UNUSIA)',
      tugas: 'Terorganisir, terkomunikasi, terdokumentasi untuk mewujudkan tujuan bersama.',
      fotoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
    },
    {
      nama: 'Arjuna',
      peran: 'Bendahara Umum',
      divisi: 'BPH',
      prodi: 'Sistem Informasi (UNUSIA)',
      tugas: 'Mengelola bukan sekadar angka, tapi tentang amanah, kejujuran, dan tanggung jawab.',
      fotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    {
      nama: 'Difina Agusti Rahmawati',
      peran: 'Wakil Bendahara',
      divisi: 'BPH',
      prodi: 'Ilmu Hukum (UNUSIA)',
      tugas: 'Mendukung dengan teliti, membantu dengan hati, menjalankan amanah sepenuh arti.',
      fotoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const strukturAcara: AnggotaTim[] = [
    {
      nama: 'Munhamir Nadzir',
      peran: 'Koordinator Acara',
      divisi: 'ACARA',
      prodi: 'Teknik Informatika (UNUSIA)',
      tugas: 'Mengatur jalannya acara dengan rapi, tertib, dan penuh tanggung jawab.',
      fotoUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80'
    },
    {
      nama: 'Devran Azzahra',
      peran: 'Anggota Acara',
      divisi: 'ACARA',
      prodi: 'Teknik Informatika (UNUSIA)',
      tugas: 'Kolaborasi yang solid menghasilkan acara yang luar biasa.',
      fotoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
    },
    {
      nama: 'Andika Febriansyah',
      peran: 'Anggota Acara',
      divisi: 'ACARA',
      prodi: 'Sejarah Peradaban Islam (UNUSIA)',
      tugas: 'Menyampaikan gagasan, beraksi bersama untuk kesuksesan setiap program.',
      fotoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
    },
    {
      nama: 'RISNA',
      peran: 'Anggota Acara',
      divisi: 'ACARA',
      prodi: 'Sejarah Peradaban Islam (UNUSIA)',
      tugas: 'Setiap acara bermakna, setiap momen berharga, setiap kerja berbuah cerita.',
      fotoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80'
    },
    {
      nama: 'Achmad Pahlevi Ramadhan',
      peran: 'Anggota Acara',
      divisi: 'ACARA',
      prodi: 'Ilmu Hukum (UNUSIA)',
      tugas: 'Perencanaan matang, pelaksanaan hebat, hasil penuh manfaat.',
      fotoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    },
    {
      nama: 'Ikmal Nur Awaludin',
      peran: 'Anggota Acara',
      divisi: 'ACARA',
      prodi: 'Teknik Informatika (UNUSIA)',
      tugas: 'Detail kecil adalah kunci keberhasilan acara yang besar.',
      fotoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
    },
    {
      nama: 'Caisar Fayth Isyadirda',
      peran: 'Anggota Acara',
      divisi: 'ACARA',
      prodi: 'Sejarah Peradaban Islam (UNUSIA)',
      tugas: 'Saling bekerja sama dan penuh semangat untuk setiap acara yang berkesan.',
      fotoUrl: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const strukturHumas: AnggotaTim[] = [
    {
      nama: 'Muhammad Arifin Fadhillah',
      peran: 'Koordinator HUMAS',
      divisi: 'HUMAS',
      prodi: 'Ilmu Hukum (UNUSIA)',
      tugas: 'Humas bukan sekadar bicara, tapi tentang membangun citra dan kepercayaan bersama.',
      fotoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
    },
    {
      nama: 'Muhammad Ramadhan Giri Wardana',
      peran: 'Anggota HUMAS',
      divisi: 'HUMAS',
      prodi: 'Ilmu Hukum (UNUSIA)',
      tugas: 'Komunikasi yang baik adalah kunci membangun hubungan yang kuat dan kepercayaan yang tulus.',
      fotoUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80'
    },
    {
      nama: 'Siti Khoiroh',
      peran: 'Anggota HUMAS',
      divisi: 'HUMAS',
      prodi: 'Sejarah Peradaban Islam (UNUSIA)',
      tugas: 'Kreatif dalam ide, komunikatif dalam aksi, berdampak untuk negeri.',
      fotoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    {
      nama: 'Try Mauna',
      peran: 'Anggota HUMAS',
      divisi: 'HUMAS',
      prodi: 'Sejarah Peradaban Islam (UNUSIA)',
      tugas: 'Membangun koneksi, mempererat sinergi, dan mengabdi dengan sepenuh hati.',
      fotoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const strukturMedia: AnggotaTim[] = [
    {
      nama: 'Qomarudin Tokan',
      peran: 'Koordinator MEDIA',
      divisi: 'MEDIA',
      prodi: 'Teknik Informatika (UNUSIA)',
      tugas: 'Dokumentasi hari ini, menjadi cerita berharga untuk masa depan.',
      fotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    {
      nama: 'Akhsan efriel wanda yuda pratama',
      peran: 'Anggota MEDIA',
      divisi: 'MEDIA',
      prodi: 'Teknik Informatika (UNUSIA)',
      tugas: 'Menyampaikan informasi dengan kreatif, mendokumentasikan momen dengan penuh makna.',
      fotoUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80'
    },
    {
      nama: 'Aisyah al atas',
      peran: 'Anggota MEDIA',
      divisi: 'MEDIA',
      prodi: 'Ilmu Hukum (UNUSIA)',
      tugas: 'Kreativitas dalam setiap karya, informasi dalam setiap langkah.',
      fotoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <Users className="w-4 h-4 text-amber-300" />
              <span>Struktur Organisasi & Tim Pengabdian</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Struktural Tim KKN Mahasiswa
            </h1>
            
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Susunan organisasi mahasiswa Kuliah Kerja Nyata (KKN) Tematik di Desa Warung Menteng, di bawah bimbingan DPL dan pengawasan Pemerintah Desa.
            </p>
          </div>
        </div>

        {/* Pembimbing & Penasihat Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-700" />
            <span>Pembimbing & Penasihat Lapangan</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pembinaDPL.map((p, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex items-center gap-5">
                <img
                  src={p.fotoUrl}
                  alt={p.nama}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-600 shadow-xs"
                />
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
                    {p.peran}
                  </span>
                  <h4 className="font-extrabold text-slate-900 text-base">{p.nama}</h4>
                  <p className="text-xs text-slate-500">{p.instansi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Susunan Organisasi per Divisi */}
        <div className="space-y-8 pt-4">
          <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-emerald-700" />
            <span>Struktur Mahasiswa KKN Kelompok Wigata Dharma</span>
          </h3>

          {/* Section BPH */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-extrabold text-slate-800 uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <span>Badan Pengurus Harian (BPH)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strukturBPH.map((mhs, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={mhs.fotoUrl}
                        alt={mhs.nama}
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-100 group-hover:border-emerald-600 transition shadow-xs"
                      />
                      <div>
                        <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-md inline-block mb-1">
                          {mhs.peran}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm group-hover:text-emerald-800 transition">
                          {mhs.nama}
                        </h4>
                        <p className="text-xs text-slate-500">{mhs.prodi}</p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-2xl border border-slate-100">
                      {mhs.tugas}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Divisi BPH</span>
                    <span className="font-semibold text-emerald-700">Wigata Dharma</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section ACARA */}
          <div className="space-y-3 pt-4">
            <div className="flex items-center gap-2 text-sm font-extrabold text-slate-800 uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span>Divisi Acara</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strukturAcara.map((mhs, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={mhs.fotoUrl}
                        alt={mhs.nama}
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-100 group-hover:border-blue-600 transition shadow-xs"
                      />
                      <div>
                        <span className="text-[10px] font-extrabold text-blue-800 bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded-md inline-block mb-1">
                          {mhs.peran}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-800 transition">
                          {mhs.nama}
                        </h4>
                        <p className="text-xs text-slate-500">{mhs.prodi}</p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-2xl border border-slate-100">
                      {mhs.tugas}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Divisi Acara</span>
                    <span className="font-semibold text-blue-700">Wigata Dharma</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section HUMAS */}
          <div className="space-y-3 pt-4">
            <div className="flex items-center gap-2 text-sm font-extrabold text-slate-800 uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
              <span>Divisi Humas</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strukturHumas.map((mhs, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={mhs.fotoUrl}
                        alt={mhs.nama}
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-100 group-hover:border-amber-600 transition shadow-xs"
                      />
                      <div>
                        <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-md inline-block mb-1">
                          {mhs.peran}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm group-hover:text-amber-800 transition">
                          {mhs.nama}
                        </h4>
                        <p className="text-xs text-slate-500">{mhs.prodi}</p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-2xl border border-slate-100">
                      {mhs.tugas}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Divisi Humas</span>
                    <span className="font-semibold text-amber-700">Wigata Dharma</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section MEDIA */}
          <div className="space-y-3 pt-4">
            <div className="flex items-center gap-2 text-sm font-extrabold text-slate-800 uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
              <span>Divisi Media</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strukturMedia.map((mhs, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={mhs.fotoUrl}
                        alt={mhs.nama}
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-100 group-hover:border-purple-600 transition shadow-xs"
                      />
                      <div>
                        <span className="text-[10px] font-extrabold text-purple-800 bg-purple-50 border border-purple-200/60 px-2 py-0.5 rounded-md inline-block mb-1">
                          {mhs.peran}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm group-hover:text-purple-800 transition">
                          {mhs.nama}
                        </h4>
                        <p className="text-xs text-slate-500">{mhs.prodi}</p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-2xl border border-slate-100">
                      {mhs.tugas}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Divisi Media</span>
                    <span className="font-semibold text-purple-700">Wigata Dharma</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Posko Dusun Info */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-700" />
            <span>Titik Posko & Narahubung KKN</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Posko Induk (Balai Desa)</span>
              <p className="text-slate-600">Jl. KH. Halimi No. 01, Balai Desa Warung Menteng, Cijeruk</p>
              <p className="text-emerald-800 font-semibold pt-1">Telp/WA: 0812-3456-7890</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Posko Dusun II (Menteng Pasir)</span>
              <p className="text-slate-600">Rumah Warga Kp. Menteng Pasir RT 02/02</p>
              <p className="text-emerald-800 font-semibold pt-1">Fokus: UMKM & Pertanian</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Posko Dusun III (Menteng Girang)</span>
              <p className="text-slate-600">Kp. Menteng Girang RT 01/03</p>
              <p className="text-emerald-800 font-semibold pt-1">Fokus: Pendidikan & Budaya</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
