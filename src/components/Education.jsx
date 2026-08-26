import React from 'react';
import { GraduationCap } from 'lucide-react';

export function Education() {
  const educationItems = [
    {
      degree: 'M.Sc. Computer Science',
      institution: 'Currently Pursuing Master of Science in Computer Science',
      status: 'Currently Studying',
      highlight: true,
      color: 'var(--primary)',
    },
    {
      degree: 'B.Sc. Computer Science (Artificial Intelligence)',
      institution: 'PPG College of Arts and Science, Bharathiar University, Coimbatore',
      year: '2023 – 2026',
      score: 'Aggregate: 77%',
      color: 'var(--accent)',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Government Higher Secondary School, Kovilpalayam, Coimbatore',
      year: '2023',
      score: 'Score: 56%',
      color: 'var(--border-subtle)',
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Achievers Academy Matric Higher Secondary School, Hosur',
      year: '2021',
      color: 'var(--border-subtle)',
    },
  ];

  return (
    <section className="container" id="education">
      <div className="section-header">
        <h2 className="section-title">Education <span className="gradient-text">History</span></h2>
        <p className="section-subtitle">Academic qualifications and current postgraduate studies</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {educationItems.map((item, index) => (
          <div
            key={index}
            className="glass-card"
            style={{ borderLeft: `4px solid ${item.color}` }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <GraduationCap size={20} color="var(--primary)" />
                {item.degree}
              </h3>
              {item.status ? (
                <span className="tag" style={{ background: 'rgba(124, 58, 237, 0.2)', color: '#a78bfa', borderColor: 'rgba(124, 58, 237, 0.4)' }}>
                  {item.status}
                </span>
              ) : (
                <span className="tag">
                  {item.year} {item.score ? `| ${item.score}` : ''}
                </span>
              )}
            </div>
            <p style={{ color: 'var(--text-muted)', fontWeight: item.highlight ? 600 : 400 }}>
              {item.institution}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
