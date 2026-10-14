// Мобильное меню
(function () {
  var burger = document.querySelector('.burger');
  var mobileNav = document.querySelector('.mobile-nav');
  if (burger && mobileNav) {
    burger.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
      var expanded = mobileNav.classList.contains('open');
      burger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();

// Год в подвале
(function () {
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();

// Обработка формы (нужно подключить бэкенд — см. README)
(function () {
  var form = document.querySelector('.lead-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = form.querySelector('[name="name"]');
    var contact = form.querySelector('[name="contact"]');
    var consent = form.querySelector('[name="consent"]');
    var errorBox = form.querySelector('.form-error');

    if (errorBox) errorBox.remove();

    if (!name.value.trim() || !contact.value.trim() || !consent.checked) {
      var err = document.createElement('div');
      err.className = 'form-error';
      err.style.color = '#b3261e';
      err.style.fontSize = '0.88rem';
      err.style.marginBottom = '12px';
      err.textContent = form.getAttribute('data-error') || 'Заполните имя, контакт и подтвердите согласие на обработку данных.';
      form.prepend(err);
      return;
    }

    // TODO: отправка на реальный эндпоинт (Formspree / Getform / свой сервер / Tilda).
    console.log('Заявка:', {
      name: name.value,
      contact: contact.value,
      email: (form.querySelector('[name="email"]') || {}).value,
      task: (form.querySelector('[name="task"]') || {}).value
    });

    var success = document.querySelector('.form-success');
    if (success) {
      success.classList.add('show');
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    form.reset();
  });
})();

// Показ фиксированной кнопки после первого экрана
(function () {
  var sticky = document.querySelector('.sticky-cta');
  var hero = document.querySelector('.hero');
  if (!sticky || !hero) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      sticky.style.display = entry.isIntersecting ? 'none' : 'block';
    });
  }, { threshold: 0 });
  observer.observe(hero);
})();
