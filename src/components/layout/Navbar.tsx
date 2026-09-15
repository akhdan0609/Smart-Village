import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  PhoneCall, 
  Phone,
  MessageSquare,
  Lock, 
  ArrowRight,
  LogOut,
  UserCheck,
  Search
} from 'lucide-react';
import { PageRoute, KontakDaruratItem } from '../../types';
import { getAdminAuth, setAdminAuth } from '../../utils/storage';
import { KONTAK_DARURAT_LIST } from '../../data/mockData';
import logoDesaWarungMenteng from '../../assets/images/logo_warung_menteng.svg';
import { SearchModal } from './SearchModal';

// Icon mapping untuk badge emergency contacts
const getEmergencyIcon = (iconName?: string) => {
  const iconMap: Record<string, string> = {
    'Flame': '🔥',
    'Ambulance': '🚑',
    'Shield': '🛡️',
    'ShieldAlert': '⚠️',
    'Building2': '🏢',
    'ShieldCheck': '✓',
    'HeartPulse': '❤️',
    'Users': '👥'
  };
  return iconMap[iconName || ''] || '📞';
};

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
  const dropdownRef = useRef<HTMLDivElement>(null);
  const emergencyMobileScrollRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const kontakHoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Global shortcut to open search (Ctrl+K or /)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      } else if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll and reset scroll when mobile emergency modal is open
  useEffect(() => {
    if (kontakDaruratOpen) {
      if (emergencyMobileScrollRef.current) {
        emergencyMobileScrollRef.current.scrollTop = 0;
      }
      if (typeof window !== 'undefined' && window.innerWidth < 640) {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = originalOverflow;
        };
      }
    }
  }, [kontakDaruratOpen]);

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
      const target = event.target as Node;
      const emergencyModal = document.getElementById('emergency-modal-portal');
      if (emergencyModal && emergencyModal.contains(target)) {
        return;
      }
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setOpenDropdown(null);
        setKontakDaruratOpen(false);
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

  // Kontak darurat hanya ditampilkan pada halaman Beranda saja
  const hideKontakDarurat = activePage !== 'beranda';

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] border-b border-slate-200/75 transition-all duration-200" ref={dropdownRef}>
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto w-full px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4 min-w-0">
          
          {/* 1. Logo & Village Title (Left) */}
          <div 
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group select-none min-w-0"
          >
            {/* Official Village Emblem Logo */}
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-xs border border-emerald-700/20 group-hover:shadow-md group-hover:scale-105 transition-all duration-200 shrink-0 flex items-center justify-center p-0.5 overflow-hidden">
              <img 
                src={logoDesaWarungMenteng} 
                alt="Logo Desa Warung Menteng" 
                className="w-full h-full object-contain rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="min-w-0">
              <span className="text-sm sm:text-base font-bold tracking-tight text-slate-900 block leading-tight truncate group-hover:text-[#0e3e2f] transition-colors">
                Desa Warung Menteng
              </span>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-normal tracking-normal truncate mt-0.5">
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
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 p-1.5 z-50 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3">
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
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-60 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 p-1.5 z-50 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3">
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
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-60 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 p-1.5 z-50 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3">
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
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 p-1.5 z-50 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3">
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
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 p-1.5 z-50 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3">
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
                    onClick={() => handleNavClick('kkn-program-kerja')}
                    className={`w-full text-left px-3.5 py-2.5 text-xs rounded-xl flex items-center justify-between transition-colors duration-150 cursor-pointer ${
                      activePage === 'kkn-program-kerja'
                        ? 'bg-emerald-50 text-[#0e3e2f] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                    }`}
                  >
                    <span>Program Kerja</span>
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
                    <span>Galeri Kegiatan</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* 3. Right Actions: Search Button + Emergency Button + Mobile Menu Trigger */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Fitur Pencarian Portal Desa Warung Menteng */}
            <button
              onClick={() => setSearchModalOpen(true)}
              title="Pencarian Cepat Portal Desa (Tekan / atau Ctrl+K)"
              aria-label="Pencarian Portal Desa Warung Menteng"
              className="px-2.5 sm:px-3 h-9 sm:h-10 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200/90 hover:border-emerald-300 text-slate-600 hover:text-[#0e3e2f] shadow-2xs flex items-center gap-2 transition-colors cursor-pointer shrink-0"
            >
              <Search className="w-4 h-4 text-emerald-700" />
              <span className="hidden xl:inline text-xs font-medium text-slate-500">Cari...</span>
              <kbd className="hidden xl:inline-block px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] text-slate-400 font-mono">/</kbd>
            </button>

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
                  title="Kontak Darurat 24 Jam"
                  className={`group relative bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-[13px] font-semibold px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-xs hover:shadow-sm transition-all duration-200 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap cursor-pointer active:scale-95 shrink-0 ${
                    kontakDaruratOpen ? 'bg-rose-700 ring-2 ring-rose-500/20' : ''
                  }`}
                >
                  <PhoneCall className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-12 shrink-0" />
                  <span className="hidden sm:inline tracking-tight">Kontak Darurat</span>
                  <span className="hidden min-[420px]:inline sm:hidden tracking-tight">Darurat</span>
                  <ChevronDown className={`w-3.5 h-3.5 opacity-80 transition-transform duration-200 shrink-0 ${kontakDaruratOpen ? 'rotate-180' : ''}`} />
                </button>

                {kontakDaruratOpen && (
                  <>
                    {/* 1. Mobile Modal Center (< 640px - Screen-Centered & Viewport-Safe via Portal) */}
                    {typeof document !== 'undefined' && createPortal(
                      <div 
                        id="emergency-modal-portal"
                        className="sm:hidden fixed inset-0 z-[100] flex items-center justify-center p-3.5 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150"
                        onClick={() => setKontakDaruratOpen(false)}
                      >
                        <div 
                          className="max-h-[calc(100dvh-1.75rem)] w-[94vw] max-w-md bg-white rounded-3xl flex flex-col overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-150"
                          onClick={e => e.stopPropagation()}
                        >
                          {/* Header */}
                          <div className="flex-shrink-0 p-4 border-b border-slate-100 flex items-center justify-between bg-white">
                            <div className="flex items-center gap-2.5">
                              <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                                <PhoneCall className="w-4 h-4" />
                              </div>
                              <div>
                                <h3 className="text-sm font-bold text-slate-900 leading-tight">
                                  Kontak Darurat 24 Jam
                                </h3>
                                <p className="text-[11px] text-slate-500 mt-0.5">
                                  Sentuh tombol hubungi untuk langsung menelepon
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => setKontakDaruratOpen(false)}
                              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition cursor-pointer"
                              aria-label="Tutup Kontak Darurat"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Daftar Kontak */}
                          <div 
                            ref={emergencyMobileScrollRef}
                            className="flex-1 overflow-y-auto p-3 space-y-2 overscroll-contain"
                          >
                            {KONTAK_DARURAT_LIST.map((item: KontakDaruratItem) => {
                              const phoneRaw = item.nomorTelepon?.replace(/[^0-9+]/g, '') || '';
                              const waRaw = item.nomorWA?.replace(/[^0-9+]/g, '') || '';
                              return (
                              <div
                                key={item.id}
                                className="flex items-center justify-between p-2.5 rounded-2xl bg-slate-50/80 hover:bg-emerald-50/40 border border-slate-100 hover:border-emerald-200 transition group"
                              >
                                <div className="flex items-center gap-3 min-w-0 flex-1 pr-2">
                                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center shrink-0 border border-emerald-200 shadow-2xs text-lg font-bold">
                                    {getEmergencyIcon(item.iconName)}
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <span className="block text-xs font-bold text-slate-900 truncate">
                                      {item.namaLayanan}
                                    </span>
                                    <span className="block text-[11px] text-slate-500 truncate">
                                      {item.instansi}
                                    </span>
                                    {item.nomorWA ? (
                                      <div className="mt-1 space-y-0.5">
                                        <a
                                          href={`tel:${phoneRaw}`}
                                          onClick={() => setKontakDaruratOpen(false)}
                                          className="flex items-center gap-1.5 text-[11px] text-emerald-800 hover:text-emerald-950 font-bold"
                                          title="Telepon"
                                        >
                                          <span className="text-[9px] px-1.5 py-0.5 bg-emerald-100/90 text-emerald-900 rounded font-semibold shrink-0">Telepon</span>
                                          <span className="truncate">{item.nomorTelepon}</span>
                                        </a>
                                        <a
                                          href={`https://wa.me/${waRaw}`}
                                          target="_blank"
                                          rel="noreferrer"
                                          onClick={() => setKontakDaruratOpen(false)}
                                          className="flex items-center gap-1.5 text-[11px] text-[#128c7e] hover:text-[#075e54] font-bold"
                                          title="WhatsApp"
                                        >
                                          <span className="text-[9px] px-1.5 py-0.5 bg-emerald-100/90 text-emerald-900 rounded font-semibold shrink-0">WA</span>
                                          <span className="truncate">{item.nomorWA}</span>
                                        </a>
                                      </div>
                                    ) : (
                                      <span className="block text-[11px] text-emerald-800 font-bold truncate mt-0.5">
                                        {item.nomorTelepon}
                                      </span>
                                    )}
                                  </div>
                                </div>
                                {item.nomorWA ? (
                                  <div className="flex flex-col gap-1 shrink-0">
                                    <a
                                      href={`tel:${phoneRaw}`}
                                      onClick={() => setKontakDaruratOpen(false)}
                                      className="py-1 px-2.5 rounded-lg bg-[#063b25] hover:bg-[#094d31] text-white text-[11px] font-bold flex items-center justify-center gap-1 shadow-2xs hover:shadow-xs transition duration-150 cursor-pointer active:scale-95"
                                      title="Telepon"
                                    >
                                      <Phone className="w-3 h-3 fill-white" />
                                      <span>Telp</span>
                                    </a>
                                    <a
                                      href={`https://wa.me/${waRaw}`}
                                      target="_blank"
                                      rel="noreferrer"
                                      onClick={() => setKontakDaruratOpen(false)}
                                      className="py-1 px-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-[11px] font-bold flex items-center justify-center gap-1 shadow-2xs hover:shadow-xs transition duration-150 cursor-pointer active:scale-95"
                                      title="WhatsApp"
                                    >
                                      <MessageSquare className="w-3 h-3 fill-white" />
                                      <span>WA</span>
                                    </a>
                                  </div>
                                ) : (
                                  <a
                                    href={`tel:${phoneRaw}`}
                                    onClick={() => setKontakDaruratOpen(false)}
                                    className="py-2 px-3 rounded-xl bg-[#063b25] hover:bg-[#094d31] text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs hover:shadow-xs transition duration-150 cursor-pointer active:scale-95 shrink-0"
                                  >
                                    <Phone className="w-3.5 h-3.5 fill-white" />
                                    <span>Hubungi</span>
                                  </a>
                                )}
                              </div>
                            );
                            })}
                          </div>

                          {/* Footer */}
                          <div className="flex-shrink-0 p-3.5 border-t border-slate-200 bg-slate-50">
                            <button
                              onClick={() => {
                                setKontakDaruratOpen(false);
                                handleNavClick('kontak-darurat');
                              }}
                              className="w-full text-center text-xs font-bold text-white bg-rose-700 hover:bg-rose-800 rounded-xl py-3 px-4 transition shadow-xs cursor-pointer active:scale-[0.99] flex items-center justify-center gap-1.5"
                            >
                              <span>Lihat Semua Kontak Darurat</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>,
                      document.body
                    )}

                    {/* 2. Desktop & Tablet Anchored Dropdown (>= 640px) */}
                    <div className="hidden sm:flex flex-col absolute right-0 top-full mt-2 w-[410px] max-h-[82vh] bg-white rounded-2xl shadow-2xl shadow-slate-900/15 border border-slate-200/90 z-50 animate-in fade-in slide-in-from-top-2 duration-150 origin-top-right overflow-hidden before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3">
                      <div className="flex-shrink-0 px-4 py-3 bg-white border-b border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                            <PhoneCall className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 text-slate-800 font-bold text-xs sm:text-sm">
                              <span>Kontak Darurat 24 Jam</span>
                            </div>
                            <p className="text-[11px] text-slate-500 mt-0.5">
                              Klik tombol hubungi untuk langsung menelepon
                            </p>
                          </div>
                        </div>
                        <span className="text-[10px] text-slate-400 font-medium">Warung Menteng</span>
                      </div>

                      <div className="flex-1 min-h-0 overflow-y-auto max-h-[380px] p-2.5 space-y-2">
                        {KONTAK_DARURAT_LIST.map((item: KontakDaruratItem) => {
                          const phoneRaw = item.nomorTelepon?.replace(/[^0-9+]/g, '') || '';
                          const waRaw = item.nomorWA?.replace(/[^0-9+]/g, '') || '';
                          return (
                          <div
                            key={item.id}
                            className="flex items-center justify-between p-2 rounded-xl bg-slate-50/70 hover:bg-emerald-50/40 border border-slate-100 hover:border-emerald-200 transition group"
                          >
                            <div className="flex items-center gap-2.5 min-w-0 flex-1 pr-2">
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center shrink-0 border border-emerald-200 shadow-2xs text-lg font-bold">
                                {getEmergencyIcon(item.iconName)}
                              </div>
                              <div className="min-w-0 flex-1">
                                <span className="block text-xs font-bold text-slate-900 truncate group-hover:text-emerald-950">
                                  {item.namaLayanan}
                                </span>
                                <span className="block text-[11px] text-slate-500 truncate">
                                  {item.instansi}
                                </span>
                                {item.nomorWA ? (
                                  <div className="mt-0.5 space-y-0.5">
                                    <a
                                      href={`tel:${phoneRaw}`}
                                      onClick={() => setKontakDaruratOpen(false)}
                                      className="flex items-center gap-1.5 text-[11px] text-emerald-800 hover:text-emerald-950 font-bold"
                                      title={`Telepon: ${item.nomorTelepon}`}
                                    >
                                      <span className="text-[9px] px-1.5 py-0.5 bg-emerald-100 text-emerald-900 rounded font-semibold shrink-0">Telp</span>
                                      <span className="truncate">{item.nomorTelepon}</span>
                                    </a>
                                    <a
                                      href={`https://wa.me/${waRaw}`}
                                      target="_blank"
                                      rel="noreferrer"
                                      onClick={() => setKontakDaruratOpen(false)}
                                      className="flex items-center gap-1.5 text-[11px] text-[#128c7e] hover:text-[#075e54] font-bold"
                                      title={`WhatsApp: ${item.nomorWA}`}
                                    >
                                      <span className="text-[9px] px-1.5 py-0.5 bg-emerald-100 text-emerald-900 rounded font-semibold shrink-0">WA</span>
                                      <span className="truncate">{item.nomorWA}</span>
                                    </a>
                                  </div>
                                ) : (
                                  <span className="block text-[11px] text-emerald-800 font-bold tracking-tight">
                                    {item.nomorTelepon}
                                  </span>
                                )}
                              </div>
                            </div>
                            {item.nomorWA ? (
                              <div className="flex flex-col gap-1 shrink-0">
                                <a
                                  href={`tel:${phoneRaw}`}
                                  onClick={() => setKontakDaruratOpen(false)}
                                  className="py-1 px-2.5 rounded-lg bg-[#063b25] hover:bg-[#094d31] text-white text-[11px] font-bold flex items-center justify-center gap-1 shadow-2xs hover:shadow-xs transition duration-150 cursor-pointer active:scale-95"
                                  title={`Telepon: ${item.nomorTelepon}`}
                                >
                                  <Phone className="w-3 h-3 fill-white" />
                                  <span>Telp</span>
                                </a>
                                <a
                                  href={`https://wa.me/${waRaw}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  onClick={() => setKontakDaruratOpen(false)}
                                  className="py-1 px-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-[11px] font-bold flex items-center justify-center gap-1 shadow-2xs hover:shadow-xs transition duration-150 cursor-pointer active:scale-95"
                                  title={`WhatsApp: ${item.nomorWA}`}
                                >
                                  <MessageSquare className="w-3 h-3 fill-white" />
                                  <span>WA</span>
                                </a>
                              </div>
                            ) : (
                              <a
                                href={`tel:${phoneRaw}`}
                                onClick={() => setKontakDaruratOpen(false)}
                                className="py-1.5 px-3 rounded-lg bg-[#063b25] hover:bg-[#094d31] text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs hover:shadow-xs transition duration-150 cursor-pointer active:scale-95 shrink-0"
                                title={`Hubungi ${item.namaLayanan}`}
                              >
                                <Phone className="w-3 h-3 fill-white" />
                                <span>Hubungi</span>
                              </a>
                            )}
                          </div>
                        );
                        })}
                      </div>

                      <div className="flex-shrink-0 border-t border-slate-100 p-2.5 bg-slate-50">
                        <button
                          onClick={() => {
                            setKontakDaruratOpen(false);
                            handleNavClick('kontak-darurat');
                          }}
                          className="w-full text-center text-xs font-bold text-white bg-rose-700 hover:bg-rose-800 rounded-xl py-2.5 px-3 transition shadow-xs cursor-pointer active:scale-[0.99] flex items-center justify-center gap-1.5"
                        >
                          <span>Lihat Semua Kontak Darurat</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Mobile menu trigger */}
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setKontakDaruratOpen(false);
              }}
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl text-slate-700 hover:text-[#0e3e2f] hover:bg-slate-100 md:hidden transition cursor-pointer active:scale-95 shrink-0"
              aria-label={mobileMenuOpen ? "Tutup Menu Navigasi" : "Buka Menu Navigasi"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={handleNavClick}
      />

      {/* Mobile Menu Drawer with Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 top-16 sm:top-20 z-40 bg-slate-950/40 backdrop-blur-xs"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-xl px-4 pt-3.5 pb-6 max-h-[calc(100vh-4.5rem)] overflow-y-auto space-y-2.5"
            onClick={e => e.stopPropagation()}
          >
            {/* Search box for mobile */}
            <div 
              onClick={() => { setSearchModalOpen(true); setMobileMenuOpen(false); }}
              className="flex items-center justify-between px-3.5 py-2.5 bg-slate-50 border border-slate-200/90 rounded-xl text-xs text-slate-500 cursor-pointer hover:bg-slate-100 transition-colors active:scale-[0.99]"
            >
              <div className="flex items-center gap-2.5">
                <Search className="w-4 h-4 text-emerald-600" />
                <span>Cari informasi atau layanan desa...</span>
              </div>
              <span className="text-[10px] bg-slate-200/80 px-1.5 py-0.5 rounded text-slate-600 font-mono">Cari</span>
            </div>

            {/* BERANDA */}
            <button
              onClick={() => handleNavClick('beranda')}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm min-h-[44px] flex items-center transition-colors duration-150 active:scale-[0.99] ${
                activePage === 'beranda' 
                  ? 'bg-emerald-50 text-[#0e3e2f] font-bold shadow-2xs' 
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
                  className={`flex-1 text-left px-3.5 py-2.5 text-sm min-h-[44px] flex items-center transition-colors duration-150 ${
                    isProfilActive ? 'text-[#0e3e2f] font-bold' : 'text-slate-700 font-medium'
                  }`}
                >
                  Profil Desa
                </button>
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'm-profil' ? null : 'm-profil')}
                  className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-700 active:bg-slate-200/60 rounded-xl cursor-pointer transition-colors"
                  aria-label="Buka submenu Profil Desa"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'm-profil' ? 'rotate-180 text-[#0e3e2f]' : ''}`} />
                </button>
              </div>
              {openDropdown === 'm-profil' && (
                <div className="p-1.5 space-y-1 bg-white border-t border-slate-100">
                  <button
                    onClick={() => handleNavClick('profil-tentang')}
                    className={`w-full text-left px-3.5 py-2.5 text-xs min-h-[40px] flex items-center rounded-xl transition-colors ${
                      activePage === 'profil-tentang'
                        ? 'bg-emerald-50 text-[#0e3e2f] font-bold'
                        : 'text-slate-600 hover:bg-slate-50 font-medium'
                    }`}
                  >
                    Tentang Desa
                  </button>
                  <button
                    onClick={() => handleNavClick('profil-sejarah')}
                    className={`w-full text-left px-3.5 py-2.5 text-xs min-h-[40px] flex items-center rounded-xl transition-colors ${
                      activePage === 'profil-sejarah' || activePage === 'potensi-situs-sejarah'
                        ? 'bg-emerald-50 text-[#0e3e2f] font-bold'
                        : 'text-slate-600 hover:bg-slate-50 font-medium'
                    }`}
                  >
                    Sejarah Desa
                  </button>
                  <button
                    onClick={() => handleNavClick('profil-pemerintahan')}
                    className={`w-full text-left px-3.5 py-2.5 text-xs min-h-[40px] flex items-center rounded-xl transition-colors ${
                      activePage === 'profil-pemerintahan'
                        ? 'bg-emerald-50 text-[#0e3e2f] font-bold'
                        : 'text-slate-600 hover:bg-slate-50 font-medium'
                    }`}
                  >
                    Pemerintahan Desa
                  </button>
                  <button
                    onClick={() => handleNavClick('profil-anggaran')}
                    className={`w-full text-left px-3.5 py-2.5 text-xs min-h-[40px] flex items-center rounded-xl transition-colors ${
                      activePage === 'profil-anggaran'
                        ? 'bg-emerald-50 text-[#0e3e2f] font-bold'
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
                  className={`flex-1 text-left px-3.5 py-2.5 text-sm min-h-[44px] flex items-center transition-colors duration-150 ${
                    isPotensiActive ? 'text-[#0e3e2f] font-bold' : 'text-slate-700 font-medium'
                  }`}
                >
                  Potensi Desa
                </button>
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'm-potensi' ? null : 'm-potensi')}
                  className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-700 active:bg-slate-200/60 rounded-xl cursor-pointer transition-colors"
                  aria-label="Buka submenu Potensi Desa"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'm-potensi' ? 'rotate-180 text-[#0e3e2f]' : ''}`} />
                </button>
              </div>
              {openDropdown === 'm-potensi' && (
                <div className="p-1.5 space-y-1 bg-white border-t border-slate-100">
                  <button
                    onClick={() => handleNavClick('potensi-akomodasi')}
                    className="w-full text-left px-3.5 py-2.5 text-xs min-h-[40px] flex items-center rounded-xl text-slate-600 hover:bg-slate-50 font-medium"
                  >
                    Akomodasi
                  </button>
                  <button
                    onClick={() => handleNavClick('potensi-umkm')}
                    className="w-full text-left px-3.5 py-2.5 text-xs min-h-[40px] flex items-center rounded-xl text-slate-600 hover:bg-slate-50 font-medium"
                  >
                    UMKM
                  </button>
                  <button
                    onClick={() => handleNavClick('potensi-budaya')}
                    className="w-full text-left px-3.5 py-2.5 text-xs min-h-[40px] flex items-center rounded-xl text-slate-600 hover:bg-slate-50 font-medium"
                  >
                    Budaya & Adat
                  </button>
                  <button
                    onClick={() => handleNavClick('potensi-perikanan')}
                    className="w-full text-left px-3.5 py-2.5 text-xs min-h-[40px] flex items-center rounded-xl text-slate-600 hover:bg-slate-50 font-medium"
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
                  className={`flex-1 text-left px-3.5 py-2.5 text-sm min-h-[44px] flex items-center transition-colors duration-150 ${
                    isPelayananActive ? 'text-[#0e3e2f] font-bold' : 'text-slate-700 font-medium'
                  }`}
                >
                  Pelayanan
                </button>
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'm-pelayanan' ? null : 'm-pelayanan')}
                  className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-700 active:bg-slate-200/60 rounded-xl cursor-pointer transition-colors"
                  aria-label="Buka submenu Pelayanan"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'm-pelayanan' ? 'rotate-180 text-[#0e3e2f]' : ''}`} />
                </button>
              </div>
              {openDropdown === 'm-pelayanan' && (
                <div className="p-1.5 space-y-1 bg-white border-t border-slate-100">
                  <button
                    onClick={() => handleNavClick('pelayanan-surat-keterangan')}
                    className="w-full text-left px-3.5 py-2.5 text-xs min-h-[40px] flex items-center rounded-xl text-slate-600 hover:bg-slate-50 font-medium"
                  >
                    Surat Keterangan
                  </button>
                  <button
                    onClick={() => handleNavClick('pelayanan-pindah-datang')}
                    className="w-full text-left px-3.5 py-2.5 text-xs min-h-[40px] flex items-center rounded-xl text-slate-600 hover:bg-slate-50 font-medium"
                  >
                    Pindah Datang
                  </button>
                  <button
                    onClick={() => handleNavClick('pelayanan-layanan-pernikahan')}
                    className="w-full text-left px-3.5 py-2.5 text-xs min-h-[40px] flex items-center rounded-xl text-slate-600 hover:bg-slate-50 font-medium"
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
                  className={`flex-1 text-left px-3.5 py-2.5 text-sm min-h-[44px] flex items-center transition-colors duration-150 ${
                    isBeritaActive ? 'text-[#0e3e2f] font-bold' : 'text-slate-700 font-medium'
                  }`}
                >
                  Humas
                </button>
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'm-berita' ? null : 'm-berita')}
                  className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-700 active:bg-slate-200/60 rounded-xl cursor-pointer transition-colors"
                  aria-label="Buka submenu Humas"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'm-berita' ? 'rotate-180 text-[#0e3e2f]' : ''}`} />
                </button>
              </div>
              {openDropdown === 'm-berita' && (
                <div className="p-1.5 space-y-1 bg-white border-t border-slate-100">
                  <button
                    onClick={() => handleNavClick('berita-press-release')}
                    className={`w-full text-left px-3.5 py-2.5 text-xs min-h-[40px] flex items-center rounded-xl transition-colors ${
                      activePage === 'berita-press-release'
                        ? 'bg-emerald-50 text-[#0e3e2f] font-bold'
                        : 'text-slate-600 hover:bg-slate-50 font-medium'
                    }`}
                  >
                    Press Release
                  </button>
                  <button
                    onClick={() => handleNavClick('berita-galeri')}
                    className={`w-full text-left px-3.5 py-2.5 text-xs min-h-[40px] flex items-center rounded-xl transition-colors ${
                      activePage === 'berita-galeri' || activePage === 'profil-galeri'
                        ? 'bg-emerald-50 text-[#0e3e2f] font-bold'
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
                  className={`flex-1 text-left px-3.5 py-2.5 text-sm min-h-[44px] flex items-center transition-colors duration-150 ${
                    isKKNActive ? 'text-[#0e3e2f] font-bold' : 'text-slate-700 font-medium'
                  }`}
                >
                  KKN
                </button>
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'm-kkn' ? null : 'm-kkn')}
                  className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-700 active:bg-slate-200/60 rounded-xl cursor-pointer transition-colors"
                  aria-label="Buka submenu KKN"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'm-kkn' ? 'rotate-180 text-[#0e3e2f]' : ''}`} />
                </button>
              </div>
              {openDropdown === 'm-kkn' && (
                <div className="p-1.5 space-y-1 bg-white border-t border-slate-100">
                  <button
                    onClick={() => handleNavClick('kkn-latar-belakang')}
                    className="w-full text-left px-3.5 py-2.5 text-xs min-h-[40px] flex items-center rounded-xl text-slate-600 hover:bg-slate-50 font-medium"
                  >
                    Latar Belakang
                  </button>
                  <button
                    onClick={() => handleNavClick('kkn-program-kerja')}
                    className="w-full text-left px-3.5 py-2.5 text-xs min-h-[40px] flex items-center rounded-xl text-slate-600 hover:bg-slate-50 font-medium"
                  >
                    Program Kerja
                  </button>
                  <button
                    onClick={() => handleNavClick('kkn-galeri')}
                    className="w-full text-left px-3.5 py-2.5 text-xs min-h-[40px] flex items-center rounded-xl text-slate-600 hover:bg-slate-50 font-medium"
                  >
                    Galeri Kegiatan
                  </button>
                </div>
              )}
            </div>

            {/* Bottom Action Buttons in Mobile Drawer */}
            <div className={`pt-3 border-t border-slate-200/80 ${!hideKontakDarurat ? 'grid grid-cols-2 gap-2.5' : 'flex'}`}>
              {!hideKontakDarurat && (
                <button
                  onClick={() => handleNavClick('kontak-darurat')}
                  className="min-h-[44px] px-3 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200/80 text-rose-700 text-xs font-bold flex items-center justify-center gap-2 transition-colors active:scale-95 cursor-pointer shadow-2xs"
                >
                  <PhoneCall className="w-4 h-4 text-rose-600 shrink-0" />
                  <span className="truncate">Hotline Darurat</span>
                </button>
              )}

              <button
                onClick={handleLoginClick}
                className={`min-h-[44px] px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center gap-2 transition-colors active:scale-95 cursor-pointer ${!hideKontakDarurat ? '' : 'w-full'}`}
              >
                <Lock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="truncate">Login Staf</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
