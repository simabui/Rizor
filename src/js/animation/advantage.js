import $ from 'jquery';
import gsap, { TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

ScrollMagicPluginGsap(ScrollMagic, gsap);

global.jQuery = $;
global.$ = $;

export const ctrl = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: 0,
    reverse: false,
  },
});

// video
const $videoSecond = $('.video-second');

const $video = gsap.fromTo(
  $videoSecond,
  { x: -100, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    ease: 'back.out(6)',
    duration: 1,
  },
);

new ScrollMagic.Scene({
  triggerElement: $videoSecond[0],
  triggerHook: 1,
})
  .setTween($video)
  .addTo(ctrl);

// title
const $htitle = $('.highlight__title');
const $mainTitle = $('#designTitle span');
const $optionTitle = $('#optionsTitle span');

const titlelTM = new TimelineMax();

titlelTM
  .fromTo($htitle, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 3, ease: 'elastic.out(1, 0.2)' })
  .staggerFromTo($mainTitle, 0.2, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: 'back.out(3)' }, -0.2)
  .staggerFromTo($optionTitle, 0.2, { x: 30, opacity: 0 }, { x: 0, opacity: 1, ease: 'back.out(3)' }, 0.2, '-=1');

new ScrollMagic.Scene({
  triggerElement: $videoSecond[0],
  triggerHook: 1,
})
  .setTween(titlelTM)
  .addTo(ctrl);

// description

const $description = $('#designDesc');
const $item = $('.design-item');
const $optionDesc = $('#optionsDesc');
const $optionColors = $('.options__colors li');

const descTM = new TimelineMax();

descTM
  .fromTo($description, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'bounce.out' }, '+=1')
  .fromTo($optionDesc, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'bounce.out' }, '-=1.5')
  .staggerFromTo($item, 1, { x: 30, opacity: 0 }, { x: 0, opacity: 1, ease: 'back.out(3)' }, 0.2, '+=1')
  .staggerFromTo($optionColors, 1, { x: 30, opacity: 0 }, { x: 0, opacity: 1, ease: 'back.out(3)' }, 0.2, '-=1.5');

new ScrollMagic.Scene({
  triggerElement: $('.design')[0],
  triggerHook: 1,
  offset: 0,
})
  .setTween(descTM)
  .addTo(ctrl);
