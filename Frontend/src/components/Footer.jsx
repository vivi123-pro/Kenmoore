import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiInstagram, FiMail, FiPhone, FiMapPin, FiCreditCard, FiShield, FiTruck } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-charcoal text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #D4AF37 2px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Trust Indicators */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex items-center justify-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <FiShield className="w-8 h-8 text-luxury-gold" />
              <div>
                <h4 className="font-semibold text-luxury-gold">Secure Shopping</h4>
                <p className="text-white/70 text-sm">100% Secure Transactions</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <FiTruck className="w-8 h-8 text-luxury-gold" />
              <div>
                <h4 className="font-semibold text-luxury-gold">Free Shipping</h4>
                <p className="text-white/70 text-sm">On Orders Over $200</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <FiCreditCard className="w-8 h-8 text-luxury-gold" />
              <div>
                <h4 className="font-semibold text-luxury-gold">Easy Returns</h4>
                <p className="text-white/70 text-sm">30-Day Return Policy</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold font-serif text-luxury-gold mb-4">
                Kenmoore
              </h3>
              <p className="text-white/70 mb-6 max-w-md leading-relaxed">
                Redefining effortless style with premium quality garments that combine comfort, elegance,
                and timeless design. Where sophistication meets contemporary luxury.
              </p>
            </motion.div>

            <motion.div
              className="flex space-x-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {[
                { icon: FiFacebook, href: 'https://web.facebook.com/kenmoorewears' },
                { icon: FiInstagram, href: 'https://www.instagram.com/kenmoorewears?igsh=MWg3bWN1ZDFqMDVjMQ==' },
                { icon: FaTiktok, href: 'https://www.tiktok.com/@kenm00re?is_from_webapp=1&sender_device=pc' }
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-luxury-gold hover:bg-luxury-gold/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              className="text-lg font-semibold mb-6 text-luxury-gold font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Quick Links
            </motion.h4>
            <motion.ul
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {[
                { name: 'Home', path: '/' },
                { name: 'Shop', path: '/shop' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-luxury-gold transition-colors duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h4
              className="text-lg font-semibold mb-6 text-luxury-gold font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Contact Us
            </motion.h4>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-start space-x-3">
                <FiMail className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 hover:text-luxury-gold transition-colors">kenmooreoutfit@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FiPhone className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 hover:text-luxury-gold transition-colors">+234 8033 190 9082</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 hover:text-luxury-gold transition-colors">Ojuore, Ogun , Nigeria.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="border-t border-white/10 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60">
              © {currentYear} Kenmoore. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-white/60 hover:text-luxury-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-luxury-gold transition-colors">
                Terms of Service
              </Link>
              <Link to="/shipping" className="text-white/60 hover:text-luxury-gold transition-colors">
                Shipping Info
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;