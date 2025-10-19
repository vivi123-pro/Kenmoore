import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUpload, FiArrowDown, FiStar } from 'react-icons/fi';
import ParallaxSection from './ParallaxSection';

const Hero = ({ backgroundImage, onUploadClick }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background with Parallax */}
      <ParallaxSection speed={0.3}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed transform-gpu"
          style={{
            backgroundImage: `url(${backgroundImage || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'})`,
            filter: 'brightness(0.4) contrast(1.2)'
          }}
        />
      </ParallaxSection>

      {/* Luxury Gradient Overlay */}
      <div className="absolute inset-0 bg-luxury-gradient opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mb-6"
        >
          <div className="flex items-center justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 + 0.2 }}
              >
                <FiStar className="w-6 h-6 text-luxury-gold fill-current" />
              </motion.div>
            ))}
          </div>
          <motion.span
            className="text-luxury-gold font-serif text-lg tracking-wider uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Premium Collection
          </motion.span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-8xl font-bold mb-6 font-serif text-shadow-luxury"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Live Bold <span className="luxury-text-gradient">Dress </span>Easy
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Discover timeless elegance crafted for the discerning individual.
          Where sophistication meets contemporary luxury.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/shop/new-arrivals"
              className="bg-luxury-gold text-luxury-charcoal px-10 py-5 rounded-lg font-semibold text-lg hover:bg-luxury-gold-light transition-all duration-300 luxury-shadow-hover inline-block"
            >
              Shop New Arrivals
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/shop/suits"
              className="border-2 border-luxury-gold text-luxury-gold px-10 py-5 rounded-lg font-semibold text-lg hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300 luxury-shadow-hover inline-block"
            >
              Explore Collection
            </Link>
          </motion.div>
        </motion.div>

        {/* Upload Button */}
        

       
      </div>
    </section>
  );
};

export default Hero;