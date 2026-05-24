import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { initScrollEffect } from './utils/scrollEffect';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import ServicesPage from './components/ServicesPage';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ServiceDetails from './components/ServiceDetails';
import WhatsAppButton from './components/WhatsAppButton';
import AIChatbot from './components/AIChatbot';

const Footer = () => {
  return (
    <footer 
      style={{
        background: '#070707',
        color: '#888',
        padding: '30px 20px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        fontSize: '13px',
        fontFamily: 'inherit'
      }}
    >
      <div 
        style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '15px' 
        }}
      >
        <p>&copy; {new Date().getFullYear()} Nivion Technologies. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/" style={{ color: '#888', transition: '0.2s' }}>Home</Link>
          <Link to="/about" style={{ color: '#888', transition: '0.2s' }}>About</Link>
          <Link to="/services" style={{ color: '#888', transition: '0.2s' }}>Services</Link>
          <Link to="/portfolio" style={{ color: '#888', transition: '0.2s' }}>Portfolio</Link>
          <Link to="/contact" style={{ color: '#888', transition: '0.2s' }}>Contact</Link>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  useEffect(() => {
    const cleanup = initScrollEffect();
    return cleanup; 
  }, []);

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* NAVBAR */}
        <Nav />
        
        {/* PAGE BODY ROUTES */}
        <main style={{ flex: '1 0 auto', paddingTop: '75px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/:serviceId" element={<ServiceDetails />} />
          </Routes>
        </main>
        
        {/* SHARED PREMIUM FOOTER */}
        <Footer />

        {/* STATIC FLOATING WHATSAPP BUTTON */}
        <WhatsAppButton />

        {/* STATIC FLOATING AI CHATBOT */}
        <AIChatbot />
      </div>
    </Router>
  );
};

export default App;