import { TimelineMax, TweenMax, CSSPlugin, AttrPlugin }  from "gsap/all";

//without this line, CSSPlugin and AttrPlugin may get dropped by your bundler...
const plugins = [ CSSPlugin, AttrPlugin ];

