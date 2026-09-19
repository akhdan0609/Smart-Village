import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X,
  Loader2,
  GraduationCap,
  BookOpen,
  Church,
  BarChart2,
  Download,
  Upload,
  Filter,
  Search,
} from 'lucide-react';
import { AdminLayout } from './AdminLayout';
import { FormModal } from './components/FormModal';
import { DataTable, Column } from './components/DataTable';
import { ImageUpload } from './components/ImageUpload';
import { PageRoute } from '../../types';
import { getCurrentAdmin } from '../../utils/storage';

const STORAGE_KEY = 'desa_wm_laporan_penduduk_v1';

interface DemographicData {
  id: string;
  kategori: 'umur' | 'pendidikan' | 'agama';
  label: string;
  lakiLaki: number;
  perempuan: number;
  total: number;
  createdAt: string;
  updatedAt: string;
}

const defaultData: DemographicData[] = [
  // Umur
  { id: 'umur-1', kategori: 'umur', label: '0-4 Tahun', lakiLaki: 120, perempuan: 115, total: 235, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-2', kategori: 'umur', label: '5-9 Tahun', lakiLaki: 135, perempuan: 128, total: 263, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-3', kategori: 'umur', label: '10-14 Tahun', lakiLaki: 142, perempuan: 138, total: 280, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-4', kategori: 'umur', label: '15-19 Tahun', lakiLaki: 130, perempuan: 125, total: 255, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-5', kategori: 'umur', label: '20-24 Tahun', lakiLaki: 110, perempuan: 118, total: 228, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-6', kategori: 'umur', label: '25-29 Tahun', lakiLaki: 105, perempuan: 112, total: 217, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-7', kategori: 'umur', label: '30-34 Tahun', lakiLaki: 98, perempuan: 102, total: 200, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-8', kategori: 'umur', label: '35-39 Tahun', lakiLaki: 92, perempuan: 95, total: 187, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-9', kategori: 'umur', label: '40-44 Tahun', lakiLaki: 85, perempuan: 88, total: 173, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-10', kategori: 'umur', label: '45-49 Tahun', lakiLaki: 78, perempuan: 82, total: 160, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-11', kategori: 'umur', label: '50-54 Tahun', lakiLaki: 70, perempuan: 75, total: 145, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-12', kategori: 'umur', label: '55-59 Tahun', lakiLaki: 62, perempuan: 68, total: 130, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-13', kategori: 'umur', label: '60-64 Tahun', lakiLaki: 55, perempuan: 60, total: 115, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-14', kategori: 'umur', label: '65-69 Tahun', lakiLaki: 48, perempuan: 52, total: 100, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-15', kategori: 'umur', label: '70-74 Tahun', lakiLaki: 38, perempuan: 45, total: 83, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-16', kategori: 'umur', label: '75+ Tahun', lakiLaki: 28, perempuan: 38, total: 66, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  // Pendidikan
  { id: 'pend-1', kategori: 'pendidikan', label: 'Tidak/Belum Sekolah', lakiLaki: 185, perempuan: 210, total: 395, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'pend-2', kategori: 'pendidikan', label: 'Belum Tamat SD', lakiLaki: 145, perempuan: 135, total: 280, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'pend-3', kategori: 'pendidikan', label: 'SD/Sederajat', lakiLaki: 285, perempuan: 265, total: 550, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'pend-4', kategori: 'pendidikan', label: 'SMP/Sederajat', lakiLaki: 180, perempuan: 175, total: 355, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'pend-5', kategori: 'pendidikan', label: 'SMA/Sederajat', lakiLaki: 165, perempuan: 170, total: 335, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'pend-6', kategori: 'pendidikan', label: 'Diploma I', lakiLaki: 16, perempuan: 16, total: 32, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'pend-7', kategori: 'pendidikan', label: 'Diploma II', lakiLaki: 19, perempuan: 19, total: 38, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'pend-8', kategori: 'pendidikan', label: 'Diploma III', lakiLaki: 12, perempuan: 13, total: 25, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'pend-9', kategori: 'pendidikan', label: 'Diploma IV', lakiLaki: 14, perempuan: 14, total: 28, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'pend-10', kategori: 'pendidikan', label: 'Sarjana', lakiLaki: 22, perempuan: 23, total: 45, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'pend-11', kategori: 'pendidikan', label: 'Magister', lakiLaki: 17, perempuan: 18, total: 35, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'pend-12', kategori: 'pendidikan', label: 'Dokter', lakiLaki: 12, perempuan: 13, total: 25, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  // Agama
  { id: 'agama-1', kategori: 'agama', label: 'Islam', lakiLaki: 1250, perempuan: 1280, total: 2530, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'agama-2', kategori: 'agama', label: 'Kristen Protestan', lakiLaki: 45, perempuan: 48, total: 93, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'agama-3', kategori: 'agama', label: 'Kristen Katolik', lakiLaki: 12, perempuan: 15, total: 27, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'agama-4', kategori: 'agama', label: 'Hindu', lakiLaki: 3, perempuan: 2, total: 5, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'agama-5', kategori: 'agama', label: 'Buddha', lakiLaki: 2, perempuan: 1, total: 3, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'agama-6', kategori: 'agama', label: 'Konghucu', lakiLaki: 1, perempuan: 1, total: 2, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'agama-7', kategori: 'agama', label: 'Lainnya', lakiLaki: 5, perempuan: 4, total: 9, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
];

const kategoriOptions = [
  { value: 'umur', label: 'Umur', icon: Users },
  { value: 'pendidikan', label: 'Pendidikan', icon: GraduationCap },
  { value: 'agama', label: 'Agama', icon: Church },
];

const umurLabels = [
  '0-4 Tahun', '5-9 Tahun', '10-14 Tahun', '15-19 Tahun', '20-24 Tahun',
  '25-29 Tahun', '30-34 Tahun', '35-39 Tahun', '40-44 Tahun', '45-49 Tahun',
  '50-54 Tahun', '55-59 Tahun', '60-64 Tahun', '65-69 Tahun', '70-74 Tahun', '75+ Tahun'
];

const pendidikanLabels = [
  'Tidak/Belum Sekolah', 'Belum Tamat SD', 'SD/Sederajat', 'SMP/Sederajat',
  'SMA/Sederajat', 'Diploma I', 'Diploma II', 'Diploma III', 'Diploma IV', 'Sarjana', 'Magister', 'Dokter'
];

const agamaLabels = [
  'Islam', 'Kristen Protestan', 'Kristen Katolik', 'Hindu', 'Buddha', 'Konghucu', 'Lainnya'
];

const getLabelOptions = (kategori: string) => {
  switch (kategori) {
    case 'umur': return umurLabels.map(l => ({ value: l, label: l }));
    case 'pendidikan': return pendidikanLabels.map(l => ({ value: l, label: l }));
    case 'agama': return agamaLabels.map(l => ({ value: l, label: l }));
    default: return [];
  }
};

const kategoriIcons = {
  umur: Users,
  pendidikan: GraduationCap,
  agama: Church,
};

const kategoriLabels = {
  umur: 'Jumlah Penduduk Menurut Umur',
  pendidikan: 'Jumlah Penduduk Menurut Pendidikan',
  agama: 'Jumlah Penduduk Menurut Agama',
};

interface LaporanPendudukAdminProps {
  onNavigate: (page: PageRoute) => void;
  onLogout: () => void;
}

export const LaporanPendudukAdmin: React.FC<LaporanPendudukAdminProps> = ({ onNavigate, onLogout }) => {
  const currentAdmin = getCurrentAdmin();
  const isContributor = currentAdmin?.role === 'admin_2';
  const canEdit = !isContributor;
  const canDelete = !isContributor;

  const [activeTab, setActiveTab] = useState<'umur' | 'pendidikan' | 'agama'>('umur');
  const [data, setData] = useState<DemographicData[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<DemographicData | null>(null);
  const [formData, setFormData] = useState<Partial<DemographicData>>({});
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setData(JSON.parse(stored));
      } else {
        setData(defaultData);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
      }
    } catch {
      setData(defaultData);
    }
    setShowModal(false);
    setEditingItem(null);
  }, []);

  const filteredData = data.filter(d => d.kategori === activeTab);

  const openAddModal = () => {
    if (!canEdit) return;
    setEditingItem(null);
    const nextId = `${activeTab}-${Date.now()}`;
    setFormData({
      id: nextId,
      kategori: activeTab,
      label: '',
      lakiLaki: 0,
      perempuan: 0,
      total: 0,
    });
    setShowModal(true);
  };

  const openEditModal = (item: DemographicData) => {
    if (!canEdit) return;
    setEditingItem(item);
    setFormData({ ...item });
    setShowModal(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canEdit) return;
    if (!formData.label || formData.lakiLaki === undefined || formData.perempuan === undefined) return;
    
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 500));
    
    const total = (formData.lakiLaki || 0) + (formData.perempuan || 0);
    const newItem = { ...formData, total, kategori: activeTab, updatedAt: new Date().toISOString() };

    if (editingItem) {
      newItem.id = editingItem.id;
      newItem.createdAt = editingItem.createdAt;
      newItem.updatedAt = new Date().toISOString();
      setData(prev => prev.map(item => item.id === editingItem.id ? newItem : item));
    } else {
      newItem.id = `${activeTab}-${Date.now()}`;
      newItem.createdAt = new Date().toISOString();
      newItem.updatedAt = new Date().toISOString();
      setData(prev => [newItem, ...prev]);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(
      editingItem 
        ? data.map(item => item.id === editingItem.id ? newItem : item)
        : [newItem, ...data]
    ));
    setShowModal(false);
    setEditingItem(null);
    setIsSaving(false);
  };

  const handleDelete = (item: DemographicData) => {
    if (!canDelete) return;
    if (confirm('Yakin ingin menghapus data ini?')) {
      setData(prev => prev.filter(i => i.id !== item.id));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data.filter((d: any) => d.id !== item.id)));
    }
  };

  const handleInputChange = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

const columns: Column<DemographicData>[] = [
    { key: 'label', header: 'Kategori', render: (item: any) => <div className="font-medium text-slate-900">{item.label}</div>, className: 'p-2' },
    { key: 'lakiLaki', header: 'Laki-laki', render: (item: any) => <div className="text-center text-sm font-semibold tabular-nums text-blue-600">{item.lakiLaki.toLocaleString()}</div>, className: 'text-center p-2', headerClassName: 'text-sm' },
    { key: 'perempuan', header: 'Perempuan', render: (item: any) => <div className="text-center text-sm font-semibold tabular-nums text-pink-600">{item.perempuan.toLocaleString()}</div>, className: 'text-center p-2', headerClassName: 'text-sm' },
    { key: 'total', header: 'Total', render: (item: any) => <div className="text-center text-sm font-bold tabular-nums text-slate-900">{item.total.toLocaleString()}</div>, className: 'text-center p-2', headerClassName: 'text-sm' },
  ];

  const formFields = [
    { key: 'label', label: 'Kategori', type: 'select', required: true, options: getLabelOptions(activeTab).map(o => ({ value: o.value, label: o.label })) },
    { key: 'lakiLaki', label: 'Jumlah Laki-laki', type: 'number', required: true, placeholder: '0' },
    { key: 'perempuan', label: 'Jumlah Perempuan', type: 'number', required: true, placeholder: '0' },
  ];

  const Icon = kategoriIcons[activeTab];
  const totalLaki = filteredData.reduce((sum, d) => sum + d.lakiLaki, 0);
  const totalPerempuan = filteredData.reduce((sum, d) => sum + d.perempuan, 0);
  const grandTotal = totalLaki + totalPerempuan;

  return (
    <AdminLayout
      activePage="admin-laporan-penduduk"
      onLogout={onLogout}
      onNavigate={onNavigate}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
              Laporan Kependudukan
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 font-['Playfair_Display',serif]">
              Laporan Penduduk Desa Warung Menteng
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Data kependudukan menurut umur, pendidikan, dan agama (disaggregasi gender)
            </p>
          </div>
          <button
            onClick={openAddModal}
            disabled={!canEdit}
            className={`px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${!canEdit ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Data</span>
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-blue-800 uppercase">Total Laki-laki</p>
                <p className="text-2xl font-black text-blue-900">{totalLaki.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="bg-pink-50 border border-pink-200 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-pink-800 uppercase">Total Perempuan</p>
                <p className="text-2xl font-black text-pink-900">{totalPerempuan.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <BarChart2 className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-800 uppercase">Total Keseluruhan</p>
                <p className="text-2xl font-black text-emerald-900">{grandTotal.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
          {(Object.keys(kategoriLabels) as Array<'umur' | 'pendidikan' | 'agama'>).map((tab) => {
            const Icon = kategoriIcons[tab];
            return (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setShowModal(false); }}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{kategoriLabels[tab]}</span>
              </button>
            );
          })}
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm">
<DataTable
              data={filteredData}
              columns={columns}
              keyField="id"
              onEdit={openEditModal}
              onDelete={handleDelete}
              canEdit={canEdit}
              canDelete={canDelete}
              searchable={true}
              searchFields={['label']}
              emptyMessage={`Belum ada data ${kategoriLabels[activeTab].toLowerCase()}`}
            />
          </div>

          {/* Total per kategori */}
          {filteredData.length > 0 && (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm mt-2 p-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Total {kategoriLabels[activeTab]}
                </span>
                <span className="text-xs font-semibold text-emerald-600">
                  {filteredData.reduce((sum, d) => sum + d.total, 0).toLocaleString()}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-blue-500">L:</span>
                <span className="text-blue-500 font-medium">
                  {filteredData.reduce((sum, d) => sum + d.lakiLaki, 0).toLocaleString()}
                </span>
                <span className="text-xs font-bold text-pink-400">P:</span>
                <span className="text-pink-400 font-medium">
                  {filteredData.reduce((sum, d) => sum + d.perempuan, 0).toLocaleString()}
                </span>
              </div>
            </div>
          )}

        {/* Modal */}
        <FormModal
          isOpen={showModal}
          onClose={() => { setShowModal(false); setEditingItem(null); }}
          onSubmit={handleSave}
          title={editingItem ? `Edit ${kategoriLabels[activeTab]}` : `Tambah ${kategoriLabels[activeTab]}`}
          isLoading={isSaving}
          size="lg"
        >
          <div className="space-y-5 max-h-[70vh] overflow-y-auto">
            {formFields.map((field) => (
              <div key={field.key} className={field.type === 'textarea' ? 'col-span-2' : ''}>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  {field.label} {field.required && <span className="text-rose-500">*</span>}
                </label>
                {field.type === 'select' ? (
                  <select
                    value={formData[field.key] || ''}
                    onChange={e => handleInputChange(field.key, e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  >
                    {field.options?.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                ) : field.type === 'number' ? (
                  <input
                    type="number"
                    min="0"
                    value={formData[field.key] || ''}
                    onChange={e => handleInputChange(field.key, parseInt(e.target.value) || 0)}
                    placeholder={field.placeholder}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                    required={field.required}
                  />
                ) : (
                  <input
                    type="text"
                    value={formData[field.key] || ''}
                    onChange={e => handleInputChange(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                    required={field.required}
                  />
                )}
              </div>
            ))}
          </div>
        </FormModal>
      </div>
    </AdminLayout>
  );
};