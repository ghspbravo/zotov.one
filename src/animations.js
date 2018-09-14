import { TimelineMax, TweenMax, CSSPlugin, AttrPlugin } from "gsap/all";
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';
import 'debug.addIndicators';

//without this line, CSSPlugin and AttrPlugin may get dropped by your bundler...
const plugins = [CSSPlugin, AttrPlugin];

let scrollController = new ScrollMagic.Controller()

export const loader = () => {
    new TimelineMax().set('#container span, #container p, #container a, #desktop_nav a, #mobile_nav, #container a', { opacity: 0 })
        .set('html', { overflowY: 'hidden' })

    document.querySelector('#logo').onload = () => new TimelineMax().delay(1)
        .fromTo('#container .digital', 0.5, { x: '-50' }, { x: 0, opacity: 1 })
        .fromTo('#container .agency', 0.5, { y: '100' }, { y: 0, opacity: 1 })
        .staggerTo('#desktop_nav a', 0.5, { opacity: 1 }, 0.2)
        .to('#container a', 1, { opacity: 1 }, '-=0.5')
        .to('#mobile_nav', 0.3, { opacity: 1 }, '-=1')
        .set('html', { overflowY: 'scroll' })
}


export const openMobileNav = target => {
    new TimelineMax().set(target, { display: 'flex', opacity: 0 })
        .set('#open-burger', { display: 'none' })
        .set('#close-burger', { display: 'block' })
        .to(target, 0.3, { opacity: 1 })
        .set('html', { overflowY: 'hidden' })
}

export const brandMove = (target) => {

    let brandScene = new TweenMax.fromTo('.brand', 1, { left: '-100%' }, { left: '100%' })

    new ScrollMagic.Scene({ triggerElement: target, duration: window.innerHeight * 1.7 })
        .setTween(brandScene)
        .addTo(scrollController)
}
export const brandMoveContacts = (target) => {

    let brandScene = new TweenMax.fromTo('.brand', 1, { left: '-100%' }, { left: '3%' })

    new ScrollMagic.Scene({ triggerElement: target, duration: window.innerHeight * 0.5 })
        .setTween(brandScene)
        .addTo(scrollController)
}
export const historyLoader = () => {

    let historyScene = new TimelineMax().from('#history_title', 0.5, { x: '100%' })
        .from('#history p', 0.5, { opacity: 0, y: 100 }, '-=0.3')
        .from('#history_slogan', 3, { opacity: 0 })

    new ScrollMagic.Scene({ triggerElement: '#history', duration: 0, reverse: false })
        .setTween(historyScene)
        .addTo(scrollController)
}
export const portfolioLoader = () => {

    let portfolioScene = new TimelineMax().from('#portfolio h1', 0.5, { x: '-100%' })
        .add('start')
        .staggerFrom('#portfolio li', 0.3, { opacity: 0 }, '0.2')
        .from('#portfolio img', 0.5, { opacity: 0, y: 20 }, 'start')
        .from('#portfolio div > p', 0.5, { opacity: 0 }, 'start+=0.5')
        .from('#portfolio a', 1, { opacity: 0, y: 50 }, 'start+=1')

    new ScrollMagic.Scene({ triggerElement: '#portfolio', duration: 0, reverse: false })
        .setTween(portfolioScene)
        .addTo(scrollController)
}
export const skillsLoader = () => {

    let skillsScene = new TimelineMax().add('start')
        .staggerFrom('#skills button, #skills h1', 1, { right: 300, opacity: 0 }, 0.2)
        .from('#skills p', 0.4, { opacity: 0, y: 50 }, 'start+=0.5')

    new ScrollMagic.Scene({ triggerElement: '#skills', duration: 0, reverse: false })
        .setTween(skillsScene)
        .addTo(scrollController)
}
export const contactsLoader = () => {

    let contactsScene = new TimelineMax().add('start')
        .from('#contacts h1', 0.5, { opacity: 0, y: 50 })
        .from('#contacts a', 0.5, { opacity: 0, y: 50 })
        .from('#contacts p', 0.5, { opacity: 0, y: 50 })
        .from('#contacts img', 0.5, { opacity: 0, y: 50 }, '-=0.4')

    new ScrollMagic.Scene({ triggerElement: '#contacts', duration: 0, reverse: false })
        .setTween(contactsScene)
        .addTo(scrollController)
}