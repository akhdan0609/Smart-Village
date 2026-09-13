import React, { useState } from 'react';
import { 
  Compass, 
  Store, 
  Landmark, 
  Fish, 
  ArrowRight, 
  X, 
  MapPin, 
  Phone, 
  ExternalLink, 
  Star,
  Info,
  ChevronRight
} from 'lucide-react';
import { PageRoute } from '../../types';
import potensiHeroBanner from '../../assets/images/potensi_hero_banner_1788325154234.jpg';

interface PotensiDesaViewProps {
  onNavigate?: (page: PageRoute, params?: any) => void;
}

interface ItemCardData {
  id: string;
  nama: string;
  kategori: 'destinasi' | 'umkm' | 'budaya' | 'budidaya';
  deskripsi: string;
  fotoUrl: string;
  lokasi?: string;
  kontak?: string;
  harga?: string;
  rating?: number;
}

export const PotensiDesaView: React.FC<PotensiDesaViewProps> = ({ onNavigate }) => {
  const [selectedItem, setSelectedItem] = useState<ItemCardData | null>(null);

  const handleNav = (page: PageRoute, params?: any) => {
    if (onNavigate) {
      onNavigate(page, params);
    }
  };

  // 1. DATA DESTINASI (6 items)
  const destinasiList: ItemCardData[] = [
    {
      id: 'dest-1',
      nama: 'Warso Farm',
      kategori: 'destinasi',
      deskripsi: 'Pusat agrowisata perkebunan durian dan buah naga legendaris di kaki Gunung Salak dengan suasana asri, saung santai, dan edukasi budidaya holtikultura.',
      fotoUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Jl. KH. Halimi, Cijeruk, Warung Menteng',
      kontak: '0812-8877-6655',
      rating: 4.8
    },
    {
      id: 'dest-2',
      nama: 'Bukit Alesano',
      kategori: 'destinasi',
      deskripsi: 'Destinasi camping ground populer dengan pemandangan 360 derajat kota Bogor dan gemerlap city light di malam hari serta sunrise menawan.',
      fotoUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Puncak Bukit Dusun II, Warung Menteng',
      kontak: '0857-1122-3344',
      rating: 4.9
    },
    {
      id: 'dest-3',
      nama: 'Tugu Maseng',
      kategori: 'destinasi',
      deskripsi: 'Ikon gerbang bersejarah perbatasan wilayah Cijeruk dan stasiun Maseng dengan panorama perbukitan hijau dan kuliner lokal khas jalan raya.',
      fotoUrl: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Simpang Maseng - Warung Menteng',
      kontak: 'Kantor Pengelola Desa',
      rating: 4.7
    },
    {
      id: 'dest-4',
      nama: 'Happy Land Cibalung',
      kategori: 'destinasi',
      deskripsi: 'Taman rekreasi keluarga terpadu dengan wahana outbound, kolam renang waterpark, agrowisata petik sayur buah, dan arena berkemah.',
      fotoUrl: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Kawasan Agrowisata Cibalung, Cijeruk',
      kontak: '0813-9988-7766',
      rating: 4.8
    },
    {
      id: 'dest-5',
      nama: 'Lembah Salak Camp',
      kategori: 'destinasi',
      deskripsi: 'Bumi perkemahan asri di tepi sungai jernih pegunungan dengan udara sejuk alami dan area glamping ramah keluarga.',
      fotoUrl: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Lereng Salak Dusun III, Warung Menteng',
      kontak: '0878-3344-5566',
      rating: 4.9
    },
    {
      id: 'dest-6',
      nama: 'Bukit Panorama',
      kategori: 'destinasi',
      deskripsi: 'Spot foto lanskap perbukitan terasering hijau dan kebun kopi dengan gazebo santai untuk menikmati kopi khas lereng Salak.',
      fotoUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Dusun I Menteng Girang, Warung Menteng',
      kontak: '0812-9900-1122',
      rating: 4.8
    }
  ];

  // 2. DATA UMKM (12 items)
  const umkmList: ItemCardData[] = [
    {
      id: 'umkm-1',
      nama: 'Kebun Durian Unggul',
      kategori: 'umkm',
      deskripsi: 'Hasil panen buah durian montong, matahari, dan durian lokal unggul berdaging tebal manis legit langsung dari pohon petani desa.',
      fotoUrl: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Kelompok Tani Durian Dusun II',
      harga: 'Rp 65.000 / kg',
      kontak: '0812-8899-0011'
    },
    {
      id: 'umkm-2',
      nama: 'Sayuran Organik',
      kategori: 'umkm',
      deskripsi: 'Sayuran hijau segar bebas pestisida sintetis: pokcoy, selada, brokoli, dan sawi manis yang ditanam dengan air pegunungan alami.',
      fotoUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Kelompok Wanita Tani (KWT) Dusun I',
      harga: 'Rp 10.000 - Rp 25.000 / pack',
      kontak: '0857-1122-3399'
    },
    {
      id: 'umkm-3',
      nama: 'Kopi Arabika & Gula Aren',
      kategori: 'umkm',
      deskripsi: 'Perpaduan biji kopi arabika lereng Gunung Salak dengan gula aren murni cetak alami, menciptakan cita rasa khas manis aromatik.',
      fotoUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Kedai & Roastery Cimenteng Mandiri',
      harga: 'Rp 45.000 / paket',
      kontak: '0813-4455-6677'
    },
    {
      id: 'umkm-4',
      nama: 'Madu Hutan Gunung Salak',
      kategori: 'umkm',
      deskripsi: 'Madu mentah (raw honey) murni dari sarang lebah hutan lindung Gunung Salak tanpa tambahan pemanis atau bahan pengawet.',
      fotoUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Penderes Madu Alami Pak Ujang',
      harga: 'Rp 85.000 / botol 350ml',
      kontak: '0878-1234-5678'
    },
    {
      id: 'umkm-5',
      nama: 'Kerajinan Anyaman Bambu',
      kategori: 'umkm',
      deskripsi: 'Kerajinan tangan besek ramah lingkungan, bakul nasi, tas jinjing etnik, serta kap lampu dekoratif dari bambu tali pilihan.',
      fotoUrl: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Sanggar Anyam Sauyunan Mang Atang',
      harga: 'Rp 15.000 - Rp 150.000',
      kontak: '0812-9988-7700'
    },
    {
      id: 'umkm-6',
      nama: 'Kopi Arabika Cijeruk',
      kategori: 'umkm',
      deskripsi: 'Biji kopi arabika petik merah single origin Cijeruk yang diproses secara honey & full washed dengan karakter rasa fruity seimbang.',
      fotoUrl: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Kelompok Petani Kopi Dusun III',
      harga: 'Rp 50.000 / 200gr',
      kontak: '0856-7788-9911'
    },
    {
      id: 'umkm-7',
      nama: 'Keripik Singkong Pedas',
      kategori: 'umkm',
      deskripsi: 'Keripik singkong renyah gurih dibalut bumbu balado pedas manis racikan rempah khas rumahan tanpa MSG berlebih.',
      fotoUrl: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80',
      lokasi: 'UMKM Berkah Ibu Eni',
      harga: 'Rp 15.000 / bungkus',
      kontak: '0813-2233-4455'
    },
    {
      id: 'umkm-8',
      nama: 'Tanaman Hias & Bibit Buah',
      kategori: 'umkm',
      deskripsi: 'Pusat pembibitan bibit durian, alpukat mentega, salak madu, serta ragam tanaman hias tropis siap tanam.',
      fotoUrl: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Nursery Tani Salak Makmur Pak Wawan',
      harga: 'Rp 25.000 - Rp 200.000',
      kontak: '0858-9900-1122'
    },
    {
      id: 'umkm-9',
      nama: 'Gula Aren Murni',
      kategori: 'umkm',
      deskripsi: 'Gula aren cetak tradisional yang dideres langsung dari pohon enau lereng Salak, diproses bersih alami beraroma harum legit.',
      fotoUrl: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Penderes Enau Dusun II',
      harga: 'Rp 30.000 / gandu (2 batok)',
      kontak: '0812-3344-5566'
    },
    {
      id: 'umkm-10',
      nama: 'Nasi Liwet Sunda',
      kategori: 'umkm',
      deskripsi: 'Sajian nasi liwet kastrol komplit bertabur teri medan, daun kemangi, lalapan kebun, sambal terasi dadak, dan ayam kampung goreng.',
      fotoUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Dapur Liwet Saung Lembur Dusun I',
      harga: 'Rp 35.000 / porsi komplit',
      kontak: '0813-1144-7788'
    },
    {
      id: 'umkm-11',
      nama: 'Sate Maranggi',
      kategori: 'umkm',
      deskripsi: 'Sate daging sapi empuk berbumbu rempah ketumbar manis gurih khas Sunda disajikan dengan sambal tomat pedas segar.',
      fotoUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Warung Sate Maseng Jaya',
      harga: 'Rp 35.000 / 10 tusuk',
      kontak: '0877-8899-0022'
    },
    {
      id: 'umkm-12',
      nama: 'Durian Lokal',
      kategori: 'umkm',
      deskripsi: 'Durian lokal khas pohon tua lereng Salak dengan daging kuning legit berlemak, aroma harum tajam, dan rasa manis pahit seimbang.',
      fotoUrl: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Lapak Buah Segar Warung Menteng',
      harga: 'Rp 50.000 - Rp 100.000 / butir',
      kontak: '0812-7788-9900'
    }
  ];

  // 3. DATA BUDAYA DAN ADAT (4 items)
  const budayaList: ItemCardData[] = [
    {
      id: 'budaya-1',
      nama: 'Hajat Lembur',
      kategori: 'budaya',
      deskripsi: 'Upacara adat syukuran tahunan warga desa sebagai ungkapan terima kasih atas panen bumi yang melimpah dan permohonan keselamatan bersama.',
      fotoUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Balai Warga & Lapangan Desa Dusun I',
      kontak: 'Tokoh Adat & Kasepuhan Desa'
    },
    {
      id: 'budaya-2',
      nama: 'Wayang Golek',
      kategori: 'budaya',
      deskripsi: 'Seni pertunjukan wayang kayu tradisional Sunda yang sarat petuah moral, kritik sosial jenaka melalui tokoh Si Cepot, dan iringan gamelan salendro.',
      fotoUrl: 'https://images.unsplash.com/photo-1569974498991-d3c12a524f6f?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Sanggar Seni Golek Purbasari',
      kontak: 'Ki Dalang Asep Sukardi'
    },
    {
      id: 'budaya-3',
      nama: 'Gotong Royong dan Ngariung',
      kategori: 'budaya',
      deskripsi: 'Tradisi luhur kebersamaan warga dalam membersihkan saluran irigasi sawah, bedah rumah, serta makan bersama beralaskan daun pisang.',
      fotoUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Setiap Dusun (RT/RW) se-Desa',
      kontak: 'Ketua RT / RW Setempat'
    },
    {
      id: 'budaya-4',
      nama: 'Jaipong dan Tari Sunda',
      kategori: 'budaya',
      deskripsi: 'Seni tari kreasi tradisional dengan gerakan dinamis, lincah, dan penuh ekspresi estetis yang dipentaskan pada hari besar dan penyambutan tamu kehormatan.',
      fotoUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Sanggar Tari Mayang Kencana Dusun II',
      kontak: 'Ibu Nenden (0812-4455-6677)'
    }
  ];

  // 4. DATA BUDIDAYA (4 items)
  const budidayaList: ItemCardData[] = [
    {
      id: 'budi-1',
      nama: 'Perikanan',
      kategori: 'budidaya',
      deskripsi: 'Sentra budidaya kolam air deras mengalir alami dari mata air Gunung Salak, menghasilkan ikan nila merah, ikan mas, dan lele berkualitas tinggi.',
      fotoUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Kawasan Kolam Air Deras Dusun III Cimenteng',
      kontak: 'Kelompok Pembudidaya Ikan Mina Lestari'
    },
    {
      id: 'budi-2',
      nama: 'Peternakan Ayam',
      kategori: 'budidaya',
      deskripsi: 'Peternakan ayam kampung unggul, petelur organik, dan broiler mandiri yang dikelola secara higienis ramah lingkungan dengan pakan fermentasi alami.',
      fotoUrl: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Area Peternakan Mandiri Dusun II',
      kontak: 'Kelompok Peternak Unggas Berkah'
    },
    {
      id: 'budi-3',
      nama: 'Peternakan Kambing',
      kategori: 'budidaya',
      deskripsi: 'Budidaya kambing peranakan etawa (PE) penghasil susu kambing segar serta domba garut pedaging dengan manajemen kandang panggung modern.',
      fotoUrl: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Sentra Ternak Ruminansia Dusun I',
      kontak: 'Koperasi Ternak Sauyunan'
    },
    {
      id: 'budi-4',
      nama: 'Peternakan Sapi',
      kategori: 'budidaya',
      deskripsi: 'Peternakan sapi perah perah berkualitas tinggi dan program penggemukan sapi potong (feedlot) untuk suplai daging segar Jabodetabek.',
      fotoUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=600&q=80',
      lokasi: 'Kawasan Padang Penggembalaan Lembah Dusun III',
      kontak: 'BUMDes Mitra Ternak Salak'
    }
  ];

  return (
    <div className="bg-[#f8faf9] min-h-screen pb-16">
      
      {/* 1. TOP HERO BANNER (Montage Landscape with Farmer, Cows, Village Gate, Coffee, Bamboo, Dancers) */}
      <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden bg-slate-900 select-none">
        <img
          src={potensiHeroBanner}
          alt="Panorama Potensi Desa Warung Menteng"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft vignette overlay for readable text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-xl space-y-2.5 text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-md">
                Potensi Desa
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-slate-100 font-normal leading-relaxed drop-shadow-sm max-w-lg">
                Desa Warung Menteng memiliki kekayaan alam, budaya, serta sumber daya lokal yang melimpah dan terus berkembang untuk kesejahteraan masyarakat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. BREADCRUMBS & SECTION SUBTITLE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 pb-3">
        <div className="space-y-0.5">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <button 
              onClick={() => handleNav('beranda')}
              className="hover:text-[#0f4d38] transition cursor-pointer"
            >
              Beranda
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#0f4d38] font-bold">Potensi Desa</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            Potensi alam dan ekonomi yang menjadi kekuatan desa
          </p>
        </div>
      </div>

      {/* 3. FOUR MAIN POTENSI SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6 pt-3">
        
        {/* ======================================================== */}
        {/* SECTION 1: AKOMODASI */}
        {/* ======================================================== */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 sm:p-6 transition hover:border-slate-300">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 items-start">
            
            {/* Left Box */}
            <div className="w-full lg:w-48 xl:w-52 shrink-0 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                {/* Green Hexagon Icon */}
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-300/80 flex items-center justify-center text-[#0f4d38] shadow-xs">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-extrabold text-[#0f4d38] tracking-wide uppercase">
                    AKOMODASI
                  </h2>
                  <p className="text-xs text-slate-500 leading-snug pt-1">
                    Akomodasi dan wisata alam yang menarik dan menawan.
                  </p>
                </div>
              </div>

              <div>
                <button
                  onClick={() => handleNav('potensi-akomodasi')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:text-[#0f4d38] hover:border-[#0f4d38] hover:bg-emerald-50/50 transition cursor-pointer"
                >
                  <span>Lihat Semua</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Cards (6 items) */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {destinasiList.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group cursor-pointer flex flex-col"
                >
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-xs relative">
                    <img
                      src={item.fotoUrl}
                      alt={item.nama}
                      className="w-full h-full object-cover group-hover:scale-108 transition duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 text-center mt-2 group-hover:text-[#0f4d38] transition line-clamp-1">
                    {item.nama}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* SECTION 2: UMKM */}
        {/* ======================================================== */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 sm:p-6 transition hover:border-slate-300">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 items-start">
            
            {/* Left Box */}
            <div className="w-full lg:w-48 xl:w-52 shrink-0 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                {/* Green Hexagon Icon */}
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-300/80 flex items-center justify-center text-[#0f4d38] shadow-xs">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-extrabold text-[#0f4d38] tracking-wide uppercase">
                    UMKM
                  </h2>
                  <p className="text-xs text-slate-500 leading-snug pt-1">
                    Produk unggulan masyarakat yang berkualitas dan berdaya saing.
                  </p>
                </div>
              </div>

              <div>
                <button
                  onClick={() => handleNav('potensi-umkm')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:text-[#0f4d38] hover:border-[#0f4d38] hover:bg-emerald-50/50 transition cursor-pointer"
                >
                  <span>Lihat Semua</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Cards (12 items in 6-column x 2-row grid) */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {umkmList.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group cursor-pointer flex flex-col"
                >
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-xs relative">
                    <img
                      src={item.fotoUrl}
                      alt={item.nama}
                      className="w-full h-full object-cover group-hover:scale-108 transition duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 text-center mt-2 group-hover:text-[#0f4d38] transition line-clamp-1">
                    {item.nama}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* SECTION 3: BUDAYA DAN ADAT */}
        {/* ======================================================== */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 sm:p-6 transition hover:border-slate-300">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 items-start">
            
            {/* Left Box */}
            <div className="w-full lg:w-48 xl:w-52 shrink-0 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                {/* Green Hexagon Icon */}
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-300/80 flex items-center justify-center text-[#0f4d38] shadow-xs">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-extrabold text-[#0f4d38] tracking-wide uppercase">
                    BUDAYA DAN ADAT
                  </h2>
                  <p className="text-xs text-slate-500 leading-snug pt-1">
                    Budaya dan tradisi luhur yang terus dilestarikan.
                  </p>
                </div>
              </div>

              <div>
                <button
                  onClick={() => handleNav('potensi-budaya')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:text-[#0f4d38] hover:border-[#0f4d38] hover:bg-emerald-50/50 transition cursor-pointer"
                >
                  <span>Lihat Semua</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Cards (4 items in 4 columns) */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {budayaList.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group cursor-pointer flex flex-col"
                >
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-xs relative">
                    <img
                      src={item.fotoUrl}
                      alt={item.nama}
                      className="w-full h-full object-cover group-hover:scale-108 transition duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 text-center mt-2 group-hover:text-[#0f4d38] transition line-clamp-1">
                    {item.nama}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* SECTION 4: BUDIDAYA */}
        {/* ======================================================== */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-5 sm:p-6 transition hover:border-slate-300">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 items-start">
            
            {/* Left Box */}
            <div className="w-full lg:w-48 xl:w-52 shrink-0 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                {/* Green Hexagon Icon */}
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-300/80 flex items-center justify-center text-[#0f4d38] shadow-xs">
                  <Fish className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-extrabold text-[#0f4d38] tracking-wide uppercase">
                    BUDIDAYA
                  </h2>
                  <p className="text-xs text-slate-500 leading-snug pt-1">
                    Kegiatan budidaya yang menjadi sumber penghidupan warga.
                  </p>
                </div>
              </div>

              <div>
                <button
                  onClick={() => handleNav('potensi-perikanan')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:text-[#0f4d38] hover:border-[#0f4d38] hover:bg-emerald-50/50 transition cursor-pointer"
                >
                  <span>Lihat Semua</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Cards (4 items in 4 columns) */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {budidayaList.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group cursor-pointer flex flex-col"
                >
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-xs relative">
                    <img
                      src={item.fotoUrl}
                      alt={item.nama}
                      className="w-full h-full object-cover group-hover:scale-108 transition duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 text-center mt-2 group-hover:text-[#0f4d38] transition line-clamp-1">
                    {item.nama}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* 4. DETAIL MODAL ON CARD CLICK */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 space-y-4 shadow-2xl relative animate-in fade-in zoom-in duration-150">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="h-52 sm:h-60 rounded-2xl overflow-hidden bg-slate-100 relative">
              <img
                src={selectedItem.fotoUrl}
                alt={selectedItem.nama}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-[#0f4d38] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                {selectedItem.kategori === 'destinasi' ? 'Akomodasi' : selectedItem.kategori}
              </span>
              {selectedItem.rating && (
                <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-slate-900 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  {selectedItem.rating} / 5.0
                </span>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 leading-snug">
                {selectedItem.nama}
              </h3>

              {selectedItem.lokasi && (
                <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>{selectedItem.lokasi}</span>
                </div>
              )}

              {selectedItem.harga && (
                <div className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg inline-block">
                  Harga: {selectedItem.harga}
                </div>
              )}

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                {selectedItem.deskripsi}
              </p>
            </div>

            {selectedItem.kontak && (
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span><strong>Kontak / Pengelola:</strong> {selectedItem.kontak}</span>
                </div>
              </div>
            )}

            <div className="pt-2 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition cursor-pointer"
              >
                Tutup
              </button>
              <button
                onClick={() => {
                  const cat = selectedItem.kategori;
                  setSelectedItem(null);
                  if (cat === 'destinasi') handleNav('potensi-destinasi');
                  else if (cat === 'umkm') handleNav('potensi-umkm');
                  else if (cat === 'budaya') handleNav('potensi-budaya');
                  else if (cat === 'budidaya') handleNav('potensi-perikanan');
                }}
                className="px-5 py-2 bg-[#0f4d38] hover:bg-[#0c3c2c] text-white text-xs font-bold rounded-xl transition cursor-pointer flex items-center gap-1.5"
              >
                <span>Kunjungi Halaman Lengkap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
