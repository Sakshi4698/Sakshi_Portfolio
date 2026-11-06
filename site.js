const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

document.querySelectorAll('.card').forEach((card, order) => {
  const media = [...card.querySelectorAll('img, video')];
  if (!media.length) return;
  const gallery = media[0].parentElement;
  gallery.classList.add('project-gallery');
  const title = card.querySelector('h2').textContent.trim();
  let index = 0;
  let timer;
  const status = document.createElement('div');
  status.className = 'gallery-status';
  function render() {
    media.forEach((img, i) => {
      img.hidden = i !== index;
      if (img instanceof HTMLVideoElement) {
        img.muted = true;
        img.setAttribute('aria-label', title + ' — video example ' + (i + 1));
        if (!img.hidden && !reducedMotion.matches && !document.hidden) img.play().catch(() => {});
        else img.pause();
      } else {
        img.alt = title + ' — project example ' + (i + 1);
      }
    });
    status.textContent = `${String(index + 1).padStart(2, '0')} / ${String(media.length).padStart(2, '0')}`;
  }
  function updateTimer() {
    clearInterval(timer);
    if (!reducedMotion.matches && !document.hidden && media.length > 1) {
      timer = setInterval(() => {
        index = (index + 1) % media.length;
        render();
      }, 2000);
    }
    render();
  }
  reducedMotion.addEventListener('change', updateTimer);
  document.addEventListener('visibilitychange', updateTimer);
  if (media.length > 1) gallery.append(status);
  updateTimer();

  // Tall mobile cards scroll fully into view before they join the stack.
  function updateStickyPosition() {
    const offset = Math.min(16 + order * 8, window.innerHeight - card.offsetHeight - 16);
    card.style.setProperty('--stack-top', `${offset}px`);
  }
  card.style.zIndex = order + 1;
  new ResizeObserver(updateStickyPosition).observe(card);
  window.addEventListener('resize', updateStickyPosition);
  updateStickyPosition();
});

// Restore service flips without making them depend on hover alone.
document.querySelectorAll('.services .group').forEach(card => {
  const title = card.querySelector('h3').textContent.trim();
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', title + '. Flip for details.');
  function flip(value) {
    card.classList.toggle('is-flipped', value);
    card.setAttribute('aria-pressed', String(value));
    card.setAttribute('aria-label', value ? title + '. ' + card.querySelector('p').textContent.trim() + '. Activate to return.' : title + '. Flip for details.');
    const faces = card.firstElementChild.children;
    faces[0].setAttribute('aria-hidden', String(value));
    faces[1].setAttribute('aria-hidden', String(!value));
  }
  flip(false);
  card.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') flip(true); });
  card.addEventListener('pointerleave', event => { if (event.pointerType === 'mouse') flip(false); });
  card.addEventListener('click', event => { if (event.pointerType !== 'mouse') flip(!card.classList.contains('is-flipped')); });
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); flip(!card.classList.contains('is-flipped')); }
  });
});
const logos = document.querySelector('.brand-panels');
if (logos) {
  const duplicate = logos.cloneNode(true);
  duplicate.setAttribute('aria-hidden', 'true');
  logos.after(duplicate);
}
