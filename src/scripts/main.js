// Site interactions: navigation, scroll reveals, counters, progress bars,
// FAQ accordion and contact form validation. No dependencies.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Navigation ---------- */
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

function setNav(open) {
  nav.classList.toggle('is-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => setNav(!nav.classList.contains('is-open')));

  document.querySelectorAll('.nav__subtoggle').forEach((btn) => {
    const item = btn.closest('.nav__item');
    const setSub = (open) => {
      item.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
    };
    btn.addEventListener('click', () => setSub(!item.classList.contains('is-open')));
    item.addEventListener('focusout', (e) => {
      if (!item.contains(e.relatedTarget) && window.innerWidth > 1024) setSub(false);
    });
    document.addEventListener('click', (e) => {
      if (!item.contains(e.target) && window.innerWidth > 1024) setSub(false);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.nav__item.is-open').forEach((item) => {
      item.classList.remove('is-open');
      item.querySelector('.nav__subtoggle')?.setAttribute('aria-expanded', 'false');
    });
    if (nav.classList.contains('is-open')) {
      setNav(false);
      navToggle.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && nav.classList.contains('is-open')) setNav(false);
  });
}

/* ---------- Scroll-triggered effects ---------- */
function onVisible(elements, callback, options = { threshold: 0.15 }) {
  if (!elements.length) return;
  if (!('IntersectionObserver' in window)) {
    elements.forEach(callback);
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      io.unobserve(entry.target);
      callback(entry.target);
    });
  }, options);
  elements.forEach((el) => io.observe(el));
}

// Fade-up reveals, staggered among siblings.
const revealEls = [...document.querySelectorAll('[data-reveal]')];
revealEls.forEach((el) => {
  const siblings = [...el.parentElement.children].filter((c) => c.hasAttribute('data-reveal'));
  el.style.setProperty('--delay', `${Math.min(siblings.indexOf(el), 5) * 90}ms`);
});
onVisible(revealEls, (el) => el.classList.add('is-visible'), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

// Animated counters.
onVisible([...document.querySelectorAll('[data-counter]')], (el) => {
  const target = Number(el.dataset.counter);
  if (reduceMotion || !Number.isFinite(target)) return;
  const duration = 1800;
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = String(Math.round(target * eased));
    if (t < 1) requestAnimationFrame(tick);
  };
  el.textContent = '0';
  requestAnimationFrame(tick);
}, { threshold: 0.4 });

// Progress bars.
onVisible([...document.querySelectorAll('[data-bar]')], (el) => el.classList.add('is-visible'), { threshold: 0.4 });

/* ---------- FAQ accordion ---------- */
document.querySelectorAll('[data-accordion]').forEach((accordion) => {
  const items = [...accordion.querySelectorAll('.accordion__item')];
  const setItem = (item, open) => {
    item.classList.toggle('is-open', open);
    item.querySelector('button').setAttribute('aria-expanded', String(open));
  };
  items.forEach((item) => {
    item.querySelector('button').addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');
      items.forEach((other) => setItem(other, false));
      setItem(item, willOpen);
    });
  });
});

/* ---------- Contact form ---------- */
const validators = {
  name: (v) => (v.trim().length >= 2 ? '' : 'Please enter your name.'),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Please enter a valid email address.'),
  phone: (v) => (v.trim() === '' || /^[+()\d\s.-]{7,20}$/.test(v.trim()) ? '' : 'Please enter a valid phone number.'),
  message: (v) => (v.trim().length >= 10 ? '' : 'Please enter a message of at least 10 characters.'),
};

document.querySelectorAll('[data-contact-form]').forEach((form) => {
  const status = form.querySelector('.form__status');
  const submit = form.querySelector('.form__submit');

  const validateField = (field) => {
    const validate = validators[field.name];
    if (!validate) return true;
    const message = validate(field.value);
    const error = document.getElementById(`${field.id}-err`);
    field.setAttribute('aria-invalid', message ? 'true' : 'false');
    if (error) {
      error.textContent = message;
      error.hidden = !message;
    }
    return !message;
  };

  const showStatus = (state, text) => {
    status.dataset.state = state;
    status.textContent = text;
    status.hidden = false;
  };

  [...form.elements].forEach((field) => {
    if (!validators[field.name]) return;
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') validateField(field);
    });
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    status.hidden = true;

    const fields = [...form.elements].filter((f) => validators[f.name]);
    const invalid = fields.filter((f) => !validateField(f));
    if (invalid.length) {
      invalid[0].focus();
      showStatus('error', 'Please correct the highlighted fields and try again.');
      return;
    }

    // PLACEHOLDER SUBMISSION HANDLER
    // No form backend is configured yet. Set `formEndpoint` in src/data/site.ts
    // to a service that accepts a JSON POST; until then nothing is sent and the
    // visitor is told so explicitly.
    const endpoint = form.dataset.endpoint;
    if (!endpoint) {
      showStatus('notice', 'Form backend not configured yet: your message has NOT been sent. (Placeholder handler, connect a form service to enable delivery.)');
      return;
    }

    submit.disabled = true;
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      form.reset();
      showStatus('success', 'Thank you. Your message has been sent.');
    } catch (error) {
      console.error(error);
      showStatus('error', 'Sorry, your message could not be sent. Please try again later.');
    } finally {
      submit.disabled = false;
    }
  });
});
