import { getLang } from '../state.js';
import { COUNTRIES } from '../data/countries.js';
import { svcData } from '../data/services.js';
import { partnerForm } from '../components/partnerForm.js';
import { testimonials, trustBadges } from '../components/testimonials.js';
import { seasonCalendar } from '../components/calendar.js';
import { trustBar, whyPartner } from '../components/trustBar.js';

export function renderHome() {
  const E = getLang() === 'ru';
  return '<section class="hero"><div class="hero-bg" id="hero-bg" style="background-image:url(\'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920\')"></div><div class="hero-c"><div style="display:inline-flex;align-items:center;gap:8px;padding:8px 20px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);border-radius:100px;margin-bottom:32px"><span style="font-size:13px;font-weight:600;color:rgba(255,255,255,.8)">' + (E ? 'Глобальная DMC-компания' : 'Global DMC Partner') + '</span></div><h1>' + (E ? 'Исключительные travel-продукты в <em>11+ направлениях</em> мира' : 'Extraordinary travel experiences across <em>11+ destinations</em>') + '</h1><p class="hero-sub">' + (E ? 'Мы создаём, пакетируем и дистрибутируем travel-продукты по всему миру. Ваш надёжный DMC-партнёр от Дубая до Токио.' : 'We structure, package and distribute curated travel experiences worldwide. Your trusted DMC partner from Dubai to Tokyo.') + '</p><div class="hero-act"><a class="bp" data-nav="partner">' + (E ? 'Стать партнёром \u2192' : 'Become a partner \u2192') + '</a><a class="bs" data-scroll="dest" style="color:#fff">' + (E ? 'Направления' : 'Explore destinations') + '</a></div><div class="hero-dots"><div class="hero-dot active" data-hero="0"></div><div class="hero-dot" data-hero="1"></div><div class="hero-dot" data-hero="2"></div><div class="hero-dot" data-hero="3"></div><div class="hero-dot" data-hero="4"></div></div></div></section>' +
    trustBar() +
    whyPartner() +
    destinationsGrid() +
    svcTabsSection() +
    '<section class="sec" style="background:#fff"><div class="con"><div class="sh"><div class="stag">' + (E ? 'Отзывы' : 'Testimonials') + '</div><h2 class="stitle">' + (E ? 'Что говорят партнёры' : 'What partners say') + '</h2></div>' + testimonials() + '</div></section>' +
    trustBadges() +
    '<section class="sec"><div class="con"><div class="sh"><div class="stag">' + (E ? 'Сезонный календарь' : 'Seasonal calendar') + '</div><h2 class="stitle">' + (E ? 'Когда лучше ехать' : 'Best time to travel') + '</h2></div>' + seasonCalendar() + '</div></section>' +
    partnerForm();
}

function destinationsGrid() {
  const E = getLang() === 'ru';
  return '<section class="sec" id="dest" style="background:#fff"><div class="con"><div class="sh"><div class="stag">' + (E ? 'Направления' : 'Destinations') + '</div><h2 class="stitle">' + (E ? 'Куда мы отправляем ваших клиентов' : 'Where we take your clients') + '</h2></div><div class="dgrid">' + COUNTRIES.map(function (c) { return '<div class="dc" data-nav="' + c.id + '" style="cursor:pointer;background-image:url(\'' + c.img + '\');background-size:cover;background-position:center"><div class="dc-ov"><div class="dc-fl">' + c.flag + '</div><div class="dc-n">' + (E ? c.nr : c.n) + '</div><div class="dc-s">' + c.sub + '</div></div></div>'; }).join('') + '<div style="grid-column:span 2;border-radius:20px;background:linear-gradient(135deg,var(--c1),#E87B4C);padding:48px 40px;display:flex;flex-direction:column;justify-content:center;cursor:pointer;transition:all .4s;position:relative;overflow:hidden" data-nav="partner" onmouseover="this.style.transform=\'translateY(-4px)\'" onmouseout="this.style.transform=\'none\'"><div style="position:absolute;top:-30px;right:-30px;width:120px;height:120px;border-radius:50%;background:rgba(255,255,255,.1)"></div><div style="position:absolute;bottom:-40px;right:60px;width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,.06)"></div><div style="position:relative;z-index:2"><div style="font-size:32px;margin-bottom:16px">✈️</div><div style="font-family:var(--fd);font-size:28px;color:#fff;margin-bottom:8px">' + (E ? 'Нужно другое направление?' : 'Need a different destination?') + '</div><div style="font-size:15px;color:rgba(255,255,255,.8);margin-bottom:20px;font-weight:300;max-width:360px">' + (E ? 'Мы работаем с любыми запросами. Расскажите нам — мы найдём решение.' : 'We handle any request. Tell us what you need — we\'ll find a solution.') + '</div><div style="display:inline-flex;align-items:center;gap:8px;padding:12px 28px;background:#fff;color:var(--c1);border-radius:100px;font-size:14px;font-weight:600">' + (E ? 'Отправить запрос \u2192' : 'Send a request \u2192') + '</div></div></div></div></div></section>';
}

function svcTabsSection() {
  const E = getLang() === 'ru';
  const tabLabels = E
    ? ['🏨 Отели', '🏜️ Экскурсии', '🚗 Трансферы', '🎫 Билеты', '🛥️ Премиум', '📦 Пакеты']
    : ['🏨 Hotels', '🏜️ Excursions', '🚗 Transfers', '🎫 Tickets', '🛥️ Premium', '📦 Packages'];

  const d = svcData[0];
  const li = E ? 0 : 1;

  return '<section class="sec"><div class="con"><div class="sh"><div class="stag">' + (E ? 'Что вы можете продавать' : 'What you can sell') + '</div><h2 class="stitle">' + (E ? 'Полный портфель travel-продуктов' : 'Complete travel product portfolio') + '</h2><p class="sdesc">' + (E ? 'Всё необходимое для продажи 11+ направлений — через одну платформу' : 'Everything you need to sell 11+ destinations — through one platform') + '</p></div>' +
    '<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:40px" id="svc-tabs">' +
    tabLabels.map(function (label, i) {
      return '<button data-svc="' + i + '" class="svc-tab' + (i === 0 ? ' active' : '') + '" style="padding:10px 22px;border-radius:100px;border:1px solid var(--g200);background:' + (i === 0 ? '#fff' : 'transparent') + ';font-size:14px;font-weight:' + (i === 0 ? '600' : '500') + ';cursor:pointer;font-family:var(--fb);transition:all .3s;color:' + (i === 0 ? 'var(--dk)' : 'var(--g500)') + '">' + label + '</button>';
    }).join('') +
    '</div>' +
    '<div id="svc-panel" style="display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;background:#fff;border:1px solid var(--g200);border-radius:24px;overflow:hidden;min-height:360px">' +
    '<div id="svc-img" style="height:100%;min-height:360px;background:url(' + d.img + ') center/cover"></div>' +
    '<div style="padding:40px 40px 40px 0" id="svc-content">' +
    '<div style="font-family:var(--fd);font-size:48px;color:var(--c1);margin-bottom:8px" id="svc-num">' + d.num + '</div>' +
    '<div style="font-family:var(--fd);font-size:24px;color:var(--dk);margin-bottom:16px" id="svc-title">' + d.t[li] + '</div>' +
    '<div style="font-size:15px;line-height:1.8;color:var(--g500);font-weight:300;margin-bottom:24px" id="svc-desc">' + d.d[li] + '</div>' +
    '<div style="display:flex;gap:24px;margin-bottom:24px" id="svc-features">' +
    d.f.map(function (x) { return '<div style="font-size:13px;color:var(--g700)"><span style="color:var(--c1);font-weight:700">✓</span> ' + x[li] + '</div>'; }).join('') +
    '</div>' +
    '<button class="bp" data-nav="partner" style="font-size:14px;padding:12px 28px">' + (E ? 'Запросить тарифы \u2192' : 'Request rates \u2192') + '</button>' +
    '</div></div>' +
    '</div></section>';
}
