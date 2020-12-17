const src = 'https://www.youtube.com/embed/lPLHdKKoUbQ?showinfo=0&autohide=1&controls=2&modestbranding=1&rel=0&autoplay=1';

const player = document.querySelector('.video__player-top .play-button-container');
const playerCenter = document.querySelectorAll('.video__player-center .play-button-container');
const playerThird = document.querySelector('.video__player-bottom .play-button-container');

player.addEventListener('click', handlePlayer);
playerThird.addEventListener('click', handlePlayer);
playerCenter.forEach(e => e.addEventListener('click', handlePlayer));

function handlePlayer(e) {
  const player = e.currentTarget;
  if (player.classList.contains('isClicked')) return;

  player.classList.add('isClicked');
  const parent = player.parentNode.parentNode;
  isCentered(player);
  const poster = parent.querySelector('.video__poster');
  const iframe = parent.querySelector('.video-youtube');
  parent.style = 'z-index: 3';
  iframe.src = src;
  poster.classList.add('isHide');
}

function isCentered(button) {
  if (!button.parentNode.classList.contains('video__player-center')) return;
  button.style = 'opacity: 0';
}
