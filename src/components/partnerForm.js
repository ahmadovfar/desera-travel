import { COUNTRIES } from '../data/countries.js';
import { getLang } from '../state.js';

// Change this to your email to receive form submissions
export const FORM_EMAIL = 'reservation@desera.travel';

export function partnerForm() {
  const E = getLang() === 'ru';
  return '<section class="sec" style="background:#fff"><div class="con"><div class="sh"><div class="stag">' + (E ? 'Партнёрство' : 'Partnership') + '</div><h2 class="stitle">' + (E ? 'Станьте партнёром Desera' : 'Become a Desera partner') + '</h2><p class="sdesc">' + (E ? 'Попробуйте бесплатно. Отправьте первый запрос — получите ответ за 2 часа. Без обязательств.' : 'Try for free. Send your first request — get a response in 2 hours. No commitment.') + '</p></div>' +
    '<form class="form-box" id="partner-form" novalidate>' +
    '<div id="form-success" style="display:none;text-align:center;padding:40px 0">' +
      '<div style="font-size:48px;margin-bottom:16px">✅</div>' +
      '<h3 style="font-family:var(--fd);font-size:24px;color:var(--dk);margin-bottom:12px">' + (E ? 'Заявка отправлена!' : 'Application sent!') + '</h3>' +
      '<p style="font-size:16px;color:var(--g500);line-height:1.6">' + (E ? 'Спасибо! Мы свяжемся с вами в течение 2 рабочих часов.' : 'Thank you! We will contact you within 2 business hours.') + '</p>' +
    '</div>' +
    '<div id="form-fields">' +
    '<div class="form-row"><div class="form-field"><label>' + (E ? 'Имя *' : 'First name *') + '</label><input type="text" name="first_name" required placeholder="John"></div><div class="form-field"><label>' + (E ? 'Фамилия *' : 'Last name *') + '</label><input type="text" name="last_name" required placeholder="Smith"></div></div>' +
    '<div class="form-row"><div class="form-field"><label>' + (E ? 'Компания *' : 'Company *') + '</label><input type="text" name="company" required placeholder="Your Travel Agency"></div><div class="form-field"><label>' + (E ? 'Тип компании *' : 'Type *') + '</label><select name="company_type"><option>' + (E ? 'Турагентство' : 'Travel Agency') + '</option><option>' + (E ? 'Туроператор' : 'Tour Operator') + '</option><option>DMC</option><option>OTA</option><option>' + (E ? 'Корпоративный' : 'Corporate') + '</option></select></div></div>' +
    '<div class="form-row"><div class="form-field"><label>Email *</label><input type="email" name="email" required placeholder="john@company.com"></div><div class="form-field"><label>' + (E ? 'Телефон *' : 'Phone *') + '</label><input type="tel" name="phone" required placeholder="+971 50 000 0000"></div></div>' +
    '<div class="form-row"><div class="form-field"><label>' + (E ? 'Страна *' : 'Country *') + '</label><input type="text" name="country" required placeholder="UAE"></div><div class="form-field"><label>' + (E ? 'Сайт' : 'Website') + '</label><input type="url" name="website" placeholder="https://company.com"></div></div>' +
    '<p style="font-size:13px;font-weight:600;color:var(--dk);margin-bottom:12px">' + (E ? 'ИНТЕРЕСУЮЩИЕ НАПРАВЛЕНИЯ' : 'DESTINATIONS OF INTEREST') + '</p>' +
    '<div class="checks-grid">' + COUNTRIES.map(function (c) { return '<label class="check-item"><input type="checkbox" name="destinations" value="' + c.n + '"> ' + c.flag + ' ' + c.n + '</label>'; }).join('') + '</div>' +
    '<div class="form-row"><div class="form-field full"><label>' + (E ? 'Сообщение' : 'Message') + '</label><textarea name="message" placeholder="' + (E ? 'Расскажите о вашем бизнесе...' : 'Tell us about your business...') + '"></textarea></div></div>' +
    '<input type="hidden" name="_subject" value="New Desera Partner Application">' +
    '<input type="hidden" name="_captcha" value="false">' +
    '<input type="hidden" name="_template" value="table">' +
    '<input type="hidden" name="_autoresponse" value="Thank you for your partnership application with Desera Travel! We have received your request and our team will respond within 2 business hours. In the meantime, feel free to reach us on WhatsApp: https://wa.me/992752553366 — Desera Travel Team">' +
    '<div style="text-align:center;margin-top:24px">' +
      '<button type="submit" class="bp" id="form-submit-btn">' + (E ? 'Отправить заявку \u2192' : 'Submit application \u2192') + '</button>' +
      '<p id="form-error" style="font-size:13px;color:#e53e3e;margin-top:12px;display:none"></p>' +
      '<p style="font-size:13px;color:var(--g500);margin-top:12px">' + (E ? 'Обычно отвечаем в течение 2 часов' : 'We respond within 2 business hours') + '</p>' +
    '</div>' +
    '</div>' +
    '</form></div></section>';
}
