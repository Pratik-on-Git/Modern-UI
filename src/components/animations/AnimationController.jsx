import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

/**
 * AnimationController - Master controller for complex text animations
 */
export const AnimationController = ({ 
  children, 
  trigger = 'onLoad',
  scrollTrigger = false,
  className = '',
  ...props 
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const element = containerRef.current;
    
    if (scrollTrigger) {
      // Scroll-triggered animation
      gsap.fromTo(element, 
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          onStart: () => setIsVisible(true)
        }
      );
    } else if (trigger === 'onLoad') {
      // Load-triggered animation
      gsap.fromTo(element,
        { opacity: 0, y: 50, rotationX: 90 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.2,
          onStart: () => setIsVisible(true)
        }
      );
    } else if (trigger === 'onHover') {
      // Hover-triggered animation
      gsap.set(element, { opacity: 0.7, scale: 0.95 });
      
      const handleMouseEnter = () => {
        gsap.to(element, {
          opacity: 1,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      };
      
      const handleMouseLeave = () => {
        gsap.to(element, {
          opacity: 0.7,
          scale: 0.95,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [trigger, scrollTrigger]);

  return (
    <div ref={containerRef} className={className} {...props}>
      {children}
    </div>
  );
};

/**
 * SplitTextAnimation - Advanced text splitting and animation
 */
export const SplitTextAnimation = ({ 
  text, 
  splitType = 'words',
  animationType = 'stagger',
  className = '',
  ...props 
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const elements = container.querySelectorAll('.split-element');
    
    // Set initial state
    gsap.set(elements, { 
      opacity: 0, 
      y: 50, 
      rotationX: 90 
    });

    // Create animation based on type
    const createAnimation = () => {
      const tl = gsap.timeline();
      
      switch (animationType) {
        case 'stagger':
          tl.to(elements, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
          });
          break;
        case 'wave':
          tl.to(elements, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.6,
            stagger: {
              amount: 0.5,
              from: "start"
            },
            ease: "power2.out"
          });
          break;
        case 'random':
          tl.to(elements, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.6,
            stagger: {
              amount: 0.8,
              from: "random"
            },
            ease: "power2.out"
          });
          break;
        case 'center':
          tl.to(elements, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.6,
            stagger: {
              amount: 0.5,
              from: "center"
            },
            ease: "power2.out"
          });
          break;
        default:
          tl.to(elements, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
          });
      }
    };

    createAnimation();
  }, [text, splitType, animationType]);

  // Split text based on type
  const splitText = () => {
    if (splitType === 'words') {
      return text.split(' ').map((word, index) => (
        <span key={index} className="split-element inline-block mr-2">
          {word}
        </span>
      ));
    } else if (splitType === 'characters') {
      return text.split('').map((char, index) => (
        <span key={index} className="split-element inline-block">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    } else if (splitType === 'lines') {
      return text.split('\n').map((line, index) => (
        <div key={index} className="split-element block">
          {line}
        </div>
      ));
    }
    return text;
  };

  return (
    <div ref={containerRef} className={className} {...props}>
      {splitText()}
    </div>
  );
};

/**
 * ParallaxText - Text with parallax scrolling effect
 */
export const ParallaxText = ({ 
  text, 
  className = '',
  parallaxSpeed = 0.5,
  ...props 
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    
    // Set initial state
    gsap.set(element, { opacity: 0, y: 100 });
    
    // Initial animation
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    });

    // Parallax effect
    gsap.to(element, {
      y: -100 * parallaxSpeed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, [text, parallaxSpeed]);

  return (
    <div className={className} {...props}>
      <span ref={textRef} className="inline-block">
        {text}
      </span>
    </div>
  );
};

/**
 * MorphingTextSequence - Text that morphs between different phrases
 */
export const MorphingTextSequence = ({ 
  texts = [], 
  className = '',
  morphDuration = 1,
  pauseDuration = 2,
  ...props 
}) => {
  const textRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!textRef.current || texts.length === 0) return;

    const element = textRef.current;
    
    // Set initial text
    element.textContent = texts[0];
    gsap.set(element, { opacity: 1, scale: 1 });

    const morphSequence = () => {
      const tl = gsap.timeline();
      
      // Fade out and scale down
      tl.to(element, {
        opacity: 0,
        scale: 0.8,
        rotationY: 90,
        duration: morphDuration / 2,
        ease: "power2.in"
      })
      // Change text
      .call(() => {
        element.textContent = texts[currentIndex];
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      })
      // Fade in and scale up
      .to(element, {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: morphDuration / 2,
        ease: "power2.out"
      });
    };

    const interval = setInterval(morphSequence, pauseDuration * 1000);
    
    return () => clearInterval(interval);
  }, [texts, morphDuration, pauseDuration, currentIndex]);

  return (
    <div className={className} {...props}>
      <span ref={textRef} className="inline-block"></span>
    </div>
  );
};
