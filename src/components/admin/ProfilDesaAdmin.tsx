import React, { useState, useEffect } from 'react';
import {
  FileText,
  Landmark,
  Users,
  DollarSign,
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Loader2,
  CheckCircle2,
  Image as ImageIcon,
  User as UserIcon,
  Calendar,
  Coins,
  Wallet,
  FileCheck2,
  ClipboardList,
  TrendingUp,
  Banknote,
  Eye,
  Star,
  ListOrdered,
  Target,
  Crown,
} from 'lucide-react';
import { AdminLayout } from './AdminLayout';
import { FormModal } from './components/FormModal';
import { ImageUpload } from './components/ImageUpload';
import { PageRoute, TentangDesaData } from '../../types';
import { getCurrentAdmin } from '../../utils/storage';

/* ========================================================================= */
/* TIPE DATA                                                               */
/* ========================================================================= */

interface TimelineStepItem {
  id: string;
  step: string;
  title: string;
  period: string;
  desc: string;
}

interface HeritageSiteItem {
  id: string;
  nama: string;
  fotoUrl: string;
  ringkasan: string;
  deskripsiLengkap: string;
  lokasi: string;
  tahun: string;
  kategori: string;
}

interface KepalaDesaItem {
  id: string;
  nama: string;
  periodeMulai: string;
  periodeSelesai: string;
  fotoUrl: string;
  deskripsi: string;
}

interface SejarahDesaData {
  timelineSteps: TimelineStepItem[];
  heritageSites: HeritageSiteItem[];
  kepalaDesa: KepalaDesaItem[];
}

interface OfficialItem {
  id: string;
  level: 'kades' | 'sekdes' | 'kasi' | 'kadus';
  nama: string;
  jabatan: string;
  roleTag: string;
  subTag?: string;
  fotoUrl: string;
  pendidikan: string;
  tupoksi: string;
}

interface PemerintahanData {
  kades: OfficialItem | null;
  sekdes: OfficialItem | null;
  staff: OfficialItem[];
  kadus: OfficialItem[];
}

interface RincianAnggaranItem {
  id: string;
  nama: string;
  jumlah: string;
  persentase: string;
}

interface DokumenAnggaranItem {
  id: string;
  nama: string;
  fileUrl?: string;
  tahun: string;
  deskripsi: string;
}

interface RencanaBelanjaItem {
  id: string;
  nama: string;
  detail: string;
  anggaran: string;
  sumber: string;
}

interface RealisasiBelanjaItem {
  id: string;
  bidang: string;
  anggaran: string;
  realisasi: string;
  persentase: string;
}

interface TahunAnggaranItem {
  id: string;
  tahun: string;
  perdes: string;
  totalPendapatan: string;
  totalBelanja: string;
  rincian: RincianAnggaranItem[];
  dokumen: DokumenAnggaranItem[];
  rencanaBelanja: RencanaBelanjaItem[];
  realisasiBelanja: RealisasiBelanjaItem[];
}

interface AnggaranData {
  tahunList: TahunAnggaranItem[];
}

interface ModalField {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'image' | 'file';
  required?: boolean;
  placeholder?: string;
  options?: { label: string; value: string }[];
  rows?: number;
}

/* ========================================================================= */
/* STORAGE KEY                                                              */
/* ========================================================================= */

const STORAGE = {
  TENTANG: 'desa_wm_tentang_v1',
  SEJARAH: 'desa_wm_sejarah_v1',
  KEPALA_DESA: 'desa_wm_kepala_desa_v1',
  PEMERINTAHAN: 'desa_wm_pemerintahan_v1',
  ANGGARAN: 'desa_wm_anggaran_v1',
};

const loadStorage = <T,>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw) as T;
  } catch {
    /* ignore */
  }
  return fallback;
};

const saveStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

/* ========================================================================= */
/* DATA DEFAULT                                                           */
/* ========================================================================= */

const defaultTentang: TentangDesaData = {
  gambarSampul: '',
  judul: 'Tentang Desa Warung Menteng',
  deskripsi:
    'Desa Warung Menteng adalah desa yang berada di Kecamatan Cijeruk, Kabupaten Bogor. Desa ini memiliki potensi alam, budaya, dan masyarakat yang hidup rukun dalam keberagaman.',
  visi: 'Terwujudnya Desa Warung Menteng yang maju, mandiri, sejahtera, dan berakhlak mulia dengan memanfaatkan potensi lokal serta partisipasi aktif masyarakat.',
  misi: [
    'Meningkatkan kualitas pelayanan publik.',
    'Mengembangkan potensi ekonomi desa.',
    'Meningkatkan sarana dan prasarena desa.',
    'Melestarikan lingkungan hidup & budaya lokal.',
    'Meningkatkan kesejahteraan masyarakat.',
  ],
  luasWilayah: '228 ha',
  ketinggian: '250 – 500 mdpl',
  jumlahPenduduk: '8.997 Jiwa',
};

const defaultSejarah: SejarahDesaData = {
  timelineSteps: [
    {
      id: 'tl-1',
      step: '01',
      title: 'Masa Pemekaran',
      period: '± 2020 - Sekarang',
      desc: 'Desa Warung Menteng resmi dimekarkan dari desa induk sebagai bagian upaya pemerintah meningkatkan pelayanan masyarakat dan mempercepat pembangunan di wilayah ini.',
    },
    {
      id: 'tl-2',
      step: '02',
      title: 'Masa Awal Pembentukan',
      period: '± 1900 - 1950',
      desc: 'Desa mulai dihuni masyarakat dari berbagai daerah, terutama dari Cijeruk dan sekitarnya. Dikenal dengan sebutan "Warung" karena terdapat warung kecil tempat berkumpul warga.',
    },
    {
      id: 'tl-3',
      step: '03',
      title: 'Masa Perkembangan',
      period: '± 1950 - 1970',
      desc: 'Wilayah desa mulai terbentuk dengan jelas. Infrastruktur sederhana seperti jalan desa dan fasilitas umum mulai dibangun secara gotong royong.',
    },
    {
      id: 'tl-4',
      step: '04',
      title: 'Menuju Desa Administratif',
      period: '± 1970 - 2000',
      desc: 'Desa Warung Menteng resmi menjadi salah satu desa administratif di Kecamatan Cijeruk, Kabupaten Bogor.',
    },
    {
      id: 'tl-5',
      step: '05',
      title: 'Desa yang Maju dan Mandiri',
      period: '± 2000 - Sekarang',
      desc: 'Desa terus berkembang dengan program pembangunan, peningkatan ekonomi masyarakat, serta pelestarian lingkungan dan budaya lokal.',
    },
  ],
  heritageSites: [
    {
      id: 'hs-1',
      nama: 'Makam Eyang Warung Menteng',
      fotoUrl: '',
      ringkasan: 'Makam ini merupakan salah satu peninggalan bersejarah yang diyakini sebagai tempat peristirahatan tokoh penyebar agama di Desa Warung Menteng.',
      deskripsiLengkap:
        'Makam Eyang Warung Menteng adalah situs religi dan cagar budaya yang sangat dihormati oleh masyarakat desa.',
      lokasi: 'Kp. Pasir Pogor, RT 02/RW 01, Desa Warung Menteng',
      tahun: 'Abad ke-19',
      kategori: 'Situs Religi & Sejarah',
    },
    {
      id: 'hs-2',
      nama: 'Situs Rumah Adat (Lama)',
      fotoUrl: '',
      ringkasan: 'Situs bangunan rumah adat yang masih tersisa hingga kini menjadi bukti kehidupan masyarakat pada masa lalu, dengan arsitektur khas Sunda.',
      deskripsiLengkap:
        'Rumah panggung tradisional Sunda menggunakan fondasi umpak batu alami, dinding anyaman bambu, serta atap genteng tanah liat.',
      lokasi: 'Kp. Babakan RT 03/RW 02, Desa Warung Menteng',
      tahun: '± Tahun 1928',
      kategori: 'Arsitektur Tradisional',
    },
    {
      id: 'hs-3',
      nama: 'Batu Peringatan',
      fotoUrl: '',
      ringkasan: 'Batu ini dipercaya sebagai penanda sejarah penting dalam perjalanan desa, yang hingga kini masih dijaga oleh masyarakat setempat.',
      deskripsiLengkap:
        'Monolit batu tegak prasejarah (menhir) ini berdiri kokoh diselimuti lumut alami di kawasan teduh perbukitan desa.',
      lokasi: 'Kawasan Hutan Lindung Desa, Kp. Pasir Jeruk',
      tahun: 'Zaman Megalitikum / Penanda Sejarah',
      kategori: 'Cagar Budaya Batu',
    },
    {
      id: 'hs-4',
      nama: 'Tradisi dan Budaya Lokal',
      fotoUrl: '',
      ringkasan: 'Beberapa tradisi adat dan kesenian khas Warung Menteng juga menjadi bagian dari warisan budaya yang terus dilestarikan.',
      deskripsiLengkap:
        'Tradisi Seren Taun, upacara syukuran panen, pentas wayang golek, serta seni calung dan pencak silat terus dihidupkan melalui paguyuban pemuda dan sesepuh adat.',
      lokasi: 'Bale Sawala Budaya, Desa Warung Menteng',
      tahun: 'Turun-temurun',
      kategori: 'Adat & Seni Budaya',
    },
  ],
  kepalaDesa: [
    {
      id: 'kd-1',
      nama: 'H. Mohamad Sanusi',
      periodeMulai: '1978',
      periodeSelesai: '1988',
      fotoUrl: '',
      deskripsi: 'Kepala Desa pertama pasca pemekaran, memimpin masa transisi menuju desa administratif.',
    },
    {
      id: 'kd-2',
      nama: 'Suhanda',
      periodeMulai: '1988',
      periodeSelesai: '1998',
      fotoUrl: '',
      deskripsi: 'Memimpin pembangunan infrastruktur dasar desa.',
    },
    {
      id: 'kd-3',
      nama: 'H. Ahmad Djunaedi',
      periodeMulai: '1998',
      periodeSelesai: '2003',
      fotoUrl: '',
      deskripsi: 'Masa pelestarian budaya dan peningkatan infrastruktur dasar.',
    },
    {
      id: 'kd-4',
      nama: 'Dedi Supriyadi',
      periodeMulai: '2003',
      periodeSelesai: '2008',
      fotoUrl: '',
      deskripsi: 'Masa pengembangan ekonomi desa dan pemberdayaan masyarakat.',
    },
    {
      id: 'kd-5',
      nama: 'H. Mamat Sulaeman',
      periodeMulai: '2008',
      periodeSelesai: '2013',
      fotoUrl: '',
      deskripsi: 'Fokus pada pelestarian budaya dan peningkatan kesejahteraan.',
    },
    {
      id: 'kd-6',
      nama: 'H. Irfan Setiawan',
      periodeMulai: '2013',
      periodeSelesai: '2018',
      fotoUrl: '',
      deskripsi: 'Pengembangan infrastruktur jalan dan fasilitas umum.',
    },
    {
      id: 'kd-7',
      nama: 'A. Zaenal Arifin S.ag',
      periodeMulai: '2018',
      periodeSelesai: 'Sekarang',
      fotoUrl: '',
      deskripsi: 'Kepala Desa incar, fokus pada digitalisasi layanan dan pemberdayaan ekonomi.',
    },
  ],
};

const defaultPemerintahan: PemerintahanData = {
  kades: {
    id: 'kades-1',
    level: 'kades',
    nama: 'A. Zaenal Arifin S.ag',
    jabatan: 'Kepala Desa',
    roleTag: 'Kepala Desa',
    fotoUrl: '',
    pendidikan: 'S1 Agama & Pemerintahan',
    tupoksi:
      'Memimpin penyelenggaraan pemerintahan desa, membina ketenteraman, memelihara kerukunan hidup, serta mengoordinasikan pembangunan dan pemberdayaan masyarakat.',
  },
  sekdes: {
    id: 'sekdes-1',
    level: 'sekdes',
    nama: 'Agil Asmi Farizi S.H',
    jabatan: 'Sekretaris Desa',
    roleTag: 'Sekretaris Desa',
    fotoUrl: '',
    pendidikan: 'S1 Ilmu Hukum',
    tupoksi:
      'Membantu Kepala Desa dalam mengoordinasikan administrasi pemerintahan, tata persuratan, kearsipan, peraturan desa, pelaporan, dan pengelolaan keuangan desa.',
  },
  staff: [
    {
      id: 'staff-1',
      level: 'kasi',
      nama: 'Nasrudin',
      jabatan: 'Bendahara Desa',
      roleTag: 'Bendahara Desa',
      fotoUrl: '',
      pendidikan: 'D3 Administrasi Keuangan',
      tupoksi: 'Mengelola penatausahaan kas dan perbendaharaan desa, serta pertanggungjawaban SPJ keuangan.',
    },
    {
      id: 'staff-2',
      level: 'kasi',
      nama: 'M. Fajar Sandika',
      jabatan: 'Kasi Pemerintahan',
      roleTag: 'Kasi Pemerintahan',
      fotoUrl: '',
      pendidikan: 'S1 Ilmu Pemerintahan',
      tupoksi: 'Melaksanakan manajemen tata praja pemerintahan dan administrasi kependudukan.',
    },
    {
      id: 'staff-3',
      level: 'kasi',
      nama: 'M. Risman',
      jabatan: 'Kasi Kesra',
      roleTag: 'Kasi Kesra',
      fotoUrl: '',
      pendidikan: 'S1 Kesejahteraan Sosial',
      tupoksi: 'Melaksanakan program pembangunan bidang pendidikan, keagamaan, kesehatan, dan penanganan stunting.',
    },
    {
      id: 'staff-4',
      level: 'kasi',
      nama: 'M. Alwi Farhan Jamil',
      jabatan: 'Kasi Pelayanan',
      roleTag: 'Kasi Pelayanan',
      fotoUrl: '',
      pendidikan: 'S1 Administrasi Publik',
      tupoksi: 'Melaksanakan penyuluhan hukum dan motivasi masyarakat serta melayani surat pengantar administrasi warga.',
    },
    {
      id: 'staff-5',
      level: 'kasi',
      nama: 'M. Farhan Maulana',
      jabatan: 'Kasi Perencanaan',
      roleTag: 'Kasi Perencanaan',
      fotoUrl: '',
      pendidikan: 'S1 Perencanaan Wilayah',
      tupoksi: 'Menyusun rancangan RKPDes, RPJMDes, dan musrenbang desa.',
    },
    {
      id: 'staff-6',
      level: 'kasi',
      nama: 'M. Rizky Saefah',
      jabatan: 'Kasi TUTR',
      roleTag: 'Kasi TUTR',
      fotoUrl: '',
      pendidikan: 'S1 Teknik Sipil / Tata Ruang',
      tupoksi: 'Melaksanakan tata urusan tata ruang desa dan monitoring infrastruktur jalan lingkungan.',
    },
  ],
  kadus: [
    {
      id: 'kadus-1',
      level: 'kadus',
      nama: 'Bagus Hadi',
      jabatan: 'Kepala Dusun 1',
      roleTag: 'Kadus',
      subTag: 'Kadus 1',
      fotoUrl: '',
      pendidikan: 'SMA / Sederajat',
      tupoksi: 'Membantu Kepala Desa dalam pelaksanaan tugas di wilayah kerja Dusun 1 (RW 01 & RW 02).',
    },
    {
      id: 'kadus-2',
      level: 'kadus',
      nama: 'Rahmat Setiyono',
      jabatan: 'Kepala Dusun 2',
      roleTag: 'Kadus',
      subTag: 'Kadus 2',
      fotoUrl: '',
      pendidikan: 'SMA / Sederajat',
      tupoksi: 'Membantu Kepala Desa dalam pembinaan kemasyarakatan di wilayah Dusun 2 (RW 03 & RW 04).',
    },
    {
      id: 'kadus-3',
      level: 'kadus',
      nama: 'Diki Mahardika',
      jabatan: 'Kepala Dusun 3',
      roleTag: 'Kadus',
      subTag: 'Kadus 3',
      fotoUrl: '',
      pendidikan: 'SMA / Sederajat',
      tupoksi: 'Membantu tugas operasional Kepala Desa di wilayah Dusun 3 (RW 05 & RW 06).',
    },
  ],
};

const defaultAnggaran: AnggaranData = {
  tahunList: [
    {
      id: 'th-2026',
      tahun: '2026',
      perdes: 'Perdes No. 04 Tahun 2026',
      totalPendapatan: 'Rp 2.450.000.000',
      totalBelanja: 'Rp 2.450.000.000',
      rincian: [
        { id: 'rn-1', nama: 'Penyelenggaraan Pemerintahan Desa', jumlah: 'Rp 852.000.000', persentase: '34,8%' },
        { id: 'rn-2', nama: 'Pelaksanaan Pembangunan Desa', jumlah: 'Rp 1.020.000.000', persentase: '41,6%' },
        { id: 'rn-3', nama: 'Pembinaan Kemasyarakatan', jumlah: 'Rp 367.000.000', persentase: '15,0%' },
        { id: 'rn-4', nama: 'Pemberdayaan Masyarakat', jumlah: 'Rp 211.000.000', persentase: '8,6%' },
      ],
      dokumen: [
        {
          id: 'dk-1',
          nama: 'Peraturan Desa tentang APBDes 2026',
          tahun: '2026',
          deskripsi: 'Peraturan Desa tentang Anggaran Pendapatan dan Belanja Desa Tahun Anggaran 2026.',
        },
        {
          id: 'dk-2',
          nama: 'Rencana APBDes 2026',
          tahun: '2026',
          deskripsi: 'Rencana kerja anggaran pendapatan dan belanja desa beserta rincian program kerja tahun 2026.',
        },
      ],
      rencanaBelanja: [
        {
          id: 'rb-1',
          nama: 'Betonisasi & Pengaspalan Jalan Lingkungan Dusun II & III',
          detail: 'Volume: 1.200 meter',
          anggaran: 'Rp 380.000.000',
          sumber: 'Dana Desa',
        },
        {
          id: 'rb-2',
          nama: 'Pembangunan TPT & Saluran Irigasi Cikahuripan',
          detail: 'Volume: 350 meter',
          anggaran: 'Rp 215.000.000',
          sumber: 'Bantuan Samisade',
        },
      ],
      realisasiBelanja: [
        { id: 'rl-1', bidang: 'Pelaksanaan Pembangunan Desa', anggaran: 'Rp 1.020.000.000', realisasi: 'Rp 850.000.000', persentase: '83,3%' },
        { id: 'rl-2', bidang: 'Penyelenggaraan Pemerintahan Desa', anggaran: 'Rp 852.000.000', realisasi: 'Rp 800.000.000', persentase: '93,9%' },
      ],
    },
    {
      id: 'th-2025',
      tahun: '2025',
      perdes: 'Perdes No. 04 Tahun 2024',
      totalPendapatan: 'Rp 2.450.000.000',
      totalBelanja: 'Rp 2.450.000.000',
      rincian: [
        { id: 'rn-1', nama: 'Penyelenggaraan Pemerintahan Desa', jumlah: 'Rp 852.000.000', persentase: '34,8%' },
        { id: 'rn-2', nama: 'Pelaksanaan Pembangunan Desa', jumlah: 'Rp 1.020.000.000', persentase: '41,6%' },
        { id: 'rn-3', nama: 'Pembinaan Kemasyarakatan', jumlah: 'Rp 367.000.000', persentase: '15,0%' },
        { id: 'rn-4', nama: 'Pemberdayaan Masyarakat', jumlah: 'Rp 211.000.000', persentase: '8,6%' },
      ],
      dokumen: [
        {
          id: 'dk-1',
          nama: 'Peraturan Desa tentang APBDes 2025',
          tahun: '2025',
          deskripsi: 'Peraturan Desa Warung Menteng No. 04 Tahun 2024 tentang APBDes Tahun Anggaran 2025.',
        },
        {
          id: 'dk-2',
          nama: 'Rencana APBDes 2025',
          tahun: '2025',
          deskripsi: 'Rencana kerja anggaran pendapatan dan belanja desa beserta rincian program kerja tahun 2025.',
        },
        {
          id: 'dk-3',
          nama: 'Laporan Realisasi APBDes 2024',
          tahun: '2024',
          deskripsi: 'Laporan pertanggungjawaban realisasi penyerapan anggaran pendapatan dan belanja desa tahun 2024.',
        },
      ],
      rencanaBelanja: [
        {
          id: 'rb-1',
          nama: 'Betonisasi & Pengaspalan Jalan Lingkungan Dusun II & III',
          detail: 'Volume: 1.200 meter',
          anggaran: 'Rp 380.000.000',
          sumber: 'Dana Desa',
        },
        {
          id: 'rb-2',
          nama: 'Pembangunan TPT & Saluran Irigasi Cikahuripan',
          detail: 'Volume: 350 meter',
          anggaran: 'Rp 215.000.000',
          sumber: 'Bantuan Samisade',
        },
        {
          id: 'rb-3',
          nama: 'PMT & Alat Ukur Antropometri Posyandu',
          detail: 'Sasaran: 7 Posyandu RW',
          anggaran: 'Rp 140.000.000',
          sumber: 'Dana Desa',
        },
        {
          id: 'rb-4',
          nama: 'Bantuan Sarana Budidaya Perikanan & Pelatihan Packaging UMKM',
          detail: 'Sasaran: 4 Kelompok Tani/UMKM',
          anggaran: 'Rp 120.000.000',
          sumber: 'Dana Desa',
        },
      ],
      realisasiBelanja: [
        { id: 'rl-1', bidang: 'Pelaksanaan Pembangunan Desa', anggaran: 'Rp 1.020.000.000', realisasi: 'Rp 1.020.000.000', persentase: '100%' },
        { id: 'rl-2', bidang: 'Penyelenggaraan Pemerintahan Desa', anggaran: 'Rp 852.000.000', realisasi: 'Rp 852.000.000', persentase: '100%' },
        { id: 'rl-3', bidang: 'Pembinaan Kemasyarakatan', anggaran: 'Rp 367.000.000', realisasi: 'Rp 367.000.000', persentase: '100%' },
      ],
    },
  ],
};

/* ========================================================================= */
/* KOMPONEN UTAMA                                                           */
/* ========================================================================= */

interface ProfilDesaAdminProps {
  onNavigate: (page: PageRoute) => void;
  onLogout: () => void;
}

type TabId = 'tentang' | 'sejarah' | 'pemerintahan' | 'anggaran';

type ModalEntity =
  | 'timeline'
  | 'heritage'
  | 'kepalaDesa'
  | 'kades'
  | 'sekdes'
  | 'staff'
  | 'kadus'
  | 'rincian'
  | 'dokumen'
  | 'rencana'
  | 'realisasi';

const PdfFileUpload: React.FC<{
  value: string;
  onChange: (url: string) => void;
}> = ({ value, onChange }) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      setError('File harus berupa PDF');
      return;
    }
    setError(null);
    setIsUploading(true);
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      onChange(e.target?.result as string);
      setIsUploading(false);
    };
    reader.onerror = () => {
      setIsUploading(false);
      setError('Gagal membaca file');
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileSelect(file);
    e.target.value = '';
  };

  const handleRemove = () => {
    setFileName(null);
    onChange('');
    setError(null);
  };

  return (
    <div>
      {value ? (
        <div className="flex items-center justify-between gap-3 p-3 rounded-xl border border-emerald-200 bg-emerald-50">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <FileCheck2 className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-slate-800 truncate">{fileName || 'File PDF terlampir'}</p>
              <p className="text-[10px] text-slate-500">Tanpa batas ukuran file</p>
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <a
              href={value}
              download={fileName || 'dokumen.pdf'}
              className="p-2 text-slate-500 hover:text-emerald-700 hover:bg-emerald-100 rounded-lg transition"
              title="Unduh PDF"
            >
              <Save className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={handleRemove}
              className="p-2 text-slate-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition"
              title="Hapus file"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-3 p-4 rounded-xl border-2 border-dashed border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 cursor-pointer transition"
        >
          <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
            <FileCheck2 className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-slate-700">Klik untuk upload file PDF</p>
            <p className="text-[10px] text-slate-400 mt-0.5">Hanya PDF • Tanpa batas ukuran file</p>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf,.pdf"
            onChange={handleInputChange}
            className="hidden"
          />
        </div>
      )}
      {isUploading && (
        <div className="mt-2 p-2 bg-slate-50 border border-slate-200 text-slate-600 rounded-xl text-xs flex items-center gap-1.5">
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
          <span>Membaca file...</span>
        </div>
      )}
      {error && (
        <div className="mt-2 p-2 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs flex items-center gap-1.5">
          <X className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export const ProfilDesaAdmin: React.FC<ProfilDesaAdminProps> = ({ onNavigate, onLogout }) => {
  const currentAdmin = getCurrentAdmin();
  const isContributor = currentAdmin?.role === 'admin_2';
  const canEdit = !isContributor;

  const [activeTab, setActiveTab] = useState<TabId>('tentang');

  const [tentang, setTentang] = useState<TentangDesaData>(() => loadStorage(STORAGE.TENTANG, defaultTentang));
  const [sejarah, setSejarah] = useState<SejarahDesaData>(() => loadStorage(STORAGE.SEJARAH, defaultSejarah));
  const [kepalaDesa, setKepalaDesa] = useState<KepalaDesaItem[]>(() => loadStorage(STORAGE.KEPALA_DESA, defaultSejarah.kepalaDesa));
  const [pemerintahan, setPemerintahan] = useState<PemerintahanData>(() => loadStorage(STORAGE.PEMERINTAHAN, defaultPemerintahan));
  const [anggaran, setAnggaran] = useState<AnggaranData>(() => loadStorage(STORAGE.ANGGARAN, defaultAnggaran));

  const [selectedYear, setSelectedYear] = useState<string>(() => (loadStorage(STORAGE.ANGGARAN, defaultAnggaran) as AnggaranData).tahunList[0]?.id || '');

  const [toast, setToast] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  /* ------- Modal CRUD state ------- */
  const [modal, setModal] = useState<{ entity: ModalEntity; editing: any | null } | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  /* ==================================================================== */
  /* HANDLER GENERIK MODAL CRUD                                            */
  /* ==================================================================== */

  const openAddModal = (entity: ModalEntity) => {
    if (!canEdit) return;
    setModal({ entity, editing: null });
    setFormData({});
    setImagePreview(null);
  };

  const openEditModal = (entity: ModalEntity, item: any) => {
    if (!canEdit) return;
    setModal({ entity, editing: item });
    setFormData({ ...item });
    setImagePreview(item.fotoUrl || item.gambarSampul || null);
  };

  const handleInputChange = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    if (key === 'fotoUrl') setImagePreview(value);
  };

  const handleModalSubmit = async () => {
    if (!canEdit || !modal) return;
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 400));

    const entity = modal.entity;
    const editing = modal.editing;

    if (entity === 'timeline') {
      const newItem: TimelineStepItem = { id: editing?.id || `tl-${Date.now()}`, step: formData.step || String(sejarah.timelineSteps.length + 1).padStart(2, '0'), title: formData.title, period: formData.period, desc: formData.desc };
      const list = editing ? sejarah.timelineSteps.map(i => (i.id === editing.id ? newItem : i)) : [...sejarah.timelineSteps, newItem];
      const next = { ...sejarah, timelineSteps: list };
      setSejarah(next);
      saveStorage(STORAGE.SEJARAH, next);
    } else if (entity === 'heritage') {
      const newItem: HeritageSiteItem = { id: editing?.id || `hs-${Date.now()}`, nama: formData.nama, fotoUrl: formData.fotoUrl || '', ringkasan: formData.ringkasan, deskripsiLengkap: formData.deskripsiLengkap, lokasi: formData.lokasi, tahun: formData.tahun, kategori: formData.kategori };
      const list = editing ? sejarah.heritageSites.map(i => (i.id === editing.id ? newItem : i)) : [...sejarah.heritageSites, newItem];
      const next = { ...sejarah, heritageSites: list };
      setSejarah(next);
      saveStorage(STORAGE.SEJARAH, next);
    } else if (entity === 'kades' || entity === 'sekdes') {
      const newItem: OfficialItem = {
        id: editing?.id || `${entity}-${Date.now()}`,
        level: entity === 'kades' ? 'kades' : 'sekdes',
        nama: formData.nama,
        jabatan: formData.jabatan,
        roleTag: formData.roleTag || formData.jabatan,
        fotoUrl: formData.fotoUrl || '',
        pendidikan: formData.pendidikan,
        tupoksi: formData.tupoksi,
      };
      const next = { ...pemerintahan, [entity === 'kades' ? 'kades' : 'sekdes']: newItem };
      setPemerintahan(next);
      saveStorage(STORAGE.PEMERINTAHAN, next);
    } else if (entity === 'staff' || entity === 'kadus') {
      const newItem: OfficialItem = {
        id: editing?.id || `${entity}-${Date.now()}`,
        level: entity === 'staff' ? 'kasi' : 'kadus',
        nama: formData.nama,
        jabatan: formData.jabatan,
        roleTag: formData.roleTag || formData.jabatan,
        subTag: formData.subTag || (entity === 'kadus' ? `Kadus ${(pemerintahan.kadus.length + 1)}` : undefined),
        fotoUrl: formData.fotoUrl || '',
        pendidikan: formData.pendidikan,
        tupoksi: formData.tupoksi,
      };
      const key = entity === 'staff' ? 'staff' : 'kadus';
      const list = editing ? pemerintahan[key].map(i => (i.id === editing.id ? newItem : i)) : [...pemerintahan[key], newItem];
      const next = { ...pemerintahan, [key]: list };
      setPemerintahan(next);
      saveStorage(STORAGE.PEMERINTAHAN, next);
    } else if (entity === 'kepalaDesa') {
      const newItem: KepalaDesaItem = { id: editing?.id || `kd-${Date.now()}`, nama: formData.nama, periodeMulai: formData.periodeMulai, periodeSelesai: formData.periodeSelesai, fotoUrl: formData.fotoUrl || '', deskripsi: formData.deskripsi };
      const list = editing ? kepalaDesa.map(i => (i.id === editing.id ? newItem : i)) : [...kepalaDesa, newItem];
      setKepalaDesa(list);
      saveStorage(STORAGE.KEPALA_DESA, list);
    } else if (entity === 'rincian' || entity === 'dokumen' || entity === 'rencana' || entity === 'realisasi') {
      const tahun = anggaran.tahunList.find(t => t.id === selectedYear);
      if (!tahun) return;
      const key = entity === 'rincian' ? 'rincian' : entity === 'dokumen' ? 'dokumen' : entity === 'rencana' ? 'rencanaBelanja' : 'realisasiBelanja';
      const uid = editing?.id || `${entity}-${Date.now()}`;
      let newItem: any = { id: uid, ...formData };
      if (entity === 'dokumen' && !newItem.tahun) newItem.tahun = tahun.tahun;
      const list = editing ? tahun[key].map(i => (i.id === editing.id ? newItem : i)) : [...tahun[key], newItem];
      const nextTahun = { ...tahun, [key]: list };
      const next = { ...anggaran, tahunList: anggaran.tahunList.map(t => (t.id === selectedYear ? nextTahun : t)) };
      setAnggaran(next);
      saveStorage(STORAGE.ANGGARAN, next);
    }

    setModal(null);
    setIsSaving(false);
    showToast('Data berhasil disimpan');
  };

  const handleDelete = (entity: ModalEntity, id: string) => {
    if (!canEdit) return;
    if (!confirm('Yakin ingin menghapus data ini?')) return;

    if (entity === 'timeline') {
      const next = { ...sejarah, timelineSteps: sejarah.timelineSteps.filter(i => i.id !== id) };
      setSejarah(next);
      saveStorage(STORAGE.SEJARAH, next);
    } else if (entity === 'heritage') {
      const next = { ...sejarah, heritageSites: sejarah.heritageSites.filter(i => i.id !== id) };
      setSejarah(next);
      saveStorage(STORAGE.SEJARAH, next);
    } else if (entity === 'staff') {
      const next = { ...pemerintahan, staff: pemerintahan.staff.filter(i => i.id !== id) };
      setPemerintahan(next);
      saveStorage(STORAGE.PEMERINTAHAN, next);
    } else if (entity === 'kadus') {
      const next = { ...pemerintahan, kadus: pemerintahan.kadus.filter(i => i.id !== id) };
      setPemerintahan(next);
      saveStorage(STORAGE.PEMERINTAHAN, next);
    } else if (entity === 'kepalaDesa') {
      const list = kepalaDesa.filter(i => i.id !== id);
      setKepalaDesa(list);
      saveStorage(STORAGE.KEPALA_DESA, list);
    } else if (entity === 'rincian' || entity === 'dokumen' || entity === 'rencana' || entity === 'realisasi') {
      const tahun = anggaran.tahunList.find(t => t.id === selectedYear);
      if (!tahun) return;
      const key = entity === 'rincian' ? 'rincian' : entity === 'dokumen' ? 'dokumen' : entity === 'rencana' ? 'rencanaBelanja' : 'realisasiBelanja';
      const nextTahun = { ...tahun, [key]: tahun[key].filter(i => i.id !== id) };
      const next = { ...anggaran, tahunList: anggaran.tahunList.map(t => (t.id === selectedYear ? nextTahun : t)) };
      setAnggaran(next);
      saveStorage(STORAGE.ANGGARAN, next);
    }

    showToast('Data berhasil dihapus');
  };

  /* ==================================================================== */
  /* PENYIMPANAN TAB TENTANG, PEMERINTAHAN, ANGGARAN (BAGIAN INDUK)        */
  /* ==================================================================== */

  const saveTentang = async () => {
    if (!canEdit) return;
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 500));
    saveStorage(STORAGE.TENTANG, tentang);
    setIsSaving(false);
    showToast('Tentang Desa berhasil disimpan');
  };

  const savePemerintahan = async () => {
    if (!canEdit) return;
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 500));
    saveStorage(STORAGE.PEMERINTAHAN, pemerintahan);
    setIsSaving(false);
    showToast('Struktur Pemerintahan berhasil disimpan');
  };

  const saveAnggaran = async () => {
    if (!canEdit) return;
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 500));
    saveStorage(STORAGE.ANGGARAN, anggaran);
    setIsSaving(false);
    showToast('Data Anggaran Desa berhasil disimpan');
  };

  const updateTahunField = (key: string, value: any) => {
    const next = {
      ...anggaran,
      tahunList: anggaran.tahunList.map(t => (t.id === selectedYear ? { ...t, [key]: value } : t)),
    };
    setAnggaran(next);
  };

  const addTahunAnggaran = () => {
    const nextYear = String(Math.max(...anggaran.tahunList.map(t => parseInt(t.tahun, 10) || 0)) + 1);
    const newTahun: TahunAnggaranItem = {
      id: `th-${Date.now()}`,
      tahun: nextYear,
      perdes: '',
      totalPendapatan: '',
      totalBelanja: '',
      rincian: [],
      dokumen: [],
      rencanaBelanja: [],
      realisasiBelanja: [],
    };
    const next = { ...anggaran, tahunList: [newTahun, ...anggaran.tahunList] };
    setAnggaran(next);
    setSelectedYear(newTahun.id);
  };

  const deleteTahunAnggaran = (id: string) => {
    if (!confirm('Yakin ingin menghapus tahun anggaran ini beserta seluruh datanya?')) return;
    const next = { ...anggaran, tahunList: anggaran.tahunList.filter(t => t.id !== id) };
    setAnggaran(next);
    if (selectedYear === id) setSelectedYear(next.tahunList[0]?.id || '');
    showToast('Tahun anggaran dihapus');
  };

  /* ==================================================================== */
  /* DEFINISI MODAL FIELDS                                                  */
  /* ==================================================================== */

  const modalConfig: Record<ModalEntity, { title: string; fields: ModalField[] }> = {
    timeline: {
      title: 'Tahapan Perjalanan Sejarah',
      fields: [
        { key: 'step', label: 'Nomor Tahapan', type: 'text', required: true, placeholder: '01' },
        { key: 'title', label: 'Judul Tahapan', type: 'text', required: true, placeholder: 'Masa Pemekaran' },
        { key: 'period', label: 'Periode', type: 'text', required: true, placeholder: '± 2000 - Sekarang' },
        { key: 'desc', label: 'Deskripsi', type: 'textarea', required: true, rows: 5 },
      ],
    },
    heritage: {
      title: 'Situs Sejarah & Cagar Budaya',
      fields: [
        { key: 'nama', label: 'Nama Situs', type: 'text', required: true, placeholder: 'Makam Eyang Warung Menteng' },
        { key: 'fotoUrl', label: 'Foto Situs', type: 'image' },
        { key: 'kategori', label: 'Kategori', type: 'text', required: true, placeholder: 'Situs Religi & Sejarah' },
        { key: 'tahun', label: 'Perkiraan Tahun', type: 'text', placeholder: 'Abad ke-19' },
        { key: 'lokasi', label: 'Lokasi', type: 'text', placeholder: 'Kp. ... RT .../RW ...' },
        { key: 'ringkasan', label: 'Ringkasan', type: 'textarea', required: true, rows: 3 },
        { key: 'deskripsiLengkap', label: 'Deskripsi Lengkap', type: 'textarea', required: true, rows: 5 },
      ],
    },
    kades: {
      title: 'Data Kepala Desa',
      fields: [
        { key: 'nama', label: 'Nama Lengkap', type: 'text', required: true, placeholder: 'A. Zaenal Arifin S.ag' },
        { key: 'jabatan', label: 'Jabatan', type: 'text', required: true, placeholder: 'Kepala Desa' },
        { key: 'roleTag', label: 'Tag Jabatan', type: 'text', placeholder: 'Kepala Desa' },
        { key: 'fotoUrl', label: 'Foto Pejabat', type: 'image' },
        { key: 'pendidikan', label: 'Pendidikan Terakhir', type: 'text', placeholder: 'S1 Agama & Pemerintahan' },
        { key: 'tupoksi', label: 'Tugas Pokok & Fungsi', type: 'textarea', required: true, rows: 5 },
      ],
    },
    sekdes: {
      title: 'Data Sekretaris Desa',
      fields: [
        { key: 'nama', label: 'Nama Lengkap', type: 'text', required: true, placeholder: 'Agil Asmi Farizi S.H' },
        { key: 'jabatan', label: 'Jabatan', type: 'text', required: true, placeholder: 'Sekretaris Desa' },
        { key: 'roleTag', label: 'Tag Jabatan', type: 'text', placeholder: 'Sekretaris Desa' },
        { key: 'fotoUrl', label: 'Foto Pejabat', type: 'image' },
        { key: 'pendidikan', label: 'Pendidikan Terakhir', type: 'text', placeholder: 'S1 Ilmu Hukum' },
        { key: 'tupoksi', label: 'Tugas Pokok & Fungsi', type: 'textarea', required: true, rows: 5 },
      ],
    },
    staff: {
      title: 'Perangkat Desa / Kasi',
      fields: [
        { key: 'nama', label: 'Nama Lengkap', type: 'text', required: true, placeholder: 'Nasrudin' },
        { key: 'jabatan', label: 'Jabatan', type: 'text', required: true, placeholder: 'Bendahara Desa' },
        { key: 'roleTag', label: 'Tag Jabatan', type: 'text', placeholder: 'Bendahara Desa' },
        { key: 'fotoUrl', label: 'Foto Pejabat', type: 'image' },
        { key: 'pendidikan', label: 'Pendidikan Terakhir', type: 'text', placeholder: 'D3 Administrasi Keuangan' },
        { key: 'tupoksi', label: 'Tugas Pokok & Fungsi', type: 'textarea', required: true, rows: 5 },
      ],
    },
    kadus: {
      title: 'Kepala Dusun',
      fields: [
        { key: 'nama', label: 'Nama Lengkap', type: 'text', required: true, placeholder: 'Bagus Hadi' },
        { key: 'jabatan', label: 'Jabatan', type: 'text', required: true, placeholder: 'Kepala Dusun 1' },
        { key: 'subTag', label: 'Sub Tag', type: 'text', placeholder: 'Kadus 1' },
        { key: 'fotoUrl', label: 'Foto Pejabat', type: 'image' },
        { key: 'pendidikan', label: 'Pendidikan Terakhir', type: 'text', placeholder: 'SMA / Sederajat' },
        { key: 'tupoksi', label: 'Tugas Pokok & Fungsi', type: 'textarea', required: true, rows: 5 },
      ],
    },
    kepalaDesa: {
      title: 'Kepala Desa dari Masa ke Masa',
      fields: [
        { key: 'nama', label: 'Nama Kepala Desa', type: 'text', required: true, placeholder: 'H. Mohamad Sanusi' },
        { key: 'periodeMulai', label: 'Periode Mulai (Tahun)', type: 'text', required: true, placeholder: '1978' },
        { key: 'periodeSelesai', label: 'Periode Selesai (Tahun)', type: 'text', required: true, placeholder: '1988 / Sekarang' },
        { key: 'fotoUrl', label: 'Foto Profil', type: 'image' },
        { key: 'deskripsi', label: 'Deskripsi / Catatan Masa Kepemimpinan', type: 'textarea', required: true, rows: 4 },
      ],
    },
    rincian: {
      title: 'Rincian Anggaran',
      fields: [
        { key: 'nama', label: 'Nama Bidang', type: 'text', required: true, placeholder: 'Penyelenggaraan Pemerintahan Desa' },
        { key: 'jumlah', label: 'Jumlah Anggaran', type: 'text', required: true, placeholder: 'Rp 852.000.000' },
        { key: 'persentase', label: 'Persentase', type: 'text', required: true, placeholder: '34,8%' },
      ],
    },
    dokumen: {
      title: 'Dokumen Anggaran',
      fields: [
        { key: 'nama', label: 'Nama Dokumen', type: 'text', required: true, placeholder: 'Peraturan Desa tentang APBDes 2026' },
        { key: 'fileUrl', label: 'Upload File PDF', type: 'file', placeholder: 'Pilih berkas PDF (tanpa batas ukuran)' },
        { key: 'tahun', label: 'Tahun', type: 'text', placeholder: '2026' },
        { key: 'deskripsi', label: 'Deskripsi', type: 'textarea', rows: 3 },
      ],
    },
    rencana: {
      title: 'Rencana Belanja Desa',
      fields: [
        { key: 'nama', label: 'Nama Kegiatan', type: 'text', required: true, placeholder: 'Betonisasi Jalan Lingkungan' },
        { key: 'detail', label: 'Detail / Volume', type: 'text', placeholder: 'Volume: 1.200 meter' },
        { key: 'anggaran', label: 'Anggaran', type: 'text', required: true, placeholder: 'Rp 380.000.000' },
        { key: 'sumber', label: 'Sumber Dana', type: 'text', placeholder: 'Dana Desa' },
      ],
    },
    realisasi: {
      title: 'Realisasi Belanja Desa',
      fields: [
        { key: 'bidang', label: 'Bidang Belanja', type: 'text', required: true, placeholder: 'Pelaksanaan Pembangunan Desa' },
        { key: 'anggaran', label: 'Total Anggaran', type: 'text', required: true, placeholder: 'Rp 1.020.000.000' },
        { key: 'realisasi', label: 'Realisasi', type: 'text', required: true, placeholder: 'Rp 850.000.000' },
        { key: 'persentase', label: 'Persentase', type: 'text', placeholder: '83,3%' },
      ],
    },
  };

  const renderModalFields = () => {
    if (!modal) return null;
    const { fields } = modalConfig[modal.entity];
    return (
      <div className="space-y-5">
        {fields.map(field => (
          <div key={field.key}>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              {field.label} {field.required && <span className="text-rose-500">*</span>}
            </label>
            {field.type === 'image' ? (
              <ImageUpload
                label=""
                value={formData[field.key] || ''}
                onChange={(v) => handleInputChange(field.key, v)}
                previewSize="md"
              />
            ) : field.type === 'file' ? (
              <PdfFileUpload
                value={formData[field.key] || ''}
                onChange={(v) => handleInputChange(field.key, v)}
              />
            ) : field.type === 'select' ? (
              <select
                value={formData[field.key] || ''}
                onChange={e => handleInputChange(field.key, e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
              >
                {field.options?.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            ) : field.type === 'textarea' ? (
              <textarea
                value={formData[field.key] || ''}
                onChange={e => handleInputChange(field.key, e.target.value)}
                rows={field.rows || 4}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
              />
            ) : (
              <input
                type="text"
                value={formData[field.key] || ''}
                onChange={e => handleInputChange(field.key, e.target.value)}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  const openModal = modal ? (
    <FormModal
      isOpen={true}
      onClose={() => setModal(null)}
      onSubmit={(e) => { e.preventDefault(); handleModalSubmit(); }}
      title={modal.editing ? `Edit ${modalConfig[modal.entity].title}` : `Tambah ${modalConfig[modal.entity].title}`}
      isLoading={isSaving}
      size="xl"
    >
      {renderModalFields()}
    </FormModal>
  ) : null;

  /* ==================================================================== */
  /* RENDER TAB: TENTANG DESA                                              */
  /* ==================================================================== */

  const renderTentang = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-700" />
              Konten Tentang Desa
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Gambar sampul, teks deskripsi, visi & misi desa</p>
          </div>
          <button
            onClick={saveTentang}
            disabled={isSaving || !canEdit}
            className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition disabled:opacity-50 flex items-center gap-1.5"
          >
            {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            <span>Simpan</span>
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-2">Gambar Sampul</label>
            <ImageUpload
              label=""
              value={tentang.gambarSampul}
              onChange={(v) => setTentang(prev => ({ ...prev, gambarSampul: v }))}
              previewSize="lg"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Judul Halaman</label>
              <input
                type="text"
                value={tentang.judul}
                onChange={e => setTentang(prev => ({ ...prev, judul: e.target.value }))}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Sub Judul (Opsional)</label>
              <input
                type="text"
                value={tentang.deskripsi}
                onChange={e => setTentang(prev => ({ ...prev, deskripsi: e.target.value }))}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Deskripsi Singkat (Tampil di Halaman)</label>
            <textarea
              value={tentang.deskripsi}
              onChange={e => setTentang(prev => ({ ...prev, deskripsi: e.target.value }))}
              rows={3}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
            />
            </div>
        </div>
      {/* Visi & Misi */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-emerald-700" />
          <h2 className="text-lg font-bold text-slate-900">Visi & Misi Desa</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1 flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-emerald-700" /> Visi Desa
            </label>
            <textarea
              value={tentang.visi}
              onChange={e => setTentang(prev => ({ ...prev, visi: e.target.value }))}
              rows={5}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <ListOrdered className="w-3.5 h-3.5 text-emerald-700" /> Misi Desa
              </label>
              <button
                onClick={() => setTentang(prev => ({ ...prev, misi: [...prev.misi, ''] }))}
                className="text-[11px] font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" /> Tambah Misi
              </button>
            </div>
            <div className="space-y-2">
              {tentang.misi.map((m, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-700 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <input
                    type="text"
                    value={m}
                    onChange={e => {
                      const misi = [...tentang.misi];
                      misi[idx] = e.target.value;
                      setTentang(prev => ({ ...prev, misi }));
                    }}
                    className="flex-1 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                  <button
                    onClick={() => setTentang(prev => ({ ...prev, misi: prev.misi.filter((_, i) => i !== idx) }))}
                    className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition"
                    title="Hapus misi"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
</div>
    </div>
  </div>
  );

  /* ==================================================================== */
  /* RENDER TAB: SEJARAH DESA                                              */
  /* ==================================================================== */

  const renderSejarah = () => (
    <div className="space-y-8">
      {/* Sub-section: Perjalanan Sejarah */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-emerald-700" />
              Perjalanan Sejarah Desa
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Tahapan kronologis perjalanan sejarah desa</p>
          </div>
          <button
            onClick={() => openAddModal('timeline')}
            disabled={!canEdit}
            className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition disabled:opacity-50 flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Tahapan</span>
          </button>
        </div>

        <div className="relative pl-6 sm:pl-8 space-y-4 before:content-[''] before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-emerald-300">
          {sejarah.timelineSteps.map((item) => (
            <div key={item.id} className="relative flex items-start gap-4 group">
              <span className="absolute -left-6 sm:-left-7 top-1 w-5 h-5 rounded-full bg-white border-3 border-emerald-600 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
              </span>
              <div className="flex-1 bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 hover:border-emerald-300 transition">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-emerald-700 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                        {item.step}
                      </span>
                      <span className="inline-block text-[10px] font-bold text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => openEditModal('timeline', item)}
                      disabled={!canEdit}
                      className="p-1.5 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete('timeline', item.id)}
                      disabled={!canEdit}
                      className="p-1.5 text-slate-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition"
                      title="Hapus"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sub-section: Situs Sejarah & Cagar Budaya */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Star className="w-5 h-5 text-emerald-700" />
              Situs Sejarah & Cagar Budaya
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Kelola situs sejarah dan cagar budaya desa</p>
          </div>
          <button
            onClick={() => openAddModal('heritage')}
            disabled={!canEdit}
            className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition disabled:opacity-50 flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Situs</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sejarah.heritageSites.map((site) => (
            <div key={site.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition group">
              <div className="h-36 bg-slate-100 overflow-hidden">
                {site.fotoUrl ? (
                  <img src={site.fotoUrl} alt={site.nama} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-300">
                    <ImageIcon className="w-8 h-8" />
                  </div>
                )}
              </div>
              <div className="p-4 space-y-2">
                <span className="inline-block text-[10px] font-bold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded-full">
                  {site.kategori}
                </span>
                <h4 className="text-sm font-bold text-slate-900 line-clamp-1">{site.nama}</h4>
                <p className="text-[11px] text-slate-500 line-clamp-2">{site.ringkasan}</p>
                <p className="text-[10px] text-slate-400">{site.tahun} • {site.lokasi}</p>
                <div className="flex items-center gap-1 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => openEditModal('heritage', site)}
                    disabled={!canEdit}
                    className="p-1.5 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition"
                    title="Edit"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete('heritage', site.id)}
                    disabled={!canEdit}
                    className="p-1.5 text-slate-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition"
                    title="Hapus"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    {/* Sub-section: Kepala Desa dari Masa ke Masa */}
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Crown className="w-5 h-5 text-emerald-700" />
            Kepala Desa dari Masa ke Masa
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">Daftar kepala desa yang telah memimpin Desa Warung Menteng</p>
        </div>
        <button
          onClick={() => openAddModal('kepalaDesa')}
          disabled={!canEdit}
          className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition disabled:opacity-50 flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Kepala Desa</span>
        </button>
      </div>

      {kepalaDesa.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {kepalaDesa.map((kd) => (
            <div key={kd.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition group">
              <div className="h-36 bg-slate-100 overflow-hidden">
                {kd.fotoUrl ? (
                  <img src={kd.fotoUrl} alt={kd.nama} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-300">
                    <Crown className="w-8 h-8 text-emerald-300" />
                  </div>
                )}
              </div>
              <div className="p-4 space-y-2">
                <span className="inline-block text-[10px] font-bold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded-full">
                  {kd.periodeMulai} - {kd.periodeSelesai}
                </span>
                <h4 className="text-sm font-bold text-slate-900 line-clamp-1">{kd.nama}</h4>
                <p className="text-[11px] text-slate-500 line-clamp-2">{kd.deskripsi}</p>
                <div className="flex items-center gap-1 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => openEditModal('kepalaDesa', kd)}
                    disabled={!canEdit}
                    className="p-1.5 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition"
                    title="Edit"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete('kepalaDesa', kd.id)}
                    disabled={!canEdit}
                    className="p-1.5 text-slate-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition"
                    title="Hapus"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-slate-500">
          <Crown className="w-12 h-12 mx-auto text-emerald-300 mb-3" />
          <p className="text-sm font-medium text-slate-700">Belum ada data Kepala Desa</p>
          <p className="text-xs text-slate-500 mt-1">Klik tombol "Tambah Kepala Desa" untuk memulai</p>
        </div>
      )}
    </div>
  </div>
) /* ==================================================================== */
/* RENDER TAB: PEMERINTAHAN DESA                                          */
  /* ==================================================================== */

  const OfficialsCard: React.FC<{ item: OfficialItem; level: 'kades' | 'sekdes'; onEdit: () => void }> = ({ item, level, onEdit }) => (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition flex items-center gap-4 p-4">
      <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border-2 border-emerald-700/30">
        {item.fotoUrl ? (
          <img src={item.fotoUrl} alt={item.nama} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-300">
            <UserIcon className="w-8 h-8" />
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <span className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-1 ${level === 'kades' ? 'bg-emerald-700 text-white' : 'bg-emerald-100 text-emerald-900'}`}>
          {item.roleTag || item.jabatan}
        </span>
        <h4 className="text-sm font-bold text-slate-900 truncate">{item.nama}</h4>
        <p className="text-[11px] text-slate-500 truncate">{item.pendidikan}</p>
      </div>
      <button
        onClick={onEdit}
        disabled={!canEdit}
        className="p-2 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition shrink-0"
        title="Edit"
      >
        <Edit className="w-4 h-4" />
      </button>
    </div>
  );

  const renderPemerintahan = () => {
    const kades = pemerintahan.kades;
    const sekdes = pemerintahan.sekdes;
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between pb-2">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-700" />
              Struktur Pemerintahan Desa
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Kelola foto setiap individu dan jabatannya (Kades, Sekdes, Perangkat, Kadus)
            </p>
          </div>
          <button
            onClick={savePemerintahan}
            disabled={isSaving || !canEdit}
            className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition disabled:opacity-50 flex items-center gap-1.5"
          >
            {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            <span>Simpan</span>
          </button>
        </div>

        {/* Kades & Sekdes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {kades && (
            <OfficialsCard
              item={kades}
              level="kades"
              onEdit={() => openEditModal('kades', kades)}
            />
          )}
          {sekdes && (
            <OfficialsCard
              item={sekdes}
              level="sekdes"
              onEdit={() => openEditModal('sekdes', sekdes)}
            />
          )}
        </div>

        {/* Staff / Perangkat */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Perangkat Desa & Kasi</h3>
              <p className="text-[11px] text-slate-500">Bendahara, Kasi, dan perangkat lainnya</p>
            </div>
            <button
              onClick={() => openAddModal('staff')}
              disabled={!canEdit}
              className="px-3 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition disabled:opacity-50 flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pemerintahan.staff.map((person) => (
              <div key={person.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition group">
                <div className="h-28 bg-slate-100 overflow-hidden">
                  {person.fotoUrl ? (
                    <img src={person.fotoUrl} alt={person.nama} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                      <UserIcon className="w-8 h-8" />
                    </div>
                  )}
                </div>
                <div className="p-4 space-y-1.5">
                  <span className="inline-block text-[10px] font-bold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded-full">
                    {person.roleTag || person.jabatan}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 truncate">{person.nama}</h4>
                  <p className="text-[11px] text-slate-500 truncate">{person.pendidikan}</p>
                  <div className="flex items-center gap-1 pt-1 border-t border-slate-100">
                    <button
                      onClick={() => openEditModal('staff', person)}
                      disabled={!canEdit}
                      className="p-1.5 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete('staff', person.id)}
                      disabled={!canEdit}
                      className="p-1.5 text-slate-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition"
                      title="Hapus"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kadus */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Kepala Dusun (Kadus)</h3>
              <p className="text-[11px] text-slate-500">Kepala dusun per wilayah</p>
            </div>
            <button
              onClick={() => openAddModal('kadus')}
              disabled={!canEdit}
              className="px-3 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition disabled:opacity-50 flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pemerintahan.kadus.map((kadus) => (
              <div key={kadus.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition group">
                <div className="h-28 bg-slate-100 overflow-hidden">
                  {kadus.fotoUrl ? (
                    <img src={kadus.fotoUrl} alt={kadus.nama} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                      <UserIcon className="w-8 h-8" />
                    </div>
                  )}
                </div>
                <div className="p-4 space-y-1.5">
                  <span className="inline-block text-[10px] font-bold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded-full">
                    {kadus.subTag || kadus.roleTag || kadus.jabatan}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 truncate">{kadus.nama}</h4>
                  <p className="text-[11px] text-slate-500 truncate">{kadus.pendidikan}</p>
                  <div className="flex items-center gap-1 pt-1 border-t border-slate-100">
                    <button
                      onClick={() => openEditModal('kadus', kadus)}
                      disabled={!canEdit}
                      className="p-1.5 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete('kadus', kadus.id)}
                      disabled={!canEdit}
                      className="p-1.5 text-slate-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition"
                      title="Hapus"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  /* ==================================================================== */
  /* RENDER TAB: ANGGARAN DESA                                              */
  /* ==================================================================== */
  /* RENDER TAB: ANGGARAN DESA                                              */
  /* ==================================================================== */

  const renderAnggaran = () => {
    const tahun = anggaran.tahunList.find(t => t.id === selectedYear);

    const SubList = ({
      title,
      icon,
      entity,
      emptyText,
    }: {
      title: string;
      icon: React.ReactNode;
      entity: ModalEntity;
      emptyText: string;
    }) => {
      const key = entity === 'rincian' ? 'rincian' : entity === 'dokumen' ? 'dokumen' : entity === 'rencana' ? 'rencanaBelanja' : 'realisasiBelanja';
      const items: any[] = tahun ? tahun[key] : [];
      return (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">{icon}</div>
              <h3 className="text-sm font-bold text-slate-900">{title}</h3>
            </div>
            <button
              onClick={() => openAddModal(entity)}
              disabled={!canEdit}
              className="px-3 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition disabled:opacity-50 flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah</span>
            </button>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-8 text-xs text-slate-400">{emptyText}</div>
          ) : entity === 'dokumen' ? (
            <div className="space-y-2.5">
              {tahun!.dokumen.map(doc => (
                <div key={doc.id} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                      <FileCheck2 className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h5 className="text-xs font-semibold text-slate-800 truncate">{doc.nama}</h5>
                      <p className="text-[10px] text-slate-400">{doc.fileUrl ? 'PDF • ' : ''}{doc.tahun}{doc.deskripsi ? ` • ${doc.deskripsi}` : ''}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    {doc.fileUrl && (
                      <a
                        href={doc.fileUrl}
                        download={`${doc.nama || 'dokumen'}.pdf`}
                        className="p-1.5 text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition"
                        title="Unduh PDF"
                      >
                        <FileCheck2 className="w-4 h-4" />
                      </a>
                    )}
                    <button
                      onClick={() => openEditModal('dokumen', doc)}
                      disabled={!canEdit}
                      className="p-1.5 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete('dokumen', doc.id)}
                      disabled={!canEdit}
                      className="p-1.5 text-slate-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                    {entity === 'rincian' && (<>
                      <th className="p-3 font-bold rounded-l-xl">Bidang</th>
                      <th className="p-3 font-bold text-right">Jumlah</th>
                      <th className="p-3 font-bold text-right">Persentase</th>
                    </>)}
                    {entity === 'rencana' && (<>
                      <th className="p-3 font-bold rounded-l-xl">Kegiatan</th>
                      <th className="p-3 font-bold">Detail</th>
                      <th className="p-3 font-bold text-right">Anggaran</th>
                      <th className="p-3 font-bold">Sumber</th>
                    </>)}
                    {entity === 'realisasi' && (<>
                      <th className="p-3 font-bold rounded-l-xl">Bidang</th>
                      <th className="p-3 font-bold text-right">Anggaran</th>
                      <th className="p-3 font-bold text-right">Realisasi</th>
                      <th className="p-3 font-bold text-right">Persentase</th>
                    </>)}
                    <th className="p-3 font-bold text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {items.map(item => (
                    <tr key={item.id} className="hover:bg-slate-50 transition">
                      {entity === 'rincian' && (<>
                        <td className="p-3 font-medium text-slate-800">{item.nama}</td>
                        <td className="p-3 text-right font-mono font-bold text-emerald-800">{item.jumlah}</td>
                        <td className="p-3 text-right">{item.persentase}</td>
                      </>)}
                      {entity === 'rencana' && (<>
                        <td className="p-3 font-medium text-slate-800">{item.nama}</td>
                        <td className="p-3 text-slate-500">{item.detail}</td>
                        <td className="p-3 text-right font-mono font-bold text-emerald-800">{item.anggaran}</td>
                        <td className="p-3 text-slate-500">{item.sumber}</td>
                      </>)}
                      {entity === 'realisasi' && (<>
                        <td className="p-3 font-medium text-slate-800">{item.bidang}</td>
                        <td className="p-3 text-right font-mono font-bold text-slate-800">{item.anggaran}</td>
                        <td className="p-3 text-right font-mono font-bold text-emerald-800">{item.realisasi}</td>
                        <td className="p-3 text-right">{item.persentase}</td>
                      </>)}
                      <td className="p-3 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <button
                            onClick={() => openEditModal(entity, item)}
                            disabled={!canEdit}
                            className="p-1.5 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(entity, item.id)}
                            disabled={!canEdit}
                            className="p-1.5 text-slate-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      );
    };

    return (
      <div className="space-y-6">
        {/* Year selector */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-700" />
                APBDes Per Tahun Anggaran
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">Kelola pendapatan, belanja, rincian, dokumen, rencana & realisasi per tahun</p>
            </div>
            <button
              onClick={addTahunAnggaran}
              disabled={!canEdit}
              className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition disabled:opacity-50 flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Tahun</span>
            </button>
          </div>

          {/* Year tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {anggaran.tahunList.map(t => (
              <div key={t.id} className="flex items-center gap-0.5">
                <button
                  onClick={() => setSelectedYear(t.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                    selectedYear === t.id
                      ? 'bg-emerald-700 text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  TA {t.tahun}
                </button>
                <button
                  onClick={() => deleteTahunAnggaran(t.id)}
                  disabled={!canEdit}
                  className="p-1 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition"
                  title="Hapus tahun"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {tahun && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">No Perdes</label>
                <input
                  type="text"
                  value={tahun.perdes}
                  onChange={e => updateTahunField('perdes', e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1 flex items-center gap-1.5">
                  <Coins className="w-3.5 h-3.5 text-emerald-700" /> Total Pendapatan
                </label>
                <input
                  type="text"
                  value={tahun.totalPendapatan}
                  onChange={e => updateTahunField('totalPendapatan', e.target.value)}
                  placeholder="Rp 2.450.000.000"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1 flex items-center gap-1.5">
                  <Wallet className="w-3.5 h-3.5 text-emerald-700" /> Total Belanja
                </label>
                <input
                  type="text"
                  value={tahun.totalBelanja}
                  onChange={e => updateTahunField('totalBelanja', e.target.value)}
                  placeholder="Rp 2.450.000.000"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                />
              </div>
            </div>
          )}
        </div>

        {!tahun ? (
          <div className="text-center py-10 text-slate-500 text-sm">
            Belum ada data tahun anggaran. Klik "Tambah Tahun" untuk mulai mengelola APBDes.
          </div>
        ) : (
          <div className="space-y-6">
            <SubList title="Rincian Anggaran Desa" icon={<Banknote />} entity="rincian" emptyText="Belum ada rincian anggaran." />
            <SubList title="Dokumen Anggaran" icon={<FileCheck2 />} entity="dokumen" emptyText="Belum ada dokumen anggaran." />
            <SubList title="Rencana Belanja Desa" icon={<ClipboardList />} entity="rencana" emptyText="Belum ada rencana belanja." />
            <SubList title="Realisasi Belanja Desa" icon={<TrendingUp />} entity="realisasi" emptyText="Belum ada realisasi belanja." />
          </div>
        )}
      </div>
    );
  };

  /* ==================================================================== */
  /* LAYOUT UTAMA                                                          */
  /* ==================================================================== */

  const tabs = [
    { id: 'tentang' as TabId, label: 'Tentang Desa', icon: FileText },
    { id: 'sejarah' as TabId, label: 'Sejarah Desa', icon: Landmark },
    { id: 'pemerintahan' as TabId, label: 'Pemerintahan', icon: Users },
    { id: 'anggaran' as TabId, label: 'Anggaran Desa', icon: DollarSign },
  ];

  return (
    <AdminLayout
      activePage={`admin-profil-${activeTab}`}
      onLogout={onLogout}
      onNavigate={onNavigate}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
              Kelola Konten Profil Desa
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 font-['Playfair_Display',serif]">
              {tabs.find(t => t.id === activeTab)?.label}
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              {activeTab === 'tentang' && 'Kelola gambar sampul, teks, serta visi & misi desa'}
              {activeTab === 'sejarah' && 'Kelola perjalanan sejarah dan situs sejarah & cagar budaya'}
              {activeTab === 'pemerintahan' && 'Kelola foto dan jabatan setiap aparatur desa'}
              {activeTab === 'anggaran' && 'Kelola APBDes per tahun: pendapatan, belanja, rincian, dokumen, rencana & realisasi'}
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'tentang' && renderTentang()}
        {activeTab === 'sejarah' && renderSejarah()}
        {activeTab === 'pemerintahan' && renderPemerintahan()}
        {activeTab === 'anggaran' && renderAnggaran()}

        {openModal}

        {/* Toast */}
        {toast && (
          <div className="fixed bottom-6 right-6 z-[60] bg-emerald-700 text-white px-5 py-3 rounded-2xl shadow-xl border border-emerald-500/40 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
            <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
            <span className="text-xs font-medium">{toast}</span>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};