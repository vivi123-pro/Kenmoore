import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiHeart, FiStar, FiTrendingUp } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  const stats = [
    { icon: FiAward, value: '2005', label: 'Founded', color: 'from-luxury-gold to-luxury-gold-light' },
    { icon: FiHeart, value: '50K+', label: 'Happy Customers', color: 'from-accent-earth to-accent-earth-light' },
    { icon: FiStar, value: '4.9', label: 'Average Rating', color: 'from-accent-sage to-accent-sage-dark' },
    { icon: FiTrendingUp, value: '200%', label: 'Yearly Growth', color: 'from-luxury-charcoal to-luxury-charcoal-light' }
  ];

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
                  Our Story
                </span>
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold text-luxury-charcoal mb-8 font-serif">
                Crafting Timeless Elegance
              </h1>
              <p className="text-xl text-luxury-charcoal/70 mb-12 leading-relaxed max-w-3xl mx-auto">
                Founded in 2005, Kenmoore emerged from a simple idea: to redefine effortless style
                for the modern individual. We believe that true elegance comes from confidence,
                comfort, and timeless design that transcends fleeting trends.
              </p>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center luxury-shadow-hover p-6 rounded-2xl bg-white/50 backdrop-blur-sm"
                    whileHover={{ y: -10, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${stat.color} mb-4`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-luxury-charcoal font-serif mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-luxury-charcoal/60 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-br from-white to-luxury-charcoal/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="luxury-shadow-hover p-8 rounded-3xl bg-white"
              >
                <motion.div
                  className="inline-block mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-luxury-gold font-serif text-lg tracking-wider uppercase border-b-2 border-luxury-gold pb-2">
                    Our Mission
                  </span>
                </motion.div>
                <h2 className="text-4xl font-bold text-luxury-charcoal mb-8 font-serif">
                  Curated Fashion for Every Occasion
                </h2>
                <p className="text-lg text-luxury-charcoal/70 mb-6 leading-relaxed">
                  To offer a carefully curated collection of ready-to-wear fashion that empowers
                  individuals to express their unique style with confidence. From casual essentials
                  to sophisticated ensembles, we provide versatile pieces that adapt to modern lifestyles.
                </p>
                <p className="text-lg text-luxury-charcoal/70 leading-relaxed">
                  We're committed to sustainable practices and ethical sourcing, ensuring
                  that every garment combines exceptional quality, contemporary design, and responsible fashion.
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-luxury-gold via-luxury-gold-light to-accent-earth rounded-3xl p-10 text-luxury-charcoal luxury-shadow"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="inline-block mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-luxury-charcoal font-serif text-lg tracking-wider uppercase border-b-2 border-luxury-charcoal pb-2">
                    Our Vision
                  </span>
                </motion.div>
                <h3 className="text-3xl font-bold mb-6 font-serif">Leading the Future of Fashion</h3>
                <p className="text-lg leading-relaxed mb-6">
                  To become the leading brand for individuals who value style without compromise,
                  offering pieces that transcend trends and become wardrobe staples for years to come.
                </p>
                <p className="text-lg leading-relaxed">
                  We envision a world where luxury is accessible, sustainable, and personal—where
                  every individual can express their unique style with confidence and grace.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  Our Values
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-luxury-charcoal mb-6 font-serif">
                The Principles That Guide Us
              </h2>
              <p className="text-xl text-luxury-charcoal/70 max-w-3xl mx-auto leading-relaxed">
                Our foundation rests on core values that shape every decision, every design,
                and every interaction with our community.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Quality First',
                  description: 'We never compromise on materials, craftsmanship, or attention to detail. Every piece undergoes rigorous quality control.',
                  gradient: 'from-luxury-gold to-luxury-gold-light'
                },
                {
                  title: 'Sustainable Luxury',
                  description: 'Environmental responsibility and ethical practices are woven into our DNA, ensuring a better future for fashion.',
                  gradient: 'from-accent-sage to-accent-sage-dark'
                },
                {
                  title: 'Inclusive Design',
                  description: 'Style knows no boundaries. We create pieces that celebrate diversity and empower every individual\'s unique expression.',
                  gradient: 'from-accent-earth to-accent-earth-light'
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  className="luxury-shadow-hover p-8 rounded-2xl bg-gradient-to-br from-white to-luxury-charcoal/5 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${value.gradient} mb-6`}>
                    <FiStar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-luxury-charcoal mb-4 font-serif">
                    {value.title}
                  </h3>
                  <p className="text-luxury-charcoal/70 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;