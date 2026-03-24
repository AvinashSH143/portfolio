import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="app-container" style={{ position: 'relative', overflow: 'hidden' }}>
      <CustomCursor />
      {/* Global Background Ambient Effects */}
      <div 
        style={{
          position: 'fixed',
          top: '-10%',
          left: '-5%',
          width: '50vw',
          height: '50vh',
          background: 'var(--primary-glow)',
          filter: 'blur(150px)',
          borderRadius: '50%',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      ></div>
      <div 
        style={{
          position: 'fixed',
          bottom: '-10%',
          right: '-5%',
          width: '50vw',
          height: '50vh',
          background: 'var(--blue-glow)',
          filter: 'blur(150px)',
          borderRadius: '50%',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      ></div>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
