import gsap, { TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import { ctrl } from './advantage';

// video
const $videoFeature = $('.video__poster-feature');

const videot = gsap.fromTo($videoFeature, 1, { x: 30, opacity: 0 }, { x: 0, opacity: 1, ease: 'back.out(6)' });

new ScrollMagic.Scene({
  triggerElement: $('.video.video-third')[0],
  triggerHook: 1,
})
  .setTween(videot)
  .addTo(ctrl);

// features
const featureTM = new TimelineMax();

const $features = $('.features');
const $mainTitle = $('#featureTitle span');
const $description = $('#featureDesc');
const $list = $('.feature-item');
const $featureSp = $('#feature-speed');
const $featureST = $('#feature-speedTypes');
const cont = { val: 0 };
const cont2 = { val: 0 };
const maxSpeed = 13;
const speedTypes = 2;

featureTM
  .staggerFromTo($mainTitle, 0.3, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: 'back.out(3)' }, -0.2)
  .fromTo($description, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
  .staggerFromTo($list, 0.5, { x: -30, opacity: 0 }, { x: 0, opacity: 1, ease: 'back.out(3)' }, 0.3)
  .fromTo($features, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'back.out(3)' })
  .to(cont, 0.5, {
    val: maxSpeed,
    roundProps: 'val',
    onUpdate: () => {
      $featureSp.html(cont.val + "<span class='features__speed-highlight-sm'>км/ч</span>");
    },
  })
  .to(
    cont2,
    1,
    {
      val: speedTypes,
      roundProps: 'val',
      onUpdate: () => {
        $featureST.html(cont2.val);
      },
    },
    '-=0.5',
  );

new ScrollMagic.Scene({
  triggerElement: $('#content-feature')[0],
  triggerHook: 1,
})
  .setTween(featureTM)
  .addTo(ctrl);
