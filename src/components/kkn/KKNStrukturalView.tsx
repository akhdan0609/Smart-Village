import React from 'react';
import { 
  Users, 
  Network,
  ArrowRight
} from 'lucide-react';
import type { PageRoute } from '../../types';

export interface AnggotaTim {
  nama: string;
  peran: string;
  divisi: 'BPH' | 'ACARA' | 'HUMAS' | 'MEDIA';
  prodi?: string;
  tugas?: string;
  fotoUrl: string;
}

export const pembinaDPL = [
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

  export const strukturBPH: AnggotaTim[] = [
    {
      nama: 'Fajry Maulana',
      peran: 'Ketua',
      divisi: 'BPH',
      prodi: 'Ilmu Hukum (UNUSIA)',
      tugas: 'Memimpin dengan tanggung jawab, bergerak dengan tujuan, menginspirasi untuk kebaikan bersama.',
      fotoUrl: 'avatarFajry'
    },
    {
      nama: 'Ayu Rahmadini',
      peran: 'Wakil Ketua',
      divisi: 'BPH',
      prodi: 'Sejarah Peradaban Islam (UNUSIA)',
      tugas: 'Bersama bukan hanya tentang berdiri di samping, tapi berjalan searah menuju perubahan yang bermakna.',
      fotoUrl: 'avatarAyu'
    },
    {
      nama: 'Akhdan Fadhil Santoso',
      peran: 'Secretaries Umum',
      divisi: 'BPH',
      prodi: 'Teknik Informatika (UNUSIA)',
      tugas: 'Mencatat bukan sekadar tulisan, tapi setiap langkah menuju organisasi yang terarah dan teratur.',
      fotoUrl: 'avatarAkhdan'
    },
    {
      nama: 'Safitri Naufal',
      peran: 'Wakil Secretaries',
      divisi: 'BPH',
      prodi: 'Sejarah Peradaban Islam (UNUSIA)',
      tugas: 'Terorganisir, terkomunikasi, terdokumentasi untuk mewujudkan tujuan bersama.',
      fotoUrl: 'avatarSafitri'
    },
    {
      nama: 'Arjuna',
      peran: 'Bendahara Umum',
      divisi: 'BPH',
      prodi: 'Sistem Informasi (UNUSIA)',
      tugas: 'Mengelola bukan sekadar angka, tapi tentang amanah, kejujuran, dan tanggung jawab.',
      fotoUrl: 'avatarArjuna'
    },
    {
      nama: 'Difina Agusti Rahmawati',
      peran: 'Wakil Bendahara',
      divisi: 'BPH',
      prodi: 'Ilmu Hukum (UNUSIA)',
      tugas: 'Mendukung dengan teliti, membantu dengan hati, menjalankan amanah sepenuh arti.',
      fotoUrl: 'avatarDifina'
    }
  ];

  export const strukturAcara: AnggotaTim[] = [
    {
      nama: 'Munhamir Nadzir',
      peran: 'Koordinator Acara',
      divisi: 'ACARA',
      prodi: 'Teknik Informatika (UNUSIA)',
      tugas: 'Mengatur jalannya acara dengan rapi, tertib, dan penuh tanggung jawab.',
      fotoUrl: 'avatarMunhamir'
    },
    {
      nama: 'Devran Azzahra',
      peran: 'Anggota Acara',
      divisi: 'ACARA',
      prodi: 'Teknik Informatika (UNUSIA)',
      tugas: 'Kolaborasi yang solid menghasilkan acara yang luar biasa.',
      fotoUrl: 'avatarDefran'
    },
    {
      nama: 'Andika Febriansyah',
      peran: 'Anggota Acara',
      divisi: 'ACARA',
      prodi: 'Sejarah Peradaban Islam (UNUSIA)',
      tugas: 'Menyampaikan gagasan, beraksi bersama untuk kesuksesan setiap program.',
      fotoUrl: 'avatarAndika'
    },
    {
      nama: 'RISNA',
      peran: 'Anggota Acara',
      divisi: 'ACARA',
      prodi: 'Sejarah Peradaban Islam (UNUSIA)',
      tugas: 'Setiap acara bermakna, setiap momen berharga, setiap kerja berbuah cerita.',
      fotoUrl: 'avatarRisna'
    },
    {
      nama: 'Achmad Pahlevi Ramadhan',
      peran: 'Anggota Acara',
      divisi: 'ACARA',
      prodi: 'Ilmu Hukum (UNUSIA)',
      tugas: 'Perencanaan matang, pelaksanaan hebat, hasil penuh manfaat.',
      fotoUrl: 'avatarPahlepi'
    },
    {
      nama: 'Ikmal Nur Awaludin',
      peran: 'Anggota Acara',
      divisi: 'ACARA',
      prodi: 'Teknik Informatika (UNUSIA)',
      tugas: 'Detail kecil adalah kunci keberhasilan acara yang besar.',
      fotoUrl: 'avatarIkmal'
    },
    {
      nama: 'Caisar Fayth Isyadirda',
      peran: 'Anggota Acara',
      divisi: 'ACARA',
      prodi: 'Sejarah Peradaban Islam (UNUSIA)',
      tugas: 'Saling bekerja sama dan penuh semangat untuk setiap acara yang berkesan.',
      fotoUrl: 'avatarCeisar'
    }
  ];

  export const strukturHumas: AnggotaTim[] = [
    {
      nama: 'Muhammad Ramadhan Giri Wardana',
      peran: 'Koordinator HUMAS',
      divisi: 'HUMAS',
      prodi: 'Ilmu Hukum (UNUSIA)',
      tugas: 'Komunikasi yang baik adalah kunci membangun hubungan yang kuat dan kepercayaan yang tulus.',
      fotoUrl: 'avatarGiry'
    },
    {
      nama: 'Muhammad Arifin Fadhillah',
      peran: 'Anggota HUMAS',
      divisi: 'HUMAS',
      prodi: 'Ilmu Hukum (UNUSIA)',
      tugas: 'Humas bukan sekadar bicara, tapi tentang membangun citra dan kepercayaan bersama.',
      fotoUrl: 'avatarArifin'
    },
    {
      nama: 'Siti Khoiroh',
      peran: 'Anggota HUMAS',
      divisi: 'HUMAS',
      prodi: 'Sejarah Peradaban Islam (UNUSIA)',
      tugas: 'Kreatif dalam ide, komunikatif dalam aksi, berdampak untuk negeri.',
      fotoUrl: 'avatarIyoh'
    },
    {
      nama: 'Try Mauna',
      peran: 'Anggota HUMAS',
      divisi: 'HUMAS',
      prodi: 'Sejarah Peradaban Islam (UNUSIA)',
      tugas: 'Membangun koneksi, mempererat sinergi, dan mengabdi dengan sepenuh hati.',
      fotoUrl: 'avatarNana'
    }
  ];

  export const strukturMedia: AnggotaTim[] = [
    {
      nama: 'Qomarudin Tokan',
      peran: 'Koordinator MEDIA',
      divisi: 'MEDIA',
      prodi: 'Teknik Informatika (UNUSIA)',
      tugas: 'Dokumentasi hari ini, menjadi cerita berharga untuk masa depan.',
      fotoUrl: 'avatarQomar'
    },
    {
      nama: 'Akhsan efriel wanda yuda pratama',
      peran: 'Anggota MEDIA',
      divisi: 'MEDIA',
      prodi: 'Teknik Informatika (UNUSIA)',
      tugas: 'Menyampaikan informasi dengan kreatif, mendokumentasikan momen dengan penuh makna.',
      fotoUrl: 'avatarYudha'
    },
    {
      nama: 'Aisyah al atas',
      peran: 'Anggota MEDIA',
      divisi: 'MEDIA',
      prodi: 'Ilmu Hukum (UNUSIA)',
      tugas: 'Kreativitas dalam setiap karya, informasi dalam setiap langkah.',
      fotoUrl: 'avatarAisyah'
    }
  ];

interface KKNStrukturalViewProps {
  onNavigate?: (page: PageRoute) => void;
}

export const KKNStrukturalView: React.FC<KKNStrukturalViewProps> = ({ onNavigate }) => {

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

        {/* ============ BAGAN STRUKTUR ORGANISASI ============ */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 flex items-center gap-2">
            <Network className="w-5 h-5 text-emerald-700" />
            <span>Bagan Struktur Organisasi KKN Wigata Dharma</span>
          </h3>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto pb-4">
              <div className="min-w-[860px] max-w-4xl mx-auto flex flex-col items-center">

                {/* ===== LEVEL 1: DOSEN PEMBIMBING ===== */}
                <div className="flex justify-center">
                  {pembinaDPL.filter((p) => p.peran.includes('Dosen Pembimbing')).map((p, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="bg-gradient-to-b from-emerald-800/5 to-white rounded-2xl border-2 border-emerald-700/30 p-3 sm:p-4 shadow-xs w-56 sm:w-64 mx-auto">
                        <div className="flex flex-col items-center gap-2">
                          <img
                            src={p.fotoUrl}
                            alt={p.nama}
                            className="w-14 h-14 rounded-full object-cover border-2 border-emerald-600 shadow-xs"
                          />
                          <div className="space-y-0.5">
                            <span className="block text-[10px] font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200/70 px-2 py-0.5 rounded-full">
                              {p.peran}
                            </span>
                            <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug">{p.nama}</h4>
                            <p className="text-[10px] text-slate-500 leading-tight">{p.instansi}</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-0.5 h-5 bg-emerald-600/50" />
                    </div>
                  ))}
                </div>

                {/* Bus Level 1 -> 2 */}
                <div className="w-full h-0.5 bg-emerald-600/50 rounded-full" />

                {/* ===== LEVEL 2: KETUA & WAKIL KETUA ===== */}
                <div className="flex justify-center gap-16 sm:gap-24">
                  {strukturBPH.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-0.5 h-5 bg-emerald-600/50" />
                      <div className="bg-white rounded-2xl border-2 border-emerald-800/40 p-3 sm:p-4 shadow-sm w-44 sm:w-52">
                        <img
                          src={m.fotoUrl}
                          alt={m.nama}
                          className="w-12 h-12 rounded-full object-cover border-2 border-emerald-600 mx-auto mb-1.5"
                        />
                        <span className="block text-[10px] font-extrabold text-emerald-900 bg-emerald-50 border border-emerald-200/70 px-2 py-0.5 rounded-full inline-block mx-auto">
                          {m.peran}
                        </span>
                        <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm mt-1 leading-snug">{m.nama}</h4>
                      </div>
                      <div className="w-0.5 h-5 bg-emerald-600/50" />
                    </div>
                  ))}
                </div>

                {/* Bus Level 2 -> 3 */}
                <div className="w-full h-0.5 bg-emerald-600/50 rounded-full" />

                {/* ===== LEVEL 3: BAGIAN PENGURUS HARIAN (BPH) ===== */}
                <div className="flex justify-center gap-12 sm:gap-16">
                  {strukturBPH.slice(2, 6).map((m, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-0.5 h-5 bg-emerald-600/50" />
                      <div className="bg-white rounded-2xl border-2 border-slate-300/80 p-3 sm:p-4 shadow-sm w-40 sm:w-48">
                        <span className="block text-[10px] font-extrabold text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-full inline-block mx-auto">
                          {m.peran}
                        </span>
                        <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm mt-1 leading-snug">{m.nama}</h4>
                        <p className="text-[10px] text-slate-400 mt-0.5">BPH</p>
                      </div>
                      <div className="w-0.5 h-5 bg-emerald-600/50" />
                    </div>
                  ))}
                </div>

                {/* Bus Level 3 -> 4 */}
                <div className="w-full h-0.5 bg-emerald-600/50 rounded-full" />

                {/* ===== LEVEL 4: DIVISI (klik untuk lihat bagan) ===== */}
                <div className="flex justify-center gap-6 sm:gap-10 flex-wrap">
                  {([
                    { label: 'Divisi Acara', route: 'kkn-bagan-acara' as PageRoute },
                    { label: 'Divisi Humas', route: 'kkn-bagan-humas' as PageRoute },
                    { label: 'Divisi Media', route: 'kkn-bagan-media' as PageRoute },
                  ]).map((d, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-0.5 h-5 bg-emerald-600/50" />
                      <button
                        onClick={() => onNavigate && onNavigate(d.route)}
                        className="group bg-white hover:bg-emerald-50 rounded-2xl border-2 border-emerald-700/40 p-4 shadow-sm w-44 sm:w-56 transition-all hover:border-emerald-600 hover:shadow-md cursor-pointer"
                      >
                        <span className="block text-center text-base sm:text-lg font-extrabold text-emerald-900 group-hover:text-emerald-700">
                          {d.label}
                        </span>
                        <span className="mt-1.5 flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-700 group-hover:text-emerald-600">
                          Lihat Bagan Organisasi
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </button>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            <p className="text-center text-[11px] text-slate-400 pt-2 border-t border-slate-100">
              Struktur kepengurusan KKN Kelompok Wigata Dharma &mdash; Universitas Nahdlatul Ulama Indonesia (UNUSIA) 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
