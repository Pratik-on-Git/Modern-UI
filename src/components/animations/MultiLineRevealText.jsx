import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * MultiLineRevealText - Text that reveals line by line with various effects
 */
export const MultiLineRevealText = ({ 
  text, 
  className = '', 
  revealType = 'fade',
  staggerDelay = 0.1,
  lineBreak = '<br />',
  ...props 
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const lines = containerRef.current.querySelectorAll('.reveal-line');
    
    // Set initial state based on reveal type
    const setInitialState = () => {
      switch (revealType) {
        case 'fade':
          gsap.set(lines, { opacity: 0 });
          break;
        case 'slide':
          gsap.set(lines, { opacity: 0, y: 30 });
          break;
        case 'scale':
          gsap.set(lines, { opacity: 0, scale: 0.8 });
          break;
        case 'rotate':
          gsap.set(lines, { opacity: 0, rotation: 10 });
          break;
        default:
          gsap.set(lines, { opacity: 0, y: 20 });
      }
    };

    setInitialState();

    // Create reveal animation
    const tl = gsap.timeline();
    
    switch (revealType) {
      case 'fade':
        tl.to(lines, {
          opacity: 1,
          duration: 0.6,
          stagger: staggerDelay,
          ease: "power2.out"
        });
        break;
      case 'slide':
        tl.to(lines, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: staggerDelay,
          ease: "power2.out"
        });
        break;
      case 'scale':
        tl.to(lines, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: staggerDelay,
          ease: "back.out(1.7)"
        });
        break;
      case 'rotate':
        tl.to(lines, {
          opacity: 1,
          rotation: 0,
          duration: 0.7,
          stagger: staggerDelay,
          ease: "power2.out"
        });
        break;
      default:
        tl.to(lines, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: staggerDelay,
          ease: "power2.out"
        });
    }
  }, [text, revealType, staggerDelay, lineBreak]);

  // Split text by line break and create lines
  const createLines = () => {
    const lines = text.split(lineBreak);
    return lines.map((line, lineIndex) => (
      <div key={lineIndex} className="reveal-line block">
        {line.split('').map((char, charIndex) => (
          <span key={charIndex} className="reveal-char inline-block">
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    ));
  };

  return (
    <div ref={containerRef} className={className} {...props}>
      {createLines()}
    </div>
  );
};

/**
 * WordByWordRevealText - Text that reveals word by word across multiple lines
 */
export const WordByWordRevealText = ({ 
  text, 
  className = '', 
  revealType = 'fade',
  staggerDelay = 0.1,
  lineBreak = '<br />',
  ...props 
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll('.reveal-word');
    
    // Set initial state based on reveal type
    const setInitialState = () => {
      switch (revealType) {
        case 'fade':
          gsap.set(words, { opacity: 0 });
          break;
        case 'slide':
          gsap.set(words, { opacity: 0, y: 20 });
          break;
        case 'scale':
          gsap.set(words, { opacity: 0, scale: 0 });
          break;
        case 'rotate':
          gsap.set(words, { opacity: 0, rotation: 180 });
          break;
        default:
          gsap.set(words, { opacity: 0, y: 15 });
      }
    };

    setInitialState();

    // Create reveal animation
    const tl = gsap.timeline();
    
    switch (revealType) {
      case 'fade':
        tl.to(words, {
          opacity: 1,
          duration: 0.5,
          stagger: staggerDelay,
          ease: "power2.out"
        });
        break;
      case 'slide':
        tl.to(words, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: staggerDelay,
          ease: "power2.out"
        });
        break;
      case 'scale':
        tl.to(words, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: staggerDelay,
          ease: "back.out(1.7)"
        });
        break;
      case 'rotate':
        tl.to(words, {
          opacity: 1,
          rotation: 0,
          duration: 0.6,
          stagger: staggerDelay,
          ease: "power2.out"
        });
        break;
      default:
        tl.to(words, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: staggerDelay,
          ease: "power2.out"
        });
    }
  }, [text, revealType, staggerDelay, lineBreak]);

  // Split text by line break and create words
  const createWords = () => {
    const lines = text.split(lineBreak);
    return lines.map((line, lineIndex) => (
      <div key={lineIndex} className="block">
        {line.split(' ').map((word, wordIndex) => (
          <span key={wordIndex} className="reveal-word inline-block mr-1">
            {word}
          </span>
        ))}
        {lineIndex < lines.length - 1 && <br />}
      </div>
    ));
  };

  return (
    <div ref={containerRef} className={className} {...props}>
      {createWords()}
    </div>
  );
};
