import React from 'react';
import { BookOpen, Users, Mountain, Home } from 'lucide-react';

export const QuickStats: React.FC = () => {
  const stats = [
    {
      icon: BookOpen,
      title: 'Luas Wilayah',
      value: '2,86 km²'
    },
    {
      icon: Users,
      title: 'Jumlah Penduduk',
      value: '8.997 Jiwa'
    },
    {
      icon: Mountain,
      title: 'Ketinggian',
      value: '250 – 500 mdpl'
    },
    {
      icon: Home,
      title: 'Jumlah Rw/Rt',
      value: '8/25'
    }
  ];

  return (
    <div className="beranda-quick-stats max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-20 will-change-transform">
      <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-4 sm:p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 gap-y-3 sm:gap-y-0">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className={`beranda-stat-item will-change-transform flex items-center gap-3 px-3 py-2 ${idx > 0 ? 'sm:pl-4' : ''}`}
              >
                <div className="text-emerald-800 shrink-0">
                  <Icon className="w-5 h-5 text-emerald-800 stroke-[1.75]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-slate-800 truncate">
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-500 font-normal truncate">
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
