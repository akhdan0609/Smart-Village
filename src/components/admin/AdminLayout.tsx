import React, { useState, useEffect, useRef } from 'react';
import { 
  LayoutDashboard, 
  Home, 
  FileText, 
  Building2, 
  Landmark, 
  Users, 
  DollarSign, 
  ShoppingBag, 
  TreePine, 
  Music, 
  Fish, 
  Mail, 
  Newspaper, 
  Image, 
  LogOut, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck,
  Settings,
  BarChart2,
  Menu,
  X,
  Plus,
  PhoneCall,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import { PageRoute, AdminRole, AdminMenuItem } from '../../types';
import { getCurrentAdmin } from '../../utils/storage';
import { useGlobalAnimations } from '../../hooks/useGlobalAnimations';

interface AdminLayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
  onNavigate: (page: PageRoute) => void;
  activePage: PageRoute;
}

// Mobile menu items for hamburger menu
const mobileMenuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, route: 'admin-dashboard' },
  { id: 'profil', label: 'Profil Desa', icon: Building2, route: 'admin-profil-tentang', hasChildren: true },
  { id: 'potensi', label: 'Potensi Desa', icon: TreePine, route: 'admin-potensi-akomodasi', hasChildren: true },
  { id: 'pelayanan', label: 'Pelayanan & Surat', icon: Mail, route: 'admin-pelayanan' },
  { id: 'humas', label: 'Humas & Dokumentasi', icon: Newspaper, route: 'admin-humas-press', hasChildren: true },
  { id: 'settings', label: 'Pengaturan', icon: Settings, route: 'admin-settings' },
];

const allMenuItems = [
  { 
    id: 'dashboard', 
    label: 'Dashboard', 
    icon: 'LayoutDashboard', 
    route: 'admin-dashboard', 
    roles: ['super_admin', 'admin_1', 'admin_2'] 
  },
  { 
    id: 'profil-group', 
    label: 'Profil Desa', 
    icon: 'Building2', 
    roles: ['super_admin', 'admin_1', 'admin_2'],
    children: [
      { id: 'profil-tentang', label: 'Profil Resmi Desa', icon: 'FileText', route: 'admin-profil-tentang', roles: ['super_admin', 'admin_1', 'admin_2'] },
      { id: 'profil-tentang', label: 'Tentang Desa', icon: 'FileText', route: 'admin-profil-tentang', roles: ['super_admin', 'admin_1', 'admin_2'] },
      { id: 'profil-sejarah', label: 'Sejarah Desa', icon: 'Landmark', route: 'admin-profil-sejarah', roles: ['super_admin', 'admin_1', 'admin_2'] },
      { id: 'profil-pemerintahan', label: 'Pemerintahan Desa', icon: 'Users', route: 'admin-profil-pemerintahan', roles: ['super_admin', 'admin_1', 'admin_2'] },
      { id: 'profil-demografi', label: 'Demografi Kependudukan', icon: 'Users', route: 'admin-profil-demografi', roles: ['super_admin', 'admin_1', 'admin_2'] },
      { id: 'profil-lembaga', label: 'Lembaga Kemasyarakatan', icon: 'Users', route: 'admin-profil-lembaga', roles: ['super_admin', 'admin_1', 'admin_2'] },
      { id: 'profil-anggaran', label: 'Anggaran Desa (APBDes)', icon: 'DollarSign', route: 'admin-profil-anggaran', roles: ['super_admin', 'admin_1', 'admin_2'] },
    ]
  },
  { 
    id: 'potensi-group', 
    label: 'Potensi Desa', 
    icon: 'TreePine', 
    roles: ['super_admin', 'admin_1', 'admin_2'],
    children: [
      { id: 'potensi-akomodasi', label: 'Akomodasi Desa', icon: 'Building2', route: 'admin-potensi-akomodasi', roles: ['super_admin', 'admin_1', 'admin_2'] },
      { id: 'potensi-umkm', label: 'UMKM Desa', icon: 'ShoppingBag', route: 'admin-potensi-umkm', roles: ['super_admin', 'admin_1', 'admin_2'] },
      { id: 'potensi-budaya', label: 'Budaya & Adat Istiadat', icon: 'Music', route: 'admin-potensi-budaya', roles: ['super_admin', 'admin_1', 'admin_2'] },
      { id: 'potensi-budidaya', label: 'Budidaya Perikanan', icon: 'Fish', route: 'admin-potensi-budidaya', roles: ['super_admin', 'admin_1', 'admin_2'] },
    ]
  },
  { 
    id: 'pelayanan-group', 
    label: 'Pelayanan & Surat', 
    icon: 'Mail', 
    route: 'admin-pelayanan', 
    roles: ['super_admin', 'admin_1', 'admin_2'] 
  },
  { 
    id: 'humas-group', 
    label: 'Humas & Dokumentasi', 
    icon: 'Newspaper', 
    roles: ['super_admin', 'admin_1', 'admin_2'],
    children: [
      { id: 'humas-press-release', label: 'Press Release', icon: 'Newspaper', route: 'admin-humas-press', roles: ['super_admin', 'admin_1', 'admin_2'] },
      { id: 'humas-galeri', label: 'Galeri Foto (Dokumentasi)', icon: 'Image', route: 'admin-humas-galeri', roles: ['super_admin', 'admin_1', 'admin_2'] },
    ]
  },
  { 
    id: 'settings', 
    label: 'Pengaturan', 
    icon: 'Settings', 
    route: 'admin-settings', 
    roles: ['super_admin', 'admin_1', 'admin_2'] 
  },
];

const iconMap = {
  LayoutDashboard,
  Home,
  FileText,
  Building2,
  Landmark,
  Users,
  DollarSign,
  ShoppingBag,
  TreePine,
  Music,
  Fish,
  Mail,
  Newspaper,
  Image,
  LogOut,
  ShieldCheck,
  Settings,
  BarChart2,
};

const roleLabels = {
  super_admin: 'Super Admin',
  admin_1: 'Admin 1 (Full Access)',
  admin_2: 'Admin 2 (Contributor)',
};

const roleColors = {
  super_admin: 'bg-amber-600',
  admin_1: 'bg-emerald-600',
  admin_2: 'bg-blue-600',
};

interface AdminLayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
  onNavigate: (page: PageRoute) => void;
  activePage: PageRoute;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ 
  children, 
  onLogout, 
  onNavigate, 
  activePage 
}) => {
  const user = getCurrentAdmin();
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useGlobalAnimations(activePage);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredMenus = allMenuItems.filter(item => 
    user && item.roles.includes(user.role)
  ).map(item => ({
    ...item,
    children: item.children?.filter(child => user && child.roles.includes(user.role)) || []
  }));

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    if (isMobile) setSidebarOpen(false);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleDropdownClick = (menuId: string) => {
    setOpenDropdown(openDropdown === menuId ? null : menuId);
  };

  const isDropdownActive = (menuId: string) => {
    const menu = allMenuItems.find(m => m.id === menuId);
    if (!menu || !menu.children) return false;
    return menu.children.some(c => c.route === activePage);
  };

  const getActiveRoute = (page: PageRoute) => {
    if (page === activePage) return true;
    const parent = allMenuItems.find(m => m.children?.some(c => c.route === page));
    if (parent && parent.id === page.replace('-detail', '').replace(/-\w+$/, '')) return true;
    return false;
  };

  const IconComponent = (iconName: string) => {
    const Comp = iconMap[iconName] || LayoutDashboard;
    return <Comp className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Mobile Overlay */}
      {isMobile && mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50" 
          onClick={() => setMobileMenuOpen(false)} 
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-40
          h-full bg-white border-r border-slate-200 transition-all duration-300 flex flex-col
          ${sidebarOpen ? 'w-64' : 'w-20'}
        `}
      >
        {/* Mobile Menu Toggle (Hamburger) - Top of Sidebar */}
        {isMobile && (
          <div className="p-3 border-b border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setSidebarOpen(false);
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all"
            >
              <Menu className="w-5 h-5 shrink-0" />
              <span className="flex-1 text-left">Tutup Menu</span>
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Logo & Brand */}
        <div className={`flex items-center gap-3 p-4 border-b border-slate-200 ${!sidebarOpen ? 'justify-center' : ''}`}>
          <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-emerald-200" />
          </div>
          {sidebarOpen && (
            <div className="overflow-hidden">
              <h1 className="text-xs font-black text-slate-900 font-['Playfair_Display',serif] leading-tight">
                Desa Warung Menteng
              </h1>
              <p className="text-[10px] text-slate-500 truncate">Panel Administrator</p>
            </div>
          )}
        </div>

        {/* User Info */}
        {sidebarOpen && user && (
          <div className="px-4 py-3 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden shrink-0">
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0 overflow-hidden">
                <p className="text-xs font-bold text-slate-900 truncate">{user.name}</p>
                <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-bold ${roleColors[user.role]} text-white`}>
                  {roleLabels[user.role]}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1" role="navigation" aria-label="Admin navigation">
          {filteredMenus.map((menu) => {
            const hasChildren = menu.children && menu.children.length > 0;
            const isActive = hasChildren 
              ? menu.children.some(c => c.route === activePage)
              : menu.route === activePage;
            const Icon = iconMap[menu.icon] || LayoutDashboard;

            if (hasChildren) {
              return (
                <div key={menu.id} className="group">
                  <button
                    onClick={() => handleDropdownClick(menu.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive 
                        ? 'bg-emerald-50 text-emerald-800' 
                        : 'text-slate-700 hover:bg-slate-50'
                    } ${!sidebarOpen && 'justify-center'}`}
                    aria-expanded={openDropdown === menu.id}
                  >
                    <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-emerald-700' : 'text-slate-500'}`} />
                    {sidebarOpen && <span className="flex-1 text-left">{menu.label}</span>}
                    {sidebarOpen && (
                      <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${openDropdown === menu.id ? 'rotate-90' : ''}`} />
                    )}
                  </button>
                  {sidebarOpen && openDropdown === menu.id && (
                    <div className="mt-1 ml-9 space-y-1 animate-in slide-in-from-top-2 duration-200">
                      {menu.children!.map((child) => {
                        const childActive = child.route === activePage;
                        const ChildIcon = iconMap[child.icon] || FileText;
                        return (
                          <button
                            key={child.id}
                            onClick={() => child.route && handleNavClick(child.route)}
                            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                              childActive 
                                ? 'bg-emerald-50 text-emerald-800' 
                                : 'text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            <ChildIcon className={`w-4 h-4 shrink-0 ${childActive ? 'text-emerald-700' : 'text-slate-400'}`} />
                            <span>{child.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={menu.id}
                onClick={() => menu.route && handleNavClick(menu.route)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive 
                    ? 'bg-emerald-50 text-emerald-800' 
                    : 'text-slate-700 hover:bg-slate-50'
                } ${!sidebarOpen && 'justify-center'}`}
              >
                <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-emerald-700' : 'text-slate-500'}`} />
                {sidebarOpen && <span className="flex-1 text-left">{menu.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-3 border-t border-slate-200">
          <button
            onClick={onLogout}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all text-rose-600 hover:bg-rose-50 ${!sidebarOpen && 'justify-center'}`}
          >
            <LogOut className="w-5 h-5 shrink-0" />
            {sidebarOpen && <span>Keluar</span>}
          </button>
        </div>

        {/* Toggle Button (Desktop) */}
        {sidebarOpen && !isMobile && (
          <button
            onClick={() => setSidebarOpen(false)}
            className="mx-3 mb-3 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition absolute bottom-3 left-1/2 -translate-x-1/2 z-50"
            aria-label="Collapse sidebar"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
      </aside>

      {/* Mobile Overlay for Sidebar */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50" 
          onClick={() => setSidebarOpen(false)} 
        />
      )}

      {/* Mobile Hamburger Button (Top Left) */}
      {isMobile && (
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="fixed top-4 left-4 z-50 w-12 h-12 rounded-2xl bg-emerald-700 text-white shadow-lg flex items-center justify-center hover:bg-emerald-800 transition"
          aria-label="Open mobile menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Mobile Menu Panel */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="p-4 border-b border-slate-200 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Menu Admin</h2>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="p-4 space-y-2" role="navigation" aria-label="Mobile admin navigation">
            {mobileMenuItems.map((menu) => {
              const isActive = menu.route === activePage || (menu.hasChildren && menu.children?.some(c => c.route === activePage));
              const Icon = menu.icon;
              return (
                <button
                  key={menu.id}
                  onClick={() => menu.route && handleNavClick(menu.route)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive 
                      ? 'bg-emerald-50 text-emerald-800' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className="flex-1 text-left">{menu.label}</span>
                  {menu.hasChildren && <ChevronRight className="w-4 h-4 text-slate-400" />}
                </button>
              );
            })}
          </nav>
        </div>
      )}

      {/* Sidebar Toggle Button (Desktop - Collapsed) */}
      {!sidebarOpen && !isMobile && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-4 left-4 z-50 w-12 h-12 rounded-2xl bg-emerald-700 text-white shadow-lg flex items-center justify-center hover:bg-emerald-800 transition"
          aria-label="Expand sidebar"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Expanded Sidebar Button (Collapsed) - Mobile only */}
      {isMobile && !sidebarOpen && !mobileMenuOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed z-40 bottom-6 left-6 w-12 h-12 rounded-2xl bg-emerald-700 text-white shadow-lg flex items-center justify-center hover:bg-emerald-800 transition"
          aria-label="Expand sidebar"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'} relative z-10 overflow-x-hidden`}>
        <div className="max-w-7xl mx-auto w-full p-6 sm:p-8 pt-8">
          {children}
        </div>
      </main>
    </div>
  );
};

const filteredMenus = allMenuItems.filter(item => 
  user && item.roles.includes(user.role)
).map(item => ({
  ...item,
  children: item.children?.filter(child => user && child.roles.includes(user.role)) || []
}));

const handleNavClick = (route: PageRoute) => {
  onNavigate(route);
  if (isMobile) {
    setSidebarOpen(false);
    setMobileMenuOpen(false);
  }
};