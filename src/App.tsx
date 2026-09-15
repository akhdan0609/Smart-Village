import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/layout/Navbar';

// Profil Views
import { PemerintahanDesaView } from './components/profil/PemerintahanDesaView';

// Pelayanan Views
import { PelayananDesaView } from './components/pelayanan/PelayananDesaView';
import { PersyaratanSuratView } from './components/pelayanan/PersyaratanSuratView';
import { SuratKeteranganView } from './components/pelayanan/SuratKeteranganView';

// KKN Views
import { KKNView } from './components/kkn/KKNView';
import { KKNLatarBelakangView } from './components/kkn/KKNLatarBelakangView';
import { KKNDivisionView } from './components/kkn/KKNDivisionView';
import { useGlobalAnimations } from './hooks/useGlobalAnimations';

export default function App() {
  const [activePage, setActivePage] = useState<PageRoute>('kkn');
  const [navParams, setNavParams] = useState<any>({});

  // Mengaktifkan animasi Anime.js & WAAPI menyeluruh di setiap halaman dan scroll
  useGlobalAnimations(activePage);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActivePage(hash as PageRoute);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageRoute, params?: any) => {
    setActivePage(page);
    setNavParams(params || {});
    if (typeof window !== 'undefined' && window.history) {
      window.history.replaceState(null, '', `#${page}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render Current Page
  const renderContent = () => {
    switch (activePage) {
      // PROFIL DESA
      case 'profil-pemerintahan':
        return <PemerintahanDesaView onNavigate={handleNavigate} />;

      // PELAYANAN DESA
      case 'pelayanan-desa':
        return <PelayananDesaView onNavigate={handleNavigate} />;
      case 'pelayanan-surat-keterangan':
        return <SuratKeteranganView onNavigate={handleNavigate} defaultJenis={navParams?.defaultJenis} />;
      case 'pelayanan-persyaratan':
        return <PersyaratanSuratView onNavigate={handleNavigate} />;

      // KKN (KULIAH KERJA NYATA)
      case 'kkn-bph':
        return <KKNDivisionView initialDivision="BPH" onNavigate={handleNavigate} />;
      case 'kkn-acara':
        return <KKNDivisionView initialDivision="ACARA" onNavigate={handleNavigate} />;
      case 'kkn-humas':
        return <KKNDivisionView initialDivision="HUMAS" onNavigate={handleNavigate} />;
      case 'kkn-media':
        return <KKNDivisionView initialDivision="MEDIA" onNavigate={handleNavigate} />;
      case 'kkn-latar-belakang':
        return <KKNLatarBelakangView onNavigate={handleNavigate} />;
      case 'kkn':
        return <KKNView onNavigate={handleNavigate} />;

      default:
        return <KKNView onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] antialiased selection:bg-emerald-200 selection:text-emerald-950">
      <Navbar activePage={activePage} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        <div id="app-page-wrapper" className="will-change-transform">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
