'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const categories = {
  'Fresh Produce': [
    { name: 'Organic Avocados', oldPrice: '$3.99', newPrice: '$2.49', savings: '38%', image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=300' },
    { name: 'Organic Bananas', oldPrice: '$1.29', newPrice: '$0.79', savings: '39%', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300' },
    { name: 'Cherry Tomatoes', oldPrice: '$4.99', newPrice: '$3.49', savings: '30%', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300' },
    { name: 'Baby Spinach', oldPrice: '$3.99', newPrice: '$2.99', savings: '25%', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300' },
    { name: 'Sweet Potatoes', oldPrice: '$2.99', newPrice: '$1.99', savings: '33%', image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f8?w=300' },
    { name: 'Bell Peppers', oldPrice: '$3.49', newPrice: '$2.29', savings: '34%', image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300' },
    { name: 'Organic Carrots', oldPrice: '$2.49', newPrice: '$1.79', savings: '28%', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300' },
    { name: 'Broccoli Crowns', oldPrice: '$3.99', newPrice: '$2.79', savings: '30%', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=300' },
    { name: 'Mixed Berries', oldPrice: '$6.99', newPrice: '$4.99', savings: '29%', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300' },
    { name: 'Organic Apples', oldPrice: '$4.99', newPrice: '$3.49', savings: '30%', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300' },
  ],
  'Proteins': [
    { name: 'Wild Salmon', oldPrice: '$16.99', newPrice: '$12.99', savings: '24%', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300' },
    { name: 'Grass-Fed Beef', oldPrice: '$12.99', newPrice: '$9.99', savings: '23%', image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300' },
    { name: 'Organic Chicken', oldPrice: '$8.99', newPrice: '$6.99', savings: '22%', image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=300' },
    { name: 'Wild Shrimp', oldPrice: '$14.99', newPrice: '$11.99', savings: '20%', image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=300' },
    { name: 'Organic Eggs', oldPrice: '$5.99', newPrice: '$4.49', savings: '25%', image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300' },
    { name: 'Turkey Breast', oldPrice: '$9.99', newPrice: '$7.99', savings: '20%', image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=300' },
    { name: 'Pork Tenderloin', oldPrice: '$11.99', newPrice: '$8.99', savings: '25%', image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=300' },
    { name: 'Lamb Chops', oldPrice: '$18.99', newPrice: '$14.99', savings: '21%', image: 'https://images.unsplash.com/photo-1588347818036-8fc8d1d3e0b7?w=300' },
    { name: 'Tuna Steaks', oldPrice: '$13.99', newPrice: '$10.99', savings: '21%', image: 'https://images.unsplash.com/photo-1580959375944-0b7b2e7e4f3a?w=300' },
    { name: 'Organic Tofu', oldPrice: '$3.99', newPrice: '$2.99', savings: '25%', image: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=300' },
  ],
  'Dairy & Alternatives': [
    { name: 'Almond Milk', oldPrice: '$4.99', newPrice: '$3.49', savings: '30%', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300' },
    { name: 'Greek Yogurt', oldPrice: '$5.99', newPrice: '$4.49', savings: '25%', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300' },
    { name: 'Organic Milk', oldPrice: '$6.99', newPrice: '$4.99', savings: '29%', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300' },
    { name: 'Cheddar Cheese', oldPrice: '$7.99', newPrice: '$5.99', savings: '25%', image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=300' },
    { name: 'Oat Milk', oldPrice: '$4.99', newPrice: '$3.79', savings: '24%', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300' },
    { name: 'Butter', oldPrice: '$5.49', newPrice: '$3.99', savings: '27%', image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300' },
    { name: 'Cream Cheese', oldPrice: '$4.99', newPrice: '$3.49', savings: '30%', image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=300' },
    { name: 'Soy Milk', oldPrice: '$3.99', newPrice: '$2.99', savings: '25%', image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=300' },
    { name: 'Mozzarella', oldPrice: '$6.99', newPrice: '$4.99', savings: '29%', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300' },
    { name: 'Coconut Yogurt', oldPrice: '$5.99', newPrice: '$4.49', savings: '25%', image: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?w=300' },
  ],
  'Pantry Staples': [
    { name: 'Organic Pasta', oldPrice: '$3.99', newPrice: '$2.79', savings: '30%', image: 'https://images.unsplash.com/photo-1551462147-37cbd8c5d00b?w=300' },
    { name: 'Quinoa', oldPrice: '$7.99', newPrice: '$5.99', savings: '25%', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300' },
    { name: 'Brown Rice', oldPrice: '$5.99', newPrice: '$4.49', savings: '25%', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300' },
    { name: 'Olive Oil', oldPrice: '$12.99', newPrice: '$9.99', savings: '23%', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300' },
    { name: 'Organic Honey', oldPrice: '$8.99', newPrice: '$6.99', savings: '22%', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784acc?w=300' },
    { name: 'Almond Butter', oldPrice: '$9.99', newPrice: '$7.49', savings: '25%', image: 'https://images.unsplash.com/photo-1520803146413-a0e9d0e1e1e3?w=300' },
    { name: 'Canned Beans', oldPrice: '$2.49', newPrice: '$1.79', savings: '28%', image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=300' },
    { name: 'Tomato Sauce', oldPrice: '$3.99', newPrice: '$2.99', savings: '25%', image: 'https://images.unsplash.com/photo-1621958181210-2d4c3f0e3c0e?w=300' },
    { name: 'Oats', oldPrice: '$4.99', newPrice: '$3.49', savings: '30%', image: 'https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=300' },
    { name: 'Coconut Oil', oldPrice: '$8.99', newPrice: '$6.49', savings: '28%', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300' },
  ],
  'Bakery': [
    { name: 'Sourdough Bread', oldPrice: '$5.99', newPrice: '$4.49', savings: '25%', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300' },
    { name: 'Whole Wheat Bread', oldPrice: '$4.99', newPrice: '$3.49', savings: '30%', image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=300' },
    { name: 'Croissants', oldPrice: '$6.99', newPrice: '$4.99', savings: '29%', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300' },
    { name: 'Bagels', oldPrice: '$4.99', newPrice: '$3.79', savings: '24%', image: 'https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?w=300' },
    { name: 'Muffins', oldPrice: '$5.99', newPrice: '$4.49', savings: '25%', image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=300' },
    { name: 'Cookies', oldPrice: '$6.99', newPrice: '$4.99', savings: '29%', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=300' },
    { name: 'Cinnamon Rolls', oldPrice: '$7.99', newPrice: '$5.99', savings: '25%', image: 'https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?w=300' },
    { name: 'Baguette', oldPrice: '$3.99', newPrice: '$2.99', savings: '25%', image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=300' },
    { name: 'Brownies', oldPrice: '$5.99', newPrice: '$4.49', savings: '25%', image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=300' },
    { name: 'Donuts', oldPrice: '$6.99', newPrice: '$4.99', savings: '29%', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300' },
  ],
  'Snacks': [
    { name: 'Trail Mix', oldPrice: '$6.99', newPrice: '$4.99', savings: '29%', image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300' },
    { name: 'Organic Chips', oldPrice: '$4.99', newPrice: '$3.49', savings: '30%', image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300' },
    { name: 'Granola Bars', oldPrice: '$5.99', newPrice: '$4.49', savings: '25%', image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=300' },
    { name: 'Popcorn', oldPrice: '$3.99', newPrice: '$2.79', savings: '30%', image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=300' },
    { name: 'Dried Fruit', oldPrice: '$7.99', newPrice: '$5.99', savings: '25%', image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=300' },
    { name: 'Protein Bars', oldPrice: '$8.99', newPrice: '$6.99', savings: '22%', image: 'https://images.unsplash.com/photo-1606312619070-d48b4cbc5b52?w=300' },
    { name: 'Crackers', oldPrice: '$4.99', newPrice: '$3.49', savings: '30%', image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=300' },
    { name: 'Pretzels', oldPrice: '$3.99', newPrice: '$2.99', savings: '25%', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300' },
    { name: 'Rice Cakes', oldPrice: '$4.49', newPrice: '$3.29', savings: '27%', image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=300' },
    { name: 'Hummus', oldPrice: '$5.99', newPrice: '$4.49', savings: '25%', image: 'https://images.unsplash.com/photo-1571070703346-b8d40f8fc33b?w=300' },
  ],
};

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Fresh Produce');

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20">
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
          >
            ALL PRODUCTS
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Browse our complete selection of price-reduced products
          </motion.p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-gray-900 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-green-600 text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {categories[selectedCategory as keyof typeof categories].map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all"
              >
                <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-xl mb-3" />
                <h3 className="text-sm font-bold text-gray-900 mb-2">{product.name}</h3>
                <div className="text-lg font-bold text-red-600 line-through mb-1">{product.oldPrice}</div>
                <div className="text-2xl font-bold text-green-600 mb-2">{product.newPrice}</div>
                <div className="bg-green-600 text-black px-3 py-1 rounded-full text-xs font-bold text-center">
                  Save {product.savings}
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
