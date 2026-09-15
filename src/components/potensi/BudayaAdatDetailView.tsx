import React from 'react';
import { BUDAYA_ADAT_LIST } from '../../data/potensiVisualData';
import { PotensiDetailView } from './PotensiDetailView';
import { PageRoute } from '../../types';

interface BudayaAdatDetailViewProps {
  itemId?: string;
  onNavigate: (page: PageRoute, params?: any) => void;
}

export const BudayaAdatDetailView: React.FC<BudayaAdatDetailViewProps> = ({ itemId, onNavigate }) => (
  <PotensiDetailView
    itemId={itemId}
    items={BUDAYA_ADAT_LIST}
    backRoute="potensi-budaya"
    backLabel="Kembali ke Budaya & Adat"
    categoryLabel="Budaya & Adat"
    listTitle="Budaya & Tradisi Lainnya di Desa Warung Menteng:"
    seeAllLabel="Lihat Semua (15) &rarr;"
    contactLabel="Narahubung / Pengelola Sanggar"
    onNavigate={onNavigate}
  />
);