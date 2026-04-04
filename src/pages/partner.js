import { getLang } from '../state.js';
import { partnerForm } from '../components/partnerForm.js';

export function renderPartner() {
  const E = getLang() === 'ru';
  return '<div style="padding:140px 0 0;background:linear-gradient(135deg,var(--dk),#1f2937);text-align:center"><div class="con"><div class="stag" style="color:var(--c1)">' + (E ? 'Партнёрство' : 'Partnership') + '</div><h1 style="font-family:var(--fd);font-size:clamp(36px,5vw,52px);color:#fff;margin-bottom:16px">' + (E ? 'Станьте партнёром Desera' : 'Become a Desera partner') + '</h1><p style="font-size:18px;color:rgba(255,255,255,.6);font-weight:300;max-width:560px;margin:0 auto">' + (E ? 'Заполните форму — ответим в течение 2 часов.' : 'Fill out the form — we respond within 2 hours.') + '</p></div></div>' + partnerForm();
}
