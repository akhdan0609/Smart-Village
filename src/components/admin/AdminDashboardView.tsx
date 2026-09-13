import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  Newspaper, 
  ShoppingBag, 
  LogOut, 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  Plus, 
  Search, 
  Edit, 
  Trash2,
  Printer,
  X
} from 'lucide-react';
import { 
  PengajuanSurat, 
  LaporanAspirasi, 
  BeritaItem, 
  PengumumanItem, 
  UMKMItem,
  PageRoute 
} from '../../types';
import { 
  getStoredPengajuanSurat, 
  updatePengajuanSurat, 
  getStoredLaporan, 
  updateLaporan, 
  getStoredBerita, 
  saveBerita, 
  getStoredPengumuman, 
  savePengumuman, 
  getStoredUMKM, 
  saveUMKM,
  clearAdminSession 
} from '../../utils/storage';

interface AdminDashboardProps {
  onLogout: () => void;
  onNavigate: (page: PageRoute) => void;
}

export const AdminDashboardView: React.FC<AdminDashboardProps> = ({ onLogout, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'surat' | 'laporan' | 'berita' | 'umkm'>('overview');

  // Lists State
  const [suratList, setSuratList] = useState<PengajuanSurat[]>([]);
  const [laporanList, setLaporanList] = useState<LaporanAspirasi[]>([]);
  const [beritaList, setBeritaList] = useState<BeritaItem[]>([]);
  const [pengumumanList, setPengumumanList] = useState<PengumumanItem[]>([]);
  const [umkmList, setUmkmList] = useState<UMKMItem[]>([]);

  // Modal Surat Edit
  const [selectedSurat, setSelectedSurat] = useState<PengajuanSurat | null>(null);
  const [suratStatus, setSuratStatus] = useState<'Diajukan' | 'Diproses' | 'Selesai' | 'Ditolak'>('Diproses');
  const [suratCatatan, setSuratCatatan] = useState('');

  // Modal Laporan Edit
  const [selectedLaporan, setSelectedLaporan] = useState<LaporanAspirasi | null>(null);
  const [laporanStatus, setLaporanStatus] = useState<'Menunggu' | 'Diproses' | 'Selesai' | 'Ditolak'>('Diproses');
  const [laporanRespon, setLaporanRespon] = useState('');

  // Form Tambah Berita
  const [showBeritaModal, setShowBeritaModal] = useState(false);
  const [judulBerita, setJudulBerita] = useState('');
  const [kategoriBerita, setKategoriBerita] = useState('Pemerintahan');
  const [ringkasanBerita, setRingkasanBerita] = useState('');
  const [isiLengkapBerita, setIsiLengkapBerita] = useState('');
  const [fotoBerita, setFotoBerita] = useState('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80');

  // Form Tambah UMKM
  const [showUmkmModal, setShowUmkmModal] = useState(false);
  const [namaProduk, setNamaProduk] = useState('');
  const [kategoriUmkm, setKategoriUmkm] = useState<'makanan-minuman' | 'kerajinan' | 'produk-lainnya'>('makanan-minuman');
  const [pemilikUmkm, setPemilikUmkm] = useState('');
  const [hargaUmkm, setHargaUmkm] = useState('');
  const [deskripsiUmkm, setDeskripsiUmkm] = useState('');
  const [kontakWaUmkm, setKontakWaUmkm] = useState('628123456789');
  const [alamatUmkm, setAlamatUmkm] = useState('RT 01 / RW 02, Desa Warung Menteng');

  const loadData = () => {
    setSuratList(getStoredPengajuanSurat());
    setLaporanList(getStoredLaporan());
    setBeritaList(getStoredBerita());
    setPengumumanList(getStoredPengumuman());
    setUmkmList(getStoredUMKM());
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleUpdateSurat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSurat) return;
    updatePengajuanSurat(selectedSurat.id, {
      status: suratStatus,
      catatanPetugas: suratCatatan
    });
    setSelectedSurat(null);
    loadData();
  };

  const handleUpdateLaporan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLaporan) return;
    updateLaporan(selectedLaporan.id, {
      status: laporanStatus,
      responPetugas: laporanRespon,
      tanggalRespon: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
    });
    setSelectedLaporan(null);
    loadData();
  };

  const handleCreateBerita = (e: React.FormEvent) => {
    e.preventDefault();
    const newB: BeritaItem = {
      id: `berita-${Date.now()}`,
      judul: judulBerita,
      ringkasan: ringkasanBerita,
      isiLengkap: isiLengkapBerita,
      kategori: kategoriBerita,
      fotoUrl: fotoBerita,
      tanggal: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      penulis: 'Admin Redaksi Desa',
      dibaca: 1,
      tags: ['WarungMenteng', kategoriBerita]
    };
    saveBerita(newB);
    setShowBeritaModal(false);
    setJudulBerita('');
    setRingkasanBerita('');
    setIsiLengkapBerita('');
    loadData();
  };

  const handleCreateUMKM = (e: React.FormEvent) => {
    e.preventDefault();
    const labels = {
      'makanan-minuman': 'Makanan & Minuman',
      'kerajinan': 'Kerajinan',
      'produk-lainnya': 'Produk Lokal Lainnya'
    };
    const newU: UMKMItem = {
      id: `umkm-${Date.now()}`,
      nama: namaProduk,
      kategori: kategoriUmkm,
      kategoriLabel: labels[kategoriUmkm],
      pemilik: pemilikUmkm,
      harga: hargaUmkm,
      deskripsi: deskripsiUmkm,
      fotoUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
      kontakWA: kontakWaUmkm,
      alamat: alamatUmkm,
      rating: 5.0,
      unggulan: true
    };
    saveUMKM(newU);
    setShowUmkmModal(false);
    setNamaProduk('');
    setPemilikUmkm('');
    setHargaUmkm('');
    setDeskripsiUmkm('');
    loadData();
  };

  const handleSignOut = () => {
    clearAdminSession();
    onLogout();
  };

  return (
    <div className="py-8 bg-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Top Bar Admin */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider bg-slate-800 px-3 py-1 rounded-full">
              Panel Pengelola Desa (Administrator)
            </span>
            <h1 className="text-2xl sm:text-3xl font-black mt-2 font-['Playfair_Display',serif]">
              Dashboard Administrasi Desa Warung Menteng
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              Selamat datang, Petugas PTSP & Tim Pengelola Konten Desa.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('beranda')}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition"
            >
              Lihat Web Publik
            </button>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-sm"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Keluar (Logout)</span>
            </button>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Ringkasan Statistik</span>
          </button>

          <button
            onClick={() => setActiveTab('surat')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'surat'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Kelola Permohonan Surat ({suratList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('laporan')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'laporan'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Aspirasi & Pengaduan ({laporanList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('berita')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'berita'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Newspaper className="w-4 h-4" />
            <span>Warta & Pengumuman ({beritaList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('umkm')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'umkm'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Katalog UMKM ({umkmList.length})</span>
          </button>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase">Pengajuan Surat Masuk</span>
                <h3 className="text-3xl font-black text-slate-900">{suratList.length}</h3>
                <p className="text-xs text-emerald-600 font-semibold">
                  {suratList.filter(s => s.status === 'Diajukan').length} Perlu Verifikasi
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase">Aspirasi & Pengaduan</span>
                <h3 className="text-3xl font-black text-slate-900">{laporanList.length}</h3>
                <p className="text-xs text-rose-600 font-semibold">
                  {laporanList.filter(l => l.status === 'Menunggu').length} Belum Diberi Tanggapan
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase">Artikel Berita Terbit</span>
                <h3 className="text-3xl font-black text-slate-900">{beritaList.length}</h3>
                <p className="text-xs text-slate-500">Publikasi Resmi Web Desa</p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase">Produk UMKM Terdaftar</span>
                <h3 className="text-3xl font-black text-slate-900">{umkmList.length}</h3>
                <p className="text-xs text-amber-600 font-semibold">Siap Promosi ke Pembeli</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-extrabold text-slate-900">Aksi Cepat Pengelolaan:</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveTab('surat')}
                  className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                >
                  <FileText className="w-4 h-4" />
                  <span>Proses Surat Masuk</span>
                </button>
                <button
                  onClick={() => setShowBeritaModal(true)}
                  className="px-4 py-2.5 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tulis Berita Desa Baru</span>
                </button>
                <button
                  onClick={() => setShowUmkmModal(true)}
                  className="px-4 py-2.5 bg-amber-700 hover:bg-amber-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Daftarkan Produk UMKM Baru</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MANAJEMEN SURAT */}
        {activeTab === 'surat' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">Daftar Permohonan Surat Online</h3>
                <p className="text-xs text-slate-500">Klik 'Tindak Lanjut' untuk mengubah status verifikasi dan memberi catatan</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                    <th className="p-3 font-bold rounded-l-xl">No. Registrasi</th>
                    <th className="p-3 font-bold">Nama Pemohon & NIK</th>
                    <th className="p-3 font-bold">Jenis Surat</th>
                    <th className="p-3 font-bold">Keperluan</th>
                    <th className="p-3 font-bold">Tanggal</th>
                    <th className="p-3 font-bold">Status</th>
                    <th className="p-3 font-bold rounded-r-xl text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {suratList.map(item => (
                    <tr key={item.id} className="hover:bg-slate-50 transition">
                      <td className="p-3 font-mono font-bold text-emerald-800">{item.nomorRegistrasi}</td>
                      <td className="p-3">
                        <div className="font-bold text-slate-900">{item.namaPemohon}</div>
                        <div className="text-[10px] text-slate-400 font-mono">NIK: {item.nik}</div>
                        <div className="text-[10px] text-slate-500">WA: {item.nomorWA}</div>
                      </td>
                      <td className="p-3 font-semibold text-slate-700">{item.jenisSurat}</td>
                      <td className="p-3 text-slate-600 max-w-xs truncate">{item.keperluan}</td>
                      <td className="p-3 text-slate-500 whitespace-nowrap">{item.tanggalPengajuan}</td>
                      <td className="p-3">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold ${
                          item.status === 'Selesai' ? 'bg-emerald-100 text-emerald-800' :
                          item.status === 'Diproses' ? 'bg-blue-100 text-blue-800' :
                          item.status === 'Ditolak' ? 'bg-rose-100 text-rose-800' :
                          'bg-amber-100 text-amber-800'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <button
                          onClick={() => {
                            setSelectedSurat(item);
                            setSuratStatus(item.status);
                            setSuratCatatan(item.catatanPetugas || '');
                          }}
                          className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold transition"
                        >
                          Tindak Lanjut
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: MANAJEMEN ASPIRASI & PENGADUAN */}
        {activeTab === 'laporan' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">Daftar Aspirasi & Pengaduan Warga</h3>
                <p className="text-xs text-slate-500">Berikan respon dan tindak lanjut resmi Pemerintah Desa Warung Menteng</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                    <th className="p-3 font-bold rounded-l-xl">No. Tiket</th>
                    <th className="p-3 font-bold">Kategori</th>
                    <th className="p-3 font-bold">Pelapor & Lokasi</th>
                    <th className="p-3 font-bold">Judul & Isi Laporan</th>
                    <th className="p-3 font-bold">Tanggal</th>
                    <th className="p-3 font-bold">Status</th>
                    <th className="p-3 font-bold rounded-r-xl text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {laporanList.map(item => (
                    <tr key={item.id} className="hover:bg-slate-50 transition">
                      <td className="p-3 font-mono font-bold text-slate-900">{item.nomorTiket}</td>
                      <td className="p-3">
                        <span className="capitalize font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                          {item.kategori}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="font-bold text-slate-900">{item.namaPelapor}</div>
                        <div className="text-[10px] text-slate-500">{item.lokasiKejadian}</div>
                      </td>
                      <td className="p-3 max-w-sm">
                        <div className="font-bold text-slate-800">{item.judul}</div>
                        <div className="text-slate-500 text-[11px] line-clamp-2 mt-0.5">{item.isiLaporan}</div>
                      </td>
                      <td className="p-3 text-slate-500 whitespace-nowrap">{item.tanggalLapor}</td>
                      <td className="p-3">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold ${
                          item.status === 'Selesai' ? 'bg-emerald-100 text-emerald-800' :
                          item.status === 'Diproses' ? 'bg-blue-100 text-blue-800' :
                          'bg-amber-100 text-amber-800'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <button
                          onClick={() => {
                            setSelectedLaporan(item);
                            setLaporanStatus(item.status);
                            setLaporanRespon(item.responPetugas || '');
                          }}
                          className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition"
                        >
                          Beri Respon
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: MANAJEMEN BERITA */}
        {activeTab === 'berita' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">Manajemen Berita Desa</h3>
                <p className="text-xs text-slate-500">Kelola dan publikasikan warta terbaru untuk masyarakat</p>
              </div>
              <button
                onClick={() => setShowBeritaModal(true)}
                className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Berita Baru</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {beritaList.map(b => (
                <div key={b.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <img src={b.fotoUrl} alt={b.judul} className="w-full h-32 object-cover rounded-xl" />
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {b.kategori}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 line-clamp-2">{b.judul}</h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2">{b.ringkasan}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: MANAJEMEN UMKM */}
        {activeTab === 'umkm' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">Manajemen Katalog UMKM Warga</h3>
                <p className="text-xs text-slate-500">Daftarkan produk UMKM makanan, kerajinan, dan komoditas perikanan</p>
              </div>
              <button
                onClick={() => setShowUmkmModal(true)}
                className="px-4 py-2.5 bg-amber-700 hover:bg-amber-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Produk UMKM Baru</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {umkmList.map(u => (
                <div key={u.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-amber-800">{u.kategoriLabel}</span>
                    <span className="font-mono font-bold text-emerald-700">{u.harga}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{u.nama}</h4>
                  <p className="text-[11px] text-slate-500">Pengrajin/Toko: {u.pemilik} • {u.alamat}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MODAL EDIT SURAT */}
        {selectedSurat && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <form onSubmit={handleUpdateSurat} className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 animate-in zoom-in-95 duration-150">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Tindak Lanjut Permohonan Surat
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 mt-1">
                    {selectedSurat.nomorRegistrasi}
                  </h3>
                  <p className="text-xs text-slate-500">{selectedSurat.jenisSurat} - {selectedSurat.namaPemohon}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedSurat(null)}
                  className="text-slate-400 hover:text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Ubah Status:</label>
                <select
                  value={suratStatus}
                  onChange={e => setSuratStatus(e.target.value as any)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                >
                  <option value="Diajukan">Diajukan</option>
                  <option value="Diproses">Diproses (Verifikasi Berkas)</option>
                  <option value="Selesai">Selesai (Siap Diambil / Diterbitkan)</option>
                  <option value="Ditolak">Ditolak (Berkas Tidak Lengkap)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Catatan Petugas PTSP:</label>
                <textarea
                  rows={3}
                  value={suratCatatan}
                  onChange={e => setSuratCatatan(e.target.value)}
                  placeholder="Contoh: Dokumen telah diverifikasi dan siap diambil di Loket 1 Balai Desa dengan membawa KTP Asli."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs leading-relaxed"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold"
                >
                  Simpan Perubahan
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedSurat(null)}
                  className="px-4 py-3 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        )}

        {/* MODAL EDIT LAPORAN */}
        {selectedLaporan && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <form onSubmit={handleUpdateLaporan} className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 animate-in zoom-in-95 duration-150">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                    Tanggapan Pengaduan / Aspirasi
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 mt-1">
                    {selectedLaporan.nomorTiket}
                  </h3>
                  <p className="text-xs text-slate-500">{selectedLaporan.judul}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedLaporan(null)}
                  className="text-slate-400 hover:text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Ubah Status:</label>
                <select
                  value={laporanStatus}
                  onChange={e => setLaporanStatus(e.target.value as any)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                >
                  <option value="Menunggu">Menunggu</option>
                  <option value="Diproses">Diproses (Dikoordinasikan)</option>
                  <option value="Selesai">Selesai (Sudah Ditindaklanjuti)</option>
                  <option value="Ditolak">Ditolak</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Isi Respon Resmi Pemdes:</label>
                <textarea
                  rows={4}
                  required
                  value={laporanRespon}
                  onChange={e => setLaporanRespon(e.target.value)}
                  placeholder="Tuliskan respon resmi dan tindak lanjut lapangan..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs leading-relaxed"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold"
                >
                  Publikasikan Respon
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLaporan(null)}
                  className="px-4 py-3 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        )}

        {/* MODAL TAMBAH BERITA */}
        {showBeritaModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <form onSubmit={handleCreateBerita} className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-900">Tulis Berita Desa Baru</h3>
                <button type="button" onClick={() => setShowBeritaModal(false)} className="text-slate-400">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Judul Berita *</label>
                <input
                  type="text"
                  required
                  value={judulBerita}
                  onChange={e => setJudulBerita(e.target.value)}
                  placeholder="Judul berita..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Kategori</label>
                  <select
                    value={kategoriBerita}
                    onChange={e => setKategoriBerita(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  >
                    <option value="Pemerintahan">Pemerintahan</option>
                    <option value="Pembangunan">Pembangunan</option>
                    <option value="Kemasyarakatan">Kemasyarakatan</option>
                    <option value="Kesehatan">Kesehatan</option>
                    <option value="Pertanian">Pertanian</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">URL Foto Sampul</label>
                  <input
                    type="text"
                    value={fotoBerita}
                    onChange={e => setFotoBerita(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Ringkasan Berita *</label>
                <textarea
                  rows={2}
                  required
                  value={ringkasanBerita}
                  onChange={e => setRingkasanBerita(e.target.value)}
                  placeholder="Ringkasan 1-2 kalimat..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Isi Lengkap Berita *</label>
                <textarea
                  rows={5}
                  required
                  value={isiLengkapBerita}
                  onChange={e => setIsiLengkapBerita(e.target.value)}
                  placeholder="Tulis artikel berita secara detail..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold"
              >
                Terbitkan Berita
              </button>
            </form>
          </div>
        )}

        {/* MODAL TAMBAH UMKM */}
        {showUmkmModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <form onSubmit={handleCreateUMKM} className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-900">Daftarkan Produk UMKM Baru</h3>
                <button type="button" onClick={() => setShowUmkmModal(false)} className="text-slate-400">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Nama Produk *</label>
                <input
                  type="text"
                  required
                  value={namaProduk}
                  onChange={e => setNamaProduk(e.target.value)}
                  placeholder="Contoh: Kopi Menteng Kemasan 250gr"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Kategori Produk</label>
                  <select
                    value={kategoriUmkm}
                    onChange={e => setKategoriUmkm(e.target.value as any)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  >
                    <option value="makanan-minuman">Makanan & Minuman</option>
                    <option value="kerajinan">Kerajinan</option>
                    <option value="produk-lainnya">Produk Lokal Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Harga (Rp) *</label>
                  <input
                    type="text"
                    required
                    value={hargaUmkm}
                    onChange={e => setHargaUmkm(e.target.value)}
                    placeholder="Rp 35.000 / bungkus"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Nama Pemilik / Pengrajin *</label>
                  <input
                    type="text"
                    required
                    value={pemilikUmkm}
                    onChange={e => setPemilikUmkm(e.target.value)}
                    placeholder="Contoh: Ibu Siti"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Nomor WA Pengrajin</label>
                  <input
                    type="text"
                    required
                    value={kontakWaUmkm}
                    onChange={e => setKontakWaUmkm(e.target.value)}
                    placeholder="628123456789"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Deskripsi Produk *</label>
                <textarea
                  rows={3}
                  required
                  value={deskripsiUmkm}
                  onChange={e => setDeskripsiUmkm(e.target.value)}
                  placeholder="Keunggulan produk, bahan baku, rasa..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-xl text-xs font-bold"
              >
                Simpan Produk ke Katalog
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
