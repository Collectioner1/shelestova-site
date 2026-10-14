// Языковой переключатель (RU / EN / PT / FR / ES / IT)
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
  var LABELS = { ru: 'RU', en: 'EN', pt: 'PT', fr: 'FR', es: 'ES', it: 'IT' };

  var nav = document.querySelector('[data-lang-nav]');
  if (!nav || nav.children.length) return;

  var page = document.body.getAttribute('data-page') || 'home';
  var prefix = document.body.getAttribute('data-root') || '';
  var current = (document.documentElement.lang || 'ru').slice(0, 2).toLowerCase();
  var map = PAGES[page] || PAGES.home;

  ORDER.forEach(function (code) {
    var a = document.createElement('a');
    a.href = prefix + (map[code] || '');
    a.textContent = LABELS[code];
    a.setAttribute('hreflang', code);
    a.setAttribute('lang', code);
    if (code === current) {
      a.className = 'is-active';
      a.setAttribute('aria-current', 'true');
    }
    nav.appendChild(a);
  });
})();
