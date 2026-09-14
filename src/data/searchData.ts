import { PageRoute } from '../types';

export interface SearchItem {
  id: string;
  title: string;
  desc: string;
  page: PageRoute;
  params?: any;
  category: 
    | 'Utama' 
    | 'Profil' 
    | 'Potensi' 
    | 'Pelayanan' 
    | 'KKN' 
    | 'HUMAS' 
    | 'Berita' 
    | 'Darurat' 
    | 'Perangkat' 
    | 'Lembaga' 
    | 'UMKM' 
    | 'Wisata' 
    | 'Budaya';
  keywords: string[];
}

export const SEARCH_DATABASE: SearchItem[] = [
  // =========================================================================
  // 1. HALAMAN UTAMA & BERANDA
  // =========================================================================
  {
    id: 'beranda-utama',
    title: 'Beranda Desa Warung Menteng',
    desc: 'Halaman utama portal informasi resmi Desa Warung Menteng, Kecamatan Cijeruk, Bogor',
    page: 'beranda',
    category: 'Utama',
    keywords: ['beranda', 'home', 'halaman utama', 'desa warung menteng', 'cijeruk', 'bogor', 'portal']
  },
  {
    id: 'beranda-sambutan',
    title: 'Sambutan Kepala Desa (A. Zaenal Arifin)',
    desc: 'Pesan dan visi kepemimpinan Kepala Desa Warung Menteng untuk kesejahteraan masyarakat',
    page: 'beranda',
    category: 'Utama',
    keywords: ['sambutan', 'kepala desa', 'kades', 'zaenal arifin', 'visi misi', 'pembukaan']
  },
  {
    id: 'aspirasi-pengaduan',
    title: 'Aspirasi & Pengaduan Warga Online',
    desc: 'Kanal penyampaian saran, aspirasi pembangunan, dan aduan pelayanan publik warga',
    page: 'aspirasi-pengaduan',
    category: 'Utama',
    keywords: ['aspirasi', 'pengaduan', 'lapor', 'keluhan', 'saran', 'masukan', 'suara warga', 'aduan']
  },
  {
    id: 'login-admin',
    title: 'Login Portal Administrator Desa',
    desc: 'Akses login khusus perangkat desa untuk verifikasi surat, berita, dan pengelolaan portal',
    page: 'login-admin',
    category: 'Utama',
    keywords: ['login', 'admin', 'administrator', 'masuk', 'petugas', 'dashboard', 'operator']
  },

  // =========================================================================
  // 2. PROFIL DESA & JAJARAN PEMERINTAHAN
  // =========================================================================
  {
    id: 'profil-resmi',
    title: 'Profil Resmi Desa Warung Menteng',
    desc: 'Karakteristik geografis, visi misi, potensi umum, dan identitas kelembagaan desa',
    page: 'profil-desa',
    category: 'Profil',
    keywords: ['profil', 'tentang desa', 'geografis', 'wilayah', 'karakteristik', 'profil desa']
  },
  {
    id: 'profil-tentang',
    title: 'Tentang Desa (9 Infografis Wilayah & Sejarah)',
    desc: 'Peta batas desa, luas 324 hektar, 3 dusun, 8 RW, 24 RT, dan ringkasan demografi',
    page: 'profil-tentang',
    category: 'Profil',
    keywords: ['tentang desa', 'infografis', 'peta desa', 'luas wilayah', 'rt', 'rw', 'dusun', 'batas wilayah']
  },
  {
    id: 'profil-sejarah',
    title: 'Sejarah Desa & Asal Usul Pohon Menteng',
    desc: 'Asal-usul nama Desa Warung Menteng dari pohon buah menteng kuno dan warung persinggahan saudagar',
    page: 'profil-sejarah',
    category: 'Profil',
    keywords: ['sejarah', 'asal usul', 'pohon menteng', 'buah menteng', 'warung menteng', 'saudagar', 'cerita rakyat', 'masa lalu']
  },
  {
    id: 'situs-sejarah',
    title: 'Situs Sejarah & Cagar Budaya Cijeruk',
    desc: 'Makam Buyut Cijeruk, Menhir Megalitikum, dan Rumah Adat Panggung Sunda Kuno',
    page: 'potensi-situs-sejarah',
    category: 'Profil',
    keywords: ['situs sejarah', 'cagar budaya', 'makam buyut', 'menhir', 'megalitikum', 'batu kuno', 'rumah panggung', 'sunda', 'arkeologi']
  },
  {
    id: 'struktur-organisasi',
    title: 'Struktur Organisasi Pemerintahan Desa',
    desc: 'Bagan pohon hierarki Kepala Desa, Sekretaris Desa, para Kasi, Kaur, dan Kepala Dusun',
    page: 'profil-pemerintahan',
    category: 'Profil',
    keywords: ['struktur organisasi', 'pemerintahan desa', 'perangkat desa', 'hierarki', 'bagan', 'aparatur desa', 'kantor desa']
  },
  {
    id: 'kades-zaenal',
    title: 'Kepala Desa: A. Zaenal Arifin, S.Ag.',
    desc: 'Pimpinan tertinggi Pemerintahan Desa Warung Menteng periode aktif',
    page: 'profil-pemerintahan',
    category: 'Perangkat',
    keywords: ['kepala desa', 'kades', 'zaenal arifin', 'a zaenal arifin', 'pimpinan desa', 'lurah']
  },
  {
    id: 'sekdes-agil',
    title: 'Sekretaris Desa: Agil Asmi Farizi, S.H.',
    desc: 'Koordinator administrasi umum, perencanaan, regulasi, dan pelayanan kantor desa',
    page: 'profil-pemerintahan',
    category: 'Perangkat',
    keywords: ['sekdes', 'sekretaris desa', 'agil asmi farizi', 'agil', 'administrasi', 'surat menyurat']
  },
  {
    id: 'bendahara-nasrudin',
    title: 'Bendahara Desa: Nasrudin',
    desc: 'Pengelola penatausahaan keuangan, kas desa, dan pelaporan realisasi APBDes',
    page: 'profil-pemerintahan',
    category: 'Perangkat',
    keywords: ['bendahara', 'nasrudin', 'kaur keuangan', 'anggaran', 'kas desa', 'spb']
  },
  {
    id: 'kasi-pem-fajar',
    title: 'Kasi Pemerintahan: M. Fajar Sandika',
    desc: 'Urusan tata praja desa, kependudukan KTP/KK, pertanahan, ketertiban umum',
    page: 'profil-pemerintahan',
    category: 'Perangkat',
    keywords: ['kasi pemerintahan', 'fajar sandika', 'm fajar sandika', 'tata praja', 'kependudukan', 'pertanahan']
  },
  {
    id: 'kasi-kesra-risman',
    title: 'Kasi Kesejahteraan (Kesra): M. Risman',
    desc: 'Pembangunan sarana prasarana, bidang sosial, keagamaan, pendidikan, dan kesehatan warga',
    page: 'profil-pemerintahan',
    category: 'Perangkat',
    keywords: ['kasi kesra', 'kesejahteraan', 'risman', 'm risman', 'sosial', 'keagamaan', 'sarpras']
  },
  {
    id: 'kasi-pelayanan-alwi',
    title: 'Kasi Pelayanan: M. Alwi Farhan Jamil',
    desc: 'Penyelenggaraan pelayanan dokumen, pengantar surat menyurat, dan pembinaan pemuda',
    page: 'profil-pemerintahan',
    category: 'Perangkat',
    keywords: ['kasi pelayanan', 'alwi farhan jamil', 'm alwi farhan', 'pelayanan surat', 'legalisir']
  },
  {
    id: 'kasi-perencanaan-farhan',
    title: 'Kasi Perencanaan: M. Farhan Maulana',
    desc: 'Penyusunan RPJMDes, RKPDes, musrenbangdes, pengumpulan data dan evaluasi pembangunan',
    page: 'profil-pemerintahan',
    category: 'Perangkat',
    keywords: ['kasi perencanaan', 'farhan maulana', 'm farhan maulana', 'rkpdes', 'rpjmdes', 'musrenbang']
  },
  {
    id: 'kasi-tutr-rizky',
    title: 'Kasi TUTR / Tata Usaha & Umum: M. Rizky Saefah',
    desc: 'Pengelolaan tata persuratan naskah dinas, kearsipan, dan inventaris barang milik desa',
    page: 'profil-pemerintahan',
    category: 'Perangkat',
    keywords: ['tutr', 'tata usaha', 'rizky saefah', 'm rizky saefah', 'umum', 'inventaris', 'arsip']
  },
  {
    id: 'kadus-1-bagus',
    title: 'Kepala Dusun I (Menteng Girang): Bagus Hadi',
    desc: 'Koordinator wilayah dan pembina ketertiban Dusun 1 Menteng Girang',
    page: 'profil-pemerintahan',
    category: 'Perangkat',
    keywords: ['kadus', 'kadus 1', 'menteng girang', 'bagus hadi', 'kepala dusun 1']
  },
  {
    id: 'kadus-2-rahmat',
    title: 'Kepala Dusun II (Menteng Tengah): Rahmat Setiyono',
    desc: 'Koordinator wilayah dan pembina ketertiban Dusun 2 Menteng Tengah',
    page: 'profil-pemerintahan',
    category: 'Perangkat',
    keywords: ['kadus', 'kadus 2', 'menteng tengah', 'rahmat setiyono', 'kepala dusun 2']
  },
  {
    id: 'kadus-3-diki',
    title: 'Kepala Dusun III (Menteng Hilir & Cimenteng): Diki Mahardika',
    desc: 'Koordinator wilayah dan pembina ketertiban Dusun 3 Menteng Hilir',
    page: 'profil-pemerintahan',
    category: 'Perangkat',
    keywords: ['kadus', 'kadus 3', 'menteng hilir', 'cimenteng', 'diki mahardika', 'kepala dusun 3']
  },
  {
    id: 'lembaga-bpd',
    title: 'BPD (Badan Permusyawaratan Desa)',
    desc: 'Lembaga legislasi desa penampung aspirasi masyarakat dan pengawas jalannya peraturan desa',
    page: 'profil-lembaga',
    category: 'Lembaga',
    keywords: ['bpd', 'badan permusyawaratan desa', 'legislatif desa', 'perdes', 'aspirasi', 'pengawasan']
  },
  {
    id: 'lembaga-lpmd',
    title: 'LPMD (Lembaga Pemberdayaan Masyarakat Desa)',
    desc: 'Mitra pemerintah desa dalam merencanakan pembangunan partisipatif dan gotong royong warga',
    page: 'profil-lembaga',
    category: 'Lembaga',
    keywords: ['lpmd', 'lpm', 'pemberdayaan masyarakat', 'gotong royong', 'pembangunan']
  },
  {
    id: 'lembaga-pkk',
    title: 'TP-PKK Desa Warung Menteng',
    desc: 'Gerakan pemberdayaan kesejahteraan keluarga, posyandu balita & lansia, ketahanan pangan',
    page: 'profil-lembaga',
    category: 'Lembaga',
    keywords: ['pkk', 'tp pkk', 'ibu pkk', 'posyandu', 'kesejahteraan keluarga', 'wanita', 'balita']
  },
  {
    id: 'lembaga-karang-taruna',
    title: 'Karang Taruna "Karya Mandiri"',
    desc: 'Wadah pembinaan generasi muda, kepemudaan, turnamen olahraga, dan aksi kepedulian sosial',
    page: 'profil-lembaga',
    category: 'Lembaga',
    keywords: ['karang taruna', 'pemuda', 'karya mandiri', 'olahraga', 'sosial', 'generasi muda']
  },
  {
    id: 'lembaga-linmas',
    title: 'Linmas / Hansip Desa Warung Menteng',
    desc: 'Satuan perlindungan masyarakat penjaga pos ronda, keamanan, ketertiban, dan tanggap bencana',
    page: 'profil-lembaga',
    category: 'Lembaga',
    keywords: ['linmas', 'hansip', 'keamanan', 'ronda', 'poskamling', 'ketertiban', 'patroli']
  },
  {
    id: 'demografi-desa',
    title: 'Demografi & Statistik Penduduk',
    desc: 'Jumlah penduduk 8.420 jiwa, komposisi jenis kelamin, kelompok usia, mata pencaharian, dan KK',
    page: 'profil-demografi',
    category: 'Profil',
    keywords: ['demografi', 'statistik', 'data penduduk', 'jumlah warga', 'piramida usia', 'kartu keluarga', 'jumlah jiwa', 'kelahiran']
  },
  {
    id: 'anggaran-apbdes',
    title: 'Transparansi Anggaran Desa (APBDes)',
    desc: 'Laporan realisasi pendapatan desa, dana desa (DD), ADD, PADes, belanja fisik dan pemberdayaan',
    page: 'profil-anggaran',
    category: 'Profil',
    keywords: ['anggaran', 'apbdes', 'dana desa', 'keuangan', 'transparansi', 'pad', 'add', 'belanja desa', 'laporan keuangan']
  },
  {
    id: 'galeri-desa',
    title: 'Galeri Foto & Dokumentasi Desa',
    desc: 'Album dokumentasi keindahan alam, kegiatan masyarakat, gotong royong, dan tradisi desa',
    page: 'profil-galeri',
    category: 'Profil',
    keywords: ['galeri', 'foto', 'dokumentasi', 'album', 'pemandangan', 'kegiatan warga']
  },

  // =========================================================================
  // 3. POTENSI DESA, WISATA, UMKM, BUDAYA & BUDIDAYA
  // =========================================================================
  {
    id: 'potensi-utama',
    title: 'Potensi Unggulan Desa Warung Menteng',
    desc: 'Kekayaan destinasi alam kaki Gunung Salak, komoditas perkebunan kopi, UMKM, dan budaya',
    page: 'potensi-desa',
    category: 'Potensi',
    keywords: ['potensi', 'potensi desa', 'kekayaan alam', 'ekonomi desa', 'gunung salak', 'agrowisata']
  },
  {
    id: 'wisata-curug-cibaliung',
    title: 'Wisata Alam: Curug Cibaliung Menteng',
    desc: 'Air terjun alami dengan air jernih dingin dari mata air Gunung Salak, cocok untuk rekreasi alam',
    page: 'potensi-akomodasi',
    category: 'Wisata',
    keywords: ['curug', 'air terjun', 'curug cibaliung', 'cibaliung', 'wisata air', 'gunung salak', 'sungai jernih', 'destinasi']
  },
  {
    id: 'wisata-bukit-menteng',
    title: 'Wisata Alam: Bukit Pemandangan Menteng',
    desc: 'Sunrise point dengan pemandangan lembah Cijeruk nan hijau dan Gunung Gede Pangrango',
    page: 'potensi-akomodasi',
    category: 'Wisata',
    keywords: ['bukit menteng', 'sunrise', 'view', 'pemandangan', 'lembah', 'gunung gede', 'spot foto']
  },
  {
    id: 'wisata-camping-ground',
    title: 'Lembah Hijau Camping Ground & Outbound',
    desc: 'Area perkemahan keluarga, outbound sekolah/komunitas, udara sejuk di bawah rindang pinus',
    page: 'potensi-akomodasi',
    category: 'Wisata',
    keywords: ['camping', 'kemah', 'camping ground', 'lembah hijau', 'outbound', 'tenda', 'wisata alam']
  },
  {
    id: 'wisata-akomodasi-villa',
    title: 'Akomodasi Desa & Homestay Ramah Lingkungan',
    desc: 'Penginapan homestay warga dan villa bernuansa arsitektur Sunda tradisional',
    page: 'potensi-akomodasi',
    category: 'Wisata',
    keywords: ['akomodasi', 'homestay', 'villa', 'penginapan', 'menginap', 'hotel', 'sewa kamar']
  },
  {
    id: 'umkm-katalog',
    title: 'Katalog UMKM & Produk Lokal Warga',
    desc: 'Daftar produk kuliner olahan, kerajinan tangan, kopi robusta, dan madu hutan binaan desa',
    page: 'potensi-umkm',
    category: 'UMKM',
    keywords: ['umkm', 'produk lokal', 'katalog umkm', 'jualan', 'usaha warga', 'oleh oleh', 'kuliner']
  },
  {
    id: 'umkm-kopi-robusta',
    title: 'UMKM: Kopi Robusta Warung Menteng (Petik Merah)',
    desc: 'Kopi bubuk & biji sangrai kualitas ekspor dengan cita rasa cokelat dan rempah alami Cijeruk',
    page: 'potensi-umkm',
    params: { umkmId: 'umkm-1' },
    category: 'UMKM',
    keywords: ['kopi', 'kopi robusta', 'kopi menteng', 'petik merah', 'roastbean', 'bubuk kopi', 'cijeruk']
  },
  {
    id: 'umkm-keripik',
    title: 'UMKM: Keripik Singkong & Pisang Renyah Gurih',
    desc: 'Camilan keripik renyah higienis aneka rasa olahan kelompok wanita tani (KWT)',
    page: 'potensi-umkm',
    params: { umkmId: 'umkm-2' },
    category: 'UMKM',
    keywords: ['keripik', 'singkong', 'keripik pisang', 'camilan', 'snack', 'kwt', 'oleh-oleh']
  },
  {
    id: 'umkm-rengginang',
    title: 'UMKM: Rengginang Ketan Renyah Menteng',
    desc: 'Rengginang ketan gurih rasa terasi dan ketan hitam resep warisan turun-temurun',
    page: 'potensi-umkm',
    params: { umkmId: 'umkm-3' },
    category: 'UMKM',
    keywords: ['rengginang', 'ketan', 'rengginang ketan', 'terasi', 'camilan tradisional', 'kue kering']
  },
  {
    id: 'umkm-madu-hutan',
    title: 'UMKM: Madu Hutan Murni Cijeruk',
    desc: 'Madu murni lebah liar Odeng dari hutan lereng Gunung Salak tanpa campuran',
    page: 'potensi-umkm',
    params: { umkmId: 'umkm-4' },
    category: 'UMKM',
    keywords: ['madu', 'madu hutan', 'madu murni', 'lebah odeng', 'madu asli', 'kesehatan']
  },
  {
    id: 'umkm-anyaman-bambu',
    title: 'UMKM: Kerajinan Anyaman Bambu Tradisional',
    desc: 'Boboko, besek ramah lingkungan, caping, dan keranjang anyaman bambu tali khas Sunda',
    page: 'potensi-umkm',
    params: { umkmId: 'umkm-5' },
    category: 'UMKM',
    keywords: ['anyaman bambu', 'kerajinan tangan', 'bambu', 'boboko', 'besek', 'souvenir', 'kriya']
  },
  {
    id: 'umkm-gula-aren',
    title: 'UMKM: Gula Aren Organik Tradisional',
    desc: 'Gula merah cetak dan gula semut aren murni hasil sadapan pohon kawung alami',
    page: 'potensi-umkm',
    params: { umkmId: 'umkm-6' },
    category: 'UMKM',
    keywords: ['gula aren', 'gula merah', 'gula semut', 'nira', 'kawung', 'organik']
  },
  {
    id: 'budaya-seren-taun',
    title: 'Tradisi Budaya: Seren Taun Cijeruk',
    desc: 'Upacara adat syukuran panen padi, penyerahan beras ke leuit, dan tarian sakral Sunda',
    page: 'potensi-budaya',
    category: 'Budaya',
    keywords: ['seren taun', 'upacara adat', 'panen padi', 'leuit', 'tradisi sunda', 'cijeruk', 'kasepuhan']
  },
  {
    id: 'budaya-silat-cimande',
    title: 'Seni Beladiri: Pencak Silat Aliran Cimande',
    desc: 'Pusat perguruan silat Cimande warisan jawara Sunda pelestari seni ketangkasan beladiri',
    page: 'potensi-budaya',
    category: 'Budaya',
    keywords: ['pencak silat', 'silat', 'cimande', 'jawara', 'beladiri', 'jurus', 'budaya sunda']
  },
  {
    id: 'budaya-calung',
    title: 'Kesenian Tradisional Calung & Jaipong',
    desc: 'Kelompok musik bambu calung Sunda dan tari Jaipongan untuk hajatan dan festival desa',
    page: 'potensi-budaya',
    category: 'Budaya',
    keywords: ['calung', 'jaipong', 'seni musik', 'alat musik bambu', 'tarian', 'kesenian']
  },
  {
    id: 'budidaya-perikanan',
    title: 'Sentra Budidaya Kolam Air Deras (Nila, Mas, Gurame)',
    desc: 'Pusat pembesaran ikan konsumsi air tawar memanfaatkan aliran jernih lereng Gunung Salak',
    page: 'potensi-budidaya',
    category: 'Potensi',
    keywords: ['budidaya', 'perikanan', 'ikan nila', 'ikan mas', 'gurame', 'kolam air deras', 'tambak']
  },
  {
    id: 'budidaya-peternakan',
    title: 'Peternakan Kambing & Domba Boer / Etawa',
    desc: 'Pengembangan bibit ternak kambing perah dan potong berkualitas serta pupuk kompos organik',
    page: 'potensi-budidaya',
    category: 'Potensi',
    keywords: ['peternakan', 'kambing', 'domba', 'etawa', 'sapi', 'pupuk organik', 'ternak']
  },

  // =========================================================================
  // 4. PELAYANAN DESA, SURAT, FORMULIR & CEK STATUS
  // =========================================================================
  {
    id: 'layanan-utama',
    title: 'Pusat Pelayanan Administrasi Desa',
    desc: 'Panduan lengkap permohonan surat administrasi warga, syarat berkas, dan loket pelayanan',
    page: 'pelayanan-desa',
    category: 'Pelayanan',
    keywords: ['pelayanan', 'surat', 'administrasi', 'layanan desa', 'buat surat', 'kantor desa']
  },
  {
    id: 'layanan-pengajuan-online',
    title: 'Pengajuan Surat Online Desa',
    desc: 'Formulir digital pembuatan surat keterangan desa langsung diproses perangkat tanpa antre lama',
    page: 'pelayanan-pengajuan',
    category: 'Pelayanan',
    keywords: ['pengajuan surat', 'buat surat online', 'permohonan surat', 'isi formulir surat', 'daftar surat']
  },
  {
    id: 'layanan-cek-status',
    title: 'Cek Status / Tracking Surat Online',
    desc: 'Lacak progres pengajuan surat dengan memasukkan nomor registrasi atau NIK pemohon',
    page: 'pelayanan-cek-status',
    category: 'Pelayanan',
    keywords: ['cek status', 'tracking surat', 'lacak surat', 'nomor registrasi', 'status pengajuan', 'cek surat']
  },
  {
    id: 'layanan-persyaratan',
    title: 'Panduan Syarat Berkas Pengurusan Surat',
    desc: 'Daftar syarat dokumen (Fotokopi KK, KTP, Surat Pengantar RT/RW, materai) untuk tiap jenis surat',
    page: 'pelayanan-persyaratan',
    category: 'Pelayanan',
    keywords: ['syarat', 'persyaratan', 'berkas', 'dokumen', 'surat pengantar rt rw', 'ktp', 'kk']
  },
  {
    id: 'layanan-download-formulir',
    title: 'Download Formulir Administrasi Desa',
    desc: 'Unduh file template resmi blangko permohonan surat keterangan dalam format cetak',
    page: 'pelayanan-download',
    category: 'Pelayanan',
    keywords: ['download', 'unduh', 'formulir', 'blangko', 'template surat', 'pdf formulir']
  },
  {
    id: 'surat-domisili',
    title: 'Surat Keterangan Domisili (Warga / Usaha)',
    desc: 'Surat keterangan bukti tempat tinggal resmi bagi perorangan, pendatang, atau tempat usaha',
    page: 'pelayanan-surat-keterangan',
    params: { defaultJenis: 'domisili' },
    category: 'Pelayanan',
    keywords: ['domisili', 'surat domisili', 'tempat tinggal', 'keterangan domisili', 'alamat', 'pendatang']
  },
  {
    id: 'surat-sku',
    title: 'Surat Keterangan Usaha (SKU)',
    desc: 'Bukti sah legalitas usaha mikro/kecil warga untuk syarat pinjaman bank, KUR, atau perizinan',
    page: 'pelayanan-surat-keterangan',
    params: { defaultJenis: 'sku' },
    category: 'Pelayanan',
    keywords: ['sku', 'surat keterangan usaha', 'usaha', 'pinjaman bank', 'kur', 'modal usaha', 'kredit usaha']
  },
  {
    id: 'surat-sktm',
    title: 'Surat Keterangan Tidak Mampu (SKTM)',
    desc: 'Surat keterangan kondisi ekonomi keluarga untuk beasiswa sekolah, KIP Kuliah, BPJS PBI, RS',
    page: 'pelayanan-surat-keterangan',
    params: { defaultJenis: 'sktm' },
    category: 'Pelayanan',
    keywords: ['sktm', 'tidak mampu', 'surat miskin', 'beasiswa', 'kip', 'bpjs', 'bantuan', 'kip kuliah', 'keringanan']
  },
  {
    id: 'surat-skck',
    title: 'Surat Pengantar SKCK Desa',
    desc: 'Surat pengantar kelakuan baik dari desa untuk pembuatan SKCK di Polsek Cijeruk / Polres Bogor',
    page: 'pelayanan-surat-keterangan',
    params: { defaultJenis: 'skck' },
    category: 'Pelayanan',
    keywords: ['skck', 'pengantar skck', 'kelakuan baik', 'polsek', 'polres', 'melamar kerja', 'polisi']
  },
  {
    id: 'surat-belum-nikah',
    title: 'Surat Keterangan Belum Pernah Menikah',
    desc: 'Keterangan status perjaka / perawan untuk syarat administrasi lamaran kerja atau pra-nikah',
    page: 'pelayanan-surat-keterangan',
    params: { defaultJenis: 'belum-menikah' },
    category: 'Pelayanan',
    keywords: ['belum menikah', 'lajang', 'perjaka', 'perawan', 'status perkawinan', 'belum kawin']
  },
  {
    id: 'surat-kelahiran',
    title: 'Surat Keterangan Kelahiran / Pengantar Akta',
    desc: 'Surat pelaporan kelahiran bayi untuk penerbitan Akta Kelahiran dan penambahan anggota KK',
    page: 'pelayanan-surat-keterangan',
    params: { defaultJenis: 'kelahiran' },
    category: 'Pelayanan',
    keywords: ['kelahiran', 'akta lahir', 'surat lahir', 'bayi', 'akta kelahiran', 'tambah kk']
  },
  {
    id: 'surat-kematian',
    title: 'Surat Keterangan Kematian Desa',
    desc: 'Surat bukti meninggal dunia untuk penerbitan Akta Kematian, ahli waris, dan klaim asuransi',
    page: 'pelayanan-surat-keterangan',
    params: { defaultJenis: 'kematian' },
    category: 'Pelayanan',
    keywords: ['kematian', 'surat kematian', 'meninggal dunia', 'akta kematian', 'ahli waris', 'wafat']
  },
  {
    id: 'surat-penghasilan',
    title: 'Surat Keterangan Penghasilan Orang Tua',
    desc: 'Surat keterangan rata-rata pendapatan keluarga untuk syarat pendaftaran PTN, beasiswa, KPR',
    page: 'pelayanan-surat-keterangan',
    params: { defaultJenis: 'penghasilan' },
    category: 'Pelayanan',
    keywords: ['penghasilan', 'surat penghasilan', 'gaji orang tua', 'keterangan pendapatan', 'snbt', 'snbp', 'kpr']
  },
  {
    id: 'surat-beda-nama',
    title: 'Surat Keterangan Beda Nama / Beda Identitas',
    desc: 'Surat klarifikasi perbedaan penulisan nama di KTP, KK, Ijazah, atau Sertifikat Tanah',
    page: 'pelayanan-surat-keterangan',
    params: { defaultJenis: 'beda-nama' },
    category: 'Pelayanan',
    keywords: ['beda nama', 'perbedaan identitas', 'salah nama', 'ijazah', 'ktp beda nama', 'klarifikasi nama']
  },
  {
    id: 'layanan-pindah-datang',
    title: 'Layanan Pindah Datang Kependudukan (SKPWNI)',
    desc: 'Penerbitan Surat Keterangan Pindah WNI keluar daerah dan pendaftaran warga datang',
    page: 'pelayanan-pindah-datang',
    category: 'Pelayanan',
    keywords: ['pindah', 'skpwni', 'surat pindah', 'pindah datang', 'warga baru', 'mutasi penduduk', 'cabut berkas']
  },
  {
    id: 'layanan-nikah-n1-n4',
    title: 'Layanan Pengantar Nikah (Formulir Model N1 - N4)',
    desc: 'Surat pengantar nikah ke KUA Cijeruk, formulir N1 (Surat Nikah), N2, N3, dan N4 persetujuan',
    page: 'pelayanan-layanan-pernikahan',
    category: 'Pelayanan',
    keywords: ['nikah', 'pernikahan', 'n1', 'n2', 'n4', 'kua', 'kua cijeruk', 'pengantar nikah', 'kawin', 'ijab kabul']
  },

  // =========================================================================
  // 5. INFORMASI, BERITA, PENGUMUMAN & HUMAS
  // =========================================================================
  {
    id: 'humas-press-release',
    title: 'Press Release Resmi Desa (HUMAS)',
    desc: 'Siaran pers resmi publikasi kegiatan, tanggapan isu, dan pernyataan kebijakan pemerintah desa',
    page: 'berita-press-release',
    category: 'HUMAS',
    keywords: ['humas', 'press release', 'siaran pers', 'rilis pers', 'publikasi', 'pernyataan resmi', 'kebijakan']
  },
  {
    id: 'berita-kegiatan',
    title: 'Kabar & Berita Desa Terkini',
    desc: 'Liputan kegiatan pembangunan desa, gotong royong, posyandu, dan penyaluran bantuan',
    page: 'informasi-berita',
    category: 'Berita',
    keywords: ['berita', 'kabar desa', 'artikel', 'berita terkini', 'informasi', 'kegiatan desa']
  },
  {
    id: 'pengumuman-resmi',
    title: 'Pengumuman Resmi Kantor Desa',
    desc: 'Jadwal pelayanan libur, musrenbangdes, pendaftaran bansos, dan pengumuman penting bagi warga',
    page: 'informasi-pengumuman',
    category: 'Berita',
    keywords: ['pengumuman', 'jadwal', 'musrenbangdes', 'bansos', 'pemberitahuan', 'libur pelayanan']
  },
  {
    id: 'program-desa',
    title: 'Program Kerja & Pembangunan Desa',
    desc: 'Rencana kerja pembangunan desa (RKPDes) bidang infrastruktur jalan, sanitasi, dan air bersih',
    page: 'informasi-program',
    category: 'Berita',
    keywords: ['program desa', 'pembangunan', 'infrastruktur', 'betonisasi jalan', 'sanitasi', 'proyek desa']
  },
  {
    id: 'video-profil',
    title: 'Video Profil Desa Warung Menteng',
    desc: 'Tayangan video sinematik keindahan desa, keramahtamahan warga, dan potensi wilayah',
    page: 'informasi-video',
    category: 'HUMAS',
    keywords: ['video', 'youtube', 'video profil', 'sinematik', 'dokumenter desa']
  },

  // =========================================================================
  // 6. KKN WIGATA DHARMA 2026 UNUSIA & DIVISI (TERMASUK HUMAS KKN)
  // =========================================================================
  {
    id: 'kkn-utama',
    title: 'KKN WIGATA DHARMA 2026 UNUSIA',
    desc: 'Portal pengabdian mahasiswa KKN Universitas Nahdlatul Ulama Indonesia di Desa Warung Menteng',
    page: 'kkn',
    category: 'KKN',
    keywords: ['kkn', 'wigata dharma', 'unusia', 'universitas nahdlatul ulama indonesia', 'kuliah kerja nyata', 'mahasiswa']
  },
  {
    id: 'kkn-slogan',
    title: 'Slogan KKN: "Bersama Warga, Membangun Warung Menteng"',
    desc: 'Semangat kolaborasi pengabdian mahasiswa bersama masyarakat untuk kemajuan desa yang berdaya',
    page: 'kkn',
    category: 'KKN',
    keywords: ['slogan kkn', 'motto', 'bersama warga membangun warung menteng', 'visi kkn']
  },
  {
    id: 'kkn-latar-belakang',
    title: 'Latar Belakang & Pengabdian KKN',
    desc: 'Maksud, tujuan, dan kajian awal pengabdian mahasiswa di bidang pendidikan, digital, dan UMKM',
    page: 'kkn-latar-belakang',
    category: 'KKN',
    keywords: ['latar belakang kkn', 'tujuan kkn', 'pengabdian masyarakat', 'tridharma perguruan tinggi']
  },
  {
    id: 'kkn-program-kerja',
    title: 'Program Kerja Unggulan KKN Wigata Dharma',
    desc: 'Bimbel anak sekolah, digitalisasi website desa, pendampingan UMKM, bank sampah, dan stunting',
    page: 'kkn-program-kerja',
    category: 'KKN',
    keywords: ['program kerja kkn', 'proker kkn', 'bimbel', 'digitalisasi desa', 'branding umkm', 'anti bullying', 'bank sampah']
  },
  {
    id: 'kkn-visi-misi',
    title: 'Visi & Misi KKN Wigata Dharma',
    desc: 'Komitmen terwujudnya pengabdian mahasiswa yang aplikatif, berakhlak, dan berdampak jangka panjang',
    page: 'kkn-visi-misi',
    category: 'KKN',
    keywords: ['visi misi kkn', 'visi', 'misi', 'tujuan program', 'indikator keberhasilan']
  },
  {
    id: 'kkn-struktural',
    title: 'Struktur Organisasi Tim KKN Wigata Dharma',
    desc: '18 Mahasiswa delegasi lintas fakultas UNUSIA dan Dosen Pembimbing Lapangan (DPL)',
    page: 'kkn-struktural',
    category: 'KKN',
    keywords: ['struktur kkn', 'tim kkn', 'anggota kkn', 'dpl', 'koordinator desa', 'kordes', '18 mahasiswa']
  },
  {
    id: 'kkn-divisi-bph',
    title: 'Divisi BPH KKN (Badan Pengurus Harian)',
    desc: 'Ketua, Sekretaris, dan Bendahara penanggung jawab koordinasi umum kegiatan KKN',
    page: 'kkn-bph',
    params: { initialDivision: 'BPH' },
    category: 'KKN',
    keywords: ['bph', 'ketua kkn', 'sekretaris kkn', 'bendahara kkn', 'divisi bph', 'pengurus inti']
  },
  {
    id: 'kkn-divisi-acara',
    title: 'Divisi Acara KKN Wigata Dharma',
    desc: 'Perancang teknis perlombaan, workshop digitalisasi, pengajian akbar, dan perpisahan KKN',
    page: 'kkn-acara',
    params: { initialDivision: 'ACARA' },
    category: 'KKN',
    keywords: ['divisi acara', 'acara kkn', 'rundown', 'kegiatan', 'lomba', 'workshop', 'perpisahan']
  },
  {
    id: 'kkn-divisi-humas',
    title: 'Divisi HUMAS KKN (Hubungan Masyarakat)',
    desc: 'Penghubung komunikasi mahasiswa dengan tokoh masyarakat, RT/RW, ormas, dan publikasi relasi',
    page: 'kkn-humas',
    params: { initialDivision: 'HUMAS' },
    category: 'KKN',
    keywords: ['humas', 'divisi humas', 'humas kkn', 'hubungan masyarakat', 'tokoh masyarakat', 'komunikasi kkn', 'silaturahmi']
  },
  {
    id: 'kkn-divisi-media',
    title: 'Divisi Media & Publikasi KKN',
    desc: 'Tim dokumentasi fotografi, videografi, media sosial Instagram @wigatadharma, dan TikTok',
    page: 'kkn-media',
    params: { initialDivision: 'MEDIA' },
    category: 'KKN',
    keywords: ['divisi media', 'media kkn', 'dokumentasi', 'instagram', 'tiktok', 'fotografer', 'video editor']
  },
  {
    id: 'kkn-galeri',
    title: 'Galeri Foto Kegiatan & Dokumentasi KKN',
    desc: 'Dokumentasi interaksi mahasiswa KKN bersama anak-anak dan warga Desa Warung Menteng',
    page: 'kkn-galeri',
    category: 'KKN',
    keywords: ['galeri kkn', 'foto kkn', 'dokumentasi kkn', 'kegiatan kkn', 'album kkn']
  },

  // =========================================================================
  // 7. KONTAK DARURAT 24 JAM
  // =========================================================================
  {
    id: 'darurat-utama',
    title: 'Daftar Kontak Darurat 24 Jam Desa',
    desc: 'Pusat nomor telepon cepat darurat medis, keamanan, bencana alam, dan gangguan listrik',
    page: 'kontak-darurat',
    category: 'Darurat',
    keywords: ['darurat', 'kontak darurat', 'nomor penting', 'telepon darurat', 'bantuan cepat', '24 jam']
  },
  {
    id: 'darurat-ambulans',
    title: 'Ambulans Siaga Desa Warung Menteng',
    desc: 'Layanan mobil ambulans siaga 24 jam untuk rujukan pasien gawat darurat dan ibu melahirkan',
    page: 'kontak-darurat',
    category: 'Darurat',
    keywords: ['ambulans', 'ambulance', 'mobil siaga', 'pasien gawat darurat', 'rujukan', 'rumah sakit']
  },
  {
    id: 'darurat-puskesmas',
    title: 'Puskesmas Rawat Inap Cijeruk',
    desc: 'Unit gawat darurat (UGD) puskesmas terdekat melayani penanganan pertama medis',
    page: 'kontak-darurat',
    category: 'Darurat',
    keywords: ['puskesmas', 'puskesmas cijeruk', 'ugd', 'dokter', 'perawat', 'rawat inap', 'medis']
  },
  {
    id: 'darurat-bidan',
    title: 'Bidan Desa Warung Menteng',
    desc: 'Pelayanan persalinan darurat ibu hamil dan konsultasi kesehatan balita di desa',
    page: 'kontak-darurat',
    category: 'Darurat',
    keywords: ['bidan', 'bidan desa', 'persalinan', 'melahirkan', 'ibu hamil', 'kandungan']
  },
  {
    id: 'darurat-polsek',
    title: 'Bhabinkamtibmas Polsek Cijeruk',
    desc: 'Petualang kamtibmas kepolisian desa untuk penanganan sengketa, pencurian, dan laporan kriminalitas',
    page: 'kontak-darurat',
    category: 'Darurat',
    keywords: ['bhabinkamtibmas', 'polisi', 'polsek', 'polsek cijeruk', 'keamanan', 'kriminal', 'laporan polisi']
  },
  {
    id: 'darurat-babinsa',
    title: 'Babinsa Koramil Cijeruk',
    desc: 'Bintara pembina desa TNI untuk pengamanan teritorial, tanggap bencana, dan ketenteraman warga',
    page: 'kontak-darurat',
    category: 'Darurat',
    keywords: ['babinsa', 'koramil', 'tni', 'keamanan', 'bencana alam', 'patroli wilayah']
  },
  {
    id: 'darurat-damkar',
    title: 'Pemadam Kebakaran (Damkar) Kab. Bogor',
    desc: 'Penanganan cepat kebakaran rumah, evakuasi sarang tawon, dan penyelamatan darurat',
    page: 'kontak-darurat',
    category: 'Darurat',
    keywords: ['damkar', 'pemadam kebakaran', 'kebakaran', 'api', 'sarang tawon', 'evakuasi']
  },
  {
    id: 'darurat-bpbd',
    title: 'BPBD Kabupaten Bogor (Tanggap Bencana)',
    desc: 'Tim penanggulangan bencana tanah longsor, angin puting beliung, dan pohon tumbang',
    page: 'kontak-darurat',
    category: 'Darurat',
    keywords: ['bpbd', 'bencana', 'tanah longsor', 'longsor', 'pohon tumbang', 'puting beliung', 'banjir']
  },
  {
    id: 'darurat-pln',
    title: 'PLN Gangguan Listrik (Call Center 123)',
    desc: 'Laporan pemadaman darurat, trafo meledak, kabel putus, dan korsleting listrik desa',
    page: 'kontak-darurat',
    category: 'Darurat',
    keywords: ['pln', 'listrik', 'mati lampu', 'listrik padam', 'korsleting', 'gangguan listrik', '123']
  }
];
