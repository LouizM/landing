import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Presale from './components/Presale';
import Villas from './components/Villas';
import Amenities from './components/Amenities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConfirmationOverlay from './components/ConfirmationOverlay';
import ScrollHint from './components/ScrollHint';

const App: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const contactFormRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // FIX: The type `NodeJS.Timeout` is not available in a browser environment.
    // `ReturnType<typeof setTimeout>` is a safe, cross-platform way to type the return value of `setTimeout`.
    let scrollTimer: ReturnType<typeof setTimeout>;
    let hasScrolled = false;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        hasScrolled = true;
        setShowScrollHint(false);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    scrollTimer = setTimeout(() => {
      if (!hasScrolled && window.scrollY < 100) {
        setShowScrollHint(true);
      }
    }, 3000);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(scrollTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSuccess = () => {
    setShowOverlay(true);
  };
  
  return (
    <div className="bg-slate-50">
      {showScrollHint && <ScrollHint />}
      <ConfirmationOverlay show={showOverlay} onClose={() => setShowOverlay(false)} />
      
      <header>
        <Hero onCTAClick={scrollToForm} />
      </header>

      <main>
        <Presale onCTAClick={scrollToForm} />
        <Villas onCTAClick={scrollToForm} />
        <Amenities />
        <Contact onFormSubmitSuccess={handleFormSuccess} />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
