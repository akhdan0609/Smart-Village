import React, { useState } from 'react';
import { 
  Heart, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Clock, 
  Users
} from 'lucide-react';
import { saveSuratRequest } from '../../utils/storage';

export const LayananPernikahanView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'formulir-n1-n4' | 'belum-nikah' | 'sk-na'>('formulir-n1-n4');
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    namaCalonSuami: '',
    nikCalonSuami: '',
    tempatLahirSuami: '',
    tanggalLahirSuami: '',
    agamaSuami: 'Islam',
    pekerjaanSuami: '',
    alamatSuami: '',
    statusSuami: 'Jejaka (Belum Pernah Menikah)',
    // Calon Istri
    namaCalonIstri: '',
    nikCalonIstri: '',
    tempatLahirIstri: '',
    tanggalLahirIstri: '',
    agamaIstri: 'Islam',
    pekerjaanIstri: '',
    alamatIstri: '',
    statusIstri: 'Perawan (Belum Pernah Menikah)',
    // Rencana Akad
    tanggalAkad: '',
    lokasiAkad: 'KUA Kecamatan Cijeruk',
    masKawin: 'Emas Logam Mulia & Seperangkat Alat Sholat',
    namaWaliNikah: '',
    hubunganWali: 'Ayah Kandung',
    noWhatsapp: '',
    dusun: 'Dusun I - Cimenteng',
    rt: '01',
    rw: '01'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const jenisMap: Record<'formulir-n1-n4' | 'belum-nikah' | 'sk-na', { label: string; prefix: string }> = {
      'formulir-n1-n4': { label: 'Formulir N1, N2, N3, dan N4', prefix: 'NIKAH' },
      'belum-nikah': { label: 'Surat Keterangan Belum Pernah Menikah', prefix: 'SKBM' },
      'sk-na': { label: 'Surat Keterangan NA (Belum Menikah & Numpang Nikah)', prefix: 'SKNA' },
    };

    const jenis = jenisMap[activeTab];
    const jenisLabel = jenis.label;
    const prefix = jenis.prefix;

    const regCode = `${prefix}-${Date.now().toString().slice(-6)}`;

    const newDoc = {
      id: `nikah-${Date.now()}`,
      nomorRegistrasi: regCode,
      jenisSurat: jenisLabel,
      namaPemohon: `${formData.namaCalonSuami} & ${formData.namaCalonIstri}`,
      nik: formData.nikCalonSuami || formData.nikCalonIstri,
      noWhatsapp: formData.noWhatsapp,
      dusun: formData.dusun,
      rtRw: `RT ${formData.rt} / RW ${formData.rw}`,
      keperluan: `Layanan Pernikahan: ${jenisLabel} (Rencana Akad ${formData.tanggalAkad} di ${formData.lokasiAkad})`,
      status: 'diajukan' as const,
      tanggalPengajuan: new Date().toISOString().split('T')[0],
      estimasiSelesai: '1 Hari Kerja'
    };

    saveSuratRequest(newDoc);
    setSubmittedCode(regCode);
  };

  const renderSuratForm = () => (
    <>
      {submittedCode ? (
        <div className="bg-emerald-50 border border-emerald-300 rounded-3xl p-8 text-center space-y-4">
          <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-emerald-950">Pengajuan Surat Berhasil Diterima!</h3>
            <p className="text-xs text-emerald-800">
              Silakan catat kode registrasi surat Anda:
            </p>
          </div>

          <div className="bg-white border-2 border-dashed border-emerald-600 py-3 px-6 rounded-2xl inline-block">
            <span className="text-xs text-slate-500 block">Nomor Registrasi</span>
            <span className="text-2xl font-mono font-extrabold text-emerald-900 tracking-wider">
              {submittedCode}
            </span>
          </div>

          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Petugas Desa Warung Menteng akan menerbitkan surat yang diajukan lengkap dengan tanda tangan Kepala Desa.
          </p>

          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => setSubmittedCode(null)}
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition"
            >
              Ajukan Permohonan Baru
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Calon Suami */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 border-b border-slate-100 pb-1 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              <span>1. Biodata Calon Pengantin Pria (Suami)</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nama Lengkap Calon Suami *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Ahmad Maulana"
                  value={formData.namaCalonSuami}
                  onChange={e => setFormData({ ...formData, namaCalonSuami: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  NIK Calon Suami *
                </label>
                <input
                  type="text"
                  required
                  maxLength={16}
                  placeholder="16 Digit NIK"
                  value={formData.nikCalonSuami}
                  onChange={e => setFormData({ ...formData, nikCalonSuami: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Tempat & Tgl Lahir *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Bogor, 12 Mei 1998"
                  value={formData.tempatLahirSuami}
                  onChange={e => setFormData({ ...formData, tempatLahirSuami: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Pekerjaan Suami *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Wiraswasta / Karyawan"
                  value={formData.pekerjaanSuami}
                  onChange={e => setFormData({ ...formData, pekerjaanSuami: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Status Sebelum Nikah *
                </label>
                <select
                  value={formData.statusSuami}
                  onChange={e => setFormData({ ...formData, statusSuami: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                >
                  <option value="Jejaka (Belum Pernah Menikah)">Jejaka (Belum Pernah Menikah)</option>
                  <option value="Duda Cerai Hidup">Duda Cerai Hidup</option>
                  <option value="Duda Cerai Mati">Duda Cerai Mati</option>
                </select>
              </div>
            </div>
          </div>

          {/* Calon Istri */}
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800 border-b border-slate-100 pb-1 flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
              <span>2. Biodata Calon Pengantin Wanita (Istri)</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nama Lengkap Calon Istri *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Siti Nurhaliza"
                  value={formData.namaCalonIstri}
                  onChange={e => setFormData({ ...formData, namaCalonIstri: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  NIK Calon Istri *
                </label>
                <input
                  type="text"
                  required
                  maxLength={16}
                  placeholder="16 Digit NIK"
                  value={formData.nikCalonIstri}
                  onChange={e => setFormData({ ...formData, nikCalonIstri: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Tempat & Tgl Lahir *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Bogor, 18 Agustus 2000"
                  value={formData.tempatLahirIstri}
                  onChange={e => setFormData({ ...formData, tempatLahirIstri: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Pekerjaan Istri *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Guru / Wiraswasta"
                  value={formData.pekerjaanIstri}
                  onChange={e => setFormData({ ...formData, pekerjaanIstri: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Status Sebelum Nikah *
                </label>
                <select
                  value={formData.statusIstri}
                  onChange={e => setFormData({ ...formData, statusIstri: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                >
                  <option value="Perawan (Belum Pernah Menikah)">Perawan (Belum Pernah Menikah)</option>
                  <option value="Janda Cerai Hidup">Janda Cerai Hidup</option>
                  <option value="Janda Cerai Mati">Janda Cerai Mati</option>
                </select>
              </div>
            </div>
          </div>

          {/* Rencana Pernikahan & Kontak */}
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-1">
              3. Rencana Akad & Data Wali
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Rencana Tanggal Akad *
                </label>
                <input
                  type="date"
                  required
                  value={formData.tanggalAkad}
                  onChange={e => setFormData({ ...formData, tanggalAkad: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nama Wali Nikah *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nama Ayah Kandung / Wali"
                  value={formData.namaWaliNikah}
                  onChange={e => setFormData({ ...formData, namaWaliNikah: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nomor WhatsApp Pemohon *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="081234567890"
                  value={formData.noWhatsapp}
                  onChange={e => setFormData({ ...formData, noWhatsapp: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>
            </div>
          </div>

          <div className="pt-3 flex items-center justify-end">
            <button
              type="submit"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-7 py-3 rounded-xl text-xs transition shadow-md flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{activeTab === 'belum-nikah' || activeTab === 'sk-na' ? 'Ajukan Surat Keterangan' : 'Ajukan Permohonan Surat'}</span>
            </button>
          </div>
        </form>
      )}
    </>
  );

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-rose-500/20 border border-rose-400/40 text-rose-200 px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <Heart className="w-4 h-4 text-rose-300 fill-rose-300" />
              <span>Layanan Pernikahan & Administrasi KUA</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Layanan Pernikahan & Formulir Model N1 - N4
            </h1>
            
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Pelayanan penerbitan Surat Pengantar Nikah dari Desa, Formulir Model N1, N2, N3, N4, Surat Keterangan Belum Menikah, serta Surat Keterangan NA (Numpang Nikah) untuk pendaftaran akad nikah ke Kantor Urusan Agama (KUA) Kecamatan Cijeruk.
            </p>
          </div>
        </div>

        {/* Pilihan Lembar Surat */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { key: 'formulir-n1-n4', tag: 'Formulir', title: 'Formulir N1-N4', desc: 'Panduan & isian Form N1, N2, N3, dan N4 untuk administrasi pernikahan.' },
            { key: 'belum-nikah', tag: 'Surat Keterangan', title: 'Keterangan Belum Menikah', desc: 'Surat keterangan status lajang / belum pernah kawin.' },
            { key: 'sk-na', tag: 'Surat Keterangan', title: 'Keterangan NA (Numpang Nikah)', desc: 'Surat keterangan status lajang sekaligus pernikahan di luar domisili.' }
          ].map(opt => (
            <button
              key={opt.key}
              onClick={() => { setActiveTab(opt.key as typeof activeTab); setSubmittedCode(null); }}
              className={`p-5 rounded-2xl border text-left transition duration-200 flex flex-col justify-between ${
                activeTab === opt.key
                  ? 'bg-white border-emerald-600 shadow-md ring-2 ring-emerald-600/20'
                  : 'bg-white border-slate-200 hover:border-emerald-300 shadow-xs'
              }`}
            >
              <div className="space-y-1">
                <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md inline-block mb-1 ${
                  activeTab === opt.key ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                }`}>
                  {opt.tag}
                </span>
                <h3 className={`font-bold text-sm ${activeTab === opt.key ? 'text-emerald-900' : 'text-slate-900'}`}>
                  {opt.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {opt.desc}
                </p>
              </div>
              <div className="pt-3 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                <span>Pilih Surat Ini</span>
                <span>→</span>
              </div>
            </button>
          ))}
        </div>

        {/* Persyaratan & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left: Persyaratan Berkas */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>Persyaratan Berkas Pernikahan</span>
                </h3>
                <p className="text-xs text-slate-500">Berkas fisik yang diserahkan ke Balai Desa & KUA</p>
              </div>

              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Surat Pengantar dari Ketua RT dan RW domisili</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fotokopi KTP & Kartu Keluarga (KK) calon mempelai (2 lembar)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fotokopi KTP kedua orang tua / wali nikah</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fotokopi Akta Kelahiran & Ijazah Terakhir calon pengantin</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Pas foto bergandeng / berdampingan latar biru (2x3 = 4 lbr, 4x6 = 2 lbr)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Surat Keterangan Imunisasi TT dari Puskesmas Cijeruk (untuk calon istri)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Bila status Duda/Janda: Lampirkan Akta Cerai Asli atau Akta Kematian pasangan</span>
                </li>
              </ul>

              <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200/80 text-xs text-emerald-900 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-emerald-950">
                  <Clock className="w-4 h-4 text-emerald-700" />
                  <span>Waktu Pengurusan KUA</span>
                </div>
                <p>Minimal 10 hari kerja sebelum tanggal akad nikah yang direncanakan.</p>
              </div>
            </div>

            {/* Right: Formulir Input */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  {{
                    'formulir-n1-n4': 'Formulir N1-N4',
                    'belum-nikah': 'Formulir Surat Keterangan Belum Menikah',
                    'sk-na': 'Formulir Surat Keterangan NA (Numpang Nikah & Belum Menikah)'
                  }[activeTab]}
                </h2>
                <p className="text-xs text-slate-500">
                  Isi biodata kedua calon pengantin secara akurat sesuai data kependudukan
                </p>
              </div>

              {renderSuratForm()}
            </div>

          </div>

      </div>
    </div>
  );
};
