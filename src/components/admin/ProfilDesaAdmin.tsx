import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Landmark, 
  Users, 
  DollarSign, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X,
  Loader2,
  Image as ImageIcon,
} from 'lucide-react';
import { AdminLayout } from './AdminLayout';
import { FormModal } from './components/FormModal';
import { TextEditor } from './components/TextEditor';
import { ImageUpload } from './components/ImageUpload';
import { PageRoute } from '../../types';
import { getCurrentAdmin } from '../../utils/storage';

interface StaticContentItem {
  id: string;
  title: string;
  slug: string;
  content: string;
  imageUrl?: string;
  updatedAt: string;
  updatedBy: string;
}

const STORAGE_KEY = 'desa_wm_profil_content_v1';

const defaultContent: StaticContentItem[] = [
  {
    id: 'tentang',
    title: 'Tentang Desa Warung Menteng',
    slug: 'tentang-desa',
    content: `<h2>Desa Warung Menteng</h2><p>Desa Warung Menteng adalah salah satu desa di Kecamatan Cijeruk, Kabupaten Bogor, Provinsi Jawa Barat. Desa ini terletak di lereng Gunung Salak dengan ketinggian 250-500 mdpl, memiliki luasan wilayah 2,86 km² dan jumlah penduduk 8.997 jiwa.</p><p>Desa ini memiliki potensi alam yang sangat menarik dengan pemandangan gunung, mata air, dan udara sejuk. Masyarakatnya ramah dan masih mempertahankan budaya Sunda tradisional.</p>`,
    imageUrl: '',
    updatedAt: new Date().toISOString(),
    updatedBy: 'System',
  },
  {
    id: 'sejarah',
    title: 'Sejarah Desa Warung Menteng',
    slug: 'sejarah-desa',
    content: `<h2>Asal Usul Nama</h2><p>Nama "Warung Menteng" berasal dari kata "Warung" yang berarti tempat istirahat/pedagang kecil, dan "Menteng" yang merujuk pada pohon Menteng (Baccaurea racemosa) yang dulu banyak tumbuh di wilayah ini.</p><h2>Sejarah Singkat</h2><p>Desa Warung Menteng resmi menjadi desa otonom pada tahun 1980. Sebelumnya wilayah ini merupakan bagian dari hutan lindung Gunung Salak yang kemudian dibuka untuk pemukiman. Para pendatang awal mayoritas berasal dari Cianjur dan Sukabumi yang mencari mata pencaharian di bidang pertanian.</p>`,
    imageUrl: '',
    updatedAt: new Date().toISOString(),
    updatedBy: 'System',
  },
  {
    id: 'pemerintahan',
    title: 'Struktur Pemerintahan Desa',
    slug: 'pemerintahan-desa',
    content: `<h2>Perangkat Desa Warung Menteng</h2><p><strong>Kepala Desa:</strong> A. Zaenal Arifin S.ag</p><p><strong>Sekretaris Desa:</strong> (Data akan diisi)</p><p><strong>Kaur Pemerintahan:</strong> (Data akan diisi)</p><p><strong>Kaur Keuangan:</strong> (Data akan diisi)</p><p><strong>Kaur Umum:</strong> (Data akan diisi)</p><p><strong>Kasi Pemerintahan:</strong> (Data akan diisi)</p><p><strong>Kasi Kesejahteraan:</strong> (Data akan diisi)</p><p><strong>Kasi Pemberdayaan:</strong> (Data akan diisi)</p>`,
    imageUrl: '',
    updatedAt: new Date().toISOString(),
    updatedBy: 'System',
  },
  {
    id: 'anggaran',
    title: 'Anggaran Desa (APBDes)',
    slug: 'anggaran-desa',
    content: `<h2>Anggaran Pendapatan dan Belanja Desa (APBDes)</h2><h3>Tahun Anggaran 2024</h3><h4>Pendapatan:</h4><ul><li>PADes: Rp 150.000.000</li><li>Dana Desa (DD): Rp 1.200.000.000</li><li>Alokasi Dana Desa (ADD): Rp 300.000.000</li><li>Bagi Hasil Pajak: Rp 50.000.000</li></ul><h4>Belanja:</h4><ul><li>Belanja Pegawai: Rp 600.000.000</li><li>Belanja Barang/Jasa: Rp 400.000.000</li><li>Belanja Modal: Rp 500.000.000</li><li>Belanja Tidak Terduga: Rp 100.000.000</li></ul>`,
    imageUrl: '',
    updatedAt: new Date().toISOString(),
    updatedBy: 'System',
  },
];

interface ProfilDesaAdminProps {
  onNavigate: (page: PageRoute) => void;
  onLogout: () => void;
}

export const ProfilDesaAdmin: React.FC<ProfilDesaAdminProps> = ({ onNavigate, onLogout }) => {
  const currentAdmin = getCurrentAdmin();
  const isContributor = currentAdmin?.role === 'admin_2';
  const canEdit = !isContributor;

  const [activeTab, setActiveTab] = useState<'tentang' | 'sejarah' | 'pemerintahan' | 'anggaran'>('tentang');
  const [contentList, setContentList] = useState<StaticContentItem[]>([]);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');
  const [editImage, setEditImage] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setContentList(JSON.parse(stored));
      } else {
        setContentList(defaultContent);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultContent));
      }
    } catch {
      setContentList(defaultContent);
    }
  }, []);

  const currentContent = contentList.find(c => c.id === activeTab) || defaultContent[0];

  const handleSave = async (id: string) => {
    if (!canEdit) return;
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 500));
    setContentList(prev => prev.map(c => 
      c.id === id 
        ? { ...c, content: editContent, imageUrl: editImage, updatedAt: new Date().toISOString(), updatedBy: 'Admin' }
        : c
    ));
    setIsEditing(null);
    setIsSaving(false);
  };

  const startEdit = (item: StaticContentItem) => {
    if (!canEdit) return;
    setIsEditing(item.id);
    setEditContent(item.content);
    setEditImage(item.imageUrl || '');
  };

  const cancelEdit = () => {
    setIsEditing(null);
    setEditContent('');
    setEditImage('');
  };

  const tabs = [
    { id: 'tentang', label: 'Tentang Desa', icon: FileText },
    { id: 'sejarah', label: 'Sejarah Desa', icon: Landmark },
    { id: 'pemerintahan', label: 'Pemerintahan', icon: Users },
    { id: 'anggaran', label: 'Anggaran Desa', icon: DollarSign },
  ];

  return (
    <AdminLayout
      activePage={`admin-profil-${activeTab}`}
      onLogout={onLogout}
      onNavigate={onNavigate}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
              Kelola Konten Profil Desa
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 font-['Playfair_Display',serif]">
              {tabs.find(t => t.id === activeTab)?.label}
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Kelola konten halaman profil desa (teks, gambar, format HTML)
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id as any); cancelEdit(); }}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Editor */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          {isEditing ? (
            <form onSubmit={e => { e.preventDefault(); handleSave(isEditing!); }}>
              <div className="space-y-5">
                <ImageUpload
                  label="Gambar Sampul (Opsional)"
                  value={editImage}
                  onChange={setEditImage}
                  previewSize="md"
                />
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-2">Konten (HTML Editor)</label>
                  <TextEditor
                    value={editContent}
                    onChange={setEditContent}
                    placeholder="Tulis konten dengan format HTML..."
                    rows={20}
                  />
                </div>
                <div className="flex gap-3 pt-4 border-t border-slate-100">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
                    <Save className="w-4 h-4" />
                    <span>{isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold"
                  >
                    <X className="w-4 h-4 mr-1" />
                    Batal
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="prose prose-slate max-w-none">
              <div 
                className="space-y-4" 
                dangerouslySetInnerHTML={{ __html: currentContent.content || '<p class="text-slate-500">Konten belum diisi</p>' }}
              />
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  Terakhir diperbarui: {new Date(currentContent.updatedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })} oleh {currentContent.updatedBy}
                </div>
                {canEdit && (
                <button
                  onClick={() => startEdit(currentContent)}
                  className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Edit className="w-4 h-4" />
                  <span>Edit Konten</span>
                </button>
              )}
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};