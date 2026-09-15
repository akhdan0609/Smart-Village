import React from 'react';
import { Quote, CheckCircle2, ArrowRight } from 'lucide-react';
import { PageRoute } from '../../types';
import { PROFIL_DESA_DATA, PERANGKAT_DESA_LIST } from '../../data/mockData';

interface SambutanKadesProps {
  onNavigate: (page: PageRoute) => void;
}

export const SambutanKades: React.FC<SambutanKadesProps> = ({ onNavigate }) => {
  const kades = PERANGKAT_DESA_LIST.find(p => p.jabatan === 'Kepala Desa') || PERANGKAT_DESA_LIST[0];

  return (
    <section className="py-12 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-slate-50 via-emerald-50/40 to-teal-50/30 rounded-3xl p-6 sm:p-10 border border-emerald-100/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Foto Kades */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-200">
                  <img
                    src={kades.fotoUrl}
                    alt={kades.nama}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-emerald-700 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow border-2 border-white">
                  Kepala Desa
                </div>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mt-5">{kades.nama}</h3>
              <p className="text-xs text-emerald-700 font-semibold">{kades.jabatan} Warung Menteng</p>
              <p className="text-xs text-slate-500 mt-0.5">Periode 2020 - Sekarang</p>
            </div>

            {/* Teks Sambutan */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                <Quote className="w-4 h-4 text-emerald-600" />
                <span>Sambutan Resmi Kepala Desa</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Playfair_Display',serif] leading-snug">
                "Membangun Desa Warung Menteng yang Transparan, Gotong Royong, & Mandiri Pangan"
              </h2>

              <p className="text-slate-700 text-sm leading-relaxed">
                <em>Sampurasun, Assalamu'alaikum Warahmatullahi Wabarakatuh.</em>
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Puji dan syukur kita panjatkan ke hadirat Allah SWT. Atas nama Pemerintah Desa Warung Menteng, kami menyambut hangat kehadiran seluruh masyarakat dan pengunjung di portal digital resmi desa kami.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Website ini kami hadirkan sebagai wujud komitmen keterbukaan informasi publik dan peningkatan mutu pelayanan administrasi desa. Warga kini dapat mengajukan permohonan surat keterangan dari rumah, memantau transparansi realisasi Dana Desa (APBDes), menyampaikan aspirasi, serta mempromosikan produk unggulan UMKM dan budidaya ikan air tawar khas Warung Menteng.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('profil-tentang')}
                  className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm"
                >
                  <span>Baca Visi & Misi Desa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('profil-pemerintahan')}
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-emerald-700 text-xs font-semibold px-3 py-2"
                >
                  <span>Struktur Perangkat Desa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
