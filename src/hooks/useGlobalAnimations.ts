import { useEffect, useRef } from 'react';
import { animate, waapi } from 'animejs';

/**
 * Hook animasi global menyeluruh menggunakan Anime.js (animate & waapi.animate).
 * Mengatur transisi perpindahan halaman dan animasi scroll (naik/turun).
 *
 * Animasi HANYA dijalankan pada 5 halaman utama berikut:
 * Beranda, Profil Desa, Potensi Desa, Pelayanan, dan KKN.
 * Sub-halaman (isi dropdown) dan seluruh halaman HUMAS tidak dianimasikan.
 */
export function useGlobalAnimations(activePage: string) {
  const isInitialMount = useRef(true);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const mutationObserverRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    // Hanya jalankan animasi pada halaman utama yang diizinkan
    const animatedPages: string[] = ['beranda', 'profil-desa', 'potensi-desa', 'pelayanan-desa', 'kkn'];
    if (!animatedPages.includes(activePage)) return;

    // 1. Animasi transisi masuk halaman (Page Transition)
    const pageWrapper = document.getElementById('app-page-wrapper');
    if (pageWrapper) {
      animate(pageWrapper, {
        x: [-24, 0],
        scale: [0.985, 1],
        opacity: [0, 1],
        duration: 480,
        ease: 'outExpo',
      });

      waapi.animate(pageWrapper, {
        transform: ['translateX(-24px) scale(0.985)', 'translateX(0px) scale(1)'],
        duration: 480,
      });
    }

    // 2. Animasi judul/banner halaman utama
    const pageTitles = document.querySelectorAll<HTMLElement>(
      'main h1:not(.beranda-hero-title), main .page-header-title, main .hero-banner-title'
    );
    if (pageTitles.length > 0) {
      animate(pageTitles, {
        x: [-35, 0],
        scale: [0.96, 1],
        skew: [-2, 0],
        opacity: [0, 1],
        duration: 520,
        ease: 'outExpo',
      });

      waapi.animate(pageTitles, {
        transform: ['translateX(-35px) scale(0.96) skew(-2deg)', 'translateX(0px) scale(1) skew(0deg)'],
        duration: 520,
      });
    }

    // 3. Animasi menyeluruh untuk kartu, artikel, grid item, dan seksi konten
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const isMobile = window.innerWidth < 768;
    const baseOffset = isMobile ? 20 : 35;

    // Callback observer ketika elemen masuk / keluar viewport saat scroll naik & turun
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          const index = parseInt(el.dataset.animIndex || '0', 10);
          const dir = index % 2 === 0 ? -1 : 1;
          const offset = dir * baseOffset;

          if (entry.isIntersecting) {
            // Animasi masuk (scroll ke bawah atau kembali scroll ke atas)
            if (el.dataset.animStatus !== 'in') {
              el.dataset.animStatus = 'in';

              animate(el, {
                x: [offset, 0],
                scale: [0.96, 1],
                skew: [dir * 2, 0],
                rotate: [dir === 1 ? '0.8deg' : '-0.8deg', '0deg'],
                opacity: [0, 1],
                duration: 520,
                ease: 'outExpo',
              });

              waapi.animate(el, {
                transform: [
                  `translateX(${offset}px) scale(0.96) skew(${dir * 2}deg) rotate(${dir === 1 ? 0.8 : -0.8}deg)`,
                  'translateX(0px) scale(1) skew(0deg) rotate(0deg)'
                ],
                duration: 520,
              });
            }
          } else {
            // Ketika elemen keluar dari viewport, tandai agar dapat dianimasikan kembali saat scroll balik
            const rect = entry.boundingClientRect;
            // Jika keluar baik ke atas maupun ke bawah
            if (rect.top > window.innerHeight || rect.bottom < 0) {
              el.dataset.animStatus = 'out';
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin: '20px 0px -40px 0px',
      }
    );

    // Fungsi untuk mendaftarkan elemen-elemen di halaman
    const registerElements = () => {
      if (!observerRef.current) return;

      // Ambil elemen konten umum di semua halaman (kecuali elemen beranda yang sudah punya animasi khusus)
      const candidates = document.querySelectorAll<HTMLElement>(
        [
          'main article',
          'main .grid > div:not(.beranda-stat-item):not(.square)',
          'main .bg-white.rounded-xl',
          'main .bg-white.rounded-2xl',
          'main .bg-white.rounded-lg.shadow-sm',
          'main .card-desa',
          'main .anim-card',
          'main section:not(.beranda-hero) > .max-w-7xl > div',
        ].join(', ')
      );

      let cardIdx = 0;
      candidates.forEach((el) => {
        // Abaikan elemen kecil seperti tombol inline, navigasi, atau elemen tanpa ukuran
        if (el.offsetHeight < 45 || el.offsetWidth < 60) return;
        // Abaikan elemen khusus beranda
        if (el.closest('.beranda-hero') || el.classList.contains('square')) return;

        if (!el.dataset.animIndex) {
          el.dataset.animIndex = String(cardIdx++);
          el.dataset.animStatus = 'out';
          observerRef.current?.observe(el);
        }
      });
    };

    // Daftarkan saat halaman pertama kali termuat / berubah
    const timer = setTimeout(() => {
      registerElements();
    }, 60);

    // 4. MutationObserver untuk mendeteksi perubahan tab/filter dinamis (e.g. kategori berita, tab potensi, dll.)
    const mainEl = document.querySelector('main');
    if (mainEl && window.MutationObserver) {
      if (mutationObserverRef.current) {
        mutationObserverRef.current.disconnect();
      }

      mutationObserverRef.current = new MutationObserver(() => {
        registerElements();
      });

      mutationObserverRef.current.observe(mainEl, {
        childList: true,
        subtree: true,
      });
    }

    isInitialMount.current = false;

    return () => {
      clearTimeout(timer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (mutationObserverRef.current) {
        mutationObserverRef.current.disconnect();
      }
    };
  }, [activePage]);
}
