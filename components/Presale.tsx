import React from 'react';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';

interface PresaleProps {
    onCTAClick: () => void;
}

const Presale: React.FC<PresaleProps> = ({ onCTAClick }) => {
    return (
        <section className="bg-[#002e2e] text-white py-20 overflow-hidden">
            <div className="relative w-full whitespace-nowrap overflow-hidden mb-12">
                <div className="flex animate-marquee">
                    {[...Array(6)].map((_, i) => (
                        <span key={i} className="text-2xl font-bold uppercase text-[#c3a177] mx-4">
                            • OPORTUNIDAD ÚNICA
                        </span>
                    ))}
                </div>
            </div>
            
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="text-white/70 font-semibold tracking-widest mb-2">AQUA CANA Country and Residence</div>
                    <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">SOLARES EN PREVENTA</h2>
                    <p className="text-xl text-white/80 mt-2">Tu Vida en este Paraíso Caribeño Comienza Aquí</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="relative rounded-xl overflow-hidden shadow-2xl">
                        <img 
                            src="https://customer-assets.emergentagent.com/job_73f3a380-cb7b-4677-98c7-1ebcd841c964/artifacts/9aoaobhm_solares%20en%20preventa.jpeg"
                            alt="Solares en preventa - Vista aérea"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4 bg-red-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg flex items-center gap-2 font-bold shadow-lg">
                            <span className="text-2xl">⚡</span>
                            <span>ÚLTIMOS LOTES DISPONIBLES</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-8">
                        <div className="bg-white/10 p-6 rounded-lg flex items-center gap-6 border border-white/20">
                            <div className="bg-[#c3a177] p-4 rounded-full text-[#002e2e]">
                                <Check size={36} strokeWidth={3}/>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">SISTEMA DE FINANCIAMIENTO</h3>
                                <p className="text-white/80">Facilidades de pago directas con el desarrollador</p>
                            </div>
                        </div>
                        
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <Check size={24} className="text-[#c3a177] mt-1 flex-shrink-0" />
                                <div>
                                    <strong className="block text-lg">Desde 250 m²</strong>
                                    <span className="text-white/80">Lotes premium para tu proyecto soñado</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <Check size={24} className="text-[#c3a177] mt-1 flex-shrink-0" />
                                <div>
                                    <strong className="block text-lg">Preventa Exclusiva</strong>
                                    <span className="text-white/80">Precios especiales antes del lanzamiento oficial</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <Check size={24} className="text-[#c3a177] mt-1 flex-shrink-0" />
                                <div>
                                    <strong className="block text-lg">Plusvalía Asegurada</strong>
                                    <span className="text-white/80">Ubicación estratégica con proyección de crecimiento</span>
                                </div>
                            </li>
                        </ul>
                        
                        <div className="bg-white/10 p-6 rounded-lg text-center border border-white/20">
                            <Button 
                                onClick={onCTAClick}
                                size="lg"
                                className="w-full bg-[#c3a177] text-[#002e2e] hover:bg-[#d4b89a] focus:ring-[#c3a177]/50"
                            >
                                RESERVA TU LOTE AHORA
                            </Button>
                            <p className="mt-4 text-sm text-white/70">⏱️ Plazos limitados · Consulta disponibilidad inmediata</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Presale;
