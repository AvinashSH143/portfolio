import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="container">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="text-2xl font-bold font-display text-primary" style={{ textDecoration: 'none' }}>
            Portfolio<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md-flex gap-8 nav-desktop">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-muted font-medium"
                style={{ textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button removed by user */}
          <div className="hidden md-block btn-desktop">
            
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md-hidden text-main mobile-btn" 
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="glass-card mt-4 p-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-main"
                style={{ textDecoration: 'none', fontSize: '1.1rem', padding: '0.5rem 0', borderBottom: '1px solid var(--glass-border)' }}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
      <style>{`
        @media (min-width: 768px) {
          .nav-desktop { display: flex !important; }
          .btn-desktop { display: block !important; }
          .mobile-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
          .btn-desktop { display: none !important; }
          .mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
