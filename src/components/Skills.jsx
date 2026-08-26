import React from 'react';
import { Code, Database, FileCode, Layers, Layout, Terminal } from 'lucide-react';

export function Skills() {
  const skillList = [
    { name: 'Python', icon: <Terminal size={24} /> },
    { name: 'HTML5', icon: <Code size={24} /> },
    { name: 'CSS3', icon: <Layout size={24} /> },
    { name: 'JavaScript', icon: <FileCode size={24} /> },
    { name: 'React.js', icon: <Layers size={24} /> },
    { name: 'SQL (Basic)', icon: <Database size={24} /> },
    { name: 'MongoDB', icon: <Database size={24} /> },
    { name: 'Jupyter Notebook', icon: <Terminal size={24} /> },
  ];

  return (
    <section className="container" id="skills">
      <div className="section-header">
        <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
        <p className="section-subtitle">Programming languages, frameworks, and developer tools</p>
      </div>

      <div className="skills-grid">
        {skillList.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">
              {skill.icon}
            </div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
