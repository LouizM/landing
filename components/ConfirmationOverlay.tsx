import React from 'react';
import { X } from 'lucide-react';

interface ConfirmationOverlayProps {
  show: boolean;
  onClose: () => void;
}

const ConfirmationOverlay: React.FC<ConfirmationOverlayProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="overlay-backdrop" onClick={onClose}>
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="overlay-close-btn"
          aria-label="Cerrar"
        >
          <X size={24} />
        </button>
        
        <div className="overlay-brand-logo">
            <div className="overlay-brand-logo-text">
              <span className="line1">AQUA CANA</span>
              <span className="line2">COUNTRY AND RESIDENCE</span>
            </div>
        </div>
        
        <h2 className="overlay-title">¡SOLICITUD RECIBIDA!</h2>
        <p className="overlay-message">
          En breve te estaremos llamando, permanece atento.
        </p>
      </div>
    </div>
  );
};

export default ConfirmationOverlay;
