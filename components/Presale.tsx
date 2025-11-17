import React from 'react';
import { Check } from 'lucide-react';

interface PresaleProps {
    onCTAClick: () => void;
}

const Presale: React.FC<PresaleProps> = ({ onCTAClick }) => {
    return (
        <section className="solares-preventa-section">
            <div className="solares-marquee-wrapper">
                <div className="solares-marquee">
                    {[...Array(6)].map((_, i) => (
                        <span key={i} className="marquee-text">
                            • OPORTUNIDAD ÚNICA
                        </span>
                    ))}
                </div>
            </div>
            
            <div className="container">
                <div className="solares-header">
                    <div className="brand-subtle">AQUA CANA Country and Residence</div>
                    <h2>SOLARES EN PREVENTA</h2>
                    <p>Tu Vida en este Paraíso Caribeño Comienza Aquí</p>
                </div>
                
                <div className="solares-grid">
                    <div className="solares-image-col">
                        <div className="image-wrapper">
                            <img 
                                src="https://customer-assets.emergentagent.com/job_73f3a380-cb7b-4677-98c7-1ebcd841c964/artifacts/9aoaobhm_solares%20en%20preventa.jpeg"
                                alt="Solares en preventa - Vista aérea"
                            />
                            <div className="image-badge">
                                <span>⚡</span>
                                <span>ÚLTIMOS LOTES DISPONIBLES</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="solares-info-col">
                        <div className="solares-financiamiento">
                            <div className="solares-financiamiento-icon">
                                <Check size={36} strokeWidth={3}/>
                            </div>
                            <div className='solares-financiamiento-text'>
                                <h3>SISTEMA DE FINANCIAMIENTO</h3>
                                <p>Facilidades de pago directas con el desarrollador</p>
                            </div>
                        </div>
                        
                        <ul className="solares-features-list">
                            <li>
                                <Check size={24} className="icon" />
                                <div>
                                    <strong>Desde 250 m²</strong>
                                    <span>Lotes premium para tu proyecto soñado</span>
                                </div>
                            </li>
                            <li>
                                <Check size={24} className="icon" />
                                <div>
                                    <strong>Preventa Exclusiva</strong>
                                    <span>Precios especiales antes del lanzamiento oficial</span>
                                </div>
                            </li>
                            <li>
                                <Check size={24} className="icon" />
                                <div>
                                    <strong>Plusvalía Asegurada</strong>
                                    <span>Ubicación estratégica con proyección de crecimiento</span>
                                </div>
                            </li>
                        </ul>
                        
                        <div className="solares-cta-box">
                            <button
                                onClick={onCTAClick}
                                className="btn btn-accent btn-lg"
                            >
                                RESERVA TU LOTE AHORA
                            </button>
                            <p>⏱️ Plazos limitados · Consulta disponibilidad inmediata</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Presale;
