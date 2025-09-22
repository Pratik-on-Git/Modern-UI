import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * BasicRevealText - Simple reveal animation from bottom
 */
export const BasicRevealText = ({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.6,
  ease = "power2.out",
  ...props 
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    
    // Set initial state
    gsap.set(element, { 
      opacity: 0, 
      y: 30 
    });
    
    // Create reveal animation
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: duration,
      delay: delay,
      ease: ease
    });
  }, [delay, duration, ease]);

  return (
    <div ref={elementRef} className={className} {...props}>
      {children}
    </div>
  );
};
