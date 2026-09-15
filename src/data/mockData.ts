import {
  DestinasiItem,
  UMKMItem,
  BudayaItem,
  SitusSejarahItem,
  PerikananItem,
  PerangkatDesa,
  APBDesItem,
  BeritaItem,
  PengumumanItem,
  ProgramDesaItem,
  JenisSurat,
  PermohonanSurat,
  LaporanWarga,
  KontakDaruratItem,
  GaleriItem,
  LembagaItem,
  DokumenDownloadItem
} from '../types';

// DATA UMUM & STATISTIK DESA WARUNG MENTENG
export const PROFIL_DESA_DATA = {
  nama: 'Desa Warung Menteng',
  kecamatan: 'Kecamatan Cijeruk',
  kabupaten: 'Kabupaten Bogor',
  provinsi: 'Jawa Barat',
  kodePos: '16740',
  teleponKantor: '(0251) 8382910',
  emailKantor: 'desa.warungmenteng@bogorkab.go.id',
  jamOperasional: 'Senin - Jumat: 08.00 - 16.00 WIB',
  alamatKantor: 'Jl. Raya Cijeruk - Cigombong No. 45, Desa Warung Menteng, Kec. Cijeruk, Kab. Bogor, Jawa Barat 16740',
  visi: 'Terwujudnya Desa Warung Menteng yang Mandiri, Sejahtera, Berakhlak Mulia, dan Berkelanjutan Berbasis Potensi Pertanian, Perikanan, dan Pariwisata Ramah Lingkungan.',
  misi: [
    'Meningkatkan tata kelola pemerintahan desa yang bersih, transparan, akuntabel, dan berorientasi pada pelayanan prima masyarakat.',
    'Mengembangkan perekonomian desa melalui penguatan UMKM, agribisnis, budidaya perikanan air tawar, serta optimalisasi Badan Usaha Milik Desa (BUMDes).',
    'Meningkatkan kualitas infrastruktur desa yang merata, ramah lingkungan, dan mendukung konektivitas ekonomi pedesaan.',
    'Meningkatkan kualitas sumber daya manusia melalui pelayanan kesehatan prima (Zero Stunting) dan penguatan sarana pendidikan dasar.',
    'Melestarikan nilai-nilai adat, seni budaya Sunda, kearifan lokal, serta memperkokoh semangat gotong royong warga.'
  ],
  statistik: {
    totalPenduduk: 7428,
    lakiLaki: 3790,
    perempuan: 3638,
    kepalaKeluarga: 2185,
    luasWilayahKm2: 4.82,
    jumlahDusun: 3,
    jumlahRW: 7,
    jumlahRT: 28,
    kelompokTani: 14,
    pokdakanIkan: 8,
    umkmAktif: 126,
    ketinggianMdpl: '520 - 780 mdpl'
  },
  batasWilayah: {
    utara: 'Desa Cijeruk, Kecamatan Cijeruk',
    selatan: 'Desa Tajur Halang & Desa Pasir Jaya, Kecamatan Cigombong',
    barat: 'Kawasan Hutan Lindung Gunung Salak',
    timur: 'Desa Palasari, Kecamatan Cijeruk'
  },
  geografis: 'Desa Warung Menteng terletak di lereng Gunung Salak dengan topografi perbukitan dan lembah subur yang dialiri oleh sungai-sungai berair jernih seperti Sungai Cimenteng dan Sungai Cipelang. Iklim sejuk dengan curah hujan sedang hingga tinggi menjadikannya sentra pertanian sayur, buah salak, durian menteng, kopi robusta, dan kolam budidaya ikan air tawar.'
};

// DATA SEJARAH DESA
export const SEJARAH_DESA_DATA = {
  ringkasan: 'Asal usul nama "Warung Menteng" berawal dari abad ke-19, ketika wilayah ini menjadi pos persinggahan para pedagang dan pelintas jalan tradisional dari Cijeruk menuju Sukabumi. Di lokasi tersebut terdapat rimbunan pohon Buah Menteng (Baccaurea racemosa) yang lebat dan sebuah warung kayu tempat beristirahat dan berteduh para kafilah pedati.',
  kronologi: [
    {
      tahun: 'Masa Kolonial (1885)',
      judul: 'Pos Persinggahan di Bawah Pohon Menteng',
      deskripsi: 'Para pedagang hasil bumi sering berhenti di sebuah warung pondok di bawah naungan pohon buah menteng rindang di pinggir jalur Cijeruk. Tempat ini kemudian dikenal luas oleh para musafir dengan sebutan "Warung Menteng".'
    },
    {
      tahun: '1945 - 1949',
      judul: 'Basis Perjuangan & Dapur Umum Pejuang Kemerdekaan',
      deskripsi: 'Kondisi geografis yang berbukit dan dekat dengan kaki Gunung Salak menjadikan Warung Menteng sebagai tempat koordinasi laskar rakyat dan gerilyawan pejuang kemerdekaan RI di wilayah Bogor Selatan.'
    },
    {
      tahun: '1978',
      judul: 'Pemekaran dan Penetapan Desa Definitif',
      deskripsi: 'Seiring pertumbuhan penduduk dan dinamika kemasyarakatan, Warung Menteng resmi ditetapkan sebagai Desa otonom mandiri dalam wilayah administrasi Kecamatan Cijeruk Kabupaten Bogor.'
    },
    {
      tahun: '2005 - 2018',
      judul: 'Era Pengembangan Sentra Ikan Air Tawar & Agrowisata',
      deskripsi: 'Masyarakat mulai memanfaatkan melimpahnya aliran air pegunungan untuk membuat kolam budidaya ikan mas, nila, dan gurame, sekaligus mempopulerkan produk olahan pertanian lokal.'
    },
    {
      tahun: '2024 - Sekarang',
      judul: 'Transformasi Desa Digital Mandiri & Tangguh Pangan',
      deskripsi: 'Pemerintah Desa Warung Menteng meluncurkan layanan digital terpadu, transparansi publik, dan integrasi pariwisata berbasis konservasi alam lereng Gunung Salak.'
    }
  ],
  silsilahKades: [
    { periode: '1978 - 1988', nama: 'H. Mohamad Sanusi (Alm.)' },
    { periode: '1988 - 1998', nama: 'Bpk. Suhanda' },
    { periode: '1998 - 2008', nama: 'Bpk. H. Ahmad Djunaedi' },
    { periode: '2008 - 2014', nama: 'Bpk. Dedi Supriyadi' },
    { periode: '2014 - 2020', nama: 'Bpk. H. Mamat Sulaeman' },
    { periode: '2020 - Sekarang', nama: 'Bpk. H. Irfan Setiawan, S.IP.' }
  ]
};

// DATA STRUKTUR PEMERINTAHAN DESA
export const PERANGKAT_DESA_LIST: PerangkatDesa[] = [
  {
    id: 'kades-1',
    nama: 'H. Irfan Setiawan, S.IP.',
    jabatan: 'Kepala Desa',
    kategori: 'Pemerintah Desa',
    pendidikan: 'S1 Ilmu Pemerintahan',
    tupoksi: 'Memimpin penyelenggaraan pemerintahan desa, membina kehidupan masyarakat desa, memelihara ketenteraman dan ketertiban, serta memberdayakan masyarakat desa.',
    fotoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    kontak: '0812-8877-6611'
  },
  {
    id: 'sekdes-1',
    nama: 'Asep Saepuloh, S.Kom.',
    jabatan: 'Sekretaris Desa (Sekdes)',
    kategori: 'Pemerintah Desa',
    pendidikan: 'S1 Sistem Informasi',
    tupoksi: 'Membantu Kepala Desa dalam mengoordinasikan administrasi pemerintahan, perencanaan, pelaporan, dan tata kelola keuangan desa.',
    fotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    kontak: '0813-2211-9988'
  },
  {
    id: 'kaur-keu-1',
    nama: 'Siti Nurhayati, S.E.',
    jabatan: 'Kepala Urusan Keuangan',
    kategori: 'Pemerintah Desa',
    pendidikan: 'S1 Akuntansi',
    tupoksi: 'Mengelola penatausahaan keuangan desa, pembukuan APBDes, penerimaan dan pengeluaran kas, serta penyusunan SPJ.',
    fotoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'kaur-umum-1',
    nama: 'Dadan Ramdani',
    jabatan: 'Kepala Urusan Umum & Tata Usaha',
    kategori: 'Pemerintah Desa',
    pendidikan: 'D3 Administrasi Perkantoran',
    tupoksi: 'Melaksanakan urusan ketatausahaan seperti tata naskah dinas, kearsipan, perlengkapan inventaris kantor, dan ekspedisi.',
    fotoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'kaur-rencana-1',
    nama: 'Rian Hidayat, S.P.',
    jabatan: 'Kepala Urusan Perencanaan',
    kategori: 'Pemerintah Desa',
    pendidikan: 'S1 Pertanian',
    tupoksi: 'Menyusun rancangan RPJMDes, RKPDes, musrenbangdes, pengumpulan data profil desa, dan pelaporan evaluasi pembangunan.',
    fotoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'kasi-pem-1',
    nama: 'M. Wildan Firdaus',
    jabatan: 'Kepala Seksi Pemerintahan',
    kategori: 'Pemerintah Desa',
    pendidikan: 'S1 Hukum',
    tupoksi: 'Melakukan manajemen tata praja pemerintahan, administrasi kependudukan (KTP, KK), pertanahan, ketenteraman dan ketertiban umum.',
    fotoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'kasi-kesejahteraan-1',
    nama: 'Ustadz Ahmad Fauzi',
    jabatan: 'Kepala Seksi Kesejahteraan',
    kategori: 'Pemerintah Desa',
    pendidikan: 'S1 Pendidikan Islam',
    tupoksi: 'Melaksanakan pembangunan sarana prasarana perdesaan, pembangunan bidang kesehatan, pendidikan, keagamaan, dan sosial budaya.',
    fotoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'kasi-pelayanan-1',
    nama: 'Dewi Anggraeni, S.Sos.',
    jabatan: 'Kepala Seksi Pelayanan',
    kategori: 'Pemerintah Desa',
    pendidikan: 'S1 Sosiologi',
    tupoksi: 'Melaksanakan penyuluhan dan motivasi terhadap hak dan kewajiban masyarakat, pelayanan surat menyurat, pembinaan seni dan pemuda.',
    fotoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'kadus-1',
    nama: 'Endang Kuswara',
    jabatan: 'Kepala Dusun I (Menteng Girang)',
    kategori: 'Kadus',
    pendidikan: 'SMA',
    tupoksi: 'Membantu pelaksanaan tugas Kepala Desa di wilayah Dusun I, membina ketertiban dan menggerakkan partisipasi swadaya masyarakat.',
    fotoUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'kadus-2',
    nama: 'Cecep Suryana',
    jabatan: 'Kepala Dusun II (Menteng Tengah)',
    kategori: 'Kadus',
    pendidikan: 'SMA',
    tupoksi: 'Membantu pelaksanaan tugas Kepala Desa di wilayah Dusun II, koordinasi RT/RW dan kegiatan sosial kemasyarakatan.',
    fotoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'kadus-3',
    nama: 'Bambang Irawan',
    jabatan: 'Kepala Dusun III (Menteng Hilir & Cimenteng)',
    kategori: 'Kadus',
    pendidikan: 'SMA',
    tupoksi: 'Membantu pelaksanaan tugas Kepala Desa di wilayah Dusun III, koordinasi pembudidaya ikan dan pengairan.',
    fotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'bpd-ketua',
    nama: 'Dr. Drs. H. Suryana, M.Si.',
    jabatan: 'Ketua BPD (Badan Permusyawaratan Desa)',
    kategori: 'BPD',
    pendidikan: 'S3 Administrasi Publik',
    tupoksi: 'Membahas dan menyepakati rancangan Perdes bersama Kades, menampung dan menyalurkan aspirasi masyarakat, serta mengawasi kinerja Kades.',
    fotoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'lpmd-ketua',
    nama: 'H. Dadang Kosasih',
    jabatan: 'Ketua LPMD (Lembaga Pemberdayaan Masyarakat Desa)',
    kategori: 'LPMD',
    pendidikan: 'S1 Manajemen',
    tupoksi: 'Mitra pemerintah desa dalam menyusun rencana pembangunan secara partisipatif dan menggerakkan swadaya gotong royong warga.',
    fotoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
  }
];

// DATA APBDES (TRANSPARANSI ANGGARAN DESA TAHUN 2026/2025)
export const APBDES_RINGKASAN = {
  tahun: '2026',
  totalPendapatan: 2450000000,
  totalBelanja: 2410000000,
  surplusDefisit: 40000000,
  pembiayaanNetto: 40000000,
  status: 'Realisasi Berjalan Semester I (48.5%)'
};

export const APBDES_PENDAPATAN: APBDesItem[] = [
  { kategori: 'Pendapatan', uraian: 'Pendapatan Asli Desa (PADes) - Tanah Kas Desa & BUMDes', anggaran: 145000000, realisasi: 78000000, persentase: 53.79 },
  { kategori: 'Pendapatan', uraian: 'Dana Desa (APBN)', anggaran: 1180000000, realisasi: 600000000, persentase: 50.84 },
  { kategori: 'Pendapatan', uraian: 'Alokasi Dana Desa (ADD - APBD Kab. Bogor)', anggaran: 685000000, realisasi: 342500000, persentase: 50.0 },
  { kategori: 'Pendapatan', uraian: 'Bagi Hasil Pajak & Retribusi Daerah (BHPR)', anggaran: 190000000, realisasi: 85000000, persentase: 44.73 },
  { kategori: 'Pendapatan', uraian: 'Bantuan Keuangan Provinsi Jawa Barat & Samisade', anggaran: 250000000, realisasi: 100000000, persentase: 40.0 }
];

export const APBDES_BELANJA: APBDesItem[] = [
  { kategori: 'Belanja', uraian: 'Bidang Penyelenggaraan Pemerintahan Desa (Siltap & Operasional)', anggaran: 720000000, realisasi: 360000000, persentase: 50.0 },
  { kategori: 'Belanja', uraian: 'Bidang Pelaksanaan Pembangunan Desa (Jalan Lingkungan, Irigasi, RTLH)', anggaran: 980000000, realisasi: 495000000, persentase: 50.51 },
  { kategori: 'Belanja', uraian: 'Bidang Pembinaan Kemasyarakatan (Pemuda, PKK, Seni Budaya, Posyandu)', anggaran: 240000000, realisasi: 110000000, persentase: 45.83 },
  { kategori: 'Belanja', uraian: 'Bidang Pemberdayaan Masyarakat (Pelatihan UMKM, Bantuan Pakan Ikan, Bibit)', anggaran: 320000000, realisasi: 155000000, persentase: 48.43 },
  { kategori: 'Belanja', uraian: 'Bidang Penanggulangan Bencana, Darurat & Mendesak Desa (BLT-DD & Siaga Bencana)', anggaran: 150000000, realisasi: 75000000, persentase: 50.0 }
];

// DATA POTENSI DESA - DESTINASI
export const DESTINASI_LIST: DestinasiItem[] = [
  {
    id: 'dest-1',
    nama: 'Bukit Panorama Menteng Asri',
    kategori: 'Wisata Alam',
    lokasi: 'Dusun I Menteng Girang, Kaki Gn. Salak',
    jamBuka: '06.00 - 18.00 WIB (Camping 24 Jam)',
    htm: 'Rp 10.000 / orang (Camping Rp 25.000)',
    deskripsi: 'Puncak perbukitan hijau dengan pemandangan langsung Gunung Salak dan lanskap lembah Cijeruk. Menawarkan spot foto sunrise memukau, area camping ground berumput rapi, dan kafe kopi lokal warung bambu.',
    fasilitas: ['Area Parkir Luas', 'Toilet & Mushola', 'Gazebo Istirahat', 'Warung Kopi & Camilan', 'Spot Selfie Instagrammable', 'Sewa Tenda Camping'],
    fotoUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    kontakPengelola: '0857-1122-3344 (Kang Yusuf - Pokdarwis)',
    rating: 4.8
  },
  {
    id: 'dest-2',
    nama: 'Curug Pelangi Cimenteng',
    kategori: 'Wisata Alam',
    lokasi: 'Dusun III Cimenteng',
    jamBuka: '07.30 - 16.30 WIB',
    htm: 'Rp 15.000 / orang',
    deskripsi: 'Air terjun alami setinggi 22 meter yang diapit tebing bebatuan purba dan hutan tropis rindang. Airnya sangat jernih dan segar yang bersumber langsung dari mata air Gunung Salak.',
    fasilitas: ['Jalur Tracking Bambu', 'Ruang Ganti & Bilas', 'Penyewaan Pelampung', 'Warung Makan Khas Sunda', 'Pos Keamanan / Life Guard'],
    fotoUrl: 'https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=800&q=80',
    kontakPengelola: '0813-9988-7766 (Mang Jaka)',
    rating: 4.9
  },
  {
    id: 'dest-3',
    nama: 'Agrowisata Petik Salak & Kopi Menteng',
    kategori: 'Agrowisata',
    lokasi: 'Dusun II Menteng Tengah',
    jamBuka: '08.00 - 16.00 WIB',
    htm: 'Rp 20.000 (Termasuk Icip Buah & Edukasi Petani)',
    deskripsi: 'Kawasan perkebunan salak pondoh madu dan kebun kopi robusta terintegrasi. Pengunjung diajak memetik salak langsung dari pohonnya, belajar proses roasting kopi tradisional, serta mencicipi dodol salak hangat.',
    fasilitas: ['Pemandu Edukasi Tani', 'Kebun Petik Langsung', 'Kedai Roastery Kopi Tradisional', 'Toko Oleh-oleh Olahan Salak', 'Area Edukasi Anak'],
    fotoUrl: 'https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=800&q=80',
    kontakPengelola: '0812-7766-5544 (Ibu Hj. Nengsih)',
    rating: 4.7
  },
  {
    id: 'dest-4',
    nama: 'Sungai Cimenteng River Tubing & Edu-Fish',
    kategori: 'Rekreasi Keluarga',
    lokasi: 'Bantaran Sungai Cimenteng Hilir',
    jamBuka: '08.30 - 16.00 WIB',
    htm: 'Rp 35.000 / paket tubing (helm + ban + guide)',
    deskripsi: 'Wahana susur sungai berarus tenang-menantang sepanjang 1.2 KM melintasi persawahan terasering desa, dipadukan dengan kunjungan ke kolam air deras budidaya ikan mas dan nila merah.',
    fasilitas: ['Perlengkapan Keamanan Lengkap', 'Pemandu Tersertifikasi', 'Dokumentasi Foto', 'Teh Hangat & Rebusan Ubi Tradisional'],
    fotoUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    kontakPengelola: '0878-3344-5566 (Kang Dedi)',
    rating: 4.9
  }
];

// DATA POTENSI DESA - UMKM (3 KATEGORI)
export const UMKM_LIST: UMKMItem[] = [
  // MAKANAN & MINUMAN
  {
    id: 'umkm-1',
    nama: 'Kopi Robusta Lereng Menteng (Roast Bean & Ground)',
    kategori: 'makanan-minuman',
    kategoriLabel: 'Makanan & Minuman',
    pemilik: 'Kelompok Tani Kopi Cimenteng Mandiri (Kang Rudi)',
    alamat: 'RT 03 / RW 02, Dusun II',
    harga: 'Rp 35.000 - Rp 95.000',
    deskripsi: 'Biji kopi robusta pilihan yang ditanam di ketinggian 700 mdpl lereng Gunung Salak. Memiliki aroma earthy yang tebal, notes cokelat karamel khas pegunungan Bogor, diolah secara natural dan honey process.',
    kontakWA: '6281288990011',
    fotoUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    unggulan: true
  },
  {
    id: 'umkm-2',
    nama: 'Madu Murni Hutan Odeng Menteng',
    kategori: 'makanan-minuman',
    kategoriLabel: 'Makanan & Minuman',
    pemilik: 'Pak Ujang Sujana (Penderes Madu Alami)',
    alamat: 'RT 01 / RW 01, Dusun I',
    harga: 'Rp 85.000 / botol 350ml',
    deskripsi: 'Madu mentah (raw honey) murni hasil panen lebah Apis dorsata di kawasan hutan lindung perbatasan desa. Bebas campuran gula sintetis, kaya khasiat stamina dan imunitas tubuh.',
    kontakWA: '6285711223399',
    fotoUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
    rating: 5.0,
    unggulan: true
  },
  {
    id: 'umkm-3',
    nama: 'Keripik Singkong Balado & Dodol Salak Renyah',
    kategori: 'makanan-minuman',
    kategoriLabel: 'Makanan & Minuman',
    pemilik: 'Ibu Eni Sukaesih (UMKM Berkah Ibu)',
    alamat: 'RT 04 / RW 03, Dusun II',
    harga: 'Rp 15.000 / bungkus 250gr',
    deskripsi: 'Olahan singkong mentega renyah tanpa pengawet dengan bumbu balado cabai segar petik kebun sendiri, serta dodol salak kenyal legit cita rasa tradisional.',
    kontakWA: '6281344556677',
    fotoUrl: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80',
    rating: 4.7
  },
  {
    id: 'umkm-4',
    nama: 'Abon Ikan Nila & Baby Fish Crispy Gurih',
    kategori: 'makanan-minuman',
    kategoriLabel: 'Makanan & Minuman',
    pemilik: 'Kelompok Wanita Tani (KWT) Mina Cantik',
    alamat: 'RT 02 / RW 05, Dusun III',
    harga: 'Rp 25.000 / toples 150gr',
    deskripsi: 'Hasil olahan ikan nila segar kolam air deras pegunungan Warung Menteng. Tinggi protein, non-MSG, sangat disukai anak-anak dan cocok untuk lauk sehat keluarga.',
    kontakWA: '6287812345678',
    fotoUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80',
    rating: 4.8
  },

  // KERAJINAN (CRAFT)
  {
    id: 'umkm-5',
    nama: 'Anyaman Bambu Tradisional (Besek, Bakul, Lampu Hias)',
    kategori: 'kerajinan',
    kategoriLabel: 'Kerajinan',
    pemilik: 'Sanggar Anyam Bambu Sauyunan (Mang Atang)',
    alamat: 'RT 02 / RW 04, Dusun II',
    harga: 'Rp 10.000 - Rp 150.000',
    deskripsi: 'Kerajinan tangan turun-temurun dari bambu tali dan bambu gombong pilihan. Menghasilkan besek hantaran eco-friendly, bakul nasi tradisional, tas jinjing etnik, hingga kap lampu estetik kafe.',
    kontakWA: '6281299887700',
    fotoUrl: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    unggulan: true
  },
  {
    id: 'umkm-6',
    nama: 'Piring Lidi Kelapa & Tatakan Gelas Eco-Art',
    kategori: 'kerajinan',
    kategoriLabel: 'Kerajinan',
    pemilik: 'Kreatif Warga Menteng (Kang Dani)',
    alamat: 'RT 01 / RW 06, Dusun III',
    harga: 'Rp 5.000 - Rp 35.000 / pcs',
    deskripsi: 'Pemanfaatan lidi kelapa dan pelepah aren menjadi piring makan saji rumah makan Sunda dan tatakan gelas artistik yang awet dan tahan rayap dengan finishing vernis alami.',
    kontakWA: '6285677889911',
    fotoUrl: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=600&q=80',
    rating: 4.6
  },
  {
    id: 'umkm-7',
    nama: 'Pahat Ukir Kayu Mahoni & Talenan Estetik Dapur',
    kategori: 'kerajinan',
    kategoriLabel: 'Kerajinan',
    pemilik: 'Karya Kayu Menteng Indah (Pak Solihin)',
    alamat: 'RT 03 / RW 01, Dusun I',
    harga: 'Rp 25.000 - Rp 250.000',
    deskripsi: 'Peralatan masak kayu jati belanda dan mahoni food-grade (talenan, centong, mangkok kayu) serta ukiran papan nama rumah khas Sunda.',
    kontakWA: '6281322334455',
    fotoUrl: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80',
    rating: 4.7
  },

  // PRODUK LOKAL LAINNYA
  {
    id: 'umkm-8',
    nama: 'Pupuk Kompos Organik Fermentasi "Subur Menteng"',
    kategori: 'produk-lainnya',
    kategoriLabel: 'Produk Lokal Lainnya',
    pemilik: 'BUMDes Karya Bersama Warung Menteng',
    alamat: 'Kompleks Gudang Desa, RT 02 / RW 01',
    harga: 'Rp 20.000 / karung 25kg',
    deskripsi: 'Pupuk organik hasil pengolahan kotoran ternak kambing/sapi dan limbah dedaunan pohon buah. Telah melalui uji laboratorium pertanian, menyuburkan tanaman tanpa bahan kimia berbahaya.',
    kontakWA: '6281234567890',
    fotoUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    unggulan: true
  },
  {
    id: 'umkm-9',
    nama: 'Bibit Unggul Tanaman Buah (Salak Madu, Durian, Alpukat Mentega)',
    kategori: 'produk-lainnya',
    kategoriLabel: 'Produk Lokal Lainnya',
    pemilik: 'Nursery Tani Salak Makmur (Pak Wawan)',
    alamat: 'RT 04 / RW 02, Dusun II',
    harga: 'Rp 25.000 - Rp 150.000 / pohon',
    deskripsi: 'Bibit pohon buah hasil okulasi dan sambung pucuk varietas unggul siap tanam. Dilengkapi panduan perawatan hingga panen.',
    kontakWA: '6285899001122',
    fotoUrl: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80',
    rating: 4.8
  },
  {
    id: 'umkm-10',
    nama: 'Teh Herbal Bunga Telang & Jahe Merah Instan',
    kategori: 'produk-lainnya',
    kategoriLabel: 'Produk Lokal Lainnya',
    pemilik: 'Ibu-Ibu PKK Dusun I',
    alamat: 'RT 01 / RW 02, Dusun I',
    harga: 'Rp 20.000 / pouch 100gr',
    deskripsi: 'Minuman herbal kaya antioksidan dari pekarangan TOGA (Tanaman Obat Keluarga) warga desa, diproses higienis dan nikmat diminum hangat.',
    kontakWA: '6281311447788',
    fotoUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    rating: 4.7
  }
];

// DATA POTENSI DESA - BUDAYA & ADAT
export const BUDAYA_LIST: BudayaItem[] = [
  {
    id: 'bud-1',
    nama: 'Tradisi Seren Taun & Sedekah Bumi Cimenteng',
    kategori: 'Tradisi & Ritual',
    waktuPelaksanaan: 'Setiap Bulan Muharram / Pasca Panen Raya',
    deskripsi: 'Ungkapan rasa syukur masyarakat Desa Warung Menteng kepada Allah SWT atas limpahan rezeki hasil tani dan perikanan. Acara diisi dengan arak-arakan dongdang tumpeng hasil bumi, doa bersama, dan pembagian makanan kepada seluruh warga.',
    fotoUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
    pelaku: 'Seluruh Lembaga Adat, Tokoh Agama, dan Warga Desa'
  },
  {
    id: 'bud-2',
    nama: 'Kesenian Jaipong & Calung Sunda Warung Menteng',
    kategori: 'Seni Pertunjukan',
    waktuPelaksanaan: 'Peringatan Hari Kemerdekaan, Hajatan Warga, & Pentas Seni Desa',
    deskripsi: 'Seni tari tradisional Sunda yang dinamis dipadukan dengan alunan rancak musik calung bambu dan kendang pencak. Sanggar seni desa aktif melatih generasi muda dan anak-anak sekolah dasar.',
    fotoUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    pelaku: 'Sanggar Seni Pusaka Menteng (Pimpinan Abah Tatang)'
  },
  {
    id: 'bud-3',
    nama: 'Pencak Silat Aliran Cimande Menteng Girang',
    kategori: 'Bela Diri Tradisional',
    waktuPelaksanaan: 'Latihan Rutin Setiap Malam Rabu & Malam Minggu',
    deskripsi: 'Seni bela diri warisan leluhur Sunda yang menekankan pada pembentukan karakter, sopan santun, ketangkasan fisik, dan keluhuran budi pekerti warga.',
    fotoUrl: 'https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=800&q=80',
    pelaku: 'Padepokan Silat Ksatria Menteng'
  },
  {
    id: 'bud-4',
    nama: 'Kearifan Gotong Royong "Sambatan & Perelek"',
    kategori: 'Kearifan Lokal',
    waktuPelaksanaan: 'Setiap Hari Minggu & Giliran Ronda Malam',
    deskripsi: 'Budaya saling tolong menolong dalam membangun rumah warga kurang mampu secara sukarela tanpa upah, serta tradisi beras perelek untuk membantu keluarga yang sedang kesusahan atau berduka.',
    fotoUrl: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80',
    pelaku: 'Keluarga Besar Masyarakat RT/RW se-Desa'
  }
];

// DATA POTENSI DESA - SITUS SEJARAH
export const SITUS_SEJARAH_LIST: SitusSejarahItem[] = [
  {
    id: 'situs-1',
    nama: 'Batu Dakon & Menhir Megalitikum Cimenteng',
    periode: 'Zaman Megalitikum / Pra-Sejarah',
    lokasi: 'Bukit Pasir Menteng Girang (Ketinggian 650 mdpl)',
    deskripsi: 'Batu andesit purba dengan lubang-lubang dakon melingkar yang menurut para arkeolog dulunya digunakan oleh leluhur Sunda kuno untuk penanggalan musim tanam (pranata mangsa) dan ritual pemujaan kesuburan tanah.',
    fotoUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    juruKunci: 'Abah Jajang (0856-4433-2211)'
  },
  {
    id: 'situs-2',
    nama: 'Mata Air Keramat Cikahuripan Warung Menteng',
    periode: 'Abad ke-17 / Kerajaan Pajajaran Hilir',
    lokasi: 'Lembah Cikahuripan, Dusun II',
    deskripsi: 'Mata air alami yang tidak pernah surut meski di musim kemarau panjang. Airnya yang bening dan sejuk menjadi sumber air bersih warga dan dipercaya memiliki tuah keberkahan dan ketenangan batin.',
    fotoUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    juruKunci: 'Bapak Kosasih'
  },
  {
    id: 'situs-3',
    nama: 'Petilasan & Makam Sesepuh Raden Singa Menteng',
    periode: 'Abad ke-18 Masehi',
    lokasi: 'Kompleks Pemakaman Tua Dusun I',
    deskripsi: 'Makam dan petilasan tokoh pelopor pembuka pemukiman (babad alas) wilayah Cijeruk dan Warung Menteng. Sering dikunjungi peziarah untuk mengenang jasa perjuangan dan menyambung silaturahmi spiritual.',
    fotoUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    juruKunci: 'Ustadz Mahmud'
  }
];

// DATA POTENSI DESA - POTENSI PERIKANAN
export const PERIKANAN_LIST: PerikananItem[] = [
  {
    id: 'ikan-1',
    namaKomoditas: 'Ikan Nila Merah & Nila Hitam Gesit Kolam Air Deras',
    namaKelompok: 'POKDAKAN Mina Mandiri Menteng (Ketua: Bpk. H. Cecep)',
    lokasiBudidaya: 'Bantaran Saluran Irigasi Cimenteng, Dusun III',
    jenisKolam: 'Kolam Beton Sirkulasi Air Deras Pegunungan (24 Jam Mengalir)',
    kapasitasPanen: '12 - 15 Ton per Bulan (Memasok Pasar Induk Kemang & Restoran Bogor)',
    deskripsi: 'Air pegunungan Gunung Salak yang kaya oksigen terlarut menghasilkan daging ikan nila yang padat, manis, dan tidak berbau lumpur. Menjadi komoditas primadona desa dengan omzet ratusan juta per siklus.',
    kontak: '0812-3322-1100',
    fotoUrl: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ikan-2',
    namaKomoditas: 'Ikan Mas Sinyonya & Majalaya Unggul',
    namaKelompok: 'Kelompok Budidaya Ikan Tirta Asri',
    lokasiBudidaya: 'Dusun II Menteng Tengah',
    jenisKolam: 'Kolam Tanah & Terpal Bioflok Terintegrasi',
    kapasitasPanen: '6 - 8 Ton per Siklus Panen',
    deskripsi: 'Ikan mas berkualitas tinggi untuk konsumsi rumah tangga, bahan baku pepes khas Sunda, dan pemancingan galatama di wilayah Jabodetabek.',
    kontak: '0857-8899-7766',
    fotoUrl: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ikan-3',
    namaKomoditas: 'Ikan Gurame Soang & Pembenihan Bibit Unggul',
    namaKelompok: 'POKDAKAN Mina Sejahtera Lestari',
    lokasiBudidaya: 'Dusun I Menteng Girang',
    jenisKolam: 'Kolam Pemijahan Tradisional & Kolam Pendederan',
    kapasitasPanen: 'Bibit 50.000 ekor/bulan & Gurame Konsumsi 4 Ton/bulan',
    deskripsi: 'Sentra penyedia benih ikan air tawar bersertifikat dinas perikanan bagi pembudidaya se-Kabupaten Bogor dan Sukabumi.',
    kontak: '0813-7766-3322',
    fotoUrl: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80'
  }
];

// DATA INFORMASI DESA - BERITA
export const BERITA_LIST: BeritaItem[] = [
  {
    id: 'berita-stunting',
    judul: 'Pemerintah Desa Warung Menteng Gelar Sosialisasi Pencegahan Stunting',
    slug: 'sosialisasi-pencegahan-stunting-desa-warung-menteng',
    kategori: 'Kegiatan Desa',
    tanggal: '12 Agustus 2025',
    penulis: 'Kader Posyandu & Humas Desa',
    ringkasan: 'Pemerintah Desa Warung Menteng bersama kader kesehatan menyelenggarakan sosialisasi pemenuhan gizi seimbang dan pencegahan stunting pada balita dan ibu hamil demi generasi desa yang sehat dan tangguh.',
    isiLengkap: `WARUNG MENTENG — Pemerintah Desa Warung Menteng menggelar agenda sosialisasi intensif pencegahan stunting di Aula Pertemuan Desa. Kegiatan ini dihadiri puluhan ibu hamil, ibu menyusui, serta kader Posyandu dari 7 RW di lingkungan Desa Warung Menteng.

Kepala Desa Warung Menteng menegaskan pentingnya intervensi gizi sejak 1.000 Hari Pertama Kehidupan (HPK). Sebagai wujud komitmen nyata, Pemdes mengalokasikan Pemberian Makanan Tambahan (PMT) berbahan baku lokal seperti ikan nila segar dan telur rebus kaya protein.

"Kesehatan anak-anak kita adalah fondasi masa depan desa. Kami memastikan seluruh posyandu memiliki timbangan digital standar antropometri dan pasokan suplemen gizi yang memadai," tutur Kepala Desa.

Dalam sesi interaktif, Bidan Desa memberikan demonstrasi pembuatan menu MPASI higienis berbahan pangan lokal yang terjangkau namun kaya nutrisi esensial bagi tumbuh kembang balita.`,
    fotoUrl: '/src/assets/images/berita_stunting_1788954573683.jpg',
    dibaca: 124,
    tags: ['Kegiatan Desa', 'Kesehatan', 'Stunting', 'Posyandu', 'Gizi']
  },
  {
    id: 'berita-musdes',
    judul: 'Musyawarah Desa (Musdes) RKPDES Tahun 2026 Resmi Dibuka',
    slug: 'musdes-rkpdes-tahun-2026-resmi-dibuka',
    kategori: 'Pemerintahan',
    tanggal: '8 Agustus 2025',
    penulis: 'Sekretariat BPD',
    ringkasan: 'BPD bersama Pemerintah Desa Warung Menteng resmi menggelar Musyawarah Desa dalam rangka penyusunan Rencana Kerja Pemerintah Desa (RKPDes) Tahun Anggaran 2026.',
    isiLengkap: `WARUNG MENTENG — Bertempat di pendopo balai desa, Badan Permusyawaratan Desa (BPD) bersama Pemerintah Desa Warung Menteng menggelar Musyawarah Desa (Musdes) Penyusunan RKPDes Tahun 2026.

Kegiatan strategis ini dihadiri oleh jajaran Forkopimcam Cijeruk, Ketua RT/RW, tokoh masyarakat, tokoh agama, serta keterwakilan kelompok perempuan dan pemuda. Musdes ini menjadi wadah musyawarah mufakat guna menampung pokok-pokok pikiran masyarakat dari tingkatan dusun.

Prioritas pembangunan tahun 2026 dititikberatkan pada peningkatan konektivitas jalan usaha tani, penguatan ketahanan pangan desa, rehabilitasi saluran irigasi, serta digitalisasi tata kelola administrasi perdesaan.`,
    fotoUrl: '/src/assets/images/berita_musdes_gate_1788954594566.jpg',
    dibaca: 98,
    tags: ['Pemerintahan', 'Musdes', 'RKPDes', 'Transparansi', 'BPD']
  },
  {
    id: 'berita-jalan',
    judul: 'Pembangunan Jalan Lingkungan di Kp. Cijeruk Mulai Dikerjakan',
    slug: 'pembangunan-jalan-lingkungan-kp-cijeruk-mulai-dikerjakan',
    kategori: 'Pembangunan',
    tanggal: '5 Agustus 2025',
    penulis: 'TPK Desa Warung Menteng',
    ringkasan: 'Realisasi betonisasi jalan lingkungan di Kp. Cijeruk resmi dimulai dengan pelibatan tenaga kerja warga lokal melalui skema Padat Karya Tunai Desa (PKTD).',
    isiLengkap: `WARUNG MENTENG — Pengerjaan betonisasi jalan lingkungan di Kp. Cijeruk, Desa Warung Menteng kini resmi dimulai. Program infrastruktur ini didanai melalui pos pembangunan Dana Desa untuk meningkatkan kelancaran mobilitas harian warga.

Ketua Tim Pelaksana Kegiatan (TPK) menyampaikan bahwa panjang ruas jalan yang dibeton mencapai 850 meter dengan ketebalan standar 15 cm. Seluruh pengerjaan mengutamakan tenaga kerja setempat melalui program Padat Karya Tunai Desa (PKTD) guna membuka lapangan kerja warga sekitar.

"Dengan jalan yang mulus dan bersih, anak-anak sekolah dapat berjalan dengan nyaman, serta aktivitas ekonomi pedagang dan pekebun menjadi jauh lebih lancar," pungkasnya.`,
    fotoUrl: '/src/assets/images/berita_jalan_lingkungan_1788954608799.jpg',
    dibaca: 87,
    tags: ['Pembangunan', 'Infrastruktur', 'Dana Desa', 'PKTD', 'Jalan Lingkungan']
  },
  {
    id: 'berita-sanggar',
    judul: 'Sanggar Seni Desa Warung Menteng Tampil di Acara Budaya Kecamatan',
    slug: 'sanggar-seni-desa-warung-menteng-tampil-di-acara-budaya-kecamatan',
    kategori: 'Pemberdayaan Masyarakat',
    tanggal: '2 Agustus 2025',
    penulis: 'Pembina Sanggar Seni',
    ringkasan: 'Generasi muda Desa Warung Menteng binaan Sanggar Seni Desa berhasil memukau para penonton festival pentas seni dan tari tradisional se-Kecamatan Cijeruk.',
    isiLengkap: `CIJERUK — Kontingen kesenian Desa Warung Menteng tampil memukau dalam Festival Seni dan Budaya Tradisional tingkat Kecamatan Cijeruk. Para penari muda membawakan tarian kreasi Jaipongan Sunda dengan balutan kostum merah keemasan yang anggun.

Keikutsertaan ini merupakan wujud dedikasi melestarikan warisan leluhur Pasundan serta membina karakter positif generasi muda desa agar terhindar dari pengaruh negatif gawai dan kenakalan remaja.

Kepala Seksi Pelayanan Desa mengapresiasi kerja keras para pelatih dan penari yang giat berlatih di balai desa setiap akhir pekan. Diharapkan sanggar seni desa ini dapat terus berprestasi hingga tingkat kabupaten.`,
    fotoUrl: '/src/assets/images/berita_sanggar_seni_1788954626818.jpg',
    dibaca: 76,
    tags: ['Pemberdayaan Masyarakat', 'Seni Budaya', 'Tari Tradisional', 'Pemuda']
  },
  {
    id: 'berita-umkm',
    judul: 'Pelatihan Digitalisasi UMKM untuk Warga Desa',
    slug: 'pelatihan-digitalisasi-umkm-untuk-warga-desa',
    kategori: 'Lainnya',
    tanggal: '28 Juli 2025',
    penulis: 'Pokja UMKM BUMDes',
    ringkasan: 'Pelaku usaha mikro makanan olahan, kerajinan bambu, dan kopi lokal mengikuti bimbingan teknis pembuatan toko online, foto produk berestetika, dan QRIS.',
    isiLengkap: `WARUNG MENTENG — Unit BUMDes Desa Warung Menteng menggelar Pelatihan Digitalisasi dan Packaging Modern bagi puluhan pelaku UMKM perdesaan. Pelatihan ini menghadirkan praktisi e-commerce dan desain kemasan.

Materi pelatihan berfokus pada teknik pengambilan foto produk bermutu tinggi cukup dengan kamera smartphone, cara menyusun deskripsi produk yang menarik, pendaftaran izin NIB, serta implementasi sistem pembayaran non-tunai QRIS.

Melalui digitalisasi ini, produk andalan Desa Warung Menteng seperti kopi lereng Salak, madu hutan murni, keripik singkong, dan olahan abon ikan diharapkan dapat menjangkau konsumen yang lebih luas secara nasional.`,
    fotoUrl: '/src/assets/images/berita_pelatihan_umkm_1788954647146.jpg',
    dibaca: 65,
    tags: ['Lainnya', 'UMKM', 'Pelatihan', 'Digitalisasi', 'Ekonomi Desa']
  },
  {
    id: 'berita-bibit-ikan',
    judul: 'Penyerahan Bantuan Bibit Ikan Nila & Pakan Organik untuk Kelompok Pembudidaya Mina Sejahtera',
    slug: 'bantuan-bibit-ikan-nila-mina-sejahtera',
    kategori: 'Pemberdayaan Masyarakat',
    tanggal: '20 Juli 2025',
    penulis: 'Penyuluh Perikanan',
    ringkasan: 'Sebanyak 25.000 ekor benih ikan nila unggul disalurkan kepada kelompok pembudidaya kolam air deras di Dusun III guna mendongkrak ketahanan pangan lokal.',
    isiLengkap: `WARUNG MENTENG — Pemerintah Desa menyalurkan bantuan bibit ikan nila merah dan pakan apung organik kepada Kelompok Pembudidaya Ikan Mina Sejahtera di Dusun III. Program ketahanan pangan hewani ini bertujuan memaksimalkan potensi aliran air alami Gunung Salak.`,
    fotoUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    dibaca: 110,
    tags: ['Pemberdayaan Masyarakat', 'Perikanan', 'Ketahanan Pangan', 'Budidaya']
  },
  {
    id: 'berita-kesehatan-lansia',
    judul: 'Pemeriksaan Kesehatan Gratis dan Posbindu Penyakit Tidak Menular Bagi Warga Lansia',
    slug: 'pemeriksaan-kesehatan-gratis-posbindu-lansia',
    kategori: 'Kegiatan Desa',
    tanggal: '15 Juli 2025',
    penulis: 'Kader Posbindu Desa',
    ringkasan: 'Ratusan warga lansia mendapatkan skrining gula darah, kolesterol, tekanan darah, serta senam kebugaran di Balai Dusun II.',
    isiLengkap: `WARUNG MENTENG — Layanan pemeriksaan kesehatan berkala bagi warga lanjut usia kembali diadakan di Balai Dusun II Menteng Tengah. Selain cek tensi dan konsultasi dokter, para lansia juga antusias mengikuti senam lansia sehat bersama instruktur.`,
    fotoUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80',
    dibaca: 95,
    tags: ['Kegiatan Desa', 'Kesehatan', 'Lansia', 'Posbindu']
  },
  {
    id: 'berita-pju-solar',
    judul: 'Pemasangan Lampu Penerangan Jalan Umum (PJU) Tenaga Surya di Titik Rawan',
    slug: 'pemasangan-pju-tenaga-surya-titik-rawan',
    kategori: 'Pembangunan',
    tanggal: '10 Juli 2025',
    penulis: 'Kasi Kesejahteraan',
    ringkasan: 'Sebanyak 30 titik PJU solar cell ramah lingkungan telah dipasang di sepanjang jalan penghubung antar-dusun yang minim penerangan.',
    isiLengkap: `WARUNG MENTENG — Guna meningkatkan keselamatan berkendara pada malam hari dan mencegah tindak kriminalitas, Pemdes Warung Menteng merampungkan pemasangan 30 tiang lampu penerangan bertenaga surya.`,
    fotoUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    dibaca: 140,
    tags: ['Pembangunan', 'Energi Terbarukan', 'PJU', 'Keamanan Lingkungan']
  },
  {
    id: 'berita-kebersihan-rw',
    judul: 'Lomba Kebersihan Lingkungan dan Pengelolaan Bank Sampah Tingkat RW',
    slug: 'lomba-kebersihan-lingkungan-bank-sampah-rw',
    kategori: 'Pemerintahan',
    tanggal: '5 Juli 2025',
    penulis: 'Tim Juri Desa',
    ringkasan: 'Apresiasi dan piala bergilir diserahkan kepada RW 03 atas inovasi pemilahan sampah organik rumah tangga menjadi pupuk kompos ramah lingkungan.',
    isiLengkap: `WARUNG MENTENG — Evaluasi lomba kebersihan lingkungan antar-RW tahun 2025 menetapkan RW 03 sebagai teladan dalam pengelolaan bank sampah mandiri dan penataan taman toga asri.`,
    fotoUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
    dibaca: 88,
    tags: ['Pemerintahan', 'Lingkungan', 'Bank Sampah', 'Kebersihan']
  },
  {
    id: 'berita-rembuk-stunting',
    judul: 'Rembuk Stunting dan Deklarasi Bebas Buang Air Besar Sembarangan (ODF)',
    slug: 'rembuk-stunting-deklarasi-odf-desa-warung-menteng',
    kategori: 'Kegiatan Desa',
    tanggal: '28 Juni 2025',
    penulis: 'Satgas Sanitasi Desa',
    ringkasan: 'Desa Warung Menteng berhasil meraih sertifikasi ODF 100% setelah seluruh rumah tangga memiliki akses jamban sehat dan sanitasi layak.',
    isiLengkap: `WARUNG MENTENG — Tim Verifikasi Sanitasi Total Berbasis Masyarakat (STBM) Dinas Kesehatan menyatakan Desa Warung Menteng bebas dari buang air besar sembarangan. Pencapaian ini diraih berkat pembangunan septictank komunal di kawasan padat.`,
    fotoUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80',
    dibaca: 104,
    tags: ['Kegiatan Desa', 'Sanitasi', 'ODF', 'Kesehatan Lingkungan']
  },
  {
    id: 'berita-ptsl-pertanahan',
    judul: 'Penyuluhan Hukum Pertanahan dan Percepatan Program PTSL Sertifikasi Warga',
    slug: 'penyuluhan-hukum-pertanahan-ptsl-sertifikasi-warga',
    kategori: 'Pemerintahan',
    tanggal: '20 Juni 2025',
    penulis: 'Kasi Pemerintahan',
    ringkasan: 'Sosialisasi pendaftaran tanah sistematis lengkap (PTSL) bersama petugas BPN Kabupaten Bogor guna memberikan kepastian legalitas kepemilikan tanah warga.',
    isiLengkap: `WARUNG MENTENG — BPN Kabupaten Bogor bersama perangkat desa memberikan pemaparan detail mengenai tata cara pengukuran bidang tanah, kelengkapan warkah, dan batas pekarangan untuk penerbitan sertifikat tanah resmi.`,
    fotoUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    dibaca: 160,
    tags: ['Pemerintahan', 'PTSL', 'Pertanahan', 'Pelayanan']
  },
  {
    id: 'berita-irigasi-tersier',
    judul: 'Panen Raya Padi Organik dan Peresmian Saluran Irigasi Tersier Cimenteng',
    slug: 'panen-raya-padi-organik-saluran-irigasi-cimenteng',
    kategori: 'Pembangunan',
    tanggal: '12 Juni 2025',
    penulis: 'Gapoktan Cimenteng Jaya',
    ringkasan: 'Saluran irigasi pasangan batu kali sepanjang 600 meter mengairi lebih dari 35 hektar persawahan terasering lereng Gunung Salak.',
    isiLengkap: `WARUNG MENTENG — Petani Desa Warung Menteng bersuka cita menyambut panen raya padi varietas ciherang organik dengan produktivitas mencapai 6,8 ton per hektar didukung irigasi tersier yang telah diperbaiki.`,
    fotoUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    dibaca: 135,
    tags: ['Pembangunan', 'Irigasi', 'Pertanian', 'Ketahanan Pangan']
  },
  {
    id: 'berita-turnamen-olahraga',
    judul: 'Festival Olahraga Tradisional dan Turnamen Sepak Bola Antar-Dusun',
    slug: 'festival-olahraga-tradisional-turnamen-antardusun',
    kategori: 'Pemberdayaan Masyarakat',
    tanggal: '4 Juni 2025',
    penulis: 'Karang Taruna Menteng Raya',
    ringkasan: 'Merajut persaudaraan antarwarga lewat kompetisi sepak bola mini, egrang, gobak sodor, dan bakiak yang disambut antusias ratusan penonton.',
    isiLengkap: `WARUNG MENTENG — Lapangan Desa Warung Menteng dipadati ribuan penonton dalam laga final Turnamen Karang Taruna Cup 2025 yang menjunjung tinggi sportivitas dan guyub rukun pemuda perdesaan.`,
    fotoUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    dibaca: 210,
    tags: ['Pemberdayaan Masyarakat', 'Karang Taruna', 'Olahraga', 'Guyub Rukun']
  },
  {
    id: 'berita-pelatihan-kerja',
    judul: 'Pembagian Sertifikat Pelatihan Kejuruan Kerja Balai Latihan Kerja Komunitas',
    slug: 'sertifikat-pelatihan-kerja-balai-latihan-komunitas',
    kategori: 'Lainnya',
    tanggal: '28 Mei 2025',
    penulis: 'Instruktur BLK',
    ringkasan: 'Sebanyak 30 peserta pelatihan otomotif sepeda motor dan instalasi listrik resmi menerima sertifikat kompetensi kejuruan.',
    isiLengkap: `WARUNG MENTENG — Program pelatihan vokasi kerja angkatan I resmi ditutup. Peserta kini dibekali keterampilan teknis serta bantuan perangkat alat kerja dasar untuk membuka usaha bengkel mandiri di desa.`,
    fotoUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    dibaca: 75,
    tags: ['Lainnya', 'Ketenagakerjaan', 'Pelatihan Kerja', 'Kemakmuran']
  },
  {
    id: 'berita-mitigasi-bencana',
    judul: 'Sosialisasi Tanggap Siaga Bencana dan Jalur Evakuasi Lereng Salak',
    slug: 'sosialisasi-tanggap-bencana-jalur-evakuasi-salak',
    kategori: 'Pemerintahan',
    tanggal: '20 Mei 2025',
    penulis: 'Relawan BPBD Desa',
    ringkasan: 'Pemdes bersama BPBD memasang rambu peringatan longsor dan menetapkan titik kumpul evakuasi darurat di Dusun I Menteng Girang.',
    isiLengkap: `WARUNG MENTENG — Mengingat letak geografis desa di perbukitan berkontur curam, simulasi tanggap darurat gempa dan longsor diselenggarakan bagi relawan desa dan Linmas.`,
    fotoUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    dibaca: 118,
    tags: ['Pemerintahan', 'Mitigasi Bencana', 'BPBD', 'Siaga Bencana']
  },
  {
    id: 'berita-blt-dana-desa',
    judul: 'Penyaluran Bantuan Langsung Tunai (BLT) Dana Desa Tahap 2 Tepat Sasaran',
    slug: 'penyaluran-blt-dana-desa-tahap-2-tepat-sasaran',
    kategori: 'Pemerintahan',
    tanggal: '12 Mei 2025',
    penulis: 'Kasi Kesejahteraan',
    ringkasan: 'Pemerintah Desa Warung Menteng menyalurkan BLT DD secara tertib, transparan, dan tanpa potongan kepada 65 KPM berpenghasilan rendah.',
    isiLengkap: `WARUNG MENTENG — Penyaluran BLT Dana Desa berlangsung tertib di kantor desa. Bagi lansia yang berhalangan hadir karena sakit, perangkat desa mengantarkan bantuan langsung ke kediaman warga (door-to-door).`,
    fotoUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    dibaca: 185,
    tags: ['Pemerintahan', 'BLT', 'Dana Desa', 'Bansos']
  },
  {
    id: 'berita-pengajian-akbar',
    judul: 'Peringatan Hari Besar Islam dan Pengajian Akbar Bersama Warga Se-Kecamatan',
    slug: 'peringatan-hari-besar-islam-pengajian-akbar',
    kategori: 'Kegiatan Desa',
    tanggal: '5 Mei 2025',
    penulis: 'MUI Desa Warung Menteng',
    ringkasan: 'Masjid Jami Baiturrahman dipadati ribuan jamaah dalam acara istighosah doa bersama untuk keselamatan dan keberkahan negeri.',
    isiLengkap: `WARUNG MENTENG — Suasana khidmat menyelimuti pengajian akbar yang dihadiri para alim ulama dan segenap warga dari seluruh penjuru dusun, mempererat ukhuwah islamiyah dan tali silaturahmi.`,
    fotoUrl: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800&q=80',
    dibaca: 240,
    tags: ['Kegiatan Desa', 'Keagamaan', 'Ukhuwah', 'Silaturahmi']
  },
  {
    id: 'berita-wisata-curug',
    judul: 'Pengembangan Wisata Alam Curug Pelangi dan Penataan Camping Ground Dusun III',
    slug: 'pengembangan-wisata-alam-curug-pelangi-camping-ground',
    kategori: 'Pembangunan',
    tanggal: '25 April 2025',
    penulis: 'Pokdarwis Desa',
    ringkasan: 'Penambahan jembatan kayu estetik, gazebo bambu ramah lingkungan, dan fasilitas sanitasi baru mempercantik daya tarik destinasi alam.',
    isiLengkap: `WARUNG MENTENG — Bersama Pokdarwis, penataan spot rekreasi alam air terjun terus digencarkan untuk menyerap kunjungan wisatawan akhir pekan dan membuka peluang usaha kuliner warga setempat.`,
    fotoUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    dibaca: 195,
    tags: ['Pembangunan', 'Pariwisata', 'Pokdarwis', 'Wisata Alam']
  }
];

// DATA INFORMASI DESA - PENGUMUMAN
export const PENGUMUMAN_LIST: PengumumanItem[] = [
  {
    id: 'peng-1',
    nomorSurat: '140/08/PEM/WM/VIII/2026',
    judul: 'Jadwal Penyaluran Bantuan Langsung Tunai Dana Desa (BLT-DD) Triwulan III',
    tanggal: '30 Agustus 2026',
    berlakuHingga: '10 September 2026',
    kategori: 'Bansos',
    isi: 'Diberitahukan kepada seluruh Keluarga Penerima Manfaat (KPM) BLT Dana Desa bahwa penyaluran bantuan periode Juli-Agustus-September 2026 akan dilaksanakan pada hari Rabu, 04 September 2026 pukul 08.30 WIB di Aula Kantor Desa Warung Menteng. Wajib membawa e-KTP dan Kartu Keluarga asli.',
    penanggungJawab: 'Kasi Kesejahteraan (Ustadz Ahmad Fauzi)'
  },
  {
    id: 'peng-2',
    nomorSurat: '440/12/KES/WM/VIII/2026',
    judul: 'Pelaksanaan Pekan Imunisasi Nasional (PIN) Polio & Posyandu Lansia Serentak',
    tanggal: '26 Agustus 2026',
    berlakuHingga: '05 September 2026',
    kategori: 'Kesehatan',
    isi: 'Dihimbau kepada para orang tua yang memiliki balita usia 0-7 tahun untuk membawa putra-putrinya ke Posyandu terdekat guna mendapatkan tetes imunisasi polio tambahan gratis demi melindungi anak dari kelumpuhan.',
    penanggungJawab: 'Bidan Desa & Pokja IV PKK'
  },
  {
    id: 'peng-3',
    nomorSurat: '300/05/TRANTIB/WM/VIII/2026',
    judul: 'Kerja Bakti Massal Kebersihan Saluran Irigasi Menghadapi Musim Penghujan',
    tanggal: '20 Agustus 2026',
    berlakuHingga: '01 September 2026',
    kategori: 'Kerja Bakti',
    isi: 'Seluruh Ketua RT dan RW dihimbau menggerakkan warganya untuk melaksanakan kerja bakti pembersihan selokan, gorong-gorong, dan pemangkasan dahan pohon yang berisiko patah di sepanjang jalan desa pada Minggu pagi pukul 07.00 WIB.',
    penanggungJawab: 'Kasi Pemerintahan & Babinsa'
  },
  {
    id: 'peng-4',
    nomorSurat: '470/19/LAY/WM/VIII/2026',
    judul: 'Pemberlakuan Layanan Pengajuan Surat Keterangan Online 24 Jam',
    tanggal: '10 Agustus 2026',
    berlakuHingga: 'Permanen',
    kategori: 'Layanan',
    isi: 'Kini warga Desa Warung Menteng dapat mengajukan surat keterangan (SKU, SKTM, Pengantar SKCK, Domisili, dll.) secara mandiri melalui website desa ini tanpa perlu antre panjang di kantor desa.',
    penanggungJawab: 'Sekretaris Desa (Asep Saepuloh)'
  }
];

// DATA INFORMASI DESA - PROGRAM DESA
export const PROGRAM_DESA_LIST: ProgramDesaItem[] = [
  {
    id: 'prog-1',
    namaProgram: 'Peningkatan Jalan Lingkungan & Drainase Pemukiman Dusun I & II',
    bidang: 'Infrastruktur',
    anggaran: 'Rp 350.000.000',
    sumberDana: 'Dana Desa & Bantuan Provinsi (Samisade)',
    tahun: '2026',
    progres: 85,
    target: 'Pengaspalan hotmix 1.800 M dan pemasangan u-ditch drainase 600 M',
    status: 'Sedang Berjalan',
    lokasi: 'Dusun I & Dusun II'
  },
  {
    id: 'prog-2',
    namaProgram: 'Program Bantuan Bedah Rumah Tidak Layak Huni (RTLH) 12 Unit',
    bidang: 'Infrastruktur',
    anggaran: 'Rp 240.000.000',
    sumberDana: 'Alokasi Dana Desa & Swadaya Masyarakat',
    tahun: '2026',
    progres: 60,
    target: '12 Rumah warga prasejahtera direnovasi menjadi rumah sehat berdinding hebel dan berlantai keramik',
    status: 'Sedang Berjalan',
    lokasi: 'Tersebar di 7 RW'
  },
  {
    id: 'prog-3',
    namaProgram: 'Sentra Ketahanan Pangan Nabati & Pakan Mandiri Budidaya Ikan',
    bidang: 'Ekonomi & UMKM',
    anggaran: 'Rp 180.000.000',
    sumberDana: 'Ketahanan Pangan Dana Desa (20%)',
    tahun: '2026',
    progres: 90,
    target: 'Pengadaan mesin pembuat pelet ikan mandiri dan bantuan 30.000 bibit nila ke kelompok tani',
    status: 'Sedang Berjalan',
    lokasi: 'Gudang Pakan Dusun III'
  },
  {
    id: 'prog-4',
    namaProgram: 'Pemberdayaan Posyandu & Penyediaan Antropometri Kit Presisi',
    bidang: 'Kesehatan & Gizi',
    anggaran: 'Rp 65.000.000',
    sumberDana: 'Dana Desa Bidang Kesehatan',
    tahun: '2026',
    progres: 100,
    target: 'Pengadaan 7 set timbangan digital bayi berstandar Kemenkes dan suplemen vitamin',
    status: 'Selesai',
    lokasi: '7 Posyandu RW'
  },
  {
    id: 'prog-5',
    namaProgram: 'Digitalisasi Desa: Pelayanan Surat Mandiri & Pemasangan WiFi Publik di Balai Warga',
    bidang: 'Digitalisasi & Pelayanan',
    anggaran: 'Rp 45.000.000',
    sumberDana: 'PADes & APBDes',
    tahun: '2026',
    progres: 95,
    target: 'Integrasi sistem arsip surat QR Code dan 4 titik hotspot gratis untuk belajar anak sekolah',
    status: 'Sedang Berjalan',
    lokasi: 'Balai Desa & Pos Kamling Induk'
  }
];

// DATA GALERI DESA
export const GALERI_LIST: GaleriItem[] = [
  {
    id: 'gal-1',
    judul: 'Rembug Warga & Musrenbangdes Penetapan RKPDes',
    kategori: 'Kegiatan Warga',
    tanggal: 'Agustus 2026',
    fotoUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
    deskripsi: 'Musyawarah perencanaan pembangunan desa yang dihadiri Kades, BPD, tokoh masyarakat, dan perwakilan perempuan.'
  },
  {
    id: 'gal-2',
    judul: 'Panen Raya Ikan Nila Kolam Air Deras Sungai Cimenteng',
    kategori: 'Pembangunan',
    tanggal: 'Juli 2026',
    fotoUrl: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80',
    deskripsi: 'Panen bersama kelompok tani ikan binaan BUMDes yang berhasil memanen 14 ton ikan nila merah berkualitas super.'
  },
  {
    id: 'gal-3',
    judul: 'Pawai Dongdang & Seren Taun Hasil Bumi',
    kategori: 'Tradisi & Budaya',
    tanggal: 'Juli 2026',
    fotoUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
    deskripsi: 'Kreativitas warga menghias tumpeng raksasa berisi sayur mayur, buah salak, durian, dan produk olahan lokal.'
  },
  {
    id: 'gal-4',
    judul: 'Keindahan Panorama Bukit Menteng di Kala Senja',
    kategori: 'Wisata & Alam',
    tanggal: 'Agustus 2026',
    fotoUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    deskripsi: 'Pemandangan eksotis matahari terbenam dengan siluet Gunung Salak yang memukau para pecinta alam.'
  },
  {
    id: 'gal-5',
    judul: 'Pemberian Makanan Tambahan & Posyandu Balita',
    kategori: 'Kegiatan Warga',
    tanggal: 'Agustus 2026',
    fotoUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80',
    deskripsi: 'Pelayanan kesehatan berkala untuk ibu hamil, balita, dan lansia di Posyandu Melati Dusun II.'
  },
  {
    id: 'gal-6',
    judul: 'Pelatihan Anyaman Bambu Tradisional Pemuda Karang Taruna',
    kategori: 'Tradisi & Budaya',
    tanggal: 'Juni 2026',
    fotoUrl: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=800&q=80',
    deskripsi: 'Generasi muda desa melestarikan warisan kerajinan besek dan kap lampu bambu bernilai ekspor.'
  }
];

// DATA PELAYANAN DESA - DAFTAR JENIS SURAT
export const JENIS_SURAT_LIST: JenisSurat[] = [
  {
    id: 'sk-domisili',
    kode: 'SKD',
    nama: 'Surat Keterangan Domisili Warga',
    deskripsi: 'Surat yang menyatakan bahwa seseorang benar berdomisili dan menetap di alamat Desa Warung Menteng.',
    estimasiWaktu: '1 Hari Kerja',
    persyaratan: [
      'Surat Pengantar dari Ketua RT dan RW domisili',
      'Foto / Scan e-KTP Pemohon yang masih berlaku',
      'Foto / Scan Kartu Keluarga (KK)',
      'Bukti sewa/kontrak rumah (khusus warga pendatang/pengontrak)'
    ],
    kegunaanUmum: 'Pendaftaran sekolah (zonasi), pembukaan rekening bank, pengurusan NPWP, persyaratan kerja, dan verifikasi kependudukan.',
    targetPage: 'pelayanan-surat-keterangan',
    targetParams: { initialJenis: 'domisili-warga' }
  },
  {
    id: 'sku',
    kode: 'SKU',
    nama: 'Surat Keterangan Usaha (SKU)',
    deskripsi: 'Surat keterangan resmi yang menyatakan bahwa pemohon memiliki usaha aktif di wilayah Desa Warung Menteng.',
    estimasiWaktu: '1 Hari Kerja',
    persyaratan: [
      'Surat Pengantar dari Ketua RT dan RW setempat',
      'Foto / Scan e-KTP Pemilik Usaha',
      'Foto / Scan Kartu Keluarga (KK)',
      'Foto Tempat Usaha / Produk UMKM',
      'Data Jenis Usaha & Alamat Lokasi Usaha'
    ],
    kegunaanUmum: 'Pengajuan pinjaman KUR Bank (BRI/BSI/Mandiri), izin UMKM, syarat pembukaan rekening bisnis, lelang, dll.',
    targetPage: 'pelayanan-surat-keterangan',
    targetParams: { initialJenis: 'domisili-usaha' }
  },
  {
    id: 'sktm',
    kode: 'SKTM',
    nama: 'Surat Keterangan Tidak Mampu (SKTM)',
    deskripsi: 'Surat yang menerangkan bahwa keluarga pemohon tergolong keluarga prasejahtera untuk keperluan bantuan sosial atau pendidikan.',
    estimasiWaktu: '1 Hari Kerja',
    persyaratan: [
      'Surat Pengantar dari Ketua RT dan RW yang menyatakan kondisi ekonomi keluarga',
      'Foto / Scan e-KTP Pemohon & Kepala Keluarga',
      'Foto / Scan Kartu Keluarga (KK)',
      'Foto Kondisi Rumah Tampak Depan & Ruang Tengah',
      'Surat Pernyataan Tidak Mampu bermaterai Rp 10.000 (opsional jika untuk beasiswa)'
    ],
    kegunaanUmum: 'Keringanan biaya RS/BPJS PBI, beasiswa sekolah/kuliah (KIP-Kuliah), permohonan bantuan hukum, dll.',
    targetPage: 'pelayanan-surat-keterangan',
    targetParams: { initialJenis: 'sktm' }
  },
  {
    id: 'sk-kematian',
    kode: 'SK-MATI',
    nama: 'Surat Keterangan Kematian',
    deskripsi: 'Surat resmi yang menerangkan telah meninggal dunianya seorang warga Desa Warung Menteng.',
    estimasiWaktu: '1 Hari Kerja',
    persyaratan: [
      'Surat Pengantar dari RT/RW setempat',
      'Surat Keterangan Kematian dari Dokter/RS/Puskesmas (jika ada)',
      'Foto / Scan e-KTP & KK Almarhum/Almarhumah',
      'Foto / Scan e-KTP Pelapor (Ahli Waris / Keluarga)',
      'Foto / Scan e-KTP 2 orang saksi'
    ],
    kegunaanUmum: 'Penerbitan Akta Kematian Disdukcapil, pengurusan asuransi/BPJS Ketenagakerjaan, penutupan rekening bank, hak waris.',
    targetPage: 'pelayanan-surat-keterangan',
    targetParams: { initialJenis: 'sk-kematian' }
  },
  {
    id: 'sk-pindah-keluar',
    kode: 'SK-PINDAH',
    nama: 'Surat Keterangan Pindah Keluar Desa',
    deskripsi: 'Surat pengantar perpindahan penduduk dari Desa Warung Menteng ke desa/kelurahan/kota lain (SKPWNI).',
    estimasiWaktu: '1 Hari Kerja',
    persyaratan: [
      'Surat Pengantar Pindah dari Ketua RT dan RW domisili asal',
      'Foto / Scan Kartu Keluarga (KK) Asli',
      'Foto / Scan e-KTP seluruh anggota keluarga yang pindah',
      'Alamat Tujuan Pindah Lengkap (RT/RW, Desa, Kec, Kab/Kota, Provinsi)',
      'Pas foto 3x4 (3 lembar)'
    ],
    kegunaanUmum: 'Pengurusan Surat Keterangan Pindah WNI (SKPWNI) di Disdukcapil untuk registrasi daerah baru.',
    targetPage: 'pelayanan-pindah-datang',
    targetParams: { initialJenis: 'pindah-keluar' }
  },
  {
    id: 'sk-pindah-datang',
    kode: 'SK-DATANG',
    nama: 'Pendaftaran Warga Pindah Datang Baru',
    deskripsi: 'Pelayanan pendaftaran warga baru yang pindah domisili masuk menjadi warga Desa Warung Menteng.',
    estimasiWaktu: '1 Hari Kerja',
    persyaratan: [
      'Surat Keterangan Pindah WNI (SKPWNI) asli dari daerah asal yang diterbitkan Disdukcapil',
      'Surat Pengantar Datang dari Ketua RT dan RW di Desa Warung Menteng',
      'Foto / Scan e-KTP dan Kartu Keluarga (KK) pemohon',
      'Buku Nikah / Akta Perkawinan (bagi yang sudah berkeluarga)',
      'Akta Kelahiran seluruh anggota keluarga yang ikut pindah'
    ],
    kegunaanUmum: 'Penerbitan Kartu Keluarga (KK) baru dan pencetakan KTP-el dengan alamat resmi Desa Warung Menteng.',
    targetPage: 'pelayanan-pindah-datang',
    targetParams: { initialJenis: 'pindah-datang' }
  },
  {
    id: 'formulir-n1-n4',
    kode: 'FORM-NIKAH',
    nama: 'Formulir N1-N4',
    deskripsi: 'Formulir resmi pernikahan model N1, N2, N3, dan N4 untuk administrasi pendaftaran akad nikah ke KUA.',
    estimasiWaktu: '1 Hari Kerja',
    persyaratan: [
      'Surat Pengantar Nikah dari Ketua RT dan RW domisili',
      'Fotokopi KTP-el & Kartu Keluarga (KK) calon mempelai (2 lembar)',
      'Fotokopi KTP kedua orang tua / wali nikah',
      'Fotokopi Akta Kelahiran & Ijazah Terakhir calon pengantin',
      'Pas foto berdampingan latar biru (2x3 = 4 lbr, 4x6 = 2 lbr)',
      'Surat Keterangan Imunisasi TT dari Puskesmas Cijeruk (calon istri)',
      'Bila status Duda/Janda: Lampirkan Akta Cerai Asli atau Akta Kematian'
    ],
    kegunaanUmum: 'Pendaftaran nikah resmi di Kantor Urusan Agama (KUA) Kecamatan Cijeruk.',
    targetPage: 'pelayanan-layanan-pernikahan',
    targetParams: { initialTab: 'formulir-n1-n4' }
  },
  {
    id: 'sk-belum-nikah',
    kode: 'SK-BELUM-NIKAH',
    nama: 'Surat Keterangan Belum Nikah',
    deskripsi: 'Surat yang menerangkan bahwa warga yang bersangkutan berstatus belum pernah menikah / lajang.',
    estimasiWaktu: '1 Hari Kerja',
    persyaratan: [
      'Surat Pengantar dari Ketua RT dan RW setempat',
      'Foto / Scan e-KTP Pemohon',
      'Foto / Scan Kartu Keluarga (KK)',
      'Surat Pernyataan Belum Pernah Menikah bermaterai Rp 10.000',
      'Fotokopi KTP 2 (dua) orang saksi warga tetangga'
    ],
    kegunaanUmum: 'Syarat melamar pekerjaan tertentu, pendaftaran KPR rumah subsidi, pengajuan beasiswa ikatan dinas.',
    targetPage: 'pelayanan-layanan-pernikahan',
    targetParams: { initialTab: 'belum-nikah' }
  },
  {
    id: 'sk-na',
    kode: 'SK-NA',
    nama: 'Surat Keterangan NA (Numpang Nikah)',
    deskripsi: 'Surat keterangan rekomendasi pernikahan untuk warga yang akan melangsungkan akad nikah di luar wilayah domisili desa.',
    estimasiWaktu: '1 Hari Kerja',
    persyaratan: [
      'Surat Pengantar dari Ketua RT dan RW domisili Desa Warung Menteng',
      'Fotokopi KTP-el & Kartu Keluarga (KK) Pemohon',
      'Fotokopi Akta Kelahiran & Ijazah Terakhir Pemohon',
      'Fotokopi KTP-el Calon Pasangan di daerah tujuan nikah',
      'Pas foto latar belakang biru (2x3 = 3 lbr, 3x4 = 3 lbr)',
      'Nama dan alamat lengkap KUA Kecamatan tujuan numpang nikah',
      'Bila status Duda/Janda: Lampirkan Akta Cerai Asli atau Surat Kematian'
    ],
    kegunaanUmum: 'Pendaftaran akad nikah di KUA luar kecamatan tempat tinggal mempelai pasangan.',
    targetPage: 'pelayanan-layanan-pernikahan',
    targetParams: { initialTab: 'sk-na' }
  },
  {
    id: 'sk-kelahiran',
    kode: 'SK-LAHIR',
    nama: 'Surat Keterangan Kelahiran',
    deskripsi: 'Surat keterangan kelahiran dari desa sebagai pengantar pembuatan Akta Kelahiran di Disdukcapil Kab. Bogor.',
    estimasiWaktu: '1 Hari Kerja',
    persyaratan: [
      'Surat Keterangan Lahir dari Bidan / Rumah Sakit / Puskesmas',
      'Foto / Scan e-KTP Orang Tua (Ayah & Ibu)',
      'Foto / Scan Kartu Keluarga (KK)',
      'Foto / Scan Buku Nikah Orang Tua',
      'Foto / Scan e-KTP 2 orang saksi kelahiran'
    ],
    kegunaanUmum: 'Pembuatan Akta Kelahiran anak, pendaftaran BPJS Bayi Baru Lahir, penambahan anggota KK.',
    targetPage: 'pelayanan-surat-keterangan',
    targetParams: { initialJenis: 'sk-kelahiran' }
  }
];

// SAMPLE PERMOHONAN SURAT (PERSISTED / MOCK)
export const INITIAL_PERMOHONAN_SURAT: PermohonanSurat[] = [
  {
    id: 'req-001',
    nomorRegistrasi: 'SRT-WM-2026-0819',
    tanggalPengajuan: '2026-08-28 09:15',
    jenisSuratId: 'sku',
    jenisSuratNama: 'Surat Keterangan Usaha (SKU)',
    namaPemohon: 'Muhammad Rizki Maulana',
    nik: '3201091506920003',
    noKK: '3201092001120005',
    tempatTanggalLahir: 'Bogor, 15 Juni 1992',
    jenisKelamin: 'Laki-laki',
    pekerjaan: 'Wiraswasta / Pembudidaya Ikan',
    agama: 'Islam',
    alamatLengkap: 'Kp. Cimenteng No. 18, RT 02 / RW 05',
    rt: '02',
    rw: '05',
    dusun: 'Dusun III Cimenteng',
    noWhatsApp: '081298765432',
    keperluan: 'Syarat pengajuan penambahan modal usaha budidaya ikan nila melalui KUR Mikro BRI Cijeruk.',
    status: 'Siap Diambil',
    catatanPetugas: 'Berkas KTP, KK, dan foto kolam telah lengkap terverifikasi. Surat sudah ditandatangani Kepala Desa dan dibubuhi stempel resmi.',
    tanggalSelesai: '2026-08-28 14:00',
    nomorSuratResmi: '503/142/SKU/WM/VIII/2026'
  },
  {
    id: 'req-002',
    nomorRegistrasi: 'SRT-WM-2026-0820',
    tanggalPengajuan: '2026-08-29 11:30',
    jenisSuratId: 'sktm',
    jenisSuratNama: 'Surat Keterangan Tidak Mampu (SKTM)',
    namaPemohon: 'Siti Sarah Rahmawati',
    nik: '3201095208040001',
    noKK: '3201091104080002',
    tempatTanggalLahir: 'Bogor, 12 Agustus 2004',
    jenisKelamin: 'Perempuan',
    pekerjaan: 'Pelajar / Mahasiswa',
    agama: 'Islam',
    alamatLengkap: 'Kp. Menteng Girang No. 07, RT 01 / RW 02',
    rt: '01',
    rw: '02',
    dusun: 'Dusun I Menteng Girang',
    noWhatsApp: '085712348899',
    keperluan: 'Pendaftaran beasiswa program KIP-Kuliah (Kartu Indonesia Pintar) di IPB University.',
    status: 'Diproses',
    catatanPetugas: 'Sedang dalam proses pembuatan draft naskah dinas oleh Kasi Pelayanan.',
    tanggalSelesai: '-'
  },
  {
    id: 'req-003',
    nomorRegistrasi: 'SRT-WM-2026-0821',
    tanggalPengajuan: '2026-08-30 08:45',
    jenisSuratId: 'skck-pengantar',
    jenisSuratNama: 'Surat Pengantar Catatan Kepolisian (SKCK)',
    namaPemohon: 'Fajar Nugraha',
    nik: '3201092003990004',
    noKK: '3201091505050009',
    tempatTanggalLahir: 'Bogor, 20 Maret 1999',
    jenisKelamin: 'Laki-laki',
    pekerjaan: 'Karyawan Swasta',
    agama: 'Islam',
    alamatLengkap: 'Jl. Pasir Menteng No. 12, RT 03 / RW 01',
    rt: '03',
    rw: '01',
    dusun: 'Dusun I',
    noWhatsApp: '081388776655',
    keperluan: 'Melengkapi berkas rekrutmen seleksi pegawai BUMN PT Kereta Api Indonesia.',
    status: 'Diajukan',
    catatanPetugas: 'Menunggu verifikasi kesesuaian berkas identitas dan pengantar RT.',
    tanggalSelesai: '-'
  }
];

// DATA ASPIRASI & PENGADUAN (SAMPLE & PERSISTENCE SEED)
export const INITIAL_LAPORAN_WARGA: LaporanWarga[] = [
  {
    id: 'lap-001',
    kodeTiket: 'LPR-WM-2026-0104',
    tipe: 'pengaduan',
    namaPelapor: 'Budi Santoso',
    isAnonim: false,
    nik: '3201091807850002',
    kontakWA: '081299887711',
    kategori: 'Infrastruktur & Jalan',
    judul: 'Lampu Penerangan Jalan Umum (PJU) Padam di Tikungan Dusun III Cimenteng',
    isiLaporan: 'Mohon bantuannya untuk perbaikan 2 titik lampu PJU yang padam di tikungan dekat jembatan Cimenteng. Jalur cukup gelap dan rawan saat malam hari bagi pengendara motor.',
    lokasiKejadian: 'Jalan Raya Cimenteng RT 02 RW 05',
    fotoBuktiUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    tanggalKirim: '2026-08-25 19:40',
    status: 'Selesai',
    tanggapanResmi: 'Terima kasih atas laporannya. Tim Linmas dan teknisi PJU desa didampingi Kepala Dusun III telah melakukan penggantian bohlam dan trafo lampu pada tanggal 26 Agustus 2026. Lampu sudah kembali menyala normal.',
    tanggalTanggapan: '2026-08-26 11:20',
    petugasPenanggap: 'Kasi Pemerintahan & Kadus III'
  },
  {
    id: 'lap-002',
    kodeTiket: 'LPR-WM-2026-0105',
    tipe: 'aspirasi',
    namaPelapor: 'Himpunan Pemuda Karang Taruna Menteng',
    isAnonim: false,
    nik: '3201092404980006',
    kontakWA: '085733445566',
    kategori: 'Olahraga & Kepemudaan',
    judul: 'Usulan Revitalisasi Lapangan Voli & Pengadaan Bola untuk Pemuda RT 04 RW 02',
    isiLaporan: 'Kami mengusulkan perataan dan semenisasi lapangan bola voli di tanah kas desa RT 04 Dusun II agar kegiatan olahraga pemuda saat sore hari dapat lebih aktif dan terhindar dari kegiatan negatif.',
    lokasiKejadian: 'Lapangan RT 04 RW 02',
    tanggalKirim: '2026-08-27 15:10',
    status: 'Sedang Ditindaklanjuti',
    tanggapanResmi: 'Usulan telah kami catat dalam daftar rekapitulasi usulan Pra-Musrenbangdes Tahun Anggaran 2027. Tim survey urusan perencanaan desa akan meninjau lokasi pekan ini.',
    tanggalTanggapan: '2026-08-28 09:00',
    petugasPenanggap: 'Kaur Perencanaan (Rian Hidayat, S.P.)'
  },
  {
    id: 'lap-003',
    kodeTiket: 'LPR-WM-2026-0106',
    tipe: 'tanya-informasi',
    namaPelapor: 'Warga Dusun I',
    isAnonim: true,
    kontakWA: '087811223344',
    kategori: 'Bantuan Sosial & Layanan',
    judul: 'Informasi Pendaftaran Program BPJS Kesehatan Gratis (PBI-APBD)',
    isiLaporan: 'Selamat siang admin desa, saya ingin menanyakan jadwal pendaftaran dan syarat pengajuan kartu BPJS Kesehatan gratis PBI APBD untuk orang tua lansia di desa kita. Terima kasih.',
    tanggalKirim: '2026-08-29 10:05',
    status: 'Selesai',
    tanggapanResmi: 'Selamat siang. Untuk pendaftaran BPJS PBI APBD, bapak/ibu dapat membawa Fotokopi KK, KTP orang tua, dan Surat Keterangan Tidak Mampu (SKTM) dari desa ke loket Pelayanan Kesejahteraan Sosial Kantor Desa setiap hari kerja pukul 08.00 - 15.00 WIB untuk diverifikasi ke sistem DTKS Kemensos.',
    tanggalTanggapan: '2026-08-29 13:45',
    petugasPenanggap: 'Kasi Pelayanan (Dewi Anggraeni, S.Sos.)'
  }
];

// DATA KONTAK DARURAT (8 KATEGORI LENGKAP YANG DIMINTA USER)
export const KONTAK_DARURAT_LIST: KontakDaruratItem[] = [
  {
    id: 'dar-1',
    namaLayanan: 'Pemadam Kebakaran',
    instansi: 'Pos Damkar Cijeruk',
    kategori: 'Kebakaran & Bencana',
    nomorTelepon: '(0251) 829-1505',
    nomorWA: '+628567785200',
    alamatPos: 'Pos Damkar Sektor Ciawi, Jl. Raya Puncak KM 72',
    siaga: '24 Jam Siaga Panggilan Darurat',
    namaPetugas: 'Regu Piket Damkar Ciawi',
    deskripsi: 'Penanganan kebakaran rumah, hutan, evakuasi sarang tawon, ular berbisa, dan pohon tumbang. Hubungi Telepon: (0251) 829-1505 atau WhatsApp: (+62) 856-7785-200.',
    iconName: 'Flame'
  },
  {
    id: 'dar-2',
    namaLayanan: 'Ambulans Siaga',
    instansi: 'Layanan Kesehatan Desa Warung Menteng',
    kategori: 'Medis & Kesehatan',
    nomorTelepon: '0811-2233-4455',
    nomorWA: '6281122334455',
    alamatPos: 'Garasi Siaga Kantor Desa Warung Menteng',
    siaga: '24 Jam Non-Stop',
    namaPetugas: 'Pak Jajang (Driver Siaga 1) / Pak Hendra (Driver Siaga 2)',
    deskripsi: 'Layanan antar jemput pasien gawat darurat, ibu melahirkan, rujukan RSUD Ciawi / PMI Bogor gratis bagi warga Desa Warung Menteng.',
    iconName: 'Ambulance'
  },
  {
    id: 'dar-3',
    namaLayanan: 'Bhabinkamtibmas',
    instansi: 'Polsek Cijeruk',
    kategori: 'Keamanan & Ketertiban',
    nomorTelepon: '0877-8566-2677',
    nomorWA: '6287785662677',
    alamatPos: 'Polsek Cijeruk / Pos Bhabin Kantor Desa',
    siaga: '24 Jam Pembinaan Kamtibmas',
    namaPetugas: 'Aiptu Bambang Sutrisno (Bhabinkamtibmas Desa Warung Menteng)',
    deskripsi: 'Pelaporan tindak kriminalitas, mediasi sengketa warga, penanganan gangguan ketertiban umum, dan pengamanan lingkungan.',
    iconName: 'Shield'
  },
  {
    id: 'dar-4',
    namaLayanan: 'BPBD',
    instansi: 'Kab. Bogor',
    kategori: 'Kebakaran & Bencana',
    nomorTelepon: '(0251) 8542220',
    nomorWA: '6281210109008',
    alamatPos: 'Pusdalops BPBD Kab. Bogor',
    siaga: '24 Jam Siaga Bencana',
    namaPetugas: 'Operator Pusdalops BPBD',
    deskripsi: 'Tanggap darurat bencana tanah longsor lereng Gn. Salak, angin puting beliung, luapan sungai, dan distribusi logistik darurat.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'dar-5',
    namaLayanan: 'Satpol PP',
    instansi: 'Kec. Cijeruk',
    kategori: 'Keamanan & Ketertiban',
    nomorTelepon: '0857-1758-8123',
    nomorWA: '6285717588123',
    alamatPos: 'Kantor Kecamatan Cijeruk',
    siaga: '07.30 - 22.00 WIB (Siaga Patroli Wilayah)',
    namaPetugas: 'Kanit Trantibum Satpol PP',
    deskripsi: 'Penegakan Perda, penertiban miras, galian liar, pembinaan ketertiban umum, dan pendampingan linmas desa.',
    iconName: 'Building2'
  },
  {
    id: 'dar-6',
    namaLayanan: 'Babinsa',
    instansi: 'Koramil Cijeruk',
    kategori: 'Keamanan & Ketertiban',
    nomorTelepon: '0813-8501-5926',
    nomorWA: '6281385015926',
    alamatPos: 'Koramil Cijeruk / Pos Babinsa Desa',
    siaga: '24 Jam Ketahanan Wilayah',
    namaPetugas: 'Serka Mulyadi (Babinsa Desa Warung Menteng)',
    deskripsi: 'Pengamanan teritorial wilayah, pendampingan tanggap bencana, karya bakti gotong royong, dan stabilitas keamanan perbatasan.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'dar-7',
    namaLayanan: 'Bidan Desa',
    instansi: 'Puskesmas Cijeruk',
    kategori: 'Medis & Kesehatan',
    nomorTelepon: '0813-1122-3344',
    nomorWA: '6281311223344',
    alamatPos: 'Pondok Bersalin Desa (Polindes) Warung Menteng RT 02 RW 02',
    siaga: '24 Jam Siaga Melahirkan',
    namaPetugas: 'Bidan Rina Marlina, S.Tr.Keb.',
    deskripsi: 'Pertolongan persalinan darurat 24 jam, konsultasi kesehatan ibu dan anak, penanganan pendarahan pasca salin, imunisasi darurat.',
    iconName: 'HeartPulse'
  },
  {
    id: 'dar-8',
    namaLayanan: 'PLKB',
    instansi: 'BKKBN Cijeruk',
    kategori: 'Pamong Desa',
    nomorTelepon: '0858-9900-1133',
    nomorWA: '6285899001133',
    alamatPos: 'Balai Penyuluhan KB Cijeruk',
    siaga: 'Senin - Jumat: 08.00 - 16.00 WIB',
    namaPetugas: 'Ibu Ratna Dewi, S.K.M.',
    deskripsi: 'Konsultasi program KB, pendampingan keluarga berisiko stunting, calon pengantin (Elsimil), dan ketahanan keluarga sejahtera.',
    iconName: 'Users'
  }
];

// DATA KELEMBAGAAN DESA
export const LEMBAGA_DESA_LIST: LembagaItem[] = [
  {
    id: 'lem-1',
    nama: 'Badan Permusyawaratan Desa',
    singkatan: 'BPD',
    ketua: 'Drs. H. Mulyadi Kusuma',
    deskripsi: 'Lembaga yang melaksanakan fungsi pemerintahan yang anggotanya merupakan wakil dari penduduk desa berdasarkan keterwakilan wilayah dan ditetapkan secara demokratis.',
    jumlahAnggota: 9,
    kontak: '0812-3344-5566',
    fotoUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80',
    programUtama: [
      'Membahas dan menyepakati Rancangan Peraturan Desa (Perdes) bersama Kepala Desa',
      'Menampung dan menyalurkan aspirasi masyarakat Desa Warung Menteng',
      'Melakukan pengawasan kinerja Kepala Desa dan transparansi APBDes'
    ]
  },
  {
    id: 'lem-2',
    nama: 'Lembaga Pemberdayaan Masyarakat Desa',
    singkatan: 'LPMD',
    ketua: 'Bpk. Cecep Hidayat',
    deskripsi: 'Wadah yang dibentuk atas prakarsa masyarakat sebagai mitra pemerintah desa dalam menampung dan mewujudkan aspirasi serta kebutuhan masyarakat di bidang pembangunan.',
    jumlahAnggota: 12,
    kontak: '0857-8899-0011',
    fotoUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80',
    programUtama: [
      'Penyusunan rencana pembangunan partisipatif (Musrenbangdes)',
      'Penggerak gotong royong dan swadaya masyarakat',
      'Peningkatan kualitas sarana prasarana lingkungan permukiman'
    ]
  },
  {
    id: 'lem-3',
    nama: 'Pemberdayaan Kesejahteraan Keluarga',
    singkatan: 'PKK Desa',
    ketua: 'Hj. Endang Irfan Setiawan',
    deskripsi: 'Gerakan nasional dalam pembangunan masyarakat yang tumbuh dari bawah untuk terwujudnya keluarga beriman, berakhlak mulia, sehat sejahtera, dan mandiri.',
    jumlahAnggota: 35,
    kontak: '0813-9900-1122',
    fotoUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
    programUtama: [
      'Pelaksanaan 10 Program Pokok PKK',
      'Pencegahan Stunting terpadu & Rumah Gizi Posyandu',
      'Pelatihan pengolahan produk pangan lokal UMKM ibu-ibu desa'
    ]
  },
  {
    id: 'lem-4',
    nama: 'Karang Taruna Menteng Jaya',
    singkatan: 'Karang Taruna',
    ketua: 'Rizki Pratama, S.Pd.',
    deskripsi: 'Organisasi kepemudaan di Indonesia yang mewadahi generasi muda dalam mengembangkan potensi diri, kepedulian sosial, olahraga, dan wirausaha muda.',
    jumlahAnggota: 48,
    kontak: '0896-1122-3344',
    fotoUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80',
    programUtama: [
      'Turnamen Olahraga Tahunan Kades Cup Warung Menteng',
      'Pelatihan Digital Marketing & Content Creator Pemuda Desa',
      'Satgas Tanggap Bencana & Kegiatan Sosial Lingkungan'
    ]
  },
  {
    id: 'lem-5',
    nama: 'Kelompok Sadar Wisata & Lingkungan Hidup',
    singkatan: 'POKDARWIS',
    ketua: 'Bpk. Hendra Gunawan',
    deskripsi: 'Kelompok swadaya masyarakat yang berperan mengembangkan dan mempromosikan potensi pariwisata alam, agrowisata, dan konservasi lereng Gunung Salak.',
    jumlahAnggota: 24,
    kontak: '0878-4455-6677',
    fotoUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    programUtama: [
      'Pengelolaan Destinasi Curug Pelangi & Bukit Menteng Asri',
      'Penerapan Sapta Pesona Wisata & Edukasi Lingkungan',
      'Pemandu Wisata Tracking & River Tubing Sungai Cimenteng'
    ]
  },
  {
    id: 'lem-6',
    nama: 'Satuan Perlindungan Masyarakat',
    singkatan: 'LINMAS Desa',
    ketua: 'Bpk. Komarudin',
    deskripsi: 'Warga masyarakat yang disiapkan dan dibekali pengetahuan serta keterampilan untuk melaksanakan kegiatan penanganan ketenteraman dan ketertiban.',
    jumlahAnggota: 28,
    kontak: '0812-7788-9900',
    fotoUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80',
    programUtama: [
      'Ronda malam terpadu di 28 Pos Kamling RT',
      'Pengamanan acara peringatan hari besar dan kegiatan warga',
      'Kesiapsiagaan penanganan awal bencana alam tanah longsor/pohon tumbang'
    ]
  }
];

// DATA DOKUMEN DOWNLOAD & FORMULIR
export const DOKUMEN_DOWNLOAD_LIST: DokumenDownloadItem[] = [
  {
    id: 'doc-1',
    judul: 'Blanko Surat Pengantar RT / RW Resmi Desa Warung Menteng',
    kategori: 'Formulir Surat',
    ukuran: '145 KB',
    format: 'DOCX',
    tanggalUpdate: '15 Januari 2026',
    deskripsi: 'Formulir standar pengantar dari Ketua RT dan Ketua RW yang wajib dibawa sebelum mengajukan surat administrasi ke kantor desa.',
    jumlahUnduh: 1240,
    downloadUrl: '#'
  },
  {
    id: 'doc-2',
    judul: 'Formulir Permohonan Surat Keterangan Usaha (SKU) & Surat Pernyataan Usaha',
    kategori: 'Formulir Surat',
    ukuran: '210 KB',
    format: 'PDF',
    tanggalUpdate: '20 Januari 2026',
    deskripsi: 'Dokumen kelengkapan permohonan SKU untuk pengajuan KUR perbankan, perizinan dagang, dan sertifikasi halal UMKM.',
    jumlahUnduh: 890,
    downloadUrl: '#'
  },
  {
    id: 'doc-3',
    judul: 'Formulir F-1.01 Biodata Kependudukan & Pendaftaran Perpindahan Penduduk WNI',
    kategori: 'Formulir Surat',
    ukuran: '320 KB',
    format: 'PDF',
    tanggalUpdate: '10 Februari 2026',
    deskripsi: 'Formulir baku Dinas Kependudukan dan Catatan Sipil untuk permohonan KK baru, perubahan elemen data, atau surat pindah datang.',
    jumlahUnduh: 670,
    downloadUrl: '#'
  },
  {
    id: 'doc-4',
    judul: 'Peraturan Desa (Perdes) No. 04 Tahun 2025 tentang Pelestarian Sumber Mata Air & Lingkungan',
    kategori: 'Regulasi & Perdes',
    ukuran: '512 KB',
    format: 'PDF',
    tanggalUpdate: '05 Desember 2025',
    deskripsi: 'Regulasi perlindungan kawasan sungai Cimenteng, larangan pembuangan limbah, dan penataan kolam air deras budidaya ikan.',
    jumlahUnduh: 430,
    downloadUrl: '#'
  },
  {
    id: 'doc-5',
    judul: 'Laporan Realisasi Pertanggungjawaban APBDes Warung Menteng Tahun Anggaran 2025',
    kategori: 'Laporan Transparansi',
    ukuran: '1.2 MB',
    format: 'PDF',
    tanggalUpdate: '12 Januari 2026',
    deskripsi: 'Buku laporan transparansi keuangan desa, realisasi Dana Desa, Bagi Hasil Pajak, dan Alokasi Dana Desa (ADD) 2025.',
    jumlahUnduh: 950,
    downloadUrl: '#'
  },
  {
    id: 'doc-6',
    judul: 'Buku Panduan Standar Operasional Prosedur (SOP) Pelayanan Publik PTSP Desa',
    kategori: 'Panduan Layanan',
    ukuran: '780 KB',
    format: 'PDF',
    tanggalUpdate: '02 Januari 2026',
    deskripsi: 'Panduan alur waktu, persyaratan dokumen, dan hak-hak masyarakat dalam menerima pelayanan administrasi gratis.',
    jumlahUnduh: 520,
    downloadUrl: '#'
  }
];

// DATA DEMOGRAFI & STATISTIK DETAIL
export const DEMOGRAFI_DATA = {
  pendudukBerdasarkanDusun: [
    { namaDusun: 'Dusun I (Menteng Girang)', rw: 'RW 01, RW 02', jumlahKK: 780, totalJiwa: 2640, lakiLaki: 1350, perempuan: 1290 },
    { namaDusun: 'Dusun II (Menteng Tengah)', rw: 'RW 03, RW 04', jumlahKK: 710, totalJiwa: 2410, lakiLaki: 1230, perempuan: 1180 },
    { namaDusun: 'Dusun III (Menteng Hilir & Cimenteng)', rw: 'RW 05, RW 06, RW 07', jumlahKK: 695, totalJiwa: 2378, lakiLaki: 1210, perempuan: 1168 }
  ],
  pendudukBerdasarkanKelompokUsia: [
    { rentang: '0 - 4 Tahun (Balita)', jumlah: 580, persen: 7.8 },
    { rentang: '5 - 14 Tahun (Anak-anak)', jumlah: 1210, persen: 16.3 },
    { rentang: '15 - 24 Tahun (Remaja/Produktif Awal)', jumlah: 1340, persen: 18.0 },
    { rentang: '25 - 54 Tahun (Usia Produktif Dewasa)', jumlah: 3180, persen: 42.8 },
    { rentang: '55 - 64 Tahun (Pra-Lansia)', jumlah: 690, persen: 9.3 },
    { rentang: '65+ Tahun (Lansia)', jumlah: 428, persen: 5.8 }
  ],
  pendudukBerdasarkanPendidikan: [
    { tingkat: 'Belum / Tidak Sekolah', jumlah: 620, persen: 8.3 },
    { tingkat: 'SD / Sederajat', jumlah: 2410, persen: 32.4 },
    { tingkat: 'SMP / Sederajat', jumlah: 1980, persen: 26.7 },
    { tingkat: 'SMA / SMK / MA', jumlah: 1850, persen: 24.9 },
    { tingkat: 'Diploma (D1 - D3)', jumlah: 248, persen: 3.3 },
    { tingkat: 'Sarjana & Pascasarjana (S1 / S2)', jumlah: 320, persen: 4.3 }
  ],
  pendudukBerdasarkanPekerjaan: [
    { profesi: 'Petani & Pekebun', jumlah: 1650, persen: 35.1 },
    { profesi: 'Pembudidaya Ikan Air Tawar', jumlah: 420, persen: 8.9 },
    { profesi: 'Pedagang & Pelaku UMKM', jumlah: 680, persen: 14.5 },
    { profesi: 'Buruh Harian Lepas & Konstruksi', jumlah: 840, persen: 17.9 },
    { profesi: 'Karyawan Swasta & Industri', jumlah: 610, persen: 13.0 },
    { profesi: 'PNS / TNI / POLRI / Pensiunan', jumlah: 85, persen: 1.8 },
    { profesi: 'Lainnya (Jasa, Transportasi, dsb)', jumlah: 415, persen: 8.8 }
  ],
  pendudukBerdasarkanAgama: [
    { agama: 'Islam', jumlah: 7390, persen: 99.5 },
    { agama: 'Kristen Protestan', jumlah: 25, persen: 0.3 },
    { agama: 'Katolik', jumlah: 10, persen: 0.1 },
    { agama: 'Lainnya', jumlah: 3, persen: 0.1 }
  ]
};

// DATA VIDEO PROFIL DESA
export const VIDEO_PROFIL_DATA = {
  judul: 'Pesona Alam, Perikanan, & Harmoni Desa Warung Menteng',
  durasi: '12 Menit 45 Detik',
  penulis: 'Tim Dokumentasi & Informasi Desa Warung Menteng',
  deskripsi: 'Menjelajahi potensi agrowisata buah salak dan kopi lereng Salak, gemericik air jernih sentra perikanan air deras, pesona Curug Pelangi, serta keramahan warga Sunda di Desa Warung Menteng, Kecamatan Cijeruk, Kabupaten Bogor.',
  youtubeEmbedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // safe embed format
  thumbnailUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  babVideo: [
    { menit: '00:00', topik: 'Pengantar & Sambutan Kepala Desa' },
    { menit: '02:15', topik: 'Pesona Geografis Lereng Gunung Salak' },
    { menit: '05:00', topik: 'Sentra Kolam Air Deras & Budidaya Perikanan' },
    { menit: '07:45', topik: 'Geliat UMKM: Kopi Robusta & Anyaman Bambu' },
    { menit: '09:30', topik: 'Tradisi Budaya Seren Taun & Seni Calung' },
    { menit: '11:15', topik: 'Pelayanan Publik Digital & Harapan Masa Depan' }
  ]
};

