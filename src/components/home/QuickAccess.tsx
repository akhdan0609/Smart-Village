import React from 'react';
import { 
  FileText, 
  Search, 
  MessageSquare, 
  PhoneCall, 
  Fish, 
  ShoppingBag, 
  Landmark, 
  FileSpreadsheet,
  ArrowUpRight,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import { PageRoute } from '../../types';

interface QuickAccessProps {
  onNavigate: (page: PageRoute, params?: any) => void;
}

export const QuickAccess: React.FC<QuickAccessProps> = ({ onNavigate }) => {
  const services = [
    {
      title: 'Pengajuan Surat Online',
      desc: 'Buat SKU, SKTM, Pengantar SKCK, Domisili secara mandiri tanpa antre.',
      route: 'pelayanan-pengajuan' as PageRoute,
      icon: FileText,
      color: 'bg-emerald-600 text-white',
      badge: 'Layanan Utama',
      badgeColor: 'bg-emerald-100 text-emerald-800'
    },
    {
      title: 'Cek Status Pengajuan',
      desc: 'Pantau posisi proses surat Anda dengan memasukkan Nomor Registrasi.',
      route: 'pelayanan-cek-status' as PageRoute,
      icon: Search,
      color: 'bg-teal-600 text-white',
      badge: 'Real-time Tracker',
      badgeColor: 'bg-teal-100 text-teal-800'
    },
    {
      title: 'Aspirasi & Pengaduan',
      desc: 'Sampaikan keluhan jalan rusak, lampu padam, atau usulan Musrenbangdes.',
      route: 'aspirasi-pengaduan' as PageRoute,
      icon: MessageSquare,
      color: 'bg-blue-600 text-white',
      badge: 'Respon Cepat',
      badgeColor: 'bg-blue-100 text-blue-800'
    },
    {
      title: 'Kontak Darurat 24 Jam',
      desc: 'Ambulans desa, Damkar, BPBD, Bhabinkamtibmas, Babinsa, dan Bidan Desa.',
      route: 'kontak-darurat' as PageRoute,
      icon: PhoneCall,
      color: 'bg-rose-600 text-white',
      badge: 'Siaga 8 Instansi',
      badgeColor: 'bg-rose-100 text-rose-800'
    },
    {
      title: 'Potensi Perikanan Air Tawar',
      desc: 'Sentra kolam air deras budidaya ikan nila merah, mas, dan gurame Gunung Salak.',
      route: 'potensi-perikanan' as PageRoute,
      icon: Fish,
      color: 'bg-cyan-600 text-white',
      badge: 'Komoditas Unggulan',
      badgeColor: 'bg-cyan-100 text-cyan-800'
    },
    {
      title: 'Katalog UMKM & Produk Lokal',
      desc: 'Belanja Kopi Menteng, Madu Hutan Odeng, Keripik, dan Anyaman Bambu langsung ke perajin.',
      route: 'potensi-umkm' as PageRoute,
      icon: ShoppingBag,
      color: 'bg-amber-600 text-white',
      badge: 'Pemberdayaan Warga',
      badgeColor: 'bg-amber-100 text-amber-800'
    },
    {
      title: 'Akomodasi & Wisata Alam',
      desc: 'Jelajahi Curug Cibaliung, Bukit Menteng, Persawahan Terasering, dan Camping Ground.',
      route: 'potensi-akomodasi' as PageRoute,
      icon: Landmark,
      color: 'bg-indigo-600 text-white',
      badge: 'Pesona Alam',
      badgeColor: 'bg-indigo-100 text-indigo-800'
    },
    {
      title: 'Transparansi APBDes',
      desc: 'Laporan keterbukaan anggaran pendapatan, belanja, dan realisasi Dana Desa 2026.',
      route: 'profil-anggaran' as PageRoute,
      icon: FileSpreadsheet,
      color: 'bg-slate-700 text-white',
      badge: 'Akuntabel',
      badgeColor: 'bg-slate-100 text-slate-800'
    }
  ];

  return (
    <section className="py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-100/60 px-3 py-1 rounded-full border border-emerald-200">
            Layanan Terpadu Satu Pintu
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 font-['Playfair_Display',serif]">
            Akses Cepat Pelayanan Desa Warung Menteng
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Kemudahan pengurusan administrasi warga, pelaporan aduan, dan eksplorasi potensi ekonomi desa dalam satu genggaman.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => onNavigate(item.route)}
                className="group bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shadow-sm group-hover:scale-105 transition`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition flex items-center gap-1">
                    <span>{item.title}</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                  <span>Buka Layanan</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
