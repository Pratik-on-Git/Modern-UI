import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * AnimatedGradientSVG - SVG linear gradient with animated rotation
 */
const AnimatedGradientSVG = ({
  children,
  gradientId = 'card1Gradient',
  colors = ['#000000', '#352ce8'],
  duration = 8,
  ...props
}) => {
  const gradientRef = useRef(null);

  useEffect(() => {
    if (!gradientRef.current) return;
    gsap.to(gradientRef.current, {
      attr: { gradientTransform: 'rotate(360)' },
      duration: duration * 2,
      repeat: -1,
      ease: 'power1.inOut',
    });
  }, [duration]);

  return (
    <svg
      viewBox="0 0 536 246"
      width="100%"
      height="100%"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
      style={{ zIndex: 1 }}
      {...props}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1" ref={gradientRef} gradientTransform="rotate(0)">
          <stop offset="0%" stopColor={colors[0]} />
          <stop offset="90%" stopColor={colors[1]} />
        </linearGradient>
      </defs>
      {children}
    </svg>
  );
};

export default AnimatedGradientSVG;
