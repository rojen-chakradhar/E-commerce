// <!-- components/menu.js -->
document.addEventListener('click', e => {
  const openBtn = document.getElementById('open-menu');
  const closeBtn = document.getElementById('close');
  const menu = document.getElementById('menu');

  if (!openBtn || !closeBtn || !menu) return;

  if (e.target === openBtn || openBtn.contains(e.target)) {
    menu.classList.add('open');
    menu.classList.remove('hidden');
  } else if (e.target === closeBtn || closeBtn.contains(e.target)) {
    menu.classList.remove('open');
    menu.classList.add('hidden');
  }
});
