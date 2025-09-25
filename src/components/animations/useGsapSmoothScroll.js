import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useGsapSmoothScroll - enables smoother scrolling effect using GSAP and ScrollTrigger
 */
export default function useGsapSmoothScroll() {
  useEffect(() => {
    let ticking = false;

    const smoothScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          gsap.to(window, {
            scrollTo: { y: window.scrollY },
            duration: 2, // increased duration for smoother effect
            ease: 'power2.out', // smoother easing
            overwrite: 'auto',
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', smoothScroll);

    return () => {
      window.removeEventListener('scroll', smoothScroll);
    };
  }, []);
}
