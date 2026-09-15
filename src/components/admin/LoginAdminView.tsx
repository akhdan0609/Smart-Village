import React, { useState } from 'react';
import { ShieldCheck, Lock, User, Key, AlertCircle, ArrowRight } from 'lucide-react';
import { checkAdminLogin, setAdminSession } from '../../utils/storage';
import { PageRoute } from '../../types';

interface LoginAdminProps {
  onLoginSuccess: () => void;
  onNavigate: (page: PageRoute) => void;
}

export const LoginAdminView: React.FC<LoginAdminProps> = ({ onLoginSuccess, onNavigate }) => {
  const [username, setUsername] = useState('akhdan');
  const [password, setPassword] = useState('Teknik23260041');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (checkAdminLogin(username, password)) {
      setAdminSession(true);
      onLoginSuccess();
    } else {
      setErrorMsg('Username atau Kata Sandi salah! (Petunjuk: akhdan / Teknik23260041)');
    }
  };

  return (
    <div className="py-14 bg-slate-100 min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-2xl bg-emerald-700 text-white flex items-center justify-center mx-auto shadow-md">
            <ShieldCheck className="w-8 h-8 text-emerald-200" />
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

        {errorMsg && (
          <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Username Aparat Desa
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
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:bg-white"
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
                type="password"
                required
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                  setErrorMsg('');
                }}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-emerald-600 focus:bg-white"
              />
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl text-[11px] text-slate-500 space-y-0.5 border border-slate-100">
            <p className="font-bold text-slate-700">Kredensial Default Login:</p>
            <p>Username: <code className="bg-slate-200 px-1 rounded font-bold text-slate-800">akhdan</code></p>
            <p>Password: <code className="bg-slate-200 px-1 rounded font-bold text-slate-800">Teknik23260041</code></p>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-extrabold transition flex items-center justify-center gap-2 shadow-md"
          >
            <span>Masuk ke Panel Dashboard</span>
            <ArrowRight className="w-4 h-4" />
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
