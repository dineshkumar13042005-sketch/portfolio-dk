import React, { useState } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';

export function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <button className="logo" onClick={() => handleNavClick('home')}>
          <span className="logo-dot"></span>
          Dineshkumar S
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <a
            href="https://wa.me/917010957511"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: '0.5rem 1rem', fontSize: '0.88rem' }}
          >
            <MessageSquare size={16} />
            WhatsApp
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
