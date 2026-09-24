import React, { useState, useEffect } from 'react';
import { 
  Users, 
  ClipboardList, 
  Edit, 
  Trash2, 
  Save, 
  X,
  Loader2,
  GraduationCap,
  BookOpen,
  Church,
  BarChart2,
  Download,
  Upload,
  Filter,
  Search,
  Box
} from 'lucide-react';
import { AdminLayout } from './AdminLayout';
import { FormModal } from './components/FormModal';
import { DataTable, Column } from './components/DataTable';
import { ImageUpload } from './components/ImageUpload';
import { PageRoute } from '../../types';

const STORAGE_KEY = 'desa_wm_laporan_penduduk_v1';

type Kategori = 'umur' | 'pendidikan' | 'agama' | 'bangunan';

interface DemographicData {
  id: string;
  kategori: Kategori;
  rw: string;
  label: string;
  lakiLaki: number;
  perempuan: number;
  total: number;
  createdAt: string;
  updatedAt: string;
}

const RW_OPTIONS = ['RW 01', 'RW 02', 'RW 03', 'RW 04', 'RW 05', 'RW 06', 'RW 07', 'RW 08'];

const RW_KESELURUHAN = 'Keseluruhan';

type RwFilter = 'all' | typeof RW_KESELURUHAN | (typeof RW_OPTIONS)[number];

type StoredDemodata = Omit<DemographicData, 'rw'> & { rw?: string };

const defaultData: StoredDemodata[] = [
  // Umur
  { id: 'umur-1', kategori: 'umur', label: '0-4 Tahun', lakiLaki: 120, perempuan: 115, total: 235, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-2', kategori: 'umur', label: '5-9 Tahun', lakiLaki: 135, perempuan: 128, total: 263, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-3', kategori: 'umur', label: '10-14 Tahun', lakiLaki: 142, perempuan: 138, total: 280, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-4', kategori: 'umur', label: '15-19 Tahun', lakiLaki: 130, perempuan: 125, total: 255, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-5', kategori: 'umur', label: '20-24 Tahun', lakiLaki: 110, perempuan: 118, total: 228, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-6', kategori: 'umur', label: '25-29 Tahun', lakiLaki: 105, perempuan: 112, total: 217, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-7', kategori: 'umur', label: '30-34 Tahun', lakiLaki: 98, perempuan: 102, total: 200, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-8', kategori: 'umur', label: '35-39 Tahun', lakiLaki: 92, perempuan: 95, total: 187, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-9', kategori: 'umur', label: '40-44 Tahun', lakiLaki: 85, perempuan: 88, total: 173, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-10', kategori: 'umur', label: '45-49 Tahun', lakiLaki: 78, perempuan: 82, total: 160, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-11', kategori: 'umur', label: '50-54 Tahun', lakiLaki: 70, perempuan: 75, total: 145, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-12', kategori: 'umur', label: '55-59 Tahun', lakiLaki: 62, perempuan: 68, total: 130, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-13', kategori: 'umur', label: '60-64 Tahun', lakiLaki: 55, perempuan: 60, total: 115, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-14', kategori: 'umur', label: '65-69 Tahun', lakiLaki: 48, perempuan: 52, total: 100, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-15', kategori: 'umur', label: '70-74 Tahun', lakiLaki: 38, perempuan: 45, total: 83, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'umur-16', kategori: 'umur', label: '75+ Tahun', lakiLaki: 28, perempuan: 38, total: 66, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  // Pendidikan
  { id: 'pend-1', kategori: 'pendidikan', label: 'Tidak/Belum Sekolah', lakiLaki: 185, perempuan: 210, total: 395, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'pend-2', kategori: 'pendidikan', label: 'Belum Tamat SD', lakiLaki: 145, perempuan: 135, total: 280, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'pend-3', kategori: 'pendidikan', label: 'SD/Sederajat', lakiLaki: 285, perempuan: 265, total: 550, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'pend-4', kategori: 'pendidikan', label: 'SMP/Sederajat', lakiLaki: 180, perempuan: 175, total: 355, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'pend-5', kategori: 'pendidikan', label: 'SMA/Sederajat', lakiLaki: 165, perempuan: 170, total: 335, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'pend-6', kategori: 'pendidikan', label: 'Diploma I', lakiLaki: 16, perempuan: 16, total: 32, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'pend-7', kategori: 'pendidikan', label: 'Diploma II', lakiLaki: 19, perempuan: 19, total: 38, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'pend-8', kategori: 'pendidikan', label: 'Diploma III', lakiLaki: 12, perempuan: 13, total: 25, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'pend-9', kategori: 'pendidikan', label: 'Diploma IV', lakiLaki: 14, perempuan: 14, total: 28, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'pend-10', kategori: 'pendidikan', label: 'Sarjana', lakiLaki: 22, perempuan: 23, total: 45, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'pend-11', kategori: 'pendidikan', label: 'Magister', lakiLaki: 17, perempuan: 18, total: 35, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'pend-12', kategori: 'pendidikan', label: 'Dokter', lakiLaki: 12, perempuan: 13, total: 25, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  // Agama
  { id: 'agama-1', kategori: 'agama', label: 'Islam', lakiLaki: 1250, perempuan: 1280, total: 2530, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'agama-2', kategori: 'agama', label: 'Kristen Protestan', lakiLaki: 45, perempuan: 48, total: 93, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'agama-3', kategori: 'agama', label: 'Kristen Katolik', lakiLaki: 12, perempuan: 15, total: 27, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'agama-4', kategori: 'agama', label: 'Hindu', lakiLaki: 3, perempuan: 2, total: 5, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'agama-5', kategori: 'agama', label: 'Buddha', lakiLaki: 2, perempuan: 1, total: 3, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'agama-6', kategori: 'agama', label: 'Konghucu', lakiLaki: 1, perempuan: 1, total: 2, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: 'agama-7', kategori: 'agama', label: 'Lainnya', lakiLaki: 5, perempuan: 4, total: 9, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
];

const kategoriOptions = [
  { value: 'umur', label: 'Umur', icon: Users },
  { value: 'pendidikan', label: 'Pendidikan', icon: GraduationCap },
  { value: 'agama', label: 'Agama', icon: Church },
  { value: 'bangunan', label: 'Bangunan', icon: Box }
];

const umurLabels = [
  '0-4 Tahun', '5-9 Tahun', '10-14 Tahun', '15-19 Tahun', '20-24 Tahun',
  '25-29 Tahun', '30-34 Tahun', '35-39 Tahun', '40-44 Tahun', '45-49 Tahun',
  '50-54 Tahun', '55-59 Tahun', '60-64 Tahun', '65-69 Tahun', '70-74 Tahun', '75+ Tahun'
];

const pendidikanLabels = [
  'Tidak/Belum Sekolah', 'Belum Tamat SD', 'SD/Sederajat', 'SMP/Sederajat',
  'SMA/Sederajat', 'Diploma I', 'Diploma II', 'Diploma III', 'Diploma IV', 'Sarjana', 'Magister', 'Dokter'
];

const agamaLabels = [
  'Islam', 'Kristen Protestan', 'Kristen Katolik', 'Hindu', 'Buddha', 'Konghucu', 'Lainnya'
];

const bangunanLabels = [
  'Hunian Layak', 'Hunian Tidak Layak', 'Bangunan Ruko/Usaha'
];

const getLabelOptions = (kategori: string) => {
  switch (kategori) {
    case 'umur': return umurLabels.map(l => ({ value: l, label: l }));
    case 'pendidikan': return pendidikanLabels.map(l => ({ value: l, label: l }));
    case 'agama': return agamaLabels.map(l => ({ value: l, label: l }));
    case 'bangunan': return bangunanLabels.map(l => ({ value: l, label: l }));
    default: return [];
  }
};

const kategoriIcons = {
  umur: Users,
  pendidikan: GraduationCap,
  agama: Church,
  bangunan: Box
};

const kategoriLabels = {
  umur: 'Jumlah Penduduk Menurut Umur',
  pendidikan: 'Jumlah Penduduk Menurut Pendidikan',
  agama: 'Jumlah Penduduk Menurut Agama',
  bangunan: 'Jumlah Bangunan'
} as Record<Kategori, string>;

const FORM_SECTIONS: { kategori: Kategori; labels: string[]; single?: boolean }[] = [
  { kategori: 'umur', labels: umurLabels },
  { kategori: 'pendidikan', labels: pendidikanLabels },
  { kategori: 'agama', labels: agamaLabels },
  { kategori: 'bangunan', labels: bangunanLabels, single: true },
];

type FullFormState = Record<Kategori, Record<string, { lakiLaki: number; perempuan: number }>>;

const emptyFullForm = (): FullFormState => ({
  umur: Object.fromEntries(umurLabels.map(l => [l, { lakiLaki: 0, perempuan: 0 }])),
  pendidikan: Object.fromEntries(pendidikanLabels.map(l => [l, { lakiLaki: 0, perempuan: 0 }])),
  agama: Object.fromEntries(agamaLabels.map(l => [l, { lakiLaki: 0, perempuan: 0 }])),
  bangunan: Object.fromEntries(bangunanLabels.map(l => [l, { lakiLaki: 0, perempuan: 0 }])),
});

const CHART_COLORS = [
  '#0369a1', '#db2777', '#059669', '#f59e0b', '#7c3aed', '#0891b2',
  '#e11d48', '#65a30d', '#d97706', '#4f46e5', '#c026d3', '#0d9488',
  '#b45309', '#2563eb', '#be123c', '#14b8a6',
];

const polar = (cx: number, cy: number, r: number, angleDeg: number) => {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
};

const annularSector = (cx: number, cy: number, rOuter: number, rInner: number, startAngle: number, endAngle: number) => {
  const p1 = polar(cx, cy, rOuter, startAngle);
  const p2 = polar(cx, cy, rOuter, endAngle);
  const p3 = polar(cx, cy, rInner, endAngle);
  const p4 = polar(cx, cy, rInner, startAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${p1.x.toFixed(2)} ${p1.y.toFixed(2)} A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${p2.x.toFixed(2)} ${p2.y.toFixed(2)} L ${p3.x.toFixed(2)} ${p3.y.toFixed(2)} A ${rInner} ${rInner} 0 ${largeArc} 0 ${p4.x.toFixed(2)} ${p4.y.toFixed(2)} Z`;
};

const DemografiChart: React.FC<{ data: DemographicData[]; title: string }> = ({ data, title }) => {
  if (data.length === 0) return null;

  const grandTotal = data.reduce((sum, d) => sum + d.total, 0);
  const CX = 70;
  const CY = 70;
  const R_OUTER = 62;
  const R_INNER = 42;

  let angle = -90;
  const segments = data.map((d, i) => {
    const sweep = (d.total / grandTotal) * 360;
    const start = angle;
    const end = angle + sweep;
    angle = end;
    return {
      ...d,
      color: CHART_COLORS[i % CHART_COLORS.length],
      path: data.length === 1
        ? annularSector(CX, CY, R_OUTER, R_INNER, 0, 359.9)
        : annularSector(CX, CY, R_OUTER, R_INNER, start, end),
    };
  });

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5">
      <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2 mb-4">
        <BarChart2 className="w-4 h-4 text-emerald-700" />
        Grafik {title}
      </h3>

      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Donut */}
        <div className="relative shrink-0">
          <svg width="180" height="180" viewBox="0 0 140 140" aria-label={`Grafik ${title}`} role="img">
            {data.length === 1 ? (
              <circle cx={CX} cy={CY} r={(R_OUTER + R_INNER) / 2}
                fill="none" stroke={CHART_COLORS[0]} strokeWidth={R_OUTER - R_INNER} />
            ) : (
              segments.map(s => (
                <path key={s.id} d={s.path} fill={s.color}>
                  <title>{`${s.label}: ${s.total.toLocaleString()} (${((s.total / grandTotal) * 100).toFixed(1)}%)`}</title>
                </path>
              ))
            )}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-xl font-black text-slate-900 tabular-nums leading-none">
              {grandTotal.toLocaleString()}
            </span>
            <span className="text-[10px] font-semibold text-slate-500 mt-1 uppercase tracking-wide">Total</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 w-full grid grid-cols-2 lg:grid-cols-3 gap-2">
          {segments.map(s => (
            <div key={s.id} className="flex items-center gap-2 text-[11px]">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
              <span className="flex-1 min-w-0 truncate text-slate-600 font-medium">{s.label}</span>
              <span className="font-bold text-slate-900 tabular-nums shrink-0">{s.total.toLocaleString()}</span>
              <span className="text-slate-400 tabular-nums w-9 text-right shrink-0">
                {((s.total / grandTotal) * 100).toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const RwBadge: React.FC<{ rw: string }> = ({ rw }) => (
  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap ${rw === RW_KESELURUHAN || rw === 'Semua RW' ? 'bg-slate-100 text-slate-600' : 'bg-emerald-50 text-emerald-800'}`}>
    {rw}
  </span>
);

interface LaporanPendudukAdminProps {
  onNavigate: (page: PageRoute) => void;
  onLogout: () => void;
}

export const LaporanPendudukAdmin: React.FC<LaporanPendudukAdminProps> = ({ onNavigate, onLogout }) => {
  const canEdit = true;
  const canDelete = true;

  const [activeTab, setActiveTab] = useState<Kategori>('umur');
  const [selectedRw, setSelectedRw] = useState<RwFilter>('all');
  const [data, setData] = useState<DemographicData[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<DemographicData | null>(null);
  const [formData, setFormData] = useState<Partial<DemographicData>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [showFullModal, setShowFullModal] = useState(false);
  const [fullFormRw, setFullFormRw] = useState<string>(RW_OPTIONS[0]);
  const [fullForm, setFullForm] = useState<FullFormState>(emptyFullForm);

  useEffect(() => {
    const normalize = (rows: StoredDemodata[]): DemographicData[] =>
      (Array.isArray(rows) ? rows : []).map((item) => ({
        ...item,
        rw: item.rw && item.rw.trim() !== '' ? item.rw : RW_KESELURUHAN,
      }));

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const migrated = normalize(JSON.parse(stored));
        setData(migrated);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
      } else {
        const seeded = normalize(defaultData as StoredDemodata[]);
        setData(seeded);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
      }
    } catch {
      setData(normalize(defaultData as StoredDemodata[]));
    }
    setShowModal(false);
    setEditingItem(null);
  }, []);

  const filteredData = (() => {
    const base = data.filter(d => d.kategori === activeTab);
    const scope = selectedRw === 'all'
      ? base.filter(d => d.rw !== RW_KESELURUHAN)
      : base.filter(d => d.rw === selectedRw);

    const grouped = new Map<string, DemographicData>();
    for (const item of scope) {
      const prev = grouped.get(item.label);
      if (prev) {
        const lakiLaki = prev.lakiLaki + item.lakiLaki;
        const perempuan = prev.perempuan + item.perempuan;
        grouped.set(item.label, {
          ...prev,
          lakiLaki,
          perempuan,
          total: lakiLaki + perempuan,
          rw: item.rw,
          updatedAt: item.updatedAt,
        });
      } else {
        grouped.set(item.label, { ...item });
      }
    }
    return Array.from(grouped.values());
  })();

  const openFullModal = () => {
    if (!canEdit) return;
    const rw = RW_OPTIONS.includes(selectedRw as (typeof RW_OPTIONS)[number])
      ? (selectedRw as string)
      : selectedRw === RW_KESELURUHAN
        ? RW_KESELURUHAN
        : RW_OPTIONS[0];
    setFullFormRw(rw);
    const form = emptyFullForm();
    for (const section of FORM_SECTIONS) {
      for (const item of data.filter(d => d.rw === rw && d.kategori === section.kategori)) {
        if (form[section.kategori][item.label]) {
          form[section.kategori][item.label] = { lakiLaki: item.lakiLaki, perempuan: item.perempuan };
        }
      }
    }
    setFullForm(form);
    setShowFullModal(true);
  };

  const openEditModal = (item: DemographicData) => {
    if (!canEdit) return;
    setEditingItem(item);
    setFormData(
      item.kategori === 'bangunan'
        ? { ...item, lakiLaki: item.total, perempuan: 0 }
        : { ...item }
    );
    setShowModal(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canEdit) return;
    if (!formData.label || !formData.rw || formData.lakiLaki === undefined || formData.perempuan === undefined) return;
    
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 500));
    
    const total = (formData.lakiLaki || 0) + (formData.perempuan || 0);
    const newItem = { ...formData, total, kategori: activeTab, updatedAt: new Date().toISOString() };
    if (activeTab === 'bangunan') {
      newItem.lakiLaki = total;
      newItem.perempuan = 0;
    }

    if (editingItem) {
      newItem.id = editingItem.id;
      newItem.createdAt = editingItem.createdAt;
      newItem.updatedAt = new Date().toISOString();
      setData(prev => prev.map(item => item.id === editingItem.id ? newItem : item));
    } else {
      newItem.id = `${activeTab}-${Date.now()}`;
      newItem.createdAt = new Date().toISOString();
      newItem.updatedAt = new Date().toISOString();
      setData(prev => [newItem, ...prev]);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(
      editingItem 
        ? data.map(item => item.id === editingItem.id ? newItem : item)
        : [newItem, ...data]
    ));
    setShowModal(false);
    setEditingItem(null);
    setIsSaving(false);
  };

  const handleDelete = (item: DemographicData) => {
    if (!canDelete) return;
    if (confirm('Yakin ingin menghapus data ini?')) {
      setData(prev => prev.filter(i => i.id !== item.id));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data.filter((d: any) => d.id !== item.id)));
    }
  };

  const handleInputChange = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const updateFullField = (kategori: Kategori, label: string, field: 'lakiLaki' | 'perempuan', value: number) => {
    setFullForm(prev => ({
      ...prev,
      [kategori]: { ...prev[kategori], [label]: { ...prev[kategori][label], [field]: value } },
    }));
  };

  const handleSaveFull = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canEdit || !fullFormRw) return;

    const now = new Date().toISOString();
    const all: DemographicData[] = [];

    for (const section of FORM_SECTIONS) {
      const values = fullForm[section.kategori] || {};
      for (const label of section.labels) {
        const val = values[label] || { lakiLaki: 0, perempuan: 0 };
        const total = (val.lakiLaki || 0) + (val.perempuan || 0);
        if (total <= 0) continue;
        const existing = data.find(d => d.rw === fullFormRw && d.kategori === section.kategori && d.label === label);
        all.push({
          id: existing ? existing.id : `${fullFormRw.replace(/\s/g, '-')}-${section.kategori}-${label.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`,
          kategori: section.kategori,
          rw: fullFormRw,
          label,
          lakiLaki: val.lakiLaki || 0,
          perempuan: val.perempuan || 0,
          total,
          createdAt: existing ? existing.createdAt : now,
          updatedAt: now,
        });
      }
    }

    setIsSaving(true);
    await new Promise(r => setTimeout(r, 500));
    const next = [...data.filter(d => d.rw !== fullFormRw), ...all];
    setData(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setShowFullModal(false);
    setIsSaving(false);
  };

const columns: Column<DemographicData>[] = activeTab === 'bangunan' ? [
    { key: 'rw', header: 'RW', render: (item: any) => <RwBadge rw={selectedRw === 'all' ? 'Semua RW' : item.rw} />, className: 'p-2' },
    { key: 'label', header: 'Jenis Bangunan', render: (item: any) => <div className="font-medium text-slate-900">{item.label}</div>, className: 'p-2' },
    { key: 'total', header: 'Jumlah', render: (item: any) => <div className="text-center font-bold text-emerald-600">{item.total.toLocaleString()}</div>, className: 'text-center p-2' },
  ] : [
    { key: 'rw', header: 'RW', render: (item: any) => <RwBadge rw={selectedRw === 'all' ? 'Semua RW' : item.rw} />, className: 'p-2' },
    { key: 'label', header: 'Kategori', render: (item: any) => <div className="font-medium text-slate-900">{item.label}</div>, className: 'p-2' },
    { key: 'lakiLaki', header: 'Laki-laki', render: (item: any) => <div className="text-center font-semibold text-blue-600">{item.lakiLaki.toLocaleString()}</div>, className: 'text-center p-2' },
    { key: 'perempuan', header: 'Perempuan', render: (item: any) => <div className="text-center font-semibold text-pink-600">{item.perempuan.toLocaleString()}</div>, className: 'text-center p-2' },
    { key: 'total', header: 'Total', render: (item: any) => <div className="text-center font-bold text-slate-900">{item.total.toLocaleString()}</div>, className: 'text-center p-2' },
  ];

  const formFields = activeTab === 'bangunan'
    ? [
      { key: 'rw', label: 'RW', type: 'select', required: true, options: [...RW_OPTIONS.map(o => ({ value: o, label: o })), { value: RW_KESELURUHAN, label: RW_KESELURUHAN }] },
      { key: 'label', label: 'Jenis Bangunan', type: 'select', required: true, options: getLabelOptions(activeTab).map(o => ({ value: o.value, label: o.label })) },
      { key: 'lakiLaki', label: 'Jumlah', type: 'number', required: true, placeholder: '0' },
    ]
    : [
      { key: 'rw', label: 'RW', type: 'select', required: true, options: [...RW_OPTIONS.map(o => ({ value: o, label: o })), { value: RW_KESELURUHAN, label: RW_KESELURUHAN }] },
      { key: 'label', label: 'Kategori', type: 'select', required: true, options: getLabelOptions(activeTab).map(o => ({ value: o.value, label: o.label })) },
      { key: 'lakiLaki', label: 'Jumlah Laki-laki', type: 'number', required: true, placeholder: '0' },
      { key: 'perempuan', label: 'Jumlah Perempuan', type: 'number', required: true, placeholder: '0' },
    ];

  const Icon = kategoriIcons[activeTab];
  const totalLaki = filteredData.reduce((sum, d) => sum + d.lakiLaki, 0);
  const totalPerempuan = filteredData.reduce((sum, d) => sum + d.perempuan, 0);
  const grandTotal = totalLaki + totalPerempuan;

  return (
    <AdminLayout
      activePage="admin-laporan-penduduk"
      onLogout={onLogout}
      onNavigate={onNavigate}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
              Laporan Kependudukan
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 font-['Playfair_Display',serif]">
              Laporan Penduduk Desa Warung Menteng
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Data kependudukan per RW menurut umur, pendidikan, agama, dan jumlah bangunan (disaggregasi gender)
            </p>
          </div>
          <button
            onClick={openFullModal}
            disabled={!canEdit}
            className={`px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${!canEdit ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <ClipboardList className="w-4 h-4" />
            <span>Isi Laporan RW</span>
          </button>
        </div>

        {/* Pilih RW (klasifikasi pengisi data) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
          {(['all', RW_KESELURUHAN, ...RW_OPTIONS] as RwFilter[]).map((rw) => {
            const label = rw === 'all' ? 'Semua RW' : rw;
            return (
              <button
                key={rw}
                onClick={() => setSelectedRw(rw)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
                  selectedRw === rw
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Summary Cards */}
        {activeTab === 'bangunan' ? (
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <Box className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-800 uppercase">Total Bangunan</p>
                  <p className="text-2xl font-black text-emerald-900">{grandTotal.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-blue-800 uppercase">Total Laki-laki</p>
                <p className="text-2xl font-black text-blue-900">{totalLaki.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="bg-pink-50 border border-pink-200 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-pink-800 uppercase">Total Perempuan</p>
                <p className="text-2xl font-black text-pink-900">{totalPerempuan.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <BarChart2 className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-800 uppercase">Total Keseluruhan</p>
                <p className="text-2xl font-black text-emerald-900">{grandTotal.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
          {(Object.keys(kategoriLabels) as Kategori[]).map((tab) => {
            const Icon = kategoriIcons[tab];
            return (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setShowModal(false); }}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{kategoriLabels[tab]}</span>
              </button>
            );
          })}
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm">
<DataTable
              data={filteredData}
              columns={columns}
              keyField="id"
              onEdit={openEditModal}
              onDelete={handleDelete}
              canEdit={canEdit}
              canDelete={canDelete}
              searchable={false}
              searchFields={['label']}
              emptyMessage={`Belum ada data ${kategoriLabels[activeTab].toLowerCase()}`}
              footer={{
                label: `Total ${kategoriLabels[activeTab]}`,
                values: activeTab === 'bangunan'
                  ? { total: <div className="text-center font-bold text-emerald-600">{filteredData.reduce((sum, d) => sum + d.total, 0).toLocaleString()}</div> }
                  : {
                    lakiLaki: <div className="text-center font-bold text-blue-600">{filteredData.reduce((sum, d) => sum + d.lakiLaki, 0).toLocaleString()}</div>,
                    perempuan: <div className="text-center font-bold text-pink-600">{filteredData.reduce((sum, d) => sum + d.perempuan, 0).toLocaleString()}</div>,
                    total: <div className="text-center font-bold text-emerald-600">{filteredData.reduce((sum, d) => sum + d.total, 0).toLocaleString()}</div>,
                  },
              }}
            />
          </div>

        {/* Grafik per tabel */}
        <DemografiChart data={filteredData} title={kategoriLabels[activeTab]} />

        {/* Modal */}
        <FormModal
          isOpen={showModal}
          onClose={() => { setShowModal(false); setEditingItem(null); }}
          onSubmit={handleSave}
          title={`Edit ${kategoriLabels[activeTab]}`}
          isLoading={isSaving}
          size="lg"
        >
          <div className="space-y-5 max-h-[70vh] overflow-y-auto">
            {formFields.map((field) => (
              <div key={field.key} className={field.type === 'textarea' ? 'col-span-2' : ''}>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  {field.label} {field.required && <span className="text-rose-500">*</span>}
                </label>
                {field.type === 'select' ? (
                  <select
                    value={formData[field.key] || ''}
                    onChange={e => handleInputChange(field.key, e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  >
                    {field.options?.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                ) : field.type === 'number' ? (
                  <input
                    type="number"
                    min="0"
                    value={formData[field.key] || ''}
                    onChange={e => handleInputChange(field.key, parseInt(e.target.value) || 0)}
                    placeholder={field.placeholder}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                    required={field.required}
                  />
                ) : (
                  <input
                    type="text"
                    value={formData[field.key] || ''}
                    onChange={e => handleInputChange(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                    required={field.required}
                  />
                )}
              </div>
            ))}
          </div>
        </FormModal>

        {/* Modal Isi Laporan RW (form lengkap 4 kategori) */}
        <FormModal
          isOpen={showFullModal}
          onClose={() => setShowFullModal(false)}
          onSubmit={handleSaveFull}
          title="Isi Laporan Kependudukan RW"
          description="Lengkapi jumlah penduduk per RW untuk umur, pendidikan, agama, dan bangunan. Baris bernilai 0 otomatis dilewati."
          isLoading={isSaving}
          size="3xl"
        >
          <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">RW <span className="text-rose-500">*</span></label>
              <select
                value={fullFormRw}
                onChange={e => setFullFormRw(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
              >
                {RW_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                <option value={RW_KESELURUHAN}>{RW_KESELURUHAN}</option>
              </select>
            </div>

            {FORM_SECTIONS.map((section) => {
              const SectionIcon = kategoriIcons[section.kategori];
              const values = fullForm[section.kategori] || {};
              const subtotal = section.labels.reduce(
                (sum, l) => sum + (values[l]?.lakiLaki || 0) + (values[l]?.perempuan || 0),
                0
              );
              return (
                <div key={section.kategori} className="border border-slate-200 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <SectionIcon className="w-3.5 h-3.5 text-emerald-700" />
                      </span>
                      {kategoriLabels[section.kategori]}
                    </h4>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                      Subtotal: {subtotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {section.labels.map(label => {
                      const val = values[label] || { lakiLaki: 0, perempuan: 0 };
                      return (
                        <div key={label} className="flex items-center gap-2">
                          <span className="flex-1 min-w-0 truncate text-xs font-medium text-slate-700" title={label}>{label}</span>
                          {section.single ? (
                            <input
                              type="number"
                              min="0"
                              value={val.lakiLaki || ''}
                              onChange={e => updateFullField(section.kategori, label, 'lakiLaki', parseInt(e.target.value) || 0)}
                              placeholder="Jumlah"
                              className="w-24 p-2 bg-slate-50 border border-slate-200 rounded-xl text-center text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                            />
                          ) : (
                            <>
                              <input
                                type="number"
                                min="0"
                                value={val.lakiLaki || ''}
                                onChange={e => updateFullField(section.kategori, label, 'lakiLaki', parseInt(e.target.value) || 0)}
                                placeholder="Laki-laki"
                                className="w-24 p-2 bg-slate-50 border border-slate-200 rounded-xl text-center text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                              />
                              <input
                                type="number"
                                min="0"
                                value={val.perempuan || ''}
                                onChange={e => updateFullField(section.kategori, label, 'perempuan', parseInt(e.target.value) || 0)}
                                placeholder="Perempuan"
                                className="w-24 p-2 bg-slate-50 border border-slate-200 rounded-xl text-center text-xs focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                              />
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </FormModal>
      </div>
    </AdminLayout>
  );
};