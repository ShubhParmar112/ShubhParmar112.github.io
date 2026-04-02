/* ============================================
   SHUBH PARMAR — PORTFOLIO SCRIPTS
   Particles, Counters, Modals, Scroll FX
   ============================================ */

// ══════════════════════════════════════════
// DATA
// ══════════════════════════════════════════
const projectDetails = {
  fwd: {
    title: "HarvestHub",
    description: "HarvestHub is an online grocery platform offering fresh produce, dairy, grains, and more. Built with HTML, CSS, JavaScript and PHP, it features user login, dynamic product listings, cart management, and secure checkout. Designed for simplicity and efficiency, it makes grocery shopping fast and convenient.",
    image: "HarvestHub_HomePage2.png",
    githubLink: "https://github.com/ShubhParmar112/HarvestHub",
    downloadLink: "FWD_PROJECT.zip"
  },
  techproj: {
    title: "FusionHub",
    description: "FusionHub is a dynamic restaurant website that blends global culinary styles, offering users a visually appealing and user-friendly platform to explore diverse menus and experiences. Developed using HTML, CSS, and JavaScript, it features interactive navigation, responsive design, and elegant layouts that enhance user engagement while highlighting the brand's unique fusion food concept.",
    image: "FusionHub_HomePage2.png",
    githubLink: "https://github.com/ShubhParmar112/FusionHub",
    downloadLink: "FusionHub.zip"
  },
  dsa: {
    title: "Train Reservation System",
    description: "The Train Reservation System is a console-based C++ project using N-ary trees to represent coach and seat hierarchies. It enables booking, availability checks, and reservation management through efficient tree traversal. Built without OOP, it focuses on data structures and uses file handling for persistent storage, making it a practical example of applying tree logic in real-world systems.",
    image: "TRS_Page2.png",
    githubLink: "https://github.com/ShubhParmar112/Train-Reservation-System",
    downloadLink: "Train-Reservation-System.zip"
  },
  mad: {
    title: "HarvestHub — App",
    description: "The HarvestHub-App is a grocery platform offering fresh produce, dairy, grains, and more. Built with XML, Java and Firebase, it features user login, dynamic product listings, cart management, and secure checkout. Designed for simplicity and efficiency, it makes grocery shopping fast and convenient.",
    image: "try_harvesthub.png",
    githubLink: "https://github.com/ShubhParmar112/HarvestHub_AppDev",
    downloadLink: "HarvestHub_App Dev.zip"
  },
  dbms: {
    title: "The Lunar Cradle",
    description: "This Hotel Management System project uses HTML, CSS, and JavaScript for the frontend, Python for backend logic, and SQL for managing the database. It handles guest details, room bookings, payments, employee records, utility and service usage, and restaurant operations. Guests can submit reviews, make payments, and access amenities like laundry and spa.",
    image: "TLC_HomePage2.png",
    githubLink: "https://github.com/ShubhParmar112/The-Lunar-Cradle",
    downloadLink: "DBMS Project.zip"
  },
  tableau: {
    title: "SkyGrow E-Comm Store Analytics",
    description: "The SkyGrow E-commerce Dashboard provides insights into state-wise sales, top customers, and category performance. It highlights regional profit trends, top buyers, and the most profitable and underperforming sub-categories across clothing, electronics, and furniture.",
    image: "SkyGrow E-Comm Dashboard.png",
    githubLink: "https://github.com/ShubhParmar112/SkyGrow-E-Comm-Analytics",
    downloadLink: "SkyGrow E-Comm Dashboard.zip"
  },
  metal_classifier: {
    title: "Audio-Based Metal Classifier",
    description: "Audio-based metal classification system using self-collected sound data, where extracted features are processed through a 1D CNN model to identify different metals, highlighting acoustic patterns, model accuracy, and performance across varied recording conditions and material types.",
    image: "Metal classifier_Page2.png",
    githubLink: "https://github.com/ShubhParmar112/German-Project",
    downloadLink: "MetalClassifier.zip"
  }
  ,
  ravdess: {
    title: "Evaluating Emotional Speech Accents Through MLP Classifier and Multivariate Statistical Analysis",
    description: "Compared emotional expression in speech between North American and Indian accents using audio features like MFCC, chroma, and mel-spectrogram. Statistical methods including ANOVA, MANOVA, and t-tests are applied to identify significant features influencing emotions, while a neural network classifier evaluates recognition accuracy across accents, revealing which accent conveys emotions more distinctly through speech patterns.",
    image: "idsa_ssdi_project2.png",
    githubLink: "#",
    downloadLink: "#"
  }
};

const researchDetails = {
  mpcda: {
    title: "Refinement of the Existing Mid-Point Circle Generating Algorithm",
    description: "The refinement of the Midpoint Circle Algorithm improves efficiency by using integer calculations and exploiting eight-way symmetry. This reduces computation time and increases accuracy, producing smoother circles. It's ideal for real-time graphics where speed and precision matter.",
    image: "MPCDA.png",
    githubLink: "https://github.com/ShubhParmar112/Mid-Point-Circle-Generating-Algorithm",
    downloadLink: "ICAET2025_Paper058.zip",
    publicationLink: "https://ieeexplore.ieee.org/abstract/document/10932192"
  },
  mmp: {
    title: "A Middle Man's Path: An Innovative Approach to Transportation Logistics",
    description: "The Middle Man's Path is a logistics strategy using intermediaries or hubs to optimize shipments between suppliers and customers. By consolidating loads and managing transfers, it reduces costs, improves efficiency, and enhances flexibility. This approach helps handle uneven demand and complex routes, leading to faster deliveries and better resource use in supply chains.",
    image: "MMP.png",
    githubLink: "https://github.com/ShubhParmar112/The-Middle-Man-s-Path--OM-Research-",
    downloadLink: "OM Research.zip",
    publicationLink: "https://ieeexplore.ieee.org/document/11294751"
  },
  /*vc4: {
    title: "ASCII-Driven Vernam Cipher: A Modern Variant",
    description: "Developed a modified Vernam cipher that enhances security using a custom method based on ASCII manipulation of plaintext and key characters. Unlike the traditional version, it introduces a structured, reversible process that resists brute-force attacks while remaining simple to implement. This approach retains key dependency but adapts it for practical, modern encryption needs.",
    image: "research3-image.png",
    githubLink: "https://github.com/ShubhParmar112/data-privacy",
    downloadLink: "data-privacy.zip"
  },*/
  idsa_plus_ssdi: {
    title: "Emotion Expression: North American vs Indian Accents",
    description: "This study compares emotional expression in speech between North American and Indian accents using audio features like MFCC, chroma, and mel-spectrogram. Statistical methods including ANOVA, MANOVA, and t-tests are applied to identify significant features influencing emotions, while a neural network classifier evaluates recognition accuracy across accents, revealing which accent conveys emotions more distinctly through speech patterns.",
    image: "idsa_ssdi_research2.png",
    githubLink: "#",
    downloadLink: "#",
    publicationLink: "#"
  },
  btc: {
    title: "A Compendium Of The Latest Erudite Analyses Of The Shifting Intricacies Within The Bitcoin Ecosystem",
    description: "This research reviews recent Bitcoin developments, including technological improvements, scalability solutions, and security updates. It covers innovations like the Lightning Network, regulatory changes, and environmental impacts of mining. The study highlights Bitcoin's growing role in finance and its future potential as a decentralized digital currency in a changing global economy.",
    image: "bitcoin_new (1).png",
    githubLink: "#",
    downloadLink: "#",
    publicationLink: "https://theaspd.com/index.php/ijes/article/view/4713"
  }
};

// ══════════════════════════════════════════
// PARTICLE CANVAS
// ══════════════════════════════════════════
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.8 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.4 + 0.1;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }
    draw() {
      ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function create() {
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 14000), 100);
    particles = [];
    for (let i = 0; i < count; i++) particles.push(new Particle());
  }

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          ctx.strokeStyle = `rgba(99, 102, 241, ${(1 - dist / 140) * 0.12})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => { resize(); create(); });
  resize();
  create();
  animate();
})();

// ══════════════════════════════════════════
// NAVBAR SCROLL + SCROLL SPY
// ══════════════════════════════════════════
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const links = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    const scrollPos = window.scrollY + 150;
    sections.forEach(section => {
      const id = section.getAttribute('id');
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        links.forEach(l => {
          l.classList.remove('active');
          if (l.getAttribute('href') === `#${id}`) l.classList.add('active');
        });
      }
    });
  });
})();

// ══════════════════════════════════════════
// HAMBURGER MENU
// ══════════════════════════════════════════
(function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    }
  });
})();

// ══════════════════════════════════════════
// SCROLL REVEAL (Intersection Observer)
// ══════════════════════════════════════════
(function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('revealed');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

// ══════════════════════════════════════════
// STAT COUNTER ANIMATION
// ══════════════════════════════════════════
(function initCounters() {
  const counters = document.querySelectorAll('.counter-value');
  let animated = false;

  function run() {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 2000;
      const start = performance.now();
      function step(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        counter.textContent = Math.floor(target * eased) + '+';
        if (progress < 1) requestAnimationFrame(step);
        else counter.textContent = target + '+';
      }
      requestAnimationFrame(step);
    });
  }

  const target = document.querySelector('.hero-counters');
  if (target) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animated) { animated = true; run(); }
    }, { threshold: 0.5 });
    observer.observe(target);
  }
})();

// ══════════════════════════════════════════
// PROJECT MODAL
// ══════════════════════════════════════════
let currentProjectDownload = '';

(function initProjectModals() {
  const cards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('projectModalClose');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-project');
      const p = projectDetails[id];
      if (!p) return;
      document.getElementById('modalImage').src = p.image;
      document.getElementById('modalImage').alt = p.title;
      document.getElementById('modalTitle').textContent = p.title;
      document.getElementById('modalDescription').textContent = p.description;
      document.getElementById('modalGithubLink').href = p.githubLink;
      document.getElementById('modalGithubLink').style.display = (p.githubLink && p.githubLink !== '#') ? 'inline-flex' : 'none';
      document.getElementById('modalDownloadBtn').style.display = (p.downloadLink && p.downloadLink !== '#') ? 'inline-flex' : 'none';
      currentProjectDownload = p.downloadLink;
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn?.addEventListener('click', closeProjectModal);
  modal?.addEventListener('click', (e) => { if (e.target === modal) closeProjectModal(); });
})();

function closeProjectModal() {
  document.getElementById('projectModal')?.classList.remove('open');
  document.body.style.overflow = '';
}

function downloadProject() {
  if (currentProjectDownload && currentProjectDownload !== '#') {
    const a = document.createElement('a');
    a.href = currentProjectDownload;
    a.download = '';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

// ══════════════════════════════════════════
// RESEARCH MODAL
// ══════════════════════════════════════════
let currentResearchDownload = '';

(function initResearchModals() {
  const cards = document.querySelectorAll('.research-card');
  const modal = document.getElementById('researchModal');
  const closeBtn = document.getElementById('researchModalClose');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-research');
      const r = researchDetails[id];
      if (!r) return;
      document.getElementById('researchModalImage').src = r.image;
      document.getElementById('researchModalImage').alt = r.title;
      document.getElementById('researchModalTitle').textContent = r.title;
      document.getElementById('researchModalDescription').textContent = r.description;
      document.getElementById('researchModalGithubLink').href = r.githubLink;
      const githubBtn = document.getElementById('researchModalGithubLink');
      githubBtn.style.display = (r.githubLink && r.githubLink !== '#') ? 'inline-flex' : 'none';

      const pubLink = document.getElementById('researchModalPubLink');
      pubLink.href = r.publicationLink || '#';
      pubLink.style.display = (r.publicationLink && r.publicationLink !== '#') ? 'inline-flex' : 'none';

      const dlBtn = document.getElementById('researchModalDownloadBtn');
      dlBtn.style.display = (r.downloadLink && r.downloadLink !== '#') ? 'inline-flex' : 'none';

      currentResearchDownload = r.downloadLink;
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn?.addEventListener('click', closeResearchModal);
  modal?.addEventListener('click', (e) => { if (e.target === modal) closeResearchModal(); });
})();

function closeResearchModal() {
  document.getElementById('researchModal')?.classList.remove('open');
  document.body.style.overflow = '';
}

function downloadResearch() {
  if (currentResearchDownload && currentResearchDownload !== '#') {
    const a = document.createElement('a');
    a.href = currentResearchDownload;
    a.download = '';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

// ══════════════════════════════════════════
// CONTACT FORM VALIDATION
// ══════════════════════════════════════════
async function validateForm() {
  const fields = { 'full-name': '', email: '', phone: '', message: '' };
  const fn = document.getElementById('full-name').value.trim();
  const em = document.getElementById('email').value.trim();
  const ph = document.getElementById('phone').value.trim();
  const msg = document.getElementById('message').value.trim();
  let valid = true;

  if (!fn) { fields['full-name'] = 'Full name is required'; valid = false; }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!em) { fields.email = 'Email is required'; valid = false; }
  else if (!emailPattern.test(em)) { fields.email = 'Please enter a valid email'; valid = false; }

  const phonePattern = /^\d{10}$/;
  if (!ph) { fields.phone = 'Phone number is required'; valid = false; }
  else if (!phonePattern.test(ph)) { fields.phone = 'Enter a valid 10-digit phone number'; valid = false; }

  if (!msg) { fields.message = 'Message is required'; valid = false; }

  Object.keys(fields).forEach(k => {
    const el = document.getElementById(`${k}-error`);
    if (fields[k]) { el.textContent = fields[k]; el.style.display = 'block'; }
    else { el.style.display = 'none'; }
  });

  if (!valid) return;

  // Show loading state
  const btn = document.getElementById('submit-btn');
  const btnText = btn.querySelector('.btn-submit-text');
  const btnLoading = btn.querySelector('.btn-submit-loading');
  btn.disabled = true;
  btnText.style.display = 'none';
  btnLoading.style.display = 'inline-flex';

  try {
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      form.reset();
      showSuccessModal('Thank you! Your message has been sent successfully. I\'ll get back to you soon.');
    } else {
      showSuccessModal('Oops! Something went wrong. Please try again or email me directly.');
    }
  } catch (error) {
    showSuccessModal('Network error. Please check your connection and try again.');
  } finally {
    // Reset button state
    btn.disabled = false;
    btnText.style.display = 'inline-flex';
    btnLoading.style.display = 'none';
  }
}

// ══════════════════════════════════════════
// SUCCESS MODAL
// ══════════════════════════════════════════
function showSuccessModal(msg) {
  const modal = document.getElementById('successModal');
  document.getElementById('success-message').textContent = msg;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

(function initSuccessModal() {
  const modal = document.getElementById('successModal');
  const closeBtn = document.getElementById('successModalClose');
  const close = () => { modal.classList.remove('open'); document.body.style.overflow = ''; };
  closeBtn?.addEventListener('click', close);
  modal?.addEventListener('click', (e) => { if (e.target === modal) close(); });
})();

// ══════════════════════════════════════════
// BACK TO TOP
// ══════════════════════════════════════════
(function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400));
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

// ══════════════════════════════════════════
// KEYBOARD (Escape closes modals)
// ══════════════════════════════════════════
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
    closeResearchModal();
    const s = document.getElementById('successModal');
    if (s?.classList.contains('open')) { s.classList.remove('open'); document.body.style.overflow = ''; }
  }
});

// ══════════════════════════════════════════
// SMOOTH SCROLL
// ══════════════════════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    // Skip bare '#' or external URLs
    if (!href || href === '#' || !href.startsWith('#')) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
