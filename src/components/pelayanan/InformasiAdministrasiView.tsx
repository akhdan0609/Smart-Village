import React from 'react';
import { 
  Building, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  HelpCircle, 
  ArrowRight,
  Phone,
  Mail,
  UserCheck
} from 'lucide-react';
import { PageRoute } from '../../types';

interface InformasiAdministrasiProps {
  onNavigate: (page: PageRoute) => void;
}

export const InformasiAdministrasiView: React.FC<InformasiAdministrasiProps> = ({ onNavigate }) => {
  const alurLangkah = [
    {
      step: '1',
      title: 'Persiapkan Berkas Persyaratan',
      desc: 'Siapkan KTP, KK, dan surat pengantar dari RT/RW setempat sesuai jenis surat yang diajukan.'
    },
    {
      step: '2',
      title: 'Ajukan Mandiri Online / Loket',
      desc: 'Isi formulir pada menu Pengajuan Surat Online di website ini atau datang ke ruang PTSP Balai Desa.'
    },
    {
      step: '3',
      title: 'Verifikasi & Validasi Petugas',
      desc: 'Kasi Pemerintahan / Pelayanan memeriksa keabsahan data NIK dan kelengkapan dokumen pengantar.'
    },
    {
      step: '4',
      title: 'Penerbitan & Tanda Tangan',
      desc: 'Surat dicetak resmi dan ditandatangani Kepala Desa beserta stempel basah desa.'
    },
    {
      step: '5',
      title: 'Pengambilan Dokumen / Notifikasi',
      desc: 'Warga mendapat notifikasi WhatsApp dan dapat mengambil berkas fisik di Balai Desa atau mengunduh tanda terima.'
    }
  ];

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="bg-emerald-500/30 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-400/30">
              Standar Pelayanan Publik (SOP)
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif]">
              Informasi Administrasi & Pelayanan Desa
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Pelayanan administrasi kependudukan dan persuratan di Desa Warung Menteng cepat, transparan, dan <strong>bebas biaya (Rp 0,- / Gratis)</strong>.
            </p>
          </div>
        </div>

        {/* 3 Kartu Komitmen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900">Bebas Pungutan Liar (Gratis)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Seluruh pelayanan persuratan pengantar desa tidak dipungut biaya apapun sesuai peraturan perundang-undangan.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900">Standar Waktu 1x24 Jam</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pengajuan surat online yang berkasnya lengkap akan diproses dan diterbitkan maksimal dalam 1 hari kerja.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900">Pelayanan Ramah & Berintegritas</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Petugas loket siap melayani warga lanjut usia atau disabilitas dengan pendampingan khusus.
            </p>
          </div>
        </div>

        {/* Alur Pelayanan 5 Langkah */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-['Playfair_Display',serif]">
            Alur Pelayanan Administrasi Persuratan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-2">
            {alurLangkah.map((item, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2 relative">
                <div className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                  {item.step}
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">{item.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('pelayanan-pengajuan')}
              className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-sm"
            >
              <span>Mulai Pengajuan Surat Online</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('pelayanan-persyaratan')}
              className="px-5 py-3 bg-white hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-bold border border-slate-200 transition"
            >
              Lihat Syarat Dokumen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
