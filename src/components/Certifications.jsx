import React from 'react';
import { Award } from 'lucide-react';

export function Certifications() {
  const certifications = [
    { title: 'IoT Using Arduino', issuer: 'NoviTech', color: 'var(--primary)' },
    { title: '15+ Certifications in Digital Marketing', issuer: 'Great Learning Academy', color: 'var(--accent)' },
    { title: 'Machine Learning using Python', issuer: 'Simplilearn', color: 'var(--accent-pink)' },
  ];

  return (
    <section className="container" id="certifications">
      <div className="section-header">
        <h2 className="section-title">Certifications & <span className="gradient-text">Achievements</span></h2>
        <p className="section-subtitle">Verified credentials and completed professional courses</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {certifications.map((cert, index) => (
          <div key={index} className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="skill-icon" style={{ color: cert.color }}>
              <Award size={26} />
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>{cert.title}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
