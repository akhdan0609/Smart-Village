import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  CheckCircle2, 
  Send, 
  Building2, 
  UserCheck, 
  HelpCircle, 
  Download, 
  Clock, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { saveSuratRequest } from '../../utils/storage';
import { PageRoute } from '../../types';

type SuratJenis = 'domisili-warga' | 'domisili-usaha' | 'sktm' | 'kematian';

const JENIS_VALID: SuratJenis[] = ['domisili-warga', 'domisili-usaha', 'sktm', 'kematian'];

interface SuratKeteranganProps {
  defaultJenis?: string;
  onNavigate?: (page: PageRoute, params?: any) => void;
}

export const SuratKeteranganView: React.FC<SuratKeteranganProps> = ({ defaultJenis }) => {
  const [activeJenis, setActiveJenis] = useState<SuratJenis>(
    JENIS_VALID.includes(defaultJenis as SuratJenis) ? (defaultJenis as SuratJenis) : 'domisili-warga'
  );
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  useEffect(() => {
    if (defaultJenis && JENIS_VALID.includes(defaultJenis as SuratJenis)) {
      setActiveJenis(defaultJenis as SuratJenis);
      setSubmittedCode(null);
    }
  }, [defaultJenis]);

  const [formData, setFormData] = useState({
    namaLengkap: '',
    nik: '',
    noKK: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: 'Laki-laki',
    agama: 'Islam',
    pekerjaan: '',
    alamatLengkap: '',
    rt: '01',
    rw: '01',
    dusun: 'Dusun I - Cimenteng',
    noWhatsapp: '',
    // Spesifik Domisili Usaha (SKU)
    namaUsaha: '',
    jenisUsaha: '',
    alamatUsaha: '',
    tahunBerdiri: '',
    // Spesifik SKTM
    keperluanSKTM: 'Persyaratan Beasiswa Pendidikan',
    penghasilanBulanan: '< Rp 1.500.000',
    tanggunganKeluarga: '3 Orang',
    // Spesifik Surat Keterangan Kematian (SKK)
    namaAlmarhum: '',
    nikAlmarhum: '',
    tempatKematian: '',
    tanggalKematian: '',
    penyebabKematian: 'Sakit',
    lokasiKematian: 'Rumah',
    hubunganPelapor: 'Anak',
    // Umum
    keperluanSurat: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let jenisSuratLabel = 'Surat Keterangan Domisili Warga';
    let kodePrefix = 'SKD';
    let keperluan = formData.keperluanSurat || 'Keterangan Domisili Tempat Tinggal';
    if (activeJenis === 'domisili-usaha') {
      jenisSuratLabel = 'Surat Keterangan Domisili Usaha (SKU)';
      kodePrefix = 'SKU';
      keperluan = `Usaha ${formData.namaUsaha} (${formData.jenisUsaha})`;
    } else if (activeJenis === 'sktm') {
      jenisSuratLabel = 'Surat Keterangan Tidak Mampu (SKTM)';
      kodePrefix = 'SKTM';
      keperluan = formData.keperluanSKTM;
    } else if (activeJenis === 'kematian') {
      jenisSuratLabel = 'Surat Keterangan Kematian (SKK)';
      kodePrefix = 'SKK';
      keperluan = `Kematian ${formData.namaAlmarhum || 'Almarhum/Almarhumah'} - ${formData.penyebabKematian}`;
    }

    const regCode = `${kodePrefix}-${Date.now().toString().slice(-6)}`;

    const newDoc = {
      id: `req-${Date.now()}`,
      nomorRegistrasi: regCode,
      jenisSurat: jenisSuratLabel,
      namaPemohon: formData.namaLengkap,
      nik: formData.nik,
      noWhatsapp: formData.noWhatsapp,
      dusun: formData.dusun,
      rtRw: `RT ${formData.rt} / RW ${formData.rw}`,
      keperluan: keperluan,
      status: 'diajukan' as const,
      tanggalPengajuan: new Date().toISOString().split('T')[0],
      estimasiSelesai: '1 Hari Kerja'
    };

    saveSuratRequest(newDoc);
    setSubmittedCode(regCode);
  };

  const jenisTabs = [
    {
      id: 'domisili-warga' as const,
      title: 'Surat Keterangan Domisili Warga',
      shortTitle: 'Domisili Warga',
      badge: 'SKD',
      desc: 'Menerangkan bahwa pemohon benar-benar berdomisili dan bertempat tinggal di wilayah Desa Warung Menteng.'
    },
    {
      id: 'domisili-usaha' as const,
      title: 'Surat Keterangan Usaha (SKU)',
      shortTitle: 'Domisili Usaha (SKU)',
      badge: 'SKU',
      desc: 'Menerangkan izin keberadaan dan operasional unit usaha mikro/kecil warga di wilayah desa untuk pengajuan KUR/Bank.'
    },
    {
      id: 'sktm' as const,
      title: 'Surat Keterangan Tidak Mampu (SKTM)',
      shortTitle: 'SKTM (Tidak Mampu)',
      badge: 'SKTM',
      desc: 'Menerangkan keadaan ekonomi keluarga untuk keringanan biaya pengobatan RS, beasiswa pendidikan, atau bantuan sosial.'
    },
    {
      id: 'kematian' as const,
      title: 'Surat Keterangan Kematian',
      shortTitle: 'Kematian (SKK)',
      badge: 'SKK',
      desc: 'Menerangkan peristiwa kematian warga untuk keperluan ahlî waris, asuransi, dan administrasi lanjutan.'
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
              <FileText className="w-4 h-4 text-amber-300" />
              <span>Layanan Administrasi Desa Terpadu</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Layanan Surat Keterangan
            </h1>
            
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Pembuatan Surat Keterangan Domisili Warga, Surat Keterangan Domisili Usaha (SKU), Surat Keterangan Tidak Mampu (SKTM), dan Surat Keterangan Kematian (SKK) secara online langsung terverifikasi oleh Seksi Pelayanan Desa Warung Menteng.
            </p>
          </div>
        </div>

        {/* 4 Nav Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {jenisTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveJenis(tab.id);
                setSubmittedCode(null);
              }}
              className={`p-5 rounded-2xl border text-left transition duration-200 flex flex-col justify-between ${
                activeJenis === tab.id
                  ? 'bg-white border-emerald-600 shadow-md ring-2 ring-emerald-600/20'
                  : 'bg-white border-slate-200 hover:border-emerald-300 shadow-xs'
              }`}
            >
              <div className="space-y-1">
                <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md inline-block mb-1 ${
                  activeJenis === tab.id ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                }`}>
                  {tab.badge}
                </span>
                <h3 className={`font-bold text-sm ${activeJenis === tab.id ? 'text-emerald-900' : 'text-slate-900'}`}>
                  {tab.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {tab.desc}
                </p>
              </div>

              <div className="pt-3 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                <span>Pilih Formulir Ini</span>
                <span>→</span>
              </div>
            </button>
          ))}
        </div>

        {/* Persyaratan & Formulir Box */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left: Persyaratan Berkas */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-5">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Persyaratan Berkas</span>
              </h3>
              <p className="text-xs text-slate-500">Siapkan dokumen pendukung saat pengambilan</p>
            </div>

            {activeJenis === 'domisili-warga' && (
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Surat Pengantar dari Ketua RT dan RW setempat</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fotokopi Kartu Tanda Penduduk (KTP-el) Pemohon</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fotokopi Kartu Keluarga (KK) yang masih berlaku</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Bagi warga pendatang / kontrak: Bukti Surat Domisili Asal / Bukti Kontrak</span>
                </li>
              </ul>
            )}

            {activeJenis === 'domisili-usaha' && (
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Surat Pengantar RT/RW terkait keberadaan unit usaha</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fotokopi KTP & KK pemilik usaha</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Foto tempat/kegiatan usaha di Desa Warung Menteng</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Surat pernyataan tidak mengganggu ketertiban lingkungan sekitar</span>
                </li>
              </ul>
            )}

            {activeJenis === 'sktm' && (
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Surat Pengantar Tidak Mampu dari RT dan RW setempat</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fotokopi KTP Pemohon & Kartu Keluarga (KK)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Surat Pernyataan Penghasilan bermaterai (bila diminta dinas)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Foto rumah tampak depan pemohon</span>
                </li>
              </ul>
            )}

            {activeJenis === 'kematian' && (
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Surat Pengantar dari Ketua RT dan RW setempat</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fotokopi KTP almarhum / almarhumah</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fotokopi Kartu Keluarga (KK) yang masih berlaku</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Fotokopi KTP pelapor (keluarga / ahlî waris)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Surat keterangan penyebab kematian dari dokter / Puskesmas / Rumah Sakit (bila meninggal karena sakit)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Berita acara / laporan kepolisian (bila meninggal karena kecelakaan atau peristiwa lain)</span>
                </li>
              </ul>
            )}

            <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200/80 text-xs text-emerald-900 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-emerald-950">
                <Clock className="w-4 h-4 text-emerald-700" />
                <span>Waktu Proses Pelayanan</span>
              </div>
              <p>Maksimal 1 hari kerja (gratis / Rp 0 tanpa biaya pungutan).</p>
            </div>
          </div>

          {/* Right: Formulir Input */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Formulir Pengajuan {activeJenis === 'domisili-warga' ? 'Surat Keterangan Domisili' : activeJenis === 'domisili-usaha' ? 'Surat Keterangan Usaha (SKU)' : activeJenis === 'sktm' ? 'Surat Keterangan Tidak Mampu (SKTM)' : 'Surat Keterangan Kematian (SKK)'}
              </h2>
              <p className="text-xs text-slate-500">
                Lengkapi data pemohon di bawah ini dengan benar sesuai dokumen KTP & KK Anda
              </p>
            </div>

            {submittedCode ? (
              <div className="bg-emerald-50 border border-emerald-300 rounded-3xl p-8 text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-emerald-950">Permohonan Surat Berhasil Diajukan!</h3>
                  <p className="text-xs text-emerald-800">
                    Silakan simpan nomor registrasi di bawah ini untuk mengecek status permohonan Anda:
                  </p>
                </div>

                <div className="bg-white border-2 border-dashed border-emerald-600 py-3 px-6 rounded-2xl inline-block">
                  <span className="text-xs text-slate-500 block">Nomor Registrasi Surat</span>
                  <span className="text-2xl font-mono font-extrabold text-emerald-900 tracking-wider">
                    {submittedCode}
                  </span>
                </div>

                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Petugas Seksi Pelayanan Desa Warung Menteng akan segera memverifikasi data Anda. Anda dapat mengambil berkas fisik di Balai Desa dengan membawa pengantar RT/RW.
                </p>

                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={() => setSubmittedCode(null)}
                    className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition"
                  >
                    Ajukan Surat Baru
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Biodata Pemohon */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 pb-1">
                    {activeJenis === 'kematian' ? '1. Data Pelapor / Ahlî Waris' : '1. Data Pemohon'}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nama Lengkap (Sesuai KTP) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Asep Sunandar"
                        value={formData.namaLengkap}
                        onChange={e => setFormData({ ...formData, namaLengkap: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nomor Induk Kependudukan (NIK) *
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={16}
                        placeholder="16 Digit NIK KTP"
                        value={formData.nik}
                        onChange={e => setFormData({ ...formData, nik: e.target.value })}
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
                        Tempat Lahir *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Bogor"
                        value={formData.tempatLahir}
                        onChange={e => setFormData({ ...formData, tempatLahir: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Tanggal Lahir *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.tanggalLahir}
                        onChange={e => setFormData({ ...formData, tanggalLahir: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Jenis Kelamin *
                      </label>
                      <select
                        value={formData.jenisKelamin}
                        onChange={e => setFormData({ ...formData, jenisKelamin: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      >
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Pekerjaan *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Wiraswasta / Petani / Karyawan"
                        value={formData.pekerjaan}
                        onChange={e => setFormData({ ...formData, pekerjaan: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nomor WhatsApp Aktif *
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

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Dusun Domisili *
                      </label>
                      <select
                        value={formData.dusun}
                        onChange={e => setFormData({ ...formData, dusun: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      >
                        <option value="Dusun I - Cimenteng">Dusun I - Cimenteng</option>
                        <option value="Dusun II - Menteng Pasir">Dusun II - Menteng Pasir</option>
                        <option value="Dusun III - Menteng Girang">Dusun III - Menteng Girang</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        RT / RW *
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          required
                          placeholder="RT (01)"
                          value={formData.rt}
                          onChange={e => setFormData({ ...formData, rt: e.target.value })}
                          className="w-1/2 px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                        />
                        <input
                          type="text"
                          required
                          placeholder="RW (01)"
                          value={formData.rw}
                          onChange={e => setFormData({ ...formData, rw: e.target.value })}
                          className="w-1/2 px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Alamat Jalan / Kampung *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Kp. Cimenteng No. 15"
                        value={formData.alamatLengkap}
                        onChange={e => setFormData({ ...formData, alamatLengkap: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Spesifik Bagian SKU */}
                {activeJenis === 'domisili-usaha' && (
                  <div className="space-y-3 pt-3 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 border-b border-slate-100 pb-1">
                      2. Data Usaha Pemohon (Khusus SKU)
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Nama Usaha / Toko / Brand *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Contoh: Kios Pupuk Berkah Menteng"
                          value={formData.namaUsaha}
                          onChange={e => setFormData({ ...formData, namaUsaha: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Bidang / Jenis Usaha *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Contoh: Pertanian / Kuliner / Toko Kelontong"
                          value={formData.jenisUsaha}
                          onChange={e => setFormData({ ...formData, jenisUsaha: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Alamat Lokasi Usaha *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Contoh: Jl. Raya Cijeruk No. 88, RT 02/03"
                          value={formData.alamatUsaha}
                          onChange={e => setFormData({ ...formData, alamatUsaha: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Tahun Mulai Berdiri *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Contoh: 2021"
                          value={formData.tahunBerdiri}
                          onChange={e => setFormData({ ...formData, tahunBerdiri: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Spesifik Bagian SKTM */}
                {activeJenis === 'sktm' && (
                  <div className="space-y-3 pt-3 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 border-b border-slate-100 pb-1">
                      2. Keperluan & Kondisi Ekonomi (Khusus SKTM)
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Tujuan Penggunaan SKTM *
                        </label>
                        <select
                          value={formData.keperluanSKTM}
                          onChange={e => setFormData({ ...formData, keperluanSKTM: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                        >
                          <option value="Persyaratan Beasiswa Pendidikan">Persyaratan Beasiswa Pendidikan</option>
                          <option value="Keringanan Biaya Rumah Sakit / BPJS PBI">Keringanan Biaya Rumah Sakit / BPJS PBI</option>
                          <option value="Bantuan Sosial & Subsidi Pemerintah">Bantuan Sosial & Subsidi Pemerintah</option>
                          <option value="Bantuan Hukum / Pengadilan">Bantuan Hukum / Pengadilan</option>
                          <option value="Lainnya">Lainnya</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Rata-rata Penghasilan / Bulan *
                        </label>
                        <select
                          value={formData.penghasilanBulanan}
                          onChange={e => setFormData({ ...formData, penghasilanBulanan: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                        >
                          <option value="< Rp 1.000.000">&lt; Rp 1.000.000</option>
                          <option value="Rp 1.000.000 - Rp 1.500.000">Rp 1.000.000 - Rp 1.500.000</option>
                          <option value="Rp 1.500.000 - Rp 2.000.000">Rp 1.500.000 - Rp 2.000.000</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Jumlah Tanggungan Keluarga *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Contoh: 3 Jiwa"
                          value={formData.tanggunganKeluarga}
                          onChange={e => setFormData({ ...formData, tanggunganKeluarga: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Spesifik Bagian Kematian (SKK) */}
                {activeJenis === 'kematian' && (
                  <div className="space-y-3 pt-3 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 border-b border-slate-100 pb-1">
                      2. Data Almarhum / Almarhumah (Khusus SKK)
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Nama Lengkap Almarhum / Almarhumah *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Contoh: Ujang Sutisna"
                          value={formData.namaAlmarhum}
                          onChange={e => setFormData({ ...formData, namaAlmarhum: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          NIK Almarhum / Almarhumah *
                        </label>
                        <input
                          type="text"
                          required
                          maxLength={16}
                          placeholder="16 Digit NIK KTP"
                          value={formData.nikAlmarhum}
                          onChange={e => setFormData({ ...formData, nikAlmarhum: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Tempat Kematian *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Contoh: Rumah, Kp. Cimenteng"
                          value={formData.tempatKematian}
                          onChange={e => setFormData({ ...formData, tempatKematian: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Tanggal Kematian *
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.tanggalKematian}
                          onChange={e => setFormData({ ...formData, tanggalKematian: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Penyebab Kematian *
                        </label>
                        <select
                          value={formData.penyebabKematian}
                          onChange={e => setFormData({ ...formData, penyebabKematian: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                        >
                          <option value="Sakit">Sakit</option>
                          <option value="Kecelakaan">Kecelakaan</option>
                          <option value="Usia Lanjut">Usia Lanjut</option>
                          <option value="Lainnya">Lainnya</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Lokasi Kematian *
                        </label>
                        <select
                          value={formData.lokasiKematian}
                          onChange={e => setFormData({ ...formData, lokasiKematian: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                        >
                          <option value="Rumah">Rumah</option>
                          <option value="Rumah Sakit">Rumah Sakit</option>
                          <option value="Puskesmas">Puskesmas</option>
                          <option value="Tempat Lainnya">Tempat Lainnya</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Hubungan Pelapor dengan Almarhum *
                        </label>
                        <select
                          value={formData.hubunganPelapor}
                          onChange={e => setFormData({ ...formData, hubunganPelapor: e.target.value })}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                        >
                          <option value="Anak">Anak</option>
                          <option value="Istri / Suami">Istri / Suami</option>
                          <option value="Orang Tua">Orang Tua</option>
                          <option value="Saudara">Saudara</option>
                          <option value="Lainnya">Lainnya</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bagian Domisili Biasa */}
                {activeJenis === 'domisili-warga' && (
                  <div className="pt-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Keperluan / Maksud Permohonan Domisili *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Persyaratan melamar pekerjaan / pembuatan rekening bank / pendaftaran sekolah"
                      value={formData.keperluanSurat}
                      onChange={e => setFormData({ ...formData, keperluanSurat: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                    />
                  </div>
                )}

                <div className="pt-3 flex items-center justify-end">
                  <button
                    type="submit"
                    className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-7 py-3 rounded-xl text-xs transition shadow-md flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Ajukan Permohonan Surat</span>
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
