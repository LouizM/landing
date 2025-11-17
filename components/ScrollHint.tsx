import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollHint: React.FC = () => {
  return (
    <div className="scroll-hint-bottom">
      <div className="scroll-hint-bottom-content">
        <span className="scroll-hint-bottom-text">Desliza</span>
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default ScrollHint;
