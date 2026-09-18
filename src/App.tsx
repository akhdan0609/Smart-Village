import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Home Views
import { BerandaView } from './components/home/BerandaView';

// Profil Views
import { ProfilDesaView } from './components/profil/ProfilDesaView';
import { TentangDesaView } from './components/profil/TentangDesaView';
import { SejarahDesaView } from './components/profil/SejarahDesaView';
import { GaleriDesaView } from './components/profil/GaleriDesaView';
import { PemerintahanDesaView } from './components/profil/PemerintahanDesaView';
import { LembagaDesaView } from './components/profil/LembagaDesaView';
import { DemografiDesaView } from './components/profil/DemografiDesaView';
import { AnggaranDesaView } from './components/profil/AnggaranDesaView';

// Potensi Views
import { PotensiDesaView } from './components/potensi/PotensiDesaView';
import { AkomodasiView } from './components/potensi/AkomodasiView';
import { AkomodasiDetailView } from './components/potensi/AkomodasiDetailView';
import { UMKMView } from './components/potensi/UMKMView';
import { UMKMDetailView } from './components/potensi/UMKMDetailView';
import { BudayaAdatView } from './components/potensi/BudayaAdatView';
import { BudayaAdatDetailView } from './components/potensi/BudayaAdatDetailView';
import { SitusSejarahView } from './components/potensi/SitusSejarahView';
import { BudidayaView } from './components/potensi/BudidayaView';
import { BudidayaDetailView } from './components/potensi/BudidayaDetailView';

// Informasi & Berita Views
import { BeritaView } from './components/informasi/BeritaView';
import { BeritaDetailView } from './components/informasi/BeritaDetailView';
import { PressReleaseView } from './components/informasi/PressReleaseView';
import { BeritaGaleriView } from './components/informasi/BeritaGaleriView';
import { PengumumanView } from './components/informasi/PengumumanView';
import { ProgramDesaView } from './components/informasi/ProgramDesaView';
import { GaleriView } from './components/informasi/GaleriView';
import { VideoProfilView } from './components/informasi/VideoProfilView';

// Pelayanan Views
import { PelayananDesaView } from './components/pelayanan/PelayananDesaView';
import { InformasiAdministrasiView } from './components/pelayanan/InformasiAdministrasiView';
import { PersyaratanSuratView } from './components/pelayanan/PersyaratanSuratView';
import { PengajuanSuratView } from './components/pelayanan/PengajuanSuratView';
import { CekStatusPengajuanView } from './components/pelayanan/CekStatusPengajuanView';
import { DownloadFormulirView } from './components/pelayanan/DownloadFormulirView';
import { SuratKeteranganView } from './components/pelayanan/SuratKeteranganView';
import { PindahDatangView } from './components/pelayanan/PindahDatangView';
import { LayananPernikahanView } from './components/pelayanan/LayananPernikahanView';

// Aspirasi Views
import { AspirasiPengaduanView } from './components/aspirasi/AspirasiPengaduanView';

// KKN Views
import { KKNView } from './components/kkn/KKNView';
import { KKNLatarBelakangView } from './components/kkn/KKNLatarBelakangView';
import { KKNProgramKerjaView } from './components/kkn/KKNProgramKerjaView';
import { KKNVisiMisiView } from './components/kkn/KKNVisiMisiView';
import { KKNStrukturalView } from './components/kkn/KKNStrukturalView';
import { KKNGaleriView } from './components/kkn/KKNGaleriView';
import { KKNDivisionView } from './components/kkn/KKNDivisionView';
import { KKNProgramDetailView } from './components/kkn/KKNProgramDetailView';

// Kontak Darurat View
import { KontakDaruratView } from './components/darurat/KontakDaruratView';

// Admin Views
import { LoginAdminView } from './components/admin/LoginAdminView';
import { AdminDashboardView } from './components/admin/AdminDashboardView';
import { AdminDashboardHome } from './components/admin/AdminDashboardHome';
import { ProfilDesaAdmin } from './components/admin/ProfilDesaAdmin';
import { PotensiDesaAdmin } from './components/admin/PotensiDesaAdmin';
import { PelayananAdmin } from './components/admin/PelayananAdmin';
import { HumasAdmin } from './components/admin/HumasAdmin';
import { KritikSaranAdmin } from './components/admin/KritikSaranAdmin';
import { KontakDaruratAdmin } from './components/admin/KontakDaruratAdmin';
import { LaporanPendudukAdmin } from './components/admin/LaporanPendudukAdmin';
import { AdminSettings } from './components/admin/AdminSettings';
import { isAdminLoggedIn, getCurrentAdmin } from './utils/storage';
import { useGlobalAnimations } from './hooks/useGlobalAnimations';

export default function App() {
  const [activePage, setActivePage] = useState<PageRoute>('beranda');
  const [navParams, setNavParams] = useState<any>({});
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  // Mengaktifkan animasi Anime.js & WAAPI menyeluruh di setiap halaman dan scroll
  useGlobalAnimations(activePage);

  // Menulis entry history saat mount pertama agar tombol back/forward berfungsi
  useEffect(() => {
    history.replaceState({ page: 'beranda', params: {} }, '');
  }, []);

  // Mendengarkan tombol back/forward perangkat untuk kembali ke halaman sebelumnya
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const state = event.state as { page?: PageRoute; params?: any } | null;
      if (state?.page) {
        setActivePage(state.page);
        setNavParams(state.params || {});
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    setIsAdmin(isAdminLoggedIn());
  }, []);

  const handleNavigate = (page: PageRoute, params?: any) => {
    history.pushState({ page, params: params || {} }, '');
    setActivePage(page);
    setNavParams(params || {});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSuccess = () => {
    setIsAdmin(true);
    const currentAdmin = getCurrentAdmin();
    const target = currentAdmin?.role === 'admin_2' ? 'admin-laporan-penduduk' : 'admin-dashboard';
    history.pushState({ page: target, params: {} }, '');
    setActivePage(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setIsAdmin(false);
    history.pushState({ page: 'beranda', params: {} }, '');
    setActivePage('beranda');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render Current Page
  const renderContent = () => {
    switch (activePage) {
      // BERANDA
      case 'beranda':
        return <BerandaView onNavigate={handleNavigate} />;

      // PROFIL DESA
      case 'profil-desa':
        return <ProfilDesaView onNavigate={handleNavigate} />;
      case 'profil-tentang':
        return <TentangDesaView onNavigate={handleNavigate} />;
      case 'profil-sejarah':
        return <SejarahDesaView onNavigate={handleNavigate} />;
      case 'profil-galeri':
        return <GaleriDesaView onNavigate={handleNavigate} />;
      case 'profil-pemerintahan':
        return <PemerintahanDesaView />;
      case 'profil-lembaga':
        return <LembagaDesaView />;
      case 'profil-demografi':
        return <DemografiDesaView />;
      case 'profil-anggaran':
        return <AnggaranDesaView onNavigate={handleNavigate} />;

      // POTENSI DESA
      case 'potensi-desa':
        return <PotensiDesaView onNavigate={handleNavigate} />;
      case 'potensi-akomodasi':
      case 'akomodasi':
        return <AkomodasiView onNavigate={handleNavigate} />;
      case 'potensi-akomodasi-detail':
        return <AkomodasiDetailView itemId={navParams?.itemId} onNavigate={handleNavigate} />;
      case 'potensi-umkm':
        return <UMKMView onNavigate={handleNavigate} />;
      case 'potensi-umkm-detail':
        return <UMKMDetailView umkmId={navParams?.umkmId} onNavigate={handleNavigate} />;
      case 'potensi-budaya':
        return <BudayaAdatView onNavigate={handleNavigate} />;
      case 'potensi-budaya-detail':
        return <BudayaAdatDetailView itemId={navParams?.itemId} onNavigate={handleNavigate} />;
      case 'potensi-situs-sejarah':
        return <SitusSejarahView onNavigate={handleNavigate} />;
      case 'potensi-perikanan':
      case 'potensi-budidaya':
        return <BudidayaView onNavigate={handleNavigate} />;
      case 'potensi-budidaya-detail':
        return <BudidayaDetailView itemId={navParams?.itemId} onNavigate={handleNavigate} />;

      // BERITA & INFORMASI DESA / HUMAS
      case 'berita-press-release':
      case 'informasi-berita':
        return <BeritaView selectedBeritaId={navParams?.selectedBeritaId} onNavigate={handleNavigate} />;
      case 'berita-detail':
        return <BeritaDetailView beritaId={navParams?.beritaId || navParams?.selectedBeritaId} onNavigate={handleNavigate} />;
      case 'berita-galeri':
        return <GaleriDesaView onNavigate={handleNavigate} />;
      case 'informasi-pengumuman':
        return <PengumumanView />;
      case 'informasi-program':
        return <ProgramDesaView />;
      case 'informasi-galeri':
        return <GaleriView />;
      case 'informasi-video':
        return <VideoProfilView />;

      // PELAYANAN DESA
      case 'pelayanan-desa':
        return <PelayananDesaView onNavigate={handleNavigate} />;
      case 'pelayanan-surat-keterangan':
        return <SuratKeteranganView initialJenis={navParams?.initialJenis} onNavigate={handleNavigate} />;
      case 'pelayanan-pindah-datang':
        return <PindahDatangView initialJenis={navParams?.initialJenis} onNavigate={handleNavigate} />;
      case 'pelayanan-layanan-pernikahan':
        return <LayananPernikahanView initialTab={navParams?.initialTab} onNavigate={handleNavigate} />;
      case 'pelayanan-informasi':
        return <InformasiAdministrasiView onNavigate={handleNavigate} />;
      case 'pelayanan-persyaratan':
        return <PersyaratanSuratView onNavigate={handleNavigate} />;
      case 'pelayanan-pengajuan':
        return <PengajuanSuratView defaultSuratId={navParams?.defaultSuratId} onNavigate={handleNavigate} />;
      case 'pelayanan-cek-status':
        return <CekStatusPengajuanView initialRegNumber={navParams?.regNumber} />;
      case 'pelayanan-download':
        return <DownloadFormulirView onNavigate={handleNavigate} />;

      // ASPIRASI & PENGADUAN
      case 'aspirasi-tanya':
        return <AspirasiPengaduanView initialTab="tanya-informasi" />;
      case 'aspirasi-pengaduan':
        return <AspirasiPengaduanView initialTab="pengaduan" />;
      case 'aspirasi-usulan':
        return <AspirasiPengaduanView initialTab="aspirasi" />;
      case 'aspirasi-cek-status':
        return <AspirasiPengaduanView initialTab="cek-status" />;

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
      case 'kkn-program-kerja':
        return <KKNProgramKerjaView onNavigate={handleNavigate} />;
      case 'kkn-visi-misi':
        return <KKNVisiMisiView />;
      case 'kkn-struktural':
        return <KKNStrukturalView />;
      case 'kkn-galeri':
        return <KKNGaleriView onNavigate={handleNavigate} />;
      case 'kkn-proker-1':
        return <KKNProgramDetailView prokerId="proker-1" onNavigate={handleNavigate} />;
      case 'kkn-proker-2':
        return <KKNProgramDetailView prokerId="proker-2" onNavigate={handleNavigate} />;
      case 'kkn-proker-3':
        return <KKNProgramDetailView prokerId="proker-3" onNavigate={handleNavigate} />;
      case 'kkn-proker-4':
        return <KKNProgramDetailView prokerId="proker-4" onNavigate={handleNavigate} />;
      case 'kkn':
        return <KKNView onNavigate={handleNavigate} />;

      // KONTAK DARURAT
      case 'kontak-darurat':
        return <KontakDaruratView />;

      // ADMIN
      case 'login-admin':
        return isAdmin ? (
          <AdminDashboardHome onLogout={handleLogout} onNavigate={handleNavigate} />
        ) : (
          <LoginAdminView onLoginSuccess={handleLoginSuccess} onNavigate={handleNavigate} />
        );
      case 'admin-dashboard':
        return isAdmin ? (
          <AdminDashboardHome onLogout={handleLogout} onNavigate={handleNavigate} />
        ) : (
          <LoginAdminView onLoginSuccess={handleLoginSuccess} onNavigate={handleNavigate} />
        );

      // ADMIN - PROFIL DESA (Admin 1 & Super Admin only)
      case 'admin-profil-tentang':
      case 'admin-profil-sejarah':
      case 'admin-profil-pemerintahan':
      case 'admin-profil-anggaran':
        return isAdmin && (getCurrentAdmin()?.role === 'super_admin' || getCurrentAdmin()?.role === 'admin_1') ? (
          <ProfilDesaAdmin onLogout={handleLogout} onNavigate={handleNavigate} />
        ) : (
          <LoginAdminView onLoginSuccess={handleLoginSuccess} onNavigate={handleNavigate} />
        );

      // ADMIN - POTENSI DESA (Admin 1 & Super Admin only)
      case 'admin-potensi-akomodasi':
      case 'admin-potensi-umkm':
      case 'admin-potensi-budaya':
      case 'admin-potensi-budidaya':
        return isAdmin && (getCurrentAdmin()?.role === 'super_admin' || getCurrentAdmin()?.role === 'admin_1') ? (
          <PotensiDesaAdmin onLogout={handleLogout} onNavigate={handleNavigate} />
        ) : (
          <LoginAdminView onLoginSuccess={handleLoginSuccess} onNavigate={handleNavigate} />
        );

      // ADMIN - PELAYANAN (Admin 1 & Super Admin only)
      case 'admin-pelayanan':
        return isAdmin && (getCurrentAdmin()?.role === 'super_admin' || getCurrentAdmin()?.role === 'admin_1') ? (
          <PelayananAdmin onLogout={handleLogout} onNavigate={handleNavigate} />
        ) : (
          <LoginAdminView onLoginSuccess={handleLoginSuccess} onNavigate={handleNavigate} />
        );

      // ADMIN - HUMAS (Admin 1 & Super Admin only)
      case 'admin-humas-press':
      case 'admin-humas-galeri':
        return isAdmin && (getCurrentAdmin()?.role === 'super_admin' || getCurrentAdmin()?.role === 'admin_1') ? (
          <HumasAdmin onLogout={handleLogout} onNavigate={handleNavigate} />
        ) : (
          <LoginAdminView onLoginSuccess={handleLoginSuccess} onNavigate={handleNavigate} />
        );

      // ADMIN - KRITIK & SARAN (Admin 1 & Super Admin only)
      case 'admin-humas-kritik-saran':
        return isAdmin && (getCurrentAdmin()?.role === 'super_admin' || getCurrentAdmin()?.role === 'admin_1') ? (
          <KritikSaranAdmin onLogout={handleLogout} onNavigate={handleNavigate} />
        ) : (
          <LoginAdminView onLoginSuccess={handleLoginSuccess} onNavigate={handleNavigate} />
        );

      // ADMIN - KONTAK DARURAT (Admin 1 & Super Admin only)
      case 'admin-kontak-darurat':
        return isAdmin && (getCurrentAdmin()?.role === 'super_admin' || getCurrentAdmin()?.role === 'admin_1') ? (
          <KontakDaruratAdmin onLogout={handleLogout} onNavigate={handleNavigate} />
        ) : (
          <LoginAdminView onLoginSuccess={handleLoginSuccess} onNavigate={handleNavigate} />
        );

      // ADMIN - LAPORAN PENDUDUK (Admin 2 & Super Admin only)
      case 'admin-laporan-penduduk':
        return isAdmin && (getCurrentAdmin()?.role === 'super_admin' || getCurrentAdmin()?.role === 'admin_2') ? (
          <LaporanPendudukAdmin onLogout={handleLogout} onNavigate={handleNavigate} />
        ) : (
          <LoginAdminView onLoginSuccess={handleLoginSuccess} onNavigate={handleNavigate} />
        );

      // ADMIN - SETTINGS (Super Admin & Admin 1)
      case 'admin-settings':
        return isAdmin && (getCurrentAdmin()?.role === 'super_admin' || getCurrentAdmin()?.role === 'admin_1') ? (
          <AdminSettings onLogout={handleLogout} onNavigate={handleNavigate} />
        ) : (
          <LoginAdminView onLoginSuccess={handleLoginSuccess} onNavigate={handleNavigate} />
        );

      default:
        return <BerandaView onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] antialiased selection:bg-emerald-200 selection:text-emerald-950">
      <Navbar activePage={activePage} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        <div id="app-page-wrapper">
          {renderContent()}
        </div>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
