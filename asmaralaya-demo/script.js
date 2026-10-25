const header = document.getElementById('siteHeader');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-menu a');
const experienceGrid = document.getElementById('experienceGrid');
const galleryGrid = document.getElementById('galleryGrid');
const inquiryForm = document.getElementById('inquiryForm');
const formStatus = document.getElementById('formStatus');

let nodeApiAvailable = false;
let revealObserver;

function onScroll() {
  header?.classList.toggle('scrolled', window.scrollY > 40);
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

menuToggle?.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('show');
  menuToggle.classList.toggle('active', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
    menuToggle?.classList.remove('active');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const sections = document.querySelectorAll('section[id], footer[id]');

function setActiveNav() {
  let current = 'home';
  sections.forEach((section) => {
    const top = section.offsetTop - 130;
    if (window.scrollY >= top) current = section.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', setActiveNav, { passive: true });
setActiveNav();

function activateReveals() {
  revealObserver?.disconnect();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal:not(.show)').forEach((item) => revealObserver.observe(item));
}

function safeText(value) {
  return String(value ?? '').replace(/[&<>'"]/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[char]));
}

function renderExperiences(items) {
  if (!experienceGrid || !Array.isArray(items) || !items.length) return;
  experienceGrid.innerHTML = items.map((item) => `
    <article class="exp-card reveal">
      <div class="exp-image">
        <img src="${safeText(item.image)}" alt="${safeText(item.alt || item.title)}" loading="lazy" decoding="async" data-fallback-label="${safeText(item.title || item.alt || 'Asmaralaya Coffee')}" />
        <span><i class="${safeText(item.icon || 'fa-solid fa-mug-hot')}"></i></span>
      </div>
      <div class="exp-body">
        <h3>${safeText(item.title)}</h3>
        <p>${safeText(item.description)}</p>
      </div>
    </article>
  `).join('');
}

function renderGallery(items) {
  if (!galleryGrid || !Array.isArray(items) || !items.length) return;
  const expanded = items.length >= 8 ? items.slice(0, 8) : [...items, ...items].slice(0, 8);
  galleryGrid.innerHTML = expanded.map((item, index) => `
    <figure class="gallery-item ${index === 0 || item.featured ? 'big ' : ''}${safeText(item.className || '')} reveal">
      <img src="${safeText(item.image)}" alt="${safeText(item.alt || 'Asmaralaya Coffee')}" loading="lazy" decoding="async" data-fallback-label="Asmaralaya Coffee" />
    </figure>
  `).join('');
}


function fallbackSvg() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#203528"/><stop offset="1" stop-color="#7a8660"/></linearGradient></defs><rect width="1200" height="800" fill="url(#g)"/><g opacity=".82" fill="none" stroke="#fff" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"><path d="M475 440h210v105c0 74-46 120-105 120s-105-46-105-120z"/><path d="M685 472h48c67 0 67 93 0 93h-42"/><path d="M525 385c0-46 38-46 38-92M607 385c0-46 38-46 38-92"/></g><path d="M275 690 435 505l96 105 73-83 315 163" fill="none" stroke="#e7edda" stroke-opacity=".52" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function installImageFallbacks(scope = document) {
  scope.querySelectorAll('img:not([data-fallback-ready])').forEach((img) => {
    img.dataset.fallbackReady = '1';
    img.addEventListener('error', () => {
      if (img.dataset.fallbackApplied) return;
      img.dataset.fallbackApplied = '1';
      img.classList.add('image-fallback');
      img.removeAttribute('srcset');
      img.src = fallbackSvg(img.dataset.fallbackLabel || img.alt || 'Asmaralaya Coffee');
    }, { once: true });
  });
}

async function fetchJson(url) {
  const response = await fetch(url, { headers: { Accept: 'application/json' } });
  const type = response.headers.get('content-type') || '';
  if (!response.ok || !type.includes('application/json')) throw new Error('JSON endpoint unavailable');
  return response.json();
}

async function hydrateContent() {
  let content;
  try {
    content = await fetchJson('/api/content');
    nodeApiAvailable = true;
    document.documentElement.dataset.runtime = 'node';
  } catch (_error) {
    try {
      content = await fetchJson('data/content.json');
      document.documentElement.dataset.runtime = 'static';
    } catch (_fallbackError) {
      activateReveals();
      return;
    }
  }

  renderExperiences(content.experiences);
  renderGallery(content.gallery);
  installImageFallbacks();
  activateReveals();
}

inquiryForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  formStatus.className = 'form-status';

  if (!inquiryForm.reportValidity()) return;

  const payload = Object.fromEntries(new FormData(inquiryForm).entries());
  const submitButton = inquiryForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.setAttribute('aria-busy', 'true');

  try {
    if (nodeApiAvailable) {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result?.message || 'Validasi belum berhasil.');
      formStatus.textContent = result.message;
      formStatus.classList.add('success');
      inquiryForm.reset();
    } else {
      const text = `Halo Asmaralaya Coffee, saya ${payload.name}.\n\n${payload.message}\n\nKontak saya: ${payload.contact}`;
      const url = `https://wa.me/6285280425726?text=${encodeURIComponent(text)}`;
      formStatus.textContent = 'Static demo: pesan diteruskan ke WhatsApp resmi.';
      formStatus.classList.add('success');
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  } catch (error) {
    formStatus.textContent = error.message || 'Terjadi kesalahan. Silakan coba lagi.';
    formStatus.classList.add('error');
  } finally {
    submitButton.disabled = false;
    submitButton.removeAttribute('aria-busy');
  }
});

installImageFallbacks();
activateReveals();
hydrateContent();
