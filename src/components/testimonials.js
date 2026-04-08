import { getLang } from '../state.js';

export function testimonials() {
  var E = getLang() === 'ru';
  var t = [
    { q: E ? 'Desera \u2014 \u043d\u0430\u0448 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 DMC-\u043f\u0430\u0440\u0442\u043d\u0451\u0440. \u041e\u0442\u043b\u0438\u0447\u043d\u044b\u0435 \u0442\u0430\u0440\u0438\u0444\u044b \u0438 \u0431\u044b\u0441\u0442\u0440\u0430\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430. \u041e\u0442\u0432\u0435\u0442 \u0437\u0430 \u0447\u0430\u0441 \u043d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u043e \u0414\u0443\u0431\u0430\u044e \ud83d\udc4d' : 'Desera is our primary DMC partner. Excellent rates and fast processing. Got a response within an hour on our last Dubai request \ud83d\udc4d', n: 'Sarah Mitchell', r: 'Horizon Travel, UK', i: 'SM' },
    { q: E ? '\u041e\u0434\u0438\u043d DMC \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0439 \u2014 \u0441\u0435\u0440\u044c\u0451\u0437\u043d\u043e \u0443\u043f\u0440\u043e\u0441\u0442\u0438\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u0443. \u0420\u0430\u043d\u044c\u0448\u0435 \u0443 \u043d\u0430\u0441 \u0431\u044b\u043b\u043e 4 \u0440\u0430\u0437\u043d\u044b\u0445 \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0430, \u0442\u0435\u043f\u0435\u0440\u044c \u043e\u0434\u0438\u043d. \u042d\u043a\u043e\u043d\u043e\u043c\u0438\u044f \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043a\u043e\u043b\u043e\u0441\u0441\u0430\u043b\u044c\u043d\u0430\u044f.' : 'One DMC for all destinations \u2014 seriously simplified operations. We used to have 4 different suppliers, now just one. The time savings are massive.', n: 'Ahmed Al-Rashid', r: 'Gulf Tours, Dubai', i: 'AR' },
    { q: E ? '\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 \u0438 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u043e\u0442\u0432\u0435\u0442\u0430 \u043d\u0430 \u0432\u044b\u0441\u043e\u0442\u0435. \u041a\u043b\u0438\u0435\u043d\u0442\u044b \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u044b, \u043c\u0430\u0440\u0436\u0430 \u0445\u043e\u0440\u043e\u0448\u0430\u044f. \u0427\u0442\u043e \u0435\u0449\u0451 \u043d\u0443\u0436\u043d\u043e? \ud83d\ude04' : 'Product quality and response speed are outstanding. Clients are happy, margins are good. What more do you need? \ud83d\ude04', n: 'Maria Chen', r: 'Asia Pacific Travel', i: 'MC' }
  ];
  return '<div style="font-size:12px;color:var(--g500);text-align:center;margin-bottom:24px">' + (E ? '* \u041f\u0440\u0438\u043c\u0435\u0440\u044b \u043e\u0442\u0437\u044b\u0432\u043e\u0432 \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u043e\u0432' : '* Example partner feedback') + '</div><div class="chat-grid">' + t.map(function(x) {
    return '<div class="chat-card anim"><div class="chat-bubble"><p>' + x.q + '</p></div><div class="chat-author"><div class="chat-av">' + x.i + '</div><div><div class="chat-name">' + x.n + '</div><div class="chat-role">' + x.r + '</div></div></div></div>';
  }).join('') + '</div>';
}

export function trustBadges() {
  return '<div class="trust-logos"><span class="trust-logo">IATA</span><span class="trust-logo">Dubai Tourism</span><span class="trust-logo">ASTA</span><span class="trust-logo">SSL Secured</span></div>';
}
