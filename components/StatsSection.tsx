'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wider"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            THE NUMBERS SPEAK
          </h2>
          <p className="text-xl text-gray-400">Real savings. Real quality. Real change.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center p-8 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl border border-green-500/20"
          >
            <div 
              className="text-6xl md:text-7xl font-bold text-green-400 mb-4"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              <CountUp end={5000} />+
            </div>
            <p className="text-xl text-white font-semibold mb-2">Products Reduced</p>
            <p className="text-gray-400">Across all departments</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center p-8 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl border border-green-500/20"
          >
            <div 
              className="text-6xl md:text-7xl font-bold text-green-400 mb-4"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              <CountUp end={40} />%
            </div>
            <p className="text-xl text-white font-semibold mb-2">Average Savings</p>
            <p className="text-gray-400">On everyday essentials</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center p-8 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl border border-green-500/20"
          >
            <div 
              className="text-6xl md:text-7xl font-bold text-green-400 mb-4"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              100%
            </div>
            <p className="text-xl text-white font-semibold mb-2">Same Quality</p>
            <p className="text-gray-400">No compromises made</p>
          </motion.div>
        </div>

        {/* Find a Store CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <a
            href="/stores"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white border-4 border-green-600 hover:bg-green-600 text-black rounded-full text-2xl font-bold tracking-wider transition-all shadow-2xl hover:scale-105"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            <span>📍</span>
            FIND A STORE NEAR YOU
          </a>
        </motion.div>
      </div>
    </section>
  );
}
