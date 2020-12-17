import gsap, { TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import { ctrl } from './advantage';

// poster
const $poster = $('.poster');

const posterT = gsap.fromTo($poster, { x: 30, opacity: 0 }, { x: 0, opacity: 1, ease: 'back.out(6)', duration: 1 });

new ScrollMagic.Scene({
  triggerElement: $('.poster')[0],
  triggerHook: 1,
})
  .setTween(posterT)
  .addTo(ctrl);

//content

const $title = $('#content-title span');
const $desc = $('#content-desc');
const $desc2 = $('#content-desc2');
const $button = $('#content-button');

const contentTM = new TimelineMax();

contentTM
  .staggerFromTo($title, 0.3, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: 'back.out(3)' }, -0.2)
  .fromTo($desc, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
  .fromTo($desc2, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'back.out(3)' })
  .fromTo($button, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'back.out(3)' });

new ScrollMagic.Scene({
  triggerElement: $('.section-store')[0],
  triggerHook: 1,
})
  .setTween(contentTM)
  .addTo(ctrl);
