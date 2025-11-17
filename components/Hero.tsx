import React from 'react';

interface HeroProps {
    onCTAClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCTAClick }) => {
    return (
        <section className="hero-section">
            <div
                className="hero-bg"
                style={{ backgroundImage: 'url(https://customer-assets.emergentagent.com/job_luxury-residence-1/artifacts/05qbiqdg_playa%20artificial.jpg)' }}
            ></div>
            <div className="hero-overlay"></div>
            
            <div className="hero-content">
                <div className="hero-logo-group">
                    <img 
                        src="https://customer-assets.emergentagent.com/job_luxury-residence-1/artifacts/nwtwpl95_Icono%20rosado.png" 
                        alt="AQUA CANA Icon" 
                        className="hero-logo-icon"
                    />
                    <div className="hero-brand">
                        <div className="hero-brand-text">
                            <span className="line1">AQUA CANA</span>
                            <span className="line2">Country and Residence</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="hero-main-title">
                        LA VILLA DE TUS SUEÑOS
                    </h1>
                    <div className="hero-subtitle-group">
                        <p className="hero-subtitle">
                            EN EL CORAZÓN DEL CARIBE
                        </p>
                        <span className="hero-tag">
                            · 0% DE INICIAL ·
                        </span>
                    </div>
                </div>
                
                <button 
                    onClick={onCTAClick}
                    className="btn btn-primary btn-lg hero-cta-button"
                >
                    DESCUBRE TU OPORTUNIDAD
                </button>
            </div>
        </section>
    );
};

export default Hero;
