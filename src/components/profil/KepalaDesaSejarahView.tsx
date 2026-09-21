import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  Calendar, 
  ChevronRight,
  Crown,
  Landmark,
  ArrowRight
} from 'lucide-react';
import { PageRoute } from '../../types';
import { getCoverImage, getCoverText } from '../../utils/storage';

interface KepalaDesaItem {
  nama: string;
  periode: string;
  fotoUrl?: string;
}

const DUMMY_KEPALA_DESA: KepalaDesaItem[] = [
  { nama: 'Bpk. Siti Aminah', periode: '2018 - 2023', fotoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=siti' },
  { nama: 'Bpk. Dedi Kusnadi', periode: '2013 - 2018', fotoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=dedi' },
  { nama: 'Ibu Ratna Sari', periode: '2008 - 2013', fotoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ratna' },
  { nama: 'Bpk. Herman Suparman', periode: '2003 - 2008', fotoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=herman' },
  { nama: 'Ibu Siti Malihah', periode: '1998 - 2003', fotoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=siti2' },
  { nama: 'Bpk. Joko Widodo', periode: '1993 - 1998', fotoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=joko' },
  { nama: 'Ibu Endang Kusuma', periode: '1988 - 1993', fotoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=endang' },
];

export const KepalaDesaSejarahView: React.FC<KepalaDesaSejarahViewProps> = ({ onNavigate }) => {
  const kepalaDesa = DUMMY_KEPALA_DESA;
  
  const coverImage = getCoverImage('profil-kepala-desa-sejarah', 'https://api.dicebear.com/7.x/avataaars/svg?seed=kepala-desa');
  const coverTitle = getCoverText('profil-kepala-desa-sejarah', 'title', 'Kepala Desa Warung Menteng');
  const coverSubtitle = getCoverText('profil-kepala-desa-sejarah', 'subtitle', 'Se seluruh kepala desa dari masa lalu hingga kini');
  
  return (
    <div className="bg-[#f8faf8] min-h-screen text-slate-800 pb-16 font-sans relative overflow-x-hidden">
      {/* ======================================================== */}
      {/* HERO SECTION WITH DYNAMIC COVER IMAGE */}
      {/* ======================================================== */}
      <div className="relative bg-gradient-to-b from-[#e4f4f0] via-[#f0f6f2] to-[#f8faf8] border-b border-emerald-100/60 pt-6 pb-10 overflow-hidden">
        {/* Left Botanical Leaves Illustration */}
        <div className="absolute -top-6 -left-10 w-48 sm:w-64 h-64 pointer-events-none opacity-80 z-0">
          <svg viewBox="0 0 200 240" className="w-full h-full text-[#0a4732] fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M-10,120 C40,70 80,10 110,-20 C100,50 60,110 -10,120 Z" fill="#0b4e37" />
            <path d="M-20,180 C50,150 90,80 130,40 C100,110 50,180 -20,180 Z" fill="#13674b" opacity="0.85" />
            <path d="M-10,210 C40,190 80,150 110,120 C80,170 30,220 -10,210 Z" fill="#2d8563" opacity="0.7" />
            <path d="M10,80 Q40,130 90,170" stroke="#a7f3d0" strokeWidth="2" fill="none" opacity="0.4" />
          </svg>
        </div>

        {/* Right Botanical Leaves & Rooftop Mandala Illustration */}
        <div className="absolute top-0 right-0 w-80 sm:w-96 h-full pointer-events-none z-0 overflow-hidden">
          {/* Subtle Rosette Mandala */}
          <svg viewBox="0 0 200 200" className="absolute -top-10 -right-10 w-64 h-64 text-emerald-600/20 stroke-none fill-none">
            <circle cx="100" cy="100" r="85" strokeWidth="0.8" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="70" strokeWidth="0.8" />
            <circle cx="100" cy="100" r="50" strokeWidth="0.8" strokeDasharray="2 2" />
            <circle cx="100" cy="100" r="30" strokeWidth="0.8" />
            {Array.from({ length: 12 }).map((_, i) => (
              <path key={i} d={`M100 100 L${100 + 75 * Math.cos((i * 30 * Math.PI) / 180)} ${100 + 75 * Math.sin((i * 30 * Math.PI) / 180)}`} strokeWidth="0.6" />
            ))}
          </svg>

          {/* Mountains Silhouette */}
          <svg viewBox="0 0 300 120" className="absolute bottom-0 right-0 w-full h-24 text-emerald-800/10 fill-current">
            <path d="M0,120 L80,50 L160,80 L230,30 L300,90 L300,120 Z" />
          </svg>

          {/* Lush Green Foliage on Right Edge */}
          <svg viewBox="0 0 200 240" className="absolute -top-8 -right-8 w-56 h-64 text-[#064e3b] fill-current opacity-70">
            <path d="M210,120 C160,70 120,10 90,-20 C100,50 140,110 210,120 Z" />
            <path d="M220,180 C150,150 110,80 70,40 C100,110 150,180 220,180 Z" fill="#0f766e" opacity="0.6" />
          </svg>
        </div>

        {/* Hero Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          {/* Breadcrumb: Profil Desa > Kepala Desa */}
          <nav className="flex items-center gap-1.5 text-xs text-[#064e3b] font-medium">
            <button 
              onClick={() => onNavigate?.('profil-desa')}
              className="inline-flex items-center gap-1.5 hover:underline cursor-pointer text-[#064e3b]"
            >
              <Landmark className="w-3.5 h-3.5 text-[#064e3b]" />
              <span>Profil Desa</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-600/70" />
            <span className="font-semibold text-slate-900">Kepala Desa</span>
          </nav>

          {/* Hero Title & Subtitle */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-1">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#064e3b] tracking-tight">
                {coverTitle}
              </h1>
              <p className="italic text-xs sm:text-sm text-slate-600 font-normal pt-2">
                {coverSubtitle}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1 self-stretch bg-emerald-600 rounded-full shrink-0 min-h-[52px]" />
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Kepala desa yang telah memimpin Desa Warung Menteng dari masa lalu hingga kini, mewariskan visi dan misi pembangunan yang lebih baikal
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* MAIN CONTENT: 7 CARDS KEpALA DESA */}
      {/* ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {kepalaDesa.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 sm:p-7 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#064e3b] text-white flex items-center justify-center shrink-0 flex-shrink-0">
                  <Crown className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#064e3b] leading-snug">
                    {item.nama}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Periode: {item.periode}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-between text-xs text-slate-500">
                <span className="line-clamp-2">
                  Kepala desa terbaik untuk kebijaksanaan dan kemajuan Desa Warung Menteng
                </span>
                <ArrowRight className="w-3 h-3 opacity-60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export interface KepalaDesaSejarahViewProps {
  onNavigate?: (page: PageRoute, params?: any) => void;
}