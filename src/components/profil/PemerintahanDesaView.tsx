import React, { useState } from 'react';
import { 
  Building2, 
  GraduationCap, 
  Briefcase, 
  X, 
  ChevronRight,
  Info,
  Maximize2,
  Landmark,
  Map,
  Users,
  type LucideIcon
} from 'lucide-react';
import { PageRoute } from '../../types';
import { getCoverImage, getCoverText } from '../../utils/storage';

// Authentic Staff Portraits
import kadesImg from '../../assets/images/kades_zaenal_1789452415267.jpg';
import sekdesImg from '../../assets/images/sekdes_agil_1789452430400.jpg';
import staff1Img from '../../assets/images/staff_khaki_1_1789452445248.jpg';
import staff2Img from '../../assets/images/staff_khaki_2_1789452458242.jpg';
import staff3Img from '../../assets/images/staff_khaki_3_1789452629239.jpg';
import staff4Img from '../../assets/images/staff_khaki_4_1789452646913.jpg';
import panoramaHeroImg from '../../assets/images/profil_hero_panorama_1789112047188.jpg';

interface OfficialProfile {
  id: string;
  nama: string;
  jabatan: string;
  level: 'kades' | 'sekdes' | 'kasi' | 'kadus';
  roleTag?: string;
  subTag?: string;
  fotoUrl: string;
  pendidikan: string;
  tupoksi: string;
}

const STRUKTUR_DATA: {
  kades: OfficialProfile;
  sekdes: OfficialProfile;
  staff: OfficialProfile[];
  kadus: OfficialProfile[];
} = {
  kades: {
    id: 'kades-1',
    nama: 'A. Zaenal Arifin S.ag',
    jabatan: 'Kepala Desa',
    level: 'kades',
    roleTag: 'Kepala Desa',
    fotoUrl: kadesImg,
    pendidikan: 'S1 Agama & Pemerintahan',
    tupoksi: 'Memimpin penyelenggaraan pemerintahan desa, membina ketenteraman dan ketertiban masyarakat, memelihara kerukunan hidup, serta mengoordinasikan pembangunan dan pemberdayaan masyarakat Desa Warung Menteng.'
  },
  sekdes: {
    id: 'sekdes-1',
    nama: 'Agil Asmi Farizi S.H',
    jabatan: 'Sekretaris Desa',
    level: 'sekdes',
    roleTag: 'Sekretaris Desa',
    fotoUrl: sekdesImg,
    pendidikan: 'S1 Ilmu Hukum',
    tupoksi: 'Membantu Kepala Desa dalam mengoordinasikan bidang administrasi pemerintahan, tata persuratan, kearsipan, penyusunan rancangan peraturan desa, pelaporan, dan pengelolaan keuangan desa.'
  },
  staff: [
    {
      id: 'staff-1',
      nama: 'Nasrudin',
      jabatan: 'Bendahara Desa',
      level: 'kasi',
      roleTag: 'Bendahara Desa',
      fotoUrl: staff1Img,
      pendidikan: 'D3 Administrasi Keuangan',
      tupoksi: 'Mengelola penatausahaan kas dan perbendaharaan desa, pembukuan realisasi APBDes, penerimaan pendapatan asli desa, serta pertanggungjawaban SPJ keuangan.'
    },
    {
      id: 'staff-2',
      nama: 'M. Fajar Sandika',
      jabatan: 'Kasi Pemerintahan',
      level: 'kasi',
      roleTag: 'Kasi Pemerintahan',
      fotoUrl: staff2Img,
      pendidikan: 'S1 Ilmu Pemerintahan',
      tupoksi: 'Melaksanakan manajemen tata praja pemerintahan, administrasi kependudukan (KK, KTP, Surat Pindah), tata kelola pertanahan, ketertiban umum, dan perlindungan masyarakat.'
    },
    {
      id: 'staff-3',
      nama: 'M. Risman',
      jabatan: 'Kasi Kesra',
      level: 'kasi',
      roleTag: 'Kasi Kesra',
      fotoUrl: staff3Img,
      pendidikan: 'S1 Kesejahteraan Sosial',
      tupoksi: 'Melaksanakan program pembangunan bidang pendidikan, keagamaan, kesehatan masyarakat, penanganan stunting, jaminan sosial (BPJS/PBI/BLT), serta pembinaan adat & kebudayaan lokal.'
    },
    {
      id: 'staff-4',
      nama: 'M. Alwi Farhan Jamil',
      jabatan: 'Kasi Pelayanan',
      level: 'kasi',
      roleTag: 'Kasi Pelayanan',
      fotoUrl: staff4Img,
      pendidikan: 'S1 Administrasi Publik',
      tupoksi: 'Melaksanakan penyuluhan hukum dan motivasi masyarakat, melayani surat pengantar administrasi warga, pembinaan karang taruna pemuda, seni budaya, serta olah raga desa.'
    },
    {
      id: 'staff-5',
      nama: 'M. Farhan Maulana',
      jabatan: 'Kasi Perencanaan',
      level: 'kasi',
      roleTag: 'Kasi Perencanaan',
      fotoUrl: staff1Img,
      pendidikan: 'S1 Perencanaan Wilayah',
      tupoksi: 'Menyusun rancangan RKPDes, RPJMDes, musrenbang desa, mengumpulkan dan menganalisis data profil desa, serta menyusun laporan evaluasi perkembangan pembangunan berkala.'
    },
    {
      id: 'staff-6',
      nama: 'M. Rizky Saefah',
      jabatan: 'Kasi TUTR',
      level: 'kasi',
      roleTag: 'Kasi TUTR',
      fotoUrl: staff2Img,
      pendidikan: 'S1 Teknik Sipil / Tata Ruang',
      tupoksi: 'Melaksanakan tata urusan tata ruang desa, monitoring infrastruktur jalan lingkungan, pemeliharaan saluran irigasi, sarana prasarana fisik, dan sanitasi permukiman desa.'
    }
  ],
  kadus: [
    {
      id: 'kadus-1',
      nama: 'Bagus Hadi',
      jabatan: 'Kepala Dusun 1',
      level: 'kadus',
      roleTag: 'Kadus',
      subTag: 'Kadus 1',
      fotoUrl: staff3Img,
      pendidikan: 'SMA / Sederajat',
      tupoksi: 'Membantu Kepala Desa dalam pelaksanaan tugas di wilayah kerja Dusun 1 (meliputi RW 01 & RW 02), pembinaan ketentraman, ketertiban umum, dan gotong royong warga.'
    },
    {
      id: 'kadus-2',
      nama: 'Rahmat Setiyono',
      jabatan: 'Kepala Dusun 2',
      level: 'kadus',
      roleTag: 'Kadus',
      subTag: 'Kadus 2',
      fotoUrl: staff4Img,
      pendidikan: 'SMA / Sederajat',
      tupoksi: 'Membantu Kepala Desa dalam pembinaan kemasyarakatan, penyerapan aspirasi pembangunan, ketertiban lingkungan, dan pelayanan warga di wilayah Dusun 2 (meliputi RW 03 & RW 04).'
    },
    {
      id: 'kadus-3',
      nama: 'Diki Mahardika',
      jabatan: 'Kepala Dusun 3',
      level: 'kadus',
      roleTag: 'Kadus',
      subTag: 'Kadus 3',
      fotoUrl: staff1Img,
      pendidikan: 'SMA / Sederajat',
      tupoksi: 'Membantu tugas operasional Kepala Desa di wilayah Dusun 3 (meliputi RW 05 & RW 06), koordinasi ronda malam, posyandu dusun, serta kesiapsiagaan tanggap bencana lingkungan.'
    }
  ]
};

// Corner leaf decoration SVG
const BotanicalLeafWatermark: React.FC<{ position: 'top-left' | 'bottom-right' | 'left-side' | 'right-side' }> = ({ position }) => {
  if (position === 'top-left') {
    return (
      <svg 
        className="absolute top-0 left-0 w-16 h-16 pointer-events-none opacity-20 text-emerald-800" 
        viewBox="0 0 100 100" 
        fill="currentColor"
      >
        <path d="M0,0 C30,10 60,35 60,65 C60,40 40,20 15,10 Z" />
        <path d="M5,15 C25,25 45,45 45,70 C40,50 25,30 5,15 Z" />
      </svg>
    );
  }
  if (position === 'bottom-right') {
    return (
      <svg 
        className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none opacity-20 text-emerald-800 rotate-180" 
        viewBox="0 0 100 100" 
        fill="currentColor"
      >
        <path d="M0,0 C30,10 60,35 60,65 C60,40 40,20 15,10 Z" />
        <path d="M5,15 C25,25 45,45 45,70 C40,50 25,30 5,15 Z" />
      </svg>
    );
  }
  if (position === 'left-side') {
    return (
      <svg 
        className="absolute left-3 top-1/2 -translate-y-1/2 w-16 sm:w-24 h-48 pointer-events-none opacity-25 text-emerald-700 hidden lg:block" 
        viewBox="0 0 100 200" 
        fill="currentColor"
      >
        <path d="M10,20 Q40,50 30,100 T10,180 Q50,140 45,100 T10,20 Z" />
        <circle cx="45" cy="60" r="10" />
        <circle cx="50" cy="110" r="12" />
        <circle cx="40" cy="150" r="8" />
      </svg>
    );
  }
  return (
    <svg 
      className="absolute right-3 top-1/2 -translate-y-1/2 w-16 sm:w-24 h-48 pointer-events-none opacity-25 text-emerald-700 scale-x-[-1] hidden lg:block" 
      viewBox="0 0 100 200" 
      fill="currentColor"
    >
      <path d="M10,20 Q40,50 30,100 T10,180 Q50,140 45,100 T10,20 Z" />
      <circle cx="45" cy="60" r="10" />
      <circle cx="50" cy="110" r="12" />
      <circle cx="40" cy="150" r="8" />
    </svg>
  );
};

interface PemerintahanDesaViewProps {
  onNavigate?: (page: PageRoute, params?: any) => void;
}

export const PemerintahanDesaView: React.FC<PemerintahanDesaViewProps> = () => {
  const pemerintahanCover = getCoverImage('profil-pemerintahan', panoramaHeroImg);
  const pemerintahanTitle = getCoverText('profil-pemerintahan', 'title', 'Pemerintahan Desa');
  const pemerintahanSubtitle = getCoverText('profil-pemerintahan', 'subtitle', 'Struktur organisasi, perangkat desa, dan tata kelola pemerintahan Desa Warung Menteng.');
  
  const [selectedOfficial, setSelectedOfficial] = useState<OfficialProfile | null>(null);

  // Kelompok perangkat desa sesuai SOTK (Permendagri 84/2015) — nama pejabat tidak diubah
  const strukturCabang: {
    label: string;
    icon: LucideIcon;
    members: OfficialProfile[];
  }[] = [
    {
      label: 'Pelaksana Teknis',
      icon: Landmark,
      members: ['staff-2', 'staff-3', 'staff-4']
        .map(id => STRUKTUR_DATA.staff.find(s => s.id === id)!)
    },
    {
      label: 'Pelaksana Kewilayahan',
      icon: Map,
      members: STRUKTUR_DATA.kadus
    }
  ];

  // Sekretariat: Sekdes kartu sendiri di kanan, 3 Kaur digantung di rail horizontal ke kiri
  const sekretariatMembers: OfficialProfile[] = [
    ...['staff-6', 'staff-1', 'staff-5']
      .map(id => STRUKTUR_DATA.staff.find(s => s.id === id)!),
    STRUKTUR_DATA.sekdes
  ];

  // Kartu anggota (dipakai kluster Sekretariat dan kelompok Teknis/Kewilayahan)
  const renderMemberCard = (person: OfficialProfile) => (
    <div
      key={person.id}
      onClick={() => setSelectedOfficial(person)}
      className="relative group cursor-pointer bg-white rounded-2xl border-2 border-[#16533c]/30 p-3 sm:p-4 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <BotanicalLeafWatermark position="top-left" />
      <BotanicalLeafWatermark position="bottom-right" />

      {/* Circular Avatar */}
      <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden border-2 border-[#16533c] shadow-xs mb-2.5 bg-emerald-50">
        <img
          src={person.fotoUrl}
          alt={person.nama}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Role / Sub-tag Badge */}
      <div className="bg-[#16533c] text-white text-[10px] sm:text-[11px] font-semibold px-3 py-0.5 rounded-full shadow-2xs mb-1.5 whitespace-nowrap max-w-full truncate">
        {person.subTag || person.roleTag}
      </div>

      {/* Nama Pejabat */}
      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight line-clamp-2">
        {person.nama}
      </h4>
    </div>
  );

  return (
    <div className="bg-[#f0f4f1] min-h-screen pb-16 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* ================= HERO & HEADER SECTION ================= */}
      <div className="relative overflow-hidden pt-8 pb-10 sm:pb-12 bg-cover bg-center" style={{ backgroundImage: `url(${pemerintahanCover})` }}>
        {/* Soft light overlay with green tints matching the reference image */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-[#f0f4f1]" />
        
        {/* Decorative green wavy accent at top left */}
        <div className="absolute top-0 left-0 w-72 sm:w-96 h-40 bg-gradient-to-br from-[#1b5e40]/70 via-[#16533c]/40 to-transparent rounded-br-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            {/* Title & Badge */}
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#16533c] text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <Building2 className="w-3.5 h-3.5 text-emerald-300" />
                <span>Profil Desa</span>
              </div>
              
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e3e2f] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
  {pemerintahanTitle}
</h1>
              
              <div className="flex items-center gap-3 pt-0.5">
                <p className="text-base sm:text-xl font-bold text-[#14533e]">
                  {pemerintahanSubtitle}
                </p>
              </div>
              <div className="w-48 h-1 bg-[#16533c] rounded-full" />
            </div>

            {/* Slogan Top Right (White Cursive Script with shadow matching user's image) */}
            <div className="text-left md:text-right">
              <span className="font-['Caveat',cursive] text-2xl sm:text-3xl lg:text-4xl text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] inline-block -rotate-2">
                Bersama Membangun Desa yang Lebih Baik
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN ORGANIZATIONAL CHART CONTAINER ================= */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 -mt-2">
        <div className="relative bg-[#f4f8f5] rounded-3xl sm:rounded-[36px] p-4 sm:p-8 lg:p-10 border-2 border-[#a3cbb5]/80 shadow-md overflow-hidden">
          
          {/* Botanical side watermarks */}
          <BotanicalLeafWatermark position="left-side" />
          <BotanicalLeafWatermark position="right-side" />

          {/* Interactive instruction banner */}
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#c2ded0] text-xs text-[#16533c]">
            <div className="flex items-center gap-2 font-medium">
              <Info className="w-4 h-4 text-[#16533c]" />
              <span>Bagan Struktur Organisasi Resmi Pemerintah Desa Warung Menteng. Klik nama pejabat untuk melihat tugas & fungsi lengkap.</span>
            </div>
            <span className="hidden sm:inline-block bg-[#16533c]/10 text-[#16533c] px-2.5 py-0.5 rounded-full font-semibold text-[11px]">
              Kecamatan Cijeruk, Kab. Bogor
            </span>
          </div>

          {/* Horizontal scroll wrapper for mobile comfort so diagram stays intact */}
          <div className="overflow-x-auto pb-6 -mx-2 px-2">
            <div className="relative min-w-[1080px] max-w-[1220px] mx-auto flex flex-col items-center">

              {/* ================= ROW 1: BPD (KIRI) + KEPALA DESA (PUSAT/ATAS) ================= */}
              <div className="w-full flex items-center">
                {/* BPD di sisi kiri, garis penghubung menempel ke Kepala Desa */}
                <div className="flex-1 flex items-center justify-end">
                  <div className="bg-white rounded-2xl border-2 border-[#16533c]/30 px-4 py-3 shadow-sm flex flex-col items-center text-center w-44 sm:w-52 overflow-hidden relative">
                    <BotanicalLeafWatermark position="top-left" />
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[#16533c] mb-1" />
                    <span className="text-sm sm:text-base font-extrabold text-[#0e3e2f] tracking-wide">BPD</span>
                    <span className="text-[10px] font-semibold text-[#14533e] leading-tight mt-0.5">
                      Badan Permusyawaratan Desa
                    </span>
                  </div>
                  <div className="w-8 sm:w-12 h-0.5 bg-[#16533c]" />
                </div>

                {/* Kepala Desa (pusat / paling atas) */}
                <div className="shrink-0">
                  <div 
                    onClick={() => setSelectedOfficial(STRUKTUR_DATA.kades)}
                    className="relative group cursor-pointer bg-white w-72 sm:w-96 rounded-2xl border-2 border-[#16533c]/30 p-3 sm:p-4 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-4 overflow-hidden"
                  >
                    <BotanicalLeafWatermark position="top-left" />
                    <BotanicalLeafWatermark position="bottom-right" />
                    
                    {/* Circular Avatar */}
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden border-[3px] border-[#16533c] shadow-xs shrink-0 bg-emerald-50">
                      <img 
                        src={STRUKTUR_DATA.kades.fotoUrl} 
                        alt={STRUKTUR_DATA.kades.nama}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="bg-[#16533c] text-white text-[11px] sm:text-xs font-semibold px-3.5 py-0.5 rounded-full inline-block shadow-2xs mb-1.5">
                        {STRUKTUR_DATA.kades.roleTag}
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                        {STRUKTUR_DATA.kades.nama}
                      </h3>
                    </div>

                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5 text-[#16533c]" />
                    </div>
                  </div>
                </div>

                {/* Spacer kanan agar Kepala Desa tetap di tengah */}
                <div className="flex-1" />
              </div>

              {/* Connector utama turun dari Kepala Desa */}
              <div className="w-0.5 h-8 sm:h-9 bg-[#16533c]" />

              {/* Rail horizontal utama (pemisah dua kelompok) */}
              <div className="w-full h-0.5 bg-[#16533c]" />

              {/* ================= BAGIAN TENGAH: DUA KELOMPOK UTAMA ================= */}
              {/* Garis utama Kepala Desa menerus turun di tengah hingga rail Kepala Dusun */}
              <div className="relative w-full">

                {/* Trunk kontinu: dari bawah rail utama menembus celah dua kelompok ke rail Kadus */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#16533c]" />

                <div className="w-full grid grid-cols-2 gap-x-12 sm:gap-x-16">

                  {/* KIRI: Pelaksana Teknis — 3 Kasi tersusun sejajar horizontal */}
                  <div className="flex justify-center gap-4 sm:gap-5">
                    {strukturCabang[0].members.map(person => (
                      <div key={person.id} className="flex flex-col items-center">
                        <div className="w-0.5 flex-1 min-h-5 bg-[#16533c]" />
                        {renderMemberCard(person)}
                      </div>
                    ))}
                  </div>

                  {/* KANAN: Sekretariat — Sekdes di atas, 3 Kaur di bawahnya */}
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-5 bg-[#16533c]" />
                    {renderMemberCard(STRUKTUR_DATA.sekdes)}

                    {/* Vertikal turun dari Sekdes */}
                    <div className="w-0.5 h-5 sm:h-6 bg-[#16533c]" />

                    {/* Rail Kaur */}
                    <div className="w-full max-w-[88%] h-0.5 bg-[#16533c]" />

                    {/* 3 Kaur tersusun sejajar dari kiri ke kanan */}
                    <div className="flex justify-center gap-4 sm:gap-5 w-full max-w-[88%]">
                      {sekretariatMembers.slice(0, 3).map(person => (
                        <div key={person.id} className="flex flex-col items-center">
                          <div className="w-0.5 flex-1 min-h-5 bg-[#16533c]" />
                          {renderMemberCard(person)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= BAGIAN BAWAH: KEPALA DUSUN (GARIS UTAMA) ================= */}
              {/* Rail horizontal panjang Kadus, tersambung ke garis utama Kepala Desa */}
              <div className="w-full h-0.5 bg-[#16533c]" />

              {/* 3 Kepala Dusun tersusun sejajar dari kiri ke kanan */}
              <div className="w-full flex justify-center gap-5 sm:gap-8">
                {strukturCabang[1].members.map(person => (
                  <div key={person.id} className="flex flex-col items-center">
                    <div className="w-0.5 flex-1 min-h-5 bg-[#16533c]" />
                    {renderMemberCard(person)}
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Bottom helper text */}
          <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
            <span>© Pemerintah Desa Warung Menteng — Struktur Organisasi dan Tata Kerja (SOTK)</span>
          </div>

        </div>
      </div>

      {/* ================= DETAIL PROFILE MODAL ================= */}
      {selectedOfficial && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 border-2 border-emerald-600/30 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            {/* Close button */}
            <button 
              onClick={() => setSelectedOfficial(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Profile Header */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#16533c] shadow-sm shrink-0 bg-emerald-50">
                <img 
                  src={selectedOfficial.fotoUrl} 
                  alt={selectedOfficial.nama}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-1">
                <span className="bg-[#16533c] text-white text-[11px] font-semibold px-3 py-0.5 rounded-full inline-block">
                  {selectedOfficial.jabatan}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  {selectedOfficial.nama}
                </h3>
                {selectedOfficial.subTag && (
                  <span className="text-xs font-semibold text-emerald-800 block">
                    Wilayah Kerja: {selectedOfficial.subTag}
                  </span>
                )}
              </div>
            </div>

            {/* Profile Details */}
            <div className="space-y-3 text-xs text-slate-700 pt-3 border-t border-slate-100">
              <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 text-emerald-700 shrink-0" />
                <div>
                  <span className="font-bold text-slate-800 block text-[11px]">Pendidikan Terakhir:</span>
                  <span>{selectedOfficial.pendidikan}</span>
                </div>
              </div>

              <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-100 space-y-1">
                <span className="font-bold text-[#14533e] flex items-center gap-1.5 text-xs">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Tugas Pokok & Fungsi (Tupoksi):</span>
                </span>
                <p className="leading-relaxed text-slate-700 text-xs">
                  {selectedOfficial.tupoksi}
                </p>
              </div>
            </div>

            {/* Close Action */}
            <button
              onClick={() => setSelectedOfficial(null)}
              className="w-full py-2.5 bg-[#16533c] hover:bg-[#124230] text-white font-bold rounded-xl text-xs transition cursor-pointer shadow-xs"
            >
              Tutup Rincian
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
