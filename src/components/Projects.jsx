
import React, { useState } from 'react';
import { ExternalLink, Github, Folder, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Trustyfy Dashboard',
      description: 'A comprehensive security analysis dashboard with real-time risk assessment and modern UI themes.',
      tags: ['React', 'Node.js', 'Vite', 'CSS'],
      githubUrl: 'https://github.com/AvinashSH143/Trustyfy',
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'Advanced Bug Tracker',
      description: 'A scalable solution featuring product filtering, secure checkout, and intuitive bug tracking.',
      tags: ['Next.js', 'Tailwind', 'MongoDB'],
      githubUrl: 'https://github.com/anu02m/Advanced-Bug-Tracker',
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'RealTime ScoreBoard',
      description: 'Interactive real-time scoreboard for multiplayer games with live updates and dynamic stats.',
      tags: ['React', 'Socket.io', 'Node.js'],
      githubUrl: 'https://github.com/AvinashSH143/RealTime_ScoreBoard_for_Games',
      liveUrl: '#'
    },
    {
      id: 4,
      title: 'Interactive Portfolio',
      description: 'A highly aesthetic portfolio employing glassmorphism UI principles and smooth animations.',
      tags: ['React', 'Vite', 'Vanilla CSS'],
      githubUrl: 'https://github.com/AvinashSH143/RealTime_ScoreBoard_for_Games',
      liveUrl: '#'
    }
  ];

  const visibleProjects = isExpanded ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', textAlign:'center' }}>
            Featured <span style={{ color: 'var(--primary)' }}>Projects</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--primary)', margin: '1rem auto', borderRadius: '2px' }}></div>
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <div key={project.id} className="project-card h-full">
              <div className="glass-card flex flex-col h-full" style={{ padding: '1.25rem', borderRadius: '12px', transition: 'all 0.3s ease' }}>
                <div className="flex items-center justify-center bg-dark mb-4" style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '10px',
                  border: '1px solid var(--glass-border)',
                }}>
                  <Folder className="text-green" size={24} />
                </div>
                
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '600', marginBottom: '0.4rem', lineHeight: '1.3' }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem', lineHeight: '1.5' }}>{project.description}</p>
                  
                  <div className="flex items-center gap-2 flex-wrap mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} style={{ fontSize: '0.7rem', padding: '2px 8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', border: '1px solid var(--glass-border)', color: 'var(--text-dim)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-auto pt-4 border-t border-white/10">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold hover:opacity-80 transition-all bg-primary/10 px-3 py-2 rounded-lg border border-primary/20 no-underline"
                    style={{ color: '#1a803a', textDecoration: 'none' }}
                  >
                    <Github size={14} color="#1a803a" />
                    GitHub
                  </a>
                  <span style={{ marginLeft: "10px" }}></span>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold hover:bg-white/10 transition-all bg-white/5 px-3 py-2 rounded-lg border border-white/10 no-underline"
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    <ExternalLink size={14} color="white" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
 <br></br>
        {projects.length > 3 && (
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
                <>View More Projects <ChevronDown size={18} /></>
              )}
            </button>
          </div>
        )}
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          gap: 1rem;
          grid-template-columns: 1fr;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (min-width: 640px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1280px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .project-card:hover .glass-card {
          transform: translateY(-5px);
          border-color: var(--primary-light);
          box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Projects;
