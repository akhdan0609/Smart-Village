// Data spesifik untuk tampilan visual Akomodasi, Budaya & Adat, Budidaya, dan UMKM
// Sesuai dengan desain tata letak kartu dan hero banner pada referensi gambar resmi

export interface PotensiCardItem {
  id: string;
  nama: string;
  deskripsi: string;
  detailLengkap?: string;
  fotoUrl?: string;
  galeriFoto?: string[];
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

// 4. UMKM (13 Produsen Lokal - Daftar Resmi)
export const UMKM_VISUAL_LIST: PotensiCardItem[] = [
  {
    id: 'umkm-1',
    nama: 'Mamy Popcorn',
    deskripsi: 'Aneka popcorn renyah dengan pilihan rasa manis dan gurih.',
    detailLengkap: 'Popcorn jagung pilihan diolah dengan mesin khusus sehingga setiap butirnya renyah megar dan tidak keras. Tersedia varian rasa manis karamel, gurih mentega, dan pedas balado. Dikemas higienis sehingga aman untuk teman santai keluarga maupun oleh-oleh khas desa.',
    fotoUrl: 'https://images.unsplash.com/photo-1579211549520-cc02a2fec8cc?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1518263424-060b8f95101b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566969023665-e90b7a426d79?auto=format&fit=crop&w=800&q=80'
    ],
    kontak: '08992022422'
  },
  {
    id: 'umkm-2',
    nama: 'Keripik Singkong Ibu Iya',
    deskripsi: 'Keripik singkong renyah khas buatan rumahan.',
    detailLengkap: 'Singkong mentega pilihan dipotong tipis lalu digoreng dengan minyak segar hingga renyah gurih. Dibumbui racikan bawang putih, ketumbar, dan garam tradisional tanpa MSG berlebih, menghasilkan keripik yang garing di luar dan tidak keras di gigi.',
    fotoUrl: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1626369310886-921a247a36c3?auto=format&fit=crop&w=800&q=80'
    ],
    kontak: '085814244479'
  },
  {
    id: 'umkm-3',
    nama: 'Kripik Pisang Bu Oom',
    deskripsi: 'Kripik pisang renyah dari pisang lokal pilihan.',
    detailLengkap: 'Kripik dari pisang kepok lokal yang diiris tipis tipis-saer berkelanjutan, digoreng sampai renyah keemasan. Tersedia rasa original, manis gula aren, cokelat, dan keju. Produk dijamin menggunakan pisang matang pohon tanpa pengawet.',
    fotoUrl: 'https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80'
    ],
    kontak: '0895617703274'
  },
  {
    id: 'umkm-4',
    nama: 'Kripik Pisang Bu Nyai Mintarsih',
    deskripsi: 'Kripik pisang gurih dengan cita rasa khas desa.',
    detailLengkap: 'Kripik pisang buatan tangan dengan resep keluarga turun-temurun. Pisang diiris tipis kemudian digoreng dengan api kecil agar teksturnya renyah dan tidak menyerap banyak minyak. Wajib dicoba varian balado pedas yang nikmat untuk cemilan sore.',
    fotoUrl: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518263424-060b8f95101b?auto=format&fit=crop&w=800&q=80'
    ],
    kontak: '0895328969653'
  },
  {
    id: 'umkm-5',
    nama: 'Abel Layangan',
    deskripsi: 'Layangan dan mainan tradisional karya warga desa.',
    detailLengkap: 'Layangan hias dan layangan gliding buatan tangan warga desa dengan rangka bambu kuat dan kertas aluminium warna-warni. Tersedia berbagai ukuran dari layangan kenangan mini hingga layangan aduan besar. Cocok untuk bermain di musim angin maupun dekorasi kampung.',
    fotoUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1607748851687-ba9d31ee3ae0?auto=format&fit=crop&w=800&q=80'
    ],
    kontak: '085817390993'
  },
  {
    id: 'umkm-6',
    nama: 'Tahu Bapak Mukti',
    deskripsi: 'Tahu putih dan tahu goreng segar produksi rumahan.',
    detailLengkap: 'Tahu putih dan tahu kuning produksi rumahan menggunakan kedelai pilihan tanpa pengawet. Diproses pagi hari sehingga selalu segar saat sampai ke tangan konsumen. Tekstur padat, halus, dan cocok untuk digoreng, ditumis, maupun dibuat tahu gejrot khas Sunda.',
    fotoUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541059609227-0bdbd75a5d55?auto=format&fit=crop&w=800&q=80'
    ],
    kontak: '085776080746'
  },
  {
    id: 'umkm-7',
    nama: 'Benih Lele Pak Ujangko',
    deskripsi: 'Benih/bibit lele berkualitas siap tebar.',
    detailLengkap: 'Bibit lele sangkuriang dan lele dumbo berkualitas yang siap ditebar untuk budidaya kolam rumah. Dipelihara dengan pakan bergizi sehingga pertumbuhan cepat dan tingkat hidup tinggi. Tersedia ukuran ukuran 3-4 cm hingga 5-7 cm dengan jumlah sesuai pesanan.',
    fotoUrl: 'https://images.unsplash.com/photo-1533794298457-aa3aadd6de19?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1498654200942-2b5241467bb6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800&q=80'
    ],
    kontak: '085716601611'
  },
  {
    id: 'umkm-8',
    nama: 'Peternakan Ikan Nila Bapak Abdul Qodir',
    deskripsi: 'Ikan nila segar dari kolam air deras peternakan desa.',
    detailLengkap: 'Ikan nila segar hasil panen kolam air deras (KAD) dengan kualitas jumbo dan daging tebal. Ikan ditangkap langsung setelah pesanan masuk sehingga kesegarannya terjaga. Tersedia dalam bentuk segar utuh maupun fillet, siap dikirim ke rumah.',
    fotoUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1498654200942-2b5241467bb6?auto=format&fit=crop&w=800&q=80'
    ],
    kontak: '085770586298'
  },
  {
    id: 'umkm-9',
    nama: 'Ikan Cue Tongkol & Anyaman Bambu Pak Ujang Bobo',
    deskripsi: 'Ikan cue tongkol dan kerajinan anyaman bambu buatan tangan.',
    detailLengkap: 'Ikan cue tongkol olahan tradisional bergizi tinggi sebagai lauk tahan lama, diproduksi dari ikan tongkol segar pilihan dengan bumbu rempah asli. Selain itu tersedia kerajinan anyaman bambu seperti besek, bakul nasi, dan tas etnik karya tangan yang rapi dan kokoh.',
    fotoUrl: 'https://images.unsplash.com/photo-1597397655642-0f8da100cb78?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=800&q=80'
    ],
    kontak: '08568857478'
  },
  {
    id: 'umkm-10',
    nama: 'Manisan Pala Juandi',
    deskripsi: 'Manisan pala manis segar olahan buah khas desa.',
    detailLengkap: 'Manisan pala basah dan kering dari buah pala kebun sendiri yang diolah higienis. Manisan pala basah segar dengan cita rasa manis asam yang menyegarkan, sedangkan pala kering cocok sebagai camilan tahan lama. Kemasan botol praktis untuk oleh-oleh.',
    fotoUrl: 'https://images.unsplash.com/photo-1541647376583-8934aaf0798a?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&w=800&q=80'
    ],
    kontak: '085697137675'
  },
  {
    id: 'umkm-11',
    nama: 'Ikan Nila Bapak Iteung Fram',
    deskripsi: 'Ikan nila segar hasil budidaya kolam warga.',
    detailLengkap: 'Ikan nila segar hasil budidaya kolam tanah milik warga dengan pakan alami dan pelet berkualitas. Ikan dipanen ketika sudah mencapai ukuran konsumsi dengan daging putih bersih dan tidak berbau lumpur. Pesanan segar langsung dipotong atau utuh tanpa dikirim beku.',
    fotoUrl: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800&q=80'
    ],
    kontak: '085770586298'
  },
  {
    id: 'umkm-12',
    nama: 'Kerupuk Lembayung Warung Menteng',
    deskripsi: 'Kerupuk lembayung renyah berwarna alami.',
    detailLengkap: 'Kerupuk lembayung dibuat dari campuran tepung tapioka dan daun lembayung/daun kacang panjang sehingga memiliki warna hijau alami yang cantik. Digoreng hingga renyah megar dan gurih. Tanpa pewarna sintetis, aman untuk seluruh keluarga.',
    fotoUrl: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1626369310886-921a247a36c3?auto=format&fit=crop&w=800&q=80'
    ],
    kontak: '0895385253202'
  },
  {
    id: 'umkm-13',
    nama: 'Eli Toys',
    deskripsi: 'Mainan dan perlengkapan anak produksi warga desa.',
    detailLengkap: 'Toko mainan dan perlengkapan anak milik warga desa yang menyediakan mainan edukatif, aksesoris, serta kebutuhan sekolah anak. Koleksi selalu diperbarui dengan harga terjangkau dan pelayanan ramah dari tetangga sendiri.',
    fotoUrl: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80',
    galeriFoto: [
      'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1572204297792-ae989ce8df60?auto=format&fit=crop&w=800&q=80'
    ],
    kontak: '085714769758'
  }
];
