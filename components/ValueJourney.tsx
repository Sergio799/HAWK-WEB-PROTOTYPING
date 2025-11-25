'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const journeySteps = [
  {
    title: 'Fresh Produce',
    description: 'Organic fruits and vegetables at prices that make healthy eating accessible',
    stat: 'Up to 40% off',
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400&h=400&fit=crop&q=80',
    color: 'from-green-400 to-green-600'
  },
  {
    title: 'Quality Proteins',
    description: 'Grass-fed, wild-caught, and organic options without the premium price',
    stat: 'Save $5-8 per lb',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=400&fit=crop&q=80',
    color: 'from-red-400 to-red-600'
  },
  {
    title: 'Pantry Staples',
    description: 'Everyday essentials and organic basics at competitive prices',
    stat: '25% average savings',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop&q=80',
    color: 'from-amber-400 to-amber-600'
  },
  {
    title: 'Dairy & Alternatives',
    description: 'Plant-based and traditional dairy products for every lifestyle',
    stat: 'Starting at $2.99',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=400&fit=crop&q=80',
    color: 'from-blue-400 to-blue-600'
  }
];

export default function ValueJourney() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-20 px-4 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-wider"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            YOUR VALUE <span className="text-green-600">JOURNEY</span>
          </h2>
          <p className="text-xl text-gray-600">
            Quality across every aisle, savings in every cart
          </p>
        </motion.div>

        {/* Modern Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {/* Large Card - Spans 2 columns and 2 rows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="md:col-span-2 md:row-span-2 group"
          >
            <Link href="/products">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all cursor-pointer"
              >
                {/* Background Image */}
                <img 
                  src={journeySteps[0].image} 
                  alt={journeySteps[0].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${journeySteps[0].color} opacity-60`} />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-10">
                  <div>
                    <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                      FEATURED CATEGORY
                    </div>
                  </div>
                  
                  <div>
                    <h3 
                      className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-wider"
                      style={{ fontFamily: 'var(--font-bebas)' }}
                    >
                      {journeySteps[0].title}
                    </h3>
                    <p className="text-2xl text-white/90 mb-6 max-w-xl">
                      {journeySteps[0].description}
                    </p>
                    <div className="flex items-center gap-4">
                      <div 
                        className="bg-white text-green-600 px-8 py-3 rounded-full text-3xl font-bold shadow-xl"
                        style={{ fontFamily: 'var(--font-bebas)' }}
                      >
                        {journeySteps[0].stat}
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold hover:bg-white/30 transition-colors">
                        Shop Now →
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Smaller Cards - Right Column */}
          {journeySteps.slice(1).map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
              className="group"
            >
              <Link href="/products">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative h-full min-h-[240px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer"
                >
                  {/* Background Image */}
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-50`} />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6">
                    <div>
                      <h3 
                        className="text-3xl font-bold text-white mb-2 tracking-wide"
                        style={{ fontFamily: 'var(--font-bebas)' }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm text-white/90 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    <div 
                      className="bg-white text-gray-900 px-5 py-2 rounded-full text-xl font-bold shadow-lg inline-block w-fit"
                      style={{ fontFamily: 'var(--font-bebas)' }}
                    >
                      {step.stat}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <h3 
            className="text-4xl font-bold text-gray-900 mb-6 tracking-wide"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            READY TO EXPERIENCE THE DIFFERENCE?
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-green-600 text-black rounded-full text-2xl font-bold hover:bg-green-700 transition-colors shadow-xl tracking-wider"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            START SHOPPING NOW
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
