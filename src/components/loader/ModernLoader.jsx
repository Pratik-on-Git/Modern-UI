import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ModernLoader = () => {
  const [progress, setProgress] = useState(0);
  const iconRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    let fakeProgress = 0;
    const interval = setInterval(() => {
      fakeProgress += Math.random() * 10;
      setProgress(Math.min(100, fakeProgress));
      if (fakeProgress >= 100) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (fillRef.current) {
      gsap.to(fillRef.current, {
        strokeDashoffset: 314 - (314 * progress) / 100,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }, [progress]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f3f3f3]">
      <div className="flex flex-col items-center">
        <svg
          ref={iconRef}
          width={120}
          height={120}
          viewBox="0 0 120 120"
          className="mb-6"
        >
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="#352ce8"
            strokeWidth="8"
            fill="none"
            opacity="0.15"
          />
          <circle
            ref={fillRef}
            cx="60"
            cy="60"
            r="50"
            stroke="#352ce8"
            strokeWidth="8"
            fill="none"
            strokeDasharray="314"
            strokeDashoffset="314"
            style={{ transition: 'stroke-dashoffset 0.3s' }}
          />
          <image
            href="/logo/Icon-107.png"
            x="30"
            y="30"
            width="60"
            height="60"
            opacity="1"
          />
        </svg>
      </div>
    </div>
  );
};

export default ModernLoader;
