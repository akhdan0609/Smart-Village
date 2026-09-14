import React, { useState, useEffect, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { 
  Search, 
  X, 
  ArrowRight, 
  CornerDownLeft, 
  Compass, 
  FileText, 
  Users, 
  PhoneCall, 
  Sparkles,
  ShoppingBag,
  Palmtree,
  ShieldCheck,
  Megaphone
} from 'lucide-react';
import { SEARCH_DATABASE, SearchItem } from '../../data/searchData';
import { PageRoute } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageRoute, params?: any) => void;
}

const CATEGORY_CHIPS = [
  'Semua',
  'Pelayanan',
  'Profil',
  'Potensi',
  'KKN',
  'HUMAS',
  'Darurat',
  'UMKM',
  'Wisata'
] as const;

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedCategory('Semua');
      setSelectedIndex(0);
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen && typeof document !== 'undefined') {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Filter search results instantly
  const filteredResults = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    const words = trimmed ? trimmed.split(/\s+/) : [];

    let list = SEARCH_DATABASE;

    // Filter by category chip
    if (selectedCategory !== 'Semua') {
      list = list.filter(item => {
        if (selectedCategory === 'Pelayanan') return item.category === 'Pelayanan';
        if (selectedCategory === 'Profil') return item.category === 'Profil' || item.category === 'Perangkat' || item.category === 'Lembaga';
        if (selectedCategory === 'Potensi') return item.category === 'Potensi' || item.category === 'UMKM' || item.category === 'Wisata' || item.category === 'Budaya';
        if (selectedCategory === 'KKN') return item.category === 'KKN';
        if (selectedCategory === 'HUMAS') return item.category === 'HUMAS' || item.category === 'Berita';
        if (selectedCategory === 'Darurat') return item.category === 'Darurat';
        if (selectedCategory === 'UMKM') return item.category === 'UMKM';
        if (selectedCategory === 'Wisata') return item.category === 'Wisata';
        return true;
      });
    }

    if (words.length === 0) {
      // Show curated top recommendations when query is empty
      return list.slice(0, 10);
    }

    // Match all keywords against title, desc, category, and keywords array
    return list.filter(item => {
      const searchTarget = `${item.title} ${item.desc} ${item.category} ${item.keywords.join(' ')}`.toLowerCase();
      return words.every(word => searchTarget.includes(word));
    });
  }, [query, selectedCategory]);

  // Reset selectedIndex when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredResults]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < filteredResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : filteredResults.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredResults[selectedIndex]) {
        handleSelect(filteredResults[selectedIndex]);
      }
    }
  };

  const handleSelect = (item: SearchItem) => {
    onNavigate(item.page, item.params);
    onClose();
  };

  if (!isOpen || typeof document === 'undefined') return null;

  // Category Icon & Badge Styling
  const getCategoryBadgeStyle = (category: string) => {
    switch (category) {
      case 'Pelayanan':
        return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'Darurat':
        return 'bg-rose-50 text-rose-800 border-rose-200';
      case 'KKN':
        return 'bg-purple-50 text-purple-800 border-purple-200';
      case 'HUMAS':
      case 'Berita':
        return 'bg-indigo-50 text-indigo-800 border-indigo-200';
      case 'UMKM':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Wisata':
      case 'Budaya':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'Perangkat':
      case 'Lembaga':
        return 'bg-teal-50 text-teal-800 border-teal-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return createPortal(
    <div 
      className="fixed inset-0 z-[100] bg-slate-950/70 backdrop-blur-xs flex items-start justify-center p-3 sm:p-5 pt-8 sm:pt-16"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden max-h-[88vh]"
        onClick={e => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Header & Input */}
        <div className="p-4 sm:p-5 border-b border-slate-100 space-y-3 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-800 font-bold text-sm sm:text-base">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Search className="w-4 h-4" />
              </div>
              <span>Pencarian Cepat Desa Warung Menteng</span>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
              title="Tutup (Esc)"
              aria-label="Tutup pencarian"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="relative">
            <Search className="w-5 h-5 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Cari apa saja: surat, KKN, humas, curug, kopi, kades, darurat..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors"
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  inputRef.current?.focus();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Bersihkan pencarian"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            {CATEGORY_CHIPS.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full whitespace-nowrap font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0e3e2f] text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results List */}
        <div 
          ref={listRef}
          className="overflow-y-auto p-3 sm:p-4 space-y-1.5 flex-1 min-h-[220px]"
        >
          {filteredResults.length > 0 ? (
            filteredResults.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 rounded-2xl border transition-colors cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected 
                      ? 'bg-emerald-50/90 border-emerald-300 shadow-2xs' 
                      : 'bg-white hover:bg-slate-50 border-transparent hover:border-slate-200'
                  }`}
                >
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${getCategoryBadgeStyle(item.category)}`}>
                        {item.category}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug truncate">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-1">
                      {item.desc}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-1.5 text-slate-400">
                    <span className="hidden sm:inline text-[11px] text-emerald-800 font-medium">
                      Buka
                    </span>
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${isSelected ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-500'}`}>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 px-4 space-y-2">
              <p className="text-sm font-bold text-slate-700">
                Tidak ada hasil untuk "{query}"
              </p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Coba ketik kata kunci lain seperti <span className="font-semibold text-emerald-700">surat, KKN, humas, curug, kopi, kepala desa,</span> atau <span className="font-semibold text-emerald-700">ambulans</span>.
              </p>
            </div>
          )}
        </div>

        {/* Footer info & shortcut guide */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 shrink-0 px-4">
          <span className="truncate">
            Ditemukan <strong className="text-slate-800">{filteredResults.length}</strong> opsi tujuan langsung
          </span>
          <div className="hidden sm:flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono text-[10px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono text-[10px]">↓</kbd>
              <span>pilih</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono text-[10px]">Enter</kbd>
              <span>buka</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono text-[10px]">Esc</kbd>
              <span>tutup</span>
            </span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
