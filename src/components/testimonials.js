import { getLang } from '../state.js';

export function testimonials() {
  const E = getLang() === 'ru';
  const t = [
    { q: E ? 'Desera \u2014 наш основной DMC-партн\u0451р. Отличные тарифы и быстрая обработка.' : 'Desera is our primary DMC partner. Excellent rates and fast processing.', n: 'Sarah Mitchell', r: 'Horizon Travel UK', i: 'SM' },
    { q: E ? 'Качество продукта и скорость ответа на высоте. Рекомендуем.' : 'Product quality and response speed are outstanding. Recommended.', n: 'Ahmed Al-Rashid', r: 'Gulf Tours Dubai', i: 'AR' },
    { q: E ? 'Один DMC для всех направлений \u2014 серь\u0451зно упростило работу.' : 'One DMC for all destinations \u2014 seriously simplified operations.', n: 'Maria Chen', r: 'Asia Pacific Travel', i: 'MC' }
  ];
  return '<div class="test-grid">' + t.map(function (x) { return '<article class="test-card anim"><blockquote class="test-q">"' + x.q + '"</blockquote><div class="test-author"><div class="test-av">' + x.i + '</div><div><div class="test-name">' + x.n + '</div><div class="test-role">' + x.r + '</div></div></div></article>'; }).join('') + '</div>';
}

export function trustBadges() {
  return '<div class="trust-logos"><span class="trust-logo">IATA</span><span class="trust-logo">Dubai Tourism</span><span class="trust-logo">ASTA</span><span class="trust-logo">SSL Secured</span></div>';
}
