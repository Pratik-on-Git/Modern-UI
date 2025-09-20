import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register TextPlugin
gsap.registerPlugin(TextPlugin);

/**
 * AnimatedText - A reusable component for various text animations
 * @param {string} text - The text to animate
 * @param {string} animationType - Type of animation ('typewriter', 'stagger', 'morph', 'fadeInUp', 'slideIn')
 * @param {object} options - Animation options
 */
export const AnimatedText = ({ 
  text, 
  animationType = 'fadeInUp', 
  options = {},
  className = '',
  children,
  ...props 
}) => {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    const defaultOptions = {
      duration: 1,
      delay: 0,
      ease: "power2.out",
      ...options
    };

    // Set initial state based on animation type
    const setInitialState = () => {
      switch (animationType) {
        case 'typewriter':
          gsap.set(element, { text: "" });
          break;
        case 'stagger':
          gsap.set(element.querySelectorAll('.word'), { 
            opacity: 0, 
            y: 50, 
            rotationX: 90 
          });
          break;
        case 'morph':
          gsap.set(element, { 
            opacity: 0, 
            scale: 0.8, 
            rotationY: 180 
          });
          break;
        case 'fadeInUp':
          gsap.set(element, { opacity: 0, y: 50 });
          break;
        case 'slideIn':
          gsap.set(element, { x: -100, opacity: 0 });
          break;
        default:
          gsap.set(element, { opacity: 0, y: 30 });
      }
    };

    setInitialState();

    // Create animation timeline
    const tl = gsap.timeline({ delay: defaultOptions.delay });

    switch (animationType) {
      case 'typewriter':
        tl.to(element, {
          text: text,
          duration: defaultOptions.duration,
          ease: defaultOptions.ease,
        });
        break;

      case 'stagger':
        tl.to(element.querySelectorAll('.word'), {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: defaultOptions.duration,
          stagger: 0.1,
          ease: defaultOptions.ease,
        });
        break;

      case 'morph':
        tl.to(element, {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: defaultOptions.duration,
          ease: defaultOptions.ease,
        });
        break;

      case 'fadeInUp':
        tl.to(element, {
          opacity: 1,
          y: 0,
          duration: defaultOptions.duration,
          ease: defaultOptions.ease,
        });
        break;

      case 'slideIn':
        tl.to(element, {
          x: 0,
          opacity: 1,
          duration: defaultOptions.duration,
          ease: defaultOptions.ease,
        });
        break;

      default:
        tl.to(element, {
          opacity: 1,
          y: 0,
          duration: defaultOptions.duration,
          ease: defaultOptions.ease,
        });
    }

    return () => {
      tl.kill();
    };
  }, [text, animationType, options]);

  // For stagger animation, we need to split text into words
  const renderText = () => {
    if (animationType === 'stagger') {
      return text.split(' ').map((word, index) => (
        <span key={index} className="word inline-block mr-2">
          {word}
        </span>
      ));
    }
    return text;
  };

  return (
    <div ref={containerRef} className={className} {...props}>
      <span ref={textRef}>
        {children || renderText()}
      </span>
    </div>
  );
};

/**
 * StaggeredText - Specialized component for word-by-word animations
 */
export const StaggeredText = ({ 
  text, 
  className = '', 
  staggerDelay = 0.1,
  animationOptions = {},
  ...props 
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll('.stagger-word');
    
    gsap.set(words, { 
      opacity: 0, 
      y: 50, 
      rotationX: 90 
    });

    const tl = gsap.timeline();
    tl.to(words, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 0.8,
      stagger: staggerDelay,
      ease: "power2.out",
      ...animationOptions
    });
  }, [text, staggerDelay, animationOptions]);

  return (
    <div ref={containerRef} className={className} {...props}>
      {text.split(' ').map((word, index) => (
        <span key={index} className="stagger-word inline-block mr-2">
          {word}
        </span>
      ))}
    </div>
  );
};

/**
 * TypewriterText - Specialized component for typewriter effect
 */
export const TypewriterText = ({ 
  text, 
  className = '', 
  speed = 0.05,
  cursor = true,
  cursorChar = '|',
  ...props 
}) => {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.set(textRef.current, { text: "" });
    
    const tl = gsap.timeline();
    
    tl.to(textRef.current, {
      text: text,
      duration: text.length * speed,
      ease: "none",
    });

    if (cursor) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }
  }, [text, speed, cursor]);

  return (
    <div className={className} {...props}>
      <span ref={textRef}></span>
      {cursor && <span ref={cursorRef} className="ml-1">{cursorChar}</span>}
    </div>
  );
};

/**
 * MorphingText - Component for morphing between different text states
 */
export const MorphingText = ({ 
  texts = [], 
  className = '', 
  morphDuration = 2,
  pauseDuration = 3,
  ...props 
}) => {
  const textRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!textRef.current || texts.length === 0) return;

    const morphText = () => {
      const tl = gsap.timeline();
      
      // Fade out and scale down
      tl.to(textRef.current, {
        opacity: 0,
        scale: 0.8,
        rotationY: 90,
        duration: 0.5,
        ease: "power2.in"
      })
      // Change text and fade in with scale up
      .call(() => {
        textRef.current.textContent = texts[currentIndex];
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      })
      .to(textRef.current, {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    const interval = setInterval(morphText, pauseDuration * 1000);
    
    // Initial animation
    gsap.set(textRef.current, { text: texts[0] });
    
    return () => clearInterval(interval);
  }, [texts, morphDuration, pauseDuration, currentIndex]);

  return (
    <div className={className} {...props}>
      <span ref={textRef}></span>
    </div>
  );
};
