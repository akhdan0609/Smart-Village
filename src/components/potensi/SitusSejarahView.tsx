import React, { useState, useMemo } from 'react';
import { 
  Landmark, 
  MapPin, 
  User, 
  ArrowLeft, 
  Search, 
  ChevronRight, 
  Calendar, 
  ShieldCheck, 
  Phone, 
  Share2, 
  Check, 
  X, 
  ArrowRight,
  Info,
  Sparkles,
  Compass
} from 'lucide-react';
import { PageRoute } from '../../types';
import { SITUS_SEJARAH_LIST } from '../../data/mockData';

import makamEyangImg from '../../assets/images/makam_eyang_menteng_1788955428651.jpg';
import rumahAdatImg from '../../assets/images/rumah_adat_sunda_1788955442032.jpg';
import batuPeringatanImg from '../../assets/images/batu_peringatan_desa_1788955460192.jpg';
import tradisiBudayaImg from '../../assets/images/tradisi_budaya_lokal_1788955478016.jpg';

interface SitusSejarahViewProps {
  onNavigate?: (page: PageRoute) => void;
}

interface FullSitusItem {
  id: string;
  nama: string;
  kategori: string;
  periode: string;
  lokasi: string;
  deskripsi: string;
  deskripsiLengkap: string;
  fotoUrl: string;
  juruKunci: string;
  kontak?: string;
  status: string;
  etika: string[];
}

export const SitusSejarahView: React.FC<SitusSejarahViewProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeItem, setActiveItem] = useState<FullSitusItem | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  // Consolidated heritage data (combines village history sites & archaeological items)
  const allSites: FullSitusItem[] = useMemo(() => [
    {
      id: 'makam-eyang',
      nama: 'Makam Eyang Warung Menteng',
      kategori: 'Situs Religi & Makam',
      periode: 'Abad ke-19 Masehi',
      lokasi: 'Kp. Pasir Pogor, RT 02/RW 01, Desa Warung Menteng',
      deskripsi: 'Makam peninggalan bersejarah yang diyakini sebagai tempat peristirahatan tokoh penyebar agama Islam dan pembuka pemukiman awal di Desa Warung Menteng.',
      deskripsiLengkap: 'Makam Eyang Warung Menteng adalah situs religi dan cagar budaya yang sangat dihormati oleh warga lereng Gunung Salak. Menurut riwayat sesepuh desa, tokoh pendahulu ini dikenal arif, mengajarkan cocok tanam, dan membangun kerukunan masyarakat. Kompleks makam dinaungi cungkup kayu jati tradisional dengan suasana sejuk dan teduh.',
      fotoUrl: makamEyangImg,
      juruKunci: 'Abah Somad',
      kontak: '0858-1122-3344',
      status: 'Cagar Budaya Desa Teregistrasi',
      etika: ['Berpakaian sopan dan menutup aurat', 'Menjaga ketenangan dan kebersihan area makam', 'Memohon izin kepada juru kunci sebelum ziarah']
    },
    {
      id: 'rumah-adat',
      nama: 'Situs Rumah Adat Sunda (Lama)',
      kategori: 'Arsitektur Kuno & Tradisi',
      periode: '± Tahun 1928',
      lokasi: 'Kp. Babakan RT 03/RW 02, Desa Warung Menteng',
      deskripsi: 'Situs bangunan rumah panggung tradisional Sunda berdinding anyaman bambu (gedek) dengan fondasi umpak batu alami yang masih lestari.',
      deskripsiLengkap: 'Rumah panggung kayu ini merefleksikan kejeniusan arsitektur vernakular Sunda kuno yang adaptif terhadap iklim pegunungan dan gempa tektonik. Memiliki kolong panggung tinggi untuk sirkulasi udara dan ventilasi alami yang menyejukkan interior tanpa pendingin ruangan.',
      fotoUrl: rumahAdatImg,
      juruKunci: 'Bpk. Encep Suherman',
      kontak: '0813-8899-7700',
      status: 'Warisan Arsitektur Tradisional Desa',
      etika: ['Melepas alas kaki saat naik ke teras panggung', 'Dilarang merokok di sekitar bangunan berbahan kayu/bambu', 'Mengisi buku tamu pelestarian budaya']
    },
    {
      id: 'batu-peringatan',
      nama: 'Batu Peringatan Batas Wilayah Desa',
      kategori: 'Prasejarah & Megalitikum',
      periode: 'Zaman Megalitikum / Batas Kuno',
      lokasi: 'Kawasan Hutan Lindung Desa, Kp. Pasir Jeruk',
      deskripsi: 'Monolit batu tegak prasejarah (menhir) penanda sejarah penting yang dipercaya sebagai patok batas damai leluhur antardesa.',
      deskripsiLengkap: 'Batu menhir setinggi 1,6 meter ini diselimuti lumut alami dan berada di perbatasan teduh kaki perbukitan. Menjadi bukti peradaban purba masyarakat agraris kaki Gunung Salak yang telah mengenal batas teritorial dan tata ruang permukiman.',
      fotoUrl: batuPeringatanImg,
      juruKunci: 'Ki Darta',
      kontak: '0877-3344-5511',
      status: 'Objek Diduga Cagar Budaya (ODCB)',
      etika: ['Dilarang mencorat-coret atau memahat batu', 'Menjaga flora dan vegetasi di sekitar situs', 'Melapor ke pos kehutanan desa']
    },
    {
      id: 'tradisi-budaya',
      nama: 'Bale Sawala & Tradisi Seren Taun',
      kategori: 'Arsitektur Kuno & Tradisi',
      periode: 'Turun-temurun',
      lokasi: 'Bale Adat Sawala Menteng Girang',
      deskripsi: 'Pusat kegiatan ritual adat Seren Taun, helaran kesenian calung, pencak silat Cimande, dan rembug musyawarah para sesepuh desa.',
      deskripsiLengkap: 'Bale Sawala dengan atap ijuk dan tiang kayu kokoh merupakan pusat pelestarian kebudayaan Sunda di Warung Menteng. Setiap tahun diselenggarakan syukuran hasil bumi padi dan salak pondoh sebagai wujud syukur atas berkah alam tanah Cijeruk.',
      fotoUrl: tradisiBudayaImg,
      juruKunci: 'Kang Hendra (Paguyuban Budaya)',
      kontak: '0812-9988-7766',
      status: 'Warisan Budaya Takbenda (WBTb)',
      etika: ['Menghormati tata cara adat saat prosesi berlangsung', 'Mendukung pelestarian kesenian pemuda desa', 'Menjaga kerukunan sesama pengunjung']
    },
    {
      id: 'situs-1',
      nama: 'Batu Dakon & Menhir Megalitikum Cimenteng',
      kategori: 'Prasejarah & Megalitikum',
      periode: 'Zaman Megalitikum / Pra-Sejarah',
      lokasi: 'Bukit Pasir Menteng Girang (Ketinggian 650 mdpl)',
      deskripsi: 'Batu andesit purba dengan lubang-lubang dakon melingkar yang digunakan leluhur untuk penanggalan musim tanam (pranata mangsa).',
      deskripsiLengkap: 'Menurut riset arkeologis, batu berlubang ini berfungsi sebagai observatorium bintang sederhana dan kalender agraris untuk memprediksi datangnya musim hujan serta saat tepat menabur benih padi huma di perbukitan lereng Salak.',
      fotoUrl: SITUS_SEJARAH_LIST[0]?.fotoUrl || batuPeringatanImg,
      juruKunci: 'Abah Jajang',
      kontak: '0856-4433-2211',
      status: 'Situs Arkeologi Megalitikum',
      etika: ['Dilarang memindahkan bebatuan pendukung di sekitar situs', 'Tidak menyalakan api dekat area purbakala', 'Mengutamakan edukasi sejarah']
    },
    {
      id: 'situs-2',
      nama: 'Mata Air Keramat Cikahuripan Warung Menteng',
      kategori: 'Situs Religi & Makam',
      periode: 'Abad ke-17 / Kerajaan Pajajaran Hilir',
      lokasi: 'Lembah Cikahuripan, Dusun II, Warung Menteng',
      deskripsi: 'Mata air alami pegunungan yang tidak pernah surut dan menjadi sumber kesuburan tanah persawahan serta air berkah warga.',
      deskripsiLengkap: 'Mata air alami yang memancar di bawah naungan pohon beringin tua. Kualitas airnya sangat jernih, dingin, dan murni mengalir sepanjang tahun, melayani kebutuhan irigasi persawahan dan perikanan air deras desa.',
      fotoUrl: SITUS_SEJARAH_LIST[1]?.fotoUrl || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      juruKunci: 'Bapak Kosasih',
      kontak: '0812-4455-6677',
      status: 'Mata Air Konservasi & Cagar Budaya',
      etika: ['Dilarang membuang sampah atau sabun kimia ke sumber mata air', 'Menghargai tradisi konservasi air leluhur', 'Mengambil air dengan tertib']
    },
    {
      id: 'situs-3',
      nama: 'Petilasan & Makam Sesepuh Raden Singa Menteng',
      kategori: 'Situs Religi & Makam',
      periode: 'Abad ke-18 Masehi',
      lokasi: 'Kompleks Pemakaman Tua Dusun I',
      deskripsi: 'Makam dan petilasan tokoh pelopor pembuka pemukiman (babad alas) wilayah Cijeruk dan Warung Menteng.',
      deskripsiLengkap: 'Petilasan ini menjadi saksi sejarah perjuangan para perintis desa yang membuka jalur perdagangan dan lumbung pangan di dataran tinggi Cijeruk. Menjadi destinasi ziarah edukatif dan doa bersama warga setiap menjelang bulan suci Ramadhan.',
      fotoUrl: SITUS_SEJARAH_LIST[2]?.fotoUrl || 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
      juruKunci: 'Ustadz Mahmud',
      kontak: '0878-9900-1122',
      status: 'Petilasan Bersejarah Tokoh Desa',
      etika: ['Menjaga adab ziarah kubur yang santun', 'Menghindari perilaku syirik atau takhayul', 'Menghormati masyarakat lingkungan sekitar']
    }
  ], []);

  const categories = ['Semua', 'Situs Religi & Makam', 'Arsitektur Kuno & Tradisi', 'Prasejarah & Megalitikum'];

  const filteredSites = useMemo(() => {
    return allSites.filter(site => {
      const matchCat = selectedCategory === 'Semua' || site.kategori === selectedCategory;
      const matchQuery = 
        site.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.deskripsi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.lokasi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.periode.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [allSites, selectedCategory, searchQuery]);

  const handleShare = (nama: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.href}#${encodeURIComponent(nama)}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-[#f8faf8] min-h-screen text-slate-800 pb-20 font-sans relative overflow-x-hidden">
      
      {/* HEADER HERO SECTION */}
      <div className="relative bg-gradient-to-b from-[#e8f3ec] via-[#f1f8f4] to-[#f8faf8] border-b border-emerald-100/60 pt-6 pb-12 overflow-hidden">
        
        {/* Botanical watermark decorations */}
        <div className="absolute -top-10 -left-10 w-64 h-64 pointer-events-none opacity-40 bg-emerald-300 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-80 h-80 pointer-events-none opacity-30 bg-emerald-200 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          
          {/* Top Bar: Breadcrumb + Back Button */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <nav className="flex items-center gap-1.5 text-xs text-[#064e3b] font-medium">
              <button 
                onClick={() => onNavigate?.('beranda')}
                className="hover:underline cursor-pointer text-[#064e3b]"
              >
                Beranda
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-emerald-600/70" />
              <button 
                onClick={() => onNavigate?.('profil-sejarah')}
                className="hover:underline cursor-pointer text-[#064e3b]"
              >
                Sejarah Desa
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-emerald-600/70" />
              <span className="font-semibold text-slate-900">Situs Sejarah & Cagar Budaya</span>
            </nav>

            {/* Back Button to Sejarah Desa */}
            <button
              onClick={() => onNavigate?.('profil-sejarah')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-emerald-50 border border-slate-200 text-xs font-bold text-[#064e3b] shadow-2xs transition cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Sejarah Desa</span>
            </button>
          </div>

          {/* Title Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-2">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#064e3b] text-white flex items-center justify-center shadow-xs shrink-0">
                  <Landmark className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-800 tracking-wider uppercase bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                    Warisan Budaya & Peradaban Kuno
                  </span>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#064e3b] tracking-tight pt-1">
                    Situs Sejarah & Cagar Budaya
                  </h1>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pl-1">
                Koleksi peninggalan bersejarah, makam para leluhur perintis desa, arsitektur tradisional Sunda, dan monolit prasejarah di wilayah Desa Warung Menteng, Kecamatan Cijeruk.
              </p>
            </div>

            {/* Quick Stat Pill */}
            <div className="flex items-center gap-4 bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xs shrink-0">
              <div className="text-center px-2">
                <div className="text-2xl font-extrabold text-[#064e3b]">{allSites.length}</div>
                <div className="text-[11px] text-slate-500 font-medium">Situs Terdata</div>
              </div>
              <div className="w-[1px] h-10 bg-slate-200" />
              <div className="text-center px-2">
                <div className="text-2xl font-extrabold text-[#064e3b]">100%</div>
                <div className="text-[11px] text-slate-500 font-medium">Terpelihara</div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* FILTER TABS & SEARCH ROW */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-5 relative z-20 space-y-6">
        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#064e3b] text-white shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama situs, lokasi..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* HERITAGE GRID LIST */}
        {filteredSites.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
            <Search className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">Situs Tidak Ditemukan</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Tidak ada situs sejarah yang cocok dengan pencarian "{searchQuery}". Silakan periksa ejaan atau ganti kategori.
            </p>
            <button
              onClick={() => { setSelectedCategory('Semua'); setSearchQuery(''); }}
              className="mt-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-4 py-2 rounded-full hover:bg-emerald-100 transition"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSites.map((site) => (
              <div
                key={site.id}
                onClick={() => setActiveItem(site)}
                className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img
                      src={site.fotoUrl}
                      alt={site.nama}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badge Periode */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#064e3b]/90 backdrop-blur-sm text-white border border-emerald-400/20 shadow-xs">
                        <Calendar className="w-3 h-3 text-emerald-200" />
                        <span>{site.periode}</span>
                      </span>
                    </div>

                    {/* Category pill right */}
                    <div className="absolute top-3 right-3">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-[#064e3b] shadow-xs">
                        {site.kategori}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-base font-extrabold text-slate-900 leading-snug group-hover:text-emerald-800 transition line-clamp-2">
                      {site.nama}
                    </h3>

                    <div className="flex items-start gap-1.5 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{site.lokasi}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {site.deskripsi}
                    </p>
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="p-5 pt-0 space-y-3">
                  <div className="p-2.5 bg-emerald-50/70 rounded-xl border border-emerald-100/80 flex items-center justify-between text-xs text-emerald-950">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <User className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                      <span className="truncate"><strong>Juru Kunci:</strong> {site.juruKunci}</span>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full shrink-0">
                      Terawat
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs font-bold text-emerald-800 group-hover:text-emerald-950 flex items-center gap-1.5 transition">
                      <span>Detail Informasi Lengkap</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* BOTTOM NOTICE / VISITING ETHICS */}
        <div className="bg-gradient-to-r from-emerald-900 to-[#064e3b] rounded-3xl p-6 sm:p-8 text-white shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Etika Pelestarian Cagar Budaya</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              Kunjungi Dengan Santun & Jaga Keasrian Peninggalan Leluhur
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              Seluruh situs bersejarah di Desa Warung Menteng dilindungi oleh Peraturan Desa tentang Pelestarian Cagar Budaya. Dilarang merusak, mengubah struktur, atau mengambil artefak purbakala.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate?.('profil-sejarah')}
              className="px-5 py-2.5 rounded-full bg-white text-[#064e3b] font-bold text-xs hover:bg-emerald-50 transition cursor-pointer shadow-xs flex items-center gap-1.5"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Baca Sejarah Lengkap</span>
            </button>
          </div>
        </div>

      </div>

      {/* DETAIL MODAL FOR HERITAGE SITE */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative shadow-2xl">
            
            {/* Close button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition cursor-pointer z-10"
              aria-label="Tutup modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header info */}
            <div className="space-y-2 pr-8">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="bg-[#064e3b] text-white font-semibold px-3 py-0.5 rounded-full">
                  {activeItem.kategori}
                </span>
                <span className="text-slate-400">• {activeItem.periode}</span>
                <span className="text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                  {activeItem.status}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                {activeItem.nama}
              </h2>
            </div>

            {/* Main Picture */}
            <div className="rounded-2xl overflow-hidden max-h-[340px] bg-slate-100 shadow-inner">
              <img
                src={activeItem.fotoUrl}
                alt={activeItem.nama}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Metadata Box: Lokasi & Juru Kunci */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800 block">Titik Lokasi:</span>
                  <span className="text-slate-600">{activeItem.lokasi}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <User className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800 block">Juru Kunci & Narahubung:</span>
                  <span className="text-slate-600">{activeItem.juruKunci}</span>
                  {activeItem.kontak && (
                    <span className="block text-emerald-800 font-mono text-[11px] pt-0.5">
                      Telp/WA: {activeItem.kontak}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Story & Historical Significance */}
            <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-emerald-900">
                Uraian Sejarah & Makna Budaya
              </h4>
              <p>{activeItem.deskripsiLengkap}</p>
            </div>

            {/* Visiting Ethics Checklist */}
            {activeItem.etika && activeItem.etika.length > 0 && (
              <div className="p-4 bg-emerald-50/70 border border-emerald-100 rounded-2xl space-y-2">
                <h4 className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Tata Tertib & Etika Kunjungan:</span>
                </h4>
                <ul className="space-y-1 text-xs text-slate-700 pl-1">
                  {activeItem.etika.map((rule, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                onClick={() => handleShare(activeItem.nama)}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-emerald-800 bg-slate-100 hover:bg-emerald-50 px-3.5 py-2 rounded-full transition cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Tautan Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Bagikan Informasi</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setActiveItem(null)}
                className="px-5 py-2 rounded-full bg-[#064e3b] text-white text-xs font-bold hover:bg-[#043e2f] transition cursor-pointer"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
