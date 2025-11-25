'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Dynamically import the 3D component to avoid SSR issues
const StoreLocator3D = dynamic(() => import('@/components/StoreLocator3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-gradient-to-b from-green-900 to-black flex items-center justify-center">
      <div className="text-white text-2xl">Loading 3D Map...</div>
    </div>
  )
});

export default function StoresPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        {/* 3D Map */}
        <StoreLocator3D />

      {/* Store List */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl font-bold text-gray-900 mb-4 tracking-wide"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              ALL LOCATIONS
            </h2>
            <p className="text-gray-600 mb-8">Find a Whole Foods Market near you</p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by city, zip code, or address..."
                  className="w-full px-6 py-4 pr-12 rounded-full border-2 border-green-200 focus:border-green-500 focus:outline-none text-lg"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 text-black p-3 rounded-full transition-colors">
                  🔍
                </button>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Downtown Charlotte', address: '123 Main St', phone: '(704) 555-0100', hours: '8am - 10pm', lat: 35.2271, lng: -80.8431 },
              { name: 'SouthPark', address: '456 Park Ave', phone: '(704) 555-0101', hours: '7am - 11pm', lat: 35.1580, lng: -80.8270 },
              { name: 'University Area', address: '789 College Rd', phone: '(704) 555-0102', hours: '8am - 10pm', lat: 35.3074, lng: -80.7350 },
              { name: 'Ballantyne', address: '321 South Blvd', phone: '(704) 555-0103', hours: '8am - 9pm', lat: 35.0530, lng: -80.8480 },
              { name: 'Plaza Midwood', address: '654 Central Ave', phone: '(704) 555-0104', hours: '8am - 10pm', lat: 35.2180, lng: -80.8050 },
              { name: 'Dilworth', address: '987 East Blvd', phone: '(704) 555-0105', hours: '7am - 10pm', lat: 35.2000, lng: -80.8500 }
            ].map((store, index) => (
              <motion.div
                key={store.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-green-200 hover:border-green-400 relative overflow-hidden group"
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-transparent rounded-bl-full" />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-bebas)' }}>
                      {store.name}
                    </h3>
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                      OPEN
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-gray-700 mb-4">
                    <p className="flex items-center gap-2">
                      <span className="text-green-600 text-lg">📍</span>
                      <span className="text-sm">{store.address}, Charlotte, NC</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-green-600 text-lg">📞</span>
                      <span className="text-sm">{store.phone}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-green-600 text-lg">🕐</span>
                      <span className="text-sm">Today: {store.hours}</span>
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 bg-green-600 hover:bg-green-700 text-black font-semibold rounded-full transition-colors text-center"
                  >
                    🗺️ Get Directions
                  </a>
                  <a
                    href={`tel:${store.phone}`}
                    className="block w-full py-3 bg-white border-2 border-green-600 text-black hover:bg-green-50 font-semibold rounded-full transition-colors text-center"
                  >
                    📞 Call Store
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        <Footer />
      </main>
    </>
  );
}
