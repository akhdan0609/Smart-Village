import React from 'react';
import {
  ArrowLeft,
  Network,
  Users
} from 'lucide-react';
import type { PageRoute } from '../../types';
import {
  strukturAcara,
  strukturHumas,
  strukturMedia,
  type AnggotaTim
} from './KKNStrukturalView';

type DivisiKey = 'ACARA' | 'HUMAS' | 'MEDIA';

interface KKNStrukturDivisiBaganProps {
  divisi: DivisiKey;
  onNavigate?: (page: PageRoute) => void;
}

const divisiMeta: Record<DivisiKey, { label: string; peran: string; data: AnggotaTim[]; desc: string }> = {
  ACARA: {
    label: 'Divisi Acara',
    peran: 'Koordinator Acara',
    data: strukturAcara,
    desc: 'Divisi Acara bertanggung jawab merancang, mengorganisir, dan melaksanakan setiap kegiatan program kerja KKN dengan terencana, terkoordinasi, dan berkesan.'
  },
  HUMAS: {
    label: 'Divisi Humas',
    peran: 'Koordinator Humas',
    data: strukturHumas,
    desc: 'Divisi Humas & Komunikasi berperan membangun dan menjaga hubungan baik dengan masyarakat, mitra, serta pihak eksternal.'
  },
  MEDIA: {
    label: 'Divisi Media',
    peran: 'Koordinator Media',
    data: strukturMedia,
    desc: 'Divisi Media & Dokumentasi bertanggung jawab mengelola informasi, dokumentasi kegiatan, serta publikasi program kerja KKN melalui berbagai media yang kreatif dan informatif.'
  }
};

export const KKNStrukturDivisiBagan: React.FC<KKNStrukturDivisiBaganProps> = ({ divisi, onNavigate }) => {
  const meta = divisiMeta[divisi];
  const koordinator = meta.data[0];
  const anggota = meta.data.slice(1);

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">

        {/* Header Banner */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <button
              onClick={() => onNavigate && onNavigate('kkn-struktural')}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-emerald-100 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Bagan Struktur</span>
            </button>

            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <Users className="w-4 h-4 text-amber-300" />
              <span>{meta.label}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Bagan Organisasi {meta.label}
            </h1>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {meta.desc}
            </p>
          </div>
        </div>

        {/* ============ BAGAN DIVISI ============ */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 flex items-center gap-2">
            <Network className="w-5 h-5 text-emerald-700" />
            <span>Bagan {meta.label} KKN Wigata Dharma</span>
          </h3>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto pb-4">
              <div className="min-w-[860px] max-w-4xl mx-auto flex flex-col items-center">

                {/* ===== LEVEL 1: KOORDINATOR ===== */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center">
                    <div className="bg-gradient-to-b from-emerald-800/10 to-white rounded-2xl border-2 border-emerald-700/40 p-3 sm:p-4 shadow-sm w-56 sm:w-64">
                      <div className="flex flex-col items-center gap-2">
                        <div className="relative">
                          <img
                            src={koordinator.fotoUrl}
                            alt={koordinator.nama}
                            className="w-16 h-16 rounded-full object-cover border-2 border-emerald-600 mx-auto shadow-sm"
                          />
                          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-emerald-700 text-white text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                            Koordinator
                          </span>
                        </div>
                        <div className="space-y-0.5 text-center">
                          <span className="block text-[10px] font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200/70 px-2 py-0.5 rounded-full">
                            {meta.peran}
                          </span>
                          <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug">{koordinator.nama}</h4>
                          {koordinator.prodi && <p className="text-[10px] text-slate-500 leading-tight">{koordinator.prodi}</p>}
                        </div>
                      </div>
                    </div>
                    <div className="w-0.5 h-5 bg-emerald-600/50" />
                  </div>
                </div>

                {/* bus to members */}
                <div className="w-full h-0.5 bg-emerald-600/50 rounded-full" />

                {/* ===== LEVEL 2: ANGGOTA ===== */}
                <div className="flex justify-center gap-6 sm:gap-8 flex-wrap">
                  {anggota.map((a, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-0.5 h-5 bg-emerald-600/50" />
                      <div className="bg-gradient-to-b from-emerald-800/5 to-white rounded-2xl border-2 border-emerald-700/30 p-3 sm:p-4 shadow-sm w-40 sm:w-44">
                        <div className="flex flex-col items-center gap-1.5">
                          <img
                            src={a.fotoUrl}
                            alt={a.nama}
                            className="w-12 h-12 rounded-full object-cover border-2 border-emerald-600 mx-auto"
                          />
                          <span className="block text-[9px] font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200/70 px-2 py-0.5 rounded-full">
                            {a.peran}
                          </span>
                          <h4 className="font-extrabold text-slate-900 text-[11px] sm:text-xs leading-snug text-center">{a.nama}</h4>
                          {a.prodi && <p className="text-[9px] text-slate-500 leading-tight text-center">{a.prodi}</p>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            <p className="text-center text-[11px] text-slate-400 pt-2 border-t border-slate-100">
              Struktur {meta.label} KKN Kelompok Wigata Dharma &mdash; Universitas Nahdlatul Ulama Indonesia (UNUSIA) 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};