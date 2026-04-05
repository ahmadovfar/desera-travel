import './style.css';
import { COUNTRIES } from './data/countries.js';
import { svcData } from './data/services.js';
import { FORM_EMAIL } from './components/partnerForm.js';
import { getLang, setLangVal, getCurPage, setCurPage } from './state.js';
import { renderHome } from './pages/home.js';
import { renderCountry } from './pages/country.js';
import { renderAbout } from './pages/about.js';
import { renderBlog, renderBlogPost } from './pages/blog.js';
import { blogPosts } from './data/blogPosts.js';
import { renderPartner } from './pages/partner.js';
import { renderPrivacy } from './pages/privacy.js';
import { renderTerms } from './pages/terms.js';

// ---- NAV DROPDOWN ----
const ddhtml = COUNTRIES.map(c => '<a data-nav="' + c.id + '"><span class="fl">' + c.flag + '</span>' + c.n + '</a>').join('');
document.getElementById('nav-dd').innerHTML = ddhtml;
document.getElementById('ft-dd').innerHTML = COUNTRIES.slice(0, 6).map(c => '<a data-nav="' + c.id + '">' + c.flag + ' ' + c.n + '</a>').join('');

// ---- ROUTING ----
function pageToPath(p) {
  if (p === 'home') return '/';
  return '/' + p;
}

function pathToPage(path) {
  const p = path.replace(/^\//, '') || 'home';
  return p;
}

function go(p, pushState = true) {
  closeMenu();
  const app = document.getElementById('app');
  app.style.opacity = '0';
  app.style.transform = 'translateY(16px)';
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
    } else if (p.startsWith('blog/')) {
      var postId = p.replace('blog/', '');
      app.innerHTML = renderBlogPost(postId);
    } else if (p === 'blog') {
      app.innerHTML = renderBlog();
    } else if (p === 'privacy') {
      app.innerHTML = renderPrivacy();
    } else if (p === 'terms') {
      app.innerHTML = renderTerms();
    } else if (p === 'home') {
      app.innerHTML = renderHome();
    } else {
      const E = getLang() === 'ru';
      app.innerHTML = '<section style="min-height:80vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:40px 20px"><div><h1 style="font-size:120px;font-family:var(--fh);color:var(--acc);margin:0;line-height:1">404</h1><p style="font-size:24px;color:var(--dk);margin:16px 0 8px;font-family:var(--fh)">' + (E ? 'Страница не найдена' : 'Page not found') + '</p><p style="color:var(--g500);margin:0 0 32px">' + (E ? 'Эта страница не существует или была перемещена.' : 'This page doesn\'t exist or has been moved.') + '</p><a onclick="go(\'home\')" style="display:inline-block;padding:14px 32px;background:var(--acc);color:#fff;border-radius:100px;font-weight:600;cursor:pointer;font-family:var(--fb);text-decoration:none">' + (E ? 'На главную' : 'Go Home') + '</a></div></section>';
    }
    window.scrollTo(0, 0);
    document.getElementById('nb').className = 'dk';
    updateNavLang();
    updateMeta(p, c);
    app.style.opacity = '1';
    app.style.transform = 'translateY(0)';
    if (pushState) {
      history.pushState({ page: p }, '', pageToPath(p));
    }
    setTimeout(() => { initAnim(); animateCounters(); }, 200);
  }, 200);
}
window.go = go;

window.addEventListener('popstate', (e) => {
  const page = e.state?.page || pathToPage(location.pathname);
  go(page, false);
});

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

  // Trip builder selection
  const tbOptEl2 = e.target.closest('.tb-opt');
  if (tbOptEl2) { tbOptEl2.classList.toggle('sel'); return; }

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

// ---- FORM SUBMISSION ----
document.addEventListener('submit', async (e) => {
  const form = e.target.closest('#partner-form');
  if (!form) return;
  e.preventDefault();

  const E = getLang() === 'ru';
  const required = form.querySelectorAll('[required]');
  let valid = true;

  required.forEach(input => {
    input.classList.remove('invalid');
    if (!input.value.trim()) {
      input.classList.add('invalid');
      valid = false;
    }
    if (input.type === 'email' && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
      input.classList.add('invalid');
      valid = false;
    }
  });

  const errorEl = document.getElementById('form-error');
  if (!valid) {
    errorEl.textContent = E ? 'Заполните все обязательные поля' : 'Please fill in all required fields';
    errorEl.style.display = 'block';
    form.querySelector('.invalid')?.focus();
    return;
  }

  errorEl.style.display = 'none';
  const btn = document.getElementById('form-submit-btn');
  btn.classList.add('loading');
  btn.textContent = E ? 'Отправка...' : 'Sending...';

  try {
    const formData = new FormData(form);
    // Collect checked destinations into one field
    const dests = [];
    form.querySelectorAll('input[name="destinations"]:checked').forEach(cb => dests.push(cb.value));
    formData.set('destinations', dests.join(', '));

    const res = await fetch('https://formsubmit.co/ajax/' + FORM_EMAIL, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData
    });

    if (res.ok) {
      document.getElementById('form-fields').style.display = 'none';
      document.getElementById('form-success').style.display = 'block';
    } else {
      throw new Error('Server error');
    }
  } catch (err) {
    errorEl.textContent = E ? 'Ошибка отправки. Попробуйте позже или напишите на reservation@desera.travel' : 'Sending failed. Please try again or email reservation@desera.travel';
    errorEl.style.display = 'block';
    btn.classList.remove('loading');
    btn.textContent = E ? 'Отправить заявку \u2192' : 'Submit application \u2192';
  }
});

// Clear validation on input
document.addEventListener('input', (e) => {
  if (e.target.classList.contains('invalid')) {
    e.target.classList.remove('invalid');
  }
});

// ---- META / SEO ----
function updateMeta(p, country) {
  const E = getLang() === 'ru';
  const base = 'Desera Travel';
  let title, desc, img;

  const seoDesc = {
    uae: { en: 'DMC partner in UAE — 300+ hotels at net rates, desert safaris, city tours in Dubai & Abu Dhabi. 2-hour response time.', ru: 'DMC партнёр в ОАЭ — 300+ отелей по нетто, сафари, туры в Дубае и Абу-Даби. Ответ за 2 часа.' },
    thailand: { en: 'DMC partner in Thailand — 200+ hotels, island tours in Phuket & Bangkok. Temples, beaches, local team.', ru: 'DMC партнёр в Таиланде — 200+ отелей, островные туры Пхукет и Бангкок. Храмы, пляжи.' },
    vietnam: { en: 'DMC partner in Vietnam — 150+ hotels, Ha Long Bay cruises, Hoi An tours. Local ground support.', ru: 'DMC партнёр во Вьетнаме — 150+ отелей, круизы Ха Лонг, туры Хойан. Локальная поддержка.' },
    china: { en: 'DMC partner in China — 500+ hotels, Great Wall tours, group programs. Bilingual CN-EN team.', ru: 'DMC партнёр в Китае — 500+ отелей, Великая стена, групповые программы. Двуязычная команда.' },
    turkey: { en: 'DMC partner in Turkey — 400+ hotels, Cappadocia balloons, Istanbul tours. All-inclusive resorts.', ru: 'DMC партнёр в Турции — 400+ отелей, шары Каппадокии, туры Стамбул. All-inclusive.' },
    egypt: { en: 'DMC partner in Egypt — 250+ hotels, Pyramids tours, Nile cruises, Red Sea diving.', ru: 'DMC партнёр в Египте — 250+ отелей, туры к пирамидам, круизы по Нилу, дайвинг.' },
    europe: { en: 'DMC partner in Europe — 1000+ hotels, multi-country packages. Paris, Rome, Barcelona, Prague.', ru: 'DMC партнёр в Европе — 1000+ отелей, мульти-страновые пакеты. Париж, Рим, Барселона.' },
    maldives: { en: 'DMC partner in Maldives — 80+ luxury resorts, overwater villas, honeymoon packages.', ru: 'DMC партнёр на Мальдивах — 80+ люкс-резортов, виллы над водой, свадебные пакеты.' },
    japan: { en: 'DMC partner in Japan — 300+ hotels & ryokans, cherry blossom tours, bullet train passes.', ru: 'DMC партнёр в Японии — 300+ отелей и рёканов, туры сакура, проездные синкансэн.' },
    indonesia: { en: 'DMC partner in Indonesia — 200+ hotels & villas, Bali temples, Komodo expeditions.', ru: 'DMC партнёр в Индонезии — 200+ отелей и вилл, храмы Бали, экспедиции Комодо.' },
    mauritius: { en: 'DMC partner in Mauritius — 60+ luxury resorts, catamaran cruises, honeymoon packages.', ru: 'DMC партнёр на Маврикии — 60+ люкс-резортов, круизы на катамаране, свадебные пакеты.' }
  };

  if (country) {
    const name = E ? country.nr : country.n;
    title = name + ' — ' + base + ' | DMC';
    desc = seoDesc[country.id] ? seoDesc[country.id][getLang()] : country[getLang()].h;
    img = country.img;
  } else if (p === 'about') {
    title = (E ? 'О компании' : 'About Us') + ' — ' + base;
    desc = E ? 'Мы создаём незабываемые travel-продукты по всему миру.' : 'We create unforgettable travel experiences worldwide.';
  } else if (p.startsWith('blog/')) {
    var bpId = p.replace('blog/', '');
    var bp = blogPosts.find(function(x) { return x.id === bpId; });
    if (bp) {
      title = bp.title + ' — ' + base;
      desc = bp.metaDesc;
      img = bp.image;
    } else {
      title = 'Article Not Found — ' + base;
      desc = 'The requested article could not be found.';
    }
  } else if (p === 'blog') {
    title = (E ? 'Блог' : 'Blog') + ' — ' + base;
    desc = E ? 'Полезное для партнёров: тренды, маржинальность, рынки.' : 'Insights for partners: trends, margins, markets.';
  } else if (p === 'partner') {
    title = (E ? 'Стать партнёром' : 'Become a Partner') + ' — ' + base;
    desc = E ? 'Заполните форму — мы ответим в течение 2 часов.' : 'Fill out the form — we respond within 2 hours.';
  } else if (p === 'privacy') {
    title = (E ? 'Политика конфиденциальности' : 'Privacy Policy') + ' — ' + base;
    desc = E ? 'Как Desera Travel собирает, использует и защищает ваши персональные данные.' : 'How Desera Travel collects, uses, and protects your personal data.';
  } else if (p === 'terms') {
    title = (E ? 'Условия использования' : 'Terms of Service') + ' — ' + base;
    desc = E ? 'Условия использования сайта desera.travel и услуг Desera Travel.' : 'Terms governing use of desera.travel and Desera Travel services.';
  } else {
    title = base + ' — Global DMC Partner';
    desc = E ? 'Исключительные travel-продукты в 11+ направлениях мира.' : 'Extraordinary travel experiences across 11+ destinations.';
    img = 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200';
  }

  if (!img) img = 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200';
  const url = 'https://desera.travel' + pageToPath(p);

  document.title = title;
  setMeta('description', desc);
  setMeta('og:title', title);
  setMeta('og:description', desc);
  setMeta('og:image', img);
  setMeta('og:url', url);
  setMeta('og:type', 'website');
  setMeta('og:locale', E ? 'ru_RU' : 'en_US');
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', title);
  setMeta('twitter:description', desc);
  setMeta('twitter:image', img);

  // Canonical
  const canon = document.getElementById('canonical');
  if (canon) canon.href = url;

  // Hreflang
  const hEn = document.getElementById('hreflang-en');
  const hRu = document.getElementById('hreflang-ru');
  const hDef = document.getElementById('hreflang-default');
  if (hEn) hEn.href = url;
  if (hRu) hRu.href = url;
  if (hDef) hDef.href = url;

  // Dynamic JSON-LD schema per page
  updatePageSchema(p, country, title, desc, img, url);
}

function updatePageSchema(p, country, title, desc, img, url) {
  const schemaEl = document.getElementById('schema-page');
  if (!schemaEl) return;
  let schema = {};

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://desera.travel/' }
    ]
  };

  if (country) {
    const L = country[getLang()];
    breadcrumb.itemListElement.push({ '@type': 'ListItem', 'position': 2, 'name': 'Destinations' });
    breadcrumb.itemListElement.push({ '@type': 'ListItem', 'position': 3, 'name': country.n, 'item': url });

    var topTours = country.tours.slice(0, 3).map(function(t) { return t.t; }).join(', ');
    var topCities = country.cities.map(function(ci) { return ci.n; }).join(', ');
    var uspText = country.usp.map(function(u) { return u.n + ' ' + u.t; }).join(', ');

    const faq = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'Do I need a visa to visit ' + country.n + '?', 'acceptedAnswer': { '@type': 'Answer', 'text': L.visa + ' Desera Travel assists B2B partners with visa support for group bookings of 10+ travelers.' } },
        { '@type': 'Question', 'name': 'What is the best time to visit ' + country.n + '?', 'acceptedAnswer': { '@type': 'Answer', 'text': L.season + ' For travel agencies, the shoulder season offers 30-50% lower hotel rates with strong margins. Desera Travel provides seasonal deals through our B2B platform.' } },
        { '@type': 'Question', 'name': 'What are the top tourist attractions in ' + country.n + '?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Key cities: ' + topCities + '. Popular tours: ' + topTours + '. ' + L.d1 + ' Desera Travel offers instant booking for all attractions at competitive net rates.' } },
        { '@type': 'Question', 'name': 'What currency is used in ' + country.n + '?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'The official currency is ' + country.cur + '. Exchange rate: 1 USD = ' + country.rate + ' ' + country.cur + '. Credit cards are widely accepted. Desera Travel provides net rates in USD for partner billing.' } },
        { '@type': 'Question', 'name': 'Why choose Desera Travel as your DMC partner in ' + country.n + '?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Desera Travel is a global DMC with direct contracts and local teams. Advantages in ' + country.n + ': ' + uspText + '. Competitive net rates, 2-hour response guarantee, B2B platform with real-time availability, 24/7 support in English and Russian.' } }
      ]
    };

    const destination = {
      '@context': 'https://schema.org',
      '@type': 'TouristDestination',
      'name': country.n,
      'description': desc,
      'image': country.img,
      'url': url,
      'touristType': ['Travel Agencies', 'Tour Operators'],
      'includesAttraction': country.tours.slice(0, 3).map(function(t) {
        return { '@type': 'TouristAttraction', 'name': t.t, 'description': t.p };
      })
    };

    schema = [breadcrumb, faq, destination];
  } else if (p === 'about') {
    breadcrumb.itemListElement.push({ '@type': 'ListItem', 'position': 2, 'name': 'About', 'item': url });
    schema = breadcrumb;
  } else if (p.startsWith('blog/')) {
    var bpSlug = p.replace('blog/', '');
    var bpData = blogPosts.find(function(x) { return x.id === bpSlug; });
    breadcrumb.itemListElement.push({ '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': 'https://desera.travel/blog' });
    if (bpData) {
      breadcrumb.itemListElement.push({ '@type': 'ListItem', 'position': 3, 'name': bpData.title, 'item': url });
      var articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': bpData.title,
        'description': bpData.metaDesc,
        'image': bpData.image,
        'datePublished': bpData.date,
        'author': { '@type': 'Organization', 'name': 'Desera Travel' },
        'publisher': { '@type': 'Organization', 'name': 'Desera Travel', 'url': 'https://desera.travel' },
        'url': url
      };
      schema = [breadcrumb, articleSchema];
    } else {
      schema = breadcrumb;
    }
  } else if (p === 'blog') {
    breadcrumb.itemListElement.push({ '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': url });
    schema = breadcrumb;
  } else if (p === 'partner') {
    breadcrumb.itemListElement.push({ '@type': 'ListItem', 'position': 2, 'name': 'Become a Partner', 'item': url });
    schema = breadcrumb;
  } else {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': title,
      'description': desc,
      'url': url,
      'image': img
    };
  }

  schemaEl.textContent = JSON.stringify(schema);
}

function setMeta(name, content) {
  const isOg = name.startsWith('og:');
  const isTwitter = name.startsWith('twitter:');
  const attr = (isOg || isTwitter) ? (isOg ? 'property' : 'name') : 'name';
  let el = document.querySelector('meta[' + attr + '="' + name + '"]');
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

// ---- MOBILE MENU ----
function toggleMenu() {
  document.getElementById('burger').classList.toggle('open');
  document.getElementById('nl').classList.toggle('open');
}
window.toggleMenu = toggleMenu;

function closeMenu() {
  document.getElementById('burger').classList.remove('open');
  document.getElementById('nl').classList.remove('open');
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
const initialPage = pathToPage(location.pathname);
go(initialPage, false);
history.replaceState({ page: initialPage }, '', pageToPath(initialPage));

// ---- HIDE PRELOADER ----
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
      setTimeout(() => preloader.remove(), 500);
    }, 400);
  }
});

// ---- COOKIE CONSENT ----
(function() {
  if (localStorage.getItem('cookie_consent')) return;
  const E = getLang() === 'ru';
  const bar = document.createElement('div');
  bar.id = 'cookie-bar';
  bar.innerHTML = '<div class="cookie-inner"><div class="cookie-text"><span style="font-size:20px;margin-right:8px">🍪</span><p>' +
    (E ? 'Мы используем файлы cookie для аналитики и улучшения работы сайта. Продолжая использование, вы соглашаетесь с нашей <a href="/privacy" onclick="event.preventDefault();go(\'privacy\')">Политикой конфиденциальности</a>.'
       : 'We use cookies for analytics and to improve your experience. By continuing, you agree to our <a href="/privacy" onclick="event.preventDefault();go(\'privacy\')">Privacy Policy</a>.') +
    '</p></div><div class="cookie-btns"><button class="cookie-accept" onclick="acceptCookies()">' + (E ? 'Принять' : 'Accept') + '</button><button class="cookie-decline" onclick="declineCookies()">' + (E ? 'Только необходимые' : 'Essential only') + '</button></div></div>';
  document.body.appendChild(bar);
  setTimeout(function() { bar.classList.add('show'); }, 1000);
})();

window.acceptCookies = function() {
  localStorage.setItem('cookie_consent', 'all');
  var bar = document.getElementById('cookie-bar');
  if (bar) { bar.classList.remove('show'); setTimeout(function() { bar.remove(); }, 400); }
};

window.declineCookies = function() {
  localStorage.setItem('cookie_consent', 'essential');
  // Disable GA if user declines
  window['ga-disable-G-7CF4JKMM27'] = true;
  var bar = document.getElementById('cookie-bar');
  if (bar) { bar.classList.remove('show'); setTimeout(function() { bar.remove(); }, 400); }
};
