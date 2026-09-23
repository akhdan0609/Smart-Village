import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  MessageCircle,
  ChevronRight
} from 'lucide-react';
import { PageRoute } from '../../types';
import logoDesaWarungMenteng from '../../assets/images/logo_warung_menteng.svg';
import kknLogo from '../../assets/images/logo.png';

interface FooterProps {
  onNavigate: (page: PageRoute, params?: any) => void;
  onOpenLoginModal?: () => void;
  activePage?: PageRoute;
}

const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLoginModal, activePage }) => {
  const handleNav = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = () => {
    if (onOpenLoginModal) {
      onOpenLoginModal();
    } else {
      handleNav('login-admin');
    }
  };

  const isKKNPage = activePage?.startsWith('kkn');

  return (
    <footer className="bg-[#053727] text-slate-200 border-t border-[#094734]">
      {/* KKN Wigata Dharma Banner (ditampilkan pada halaman KKN) */}
      {isKKNPage && (
        <div className="bg-[#064e3b] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="w-11 h-11 rounded-full bg-white border-2 border-emerald-300 overflow-hidden shadow-md shrink-0">
                <img
                  src={kknLogo}
                  alt="Logo KKN Wigata Dharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                  Kelompok KKN WIGATA DHARMA
                </h4>
                <p className="text-[11px] text-emerald-100/90 font-medium">
                  Mahasiswa Universitas Nahdlatul Ulama Indonesia (UNUSIA)
                </p>
                <span className="text-[10px] text-amber-300/90 font-semibold block">
                  Tahun 2026
                </span>
              </div>
            </div>

            <div className="text-center italic font-serif text-emerald-100 text-sm sm:text-base tracking-wide px-2">
              &ldquo;Bersama Mahasiswa, Membangun Desa&rdquo;
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/wigatadharma?stkn=Y3g1ZHJvZWxydG4y"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram KKN"
                className="w-8 h-8 rounded-full border border-white/60 hover:bg-white/15 text-white flex items-center justify-center transition"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.tiktok.com/@kknwigatadharma?_r=1&_t=ZS-99jBH5V8Izo"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok KKN"
                className="w-8 h-8 rounded-full border border-white/60 hover:bg-white/15 text-white flex items-center justify-center transition"
              >
                <TikTokIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:kknwd2026@gmail.com"
                aria-label="Email KKN"
                className="w-8 h-8 rounded-full border border-white/60 hover:bg-white/15 text-white flex items-center justify-center transition"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-8">
          
          {/* Col 1: Identity & Socials */}
          <div className="space-y-3.5 lg:pr-2">
            <div className="flex items-center gap-3">
              {/* Official Village Logo */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-sm border border-emerald-400/30 flex items-center justify-center p-0.5 overflow-hidden shrink-0">
                <img 
                  src={logoDesaWarungMenteng} 
                  alt="Logo Desa Warung Menteng" 
                  className="w-full h-full object-contain rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-extrabold text-white text-base tracking-tight block">
                  Desa Warung Menteng
                </span>
                <span className="text-[11px] text-white font-medium block">
                  Kec. Cijeruk, Kab. Bogor
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Desa asri di kaki Gunung Salak dengan kekayaan alam dan budaya yang terus tumbuh bersama masyarakat yang ramah.
            </p>

            {/* Social Icons (Circles) */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="mailto:desawarungmenteng@gmail.com"
                aria-label="Email Desa"
                className="w-8 h-8 rounded-full border border-slate-400/50 flex items-center justify-center text-slate-300 hover:text-white hover:border-white transition hover:bg-white/10 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/desa.warungmenteng?stkn=MW9kZzcxbGFpcm15dA=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Resmi Desa Warung Menteng"
                className="w-8 h-8 rounded-full border border-slate-400/50 flex items-center justify-center text-slate-300 hover:text-white hover:border-white transition hover:bg-white/10 cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/19F8WSLUBG/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Resmi Desa Warung Menteng"
                className="w-8 h-8 rounded-full border border-slate-400/50 flex items-center justify-center text-slate-300 hover:text-white hover:border-white transition hover:bg-white/10 cursor-pointer"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/+6281546412012"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Desa"
                className="w-8 h-8 rounded-full border border-slate-400/50 flex items-center justify-center text-slate-300 hover:text-white hover:border-white transition hover:bg-white/10 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Menu */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3 tracking-wide">
              Menu
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => handleNav('beranda')} className="hover:text-white transition cursor-pointer">
                  Beranda
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('profil-desa')} className="hover:text-white transition cursor-pointer">
                  Profil Desa
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('potensi-desa')} className="hover:text-white transition cursor-pointer">
                  Potensi Desa
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pelayanan-desa')} className="hover:text-white transition cursor-pointer">
                  Pelayanan
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('berita-press-release')} className="hover:text-white transition cursor-pointer">
                  Humas
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('kkn')} className="hover:text-white transition cursor-pointer">
                  KKN
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Informasi */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3 tracking-wide">
              Informasi
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => handleNav('profil-pemerintahan')} className="hover:text-white transition cursor-pointer">
                  Pemerintahan Desa
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pelayanan-download')} className="hover:text-white transition cursor-pointer">
                  Peraturan Desa
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pelayanan-informasi')} className="hover:text-white transition cursor-pointer">
                  Pelayanan Publik
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Lokasi Desa */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3 tracking-wide">
              Lokasi Desa
            </h4>
            <div className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                Desa Warung Menteng, Kec. Cijeruk<br />
                Kab. Bogor, Jawa Barat
              </span>
            </div>
          </div>

          {/* Col 5: Kontak Desa */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3 tracking-wide">
              Kontak Desa
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href="mailto:desawarungmenteng@gmail.com" className="hover:text-white transition">
                  desawarungmenteng@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a 
                  href="https://www.instagram.com/desa.warungmenteng?stkn=MW9kZzcxbGFpcm15dA==" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-white transition"
                >
                  @desa.warungmenteng
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a 
                  href="https://www.facebook.com/share/19F8WSLUBG/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-white transition"
                >
                  Desa Warung Menteng
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a 
                  href="https://wa.me/+6281546412012" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-white transition"
                >
                  +62 815-4641-2012
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-[#094734] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <p>© 2026 Desa Warung Menteng. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-100/90 opacity-80 text-xs font-medium">
              Dikembangkan Oleh KKN Wigata Dharma v1.0.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
