// Types definition for Website Desa Warung Menteng

export type PageRoute = 
  | 'beranda'
  // Profil Desa
  | 'profil-desa'
  | 'profil-tentang'
  | 'profil-sejarah'
  | 'profil-galeri'
  | 'profil-pemerintahan'
  | 'profil-lembaga'
  | 'profil-demografi'
  | 'profil-anggaran'
  // Potensi Desa
  | 'potensi-desa'
  | 'potensi-destinasi'
  | 'potensi-akomodasi'
  | 'akomodasi'
  | 'potensi-akomodasi-detail'
  | 'potensi-umkm'
  | 'potensi-umkm-detail'
  | 'potensi-situs-sejarah'
  | 'potensi-budaya'
  | 'potensi-budaya-detail'
  | 'potensi-perikanan'
  | 'potensi-budidaya'
  | 'potensi-budidaya-detail'
  // Informasi Desa & Berita / Humas
  | 'informasi-berita'
  | 'berita-press-release'
  | 'berita-detail'
  | 'berita-galeri'
  | 'informasi-pengumuman'
  | 'informasi-program'
  | 'informasi-galeri'
  | 'informasi-video'
  // Pelayanan Desa
  | 'pelayanan-desa'
  | 'pelayanan-surat-keterangan'
  | 'pelayanan-pindah-datang'
  | 'pelayanan-layanan-pernikahan'
  | 'pelayanan-informasi'
  | 'pelayanan-administrasi'
  | 'pelayanan-persyaratan'
  | 'pelayanan-pengajuan'
  | 'pelayanan-cek-status'
  | 'pelayanan-download'
  // Aspirasi & Pengaduan
  | 'aspirasi-tanya'
  | 'aspirasi-pengaduan'
  | 'aspirasi-aspirasi'
  | 'aspirasi-usulan'
  | 'aspirasi-cek-status'
  // KKN
  | 'kkn'
  | 'kkn-bph'
  | 'kkn-acara'
  | 'kkn-humas'
  | 'kkn-media'
  | 'kkn-latar-belakang'
  | 'kkn-program-kerja'
  | 'kkn-visi-misi'
  | 'kkn-struktural'
  | 'kkn-galeri'
  | 'kkn-proker-1'
  | 'kkn-proker-2'
  | 'kkn-proker-3'
  | 'kkn-proker-4'
  // Kontak Darurat
  | 'kontak-darurat'
  // Admin
  | 'login-admin'
  | 'admin-dashboard';

export type UMKMKategori = 'makanan-minuman' | 'kerajinan' | 'produk-lainnya';

export interface UMKMItem {
  id: string;
  nama: string;
  kategori: UMKMKategori;
  kategoriLabel: string;
  pemilik: string;
  alamat: string;
  harga: string;
  deskripsi: string;
  kontakWA: string;
  fotoUrl: string;
  rating: number;
  unggulan?: boolean;
}

export interface DestinasiItem {
  id: string;
  nama: string;
  kategori: 'Wisata Alam' | 'Agrowisata' | 'Budaya & Religi' | 'Rekreasi Keluarga';
  lokasi: string;
  jamBuka: string;
  htm: string;
  deskripsi: string;
  fasilitas: string[];
  fotoUrl: string;
  kontakPengelola: string;
  rating: number;
}

export interface BudayaItem {
  id: string;
  nama: string;
  kategori: 'Tradisi & Ritual' | 'Seni Pertunjukan' | 'Bela Diri Tradisional' | 'Kearifan Lokal';
  waktuPelaksanaan: string;
  deskripsi: string;
  fotoUrl: string;
  pelaku: string;
}

export interface SitusSejarahItem {
  id: string;
  nama: string;
  periode: string;
  lokasi: string;
  deskripsi: string;
  fotoUrl: string;
  juruKunci: string;
}

export interface PerikananItem {
  id: string;
  namaKomoditas: string;
  namaKelompok: string;
  lokasiBudidaya: string;
  jenisKolam: string;
  kapasitasPanen: string;
  deskripsi: string;
  kontak: string;
  fotoUrl: string;
}

export interface PerangkatDesa {
  id: string;
  nama: string;
  jabatan: string;
  kategori: 'Pemerintah Desa' | 'BPD' | 'LPMD' | 'Kadus';
  nip?: string;
  pendidikan: string;
  tupoksi: string;
  fotoUrl: string;
  kontak?: string;
}

export interface APBDesItem {
  kategori: 'Pendapatan' | 'Belanja' | 'Pembiayaan';
  uraian: string;
  anggaran: number;
  realisasi: number;
  persentase: number;
}

export interface BeritaItem {
  id: string;
  judul: string;
  slug?: string;
  kategori: string;
  tanggal: string;
  penulis: string;
  ringkasan: string;
  isiLengkap: string;
  fotoUrl: string;
  dibaca?: number;
  tags?: string[];
}

export interface PengumumanItem {
  id: string;
  nomorSurat: string;
  judul: string;
  tanggal: string;
  berlakuHingga?: string;
  kategori: string;
  isi: string;
  lampiran?: string;
  penanggungJawab: string;
}

export interface ProgramDesaItem {
  id: string;
  namaProgram: string;
  bidang: 'Infrastruktur' | 'Ekonomi & UMKM' | 'Kesehatan & Gizi' | 'Digitalisasi & Pelayanan' | string;
  anggaran: string;
  sumberDana: string;
  tahun: string;
  progres: number; // 0 - 100
  target: string;
  status: 'Direncanakan' | 'Sedang Berjalan' | 'Selesai' | string;
  lokasi: string;
}

export interface JenisSurat {
  id: string;
  kode: string;
  nama: string;
  deskripsi: string;
  estimasiWaktu: string;
  persyaratan: string[];
  kegunaanUmum: string;
  targetPage?: PageRoute;
  targetParams?: any;
}

export type StatusSurat = 'Diajukan' | 'Verifikasi Berkas' | 'Diproses' | 'Siap Diambil' | 'Ditolak' | 'Selesai';

export interface PermohonanSurat {
  id: string;
  nomorRegistrasi: string;
  tanggalPengajuan: string;
  jenisSuratId?: string;
  jenisSuratNama?: string;
  jenisSurat?: string;
  namaPemohon: string;
  nik: string;
  noKK?: string;
  tempatTanggalLahir?: string;
  jenisKelamin?: 'Laki-laki' | 'Perempuan';
  pekerjaan?: string;
  agama?: string;
  alamatLengkap?: string;
  alamat?: string;
  rt?: string;
  rw?: string;
  dusun?: string;
  nomorWA?: string;
  noWhatsApp?: string;
  keperluan: string;
  keteranganTambahan?: string;
  dokumenLampiranUrl?: string;
  status: any;
  catatanPetugas?: string;
  tanggalSelesai?: string;
  nomorSuratResmi?: string;
}

export type PengajuanSurat = PermohonanSurat;

export type TipeLaporan = 'tanya-informasi' | 'pengaduan' | 'aspirasi';
export type LaporanKategori = TipeLaporan;
export type StatusLaporan = 'Menunggu' | 'Menunggu Verifikasi' | 'Diproses' | 'Sedang Ditindaklanjuti' | 'Selesai' | 'Ditolak';

export interface LaporanWarga {
  id: string;
  nomorTiket?: string;
  kodeTiket?: string;
  kategori?: string;
  tipe?: TipeLaporan;
  namaPelapor: string;
  isAnonim: boolean;
  nik?: string;
  nomorWA?: string;
  kontakWA?: string;
  judul: string;
  isiLaporan: string;
  lokasiKejadian?: string;
  fotoBuktiUrl?: string;
  tanggalLapor?: string;
  tanggalKirim?: string;
  status: any;
  responPetugas?: string;
  tanggapanResmi?: string;
  tanggalRespon?: string;
  tanggalTanggapan?: string;
  petugasPenanggap?: string;
}

export type LaporanAspirasi = LaporanWarga;

export interface KontakDaruratItem {
  id: string;
  namaLayanan?: string;
  namaKontak?: string;
  instansi: string;
  kategori: string;
  nomorTelepon: string;
  nomorWA?: string;
  alamatPos?: string;
  alamat?: string;
  siaga: string;
  namaPetugas?: string;
  deskripsi?: string;
  keterangan?: string;
  iconName?: string;
}

export interface GaleriItem {
  id: string;
  judul: string;
  kategori: 'Kegiatan Warga' | 'Pembangunan' | 'Tradisi & Budaya' | 'Wisata & Alam' | string;
  tanggal: string;
  fotoUrl: string;
  deskripsi: string;
}

export interface LembagaItem {
  id: string;
  nama: string;
  singkatan: string;
  ketua: string;
  deskripsi: string;
  jumlahAnggota: number;
  kontak: string;
  fotoUrl: string;
  programUtama: string[];
}

export interface DokumenDownloadItem {
  id: string;
  judul: string;
  kategori: 'Formulir Surat' | 'Regulasi & Perdes' | 'Laporan Transparansi' | 'Panduan Layanan';
  ukuran: string;
  format: 'PDF' | 'DOCX' | 'XLSX';
  tanggalUpdate: string;
  deskripsi: string;
  jumlahUnduh: number;
  downloadUrl: string;
}

