import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import cvFile from './Avinash_12306816_CV.pdf';
import profileImg from './profile.jpeg';

const Hero = () => {
  return (
    <section id="home" className="section-padding min-h-screen flex items-center" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Text Content */}
          <div className="animate-fade" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <div className="badge badge-reliable mb-6" style={{ display: 'inline-block' }}>Full Stack Developer</div>
            <h1 className="mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              <span style={{ color: 'var(--primary)' }}>Hi</span>, I'm <br />
              <span>Avinash SH</span>
            </h1>
            <p className="text-muted text-lg mb-8" style={{ maxWidth: '600px', lineHeight: '1.8' }}>
              I craft responsive, high-performance web applications using modern technologies. 
              Let's turn your ideas into functional and aesthetically pleasing digital experiences.
            </p>
            
            <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
              <a href="#projects" className="btn btn-primary">
                View Work <ArrowRight size={18} />
              </a>
              <a href={cvFile} download="Avinash_CV.pdf" className="btn btn-secondary glass-card" style={{ padding: '12px 28px' }}>
                Download CV <Download size={18} />
              </a>
            </div>
          </div>

          {/* Visual Element Placeholder */}
          <div className="animate-fade animate-float flex justify-center" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <div 
              style={{
                width: '100%',
                maxWidth: '400px',
                aspectRatio: '1/1',
                background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-dark) 100%)',
                border: '1px solid var(--glass-border)',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                boxShadow: '0 0 40px var(--primary-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  inset: '5px',
                  borderRadius: 'inherit',
                  background: 'linear-gradient(135deg, rgba(26, 128, 58, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              ></div>
              <img 
                src={profileImg} 
                alt="Profile" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 'inherit',
                  zIndex: 1
                }}
              />
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @media (min-width: 992px) {
          .hero-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
