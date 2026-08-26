import React from 'react';
import { Eye, Cpu } from 'lucide-react';

export function Projects() {
  const projectList = [
    {
      title: 'Driver Drowsiness Detection System',
      description: 'Built a real-time driver drowsiness detection system to improve road safety using Python, OpenCV, and facial landmark detection to track eye movements (Eye Aspect Ratio / EAR) and trigger alerts.',
      tags: ['Python', 'OpenCV', 'Facial Landmarks', 'Computer Vision'],
      icon: <Eye size={50} />,
      bg: 'linear-gradient(135deg, #1e1b4b 0%, #31104b 100%)',
    },
    {
      title: 'End-to-End ML Pipeline & Streamlit App',
      description: 'Developed a complete machine learning pipeline covering data preprocessing, feature engineering, model training, evaluation, and prediction with an interactive Streamlit UI deployment.',
      tags: ['Python', 'Machine Learning', 'Streamlit', 'Data Science'],
      icon: <Cpu size={50} />,
      bg: 'linear-gradient(135deg, #0f172a 0%, #0f766e 100%)',
    },
  ];

  return (
    <section className="container" id="projects">
      <div className="section-header">
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <p className="section-subtitle">Real-world AI, Machine Learning, and Computer Vision Applications</p>
      </div>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="glass-card project-card">
            <div className="project-thumb" style={{ background: project.bg }}>
              {project.icon}
            </div>
            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
