import React, { useState } from 'react';
import { 
  FileText, 
  Send, 
  CheckCircle, 
  Copy, 
  Search, 
  ArrowRight, 
  Upload, 
  AlertCircle,
  HelpCircle,
  User,
  Phone,
  Home
} from 'lucide-react';
import { JENIS_SURAT_LIST } from '../../data/mockData';
import { savePengajuanSurat } from '../../utils/storage';
import { PageRoute } from '../../types';

interface PengajuanSuratProps {
  defaultSuratId?: string;
  onNavigate: (page: PageRoute, params?: any) => void;
}

export const PengajuanSuratView: React.FC<PengajuanSuratProps> = ({ defaultSuratId, onNavigate }) => {
  const [jenisSuratId, setJenisSuratId] = useState(defaultSuratId || JENIS_SURAT_LIST[0].id);
  const [nik, setNik] = useState('');
  const [namaLengkap, setNamaLengkap] = useState('');
  const [noKK, setNoKK] = useState('');
  const [nomorWA, setNomorWA] = useState('');
  const [dusun, setDusun] = useState('Dusun I (Menteng Girang)');
  const [rt, setRt] = useState('001');
  const [rw, setRw] = useState('001');
  const [alamatLengkap, setAlamatLengkap] = useState('');
  const [keperluan, setKeperluan] = useState('');
  const [keteranganTambahan, setKeteranganTambahan] = useState('');
  const [simulasiLampiran, setSimulasiLampiran] = useState<string>('');

  const [createdRegNumber, setCreatedRegNumber] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const selectedSurat = JENIS_SURAT_LIST.find(s => s.id === jenisSuratId) || JENIS_SURAT_LIST[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (nik.length < 16) {
      alert('NIK harus terdiri dari 16 digit angka!');
      return;
    }

    const regNumber = `SRT-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    const newSurat = {
      id: `surat-${Date.now()}`,
      nomorRegistrasi: regNumber,
      jenisSurat: selectedSurat.nama,
      namaPemohon: namaLengkap,
      nik: nik,
      nomorWA: nomorWA,
      alamat: `${alamatLengkap}, RT ${rt}/RW ${rw}, ${dusun}`,
      keperluan: keperluan,
      keteranganTambahan: keteranganTambahan,
      tanggalPengajuan: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      status: 'Diajukan' as const,
      catatanPetugas: 'Pengajuan online baru diterima oleh sistem PTSP Desa Warung Menteng.'
    };

    savePengajuanSurat(newSurat);
    setCreatedRegNumber(regNumber);
  };

  const handleCopy = () => {
    if (createdRegNumber) {
      navigator.clipboard.writeText(createdRegNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-md relative overflow-hidden">
          <div className="relative z-10 space-y-3">
            <span className="bg-emerald-500/30 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-400/30">
              Layanan Mandiri Online
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif]">
              Formulir Pengajuan Surat Desa
            </h1>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              Isi data diri dan keperluan surat di bawah ini dengan benar. Surat akan diproses petugas maksimal 1x24 jam kerja tanpa biaya (Gratis).
            </p>
          </div>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
          {/* Step 1: Pilihan Jenis Surat */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>1. Pilih Jenis Surat Administrasi</span>
            </label>
            <select
              value={jenisSuratId}
              onChange={e => setJenisSuratId(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
            >
              {JENIS_SURAT_LIST.map(s => (
                <option key={s.id} value={s.id}>
                  {s.nama} ({s.estimasiWaktu})
                </option>
              ))}
            </select>

            <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-100 text-xs text-slate-700 space-y-1">
              <p className="font-bold text-emerald-900">Peruntukan: {selectedSurat.deskripsi}</p>
              <p className="text-slate-600">Pastikan Anda telah memiliki foto/scan dokumen pengantar RT/RW setempat.</p>
            </div>
          </div>

          {/* Step 2: Data Pemohon */}
          <div className="space-y-4 pt-2 border-t border-slate-100">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <User className="w-4 h-4 text-emerald-600" />
              <span>2. Data Diri Pemohon (Sesuai KTP & KK)</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Nama Lengkap Pemohon *
                </label>
                <input
                  type="text"
                  required
                  value={namaLengkap}
                  onChange={e => setNamaLengkap(e.target.value)}
                  placeholder="Contoh: Asep Saepudin"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Nomor Induk Kependudukan (NIK 16 Digit) *
                </label>
                <input
                  type="text"
                  required
                  maxLength={16}
                  value={nik}
                  onChange={e => setNik(e.target.value.replace(/\D/g, ''))}
                  placeholder="3201xxxxxxxxxxxx"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-mono focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Nomor Kartu Keluarga (KK 16 Digit) *
                </label>
                <input
                  type="text"
                  required
                  maxLength={16}
                  value={noKK}
                  onChange={e => setNoKK(e.target.value.replace(/\D/g, ''))}
                  placeholder="3201xxxxxxxxxxxx"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-mono focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Nomor WhatsApp Aktif *
                </label>
                <input
                  type="text"
                  required
                  value={nomorWA}
                  onChange={e => setNomorWA(e.target.value)}
                  placeholder="0812xxxxxxxx (Untuk Notifikasi Surat)"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>
            </div>

            {/* Domisili / Wilayah */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Wilayah Dusun</label>
                <select
                  value={dusun}
                  onChange={e => setDusun(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                >
                  <option value="Dusun I (Menteng Girang)">Dusun I (Menteng Girang)</option>
                  <option value="Dusun II (Menteng Tengah)">Dusun II (Menteng Tengah)</option>
                  <option value="Dusun III (Menteng Hilir & Cimenteng)">Dusun III (Menteng Hilir & Cimenteng)</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Nomor RT</label>
                <input
                  type="text"
                  required
                  value={rt}
                  onChange={e => setRt(e.target.value)}
                  placeholder="001"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Nomor RW</label>
                <input
                  type="text"
                  required
                  value={rw}
                  onChange={e => setRw(e.target.value)}
                  placeholder="001"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Alamat Lengkap / Nama Jalan / Gang *</label>
              <textarea
                required
                rows={2}
                value={alamatLengkap}
                onChange={e => setAlamatLengkap(e.target.value)}
                placeholder="Contoh: Jl. Sukamantri No. 14, Dekat Masjid Al-Huda"
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:bg-white"
              />
            </div>
          </div>

          {/* Step 3: Keperluan & Keterangan */}
          <div className="space-y-4 pt-2 border-t border-slate-100">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <Home className="w-4 h-4 text-emerald-600" />
              <span>3. Keperluan & Rincian Surat</span>
            </label>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Keperluan Pengajuan Surat *
              </label>
              <input
                type="text"
                required
                value={keperluan}
                onChange={e => setKeperluan(e.target.value)}
                placeholder="Contoh: Pengajuan KUR Bank BRI / Beasiswa Kuliah / Melamar Pekerjaan"
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:bg-white"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Keterangan Tambahan / Nama Usaha (Jika SKU)
              </label>
              <textarea
                rows={2}
                value={keteranganTambahan}
                onChange={e => setKeteranganTambahan(e.target.value)}
                placeholder="Tuliskan nama usaha, jenis dagangan, alamat toko (jika SKU) atau nama instansi yang dituju"
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:bg-white"
              />
            </div>

            {/* Unggah Dokumen Pendukung */}
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Lampirkan Foto Pengantar RT/RW / KTP (Opsional)
              </label>
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-4 text-center hover:border-emerald-400 transition bg-slate-50">
                <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                <p className="text-xs text-slate-600">Klik untuk memilih berkas foto / dokumen (PDF, JPG, PNG)</p>
                <input
                  type="file"
                  onChange={e => {
                    if (e.target.files && e.target.files[0]) {
                      setSimulasiLampiran(e.target.files[0].name);
                    }
                  }}
                  className="mt-2 text-xs text-slate-500 mx-auto block"
                />
                {simulasiLampiran && (
                  <p className="text-xs font-bold text-emerald-700 mt-2">
                    ✓ Berkas terlampir: {simulasiLampiran}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <button
              type="submit"
              className="w-full py-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl text-sm font-extrabold transition flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Pengajuan Surat Sekarang</span>
            </button>
          </div>
        </form>

        {/* Modal Berhasil & Nomor Registrasi */}
        {createdRegNumber && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-150 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-['Playfair_Display',serif]">
                  Pengajuan Berhasil Terkirim!
                </h3>
                <p className="text-xs text-slate-500">
                  Data pengajuan surat Anda telah tersimpan di sistem administrasi Desa Warung Menteng.
                </p>
              </div>

              {/* Reg Number Box */}
              <div className="p-4 bg-emerald-50 rounded-2xl border-2 border-emerald-300 space-y-1">
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                  Nomor Registrasi Surat Anda:
                </span>
                <div className="text-2xl font-black text-emerald-900 font-mono tracking-wider">
                  {createdRegNumber}
                </div>
                <button
                  onClick={handleCopy}
                  className="mt-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center justify-center gap-1 mx-auto bg-white px-3 py-1 rounded-lg border border-emerald-200 shadow-sm"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Tersalin!' : 'Salin Nomor Registrasi'}</span>
                </button>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                Simpan nomor registrasi di atas untuk memeriksa posisi surat pada menu <strong>Cek Status Pengajuan</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => onNavigate('pelayanan-cek-status', { regNumber: createdRegNumber })}
                  className="flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2"
                >
                  <span>Cek Status Surat Sekarang</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setCreatedRegNumber(null)}
                  className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
