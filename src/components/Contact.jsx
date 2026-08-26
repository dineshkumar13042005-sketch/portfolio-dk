import React, { useState } from 'react';
import { Mail, MapPin, Phone, MessageSquare, Send, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [alert, setAlert] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setAlert({ type: 'error', text: 'Please fill in all required fields.' });
      return;
    }

    setAlert({ type: 'success', text: `Thank you, ${formData.name}! Your message has been sent successfully. I will get back to you soon.` });
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  return (
    <section className="container" id="contact">
      <div className="section-header">
        <h1 className="section-title">Get In <span className="gradient-text">Touch</span></h1>
        <p className="section-subtitle">Have a project, a question, or want to collaborate? Contact me directly or send a message.</p>
      </div>

      <div className="contact-layout">
        {/* Contact Details */}
        <div className="contact-info">
          <div className="glass-card info-item">
            <div className="info-icon">
              <Phone size={22} />
            </div>
            <div>
              <div className="info-title">Phone Call</div>
              <div className="info-value">
                <a href="tel:+917010957511" style={{ color: 'inherit', textDecoration: 'none' }}>+91 7010957511</a>
              </div>
            </div>
          </div>

          <div
            className="glass-card info-item"
            style={{ borderColor: 'rgba(34, 197, 94, 0.3)', background: 'rgba(34, 197, 94, 0.05)' }}
          >
            <div
              className="info-icon"
              style={{ color: '#22c55e', background: 'rgba(34, 197, 94, 0.15)', borderColor: 'rgba(34, 197, 94, 0.3)' }}
            >
              <MessageSquare size={22} />
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <div className="info-title" style={{ color: '#22c55e' }}>WhatsApp Chat</div>
                <div className="info-value">+91 7010957511</div>
              </div>
              <a
                href="https://wa.me/917010957511"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ background: '#22c55e', color: '#ffffff', padding: '0.4rem 0.9rem', fontSize: '0.85rem', borderRadius: '20px' }}
              >
                Chat Now &rarr;
              </a>
            </div>
          </div>

          <div className="glass-card info-item">
            <div className="info-icon">
              <Mail size={22} />
            </div>
            <div>
              <div className="info-title">Email Address</div>
              <div className="info-value">
                <a href="mailto:dineshkumar13042005@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                  dineshkumar13042005@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card info-item">
            <div className="info-icon">
              <MapPin size={22} />
            </div>
            <div>
              <div className="info-title">Location</div>
              <div className="info-value">Coimbatore, India</div>
            </div>
          </div>

          <div className="glass-card info-item">
            <div className="info-icon">
              <Clock size={22} />
            </div>
            <div>
              <div className="info-title">Availability</div>
              <div className="info-value">Open for Freelance & Full-time</div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-card">
          {alert && (
            <div className={`alert-box ${alert.type === 'success' ? 'alert-success' : 'alert-error'}`}>
              {alert.text}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your Name *</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input
                type="email"
                className="form-input"
                placeholder="e.g. john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                type="text"
                className="form-input"
                placeholder="Project Inquiry / Opportunity"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Your Message *</label>
              <textarea
                className="form-textarea"
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
