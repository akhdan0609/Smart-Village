import React, { useState } from 'react';
import { 
  ShieldCheck, 
  User, 
  Key, 
  Bell, 
  Palette, 
  Database, 
  Save, 
  X,
  Loader2,
  ToggleLeft,
  ToggleRight,
} from 'lucide-react';
import { AdminLayout } from './AdminLayout';
import { FormModal } from './components/FormModal';
import { getCurrentAdmin } from '../../utils/storage';
import { PageRoute } from '../../types';

interface AdminSettingsProps {
  onNavigate: (page: PageRoute) => void;
  onLogout: () => void;
}

const tabs = [
  { id: 'general', label: 'Umum', icon: ShieldCheck },
  { id: 'account', label: 'Akun', icon: User },
  { id: 'notifications', label: 'Notifikasi', icon: Bell },
  { id: 'appearance', label: 'Tampilan', icon: Palette },
  { id: 'backup', label: 'Backup Data', icon: Database },
];

export const AdminSettings: React.FC<AdminSettingsProps> = ({ onNavigate, onLogout }) => {
  const currentAdmin = getCurrentAdmin();
  const isSuperAdmin = currentAdmin?.role === 'super_admin';
  const [activeTab, setActiveTab] = useState<'general' | 'account' | 'notifications' | 'appearance' | 'backup'>('general');
  const [settings, setSettings] = useState({
    siteName: 'Desa Warung Menteng',
    siteDescription: 'Website resmi Desa Warung Menteng, Kecamatan Cijeruk, Kabupaten Bogor',
    contactEmail: 'admin@warungmenteng.desa.id',
    contactPhone: '0851-7530-9567',
    address: 'Jl. Raya Warung Menteng, Kec. Cijeruk, Kab. Bogor, Jawa Barat',
    maintenanceMode: false,
    allowRegistration: false,
    emailNotifications: true,
    pushNotifications: false,
    theme: 'light',
    primaryColor: '#064e3b',
    autoBackup: true,
    backupFrequency: 'daily',
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 800));
    // In real app, save to localStorage or API
    localStorage.setItem('desa_wm_admin_settings', JSON.stringify(settings));
    setIsSaving(false);
  };

  const handleReset = () => {
    if (confirm('Yakin ingin mengembalikan pengaturan ke default?')) {
      setSettings({
        siteName: 'Desa Warung Menteng',
        siteDescription: 'Website resmi Desa Warung Menteng, Kecamatan Cijeruk, Kabupaten Bogor',
        contactEmail: 'admin@warungmenteng.desa.id',
        contactPhone: '0851-7530-9567',
        address: 'Jl. Raya Warung Menteng, Kec. Cijeruk, Kab. Bogor, Jawa Barat',
        maintenanceMode: false,
        allowRegistration: false,
        emailNotifications: true,
        pushNotifications: false,
        theme: 'light',
        primaryColor: '#064e3b',
        autoBackup: true,
        backupFrequency: 'daily',
      });
    }
  };

  const renderGeneralTab = () => (
    <div className="space-y-5">
      <h4 className="text-sm font-bold text-slate-900">Informasi Website</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-slate-700 block mb-1">Nama Website *</label>
          <input
            type="text"
            value={settings.siteName}
            onChange={e => setSettings({...settings, siteName: e.target.value})}
            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
          />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-700 block mb-1">Deskripsi Singkat</label>
          <input
            type="text"
            value={settings.siteDescription}
            onChange={e => setSettings({...settings, siteDescription: e.target.value})}
            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
          />
        </div>
      </div>
      <h4 className="text-sm font-bold text-slate-900 mt-6">Kontak & Alamat</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-slate-700 block mb-1">Email Kontak</label>
          <input
            type="email"
            value={settings.contactEmail}
            onChange={e => setSettings({...settings, contactEmail: e.target.value})}
            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
          />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-700 block mb-1">Telepon</label>
          <input
            type="text"
            value={settings.contactPhone}
            onChange={e => setSettings({...settings, contactPhone: e.target.value})}
            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
          />
        </div>
      </div>
      <div>
        <label className="text-xs font-bold text-slate-700 block mb-1">Alamat Lengkap</label>
        <textarea
          rows={2}
          value={settings.address}
          onChange={e => setSettings({...settings, address: e.target.value})}
          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
        />
      </div>
      <h4 className="text-sm font-bold text-slate-900 mt-6">Mode Maintenance</h4>
      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
        <div>
          <p className="text-xs font-bold text-slate-900">Mode Maintenance</p>
          <p className="text-[10px] text-slate-500">Sembunyikan website dari publik, hanya admin yang bisa akses</p>
        </div>
        <button
          onClick={() => setSettings({...settings, maintenanceMode: !settings.maintenanceMode})}
          className={`relative w-12 h-6 rounded-full transition-all ${
            settings.maintenanceMode ? 'bg-emerald-600' : 'bg-slate-300'
          }`}
        >
          <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
            settings.maintenanceMode ? 'translate-x-6' : 'translate-x-0.5'
          }`}>
            {settings.maintenanceMode ? <ToggleLeft className="w-4 h-4 text-emerald-600" /> : <ToggleRight className="w-4 h-4 text-slate-500" />}
          </span>
        </button>
      </div>
    </div>
  );

  const renderAccountTab = () => (
    <div className="space-y-5">
      <h4 className="text-sm font-bold text-slate-900">Profil Admin</h4>
      <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden shrink-0">
          <img 
            src={currentAdmin?.avatar} 
            alt={currentAdmin?.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-bold text-slate-900">{currentAdmin?.name}</p>
          <p className="text-[10px] text-slate-500">{currentAdmin?.username}</p>
          <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-bold mt-1 ${currentAdmin?.role === 'super_admin' ? 'bg-amber-600' : currentAdmin?.role === 'admin_1' ? 'bg-emerald-600' : 'bg-blue-600'} text-white`}>
            {currentAdmin?.role === 'super_admin' ? 'Super Admin' : currentAdmin?.role === 'admin_1' ? 'Admin 1 (Full Access)' : 'Admin 2 (Contributor)'}
          </span>
        </div>
      </div>
      <div className="border-t border-slate-200 pt-4">
        <h4 className="text-sm font-bold text-slate-900">Ubah Kata Sandi</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Kata Sandi Saat Ini</label>
            <input type="password" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white" />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Kata Sandi Baru</label>
            <input type="password" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white" />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Konfirmasi Kata Sandi Baru</label>
            <input type="password" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="space-y-4">
      <h4 className="text-sm font-bold text-slate-900">Preferensi Notifikasi</h4>
      <div className="space-y-4">
        {[
          { key: 'emailNotifications', label: 'Notifikasi Email', desc: 'Kirim email untuk aktivitas penting (surat baru, pengaduan, dll)' },
          { key: 'pushNotifications', label: 'Notifikasi Push', desc: 'Kirim notifikasi browser untuk aktivitas real-time' },
        ].map(({ key, label, desc }) => (
          <div key={key} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div>
              <p className="text-xs font-bold text-slate-900">{label}</p>
              <p className="text-[10px] text-slate-500">{desc}</p>
            </div>
            <button
              onClick={() => setSettings({...settings, [key]: !settings[key]})}
              className={`relative w-12 h-6 rounded-full transition-all ${
                settings[key] ? 'bg-emerald-600' : 'bg-slate-300'
              }`}
            >
              <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                settings[key] ? 'translate-x-6' : 'translate-x-0.5'
              }`}>
                {settings[key] ? <ToggleLeft className="w-4 h-4 text-emerald-600" /> : <ToggleRight className="w-4 h-4 text-slate-500" />}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAppearanceTab = () => (
    <div className="space-y-5">
      <h4 className="text-sm font-bold text-slate-900">Tema & Warna</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-slate-700 block mb-1">Tema</label>
          <select
            value={settings.theme}
            onChange={e => setSettings({...settings, theme: e.target.value})}
            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
          >
            <option value="light">Terang (Light)</option>
            <option value="dark">Gelap (Dark)</option>
            <option value="system">Ikuti Sistem</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-bold text-slate-700 block mb-1">Warna Utama</label>
          <input
            type="color"
            value={settings.primaryColor}
            onChange={e => setSettings({...settings, primaryColor: e.target.value})}
            className="w-full h-10 p-1 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer"
          />
        </div>
      </div>
      <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
        <p className="text-xs text-emerald-800">
          <span className="font-bold">Catatan:</span> Perubahan warna utama memerlukan rebuild aplikasi untuk diterapkan penuh di seluruh UI.
        </p>
      </div>
    </div>
  );

  const renderBackupTab = () => (
    <div className="space-y-5">
      <h4 className="text-sm font-bold text-slate-900">Pengaturan Backup Otomatis</h4>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
          <div>
            <p className="text-xs font-bold text-slate-900">Backup Otomatis Harian</p>
            <p className="text-[10px] text-slate-500">Secara otomatis menyimpan salinan data ke localStorage setiap hari</p>
          </div>
          <button
            onClick={() => setSettings({...settings, autoBackup: !settings.autoBackup})}
            className={`relative w-12 h-6 rounded-full transition-all ${
              settings.autoBackup ? 'bg-emerald-600' : 'bg-slate-300'
            }`}
          >
            <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
              settings.autoBackup ? 'translate-x-6' : 'translate-x-0.5'
            }`}>
              {settings.autoBackup ? <ToggleLeft className="w-4 h-4 text-emerald-600" /> : <ToggleRight className="w-4 h-4 text-slate-500" />}
            </span>
          </button>
        </div>
        <div>
          <label className="text-xs font-bold text-slate-700 block mb-1">Frekuensi Backup</label>
          <select
            value={settings.backupFrequency}
            onChange={e => setSettings({...settings, backupFrequency: e.target.value})}
            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
          >
            <option value="daily">Harian</option>
            <option value="weekly">Mingguan</option>
            <option value="monthly">Bulanan</option>
          </select>
        </div>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => {
            const backupData = {
              timestamp: new Date().toISOString(),
              data: {
                // In real app, collect all localStorage data
              }
            };
            const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `backup-desa-wm-${new Date().toISOString().split('T')[0]}.json`;
            a.click();
            URL.revokeObjectURL(url);
          }}
          className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
        >
          <Database className="w-4 h-4" />
          <span>Backup Sekarang</span>
        </button>
        <button
          onClick={() => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.json';
            input.onchange = (e) => {
              const target = e.target as HTMLInputElement;
              const file = target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                  try {
                    const data = JSON.parse(event.target?.result as string);
                    // In real app, restore data to localStorage
                    alert('Data berhasil dipulihkan! (Simulasi)');
                  } catch {
                    alert('File backup tidak valid');
                  }
                };
                reader.readAsText(file);
              }
            };
            input.click();
          }}
          className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
        >
          <Database className="w-4 h-4" />
          <span>Pulihkan Backup</span>
        </button>
      </div>
      <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl">
        <p className="text-xs text-rose-800">
          <span className="font-bold">Peringatan:</span> Memulihkan backup akan menimpa data saat ini. Pastikan Anda memiliki backup data terbaru sebelum melanjutkan.
        </p>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general': return renderGeneralTab();
      case 'account': return renderAccountTab();
      case 'notifications': return renderNotificationsTab();
      case 'appearance': return renderAppearanceTab();
      case 'backup': return renderBackupTab();
      default: return renderGeneralTab();
    }
  };

  return (
    <AdminLayout
      activePage="admin-settings"
      onLogout={onLogout}
      onNavigate={onNavigate}
    >
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
              Pengaturan Sistem
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 font-['Playfair_Display',serif]">
              Pengaturan Admin
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Kelola konfigurasi website, akun, notifikasi, tampilan, & backup data
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-rose-100 hover:bg-rose-200 text-rose-700 rounded-xl text-xs font-bold transition"
            >
              Reset ke Default
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 disabled:opacity-50"
            >
              {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
              <Save className="w-4 h-4" />
              <span>{isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          {/* Sidebar Tabs */}
          <div className="w-full sm:w-48 flex-shrink-0">
            <nav className="bg-white rounded-3xl p-2 border border-slate-200 shadow-sm space-y-1" role="navigation" aria-label="Settings tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-emerald-50 text-emerald-800'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <tab.icon className="w-4 h-4 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="flex-1 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;