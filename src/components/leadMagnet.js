import { getLang } from '../state.js';

export function leadMagnet() {
  const E = getLang() === 'ru';
  return '<section class="sec lead-magnet"><div class="con"><div class="lm-box">' +
    '<div class="lm-content">' +
    '<div class="lm-badge">' + (E ? 'БЕСПЛАТНЫЙ ГАЙД' : 'FREE GUIDE') + '</div>' +
    '<h2 class="lm-title">' + (E ? 'Гид по маржинальности\nв 11+ направлениях' : 'Margin Guide\nfor 11+ Destinations') + '</h2>' +
    '<p class="lm-desc">' + (E ? 'Узнайте, какие направления приносят максимальную прибыль вашему агентству. Сравнение нетто-ставок, сезонность, средний чек.' : 'Discover which destinations deliver the highest margins for your agency. Net rate comparisons, seasonality, average ticket value.') + '</p>' +
    '<ul class="lm-list">' +
    '<li>' + (E ? 'Средняя маржа по 11 направлениям' : 'Average margins across 11 destinations') + '</li>' +
    '<li>' + (E ? 'Лучшие сезоны для максимальной прибыли' : 'Best seasons for maximum profit') + '</li>' +
    '<li>' + (E ? 'Топ-продукты с высокой наценкой' : 'Top high-markup products') + '</li>' +
    '<li>' + (E ? 'Реальные кейсы партнёров' : 'Real partner case studies') + '</li>' +
    '</ul>' +
    '<form class="lm-form" id="lm-form" onsubmit="return handleLeadMagnet(event)">' +
    '<div class="lm-inputs">' +
    '<input type="email" name="email" required placeholder="' + (E ? 'Ваш email' : 'Your email') + '" class="lm-email">' +
    '<button type="submit" class="lm-btn" id="lm-btn">' + (E ? 'Скачать PDF' : 'Download PDF') + '</button>' +
    '</div>' +
    '<p class="lm-note">' + (E ? 'Отправим на email. Без спама.' : 'Sent to your email. No spam.') + '</p>' +
    '</form>' +
    '<div id="lm-success" style="display:none">' +
    '<div style="font-size:32px;margin-bottom:12px">📧</div>' +
    '<p style="font-size:16px;font-weight:600;color:var(--dk)">' + (E ? 'Проверьте почту!' : 'Check your inbox!') + '</p>' +
    '<p style="font-size:14px;color:var(--g500);margin-top:4px">' + (E ? 'Гайд отправлен на ваш email.' : 'Guide sent to your email.') + '</p>' +
    '</div>' +
    '</div>' +
    '<div class="lm-visual">' +
    '<div class="lm-pdf">' +
    '<div class="lm-pdf-header">DESERA TRAVEL</div>' +
    '<div class="lm-pdf-title">' + (E ? 'Гид по маржинальности' : 'Margin Guide') + '</div>' +
    '<div class="lm-pdf-sub">2026</div>' +
    '<div class="lm-pdf-bars">' +
    '<div class="lm-bar" style="height:60%"><span>UAE</span></div>' +
    '<div class="lm-bar" style="height:80%"><span>MV</span></div>' +
    '<div class="lm-bar" style="height:45%"><span>TH</span></div>' +
    '<div class="lm-bar" style="height:70%"><span>JP</span></div>' +
    '<div class="lm-bar" style="height:55%"><span>TR</span></div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div></div></section>';
}
