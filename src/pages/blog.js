import { getLang } from '../state.js';

export function renderBlog() {
  const E = getLang() === 'ru';
  const posts = [
    { t: E ? 'Топ-10 направлений 2026' : 'Top 10 Destinations 2026', d: 'Mar 28', cat: 'Trends', img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600', ex: E ? 'Рост спроса и маржинальности для агентств.' : 'Demand growth and margins for agencies.' },
    { t: E ? 'Маржа на турах по ОАЭ' : 'UAE Tour Margins', d: 'Mar 20', cat: 'Tips', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600', ex: E ? 'Стратегии ценообразования.' : 'Pricing strategies.' },
    { t: E ? 'Китайский рынок 2026' : 'China Market 2026', d: 'Mar 12', cat: 'Market', img: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600', ex: E ? 'Анализ outbound-рынка.' : 'Outbound market analysis.' },
    { t: E ? 'Гайд по B2B-платформе' : 'B2B Platform Guide', d: 'Mar 5', cat: 'Product', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600', ex: E ? 'Пошаговое руководство.' : 'Step-by-step guide.' },
    { t: E ? 'Мальдивы: маржинальность' : 'Maldives: Margins', d: 'Feb 26', cat: 'Insights', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600', ex: E ? 'Экономика люкс-направления.' : 'Luxury destination economics.' },
    { t: E ? 'Тренды MICE 2026' : 'MICE Trends 2026', d: 'Feb 18', cat: 'MICE', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600', ex: E ? 'Куда движется корпоративный travel.' : 'Where corporate travel is heading.' }
  ];
  return '<div style="padding:140px 0 80px;background:linear-gradient(135deg,var(--dk),#1f2937)"><div class="con" style="text-align:center"><div class="stag" style="color:var(--c1)">Blog</div><h1 style="font-family:var(--fd);font-size:clamp(36px,5vw,52px);color:#fff">' + (E ? 'Полезное для партнёров' : 'Insights for partners') + '</h1></div></div><section class="sec"><div class="con"><div class="sgrid">' + posts.map(function (p) { return '<article class="sv anim"><div class="sv-img"><img loading="lazy" src="' + p.img + '" alt="' + p.t + '"></div><div class="sv-b"><div style="display:flex;gap:8px;margin-bottom:12px"><span style="font-size:11px;font-weight:600;background:var(--c1l);color:var(--c1);padding:4px 10px;border-radius:100px">' + p.cat + '</span><span style="font-size:11px;color:var(--g500)">' + p.d + '</span></div><div class="sv-t">' + p.t + '</div><p class="sv-p">' + p.ex + '</p></div></article>'; }).join('') + '</div></div></section>';
}
