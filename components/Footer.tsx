import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#001f1f] text-white/70 py-8">
            <div className="container mx-auto px-4 text-center md:text-left">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex-shrink-0">
                        <div className="text-white font-extrabold">
                            <span className="block text-2xl tracking-widest">AQUA CANA</span>
                            <span className="block text-sm font-medium tracking-wider">COUNTRY AND RESIDENCE</span>
                        </div>
                    </div>
                    
                    <div className="text-sm">
                        <p>Punta Cana, República Dominicana</p>
                        <p>Proyecto registrado por <strong>Tropical Inmo Dr.</strong></p>
                    </div>
                    
                    <div className="text-xs text-white/50">
                        <p>&copy; {new Date().getFullYear()} AQUA CANA. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
