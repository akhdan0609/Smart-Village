import React, { useEffect, useRef, useCallback } from 'react';
import { animate, waapi } from 'animejs';
import { HeroSection } from './HeroSection';
import { QuickStats } from './QuickStats';
import { HomeBentoGrid } from './HomeBentoGrid';
import { PageRoute } from '../../types';

interface BerandaViewProps {
  onNavigate: (page: PageRoute, params?: any) => void;
}

export const BerandaView: React.FC<BerandaViewProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Set elemen yang sedang terlihat di viewport saat ini
  const visibleSectionsRef = useRef<Set<string>>(new Set());

  // Helper untuk mendeteksi layar mobile (< 768px)
  const getIsMobile = () => (typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  // 1. Animasi Hero Section menggunakan animate & waapi
  const animateHeroSection = useCallback(() => {
    const isMobile = getIsMobile();

    // Hero greeting
    animate('.beranda-hero-greeting', {
      x: [isMobile ? -30 : -60, 0],
      scale: [0.95, 1],
      opacity: [0, 1],
      duration: 500,
      ease: 'outExpo',
    });

    // Hero title dengan transformasi x, scale, skew
    animate('.beranda-hero-title', {
      x: [isMobile ? -40 : -80, 0],
      scale: [0.94, 1],
      skew: [-3, 0],
      opacity: [0, 1],
      duration: 600,
      ease: 'outExpo',
    });
    waapi.animate('.beranda-hero-title', {
      transform: [
        `translateX(${isMobile ? -40 : -80}px) scale(0.94) skew(-3deg)`,
        'translateX(0px) scale(1) skew(0deg)'
      ],
      duration: 600,
    });

    // Hero description & action button
    animate('.beranda-hero-desc', {
      x: [isMobile ? -20 : -40, 0],
      opacity: [0, 1],
      duration: 500,
      ease: 'outExpo',
    });
    animate('.beranda-hero-btn', {
      x: [isMobile ? -15 : -30, 0],
      scale: [0.95, 1],
      opacity: [0, 1],
      duration: 500,
      ease: 'outExpo',
    });
  }, []);

  // 2. Animasi Statistik Cepat menggunakan animate & waapi
  const animateStatsSection = useCallback(() => {
    const isMobile = getIsMobile();

    animate('.beranda-quick-stats', {
      x: [isMobile ? 25 : 50, 0],
      scale: [0.97, 1],
      opacity: [0, 1],
      duration: 500,
      ease: 'outExpo',
    });
    waapi.animate('.beranda-quick-stats', {
      transform: [
        `translateX(${isMobile ? 25 : 50}px) scale(0.97)`,
        'translateX(0px) scale(1)'
      ],
      duration: 500,
    });

    animate('.beranda-stat-item', {
      x: [isMobile ? -15 : -25, 0],
      scale: [0.94, 1],
      skew: [-2, 0],
      opacity: [0, 1],
      duration: 480,
      delay: (_el: any, i: number) => i * (isMobile ? 30 : 45),
      ease: 'outExpo',
    });
  }, []);

  // 3. Animasi tiap kartu Bento menggunakan transform (x, scale, skew, rotate)
  const animateCard = useCallback((selector: string, xOffset: number) => {
    const isMobile = getIsMobile();
    const actualX = isMobile ? (xOffset > 0 ? 30 : -30) : xOffset;

    animate(selector, {
      x: [actualX, 0],
      scale: [0.96, 1],
      skew: [actualX > 0 ? 3 : -3, 0],
      rotate: [actualX > 0 ? '1deg' : '-1deg', '0deg'],
      opacity: [0, 1],
      duration: 550,
      ease: 'outExpo',
    });

    waapi.animate(selector, {
      transform: [
        `translateX(${actualX}px) scale(0.96) skew(${actualX > 0 ? 3 : -3}deg) rotate(${actualX > 0 ? 1 : -1}deg)`,
        'translateX(0px) scale(1) skew(0deg) rotate(0deg)'
      ],
      duration: 550,
    });
  }, []);

  // 4. Animasi lengkap beranda
  const runFullTimeline = useCallback(() => {
    if (!containerRef.current) return;
    animateHeroSection();
    animateStatsSection();
    animateCard('.beranda-card-menu', -45);
    animateCard('.beranda-card-tentang', 45);
    animateCard('.beranda-card-peta', -45);
    animateCard('.beranda-card-berita', 45);
  }, [animateHeroSection, animateStatsSection, animateCard]);

  useEffect(() => {
    // Pada awal muat halaman, animasikan hero section jika terlihat
    animateHeroSection();

    if (typeof IntersectionObserver === 'undefined') {
      runFullTimeline();
      return;
    }

    // Observer dua arah:
    // - Saat elemen masuk viewport (scroll ke bawah atau scroll ke atas): jalankan animasi!
    // - Saat elemen keluar viewport: hapus dari status 'terlihat', sehingga saat di-scroll kembali akan beranimasi lagi!
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          let sectionKey = '';

          if (target.classList.contains('beranda-hero-section')) {
            sectionKey = 'hero';
          } else if (target.classList.contains('beranda-quick-stats')) {
            sectionKey = 'stats';
          } else if (target.classList.contains('beranda-card-menu')) {
            sectionKey = 'card-menu';
          } else if (target.classList.contains('beranda-card-tentang')) {
            sectionKey = 'card-tentang';
          } else if (target.classList.contains('beranda-card-peta')) {
            sectionKey = 'card-peta';
          } else if (target.classList.contains('beranda-card-berita')) {
            sectionKey = 'card-berita';
          }

          if (!sectionKey) return;

          if (entry.isIntersecting) {
            // Jika elemen baru saja masuk viewport dan belum ditandai terlihat:
            if (!visibleSectionsRef.current.has(sectionKey)) {
              visibleSectionsRef.current.add(sectionKey);

              if (sectionKey === 'hero') {
                animateHeroSection();
              } else if (sectionKey === 'stats') {
                animateStatsSection();
              } else if (sectionKey === 'card-menu') {
                animateCard('.beranda-card-menu', -45);
              } else if (sectionKey === 'card-tentang') {
                animateCard('.beranda-card-tentang', 45);
              } else if (sectionKey === 'card-peta') {
                animateCard('.beranda-card-peta', -45);
              } else if (sectionKey === 'card-berita') {
                animateCard('.beranda-card-berita', 45);
              }
            }
          } else {
            // Ketika elemen keluar dari viewport (pengguna scroll menjauh):
            // Hapus dari visibleSectionsRef agar saat pengguna scroll kembali, animasinya muncul lagi!
            visibleSectionsRef.current.delete(sectionKey);
          }
        });
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    // Amati elemen-elemen yang beranimasi
    const elementsToObserve = [
      document.querySelector('.beranda-hero-section'),
      document.querySelector('.beranda-quick-stats'),
      document.querySelector('.beranda-card-menu'),
      document.querySelector('.beranda-card-tentang'),
      document.querySelector('.beranda-card-peta'),
      document.querySelector('.beranda-card-berita'),
    ];

    elementsToObserve.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [animateHeroSection, animateStatsSection, animateCard, runFullTimeline]);

  return (
    <div ref={containerRef} className="bg-[#f8fafc] min-h-screen pb-12 relative overflow-x-hidden">
      {/* 1. Hero Banner dengan "Selamat Datang di Desa Warung Menteng" */}
      <HeroSection onNavigate={onNavigate} />

      {/* 2. Floating Stats Bar (5 statistik) */}
      <QuickStats />

      {/* 3. Bento Grid (4 Cards: Menu, Tentang Desa, Peta Desa, Berita Terbaru) */}
      <HomeBentoGrid onNavigate={onNavigate} />
    </div>
  );
};
