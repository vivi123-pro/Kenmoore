import { motion } from 'motion/react';
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Creative Director',
    content: 'Kenmoore has completely transformed my wardrobe. Every piece feels like it was made just for me — elegant, comfortable, and timeless.',
    rating: 5,
    initials: 'SM',
  },
  {
    id: 2,
    name: 'James Chen',
    role: 'Entrepreneur',
    content: 'The quality is exceptional. I appreciate the attention to detail and the sustainable approach. These are pieces I will treasure for years.',
    rating: 5,
    initials: 'JC',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Fashion Editor',
    content: 'Finally, a brand that understands modern luxury. Kenmoore designs are sophisticated yet effortless — exactly what I have been looking for.',
    rating: 5,
    initials: 'ER',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F5F5DC]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-[var(--kenmoore-olive)] tracking-[0.3em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-[var(--kenmoore-charcoal)]" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 relative"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                className="absolute -top-4 left-8 p-4 mt-2 w-12 h-12 bg-[var(--kenmoore-olive)] rounded-full flex items-center justify-center text-black shadow-lg"
              >
                <FaQuoteRight size={40} />
              </motion.div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 + i * 0.05 }}
                  >
                    <FaStar size={16} fill="var(--kenmoore-gold)" stroke="var(--kenmoore-gold)" />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <p className="text-[var(--kenmoore-charcoal)]/80 mb-6 font-sans italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-sans text-[var(--kenmoore-charcoal)]">
                    {testimonial.initials} {testimonial.name}
                  </h4>
                  <p className="text-sm text-[var(--kenmoore-charcoal)]/60 font-sans">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--kenmoore-taupe)] via-[var(--kenmoore-sage)] to-[var(--kenmoore-gold)] rounded-b-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
