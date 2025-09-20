import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

/**
 * WordMorphingText - Text that fades in and then randomly morphs words
 */
export const WordMorphingText = ({ 
  text, 
  className = '', 
  morphWords = [],
  morphInterval = 3000,
  fadeInDuration = 1,
  morphDuration = 0.5,
  lineBreak = '<br />',
  ...props 
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const element = containerRef.current;
    
    // Set initial state
    gsap.set(element, { opacity: 0, y: 30 });
    
    // Fade in animation
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: fadeInDuration,
      ease: "power2.out",
      onComplete: () => setIsVisible(true)
    });
  }, [fadeInDuration]);

  useEffect(() => {
    if (!isVisible || morphWords.length === 0) return;

    const morphRandomWord = () => {
      const words = text.split(' ');
      const randomIndex = Math.floor(Math.random() * words.length);
      const randomMorphWord = morphWords[Math.floor(Math.random() * morphWords.length)];
      
      // Create morph animation
      const originalWord = words[randomIndex];
      const wordElement = containerRef.current.querySelector(`[data-word-index="${randomIndex}"]`);
      
      if (wordElement) {
        gsap.to(wordElement, {
          opacity: 0,
          scale: 0.8,
          duration: morphDuration / 2,
          ease: "power2.in",
          onComplete: () => {
            wordElement.textContent = randomMorphWord;
            gsap.to(wordElement, {
              opacity: 1,
              scale: 1,
              duration: morphDuration / 2,
              ease: "power2.out"
            });
          }
        });

        // Revert back after a short delay
        setTimeout(() => {
          gsap.to(wordElement, {
            opacity: 0,
            scale: 0.8,
            duration: morphDuration / 2,
            ease: "power2.in",
            onComplete: () => {
              wordElement.textContent = originalWord;
              gsap.to(wordElement, {
                opacity: 1,
                scale: 1,
                duration: morphDuration / 2,
                ease: "power2.out"
              });
            }
          });
        }, 2000);
      }
    };

    const interval = setInterval(morphRandomWord, morphInterval);
    
    return () => clearInterval(interval);
  }, [isVisible, text, morphWords, morphInterval, morphDuration]);

  // Split text by line break and create words
  const createWords = () => {
    const lines = text.split(lineBreak);
    return lines.map((line, lineIndex) => (
      <div key={lineIndex} className="block">
        {line.split(' ').map((word, wordIndex) => {
          const globalWordIndex = lines.slice(0, lineIndex).reduce((acc, l) => acc + l.split(' ').length, 0) + wordIndex;
          return (
            <span 
              key={wordIndex} 
              className="word-morph inline-block mr-1"
              data-word-index={globalWordIndex}
            >
              {word}
            </span>
          );
        })}
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

/**
 * GlitchMorphingText - Text with glitch-style word morphing
 */
export const GlitchMorphingText = ({ 
  text, 
  className = '', 
  morphWords = [],
  morphInterval = 4000,
  glitchIntensity = 0.3,
  lineBreak = '<br />',
  ...props 
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const element = containerRef.current;
    
    // Set initial state
    gsap.set(element, { opacity: 0, y: 50, rotationX: 90 });
    
    // Fade in animation
    gsap.to(element, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 1.2,
      ease: "power2.out",
      onComplete: () => setIsVisible(true)
    });
  }, []);

  useEffect(() => {
    if (!isVisible || morphWords.length === 0) return;

    const glitchMorph = () => {
      const words = containerRef.current.querySelectorAll('.glitch-word');
      const randomWord = words[Math.floor(Math.random() * words.length)];
      const randomMorphWord = morphWords[Math.floor(Math.random() * morphWords.length)];
      
      // Glitch effect before morph
      gsap.to(randomWord, {
        x: (Math.random() - 0.5) * 10 * glitchIntensity,
        y: (Math.random() - 0.5) * 5 * glitchIntensity,
        rotation: (Math.random() - 0.5) * 5 * glitchIntensity,
        duration: 0.1,
        repeat: 3,
        yoyo: true,
        ease: "power2.inOut",
        onComplete: () => {
          // Morph the word
          gsap.to(randomWord, {
            opacity: 0,
            scale: 0,
            duration: 0.2,
            ease: "power2.in",
            onComplete: () => {
              randomWord.textContent = randomMorphWord;
              gsap.to(randomWord, {
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                rotation: 0,
                duration: 0.3,
                ease: "elastic.out(1, 0.3)"
              });
            }
          });
        }
      });
    };

    const interval = setInterval(glitchMorph, morphInterval);
    
    return () => clearInterval(interval);
  }, [isVisible, morphWords, morphInterval, glitchIntensity]);

  // Split text by line break and create words
  const createWords = () => {
    const lines = text.split(lineBreak);
    return lines.map((line, lineIndex) => (
      <div key={lineIndex} className="block">
        {line.split(' ').map((word, wordIndex) => (
          <span key={wordIndex} className="glitch-word inline-block mr-1">
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

/**
 * LiquidMorphingText - Text with liquid-style word morphing
 */
export const LiquidMorphingText = ({ 
  text, 
  className = '', 
  morphWords = [],
  morphInterval = 3500,
  liquidIntensity = 0.5,
  lineBreak = '<br />',
  ...props 
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const element = containerRef.current;
    
    // Set initial state
    gsap.set(element, { opacity: 0, scale: 0.8, rotationY: 180 });
    
    // Fade in animation
    gsap.to(element, {
      opacity: 1,
      scale: 1,
      rotationY: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.3)",
      onComplete: () => setIsVisible(true)
    });
  }, []);

  useEffect(() => {
    if (!isVisible || morphWords.length === 0) return;

    const liquidMorph = () => {
      const words = containerRef.current.querySelectorAll('.liquid-word');
      const randomWord = words[Math.floor(Math.random() * words.length)];
      const randomMorphWord = morphWords[Math.floor(Math.random() * morphWords.length)];
      
      // Liquid effect before morph
      gsap.to(randomWord, {
        scaleX: 1 + Math.sin(Date.now() * 0.01) * 0.1 * liquidIntensity,
        scaleY: 1 + Math.cos(Date.now() * 0.01) * 0.1 * liquidIntensity,
        rotation: Math.sin(Date.now() * 0.02) * 3 * liquidIntensity,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          // Morph the word
          gsap.to(randomWord, {
            opacity: 0,
            scale: 0.5,
            rotation: 180,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
              randomWord.textContent = randomMorphWord;
              gsap.to(randomWord, {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.5)"
              });
            }
          });
        }
      });
    };

    const interval = setInterval(liquidMorph, morphInterval);
    
    return () => clearInterval(interval);
  }, [isVisible, morphWords, morphInterval, liquidIntensity]);

  // Split text by line break and create words
  const createWords = () => {
    const lines = text.split(lineBreak);
    return lines.map((line, lineIndex) => (
      <div key={lineIndex} className="block">
        {line.split(' ').map((word, wordIndex) => (
          <span key={wordIndex} className="liquid-word inline-block mr-1">
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
