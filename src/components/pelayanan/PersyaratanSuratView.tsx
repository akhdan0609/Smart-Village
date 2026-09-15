import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, FileText } from 'lucide-react';
import { PageRoute } from '../../types';

interface PilihanSurat {
  id: string;
  no: number;
  nama: string;
  page: PageRoute;
  params: any;
  deskripsi: string;
  estimasiWaktu: string;
  persyaratan: string[];
  kegunaanUmum: string;
}

const PILIHAN_SURAT_LIST: PilihanSurat[] = [
  {
    id: 'domisili-warga',
    no: 1,
    nama: 'Surat Keterangan Domisili Warga',
    page: 'pelayanan-surat-keterangan',
    params: { defaultJenis: 'domisili-warga' },
    deskripsi: 'Surat keterangan resmi yang menyatakan bahwa warga benar-benar berdomisili dan bertempat tinggal di wilayah Desa Warung Menteng.',
    estimasiWaktu: '1 Hari Kerja',
    persyaratan: [
      'Foto / Scan e-KTP Pemohon yang masih berlaku',
      'Foto / Scan Kartu Keluarga (KK)',
      'Surat Pengantar dari Ketua RT & RW setempat'
    ],
    kegunaanUmum: 'Verifikasi domisili untuk sekolah zonasi, pembukaan rekening bank, administrasi jaminan sosial, dan keperluan administratif lainnya.'
  },
  {
    id: 'sku',
    no: 2,
    nama: 'Surat Keterangan Usaha (SKU)',
    page: 'pelayanan-surat-keterangan',
    params: { defaultJenis: 'domisili-usaha' },
    deskripsi: 'Surat keterangan resmi yang menyatakan bahwa pemohon memiliki usaha aktif di wilayah Desa Warung Menteng.',
    estimasiWaktu: '1 Hari Kerja (Bisa Instan jika berkas lengkap)',
    persyaratan: [
      'Foto / Scan e-KTP Pemohon yang masih berlaku',
      'Foto / Scan Kartu Keluarga (KK)',
      'Surat Pengantar dari RT & RW setempat',
      'Foto Tempat Usaha / Produk Usaha',
      'Data Jenis Usaha & Alamat Lokasi Usaha'
    ],
    kegunaanUmum: 'Pengajuan pinjaman KUR Bank (BRI/BSI/Mandiri), izin UMKM, syarat pembukaan rekening bisnis, lelang, dll.'
  },
  {
    id: 'sktm',
    no: 3,
    nama: 'Surat Keterangan Tidak Mampu (SKTM)',
    page: 'pelayanan-surat-keterangan',
    params: { defaultJenis: 'sktm' },
    deskripsi: 'Surat yang menerangkan bahwa keluarga pemohon tergolong keluarga prasejahtera untuk keperluan bantuan sosial atau pendidikan.',
    estimasiWaktu: '1 Hari Kerja',
    persyaratan: [
      'Foto / Scan e-KTP Pemohon & Kepala Keluarga',
      'Foto / Scan Kartu Keluarga (KK)',
      'Surat Pengantar RT & RW yang menyatakan kondisi ekonomi keluarga',
      'Foto Kondisi Rumah Tampak Depan',
      'Surat Pernyataan Tidak Mampu bermaterai (opsional jika untuk beasiswa)'
    ],
    kegunaanUmum: 'Keringanan biaya RS/BPJS PBI, beasiswa sekolah/kuliah (KIP-Kuliah), permohonan bantuan hukum, dll.'
  },
  {
    id: 'kematian',
    no: 4,
    nama: 'Surat Keterangan Kematian',
    page: 'pelayanan-surat-keterangan',
    params: { defaultJenis: 'kematian' },
    deskripsi: 'Surat resmi yang menerangkan telah meninggal dunianya seorang warga Desa Warung Menteng.',
    estimasiWaktu: '1 Hari Kerja',
    persyaratan: [
      'Surat Pengantar dari Ketua RT dan RW setempat',
      'Fotokopi KTP almarhum / almarhumah',
      'Fotokopi Kartu Keluarga (KK) yang masih berlaku',
      'Fotokopi KTP pelapor (keluarga / ahli waris)',
      'Surat keterangan penyebab kematian dari dokter / Puskesmas / Rumah Sakit (bila meninggal karena sakit)',
      'Berita acara / laporan kepolisian (bila meninggal karena kecelakaan atau peristiwa lain)'
    ],
    kegunaanUmum: 'Penerbitan Akta Kematian Disdukcapil, pengurusan asuransi/BPJS Ketenagakerjaan, penutupan rekening bank, hak waris.'
  },
  {
    id: 'pindah-keluar',
    no: 5,
    nama: 'Surat Keterangan Pindah Keluar Desa',
    page: 'pelayanan-pindah-datang',
    params: { defaultJenis: 'pindah-keluar' },
    deskripsi: 'Surat pengantar perpindahan penduduk dari Desa Warung Menteng ke desa/kelurahan/kota lain.',
    estimasiWaktu: '2 Hari Kerja',
    persyaratan: [
      'Foto / Scan e-KTP seluruh anggota keluarga yang pindah',
      'Foto / Scan Kartu Keluarga (KK) Asli',
      'Surat Pengantar Pindah dari RT & RW',
      'Alamat Tujuan Pindah Lengkap (RT/RW, Desa, Kec, Kab/Kota, Provinsi)',
      'Pas foto 3x4 (3 lembar)'
    ],
    kegunaanUmum: 'Pengurusan Surat Keterangan Pindah WNI (SKPWNI) di Disdukcapil.'
  },
  {
    id: 'pindah-datang',
    no: 6,
    nama: 'Pendaftaran Warga Pindah Datang Baru',
    page: 'pelayanan-pindah-datang',
    params: { defaultJenis: 'pindah-datang' },
    deskripsi: 'Pendaftaran dan penerbitan Surat Keterangan Pindah Datang (SKPDT) bagi warga yang baru pindah masuk ke Desa Warung Menteng dari luar daerah.',
    estimasiWaktu: '2 Hari Kerja',
    persyaratan: [
      'Fotokopi & asli e-KTP seluruh anggota keluarga yang pindah',
      'Fotokopi & asli Kartu Keluarga (KK) dari daerah asal',
      'Surat Keterangan Pindah (SKPWNI) dari Disdukcapil daerah asal',
      'Surat Pengantar dari Ketua RT & RW tujuan',
      'Pas foto 3x4 (3 lembar) kepala keluarga'
    ],
    kegunaanUmum: 'Pembaruan data kependudukan, penerbitan KK/e-KTP baru, dan pindah masuk data Disdukcapil.'
  },
  {
    id: 'n1-n4',
    no: 7,
    nama: 'Formulir N1-N4',
    page: 'pelayanan-layanan-pernikahan',
    params: { defaultTab: 'formulir-n1-n4' },
    deskripsi: 'Pengisian dan penerbitan Formulir Model N1, N2, N3, dan N4 untuk administrasi pendaftaran pernikahan di KUA.',
    estimasiWaktu: '1 Hari Kerja',
    persyaratan: [
      'Surat Pengantar dari Ketua RT dan RW domisili',
      'Fotokopi KTP & Kartu Keluarga (KK) calon mempelai (2 lembar)',
      'Fotokopi KTP kedua orang tua / wali nikah',
      'Fotokopi Akta Kelahiran & Ijazah Terakhir calon pengantin',
      'Pas foto bergandeng / berdampingan latar biru (2x3 = 4 lbr, 4x6 = 2 lbr)',
      'Surat Keterangan Imunisasi TT dari Puskesmas (untuk calon istri)',
      'Bila status duda/janda: Akta Cerai Asli atau Akta Kematian pasangan'
    ],
    kegunaanUmum: 'Syarat pendaftaran akad nikah ke Kantor Urusan Agama (KUA) Kecamatan Cijeruk.'
  },
  {
    id: 'belum-nikah',
    no: 8,
    nama: 'Surat Keterangan Belum Nikah',
    page: 'pelayanan-layanan-pernikahan',
    params: { defaultTab: 'belum-nikah' },
    deskripsi: 'Surat keterangan yang menyatakan bahwa warga yang bersangkutan berstatus lajang / belum pernah menikah.',
    estimasiWaktu: '1 Hari Kerja',
    persyaratan: [
      'Foto / Scan e-KTP Pemohon',
      'Foto / Scan Kartu Keluarga (KK)',
      'Surat Pengantar RT & RW',
      'Surat Pernyataan Belum Pernah Menikah bermaterai Rp 10.000'
    ],
    kegunaanUmum: 'Persyaratan melamar pekerjaan tertentu, pendaftaran KPR rumah subsidi, beasiswa ikatan dinas, dan administrasi pernikahan.'
  },
  {
    id: 'sk-na',
    no: 9,
    nama: 'Surat Keterangan NA (Numpang Nikah)',
    page: 'pelayanan-layanan-pernikahan',
    params: { defaultTab: 'sk-na' },
    deskripsi: 'Surat keterangan NA (Numpang Nikah) status lajang untuk pelaksanaan pernikahan di luar domisili / KUA lain.',
    estimasiWaktu: '1 Hari Kerja',
    persyaratan: [
      'Surat Pengantar dari Ketua RT dan RW domisili',
      'Fotokopi KTP & Kartu Keluarga (KK) calon mempelai',
      'Fotokopi KTP kedua orang tua / wali nikah',
      'Surat Pernyataan bermaterai bahwa pernikahan dilangsungkan di luar domisili (numpang nikah)',
      'Pas foto bergandeng / berdampingan latar biru (2x3 = 4 lbr, 4x6 = 2 lbr)'
    ],
    kegunaanUmum: 'Pernikahan di KUA di luar Kecamatan Cijeruk / di luar domisili calon mempelai.'
  },
  {
    id: 'kelahiran',
    no: 10,
    nama: 'Surat Keterangan Kelahiran',
    page: 'pelayanan-pengajuan',
    params: { defaultSuratId: 'sk-kelahiran' },
    deskripsi: 'Surat keterangan kelahiran dari desa sebagai pengantar pembuatan Akta Kelahiran di Disdukcapil Kab. Bogor.',
    estimasiWaktu: '1 Hari Kerja',
    persyaratan: [
      'Surat Keterangan Lahir dari Bidan / Rumah Sakit / Puskesmas',
      'Foto / Scan e-KTP Orang Tua (Ayah & Ibu)',
      'Foto / Scan Kartu Keluarga (KK)',
      'Foto / Scan Buku Nikah Orang Tua',
      'Foto / Scan e-KTP 2 orang saksi kelahiran'
    ],
    kegunaanUmum: 'Pembuatan Akta Kelahiran anak, pendaftaran BPJS Bayi Baru Lahir, penambahan anggota KK.'
  }
];

interface PersyaratanSuratProps {
  onNavigate: (page: PageRoute, params?: any) => void;
}

export const PersyaratanSuratView: React.FC<PersyaratanSuratProps> = ({ onNavigate }) => {
  const [selectedSuratId, setSelectedSuratId] = useState<string>(PILIHAN_SURAT_LIST[0].id);

  const selectedSurat = PILIHAN_SURAT_LIST.find(s => s.id === selectedSuratId) || PILIHAN_SURAT_LIST[0];

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="bg-emerald-500/30 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-400/30">
              Daftar Layanan Surat
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Playfair_Display',serif]">
              Persyaratan Pengajuan Surat
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Panduan lengkap syarat berkas untuk pengajuan surat keterangan domisili, SKU, SKTM, kematian, pindah keluar & datang, layanan pernikahan, dan surat administrasi kependudukan lainnya.
            </p>
          </div>
        </div>

        {/* Master Detail Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Kolom Kiri: Menu Jenis Surat */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-2">
            <div className="px-3 py-1 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Pilih Jenis Surat:
              </span>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                10 Layanan
              </span>
            </div>
            {PILIHAN_SURAT_LIST.map(surat => (
              <button
                key={surat.id}
                onClick={() => setSelectedSuratId(surat.id)}
                className={`w-full text-left p-4 rounded-2xl transition flex items-center justify-between ${
                  selectedSuratId === surat.id
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-800'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`mt-0.5 w-6 h-6 shrink-0 rounded-lg flex items-center justify-center text-[11px] font-extrabold ${
                    selectedSuratId === surat.id ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {surat.no}
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold leading-snug">{surat.nama}</h4>
                    <p className={`text-[11px] mt-0.5 ${selectedSuratId === surat.id ? 'text-emerald-100' : 'text-slate-500'}`}>
                      Estimasi: {surat.estimasiWaktu} • Biaya: Gratis (Rp 0)
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            ))}
          </div>

          {/* Kolom Kanan: Detail Persyaratan */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-0.5 rounded-full">
                Layanan Administrasi Desa
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2 font-['Playfair_Display',serif]">
                {selectedSurat.nama}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {selectedSurat.deskripsi}
              </p>
            </div>

            {/* Syarat List */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Dokumen yang Wajib Disiapkan:
              </h4>
              <div className="space-y-2">
                {selectedSurat.persyaratan.map((syarat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700">{syarat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Waktu & Biaya */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 text-xs">
              <div>
                <span className="text-slate-500 block text-[11px]">Waktu Pemrosesan:</span>
                <span className="font-extrabold text-slate-900">{selectedSurat.estimasiWaktu}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Biaya Retribusi:</span>
                <span className="font-extrabold text-emerald-800">Gratis (Rp 0 / Bebas Pungli)</span>
              </div>
            </div>

            {/* Kegunaan Umum */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
              <span className="font-bold text-slate-800 block mb-1">Kegunaan Umum:</span>
              <p className="text-slate-600 leading-relaxed">{selectedSurat.kegunaanUmum}</p>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                onClick={() => onNavigate(selectedSurat.page, selectedSurat.params)}
                className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Ajukan {selectedSurat.nama} Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-2">
                Dikirim langsung ke halaman pengajuan {selectedSurat.nama}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};