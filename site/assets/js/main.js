// De Lange Slag — shared site behaviour (mobile nav, filters, dummy forms)

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initFilters('[data-agenda-filter]', '[data-agenda-item]', 'status');
  initFilters('[data-verkoop-filter]', '[data-verkoop-item]', 'type');
  initVerkoopForm();
  initDummyForms();
});

function initMobileNav() {
  const burger = document.querySelector('[data-nav-burger]');
  const menu = document.querySelector('[data-nav-menu]');
  if (!burger || !menu) return;
  burger.addEventListener('click', () => {
    menu.classList.toggle('is-open');
  });
}

function initFilters(buttonSelector, itemSelector, dataAttr) {
  const buttons = document.querySelectorAll(buttonSelector);
  if (!buttons.length) return;
  const items = document.querySelectorAll(itemSelector);

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const value = btn.getAttribute(buttonSelector.replace(/[\[\]]/g, ''));
      buttons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      items.forEach((item) => {
        const itemValue = item.dataset[dataAttr];
        const show = value === 'alle' || itemValue === value;
        item.classList.toggle('is-hidden', !show);
      });
    });
  });
}

function initVerkoopForm() {
  const toggle = document.querySelector('[data-toggle-verkoop-form]');
  const panel = document.querySelector('[data-verkoop-form-panel]');
  if (!toggle || !panel) return;
  toggle.addEventListener('click', () => {
    panel.classList.toggle('is-hidden');
  });
}

function initDummyForms() {
  document.querySelectorAll('[data-dummy-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const confirmation = form.parentElement.querySelector('[data-form-confirmation]');
      form.classList.add('is-hidden');
      if (confirmation) confirmation.classList.remove('is-hidden');
    });
  });
}
