/* ==========================================================================
   Dark Kinetic & 3D Interactive Cybertech JavaScript Engine
   Developer Portfolio for Dineshkumar S
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Init All Modules
  initCustomCursor();
  initThreeJSCanvas();
  initAudioSystem();
  initNavigation();
  initSkillBars();
  initSkillFilter();
  initProjectModals();
  initResumeModal();
  initContactForm();
  initScrollAnimations();
  initPhotoLightbox();
});

/* --------------------------------------------------------------------------
   1. Custom Cursor Follower
   -------------------------------------------------------------------------- */
function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  const follower = document.getElementById('cursor-follower');
  if (!cursor || !follower) return;

  let mouseX = -100, mouseY = -100;
  let followerX = -100, followerY = -100;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  const hoverElements = document.querySelectorAll('a, button, .glass-card, .filter-btn, .skill-card');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-active'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-active'));
  });
}

/* --------------------------------------------------------------------------
   2. Three.js 3D Kinetic Geometry Visualizer
   -------------------------------------------------------------------------- */
let threeScene, threeCamera, threeRenderer;
let torusKnot, particleSystem, wireframeIcosahedron;

function initThreeJSCanvas() {
  const canvas = document.getElementById('canvas-3d');
  if (!canvas || typeof THREE === 'undefined') return;

  threeScene = new THREE.Scene();
  threeScene.fog = new THREE.FogExp2(0x060608, 0.015);

  threeCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  threeCamera.position.z = 25;

  threeRenderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  threeRenderer.setSize(window.innerWidth, window.innerHeight);
  threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // 1. Cyber Torus Knot Wireframe
  const torusGeo = new THREE.TorusKnotGeometry(7, 2.2, 120, 16);
  const torusMat = new THREE.MeshBasicMaterial({
    color: 0x8b5cf6,
    wireframe: true,
    transparent: true,
    opacity: 0.22
  });
  torusKnot = new THREE.Mesh(torusGeo, torusMat);
  torusKnot.position.set(12, 2, -5);
  threeScene.add(torusKnot);

  // 2. Central Wireframe Icosahedron
  const icoGeo = new THREE.IcosahedronGeometry(4, 1);
  const icoMat = new THREE.MeshBasicMaterial({
    color: 0x06b6d4,
    wireframe: true,
    transparent: true,
    opacity: 0.35
  });
  wireframeIcosahedron = new THREE.Mesh(icoGeo, icoMat);
  wireframeIcosahedron.position.set(-14, -6, -2);
  threeScene.add(wireframeIcosahedron);

  // 3. Glowing Particle Galaxy Field
  const particleCount = 1200;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const colorP1 = new THREE.Color(0x8b5cf6);
  const colorP2 = new THREE.Color(0x06b6d4);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 80;
    positions[i + 1] = (Math.random() - 0.5) * 80;
    positions[i + 2] = (Math.random() - 0.5) * 60;

    const mixedColor = Math.random() > 0.5 ? colorP1 : colorP2;
    colors[i] = mixedColor.r;
    colors[i + 1] = mixedColor.g;
    colors[i + 2] = mixedColor.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const pMaterial = new THREE.PointsMaterial({
    size: 0.2,
    vertexColors: true,
    transparent: true,
    opacity: 0.65
  });

  particleSystem = new THREE.Points(geometry, pMaterial);
  threeScene.add(particleSystem);

  // Parallax Mouse Motion
  let targetX = 0, targetY = 0;
  window.addEventListener('mousemove', (e) => {
    targetX = (e.clientX - window.innerWidth / 2) * 0.0008;
    targetY = (e.clientY - window.innerHeight / 2) * 0.0008;
  });

  // Animation Loop
  function renderLoop() {
    requestAnimationFrame(renderLoop);

    torusKnot.rotation.x += 0.003;
    torusKnot.rotation.y += 0.005;

    wireframeIcosahedron.rotation.x -= 0.004;
    wireframeIcosahedron.rotation.y += 0.004;

    particleSystem.rotation.y += 0.0008;
    particleSystem.rotation.x += 0.0004;

    threeCamera.position.x += (targetX * 10 - threeCamera.position.x) * 0.05;
    threeCamera.position.y += (-targetY * 10 - threeCamera.position.y) * 0.05;
    threeCamera.lookAt(threeScene.position);

    threeRenderer.render(threeScene, threeCamera);
  }

  renderLoop();

  window.addEventListener('resize', () => {
    threeCamera.aspect = window.innerWidth / window.innerHeight;
    threeCamera.updateProjectionMatrix();
    threeRenderer.setSize(window.innerWidth, window.innerHeight);
  });
}

/* --------------------------------------------------------------------------
   3. Web Audio Synthesizer Sound Effects
   -------------------------------------------------------------------------- */
let audioCtx = null;
let soundEnabled = false;

function initAudioSystem() {
  const soundBtn = document.getElementById('sound-toggle-btn');
  if (!soundBtn) return;

  soundBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    if (soundEnabled && !audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    soundBtn.style.color = soundEnabled ? 'var(--accent)' : 'var(--text-muted)';
    soundBtn.setAttribute('aria-label', soundEnabled ? 'Sound Muted' : 'Sound Enabled');
    playBlip(soundEnabled ? 880 : 330);
  });

  document.querySelectorAll('button, a, .filter-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      if (soundEnabled && audioCtx) playHoverSound();
    });
    btn.addEventListener('click', () => {
      if (soundEnabled && audioCtx) playBlip(600);
    });
  });
}

function playHoverSound() {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(440, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.04);
  gain.gain.setValueAtTime(0.02, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.04);
}

function playBlip(freq = 600) {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.08);
}

/* --------------------------------------------------------------------------
   4. Navigation & ScrollSpy
   -------------------------------------------------------------------------- */
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const menuToggle = document.getElementById('menu-toggle-btn');
  const navLinksContainer = document.getElementById('nav-links');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // ScrollSpy
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    const dockItems = document.querySelectorAll('.dock-item[href^="#"]');

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });

    dockItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${currentSectionId}`) {
        item.classList.add('active');
      }
    });
  });

  if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   5. Interactive Skill Progress Bars
   -------------------------------------------------------------------------- */
function initSkillBars() {
  const skillCards = document.querySelectorAll('.skill-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fillBar = entry.target.querySelector('.skill-bar-fill');
        if (fillBar) {
          const targetPct = fillBar.getAttribute('data-pct') || '85%';
          fillBar.style.width = targetPct;
        }
      }
    });
  }, { threshold: 0.2 });

  skillCards.forEach(card => observer.observe(card));
}

/* --------------------------------------------------------------------------
   6. Interactive Skills Category Filter
   -------------------------------------------------------------------------- */
function initSkillFilter() {
  const filterBtns = document.querySelectorAll('.skills-filter-nav .filter-btn');
  const skillCards = document.querySelectorAll('.skills-grid .skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.85)';
          setTimeout(() => {
            if (card.style.opacity === '0') card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   7. Project Preview Modals
   -------------------------------------------------------------------------- */
function initProjectModals() {
  const modalOverlay = document.getElementById('project-modal');
  if (!modalOverlay) return;

  const closeBtn = modalOverlay.querySelector('.modal-close-btn');
  const modalTitle = modalOverlay.querySelector('#modal-project-title');
  const modalDesc = modalOverlay.querySelector('#modal-project-desc');
  const modalTags = modalOverlay.querySelector('#modal-project-tags');

  document.querySelectorAll('.open-project-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = btn.getAttribute('data-title') || 'Project Overview';
      const desc = btn.getAttribute('data-desc') || 'Project details...';
      const tags = (btn.getAttribute('data-tags') || '').split(',');

      modalTitle.textContent = title;
      modalDesc.textContent = desc;

      modalTags.innerHTML = tags.map(t => `<span class="tag-pill">${t.trim()}</span>`).join('');

      modalOverlay.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modalOverlay.classList.remove('active'));
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove('active');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modalOverlay.classList.remove('active');
  });
}

/* --------------------------------------------------------------------------
   8. Resume Viewer Modal & Download Handler
   -------------------------------------------------------------------------- */
function initResumeModal() {
  const resumeBtn = document.getElementById('download-resume-btn');
  const modalOverlay = document.getElementById('resume-modal');
  if (!modalOverlay) return;

  const closeBtn = modalOverlay.querySelector('.modal-close-btn');

  if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
      modalOverlay.classList.add('active');
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modalOverlay.classList.remove('active'));
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove('active');
  });
}

/* --------------------------------------------------------------------------
   9. Contact Form & Action Buttons
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const copyEmailBtn = document.getElementById('copy-email-btn');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = `
        <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg>
        Sending...
      `;

      setTimeout(() => {
        submitBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
          Message Sent Successfully!
        `;
        form.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
        }, 4000);
      }, 1200);
    });
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('dineshkumar13042005@gmail.com');
      const tooltip = copyEmailBtn.querySelector('.copy-tooltip');
      if (tooltip) {
        tooltip.textContent = 'Copied!';
        setTimeout(() => tooltip.textContent = 'Copy Email', 2000);
      }
    });
  }
}

/* --------------------------------------------------------------------------
   10. Intersection Scroll Reveal Animations
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.glass-card, .section-header, .timeline-item, .hero-content');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(25px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
  });
}

/* --------------------------------------------------------------------------
   11. High-Resolution Photo Lightbox Modal
   -------------------------------------------------------------------------- */
function initPhotoLightbox() {
  const modal = document.getElementById('photo-lightbox-modal');
  const overlay = document.getElementById('photo-modal-overlay');
  const closeBtn = document.getElementById('photo-modal-close');
  const triggers = [
    document.getElementById('hero-photo-trigger'),
    document.getElementById('about-photo-trigger')
  ].filter(Boolean);

  if (!modal) return;

  function openPhotoModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closePhotoModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  triggers.forEach(trigger => {
    trigger.addEventListener('click', openPhotoModal);
  });

  if (overlay) overlay.addEventListener('click', closePhotoModal);
  if (closeBtn) closeBtn.addEventListener('click', closePhotoModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closePhotoModal();
    }
  });
}

