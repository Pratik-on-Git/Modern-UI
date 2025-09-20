import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(TextPlugin, ScrollTrigger);


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
