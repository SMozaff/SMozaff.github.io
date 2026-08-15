(function () {
  const compactMark = '<img src="/assets/ifem-doctrine-mark.png" alt="" />';
  const finalLogo = '<img src="/assets/ifem-doctrine-logo-transparent.png" alt="IFEM Doctrine" />';

  const header = `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="shell nav-wrap">
        <a class="brand" href="/doctrine.html" aria-label="IFEM Doctrine home">
          <span class="brand-mark" aria-hidden="true">${compactMark}</span>
          <span class="brand-copy"><strong>IFEM</strong><small>Interface-First Execution Methodology</small></span>
        </a>
        <nav id="site-nav" class="site-nav" aria-label="Primary navigation">
          <a href="/doctrine.html">Doctrine</a>
          <a href="/method.html">Method</a>
          <a href="/ai.html">AI engineering</a>
          <a href="/publications.html">Publications</a>
          <a href="/">Author</a>
        </nav>
        <a class="nav-cta" href="https://doi.org/10.5281/zenodo.20621561">Read v2.2 <span aria-hidden="true">↗</span></a>
        <button class="nav-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span></button>
      </div>
    </header>`;

  const footer = `
    <footer>
      <div class="shell footer-grid">
        <div class="footer-brand">
          <span class="footer-logo">${finalLogo}</span>
        </div>
        <nav class="footer-nav" aria-label="Footer navigation">
          <a href="/doctrine.html">Doctrine</a>
          <a href="/method.html">Method</a>
          <a href="/ai.html">AI engineering</a>
          <a href="/publications.html">Publications</a>
          <a href="/">Author</a>
        </nav>
        <div class="footer-right">
          <div class="footer-dois">
            <a href="https://doi.org/10.5281/zenodo.20621561">Primary DOI ↗</a>
            <a href="https://doi.org/10.5281/zenodo.21330255">Runtime Manual ↗</a>
            <a href="https://orcid.org/0009-0001-2428-1295">ORCID ↗</a>
          </div>
          <p class="footer-contact">Authored by <a href="/"><strong>Soheil Mozaffari</strong></a> · <a href="mailto:so.muzaff@gmail.com">so.muzaff@gmail.com</a></p>
        </div>
      </div>
    </footer>
    <div class="toast" role="status" aria-live="polite" aria-atomic="true">Copied to clipboard</div>`;

  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer);

  const path = location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.site-nav a, .footer-nav a').forEach((link) => {
    const href = new URL(link.href).pathname.replace(/\/$/, '') || '/';
    if (href === path) link.classList.add('active');
  });
})();
