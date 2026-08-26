import { generateResumePdf } from './utils/resumePdf.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuToggleBtn = document.getElementById('menu-toggle-btn');
  const navLinks = document.getElementById('nav-links');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  if (menuToggleBtn && navLinks) {
    menuToggleBtn.addEventListener('click', () => {
      const isActive = navLinks.classList.toggle('active');
      if (menuIconOpen && menuIconClose) {
        menuIconOpen.style.display = isActive ? 'none' : 'block';
        menuIconClose.style.display = isActive ? 'block' : 'none';
      }
    });
  }

  // Close mobile menu on nav link click
  const navLinkEls = document.querySelectorAll('.nav-link');
  navLinkEls.forEach((link) => {
    link.addEventListener('click', () => {
      if (navLinks) navLinks.classList.remove('active');
      if (menuIconOpen && menuIconClose) {
        menuIconOpen.style.display = 'block';
        menuIconClose.style.display = 'none';
      }
    });
  });

  // 2. Active Tab Scroll Tracker
  const sections = ['home', 'about', 'education', 'skills', 'projects', 'certifications', 'contact'];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 200;

    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          navLinkEls.forEach((link) => {
            if (link.getAttribute('data-nav') === sectionId) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
          break;
        }
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // 3. Resume Download Button Listener
  const downloadResumeBtn = document.getElementById('download-resume-btn');
  if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      generateResumePdf();
    });
  }

  // 4. Contact Form Handler
  const contactForm = document.getElementById('contact-form');
  const alertBox = document.getElementById('contact-alert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const subjectInput = document.getElementById('form-subject');
      const messageInput = document.getElementById('form-message');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !message) {
        showAlert('error', 'Please fill in all required fields.');
        return;
      }

      showAlert('success', `Thank you, ${name}! Your message has been sent successfully. I will get back to you soon.`);
      contactForm.reset();

      setTimeout(() => {
        if (alertBox) alertBox.style.display = 'none';
      }, 5000);
    });
  }

  function showAlert(type, text) {
    if (!alertBox) return;
    alertBox.className = `alert-box ${type === 'success' ? 'alert-success' : 'alert-error'}`;
    alertBox.textContent = text;
    alertBox.style.display = 'block';
  }
});
