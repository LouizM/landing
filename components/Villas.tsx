import React, { useState } from 'react';
import { villasData } from '../constants/data';
import { Bed, Bath, Maximize, Home, Check, ChevronLeft, ChevronRight } from 'lucide-react';

interface VillasProps {
    onCTAClick: () => void;
}

const Villas: React.FC<VillasProps> = ({ onCTAClick }) => {
    const [selectedVilla, setSelectedVilla] = useState(0);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const currentVilla = villasData[selectedVilla];
    const galleryImages = [currentVilla.imagePlaceholder, ...currentVilla.gallery];

    const handleSetVilla = (index: number) => {
        setSelectedVilla(index);
        setSelectedImage(null);
    }

    const nextVilla = () => {
        handleSetVilla((selectedVilla + 1) % villasData.length);
    };

    const prevVilla = () => {
        handleSetVilla((selectedVilla - 1 + villasData.length) % villasData.length);
    };
    
    return (
        <section className="section section-white">
            <div className="container">
                <div className="text-center">
                    <div className="brand-subtle">AQUA CANA Country and Residence</div>
                    <h2 className="section-title">VILLAS DISPONIBLES</h2>
                    <p className="section-subtitle">EXPLORA CADA DETALLE</p>
                </div>

                <div className="slider-container">
                    <button onClick={prevVilla} className="slider-nav-btn prev" aria-label="Villa anterior">
                        <ChevronLeft size={32} />
                    </button>
                    
                    <div className="villas-card">
                        <div className="villas-grid">
                            <div>
                                <div className="villa-gallery-main-img-wrapper">
                                    <img 
                                        src={selectedImage || currentVilla.imagePlaceholder}
                                        alt={currentVilla.name}
                                        className="villa-gallery-main-img"
                                    />
                                    <div className="villa-gallery-counter">
                                        {galleryImages.indexOf(selectedImage || currentVilla.imagePlaceholder) + 1} / {galleryImages.length}
                                    </div>
                                </div>
                                <div className="villa-gallery-thumbnails">
                                    {galleryImages.map((image, idx) => (
                                        <button 
                                            key={idx}
                                            onClick={() => setSelectedImage(image)}
                                            className={`villa-thumbnail ${(selectedImage || currentVilla.imagePlaceholder) === image ? 'active' : ''}`}
                                        >
                                            <img src={image} alt={`Vista ${idx + 1}`} />
                                            <div className="overlay"></div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="villa-details">
                                <div>
                                    <h3>{currentVilla.name}</h3>
                                    <p className="subtitle">{currentVilla.subtitle}</p>
                                </div>
                                <div className="villa-price">{currentVilla.price}</div>
                                
                                <div className="villa-specs">
                                    <div className="spec-item">
                                        <Bed size={28} />
                                        <div className="spec-item-text"><span className="value">{currentVilla.bedrooms}</span> Habitaciones</div>
                                    </div>
                                    <div className="spec-item">
                                        <Bath size={28} />
                                        <div className="spec-item-text"><span className="value">{currentVilla.bathrooms}</span> Baños</div>
                                    </div>
                                    {currentVilla.lotSize && 
                                        <div className="spec-item">
                                            <Maximize size={28} />
                                            <div className="spec-item-text"><span className="value">{currentVilla.lotSize}</span> Terreno</div>
                                        </div>
                                    }
                                    <div className="spec-item">
                                        <Home size={28} />
                                        <div className="spec-item-text"><span className="value">{currentVilla.constructionSize}</span> Construcción</div>
                                    </div>
                                </div>
                                
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-gray-800">Características Destacadas</h4>
                                    <ul className="villa-features-list">
                                        {currentVilla.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <Check size={20} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <button onClick={onCTAClick} className="btn btn-primary btn-lg villa-cta-button">
                                    QUIERO ESTA VILLA
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <button onClick={nextVilla} className="slider-nav-btn next" aria-label="Siguiente villa">
                        <ChevronRight size={32} />
                    </button>
                </div>
                
                <div className="slider-dots">
                    {villasData.map((_, index) => (
                        <button
                            key={index}
                            className={`slider-dot ${index === selectedVilla ? 'active' : ''}`}
                            onClick={() => handleSetVilla(index)}
                            aria-label={`Ir a Villa ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Villas;
