import { motion } from 'motion/react';
import { FaHeart } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import { BiLeaf } from "react-icons/bi";
import bg1 from '../assets/images/bg1.png';
import bg2 from '../assets/images/bg2.jpg';
import bg3 from '../assets/images/bg3.jpg';

export default function StatsSection() {
  const features = [
    {
      icon: <HiOutlineSparkles size={24} />,
      title: 'Innovation',
      description: 'Cutting-edge design meets timeless elegance',
    },
    {
      icon: <BiLeaf size={24} />,
      title: 'Sustainability',
      description: 'Conscious fashion for a better tomorrow',
    },
    {
      icon: <FaHeart size={24} />,
      title: 'Comfort',
      description: 'Luxury that feels as good as it looks',
    },
  ];

  return (
    <section className="py-24 bg-[var(--kenmoore-ivory)]" id="about">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="col-span-2 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={bg1}
                  alt="Kenmoore lifestyle"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Small Images */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={bg2}
                  alt="Design detail"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={bg3}
                  alt="Fashion detail"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-[var(--kenmoore-taupe)]/30 rounded-full blur-3xl -z-10"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-[var(--kenmoore-olive)] tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-[var(--kenmoore-charcoal)] mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              About Kenmoore
            </h2>

            <div className="space-y-4 mb-8 text-[var(--kenmoore-charcoal)]/80 font-sans">
              <p>
                Kenmoore brings ease and innovation to modern fashion. Our collections combine
                creativity, superior comfort, and timeless design — pieces you'll reach for every day.
              </p>
              <p>
                We believe that luxury shouldn't be complicated. Every garment we create is a
                testament to thoughtful design, sustainable practices, and the pursuit of everyday
                elegance.
              </p>
              <p>
                From the first sketch to the final stitch, we're committed to crafting clothing that
                makes you feel confident, comfortable, and effortlessly stylish.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-12 h-12 bg-[var(--kenmoore-beige)] rounded-full text-[var(--kenmoore-olive)] mb-3"
                  >
                    {feature.icon}
                  </motion.div>
                  <h4 className="font-sans text-[var(--kenmoore-charcoal)] mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-[var(--kenmoore-charcoal)]/70 font-sans">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
