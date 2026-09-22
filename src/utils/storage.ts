import { PermohonanSurat, LaporanWarga, BeritaItem, PengumumanItem, UMKMItem, AdminUser, AdminRole, KritikSaranItem, TentangDesaData } from '../types';
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
  KONTAK_DARURAT: 'desa_wm_kontak_darurat_v1',
  KRITIK_SARAN: 'desa_wm_kritik_saran_v1',
  ADMIN_AUTH: 'desa_wm_admin_auth_v1',
  COVERS: 'desa_wm_cover_v1',
  NAV_STATE: 'desa_wm_nav_state_v1'
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
      name: 'Admin 1 (Full Access)',
      role: 'admin_1',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin1'
    }
  },
  'admin2': {
    password: 'admin2desa',
    user: {
      id: 'a2-1',
      username: 'admin2',
      name: 'Admin 2 (Contributor)',
      role: 'admin_2',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin2'
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
// Kontak Darurat
export const getStoredKontakDarurat = (): any[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.KONTAK_DARURAT);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveKontakDarurat = (item: any): any[] => {
  const current = getStoredKontakDarurat();
  const updated = [item, ...current];
  localStorage.setItem(STORAGE_KEYS.KONTAK_DARURAT, JSON.stringify(updated));
  return updated;
};

export const deleteKontakDarurat = (id: string): any[] => {
  const current = getStoredKontakDarurat();
  const updated = current.filter(item => item.id !== id);
  localStorage.setItem(STORAGE_KEYS.KONTAK_DARURAT, JSON.stringify(updated));
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

// Kritik & Saran
const DEFAULT_KRITIK_SARAN: KritikSaranItem[] = [
  { id: 'ks-1', targetId: 'general', nama: 'Siti Aminah', isi: 'Apresiasi keterbukaan informasi publik desa yang sangat rapi dan informatif.', waktu: '10 Agustus 2025', approved: true },
  { id: 'ks-2', targetId: 'general', nama: 'Dedi Kusnadi', isi: 'Semoga kegiatan sanggar seni pemuda terus dibina dan diwadahi.', waktu: '4 Agustus 2025', approved: true },
  { id: 'ks-3', targetId: 'berita-stunting', nama: 'Ibu Ratna (Kader Posyandu RW 04)', isi: 'Program PMT olahan ikan nila sangat disukai anak-anak balita. Terima kasih Pemdes Warung Menteng!', waktu: '12 Agustus 2025', approved: true },
  { id: 'ks-4', targetId: 'berita-stunting', nama: 'Bpk. Herman (Ketua RT 02)', isi: 'Semoga angka stunting di desa kita terus ditekan hingga benar-benar nihil.', waktu: '13 Agustus 2025', approved: true },
  { id: 'ks-5', targetId: 'berita-musdes', nama: 'Kang Asep Supriadi', isi: 'Mohon usulan perbaikan drainase di RW 03 dapat diakomodir di RKPDes 2026.', waktu: '9 Agustus 2025', approved: true },
  { id: 'ks-6', targetId: 'berita-jalan', nama: 'Pak Ujang (Warga Kp. Cijeruk)', isi: 'Alhamdulillah akhirnya jalan beton masuk kampung, mobilitas panen salak jadi lancar.', waktu: '6 Agustus 2025', approved: true },
];

export const getStoredKritikSaran = (): KritikSaranItem[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.KRITIK_SARAN);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.KRITIK_SARAN, JSON.stringify(DEFAULT_KRITIK_SARAN));
      return DEFAULT_KRITIK_SARAN;
    }
    return JSON.parse(data);
  } catch {
    return DEFAULT_KRITIK_SARAN;
  }
};

export const saveKritikSaran = (item: KritikSaranItem): KritikSaranItem[] => {
  const current = getStoredKritikSaran();
  const updated = [item, ...current];
  localStorage.setItem(STORAGE_KEYS.KRITIK_SARAN, JSON.stringify(updated));
  return updated;
};

export const updateKritikSaran = (id: string, updates: Partial<KritikSaranItem>): KritikSaranItem[] => {
  const current = getStoredKritikSaran();
  const updated = current.map(item => item.id === id ? { ...item, ...updates } : item);
  localStorage.setItem(STORAGE_KEYS.KRITIK_SARAN, JSON.stringify(updated));
  return updated;
};

export const deleteKritikSaran = (id: string): KritikSaranItem[] => {
  const current = getStoredKritikSaran();
  const updated = current.filter(item => item.id !== id);
  localStorage.setItem(STORAGE_KEYS.KRITIK_SARAN, JSON.stringify(updated));
  return updated;
};

// Re-export types for convenience
export type { AdminUser, AdminRole } from '../types';

// Sampul / Background Halaman User
export type CoverKey = 
  | 'beranda' 
  | 'profil' 
  | 'profil-tentang' 
  | 'profil-sejarah' 
  | 'profil-pemerintahan' 
  | 'profil-anggaran'
  | 'potensi' 
  | 'potensi-akomodasi' 
  | 'potensi-umkm' 
  | 'potensi-budaya' 
  | 'potensi-budidaya'
  | 'pelayanan' 
  | 'humas' 
  | 'humas-press' 
  | 'humas-galeri'
  | 'darurat';

export type CoverSettings = Partial<Record<CoverKey, string>>;

export type CoverTextKey = 'title' | 'subtitle';

export type CoverTextSettings = Partial<Record<CoverKey, Partial<Record<CoverTextKey, string>>>>;

export const COVER_KEYS: CoverKey[] = [
  'beranda', 
  'profil', 'profil-tentang', 'profil-sejarah', 'profil-pemerintahan', 'profil-anggaran',
  'potensi', 'potensi-akomodasi', 'potensi-umkm', 'potensi-budaya', 'potensi-budidaya',
  'pelayanan', 
  'humas', 'humas-press', 'humas-galeri',
  'darurat'
];

export const getCoverSettings = (): CoverSettings => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.COVERS);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
};

export const getCoverImage = (key: CoverKey, fallback: string): string => {
  const covers = getCoverSettings();
  return covers[key] || fallback;
};

export const setCoverImage = (key: CoverKey, value: string): CoverSettings => {
  const covers = getCoverSettings();
  if (value) {
    covers[key] = value;
  } else {
    delete covers[key];
  }
  localStorage.setItem(STORAGE_KEYS.COVERS, JSON.stringify(covers));
  return covers;
};

export const resetCoverImage = (key: CoverKey): CoverSettings => setCoverImage(key, '');

// Cover Text Settings
export const getCoverTextSettings = (): CoverTextSettings => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.COVERS + '_text');
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
};

export const getCoverText = (key: CoverKey, textKey: CoverTextKey, fallback: string): string => {
  const texts = getCoverTextSettings();
  return texts[key]?.[textKey] || fallback;
};

export const setCoverText = (key: CoverKey, textKey: CoverTextKey, value: string): CoverTextSettings => {
  const texts = getCoverTextSettings();
  if (!texts[key]) texts[key] = {};
  if (value) {
    texts[key][textKey] = value;
  } else {
    delete texts[key][textKey];
    if (Object.keys(texts[key]).length === 0) delete texts[key];
  }
  localStorage.setItem(STORAGE_KEYS.COVERS + '_text', JSON.stringify(texts));
  return texts;
};

export const resetCoverText = (key: CoverKey, textKey: CoverTextKey): CoverTextSettings => {
  const texts = getCoverTextSettings();
  if (texts[key]) {
    delete texts[key][textKey];
    if (Object.keys(texts[key]).length === 0) delete texts[key];
    localStorage.setItem(STORAGE_KEYS.COVERS + '_text', JSON.stringify(texts));
  }
  return texts;
};

export const resetAllCoverText = (key: CoverKey): CoverTextSettings => {
  const texts = getCoverTextSettings();
  delete texts[key];
  localStorage.setItem(STORAGE_KEYS.COVERS + '_text', JSON.stringify(texts));
  return texts;
};

// Tentang Desa
export const STORAGE_TENTANG = 'desa_wm_tentang_v1';

export const getTentang = (): TentangDesaData => {
  try {
    const data = localStorage.getItem(STORAGE_TENTANG);
    if (data) {
      const parsed = JSON.parse(data);
      // Pastikan semua field ada, gunakan default jika tidak
      return {
        gambarSampul: parsed.gambarSampul || '',
        judul: parsed.judul || 'Tentang Desa Warung Menteng',
        deskripsi: parsed.deskripsi || '',
        visi: parsed.visi || '',
        misi: parsed.misi || [],
        luasWilayah: parsed.luasWilayah || '228 ha',
        ketinggian: parsed.ketinggian || '250 – 500 mdpl',
        jumlahRwRt: parsed.jumlahRwRt || '8/25',
      };
    }
  } catch {
    /* ignore */
  }
  // Return default data
  return {
    gambarSampul: '',
    judul: 'Tentang Desa Warung Menteng',
    deskripsi: '',
    visi: '',
    misi: [],
    luasWilayah: '228 ha',
    ketinggian: '250 – 500 mdpl',
    jumlahRwRt: '8/25',
  };
};