import React from 'react';
import { AdminLayout } from './AdminLayout';
import { CoverEditor, COVER_META } from './components/CoverEditor';
import { PageRoute } from '../../types';
import { CoverKey } from '../../utils/storage';

interface SampulHalamanAdminProps {
  coverKey: CoverKey;
  activePage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onLogout: () => void;
}

export const SampulHalamanAdmin: React.FC<SampulHalamanAdminProps> = ({ coverKey, activePage, onNavigate, onLogout }) => {
  const meta = COVER_META[coverKey];

  return (
    <AdminLayout activePage={activePage} onLogout={onLogout} onNavigate={onNavigate}>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
              Kelola Tampilan Halaman User
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 font-['Playfair_Display',serif]">
              {meta.label}
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">{meta.desc}</p>
          </div>
        </div>

        {/* Editor */}
        <CoverEditor coverKey={coverKey} onNavigate={onNavigate} />

        {/* Info */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <h4 className="text-sm font-extrabold text-slate-900 mb-3">Catatan</h4>
          <ul className="space-y-2 text-xs text-slate-600 list-disc list-inside">
            <li>Sampul ini hanya mengubah bagian atas (hero/banner) halaman {meta.targetLabel}, tidak mengubah isi konten.</li>
            <li>Gambar tersimpan di browser ini (localStorage), jadi akan tampil bagi pengunjung yang membuka website dari perangkat ini.</li>
            <li>Jika ingin kembali ke tampilan awal desa, tekan tombol &ldquo;Kembalikan ke Gambar Bawaan&rdquo;.</li>
          </ul>
        </div>
      </div>
    </AdminLayout>
  );
};