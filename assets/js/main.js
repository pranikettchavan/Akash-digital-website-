/* ============================================================
   GROW MORE DIGITAL SOLUTIONS — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ─── DOM Ready ─────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    initNavbar();
    initMobileMenu();
    initScrollReveal();
    initCounters();
    initTypedText();
    initTestimonialSlider();
    initActiveNavLink();
    initParallax();
    initFormEnhancements();
  });

  /* ─── Navbar Scroll Effect ──────────────────────────────── */
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScroll = 0;

    function onScroll() {
      const current = window.scrollY;
      if (current > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      lastScroll = current;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run immediately
  }

  /* ─── Mobile Menu ───────────────────────────────────────── */
  function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.mobile-menu-close');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    if (!hamburger || !mobileMenu) return;

    function openMenu() {
      hamburger.classList.add('open');
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

    // Close on backdrop click
    mobileMenu.addEventListener('click', function (e) {
      if (e.target === mobileMenu) closeMenu();
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ─── Scroll Reveal (IntersectionObserver) ──────────────── */
  function initScrollReveal() {
    const elements = document.querySelectorAll(
      '.reveal, .reveal-l, .reveal-r, .reveal-scale'
    );
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach(el => observer.observe(el));
  }

  /* ─── Counter Animation ─────────────────────────────────── */
  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(el => observer.observe(el));
  }

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    const duration = 2000;
    const start = performance.now();

    function update(time) {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = prefix + current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  /* ─── Typed Text ────────────────────────────────────────── */
  function initTypedText() {
    const el = document.querySelector('.typed-text');
    if (!el) return;

    const words = el.getAttribute('data-words');
    if (!words) return;

    const list = words.split('|').map(w => w.trim());
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    function type() {
      const current = list[wordIndex];

      if (isDeleting) {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
      }

      let delay = isDeleting ? 60 : 110;

      if (!isDeleting && charIndex === current.length) {
        delay = 1800;
        isPaused = true;
        setTimeout(function () {
          isDeleting = true;
          isPaused = false;
          type();
        }, delay);
        return;
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % list.length;
        delay = 400;
      }

      setTimeout(type, delay);
    }

    setTimeout(type, 800);
  }

  /* ─── Testimonial Slider ────────────────────────────────── */
  function initTestimonialSlider() {
    const track = document.querySelector('.testi-track');
    if (!track) return;

    const cards = track.querySelectorAll('.testi-card');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    if (!cards.length) return;

    let current = 0;
    let perView = getPerView();
    let total = Math.ceil(cards.length / perView);
    let autoSlideTimer = null;

    function getPerView() {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 960) return 2;
      return 3;
    }

    function goTo(index) {
      if (index < 0) index = total - 1;
      if (index >= total) index = 0;
      current = index;

      const cardW = cards[0].offsetWidth;
      const gap = 24;
      const offset = current * perView * (cardW + gap);
      track.style.transform = `translateX(-${offset}px)`;

      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function startAuto() {
      stopAuto();
      autoSlideTimer = setInterval(function () { goTo(current + 1); }, 5000);
    }

    function stopAuto() {
      if (autoSlideTimer) clearInterval(autoSlideTimer);
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); startAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); startAuto(); });
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goTo(i); startAuto(); });
    });

    // Touch swipe
    let startX = 0;
    track.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; stopAuto(); }, { passive: true });
    track.addEventListener('touchend', function (e) {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
      startAuto();
    });

    window.addEventListener('resize', function () {
      perView = getPerView();
      total = Math.ceil(cards.length / perView);
      goTo(0);
    });

    goTo(0);
    startAuto();
  }

  /* ─── Active Nav Link ───────────────────────────────────── */
  function initActiveNavLink() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a, .mobile-menu a');
    links.forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  /* ─── Subtle Parallax ───────────────────────────────────── */
  function initParallax() {
    const orbs = document.querySelectorAll('.orb');
    if (!orbs.length) return;

    window.addEventListener('mousemove', function (e) {
      const mx = (e.clientX / window.innerWidth - 0.5) * 2;
      const my = (e.clientY / window.innerHeight - 0.5) * 2;

      orbs.forEach(function (orb, i) {
        const depth = (i + 1) * 8;
        orb.style.transform = `translate(${mx * depth}px, ${my * depth}px)`;
      });
    }, { passive: true });
  }

  /* ─── Form Enhancements ─────────────────────────────────── */
  function initFormEnhancements() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const original = btn.innerHTML;
      btn.innerHTML = '✓ Message Sent!';
      btn.style.background = 'linear-gradient(135deg, #25D366, #128C7E)';
      btn.disabled = true;

      setTimeout(function () {
        btn.innerHTML = original;
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    });

    // Floating label effect
    const inputs = form.querySelectorAll('.form-input, .form-textarea');
    inputs.forEach(function (input) {
      input.addEventListener('focus', function () {
        this.parentElement.classList.add('focused');
      });
      input.addEventListener('blur', function () {
        if (!this.value) this.parentElement.classList.remove('focused');
      });
    });
  }

  /* ─── Smooth Scroll ─────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

})();
