import React from 'react';
import { Monitor, Server, Wrench, Users } from 'lucide-react';

const SkillBar = ({ name, percentage, color }) => (
  <div style={{ marginBottom: '1.2rem' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
      <span style={{ fontWeight: 500, color: 'var(--text-main)' }}>{name}</span>
      <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{percentage}%</span>
    </div>
    <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
      <div 
        style={{ 
          width: `${percentage}%`, 
          height: '100%', 
          background: color || 'var(--primary)',
          borderRadius: '4px',
          boxShadow: `0 0 10px ${color || "var(--primary)"}`,
          transition: 'width 1s ease-in-out'
        }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  const categories = [
    {
      title: 'Frontend Development',
      icon: <Monitor className="text-primary" />,
      color: 'var(--primary)',
      skills: [
        { name: 'React.js', percentage: 90 },
        { name: 'JavaScript', percentage: 85 },
        { name: 'HTML5', percentage: 95 },
        { name: 'CSS', percentage: 80 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server className="text-secondary" />,
      color: 'var(--secondary)',
      skills: [
        { name: 'Node.js / Express', percentage: 80 },
       
        { name: 'MongoDB / SQL', percentage: 75 },
        { name: 'RESTful APIs', percentage: 60 }
      ]
    },
    {
      title: 'Tools & Ecosystem',
      icon: <Wrench color="var(--success)" />,
      color: 'var(--success)',
      skills: [
        { name: 'Git & GitHub', percentage: 75},
        { name: 'Java', percentage: 75 },
        { name: 'Linux', percentage: 65 },
        { name: 'Unity with C#', percentage: 65 },
        { name: 'Blender', percentage: 70 },
   
      ]
    },
    {
      title: 'Soft Skills',
      icon: <Users color="var(--warning)" />,
      color: 'var(--warning)',
      skills: [
        { name: 'Communication', percentage: 75 },
        { name: 'Problem Solving', percentage: 90 },
        { name: 'Team Collaboration', percentage: 85 },
        { name: 'Adaptability', percentage: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding relative">
      <div className="container">
        <div className="mb-8" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700' }}>Technical <span style={{ color: 'var(--primary)' }}>Proficiency</span></h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--primary)', margin: '1rem auto', borderRadius: '2px' }}></div>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
            A comprehensive overview of my technical expertise, tools I use daily, and skills acquired throughout my journey.
          </p>
        </div>

        <div className="skills-grid">
          {categories.map((category, index) => (
            <div key={index} className="glass-card flex flex-col h-full" style={{ padding: '1.25rem', borderRadius: '12px', transition: 'all 0.3s ease' }}>
              <div className="flex items-center gap-3 mb-6">
                <div style={{ 
                  padding: '10px', 
                  background: `rgba(${category.color === 'var(--primary)' ? '26, 128, 58' : category.color === 'var(--secondary)' ? '59, 130, 246' : category.color === 'var(--success)' ? '16, 185, 129' : '245, 158, 11'}, 0.1)`, 
                  borderRadius: '10px',
                  border: `1px solid rgba(${category.color === 'var(--primary)' ? '26, 128, 58' : category.color === 'var(--secondary)' ? '59, 130, 246' : category.color === 'var(--success)' ? '16, 185, 129' : '245, 158, 11'}, 0.3)`
                }}>
                  {React.cloneElement(category.icon, { size: 20 })}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-main)' }}>{category.title}</h3>
              </div>

              <div style={{ flex: 1 }}>
                {category.skills.map((skill, i) => (
                  <SkillBar key={i} name={skill.name} percentage={skill.percentage} color={category.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .skills-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: 1fr;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (min-width: 640px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1280px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
          }
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

export default Skills;
