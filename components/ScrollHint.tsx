import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollHint: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-bounce">
      <div className="flex flex-col items-center text-white text-opacity-80">
        <span className="text-sm uppercase tracking-widest">Desliza</span>
        <ChevronDown size={32} className="opacity-80" />
      </div>
    </div>
  );
};

export default ScrollHint;
