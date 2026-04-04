import { getLang } from '../state.js';

export function renderTerms() {
  const E = getLang() === 'ru';
  const updated = '2026-04-05';

  if (E) {
    return '<div style="padding:140px 0 80px;background:linear-gradient(135deg,var(--dk),#1f2937)"><div class="con" style="text-align:center"><h1 style="font-family:var(--fd);font-size:clamp(32px,4vw,48px);color:#fff">Условия использования</h1><p style="color:rgba(255,255,255,.6);margin-top:12px">Последнее обновление: ' + updated + '</p></div></div>' +
    '<section class="sec"><div class="con" style="max-width:800px"><div class="legal-content">' +

    '<h2>1. Общие положения</h2>' +
    '<p>Настоящие Условия использования (далее — «Условия») регулируют доступ к сайту desera.travel (далее — «Сайт»), управляемому Desera Travel (далее — «Компания»). Используя Сайт, вы подтверждаете, что прочитали, поняли и согласны соблюдать настоящие Условия.</p>' +
    '<p>Если вы не согласны с какими-либо положениями, пожалуйста, прекратите использование Сайта.</p>' +

    '<h2>2. Описание услуг</h2>' +
    '<p>Desera Travel — глобальная DMC-компания (Destination Management Company), предоставляющая B2B-услуги для туристических агентств, туроператоров и OTA. Наши услуги включают:</p>' +
    '<ul><li>Бронирование отелей по нетто-тарифам</li><li>Организацию трансферов и экскурсий</li><li>Билеты на аттракции и мероприятия</li><li>Премиум и VIP-услуги</li><li>Комплексные турпакеты</li></ul>' +
    '<p>Сайт носит информационный характер и служит для привлечения B2B-партнёров. Конкретные условия сотрудничества определяются отдельными договорами.</p>' +

    '<h2>3. Право на использование</h2>' +
    '<p>Сайт предназначен для профессионалов туристической индустрии. Используя Сайт, вы подтверждаете, что вам исполнилось 18 лет и вы являетесь представителем юридического лица или индивидуальным предпринимателем в сфере туризма.</p>' +

    '<h2>4. Интеллектуальная собственность</h2>' +
    '<p>Все материалы на Сайте, включая тексты, изображения, логотипы, дизайн, графику и программный код, являются собственностью Desera Travel или используются на законных основаниях. Запрещается:</p>' +
    '<ul><li>Копирование, воспроизведение или распространение материалов Сайта без письменного разрешения</li><li>Использование товарных знаков Desera Travel без авторизации</li><li>Модификация или создание производных работ на основе материалов Сайта</li></ul>' +

    '<h2>5. Отказ от гарантий</h2>' +
    '<p>Сайт и его содержимое предоставляются «как есть» без каких-либо явных или подразумеваемых гарантий. Мы прилагаем разумные усилия для обеспечения точности информации, однако не гарантируем:</p>' +
    '<ul><li>Полноту, точность или актуальность информации на Сайте</li><li>Бесперебойную или безошибочную работу Сайта</li><li>Отсутствие вирусов или вредоносных компонентов</li></ul>' +
    '<p>Цены, наличие услуг и другие коммерческие условия, указанные на Сайте, носят справочный характер и не являются публичной офертой.</p>' +

    '<h2>6. Ограничение ответственности</h2>' +
    '<p>В максимальной степени, допустимой применимым законодательством, Desera Travel не несёт ответственности за:</p>' +
    '<ul><li>Прямые, косвенные, случайные или последующие убытки, возникающие в связи с использованием Сайта</li><li>Убытки, связанные с невозможностью использования Сайта</li><li>Действия третьих лиц в связи с использованием Сайта</li><li>Содержание сайтов третьих лиц, на которые ведут ссылки с нашего Сайта</li></ul>' +

    '<h2>7. Обязательства пользователя</h2>' +
    '<p>Используя Сайт, вы обязуетесь:</p>' +
    '<ul><li>Предоставлять достоверную информацию при заполнении форм</li><li>Не использовать Сайт для незаконных целей</li><li>Не пытаться получить несанкционированный доступ к Сайту или его системам</li><li>Не распространять вредоносное ПО через Сайт</li><li>Не осуществлять автоматический сбор данных без нашего разрешения</li></ul>' +

    '<h2>8. Ссылки на сторонние ресурсы</h2>' +
    '<p>Сайт может содержать ссылки на сторонние веб-сайты и сервисы. Мы не контролируем и не несём ответственности за содержание, политику конфиденциальности или практику сторонних сайтов.</p>' +

    '<h2>9. Применимое право и разрешение споров</h2>' +
    '<p>Настоящие Условия регулируются и толкуются в соответствии с законодательством Объединённых Арабских Эмиратов. Любые споры подлежат разрешению в судах Дубая, ОАЭ.</p>' +
    '<p>Стороны обязуются приложить разумные усилия для разрешения споров путём переговоров до обращения в суд.</p>' +

    '<h2>10. Изменение условий</h2>' +
    '<p>Мы оставляем за собой право изменять настоящие Условия в любое время. Изменения вступают в силу с момента публикации на Сайте. Продолжение использования Сайта после публикации изменений означает ваше согласие с обновлёнными Условиями.</p>' +

    '<h2>11. Разделимость</h2>' +
    '<p>Если какое-либо положение настоящих Условий будет признано недействительным или неисполнимым, остальные положения остаются в полной силе.</p>' +

    '<h2>12. Контакты</h2>' +
    '<p>По вопросам, связанным с настоящими Условиями:</p>' +
    '<ul><li>Email: <a href="mailto:reservation@desera.travel">reservation@desera.travel</a></li><li>Компания: Desera Travel</li><li>Адрес: Dubai, UAE</li></ul>' +

    '</div></div></section>';
  }

  return '<div style="padding:140px 0 80px;background:linear-gradient(135deg,var(--dk),#1f2937)"><div class="con" style="text-align:center"><h1 style="font-family:var(--fd);font-size:clamp(32px,4vw,48px);color:#fff">Terms of Service</h1><p style="color:rgba(255,255,255,.6);margin-top:12px">Last updated: ' + updated + '</p></div></div>' +
  '<section class="sec"><div class="con" style="max-width:800px"><div class="legal-content">' +

  '<h2>1. Introduction</h2>' +
  '<p>These Terms of Service (hereinafter "Terms") govern your access to and use of the website desera.travel (the "Website"), operated by Desera Travel (the "Company"). By using the Website, you acknowledge that you have read, understood, and agree to be bound by these Terms.</p>' +
  '<p>If you disagree with any of these Terms, please discontinue use of the Website.</p>' +

  '<h2>2. Description of Services</h2>' +
  '<p>Desera Travel is a global Destination Management Company (DMC) providing B2B services to travel agencies, tour operators, and OTAs. Our services include:</p>' +
  '<ul><li>Hotel bookings at net rates</li><li>Transfer and excursion arrangements</li><li>Attraction and event tickets</li><li>Premium and VIP services</li><li>Comprehensive travel packages</li></ul>' +
  '<p>The Website is informational in nature and serves to attract B2B partners. Specific terms of cooperation are determined by separate agreements.</p>' +

  '<h2>3. Eligibility</h2>' +
  '<p>The Website is intended for travel industry professionals. By using the Website, you confirm that you are at least 18 years old and represent a legal entity or are a sole proprietor operating in the tourism sector.</p>' +

  '<h2>4. Intellectual Property</h2>' +
  '<p>All materials on the Website, including text, images, logos, design, graphics, and software code, are the property of Desera Travel or are used under lawful license. You may not:</p>' +
  '<ul><li>Copy, reproduce, or distribute Website materials without prior written consent</li><li>Use Desera Travel trademarks without authorization</li><li>Modify or create derivative works based on Website materials</li></ul>' +

  '<h2>5. Disclaimer of Warranties</h2>' +
  '<p>The Website and its content are provided on an "as is" basis without warranties of any kind, express or implied. While we make reasonable efforts to ensure accuracy, we do not guarantee:</p>' +
  '<ul><li>The completeness, accuracy, or timeliness of information on the Website</li><li>Uninterrupted or error-free Website operation</li><li>The absence of viruses or harmful components</li></ul>' +
  '<p>Prices, service availability, and other commercial terms shown on the Website are indicative and do not constitute a public offer.</p>' +

  '<h2>6. Limitation of Liability</h2>' +
  '<p>To the maximum extent permitted by applicable law, Desera Travel shall not be liable for:</p>' +
  '<ul><li>Direct, indirect, incidental, or consequential damages arising from use of the Website</li><li>Losses related to inability to use the Website</li><li>Actions of third parties in connection with the Website</li><li>Content of third-party websites linked from our Website</li></ul>' +

  '<h2>7. User Obligations</h2>' +
  '<p>By using the Website, you agree to:</p>' +
  '<ul><li>Provide accurate information when completing forms</li><li>Not use the Website for unlawful purposes</li><li>Not attempt unauthorized access to the Website or its systems</li><li>Not distribute malware through the Website</li><li>Not engage in automated data collection without our permission</li></ul>' +

  '<h2>8. Third-Party Links</h2>' +
  '<p>The Website may contain links to third-party websites and services. We do not control and are not responsible for the content, privacy policies, or practices of third-party websites.</p>' +

  '<h2>9. Governing Law and Dispute Resolution</h2>' +
  '<p>These Terms are governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes shall be subject to the jurisdiction of the courts of Dubai, UAE.</p>' +
  '<p>The parties shall make reasonable efforts to resolve disputes through negotiation before resorting to litigation.</p>' +

  '<h2>10. Changes to Terms</h2>' +
  '<p>We reserve the right to modify these Terms at any time. Changes become effective upon publication on the Website. Continued use of the Website after changes are posted constitutes your acceptance of the updated Terms.</p>' +

  '<h2>11. Severability</h2>' +
  '<p>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.</p>' +

  '<h2>12. Contact Us</h2>' +
  '<p>For questions regarding these Terms:</p>' +
  '<ul><li>Email: <a href="mailto:reservation@desera.travel">reservation@desera.travel</a></li><li>Company: Desera Travel</li><li>Address: Dubai, UAE</li></ul>' +

  '</div></div></section>';
}
