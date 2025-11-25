'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const standards = [
  {
    title: 'Quality Assurance',
    icon: '✓',
    description: 'Every product meets our rigorous quality standards, from farm to shelf.',
    details: [
      'Third-party testing and verification',
      'Strict ingredient sourcing guidelines',
      'Regular quality audits and inspections',
      'Transparent labeling and traceability'
    ]
  },
  {
    title: 'Sustainable Sourcing',
    icon: '🌱',
    description: 'We partner with farmers and suppliers who share our commitment to the planet.',
    details: [
      'Organic and regenerative farming practices',
      'Fair trade and ethical labor standards',
      'Reduced carbon footprint in supply chain',
      'Support for local and small-scale producers'
    ]
  },
  {
    title: 'Animal Welfare',
    icon: '🐄',
    description: 'Humane treatment is non-negotiable in our meat, dairy, and egg sourcing.',
    details: [
      'Cage-free and pasture-raised standards',
      'No antibiotics or added hormones',
      'Third-party animal welfare certifications',
      'Transparent farm partnerships'
    ]
  },
  {
    title: 'No Artificial Ingredients',
    icon: '🚫',
    description: 'We ban over 300 ingredients commonly found in other grocery stores.',
    details: [
      'No artificial colors, flavors, or preservatives',
      'No high-fructose corn syrup',
      'No hydrogenated fats',
      'No bleached flour'
    ]
  }
];

export default function StandardsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-white to-green-50 pt-20">
        {/* Header */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Link 
            href="/"
            className="inline-flex items-center text-green-400 hover:text-green-300 mb-8 group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          
          <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-6 tracking-wider"
            style={{ fontFamily: 'var(--font-bebas)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            OUR STANDARDS
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            For over 40 years, we've maintained the highest standards in the industry. 
            Here's what sets us apart and why you can trust every product on our shelves.
          </motion.p>
        </div>
      </section>

      {/* Standards Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standards.map((standard, index) => (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                    {standard.icon}
                  </div>
                  <div>
                    <h3 
                      className="text-3xl font-bold text-gray-900 mb-2"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {standard.title}
                    </h3>
                    <p className="text-gray-600">{standard.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {standard.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f5f1e8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            className="text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Experience the Difference?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Quality standards you can trust, at prices that make sense.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="/"
              className="inline-block px-12 py-5 bg-green-600 text-black rounded-full text-xl font-semibold hover:bg-green-700 transition-colors shadow-xl"
            >
              Start Shopping Now
            </Link>
          </motion.div>
        </div>
      </section>
        <Footer />
      </main>
    </>
  );
}
