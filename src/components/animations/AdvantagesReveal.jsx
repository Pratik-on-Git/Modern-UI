import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
      when: "beforeChildren"
    }
  }
};

const leftContainerVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { 
    y: 20, 
    opacity: 0,
    scale: 0.95
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100
    }
  }
};

const leftItemVariants = {
  hidden: { 
    x: -30, 
    opacity: 0,
    filter: 'blur(5px)'
  },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    filter: 'blur(0)',
    transition: {
      delay: i * 0.1,
      type: 'spring',
      damping: 15,
      stiffness: 100
    }
  })
};

const circleVariants = {
  hidden: { 
    scale: 0.8,
    opacity: 0,
    rotate: -10
  },
  visible: (i) => ({
    scale: 1,
    opacity: 0.3,
    rotate: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: 'spring',
      damping: 10,
      stiffness: 100
    }
  })
};

export const AdvantagesReveal = ({ children, className = '', variant = 'default' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variant === 'left' ? leftContainerVariants : containerVariants}
    >
      {children}
    </motion.div>
  );
};

export const AdvantagesItem = ({ children, className = '', variant = 'default', custom = 0 }) => (
  <motion.div 
    className={className}
    variants={variant === 'left' ? leftItemVariants : itemVariants}
    custom={custom}
  >
    {children}
  </motion.div>
);

export const AdvantagesCircle = ({ className = '', index = 0 }) => (
  <motion.div
    className={`absolute border-2 border-white rounded-full ${className}`}
    custom={index}
    variants={circleVariants}
  />
);

// Add the new components to the default export
const AdvantagesAnimation = {
  Container: AdvantagesReveal,
  Item: AdvantagesItem,
  Circle: AdvantagesCircle
};

export default AdvantagesAnimation;
