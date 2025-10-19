import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiAward, FiShoppingBag, FiHeart } from 'react-icons/fi';

const StatsSection = () => {
  const stats = [
    {
      icon: FiUsers,
      number: '50K+',
      label: 'Happy Customers',
      color: 'from-luxury-gold to-luxury-gold-light'
    },
    {
      icon: FiAward,
      number: '12+',
      label: 'Awards Won',
      color: 'from-accent-earth to-accent-earth-light'
    },
    {
      icon: FiShoppingBag,
      number: '5K+',
      label: 'Products Sold',
      color: 'from-accent-sage to-accent-sage-dark'
    },
    {
      icon: FiHeart,
      number: '98%',
      label: 'Satisfaction Rate',
      color: 'from-luxury-charcoal-light to-luxury-charcoal'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-luxury-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #D4AF37 2px, transparent 0)`,
          backgroundSize: '40px 40px'
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
              Why Choose Kenmoore
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-luxury-charcoal mb-6 font-serif">
            Style Perfected for You
          </h2>
          <p className="text-xl text-luxury-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            Where fashion meets finesse — discover confidence in every detail.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group "
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <div className="relative mb-8">
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto luxury-shadow group-hover:scale-110 transition-all duration-500 relative z-10`}>
                  <stat.icon className="w-12 h-12 text-white" />
                </div>
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`}></div>
              </div>

              <motion.h3
                className="text-4xl font-bold text-luxury-charcoal mb-3 font-serif"
                whileHover={{ scale: 1.05, color: '#D4AF37' }}
                transition={{ duration: 0.3 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-luxury-charcoal/80 font-medium text-lg">{stat.label}</p>

              {/* Decorative element */}
              <div className="mt-4 w-12 h-1 bg-luxury-gold mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;