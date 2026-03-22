
import React, { useState } from 'react';
import { Award, Calendar, CheckCircle, ExternalLink, FileText, ChevronDown, ChevronUp } from 'lucide-react';

// Import PDF certificates
import course2 from './certificates/course2.pdf';
import course3 from './certificates/course3.pdf';
import course4 from './certificates/course4.pdf';
import course6 from './certificates/course6.pdf';
import cipherSchool from './certificates/Avinash_Hirapure_cipher_School.pdf';

const Certificates = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const credentials = [
    {
      title: 'Introduction to Operating System',
      issuer: 'Coursera',
      date: '2024',
      url: 'https://www.coursera.org/account/accomplishments/verify/K1ZR6ZPTUA22',
      pdf: course2,
       icon: <Award className="text-green" size={24} />
    },
    {
      title: 'Fundamentals of Network',
      issuer: 'Coursera',
      date: '2024',
      url: 'https://www.coursera.org/account/accomplishments/verify/XQD583Z2CSWH',
      pdf: course3,
       icon: <Award className="text-green" size={24} />
    },
    {
      title: 'Game Development using Unity & C#',
      issuer: 'CipherSchools',
      date: '2024',
      url: 'https://www.cipherschools.com/certificate/preview?id=687e33337efd6d5090703d35',
      pdf: cipherSchool,
      icon: <Award className="text-green" size={24} />
    },
    {
      title: 'Digital Systems: From Logic Gates to Processors',
      issuer: 'Certification Authority',
      date: '2024',
      url: null,
      pdf: course4,
      icon: <Award className="text-green" size={24} />
    },
    {
      title: 'Peer-to-Peer Protocols and Local Area Networks',
      issuer: 'Coursera',
      date: '2024',
      url: 'https://www.coursera.org/account/accomplishments/verify/QMQDSUE6KXAJ',
      pdf: course6,
      icon: <Award className="text-green" size={24} />
    }
  ];

  const visibleCertificates = isExpanded ? credentials : credentials.slice(0, 3);

  return (
    <section id="certificates" className="section-padding" >
      <div className="container">
        <div className="mb-8 text-center">
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700' , textAlign:'center'  }}>
            Certifications & <span style={{ color: 'var(--primary)' }}>Achievements</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--primary)', margin: '1rem auto', borderRadius: '2px' }}></div>
        </div>

        <div className="certificates-grid">
          {visibleCertificates.map((cert, index) => (
            <div key={index} className="cert-card h-full">
              <div className="glass-card flex flex-col h-full" style={{ padding: '1.25rem', borderRadius: '12px', transition: 'all 0.3s ease' }}>
                <div className="flex items-center justify-center bg-dark mb-4" style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '10px',
                  border: '1px solid var(--glass-border)',
                }}>
                  {cert.icon}
                </div>
                
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '600', marginBottom: '0.4rem', lineHeight: '1.3' }}>{cert.title}</h3>
                  <p className="text-primary font-semibold" style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>{cert.issuer}</p>
                  
                  <div className="flex items-center gap-2 text-dim" style={{ fontSize: '0.75rem', marginBottom: '1rem' }}>
                    <Calendar size={12} />
                    {cert.date}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-auto pt-4 border-t border-white/10">
                  {cert.url && (
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-semibold hover:opacity-80 transition-all bg-primary/10 px-3 py-2 rounded-lg border border-primary/20 no-underline"
                      style={{ color: '#1a803a', textDecoration: 'none' }}
                    >
                      <ExternalLink size={14} color="#1a803a" />
                      <span>Verify</span>
                    </a>
                  )}
                  <span style={{ marginLeft: "30px" }}></span>
                  {cert.pdf && (
                    <a 
                      href={cert.pdf} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      
                      className="flex items-center gap-2 text-xs font-semibold hover:bg-white/10 transition-all bg-white/5 px-3 py-2 rounded-lg border border-white/10 no-underline"
                      style={{ color: 'white', textDecoration: 'none' }}
                    >
                      <FileText size={14} color="white" />
                      View PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <br></br>
        {credentials.length > 3 && (
          <div className="text-center mt-16">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="glass-card hover:bg-white/10"
              style={{ 
                padding: '0.8rem 2.5rem', 
                borderRadius: '50px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                border: '1px solid var(--glass-border)',
                color: '#1a803a'
              }}
            >
              {isExpanded ? (
                <>Show Less <ChevronUp size={18} /></>
              ) : (
                <>View More Certificates <ChevronDown size={18} /></>
              )}
            </button>
          </div>
        )}
      </div>

      <style>{`
        .certificates-grid {
          display: grid;
          gap: 1rem;
          grid-template-columns: 1fr;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (min-width: 640px) {
          .certificates-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .certificates-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1280px) {
          .certificates-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .cert-card:hover .glass-card {
          transform: translateY(-5px);
          border-color: var(--primary-light);
          box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Certificates;
