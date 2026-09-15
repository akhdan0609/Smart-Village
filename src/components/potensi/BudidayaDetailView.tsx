import React from 'react';
import { BUDIDAYA_LIST } from '../../data/potensiVisualData';
import { PotensiDetailView } from './PotensiDetailView';
import { PageRoute } from '../../types';

interface BudidayaDetailViewProps {
  itemId?: string;
  onNavigate: (page: PageRoute, params?: any) => void;
}

export const BudidayaDetailView: React.FC<BudidayaDetailViewProps> = ({ itemId, onNavigate }) => (
  <PotensiDetailView
    itemId={itemId}
    items={BUDIDAYA_LIST}
    backRoute="potensi-budidaya"
    backLabel="Kembali ke Budidaya"
    categoryLabel="Budidaya"
    listTitle="Budidaya Lainnya di Desa Warung Menteng:"
    seeAllLabel="Lihat Semua (15) &rarr;"
    contactLabel="Kontak Info Poktan / POKDAKAN"
    onNavigate={onNavigate}
  />
);