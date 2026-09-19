import React, { useState, useEffect } from 'react';
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
  ChevronRight, 
  ShieldCheck,
  Settings,
  BarChart2,
  Phone,
  MessageSquare
} from 'lucide-react';
import { PageRoute, AdminRole, AdminMenuItem } from '../../types';
import { getCurrentAdmin, hasAdminRole } from '../../utils/storage';
import { useGlobalAnimations } from '../../hooks/useGlobalAnimations';

interface AdminLayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
  onNavigate: (page: PageRoute) => void;
  activePage: PageRoute;
}

const allMenuItems: AdminMenuItem[] = [
  { 
    id: 'dashboard-group', 
    label: 'Dashboard', 
    icon: 'LayoutDashboard', 
    roles: ['super_admin', 'admin_1'],
    children: [
      { id: 'dashboard-main', label: 'Dashboard', icon: 'LayoutDashboard', route: 'admin-dashboard', roles: ['super_admin', 'admin_1'] },
      { id: 'dashboard-sampul', label: 'Sampul Halaman', icon: 'Image', route: 'admin-cover-beranda', roles: ['super_admin', 'admin_1'] },
    ]
  },
  { 
    id: 'profil-group', 
    label: 'Profil Desa', 
    icon: 'Building2', 
    roles: ['super_admin', 'admin_1'],
    children: [
      { id: 'profil-tentang', label: 'Tentang Desa', icon: 'FileText', route: 'admin-profil-tentang', roles: ['super_admin', 'admin_1'] },
      { id: 'profil-sejarah', label: 'Sejarah Desa', icon: 'Landmark', route: 'admin-profil-sejarah', roles: ['super_admin', 'admin_1'] },
      { id: 'profil-pemerintahan', label: 'Pemerintahan', icon: 'Users', route: 'admin-profil-pemerintahan', roles: ['super_admin', 'admin_1'] },
      { id: 'profil-anggaran', label: 'Anggaran Desa', icon: 'DollarSign', route: 'admin-profil-anggaran', roles: ['super_admin', 'admin_1'] },
      { id: 'profil-sampul', label: 'Sampul Halaman', icon: 'Image', route: 'admin-cover-profil', roles: ['super_admin', 'admin_1'] },
    ]
  },
  { 
    id: 'potensi-group', 
    label: 'Potensi Desa', 
    icon: 'TreePine', 
    roles: ['super_admin', 'admin_1'],
    children: [
      { id: 'potensi-akomodasi', label: 'Akomodasi', icon: 'Building2', route: 'admin-potensi-akomodasi', roles: ['super_admin', 'admin_1'] },
      { id: 'potensi-umkm', label: 'UMKM', icon: 'ShoppingBag', route: 'admin-potensi-umkm', roles: ['super_admin', 'admin_1'] },
      { id: 'potensi-budaya', label: 'Budaya & Adat', icon: 'Music', route: 'admin-potensi-budaya', roles: ['super_admin', 'admin_1'] },
      { id: 'potensi-budidaya', label: 'Budidaya Perikanan', icon: 'Fish', route: 'admin-potensi-budidaya', roles: ['super_admin', 'admin_1'] },
      { id: 'potensi-sampul', label: 'Sampul Halaman', icon: 'Image', route: 'admin-cover-potensi', roles: ['super_admin', 'admin_1'] },
    ]
  },
  { 
    id: 'profil-laporan-group', 
    label: 'Laporan Kependudukan', 
    icon: 'BarChart2', 
    route: 'admin-laporan-penduduk', 
    roles: ['super_admin', 'admin_2'] 
  },
  { 
    id: 'pelayanan-group', 
    label: 'Pelayanan & Surat', 
    icon: 'Mail', 
    roles: ['super_admin', 'admin_1'],
    children: [
      { id: 'pelayanan-main', label: 'Pelayanan & Surat', icon: 'Mail', route: 'admin-pelayanan', roles: ['super_admin', 'admin_1'] },
      { id: 'pelayanan-sampul', label: 'Sampul Halaman', icon: 'Image', route: 'admin-cover-pelayanan', roles: ['super_admin', 'admin_1'] },
    ]
  },
  { 
    id: 'humas-group', 
    label: 'Humas & Dokumentasi', 
    icon: 'Newspaper', 
    roles: ['super_admin', 'admin_1'],
    children: [
      { id: 'humas-press-release', label: 'Press Release', icon: 'Newspaper', route: 'admin-humas-press', roles: ['super_admin', 'admin_1'] },
      { id: 'humas-galeri', label: 'Galeri Foto', icon: 'Image', route: 'admin-humas-galeri', roles: ['super_admin', 'admin_1'] },
      { id: 'humas-kritik-saran', label: 'Kritik & Saran', icon: 'MessageSquare', route: 'admin-humas-kritik-saran', roles: ['super_admin', 'admin_1'] },
      { id: 'humas-sampul', label: 'Sampul Halaman', icon: 'Image', route: 'admin-cover-humas', roles: ['super_admin', 'admin_1'] },
    ]
  },
  { 
    id: 'kontak-darurat-group', 
    label: 'Kontak Darurat', 
    icon: 'Phone', 
    route: 'admin-kontak-darurat', 
    roles: ['super_admin', 'admin_1'] 
  },
  { 
    id: 'settings', 
    label: 'Pengaturan', 
    icon: 'Settings', 
    route: 'admin-settings', 
    roles: ['super_admin', 'admin_1'] 
  },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
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
  Phone,
  MessageSquare,
};

const roleLabels: Record<AdminRole, string> = {
  super_admin: 'Super Admin',
  admin_1: 'Admin 1 (Full Access)',
  admin_2: 'Admin 2 (Contributor)',
};

const roleColors: Record<AdminRole, string> = {
  super_admin: 'bg-amber-600',
  admin_1: 'bg-emerald-600',
  admin_2: 'bg-blue-600',
};

export const AdminLayout: React.FC<AdminLayoutProps> = ({ 
  children, 
  onLogout, 
  onNavigate, 
  activePage 
}) => {
  const user = getCurrentAdmin();
  const [isMobile, setIsMobile] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [expandedMenus, setExpandedMenus] = React.useState<Set<string>>(new Set());
  
  useGlobalAnimations(activePage);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-close sidebar on mobile after navigation
  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    if (isMobile) setSidebarOpen(false);
  };

  const getActiveRoute = (page: PageRoute) => {
    if (page === activePage) return true;
    // Check if active page is a child of this menu
    const parent = allMenuItems.find(m => m.children?.some(c => c.route === page));
    if (parent && parent.id === page.replace('-detail', '').replace(/-\w+$/, '')) return true;
    return false;
  };

  const filteredMenus = allMenuItems.filter(item => 
    user && item.roles.includes(user.role)
  ).map(item => ({
    ...item,
    children: item.children?.filter(child => user && child.roles.includes(user.role)) || []
  }));

  const IconComponent = (iconName: string) => {
    const Comp = iconMap[iconName] || LayoutDashboard;
    return <Comp className="w-5 h-5" />;
  };

  // Compute sidebar className
  const sidebarClassName = 
    'fixed inset-y-0 left-0 z-50 ' +
    (isMobile ? 'w-[90vw] max-w-sm transform transition-transform duration-300 ease-in-out' : '') +
    ' h-full bg-white border-r border-slate-200 flex flex-col ' +
    (sidebarOpen ? 'w-64 translate-x-0' : 'w-20 -translate-x-full');

  const mainClassName = 'flex-1 transition-all duration-300 relative z-10 overflow-x-hidden ' +
    (sidebarOpen ? 'ml-64' : 'ml-20');

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Mobile/Tablet Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50" 
          onClick={() => setSidebarOpen(false)} 
          aria-hidden="true"
        />
      )}

      {/* Sidebar Toggle Button (Fixed - Always Visible) */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 w-10 h-10 rounded-xl bg-emerald-700 text-white shadow-lg flex items-center justify-center hover:bg-emerald-800 transition"
        aria-label={sidebarOpen ? "Tutup sidebar" : "Buka sidebar"}
      >
        {sidebarOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Sidebar */}
      <aside 
        className={sidebarClassName}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
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
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="w-10 h-10 rounded-xl bg-emerald-700 text-white shadow-lg flex items-center justify-center hover:bg-emerald-800 transition"
              aria-label={sidebarOpen ? "Tutup sidebar" : "Buka sidebar"}
            >
              {sidebarOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {(sidebarOpen || !isMobile) && user && (
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
              const isExpanded = expandedMenus.has(menu.id);
              const shouldShowChildren = isExpanded || isActive;

              const handleParentClick = (e: React.MouseEvent) => {
                e.preventDefault();
                setExpandedMenus(prev => {
                  const next = new Set(prev);
                  if (next.has(menu.id)) {
                    next.delete(menu.id);
                  } else {
                    next.add(menu.id);
                  }
                  return next;
                });
              };

              return (
                <div key={menu.id} className="group">
                  <button
                    onClick={handleParentClick}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive || isExpanded
                        ? 'bg-emerald-50 text-emerald-800' 
                        : 'text-slate-700 hover:bg-slate-50'
                    } ${!sidebarOpen && 'justify-center'}`}
                    aria-expanded={isExpanded || isActive}
                  >
                    <Icon className={`w-5 h-5 shrink-0 ${isActive || isExpanded ? 'text-emerald-700' : 'text-slate-500'}`} />
                    {sidebarOpen && <span className="flex-1 text-left">{menu.label}</span>}
                    {sidebarOpen && (
                      <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    )}
                  </button>
                  {sidebarOpen && shouldShowChildren && (
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

      </aside>

      {/* Main Content */}
      <main className={mainClassName}>
        <div className="max-w-7xl mx-auto w-full p-3 sm:p-4 lg:p-6 pt-4">
          {children}
        </div>
      </main>
    </div>
  );
};