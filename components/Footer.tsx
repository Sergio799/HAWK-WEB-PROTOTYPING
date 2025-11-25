'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const footerLinks = {
  Shop: ['Produce', 'Meat & Seafood', 'Bakery', 'Dairy', 'Pantry', 'Prepared Foods'],
  'Our Values': ['Quality Standards', 'Sustainability', 'Animal Welfare', 'Community', 'Transparency'],
  Locations: ['Find a Store', 'Store Hours', 'Services', 'Events', 'Delivery Areas'],
  Careers: ['Join Our Team', 'Store Positions', 'Corporate Jobs', 'Benefits', 'Culture']
};

const socialLinks = [
  { name: 'Facebook', icon: 'f', url: '#' },
  { name: 'Instagram', icon: '📷', url: '#' },
  { name: 'Twitter', icon: '🐦', url: '#' },
  { name: 'LinkedIn', icon: 'in', url: '#' }
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="mb-16 pb-16 border-b border-green-700/30">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-bebas)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              STAY CONNECTED
            </motion.h3>
            <motion.p 
              className="text-green-200 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Get exclusive deals, recipes, and updates on our Price Reset initiative
            </motion.p>
            
            <motion.form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-green-600/30 text-white placeholder-green-300/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-full transition-colors shadow-lg"
              >
                {subscribed ? '✓ Subscribed!' : 'Subscribe'}
              </motion.button>
            </motion.form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-green-400 font-bold text-lg mb-4 tracking-wide">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link 
                      href={link === 'Find a Store' ? '/stores' : '#'}
                      className="text-green-100 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-green-700/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo & Copyright */}
            <div className="text-center md:text-left">
              <div 
                className="text-3xl font-bold text-white mb-2"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                WHOLE FOODS MARKET
              </div>
              <p className="text-green-300 text-sm">
                © {new Date().getFullYear()} Whole Foods Market. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-green-700/50 hover:bg-green-600 rounded-full flex items-center justify-center text-xl transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-6 text-center">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-green-300">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="text-green-700">•</span>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <span className="text-green-700">•</span>
              <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
              <span className="text-green-700">•</span>
              <Link href="#" className="hover:text-white transition-colors">Cookie Settings</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
