import React, { useState } from 'react';
import { 
  BookOpen, 
  Users, 
  Home, 
  Mountain, 
  FileText, 
  Eye, 
  CheckCircle2, 
  UserCheck, 
  TrendingUp, 
  Lock, 
  ArrowLeftRight, 
  ChevronDown
} from 'lucide-react';
import { PageRoute } from '../../types';

import heroPanoramaImg from '../../assets/images/profil_hero_panorama_1789112047188.jpg';
import gapuraDesaImg from '../../assets/images/profil_gapura_desa_1789112062623.jpg';

interface ProfilDesaViewProps {
  onNavigate: (page: PageRoute) => void;
}

export const ProfilDesaView: React.FC<ProfilDesaViewProps> = ({ onNavigate }) => {
  const [selectedYear, setSelectedYear] = useState<string>('2024');

  // Budget data per year
  const budgetData: Record<string, { pendapatan: string; belanja: string; pembiayaan: string }> = {
    '2024': {
      pendapatan: 'Rp 2.450.000.000',
      belanja: 'Rp 2.450.000.000',
      pembiayaan: 'Rp 200.000.000'
    },
    '2023': {
      pendapatan: 'Rp 2.210.000.000',
      belanja: 'Rp 2.190.000.000',
      pembiayaan: 'Rp 180.000.000'
    },
    '2022': {
      pendapatan: 'Rp 1.980.000.000',
      belanja: 'Rp 1.950.000.000',
      pembiayaan: 'Rp 150.000.000'
    }
  };

  const activeBudget = budgetData[selectedYear] || budgetData['2024'];

  return (
    <div className="min-h-screen bg-[#fafbfa] text-slate-800 pb-16 font-sans">
      
      {/* 1. HERO BANNER: PROFIL DESA */}
      <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden shadow-xs">
        {/* Landscape Panorama Image */}
        <img 
          src={heroPanoramaImg} 
          alt="Panorama Desa Warung Menteng" 
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/45 to-transparent" />

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white space-y-1 sm:space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
              Profil Desa
            </h1>
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
              <button 
                onClick={() => onNavigate('beranda')} 
                className="hover:underline hover:text-white transition cursor-pointer"
              >
                Beranda
              </button>
              <span className="text-slate-400 font-bold">&gt;</span>
              <span className="text-white font-semibold">Profil Desa</span>
            </div>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-200 font-normal pt-0.5">
              Mengenal Desa Warung Menteng lebih dekat
            </p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
        
        {/* 2. TENTANG DESA WARUNG MENTENG */}
        <section className="space-y-4">
          <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#0d392a]">
            Tentang Desa Warung Menteng
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Image: Gapura / Entrance to village */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-sm h-60 sm:h-72 lg:h-80 w-full border border-slate-200/80 bg-slate-100">
                <img 
                  src={gapuraDesaImg} 
                  alt="Gapura Masuk Desa Warung Menteng" 
                  className="w-full h-full object-cover object-center hover:scale-102 transition duration-500"
                />
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-6 space-y-3.5 sm:space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
              <p>
                Desa Warung Menteng adalah desa yang terletak di Kecamatan Cijeruk, Kabupaten Bogor, Jawa Barat.
              </p>
              <p>
                Desa ini berada di kaki Gunung Salak dengan ketinggian 600–900 meter di atas permukaan laut yang memiliki udara sejuk dan pemandangan alam yang indah.
              </p>
              <p>
                Dengan potensi alam yang melimpah dan masyarakat yang ramah, desa ini terus berkembang menjadi desa yang mandiri dan sejahtera.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('profil-tentang')}
                  className="px-6 py-2.5 rounded-lg bg-[#0e3e2f] hover:bg-[#092b20] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition cursor-pointer"
                >
                  Selengkapnya
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* 3. KEY STATS BAR (Single horizontal bar with dividers) */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs py-4 px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            
            {/* 1. Luas Wilayah */}
            <div className="flex items-center gap-3.5 pr-2 pt-2 md:pt-0">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0e3e2f] flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-[#0e3e2f]" />
              </div>
              <div>
                <span className="text-[11px] text-slate-500 font-medium block">Luas Wilayah</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block">2,86 km²</span>
              </div>
            </div>

            {/* 2. Jumlah Penduduk */}
            <div className="flex items-center gap-3.5 px-0 md:px-4 pt-2 md:pt-0">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0e3e2f] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-[#0e3e2f]" />
              </div>
              <div>
                <span className="text-[11px] text-slate-500 font-medium block">Jumlah Penduduk</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block">8.997 Jiwa</span>
              </div>
            </div>

            {/* 3. Jumlah Rw/Rt */}
            <div className="flex items-center gap-3.5 px-0 md:px-4 pt-2 md:pt-0">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0e3e2f] flex items-center justify-center shrink-0">
                <Home className="w-5 h-5 text-[#0e3e2f]" />
              </div>
              <div>
                <span className="text-[11px] text-slate-500 font-medium block">Jumlah Rw/Rt</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block">8/25</span>
              </div>
            </div>

            {/* 4. Ketinggian */}
            <div className="flex items-center gap-3.5 pl-0 md:pl-4 pt-2 md:pt-0">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0e3e2f] flex items-center justify-center shrink-0">
                <Mountain className="w-5 h-5 text-[#0e3e2f]" />
              </div>
              <div>
                <span className="text-[11px] text-slate-500 font-medium block">Ketinggian</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block">250 – 500 mdpl</span>
              </div>
            </div>

          </div>
        </div>

        {/* 4. MIDDLE ROW: 2 CARDS (SEJARAH DESA & ANGGARAN DESA) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card Left: Sejarah Desa */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Sejarah Desa
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                Desa Warung Menteng telah berdiri sejak zaman dahulu dan memiliki sejarah panjang dalam perkembangan wilayah Kecamatan Cijeruk. Nama “Warung Menteng” berasal dari keberadaan warung kecil di bawah pohon menteng yang menjadi tempat persinggahan masyarakat pada masa lampau.
              </p>
            </div>

            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
              <button
                onClick={() => onNavigate('profil-sejarah')}
                className="px-5 py-2.5 rounded-lg bg-[#0e3e2f] hover:bg-[#092b20] text-white text-xs sm:text-sm font-semibold shadow-xs transition cursor-pointer"
              >
                Baca Selengkapnya
              </button>

              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-100 shrink-0">
                <FileText className="w-5 h-5 text-emerald-800" />
              </div>
            </div>
          </div>

          {/* Card Right: Anggaran Desa */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Anggaran Desa
                </h3>
                {/* Icon Box Rumah & Rp */}
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-100 shrink-0">
                  <div className="relative flex items-center justify-center">
                    <Home className="w-5 h-5 text-emerald-800" />
                    <span className="absolute -bottom-1 -right-1 text-[8px] font-black bg-emerald-700 text-white rounded-xs px-0.5 leading-tight">
                      Rp
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                Anggaran Pendapatan dan Belanja Desa (APBDes) Warung Menteng dikelola secara transparan dan akuntabel untuk mendukung pembangunan desa serta meningkatkan kesejahteraan masyarakat.
              </p>

              {/* Tahun Anggaran Selector */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-xs text-slate-600 font-medium">Tahun Anggaran</span>
                <div className="relative inline-block">
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs font-semibold py-1 pl-3 pr-7 rounded-lg cursor-pointer transition focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
                  >
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* 3 Metrics Strip Box (Mint Green Background) */}
              <div className="bg-[#f0f9f4] border border-emerald-100 rounded-xl p-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                
                {/* Pendapatan */}
                <div className="flex items-center sm:items-start gap-2.5 sm:gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4 text-emerald-800" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 font-medium block">Pendapatan Desa</span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 block">
                      {activeBudget.pendapatan}
                    </span>
                  </div>
                </div>

                {/* Belanja */}
                <div className="flex items-center sm:items-start gap-2.5 sm:gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Lock className="w-4 h-4 text-emerald-800" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 font-medium block">Belanja Desa</span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 block">
                      {activeBudget.belanja}
                    </span>
                  </div>
                </div>

                {/* Pembiayaan */}
                <div className="flex items-center sm:items-start gap-2.5 sm:gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <ArrowLeftRight className="w-4 h-4 text-emerald-800" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 font-medium block">Pembiayaan Desa</span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 block">
                      {activeBudget.pembiayaan}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100">
              <button
                onClick={() => onNavigate('profil-anggaran')}
                className="px-5 py-2.5 rounded-lg bg-[#0e3e2f] hover:bg-[#092b20] text-white text-xs sm:text-sm font-semibold shadow-xs transition cursor-pointer"
              >
                Baca Selengkapnya
              </button>
            </div>
          </div>

        </div>

        {/* 5. BOTTOM ROW: 3 CARDS (VISI DESA, MISI DESA, PEMERINTAHAN DESA) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Visi Desa (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-4">
                Visi Desa
              </h3>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                  <Eye className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Terwujudnya Desa Warung Menteng yang maju, mandiri, dan sejahtera dengan berlandaskan gotong royong dan kelestarian lingkungan.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Misi Desa (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-4">
                Misi Desa
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-700">
                {/* Column 1 */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white fill-emerald-600 shrink-0" />
                    <span>Meningkatkan kesejahteraan masyarakat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white fill-emerald-600 shrink-0" />
                    <span>Mengembangkan potensi desa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white fill-emerald-600 shrink-0" />
                    <span>Memberikan pelayanan terbaik</span>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white fill-emerald-600 shrink-0" />
                    <span>Mewujudkan lingkungan yang bersih dan sehat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white fill-emerald-600 shrink-0" />
                    <span>Menciptakan pemerintahan yang transparan dan akuntabel</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Card 3: Pemerintahan Desa (lg:col-span-3) */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-4">
                Pemerintahan Desa
              </h3>

              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#0e3e2f] text-white flex items-center justify-center shrink-0">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium block">Kepala Desa</span>
                  <span className="text-sm sm:text-base font-bold text-slate-900 block">
                    A. Zaenal Arifin S.ag
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('profil-pemerintahan')}
              className="mt-4 w-full py-2.5 rounded-xl bg-[#0e3e2f] hover:bg-[#092b20] text-white text-xs sm:text-sm font-semibold shadow-xs transition cursor-pointer"
            >
              Lihat Pemerintahan Desa
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
