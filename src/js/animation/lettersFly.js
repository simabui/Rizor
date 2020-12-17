import gsap from 'gsap';

const $title = $('.js-split');

$title.on('mouseenter', function () {
  const $letters = $(this).children();

  $letters.each(function () {
    gsap.to(this, { x: 'random([-50, 50])', y: 'random([-50, 50])', rotation: 'random([10, 350])', ease: 'back.out(1.7)', duration: 0.5 });
  });
});

$title.on('mouseleave', function () {
  const $letters = $(this).children();

  gsap.to($letters, { x: 0, y: 0, rotation: 0, ease: 'back.out(1.7)', duration: 0.5 });
});
