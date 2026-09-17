import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  MessageSquare, 
  Newspaper, 
  ShoppingBag, 
  Building2, 
  TreePine, 
  Mail, 
  Image,
  Plus,
  ArrowUpRight,
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
} from 'lucide-react';
import { 
  getStoredPengajuanSurat, 
  getStoredLaporan, 
  getStoredBerita, 
  getStoredUMKM 
} from '../../utils/storage';
import { AdminLayout } from './AdminLayout';
import { DataTable } from './components';
import { PageRoute } from '../../types';

interface StatCardProps {
  title: string;
  value: number;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  trend?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, subtitle, icon, color, bgColor, trend }) => (
  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
    <div className="flex items-center justify-between">
      <span className="text-xs font-bold text-slate-500 uppercase">{title}</span>
      <div className={`w-10 h-10 rounded-xl ${bgColor} flex items-center justify-center`}>
        {icon}
      </div>
    </div>
    <h3 className="text-3xl font-black text-slate-900">{value.toLocaleString()}</h3>
    <p className="text-xs text-slate-500">{subtitle}</p>
    {trend && <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">{trend}</p>}
  </div>
);

const roleStatsConfig = {
  super_admin: [
    { key: 'surat', label: 'Pengajuan Surat', icon: FileText, color: 'text-emerald-600', bg: 'bg-emerald-100', sub: 'Perlu Verifikasi' },
    { key: 'laporan', label: 'Aspirasi & Pengaduan', icon: MessageSquare, color: 'text-rose-600', bg: 'bg-rose-100', sub: 'Belum Direspon' },
    { key: 'berita', label: 'Artikel Berita', icon: Newspaper, color: 'text-blue-600', bg: 'bg-blue-100', sub: 'Publikasi Resmi' },
    { key: 'umkm', label: 'Produk UMKM', icon: ShoppingBag, color: 'text-amber-600', bg: 'bg-amber-100', sub: 'Siap Promosi' },
  ],
  admin_1: [
    { key: 'profil', label: 'Konten Profil', icon: Building2, color: 'text-emerald-600', bg: 'bg-emerald-100', sub: 'Tentang, Sejarah, dll' },
    { key: 'pemerintahan', label: 'Perangkat Desa', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100', sub: 'Data Pemerintahan' },
    { key: 'anggaran', label: 'Anggaran', icon: TrendingUp, color: 'text-amber-600', bg: 'bg-amber-100', sub: 'APBDes' },
  ],
  admin_2: [
    { key: 'akomodasi', label: 'Akomodasi', icon: Building2, color: 'text-emerald-600', bg: 'bg-emerald-100', sub: 'Wisata & Homestay' },
    { key: 'umkm', label: 'UMKM', icon: ShoppingBag, color: 'text-amber-600', bg: 'bg-amber-100', sub: 'Produk Warga' },
    { key: 'budaya', label: 'Budaya & Adat', icon: TreePine, color: 'text-purple-600', bg: 'bg-purple-100', sub: 'Warisan Budaya' },
    { key: 'surat', label: 'Permohonan Surat', icon: Mail, color: 'text-blue-600', bg: 'bg-blue-100', sub: 'Kelola Surat' },
  ],
  admin_3: [
    { key: 'press', label: 'Press Release', icon: Newspaper, color: 'text-emerald-600', bg: 'bg-emerald-100', sub: 'Publikasi Resmi' },
    { key: 'galeri', label: 'Galeri Foto', icon: Image, color: 'text-blue-600', bg: 'bg-blue-100', sub: 'Dokumentasi Kegiatan' },
  ],
};

interface AdminDashboardHomeProps {
  onNavigate: (page: PageRoute) => void;
  onLogout: () => void;
}

export const AdminDashboardHome: React.FC<AdminDashboardHomeProps> = ({ onNavigate, onLogout }) => {
  const [suratList, setSuratList] = useState<any[]>([]);
  const [laporanList, setLaporanList] = useState<any[]>([]);
  const [beritaList, setBeritaList] = useState<any[]>([]);
  const [umkmList, setUmkmList] = useState<any[]>([]);

  const loadData = () => {
    setSuratList((getStoredPengajuanSurat() || []).filter(Boolean));
    setLaporanList((getStoredLaporan() || []).filter(Boolean));
    setBeritaList((getStoredBerita() || []).filter(Boolean));
    setUmkmList((getStoredUMKM() || []).filter(Boolean));
  };

  useEffect(() => { loadData(); }, []);

  const handleQuickAction = (page: PageRoute) => {
    onNavigate(page);
  };

  const stats = [
    { 
      title: 'Pengajuan Surat Masuk', 
      value: suratList.length, 
      subtitle: `${suratList.filter(s => s && s.status === 'Diajukan').length} Perlu Verifikasi`,
      icon: <FileText className="w-5 h-5 text-emerald-600" />,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100',
    },
    { 
      title: 'Aspirasi & Pengaduan', 
      value: laporanList.length, 
      subtitle: `${laporanList.filter(l => l && l.status === 'Menunggu').length} Belum Diberi Tanggapan`,
      icon: <MessageSquare className="w-5 h-5 text-rose-600" />,
      color: 'text-rose-600',
      bgColor: 'bg-rose-100',
    },
    { 
      title: 'Artikel Berita Terbit', 
      value: beritaList.length, 
      subtitle: 'Publikasi Resmi Web Desa',
      icon: <Newspaper className="w-5 h-5 text-blue-600" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    { 
      title: 'Produk UMKM Terdaftar', 
      value: umkmList.length, 
      subtitle: 'Siap Promosi ke Pembeli',
      icon: <ShoppingBag className="w-5 h-5 text-amber-600" />,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
    },
  ];

  return (
    <AdminLayout
      activePage="admin-dashboard"
      onLogout={onLogout}
      onNavigate={onNavigate}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
              Ringkasan Statistik
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 font-['Playfair_Display',serif]">
              Dashboard Administrator
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Selamat datang di panel pengelolaan konten & administrasi Desa Warung Menteng
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition">
              Refresh Data
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-base font-extrabold text-slate-900">Aksi Cepat Pengelolaan</h3>
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => handleQuickAction('admin-pelayanan')}
              className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              <span>Proses Surat Masuk</span>
            </button>
            <button 
              onClick={() => handleQuickAction('admin-humas-press')}
              className="px-4 py-2.5 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Tulis Berita Baru</span>
            </button>
            <button 
              onClick={() => handleQuickAction('admin-potensi-umkm')}
              className="px-4 py-2.5 bg-amber-700 hover:bg-amber-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Daftarkan UMKM Baru</span>
            </button>
            <button 
              onClick={() => handleQuickAction('admin-humas-galeri')}
              className="px-4 py-2.5 bg-purple-700 hover:bg-purple-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah ke Galeri</span>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Surat */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-extrabold text-slate-900">Surat Terbaru</h3>
              <button className="text-xs text-emerald-700 font-bold hover:underline">Lihat Semua</button>
            </div>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {suratList.slice(0, 5).map((item: any) => (
                <div key={item.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-900 truncate">{item.nomorRegistrasi}</p>
                    <p className="text-[10px] text-slate-500 truncate">{item.namaPemohon} - {item.jenisSurat}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                    item.status === 'Selesai' ? 'bg-emerald-100 text-emerald-800' :
                    item.status === 'Diproses' ? 'bg-blue-100 text-blue-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
              {suratList.length === 0 && (
                <p className="text-center text-slate-500 text-xs py-4">Belum ada pengajuan surat</p>
              )}
            </div>
          </div>

          {/* Recent Laporan */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-extrabold text-slate-900">Aspirasi Terbaru</h3>
              <button className="text-xs text-emerald-700 font-bold hover:underline">Lihat Semua</button>
            </div>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {laporanList.slice(0, 5).map((item: any) => (
                <div key={item.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-rose-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-900 truncate">{item.judul}</p>
                    <p className="text-[10px] text-slate-500 truncate">{item.namaPelapor} - {item.kategori}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                    item.status === 'Selesai' ? 'bg-emerald-100 text-emerald-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
              {laporanList.length === 0 && (
                <p className="text-center text-slate-500 text-xs py-4">Belum ada aspirasi/pengaduan</p>
              )}
            </div>
          </div>
        </div>

        {/* System Info */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <h3 className="text-base font-extrabold text-slate-900 mb-4">Informasi Sistem</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="p-4 bg-slate-50 rounded-xl">
              <p className="text-xs text-slate-500">Versi Aplikasi</p>
              <p className="font-bold text-slate-900">Smart Village v2.1.0</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <p className="text-xs text-slate-500">Terakhir Update Data</p>
              <p className="font-bold text-slate-900">{new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <p className="text-xs text-slate-500">Storage</p>
              <p className="font-bold text-slate-900">LocalStorage (Client-side)</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};