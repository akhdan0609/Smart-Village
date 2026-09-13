import { PermohonanSurat, LaporanWarga, BeritaItem, PengumumanItem, UMKMItem } from '../types';
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
    return p => p;
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

// Admin Auth
export const getAdminAuth = (): { isLoggedIn: boolean; role: string; name: string } | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.ADMIN_AUTH);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

export const setAdminAuth = (auth: { isLoggedIn: boolean; role: string; name: string } | null) => {
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

export const setAdminSession = (loggedIn: boolean) => {
  if (loggedIn) {
    setAdminAuth({ isLoggedIn: true, role: 'Administrator Desa', name: 'Petugas PTSP Warung Menteng' });
  } else {
    setAdminAuth(null);
  }
};

export const clearAdminSession = () => {
  setAdminAuth(null);
};

export const checkAdminLogin = (u: string, p: string): boolean => {
  return (
    (u === 'akhdan' && p === 'FTIK888') ||
    (u === 'admin' && p === 'desa2026') ||
    (u === 'kades' && p === 'menteng2026')
  );
};
