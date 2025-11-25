'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const allBundles = [
  {
    category: 'Meal Kits Under $15',
    bundles: [
      { name: 'Mediterranean Chicken', price: '$12.99', serves: '2-3', time: '25 min', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=400&fit=crop' },
      { name: 'Veggie Stir-Fry', price: '$10.99', serves: '2-4', time: '20 min', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=400&fit=crop' },
      { name: 'Pasta Primavera', price: '$11.99', serves: '3-4', time: '30 min', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=400&fit=crop' },
      { name: 'Taco Night Kit', price: '$13.99', serves: '4', time: '25 min', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=400&fit=crop' }
    ]
  },
  {
    category: 'Pantry Bundles',
    bundles: [
      { name: 'Organic Basics', price: '$24.99', items: '8 items', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop' },
      { name: 'Breakfast Essentials', price: '$19.99', items: '6 items', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=400&fit=crop' },
      { name: 'Baking Bundle', price: '$22.99', items: '7 items', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop' },
      { name: 'Pasta Lovers Pack', price: '$18.99', items: '5 items', image: 'https://images.unsplash.com/photo-1551462147-37cbd8c5d00b?w=400&h=400&fit=crop' }
    ]
  },
  {
    category: 'Under-$5 Picks',
    bundles: [
      { name: 'Trail Mix Trio', price: '$4.99', weight: '12 oz', image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=400&fit=crop' },
      { name: 'Fresh Fruit Bag', price: '$3.99', weight: '2 lbs', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=400&fit=crop' },
      { name: 'Organic Snack Pack', price: '$4.49', items: '4 items', image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=400&fit=crop' },
      { name: 'Veggie Medley', price: '$3.49', weight: '1.5 lbs', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop' }
    ]
  },
  {
    category: 'Family Value Packs',
    bundles: [
      { name: 'Weekly Protein Pack', price: '$39.99', weight: '5 lbs', image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&h=400&fit=crop' },
      { name: 'Fresh Produce Box', price: '$34.99', items: '15+ items', image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400&h=400&fit=crop' },
      { name: 'Dairy & Eggs Bundle', price: '$29.99', items: '10 items', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=400&fit=crop' },
      { name: 'Complete Family Meal', price: '$44.99', serves: '6-8', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop' }
    ]
  }
];

export default function BundlesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-white to-green-50 pt-20">
        {/* Header */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Link 
            href="/"
            className="inline-flex items-center text-green-200 hover:text-white mb-8 group"
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
            VALUE BUNDLES
          </motion.h1>
          <motion.p 
            className="text-xl text-green-100 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Curated collections that make eating well affordable. New bundles added every week.
          </motion.p>
        </div>
      </section>

      {/* Bundles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {allBundles.map((category, catIndex) => (
            <div key={category.category} className="mb-20">
              <motion.h2 
                className="text-4xl font-bold text-gray-900 mb-8 tracking-wide"
                style={{ fontFamily: 'var(--font-bebas)' }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {category.category}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.bundles.map((bundle, index) => (
                  <motion.div
                    key={bundle.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ 
                      y: -5, 
                      scale: 1.02,
                      rotateY: 5,
                      rotateX: -5
                    }}
                    style={{ 
                      transformStyle: 'preserve-3d',
                      perspective: '1000px'
                    }}
                    className="bg-white rounded-2xl border-2 border-green-600 overflow-hidden shadow-lg hover:shadow-2xl transition-all relative group"
                  >
                    {/* Glossy gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
                    {/* Image */}
                    <div className="h-40 relative overflow-hidden">
                      <img 
                        src={bundle.image} 
                        alt={bundle.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{bundle.name}</h3>
                      <div className="text-3xl font-bold text-green-600 mb-3">{bundle.price}</div>
                      
                      <div className="space-y-1 text-sm text-gray-600 mb-4">
                        {'serves' in bundle && <p>Serves: {bundle.serves}</p>}
                        {'time' in bundle && <p>Ready in: {bundle.time}</p>}
                        {'items' in bundle && <p>{bundle.items}</p>}
                        {'weight' in bundle && <p>Weight: {bundle.weight}</p>}
                      </div>

                      <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-black font-semibold rounded-full transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

        <Footer />
      </main>
    </>
  );
}
