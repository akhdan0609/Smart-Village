import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Loader2, 
  X, 
  Save,
  MessageSquare,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  Mail,
} from 'lucide-react';
import { AdminLayout } from './AdminLayout';
import { DataTable, Column } from './components/DataTable';
import { FormModal } from './components/FormModal';
import { 
  getStoredPengajuanSurat, 
  updatePengajuanSurat,
  getCurrentAdmin
} from '../../utils/storage';
import { PageRoute, PengajuanSurat } from '../../types';
import { CoverEditor } from './components/CoverEditor';

const statusOptions = [
  { value: 'Diajukan', label: 'Diajukan', color: 'bg-amber-100 text-amber-800' },
  { value: 'Diproses', label: 'Diproses (Verifikasi Berkas)', color: 'bg-blue-100 text-blue-800' },
  { value: 'Selesai', label: 'Selesai (Siap Diambil / Diterbitkan)', color: 'bg-emerald-100 text-emerald-800' },
  { value: 'Ditolak', label: 'Ditolak (Berkas Tidak Lengkap)', color: 'bg-rose-100 text-rose-800' },
];

const statusColors: Record<string, string> = {
  'Diajukan': 'bg-amber-100 text-amber-800',
  'Diproses': 'bg-blue-100 text-blue-800',
  'Selesai': 'bg-emerald-100 text-emerald-800',
  'Ditolak': 'bg-rose-100 text-rose-800',
  'Verifikasi Berkas': 'bg-blue-100 text-blue-800',
  'Siap Diambil': 'bg-emerald-100 text-emerald-800',
};

interface PelayananAdminProps {
  onNavigate: (page: PageRoute) => void;
  onLogout: () => void;
}

export const PelayananAdmin: React.FC<PelayananAdminProps> = ({ onNavigate, onLogout }) => {
  const currentAdmin = getCurrentAdmin();
  const isContributor = currentAdmin?.role === 'admin_2';
  const canEdit = !isContributor;
  const canDelete = !isContributor;

  const [suratList, setSuratList] = useState<PengajuanSurat[]>([]);
  const [selectedSurat, setSelectedSurat] = useState<PengajuanSurat | null>(null);
  const [suratStatus, setSuratStatus] = useState<'Diajukan' | 'Diproses' | 'Selesai' | 'Ditolak'>('Diproses');
  const [suratCatatan, setSuratCatatan] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  useEffect(() => {
    const load = () => {
      setSuratList((getStoredPengajuanSurat() || []).filter(Boolean));
    };
    load();
    const interval = setInterval(load, 30000); // Auto refresh every 30s
    return () => clearInterval(interval);
  }, []);

  const filteredSurat = suratList.filter(item => {
    const matchesSearch = !searchTerm || 
      item.nomorRegistrasi?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.namaPemohon?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nik?.includes(searchTerm) ||
      item.jenisSurat?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleUpdateSurat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSurat || !canEdit) return;
    
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 500));
    
    updatePengajuanSurat(selectedSurat.id, {
      status: suratStatus,
      catatanPetugas: suratCatatan,
    });
    
    setSelectedSurat(null);
    setSuratCatatan('');
    setIsSaving(false);
  };

  const openModal = (item: PengajuanSurat) => {
    if (!canEdit) return;
    setSelectedSurat(item);
    setSuratStatus(item.status as any);
    setSuratCatatan(item.catatanPetugas || '');
  };

  const columns: Column<PengajuanSurat>[] = [
    { key: 'nomorRegistrasi', header: 'No. Registrasi', render: (item) => <span className="font-mono font-bold text-emerald-800">{item.nomorRegistrasi}</span> },
    { key: 'namaPemohon', header: 'Nama Pemohon & NIK', render: (item) => (
      <div>
        <div className="font-bold text-slate-900">{item.namaPemohon}</div>
        <div className="text-[10px] text-slate-400 font-mono">NIK: {item.nik}</div>
        <div className="text-[10px] text-slate-500">WA: {item.nomorWA || item.noWhatsApp || '-'}</div>
      </div>
    )},
    { key: 'jenisSurat', header: 'Jenis Surat' },
    { key: 'keperluan', header: 'Keperluan', render: (item) => <span className="max-w-xs truncate block">{item.keperluan}</span> },
    { key: 'tanggalPengajuan', header: 'Tanggal' },
    { key: 'status', header: 'Status', render: (item) => (
      <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold ${statusColors[item.status] || 'bg-slate-100 text-slate-800'}`}>
        {item.status}
      </span>
    )},
  ];

  return (
    <AdminLayout
      activePage="admin-pelayanan"
      onLogout={onLogout}
      onNavigate={onNavigate}
    >
      <div className="space-y-8">
        {/* Sampul Halaman Pelayanan */}
        <CoverEditor coverKey="pelayanan" onNavigate={onNavigate} />

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
              Kelola Pelayanan & Surat
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 font-['Playfair_Display',serif]">
              Manajemen Permohonan Surat Online
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Verifikasi, proses, dan kelola status pengajuan surat warga Desa Warung Menteng
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
              {suratList.length} Total Pengajuan
            </span>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-wrap gap-4">
            <div className="relative flex-1 min-w-[250px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari No. Registrasi, Nama, NIK, Jenis Surat..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
              />
            </div>
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold focus:ring-2 focus:ring-emerald-600 focus:bg-white min-w-[200px]"
            >
              <option value="all">Semua Status</option>
              {statusOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm">
          <DataTable
            data={filteredSurat}
            columns={columns}
            keyField="id"
            onEdit={canEdit ? openModal : undefined}
            canEdit={canEdit}
            canDelete={canDelete}
            searchable={false}
            emptyMessage="Tidak ada pengajuan surat yang sesuai filter"
          />
        </div>

        {/* Detail Modal */}
        {selectedSurat && (
          <FormModal
            isOpen={true}
            onClose={() => setSelectedSurat(null)}
            onSubmit={handleUpdateSurat}
            title="Tindak Lanjut Permohonan Surat"
            isLoading={isSaving}
            size="lg"
          >
            <div className="space-y-5">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="text-slate-500">No. Registrasi</p>
                    <p className="font-bold text-slate-900 font-mono">{selectedSurat.nomorRegistrasi}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Jenis Surat</p>
                    <p className="font-bold text-slate-900">{selectedSurat.jenisSurat}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">Nama Pemohon</p>
                    <p className="font-bold text-slate-900">{selectedSurat.namaPemohon}</p>
                  </div>
                  <div>
                    <p className="text-slate-500">NIK</p>
                    <p className="font-mono text-slate-700">{selectedSurat.nik}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-slate-500">Keperluan</p>
                    <p className="text-slate-700">{selectedSurat.keperluan}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-slate-500">Catatan Warga</p>
                    <p className="text-slate-700">{selectedSurat.keteranganTambahan || '-'}</p>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Ubah Status:</label>
                <select
                  value={suratStatus}
                  onChange={e => setSuratStatus(e.target.value as any)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                >
                  {statusOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
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
            </div>
          </FormModal>
        )}
      </div>
    </AdminLayout>
  );
};