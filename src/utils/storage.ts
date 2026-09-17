import { PermohonanSurat, LaporanWarga, BeritaItem, PengumumanItem, UMKMItem, AdminUser, AdminRole } from '../types';
import { 
  INITIAL_PERMOHONAN_SURAT, 
  INITIAL_LAPORAN_WARGA, 
  BERITA_LIST, 
  PENGUMUMAN_LIST, 
  UMKM_LIST 
} from '../data/mockData';

const STORAGE_KEYS = {
  PERMOHONAN: 'desa_wm_permohonan_v1',
  LAPORAN: 'desa_wm_laporan_v1',
  BERITA: 'desa_wm_berita_v2',
  PENGUMUMAN: 'desa_wm_pengumuman_v1',
  UMKM: 'desa_wm_umkm_v1',
  ADMIN_AUTH: 'desa_wm_admin_auth_v1'
};

// Admin Users Database
const ADMIN_USERS: Record<string, { password: string; user: AdminUser }> = {
  'superadmin': {
    password: 'super2026',
    user: {
      id: 'sa-1',
      username: 'superadmin',
      name: 'Super Administrator',
      role: 'super_admin',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=superadmin'
    }
  },
  'admin1': {
    password: 'admin1desa',
    user: {
      id: 'a1-1',
      username: 'admin1',
      name: 'Admin Profil Desa',
      role: 'admin_1',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin1'
    }
  },
  'admin2': {
    password: 'admin2desa',
    user: {
      id: 'a2-1',
      username: 'admin2',
      name: 'Admin Potensi & Pelayanan',
      role: 'admin_2',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin2'
    }
  },
  'admin3': {
    password: 'admin3desa',
    user: {
      id: 'a3-1',
      username: 'admin3',
      name: 'Admin Humas & Dokumentasi',
      role: 'admin_3',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin3'
    }
  },
  // Legacy credentials
  'akhdan': {
    password: 'FTIK888',
    user: {
      id: 'legacy-1',
      username: 'akhdan',
      name: 'Petugas PTSP Warung Menteng',
      role: 'super_admin',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=akhdan'
    }
  },
  'admin': {
    password: 'desa2026',
    user: {
      id: 'legacy-2',
      username: 'admin',
      name: 'Administrator Desa',
      role: 'super_admin',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin'
    }
  },
  'kades': {
    password: 'menteng2026',
    user: {
      id: 'legacy-3',
      username: 'kades',
      name: 'Kepala Desa Warung Menteng',
      role: 'super_admin',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=kades'
    }
  }
};

export const checkAdminLogin = (username: string, password: string): AdminUser | null => {
  const record = ADMIN_USERS[username.toLowerCase()];
  if (record && record.password === password) {
    return record.user;
  }
  return null;
};

// Permohonan Surat
export const getStoredPermohonan = (): any[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PERMOHONAN);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.PERMOHONAN, JSON.stringify(INITIAL_PERMOHONAN_SURAT));
      return INITIAL_PERMOHONAN_SURAT;
    }
    return JSON.parse(data);
  } catch {
    return INITIAL_PERMOHONAN_SURAT;
  }
};

export const getStoredPengajuanSurat = getStoredPermohonan;

export const savePermohonan = (item: any): any[] => {
  const current = getStoredPermohonan();
  const updated = [item, ...current];
  localStorage.setItem(STORAGE_KEYS.PERMOHONAN, JSON.stringify(updated));
  return updated;
};

export const savePengajuanSurat = savePermohonan;
export const saveSuratRequest = savePermohonan;

export const updatePermohonanStatus = (
  id: string, 
  status: any, 
  catatanPetugas?: string,
  nomorSuratResmi?: string
): any[] => {
  const current = getStoredPermohonan();
  const updated = current.map(p => {
    if (p.id === id || p.nomorRegistrasi === id) {
      return {
        ...p,
        status,
        catatanPetugas: catatanPetugas !== undefined ? catatanPetugas : p.catatanPetugas,
        nomorSuratResmi: nomorSuratResmi || p.nomorSuratResmi,
        tanggalSelesai: status === 'Siap Diambil' || status === 'Selesai' ? new Date().toISOString().split('T')[0] : p.tanggalSelesai
      };
    }
    return p;
  });
  localStorage.setItem(STORAGE_KEYS.PERMOHONAN, JSON.stringify(updated));
  return updated;
};

export const updatePengajuanSurat = (id: string, updates: Partial<any>): any[] => {
  const current = getStoredPermohonan();
  const updated = current.map(p => {
    if (p.id === id || p.nomorRegistrasi === id) {
      return {
        ...p,
        ...updates
      };
    }
    return p;
  });
  localStorage.setItem(STORAGE_KEYS.PERMOHONAN, JSON.stringify(updated));
  return updated;
};

// Laporan Warga / Aspirasi
export const getStoredLaporan = (): any[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.LAPORAN);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.LAPORAN, JSON.stringify(INITIAL_LAPORAN_WARGA));
      return INITIAL_LAPORAN_WARGA;
    }
    return JSON.parse(data);
  } catch {
    return INITIAL_LAPORAN_WARGA;
  }
};

export const saveLaporan = (item: any): any[] => {
  const current = getStoredLaporan();
  const updated = [item, ...current];
  localStorage.setItem(STORAGE_KEYS.LAPORAN, JSON.stringify(updated));
  return updated;
};

export const updateLaporanStatus = (
  id: string, 
  status: any, 
  tanggapanResmi?: string,
  petugasPenanggap?: string
): any[] => {
  const current = getStoredLaporan();
  const updated = current.map(l => {
    if (l.id === id || l.kodeTiket === id || l.nomorTiket === id) {
      return {
        ...l,
        status,
        tanggapanResmi: tanggapanResmi || l.tanggapanResmi || l.responPetugas,
        responPetugas: tanggapanResmi || l.responPetugas,
        petugasPenanggap: petugasPenanggap || l.petugasPenanggap,
        tanggalTanggapan: new Date().toISOString().split('T')[0]
      };
    }
    return l;
  });
  localStorage.setItem(STORAGE_KEYS.LAPORAN, JSON.stringify(updated));
  return updated;
};

export const updateLaporan = (id: string, updates: Partial<any>): any[] => {
  const current = getStoredLaporan();
  const updated = current.map(l => {
    if (l.id === id || l.kodeTiket === id || l.nomorTiket === id) {
      return {
        ...l,
        ...updates
      };
    }
    return l;
  });
  localStorage.setItem(STORAGE_KEYS.LAPORAN, JSON.stringify(updated));
  return updated;
};

// Berita & Pengumuman
export const getStoredBerita = (): BeritaItem[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.BERITA);
    return data ? JSON.parse(data) : BERITA_LIST;
  } catch {
    return BERITA_LIST;
  }
};

export const saveBerita = (item: BeritaItem): BeritaItem[] => {
  const current = getStoredBerita();
  const updated = [item, ...current];
  localStorage.setItem(STORAGE_KEYS.BERITA, JSON.stringify(updated));
  return updated;
};

export const updateBerita = (id: string, updates: Partial<BeritaItem>): BeritaItem[] => {
  const current = getStoredBerita();
  const updated = current.map(b => b.id === id ? { ...b, ...updates } : b);
  localStorage.setItem(STORAGE_KEYS.BERITA, JSON.stringify(updated));
  return updated;
};

export const deleteBerita = (id: string): BeritaItem[] => {
  const current = getStoredBerita();
  const updated = current.filter(b => b.id !== id);
  localStorage.setItem(STORAGE_KEYS.BERITA, JSON.stringify(updated));
  return updated;
};

export const getStoredPengumuman = (): PengumumanItem[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PENGUMUMAN);
    return data ? JSON.parse(data) : PENGUMUMAN_LIST;
  } catch {
    return PENGUMUMAN_LIST;
  }
};

export const savePengumuman = (item: PengumumanItem): PengumumanItem[] => {
  const current = getStoredPengumuman();
  const updated = [item, ...current];
  localStorage.setItem(STORAGE_KEYS.PENGUMUMAN, JSON.stringify(updated));
  return updated;
};

export const updatePengumuman = (id: string, updates: Partial<PengumumanItem>): PengumumanItem[] => {
  const current = getStoredPengumuman();
  const updated = current.map(p => p.id === id ? { ...p, ...updates } : p);
  localStorage.setItem(STORAGE_KEYS.PENGUMUMAN, JSON.stringify(updated));
  return updated;
};

export const deletePengumuman = (id: string): PengumumanItem[] => {
  const current = getStoredPengumuman();
  const updated = current.filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEYS.PENGUMUMAN, JSON.stringify(updated));
  return updated;
};

// UMKM
export const getStoredUMKM = (): UMKMItem[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.UMKM);
    return data ? JSON.parse(data) : UMKM_LIST;
  } catch {
    return UMKM_LIST;
  }
};

export const saveUMKM = (item: UMKMItem): UMKMItem[] => {
  const current = getStoredUMKM();
  const updated = [item, ...current];
  localStorage.setItem(STORAGE_KEYS.UMKM, JSON.stringify(updated));
  return updated;
};

export const updateUMKM = (id: string, updates: Partial<UMKMItem>): UMKMItem[] => {
  const current = getStoredUMKM();
  const updated = current.map(u => u.id === id ? { ...u, ...updates } : u);
  localStorage.setItem(STORAGE_KEYS.UMKM, JSON.stringify(updated));
  return updated;
};

export const deleteUMKM = (id: string): UMKMItem[] => {
  const current = getStoredUMKM();
  const updated = current.filter(u => u.id !== id);
  localStorage.setItem(STORAGE_KEYS.UMKM, JSON.stringify(updated));
  return updated;
};

// Admin Auth
export const getAdminAuth = (): { isLoggedIn: boolean; user: AdminUser | null } | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.ADMIN_AUTH);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

export const setAdminAuth = (auth: { isLoggedIn: boolean; user: AdminUser | null } | null) => {
  if (auth) {
    localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, JSON.stringify(auth));
  } else {
    localStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
  }
};

export const isAdminLoggedIn = (): boolean => {
  const auth = getAdminAuth();
  return !!auth?.isLoggedIn;
};

export const getCurrentAdmin = (): AdminUser | null => {
  const auth = getAdminAuth();
  return auth?.user || null;
};

export const setAdminSession = (user: AdminUser) => {
  setAdminAuth({ isLoggedIn: true, user });
};

export const clearAdminSession = () => {
  setAdminAuth(null);
};

export const hasAdminRole = (requiredRoles: AdminRole[]): boolean => {
  const user = getCurrentAdmin();
  return user ? requiredRoles.includes(user.role) : false;
};

// Re-export types for convenience
export type { AdminUser, AdminRole } from '../types';