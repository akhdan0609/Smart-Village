import React from 'react';
import { AkomodasiView } from './AkomodasiView';

// Re-export AkomodasiView sesuai arahan penggantian nama Destinasi -> Akomodasi
export const DestinasiView: React.FC = () => {
  return <AkomodasiView />;
};

export { AkomodasiView };
export default AkomodasiView;
