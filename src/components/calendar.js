import { getLang } from '../state.js';

export function seasonCalendar() {
  const E = getLang() === 'ru';
  const mo = E ? ['Я','Ф','М','А','М','И','И','А','С','О','Н','Д'] : ['J','F','M','A','M','J','J','A','S','O','N','D'];
  const data = [
    { n: 'UAE', m: [1,1,1,2,3,3,3,3,3,2,1,1] },
    { n: E ? 'Таиланд' : 'Thailand', m: [1,1,1,2,2,3,3,3,3,2,1,1] },
    { n: E ? 'Вьетнам' : 'Vietnam', m: [1,1,1,2,2,3,3,3,3,1,1,1] },
    { n: E ? 'Китай' : 'China', m: [2,2,1,1,1,2,3,3,1,1,1,2] },
    { n: E ? 'Турция' : 'Turkey', m: [2,2,2,1,1,1,2,2,1,1,2,2] },
    { n: E ? 'Египет' : 'Egypt', m: [1,1,1,2,2,3,3,3,2,1,1,1] },
    { n: E ? 'Европа' : 'Europe', m: [2,2,2,1,1,1,1,2,1,1,2,2] },
    { n: E ? 'Мальдивы' : 'Maldives', m: [1,1,1,1,2,3,3,3,2,2,1,1] },
    { n: E ? 'Япония' : 'Japan', m: [2,2,1,1,1,2,2,3,2,1,1,2] },
    { n: E ? 'Индонезия' : 'Indonesia', m: [3,3,3,1,1,1,1,1,1,1,2,3] },
    { n: E ? 'Маврикий' : 'Mauritius', m: [3,3,3,2,1,1,1,1,1,1,2,2] }
  ];
  const cls = ['', 'cal-best', 'cal-good', 'cal-ok'];
  let html = '<div class="cal-grid"><div class="cal-h"></div>' + mo.map(function (m) { return '<div class="cal-h">' + m + '</div>'; }).join('');
  data.forEach(function (r) {
    html += '<div class="cal-c">' + r.n + '</div>' + r.m.map(function (v) { return '<div class="cal-cell ' + cls[v] + '">' + (v === 1 ? '\u25CF' : v === 2 ? '\u25D0' : '\u25CB') + '</div>'; }).join('');
  });
  return html + '</div><div style="display:flex;gap:16px;margin-top:12px;font-size:12px;color:var(--g500)"><span><span class="cal-cell cal-best" style="display:inline-block;width:16px;text-align:center;font-size:10px">\u25CF</span> ' + (E ? 'Лучший' : 'Best') + '</span><span><span class="cal-cell cal-good" style="display:inline-block;width:16px;text-align:center;font-size:10px">\u25D0</span> ' + (E ? 'Хороший' : 'Good') + '</span><span><span class="cal-cell cal-ok" style="display:inline-block;width:16px;text-align:center;font-size:10px">\u25CB</span> ' + (E ? 'Не сезон' : 'Off-season') + '</span></div>';
}
