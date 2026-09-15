import React from 'react';
import { 
  Phone, 
  PhoneCall, 
  Clock, 
  ShieldCheck, 
  Users, 
  AlertTriangle, 
  Info, 
  Flame, 
  PlusSquare, 
  Shield, 
  Landmark, 
  UserCheck, 
  Home, 
  Zap,
  CheckCircle2
} from 'lucide-react';

// Hero Panorama & Emergency Images
import kknHeroPanorama from '../../assets/images/kkn_galeri_hero_panorama_1788606671947.jpg';
import daruratAmbulans from '../../assets/images/darurat_ambulans_1788607275359.jpg';
import daruratPolisi from '../../assets/images/darurat_polisi_1788607291417.jpg';
import daruratDamkar from '../../assets/images/darurat_damkar_1788607305696.jpg';
import daruratBpbd from '../../assets/images/darurat_bpbd_1788607319133.jpg';
import daruratSatpolPp from '../../assets/images/darurat_satpol_pp_1788607334637.jpg';
import daruratBabinsa from '../../assets/images/darurat_babinsa_1788607347386.jpg';
import daruratBidanDesa from '../../assets/images/darurat_bidan_desa_1788607359724.jpg';
import daruratPlkbListrik from '../../assets/images/darurat_plkb_listrik_1788607373650.jpg';

interface EmergencyContact {
  id: string;
  name: string;
  instansi: string;
  phone: string;
  phoneRaw: string;
  image: string;
  badgeIcon: React.ReactNode;
}

export const KontakDaruratView: React.FC = () => {
  const contacts: EmergencyContact[] = [
    {
      id: 'ambulans',
      name: 'Ambulans Siaga',
      instansi: 'Layanan Kesehatan Desa Warung Menteng',
      phone: '0811-2233-4455',
      phoneRaw: '081122334455',
      image: daruratAmbulans,
      badgeIcon: <PlusSquare className="w-4 h-4 text-emerald-800" />
    },
    {
      id: 'babinkamtibmas',
      name: 'Babinkamtibmas',
      instansi: 'Polsek Cijeruk',
      phone: '0812-3456-7890',
      phoneRaw: '081234567890',
      image: daruratPolisi,
      badgeIcon: <ShieldCheck className="w-4 h-4 text-emerald-800" />
    },
    {
      id: 'damkar',
      name: 'Pemadam Kebakaran',
      instansi: 'Pos Damkar Cijeruk',
      phone: '(0251) 8240113',
      phoneRaw: '02518240113',
      image: daruratDamkar,
      badgeIcon: <Flame className="w-4 h-4 text-red-600" />
    },
    {
      id: 'bpbd',
      name: 'BPBD',
      instansi: 'Kab. Bogor',
      phone: '(0251) 8542220',
      phoneRaw: '02518542220',
      image: daruratBpbd,
      badgeIcon: <Landmark className="w-4 h-4 text-emerald-800" />
    },
    {
      id: 'satpol-pp',
      name: 'Satpol PP',
      instansi: 'Kec. Cijeruk',
      phone: '0857-7788-9900',
      phoneRaw: '085777889900',
      image: daruratSatpolPp,
      badgeIcon: <Shield className="w-4 h-4 text-emerald-800" />
    },
    {
      id: 'babinsa',
      name: 'Babinsa',
      instansi: 'Koramil Cijeruk',
      phone: '0813-8899-0011',
      phoneRaw: '081388990011',
      image: daruratBabinsa,
      badgeIcon: <UserCheck className="w-4 h-4 text-emerald-800" />
    },
    {
      id: 'bidan-desa',
      name: 'Bidan Desa',
      instansi: 'Puskesmas Cijeruk',
      phone: '0813-1122-3344',
      phoneRaw: '081311223344',
      image: daruratBidanDesa,
      badgeIcon: <Home className="w-4 h-4 text-emerald-800" />
    },
    {
      id: 'plkb',
      name: 'PLKB',
      instansi: 'BKKBN Cijeruk',
      phone: '0858-9900-1133',
      phoneRaw: '085899001133',
      image: daruratPlkbListrik,
      badgeIcon: <Zap className="w-4 h-4 text-emerald-800" />
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">

        {/* 1. HERO BANNER: EXACT MATCH TO REFERENCE IMAGE */}
        <div className="relative rounded-3xl sm:rounded-[32px] overflow-hidden shadow-sm border border-slate-200/80 min-h-[260px] sm:min-h-[290px]">
          
          {/* Panoramic background image */}
          <img
            src={kknHeroPanorama}
            alt="Pemandangan Asri Desa Warung Menteng"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Deep green gradient overlay from left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#032e1c]/95 via-[#064228]/85 to-black/20" />

          {/* Content inside Hero */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 h-full">
            
            {/* Left Column: Pill badge, Title & Subtitle */}
            <div className="max-w-2xl space-y-3">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 border border-white/20 text-white backdrop-blur-xs shadow-xs">
                <Phone className="w-3.5 h-3.5 text-white" />
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider">
                  Kontak Darurat
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight drop-shadow-sm">
                Kontak Darurat<br />Desa Warung Menteng
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-xl">
                Layanan penting yang dapat dihubungi saat membutuhkan bantuan atau pertolongan segera.
              </p>
            </div>

            {/* Right Column: 4 White Stat/Feature Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto shrink-0">
              
              {/* Card 1: Siap Melayani 24 Jam */}
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 text-center shadow-md flex flex-col items-center justify-center border border-white/50 min-w-[100px] sm:min-w-[110px]">
                <div className="w-9 h-9 rounded-full bg-emerald-50 text-[#0a3828] flex items-center justify-center mb-1.5">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <span className="text-xs font-black text-slate-900 leading-tight">Siap Melayani</span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium">24 Jam</span>
              </div>

              {/* Card 2: 24 Jam Siaga */}
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 text-center shadow-md flex flex-col items-center justify-center border border-white/50 min-w-[100px] sm:min-w-[110px]">
                <div className="w-9 h-9 rounded-full bg-emerald-50 text-[#0a3828] flex items-center justify-center mb-1.5">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-xs font-black text-slate-900 leading-tight">24</span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Jam Siaga</span>
              </div>

              {/* Card 3: Tanggap dan Cepat */}
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 text-center shadow-md flex flex-col items-center justify-center border border-white/50 min-w-[100px] sm:min-w-[110px]">
                <div className="w-9 h-9 rounded-full bg-emerald-50 text-[#0a3828] flex items-center justify-center mb-1.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-black text-slate-900 leading-tight">Tanggap</span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium">dan Cepat</span>
              </div>

              {/* Card 4: Untuk Kepentingan Bersama */}
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 text-center shadow-md flex flex-col items-center justify-center border border-white/50 min-w-[100px] sm:min-w-[110px]">
                <div className="w-9 h-9 rounded-full bg-emerald-50 text-[#0a3828] flex items-center justify-center mb-1.5">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-xs font-black text-slate-900 leading-tight">Untuk</span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">Kepentingan Bersama</span>
              </div>

            </div>

          </div>

        </div>

        {/* 2. WARNING BANNER (AMBER / KUNING) */}
        <div className="bg-[#fffbeb] border border-[#fde68a] rounded-2xl p-4 sm:p-5 shadow-2xs">
          <div className="flex items-start gap-3 sm:gap-4">
            {/* Warning Triangle Icon */}
            <div className="shrink-0 mt-0.5">
              <div className="w-9 h-9 rounded-xl bg-amber-400/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-amber-500 fill-amber-500" />
              </div>
            </div>

            {/* Warning Text */}
            <div className="space-y-1 text-slate-800">
              <h3 className="text-sm sm:text-[15px] font-extrabold text-slate-900 tracking-tight leading-snug">
                Peringatan
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed text-justify">
                Fitur kontak darurat ini hanya diperuntukkan bagi masyarakat Desa Warung Menteng yang benar-benar membutuhkan bantuan atau pertolongan. Penyalahgunaan fitur ini untuk kepentingan pribadi, iseng, atau dengan niat menipu adalah tindakan yang <strong className="font-extrabold text-slate-900">tidak bertanggung jawab</strong> dan dapat merugikan pihak lain.
              </p>
            </div>
          </div>
        </div>

        {/* 3. NOTICE BANNER (RED / MERAH MUDA) */}
        <div className="bg-[#fee2e2]/60 border border-[#fecaca] rounded-2xl p-3.5 sm:p-4 shadow-2xs flex items-center gap-3 text-xs sm:text-[13px] text-rose-950">
          <div className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0 font-bold text-xs shadow-xs">
            i
          </div>
          <p className="leading-relaxed">
            <strong className="font-extrabold text-rose-950">Perhatian:</strong> Setiap tindakan penyalahgunaan layanan kontak darurat dapat dikenakan sanksi sesuai dengan peraturan yang berlaku, baik secara hukum maupun administratif.
          </p>
        </div>

        {/* 4. SECTION TITLE WITH EXTENDING HORIZONTAL ACCENT */}
        <div className="pt-2 space-y-1.5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#0a3828] flex items-center justify-center shrink-0">
              <PhoneCall className="w-4 h-4" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a3828] tracking-tight whitespace-nowrap">
              Layanan Kontak Darurat
            </h2>
            <div className="flex-1 h-[1.5px] bg-emerald-900/20" />
          </div>
          <p className="text-xs sm:text-sm text-slate-600 pl-11">
            Hubungi segera layanan berikut jika Anda membutuhkan bantuan atau pertolongan:
          </p>
        </div>

        {/* 5. 8 EMERGENCY CONTACT CARDS (2 ROWS OF 4 COLS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-1">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-lg hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Photo Container with Top-Left Floating Badge */}
              <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                <img
                  src={contact.image}
                  alt={contact.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Floating Circle Icon */}
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/95 shadow-md flex items-center justify-center backdrop-blur-xs border border-slate-100">
                  {contact.badgeIcon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <h3 className="text-base font-extrabold text-slate-900 tracking-tight leading-snug">
                    {contact.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {contact.instansi}
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-sm sm:text-base font-extrabold text-slate-900">
                    <Phone className="w-4 h-4 text-emerald-800 shrink-0" />
                    <span>{contact.phone}</span>
                  </div>
                </div>

                {/* Full-width Call Button */}
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#063b25] hover:bg-[#094d31] text-white text-xs sm:text-[13px] font-bold flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 fill-white" />
                  <span>Hubungi Sekarang</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 6. BOTTOM NOTICE BANNER */}
        <div className="pt-2">
          <div className="flex items-start sm:items-center gap-2.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
            <div className="w-4 h-4 rounded-full bg-emerald-800 text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
              i
            </div>
            <p className="leading-relaxed">
              <strong className="font-bold text-slate-800">Informasi Penting:</strong> Simpan dan catat nomor kontak darurat ini di tempat yang mudah diakses. Gunakan hanya untuk keadaan darurat yang membutuhkan penanganan segera.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
