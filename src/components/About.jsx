import React from 'react';
import { Download, Coffee, Code, Globe, User } from 'lucide-react';
import cvFile from './Avinash_12306816_CV.pdf';

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      {/* Decorative Background Element */}
      <div 
        className="absolute"
        style={{
          top: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'var(--primary-glow)',
          filter: 'blur(100px)',
          borderRadius: '50%',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      ></div>

      <div className="container">
        <div className="mb-8" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>About <span style={{ color: 'var(--primary)' }}>Me</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--primary)', margin: '1rem auto', borderRadius: '2px' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="about-grid glass-card">
          
          <div className="flex flex-col gap-6">
            <h3 className="text-xl flex items-center gap-2">
              <User className="text-primary" />
              Professional Summary
            </h3>
            <p className="text-muted" style={{ lineHeight: '1.8' }}>
             I’m a Computer Science student at <b style={{ color: 'white' }}>Lovely Professional University</b >, pursuing a B.Tech in CSE, with a growing focus on building interactive and meaningful digital experiences. I’m particularly drawn to game development and modern web technologies, where creativity meets problem-solving.

I work primarily with React, Node.js, and modern CSS architectures, and I enjoy turning ideas into clean, functional, and responsive applications. Through my projects, I aim to build products that are not just visually appealing, but also accessible and genuinely useful.

Currently, I’m focused on crafting human-centered solutions that solve real-world problems while continuously improving my skills as a developer.
            </p>
          <p className="text-muted" style={{ lineHeight: '1.8' }}>Currentl CGPA is 7.93</p>
            
            <div className="mt-4">
              <a href={cvFile} download="Avinash_CV.pdf" className="btn btn-primary">
                <Download size={18} /> Download Resume
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xl flex items-center gap-2">
              <Coffee className="text-primary" />
              Interests & Focus
            </h3>
            
            <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              {[
                
                { icon: <Globe style={{ color: '#e09f3e' }} />, title: 'Web Accessibility', desc: 'Building for everyone' },
                { icon: <Code className="text-green"/>, title: 'Game Development', desc: 'using C# with Unity Engine' },
                { icon: <Coffee style={{ color: 'violet' }} />, title: 'Continuous Learning', desc: 'Always Exploring' }
              ].map((item, index) => (
                <div key={index} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '12px', transition: 'all 0.3s ease' }} className="interest-card">
                  <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{item.icon}</div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @media (min-width: 992px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; }
        }
        .interest-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05) !important;
        }
      `}</style>
    </section>
  );
};

export default About;
