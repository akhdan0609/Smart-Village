import React, { useState } from 'react';
import { 
  Truck, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Clock, 
  AlertCircle, 
  Users,
  MapPin,
  FileText
} from 'lucide-react';
import { saveSuratRequest } from '../../utils/storage';

export const PindahDatangView: React.FC = () => {
  const [activeJenis, setActiveJenis] = useState<'pindah-keluar' | 'pindah-datang'>('pindah-keluar');
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    namaKepalaKeluarga: '',
    nikKepalaKeluarga: '',
    noKK: '',
    noWhatsapp: '',
    jumlahAnggotaPindah: '1 Orang (Pemohon Sendiri)',
    alasanPindah: 'Pekerjaan / Dinas',
    // Alamat Asal
    alamatAsal: '',
    dusunAsal: 'Dusun I - Cimenteng',
    rtAsal: '01',
    rwAsal: '01',
    desaAsal: 'Warung Menteng',
    kecamatanAsal: 'Cijeruk',
    kabupatenAsal: 'Bogor',
    provinsiAsal: 'Jawa Barat',
    // Alamat Tujuan
    alamatTujuan: '',
    desaTujuan: '',
    kecamatanTujuan: '',
    kabupatenTujuan: '',
    provinsiTujuan: 'Jawa Barat',
    kodePosTujuan: '',
    // Data SKPWNI asal (jika pindah datang)
    nomorSKPWNIAsal: '',
    tanggalSKPWNIAsal: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isKeluar = activeJenis === 'pindah-keluar';
    const jenisLabel = isKeluar 
      ? 'Surat Keterangan Pindah Keluar (SKPWNI)' 
      : 'Surat Keterangan Pindah Datang (Warga Baru)';
    const prefix = isKeluar ? 'SKPWNI-OUT' : 'SKPWNI-IN';
    const regCode = `${prefix}-${Date.now().toString().slice(-6)}`;

    const newDoc = {
      id: `pindah-${Date.now()}`,
      nomorRegistrasi: regCode,
      jenisSurat: jenisLabel,
      namaPemohon: formData.namaKepalaKeluarga,
      nik: formData.nikKepalaKeluarga,
      noWhatsapp: formData.noWhatsapp,
      dusun: isKeluar ? formData.dusunAsal : 'Dusun Penerima (Warung Menteng)',
      rtRw: isKeluar ? `RT ${formData.rtAsal} / RW ${formData.rwAsal}` : 'Wilayah Tujuan Baru',
      keperluan: isKeluar 
        ? `Pindah ke ${formData.desaTujuan}, Kec. ${formData.kecamatanTujuan}, ${formData.kabupatenTujuan} (${formData.alasanPindah})`
        : `Pindah Datang dari ${formData.desaAsal}, Kec. ${formData.kecamatanAsal}`,
      status: 'diajukan' as const,
      tanggalPengajuan: new Date().toISOString().split('T')[0],
      estimasiSelesai: '2 Hari Kerja'
    };

    saveSuratRequest(newDoc);
    setSubmittedCode(regCode);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <Truck className="w-4 h-4 text-amber-300" />
              <span>Layanan Mutasi Kependudukan</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Layanan Surat Pindah Datang & Keluar
            </h1>
            
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Fasilitasi penerbitan Surat Keterangan Pindah Warga Negara Indonesia (SKPWNI) keluar dari Desa Warung Menteng maupun permohonan pendaftaran warga pindah datang baru secara tertib dan terintegrasi.
            </p>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => { setActiveJenis('pindah-keluar'); setSubmittedCode(null); }}
            className={`p-5 rounded-2xl border text-left transition duration-200 flex flex-col justify-between ${
              activeJenis === 'pindah-keluar'
                ? 'bg-white border-emerald-600 shadow-md ring-2 ring-emerald-600/20'
                : 'bg-white border-slate-200 hover:border-emerald-300 shadow-xs'
            }`}
          >
            <div className="space-y-1">
              <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md inline-block mb-1 ${
                activeJenis === 'pindah-keluar' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
              }`}>
                Pindah Keluar (SKPWNI)
              </span>
              <h3 className={`font-bold text-base ${activeJenis === 'pindah-keluar' ? 'text-emerald-900' : 'text-slate-900'}`}>
                Surat Keterangan Pindah Keluar Desa
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Untuk warga Warung Menteng yang akan pindah domisili kependudukan ke desa/kelurahan, kecamatan, atau kota/kabupaten lain.
              </p>
            </div>
            <div className="pt-3 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
              <span>Isi Formulir Pindah Keluar</span>
              <span>→</span>
            </div>
          </button>

          <button
            onClick={() => { setActiveJenis('pindah-datang'); setSubmittedCode(null); }}
            className={`p-5 rounded-2xl border text-left transition duration-200 flex flex-col justify-between ${
              activeJenis === 'pindah-datang'
                ? 'bg-white border-emerald-600 shadow-md ring-2 ring-emerald-600/20'
                : 'bg-white border-slate-200 hover:border-emerald-300 shadow-xs'
            }`}
          >
            <div className="space-y-1">
              <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md inline-block mb-1 ${
                activeJenis === 'pindah-datang' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
              }`}>
                Pindah Datang
              </span>
              <h3 className={`font-bold text-base ${activeJenis === 'pindah-datang' ? 'text-emerald-900' : 'text-slate-900'}`}>
                Pendaftaran Warga Pindah Datang Baru
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Untuk warga pendatang yang telah memiliki lembar SKPWNI dari daerah asal dan akan menjadi warga resmi Desa Warung Menteng.
              </p>
            </div>
            <div className="pt-3 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
              <span>Isi Formulir Pindah Datang</span>
              <span>→</span>
            </div>
          </button>
        </div>

        {/* Persyaratan & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left: Persyaratan Berkas */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Persyaratan Berkas</span>
              </h3>
              <p className="text-xs text-slate-500">Persiapkan sebelum verifikasi berkas</p>
            </div>

            {activeJenis === 'pindah-keluar' ? (
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Surat Pengantar Pindah dari RT dan RW setempat</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Kartu Keluarga (KK) Asli Desa Warung Menteng</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>KTP-el Asli seluruh anggota keluarga yang ikut pindah</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Alamat lengkap daerah tujuan (termasuk RT/RW, Desa, Kec, Kab)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Pas foto 3x4 (2 lembar) kepala keluarga</span>
                </li>
              </ul>
            ) : (
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Surat Keterangan Pindah WNI (SKPWNI) Asli dari daerah asal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Surat Pengantar Penerimaan dari RT dan RW tujuan di Warung Menteng</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>KTP-el pemohon dan anggota keluarga</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fotokopi Akta Nikah / Akta Cerai (bagi yang berstatus kawin/cerai)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fotokopi Akta Kelahiran anak yang ikut pindah</span>
                </li>
              </ul>
            )}

            <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200/80 text-xs text-emerald-900 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-emerald-950">
                <Clock className="w-4 h-4 text-emerald-700" />
                <span>Estimasi Penerbitan</span>
              </div>
              <p>Maksimal 1-2 hari kerja di Kantor Desa, dilanjutkan ke Disdukcapil untuk cetak KK baru.</p>
            </div>
          </div>

          {/* Right: Formulir Input */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Formulir Permohonan {activeJenis === 'pindah-keluar' ? 'Pindah Keluar (SKPWNI)' : 'Pendaftaran Pindah Datang'}
              </h2>
              <p className="text-xs text-slate-500">
                Lengkapi rincian alamat kepindahan dan data keluarga di bawah ini
              </p>
            </div>

            {submittedCode ? (
              <div className="bg-emerald-50 border border-emerald-300 rounded-3xl p-8 text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-emerald-950">Permohonan Mutasi Berhasil Diajukan!</h3>
                  <p className="text-xs text-emerald-800">
                    Simpan nomor registrasi permohonan mutasi Anda:
                  </p>
                </div>

                <div className="bg-white border-2 border-dashed border-emerald-600 py-3 px-6 rounded-2xl inline-block">
                  <span className="text-xs text-slate-500 block">Nomor Registrasi Mutasi</span>
                  <span className="text-2xl font-mono font-extrabold text-emerald-900 tracking-wider">
                    {submittedCode}
                  </span>
                </div>

                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Petugas Seksi Pemerintahan Desa Warung Menteng akan menyiapkan lembar F-1.08 / SKPWNI resmi untuk validasi dinas kependudukan.
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
                {/* Data Pemohon / Kepala Keluarga */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 pb-1">
                    1. Data Kepala Keluarga / Pemohon
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nama Kepala Keluarga *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Dedi Suhendar"
                        value={formData.namaKepalaKeluarga}
                        onChange={e => setFormData({ ...formData, namaKepalaKeluarga: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        NIK Kepala Keluarga *
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={16}
                        placeholder="16 Digit NIK"
                        value={formData.nikKepalaKeluarga}
                        onChange={e => setFormData({ ...formData, nikKepalaKeluarga: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nomor Kartu Keluarga (KK) *
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={16}
                        placeholder="16 Digit No. KK"
                        value={formData.noKK}
                        onChange={e => setFormData({ ...formData, noKK: e.target.value })}
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

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Jumlah Anggota Ikut Pindah *
                      </label>
                      <select
                        value={formData.jumlahAnggotaPindah}
                        onChange={e => setFormData({ ...formData, jumlahAnggotaPindah: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      >
                        <option value="1 Orang (Pemohon Sendiri)">1 Orang (Pemohon Sendiri)</option>
                        <option value="2 Orang (Suami Istri)">2 Orang (Suami Istri)</option>
                        <option value="3 Orang (Keluarga Kecil)">3 Orang (Keluarga Kecil)</option>
                        <option value="4 Orang atau Lebih">4 Orang atau Lebih (Seluruh Keluarga)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Alasan Kepindahan *
                    </label>
                    <select
                      value={formData.alasanPindah}
                      onChange={e => setFormData({ ...formData, alasanPindah: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                    >
                      <option value="Pekerjaan / Dinas">Pekerjaan / Pindah Kantor</option>
                      <option value="Pendidikan / Sekolah">Pendidikan / Sekolah</option>
                      <option value="Keluarga / Menikah">Mengikuti Pasangan / Menikah</option>
                      <option value="Perumahan / Rumah Sendiri">Membeli Rumah Baru / Perumahan</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                {/* Bagian Alamat Asal & Tujuan */}
                <div className="space-y-4 pt-3 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 border-b border-slate-100 pb-1">
                    2. Rincian Alamat Asal & Alamat Tujuan
                  </h4>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <span className="text-xs font-bold text-slate-900 block">
                      {activeJenis === 'pindah-keluar' ? 'A. Alamat Asal di Warung Menteng' : 'A. Alamat Asal (Luar Daerah)'}
                    </span>

                    {activeJenis === 'pindah-keluar' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Dusun Asal</label>
                          <select
                            value={formData.dusunAsal}
                            onChange={e => setFormData({ ...formData, dusunAsal: e.target.value })}
                            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                          >
                            <option value="Dusun I - Cimenteng">Dusun I - Cimenteng</option>
                            <option value="Dusun II - Menteng Pasir">Dusun II - Menteng Pasir</option>
                            <option value="Dusun III - Menteng Girang">Dusun III - Menteng Girang</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">RT / RW Asal</label>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              placeholder="RT 01"
                              value={formData.rtAsal}
                              onChange={e => setFormData({ ...formData, rtAsal: e.target.value })}
                              className="w-1/2 px-2 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                            />
                            <input
                              type="text"
                              placeholder="RW 01"
                              value={formData.rwAsal}
                              onChange={e => setFormData({ ...formData, rwAsal: e.target.value })}
                              className="w-1/2 px-2 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Alamat Kampung</label>
                          <input
                            type="text"
                            placeholder="Kp. Cimenteng"
                            value={formData.alamatAsal}
                            onChange={e => setFormData({ ...formData, alamatAsal: e.target.value })}
                            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Desa/Kelurahan Asal *</label>
                          <input
                            type="text"
                            required
                            placeholder="Contoh: Kel. Menteng"
                            value={formData.desaAsal}
                            onChange={e => setFormData({ ...formData, desaAsal: e.target.value })}
                            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Kecamatan Asal *</label>
                          <input
                            type="text"
                            required
                            placeholder="Contoh: Menteng"
                            value={formData.kecamatanAsal}
                            onChange={e => setFormData({ ...formData, kecamatanAsal: e.target.value })}
                            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Kabupaten/Kota Asal *</label>
                          <input
                            type="text"
                            required
                            placeholder="Contoh: Jakarta Pusat"
                            value={formData.kabupatenAsal}
                            onChange={e => setFormData({ ...formData, kabupatenAsal: e.target.value })}
                            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-200/60 space-y-3">
                    <span className="text-xs font-bold text-emerald-950 block">
                      {activeJenis === 'pindah-keluar' ? 'B. Alamat Lengkap Tujuan Kepindahan' : 'B. Alamat Tujuan Baru di Warung Menteng'}
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">Desa/Kelurahan Tujuan *</label>
                        <input
                          type="text"
                          required
                          placeholder={activeJenis === 'pindah-keluar' ? 'Contoh: Desa Sukamaju' : 'Desa Warung Menteng'}
                          value={formData.desaTujuan}
                          onChange={e => setFormData({ ...formData, desaTujuan: e.target.value })}
                          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">Kecamatan Tujuan *</label>
                        <input
                          type="text"
                          required
                          placeholder={activeJenis === 'pindah-keluar' ? 'Contoh: Kec. Caringin' : 'Kec. Cijeruk'}
                          value={formData.kecamatanTujuan}
                          onChange={e => setFormData({ ...formData, kecamatanTujuan: e.target.value })}
                          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">Kabupaten/Kota Tujuan *</label>
                        <input
                          type="text"
                          required
                          placeholder={activeJenis === 'pindah-keluar' ? 'Contoh: Kab. Sukabumi' : 'Kab. Bogor'}
                          value={formData.kabupatenTujuan}
                          onChange={e => setFormData({ ...formData, kabupatenTujuan: e.target.value })}
                          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">Alamat Jalan / Komplek / RT & RW Tujuan *</label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Jl. Pahlawan No. 45 RT 03/04"
                        value={formData.alamatTujuan}
                        onChange={e => setFormData({ ...formData, alamatTujuan: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
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
                    <span>Ajukan Permohonan SKPWNI</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
