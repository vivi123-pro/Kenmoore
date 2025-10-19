import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';

const Testimonials = ({ images, onUploadClick }) => {
  const testimonials = [
    {
      rating: 5,
      text: "The fit, the feel — everything speaks confidence. I’ve never felt more myself in an outfit.",
      author: "AERROA L.",
      role: "Executive Director"
    },
    {
      rating: 5,
      text: "From boardroom days to evening events, every Kenmoore piece moves with ease and confidence. It’s more than fashion — it’s presence, perfected.",
      author: "MICHAEL B.",
      role: "Fashion Editor"
    },
    {
      rating: 5,
      text: "The moment I put it on, I felt different — composed, comfortable, completely me. Kenmoore doesn’t just dress you; it defines how you show up.",
      author: "SARAH K.",
      role: "Creative Director"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
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

  return (
    <section className="py-20 bg-luxury-charcoal text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #D4AF37 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-luxury-gold rounded-full"
          animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-1 h-1 bg-luxury-gold rounded-full"
          animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-luxury-gold rounded-full"
          animate={{ x: [0, 30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
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
              Client Testimonials
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Voices of Distinction
          </h2>
          <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
            Hear from our discerning clientele who have experienced the transformative power of exceptional craftsmanship.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-effect rounded-3xl p-8 border border-white/10 relative group luxury-shadow-hover"
              whileHover={{
                y: -15,
                scale: 1.02,
                backgroundColor: "rgba(255,255,255,0.15)"
              }}
            >
              {/* Quote Icon */}
              <motion.div
                className="absolute -top-4 left-8"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center luxury-shadow">
                  <FaQuoteLeft className="w-6 h-6 text-luxury-charcoal" />
                </div>
              </motion.div>

              {/* Stars */}
              <div className="flex mb-6 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                  >
                    <FaStar className="w-5 h-5 text-luxury-gold mr-1" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Text */}
              <motion.p
                className="text-lg mb-8 leading-relaxed text-white/90 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                "{testimonial.text}"
              </motion.p>

              {/* Author */}
              <motion.div
                className="border-t border-white/20 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <p className="font-bold text-luxury-gold text-lg font-serif">
                  {testimonial.author}
                </p>
                <p className="text-white/60 text-sm">
                  {testimonial.role}
                </p>
              </motion.div>

              {/* Upload Button */}
              <motion.button
                onClick={() => onUploadClick(index)}
                className="absolute top-4 right-4 flex items-center space-x-1 glass-effect text-white px-3 py-2 rounded-lg hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 luxury-shadow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiUpload className="w-4 h-4" />
                <span className="text-sm">Photo</span>
              </motion.button>

              {/* Customer Image */}
              <div className="mt-6 flex justify-center">
                {images[index] ? (
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img
                      src={images[index]}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover border-3 border-luxury-gold luxury-shadow"
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-white/30"></div>
                  </motion.div>
                ) : (
                  <motion.div
                    className="w-16 h-16 rounded-full bg-luxury-gold/20 flex items-center justify-center border-2 border-luxury-gold/50 luxury-shadow"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-luxury-gold text-sm font-bold">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;