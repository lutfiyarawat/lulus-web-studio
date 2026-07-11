// LULUS Web Studio — shared behavior

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      const expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Quote request form (Contact page)
  const form = document.getElementById('quote-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = document.getElementById('form-success');
      form.style.display = 'none';
      if (success) success.classList.add('show');
      // NOTE: This form currently only shows a confirmation message.
      // Connect it to a form backend (e.g. Formspree, Basin, or a Google Sheet
      // via a script) so submissions actually reach your inbox.
    });
  }
});
