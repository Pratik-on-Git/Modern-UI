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

