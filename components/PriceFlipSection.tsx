'use client';

import { motion } from 'framer-motion';
import PriceFlipCard from '@/components/PriceFlipCard';

const products = [
  {
    name: 'Organic Avocados',
    oldPrice: '$3.99',
    newPrice: '$2.49',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=400&fit=crop',
    savings: '38%'
  },
  {
    name: 'Wild Salmon',
    oldPrice: '$16.99',
    newPrice: '$12.99',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=400&fit=crop',
    savings: '24%'
  },
  {
    name: 'Organic Bananas',
    oldPrice: '$1.29',
    newPrice: '$0.79',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop',
    savings: '39%'
  },
  {
    name: 'Grass-Fed Beef',
    oldPrice: '$12.99',
    newPrice: '$9.99',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&h=400&fit=crop',
    savings: '23%'
  }
];

export default function PriceFlipSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wider"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            SEE THE <span className="text-green-400">DIFFERENCE</span>
          </h2>
          <p className="text-xl text-gray-400">
            Same quality. Better prices. Click any card to reveal savings.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto px-2">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                delay: index * 0.08,
                duration: 0.4,
                ease: 'easeOut'
              }}
              style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
            >
              <PriceFlipCard {...product} />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a href="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white border-4 border-green-600 hover:bg-green-600 text-black rounded-full text-2xl font-bold tracking-wider transition-all shadow-2xl"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              VIEW MORE PRODUCTS
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
