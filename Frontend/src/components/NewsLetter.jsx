import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend, FiCheck } from 'react-icons/fi';
import { FaMagic } from 'react-icons/fa';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #1a1a1a 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-3 h-3 bg-luxury-gold rounded-full"
          animate={{ y: [0, -30, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-2 h-2 bg-accent-earth rounded-full"
          animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent-sage rounded-full"
          animate={{ x: [0, -25, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-luxury-gold font-serif text-lg tracking-wider uppercase border-b-2 border-luxury-gold pb-2">
              Exclusive Access
            </span>
          </motion.div>

          <motion.div
            className="relative mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-24 h-24 bg-luxury-gold rounded-full flex items-center justify-center mx-auto luxury-shadow relative">
              <FiMail className="w-12 h-12 text-luxury-charcoal" />
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaMagic className="w-6 h-6 text-luxury-gold" />
              </motion.div>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-luxury-charcoal mb-6 font-serif">
            Join the Elite Circle
          </h2>

          <p className="text-xl text-luxury-charcoal/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Be the first to discover our exclusive collections, receive personalized styling advice,
            and enjoy VIP access to private sales and events.
          </p>

          {!isSubscribed ? (
            <motion.form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  className="flex-1 relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-5 rounded-2xl bg-white border-2 border-luxury-charcoal/10 text-luxury-charcoal placeholder-luxury-charcoal/50 focus:outline-none focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/10 transition-all duration-300 text-lg luxury-shadow-hover"
                    required
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-luxury-gold/5 to-accent-earth/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>

                <motion.button
                  type="submit"
                  className="bg-luxury-gold text-luxury-charcoal px-10 py-5 rounded-2xl font-semibold hover:bg-luxury-gold-light transition-all duration-300 flex items-center justify-center space-x-3 luxury-shadow-hover text-lg"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Join Now</span>
                  <FiSend className="w-5 h-5" />
                </motion.button>
              </div>

              <motion.p
                className="text-luxury-charcoal/60 text-sm mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                By subscribing, you agree to receive our newsletter. Unsubscribe at any time.
              </motion.p>
            </motion.form>
          ) : (
            <motion.div
              className="glass-effect rounded-3xl p-12 max-w-md mx-auto luxury-shadow"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-6"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <FiCheck className="w-8 h-8 text-luxury-charcoal" />
              </motion.div>
              <h3 className="text-2xl font-bold text-luxury-charcoal mb-3 font-serif">Welcome to the Family</h3>
              <p className="text-luxury-charcoal/70 leading-relaxed">
                Thank you for joining our exclusive community. Your first personalized recommendations are on the way.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsLetter;
