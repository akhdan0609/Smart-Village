import React, { useState, useEffect } from 'react';
import { 
  Newspaper, 
  Image, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X,
  Loader2,
  Eye,
  Download,
  Calendar,
  FileText,
  Tag,
} from 'lucide-react';
import { AdminLayout } from './AdminLayout';
import { FormModal } from './components/FormModal';
import { TextEditor } from './components/TextEditor';
import { ImageUpload } from './components/ImageUpload';
import { DataTable, Column } from './components/DataTable';
import { PageRoute, PengumumanItem, BeritaItem } from '../../types';
import { getStoredBerita, saveBerita, updateBerita, deleteBerita, getStoredPengumuman, savePengumuman, updatePengumuman, deletePengumuman, getCurrentAdmin } from '../../utils/storage';

const pressCategories = ['Pengumuman Resmi', 'Kebijakan Desa', 'Acara & Kegiatan', 'Penghargaan', 'Lainnya'];

const defaultPress: PengumumanItem[] = [
  { id: 'press-1', nomorSurat: 'PR/01/WM/PEM/VII/2024', judul: 'Launching Website Desa Warung Menteng: Inovasi Digital Layanan Publik Berbasis Transparansi', tanggal: '15 Juli 2024', berlakuHingga: '31 Desember 2024', kategori: 'Pemerintahan', isi: 'Pemerintah Desa Warung Menteng resmi meluncurkan website resmi desa (www.warungmenteng.desa.id) sebagai wujud komitmen transparansi dan kemudahan akses layanan publik bagi masyarakat. Website dilengkapi fitur pengajuan surat keterangan online, tracking status permohonan real-time, e-formulir administrasi kependudukan, hingga portal transparansi anggaran desa (APBDes) yang terbuka untuk diakses publik.', lampiran: 'Surat_Keputusan_Kades_No_001_Tahun_2024_Tentang_Launching_Website.pdf', penanggungJawab: 'Kepala Desa Warung Menteng' },
  { id: 'press-2', nomorSurat: 'PR/02/WM/KEM/VIII/2024', judul: 'Pembukaan dan Penutupan Kegiatan KKN Mahasiswa: Kolaborasi Akademisi dan Masyarakat Membangun Keberdayaan Desa', tanggal: '15 Agustus 2024', berlakuHingga: '31 Agustus 2024', kategori: 'Keberdayaan Masyarakat', isi: 'Kegiatan KKN Mahasiswa Universitas Nasional bertempat di Desa Warung Menteng berhasil dilaksanakan dengan program unggulan pemberdayaan masyarakat, pembangunan infrastruktur, dan peningkatan kapasitas SDM desa. Program difokuskan pada tiga pilar: (1) Pemberdayaan Ekonomi Masyarakat, (2) Peningkatan Kapasitas SDM melalui literasi digital, (3) Pembangunan Infrastruktur pendukung kesejahteraan.', lampiran: 'Laporan_Akhir_KKN_Periode_Juli_Agustus_2024.pdf', penanggungJawab: 'Kaur Kesejahteraan & Keberdayaan Masyarakat' },
  { id: 'press-3', nomorSurat: 'PR/03/WM/KEG/VIII/2024', judul: 'Pekan Olahraga Desa Warung Menteng 2024: Semangat Olahraga Mengukuhkan Silaturahmi dan Kesehatan Masyarakat', tanggal: '25 Agustus 2024', berlakuHingga: '31 Agustus 2024', kategori: 'Kegiatan Desa', isi: 'Pekan Olahraga Desa (PORDES) 2024 digelar meriah dengan partisipasi 500+ warga seluruh dusun, meliputi cabang sepak bola, voli, badminton, lari estafet, dan lomba tradisional egrang dan tarik tambang. Acara berlangsung 3 hari (26-28 Agustus 2024) dengan 12 tim mewakili 6 dusun.', lampiran: 'Surat_Keputusan_Kades_No_012_Tahun_2024_Tentang_PORDES_2024.pdf', penanggungJawab: 'Sekretaris Desa Warung Menteng' },
];

const defaultGaleri: BeritaItem[] = [
  { id: 'gal-1', judul: 'Gotong Royong Bersama Warga', slug: 'gotong-royong-warga', kategori: 'Kegiatan Warga', ringkasan: 'Warga Dusun Menteng melakukan kebersihan lingkungan', isiLengkap: '<p>Kegiatan gotong royong rutin setiap hari Minggu...</p>', fotoUrl: '', tanggal: '15 Januari 2024', penulis: 'Admin Humas', dibaca: 124, tags: ['gotong royong', 'kegiatan warga'] },
  { id: 'gal-2', judul: 'Panen Raya Ikan Nila Kelompok Mina Jaya', slug: 'panen-ikan-nila', kategori: 'Pembangunan', ringkasan: 'Hasil panen 500kg ikan nila dari kolam bioflok', isiLengkap: '<p>Kelompok Tani Mina Jaya berhasil memanen...</p>', fotoUrl: '', tanggal: '20 Februari 2024', penulis: 'Admin Humas', dibaca: 89, tags: ['budidaya', 'perikanan', 'panen'] },
];

type HumasTab = 'press' | 'galeri';

interface HumasAdminProps {
  onNavigate: (page: PageRoute) => void;
  onLogout: () => void;
}

export const HumasAdmin: React.FC<HumasAdminProps> = ({ onNavigate, onLogout }) => {
  const currentAdmin = getCurrentAdmin();
  const isContributor = currentAdmin?.role === 'admin_2';
  const canEdit = !isContributor;
  const canDelete = !isContributor;

  const [activeTab, setActiveTab] = useState<HumasTab>('press');
  const [pressList, setPressList] = useState<PengumumanItem[]>([]);
  const [galeriList, setGaleriList] = useState<BeritaItem[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (activeTab === 'press') {
      setPressList(getStoredPengumuman() || defaultPress);
    } else {
      setGaleriList(getStoredBerita().filter(b => ['Kegiatan Warga', 'Pembangunan', 'Tradisi & Budaya', 'Wisata & Alam'].includes(b.kategori)) || defaultGaleri);
    }
    setShowModal(false);
    setEditingItem(null);
  }, [activeTab]);

  const openAddModal = () => {
    if (!canEdit) return;
    setEditingItem(null);
    const emptyForm: Record<string, any> = {
      kategori: activeTab === 'press' ? 'Pengumuman Resmi' : 'Kegiatan Warga',
      status: 'published',
    };
    setFormData(emptyForm);
    setImagePreview(null);
    setShowModal(true);
  };

  const openEditModal = (item: any) => {
    if (!canEdit) return;
    setEditingItem(item);
    setFormData({ ...item });
    setImagePreview(item.fotoUrl || item.lampiran || null);
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!canEdit) return;
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 500));
    
    let newItem = { ...formData };
    if (imagePreview) {
      if (activeTab === 'press') newItem.lampiran = imagePreview;
      else newItem.fotoUrl = imagePreview;
    }

    if (activeTab === 'press') {
      if (editingItem) {
        updatePengumuman(editingItem.id, newItem);
        setPressList(prev => prev.map(p => p.id === editingItem.id ? { ...p, ...newItem, updatedAt: new Date().toISOString() } : p));
      } else {
        newItem.id = `press-${Date.now()}`;
        newItem.tanggal = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
        savePengumuman(newItem);
        setPressList(prev => [newItem, ...prev]);
      }
    } else {
      if (editingItem) {
        updateBerita(editingItem.id, newItem);
        setGaleriList(prev => prev.map(g => g.id === editingItem.id ? { ...g, ...newItem, updatedAt: new Date().toISOString() } : g));
      } else {
        newItem.id = `gal-${Date.now()}`;
        newItem.tanggal = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
        newItem.penulis = 'Admin Humas';
        newItem.dibaca = 0;
        newItem.tags = newItem.tags || [];
        saveBerita(newItem);
        setGaleriList(prev => [newItem, ...prev]);
      }
    }

    setShowModal(false);
    setEditingItem(null);
    setIsSaving(false);
  };

  const handleDelete = (id: string) => {
    if (!canDelete) return;
    if (confirm('Yakin ingin menghapus data ini?')) {
      if (activeTab === 'press') {
        deletePengumuman(id);
        setPressList(prev => prev.filter(p => p.id !== id));
      } else {
        deleteBerita(id);
        setGaleriList(prev => prev.filter(g => g.id !== id));
      }
    }
  };

  const handleInputChange = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    if (key === 'fotoUrl' || key === 'lampiran') setImagePreview(value);
  };

  const columns: Column<any>[] = activeTab === 'press' ? [
    { key: 'nomorSurat', header: 'No. Surat' },
    { key: 'judul', header: 'Judul' },
    { key: 'kategori', header: 'Kategori', render: (item) => <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs rounded">{item.kategori}</span> },
    { key: 'tanggal', header: 'Tanggal' },
    { key: 'berlakuHingga', header: 'Berlaku S/D', render: (item) => item.berlakuHingga || '-' },
    { key: 'penanggungJawab', header: 'Penanggung Jawab' },
  ] : [
    { key: 'fotoUrl', header: 'Foto', render: (item) => item.fotoUrl ? <img src={item.fotoUrl} alt={item.judul} className="w-16 h-16 object-cover rounded-lg" /> : <span className="text-slate-400 text-xs">No Image</span> },
    { key: 'judul', header: 'Judul', render: (item) => <div className="font-bold text-slate-900 line-clamp-1">{item.judul}</div> },
    { key: 'kategori', header: 'Kategori', render: (item) => <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs rounded">{item.kategori}</span> },
    { key: 'tanggal', header: 'Tanggal' },
    { key: 'dibaca', header: 'Dibaca', render: (item) => <span className="font-mono text-emerald-700">{item.dibaca || 0}</span> },
  ];

  const formFields = activeTab === 'press' ? [
    { key: 'nomorSurat', label: 'Nomor Surat', type: 'text', required: true, placeholder: '470/2024/DESA' },
    { key: 'judul', label: 'Judul', type: 'text', required: true, placeholder: 'Pengumuman Libur Hari Raya' },
    { key: 'kategori', label: 'Kategori', type: 'select', required: true, options: pressCategories.map(c => ({ value: c, label: c })) },
    { key: 'tanggal', label: 'Tanggal', type: 'text', required: true, placeholder: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) },
    { key: 'berlakuHingga', label: 'Berlaku Hingga', type: 'text', placeholder: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) },
    { key: 'penanggungJawab', label: 'Penanggung Jawab', type: 'text', required: true, placeholder: 'Sekretaris Desa' },
    { key: 'isi', label: 'Isi Pengumuman', type: 'textarea', required: true, placeholder: 'Isi lengkap pengumuman...' },
    { key: 'lampiran', label: 'Lampiran/Gambar', type: 'image' },
  ] : [
    { key: 'judul', label: 'Judul Foto/Kegiatan', type: 'text', required: true, placeholder: 'Gotong Royong Bersama Warga' },
    { key: 'kategori', label: 'Kategori', type: 'select', required: true, options: [
      { value: 'Kegiatan Warga', label: 'Kegiatan Warga' },
      { value: 'Pembangunan', label: 'Pembangunan' },
      { value: 'Tradisi & Budaya', label: 'Tradisi & Budaya' },
      { value: 'Wisata & Alam', label: 'Wisata & Alam' },
    ]},
    { key: 'tanggal', label: 'Tanggal', type: 'text', required: true, placeholder: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) },
    { key: 'ringkasan', label: 'Ringkasan', type: 'textarea', required: true, placeholder: 'Ringkasan 1-2 kalimat...' },
    { key: 'isiLengkap', label: 'Deskripsi Lengkap', type: 'textarea', required: true, placeholder: 'Deskripsi detail kegiatan...' },
    { key: 'tags', label: 'Tags (pisahkan dengan koma)', type: 'tags', placeholder: 'gotong royong, kegiatan warga' },
    { key: 'fotoUrl', label: 'Gambar Utama', type: 'image' },
  ];

  return (
    <AdminLayout
      activePage={activeTab === 'press' ? 'admin-humas-press' : 'admin-humas-galeri'}
      onLogout={onLogout}
      onNavigate={onNavigate}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
              Humas & Dokumentasi
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 font-['Playfair_Display',serif]">
              {activeTab === 'press' ? 'Manajemen Press Release' : 'Manajemen Galeri Foto'}
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              {activeTab === 'press' 
                ? 'Kelola pengumuman resmi, kebijakan, dan surat edaran desa'
                : 'Kelola galeri foto kegiatan, dokumentasi pembangunan, & budaya'}
            </p>
          </div>
          <button
            onClick={openAddModal}
            className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah {activeTab === 'press' ? 'Pengumuman' : 'Foto Kegiatan'}</span>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
          <button
            onClick={() => { setActiveTab('press'); setShowModal(false); }}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'press'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Newspaper className="w-4 h-4" />
            <span>Press Release ({pressList.length})</span>
          </button>
          <button
            onClick={() => { setActiveTab('galeri'); setShowModal(false); }}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'galeri'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Image className="w-4 h-4" />
            <span>Galeri Foto ({galeriList.length})</span>
          </button>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm">
          <DataTable
            data={activeTab === 'press' ? pressList : galeriList}
            columns={columns}
            keyField="id"
            onEdit={openEditModal}
            onDelete={handleDelete}
            canEdit={canEdit}
            canDelete={canDelete}
            searchable={true}
            searchFields={activeTab === 'press' ? ['nomorSurat', 'judul', 'kategori', 'penanggungJawab'] : ['judul', 'kategori', 'ringkasan']}
            emptyMessage={`Belum ada ${activeTab === 'press' ? 'pengumuman' : 'foto kegiatan'}`}
          />
        </div>

        {/* Modal */}
        <FormModal
          isOpen={showModal}
          onClose={() => { setShowModal(false); setEditingItem(null); }}
          onSubmit={handleSave}
          title={editingItem ? `Edit ${activeTab === 'press' ? 'Pengumuman' : 'Foto Kegiatan'}` : `Tambah ${activeTab === 'press' ? 'Pengumuman Baru' : 'Foto Kegiatan Baru'}`}
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
                  <TextEditor
                    value={formData[field.key] || ''}
                    onChange={v => handleInputChange(field.key, v)}
                    placeholder={field.placeholder}
                    rows={field.key === 'isiLengkap' ? 10 : 6}
                  />
                ) : field.type === 'tags' ? (
                  <input
                    type="text"
                    value={formData[field.key] || ''}
                    onChange={e => handleInputChange(field.key, e.target.value)}
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