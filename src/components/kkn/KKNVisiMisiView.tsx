import React from 'react';
import { 
  Target, 
  Eye, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  Zap, 
  Globe2, 
  Heart, 
  Layers,
  GraduationCap
} from 'lucide-react';

export const KKNVisiMisiView: React.FC = () => {
  const pilarProgram = [
    {
      nomor: '01',
      title: 'Digitalisasi Desa & Tata Kelola Informasi',
      desc: 'Pembangunan portal website resmi desa, sistem pelayanan mandiri online, dan peta digital sebaran potensi dusun berbasis teknologi modern.',
      icon: Globe2,
      target: 'Meningkatkan transparansi dan mempermudah akses pelayanan publik bagi 5.000+ warga.'
    },
    {
      nomor: '02',
      title: 'Hilirisasi & Digital Marketing UMKM',
      desc: 'Pelatihan pembuatan kemasan menarik, pendaftaran izin edar / sertifikasi halal, dan pembukaan toko daring bagi produk olahan kopi, salak, keripik, dan anyaman.',
      icon: Zap,
      target: 'Meningkatkan omzet pelaku usaha mikro dan menembus pasar luar daerah.'
    },
    {
      nomor: '03',
      title: 'Optimalisasi Budidaya Perikanan Air Deras',
      desc: 'Penyuluhan manajemen kualitas air, formulasi pakan alternatif bernutrisi, dan pendampingan Pokdakan Tirta Menteng dalam pemasaran benih nila.',
      icon: Layers,
      target: 'Menjadikan Warung Menteng sebagai sentra bibit ikan unggul di wilayah Bogor Selatan.'
    },
    {
      nomor: '04',
      title: 'Edukasi & Bimbingan Belajar Dusun',
      desc: 'Penyelenggaraan Rumah Belajar Ceria, literasi sains untuk anak-anak, bimbingan bahasa Inggris dasar, serta edukasi internet sehat.',
      icon: GraduationCap,
      target: 'Membangun motivasi belajar dan kesadaran pendidikan tinggi sejak dini.'
    },
    {
      nomor: '05',
      title: 'Kesehatan Lingkungan & Sanitasi Terpadu',
      desc: 'Pendampingan posyandu balita & lansia, edukasi pencegahan stunting, serta aksi bersih sungai dan pengelolaan sampah rumah tangga.',
      icon: Heart,
      target: 'Terwujudnya lingkungan desa yang asri, sehat, dan bebas stunting.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <Target className="w-4 h-4 text-amber-300" />
              <span>Program Kerja & Rencana Aksi Pengabdian</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Program Kerja KKN Kelompok Wigata Dharma
            </h1>
            
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Panduan program kerja terpadu dan rencana aksi nyata mahasiswa KKN UNUSIA Kelompok Wigata Dharma dalam mendorong kemajuan, pemberdayaan ekonomi, dan kesejahteraan warga Desa Warung Menteng.
            </p>
          </div>
        </div>

        {/* Visi & Misi Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Visi Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-bl-full -z-0" />
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 px-3.5 py-1.5 rounded-xl text-xs font-bold">
                <Eye className="w-4 h-4 text-emerald-700" />
                <span>VISI PENGABDIAN KKN</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                "Mewujudkan Desa Warung Menteng yang Mandiri, Melek Digital, Berdaya Saing Ekonomi Lokal, dan Berakar pada Keluhuran Budaya Sunda."
              </h2>
            </div>
            <p className="text-xs text-slate-500 pt-4 border-t border-slate-100 relative z-10">
              Fokus pada kesinambungan dampak program jangka panjang pasca KKN.
            </p>
          </div>

          {/* Misi Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-900 px-3.5 py-1.5 rounded-xl text-xs font-bold">
              <Target className="w-4 h-4 text-teal-700" />
              <span>MISI UTAMA KKN</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Memfasilitasi digitalisasi sistem informasi desa dan keterbukaan layanan administrasi warga secara terpadu.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Mengembangkan kapasitas pelaku UMKM lokal dan kelompok pembudidaya ikan melalui adopsi teknologi dan kemitraan.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Meningkatkan mutu pendidikan anak-anak dusun melalui bimbingan belajar aplikatif dan literasi digital.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Menumbuhkan kesadaran kesehatan keluarga, pencegahan stunting, serta kelestarian alam lereng Gunung Salak.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 5 Pilar Program Kerja Unggulan */}
        <div className="space-y-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-extrabold text-slate-900">
              5 Pilar Program Kerja Unggulan
            </h3>
            <p className="text-xs text-slate-500">
              Rencana aksi nyata yang diterapkan langsung di ketiga dusun Desa Warung Menteng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {pilarProgram.map(pilar => {
              const IconComp = pilar.icon;
              return (
                <div 
                  key={pilar.nomor}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-extrabold text-sm border border-emerald-200">
                        {pilar.nomor}
                      </div>
                      <IconComp className="w-5 h-5 text-emerald-700" />
                    </div>

                    <h4 className="font-bold text-slate-900 text-base">
                      {pilar.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pilar.desc}
                    </p>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-[11px] text-slate-600 space-y-1">
                    <span className="font-bold text-emerald-900 block">Target Capaian:</span>
                    <span>{pilar.target}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
