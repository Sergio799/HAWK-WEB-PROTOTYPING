'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const bundles = [
  {
    title: 'Meal Kits Under $15',
    description: 'Complete dinners for 2-4 people',
    price: 'From $12',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&h=400&fit=crop',
    items: ['Fresh ingredients', 'Recipe card', 'Ready in 30 min']
  },
  {
    title: 'Pantry Bundles',
    description: 'Stock up on organic essentials',
    price: 'From $25',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
    items: ['Grains & pasta', 'Canned goods', 'Cooking oils']
  },
  {
    title: 'Under-$5 Picks',
    description: 'Quality snacks and staples',
    price: 'From $2',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=400&fit=crop',
    items: ['Nuts & seeds', 'Fresh fruit', 'Organic snacks']
  },
  {
    title: 'Family Value Packs',
    description: 'Bulk savings for bigger households',
    price: 'From $35',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop',
    items: ['Proteins', 'Produce', 'Dairy & eggs']
  }
];

export default function ValueBundles() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-wider"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            EAT WELL FOR <span className="text-green-600">LESS</span>
          </h2>
          <p className="text-xl text-gray-600">
            Curated bundles that make quality food accessible for every budget
          </p>
        </motion.div>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Hero Card - Takes 2 columns */}
          <Link href="/bundles" className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              whileHover={{ scale: 1.02 }}
              style={{ 
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                willChange: 'transform',
              }}
              className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all cursor-pointer relative group h-full min-h-[500px]"
            >
              {/* Background Image */}
              <img 
                src={bundles[0].image} 
                alt={bundles[0].title}
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                loading="lazy"
                decoding="async"
              />
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-10">
                <div>
                  <div className="inline-block bg-black/30 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                    FEATURED BUNDLE
                  </div>
                  <h3 
                    className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wider"
                    style={{ fontFamily: 'var(--font-bebas)' }}
                  >
                    {bundles[0].title}
                  </h3>
                  <p className="text-2xl text-white/90 mb-6">{bundles[0].description}</p>
                  
                  {/* Items List */}
                  <ul className="space-y-3 mb-8">
                    {bundles[0].items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-lg text-white">
                        <span className="bg-white text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-5xl font-bold text-white" style={{ fontFamily: 'var(--font-bebas)' }}>
                    {bundles[0].price}
                  </div>
                  <button className="px-8 py-4 bg-white text-green-600 rounded-full text-xl font-bold hover:bg-green-50 transition-colors shadow-xl">
                    Shop Now →
                  </button>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Smaller Cards - Stack vertically */}
          <div className="flex flex-col gap-6">
            {bundles.slice(1).map((bundle, index) => (
              <Link href="/bundles" key={bundle.title}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
                  whileHover={{ x: 5 }}
                  style={{ 
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                  }}
                  className="bg-white rounded-2xl border-2 border-green-200 hover:border-green-600 overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer relative group"
                >
                  <div className="flex items-center gap-4 p-6">
                    {/* Image */}
                    <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden relative">
                      <img 
                        src={bundle.image} 
                        alt={bundle.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 
                        className="text-xl font-bold text-gray-900 mb-1"
                        style={{ fontFamily: 'var(--font-bebas)' }}
                      >
                        {bundle.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">{bundle.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-green-600" style={{ fontFamily: 'var(--font-bebas)' }}>
                          {bundle.price}
                        </span>
                        <span className="text-green-600 group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            New bundles added weekly. Save more when you shop smart.
          </p>
          <Link href="/bundles">
            <button className="px-10 py-4 bg-white border-2 border-green-600 text-black hover:bg-green-600 hover:text-black font-semibold rounded-full transition-all shadow-lg">
              View All Value Bundles
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
