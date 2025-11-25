'use client';

import { motion } from 'framer-motion';

const trustPoints = [
  {
    icon: '🌱',
    title: 'Transparent Sourcing',
    description: 'Know exactly where your food comes from with full supply chain visibility'
  },
  {
    icon: '✓',
    title: 'Quality Standards',
    description: 'Same rigorous standards, better prices. No shortcuts, just smarter sourcing'
  },
  {
    icon: '💚',
    title: 'Community First',
    description: 'Supporting local farmers and sustainable practices while keeping prices fair'
  }
];

export default function TrustSection() {
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
            TRUST REBUILT
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We heard you. We're changing. Lower prices without compromising the values that matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6, type: 'spring', stiffness: 300, damping: 20 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-7xl mb-6">{point.icon}</div>
              <h3 
                className="text-2xl font-bold text-gray-900 mb-4 tracking-wide"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
