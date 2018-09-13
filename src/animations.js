import { TimelineMax, TweenMax, CSSPlugin, AttrPlugin }  from "gsap/all";
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';
import 'debug.addIndicators';

//without this line, CSSPlugin and AttrPlugin may get dropped by your bundler...
const plugins = [ CSSPlugin, AttrPlugin ];

