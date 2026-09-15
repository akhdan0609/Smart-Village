import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  PhoneCall, 
  Lock, 
  ArrowRight,
  LogOut,
  UserCheck,
  Search,
  MessageCircle,
  Flame,
  Ambulance,
  Shield,
  ShieldAlert,
  Building2,
  ShieldCheck,
  HeartPulse,
  Users
} from 'lucide-react';
import { PageRoute } from '../../types';
import { getAdminAuth, setAdminAuth } from '../../utils/storage';
import { KONTAK_DARURAT_LIST } from '../../data/mockData';
import { AKOMODASI_LIST, UMKM_VISUAL_LIST, BUDAYA_ADAT_LIST, BUDIDAYA_LIST } from '../../data/potensiVisualData';
import logoDesaWarungMenteng from '../../assets/images/logo_warung_menteng.svg';

const DARURAT_ICONS: Record<string, React.ReactNode> = {
  Flame: <Flame className="w-4 h-4" />,
  Ambulance: <Ambulance className="w-4 h-4" />,
  Shield: <Shield className="w-4 h-4" />,
  ShieldAlert: <ShieldAlert className="w-4 h-4" />,
  Building2: <Building2 className="w-4 h-4" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4" />,
  HeartPulse: <HeartPulse className="w-4 h-4" />,
  Users: <Users className="w-4 h-4" />
};

const getDaruratIcon = (iconName?: string) => DARURAT_ICONS[iconName ?? ''] ?? <PhoneCall className="w-4 h-4" />;

interface NavbarProps {
  activePage: PageRoute;
  onNavigate: (page: PageRoute, filterParams?: any) => void;
  onOpenLoginModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenLoginModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [kontakDaruratOpen, setKontakDaruratOpen] = useState(false);
  const [adminAuth, setAdminAuthState] = useState(getAdminAuth());
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const kontakHoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDropdownMouseEnter = (menuName: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setOpenDropdown(menuName);
  };

  const handleDropdownMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleKontakMouseEnter = () => {
    if (kontakHoverTimeoutRef.current) {
      clearTimeout(kontakHoverTimeoutRef.current);
      kontakHoverTimeoutRef.current = null;
    }
    setOpenDropdown(null);
    setKontakDaruratOpen(true);
  };

  const handleKontakMouseLeave = () => {
    if (kontakHoverTimeoutRef.current) {
      clearTimeout(kontakHoverTimeoutRef.current);
    }
    kontakHoverTimeoutRef.current = setTimeout(() => {
      setKontakDaruratOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (kontakHoverTimeoutRef.current) {
        clearTimeout(kontakHoverTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleStorage = () => {
      setAdminAuthState(getAdminAuth());
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: PageRoute, params?: any) => {
    onNavigate(page, params);
    setOpenDropdown(null);
    setKontakDaruratOpen(false);
    setMobileMenuOpen(false);
    setSearchModalOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setAdminAuth(null);
    setAdminAuthState(null);
    handleNavClick('beranda');
  };

  const handleLoginClick = () => {
    if (onOpenLoginModal) {
      onOpenLoginModal();
    } else {
      handleNavClick('login-admin');
    }
  };

  const isProfilActive = activePage.startsWith('profil-') || activePage === 'potensi-situs-sejarah';
  const isPotensiActive = (activePage.startsWith('potensi-') || activePage === 'akomodasi') && activePage !== 'potensi-situs-sejarah';
  const isPelayananActive = activePage.startsWith('pelayanan-');
  const isBeritaActive = activePage.startsWith('berita-') || activePage === 'informasi-berita' || activePage === 'informasi-galeri' || activePage === 'profil-galeri';
  const isKKNActive = activePage.startsWith('kkn');

  // Search items list
  const searchDirectory = [
    { title: 'Beranda Desa', desc: 'Halaman utama portal informasi Desa Warung Menteng', page: 'beranda' as PageRoute, tag: 'Utama' },
    // Profil Desa
    { title: 'Profil Resmi Desa', desc: 'Portal profil resmi, karakteristik wilayah, dan sarana umum desa', page: 'profil-desa' as PageRoute, tag: 'Profil' },
    { title: 'Tentang Desa', desc: 'Infografis visual 9 kartu: profil, sejarah, peta, visi misi, dan demografi', page: 'profil-tentang' as PageRoute, tag: 'Profil' },
    { title: 'Sejarah Desa', desc: 'Asal usul nama Desa Warung Menteng dan garis waktu sejarah', page: 'profil-sejarah' as PageRoute, tag: 'Profil' },
    { title: 'Situs Sejarah & Cagar Budaya', desc: 'Makam leluhur, batu menhir megalitikum, rumah adat Sunda kuno', page: 'potensi-situs-sejarah' as PageRoute, tag: 'Profil' },
    { title: 'Pemerintahan Desa', desc: 'Struktur organisasi dan profil perangkat desa', page: 'profil-pemerintahan' as PageRoute, tag: 'Profil' },
    { title: 'Demografi Kependudukan', desc: 'Data penduduk, rasio gender, kelompok usia, dan KK', page: 'profil-demografi' as PageRoute, tag: 'Profil' },
    { title: 'Lembaga Kemasyarakatan', desc: 'BPD, LPMD, PKK, Karang Taruna, dan Linmas', page: 'profil-lembaga' as PageRoute, tag: 'Profil' },
    { title: 'Anggaran Desa (APBDes)', desc: 'Transparansi pendapatan, belanja desa, dan pembiayaan', page: 'profil-anggaran' as PageRoute, tag: 'Transparansi' },
    // Potensi Desa
    { title: 'Potensi Desa', desc: 'Akomodasi wisata alam, UMKM unggulan, seni budaya adat, dan budidaya peternakan perikanan', page: 'potensi-desa' as PageRoute, tag: 'Potensi' },
    { title: 'Akomodasi Desa', desc: 'Curug Cibaliung, Bukit Menteng, Persawahan Terasering, Camping Ground', page: 'potensi-akomodasi' as PageRoute, tag: 'Potensi' },
    { title: 'UMKM Desa', desc: 'Pemberdayaan unit usaha mikro kecil menengah warga desa', page: 'potensi-umkm' as PageRoute, tag: 'Potensi' },
    { title: 'Budaya & Adat Istiadat', desc: 'Upacara Seren Taun Cijeruk, Silat Cimande, Seni Calung', page: 'potensi-budaya' as PageRoute, tag: 'Potensi' },
    { title: 'Budidaya', desc: 'Sentra budidaya kolam air deras nila, mas, dan gurame', page: 'potensi-perikanan' as PageRoute, tag: 'Potensi' },
    // Pelayanan Desa
    { title: 'Pelayanan Desa', desc: 'Pusat permohonan surat administrasi, kependudukan, nikah, dan pindah datang', page: 'pelayanan-desa' as PageRoute, tag: 'Pelayanan' },
    { title: 'Surat Keterangan (Domisili, SKU, SKTM)', desc: 'Layanan online surat domisili, usaha, dan tidak mampu', page: 'pelayanan-surat-keterangan' as PageRoute, tag: 'Pelayanan' },
    { title: 'Pindah Datang (SKPWNI)', desc: 'Surat keterangan pindah keluar dan masuk kependudukan', page: 'pelayanan-pindah-datang' as PageRoute, tag: 'Pelayanan' },
    { title: 'Layanan Pernikahan (N1 - N4)', desc: 'Surat pengantar nikah desa, formulir N1-N4 dan KUA', page: 'pelayanan-layanan-pernikahan' as PageRoute, tag: 'Pelayanan' },
    // HUMAS
    { title: 'Press Release', desc: 'Siaran pers resmi publikasi kegiatan & kebijakan desa', page: 'berita-press-release' as PageRoute, tag: 'HUMAS' },
    { title: 'Galeri Foto (Dokumentasi Desa)', desc: 'Dokumentasi & Keindahan Desa - Galeri Resmi Desa Warung Menteng', page: 'berita-galeri' as PageRoute, tag: 'HUMAS' },
    // KKN
    { title: 'Latar Belakang KKN', desc: 'Latar belakang pengabdian mahasiswa di Warung Menteng', page: 'kkn-latar-belakang' as PageRoute, tag: 'KKN' },
    { title: 'Album Kami KKN', desc: 'Album foto dokumentasi kegiatan KKN Wigata Dharma', page: 'kkn-galeri' as PageRoute, tag: 'KKN' },
    // Kontak Darurat
    { title: 'Kontak Darurat 24 Jam', desc: 'Ambulans desa, Damkar, BPBD, Bhabinkamtibmas, Babinsa', page: 'kontak-darurat' as PageRoute, tag: 'Darurat' },
    // Akomodasi / Wisata individual
    ...AKOMODASI_LIST.map(item => ({
      title: item.nama,
      desc: (item.deskripsi || '').slice(0, 90),
      page: 'potensi-akomodasi-detail' as PageRoute,
      tag: 'Wisata',
      params: { itemId: item.id }
    })),
    // UMKM individual
    ...UMKM_VISUAL_LIST.map(item => ({
      title: item.nama,
      desc: (item.deskripsi || '').slice(0, 90),
      page: 'potensi-umkm-detail' as PageRoute,
      tag: 'UMKM',
      params: { umkmId: item.id }
    })),
    // Budaya & Adat individual
    ...BUDAYA_ADAT_LIST.map(item => ({
      title: item.nama,
      desc: (item.deskripsi || '').slice(0, 90),
      page: 'potensi-budaya-detail' as PageRoute,
      tag: 'Budaya',
      params: { itemId: item.id }
    })),
    // Budidaya individual
    ...BUDIDAYA_LIST.map(item => ({
      title: item.nama,
      desc: (item.deskripsi || '').slice(0, 90),
      page: 'potensi-budidaya-detail' as PageRoute,
      tag: 'Budidaya',
      params: { itemId: item.id }
    }))
  ];

  const isProfilPage = activePage.startsWith('profil-') || activePage === 'potensi-situs-sejarah';
  const isPotensiPage = (activePage === 'potensi-desa' || activePage.startsWith('potensi-') || activePage === 'akomodasi') && activePage !== 'potensi-situs-sejarah';
  const isPelayananPage = activePage === 'pelayanan-desa' || activePage.startsWith('pelayanan-');
  const isKKNPage = activePage.startsWith('kkn');
  const isBeritaPage = activePage.startsWith('berita-') || activePage.startsWith('informasi-');
  const isKontakDaruratPage = activePage === 'kontak-darurat' || activePage.startsWith('kontak-darurat');

  // Sembunyikan fitur pencarian pada Profil Desa, Potensi Desa, Pelayanan, KKN, dan Kontak Darurat
  const hideSearch = isProfilPage || isPotensiPage || isPelayananPage || isKKNPage || isKontakDaruratPage;

  // Sembunyikan fitur kontak darurat pada Profil Desa, Potensi Desa, Pelayanan, KKN, dan Berita
  const hideKontakDarurat = isProfilPage || isPotensiPage || isPelayananPage || isKKNPage || isBeritaPage;

  const searchResults = searchQuery.trim() === ''
    ? searchDirectory.slice(0, 8)
    : searchDirectory.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] border-b border-slate-200/75 transition-all duration-200" ref={dropdownRef}>
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4 min-w-0">
          
          {/* 1. Logo & Village Title (Left) */}
          <div 
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-3 cursor-pointer group select-none min-w-0"
          >
            {/* Official Village Emblem Logo */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-xs border border-emerald-700/20 group-hover:shadow-md group-hover:scale-105 transition-all duration-200 shrink-0 flex items-center justify-center p-0.5 overflow-hidden">
              <img 
                src={logoDesaWarungMenteng} 
                alt="Logo Desa Warung Menteng" 
                className="w-full h-full object-contain rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="min-w-0">
              <span className="text-[15px] sm:text-base font-bold tracking-tight text-slate-900 block leading-tight truncate group-hover:text-[#0e3e2f] transition-colors">
                Desa Warung Menteng
              </span>
              <p className="text-[11px] text-slate-500 font-normal tracking-normal truncate mt-0.5">
                Kec. Cijeruk, Kab. Bogor
              </p>
            </div>
          </div>

          {/* 2. Desktop Nav Links (High-End Agency Typography & Spacing) */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[13.5px]">
            {/* BERANDA */}
            <button
              onClick={() => handleNavClick('beranda')}
              className={`relative py-2.5 transition-colors duration-200 cursor-pointer ${
                activePage === 'beranda'
                  ? 'text-[#0e3e2f] font-semibold'
                  : 'text-slate-600 hover:text-slate-900 font-medium'
              }`}
            >
              <span>Beranda</span>
              {activePage === 'beranda' && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#0e3e2f] rounded-full animate-in fade-in duration-200" />
              )}
            </button>

            {/* PROFIL DESA Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownMouseEnter('profil')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button
                onClick={() => handleNavClick('profil-desa')}
                className={`group relative flex items-center gap-1.5 py-2.5 transition-colors duration-200 cursor-pointer ${
                  isProfilActive
                    ? 'text-[#0e3e2f] font-semibold'
                    : 'text-slate-600 hover:text-slate-900 font-medium'
                }`}
              >
                <span>Profil Desa</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-transform duration-200 ${
                    openDropdown === 'profil' ? 'rotate-180 text-[#0e3e2f]' : ''
                  }`} 
                />
                {isProfilActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#0e3e2f] rounded-full animate-in fade-in duration-200" />
                )}
              </button>

              {openDropdown === 'profil' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3">
                  <button
                    onClick={() => handleNavClick('profil-tentang')}
                    className={`w-full text-left px-3.5 py-2.5 text-xs rounded-xl flex items-center justify-between transition-colors duration-150 cursor-pointer ${
                      activePage === 'profil-tentang'
                        ? 'bg-emerald-50 text-[#0e3e2f] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <span>Tentang Desa</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('profil-sejarah')}
                    className={`w-full text-left px-3.5 py-2.5 text-xs rounded-xl flex items-center justify-between transition-colors duration-150 cursor-pointer ${
                      activePage === 'profil-sejarah' || activePage === 'potensi-situs-sejarah'
                        ? 'bg-emerald-50 text-[#0e3e2f] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <span>Sejarah Desa</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('profil-pemerintahan')}
                    className={`w-full text-left px-3.5 py-2.5 text-xs rounded-xl flex items-center justify-between transition-colors duration-150 cursor-pointer ${
                      activePage === 'profil-pemerintahan'
                        ? 'bg-emerald-50 text-[#0e3e2f] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <span>Pemerintahan Desa</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('profil-anggaran')}
                    className={`w-full text-left px-3.5 py-2.5 text-xs rounded-xl flex items-center justify-between transition-colors duration-150 cursor-pointer ${
                      activePage === 'profil-anggaran'
                        ? 'bg-emerald-50 text-[#0e3e2f] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <span>Anggaran Desa</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                </div>
              )}
            </div>

            {/* POTENSI DESA Dropdown (Uniform Title Case & Medium/SemiBold weight) */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownMouseEnter('potensi')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button
                onClick={() => handleNavClick('potensi-desa')}
                className={`group relative flex items-center gap-1.5 py-2.5 transition-colors duration-200 cursor-pointer ${
                  isPotensiActive
                    ? 'text-[#0e3e2f] font-semibold'
                    : 'text-slate-600 hover:text-slate-900 font-medium'
                }`}
              >
                <span>Potensi Desa</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-transform duration-200 ${
                    openDropdown === 'potensi' ? 'rotate-180 text-[#0e3e2f]' : ''
                  }`} 
                />
                {isPotensiActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#0e3e2f] rounded-full animate-in fade-in duration-200" />
                )}
              </button>

              {openDropdown === 'potensi' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-60 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3">
                  <button
                    onClick={() => handleNavClick('potensi-akomodasi')}
                    className={`w-full text-left px-3.5 py-2.5 text-xs rounded-xl flex items-center justify-between transition-colors duration-150 cursor-pointer ${
                      activePage === 'potensi-akomodasi'
                        ? 'bg-emerald-50 text-[#0e3e2f] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <span>Akomodasi</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('potensi-umkm')}
                    className={`w-full text-left px-3.5 py-2.5 text-xs rounded-xl flex items-center justify-between transition-colors duration-150 cursor-pointer ${
                      activePage === 'potensi-umkm'
                        ? 'bg-emerald-50 text-[#0e3e2f] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <span>UMKM</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('potensi-budaya')}
                    className={`w-full text-left px-3.5 py-2.5 text-xs rounded-xl flex items-center justify-between transition-colors duration-150 cursor-pointer ${
                      activePage === 'potensi-budaya'
                        ? 'bg-emerald-50 text-[#0e3e2f] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <span>Budaya & Adat</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('potensi-perikanan')}
                    className={`w-full text-left px-3.5 py-2.5 text-xs rounded-xl flex items-center justify-between transition-colors duration-150 cursor-pointer ${
                      activePage === 'potensi-perikanan'
                        ? 'bg-emerald-50 text-[#0e3e2f] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <span>Budidaya</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                </div>
              )}
            </div>

            {/* PELAYANAN Dropdown (Uniform Title Case & Medium/SemiBold weight) */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownMouseEnter('pelayanan')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button
                onClick={() => handleNavClick('pelayanan-desa')}
                className={`group relative flex items-center gap-1.5 py-2.5 transition-colors duration-200 cursor-pointer ${
                  isPelayananActive
                    ? 'text-[#0e3e2f] font-semibold'
                    : 'text-slate-600 hover:text-slate-900 font-medium'
                }`}
              >
                <span>Pelayanan</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-transform duration-200 ${
                    openDropdown === 'pelayanan' ? 'rotate-180 text-[#0e3e2f]' : ''
                  }`} 
                />
                {isPelayananActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#0e3e2f] rounded-full animate-in fade-in duration-200" />
                )}
              </button>

              {openDropdown === 'pelayanan' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-60 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3">
                  <button
                    onClick={() => handleNavClick('pelayanan-surat-keterangan')}
                    className={`w-full text-left px-3.5 py-2.5 text-xs rounded-xl flex items-center justify-between transition-colors duration-150 cursor-pointer ${
                      activePage === 'pelayanan-surat-keterangan'
                        ? 'bg-emerald-50 text-[#0e3e2f] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <span>Surat Keterangan</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('pelayanan-pindah-datang')}
                    className={`w-full text-left px-3.5 py-2.5 text-xs rounded-xl flex items-center justify-between transition-colors duration-150 cursor-pointer ${
                      activePage === 'pelayanan-pindah-datang'
                        ? 'bg-emerald-50 text-[#0e3e2f] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <span>Pindah Datang</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('pelayanan-layanan-pernikahan')}
                    className={`w-full text-left px-3.5 py-2.5 text-xs rounded-xl flex items-center justify-between transition-colors duration-150 cursor-pointer ${
                      activePage === 'pelayanan-layanan-pernikahan'
                        ? 'bg-emerald-50 text-[#0e3e2f] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <span>Layanan Pernikahan</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                </div>
              )}
            </div>

            {/* HUMAS Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownMouseEnter('berita')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button
                onClick={() => handleNavClick('berita-press-release')}
                className={`group relative flex items-center gap-1.5 py-2.5 transition-colors duration-200 cursor-pointer ${
                  isBeritaActive
                    ? 'text-[#0e3e2f] font-semibold'
                    : 'text-slate-600 hover:text-slate-900 font-medium'
                }`}
              >
                <span>Humas</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-transform duration-200 ${
                    openDropdown === 'berita' ? 'rotate-180 text-[#0e3e2f]' : ''
                  }`} 
                />
                {isBeritaActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#0e3e2f] rounded-full animate-in fade-in duration-200" />
                )}
              </button>

              {openDropdown === 'berita' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3">
                  <button
                    onClick={() => handleNavClick('berita-press-release')}
                    className={`w-full text-left px-3.5 py-2.5 text-xs rounded-xl flex items-center justify-between transition-colors duration-150 cursor-pointer ${
                      activePage === 'berita-press-release'
                        ? 'bg-emerald-50 text-[#0e3e2f] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <span>Press Release</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('berita-galeri')}
                    className={`w-full text-left px-3.5 py-2.5 text-xs rounded-xl flex items-center justify-between transition-colors duration-150 cursor-pointer ${
                      activePage === 'berita-galeri' || activePage === 'profil-galeri'
                        ? 'bg-emerald-50 text-[#0e3e2f] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <span>Galeri Foto</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                </div>
              )}
            </div>

            {/* KKN Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownMouseEnter('kkn')}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button
                onClick={() => handleNavClick('kkn')}
                className={`group relative flex items-center gap-1.5 py-2.5 transition-colors duration-200 cursor-pointer ${
                  isKKNActive
                    ? 'text-[#0e3e2f] font-semibold'
                    : 'text-slate-600 hover:text-slate-900 font-medium'
                }`}
              >
                <span>KKN</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-transform duration-200 ${
                    openDropdown === 'kkn' ? 'rotate-180 text-[#0e3e2f]' : ''
                  }`} 
                />
                {isKKNActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#0e3e2f] rounded-full animate-in fade-in duration-200" />
                )}
              </button>

              {openDropdown === 'kkn' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3">
                  <button
                    onClick={() => handleNavClick('kkn-latar-belakang')}
                    className={`w-full text-left px-3.5 py-2.5 text-xs rounded-xl flex items-center justify-between transition-colors duration-150 cursor-pointer ${
                      activePage === 'kkn-latar-belakang'
                        ? 'bg-emerald-50 text-[#0e3e2f] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <span>Latar Belakang</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                  <button
                    onClick={() => handleNavClick('kkn-galeri')}
                    className={`w-full text-left px-3.5 py-2.5 text-xs rounded-xl flex items-center justify-between transition-colors duration-150 cursor-pointer ${
                      activePage === 'kkn-galeri'
                        ? 'bg-emerald-50 text-[#0e3e2f] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <span>Album Kami</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* 3. Right Actions: Search Button + Emergency Button + Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Fitur Pencarian Portal Desa Warung Menteng */}
            {!hideSearch && (
              <button
                onClick={() => setSearchModalOpen(true)}
                title="Pencarian Portal Desa Warung Menteng"
                aria-label="Pencarian Portal Desa Warung Menteng"
                className="w-10 h-10 rounded-xl bg-slate-50/80 hover:bg-slate-100 border border-slate-200/80 hover:border-slate-300 text-slate-600 hover:text-[#0e3e2f] shadow-2xs flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 shrink-0"
              >
                <Search className="w-4 h-4" />
              </button>
            )}

            {!hideKontakDarurat && (
              <div 
                className="relative"
                onMouseEnter={handleKontakMouseEnter}
                onMouseLeave={handleKontakMouseLeave}
              >
                <button
                  onClick={() => {
                    setKontakDaruratOpen(prev => !prev);
                    setOpenDropdown(null);
                  }}
                  aria-haspopup="true"
                  aria-expanded={kontakDaruratOpen}
                  className={`group relative bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-[13px] font-semibold px-3.5 sm:px-4 py-2.5 rounded-xl shadow-xs hover:shadow-sm transition-all duration-200 flex items-center gap-2 whitespace-nowrap cursor-pointer active:scale-95 ${
                    kontakDaruratOpen ? 'bg-rose-700 ring-2 ring-rose-500/20' : ''
                  }`}
                >
                  <PhoneCall className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-12" />
                  <span className="hidden min-[380px]:inline tracking-tight">Kontak Darurat</span>
                  <ChevronDown className={`w-3.5 h-3.5 opacity-80 transition-transform duration-200 ${kontakDaruratOpen ? 'rotate-180' : ''}`} />
                </button>

                {kontakDaruratOpen && (
                  <>
                    {/* 1. Mobile Modal Center (< 640px - Rendered via Portal so it is in front of the sticky navbar) */}
                    {createPortal(
                    <div 
                      className="sm:hidden fixed inset-0 z-[9999] bg-slate-950/75 overflow-y-auto animate-in fade-in duration-150"
                    >
                      <div className="flex min-h-full items-center justify-center p-3">
                        <div 
                          className="max-h-[calc(100dvh-1.5rem)] w-[92vw] max-w-md bg-white rounded-2xl flex flex-col overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-150"
                          onClick={e => e.stopPropagation()}
                        >
                        {/* Header */}
                        <div className="flex-shrink-0 p-3.5 border-b border-slate-100 flex items-center justify-between bg-white">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#0e3e2f] flex items-center justify-center shrink-0">
                              <PhoneCall className="w-4 h-4" />
                            </div>
                            <div>
                              <h3 className="text-sm font-bold text-slate-900 leading-tight">
                                Kontak Darurat 24 Jam
                              </h3>
                              <p className="text-[11px] text-slate-500 mt-0.5">
                                Layanan Siaga Desa Warung Menteng
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => setKontakDaruratOpen(false)}
                            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition cursor-pointer"
                            aria-label="Tutup Kontak Darurat"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Daftar Kontak */}
                        <div className="flex-1 overflow-y-auto p-2.5 space-y-1">
                          {KONTAK_DARURAT_LIST.map(item => {
                            const isDamkar = item.id === 'dar-1';
                            const waLink = isDamkar 
                              ? 'https://wa.me/+628567785200' 
                              : item.nomorWA ? `https://wa.me/${item.nomorWA}` : null;

                            return (
                              <div
                                key={item.id}
                                className="flex items-center gap-3 px-2.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors duration-150 border border-transparent hover:border-slate-100"
                              >
                                {/* Icon */}
                                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#0e3e2f] flex items-center justify-center shrink-0">
                                  {getDaruratIcon(item.iconName)}
                                </div>

                                {/* Nama & Nomor */}
                                <div className="min-w-0 flex-1">
                                  <span className="block text-xs font-bold text-slate-900 truncate leading-tight">
                                    {item.namaLayanan ?? item.instansi}
                                  </span>
                                  <span className="block text-[10px] text-slate-500 truncate leading-tight mt-0.5">
                                    {item.instansi}
                                  </span>
                                  <span className="block text-[11px] font-semibold text-slate-700 truncate leading-tight mt-0.5">
                                    {isDamkar ? '(0251) 829-1505' : item.nomorTelepon}
                                  </span>
                                </div>

                                {/* WhatsApp Action Button */}
                                <div className="flex items-center gap-2 shrink-0">
                                  {waLink && (
                                    <a
                                      href={waLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={(e) => { e.stopPropagation(); window.setTimeout(() => setKontakDaruratOpen(false), 200); }}
                                      title="WhatsApp"
                                      aria-label={`WhatsApp ${item.namaLayanan ?? item.instansi}`}
                                      className="w-11 h-11 rounded-xl bg-[#25D366]/10 text-[#1e9e52] active:bg-[#25D366] active:text-white flex items-center justify-center transition-colors duration-150"
                                    >
                                      <MessageCircle className="w-5 h-5" />
                                    </a>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Footer */}
                        <div className="flex-shrink-0 p-3 border-t border-slate-100 bg-white">
                          <button
                            type="button"
                            onClick={() => {
                              setKontakDaruratOpen(false);
                              handleNavClick('kontak-darurat');
                            }}
                            className="w-full text-center text-xs font-bold text-white bg-[#0e3e2f] hover:bg-[#124a35] rounded-xl py-2.5 px-4 transition shadow-xs cursor-pointer active:scale-[0.99]"
                          >
                            Lihat Semua Kontak Darurat
                          </button>
                        </div>
                        </div>
                      </div>
                    </div>,
                    document.body
                    )}

                    {/* 2. Desktop & Tablet Anchored Dropdown (>= 640px) */}
                    <div className="hidden sm:flex flex-col absolute right-0 top-full mt-2 w-[380px] max-h-[80vh] bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 z-50 animate-in fade-in slide-in-from-top-2 duration-150 origin-top-right overflow-hidden before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3">
                      {/* Header */}
                      <div className="flex-shrink-0 px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-white">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#0e3e2f] flex items-center justify-center shrink-0">
                            <PhoneCall className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-slate-900 leading-tight">
                              Kontak Darurat 24 Jam
                            </h3>
                            <p className="text-[11px] text-slate-500 mt-0.5">
                              Layanan Siaga Desa Warung Menteng
                            </p>
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold text-rose-700 bg-rose-50 border border-rose-100 px-2.5 py-1 rounded-full">
                          Siaga 24 Jam
                        </span>
                      </div>

                      {/* Daftar Kontak */}
                      <div className="flex-1 min-h-0 overflow-y-auto max-h-[380px] p-2 space-y-1">
                        {KONTAK_DARURAT_LIST.map(item => {
                          const isDamkar = item.id === 'dar-1';
                          const waLink = isDamkar 
                            ? 'https://wa.me/+628567785200' 
                            : item.nomorWA ? `https://wa.me/${item.nomorWA}` : null;

                          return (
                            <div
                              key={item.id}
                              className="flex items-center gap-3 px-2.5 py-2 rounded-xl hover:bg-slate-50 transition-colors duration-150"
                            >
                              {/* Icon */}
                              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#0e3e2f] flex items-center justify-center shrink-0">
                                {getDaruratIcon(item.iconName)}
                              </div>

                              {/* Nama & Nomor */}
                              <div className="min-w-0 flex-1">
                                <span className="block text-xs font-bold text-slate-900 truncate leading-tight">
                                  {item.namaLayanan ?? item.instansi}
                                </span>
                                <span className="block text-[10px] text-slate-500 truncate leading-tight mt-0.5">
                                  {item.instansi}
                                </span>
                                <span className="block text-[11px] font-semibold text-slate-700 truncate leading-tight mt-0.5">
                                  {isDamkar ? '(0251) 829-1505' : item.nomorTelepon}
                                </span>
                              </div>

                              {/* WhatsApp Action Button */}
                              <div className="flex items-center gap-1.5 shrink-0">
                                {waLink && (
                                  <a
                                    href={waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => { e.stopPropagation(); window.setTimeout(() => setKontakDaruratOpen(false), 200); }}
                                    title="WhatsApp"
                                    aria-label={`WhatsApp ${item.namaLayanan ?? item.instansi}`}
                                    className="w-8 h-8 rounded-lg bg-[#25D366]/10 text-[#1e9e52] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors duration-150"
                                  >
                                    <MessageCircle className="w-4 h-4" />
                                  </a>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Footer */}
                      <div className="flex-shrink-0 border-t border-slate-100 p-2 bg-white">
                        <button
                          onClick={() => {
                            setKontakDaruratOpen(false);
                            handleNavClick('kontak-darurat');
                          }}
                          className="w-full text-center text-xs font-bold text-white bg-[#0e3e2f] hover:bg-[#124a35] rounded-xl py-2.5 px-3 transition shadow-xs cursor-pointer active:scale-[0.99]"
                        >
                          Lihat Semua Kontak Darurat
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#0e3e2f] hover:bg-slate-100 md:hidden transition cursor-pointer"
              aria-label="Buka Menu Navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Quick Search Modal */}
      {searchModalOpen && createPortal(
        <div className="fixed inset-0 z-[9999] bg-slate-900/60 flex items-start justify-center p-4 pt-20 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl border border-slate-200 overflow-hidden space-y-4 p-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-base">
                <Search className="w-5 h-5 text-emerald-600" />
                <span>Pencarian Portal Desa Warung Menteng</span>
              </div>
              <button 
                onClick={() => setSearchModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                autoFocus
                placeholder="Cari surat, HUMAS, profil, KKN, wisata, atau kontak darurat..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
              />
            </div>

            <div className="max-h-80 overflow-y-auto space-y-2 pr-1">
              {searchResults.length > 0 ? (
                searchResults.map((res, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleNavClick(res.page, (res as any).params)}
                    className="p-3.5 rounded-2xl hover:bg-emerald-50/80 border border-transparent hover:border-emerald-200 transition cursor-pointer flex items-center justify-between group"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 group-hover:bg-emerald-200 group-hover:text-emerald-900 px-2 py-0.5 rounded">
                          {res.tag}
                        </span>
                        <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-900">
                          {res.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">
                        {res.desc}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition" />
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-slate-400 text-sm">
                  Tidak ditemukan hasil untuk "{searchQuery}".
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto space-y-2.5 animate-in slide-in-from-top-2 duration-150">
          {/* Search box for mobile */}
          {!hideSearch && (
            <div 
              onClick={() => { setSearchModalOpen(true); setMobileMenuOpen(false); }}
              className="flex items-center justify-between px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500 cursor-pointer hover:bg-slate-100 transition-colors"
            >
              <span>Cari informasi atau layanan...</span>
              <Search className="w-4 h-4 text-slate-400" />
            </div>
          )}

          <button
            onClick={() => handleNavClick('beranda')}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm transition-colors duration-150 ${
              activePage === 'beranda' 
                ? 'bg-emerald-50 text-[#0e3e2f] font-semibold' 
                : 'text-slate-700 hover:bg-slate-50 font-medium'
            }`}
          >
            Beranda
          </button>

          {/* Profil Desa Mobile Accordion */}
          <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50">
            <div className="flex items-center justify-between pr-2">
              <button
                onClick={() => handleNavClick('profil-desa')}
                className={`flex-1 text-left px-3.5 py-2.5 text-sm transition-colors duration-150 ${
                  isProfilActive ? 'text-[#0e3e2f] font-semibold' : 'text-slate-700 font-medium'
                }`}
              >
                Profil Desa
              </button>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'm-profil' ? null : 'm-profil')}
                className="p-2 text-slate-400 hover:text-slate-700 cursor-pointer"
                aria-label="Buka submenu Profil Desa"
              >
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'm-profil' ? 'rotate-180 text-[#0e3e2f]' : ''}`} />
              </button>
            </div>
            {openDropdown === 'm-profil' && (
              <div className="p-1.5 space-y-1 bg-white border-t border-slate-100">
                <button
                  onClick={() => handleNavClick('profil-tentang')}
                  className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors ${
                    activePage === 'profil-tentang'
                      ? 'bg-emerald-50 text-[#0e3e2f] font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 font-medium'
                  }`}
                >
                  Tentang Desa
                </button>
                <button
                  onClick={() => handleNavClick('profil-sejarah')}
                  className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors ${
                    activePage === 'profil-sejarah' || activePage === 'potensi-situs-sejarah'
                      ? 'bg-emerald-50 text-[#0e3e2f] font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 font-medium'
                  }`}
                >
                  Sejarah Desa
                </button>
                <button
                  onClick={() => handleNavClick('profil-pemerintahan')}
                  className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors ${
                    activePage === 'profil-pemerintahan'
                      ? 'bg-emerald-50 text-[#0e3e2f] font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 font-medium'
                  }`}
                >
                  Pemerintahan Desa
                </button>
                <button
                  onClick={() => handleNavClick('profil-anggaran')}
                  className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors ${
                    activePage === 'profil-anggaran'
                      ? 'bg-emerald-50 text-[#0e3e2f] font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 font-medium'
                  }`}
                >
                  Anggaran Desa
                </button>
              </div>
            )}
          </div>

          {/* Potensi Desa Mobile Accordion */}
          <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50">
            <div className="flex items-center justify-between pr-2">
              <button
                onClick={() => handleNavClick('potensi-desa')}
                className={`flex-1 text-left px-3.5 py-2.5 text-sm transition-colors duration-150 ${
                  isPotensiActive ? 'text-[#0e3e2f] font-semibold' : 'text-slate-700 font-medium'
                }`}
              >
                Potensi Desa
              </button>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'm-potensi' ? null : 'm-potensi')}
                className="p-2 text-slate-400 hover:text-slate-700 cursor-pointer"
                aria-label="Buka submenu Potensi Desa"
              >
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'm-potensi' ? 'rotate-180 text-[#0e3e2f]' : ''}`} />
              </button>
            </div>
            {openDropdown === 'm-potensi' && (
              <div className="p-1.5 space-y-1 bg-white border-t border-slate-100">
                <button
                  onClick={() => handleNavClick('potensi-akomodasi')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-600 hover:bg-slate-50 font-medium"
                >
                  Akomodasi
                </button>
                <button
                  onClick={() => handleNavClick('potensi-umkm')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-600 hover:bg-slate-50 font-medium"
                >
                  UMKM
                </button>
                <button
                  onClick={() => handleNavClick('potensi-budaya')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-600 hover:bg-slate-50 font-medium"
                >
                  Budaya & Adat
                </button>
                <button
                  onClick={() => handleNavClick('potensi-perikanan')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-600 hover:bg-slate-50 font-medium"
                >
                  Budidaya
                </button>
              </div>
            )}
          </div>

          {/* Pelayanan Mobile Accordion */}
          <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50">
            <div className="flex items-center justify-between pr-2">
              <button
                onClick={() => handleNavClick('pelayanan-desa')}
                className={`flex-1 text-left px-3.5 py-2.5 text-sm transition-colors duration-150 ${
                  isPelayananActive ? 'text-[#0e3e2f] font-semibold' : 'text-slate-700 font-medium'
                }`}
              >
                Pelayanan
              </button>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'm-pelayanan' ? null : 'm-pelayanan')}
                className="p-2 text-slate-400 hover:text-slate-700 cursor-pointer"
                aria-label="Buka submenu Pelayanan"
              >
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'm-pelayanan' ? 'rotate-180 text-[#0e3e2f]' : ''}`} />
              </button>
            </div>
            {openDropdown === 'm-pelayanan' && (
              <div className="p-1.5 space-y-1 bg-white border-t border-slate-100">
                <button
                  onClick={() => handleNavClick('pelayanan-surat-keterangan')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-600 hover:bg-slate-50 font-medium"
                >
                  Surat Keterangan
                </button>
                <button
                  onClick={() => handleNavClick('pelayanan-pindah-datang')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-600 hover:bg-slate-50 font-medium"
                >
                  Pindah Datang
                </button>
                <button
                  onClick={() => handleNavClick('pelayanan-layanan-pernikahan')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-600 hover:bg-slate-50 font-medium"
                >
                  Layanan Pernikahan
                </button>
              </div>
            )}
          </div>

          {/* Humas Mobile Accordion */}
          <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50">
            <div className="flex items-center justify-between pr-2">
              <button
                onClick={() => handleNavClick('berita-press-release')}
                className={`flex-1 text-left px-3.5 py-2.5 text-sm transition-colors duration-150 ${
                  isBeritaActive ? 'text-[#0e3e2f] font-semibold' : 'text-slate-700 font-medium'
                }`}
              >
                Humas
              </button>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'm-berita' ? null : 'm-berita')}
                className="p-2 text-slate-400 hover:text-slate-700 cursor-pointer"
                aria-label="Buka submenu Humas"
              >
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'm-berita' ? 'rotate-180 text-[#0e3e2f]' : ''}`} />
              </button>
            </div>
            {openDropdown === 'm-berita' && (
              <div className="p-1.5 space-y-1 bg-white border-t border-slate-100">
                <button
                  onClick={() => handleNavClick('berita-press-release')}
                  className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors ${
                    activePage === 'berita-press-release'
                      ? 'bg-emerald-50 text-[#0e3e2f] font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 font-medium'
                  }`}
                >
                  Press Release
                </button>
                <button
                  onClick={() => handleNavClick('berita-galeri')}
                  className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors ${
                    activePage === 'berita-galeri' || activePage === 'profil-galeri'
                      ? 'bg-emerald-50 text-[#0e3e2f] font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 font-medium'
                  }`}
                >
                  Galeri Foto
                </button>
              </div>
            )}
          </div>

          {/* KKN Mobile Accordion */}
          <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50">
            <div className="flex items-center justify-between pr-2">
              <button
                onClick={() => handleNavClick('kkn')}
                className={`flex-1 text-left px-3.5 py-2.5 text-sm transition-colors duration-150 ${
                  isKKNActive ? 'text-[#0e3e2f] font-semibold' : 'text-slate-700 font-medium'
                }`}
              >
                KKN
              </button>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'm-kkn' ? null : 'm-kkn')}
                className="p-2 text-slate-400 hover:text-slate-700 cursor-pointer"
                aria-label="Buka submenu KKN"
              >
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'm-kkn' ? 'rotate-180 text-[#0e3e2f]' : ''}`} />
              </button>
            </div>
            {openDropdown === 'm-kkn' && (
              <div className="p-1.5 space-y-1 bg-white border-t border-slate-100">
                <button
                  onClick={() => handleNavClick('kkn-latar-belakang')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-600 hover:bg-slate-50 font-medium"
                >
                  Latar Belakang
                </button>
                <button
                  onClick={() => handleNavClick('kkn-galeri')}
                  className="w-full text-left px-3 py-2 text-xs rounded-lg text-slate-600 hover:bg-slate-50 font-medium"
                >
                  Album Kami
                </button>
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            {!hideKontakDarurat ? (
              <button
                onClick={() => handleNavClick('kontak-darurat')}
                className="text-xs font-semibold text-rose-700 flex items-center gap-1.5 py-1 hover:text-rose-800 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Kontak Darurat 24 Jam</span>
              </button>
            ) : <div />}

            <button
              onClick={handleLoginClick}
              className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1.5 py-1 font-medium transition-colors"
            >
              <Lock className="w-3 h-3 text-amber-500" />
              <span>Login Admin</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
