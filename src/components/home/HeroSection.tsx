import React from 'react';
import { Compass } from 'lucide-react';
import { PageRoute } from '../../types';

interface HeroSectionProps {
  onNavigate: (page: PageRoute, params?: any) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="beranda-hero-section relative overflow-hidden w-full min-h-[440px] sm:min-h-[520px] flex items-center">
      {/* Background Image: Scenic Mountain Village Terraces */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      {/* Soft gradient overlay to ensure perfect contrast on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:w-3/4 lg:w-3/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
        <div className="max-w-xl space-y-4 sm:space-y-5">
          
          {/* Script / Cursive Greeting */}
          <div className="beranda-hero-greeting text-amber-700 font-serif italic text-2xl sm:text-3xl font-medium tracking-wide drop-shadow-xs will-change-transform">
            Selamat Datang di
          </div>

          {/* Main Title: Desa Warung Menteng */}
          <h1 className="beranda-hero-title text-4xl sm:text-6xl font-extrabold text-[#064e3b] tracking-tight leading-[1.05] drop-shadow-xs will-change-transform">
            Desa Warung <br />
            Menteng
          </h1>

          {/* Subtitle Description */}
          <p className="beranda-hero-desc text-slate-800 text-sm sm:text-base leading-relaxed font-medium max-w-md will-change-transform">
            Desa asri di kaki Gunung Salak dengan kekayaan alam dan budaya yang terus tumbuh bersama masyarakat yang ramah.
          </p>

          {/* Action Button: Jelajahi Desa Kami */}
          <div className="beranda-hero-btn pt-2 will-change-transform">
            <button
              onClick={() => onNavigate('profil-tentang')}
              className="inline-flex items-center gap-2.5 bg-[#064e3b] hover:bg-[#043323] text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-md transition transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-emerald-300" />
              <span>Jelajahi Desa Kami</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
