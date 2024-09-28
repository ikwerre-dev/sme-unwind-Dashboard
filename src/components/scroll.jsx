import Lenis from 'lenis';

 const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  
  smooth: true,
  direction: 'vertical', 
  gestureDirection: 'vertical', 
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

 function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
