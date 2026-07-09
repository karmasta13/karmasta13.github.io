// =========================================================
// Labbi Karmacharya — interactions
// =========================================================

/* ---------- Theme toggle (light default) ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.querySelector('.nav__theme-btn');

  const getPreferredTheme = () => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  };

  const applyTheme = (theme) => {
    document.body.classList.toggle('dark', theme === 'dark');
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#14110E' : '#FAF8F5');
  };

  applyTheme(getPreferredTheme());

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = document.body.classList.contains('dark') ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('theme', next);
    });
  }
});

/* ---------- Mobile nav toggle ---------- */
const navMenu = document.querySelector('.nav__menu');
const navOpenBtn = document.querySelector('.nav__toggle-open');
const navCloseBtn = document.querySelector('.nav__toggle-close');

const openNav = () => {
  navMenu.style.display = 'flex';
  navOpenBtn.style.display = 'none';
  navCloseBtn.style.display = 'inline-block';
};
const closeNav = () => {
  navMenu.style.display = '';
  navOpenBtn.style.display = '';
  navCloseBtn.style.display = '';
};

if (navOpenBtn && navCloseBtn) {
  navOpenBtn.addEventListener('click', openNav);
  navCloseBtn.addEventListener('click', closeNav);
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 640) closeNav();
    });
  });
}

/* ---------- Nav scrolled state + active link + progress bar ---------- */
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav__menu a');
const progressBar = document.querySelector('.scroll-progress');

const onScroll = () => {
  const y = window.scrollY;

  if (nav) nav.classList.toggle('scrolled', y > 40);

  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (progressBar && docHeight > 0) {
    progressBar.style.width = `${(y / docHeight) * 100}%`;
  }

  // Active section highlight
  document.querySelectorAll('section[id], header[id]').forEach((section) => {
    const top = section.offsetTop - 120;
    const bottom = top + section.clientHeight;
    if (y >= top && y < bottom) {
      const id = section.getAttribute('id');
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
};
window.addEventListener('scroll', onScroll, { passive: true });

/* ---------- Scroll-to-top with progress ring ---------- */
const scrollTopBtn = document.getElementById('scrollTopBtn');
if (scrollTopBtn) {
  const ring = scrollTopBtn.querySelector('.progress-ring-circle');
  const circumference = 2 * Math.PI * 21;
  if (ring) {
    ring.style.strokeDasharray = `${circumference}`;
    ring.style.strokeDashoffset = `${circumference}`;
  }
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    scrollTopBtn.classList.toggle('show', y > 400);
    if (ring) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? y / docHeight : 0;
      ring.style.strokeDashoffset = `${circumference * (1 - pct)}`;
    }
  }, { passive: true });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- Scroll reveal ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal-section').forEach((el) => revealObserver.observe(el));

/* ---------- Impact count-up ---------- */
const runCountUp = (el) => {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce || !target) {
    el.textContent = target.toLocaleString() + suffix;
    return;
  }

  const duration = 1400;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased).toLocaleString() + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      runCountUp(entry.target);
      countObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.impact__num').forEach((el) => countObserver.observe(el));

/* ---------- Projects "show more" toggle ---------- */
const projMoreBtn = document.getElementById('projMoreBtn');
const projGrid = document.querySelector('.proj__grid');
if (projMoreBtn && projGrid) {
  projMoreBtn.addEventListener('click', () => {
    const expanded = projGrid.classList.toggle('expanded');
    projMoreBtn.textContent = expanded ? 'Show fewer projects' : 'Show more projects';
  });
}

/* ---------- Experience "show more" toggle ---------- */
const expMoreBtn = document.getElementById('expMoreBtn');
const expList = document.querySelector('.exp__list');
if (expMoreBtn && expList) {
  expMoreBtn.addEventListener('click', () => {
    const expanded = expList.classList.toggle('expanded');
    expMoreBtn.textContent = expanded ? 'Show fewer roles' : 'Show more roles';
  });
}

/* ---------- CV request modal ---------- */
const cvModal = document.getElementById('cvModal');
if (cvModal) {
  let lastFocused = null;
  const focusableSelector = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

  const openCv = (e) => {
    lastFocused = (e && e.currentTarget) || document.activeElement;
    cvModal.classList.add('open');
    cvModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const first = cvModal.querySelector(focusableSelector);
    if (first) first.focus();
  };
  const closeCv = () => {
    cvModal.classList.remove('open');
    cvModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  };

  document.querySelectorAll('[data-open-cv]').forEach((btn) => btn.addEventListener('click', openCv));
  document.querySelectorAll('[data-close-cv]').forEach((el) => el.addEventListener('click', closeCv));

  document.addEventListener('keydown', (e) => {
    if (!cvModal.classList.contains('open')) return;
    if (e.key === 'Escape') { closeCv(); return; }
    if (e.key === 'Tab') {
      const items = Array.from(cvModal.querySelectorAll(focusableSelector)).filter((el) => el.offsetParent !== null);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

/* ---------- Web3Forms submission ---------- */
const submitWeb3Form = (form) => {
  const status = form.querySelector('.form__status');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const key = data.get('access_key');

    if (!key || key === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      status.textContent = 'Form is not connected yet. Add the Web3Forms access key.';
      status.className = 'form__status error';
      return;
    }

    status.textContent = 'Sending...';
    status.className = 'form__status';

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        status.textContent = form.dataset.success || 'Thank you. I will be in touch.';
        status.className = 'form__status success';
        form.reset();
      } else {
        status.textContent = 'Something went wrong. Please email me directly.';
        status.className = 'form__status error';
      }
    } catch {
      status.textContent = 'Network error. Please email me directly.';
      status.className = 'form__status error';
    }
  });
};
document.querySelectorAll('form[data-web3form]').forEach(submitWeb3Form);

/* ---------- Footer year ---------- */
const copyright = document.getElementById('copyright');
if (copyright) {
  copyright.innerHTML = `&copy; ${new Date().getFullYear()} Labbi Karmacharya. All rights reserved.`;
}
