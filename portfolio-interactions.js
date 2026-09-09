(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const splitStaggeredText = (element) => {
    if (element.dataset.staggerReady) return;
    element.dataset.staggerReady = 'true';
    const source = element.textContent.trim();
    element.setAttribute('aria-label', source);
    const fragment = document.createDocumentFragment();
    const parts = source.match(/[\u4e00-\u9fff]|[^\s\u4e00-\u9fff]+|\s+/g) || [];
    let index = 0;
    parts.forEach((part) => {
      if (/^\s+$/.test(part)) {
        fragment.appendChild(document.createTextNode(part));
        return;
      }
      const word = document.createElement('span');
      word.className = 'staggered-word';
      word.style.setProperty('--stagger-index', index++);
      word.setAttribute('aria-hidden', 'true');
      word.textContent = part;
      fragment.appendChild(word);
    });
    element.replaceChildren(fragment);
  };

  const staggered = [...document.querySelectorAll('.staggered-text')];
  staggered.forEach(splitStaggeredText);
  if (reducedMotion || !('IntersectionObserver' in window)) {
    staggered.forEach((item) => item.classList.add('is-staggered-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-staggered-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: .18, rootMargin: '0px 0px -8% 0px' });
    staggered.forEach((item) => observer.observe(item));
  }

  const cards = document.querySelectorAll('.project-card, .secondary-feature-card, .secondary-detail-card');
  cards.forEach((card) => {
    card.classList.add('border-glow-card');
    const handlePointerMove = (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const dx = x - cx;
      const dy = y - cy;
      const edge = Math.min(Math.max(Math.max(Math.abs(dx) / Math.max(cx, 1), Math.abs(dy) / Math.max(cy, 1)), 0), 1);
      let angle = Math.atan2(dy, dx) * 180 / Math.PI + 90;
      if (angle < 0) angle += 360;
      card.style.setProperty('--edge-proximity', (edge * 100).toFixed(2));
      card.style.setProperty('--cursor-angle', `${angle.toFixed(2)}deg`);
    };
    card.addEventListener('pointermove', handlePointerMove, { passive: true });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--edge-proximity', '0');
    }, { passive: true });
  });
})();
