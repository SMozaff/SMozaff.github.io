/* Technical Folio — quiet, functional interaction that never blocks reading. */
(() => {
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-site-nav]');
  const navLinks = document.querySelectorAll('[data-site-nav] a');
  const header = document.querySelector('.site-header');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      nav.dataset.open = String(!isOpen);
      document.body.classList.toggle('menu-open', !isOpen);
    });

    navLinks.forEach((link) => link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.dataset.open = 'false';
      document.body.classList.remove('menu-open');
    }));
  }

  document.querySelectorAll('[data-copy-citation]').forEach((button) => {
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copyCitation || '');
        const original = button.textContent;
        button.textContent = 'Citation copied';
        button.classList.add('is-copied');
        window.setTimeout(() => {
          button.textContent = original;
          button.classList.remove('is-copied');
        }, 1800);
      } catch {
        button.textContent = 'Select DOI to copy';
      }
    });
  });

  const sections = [...document.querySelectorAll('main section[id]')];
  const navItems = [...document.querySelectorAll('[data-site-nav] a[href^="#"]')];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navItems.forEach((link) => link.classList.toggle('is-current', link.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-35% 0px -58% 0px', threshold: 0 });
  sections.forEach((section) => observer.observe(section));

  window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 10), { passive: true });
})();
