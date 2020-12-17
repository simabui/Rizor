import $ from 'jquery';

global.jQuery = $;
global.$ = $;

//close overlay
const $menuOverlay = $('.burger-menu-overlay');
const $button = $('#menu__toggle');

$($menuOverlay).on('click', e => {
  if (e.target === e.currentTarget) {
    $button.prop('checked', false);
  }
});

//paginantion
$(document).on('scroll', pagination);

$(document).on('click', 'a[href^="#"]', function (e) {
  e.preventDefault();
  $('html, body').animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top,
    },
    500,
  );
});

pagination();

function pagination() {
  const offset = $(document).scrollTop();
  const windowHeight = $(window).height();
  const $body = $('body');

  switch (true) {
    case offset > windowHeight * 2.75:
      $body.removeClass().addClass('page-4');
      break;
    case offset > windowHeight * 1.75:
      $body.removeClass().addClass('page-3');
      break;
    case offset > windowHeight * 0.75:
      $body.removeClass().addClass('page-2');
      break;
    default:
      $body.removeClass().addClass('page-1');
  }
}
