import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useGsapSmoothScroll - enables smooth scrolling effect using GSAP and ScrollTrigger
 */
export default function useGsapSmoothScroll() {
  useEffect(() => {
    let scroll;
    if (typeof window !== 'undefined') {
      scroll = {
        y: window.scrollY,
        update: () => {
          gsap.to(window, {
            scrollTo: { y: window.scrollY },
            duration: 1,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        },
      };
      window.addEventListener('scroll', scroll.update);
    }
    return () => {
      if (scroll) window.removeEventListener('scroll', scroll.update);
    };
  }, []);
}
