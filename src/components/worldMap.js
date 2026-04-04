import { getLang } from '../state.js';

export function worldMap() {
  const E = getLang() === 'ru';
  const pins = [
    { id: 'uae', x: 58.5, y: 42, n: 'UAE', nr: 'ОАЭ', flag: '🇦🇪' },
    { id: 'thailand', x: 73, y: 46, n: 'Thailand', nr: 'Таиланд', flag: '🇹🇭' },
    { id: 'vietnam', x: 75, y: 44, n: 'Vietnam', nr: 'Вьетнам', flag: '🇻🇳' },
    { id: 'china', x: 76, y: 35, n: 'China', nr: 'Китай', flag: '🇨🇳' },
    { id: 'turkey', x: 52, y: 34, n: 'Turkey', nr: 'Турция', flag: '🇹🇷' },
    { id: 'egypt', x: 50, y: 42, n: 'Egypt', nr: 'Египет', flag: '🇪🇬' },
    { id: 'europe', x: 47, y: 28, n: 'Europe', nr: 'Европа', flag: '🇪🇺' },
    { id: 'maldives', x: 63, y: 52, n: 'Maldives', nr: 'Мальдивы', flag: '🇲🇻' },
    { id: 'japan', x: 84, y: 33, n: 'Japan', nr: 'Япония', flag: '🇯🇵' },
    { id: 'indonesia', x: 77, y: 55, n: 'Indonesia', nr: 'Индонезия', flag: '🇮🇩' },
    { id: 'mauritius', x: 57, y: 64, n: 'Mauritius', nr: 'Маврикий', flag: '🇲🇺' }
  ];
  return '<div style="position:relative;width:100%;max-width:900px;margin:0 auto;aspect-ratio:2/1;background:var(--dk);border-radius:24px;overflow:hidden;padding:20px">' +
    '<svg viewBox="0 0 1000 500" style="width:100%;height:100%;opacity:.15"><path d="M150,120 Q200,100 250,115 L300,105 Q350,95 400,110 L420,108 Q450,100 480,115 L510,120 Q530,125 540,135 L530,180 Q520,200 500,210 L480,230 Q450,250 420,240 L380,235 Q350,240 320,260 L300,280 Q280,300 250,290 L220,270 Q200,260 180,240 L160,200 Q150,170 150,150Z" fill="#fff"/><path d="M480,90 Q520,70 560,80 L600,75 Q650,70 700,85 L750,80 Q800,75 830,95 L840,120 Q845,150 830,170 L810,190 Q790,200 760,195 L730,200 Q700,210 680,200 L650,190 Q620,180 600,170 L580,175 Q560,185 540,175 L520,160 Q500,140 490,120Z" fill="#fff"/><path d="M700,160 Q730,150 760,160 L790,170 Q810,180 820,200 L830,230 Q835,260 820,280 L800,300 Q780,310 760,305 L740,310 Q720,320 700,310 L680,300 Q660,280 665,260 L670,240 Q680,220 690,200Z" fill="#fff"/><path d="M550,100 Q580,95 610,105 L640,100 Q660,95 680,110 L700,130 Q710,150 700,170 L680,180 Q660,185 640,175 L620,170 Q600,175 580,165 L560,150 Q545,130 550,110Z" fill="#fff"/><path d="M170,300 Q200,290 240,300 L280,310 Q320,320 340,340 L350,360 Q355,380 340,395 L310,400 Q280,405 250,395 L220,380 Q190,360 180,340Z" fill="#fff"/><path d="M730,350 Q770,330 810,340 L850,355 Q880,370 890,395 L880,420 Q860,440 830,445 L790,440 Q760,430 740,410 L730,390 Q725,370 730,350Z" fill="#fff"/></svg>' +
    pins.map(function (p) {
      return '<div data-nav="' + p.id + '" style="position:absolute;left:' + p.x + '%;top:' + p.y + '%;transform:translate(-50%,-50%);cursor:pointer;text-align:center;z-index:2" class="map-pin">' +
        '<div style="width:14px;height:14px;background:var(--c1);border-radius:50%;margin:0 auto;box-shadow:0 0 0 4px rgba(232,96,76,.25);transition:all .3s;animation:map-pulse 3s infinite ' + Math.random() * 2 + 's"></div>' +
        '<div style="margin-top:6px;font-size:12px;font-weight:600;color:#fff;white-space:nowrap;text-shadow:0 1px 4px rgba(0,0,0,.5)">' + p.flag + ' ' + (E ? p.nr : p.n) + '</div></div>';
    }).join('') +
    '</div>';
}
