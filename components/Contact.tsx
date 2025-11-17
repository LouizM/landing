import React, { useState } from 'react';
import { countryCodes } from '../constants/data';

interface ContactProps {
    onFormSubmitSuccess: () => void;
}

const Contact: React.FC<ContactProps> = ({ onFormSubmitSuccess }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        codigoPais: '+1',
        telefono: '',
        email: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!formData.nombre || !formData.telefono || !formData.email) {
            alert('Por favor completa todos los campos');
            return;
        }
        setIsSubmitting(true);

        try {
            console.log('Submitting form data:', formData);
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            onFormSubmitSuccess();
            setFormData({ 
                nombre: '', 
                codigoPais: '+1',
                telefono: '', 
                email: '' 
            });
            
        } catch (error) {
            console.error('Error al enviar formulario:', error);
            alert('Hubo un error al enviar tu solicitud. Por favor intenta de nuevo.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="form-section" className="contact-section" style={{backgroundImage: 'url(https://picsum.photos/seed/contact-bg/1920/1080)'}}>
            <div className="container">
                <div className="contact-card">
                    <div className="contact-card-header">
                        <div className="brand">AQUA CANA</div>
                        <h2>VIVE EN EL PARAÍSO HOY</h2>
                        <p>Te llamaremos en las próximas 24 horas</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="nombre" className="form-label">Nombre Completo</label>
                            <input id="nombre" name="nombre" type="text" placeholder="Ingresa tu nombre" value={formData.nombre} onChange={handleInputChange} required className="form-control" />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <div className="phone-input-group">
                                <select name="codigoPais" value={formData.codigoPais} onChange={handleInputChange} className="form-control country-code">
                                    {countryCodes.map(code => (
                                        <option key={code.value} value={code.value}>{code.label}</option>
                                    ))}
                                </select>
                                <input id="telefono" name="telefono" type="tel" placeholder="Número de teléfono" value={formData.telefono} onChange={handleInputChange} required className="form-control phone-number" />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Correo Electrónico</label>
                            <input id="email" name="email" type="email" placeholder="tu@email.com" value={formData.email} onChange={handleInputChange} required className="form-control" />
                        </div>
                        
                        <button type="submit" disabled={isSubmitting} className="btn btn-accent btn-lg submit-btn">
                            {isSubmitting ? 'ENVIANDO...' : 'APLICAR AHORA'}
                        </button>
                        
                        <p className="disclaimer">Tu información está segura con nosotros.</p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
