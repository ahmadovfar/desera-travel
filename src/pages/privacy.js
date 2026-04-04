import { getLang } from '../state.js';

export function renderPrivacy() {
  const E = getLang() === 'ru';
  const updated = '2026-04-05';

  if (E) {
    return '<div style="padding:140px 0 80px;background:linear-gradient(135deg,var(--dk),#1f2937)"><div class="con" style="text-align:center"><h1 style="font-family:var(--fd);font-size:clamp(32px,4vw,48px);color:#fff">Политика конфиденциальности</h1><p style="color:rgba(255,255,255,.6);margin-top:12px">Последнее обновление: ' + updated + '</p></div></div>' +
    '<section class="sec"><div class="con" style="max-width:800px"><div class="legal-content">' +

    '<h2>1. Общие положения</h2>' +
    '<p>Desera Travel (далее — «Компания», «мы», «нас») уважает вашу конфиденциальность и обязуется защищать персональные данные, которые вы нам предоставляете. Настоящая Политика конфиденциальности описывает, какие данные мы собираем, как их используем, храним и защищаем.</p>' +
    '<p>Используя сайт desera.travel (далее — «Сайт»), вы соглашаетесь с условиями настоящей Политики. Если вы не согласны с какими-либо положениями, пожалуйста, прекратите использование Сайта.</p>' +

    '<h2>2. Какие данные мы собираем</h2>' +
    '<p>Мы можем собирать следующие категории персональных данных:</p>' +
    '<h3>2.1. Данные, предоставленные вами добровольно:</h3>' +
    '<ul><li>Имя и фамилия</li><li>Название компании</li><li>Адрес электронной почты</li><li>Номер телефона</li><li>Страна проживания</li><li>Веб-сайт компании</li><li>Сообщения, отправленные через форму обратной связи</li><li>Предпочтения по направлениям</li></ul>' +

    '<h3>2.2. Данные, собираемые автоматически:</h3>' +
    '<ul><li>IP-адрес</li><li>Тип и версия браузера</li><li>Операционная система</li><li>Страницы, которые вы посещаете на Сайте</li><li>Дата и время посещения</li><li>Источник перехода (referrer)</li><li>Данные файлов cookie (см. раздел 6)</li></ul>' +

    '<h2>3. Цели обработки данных</h2>' +
    '<p>Мы используем ваши данные исключительно для следующих целей:</p>' +
    '<ul><li>Обработка ваших запросов и заявок на партнёрство</li><li>Связь с вами по вопросам сотрудничества</li><li>Предоставление информации об услугах и тарифах</li><li>Улучшение работы Сайта и пользовательского опыта</li><li>Аналитика посещаемости (Google Analytics)</li><li>Соблюдение правовых обязательств</li></ul>' +

    '<h2>4. Правовые основания обработки (GDPR)</h2>' +
    '<p>Мы обрабатываем ваши персональные данные на следующих правовых основаниях:</p>' +
    '<ul><li><strong>Согласие</strong> — когда вы заполняете форму на сайте или принимаете файлы cookie</li><li><strong>Законный интерес</strong> — для улучшения наших услуг и обеспечения безопасности Сайта</li><li><strong>Исполнение договора</strong> — для обработки ваших запросов и предоставления услуг</li><li><strong>Юридическая обязанность</strong> — для соблюдения применимого законодательства</li></ul>' +

    '<h2>5. Хранение и защита данных</h2>' +
    '<p>Мы принимаем разумные организационные и технические меры для защиты ваших данных от несанкционированного доступа, изменения, раскрытия или уничтожения. Данные хранятся на защищённых серверах с использованием шифрования SSL/TLS.</p>' +
    '<p>Мы храним ваши персональные данные не дольше, чем это необходимо для целей, для которых они были собраны, или в соответствии с требованиями законодательства.</p>' +

    '<h2>6. Файлы cookie</h2>' +
    '<p>Наш Сайт использует файлы cookie для обеспечения корректной работы, анализа трафика и улучшения пользовательского опыта. Подробная информация:</p>' +
    '<ul><li><strong>Необходимые cookie</strong> — обеспечивают работу Сайта (язык, тема оформления). Не требуют согласия.</li><li><strong>Аналитические cookie</strong> — Google Analytics для анализа посещаемости. Собираются только с вашего согласия.</li></ul>' +
    '<p>Вы можете отключить cookie в настройках вашего браузера. Однако это может повлиять на функциональность Сайта.</p>' +

    '<h2>7. Передача данных третьим лицам</h2>' +
    '<p>Мы не продаём, не сдаём в аренду и не передаём ваши персональные данные третьим лицам, за исключением:</p>' +
    '<ul><li><strong>FormSubmit.co</strong> — для обработки форм обратной связи</li><li><strong>Google Analytics</strong> — для аналитики посещаемости (анонимизированные данные)</li><li><strong>Vercel Inc.</strong> — хостинг-провайдер Сайта</li><li>Случаев, когда передача требуется по закону или для защиты наших прав</li></ul>' +

    '<h2>8. Ваши права</h2>' +
    '<p>В соответствии с GDPR и другими применимыми законами, вы имеете право:</p>' +
    '<ul><li>Получить доступ к вашим персональным данным</li><li>Исправить неточные данные</li><li>Удалить ваши данные («право на забвение»)</li><li>Ограничить обработку данных</li><li>Перенести данные в другой сервис</li><li>Отозвать согласие на обработку данных</li><li>Подать жалобу в надзорный орган по защите данных</li></ul>' +
    '<p>Для реализации любого из этих прав свяжитесь с нами: <a href="mailto:reservation@desera.travel">reservation@desera.travel</a></p>' +

    '<h2>9. Международная передача данных</h2>' +
    '<p>Ваши данные могут обрабатываться в странах за пределами вашей юрисдикции, включая ОАЭ и США (серверы хостинга). Мы принимаем меры для обеспечения надлежащего уровня защиты данных при международной передаче.</p>' +

    '<h2>10. Дети</h2>' +
    '<p>Наш Сайт не предназначен для лиц младше 18 лет. Мы сознательно не собираем данные несовершеннолетних.</p>' +

    '<h2>11. Изменения политики</h2>' +
    '<p>Мы оставляем за собой право обновлять настоящую Политику. Дата последнего обновления указана в начале документа. Рекомендуем периодически проверять эту страницу.</p>' +

    '<h2>12. Контакты</h2>' +
    '<p>По вопросам конфиденциальности и защиты данных:</p>' +
    '<ul><li>Email: <a href="mailto:reservation@desera.travel">reservation@desera.travel</a></li><li>Компания: Desera Travel</li><li>Адрес: Dubai, UAE</li></ul>' +

    '</div></div></section>';
  }

  return '<div style="padding:140px 0 80px;background:linear-gradient(135deg,var(--dk),#1f2937)"><div class="con" style="text-align:center"><h1 style="font-family:var(--fd);font-size:clamp(32px,4vw,48px);color:#fff">Privacy Policy</h1><p style="color:rgba(255,255,255,.6);margin-top:12px">Last updated: ' + updated + '</p></div></div>' +
  '<section class="sec"><div class="con" style="max-width:800px"><div class="legal-content">' +

  '<h2>1. Introduction</h2>' +
  '<p>Desera Travel (hereinafter referred to as "Company", "we", "us", "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains what data we collect, how we use, store, and protect it when you visit our website desera.travel (the "Website").</p>' +
  '<p>By using the Website, you consent to the practices described in this Privacy Policy. If you disagree with any provisions, please discontinue use of the Website.</p>' +

  '<h2>2. Data We Collect</h2>' +
  '<p>We may collect the following categories of personal data:</p>' +
  '<h3>2.1. Data You Provide Voluntarily:</h3>' +
  '<ul><li>Full name</li><li>Company name</li><li>Email address</li><li>Phone number</li><li>Country of residence</li><li>Company website</li><li>Messages submitted through contact forms</li><li>Destination preferences</li></ul>' +

  '<h3>2.2. Data Collected Automatically:</h3>' +
  '<ul><li>IP address</li><li>Browser type and version</li><li>Operating system</li><li>Pages visited on the Website</li><li>Date and time of visit</li><li>Referral source</li><li>Cookie data (see Section 6)</li></ul>' +

  '<h2>3. Purpose of Data Processing</h2>' +
  '<p>We use your data solely for the following purposes:</p>' +
  '<ul><li>Processing your inquiries and partnership applications</li><li>Communicating with you regarding collaboration opportunities</li><li>Providing information about our services and rates</li><li>Improving Website functionality and user experience</li><li>Website traffic analytics (Google Analytics)</li><li>Compliance with legal obligations</li></ul>' +

  '<h2>4. Legal Basis for Processing (GDPR)</h2>' +
  '<p>We process your personal data on the following legal grounds:</p>' +
  '<ul><li><strong>Consent</strong> — when you submit a form on the Website or accept cookies</li><li><strong>Legitimate interest</strong> — to improve our services and ensure Website security</li><li><strong>Contract performance</strong> — to process your requests and provide services</li><li><strong>Legal obligation</strong> — to comply with applicable laws and regulations</li></ul>' +

  '<h2>5. Data Storage and Security</h2>' +
  '<p>We implement reasonable organizational and technical measures to protect your data from unauthorized access, alteration, disclosure, or destruction. Data is stored on secure servers using SSL/TLS encryption.</p>' +
  '<p>We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law.</p>' +

  '<h2>6. Cookies</h2>' +
  '<p>Our Website uses cookies to ensure proper functionality, analyze traffic, and improve user experience:</p>' +
  '<ul><li><strong>Essential cookies</strong> — ensure Website functionality (language preference, theme). Do not require consent.</li><li><strong>Analytics cookies</strong> — Google Analytics for traffic analysis. Collected only with your consent.</li></ul>' +
  '<p>You can disable cookies in your browser settings. However, this may affect Website functionality.</p>' +

  '<h2>7. Third-Party Data Sharing</h2>' +
  '<p>We do not sell, rent, or share your personal data with third parties, except:</p>' +
  '<ul><li><strong>FormSubmit.co</strong> — for processing contact form submissions</li><li><strong>Google Analytics</strong> — for traffic analytics (anonymized data)</li><li><strong>Vercel Inc.</strong> — Website hosting provider</li><li>When required by law or to protect our legal rights</li></ul>' +

  '<h2>8. Your Rights</h2>' +
  '<p>Under GDPR and other applicable laws, you have the right to:</p>' +
  '<ul><li>Access your personal data</li><li>Rectify inaccurate data</li><li>Erase your data ("right to be forgotten")</li><li>Restrict data processing</li><li>Data portability</li><li>Withdraw consent at any time</li><li>Lodge a complaint with a data protection authority</li></ul>' +
  '<p>To exercise any of these rights, contact us at: <a href="mailto:reservation@desera.travel">reservation@desera.travel</a></p>' +

  '<h2>9. International Data Transfers</h2>' +
  '<p>Your data may be processed in countries outside your jurisdiction, including the UAE and the United States (hosting servers). We take appropriate measures to ensure adequate data protection during international transfers.</p>' +

  '<h2>10. Children</h2>' +
  '<p>Our Website is not intended for individuals under 18 years of age. We do not knowingly collect data from minors.</p>' +

  '<h2>11. Policy Updates</h2>' +
  '<p>We reserve the right to update this Privacy Policy. The date of the last update is indicated at the top of this document. We encourage you to review this page periodically.</p>' +

  '<h2>12. Contact Us</h2>' +
  '<p>For privacy and data protection inquiries:</p>' +
  '<ul><li>Email: <a href="mailto:reservation@desera.travel">reservation@desera.travel</a></li><li>Company: Desera Travel</li><li>Address: Dubai, UAE</li></ul>' +

  '</div></div></section>';
}
