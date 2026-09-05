(() => {
  'use strict';
  const BOUND_EN = 'https://bound-method.github.io/';
  const BOUND_DOI = 'https://doi.org/10.5281/zenodo.22257583';
  const IFEM_EN = 'https://ifem-doctrine.github.io/';
  const IFEM_FA = 'https://ifem-doctrine.github.io/fa/';
  const DOI = 'https://doi.org/10.5281/zenodo.20621561';
  let initialized = false;

  function enhance() {
    const page = document.querySelector('.portfolio-page');
    if (!page || initialized) return false;
    initialized = true;
    const isFa = page.classList.contains('fa-page') || document.documentElement.lang === 'fa';
    const nav = page.querySelector('.site-header nav');
    if (nav) {
      if (!nav.querySelector('a[href="#top"]')) {
        const home = document.createElement('a'); home.href = '#top'; home.textContent = isFa ? 'خانه' : 'Home'; nav.prepend(home);
      }
      if (!nav.querySelector('.nav-ifem')) {
        const ifem = document.createElement('a');
        ifem.className = 'nav-ifem'; ifem.href = isFa ? IFEM_FA : IFEM_EN; ifem.target = '_blank'; ifem.rel = 'noreferrer';
        ifem.textContent = isFa ? 'IFEM ↗' : 'IFEM Doctrine ↗';
        const profiles = nav.querySelector('a[href="#profiles"]');
        if (profiles) nav.insertBefore(ifem, profiles); else nav.append(ifem);
      }
    }

    const heroButtons = page.querySelectorAll('.hero-actions .button');
    if (heroButtons[0]) {
      heroButtons[0].href = BOUND_EN;
      heroButtons[0].target = '_blank'; heroButtons[0].rel = 'noreferrer';
      heroButtons[0].textContent = isFa ? 'آشنایی با روش BOUND ↗' : 'Explore BOUND Method ↗';
    }
    if (heroButtons[1]) {
      heroButtons[1].href = BOUND_DOI;
      heroButtons[1].target = '_blank'; heroButtons[1].rel = 'noreferrer';
      heroButtons[1].textContent = isFa ? 'مطالعهٔ انتشار BOUND ↗' : 'Read the Publication ↗';
    }

    const methodology = page.querySelector('#methodology .section-content');
    if (methodology) {
      const existing = methodology.querySelector('.strong-link');
      if (existing && existing.href.includes('zenodo')) {
        existing.href = BOUND_EN;
        existing.textContent = isFa ? 'ورود به روش BOUND ↗' : 'Explore BOUND Method ↗';
        const doi = document.createElement('a');
        doi.className = 'text-link strong-link'; doi.href = BOUND_DOI; doi.target = '_blank'; doi.rel = 'noreferrer';
        doi.textContent = isFa ? 'مطالعهٔ انتشار BOUND ↗' : 'Read BOUND publication ↗';
        existing.insertAdjacentElement('afterend', doi);
      }
    }

    const grid = page.querySelector('.profile-grid');
    if (grid) {
      const addCard = (label, href, value) => {
        if ([...grid.querySelectorAll('a')].some(a => a.href === href)) return;
        const a = document.createElement('a'); a.href = href; a.target = '_blank'; a.rel = 'noreferrer'; a.className = 'profile-card reveal-item';
        a.innerHTML = `<span class="profile-symbol" aria-hidden="true">${label === 'IFEM Doctrine' ? 'IF' : 'Z'}</span><span>${label}</span><bdi lang="en" dir="ltr">${value}</bdi><span aria-hidden="true">↗</span>`;
        grid.append(a);
      };
      addCard('IFEM Doctrine', isFa ? IFEM_FA : IFEM_EN, 'ifem-doctrine.github.io');
      addCard('Zenodo', DOI, '10.5281/zenodo.20621561');
    }

    let back = page.querySelector('.back-to-top');
    if (!back) {
      back = document.createElement('a'); back.className = 'back-to-top'; back.href = '#top'; back.textContent = isFa ? '↑ بالا' : '↑ Top';
      back.setAttribute('aria-label', isFa ? 'بازگشت به بالای صفحه' : 'Back to top'); page.append(back);
    }
    const updateBack = () => back.classList.toggle('is-visible', window.scrollY > Math.max(520, window.innerHeight * .7));
    updateBack(); window.addEventListener('scroll', updateBack, { passive: true });

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = page.querySelectorAll('.hero-copy,.hero-art,.editorial-section,.work-intro,.project-card,.evidence-panel,.profile-card,.methodology-section blockquote');
    targets.forEach((el, i) => { el.classList.add('reveal-item'); if (i % 3 === 1) el.classList.add('reveal-left'); });
    if (reduce || !('IntersectionObserver' in window)) targets.forEach(el => el.classList.add('is-visible'));
    else {
      const io = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
      }), { threshold: .12, rootMargin: '0px 0px -8% 0px' });
      targets.forEach(el => io.observe(el));
    }
    return true;
  }

  if (!enhance()) {
    const mo = new MutationObserver(() => { if (enhance()) mo.disconnect(); });
    mo.observe(document.documentElement, { childList: true, subtree: true });
    window.addEventListener('load', enhance, { once: true });
  }
})();
