import React, { useState } from 'react';
import { amenitiesData } from '../constants/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Amenities: React.FC = () => {
    const [selectedAmenity, setSelectedAmenity] = useState(0);
    const currentAmenity = amenitiesData[selectedAmenity];

    const nextAmenity = () => {
        setSelectedAmenity((prev) => (prev + 1) % amenitiesData.length);
    };

    const prevAmenity = () => {
        setSelectedAmenity((prev) => (prev - 1 + amenitiesData.length) % amenitiesData.length);
    };

    return (
        <section className="section section-slate">
            <div className="container">
                <div className="text-center">
                    <div className="brand-subtle">AQUA CANA Country and Residence</div>
                    <h2 className="section-title">AMENIDADES EXCLUSIVAS</h2>
                    <p className="section-subtitle">ESTILO DE VIDA DE CLASE MUNDIAL</p>
                </div>

                <div className="slider-container">
                    <button onClick={prevAmenity} className="slider-nav-btn prev" aria-label="Amenidad anterior">
                        <ChevronLeft size={32} />
                    </button>
                    
                    <div className="amenities-card">
                        <img src={currentAmenity.imagePlaceholder} alt={currentAmenity.title} className="amenities-card-img" />
                        <div className="amenities-card-overlay"></div>
                        <div className="amenities-card-content">
                            <h3>{currentAmenity.title}</h3>
                            <p>{currentAmenity.description}</p>
                        </div>
                    </div>
                    
                    <button onClick={nextAmenity} className="slider-nav-btn next" aria-label="Siguiente amenidad">
                        <ChevronRight size={32} />
                    </button>
                </div>

                <div className="slider-dots">
                    {amenitiesData.map((_, index) => (
                        <button
                            key={index}
                            className={`slider-dot ${index === selectedAmenity ? 'active' : ''}`}
                            onClick={() => setSelectedAmenity(index)}
                            aria-label={`Ir a Amenidad ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;
