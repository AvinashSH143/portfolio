import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Decorative Background Element */}
      <div 
        className="absolute"
        style={{
          top: '30%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: 'var(--primary-glow)',
          filter: 'blur(100px)',
          borderRadius: '50%',
          zIndex: -1,
          pointerEvents: 'none'
          
        }}
      ></div>

      <div className="container">
        <div className="mb-8" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Get In <span style={{ color: 'var(--primary)' }}>Touch</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--primary)', margin: '1rem auto', borderRadius: '2px' }}></div>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="contact-grid">
          
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center" style={{ padding: '12px', background: 'rgba(26, 128, 58, 0.1)', borderRadius: '12px', color: 'var(--primary)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-dim text-sm mb-1">Email Me</h4>
                  <p className="font-medium">vibhish143@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center" style={{ padding: '12px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', color: 'var(--secondary)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-dim text-sm mb-1">Location</h4>
                  <p className="font-medium">Belagavi, India</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-lg mb-6">Connect with me</h3>
              <div className="flex gap-4">
                {[
                  { icon: <Github />, href: 'https://github.com/AvinashSH143' },
                  { icon: <Linkedin />, href: 'https://www.linkedin.com/in/avinash-s-h27/' },
                
                ].map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn flex items-center justify-center"
                    style={{ 
                      width: '45px', 
                      height: '45px', 
                      background: 'rgba(255,255,255,0.05)', 
                      borderRadius: '50%',
                      color: 'var(--text-main)',
                      border: '1px solid var(--glass-border)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-xl mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="form-grid">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm text-muted">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm text-muted">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm text-muted">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows="5" 
                  placeholder="How can I help you?"
                  style={{ resize: 'vertical' }}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
      <style>{`
        @media (min-width: 992px) {
          .contact-grid { grid-template-columns: 1fr 2fr !important; }
          .form-grid { grid-template-columns: 1fr 1fr !important; }
        }
        .social-btn:hover {
          background: var(--primary) !important;
          border-color: var(--primary) !important;
          transform: translateY(-3px);
        }
      `}</style>
    </section>
  );
};

export default Contact;
