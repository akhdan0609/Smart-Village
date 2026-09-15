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

interface FooterProps {
  onNavigate: (page: PageRoute, params?: any) => void;
  onOpenLoginModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLoginModal }) => {
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

  return (
    <footer className="bg-[#053727] text-slate-200 border-t border-[#094734]">
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
                href="https://wa.me/+6288291253033"
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
                  href="https://wa.me/+6288291253033" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-white transition"
                >
                  +62 882-9125-3033
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-[#094734] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <p>© 2026 Desa Warung Menteng. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNav('kontak-darurat')}
              className="text-amber-400/90 hover:text-white transition cursor-pointer"
            >
              Hotline Darurat
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={handleLogin}
              className="text-slate-400 hover:text-emerald-300 transition cursor-pointer"
            >
              Portal Login Staf
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
