import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Sparkles, 
  MapPin, 
  Phone, 
  Award, 
  CheckCircle2, 
  Search, 
  Filter,
  Tag,
  Star
} from 'lucide-react';

interface ProdukItem {
  id: string;
  nama: string;
  kategori: string;
  pengrajin: string;
  dusun: string;
  harga: string;
  deskripsi: string;
  keunggulan: string[];
  fotoUrl: string;
  kontakWA: string;
  terlaris?: boolean;
}

export const ProdukLokalView: React.FC = () => {
  const [selectedKategori, setSelectedKategori] = useState<string>('semua');
  const [searchQuery, setSearchQuery] = useState('');

  const daftarProduk: ProdukItem[] = [
    {
      id: 'prd-1',
      nama: 'Kopi Robusta Lereng Salak "Menteng Coffee"',
      kategori: 'Olahan Hasil Bumi',
      pengrajin: 'Kelompok Tani Harapan Maju',
      dusun: 'Dusun I - Cimenteng',
      harga: 'Rp 45.000 / 250gr',
      deskripsi: 'Kopi robusta petik merah asli lereng Gunung Salak dengan aroma khas cokelat dan rempah alami melalui proses pascapanen natural & honey process.',
      keunggulan: ['100% Biji Petik Merah', 'Aroma Cokelat Alami', 'Roasting Medium-Dark Halal'],
      fotoUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80',
      kontakWA: '6281234567890',
      terlaris: true
    },
    {
      id: 'prd-2',
      nama: 'Kerajinan Anyaman Bambu Menteng',
      kategori: 'Kerajinan & Kriya',
      pengrajin: 'Paguyuban Pengrajin Bambu Girang',
      dusun: 'Dusun III - Menteng Girang',
      harga: 'Rp 25.000 - Rp 150.000',
      deskripsi: 'Kerajinan kearifan lokal Sunda berupa besek hantaran, tudung saji, kap lampu etnik, dan bakul nasi dari bambu tali pilihan anti-jamur.',
      keunggulan: ['Bahan Bambu Tali Tua', 'Finishing Ramah Lingkungan', 'Kuat & Tahan Bertahun-tahun'],
      fotoUrl: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=800&q=80',
      kontakWA: '6281234567891',
      terlaris: true
    },
    {
      id: 'prd-3',
      nama: 'Keripik Salak Menteng Crispy',
      kategori: 'Makanan Ringan',
      pengrajin: 'KWT (Kelompok Wanita Tani) Melati',
      dusun: 'Dusun II - Menteng Pasir',
      harga: 'Rp 18.000 / 100gr',
      deskripsi: 'Keripik buah salak manis hasil panen kebun warga, diolah menggunakan mesin vacuum frying higienis tanpa pemanis dan pewarna buatan.',
      keunggulan: ['Vacuum Frying Rendah Lemak', 'Tanpa Bahan Pengawet', 'Rasa Manis Segar Alami'],
      fotoUrl: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=800&q=80',
      kontakWA: '6281234567892',
      terlaris: false
    },
    {
      id: 'prd-4',
      nama: 'Ikan Nila Asap Rempah Cijeruk',
      kategori: 'Olahan Hasil Bumi',
      pengrajin: 'Pokdakan Tirta Menteng',
      dusun: 'Dusun I - Cimenteng',
      harga: 'Rp 35.000 / ekor (350gr)',
      deskripsi: 'Ikan nila merah segar kolam air deras yang diasap tradisional dengan kayu buah dan rempah khas Sunda, siap goreng atau santap langsung.',
      keunggulan: ['Dari Ikan Segar Air Deras', 'Asap Tempurung Kelapa & Rempah', 'Kemasan Vacuum Tahan Lama'],
      fotoUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
      kontakWA: '6281234567893',
      terlaris: true
    },
    {
      id: 'prd-5',
      nama: 'Gula Aren Organik Asli Menteng',
      kategori: 'Olahan Hasil Bumi',
      pengrajin: 'Pak Ujang Penderes',
      dusun: 'Dusun II - Menteng Pasir',
      harga: 'Rp 28.000 / bungkus (500gr)',
      deskripsi: 'Gula merah aren cetak alami dari nira pohon aren liar di perbukitan Gunung Salak, diproses dengan tungku kayu bakar tradisional tanpa campuran gula pasir.',
      keunggulan: ['Nira Aren Liar 100% Asli', 'Indeks Glikemik Rendah', 'Aroma Wangi Khas'],
      fotoUrl: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=80',
      kontakWA: '6281234567894',
      terlaris: false
    },
    {
      id: 'prd-6',
      nama: 'Madu Hutan Lebah Odeng Salak',
      kategori: 'Olahan Hasil Bumi',
      pengrajin: 'Komunitas Pemburu Lebah Lestari',
      dusun: 'Dusun III - Menteng Girang',
      harga: 'Rp 110.000 / botol (350ml)',
      deskripsi: 'Madu mentah murni (raw honey) dari lebah liar Apis dorsata penghisap nektar bunga hutan pegunungan Salak, kaya antioksidan dan enzim alami.',
      keunggulan: ['Madu Murni Tanpa Pasteurisasi', 'Kadar Air Alami Pegunungan', 'Teruji Laboratorium Dinkes'],
      fotoUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80',
      kontakWA: '6281234567895',
      terlaris: false
    }
  ];

  const kategoriList = ['semua', 'Olahan Hasil Bumi', 'Kerajinan & Kriya', 'Makanan Ringan'];

  const filteredProduk = daftarProduk.filter(item => {
    const matchKat = selectedKategori === 'semua' || item.kategori === selectedKategori;
    const matchSearch = item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.deskripsi.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.pengrajin.toLowerCase().includes(searchQuery.toLowerCase());
    return matchKat && matchSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <ShoppingBag className="w-4 h-4 text-amber-300" />
              <span>Etalase Produk Unggulan & Khas Desa</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Produk Lokal Asli Desa Warung Menteng
            </h1>
            
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Koleksi karya tangan, hasil bumi, dan olahan kuliner otentik dari para pengrajin serta petani lokal lereng Gunung Salak. Belanja langsung dari sumbernya untuk memajukan ekonomi warga.
            </p>
          </div>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {kategoriList.map(kat => (
              <button
                key={kat}
                onClick={() => setSelectedKategori(kat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition capitalize ${
                  selectedKategori === kat
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {kat === 'semua' ? 'Semua Produk' : kat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari produk lokal..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
            />
          </div>
        </div>

        {/* Grid Produk */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProduk.map(item => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition group"
            >
              <div>
                {/* Image & Badge */}
                <div className="h-52 relative overflow-hidden bg-slate-100">
                  <img
                    src={item.fotoUrl}
                    alt={item.nama}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  {item.terlaris && (
                    <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-extrabold text-[11px] px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Star className="w-3 h-3 fill-slate-950" />
                      <span>Produk Unggulan</span>
                    </span>
                  )}
                  <span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                    {item.kategori}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-emerald-800 transition">
                      {item.nama}
                    </h3>
                  </div>

                  <div className="text-emerald-700 font-extrabold text-sm">
                    {item.harga}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.deskripsi}
                  </p>

                  {/* Keunggulan tags */}
                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Nilai Keunggulan:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.keunggulan.map((unggul, uIdx) => (
                        <span 
                          key={uIdx}
                          className="bg-emerald-50 text-emerald-800 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-emerald-200/60"
                        >
                          ✓ {unggul}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 space-y-1">
                    <div className="flex items-center gap-1.5 font-medium text-slate-700">
                      <Award className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{item.pengrajin}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.dusun}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Button */}
              <div className="p-5 pt-0">
                <a
                  href={`https://wa.me/${item.kontakWA}?text=Halo%20${encodeURIComponent(item.pengrajin)},%20saya%20tertarik%20membeli%20produk%20${encodeURIComponent(item.nama)}%20dari%20website%20Desa%20Warung%20Menteng.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Pesan Langsung via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
