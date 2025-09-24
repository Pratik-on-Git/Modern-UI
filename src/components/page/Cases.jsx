import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ModernFadeIn } from '../animations';

const casesData = [
  {
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    title: 'Increased conversion on VK',
    subtitle: 'From the start, you cannot choose which phrases to advertise with.',
    pills: ['Fast conversion', 'Big company', 'Regular customer'],
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'Brand Wood - increase in profits by 25%',
    subtitle: '',
    pills: [],
  },
  {
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    title: 'Zeva bed linen - sales increased by 35%',
    subtitle: '',
    pills: [],
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    title: 'Mink toys - sales increase by 5% per year',
    subtitle: '',
    pills: [],
  },
];

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
      <div className="flex flex-row gap-6 justify-center max-w-6xl mx-auto px-4">
        {casesData.map((c, i) => {
          const expandLeft = i === 0;
          const isHovered = hovered === i;
          // Animate flex-basis for smooth expansion, keep cards together
          return (
            <motion.div
              key={i}
              className={`group relative flex flex-col justify-between rounded-3xl overflow-hidden cursor-pointer bg-cover bg-center min-h-[410px] flex-1 ${
                isHovered ? 'z-20 shadow-xl' : hovered !== null ? 'opacity-80 shadow' : 'shadow-md'
              }`}
              style={{
                backgroundImage: `url(${c.image})`,
              }}
              layout
              transition={{ type: 'spring', stiffness: 400, damping: 38, duration: 0.45 }}
              animate={{
                flexBasis: isHovered ? '29%' : hovered !== null ? '21%' : '25%',
                marginLeft: isHovered && expandLeft ? '-1.5rem' : '0rem',
                marginRight: isHovered && !expandLeft ? '-1.5rem' : '0rem',
                zIndex: isHovered ? 20 : 1,
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Pills */}
              <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                <AnimatePresence>
                  {c.pills.map((pill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, y: -8 }}
                      animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.32, delay: 0.08 * idx }}
                      className="inline-block px-3 py-1 rounded-full bg-white/30 text-white text-xs font-medium mb-1 backdrop-blur-sm"
                      style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
                    >
                      {pill}
                    </motion.span>
                  ))}
                </AnimatePresence>
              </div>
              {/* Content */}
              <div className="flex-1 flex flex-col justify-end p-6 pb-20">
                <h3 className="text-2xl font-light text-white mb-2 drop-shadow-lg">{c.title}</h3>
                {c.subtitle && (
                  <p className="text-base text-white/80 mb-4 drop-shadow-md">{c.subtitle}</p>
                )}
              </div>
              {/* Button */}
              <div className="absolute bottom-6 left-0 w-full flex justify-center z-10">
                <motion.button
                  className="group/button bg-white/80 text-gray-900 font-medium rounded-full px-6 py-2 flex items-center gap-2 overflow-hidden shadow-sm border border-white/40"
                  animate={{
                    width: isHovered ? 192 : 144, // px (w-48 or w-36)
                    fontSize: isHovered ? '1.125rem' : '1rem', // text-lg or text-base
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 0.35 }}
                >
                  Learn more <motion.span animate={{ x: isHovered ? 6 : 0 }} transition={{ duration: 0.25 }}>→</motion.span>
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
