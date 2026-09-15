// Page Routes
export type PageRoute =
  | 'beranda'
  | 'profil-desa'
  | 'profil-tentang'
  | 'profil-sejarah'
  | 'profil-galeri'
  | 'profil-pemerintahan'
  | 'profil-lembaga'
  | 'profil-demografi'
  | 'profil-anggaran'
  | 'potensi-desa'
  | 'potensi-destinasi'
  | 'potensi-akomodasi'
  | 'akomodasi'
  | 'potensi-umkm'
  | 'potensi-umkm-detail'
  | 'potensi-budaya'
  | 'potensi-situs-sejarah'
  | 'potensi-perikanan'
  | 'potensi-budidaya'
  | 'berita-press-release'
  | 'informasi-berita'
  | 'berita-detail'
  | 'berita-galeri'
  | 'informasi-pengumuman'
  | 'informasi-program'
  | 'informasi-galeri'
  | 'informasi-video'
  | 'pelayanan-desa'
  | 'pelayanan-surat-keterangan'
  | 'pelayanan-pindah-datang'
  | 'pelayanan-layanan-pernikahan'
  | 'pelayanan-informasi'
  | 'pelayanan-persyaratan'
  | 'pelayanan-pengajuan'
  | 'pelayanan-cek-status'
  | 'pelayanan-download'
  | 'aspirasi-tanya'
  | 'aspirasi-pengaduan'
  | 'aspirasi-usulan'
  | 'aspirasi-cek-status'
  | 'kkn-bph'
  | 'kkn-acara'
  | 'kkn-humas'
  | 'kkn-media'
  | 'kkn-latar-belakang'
  | 'kkn-program-kerja'
  | 'kkn-visi-misi'
  | 'kkn-struktural'
  | 'kkn-galeri'
  | 'kkn'
  | 'kontak-darurat'
  | 'login-admin'
  | 'admin-dashboard';

// Perangkat Desa
export interface PerangkatDesa {
  id: string;
  nama: string;
  jabatan: string;
  kategori: string;
  pendidikan: string;
  tupoksi: string;
  fotoUrl: string;
}

// Destinasi Wisata
export interface DestinasiItem {
  id: string;
  nama: string;
  kategori: string;
  lokasi: string;
  jamBuka: string;
  htm: string;
  deskripsi: string;
  fasilitas: string[];
  fotoUrl: string;
  kontakPengelola: string;
  rating: number;
}

// UMKM
export interface UMKMItem {
  id: string;
  nama: string;
  kategori: 'makanan-minuman' | 'kerajinan-souvenir' | 'jasa-layanan';
  kategoriLabel: string;
  pemilik: string;
  alamat: string;
  harga: string;
  deskripsi: string;
  kontakWA: string;
  fotoUrl: string;
  rating: number;
}

// Budaya & Adat
export interface BudayaItem {
  id: string;
  nama: string;
  kategori: string;
  lokasi: string;
  deskripsi: string;
  fotoUrl: string;
  alatRitualUrl?: string;
  fungsi: string;
  pelestari: string;
}

// Situs Sejarah
export interface SitusSejarahItem {
  id: string;
  nama: string;
  tahun: string;
  lokasi: string;
  deskripsi: string;
  fotoUrl: string;
  signifikansi: string;
}

// Perikanan
export interface PerikananItem {
  id: string;
  nama: string;
  jenisIkan: string;
  lokasi: string;
  luasTambak: string;
  deskripsi: string;
  fotoUrl: string;
  produksiPerTahun: string;
  pemilik: string;
}

// APBDes (Anggaran Pendapatan Belanja Desa)
export interface APBDesItem {
  kategori: 'Pendapatan' | 'Belanja';
  uraian: string;
  anggaran: number;
  realisasi: number;
  persentase: number;
}

// Berita
export interface BeritaItem {
  id: string;
  judul: string;
  slug: string;
  kategori: string;
  tanggal: string;
  penulis: string;
  ringkasan: string;
  isiLengkap: string;
  fotoUrl: string;
  dibaca: number;
  tags: string[];
}

// Pengumuman
export interface PengumumanItem {
  id: string;
  judul: string;
  kategori: string;
  tanggal: string;
  deskripsi: string;
  link?: string;
  fotoUrl?: string;
}

// Program Desa
export interface ProgramDesaItem {
  id: string;
  nama: string;
  kategori: string;
  periode: string;
  deskripsi: string;
  target: string;
  fotoUrl: string;
}

// Jenis Surat
export interface JenisSurat {
  id: string;
  nama: string;
  kategori: string;
  deskripsi: string;
  persyaratan: string[];
  biaya: string;
  waktuProses: string;
  fotoUrl?: string;
}

// Permohonan Surat
export interface PermohonanSurat {
  id: string;
  namaLengkap: string;
  nik: string;
  noKK: string;
  alamat: string;
  jenisPermohonan: string;
  tujuanPenggunaan: string;
  statusPermohonan: 'menunggu-verifikasi' | 'diverifikasi' | 'dalam-pemprosesan' | 'siap-diambil' | 'sudah-diambil';
  nomorReg: string;
  tanggalPengusulan: string;
  tanggalSelesai?: string;
}

// Laporan / Aspirasi Warga
export interface LaporanWarga {
  id: string;
  nama: string;
  email: string;
  noTelepon: string;
  judul: string;
  kategori: 'tanya-informasi' | 'pengaduan' | 'aspirasi';
  deskripsi: string;
  buktiFile?: string;
  statusPengaduan: 'baru' | 'sedang-ditangani' | 'selesai' | 'ditindaklanjuti';
  tanggalMasuk: string;
  nomorReg: string;
}

// Kontak Darurat
export interface KontakDaruratItem {
  id: string;
  namaLayanan: string;
  instansi: string;
  kategori: string;
  nomorTelepon: string;
  nomorWA: string;
  alamatPos: string;
  siaga: string;
  namaPetugas: string;
  deskripsi: string;
  iconName?: string;
}

// Galeri
export interface GaleriItem {
  id: string;
  judul: string;
  kategori: string;
  fotoUrl: string;
  tanggal: string;
  deskripsi: string;
}

// Lembaga Desa
export interface LembagaItem {
  id: string;
  nama: string;
  kategori: string;
  ringkasan: string;
  deskripsi: string;
  fotoUrl: string;
  ketua: string;
  kontak: string;
  alamat: string;
  bidangKerja: string[];
}

// Dokumen Download
export interface DokumenDownloadItem {
  id: string;
  nama: string;
  kategori: string;
  deskripsi: string;
  fileUrl: string;
  tanggalUnggah: string;
  ukuranFile: string;
  jenisBerkas: string;
}
