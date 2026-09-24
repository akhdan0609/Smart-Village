import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X,
  Loader2,
  Image as ImageIcon,
  Shield,
  MapPin,
  User,
  Clock,
} from 'lucide-react';
import { AdminLayout } from './AdminLayout';
import { FormModal } from './components/FormModal';
import { ImageUpload } from './components/ImageUpload';
import { DataTable, Column } from './components/DataTable';
import { PageRoute } from '../../types';
import { getStoredKontakDarurat, saveKontakDarurat, deleteKontakDarurat, getCurrentAdmin } from '../../utils/storage';
import { CoverEditor } from './components/CoverEditor';

interface KontakDaruratItem {
  id: string;
  namaKontak: string;
  instansi: string;
  kategori: string;
  nomorTelepon: string;
  nomorWA: string;
  alamatPos: string;
  siaga: string;
  namaPetugas: string;
  deskripsi: string;
  fotoUrl: string;
  createdAt: string;
  updatedAt: string;
}

const defaultKontak: KontakDaruratItem[] = [
  { 
    id: 'kontak-1', 
    namaKontak: 'Ambulans', 
    instansi: 'Puskesmas Cijeruk', 
    kategori: 'Kesehatan', 
    nomorTelepon: '119', 
    nomorWA: '6281234567890', 
    alamatPos: 'Jl. Raya Cijeruk No. 1', 
    siaga: '24 Jam', 
    namaPetugas: 'Bidan Siti', 
    deskripsi: 'Layanan ambulans 24 jam untuk desa dan sekitarnya', 
    fotoUrl: '', 
    createdAt: new Date().toISOString(), 
    updatedAt: new Date().toISOString() 
  },
  { 
    id: 'kontak-2', 
    namaKontak: 'Polisi', 
    instansi: 'Polsek Cijeruk', 
    kategori: 'Keamanan', 
    nomorTelepon: '110', 
    nomorWA: '6281234567891', 
    alamatPos: 'Jl. Raya Cijeruk No. 10', 
    siaga: '24 Jam', 
    namaPetugas: 'Bripka Budi', 
    deskripsi: 'Pos polisi terdekat untuk pengaduan keamanan', 
    fotoUrl: '', 
    createdAt: new Date().toISOString(), 
    updatedAt: new Date().toISOString() 
  },
  { 
    id: 'kontak-3', 
    namaKontak: 'Damkar', 
    instansi: 'Damkar Bogor', 
    kategori: 'Kebakaran', 
    nomorTelepon: '113', 
    nomorWA: '6281234567892', 
    alamatPos: 'Jl. Raya Bogor No. 50', 
    siaga: '24 Jam', 
    namaPetugas: 'Plt. Danton', 
    deskripsi: 'Pemadam kebakaran wilayah Bogor', 
    fotoUrl: '', 
    createdAt: new Date().toISOString(), 
    updatedAt: new Date().toISOString() 
  },
];

const STORAGE_KEY = 'desa_wm_kontak_darurat_v1';

const kategoriOptions = ['Kesehatan', 'Keamanan', 'Kebakaran', 'Bencana', 'Lainnya'];
const siagaOptions = ['24 Jam', 'Jam Kerja', 'Khusus Malam', 'Libur'];

interface KontakDaruratAdminProps {
  onNavigate: (page: PageRoute) => void;
  onLogout: () => void;
}

export const KontakDaruratAdmin: React.FC<KontakDaruratAdminProps> = ({ onNavigate, onLogout }) => {
  const currentAdmin = getCurrentAdmin();
  const isContributor = currentAdmin?.role === 'admin_2';
  const canEdit = !isContributor;
  const canDelete = !isContributor;

  const [data, setData] = useState<KontakDaruratItem[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<KontakDaruratItem | null>(null);
  const [formData, setFormData] = useState<Partial<KontakDaruratItem>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setData(JSON.parse(stored));
      } else {
        setData(defaultKontak);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultKontak));
      }
    } catch {
      setData(defaultKontak);
    }
    setShowModal(false);
    setEditingItem(null);
  }, []);

  const openAddModal = () => {
    if (!canEdit) return;
    setEditingItem(null);
    setFormData({
      namaKontak: '',
      instansi: '',
      kategori: 'Kesehatan',
      nomorWA: '',
      siaga: '24 Jam',
      fotoUrl: '',
    });
    setImagePreview(null);
    setShowModal(true);
  };

  const openEditModal = (item: KontakDaruratItem) => {
    if (!canEdit) return;
    setEditingItem(item);
    setFormData({ ...item });
    setImagePreview(item.fotoUrl || null);
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!canEdit) return;
    if (!formData.namaKontak || !formData.instansi) return;
    
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 500));
    
    let newItem = { ...formData };
    if (imagePreview) newItem.fotoUrl = imagePreview;

    if (editingItem) {
      newItem.id = editingItem.id;
      newItem.createdAt = editingItem.createdAt;
      newItem.updatedAt = new Date().toISOString();
      setData(prev => prev.map(item => item.id === editingItem.id ? newItem : item));
    } else {
      newItem.id = `kontak-${Date.now()}`;
      newItem.createdAt = new Date().toISOString();
      newItem.updatedAt = new Date().toISOString();
      setData(prev => [newItem, ...prev]);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    setShowModal(false);
    setEditingItem(null);
    setIsSaving(false);
  };

  const handleDelete = (item: KontakDaruratItem) => {
    if (!canDelete) return;
    if (confirm('Yakin ingin menghapus kontak darurat ini?')) {
      setData(prev => prev.filter(i => i.id !== item.id));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data.filter((d: any) => d.id !== item.id)));
    }
  };

  const handleInputChange = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    if (key === 'fotoUrl') setImagePreview(value);
  };

  const columns: Column<KontakDaruratItem>[] = [
    { key: 'fotoUrl', header: 'Foto', render: (item: any) => item.fotoUrl ? <img src={item.fotoUrl} alt={item.namaKontak} className="w-16 h-16 object-cover rounded-lg" /> : <span className="text-slate-400 text-xs">No Image</span> },
    { key: 'namaKontak', header: 'Nama Kontak', render: (item: any) => <div className="font-bold text-slate-900">{item.namaKontak}</div> },
    { key: 'instansi', header: 'Instansi' },
    { key: 'kategori', header: 'Kategori', render: (item: any) => <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs rounded">{item.kategori}</span> },
    { key: 'nomorTelepon', header: 'Telepon' },
    { key: 'nomorWA', header: 'WhatsApp', render: (item: any) => <span className="font-mono text-emerald-700">{item.nomorWA}</span> },
    { key: 'siaga', header: 'Siaga', render: (item: any) => <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-xs rounded">{item.siaga}</span> },
  ];

  const formFields = [
    { key: 'namaKontak', label: 'Nama Kontak', type: 'text', required: true, placeholder: 'Ambulans / Polisi / Damkar' },
    { key: 'instansi', label: 'Instansi', type: 'text', required: true, placeholder: 'Puskesmas / Polsek / Damkar' },
    { key: 'kategori', label: 'Kategori', type: 'select', required: true, options: kategoriOptions.map(c => ({ value: c, label: c })) },
    { key: 'nomorWA', label: 'Nomor WhatsApp (62xxx)', type: 'text', placeholder: '6281234567890' },
    { key: 'siaga', label: 'Jam Siaga', type: 'select', required: true, options: siagaOptions.map(c => ({ value: c, label: c })) },
    { key: 'fotoUrl', label: 'Gambar / Logo', type: 'image' },
  ];

  const newData = editingItem 
    ? data.map(item => item.id === editingItem.id ? { ...item, ...formData, updatedAt: new Date().toISOString() } : item)
    : [formData as KontakDaruratItem, ...data];

  return (
    <AdminLayout
      activePage="admin-kontak-darurat"
      onLogout={onLogout}
      onNavigate={onNavigate}
    >
      <div className="space-y-8">
        {/* Sampul Halaman Kontak Darurat */}
        <CoverEditor coverKey="darurat" onNavigate={onNavigate} />

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
              Kelola Kontak Darurat
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 font-['Playfair_Display',serif]">
              Kontak Darurat Desa
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              CRUD data nomor darurat untuk website publik (Ambulans, Polisi, Damkar, dll)
            </p>
          </div>
          <button
            onClick={openAddModal}
            className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Kontak Darurat</span>
          </button>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm">
          <DataTable
            data={data}
            columns={columns}
            keyField="id"
            onEdit={openEditModal}
            onDelete={handleDelete}
            canEdit={canEdit}
            canDelete={canDelete}
            searchable={true}
            searchFields={['namaKontak', 'instansi', 'kategori', 'nomorTelepon', 'nomorWA']}
            emptyMessage="Belum ada data kontak darurat"
          />
        </div>

        {/* Modal */}
        <FormModal
          isOpen={showModal}
          onClose={() => { setShowModal(false); setEditingItem(null); }}
          onSubmit={handleSave}
          title={editingItem ? 'Edit Kontak Darurat' : 'Tambah Kontak Darurat Baru'}
          isLoading={isSaving}
          size="xl"
        >
          <div className="space-y-5 max-h-[70vh] overflow-y-auto">
            {formFields.map((field) => (
              <div key={field.key} className={field.type === 'textarea' ? 'col-span-2' : ''}>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  {field.label} {field.required && <span className="text-rose-500">*</span>}
                </label>
                {field.type === 'image' ? (
                  <ImageUpload
                    label=""
                    value={formData[field.key] || ''}
                    onChange={(v) => handleInputChange(field.key, v)}
                    previewSize="sm"
                  />
                ) : field.type === 'select' ? (
                  <select
                    value={formData[field.key] || ''}
                    onChange={e => handleInputChange(field.key, e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  >
                    {field.options?.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                ) : field.type === 'textarea' ? (
                  <textarea
                    value={formData[field.key] || ''}
                    onChange={e => handleInputChange(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    rows={4}
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