import React from 'react';
import { ArrowRight, Download, MessageSquare, User } from 'lucide-react';
import { generateResumePdf } from '../utils/resumePdf';

export function Hero({ setActiveTab }) {
  const scrollToContact = () => {
    setActiveTab('contact');
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="container hero" id="home">
      <div className="hero-content">
        <div className="badge">
          <span className="badge-dot"></span>
          Available for Software & Front-End Roles
        </div>
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Dineshkumar S</span>
        </h1>
        <p className="hero-subtitle">
          Front-End Developer | AI & Python. Currently studying M.Sc. Computer Science, passionate about building responsive web applications and solving real-world problems through code.
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={scrollToContact}>
            Contact Me
            <ArrowRight size={18} />
          </button>
          
          <a
            href="https://wa.me/917010957511"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageSquare size={18} />
            WhatsApp
          </a>

          <button className="btn btn-outline" onClick={generateResumePdf}>
            <Download size={18} />
            Download Resume
          </button>
        </div>
      </div>

      <div className="hero-avatar-container">
        <div className="avatar-frame">
          <div className="avatar-icon-box">
            <User size={80} />
            <span className="avatar-label">Front-End & AI Developer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
