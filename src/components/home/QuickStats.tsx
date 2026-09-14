import React from 'react';
import { BookOpen, Users, Mountain, Home } from 'lucide-react';

export const QuickStats: React.FC = () => {
  const stats: { icon: typeof BookOpen; title: string; value: React.ReactNode }[] = [
    {
      icon: BookOpen,
      title: 'Luas Wilayah',
      value: <>2,86 km<sup>2</sup></>
    },
    {
      icon: Users,
      title: 'Jumlah Penduduk',
      value: '8.997 Jiwa'
    },
    {
      icon: Mountain,
      title: 'Ketinggian',
      value: '250 - 500 mdpl'
    },
    {
      icon: Home,
      title: 'Jumlah Rw/Rt',
      value: '8/25'
    }
  ];

  return (
    <div className="beranda-quick-stats max-w-7xl mx-auto px-3.5 sm:px-6 -mt-7 sm:-mt-8 relative z-20 will-change-transform">
      <div className="bg-white rounded-2xl shadow-md border border-slate-100/90 p-3 sm:p-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-0 sm:divide-x divide-slate-100">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className={`beranda-stat-item will-change-transform flex items-center gap-2.5 sm:gap-3 p-2.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-none bg-slate-50/70 sm:bg-transparent border border-slate-100/80 sm:border-0`}
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-800 stroke-[1.75]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] sm:text-xs font-bold text-slate-800 truncate">
                    {item.title}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium truncate">
                    {item.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
