import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark mt-8" style={{ borderTop: '1px solid var(--glass-border)', padding: '3rem 0 2rem 0' }}>
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-8">
          
           <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="text-2xl font-bold font-display text-primary" style={{ textDecoration: 'none' }}>
            Portfolio<span className="text-primary">.</span>
          </a>

          <div className="flex gap-6">
            <a href="#about" className="text-muted" style={{ textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-main)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>About</a>
            <a href="#projects" className="text-muted" style={{ textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-main)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Projects</a>
            <a href="#contact" className="text-muted" style={{ textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-main)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Contact</a>
          </div>

          <div className="w-full" style={{ height: '1px', background: 'var(--glass-border)' }}></div>

          <div className="flex justify-between items-center w-full gap-4" style={{ flexWrap: 'wrap' }}>
            <p className="text-dim text-sm">
              &copy; {new Date().getFullYear()} Avinash SH. All rights reserved.
            </p>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center justify-center transition-all"
              style={{ 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid var(--glass-border)', 
                color: 'var(--text-main)', 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}
            >
              <ArrowUp size={20} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
