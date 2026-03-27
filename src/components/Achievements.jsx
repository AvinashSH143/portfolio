
import React from 'react';
import { Trophy, Code, ExternalLink, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'LeetCode Progress',
      description: 'Solved over 85+ questions on LeetCode, demonstrating strong problem-solving skills and proficiency in Data Structures and Algorithms.',
      stat: '85+ Solved',
      link: 'https://leetcode.com/u/avinash_hirapure/', // Dummy URL as requested, but I'll use a real-looking one if possible or just leetcode.com
      icon: <Code className="text-primary" size={24} />,
      color: 'var(--primary)'
    },
    {
      title: 'Code A Haunt Hackathon',
      description: 'Participated in the "Code A Haunt" Hackathon, competing among 2000+ participants and developing innovative solutions under timed pressure.',
      stat: '300+ Participants',
      link: '#', 
      icon: <Trophy className="text-blue-400" size={24} />,
      color: '#3b82f6',
      footerLabel: 'College Level Hackathon'
    },
    {
      title: "'One India' Competition",
      description: "Achieved 2nd runner up position in the 'One India' group competition, contributing through creative Clay Modeling skills.",
      stat: '2nd Runner Up',
      link: '#',
      icon: <Trophy className="text-yellow-500" size={24} />,
      color: '#eab308',
      footerLabel: 'Group Competition'
    }
  ];

  return (
    <section id="achievements" className="section-padding" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
      <div className="container">
       

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="glass-card h-full" style={{ padding: '2rem', borderRadius: '16px', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
                <div className="flex items-start justify-between">
                  <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '12px', 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid var(--glass-border)'
                  }}>
                    {achievement.icon}
                  </div>
                  <div style={{ 
                    fontSize: '0.8rem', 
                    fontWeight: '700', 
                    padding: '0.4rem 0.8rem', 
                    borderRadius: '20px', 
                     
                    color: achievement.color,
                    
                  }}>
                    {achievement.stat}
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem' }}>{achievement.title}</h3>
                  <p className="text-dim" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{achievement.description}</p>
                </div>

                {achievement.link !== '#' && (
                  <div className="mt-auto">
                    <a 
                      href={achievement.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-all no-underline"
                      style={{ color: achievement.color }}
                    >
                      View Profile <ExternalLink size={16} />
                    </a>
                  </div>
                )}
                {achievement.link === '#' && achievement.footerLabel && (
                   <div className="mt-auto flex items-center gap-2 text-dim" style={{ fontSize: '0.85rem' }}>
                     <Users size={16} />
                     <span>{achievement.footerLabel}</span>
                   </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .achievements-grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: 1fr;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .achievements-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .achievements-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .achievement-card:hover .glass-card {
          transform: translateY(-8px);
          border-color: var(--primary-light);
          box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </section>
  );
};

export default Achievements;
