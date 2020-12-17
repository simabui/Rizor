import gsap, { TimelineMax } from 'gsap';
import Splitter from 'split-html-to-chars';

const els = document.querySelectorAll('.js-split');

//split title
[].forEach.call(els, el => {
  el.outerHTML = Splitter(el.outerHTML, '<span class="js-letter">$</span>');
});

//main
const tl = new TimelineMax();
const tlTitle = new TimelineMax();

tl.fromTo('.logo', 1, { y: -100, opacity: 0 }, { y: 0, opacity: 1 }).staggerFromTo('.navigation__list', 0.5, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, 0.3);
tlTitle
  .staggerFromTo('.main__title span', 0.2, { y: 100, opacity: 0 }, { y: 0, opacity: 1, ease: 'back.out(2.5)' }, 0.2)
  .fromTo('.main__desc', 1, { y: 100, opacity: 0 }, { y: 0, opacity: 1 })
  .fromTo('.main__arrow', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });

gsap.fromTo('.video-main', { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
