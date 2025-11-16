import React, { useState } from 'react';
import { villasData } from '../constants/data';
import { Button } from './ui/Button';
import { Bed, Bath, Maximize, Home, Check, ChevronLeft, ChevronRight } from 'lucide-react';

interface VillasProps {
    onCTAClick: () => void;
}

const Villas: React.FC<VillasProps> = ({ onCTAClick }) => {
    const [selectedVilla, setSelectedVilla] = useState(0);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const currentVilla = villasData[selectedVilla];
    const galleryImages = [currentVilla.imagePlaceholder, ...currentVilla.gallery];

    const nextVilla = () => {
        setSelectedVilla((prev) => (prev + 1) % villasData.length);
        setSelectedImage(null);
    };

    const prevVilla = () => {
        setSelectedVilla((prev) => (prev - 1 + villasData.length) % villasData.length);
        setSelectedImage(null);
    };
    
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="text-gray-500 font-semibold tracking-widest mb-2">AQUA CANA Country and Residence</div>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight">VILLAS DISPONIBLES</h2>
                    <p className="text-xl text-gray-600 mt-2">EXPLORA CADA DETALLE</p>
                </div>

                <div className="relative">
                    <button onClick={prevVilla} className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white rounded-full p-3 shadow-lg transition" aria-label="Villa anterior">
                        <ChevronLeft className="text-gray-700" size={32} />
                    </button>
                    
                    <div className="bg-slate-50 rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div>
                                <div className="relative">
                                    <img 
                                        src={selectedImage || currentVilla.imagePlaceholder}
                                        alt={currentVilla.name}
                                        className="w-full aspect-[4/3] object-cover rounded-xl shadow-lg transition-all duration-300"
                                    />
                                    <div className="absolute bottom-3 right-3 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
                                        {galleryImages.indexOf(selectedImage || currentVilla.imagePlaceholder) + 1} / {galleryImages.length}
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 gap-2 mt-4">
                                    {galleryImages.map((image, idx) => (
                                        <button 
                                            key={idx}
                                            onClick={() => setSelectedImage(image)}
                                            className={`relative aspect-square rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#008A8A] transition ${
                                                (selectedImage || currentVilla.imagePlaceholder) === image ? 'ring-2 ring-offset-2 ring-[#008A8A]' : 'opacity-70 hover:opacity-100'
                                            }`}
                                        >
                                            <img src={image} alt={`Vista ${idx + 1}`} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/20"></div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">{currentVilla.name}</h3>
                                    <p className="text-gray-600">{currentVilla.subtitle}</p>
                                </div>
                                <div className="mb-6 text-3xl font-bold text-[#008A8A] bg-[#e0f2f1] inline-block px-4 py-2 rounded-lg self-start">{currentVilla.price}</div>
                                
                                <div className="grid grid-cols-2 gap-4 mb-6 text-gray-700">
                                    <div className="flex items-center gap-3"><Bed size={28} className="text-[#008A8A]" /><div><span className="font-bold text-lg">{currentVilla.bedrooms}</span> Habitaciones</div></div>
                                    <div className="flex items-center gap-3"><Bath size={28} className="text-[#008A8A]" /><div><span className="font-bold text-lg">{currentVilla.bathrooms}</span> Baños</div></div>
                                    {currentVilla.lotSize && <div className="flex items-center gap-3"><Maximize size={28} className="text-[#008A8A]" /><div><span className="font-bold text-lg">{currentVilla.lotSize}</span> Terreno</div></div>}
                                    <div className="flex items-center gap-3"><Home size={28} className="text-[#008A8A]" /><div><span className="font-bold text-lg">{currentVilla.constructionSize}</span> Construcción</div></div>
                                </div>
                                
                                <div className="mb-auto">
                                    <h4 className="font-bold text-lg mb-2 text-gray-800">Características Destacadas</h4>
                                    <ul className="space-y-2">
                                        {currentVilla.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-gray-600">
                                                <Check size={20} className="text-green-500" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <Button onClick={onCTAClick} size="lg" className="w-full mt-8">
                                    QUIERO ESTA VILLA
                                </Button>
                            </div>
                        </div>
                    </div>
                    
                    <button onClick={nextVilla} className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white rounded-full p-3 shadow-lg transition" aria-label="Siguiente villa">
                        <ChevronRight className="text-gray-700" size={32} />
                    </button>
                </div>
                
                <div className="flex justify-center gap-2 mt-8">
                    {villasData.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedVilla ? 'bg-[#008A8A] w-6' : 'bg-gray-300'}`}
                            onClick={() => { setSelectedVilla(index); setSelectedImage(null); }}
                            aria-label={`Ir a Villa ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Villas;
