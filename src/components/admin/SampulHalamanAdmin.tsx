import React, { useState } from 'react';
import { RotateCcw, CheckCircle, Send, Image as ImageIcon, Eye, Type, RotateCcw as RotateIcon } from 'lucide-react';
import { AdminLayout } from './AdminLayout';
import { ImageUpload } from './components/ImageUpload';
import { PageRoute } from '../../types';
import { CoverKey, CoverSettings, CoverTextKey, getCoverSettings, setCoverImage, resetCoverImage, getCoverTextSettings, getCoverText, setCoverText, resetCoverText, resetAllCoverText } from '../../utils/storage';

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

const DEFAULT_COVER_TEXTS: Record<CoverKey, Record<CoverTextKey, string>> = {
  beranda: {
    title: 'Desa Warung Menteng',
    subtitle: 'Desa asri di kaki Gunung Salak dengan kekayaan alam dan budaya yang terus tumbuh bersama masyarakat yang ramah.'
  },
  profil: {
    title: 'Profil Desa',
    subtitle: 'Mengenal Desa Warung Menteng lebih dekat'
  },
  potensi: {
    title: 'Potensi Desa',
    subtitle: 'Desa Warung Menteng memiliki kekayaan alam, budaya, serta sumber daya lokal yang melimpah dan terus berkembang untuk kesejahteraan masyarakat.'
  },
  pelayanan: {
    title: 'Pelayanan Desa',
    subtitle: 'Akses berbagai layanan administrasi desa dengan mudah, cepat, dan transparan untuk seluruh warga Desa Warung Menteng.'
  },
  humas: {
    title: 'Hubungan Masyarakat Desa',
    subtitle: 'Pusat publikasi resmi Hubungan Masyarakat (HUMAS), siaran pers, dokumentasi warta, dan transparansi kebijakan Desa Warung Menteng.'
  },
};

export const SampulHalamanAdmin: React.FC<SampulHalamanAdminProps> = ({ coverKey, activePage, onNavigate, onLogout }) => {
  const meta = COVER_META[coverKey];
  const defaultTexts = DEFAULT_COVER_TEXTS[coverKey];
  const [covers, setCovers] = useState<CoverSettings>(() => getCoverSettings());
  const [coverTexts, setCoverTexts] = useState<ReturnType<typeof getCoverTextSettings>>(() => getCoverTextSettings());
  const [savedKey, setSavedKey] = useState<CoverKey | null>(null);
  const [savedTextKey, setSavedTextKey] = useState<CoverTextKey | null>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isResettingText, setIsResettingText] = useState<CoverTextKey | null>(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const [published, setPublished] = useState(false);
  const [clickedNav, setClickedNav] = useState<PageRoute | null>(null);

  const flashSaved = (key: CoverKey) => {
    setSavedKey(key);
    setTimeout(() => setSavedKey((k) => (k === key ? null : k)), 1500);
  };

  const flashSavedText = (key: CoverTextKey) => {
    setSavedTextKey(key);
    setTimeout(() => setSavedTextKey((k) => (k === key ? null : k)), 1500);
  };

  const handleChange = (key: CoverKey, value: string) => {
    const next = setCoverImage(key, value);
    setCovers(next);
    flashSaved(key);
  };

  const handleTextChange = (key: CoverKey, textKey: CoverTextKey, value: string) => {
    const next = setCoverText(key, textKey, value);
    setCoverTexts(next);
    flashSavedText(textKey);
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

  const handlePublish = () => {
    setIsPublishing(true);
    // Force write current texts to storage so the published state is guaranteed on the user page.
    const next = getCoverSettings();
    const nextTexts = getCoverTextSettings();
    setCovers(next);
    setCoverTexts(nextTexts);
    setTimeout(() => {
      setIsPublishing(false);
      setPublished(true);
      flashSavedText('title');
      flashSavedText('subtitle');
      setTimeout(() => setPublished(false), 2000);
    }, 800);
  };

  const handleResetText = (key: CoverKey, textKey: CoverTextKey) => {
    setIsResettingText(textKey);
    setTimeout(() => {
      const next = resetCoverText(key, textKey);
      setCoverTexts(next);
      setIsResettingText(null);
      flashSavedText(textKey);
    }, 400);
  };

  const handleResetAllText = (key: CoverKey) => {
    setIsResettingText('title');
    setTimeout(() => {
      const next = resetAllCoverText(key);
      setCoverTexts(next);
      setIsResettingText(null);
      flashSavedText('title');
      flashSavedText('subtitle');
    }, 400);
  };

  const handleViewPage = (target: PageRoute) => {
    setClickedNav(target);
    setTimeout(() => setClickedNav(null), 800);
    onNavigate(target);
  };

  const saved = savedKey === coverKey;
  const savedTitle = savedTextKey === 'title';
  const savedSubtitle = savedTextKey === 'subtitle';

  const getText = (textKey: CoverTextKey) => getCoverText(coverKey, textKey, defaultTexts[textKey]);

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

        {/* Text Editor */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <Type className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900">Ubah Teks di Bawah Sampul</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1 mb-6">
            Teks ini akan tampil di bawah gambar sampul pada halaman {meta.targetLabel} pengunjung.
          </p>

          <div className="space-y-4">
            {/* Title Input */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Judul Halaman (Title)</label>
              <input
                type="text"
                value={getText('title')}
                onChange={(e) => handleTextChange(coverKey, 'title', e.target.value)}
                placeholder={defaultTexts.title}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
              />
            </div>

            {/* Subtitle Input */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Deskripsi / Subtitle</label>
              <textarea
                value={getText('subtitle')}
                onChange={(e) => handleTextChange(coverKey, 'subtitle', e.target.value)}
                placeholder={defaultTexts.subtitle}
                rows={3}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition resize-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-slate-100 pt-5">
              <button
                type="button"
                onClick={handlePublish}
                disabled={isPublishing}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-60 text-white text-sm font-extrabold rounded-xl transition shadow-sm"
              >
                {isPublishing ? (
                  <Send className="w-4 h-4 animate-pulse" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                {isPublishing ? 'Mempublikasikan...' : 'Simpan & Publikasikan'}
              </button>
              {published && (
                <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-xl">
                  <CheckCircle className="w-4 h-4" />
                  Perubahan dipublikasikan
                </span>
              )}
              <button
                type="button"
                onClick={() => handleResetText(coverKey, 'title')}
                disabled={isResettingText === 'title'}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 text-xs font-bold rounded-xl transition"
              >
                <RotateIcon className={`w-4 h-4 ${isResettingText === 'title' ? 'animate-spin' : ''}`} />
                {isResettingText === 'title' ? 'Mengembalikan...' : 'Kembalikan Judul ke Default'}
              </button>
              <button
                type="button"
                onClick={() => handleResetText(coverKey, 'subtitle')}
                disabled={isResettingText === 'subtitle'}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 text-xs font-bold rounded-xl transition"
              >
                <RotateIcon className={`w-4 h-4 ${isResettingText === 'subtitle' ? 'animate-spin' : ''}`} />
                {isResettingText === 'subtitle' ? 'Mengembalikan...' : 'Kembalikan Deskripsi ke Default'}
              </button>
              <button
                type="button"
                onClick={() => handleResetAllText(coverKey)}
                disabled={isResettingText}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 text-xs font-bold rounded-xl transition"
              >
                <RotateCcw className={`w-4 h-4 ${isResettingText ? 'animate-spin' : ''}`} />
                {isResettingText ? 'Mengembalikan...' : 'Kembalikan Semua Teks ke Default'}
              </button>
              {(savedTitle || savedSubtitle) && (
                <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-xl">
                  <CheckCircle className="w-4 h-4" />
                  Perubahan tersimpan
                </span>
              )}
            </div>
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