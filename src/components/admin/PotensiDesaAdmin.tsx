import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  ShoppingBag, 
  Music, 
  Fish, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X,
  Loader2,
  Image as ImageIcon,
  MapPin,
  Star,
} from 'lucide-react';
import { AdminLayout } from './AdminLayout';
import { FormModal } from './components/FormModal';
import { TextEditor } from './components/TextEditor';
import { ImageUpload } from './components/ImageUpload';
import { DataTable, Column } from './components/DataTable';
import { PageRoute, DestinasiItem, UMKMItem, BudayaItem, PerikananItem } from '../../types';
import { getCurrentAdmin } from '../../utils/storage';
import { CoverEditor } from './components/CoverEditor';

const iconMap = {
  Building2,
  ShoppingBag,
  Music,
  Fish,
};

const STORAGE_KEYS = {
  akomodasi: 'desa_wm_akomodasi_v1',
  umkm: 'desa_wm_umkm_admin_v1',
  budaya: 'desa_wm_budaya_v1',
  budidaya: 'desa_wm_budidaya_v1',
};

const defaultAkomodasi: DestinasiItem[] = [
  { id: 'ako-1', nama: 'Homestay Gunung Salak', kategori: 'Wisata Alam', lokasi: 'Dusun Ciburial', jamBuka: '24 Jam', htm: 'Rp 250.000/malam', deskripsi: 'Homestay nyaman di kaki Gunung Salak dengan pemandangan mata air.', fasilitas: ['WiFi', 'Parkir', 'Makanan'], fotoUrl: '', kontakPengelola: '0812-3456-7890', rating: 4.8 },
  { id: 'ako-2', nama: 'Villa Menteng Asri', kategori: 'Rekreasi Keluarga', lokasi: 'Dusun Menteng', jamBuka: '24 Jam', htm: 'Rp 500.000/malam', deskripsi: 'Villa mewah dengan kolam renang dan taman luas.', fasilitas: ['Kolam Renang', 'WiFi', 'Parkir', 'Dapur'], fotoUrl: '', kontakPengelola: '0812-3456-7891', rating: 4.9 },
];

const defaultUMKM: UMKMItem[] = [
  { id: 'umkm-1', nama: 'Kopi Menteng Premium', kategori: 'makanan-minuman', kategoriLabel: 'Makanan & Minuman', pemilik: 'Bapak Surya', alamat: 'RT 01/RW 02, Dusun Menteng', harga: 'Rp 45.000/pack', deskripsi: 'Kopi arabika gunung Salak dengan rasa khas', kontakWA: '6281234567890', fotoUrl: '', rating: 4.8, unggulan: true },
  { id: 'umkm-2', nama: 'Kerajinan Bambu Menteng', kategori: 'kerajinan', kategoriLabel: 'Kerajinan', pemilik: 'Ibu Siti', alamat: 'RT 03/RW 01, Dusun Ciburial', harga: 'Rp 75.000 - 500.000', deskripsi: 'Kerajinan bambu tangan khas Sunda', kontakWA: '6281234567891', fotoUrl: '', rating: 4.7, unggulan: true },
];

const defaultBudaya: BudayaItem[] = [
  { id: 'bud-1', nama: 'Seren Taun Cijeruk', kategori: 'Tradisi & Ritual', waktuPelaksanaan: 'Setiap Tahun (Muharram)', deskripsi: 'Upacara syukur panen padi tradisional Sunda', fotoUrl: '', pelaku: 'Kelompok Adat Cijeruk' },
  { id: 'bud-2', nama: 'Seni Calung & Angklung', kategori: 'Seni Pertunjukan', waktuPelaksanaan: 'Setiap Acara Desa', deskripsi: 'Musik bambu tradisional khas Sunda Barat', fotoUrl: '', pelaku: 'Sanggar Seni Warung Menteng' },
];

const defaultBudidaya: PerikananItem[] = [
  { id: 'bud-1', namaKomoditas: 'Ikan Nila & Lele', namaKelompok: 'Kelompok Tani Mina Jaya', lokasiBudidaya: 'Dusun Ciburial', jenisKolam: 'Kolam Tarpaulin', kapasitasPanen: '500 kg/siklus', deskripsi: 'Budidaya ikan air tawar sistem bioflok', kontak: '0812-3456-7892', fotoUrl: '' },
  { id: 'bud-2', namaKomoditas: 'Ikan Mas & Gurame', namaKelompok: 'Kelompok Tani Sumber Rejeki', lokasiBudidaya: 'Dusun Menteng', jenisKolam: 'Kolam Beton', kapasitasPanen: '300 kg/siklus', deskripsi: 'Budidaya ikan konsumsi premium', kontak: '0812-3456-7893', fotoUrl: '' },
];

type TabType = 'akomodasi' | 'umkm' | 'budaya' | 'budidaya';

interface TabConfig {
  id: TabType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  storageKey: string;
  defaultData: any[];
  columns: Column<any>[];
  formFields: FormField[];
}

interface FormField {
  key: string;
  label: string;
  type: 'text' | 'select' | 'textarea' | 'number' | 'image' | 'tags';
  required?: boolean;
  options?: { value: string; label: string }[];
  placeholder?: string;
}

const tabConfigs: Record<TabType, TabConfig> = {
  akomodasi: {
    id: 'akomodasi',
    label: 'Akomodasi',
    icon: Building2,
    storageKey: STORAGE_KEYS.akomodasi,
    defaultData: defaultAkomodasi,
    columns: [
      { key: 'fotoUrl', header: 'Foto', render: (item: any) => item.fotoUrl ? <img src={item.fotoUrl} alt={item.nama} className="w-16 h-16 object-cover rounded-lg" /> : <span className="text-slate-400 text-xs">No Image</span> },
      { key: 'nama', header: 'Nama', render: (item: any) => <div className="font-bold text-slate-900">{item.nama}</div> },
      { key: 'kategori', header: 'Kategori' },
      { key: 'lokasi', header: 'Lokasi', render: (item: any) => <div className="flex items-center gap-1 text-slate-600"><MapPin className="w-3 h-3" />{item.lokasi}</div> },
      { key: 'htm', header: 'HTM' },
      { key: 'rating', header: 'Rating', render: (item: any) => <div className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />{item.rating}</div> },
    ],
    formFields: [
      { key: 'nama', label: 'Nama Akomodasi', type: 'text', required: true, placeholder: 'Homestay Gunung Salak' },
      { key: 'kategori', label: 'Kategori', type: 'select', required: true, options: [
        { value: 'Wisata Alam', label: 'Wisata Alam' },
        { value: 'Agrowisata', label: 'Agrowisata' },
        { value: 'Budaya & Religi', label: 'Budaya & Religi' },
        { value: 'Rekreasi Keluarga', label: 'Rekreasi Keluarga' },
      ]},
      { key: 'lokasi', label: 'Lokasi', type: 'text', required: true, placeholder: 'Dusun Ciburial' },
      { key: 'jamBuka', label: 'Jam Buka', type: 'text', placeholder: '24 Jam' },
      { key: 'htm', label: 'HTM/Harga', type: 'text', placeholder: 'Rp 250.000/malam' },
      { key: 'deskripsi', label: 'Deskripsi', type: 'textarea', required: true, placeholder: 'Deskripsi lengkap...' },
      { key: 'fasilitas', label: 'Fasilitas (pisahkan dengan koma)', type: 'tags', placeholder: 'WiFi, Parkir, Kolam Renang' },
      { key: 'kontakPengelola', label: 'Kontak Pengelola', type: 'text', placeholder: '0812-3456-7890' },
      { key: 'rating', label: 'Rating', type: 'number', placeholder: '4.8' },
      { key: 'fotoUrl', label: 'Gambar', type: 'image' },
    ],
  },
  umkm: {
    id: 'umkm',
    label: 'UMKM',
    icon: ShoppingBag,
    storageKey: STORAGE_KEYS.umkm,
    defaultData: defaultUMKM,
    columns: [
      { key: 'fotoUrl', header: 'Foto', render: (item: any) => item.fotoUrl ? <img src={item.fotoUrl} alt={item.nama} className="w-16 h-16 object-cover rounded-lg" /> : <span className="text-slate-400 text-xs">No Image</span> },
      { key: 'nama', header: 'Nama Produk', render: (item: any) => <div className="font-bold text-slate-900">{item.nama}</div> },
      { key: 'kategoriLabel', header: 'Kategori' },
      { key: 'pemilik', header: 'Pemilik' },
      { key: 'harga', header: 'Harga' },
      { key: 'rating', header: 'Rating', render: (item: any) => <div className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />{item.rating}</div> },
      { key: 'unggulan', header: 'Unggulan', render: (item: any) => item.unggulan ? <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs rounded-full">Ya</span> : <span className="text-slate-400 text-xs">Tidak</span> },
    ],
    formFields: [
      { key: 'nama', label: 'Nama Produk', type: 'text', required: true, placeholder: 'Kopi Menteng Premium' },
      { key: 'kategori', label: 'Kategori', type: 'select', required: true, options: [
        { value: 'makanan-minuman', label: 'Makanan & Minuman' },
        { value: 'kerajinan', label: 'Kerajinan' },
        { value: 'produk-lainnya', label: 'Produk Lokal Lainnya' },
      ]},
      { key: 'pemilik', label: 'Nama Pemilik', type: 'text', required: true, placeholder: 'Bapak Surya' },
      { key: 'alamat', label: 'Alamat', type: 'text', required: true, placeholder: 'RT 01/RW 02, Dusun Menteng' },
      { key: 'harga', label: 'Harga', type: 'text', required: true, placeholder: 'Rp 45.000/pack' },
      { key: 'deskripsi', label: 'Deskripsi Produk', type: 'textarea', required: true, placeholder: 'Keunggulan produk, bahan baku, rasa...' },
      { key: 'kontakWA', label: 'No. WhatsApp (62xxx)', type: 'text', placeholder: '6281234567890' },
      { key: 'rating', label: 'Rating', type: 'number', placeholder: '4.8' },
      { key: 'unggulan', label: 'Produk Unggulan', type: 'select', options: [{ value: 'true', label: 'Ya' }, { value: 'false', label: 'Tidak' }] },
      { key: 'fotoUrl', label: 'Gambar Produk', type: 'image' },
    ],
  },
  budaya: {
    id: 'budaya',
    label: 'Budaya & Adat',
    icon: Music,
    storageKey: STORAGE_KEYS.budaya,
    defaultData: defaultBudaya,
    columns: [
      { key: 'fotoUrl', header: 'Foto', render: (item: any) => item.fotoUrl ? <img src={item.fotoUrl} alt={item.nama} className="w-16 h-16 object-cover rounded-lg" /> : <span className="text-slate-400 text-xs">No Image</span> },
      { key: 'nama', header: 'Nama Kegiatan', render: (item: any) => <div className="font-bold text-slate-900">{item.nama}</div> },
      { key: 'kategori', header: 'Kategori' },
      { key: 'waktuPelaksanaan', header: 'Waktu Pelaksanaan' },
      { key: 'pelaku', header: 'Pelaku/Pengelola' },
    ],
    formFields: [
      { key: 'nama', label: 'Nama Kegiatan/Budaya', type: 'text', required: true, placeholder: 'Seren Taun Cijeruk' },
      { key: 'kategori', label: 'Kategori', type: 'select', required: true, options: [
        { value: 'Tradisi & Ritual', label: 'Tradisi & Ritual' },
        { value: 'Seni Pertunjukan', label: 'Seni Pertunjukan' },
        { value: 'Bela Diri Tradisional', label: 'Bela Diri Tradisional' },
        { value: 'Kearifan Lokal', label: 'Kearifan Lokal' },
      ]},
      { key: 'waktuPelaksanaan', label: 'Waktu Pelaksanaan', type: 'text', required: true, placeholder: 'Setiap Tahun (Muharram)' },
      { key: 'deskripsi', label: 'Deskripsi', type: 'textarea', required: true, placeholder: 'Deskripsi lengkap tradisi/budaya...' },
      { key: 'pelaku', label: 'Pelaku/Pengelola', type: 'text', required: true, placeholder: 'Kelompok Adat Cijeruk' },
      { key: 'fotoUrl', label: 'Gambar', type: 'image' },
    ],
  },
  budidaya: {
    id: 'budidaya',
    label: 'Budidaya',
    icon: Fish,
    storageKey: STORAGE_KEYS.budidaya,
    defaultData: defaultBudidaya,
    columns: [
      { key: 'fotoUrl', header: 'Foto', render: (item: any) => item.fotoUrl ? <img src={item.fotoUrl} alt={item.namaKomoditas} className="w-16 h-16 object-cover rounded-lg" /> : <span className="text-slate-400 text-xs">No Image</span> },
      { key: 'namaKomoditas', header: 'Komoditas', render: (item: any) => <div className="font-bold text-slate-900">{item.namaKomoditas}</div> },
      { key: 'namaKelompok', header: 'Kelompok Tani' },
      { key: 'lokasiBudidaya', header: 'Lokasi', render: (item: any) => <div className="flex items-center gap-1 text-slate-600"><MapPin className="w-3 h-3" />{item.lokasiBudidaya}</div> },
      { key: 'jenisKolam', header: 'Jenis Kolam' },
      { key: 'kapasitasPanen', header: 'Kapasitas Panen' },
    ],
    formFields: [
      { key: 'namaKomoditas', label: 'Nama Komoditas', type: 'text', required: true, placeholder: 'Ikan Nila & Lele' },
      { key: 'namaKelompok', label: 'Nama Kelompok Tani', type: 'text', required: true, placeholder: 'Kelompok Tani Mina Jaya' },
      { key: 'lokasiBudidaya', label: 'Lokasi Budidaya', type: 'text', required: true, placeholder: 'Dusun Ciburial' },
      { key: 'jenisKolam', label: 'Jenis Kolam', type: 'select', required: true, options: [
        { value: 'Kolam Tarpaulin', label: 'Kolam Tarpaulin' },
        { value: 'Kolam Beton', label: 'Kolam Beton' },
        { value: 'Kolam Tanah', label: 'Kolam Tanah' },
        { value: 'Bioflok', label: 'Sistem Bioflok' },
      ]},
      { key: 'kapasitasPanen', label: 'Kapasitas Panen', type: 'text', required: true, placeholder: '500 kg/siklus' },
      { key: 'deskripsi', label: 'Deskripsi', type: 'textarea', required: true, placeholder: 'Detail budidaya, sistem, target pasar...' },
      { key: 'kontak', label: 'Kontak', type: 'text', placeholder: '0812-3456-7892' },
      { key: 'fotoUrl', label: 'Gambar', type: 'image' },
    ],
  },
};

interface PotensiDesaAdminProps {
  onNavigate: (page: PageRoute) => void;
  onLogout: () => void;
}

export const PotensiDesaAdmin: React.FC<PotensiDesaAdminProps> = ({ onNavigate, onLogout }) => {
  const currentAdmin = getCurrentAdmin();
  const isContributor = currentAdmin?.role === 'admin_2';
  const canEdit = !isContributor;
  const canDelete = !isContributor;

  const [activeTab, setActiveTab] = useState<TabType>('akomodasi');
  const [data, setData] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const config = tabConfigs[activeTab];

  useEffect(() => {
    try {
      const stored = localStorage.getItem(config.storageKey);
      if (stored) {
        setData(JSON.parse(stored));
      } else {
        setData(config.defaultData);
        localStorage.setItem(config.storageKey, JSON.stringify(config.defaultData));
      }
    } catch {
      setData(config.defaultData);
    }
    setShowModal(false);
    setEditingItem(null);
  }, [activeTab]);

  const openAddModal = () => {
    if (!canEdit) return;
    setEditingItem(null);
    const emptyForm: Record<string, any> = {};
    config.formFields.forEach(f => {
      emptyForm[f.key] = f.type === 'select' && f.options ? f.options[0].value : 
                        f.type === 'number' ? 0 : 
                        f.type === 'tags' ? '' : '';
    });
    setFormData(emptyForm);
    setImagePreview(null);
    setShowModal(true);
  };

  const openEditModal = (item: any) => {
    if (!canEdit) return;
    setEditingItem(item);
    const formData: Record<string, any> = {};
    config.formFields.forEach(f => {
      formData[f.key] = item[f.key] || '';
    });
    // Special handling for tags
    if (item.fasilitas && Array.isArray(item.fasilitas)) {
      formData.fasilitas = item.fasilitas.join(', ');
    }
    setFormData(formData);
    setImagePreview(item.fotoUrl || null);
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!canEdit) return;
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 500));
    
    let newItem = { ...formData };
    if (imagePreview) newItem.fotoUrl = imagePreview;
    
    // Convert tags string to array
    if (newItem.fasilitas && typeof newItem.fasilitas === 'string') {
      newItem.fasilitas = newItem.fasilitas.split(',').map((s: string) => s.trim()).filter(Boolean);
    }
    if (newItem.unggulan) {
      newItem.unggulan = newItem.unggulan === 'true' || newItem.unggulan === true;
    }

    if (editingItem) {
      setData(prev => prev.map(item => item.id === editingItem.id ? { ...item, ...newItem, updatedAt: new Date().toISOString() } : item));
    } else {
      newItem.id = `${activeTab}-${Date.now()}`;
      newItem.createdAt = new Date().toISOString();
      newItem.updatedAt = new Date().toISOString();
      setData(prev => [newItem, ...prev]);
    }

    localStorage.setItem(config.storageKey, JSON.stringify(data.map(d => d.id === editingItem?.id ? { ...d, ...newItem, updatedAt: new Date().toISOString() } : d).filter(Boolean)));
    setShowModal(false);
    setEditingItem(null);
    setIsSaving(false);
  };

  const handleDelete = (id: string) => {
    if (!canDelete) return;
    if (confirm('Yakin ingin menghapus data ini?')) {
      setData(prev => prev.filter(item => item.id !== id));
      localStorage.setItem(config.storageKey, JSON.stringify(data.filter((d: any) => d.id !== id)));
    }
  };

  const handleInputChange = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    if (key === 'fotoUrl') setImagePreview(value);
  };

  return (
    <AdminLayout
      activePage={`admin-potensi-${activeTab}`}
      onLogout={onLogout}
      onNavigate={onNavigate}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
              Kelola Potensi Desa
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 font-['Playfair_Display',serif]">
              {config.label}
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              CRUD data {config.label.toLowerCase()} untuk tampilan website publik
            </p>
          </div>
          <button
            onClick={openAddModal}
            className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah {config.label}</span>
          </button>
        </div>

{/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
          {(Object.keys(tabConfigs) as TabType[]).map((tab) => {
            const Icon = iconMap[tabConfigs[tab].icon.displayName || 'Building2'] || Building2;
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
                <span>{tabConfigs[tab].label}</span>
              </button>
            );
          })}
        </div>

        {/* Sampul Halaman per kategori */}
        <CoverEditor
          coverKey={activeTab === 'akomodasi' ? 'potensi-akomodasi' : activeTab === 'umkm' ? 'potensi-umkm' : activeTab === 'budaya' ? 'potensi-budaya' : 'potensi-budidaya'}
          onNavigate={onNavigate}
        />

        {/* Data Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm">
          <DataTable
            data={data}
            columns={config.columns}
            keyField="id"
            onEdit={openEditModal}
            onDelete={handleDelete}
            canEdit={canEdit}
            canDelete={canDelete}
            searchable={true}
            searchFields={config.formFields.filter(f => f.type !== 'image' && f.type !== 'tags').map(f => f.key)}
            emptyMessage={`Belum ada data ${config.label.toLowerCase()}`}
          />
        </div>

        {/* Modal */}
        <FormModal
          isOpen={showModal}
          onClose={() => { setShowModal(false); setEditingItem(null); }}
          onSubmit={handleSave}
          title={editingItem ? `Edit ${config.label}` : `Tambah ${config.label}`}
          isLoading={isSaving}
          size="xl"
        >
          <div className="space-y-5 max-h-[70vh] overflow-y-auto">
            {config.formFields.map((field) => (
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
                  <TextEditor
                    value={formData[field.key] || ''}
                    onChange={v => handleInputChange(field.key, v)}
                    placeholder={field.placeholder}
                    rows={8}
                  />
                ) : field.type === 'tags' ? (
                  <input
                    type="text"
                    value={formData[field.key] || ''}
                    onChange={e => handleInputChange(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                ) : field.type === 'number' ? (
                  <input
                    type="number"
                    step="0.1"
                    value={formData[field.key] || ''}
                    onChange={e => handleInputChange(field.key, parseFloat(e.target.value) || 0)}
                    placeholder={field.placeholder}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
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