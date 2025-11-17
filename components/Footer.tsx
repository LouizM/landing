import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <span className="line1">AQUA CANA</span>
                        <span className="line2">COUNTRY AND RESIDENCE</span>
                    </div>
                    
                    <div className="footer-info">
                        <p>Punta Cana, República Dominicana</p>
                        <p>Proyecto registrado por <strong>Tropical Inmo Dr.</strong></p>
                    </div>
                    
                    <div className="footer-copyright">
                        <p>&copy; {new Date().getFullYear()} AQUA CANA. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
