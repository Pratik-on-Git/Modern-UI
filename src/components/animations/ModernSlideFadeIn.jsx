import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ModernSlideIn - Slide in from left/right/top/bottom with fade
 */
export const ModernSlideIn = ({
  children,
  direction = 'left', // 'left', 'right', 'top', 'bottom'
  className = '',
  delay = 0,
  duration = 0.8,
  ease = 'power3.out',
  ...props
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    let x = 0, y = 0;
    if (direction === 'left') x = -60;
    if (direction === 'right') x = 60;
    if (direction === 'top') y = -60;
    if (direction === 'bottom') y = 60;
    gsap.fromTo(ref.current,
      { opacity: 0, x, y },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [direction, delay, duration, ease]);

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
};

/**
 * ModernFadeIn - Fade in with scale and blur for modern effect
 */
export const ModernFadeIn = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  ease = 'power3.out',
  scaleFrom = 0.96,
  blurFrom = 8,
  ...props
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current,
      { opacity: 0, scale: scaleFrom, filter: `blur(${blurFrom}px)` },
      {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [delay, duration, ease, scaleFrom, blurFrom]);

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
};
