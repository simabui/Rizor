const nav = document.querySelectorAll('.options__colors__list');

nav.forEach(e => {
  e.addEventListener('click', handleTab);
});

function handleTab(e) {
  const color = e.target.dataset.id;

  const imgs = document.querySelectorAll('.options__rizor-img');
  imgs.forEach(img => {
    img.classList.remove('isShown');
  });

  const navlinks = document.querySelectorAll('.options__colors__list');
  navlinks.forEach(nav => {
    nav.classList.remove('isActive');
  });

  document.getElementById(color).classList.add('isShown');
  e.currentTarget.classList.add('isActive');
}
