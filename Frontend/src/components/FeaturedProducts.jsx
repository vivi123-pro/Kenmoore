import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUpload, FiStar, FiShoppingCart, FiHeart } from 'react-icons/fi';

const FeaturedProducts = ({ images, onUploadClick }) => {
  const [cart, setCart] = useState({});
  const [favorites, setFavorites] = useState({});

  const categories = [
    {
      name: 'Casual',
      path: '/shop/casual',
      color: 'from-luxury-gold to-luxury-gold-light',
      price: '$89',
      rating: 4.8,
      reviews: 234
    },
    {
      name: 'Suits',
      path: '/shop/suits',
      color: 'from-luxury-charcoal to-luxury-charcoal-light',
      price: '$299',
      rating: 4.9,
      reviews: 156
    },
    {
      name: 'Accessories',
      path: '/shop/accessories',
      color: 'from-accent-earth to-accent-earth-light',
      price: '$45',
      rating: 4.7,
      reviews: 89
    },
    {
      name: 'Footwear',
      path: '/shop/footwear',
      color: 'from-accent-sage to-accent-sage-dark',
      price: '$129',
      rating: 4.6,
      reviews: 178
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleAddToCart = (index) => {
    setCart(prev => ({
      ...prev,
      [index]: (prev[index] || 0) + 1
    }));
  };

  const handleToggleFavorite = (index) => {
    setFavorites(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FiStar
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-luxury-gold fill-current' : 'text-luxury-charcoal/30'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #1a1a1a 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-luxury-gold font-serif text-lg tracking-wider uppercase border-b-2 border-luxury-gold pb-2">
              Featured Collection
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-luxury-charcoal mb-6 font-serif">
            Curated for Excellence
          </h2>
          <p className="text-xl text-luxury-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium garments, each piece chosen for its exceptional quality,
            timeless design, and unparalleled craftsmanship.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 m-3-hover"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="relative group luxury-shadow-hover m-3-hover"
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <div className="relative overflow-hidden rounded-2xl luxury-shadow">
                <Link to={category.path} className="block">
                  <div className={`h-80 relative ${
                    images[index] ? '' : `bg-gradient-to-br ${category.color}`
                  }`}>
                    {images[index] ? (
                      <motion.img
                        src={images[index]}
                        alt={category.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-white text-2xl font-bold font-serif">{category.name}</span>
                      </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    onClick={() => handleToggleFavorite(index)}
                    className={`p-2 rounded-full ${favorites[index] ? 'bg-luxury-gold text-luxury-charcoal' : 'glass-effect text-white'} luxury-shadow-hover`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiHeart className={`w-4 h-4 ${favorites[index] ? 'fill-current' : ''}`} />
                  </motion.button>

                  <motion.button
                    onClick={() => onUploadClick(index)}
                    className="p-2 rounded-full glass-effect text-white luxury-shadow-hover"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiUpload className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Add to Cart Button */}
                <motion.button
                  onClick={() => handleAddToCart(index)}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-luxury-gold text-luxury-charcoal px-6 py-3 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 luxury-shadow-hover flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                >
                  <FiShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                  {cart[index] > 0 && (
                    <span className="bg-luxury-charcoal text-luxury-gold text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cart[index]}
                    </span>
                  )}
                </motion.button>
              </div>

              {/* Product Info */}
              <div className="mt-6 text-center">
                <Link to={category.path}>
                  <motion.h3
                    className="text-xl font-semibold text-luxury-charcoal mb-2 font-serif"
                    whileHover={{ color: '#D4AF37' }}
                  >
                    {category.name}
                  </motion.h3>
                </Link>

                {/* Rating */}
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {renderStars(category.rating)}
                  <span className="text-luxury-charcoal/60 text-sm ml-2">
                    ({category.reviews})
                  </span>
                </div>

                {/* Price */}
                <motion.p
                  className="text-2xl font-bold text-luxury-gold font-serif"
                  whileHover={{ scale: 1.05 }}
                >
                  {category.price}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;