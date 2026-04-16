/* ==========================================================================
   MAHADEV SANITARY — MAIN JS
   Navbar, mobile menu, shared utilities
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  /* ---------- NAVBAR SCROLL EFFECT ---------- */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /* ---------- MOBILE MENU TOGGLE ---------- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-menu a');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- SMOOTH ANCHOR SCROLL ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const offset = 80;
          const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

  /* ---------- RIPPLE EFFECT FOR BUTTONS ---------- */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(255, 255, 255, 0.4)';
      ripple.style.pointerEvents = 'none';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'rippleAnim 0.6s ease-out';

      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';

      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  /* ---------- INJECT RIPPLE KEYFRAMES ---------- */
  if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = `
      @keyframes rippleAnim {
        to { transform: scale(2.5); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  /* ---------- SET ACTIVE NAV LINK ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---------- INITIALIZE AOS ---------- */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      delay: 0,
    });
  }

  /* ---------- INITIALIZE VANILLA TILT ---------- */
  if (typeof VanillaTilt !== 'undefined') {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    if (tiltElements.length > 0) {
      VanillaTilt.init(tiltElements, {
        max: 8,
        speed: 600,
        glare: true,
        'max-glare': 0.15,
        scale: 1.02,
      });
    }
  }

  /* ---------- MODAL HANDLING (universal) ---------- */
  const modal = document.getElementById('storeModal');
  if (modal) {
    const closeBtn = modal.querySelector('.modal-close');
    const backdrop = modal;

    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });
  }

  /* ---------- CONTACT FORM HANDLING ---------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = this.querySelector('[name="name"]').value.trim();
      const phone = this.querySelector('[name="phone"]').value.trim();

      if (!name || !phone) {
        showToast('Please fill in your name and phone number', 'error');
        return;
      }

      this.reset();
      showToast('✅ Thank you! We\'ll call you back soon.', 'success');
    });
  }

  /* ---------- COUNTER ANIMATION (GSAP) ---------- */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const suffix = counter.getAttribute('data-suffix') || '';
      const obj = { val: 0 };

      ScrollTrigger.create({
        trigger: counter,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: target,
            duration: 2.2,
            ease: 'power2.out',
            onUpdate: () => {
              const currentVal = Math.floor(obj.val);
              counter.textContent = currentVal.toLocaleString('en-IN') + suffix;
            }
          });
        }
      });
    });
  }
});

/* ---------- TOAST HELPER ---------- */
function showToast(message, type = 'success') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    toast.innerHTML = `
      <div class="toast-icon"><i class="fas fa-check"></i></div>
      <span class="toast-message"></span>
    `;
    document.body.appendChild(toast);
  }

  const msgEl = toast.querySelector('.toast-message');
  const iconEl = toast.querySelector('.toast-icon');
  msgEl.textContent = message;

  if (type === 'error') {
    iconEl.style.background = '#E53935';
    iconEl.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    iconEl.style.background = '#25D366';
    iconEl.innerHTML = '<i class="fas fa-check"></i>';
  }

  toast.classList.add('active');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('active');
  }, 3500);
}

/* ---------- OPEN STORE MODAL ---------- */
function openStoreModal() {
  const modal = document.getElementById('storeModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}
