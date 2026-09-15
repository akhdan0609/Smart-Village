import React from 'react';
import { AKOMODASI_LIST } from '../../data/potensiVisualData';
import { PotensiDetailView } from './PotensiDetailView';
import { PageRoute } from '../../types';

interface AkomodasiDetailViewProps {
  itemId?: string;
  onNavigate: (page: PageRoute, params?: any) => void;
}

export const AkomodasiDetailView: React.FC<AkomodasiDetailViewProps> = ({ itemId, onNavigate }) => (
  <PotensiDetailView
    itemId={itemId}
    items={AKOMODASI_LIST}
    backRoute="potensi-akomodasi"
    backLabel="Kembali ke Akomodasi"
    categoryLabel="Akomodasi & Wisata"
    listTitle="Akomodasi & Wisata Lainnya di Desa Warung Menteng:"
    seeAllLabel="Lihat Semua (15) &rarr;"
    contactLabel="Kontak / Pokdarwis"
    onNavigate={onNavigate}
  />
);