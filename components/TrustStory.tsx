'use client';

import { motion } from 'framer-motion';

const values = [
  { icon: '✓', label: 'Quality' },
  { icon: '🌱', label: 'Sustainability' },
  { icon: '💰', label: 'Affordability' }
];

export default function TrustStory() {
  return (
    <section className="py-20 bg-[#f5f1e8] relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4c5a9' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=900&fit=crop&q=90"
                alt="Golden farm fields at sunset"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-600 rounded-full opacity-20 blur-3xl" />
          </motion.div>

          {/* Right: Text Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 
              className="text-5xl md:text-6xl font-serif text-gray-900 mb-8 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Good Food Should Be For Everyone
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-8">
              <p>
                For over 40 years, we've been committed to the highest standards of quality and sustainability. 
                But we heard you—premium food shouldn't come with a premium price tag that puts it out of reach.
              </p>
              <p>
                That's why we're resetting prices across thousands of products. Same farmers, same standards, 
                same care—just smarter sourcing and a renewed commitment to making whole foods accessible to everyone.
              </p>
            </div>

            {/* Values Icons */}
            <div className="flex gap-8 mb-10">
              {values.map((value, index) => (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-2xl text-black mb-3 shadow-lg">
                    {value.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                    {value.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="/standards"
              whileHover={{ x: 10 }}
              className="inline-flex items-center text-green-700 font-semibold text-lg group"
            >
              Learn More About Our Standards
              <svg 
                className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
