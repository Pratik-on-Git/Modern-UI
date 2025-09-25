import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/**
 * useGsapSmoothScroll - enables smooth scrolling effect using GSAP's ScrollSmoother
 */
export default function useGsapSmoothScroll() {
  useLayoutEffect(() => {
    // Create the smooth scroller
    const smoother = ScrollSmoother.create({
      smooth: 2,               // seconds it takes to catch up to native scroll position
      effects: true,             // enables data-speed and data-lag attributes
      smoothTouch: 0.1,          // smooth scrolling on touch devices
      normalizeScroll: true,     // prevents address bar hiding/showing on mobile
      ignoreMobileResize: true,  // improves mobile performance
      speed: 0.2,                  // multiplier for scroll speed
      ease: 'sine.out',          // easing function for the smooth scrolling
    });

    // Cleanup function
    return () => {
      if (smoother) {
        smoother.kill();
      }
    };
  }, []);
}
