import { motion } from 'motion/react';
import { FaArrowRight } from "react-icons/fa6";
import bg6 from '../assets/images/bg6.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--kenmoore-ivory)]">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--kenmoore-ivory)]/20 to-[var(--kenmoore-ivory)]/80 z-10" />
        <img
          src={bg6}
          alt="Kenmoore Fashion"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="font-sans text-orange-300 tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Elevate Your Wardrobe
          </motion.p>

          <motion.h1
            className="font-serif text-yellow-100 mb-6 font-normal"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: '1.1', textShadow: '3px 3px 0px #ffa500, -3px -3px 0px #ffa500, 3px -3px 0px #ffa500, -3px 3px 0px #ffa500' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Effortless. Modern. <br />
            <span >Kenmoore.</span>
          </motion.h1>

          <motion.p
            className="font-sans text-orange-200 max-w-xl mx-auto mb-10 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Redefining everyday luxury through effortless design and modern innovation.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'var(--kenmoore-olive)' }}
              whileTap={{ scale: 0.98 }}
              className="group bg-[var(--kenmoore-olive)] text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Shop New Arrivals
              <motion.span
                className="inline-block"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FaArrowRight size={18} />
              </motion.span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, borderColor: 'var(--kenmoore-olive)' }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-orange-200 text-orange-400 px-8 py-4 rounded-full transition-all duration-300 hover:bg-[var(--kenmoore-charcoal)] hover:text-white"
            >
              Explore the Collection
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-[var(--kenmoore-charcoal)]/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 bg-[var(--kenmoore-charcoal)]/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
