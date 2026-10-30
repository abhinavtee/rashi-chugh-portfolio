const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
function syncTheme() {
  const t = root.dataset.theme || 'light';
  document.getElementById('sun').classList.toggle('active', t === 'light');
  document.getElementById('moon').classList.toggle('active', t === 'dark');
}
syncTheme();
themeToggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('rashi-portfolio-theme', root.dataset.theme); } catch {}
  syncTheme();
});
const menu = document.getElementById('mobileMenu');
document.getElementById('menuToggle').addEventListener('click', () => menu.classList.toggle('show'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('show')));
document.getElementById('filters').addEventListener('click', e => {
  const button = e.target.closest('[data-filter]');
  if (!button) return;
  document.querySelectorAll('.filter-chip').forEach(b => b.classList.toggle('selected', b === button));
  const filter = button.dataset.filter;
  let count = 0;
  document.querySelectorAll('.project-card').forEach(card => {
    const visible = filter === 'All' || card.dataset.category === filter;
    card.style.display = visible ? '' : 'none';
    if (visible) count++;
  });
  document.getElementById('workCount').innerHTML = `0${count} / 04<br><small>PROJECTS</small>`;
});
const modal = document.getElementById('modal');
document.querySelectorAll('.project-card').forEach(card => card.addEventListener('click', () => {
  document.getElementById('modalTitle').textContent = card.dataset.title;
  document.getElementById('modalLabel').textContent = `${card.querySelector('.project-label').textContent} · ${card.querySelector('.project-year').textContent}`;
  document.getElementById('modalDescription').textContent = card.dataset.description;
  document.getElementById('modalDetails').innerHTML = card.dataset.details.split('|').map(line => `<li>${line}</li>`).join('');
  document.getElementById('modalArt').innerHTML = card.querySelector('.artwork').outerHTML;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}));
function closeModal() { modal.hidden = true; document.body.style.overflow = ''; }
document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
window.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); menu.classList.remove('show'); } });
document.getElementById('copyEmail').addEventListener('click', async e => {
  const button = e.currentTarget;
  try { await navigator.clipboard.writeText('rashichugh610@gmail.com'); button.textContent = '✓ Email copied'; }
  catch { window.location.href = 'mailto:rashichugh610@gmail.com'; }
});
const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } }), { threshold: .08 });
document.querySelectorAll('.section-kicker, .intro-layout, .about-detail-grid, .section-heading-row, .filter-row, .project-card, .skills-layout, .journey-layout, .contact-main, .contact-bottom').forEach(el => { el.classList.add('preview-reveal'); revealObserver.observe(el); });

document.getElementById('previewContact').addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`);
  const body = encodeURIComponent(`Hi Rashi,\n\n${data.get('message')}\n\nFrom: ${data.get('name')}\nEmail: ${data.get('sender')}`);
  window.location.href = `mailto:rashichugh610@gmail.com?subject=${subject}&body=${body}`;
});
