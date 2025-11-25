'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface PriceFlipCardProps {
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
  savings: string;
}

export default function PriceFlipCard({ name, oldPrice, newPrice, image, savings }: PriceFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div 
      className="relative w-44 h-56 cursor-pointer mx-auto"
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ 
          duration: 0.5, 
          ease: 'easeInOut'
        }}
        style={{ 
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front Side - Old Price Only */}
        <div 
          className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg overflow-hidden border-4 border-black"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Image Section */}
          <div className="relative h-28 bg-gray-100 flex items-center justify-center overflow-hidden">
            {image.startsWith('http') ? (
              <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="text-5xl">{image}</div>
            )}
          </div>
          
          {/* Content Section */}
          <div className="p-2.5 text-left bg-white">
            <h3 className="text-xs font-bold text-gray-900 mb-2 leading-tight">{name}</h3>
            <div className="text-2xl font-bold text-red-600 line-through mb-3">{oldPrice}</div>
            <div className="text-[10px] text-gray-600 font-semibold">
              👆 CLICK TO SEE NEW PRICE
            </div>
          </div>
        </div>

        {/* Back Side - New Price */}
        <div 
          className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg overflow-hidden border-4 border-black"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {/* Image Section */}
          <div className="relative h-28 bg-gray-100 flex items-center justify-center overflow-hidden">
            {image.startsWith('http') ? (
              <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="text-5xl">{image}</div>
            )}
          </div>
          
          {/* Content Section */}
          <div className="p-2.5 text-left bg-white flex flex-col">
            <h3 className="text-xs font-bold text-gray-900 mb-1 leading-tight">{name}</h3>
            <div className="text-lg font-bold text-red-600 line-through mb-0.5">{oldPrice}</div>
            <div className="text-2xl font-bold text-green-600 mb-2">{newPrice}</div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                alert(`Added ${name} to cart!`);
              }}
              className="w-full bg-green-600 hover:bg-green-700 text-white text-[10px] font-bold py-1.5 rounded-full transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
