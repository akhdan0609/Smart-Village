import React, { useState } from 'react';
import { 
  Newspaper, 
  Calendar, 
  User, 
  Eye, 
  Share2, 
  Search, 
  Building2, 
  Tag,
  ArrowRight,
  ShieldAlert,
  FileCheck2
} from 'lucide-react';

interface PressReleaseItem {
  id: string;
  nomorRilis: string;
  judul: string;
  tanggal: string;
  penulis: string;
  jabatan: string;
  kategori: string;
  ringkasan: string;
  isiLengkap: string[];
  fotoUrl: string;
  lampiranDokumen?: string;
  dibaca: number;
}

export const PressReleaseView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedKategori, setSelectedKategori] = useState('Semua');
  const [activeItem, setActiveItem] = useState<PressReleaseItem | null>(null);

  const daftarPressRelease: PressReleaseItem[] = [
    {
      id: 'pr-001',
      nomorRilis: 'PR/01/WM/PEM/VII/2024',
      judul: 'Pemerintah Desa Warung Menteng Luncurkan Program Transformasi Pelayanan Administrasi Digital Terpadu',
      tanggal: '15 Juli 2024',
      penulis: 'H. Mulyadi, S.AP.',
      jabatan: 'Kepala Desa Warung Menteng',
      kategori: 'Pelayanan Publik & Tata Kelola',
      ringkasan: 'Langkah strategis Pemdes Warung Menteng memangkas birokrasi dan mempermudah pengurusan dokumen surat keterangan warga secara daring bebas biaya.',
      isiLengkap: [
        'WARUNG MENTENG, BOGOR — Pemerintah Desa Warung Menteng resmi meluncurkan portal integrasi sistem informasi dan pelayanan publik desa berbasis digital. Langkah modernisasi ini ditujukan guna mempercepat pengurusan dokumen administrasi warga, dari pengajuan surat keterangan domisili, SKU, SKTM, pengantar KTP, mutasi kependudukan hingga rekomendasi formulir pernikahan model N1-N4.',
        'Kepala Desa Warung Menteng menegaskan bahwa seluruh proses administrasi pelayanan desa berprinsip melayani dengan ramah, transparan, dan tanpa pungutan biaya sepeser pun (Rp 0).',
        '"Kami berkomitmen membawa Desa Warung Menteng menjadi desa mandiri, transparan, dan melek digital tanpa meninggalkan kearifan lokal kerukunan warga lereng Salak," ungkap Kades dalam sambutan peresmian.',
        'Sistem ini juga dilengkapi fasilitas pengecekan status permohonan secara mandiri menggunakan kode registrasi unik yang dikirimkan langsung kepada warga pemohon.'
      ],
      fotoUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
      lampiranDokumen: 'Surat_Edaran_Kades_No_04_Tahun_2024.pdf',
      dibaca: 1240
    },
    {
      id: 'pr-002',
      nomorRilis: 'PR/02/WM/EKO/VIII/2024',
      judul: 'Siaran Pers: Penguatan Ekosistem Budidaya Perikanan Air Deras dan Hilirisasi Produk Lokal Khas Desa',
      tanggal: '02 Agustus 2024',
      penulis: 'Dedi Kurniawan, S.Pt.',
      jabatan: 'Kaur Perencanaan & Ekonomi Desa',
      kategori: 'Ekonomi & Ketahanan Pangan',
      ringkasan: 'Kolaborasi Pemdes bersama Kelompok Pembudidaya Ikan (Pokdakan) Tirta Menteng dalam perluasan pasar benih ikan nila dan olahan hasil bumi lereng Gunung Salak.',
      isiLengkap: [
        'WARUNG MENTENG — Bertempat di Balai Desa Warung Menteng, Pemerintah Desa bersama Pokdakan Tirta Menteng dan KWT Melati mengumumkan program penguatan klaster budidaya perikanan air deras dan diversifikasi produk unggulan lokal.',
        'Dengan memanfaatkan kelimpahan sumber mata air pegunungan yang jernih, Desa Warung Menteng menargetkan kapasitas produksi benih nila merah dan gurame mencapai 50.000 ekor per siklus untuk mensuplai pasar Jabodetabek.',
        'Di samping itu, Pemdes memberikan fasilitasi pelatihan kemasan higienis dan legalitas P-IRT bagi produk kopi robusta, keripik salak, dan anyaman bambu khas dusun.'
      ],
      fotoUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      lampiranDokumen: 'Laporan_Ketahanan_Pangan_Desa_2024.pdf',
      dibaca: 890
    },
    {
      id: 'pr-003',
      nomorRilis: 'PR/03/WM/PEMB/VIII/2024',
      judul: 'Transparansi Realisasi Dana Desa Tahap II: Pembangunan Rabat Beton Jalan Usaha Tani Dusun II & Sarana Air Bersih',
      tanggal: '20 Agustus 2024',
      penulis: 'Ahmad Fauzi, S.E.',
      jabatan: 'Sekretaris Desa Warung Menteng',
      kategori: 'Infrastruktur & Pembangunan',
      ringkasan: 'Laporan terbuka penyaluran Dana Desa APBDes 2024 untuk peningkatan aksesibilitas pertanian dan pipanisasi gravitasi air bersih warga.',
      isiLengkap: [
        'WARUNG MENTENG — Pemerintah Desa Warung Menteng mempublikasikan rincian realisasi fisik pembangunan infrastruktur Dana Desa (DD) Tahap II Tahun Anggaran 2024.',
        'Pekerjaan fisik mencakup pengecoran rabat beton jalan usaha tani sepanjang 650 meter di Dusun II Menteng Pasir serta pembangunan reservoir bak penampungan air bersih dan pipanisasi 1.200 meter untuk melayani 140 KK.',
        'Masyarakat dipersilakan mengawasi dan mengakses buku transparansi APBDes di papan informasi balai desa maupun melalui kanal website resmi desa.'
      ],
      fotoUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
      lampiranDokumen: 'Buku_Transparansi_APBDes_2024.pdf',
      dibaca: 1430
    }
  ];

  const kategoriList = ['Semua', 'Pelayanan Publik & Tata Kelola', 'Ekonomi & Ketahanan Pangan', 'Infrastruktur & Pembangunan'];

  const filteredReleases = daftarPressRelease.filter(item => {
    const matchKat = selectedKategori === 'Semua' || item.kategori === selectedKategori;
    const matchSearch = item.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.ringkasan.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.nomorRilis.toLowerCase().includes(searchQuery.toLowerCase());
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
              <Newspaper className="w-4 h-4 text-amber-300" />
              <span>HUMAS: Siaran Pers & Komunikasi Resmi</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              HUMAS & Press Release Pemerintah Desa
            </h1>
            
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Kanal publikasi resmi Hubungan Masyarakat (HUMAS), siaran pers resmi, transparansi kebijakan, dan rilis kegiatan Pemerintah Desa Warung Menteng Kecamatan Cijeruk Kabupaten Bogor bagi media massa dan masyarakat luas.
            </p>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {kategoriList.map(kat => (
              <button
                key={kat}
                onClick={() => setSelectedKategori(kat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  selectedKategori === kat
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {kat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nomor rilis / judul..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
            />
          </div>
        </div>

        {/* Main List & Reader */}
        {activeItem ? (
          /* Detailed View */
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <button
              onClick={() => setActiveItem(null)}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1.5 transition"
            >
              <span>← Kembali ke Daftar Press Release</span>
            </button>

            <div className="space-y-3 border-b border-slate-100 pb-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-emerald-100 text-emerald-800 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md">
                  {activeItem.nomorRilis}
                </span>
                <span className="bg-slate-100 text-slate-700 text-[11px] font-semibold px-2.5 py-0.5 rounded-md">
                  {activeItem.kategori}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {activeItem.judul}
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  {activeItem.tanggal}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-emerald-600" />
                  {activeItem.penulis} ({activeItem.jabatan})
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-emerald-600" />
                  {activeItem.dibaca} kali dibaca
                </span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-72 sm:h-96 w-full">
              <img
                src={activeItem.fotoUrl}
                alt={activeItem.judul}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed pt-2">
              {activeItem.isiLengkap.map((paragraf, pIdx) => (
                <p key={pIdx}>{paragraf}</p>
              ))}
            </div>

            {activeItem.lampiranDokumen && (
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileCheck2 className="w-6 h-6 text-emerald-700" />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Lampiran Resmi Dokumen</span>
                    <span className="text-[11px] text-slate-500">{activeItem.lampiranDokumen}</span>
                  </div>
                </div>
                <button
                  onClick={() => alert(`Mengunduh dokumen resmi: ${activeItem.lampiranDokumen}`)}
                  className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition"
                >
                  Unduh Salinan PDF
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Cards List */
          <div className="space-y-4">
            {filteredReleases.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="w-full md:w-56 h-40 shrink-0 rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={item.fotoUrl}
                    alt={item.judul}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md">
                      {item.nomorRilis}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {item.tanggal}
                    </span>
                    <span className="text-[11px] text-emerald-700 font-semibold">
                      • {item.kategori}
                    </span>
                  </div>

                  <h3 
                    onClick={() => setActiveItem(item)}
                    className="text-lg font-bold text-slate-900 hover:text-emerald-800 cursor-pointer transition"
                  >
                    {item.judul}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.ringkasan}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <span className="text-[11px] text-slate-500 font-medium">
                      Oleh: <strong className="text-slate-700">{item.penulis}</strong> ({item.jabatan})
                    </span>

                    <button
                      onClick={() => setActiveItem(item)}
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 transition"
                    >
                      <span>Baca Siaran Pers</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
