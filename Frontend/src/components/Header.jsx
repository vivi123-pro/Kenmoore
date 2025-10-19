import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUpload, FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import logo from '../assets/images/logo.png';

const Header = ({ onUploadClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

  
    <motion.header
      className={`fixed w-full z-50 transition-all duration-500 py-4 ${
        isScrolled
          ? 'glass-effect shadow-luxury'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* <img src="{logo}" alt="Kenmoore Logo" className="w-[1000px] h-auto" /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="text-4xl font-bold font-serif luxury-text-gradient text-shadow-luxury">
              KENMOORE
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Shop', 'About', 'Contact'].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-white hover:text-luxury-gold font-medium relative group transition-colors duration-300"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold transition-all group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <Link to="/cart">
              <motion.button
                className={`relative p-2 hover:text-luxury-gold transition-colors duration-300 ${
                  isScrolled ? 'text-luxury-charcoal' : 'text-white'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <motion.span
                    className="absolute -top-1 -right-1 bg-luxury-gold text-luxury-charcoal text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    {cartCount}
                  </motion.span>
                )}
              </motion.button>
            </Link>

            {/* Upload Button */}
           

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden glass-effect shadow-luxury "
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-4 ">
              {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 10 }}
                >
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="block text-white hover:text-luxury-gold font-medium transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                onClick={onUploadClick}
                className="flex items-center space-x-2 bg-luxury-gold text-luxury-charcoal px-4 py-2 rounded-lg w-full justify-center font-medium hover:bg-luxury-gold-light transition-colors duration-300"
                whileTap={{ scale: 0.95 }}
              >
                
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;