/* AI PM Portfolio — Interactions */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Nav scroll state ---------- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Flip cards ---------- */
  document.querySelectorAll('.flip-card').forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    });
  });

  /* ---------- Danmu seamless loop ---------- */
  document.querySelectorAll('.danmu-track').forEach((track) => {
    // Duplicate children until track is wide enough to cover full animation cycle
    const original = Array.from(track.children);
    if (!original.length) return;

    const measureWidth = () => {
      let w = 0;
      original.forEach((el) => {
        const rect = el.getBoundingClientRect();
        w += rect.width + 20; // gap
      });
      return w;
    };

    const buildSet = () => {
      original.forEach((el) => {
        const clone = el.cloneNode(true);
        track.appendChild(clone);
      });
    };

    let totalWidth = measureWidth();
    // Want at least 2 full cycles in DOM for smooth infinite scroll
    while (totalWidth < window.innerWidth * 2.5) {
      buildSet();
      totalWidth += measureWidth();
    }

    // Pause on hover
    const stage = track.closest('.danmu-stage');
    if (stage && !prefersReducedMotion) {
      stage.addEventListener('mouseenter', () => {
        track.style.animationPlayState = 'paused';
      });
      stage.addEventListener('mouseleave', () => {
        track.style.animationPlayState = 'running';
      });
    }
  });

  /* ---------- Scroll reveal ---------- */
  if (!prefersReducedMotion) {
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
  }

  /* ---------- Smooth anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
    });
  });

  /* ---------- Growth filter ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const growthCards = document.querySelectorAll('.growth-card');
  if (filterBtns.length && growthCards.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        growthCards.forEach((card) => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.classList.remove('hidden');
            card.classList.add('visible');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  /* ---------- Hero particles ---------- */
  const particleContainer = document.querySelector('.particles');
  if (particleContainer && !prefersReducedMotion) {
    const particleCount = window.innerWidth < 768 ? 40 : 90;
    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = Math.random() * 100 + '%';
      p.style.animationDelay = Math.random() * 4 + 's';
      p.style.animationDuration = 3 + Math.random() * 5 + 's';
      particleContainer.appendChild(p);
    }
  }
})();
