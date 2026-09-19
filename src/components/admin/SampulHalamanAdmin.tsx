import React, { useState } from 'react';
import { RotateCcw, CheckCircle, Image as ImageIcon, Eye } from 'lucide-react';
import { AdminLayout } from './AdminLayout';
import { ImageUpload } from './components/ImageUpload';
import { PageRoute } from '../../types';
import { CoverKey, CoverSettings, getCoverSettings, setCoverImage, resetCoverImage } from '../../utils/storage';

interface SampulHalamanAdminProps {
  coverKey: CoverKey;
  activePage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onLogout: () => void;
}

const COVER_META: Record<CoverKey, { label: string; desc: string; target: PageRoute; targetLabel: string }> = {
  beranda: {
    label: 'Sampul Halaman Beranda',
    desc: 'Gambar utama (hero) di bagian paling atas halaman Beranda pengunjung.',
    target: 'beranda',
    targetLabel: 'Beranda',
  },
  profil: {
    label: 'Sampul Halaman Profil Desa',
    desc: 'Banner di bagian atas halaman Profil Desa (tentang, sejarah, pemerintahan, anggaran).',
    target: 'profil-desa',
    targetLabel: 'Profil Desa',
  },
  potensi: {
    label: 'Sampul Halaman Potensi Desa',
    desc: 'Banner di bagian atas halaman Potensi Desa (destinasi, UMKM, budaya, budidaya).',
    target: 'potensi-desa',
    targetLabel: 'Potensi Desa',
  },
  pelayanan: {
    label: 'Sampul Halaman Pelayanan',
    desc: 'Banner di bagian atas halaman Pelayanan & Pengajuan Surat.',
    target: 'pelayanan-desa',
    targetLabel: 'Pelayanan',
  },
  humas: {
    label: 'Sampul Halaman Humas',
    desc: 'Banner di bagian atas halaman Humas & Informasi (berita, press release, galeri).',
    target: 'informasi-berita',
    targetLabel: 'Humas & Informasi',
  },
};

export const SampulHalamanAdmin: React.FC<SampulHalamanAdminProps> = ({ coverKey, activePage, onNavigate, onLogout }) => {
  const meta = COVER_META[coverKey];
  const [covers, setCovers] = useState<CoverSettings>(() => getCoverSettings());
  const [savedKey, setSavedKey] = useState<CoverKey | null>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [clickedNav, setClickedNav] = useState<PageRoute | null>(null);

  const flashSaved = (key: CoverKey) => {
    setSavedKey(key);
    setTimeout(() => setSavedKey((k) => (k === key ? null : k)), 1500);
  };

  const handleChange = (key: CoverKey, value: string) => {
    const next = setCoverImage(key, value);
    setCovers(next);
    flashSaved(key);
  };

  const handleReset = (key: CoverKey) => {
    setIsResetting(true);
    setTimeout(() => {
      const next = resetCoverImage(key);
      setCovers(next);
      setIsResetting(false);
      flashSaved(key);
    }, 400);
  };

  const handleViewPage = (target: PageRoute) => {
    setClickedNav(target);
    setTimeout(() => setClickedNav(null), 800);
    onNavigate(target);
  };

  const saved = savedKey === coverKey;

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
          <button
            type="button"
            onClick={() => handleViewPage(meta.target)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition shadow-sm"
          >
            <Eye className="w-4 h-4" />
            {clickedNav === meta.target ? 'Membuka...' : `Lihat Halaman ${meta.targetLabel}`}
          </button>
        </div>

        {/* Editor */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
              <ImageIcon className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900">Ubah Sampul / Background</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1 mb-6">
            Perubahan langsung tersimpan otomatis dan langsung tampil pada halaman pengunjung.
          </p>

          <ImageUpload
            label="Gambar Sampul"
            value={covers[coverKey] || ''}
            onChange={(v) => handleChange(coverKey, v)}
            previewSize="lg"
            maxSizeMB={5}
          />

          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-5">
            <button
              type="button"
              onClick={() => handleReset(coverKey)}
              disabled={isResetting}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 text-xs font-bold rounded-xl transition"
            >
              <RotateCcw className={`w-4 h-4 ${isResetting ? 'animate-spin' : ''}`} />
              {isResetting ? 'Mengembalikan...' : 'Kembalikan ke Gambar Bawaan'}
            </button>
            {saved && (
              <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-xl">
                <CheckCircle className="w-4 h-4" />
                Perubahan tersimpan
              </span>
            )}
          </div>
        </div>

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