import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ModernFadeIn } from '../animations';
import Button from '../buttons/button.jsx';
import ConstData from '../subcomponents/ConstData.jsx';

const Cases = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="w-full py-16 bg-white">
      <div className="text-center mb-16">
            <ModernFadeIn delay={0.4}>
                <h2 className="text-5xl lg:text-6xl font-medium text-black mb-4">
                  Cases
                </h2>
                <p className="text-xl text-black">
                  Clients and results we are proud of
                </p>
            </ModernFadeIn>
        </div>
      <div className="flex flex-row gap-8 justify-center">
        {ConstData.map((c, i) => {
          const isHovered = hovered === i;
          // Animate flex-basis for smooth expansion, keep cards together
          return (
            <motion.div
              key={i}
              className={`group relative flex flex-col justify-between rounded-3xl overflow-hidden cursor-pointer bg-cover bg-center min-h-[550px] flex-1 ${
                isHovered ? 'z-20 shadow-xl' : hovered !== null ? 'opacity-80 shadow' : 'shadow-md'
              }`}
              style={{
                backgroundImage: `url(${c.image})`,
              }}
              layout
              transition={{ type: 'spring', stiffness: 400, damping: 38, duration: 0.45 }}
              animate={{
                flexBasis: isHovered ? '29%' : hovered !== null ? '21%' : '25%',
                zIndex: isHovered ? 20 : 1,
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Pills */}
              <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                <AnimatePresence>
                  {c.pills.map((pill, idx) => (
  <motion.div
    key={idx}
    initial={{ opacity: 0, y: -8 }}
    animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.32, delay: 0.08 * idx }}
    style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
  >
    <Button text={pill} styletype="white-small" />
  </motion.div>
))}
                </AnimatePresence>
              </div>
              {/* Content */}
              <div className="flex-1 flex flex-col justify-end p-6 pb-20">
                <ModernFadeIn delay={0.}>
                <h3 className=" text-4xl font-medium text-white mb-2 drop-shadow-lg">{c.title}</h3>
                {c.subtitle && (
                  <p className="text-base text-white mb-4 drop-shadow-md">{c.subtitle}</p>
                )}
                </ModernFadeIn>
              </div>
              {/* Button */}
              
              <div className="absolute bottom-6 left-0 w-full flex justify-center z-10">
                <motion.button
                  className="group/button bg-white/80 text-gray-900 font-medium rounded-full px-6 py-2 flex items-center justify-between gap-2 overflow-hidden shadow-sm border border-white/40"
                  animate={{
                    width: isHovered ? '24vw' : '20vw', // px (w-48 or w-36)
                    fontSize: isHovered ? '1.1rem' : '1rem', // text-lg or text-base
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 0.35 }}
                >
                  Learn More <motion.span animate={{ x: isHovered ? 6 : 0 }} transition={{ duration: 0.25 }}>→</motion.span>
                </motion.button>
              </div>
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none transition-all duration-400" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Cases;
