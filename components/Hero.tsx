'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

const foodItems = ['🫐', '🍎', '🥕', '🍠', '🥬', '🌾', '🍚', '🌰', '🫘', '🥜', '🐟', '🥚', '🥩', '🦐', '🥑', '🍊'];

export default function Hero() {
  const [radius, setRadius] = useState(280);

  useEffect(() => {
    const updateRadius = () => {
      setRadius(Math.min(window.innerWidth, window.innerHeight) * 0.35);
    };
    
    updateRadius();
    
    // Debounce resize for better performance
    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateRadius, 150);
    };
    
    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black will-change-transform">
      {/* Rotating Food Items */}
      <div className="absolute inset-0 flex items-center justify-center">
        {foodItems.map((emoji, index) => {
          const startAngle = (index / foodItems.length) * 360;
          
          return (
            <motion.div
              key={index}
              className="absolute text-5xl sm:text-6xl md:text-7xl will-change-transform"
              style={{
                left: '50%',
                top: '50%',
                marginLeft: '-1.5rem',
                marginTop: '-1.5rem',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
              }}
              animate={{
                rotate: [startAngle, startAngle + 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <motion.div
                style={{
                  x: radius,
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                }}
                animate={{ rotate: [0, -360] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {emoji}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center ml-8 md:ml-16"
        >
          <motion.h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-wider leading-none"
            style={{ fontFamily: 'var(--font-bebas)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            WHOLE FOODS
          </motion.h1>
          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-400 mt-2 tracking-wider"
            style={{ fontFamily: 'var(--font-bebas)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            PRICE RESET
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div 
            className="w-1.5 h-1.5 bg-green-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
