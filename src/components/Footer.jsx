import React from 'react';
import { MessageSquare } from 'lucide-react';

export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p className="footer-text">&copy; 2026 Dineshkumar S. All rights reserved.</p>
        <div className="social-links">
          <a
            href="https://wa.me/917010957511"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="WhatsApp"
            style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}
          >
            <MessageSquare size={18} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
