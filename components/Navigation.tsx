'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      style={{ 
        position: 'fixed',
        transform: 'translateZ(0)', 
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl md:text-3xl">🥬</span>
            <span 
              className={`text-xl md:text-2xl font-bold tracking-wider ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              WHOLE FOODS
            </span>
          </motion.div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 ${
            scrolled ? 'text-gray-900' : 'text-white'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/products">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className={`font-semibold ${
                scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-400'
              } transition-colors`}
            >
              Products
            </motion.span>
          </Link>
          <Link href="/bundles">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className={`font-semibold ${
                scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-400'
              } transition-colors`}
            >
              Bundles
            </motion.span>
          </Link>
          <Link href="/stores">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className={`font-semibold ${
                scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-400'
              } transition-colors`}
            >
              Stores
            </motion.span>
          </Link>
          <Link href="/standards">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className={`font-semibold ${
                scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-400'
              } transition-colors`}
            >
              Standards
            </motion.span>
          </Link>

          {/* Cart Button */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCartOpen(!cartOpen)}
              className={`relative p-2 rounded-full transition-colors ${
                scrolled 
                  ? 'text-gray-700 hover:text-green-600' 
                  : 'text-white hover:text-green-400'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {/* Cart Badge */}
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </motion.button>

            {/* Cart Dropdown */}
            {cartOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border-2 border-green-600 overflow-hidden z-50"
              >
                <div className="p-4 bg-green-600 text-black">
                  <h3 className="text-lg font-bold">Shopping Cart</h3>
                </div>
                
                <div className="p-4">
                  {/* Empty Cart Message */}
                  <div className="text-center py-8">
                    <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p className="text-gray-600 mb-4">Your cart is empty</p>
                    <button 
                      onClick={() => setCartOpen(false)}
                      className="px-6 py-2 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
                    >
                      Start Shopping
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Auth Buttons */}
          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                scrolled 
                  ? 'text-gray-700 hover:text-green-600' 
                  : 'text-white hover:text-green-400'
              }`}
            >
              Login
            </motion.button>
          </Link>
          <Link href="/signup">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-green-600 text-black rounded-full font-semibold hover:bg-green-700 transition-colors"
            >
              Sign Up
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t-2 border-green-600"
        >
          <div className="px-4 py-4 space-y-3">
            <Link href="/products" onClick={() => setMobileMenuOpen(false)}>
              <div className="block py-2 text-gray-700 hover:text-green-600 font-semibold">
                Products
              </div>
            </Link>
            <Link href="/bundles" onClick={() => setMobileMenuOpen(false)}>
              <div className="block py-2 text-gray-700 hover:text-green-600 font-semibold">
                Bundles
              </div>
            </Link>
            <Link href="/stores" onClick={() => setMobileMenuOpen(false)}>
              <div className="block py-2 text-gray-700 hover:text-green-600 font-semibold">
                Stores
              </div>
            </Link>
            <Link href="/standards" onClick={() => setMobileMenuOpen(false)}>
              <div className="block py-2 text-gray-700 hover:text-green-600 font-semibold">
                Standards
              </div>
            </Link>
            <div className="pt-3 border-t border-gray-200 space-y-2">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full py-2 text-gray-700 hover:text-green-600 font-semibold text-left">
                  Login
                </button>
              </Link>
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full py-2 bg-green-600 text-black rounded-full font-semibold hover:bg-green-700 transition-colors">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
