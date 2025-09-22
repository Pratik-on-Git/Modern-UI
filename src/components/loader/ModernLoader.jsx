import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ModernLoader = () => {
  const leftCurtain = useRef(null);
  const rightCurtain = useRef(null);
  const logoRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Curtain split animation
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => setVisible(false), 400);
      }
    });
    tl
      .to(logoRef.current, { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' })
      .to(leftCurtain.current, { x: '-100%', duration: 0.8, ease: 'power3.inOut' }, '+=0.2')
      .to(rightCurtain.current, { x: '100%', duration: 0.8, ease: 'power3.inOut' }, '<')
      .to(logoRef.current, { opacity: 0, scale: 0.8, duration: 0.5, ease: 'power2.in' }, '-=0.4');
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f3f3f3]/10 backdrop-blur-md overflow-hidden">
      {/* Curtains */}
      <div ref={leftCurtain} className="absolute left-0 top-0 w-1/2 h-full bg-[#352ce8]" />
      <div ref={rightCurtain} className="absolute right-0 top-0 w-1/2 h-full bg-[#352ce8]" />
      {/* Logo */}
      <div ref={logoRef} className="relative z-10 flex items-center justify-center">
        <img src="/logo/Icon-107.png" alt="Logo" className="w-24 h-24 object-contain" />
      </div>
    </div>
  );
};

export default ModernLoader;
