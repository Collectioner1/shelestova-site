// Языковой переключатель (RU / EN / PT / FR / ES / IT) — выпадающий список.
// Страница задаёт data-page="<ключ>" и data-root="<префикс до корня>" на <body>.
(function () {
  var PAGES = {
    'home':                   { ru: 'index.html',                    en: 'en/index.html',                   pt: 'pt/index.html',                   fr: 'fr/index.html',                   es: 'es/index.html',                   it: 'it/index.html' },
    'personal-effectiveness': { ru: 'lichnaya-effektivnost.html',    en: 'en/personal-effectiveness.html',  pt: 'pt/eficiencia-pessoal.html',      fr: 'fr/efficacite-personnelle.html',  es: 'es/eficacia-personal.html',       it: 'it/efficacia-personale.html' },
    'people-management':      { ru: 'upravlenie-lyudmi.html',        en: 'en/people-management.html',       pt: 'pt/gestao-de-pessoas.html',       fr: 'fr/gestion-des-equipes.html',     es: 'es/gestion-de-personas.html',     it: 'it/gestione-delle-persone.html' },
    'business-systems':       { ru: 'sistemnaya-rabota.html',        en: 'en/business-systems.html',        pt: 'pt/sistemas-de-negocio.html',     fr: 'fr/systemes-dentreprise.html',    es: 'es/sistemas-de-negocio.html',     it: 'it/sistemi-aziendali.html' },
    'privacy':                { ru: 'privacy.html',                  en: 'en/privacy.html',                 pt: 'pt/politica-de-privacidade.html', fr: 'fr/confidentialite.html',         es: 'es/privacidad.html',              it: 'it/privacy.html' },
    '404':                    { ru: '404.html',                      en: 'en/404.html',                     pt: 'pt/404.html',                     fr: 'fr/404.html',                     es: 'es/404.html',                     it: 'it/404.html' }
  };
  var ORDER = ['ru', 'en', 'pt', 'fr', 'es', 'it'];
  var LABELS = { ru: 'Русский', en: 'English', pt: 'Português', fr: 'Français', es: 'Español', it: 'Italiano' };

  var nav = document.querySelector('[data-lang-nav]');
  if (!nav || nav.children.length) return;

  var page = document.body.getAttribute('data-page') || 'home';
  var prefix = document.body.getAttribute('data-root') || '';
  var current = (document.documentElement.lang || 'ru').slice(0, 2).toLowerCase();
  var map = PAGES[page] || PAGES.home;

  var select = document.createElement('select');
  select.className = 'lang-select';
  select.setAttribute('aria-label', nav.getAttribute('aria-label') || 'Language');
  select.addEventListener('change', function () {
    if (this.value) location.href = this.value;
  });

  ORDER.forEach(function (code) {
    var opt = document.createElement('option');
    opt.value = prefix + (map[code] || '');
    opt.textContent = LABELS[code];
    opt.setAttribute('lang', code);
    if (code === current) opt.selected = true;
    select.appendChild(opt);
  });

  nav.appendChild(select);
})();
