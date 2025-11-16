import React from 'react';
import { Button } from './ui/Button';

interface HeroProps {
    onCTAClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCTAClick }) => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://customer-assets.emergentagent.com/job_luxury-residence-1/artifacts/05qbiqdg_playa%20artificial.jpg)' }}
            ></div>
            <div className="absolute inset-0 bg-black/50"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center p-4 animate-in fade-in-0 slide-in-from-bottom-10 duration-1000">
                <div className="flex flex-col items-center gap-4 mb-8">
                    <img 
                        src="https://customer-assets.emergentagent.com/job_luxury-residence-1/artifacts/nwtwpl95_Icono%20rosado.png" 
                        alt="AQUA CANA Icon" 
                        className="w-24 h-24 md:w-32 md:h-32 object-contain"
                    />
                    <div className="bg-black/30 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                        <div className="text-white font-extrabold">
                            <span className="block text-2xl md:text-4xl tracking-widest">AQUA CANA</span>
                            <span className="block text-sm md:text-base font-medium tracking-wider">Country and Residence</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-shadow">
                        LA VILLA DE TUS SUEÑOS
                    </h1>
                    <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
                        <p className="text-xl md:text-2xl font-light tracking-wider text-shadow">
                            EN EL CORAZÓN DEL CARIBE
                        </p>
                        <span className="bg-[#e7759c] text-white text-sm font-bold py-1 px-4 rounded-full border-2 border-white/50">
                            · 0% DE INICIAL ·
                        </span>
                    </div>
                </div>
                
                <Button 
                    onClick={onCTAClick}
                    size="lg"
                    className="mt-12"
                >
                    DESCUBRE TU OPORTUNIDAD
                </Button>
            </div>
        </section>
    );
};

export default Hero;
