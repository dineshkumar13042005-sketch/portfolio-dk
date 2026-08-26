import React from 'react';
import { MapPin, Phone } from 'lucide-react';

export function About() {
  return (
    <section className="container" id="about">
      <div className="section-header">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        <p className="section-subtitle">Career Objective & Background</p>
      </div>

      <div className="about-grid">
        <div className="glass-card about-text">
          <p>
            Motivated Front-End Developer with a B.Sc. in Computer Science (Artificial Intelligence) and currently studying <strong>M.Sc. Computer Science</strong>.
          </p>
          <p>
            I possess a strong foundation in <strong>HTML, CSS, JavaScript, React.js, MongoDB, and SQL</strong>, complemented by hands-on <strong>Python</strong> and data science project experience.
          </p>
          <p>
            Passionate about building responsive, user-friendly web applications and solving real-world problems through clean, efficient code. A quick learner with strong analytical, problem-solving, and teamwork skills seeking to contribute and grow as a Software Developer.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem', fontSize: '0.95rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-main)', fontWeight: 600 }}>
              <MapPin size={16} color="var(--primary)" /> Coimbatore, India
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-main)', fontWeight: 600 }}>
              <Phone size={16} color="var(--accent)" /> +91 7010957511
            </span>
          </div>
        </div>

        <div className="about-stats">
          <div className="glass-card stat-card">
            <div className="stat-number">M.Sc.</div>
            <div className="stat-label">Computer Science (Pursuing)</div>
          </div>
          <div className="glass-card stat-card">
            <div className="stat-number">77%</div>
            <div className="stat-label">B.Sc. CS (AI) Aggregate</div>
          </div>
          <div className="glass-card stat-card">
            <div className="stat-number">2+</div>
            <div className="stat-label">AI & ML Projects</div>
          </div>
          <div className="glass-card stat-card">
            <div className="stat-number">15+</div>
            <div className="stat-label">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
}
