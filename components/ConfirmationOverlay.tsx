import React from 'react';
import { X } from 'lucide-react';

interface ConfirmationOverlayProps {
  show: boolean;
  onClose: () => void;
}

const ConfirmationOverlay: React.FC<ConfirmationOverlayProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100] backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center max-w-md w-11/12 transform transition-all duration-300 scale-100 animate-in fade-in-0 zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Cerrar"
        >
          <X size={24} />
        </button>
        
        <div className="mx-auto mb-6 flex justify-center">
            <div className="bg-[#e0f2f1] p-3 inline-block rounded-lg border border-[#008A8A]/20">
              <div className="text-[#008A8A] font-extrabold tracking-widest">
                <span className="block text-xl">AQUA CANA</span>
                <span className="block text-xs font-medium">COUNTRY AND RESIDENCE</span>
              </div>
            </div>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-4">¡SOLICITUD RECIBIDA!</h2>
        <p className="text-gray-600 text-lg">
          En breve te estaremos llamando, permanece atento.
        </p>
      </div>
    </div>
  );
};

export default ConfirmationOverlay;
