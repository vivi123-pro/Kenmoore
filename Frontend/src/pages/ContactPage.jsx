import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFacebook, FiInstagram, FiTwitter, FiMessageSquare, FiVideo } from 'react-icons/fi';
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to API)
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-luxury-charcoal/5 to-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #1a1a1a 1px, transparent 0)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-block mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-luxury-gold font-serif text-lg tracking-wider uppercase border-b-2 border-luxury-gold pb-2">
                  Get In Touch
                </span>
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold text-luxury-charcoal mb-8 font-serif">
                Contact Kenmoore
              </h1>
              <p className="text-xl text-luxury-charcoal/70 mb-12 leading-relaxed max-w-3xl mx-auto">
                Questions about our curated fashion collection or need styling advice? We're here to help you find your perfect look.
                Reach out and let's create something extraordinary together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="luxury-shadow-hover p-8 rounded-3xl bg-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-block mb-6 mx-auto"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-luxury-gold font-serif text-lg tracking-wider uppercase border-b-2 border-luxury-gold pb-2">
                  Send Us A Message
                </span>
              </motion.div>
              <h2 className="text-3xl font-bold text-luxury-charcoal mb-6 text-center font-serif">Get In Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                <div className="text-center">
                  <motion.button
                    type="submit"
                    className="bg-luxury-gold text-luxury-charcoal px-10 py-5 rounded-lg font-semibold text-lg hover:bg-luxury-gold-light transition-all duration-300 luxury-shadow-hover"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>

              {/* Social Media Icons */}
              <div className="mt-12 text-center">
                <motion.div
                  className="inline-block"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-luxury-gold font-serif text-lg tracking-wider uppercase border-b-2 border-luxury-gold pb-2">
                    Follow Us
                  </span>
                </motion.div>
                <div className="flex justify-center space-x-6 mt-6">
                  <motion.a
                    href="https://facebook.com/kenmoore"
                    className="text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiFacebook className="w-8 h-8" />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com/kenmoore"
                    className="text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiInstagram className="w-8 h-8" />
                  </motion.a>
                  
                  <motion.a
                    href="https://wa.me/1234567890"
                    className="text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaWhatsapp className="w-8 h-8" />
                  </motion.a>
                  <motion.a
                    href="https://tiktok.com/@kenmoore"
                    className="text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaTiktok className="w-8 h-8" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
