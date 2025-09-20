import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(TextPlugin, ScrollTrigger);

/**
 * GlitchText - Creates a glitch effect on text
 */
export const GlitchText = ({ 
  text, 
  className = '', 
  glitchIntensity = 0.1,
  glitchDuration = 0.1,
  ...props 
}) => {
  const textRef = useRef(null);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    
    // Set initial state
    gsap.set(element, { opacity: 0, y: 50 });
    
    // Initial animation
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    });

    // Glitch effect function
    const glitch = () => {
      if (isGlitching) return;
      
      setIsGlitching(true);
      
      const tl = gsap.timeline();
      
      tl.to(element, {
        x: (Math.random() - 0.5) * 20 * glitchIntensity,
        y: (Math.random() - 0.5) * 10 * glitchIntensity,
        rotation: (Math.random() - 0.5) * 5 * glitchIntensity,
        duration: glitchDuration,
        ease: "power2.inOut"
      })
      .to(element, {
        x: (Math.random() - 0.5) * 20 * glitchIntensity,
        y: (Math.random() - 0.5) * 10 * glitchIntensity,
        rotation: (Math.random() - 0.5) * 5 * glitchIntensity,
        duration: glitchDuration,
        ease: "power2.inOut"
      })
      .to(element, {
        x: 0,
        y: 0,
        rotation: 0,
        duration: glitchDuration,
        ease: "power2.out",
        onComplete: () => setIsGlitching(false)
      });
    };

    // Random glitch intervals
    const glitchInterval = setInterval(glitch, Math.random() * 3000 + 2000);
    
    return () => {
      clearInterval(glitchInterval);
    };
  }, [text, glitchIntensity, glitchDuration, isGlitching]);

  return (
    <div className={`relative ${className}`} {...props}>
      <span ref={textRef} className="inline-block">
        {text}
      </span>
    </div>
  );
};

/**
 * LiquidText - Creates a liquid/morphing effect on text
 */
export const LiquidText = ({ 
  text, 
  className = '', 
  liquidIntensity = 1,
  ...props 
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    
    // Set initial state
    gsap.set(element, { opacity: 0, scale: 0.8, rotationY: 180 });
    
    // Initial animation
    gsap.to(element, {
      opacity: 1,
      scale: 1,
      rotationY: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.3)"
    });

    // Liquid animation
    const liquidAnimation = () => {
      gsap.to(element, {
        scaleX: 1 + Math.sin(Date.now() * 0.001) * 0.05 * liquidIntensity,
        scaleY: 1 + Math.cos(Date.now() * 0.001) * 0.05 * liquidIntensity,
        rotation: Math.sin(Date.now() * 0.002) * 2 * liquidIntensity,
        duration: 0.1,
        ease: "none",
        onComplete: liquidAnimation
      });
    };

    liquidAnimation();
  }, [text, liquidIntensity]);

  return (
    <div className={`relative ${className}`} {...props}>
      <span ref={textRef} className="inline-block">
        {text}
      </span>
    </div>
  );
};

/**
 * MagneticText - Text that follows mouse movement
 */
export const MagneticText = ({ 
  text, 
  className = '', 
  magneticStrength = 0.3,
  ...props 
}) => {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!textRef.current || !containerRef.current) return;

    const element = textRef.current;
    const container = containerRef.current;
    
    // Set initial state
    gsap.set(element, { opacity: 0, y: 50 });
    
    // Initial animation
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    });

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(element, {
        x: x * magneticStrength,
        y: y * magneticStrength,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [text, magneticStrength]);

  return (
    <div ref={containerRef} className={`relative cursor-pointer ${className}`} {...props}>
      <span ref={textRef} className="inline-block">
        {text}
      </span>
    </div>
  );
};

/**
 * RevealText - Text that reveals character by character with various effects
 */
export const RevealText = ({ 
  text, 
  className = '', 
  revealType = 'fade',
  staggerDelay = 0.05,
  ...props 
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll('.reveal-char');
    
    // Set initial state based on reveal type
    const setInitialState = () => {
      switch (revealType) {
        case 'fade':
          gsap.set(chars, { opacity: 0 });
          break;
        case 'slide':
          gsap.set(chars, { opacity: 0, y: 50 });
          break;
        case 'scale':
          gsap.set(chars, { opacity: 0, scale: 0 });
          break;
        case 'rotate':
          gsap.set(chars, { opacity: 0, rotation: 180 });
          break;
        default:
          gsap.set(chars, { opacity: 0, y: 30 });
      }
    };

    setInitialState();

    // Create reveal animation
    const tl = gsap.timeline();
    
    switch (revealType) {
      case 'fade':
        tl.to(chars, {
          opacity: 1,
          duration: 0.5,
          stagger: staggerDelay,
          ease: "power2.out"
        });
        break;
      case 'slide':
        tl.to(chars, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: staggerDelay,
          ease: "power2.out"
        });
        break;
      case 'scale':
        tl.to(chars, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: staggerDelay,
          ease: "back.out(1.7)"
        });
        break;
      case 'rotate':
        tl.to(chars, {
          opacity: 1,
          rotation: 0,
          duration: 0.6,
          stagger: staggerDelay,
          ease: "power2.out"
        });
        break;
      default:
        tl.to(chars, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: staggerDelay,
          ease: "power2.out"
        });
    }
  }, [text, revealType, staggerDelay]);

  return (
    <div ref={containerRef} className={className} {...props}>
      {text.split('').map((char, index) => {
        if (char === '<' && text.substring(index, index + 5) === '<br />') {
          return <br key={index} />;
        }
        if (char === '<' || char === 'b' || char === 'r' || char === '/' || char === '>') {
          // Skip characters that are part of <br /> tag
          const beforeChar = text.substring(0, index);
          if (beforeChar.includes('<br />')) {
            return null;
          }
        }
        return (
          <span key={index} className="reveal-char inline-block">
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      })}
    </div>
  );
};

/**
 * GradientText - Text with animated gradient effect
 */
export const GradientText = ({ 
  text, 
  className = '', 
  gradientColors = ['#000', '#352ce8', '#e0deff'],
  animationSpeed = 6,
  ...props 
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    
    // Set initial state
    gsap.set(element, { opacity: 0, y: 50 });
    
    // Initial animation
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    });

    // Animate gradient
    const animateGradient = () => {
      gsap.to(element, {
        backgroundPosition: "200% 0%",
        duration: animationSpeed,
        ease: "none",
        repeat: -1
      });
    };

    animateGradient();
  }, [text, gradientColors, animationSpeed]);

  const gradientStyle = {
    background: `linear-gradient(45deg, ${gradientColors.join(', ')})`,
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  return (
    <div className={className} {...props}>
      <span ref={textRef} style={gradientStyle} className="inline-block">
        {text}
      </span>
    </div>
  );
};
