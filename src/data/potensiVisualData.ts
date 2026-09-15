// Data spesifik untuk tampilan visual Akomodasi, Budaya & Adat, Budidaya, dan UMKM
// Sesuai dengan desain tata letak kartu dan hero banner pada referensi gambar resmi

export interface PotensiCardItem {
  id: string;
  nama: string;
  deskripsi: string;
  detailLengkap: string;
  fotoUrl: string;
  lokasi?: string;
  kategori?: string;
  jamOperasional?: string;
  harga?: string;
  fasilitas?: string[];
  kontak?: string;
  pelaku?: string;
  waktuPelaksanaan?: string;
  komoditas?: string;
  kapasitas?: string;
  kelompok?: string;
  actionText?: string;
  galeriFoto?: string[];
  nomorWA?: string;
  mapsLink?: string;
}

// 1. AKOMODASI (15 Cards, 5 Kolom Grid - Pengganti Destinasi sesuai instruksi)
export const AKOMODASI_LIST: PotensiCardItem[] = [
  {
    id: 'akomodasi-1',
    nama: 'Curug Cibaliung',
    deskripsi: 'Air terjun alami dengan suasana sejuk dan asri.',
    detailLengkap: 'Curug Cibaliung menawarkan pesona air terjun alami tersembunyi dengan aliran air jernih pegunungan Gunung Salak dan kolam alami berwarna toska. Dikelilingi tebing bebatuan eksotis dan pepohonan rimbun, tempat ini ideal untuk berenang, relaksasi, dan fotografi alam.',
    fotoUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Dusun 2, Kp. Pasir Tengah, Warung Menteng',
    jamOperasional: '07.30 - 17.00 WIB',
    harga: 'Rp 15.000 / orang',
    fasilitas: ['Area Parkir', 'Kamar Mandi & Bilas', 'Warung Makanan', 'Spot Foto Alami', 'Gazebo Bambu'],
    kontak: '0812-8899-2311 (Pokdarwis Cibaliung)'
  },
  {
    id: 'akomodasi-2',
    nama: 'Bukit Menteng',
    deskripsi: 'Spot terbaik untuk menikmati panorama alam desa dari ketinggian.',
    detailLengkap: 'Bukit Menteng berada di titik ketinggian sekitar 750 mdpl dengan dek pandang kayu bambu. Pengunjung dapat menyaksikan hamparan sawah terasering, lembah hijau Cijeruk, serta siluet megah Gunung Salak dan Gunung Gede Pangrango.',
    fotoUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Kp. Menteng Atas, Warung Menteng',
    jamOperasional: '06.00 - 18.00 WIB',
    harga: 'Rp 10.000 / orang',
    fasilitas: ['Dek Pandang Kayu', 'Kedai Kopi Lokal', 'Musholla', 'Spot Sunrise/Sunset'],
    kontak: '0857-1122-3344'
  },
  {
    id: 'akomodasi-3',
    nama: 'Persawahan Terasering',
    deskripsi: 'Pemandangan hijau yang memanjakan mata.',
    detailLengkap: 'Hamparan sawah terasering berundak warisan leluhur yang memanfaatkan sistem irigasi subak Sunda tradisional. Suasana hening dan semilir angin sejuk menjadikannya tempat jogging dan trekking favorit.',
    fotoUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Blok Babakan Sawah, Warung Menteng',
    jamOperasional: 'Buka Setiap Hari (24 Jam)',
    harga: 'Gratis / Donasi Sukarela',
    fasilitas: ['Jalur Trekking Sawah', 'Saung Tani', 'Spot Foto'],
    kontak: '0813-9876-5432'
  },
  {
    id: 'akomodasi-4',
    nama: 'Wisata Camping Ground',
    deskripsi: 'Nikmati alam bebas dengan suasana yang tenang.',
    detailLengkap: 'Area perkemahan berlatar pemandangan perbukitan dan kerlap-kerlip lampu kota Bogor di malam hari. Menyediakan sewa tenda, kayu bakar api unggun, dan fasilitas sanitasi memadai.',
    fotoUrl: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Puncak Pasir Bungur, Warung Menteng',
    jamOperasional: 'Check-in 14.00, Check-out 12.00 WIB',
    harga: 'Rp 35.000 / malam (kavling)',
    fasilitas: ['Kavling Tenda', 'Toilet & Listrik', 'Api Unggun', 'Keamanan 24 Jam'],
    kontak: '0821-4455-6677'
  },
  {
    id: 'akomodasi-5',
    nama: 'Makam Eyang Warung Menteng',
    deskripsi: 'Situs bersejarah yang menjadi cikal bakal desa.',
    detailLengkap: 'Makam bersejarah tokoh sesepuh pendiri perkampungan Warung Menteng pada era kesultanan Banten dan Sumedang Larang. Dikelilingi saung kayu dan pohon beringin tua yang dirawat dengan hormat oleh juru kunci desa.',
    fotoUrl: 'https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Kp. Kaum Kolot, Warung Menteng',
    jamOperasional: '08.00 - 17.00 WIB',
    harga: 'Infaq / Donasi Kebersihan',
    fasilitas: ['Saung Peziarah', 'Tempat Wudhu', 'Buku Tamu', 'Juru Kunci'],
    kontak: '0878-3344-5566 (Abah Juru Kunci)'
  },
  {
    id: 'akomodasi-6',
    nama: 'Punden Makam Keramat',
    deskripsi: 'Tempat sakral yang dijaga secara turun-temurun.',
    detailLengkap: 'Punden berundak dan susunan batu megalitik yang dipercaya sebagai tempat petilasan para tetua adat masa silam, menjadi simbol penghormatan kepada leluhur dan penjaga kelestarian mata air desa.',
    fotoUrl: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Bukit Pasir Luhur, Warung Menteng',
    jamOperasional: 'Dengan Izin Tetua Adat',
    harga: 'Infaq Kebersihan',
    fasilitas: ['Jalur Setapak Asri', 'Pondok Jaga', 'Area Doa'],
    kontak: '0856-7788-9900'
  },
  {
    id: 'akomodasi-7',
    nama: 'Rumah Adat Sunda',
    deskripsi: 'Keunikan arsitektur dan warisan budaya lokal.',
    detailLengkap: 'Rumah panggung kayu beratap ijuk rumbia dengan konstruksi pasak tanpa paku, memperlihatkan kearifan arsitektur tahan gempa khas tatar Pasundan yang tetap terawat rapi.',
    fotoUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Kp. Budaya Menteng, Warung Menteng',
    jamOperasional: '08.00 - 16.30 WIB',
    harga: 'Rp 5.000 / orang',
    fasilitas: ['Galeri Perkakas Kuno', 'Pemandu Adat', 'Bale Riung'],
    kontak: '0812-7766-5544'
  },
  {
    id: 'akomodasi-8',
    nama: 'Tradisi Ngaruwat Bumi',
    deskripsi: 'Ritual adat sebagai bentuk rasa syukur kepada alam.',
    detailLengkap: 'Upacara kebudayaan tahunan yang menyatukan seluruh elemen masyarakat dalam doa bersama, arak-arakan dongdang hasil bumi, serta pagelaran seni tradisional untuk menjaga harmoni manusia dengan alam semesta.',
    fotoUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Bale Pertemuan Desa Warung Menteng',
    jamOperasional: 'Agenda Tahunan (Bulan Muharram / Sura)',
    harga: 'Terbuka untuk Umum (Gratis)',
    fasilitas: ['Panggung Adat', 'Area Doa Bersama', 'Pameran Hasil Bumi'],
    kontak: '0813-8899-0011'
  },
  {
    id: 'akomodasi-9',
    nama: 'Sungai Cijeruk',
    deskripsi: 'Cocok untuk bermain air dan berinteraksi bersama keluarga.',
    detailLengkap: 'Aliran sungai berbatu kali dengan air jernih dan arus tenang yang ramah anak. Dikelilingi pepohonan teduh, cocok untuk piknik keluarga, susur sungai, dan tubing ringan.',
    fotoUrl: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Sempadan Sungai Cijeruk, Warung Menteng',
    jamOperasional: '07.00 - 17.00 WIB',
    harga: 'Rp 5.000 / orang',
    fasilitas: ['Sewa Ban Pelampung', 'Kamar Ganti', 'Warung Makanan', 'Area Piknik'],
    kontak: '0852-3344-5511'
  },
  {
    id: 'akomodasi-10',
    nama: 'Hutan Pinus Warung Menteng',
    deskripsi: 'Udara sejuk dengan pemandangan hutan yang asri.',
    detailLengkap: 'Kawasan hutan pinus rindang dengan semilir angin sejuk dan aroma getah pinus yang menenangkan. Dilengkapi hammock gantung, bangku kayu, dan spot foto alami yang estetik.',
    fotoUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Perbatasan Lereng Salak, Warung Menteng',
    jamOperasional: '07.00 - 17.30 WIB',
    harga: 'Rp 10.000 / orang',
    fasilitas: ['Sewa Hammock', 'Jalur Sepeda & Trekking', 'Warung Kopi', 'Toilet'],
    kontak: '0819-2233-4455'
  },
  {
    id: 'akomodasi-11',
    nama: 'Situs Batu Kuno',
    deskripsi: 'Menyimpan kisah sejarah masa lalu.',
    detailLengkap: 'Situs bebatuan prasasti dan menhir zaman megalitikum peninggalan era Kerajaan Pajajaran kuno yang tercatat dalam inventaris cagar budaya Kabupaten Bogor.',
    fotoUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Kp. Batu Tulis Kolot, Warung Menteng',
    jamOperasional: '08.00 - 16.00 WIB',
    harga: 'Donasi Sukarela',
    fasilitas: ['Papan Informasi Sejarah', 'Pemandu Sejarah', 'Area Parkir'],
    kontak: '0812-4455-9988'
  },
  {
    id: 'akomodasi-12',
    nama: 'Kampung Wisata Edukasi',
    deskripsi: 'Belajar budaya, pertanian, dan kehidupan desa.',
    detailLengkap: 'Program wisata edukatif bagi keluarga, pelajar, dan mahasiswa untuk merasakan langsung menanam padi, memerah susu sapi, memanen sayuran organik, dan membatik motif Menteng.',
    fotoUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Kp. Menteng Tengah RT 03/RW 02',
    jamOperasional: '08.30 - 16.00 WIB (Reservasi)',
    harga: 'Paket Edukasi mulai Rp 50.000 / anak',
    fasilitas: ['Workshop Kebun & Sawah', 'Instruktur Edukasi', 'Makan Siang Tradisional', 'Sertifikat'],
    kontak: '0813-1122-8877'
  },
  {
    id: 'akomodasi-13',
    nama: 'Puncak Warung Menteng',
    deskripsi: 'Spot favorit untuk menikmati sunrise dan sunset.',
    detailLengkap: 'Puncak tertinggi perbukitan desa yang menyuguhkan pandangan 360 derajat panorama Gunung Salak berbalut kabut pagi, serta kilauan senja jingga yang mempesona.',
    fotoUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Puncak Salak View, Warung Menteng',
    jamOperasional: '05.00 - 18.30 WIB',
    harga: 'Rp 10.000 / orang',
    fasilitas: ['Menara Pandang', 'Warung Kopi Pagi', 'Toilet', 'Parkir Motor'],
    kontak: '0857-9988-1122'
  },
  {
    id: 'akomodasi-14',
    nama: 'Situ Cibodas',
    deskripsi: 'Danau alami dengan pemandangan yang menenangkan.',
    detailLengkap: 'Danau resapan alami yang tenang dikelilingi pepohonan hijau dan jembatan kayu terapung. Tempat memancing yang nyaman dan cocok untuk melepas penat di akhir pekan.',
    fotoUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Dusun Situ, Warung Menteng',
    jamOperasional: '06.00 - 18.00 WIB',
    harga: 'Rp 10.000 (Mancing Rp 25.000)',
    fasilitas: ['Dermaga Kayu', 'Sewa Perahu Dayung', 'Spot Mancing', 'Kantin'],
    kontak: '0812-3344-9900'
  },
  {
    id: 'akomodasi-15',
    nama: 'Taman Desa',
    deskripsi: 'Ruang terbuka hijau yang cocok untuk keluarga.',
    detailLengkap: 'Taman publik terpadu ramah anak yang dipenuhi aneka tanaman bunga hias, jogging track, arena bermain anak, serta gazebo santai warga untuk berkumpul.',
    fotoUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Sebelah Kantor Desa Warung Menteng',
    jamOperasional: '06.00 - 20.00 WIB',
    harga: 'Gratis untuk Seluruh Warga',
    fasilitas: ['Playground Anak', 'Jogging Track', 'Wi-Fi Publik Gratis', 'Penerangan Malam'],
    kontak: 'Pemerintah Desa Warung Menteng'
  }
];

// 2. BUDAYA & ADAT (15 Cards, 5 Kolom Grid)
export const BUDAYA_ADAT_LIST: PotensiCardItem[] = [
  {
    id: 'budaya-1',
    nama: 'Tari Topeng Warung Menteng',
    deskripsi: 'Tari tradisional khas desa yang sarat makna dan menjadi warisan budaya oleh masyarakat.',
    detailLengkap: 'Tarian klasik khas Sunda lereng Salak yang dibawakan dengan topeng berkarakter kelana, pamindo, dan panji. Menggambarkan dinamika nafsu dan kesucian hati manusia.',
    fotoUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    waktuPelaksanaan: 'Festival Budaya, Peringatan HUT Desa, & Penyambutan Tamu',
    pelaku: 'Sanggar Seni Tari Menteng Kencana',
    kontak: '0812-7788-1122'
  },
  {
    id: 'budaya-2',
    nama: 'Upacara Adat Sedekah Bumi',
    deskripsi: 'Ritual syukuran atas hasil bumi yang dilaksanakan secara turun-temurun oleh masyarakat desa.',
    detailLengkap: 'Upacara sakral tahunan masyarakat agraris Warung Menteng untuk mengucap syukur kepada Sang Pencipta atas kelimpahan hasil panen padi dan sayur-mayur.',
    fotoUrl: 'https://images.unsplash.com/photo-1609137144822-4467d53ecb15?auto=format&fit=crop&w=800&q=80',
    waktuPelaksanaan: 'Setiap Awal Musim Tanam (Bulan Safar)',
    pelaku: 'Para Tetua Adat, Kelompok Tani, & Warga Desa',
    kontak: '0813-2233-4455'
  },
  {
    id: 'budaya-3',
    nama: 'Kesenian Angklung & Gamelan',
    deskripsi: 'Seni musik tradisional yang masih dilestarikan dan sering ditampilkan dalam acara adat maupun penyambutan tamu.',
    detailLengkap: 'Harmoni ritmis antara tabuhan gamelan salendro dan getaran bambu angklung gubrag yang telah diwariskan lintas generasi untuk mengiringi pesta rakyat.',
    fotoUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    waktuPelaksanaan: 'Latihan Rutin Tiap Malam Minggu & Acara Desa',
    pelaku: 'Paguyuban Angklung Puspa Salak',
    kontak: '0857-8899-0011'
  },
  {
    id: 'budaya-4',
    nama: 'Pencak Silat Tradisional',
    deskripsi: 'Kesenian bela diri warisan leluhur yang mengajarkan disiplin, keberanian, dan sopan santun.',
    detailLengkap: 'Aliran silat Cimande dan Cikalong yang mengedepankan keteguhan jurus pertahanan, kelenturan langkah, serta adab sopan santun dan persaudaraan.',
    fotoUrl: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80',
    waktuPelaksanaan: 'Latihan Setiap Rabu & Sabtu Sore',
    pelaku: 'Perguruan Silat Panca Tunggal Menteng',
    kontak: '0821-3344-5566'
  },
  {
    id: 'budaya-5',
    nama: 'Rumah Adat Sunda',
    deskripsi: 'Arsitektur khas Sunda yang menjadi simbol kearifan lokal dan identitas masyarakat desa.',
    detailLengkap: 'Bangunan panggung berstruktur kayu jengkol dan bambu gombong dengan atap jolopong dan suhunan badak heuay yang selaras dengan iklim lembap perbukitan.',
    fotoUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80',
    waktuPelaksanaan: 'Dilestarikan Sepanjang Masa',
    pelaku: 'Komunitas Pelestari Arsitektur Pasundan',
    kontak: '0812-4455-6677'
  },
  {
    id: 'budaya-6',
    nama: 'Pernikahan Adat Sunda',
    deskripsi: 'Prosesi sakral yang sarat makna, melambangkan persatuan dua keluarga dan awal kehidupan baru.',
    detailLengkap: 'Rangkaian prosesi adat perkawinan Sunda mulai dari siraman, ngeuyeuk seureuh, akad nikah, huap lingkung, hingga sawer panganten.',
    fotoUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    waktuPelaksanaan: 'Saat Hajatan Pernikahan Warga',
    pelaku: 'Pemandu Adat Sunda & Tokoh Agama',
    kontak: '0878-5566-7788'
  },
  {
    id: 'budaya-7',
    nama: 'Kerajinan Anyaman Bambu',
    deskripsi: 'Keterampilan masyarakat dalam mengolah bambu menjadi berbagai produk bernilai ekonomis dan estetis.',
    detailLengkap: 'Kemahiran tangan warga merangkai bilah bambu tali menjadi besek, bakul ceting, caping tani, dan dekorasi rumah bergaya etnik bernilai jual tinggi.',
    fotoUrl: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=800&q=80',
    waktuPelaksanaan: 'Aktivitas Harian Perajin Desa',
    pelaku: 'Kelompok Perajin Bambu Kreatif Menteng',
    kontak: '0813-8899-2211'
  },
  {
    id: 'budaya-8',
    nama: 'Tradisi Ngaruwat Bumi',
    deskripsi: 'Ritual adat sebagai bentuk rasa syukur kepada alam dan permohonan keselamatan bagi warga desa.',
    detailLengkap: 'Upacara pensucian desa dan doa bersama para sesepuh untuk memohon keselamatan, perlindungan dari bencana, dan keberkahan tanah kelahiran.',
    fotoUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80',
    waktuPelaksanaan: 'Setiap Bulan Sura (Tahun Baru Hijriah)',
    pelaku: 'Lembaga Adat Desa & Masyarakat Luas',
    kontak: '0812-9988-3344'
  },
  {
    id: 'budaya-9',
    nama: 'Seni Reog & Kuda Lumping',
    deskripsi: 'Kesenian tradisional yang penuh energi, menampilkan kekuatan, keberanian, dan nilai kebersamaan.',
    detailLengkap: 'Atraksi tarian berkuda anyaman bambu dengan iringan gamelan rancak, menonjolkan semangat juang ksatria dan kekompakan kelompok.',
    fotoUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    waktuPelaksanaan: 'Peringatan Hari Kemerdekaan & Pesta Rakyat',
    pelaku: 'Grup Kuda Kepang Turangga Menteng',
    kontak: '0852-7788-9900'
  },
  {
    id: 'budaya-10',
    nama: 'Festival Budaya Desa',
    deskripsi: 'Kegiatan tahunan yang menampilkan berbagai kesenian, adat, dan produk lokal masyarakat Warung Menteng.',
    detailLengkap: 'Karnaval budaya tahunan dengan parade kostum tradisional, panggung tari kolosal, bazar kuliner jadul, serta pameran pusaka dan artefak desa.',
    fotoUrl: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80',
    waktuPelaksanaan: 'Bulan Agustus (HUT Kemerdekaan RI)',
    pelaku: 'Panitia Bersama Karang Taruna & Perangkat Desa',
    kontak: '0812-3344-5566'
  },
  {
    id: 'budaya-11',
    nama: 'Tradisi Maulid Nabi',
    deskripsi: 'Perayaan hari kelahiran Nabi Muhammad SAW yang dirayakan dengan pengajian dan doa bersama warga.',
    detailLengkap: 'Peringatan Maulid Nabi dengan tradisi pembacaan Barzanji, pawai obor santri, dan kenduri tumpeng bersama seluruh jamaah masjid se-desa.',
    fotoUrl: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80',
    waktuPelaksanaan: '12 Rabiul Awwal Tiap Tahun',
    pelaku: 'DKM Masjid Jami & Majelis Taklim Desa',
    kontak: '0813-4455-6677'
  },
  {
    id: 'budaya-12',
    nama: 'Ritual Hajat Lembur',
    deskripsi: 'Upacara adat untuk memohon keselamatan dan keberkahan bagi seluruh warga desa.',
    detailLengkap: 'Tradisi berkumpulnya warga di persimpangan batas desa untuk melantunkan doa keselamatan bersama, diakhiri dengan santap bersama nasi liwet beralaskan daun pisang.',
    fotoUrl: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80',
    waktuPelaksanaan: 'Setiap Pergantian Musim Penghujan',
    pelaku: 'Tokoh Masyarakat & Warga Tiap RW',
    kontak: '0857-1122-8899'
  },
  {
    id: 'budaya-13',
    nama: 'Wayang Kulit',
    deskripsi: 'Seni pertunjukan tradisional yang mengandung nilai moral dan filosofi kehidupan.',
    detailLengkap: 'Pagelaran lakon wayang semalam suntuk yang dibawakan dalang terkemuka dengan pesan-pesan moral luhur kepemimpinan, kejujuran, dan kesetiaan.',
    fotoUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
    waktuPelaksanaan: 'Pentas Semalam Suntuk Acara Khusus',
    pelaku: 'Dalang Ki Suwondo & Paguyuban Karawitan',
    kontak: '0878-9988-1122'
  },
  {
    id: 'budaya-14',
    nama: 'Gotong Royong',
    deskripsi: 'Tradisi kebersamaan masyarakat dalam membantu satu sama lain, yang menjadi ciri khas kehidupan di desa.',
    detailLengkap: 'Nilai luhur saling tolong menolong tanpa pamrih (rereongan & sambatan) saat membangun sarana umum, membersihkan saluran irigasi, dan membantu hajatan tetangga.',
    fotoUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    waktuPelaksanaan: 'Setiap Minggu Pagi (Kerja Bakti)',
    pelaku: 'Seluruh Warga Rukun Tetangga (RT/RW)',
    kontak: '0812-8877-6655'
  },
  {
    id: 'budaya-15',
    nama: 'Tradisi Mipit Padi',
    deskripsi: 'Ungkapan rasa syukur atas hasil panen yang melimpah dan harapan akan musim yang lebih baik.',
    detailLengkap: 'Ritual pemetikan rumpun padi pertama menggunakan ani-ani (ketam) diiringi doa restu kepada Dewi Sri sebelum panen raya dimulai oleh para petani.',
    fotoUrl: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
    waktuPelaksanaan: 'Menjelang Panen Raya Musim Rendeng',
    pelaku: 'Gabungan Kelompok Tani (Gapoktan) Menteng',
    kontak: '0813-9988-2233'
  }
];

// 3. BUDIDAYA (15 Cards, 5 Kolom Grid)
export const BUDIDAYA_LIST: PotensiCardItem[] = [
  {
    id: 'budidaya-1',
    nama: 'Pertanian Padi',
    deskripsi: 'Budidaya padi menjadi salah satu komoditas utama di Desa Warung Menteng dengan hasil panen yang melimpah dan berkualitas.',
    detailLengkap: 'Penanaman varietas padi unggul Ciherang dan Inpari 32 dengan pasokan air pegunungan alami yang bebas polusi, menghasilkan beras pulen, wangi, dan bergizi tinggi.',
    fotoUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    komoditas: 'Padi Sawah Varietas Unggul',
    kapasitas: '180 Ton per Musim Panen',
    kelompok: 'Gapoktan Menteng Subur',
    kontak: '0812-7766-3322'
  },
  {
    id: 'budidaya-2',
    nama: 'Hortikultura',
    deskripsi: 'Hortikultura meliputi budidaya sayur-sayuran dan buah-buahan yang menjadi sumber pangan sehat dan bernilai ekonomi tinggi.',
    detailLengkap: 'Kebun sayuran kubis, tomat buah, cabai rawit, buncis kenya, dan buah salak pondoh segar yang dibudidayakan secara ramah lingkungan di lahan berterasering.',
    fotoUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    komoditas: 'Sayuran Daun & Buah-buahan Segar',
    kapasitas: '15 Ton per Bulan',
    kelompok: 'Poktan Harapan Baru',
    kontak: '0857-4433-2211'
  },
  {
    id: 'budidaya-3',
    nama: 'Perikanan Air Tawar',
    deskripsi: 'Budidaya ikan air tawar seperti nila, lele, dan patin menjadi salah satu kegiatan unggulan masyarakat Desa Warung Menteng.',
    detailLengkap: 'Sentra kolam air deras berarus konstan dari mata air lereng Gunung Salak, menjamin ikan aktif bergerak, rendah lemak jenuh, dan daging bebas bau tanah.',
    fotoUrl: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80',
    komoditas: 'Nila Merah, Lele Mutiara, & Patin',
    kapasitas: '25 Ton per Bulan',
    kelompok: 'POKDAKAN Tirta Menteng Mandiri',
    kontak: '0813-8877-6655'
  },
  {
    id: 'budidaya-4',
    nama: 'Peternakan Ayam',
    deskripsi: 'Peternakan ayam kampung dan ayam petelur menjadi salah satu sumber penghasilan masyarakat desa.',
    detailLengkap: 'Sistem kandang semi-intensif dan umbaran herbal alami yang menghasilkan telur kaya omega-3 serta karkas ayam kampung berkualitas tinggi dan sehat.',
    fotoUrl: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80',
    komoditas: 'Ayam Kampung Super & Ayam Petelur',
    kapasitas: '3.500 Ekor / 1.200 Butir Telur per Hari',
    kelompok: 'Kelompok Ternak Unggas Berkah',
    kontak: '0821-9988-4433'
  },
  {
    id: 'budidaya-5',
    nama: 'Peternakan Sapi',
    deskripsi: 'Budidaya sapi potong dan sapi perah berkembang pesat di Desa Warung Menteng untuk memenuhi kebutuhan pangan.',
    detailLengkap: 'Pemeliharaan sapi potong jenis limosin/simmental dan sapi perah Friesian Holstein dengan pakan rumput gajah segar dan konsentrat organik binaan dokter hewan dinas.',
    fotoUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    komoditas: 'Sapi Potong & Susu Murni Segar',
    kapasitas: '120 Ekor Sapi / 450 Liter Susu per Hari',
    kelompok: 'Koperasi Ternak Lembu Sejahtera',
    kontak: '0812-4455-7788'
  },
  {
    id: 'budidaya-6',
    nama: 'Peternakan Kambing',
    deskripsi: 'Kambing menjadi salah satu komoditas peternakan yang banyak dibudidayakan karena perawatannya relatif mudah.',
    detailLengkap: 'Penggemukan kambing etawa dan domba garut dalam kandang panggung higienis, melayani kebutuhan hewan kurban, aqiqah, dan produksi susu kambing segar.',
    fotoUrl: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80',
    komoditas: 'Kambing PE & Domba Garut',
    kapasitas: '250 Ekor Aktif',
    kelompok: 'Poknak Kambing Barokah',
    kontak: '0852-3322-1100'
  },
  {
    id: 'budidaya-7',
    nama: 'Budidaya Lele',
    deskripsi: 'Lele merupakan salah satu ikan yang paling diminati karena pertumbuhannya cepat dan memiliki nilai jual tinggi.',
    detailLengkap: 'Budidaya lele sistem bioflok modern ramah lingkungan dengan efisiensi pakan tinggi dan air minim pergantian, memasok kebutuhan warung pecel dan rumah makan.',
    fotoUrl: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80',
    komoditas: 'Lele Sangkuriang & Mutiara',
    kapasitas: '8 Ton per Siklus Panen',
    kelompok: 'POKDAKAN Mina Bioflok',
    kontak: '0878-1122-3344'
  },
  {
    id: 'budidaya-8',
    nama: 'Budidaya Nila',
    deskripsi: 'Budidaya nila di Desa Warung Menteng berkembang dengan baik dan menjadi solusi ketahanan pangan warga.',
    detailLengkap: 'Nila merah bibit unggul Wanayasa yang dibesarkan di kolam air mengalir, bertekstur daging padat dan gurih, menjadi pasokan utama restoran ikan bakar Bogor.',
    fotoUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    komoditas: 'Nila Merah Super',
    kapasitas: '12 Ton per Bulan',
    kelompok: 'POKDAKAN Tirta Jaya',
    kontak: '0813-5566-7788'
  },
  {
    id: 'budidaya-9',
    nama: 'Budidaya Patin',
    deskripsi: 'Ikan patin memiliki cita rasa yang lezat dan permintaan pasar yang stabil, sehingga menjadi pilihan budidaya yang menjanjikan.',
    detailLengkap: 'Pembesaran ikan patin siam di kolam tanah dalam dengan perlakuan air alami untuk fillet ikan bebas bau tanah yang siap diserap industri pengolahan makanan.',
    fotoUrl: 'https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=800&q=80',
    komoditas: 'Ikan Patin Siam Konsumsi',
    kapasitas: '6 Ton per Bulan',
    kelompok: 'Kelompok Mina Patin Lestari',
    kontak: '0812-8899-4455'
  },
  {
    id: 'budidaya-10',
    nama: 'Budidaya Hidroponik',
    deskripsi: 'Hidroponik menjadi alternatif modern untuk menghasilkan sayuran berkualitas dengan lahan yang terbatas.',
    detailLengkap: 'Greenhouse instalasi pipa NFT (Nutrient Film Technique) untuk sayuran selada romain, pakcoy, kale, dan kangkung tanpa pestisida kimia sintetis.',
    fotoUrl: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=800&q=80',
    komoditas: 'Selada Hijau, Pakcoy, & Sayuran Daun',
    kapasitas: '800 kg per Bulan',
    kelompok: 'Menteng Green Hydroponic',
    kontak: '0857-9988-3322'
  },
  {
    id: 'budidaya-11',
    nama: 'Budidaya Ikan Gurame',
    deskripsi: 'Ikan gurame memiliki nilai jual tinggi dan permintaan yang banyak dibudidayakan di desa.',
    detailLengkap: 'Budidaya gurame soang dengan pakan daun talas dan pelet bergizi tinggi, menghasilkan gurame berukuran 700g - 1kg dengan harga jual premium.',
    fotoUrl: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
    komoditas: 'Gurame Soang Jumbo',
    kapasitas: '4 Ton per Siklus Panen',
    kelompok: 'POKDAKAN Gurame Kencana',
    kontak: '0813-4433-2211'
  },
  {
    id: 'budidaya-12',
    nama: 'Peternakan Bebek',
    deskripsi: 'Bebek menjadi salah satu pilihan budidaya yang menguntungkan karena mudah dipelihara dan cepat berkembang biak.',
    detailLengkap: 'Peternakan bebek petelur dan pedaging jenis hibrida dengan akses kolam renang alami, menghasilkan telur bebek asin berminyak gurih dan karkas bebek tebal.',
    fotoUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80',
    komoditas: 'Telur Bebek Asin & Bebek Pedaging',
    kapasitas: '1.000 Butir Telur per Hari',
    kelompok: 'Kelompok Itik Barokah',
    kontak: '0821-7788-3344'
  },
  {
    id: 'budidaya-13',
    nama: 'Budidaya Udang',
    deskripsi: 'Budidaya udang air tawar mulai dikembangkan oleh masyarakat sebagai peluang usaha yang menjanjikan.',
    detailLengkap: 'Pengembangan udang galah air tawar kolam tanah dengan sirkulasi aerator bertenaga surya, menghasilkan udang berukuran besar berkulit tipis dan bercita rasa manis.',
    fotoUrl: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80',
    komoditas: 'Udang Galah Air Tawar',
    kapasitas: '1,5 Ton per Siklus',
    kelompok: 'Kelompok Mina Udang Makmur',
    kontak: '0852-1133-5577'
  },
  {
    id: 'budidaya-14',
    nama: 'Peternakan Lebah Madu',
    deskripsi: 'Lebah madu dibudidayakan untuk menghasilkan madu murni yang memiliki nilai gizi tinggi dan daya jual yang baik.',
    detailLengkap: 'Kotak stup lebah jenis Apis Cerana dan Trigona (klanceng) yang diletakkan di sekitar kebun kopi dan kaliandra, menghasilkan madu murni berenzim tinggi.',
    fotoUrl: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=800&q=80',
    komoditas: 'Madu Murni Nektar Bunga Kopi & Klanceng',
    kapasitas: '250 Liter per Bulan',
    kelompok: 'Peternak Lebah Hutan Salak',
    kontak: '0812-3344-9988'
  },
  {
    id: 'budidaya-15',
    nama: 'Kompos & Pupuk Organik',
    deskripsi: 'Pengelolaan limbah pertanian dan peternakan menjadi kompos organik untuk mendukung pertanian yang lebih ramah lingkungan.',
    detailLengkap: 'Unit fermentasi kotoran sapi, kambing, dan serasah daun bambu dengan bioaktivator EM4 menghasilkan pupuk kompos padat dan cair siap pakai yang menyuburkan lahan.',
    fotoUrl: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=80',
    komoditas: 'Kompos Organik Granul & Pupuk Kascing',
    kapasitas: '20 Ton per Bulan',
    kelompok: 'Unit BUMDes Daur Organik',
    kontak: '0813-8899-7711'
  }
];

// 4. UMKM (13 Usaha Warga Desa Warung Menteng)
export const UMKM_VISUAL_LIST: PotensiCardItem[] = [
  {
    id: 'mamy-popcorn',
    nama: 'Mamy Popcorn',
    deskripsi: 'Popcorn renyah aneka rasa karamel lumer, keju gurih, dan mentega spesial olahan rumahan.',
    detailLengkap: 'Mamy Popcorn memproduksi jagung brondong bermutu tinggi dengan letupan sempurna dan balutan bumbu merata. Menggunakan bahan non-GMO dan minyak kelapa bermutu, tersedia dalam aneka pilihan rasa favorit (Karamel Manis Gurih, Keju Cheddar, Cokelat, dan Butter Original) dengan kemasan pouch kedap udara yang higienis.',
    fotoUrl: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&w=800&q=80'
    ],
    kategori: 'Makanan Ringan & Camilan',
    lokasi: 'Kp. Pasir Tengah RT 02/03, Desa Warung Menteng',
    harga: 'Rp 10.000 - Rp 25.000 / pouch',
    jamOperasional: '08.00 - 20.00 WIB',
    kontak: '08992022422',
    nomorWA: '628992022422'
  },
  {
    id: 'keripik-singkong-ibu-iya',
    nama: 'Keripik Singkong Ibu Iya',
    deskripsi: 'Keripik singkong renyah gurih bumbu rempah bawang dan pedas manis khas Warung Menteng.',
    detailLengkap: 'Keripik singkong racikan Ibu Iya diolah dari singkong mentega pilihan hasil kebun petani lokal. Diiris tipis dengan ketebalan presisi dan digoreng kering renyah tanpa meninggalkan minyak berlebih. Diracik dengan bumbu rempah tradisional bawang putih ketumbar dan cabai asli tanpa pewarna buatan.',
    fotoUrl: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=800&q=80'
    ],
    kategori: 'Camilan Tradisional',
    lokasi: 'Kp. Babakan RT 01/02, Desa Warung Menteng',
    harga: 'Rp 12.000 - Rp 20.000 / bungkus',
    jamOperasional: '07.30 - 18.00 WIB',
    kontak: '085814244479',
    nomorWA: '6285814244479',
    mapsLink: 'https://maps.app.goo.gl/e4Li8JnREZwxU9LX9?g_st=aw'
  },
  {
    id: 'kripik-pisang-bu-oom',
    nama: 'Aneka Kripik Bu Oom',
    deskripsi: 'Keripik pisang kepok manis gurih renyah tanpa pengawet dengan cita rasa otentik.',
    detailLengkap: 'Kripik pisang olahan Bu Oom dibuat dari pisang kepok tua segar yang dipetik langsung dari kebun pekarangan warga. Diolah higienis dengan teknik perendaman garam alami dan penggorengan suhu teratur, menghasilkan keripik renyah garing yang tahan lama tanpa bahan pengawet.',
    fotoUrl: 'https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=800&q=80'
    ],
    kategori: 'Camilan Tradisional',
    lokasi: 'Kp. Menteng Tengah RT 03/01, Desa Warung Menteng',
    harga: 'Rp 15.000 / bungkus 250gr',
    jamOperasional: '08.00 - 17.00 WIB',
    kontak: '0895617703274',
    nomorWA: '62895617703274',
    mapsLink: 'https://maps.app.goo.gl/29AH3pNZvBQ2k9eB7'
  },
  {
    id: 'kripik-pisang-bu-nyai-mintarsih',
    nama: 'Kripik Pisang Bu Nyai Mintarsih',
    deskripsi: 'Kripik pisang tanduk tipis renyah tabur gula aren dan gurih asin kemasan oleh-oleh.',
    detailLengkap: 'Produk unggulan Bu Nyai Mintarsih mengutamakan kualitas pisang tanduk lereng Gunung Salak yang terkenal legit. Tersedia varian rasa manis karamel gula aren murni dan varian original asin gurih. Sangat cocok dijadikan buah tangan resmi khas Desa Warung Menteng.',
    fotoUrl: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80'
    ],
    kategori: 'Oleh-oleh Khas Desa',
    lokasi: 'Kp. Pasir Tengah RT 01/03, Desa Warung Menteng',
    harga: 'Rp 18.000 / bungkus',
    jamOperasional: '07.00 - 20.00 WIB',
    kontak: '0895328969653',
    nomorWA: '62895328969653'
  },
  {
    id: 'abel-layangan',
    nama: 'Abel Layangan',
    deskripsi: 'Pengrajin aneka layangan aduan presisi, layangan hias tradisional, dan benang gelasan.',
    detailLengkap: 'Abel Layangan adalah sentra perajin layangan terkemuka di Warung Menteng. Memproduksi layangan aduan turnamen berkerangka bambu tali pilihan yang ditimbang seimbang, layangan hias karakter anak, layang-layang bapangan khas Sunda, serta benang gelasan super tajam dan benang katun ramah anak.',
    fotoUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=800&q=80'
    ],
    kategori: 'Kerajinan & Mainan Tradisional',
    lokasi: 'Kp. Menteng Hulu RT 02/04, Desa Warung Menteng',
    harga: 'Rp 2.000 - Rp 35.000 / pcs',
    jamOperasional: '08.00 - 19.00 WIB',
    kontak: '085817390993',
    nomorWA: '6285817390993',
    mapsLink: 'https://maps.app.goo.gl/5AmRPwZkdKZWWqKr6?g_st=ac'
  },
  {
    id: 'tahu-bapak-mukti',
    nama: 'Tahu Bapak Mukti',
    deskripsi: 'Produksi tahu putih dan tahu kuning lembut segar alami tanpa bahan pengawet/kimia.',
    detailLengkap: 'Pabrik tahu rumahan Bapak Mukti memproduksi tahu segar setiap pagi menggunakan air pegunungan yang jernih dan kedelai kuning bermutu tinggi. Tahu memiliki tekstur lembut, gurih alami, dan kaya protein, digemari warung sayur, pedagang pasar, dan konsumen rumah tangga.',
    fotoUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
    ],
    kategori: 'Pangan & Olahan Kedelai',
    lokasi: 'Kp. Babakan RT 04/02, Desa Warung Menteng',
    harga: 'Rp 500 - Rp 1.000 / potong (Grosir/Ecer)',
    jamOperasional: '05.00 - 15.00 WIB',
    kontak: '085776080746',
    nomorWA: '6285776080746'
  },
  {
    id: 'benih-lele-pak-ujangko',
    nama: 'Benih Lele Pak Ujangko',
    deskripsi: 'Pembibitan benih lele sangkuriang & mutiara unggul, sehat, seragam, dan cepat besar.',
    detailLengkap: 'Peternakan pembenihan Pak Ujangko menyediakan bibit lele berbagai ukuran (ukuran 3-4, 5-7, hingga 7-9 cm) dengan indukan bersertifikat. Bibit lele terbukti adaptif terhadap kolam terpal maupun tanah, nafsu makan tinggi, dan tahan terhadap perubahan cuaca lereng pegunungan.',
    fotoUrl: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80'
    ],
    kategori: 'Perikanan & Pembenihan',
    lokasi: 'Kp. Menteng Girang RT 01/01, Desa Warung Menteng',
    harga: 'Rp 150 - Rp 350 / ekor benih',
    jamOperasional: '06.30 - 17.30 WIB',
    kontak: '085716601611',
    nomorWA: '6285716601611',
    mapsLink: 'https://maps.app.goo.gl/3uUeSExxeo2qTeTdA?g_st=aw'
  },
  {
    id: 'peternakan-ikan-nila-abdul-qodir',
    nama: 'Peternakan Ikan Nila Bapak Abdul Qodir',
    deskripsi: 'Budidaya kolam air deras ikan nila merah & hitam segar siap konsumsi dan indukan.',
    detailLengkap: 'Peternakan ikan nila Bapak Abdul Qodir memanfaatkan aliran sumber air pegunungan yang tidak pernah surut dan beroksigen tinggi. Daging ikan padat, tidak berbau tanah/lumpur, dan sangat segar untuk kebutuhan rumah makan, pemancingan, maupun konsumsi keluarga.',
    fotoUrl: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80'
    ],
    kategori: 'Perikanan Air Tawar',
    lokasi: 'Dusun II Pasir Tengah, Desa Warung Menteng',
    harga: 'Rp 32.000 - Rp 38.000 / kg',
    jamOperasional: '07.00 - 17.00 WIB',
    kontak: '085770586298',
    nomorWA: '6285770586298'
  },
  {
    id: 'ikan-cue-tongkol-anyaman-bambu-pak-ujang-bobo',
    nama: 'Ikan Cue Tongkol dan Anyaman Bambu Pak Ujang Bobo',
    deskripsi: 'Olahan ikan cue tongkol gurih segar berpadu kerajinan anyaman bambu tradisional (besek & kap).',
    detailLengkap: 'Usaha keluarga Pak Ujang Bobo menghadirkan dua produk unggulan sekaligus: olahan ikan cue tongkol higienis yang dikukus matang bumbu garam bersih, serta aneka produk anyaman bambu khas Sunda seperti besek wadah makanan, tampah, kukusan aseupan, dan kap lampu hias bambu.',
    fotoUrl: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
    ],
    kategori: 'Olahan Ikan & Kerajinan Bambu',
    lokasi: 'Kp. Pasir Tengah RT 03/03, Desa Warung Menteng',
    harga: 'Ikan Cue: Rp 15.000 / besek • Anyaman: Rp 10.000 - Rp 85.000',
    jamOperasional: '06.00 - 18.00 WIB',
    kontak: '08568857478',
    nomorWA: '628568857478',
    mapsLink: 'https://maps.app.goo.gl/tBjFFm6zbAduub2e6'
  },
  {
    id: 'manisan-pala-juandi',
    nama: 'Manisan Pala Juandi',
    deskripsi: 'Manisan pala basah dan kering khas Bogor, rasa asam manis pedas hangat menyegarkan.',
    detailLengkap: 'Manisan Buah Pala racikan Pak Juandi dibuat dari daging buah pala lereng Cijeruk berkualitas. Diproses higienis melalui perendaman air gula murni tanpa zat kimia buatan. Berkhasiat melancarkan pencernaan, meredakan masuk angin, dan menghangatkan tubuh.',
    fotoUrl: 'https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80'
    ],
    kategori: 'Oleh-oleh Khas Bogor',
    lokasi: 'Kp. Babakan RT 02/02, Desa Warung Menteng',
    harga: 'Rp 15.000 - Rp 30.000 / toples atau pouch',
    jamOperasional: '08.00 - 20.00 WIB',
    kontak: '085697137675',
    nomorWA: '6285697137675',
    mapsLink: 'https://maps.app.goo.gl/XLJUneEamQgpKnbf6'
  },
  {
    id: 'ikan-nila-iteung-farm',
    nama: 'Ikan Nila Bapak Iteung Fram',
    deskripsi: 'Ikan nila konsumsi segar air pegunungan, daging tebal manis bergizi dari Iteung Farm.',
    detailLengkap: 'Iteung Farm mengelola kolam budidaya pembesaran ikan nila dengan pakan berkualitas dan sirkulasi air alami lereng Salak. Ikan nila dipanen saat bobot ideal 3-4 ekor per kilogram. Menerima pesanan partai besar untuk restoran ikan bakar, katering hajatan, serta eceran warga.',
    fotoUrl: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=800&q=80'
    ],
    kategori: 'Budidaya Perikanan',
    lokasi: 'Kp. Pasir Tengah RT 04/03, Desa Warung Menteng',
    harga: 'Rp 34.000 / kg',
    jamOperasional: '07.00 - 17.30 WIB',
    kontak: '085770586298',
    nomorWA: '6285770586298'
  },
  {
    id: 'kerupuk-lembayung-warung-menteng',
    nama: 'Kerupuk Lembayung Warung Menteng',
    deskripsi: 'Kerupuk renyah tradisional gurih khas desa dengan tekstur mekar sempurna pendamping makan.',
    detailLengkap: 'Kerupuk Lembayung diproduksi dengan tepung tapioka pilihan dan sari rempah bawang terasi asli. Dikeringkan di bawah terik matahari pegunungan dan digoreng dengan minyak jernih, menciptakan sensasi renyah kriuk yang nikmat untuk teman makan nasi, bakso, soto, dan camilan harian.',
    fotoUrl: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&w=800&q=80'
    ],
    kategori: 'Kerupuk & Olahan Tradisional',
    lokasi: 'Kp. Menteng Girang RT 03/01, Desa Warung Menteng',
    harga: 'Rp 5.000 / bungkus isi 5 pcs • Rp 25.000 / bal kaleng',
    jamOperasional: '07.00 - 18.00 WIB',
    kontak: '0895385253202',
    nomorWA: '62895385253202',
    mapsLink: 'https://maps.app.goo.gl/Pny698eBsdWKW1ov5?g_st=ac'
  },
  {
    id: 'eli-toys',
    nama: 'Eli Toys',
    deskripsi: 'Penyedia aneka mainan anak edukatif, miniatur kreatif, dan permainan ramah anak.',
    detailLengkap: 'Eli Toys menghadirkan aneka ragam mainan edukasi anak, mulai dari puzzle kayu, mobil-mobilan edukatif, congklak tradisional, hingga boneka dan mainan kreatif lainnya. Harga sangat ramah di kantong dan menjadi toko mainan favorit keluarga dan anak-anak di Desa Warung Menteng.',
    fotoUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80'
    ],
    kategori: 'Mainan Edukasi & Hobi',
    lokasi: 'Jl. Raya Cijeruk Kp. Babakan RT 01/02, Desa Warung Menteng',
    harga: 'Rp 5.000 - Rp 75.000',
    jamOperasional: '08.30 - 20.30 WIB',
    kontak: '085714769758',
    nomorWA: '6285714769758',
    mapsLink: 'https://maps.app.goo.gl/zRHckTbtmAqgeoQE6?g_st=ac'
  }
];
