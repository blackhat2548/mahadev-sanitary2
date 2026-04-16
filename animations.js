/* ==========================================================================
   MAHADEV SANITARY — GSAP ANIMATIONS
   Hero split text, timeline progress, scroll reveals
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not loaded');
    return;
  }

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  /* ---------- HERO HEADLINE WORD-BY-WORD ANIMATION ---------- */
  const heroHeadline = document.querySelector('.hero-headline');
  if (heroHeadline) {
    const text = heroHeadline.textContent.trim();
    const words = text.split(' ');

    heroHeadline.innerHTML = words.map(word => {
      // Keep the accent span if word contains special class
      return `<span class="hero-word"><span>${word}</span></span>`;
    }).join(' ');

    const wordSpans = heroHeadline.querySelectorAll('.hero-word > span');
    gsap.to(wordSpans, {
      y: 0,
      duration: 0.9,
      stagger: 0.08,
      ease: 'power3.out',
      delay: 0.2,
    });
  }

  /* ---------- HERO SUB-HEADLINE FADE UP ---------- */
  const heroSubtext = document.querySelector('.hero-subtext');
  if (heroSubtext) {
    gsap.to(heroSubtext, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      delay: 0.9,
      ease: 'power2.out',
    });
  }

  /* ---------- HERO CTAs SLIDE UP ---------- */
  const heroCtas = document.querySelectorAll('.hero-cta');
  if (heroCtas.length > 0) {
    gsap.to(heroCtas, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.15,
      delay: 1.2,
      ease: 'back.out(1.4)',
    });
  }

  /* ---------- HERO BADGE / OTHER ELEMENTS ---------- */
  const heroBadge = document.querySelector('.hero-badge');
  if (heroBadge) {
    gsap.from(heroBadge, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      delay: 0.1,
      ease: 'power2.out',
    });
  }

  /* ---------- PAGE HERO (inner pages) ---------- */
  const pageHeroTitle = document.querySelector('.page-hero h1');
  if (pageHeroTitle) {
    gsap.from(pageHeroTitle, {
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: 'power3.out',
    });
  }

  const pageHeroBc = document.querySelector('.breadcrumb');
  if (pageHeroBc) {
    gsap.from(pageHeroBc, {
      opacity: 0,
      y: 20,
      duration: 0.7,
      delay: 0.3,
      ease: 'power2.out',
    });
  }

  /* ---------- CONSULT HERO ---------- */
  const consultHeroTitle = document.querySelector('.consult-hero h1');
  if (consultHeroTitle) {
    const text = consultHeroTitle.textContent.trim();
    const words = text.split(' ');

    consultHeroTitle.innerHTML = words.map(word =>
      `<span class="hero-word"><span>${word}</span></span>`
    ).join(' ');

    const wordSpans = consultHeroTitle.querySelectorAll('.hero-word > span');
    gsap.to(wordSpans, {
      y: 0,
      duration: 0.9,
      stagger: 0.08,
      ease: 'power3.out',
      delay: 0.15,
    });
  }

  /* ---------- TIMELINE PROGRESS BAR (Consultancy page) ---------- */
  if (typeof ScrollTrigger !== 'undefined') {
    const timeline = document.querySelector('.timeline');
    const timelineProgress = document.querySelector('.timeline-progress');
    const timelineSteps = document.querySelectorAll('.timeline-step');

    if (timeline && timelineProgress && timelineSteps.length > 0) {
      ScrollTrigger.create({
        trigger: timeline,
        start: 'top 70%',
        once: true,
        onEnter: () => {
          // Progress line grows
          gsap.to(timelineProgress, {
            width: '80%',
            duration: 2,
            ease: 'power2.inOut',
          });

          // Steps light up one by one
          timelineSteps.forEach((step, i) => {
            gsap.delayedCall(i * 0.4, () => step.classList.add('active'));
          });
        }
      });
    }

    /* ---------- SCROLL REVEALS FOR SECTIONS ---------- */
    gsap.utils.toArray('.gsap-reveal').forEach(el => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power2.out',
      });
    });

    /* ---------- SECTION HEADINGS (gentle reveal) ---------- */
    gsap.utils.toArray('.section-head').forEach(head => {
      gsap.from(head.children, {
        scrollTrigger: {
          trigger: head,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      });
    });
  }
});
