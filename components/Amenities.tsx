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
        <section className="bg-slate-50 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="text-gray-500 font-semibold tracking-widest mb-2">AQUA CANA Country and Residence</div>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight">AMENIDADES EXCLUSIVAS</h2>
                    <p className="text-xl text-gray-600 mt-2">ESTILO DE VIDA DE CLASE MUNDIAL</p>
                </div>

                <div className="relative">
                    <button onClick={prevAmenity} className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white rounded-full p-3 shadow-lg transition" aria-label="Amenidad anterior">
                        <ChevronLeft className="text-gray-700" size={32} />
                    </button>
                    
                    <div className="w-full aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0">
                            <img src={currentAmenity.imagePlaceholder} alt={currentAmenity.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
                            <h3 className="text-3xl md:text-5xl font-bold mb-2 text-shadow-lg">{currentAmenity.title}</h3>
                            <p className="text-lg md:text-xl max-w-3xl text-shadow">{currentAmenity.description}</p>
                        </div>
                    </div>
                    
                    <button onClick={nextAmenity} className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white rounded-full p-3 shadow-lg transition" aria-label="Siguiente amenidad">
                        <ChevronRight className="text-gray-700" size={32} />
                    </button>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {amenitiesData.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedAmenity ? 'bg-[#008A8A] w-6' : 'bg-gray-300'}`}
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
