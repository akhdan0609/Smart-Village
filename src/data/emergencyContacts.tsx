import React from 'react';
import { 
  PlusSquare, 
  ShieldCheck, 
  Flame, 
  Landmark, 
  Shield, 
  UserCheck, 
  Home, 
  Zap 
} from 'lucide-react';

import daruratAmbulans from '../assets/images/darurat_ambulans_1788607275359.jpg';
import daruratPolisi from '../assets/images/darurat_polisi_1788607291417.jpg';
import daruratDamkar from '../assets/images/darurat_damkar_1788607305696.jpg';
import daruratBpbd from '../assets/images/darurat_bpbd_1788607319133.jpg';
import daruratSatpolPp from '../assets/images/darurat_satpol_pp_1788607334637.jpg';
import daruratBabinsa from '../assets/images/darurat_babinsa_1788607347386.jpg';
import daruratBidanDesa from '../assets/images/darurat_bidan_desa_1788607359724.jpg';
import daruratPlkbListrik from '../assets/images/darurat_plkb_listrik_1788607373650.jpg';

export type EmergencyBadgeType = 
  | 'PlusSquare' 
  | 'ShieldCheck' 
  | 'Flame' 
  | 'Landmark' 
  | 'Shield' 
  | 'UserCheck' 
  | 'Home' 
  | 'Zap';

export interface EmergencyContact {
  id: string;
  name: string;
  instansi: string;
  phone: string;
  phoneRaw: string;
  phoneLabel?: string;
  secondaryPhone?: string;
  secondaryPhoneRaw?: string;
  secondaryPhoneLabel?: string;
  whatsappUrl?: string;
  image: string;
  badgeType: EmergencyBadgeType;
}

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    id: 'ambulans',
    name: 'Ambulans Siaga',
    instansi: 'Layanan Kesehatan Desa Warung Menteng',
    phone: '0811-2233-4455',
    phoneRaw: '081122334455',
    image: daruratAmbulans,
    badgeType: 'PlusSquare'
  },
  {
    id: 'babinkamtibmas',
    name: 'Babinkamtibmas',
    instansi: 'Polsek Cijeruk',
    phone: '0812-3456-7890',
    phoneRaw: '081234567890',
    image: daruratPolisi,
    badgeType: 'ShieldCheck'
  },
  {
    id: 'damkar',
    name: 'Pemadam Kebakaran',
    instansi: 'Pos Damkar Cijeruk',
    phone: '(0251) 829-1505',
    phoneRaw: '02518291505',
    phoneLabel: 'Kantor',
    secondaryPhone: '(+62) 856-7785-200',
    secondaryPhoneRaw: '+628567785200',
    secondaryPhoneLabel: 'WhatsApp',
    whatsappUrl: 'https://wa.me/+628567785200',
    image: daruratDamkar,
    badgeType: 'Flame'
  },
  {
    id: 'bpbd',
    name: 'BPBD',
    instansi: 'Kab. Bogor',
    phone: '(0251) 8542220',
    phoneRaw: '02518542220',
    image: daruratBpbd,
    badgeType: 'Landmark'
  },
  {
    id: 'satpol-pp',
    name: 'Satpol PP',
    instansi: 'Kec. Cijeruk',
    phone: '0857-7788-9900',
    phoneRaw: '085777889900',
    image: daruratSatpolPp,
    badgeType: 'Shield'
  },
  {
    id: 'babinsa',
    name: 'Babinsa',
    instansi: 'Koramil Cijeruk',
    phone: '0813-8899-0011',
    phoneRaw: '081388990011',
    image: daruratBabinsa,
    badgeType: 'UserCheck'
  },
  {
    id: 'bidan-desa',
    name: 'Bidan Desa',
    instansi: 'Puskesmas Cijeruk',
    phone: '0813-1122-3344',
    phoneRaw: '081311223344',
    image: daruratBidanDesa,
    badgeType: 'Home'
  },
  {
    id: 'plkb',
    name: 'PLKB',
    instansi: 'BKKBN Cijeruk',
    phone: '0858-9900-1133',
    phoneRaw: '085899001133',
    image: daruratPlkbListrik,
    badgeType: 'Zap'
  }
];

export const renderEmergencyBadgeIcon = (badgeType: EmergencyBadgeType, className = 'w-4 h-4 text-emerald-800') => {
  switch (badgeType) {
    case 'PlusSquare':
      return <PlusSquare className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'Flame':
      return <Flame className={className.includes('text-') ? className : `${className} text-red-600`} />;
    case 'Landmark':
      return <Landmark className={className} />;
    case 'Shield':
      return <Shield className={className} />;
    case 'UserCheck':
      return <UserCheck className={className} />;
    case 'Home':
      return <Home className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    default:
      return <ShieldCheck className={className} />;
  }
};
