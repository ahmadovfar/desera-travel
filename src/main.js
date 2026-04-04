import './style.css';
import { COUNTRIES } from './data/countries.js';
import { svcData } from './data/services.js';
import { getLang, setLangVal, getCurPage, setCurPage } from './state.js';
import { renderHome } from './pages/home.js';
import { renderCountry } from './pages/country.js';
import { renderAbout } from './pages/about.js';
import { renderBlog } from './pages/blog.js';
import { renderPartner } from './pages/partner.js';

// ---- NAV DROPDOWN ----
const ddhtml = COUNTRIES.map(c => '<a data-nav="' + c.id + '"><span class="fl">' + c.flag + '</span>' + c.n + '</a>').join('');
document.getElementById('nav-dd').innerHTML = ddhtml;
document.getElementById('ft-dd').innerHTML = COUNTRIES.slice(0, 6).map(c => '<a data-nav="' + c.id + '">' + c.flag + ' ' + c.n + '</a>').join('');

// ---- ROUTING ----
function go(p) {
  const app = document.getElementById('app');
  app.style.opacity = '0';
  setTimeout(() => {
    setCurPage(p);
    const c = COUNTRIES.find(x => x.id === p);
    if (c) {
      app.innerHTML = renderCountry(c);
      startClock(c.tz);
    } else if (p === 'partner') {
      app.innerHTML = renderPartner();
    } else if (p === 'about') {
      app.innerHTML = renderAbout();
    } else if (p === 'blog') {
      app.innerHTML = renderBlog();
    } else {
      app.innerHTML = renderHome();
    }
    window.scrollTo(0, 0);
    document.getElementById('nb').className = 'dk';
    updateNavLang();
    app.style.opacity = '1';
    setTimeout(() => { initAnim(); animateCounters(); }, 200);
  }, 200);
}
window.go = go;

// ---- DELEGATED CLICK HANDLER ----
document.addEventListener('click', (e) => {
  const navEl = e.target.closest('[data-nav]');
  if (navEl) { go(navEl.dataset.nav); return; }

  const scrollEl = e.target.closest('[data-scroll]');
  if (scrollEl) {
    const target = document.getElementById(scrollEl.dataset.scroll);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  const heroEl = e.target.closest('[data-hero]');
  if (heroEl) { heroBg(parseInt(heroEl.dataset.hero)); return; }

  const svcEl = e.target.closest('[data-svc]');
  if (svcEl) { svcTab(parseInt(svcEl.dataset.svc)); return; }

  const submitEl = e.target.closest('[data-action="submit-form"]');
  if (submitEl) {
    const E = getLang() === 'ru';
    alert(E ? 'Спасибо! Мы свяжемся в течение 2 часов.' : 'Thank you! We will contact you within 2 hours.');
    return;
  }

  // Trip builder selection
  const tbOptEl = e.target.closest('.tb-opt');
  if (tbOptEl) { tbOptEl.classList.toggle('sel'); return; }
});

// ---- LANGUAGE ----
function setLang(l) {
  setLangVal(l);
  document.getElementById('lb-en').style.cssText = l === 'en'
    ? 'padding:5px 14px;border:none;border-radius:100px;font-size:12px;font-weight:600;cursor:pointer;background:#fff;color:var(--dk);font-family:var(--fb);box-shadow:0 1px 4px rgba(0,0,0,.08)'
    : 'padding:5px 14px;border:none;border-radius:100px;font-size:12px;font-weight:600;cursor:pointer;background:transparent;color:var(--g500);font-family:var(--fb)';
  document.getElementById('lb-ru').style.cssText = l === 'ru'
    ? 'padding:5px 14px;border:none;border-radius:100px;font-size:12px;font-weight:600;cursor:pointer;background:#fff;color:var(--dk);font-family:var(--fb);box-shadow:0 1px 4px rgba(0,0,0,.08)'
    : 'padding:5px 14px;border:none;border-radius:100px;font-size:12px;font-weight:600;cursor:pointer;background:transparent;color:var(--g500);font-family:var(--fb)';
  go(getCurPage());
}
window.setLang = setLang;

function updateNavLang() {
  const E = getLang() === 'ru';
  const cta = document.querySelector('.nav-cta');
  if (cta) cta.textContent = E ? 'Стать партнёром' : 'Become a partner';
  const links = document.querySelectorAll('.nl > a');
  if (links[0]) links[0].textContent = E ? 'Главная' : 'Home';
  if (links[1]) links[1].textContent = E ? 'О нас' : 'About';
  if (links[2]) links[2].textContent = E ? 'Блог' : 'Blog';
  if (links[3]) links[3].textContent = E ? 'Контакты' : 'Contact';
  const ddSpan = document.querySelector('.dd-wrap > span');
  if (ddSpan) ddSpan.innerHTML = (E ? 'Направления' : 'Destinations') + ' <span style="font-size:10px">▾</span>';
}

// ---- DARK MODE ----
function toggleDark() {
  document.body.classList.toggle('dark');
  document.getElementById('dm-btn').textContent = document.body.classList.contains('dark') ? '🌙' : '☀️';
}
window.toggleDark = toggleDark;

// ---- CLOCK ----
let currentTZ = 'UTC';
function startClock(tz) { currentTZ = tz; tick(); }
function tick() {
  const el = document.getElementById('ct');
  if (!el) return;
  try {
    const now = new Date();
    el.textContent = now.toLocaleString('en-US', { timeZone: currentTZ, hour: '2-digit', minute: '2-digit', hour12: false });
  } catch (e) { el.textContent = '--:--'; }
}
setInterval(tick, 30000);

// ---- BACK TO TOP ----
window.addEventListener('scroll', () => {
  const b = document.getElementById('btt');
  if (b) b.classList.toggle('show', window.scrollY > 400);
});

// ---- SCROLL ANIMATIONS ----
function initAnim() {
  try {
    const els = document.querySelectorAll('.anim:not(.in)');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
  } catch (e) {
    document.querySelectorAll('.anim').forEach(el => el.classList.add('in'));
  }
}

// ---- COUNTER ANIMATION ----
function animateCounters() {
  document.querySelectorAll('.counter').forEach(el => {
    const target = parseInt(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1500;
    let startTime = null;
    function step(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      el.textContent = Math.floor(progress * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

// ---- HERO SLIDESHOW ----
const heroImages = [
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920',
  'https://images.unsplash.com/photo-1528181304800-259b08848526?w=1920',
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920',
  'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920',
  'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1920'
];
let heroIdx = 0;
function heroBg(i) {
  heroIdx = i;
  const el = document.getElementById('hero-bg');
  if (!el) return;
  el.style.opacity = '0';
  setTimeout(() => { el.style.backgroundImage = "url('" + heroImages[i] + "')"; el.style.opacity = '1'; }, 500);
  document.querySelectorAll('.hero-dot').forEach((d, j) => d.classList.toggle('active', j === i));
}
setInterval(() => {
  const dots = document.querySelectorAll('.hero-dot');
  if (dots.length === 0) return;
  heroIdx = (heroIdx + 1) % heroImages.length;
  heroBg(heroIdx);
}, 5000);

// ---- SERVICE TABS ----
function svcTab(i) {
  const E = getLang() === 'ru' ? 0 : 1;
  const d = svcData[i];
  document.querySelectorAll('.svc-tab').forEach((t, j) => {
    t.style.background = j === i ? '#fff' : 'transparent';
    t.style.fontWeight = j === i ? '600' : '500';
    t.style.color = j === i ? 'var(--dk)' : 'var(--g500)';
    t.style.boxShadow = j === i ? '0 2px 8px rgba(0,0,0,.06)' : 'none';
    t.classList.toggle('active', j === i);
  });
  const panel = document.getElementById('svc-panel');
  if (!panel) return;
  panel.style.opacity = '0';
  setTimeout(() => {
    document.getElementById('svc-img').style.backgroundImage = 'url(' + d.img + ')';
    document.getElementById('svc-num').textContent = d.num;
    document.getElementById('svc-title').textContent = d.t[E];
    document.getElementById('svc-desc').textContent = d.d[E];
    let fhtml = '';
    d.f.forEach(x => { fhtml += '<div style="font-size:13px;color:var(--g700)"><span style="color:var(--c1);font-weight:700">✓</span> ' + x[E] + '</div>'; });
    document.getElementById('svc-features').innerHTML = fhtml;
    panel.style.opacity = '1';
  }, 300);
}

// ---- TRIP BUILDER ----
let tbCur = 1;
window.tbStep = function (n) {
  tbCur = n;
  document.querySelectorAll('.tb-step').forEach((s, i) => s.classList.toggle('active', i === n - 1));
  const E = getLang() === 'ru';
  const p = document.getElementById('tb-panel');
  if (!p) return;
  if (n === 1) p.innerHTML = '<div class="tb-opts">' + COUNTRIES.map(c => '<div class="tb-opt">' + c.flag + ' ' + c.n + '</div>').join('') + '</div>';
  else if (n === 2) p.innerHTML = '<div class="tb-row"><input class="tb-input" type="date"><input class="tb-input" type="number" placeholder="' + (E ? 'Гостей' : 'Guests') + '" min="1"></div><div class="tb-row"><input class="tb-input" type="number" placeholder="' + (E ? 'Ночей' : 'Nights') + '" min="1"><select class="tb-input"><option>' + (E ? 'Стандарт' : 'Standard') + '</option><option>' + (E ? 'Премиум' : 'Premium') + '</option><option>' + (E ? 'Люкс' : 'Luxury') + '</option></select></div>';
  else if (n === 3) {
    const svcs = [E ? 'Отели' : 'Hotels', E ? 'Трансферы' : 'Transfers', E ? 'Экскурсии' : 'Excursions', E ? 'Билеты' : 'Tickets', E ? 'Премиум' : 'Premium', E ? 'Всё включено' : 'All inclusive'];
    p.innerHTML = '<div class="tb-opts">' + svcs.map(s => '<div class="tb-opt">' + s + '</div>').join('') + '</div>';
  } else p.innerHTML = '<div class="tb-row"><input class="tb-input" placeholder="' + (E ? 'Имя' : 'Name') + '"><input class="tb-input" placeholder="Email" type="email"></div><div class="tb-row"><input class="tb-input" placeholder="' + (E ? 'Телефон' : 'Phone') + '" type="tel"><input class="tb-input" placeholder="' + (E ? 'Компания' : 'Company') + '"></div>';
};
window.tbNext = function () {
  if (tbCur < 4) window.tbStep(tbCur + 1);
  else alert(getLang() === 'ru' ? 'Спасибо! Предложение в течение 2 часов.' : 'Thank you! Proposal within 2 hours.');
};

// ---- INIT ----
go('home');
