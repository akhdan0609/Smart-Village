import React from 'react';
import { ShieldCheck, UserCog, Lock, Bell, Database, Download, Upload, Trash2, AlertTriangle, Save } from 'lucide-react';
import { AdminLayout } from './AdminLayout';
import { PageRoute } from '../../types';

interface AdminSettingsProps {
  onNavigate: (page: PageRoute) => void;
  onLogout: () => void;
}

export const AdminSettings: React.FC<AdminSettingsProps> = ({ onNavigate, onLogout }) => {
  return (
    <AdminLayout
      activePage="admin-settings"
      onLogout={onLogout}
      onNavigate={onNavigate}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
              Pengaturan Sistem
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 font-['Playfair_Display',serif]">
              Pengaturan Administrator
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Kelola konfigurasi sistem, keamanan, notifikasi, & data
            </p>
          </div>
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Security */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center">
                <Lock className="w-5 h-5 text-rose-600" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900">Keamanan & Akses</h3>
            </div>
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-xl text-left transition">
                <UserCog className="w-5 h-5 text-slate-500" />
                <span className="text-xs font-semibold text-slate-700">Kelola Akun Admin</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-xl text-left transition">
                <ShieldCheck className="w-5 h-5 text-slate-500" />
                <span className="text-xs font-semibold text-slate-700">Ubah Kata Sandi</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-xl text-left transition">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <span className="text-xs font-semibold text-slate-700">Log Aktivitas & Audit Trail</span>
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                <Bell className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900">Notifikasi & Komunikasi</h3>
            </div>
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-xl text-left transition">
                <Bell className="w-5 h-5 text-slate-500" />
                <span className="text-xs font-semibold text-slate-700">Pengaturan Notifikasi Email</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-xl text-left transition">
                <Bell className="w-5 h-5 text-slate-500" />
                <span className="text-xs font-semibold text-slate-700">Template Notifikasi Surat</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-xl text-left transition">
                <Bell className="w-5 h-5 text-slate-500" />
                <span className="text-xs font-semibold text-slate-700">Integrasi WhatsApp Gateway</span>
              </button>
            </div>
          </div>

          {/* Data Management */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                <Database className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900">Manajemen Data</h3>
            </div>
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-xl text-left transition">
                <Download className="w-5 h-5 text-slate-500" />
                <span className="text-xs font-semibold text-slate-700">Ekspor Semua Data (JSON/CSV)</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-xl text-left transition">
                <Upload className="w-5 h-5 text-slate-500" />
                <span className="text-xs font-semibold text-slate-700">Impor Data Master</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-rose-50 hover:bg-rose-100 rounded-xl text-left transition text-rose-700">
                <Trash2 className="w-5 h-5" />
                <span className="text-xs font-semibold">Hapus Semua Data Transaksional (Reset)</span>
              </button>
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
              <p className="text-xs text-slate-500">Terakhir Update</p>
              <p className="font-bold text-slate-900">{new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <p className="text-xs text-slate-500">Environment</p>
              <p className="font-bold text-slate-900">Production (GitHub Pages)</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};