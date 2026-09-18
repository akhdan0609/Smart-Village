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
      judul: 'Launching Website Desa Warung Menteng: Inovasi Digital Layanan Publik Berbasis Transparansi',
      tanggal: '15 Juli 2024',
      penulis: 'H. Mulyadi, S.AP.',
      jabatan: 'Kepala Desa Warung Menteng',
      kategori: 'Pemerintahan',
      ringkasan: 'Pemerintah Desa Warung Menteng resmi meluncurkan website resmi desa sebagai wujud komitmen transparansi dan kemudahan akses layanan publik bagi masyarakat.',
      isiLengkap: [
        'WARUNG MENTENG, BOGOR — Pemerintah Desa Warung Menteng resmi meluncurkan website resmi desa (www.warungmenteng.desa.id) sebagai manifestasi komitmen transparansi dan transformasi digital layanan publik.',
        'Website ini dilengkapi fitur-fitur inovatif: pengajuan surat keterangan online, tracking status permohonan real-time, e-formulir administrasi kependudukan, hingga portal transparansi anggaran desa (APBDes) yang terbuka untuk diakses publik.',
        'Kepala Desa Warung Menteng, H. Mulyadi, S.AP., menegaskan bahwa website ini menjadi bukti nyata komitmen Pemdes dalam mewujudkan Good Governance dan Smart Village. "Kami ingin masyarakat mudah mengakses informasi dan layanan tanpa harus datang ke kantor desa berulang kali," ujar Kades.',
        'Website ini juga dilengkapi fitur aksesibilitas untuk difabel, mode gelap/terang, dan responsif di berbagai perangkat. Masyarakat dapat mengajukan surat keterangan domisili, SKCK, SKTM, hingga rekomendasi pernikahan hanya dengan beberapa klik dari smartphone mereka.'
      ],
      fotoUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      lampiranDokumen: 'Surat_Keputusan_Kades_No_001_Tahun_2024_Tentang_Launching_Website.pdf',
      dibaca: 1240
    },
    {
      id: 'pr-002',
      nomorRilis: 'PR/02/WM/KEM/VIII/2024',
      judul: 'Pembukaan dan Penutupan Kegiatan KKN Mahasiswa: Kolaborasi Akademisi dan Masyarakat Membangun Keberdayaan Desa',
      tanggal: '15 Agustus 2024',
      penulis: 'Dedi Kurniawan, S.Pd.',
      jabatan: 'Kaur Kesejahteraan & Keberdayaan Masyarakat',
      kategori: 'Keberdayaan Masyarakat',
      ringkasan: 'Kegiatan KKN Mahasiswa Universitas Nasional bertempat di Desa Warung Menteng berhasil dilaksanakan dengan program unggulan pemberdayaan masyarakat, pembangunan infrastruktur, dan peningkatan kapasitas SDM desa.',
      isiLengkap: [
        'WARUNG MENTENG — Pemerintah Desa Warung Menteng bersama Mahasiswa KKN Universitas Nasional resmi membuka dan menutup rangkaian kegiatan Kuliah Kerja Nyata (KKN) Periode Juli-Agustus 2024 yang bertempat di Desa Warung Menteng.',
        'Program KKN kali ini difokuskan pada tiga pilar utama: (1) Pemberdayaan Ekonomi Masyarakat melalui pelatihan pengolahan hasil pertanian dan UMKM digital, (2) Peningkatan Kapasitas SDM melalui pendampingan literasi digital warga dan pendampingan administrasi kelurahan, (3) Pembangunan Infrastruktur pendukung kesejahteraan seperti renovasi posyandu dan perbaikan jalan usaha tani.',
        'Dalam sambutan penutupan, Kepala Desa Warung Menteng, H. Mulyadi, S.AP., mengapresiasi dedikasi mahasiswa KKN yang selama 45 hari bermukim dan bekerja sama dengan masyarakat. "KKN ini bukan sekadar tugas kuliah, tapi investasi nyata untuk keberdayaan desa kita," ujar Kades.',
        'Sebagai bentuk apresiasi, Pemerintah Desa menyerahkan piagam penghargaan kepada 25 mahasiswa KKN serta menyerahkan bantuan alat pertanian dan paket UMKM digital kepada 15 kelompok tani dan UMKM desa.'
      ],
      fotoUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
      lampiranDokumen: 'Laporan_Akhir_KKN_Periode_Juli_Agustus_2024.pdf',
      dibaca: 890
    },
    {
      id: 'pr-003',
      nomorRilis: 'PR/03/WM/KEG/VIII/2024',
      judul: 'Pekan Olahraga Desa Warung Menteng 2024: Semangat Olahraga Mengukuhkan Silaturahmi dan Kesehatan Masyarakat',
      tanggal: '25 Agustus 2024',
      penulis: 'Ahmad Fauzi, S.E.',
      jabatan: 'Sekretaris Desa Warung Menteng',
      kategori: 'Kegiatan Desa',
      ringkasan: 'Pekan Olahraga Desa (PORDES) 2024 digelar meriah dengan partisipasi 500+ warga seluruh dusun, meliputi cabang sepak bola, voli, badminton, lari estafet, dan lomba tradisional egrang dan tarik tambang.',
      isiLengkap: [
        'WARUNG MENTENG — Pekan Olahraga Desa (PORDES) 2024 resmi dibuka oleh Kepala Desa Warung Menteng, H. Mulyadi, S.AP., di Lapangan Balai Desa Warung Menteng pada Senin, 26 Agustus 2024.',
        'Acara berlangsung selama 3 hari (26-28 Agustus 2024) dengan partisipasi 12 tim mewakili 6 dusun. Cabang olahraga yang dilombakan: Sepak Bola (Putra/Putri), Voli (Putra/Putri), Badminton (Ganda Campuran), Lari Estafet 4x100m, serta Lomba Tradisional (Egrang, Tarik Tambang, Balap Karung).',
        'Ketua Pelaksana PORDES 2024, Ahmad Fauzi, S.E., menyampaikan bahwa acara ini bertujuan mempererat silaturahmi antar warga, menggalakkan pola hidup sehat melalui olahraga, serta menggalang semangat kebersamaan antar generasi di Desa Warung Menteng.',
        'Puncak acara di hari ketiga diisi dengan malam puncak dan pemberian hadiah kepada juara 1-3 setiap cabang, serta hadiah spesial untuk "Tim Terfavorit" dan "Supporter Terbaik". Hadiah disponsori oleh BUMDes Warung Menteng, BPD, dan sponsor lokal (Koperasi Desa, Toko Kelontong Pak Budi, Warung Makan Bu Siti).'
      ],
      fotoUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80',
      lampiranDokumen: 'Surat_Keputusan_Kades_No_012_Tahun_2024_Tentang_PORDES_2024.pdf',
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
