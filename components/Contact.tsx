import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Select } from './ui/Select';
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

        try {
            // NOTE: The backend URL should be configured in an environment variable.
            // const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
            // For demonstration, we'll simulate a successful submission.
            console.log('Submitting form data:', formData);
            // const response = await fetch(`${BACKEND_URL}/api/leads`, {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify(formData)
            // });
            // if (!response.ok) throw new Error('Error al enviar el formulario');
            
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
        }
    };

    return (
        <section id="form-section" className="bg-cover bg-center py-20" style={{backgroundImage: 'url(https://picsum.photos/seed/contact-bg/1920/1080)'}}>
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto bg-[#002e2e]/90 backdrop-blur-md text-white p-8 md:p-12 rounded-2xl shadow-2xl border border-white/20">
                    <div className="text-center mb-8">
                        <div className="font-bold tracking-widest text-[#c3a177] mb-2">AQUA CANA</div>
                        <h2 className="text-4xl md:text-5xl font-extrabold">VIVE EN EL PARAÍSO HOY</h2>
                        <p className="text-xl mt-2 text-white/80">Te llamaremos en las próximas 24 horas</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="nombre" className="block text-sm font-bold mb-2 text-white/80">Nombre Completo</label>
                            <Input id="nombre" name="nombre" type="text" placeholder="Ingresa tu nombre" value={formData.nombre} onChange={handleInputChange} required />
                        </div>
                        
                        <div>
                            <label htmlFor="telefono" className="block text-sm font-bold mb-2 text-white/80">Teléfono</label>
                            <div className="flex gap-2">
                                <Select name="codigoPais" value={formData.codigoPais} onChange={handleInputChange} className="w-1/4">
                                    {countryCodes.map(code => (
                                        <option key={code.value} value={code.value}>{code.label}</option>
                                    ))}
                                </Select>
                                <Input id="telefono" name="telefono" type="tel" placeholder="Número de teléfono" value={formData.telefono} onChange={handleInputChange} className="w-3/4" required />
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold mb-2 text-white/80">Correo Electrónico</label>
                            <Input id="email" name="email" type="email" placeholder="tu@email.com" value={formData.email} onChange={handleInputChange} required />
                        </div>
                        
                        <Button type="submit" size="lg" className="w-full bg-[#c3a177] text-[#002e2e] hover:bg-[#d4b89a] focus:ring-[#c3a177]/50">
                            APLICAR AHORA
                        </Button>
                        
                        <p className="text-center text-sm text-white/60">Tu información está segura con nosotros.</p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
