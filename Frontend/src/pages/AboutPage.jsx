import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Story</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded in 2021, Engstock emerged from a simple idea: to redefine effortless style 
                for the modern individual. We believe that true elegance comes from confidence, 
                comfort, and timeless design.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To provide everyday luxury through meticulously crafted clothing that combines 
                  superior quality, modern aesthetics, and unparalleled comfort.
                </p>
                <p className="text-lg text-gray-600">
                  We're committed to sustainable practices and ethical manufacturing, ensuring 
                  that every piece tells a story of craftsmanship and responsibility.
                </p>
              </motion.div>
              
              <motion.div
                className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg">
                  To become the leading brand for individuals who value style without compromise, 
                  offering pieces that transcend trends and become wardrobe staples for years to come.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;