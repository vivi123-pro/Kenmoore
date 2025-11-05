import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-[#FAF9F6] via-[#F3EDE4] to-[#E7D7C9] z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="text-center">
        {/* Spinner */}
        <motion.div
          className="w-20 h-20 border-[3px] border-[#D7BFAE] border-t-transparent rounded-full mx-auto mb-6"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />

        {/* Brand Name */}
        <motion.h2
          className="text-3xl tracking-widest font-semibold text-[#1A1A1A]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Kenmoore
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className="text-[#6B6B6B] mt-2 text-sm uppercase tracking-[0.2em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Redefining Everyday Luxury
        </motion.p>

        {/* Fade pulse glow */}
        <motion.div
          className="mt-8 w-4 h-4 bg-[#D7BFAE] rounded-full mx-auto"
          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingSpinner;
