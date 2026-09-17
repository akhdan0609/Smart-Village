import React, { useState } from 'react';
import { ShieldCheck, Lock, User, Key, AlertCircle, ArrowRight, Eye, EyeOff, Users, UserCheck, UserCog, Crown } from 'lucide-react';
import { checkAdminLogin, setAdminSession, AdminUser } from '../../utils/storage';
import { PageRoute } from '../../types';

interface LoginAdminProps {
  onLoginSuccess: () => void;
  onNavigate: (page: PageRoute) => void;
}

const roleOptions = [
  { id: 'super_admin', label: 'Super Admin', desc: 'Akses penuh ke seluruh sistem (CRUD lengkap)', icon: Crown, color: 'bg-amber-600' },
  { id: 'admin_1', label: 'Admin 1 (Full Access)', desc: 'Akses penuh ke semua menu: Profil, Potensi, Pelayanan, Humas (CRUD lengkap)', icon: Users, color: 'bg-emerald-600' },
  { id: 'admin_2', label: 'Admin 2 (Contributor)', desc: 'Hanya bisa menambah data baru (Create). Edit & Hapus dinonaktifkan.', icon: UserCheck, color: 'bg-blue-600' },
];

const credentials: Record<string, { username: string; password: string }> = {
  super_admin: { username: 'superadmin', password: 'super2026' },
  admin_1: { username: 'admin1', password: 'admin1desa' },
  admin_2: { username: 'admin2', password: 'admin2desa' },
};

export const LoginAdminView: React.FC<LoginAdminProps> = ({ onLoginSuccess, onNavigate }) => {
  const [selectedRole, setSelectedRole] = useState<AdminUser['role']>('super_admin');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRoleSelect = (role: AdminUser['role']) => {
    setSelectedRole(role);
    const cred = credentials[role];
    setUsername(cred.username);
    setPassword(cred.password);
    setErrorMsg('');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    const user = checkAdminLogin(username, password);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (user) {
      // Verify role matches selection
      if (user.role !== selectedRole) {
        setErrorMsg(`Akun ini memiliki peran ${user.role}, bukan ${selectedRole}`);
        setIsLoading(false);
        return;
      }
      setAdminSession(user);
      onLoginSuccess();
    } else {
      setErrorMsg('Username atau Kata Sandi salah!');
    }
    setIsLoading(false);
  };

  const selectedRoleInfo = roleOptions.find(r => r.id === selectedRole)!;

  return (
    <div className="py-14 bg-slate-100 min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <div className={`w-16 h-16 rounded-2xl ${selectedRoleInfo.color} text-white flex items-center justify-center mx-auto shadow-md`}>
            <selectedRoleInfo.icon className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
            Portal Khusus Aparatur
          </span>
          <h2 className="text-2xl font-black text-slate-900 font-['Playfair_Display',serif]">
            Masuk Admin Desa
          </h2>
          <p className="text-xs text-slate-500">
            Sistem Informasi Pengelolaan Persuratan, Aspirasi Warga, & Publikasi Konten Desa Warung Menteng
          </p>
        </div>

        {/* Role Selector */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-slate-700 block mb-2">Pilih Peran Login:</label>
          <div className="grid grid-cols-2 gap-2">
            {roleOptions.map((role) => (
              <button
                key={role.id}
                type="button"
                onClick={() => handleRoleSelect(role.id as AdminUser['role'])}
                className={`p-3 rounded-xl border-2 text-left transition-all ${
                  selectedRole === role.id
                    ? `border-${role.color.replace('bg-', '')}-500 bg-${role.color.replace('bg-', '')}-50`
                    : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg ${role.color} text-white flex items-center justify-center mb-2`}>
                  <role.icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-900 block">{role.label}</span>
                <span className="text-[10px] text-slate-500">{role.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {errorMsg && (
          <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Username
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                required
                value={username}
                onChange={e => {
                  setUsername(e.target.value);
                  setErrorMsg('');
                }}
                disabled={isLoading}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:bg-white disabled:opacity-50"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Kata Sandi
            </label>
            <div className="relative">
              <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                  setErrorMsg('');
                }}
                disabled={isLoading}
                className="w-full pl-10 pr-12 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:bg-white disabled:opacity-50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl text-[11px] text-slate-500 space-y-0.5 border border-slate-100">
            <p className="font-bold text-slate-700">Kredensial untuk peran <span className="font-mono text-emerald-800">{selectedRoleInfo.label}</span>:</p>
            <p>Username: <code className="bg-slate-200 px-1 rounded font-bold text-slate-800">{credentials[selectedRole].username}</code></p>
            <p>Password: <code className="bg-slate-200 px-1 rounded font-bold text-slate-800">{credentials[selectedRole].password}</code></p>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center justify-center gap-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Memproses...</span>
              </>
            ) : (
              <>
                <span>Masuk ke Panel Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('beranda')}
            className="text-xs text-slate-500 hover:text-emerald-700 font-semibold"
          >
            ← Kembali ke Halaman Utama
          </button>
        </div>
      </div>
    </div>
  );
};