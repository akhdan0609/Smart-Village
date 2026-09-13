import React from 'react';
import { BudidayaView } from './BudidayaView';

// Re-export BudidayaView sebagai PotensiPerikananView untuk kesesuaian routing
export const PotensiPerikananView: React.FC = () => {
  return <BudidayaView />;
};

export { BudidayaView };
export default PotensiPerikananView;
