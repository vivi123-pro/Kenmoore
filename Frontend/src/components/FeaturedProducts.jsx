import { useState } from 'react';
import { motion } from 'motion/react';
import { FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: 'Minimal Essence Dress',
    category: 'Everyday',
    price: 245,
    image: 'https://images.unsplash.com/photo-1653875842174-429c1b467548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZmFzaGlvbiUyMGNsb3RoaW5nfGVufDF8fHx8MTc2MjI0MzIxMXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: 'Urban Comfort Set',
    category: 'Casual',
    price: 189,
    image: 'https://images.unsplash.com/photo-1736555142217-916540c7f1b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBtb2Rlcm4lMjBvdXRmaXR8ZW58MXx8fHwxNzYyMjYzNzg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: 'Elegant Evening Gown',
    category: 'Formal',
    price: 425,
    image: 'https://images.unsplash.com/photo-1759229874810-26aa9a3dda92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZHJlc3MlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc2MjI2Mzc4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    name: 'Timeless Accessories',
    category: 'Accessories',
    price: 95,
    image: 'https://images.unsplash.com/photo-1575201046471-082b5c1a1e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBsdXh1cnl8ZW58MXx8fHwxNzYyMjU0NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export default function FeaturedProducts() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-24 bg-gray-100" id="new-arrivals">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-[var(--kenmoore-olive)] tracking-[0.3em] uppercase mb-4">
            Trending Now
          </p>
          <h2 className="font-serif text-[var(--kenmoore-charcoal)]" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Featured Collection
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(product.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[var(--kenmoore-beige)]">
                <motion.div
                  animate={hoveredId === product.id ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Overlay Actions */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={hoveredId === product.id ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-[var(--kenmoore-charcoal)]/60 via-transparent to-transparent flex items-end justify-center pb-6 gap-3"
                >
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={hoveredId === product.id ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-[var(--kenmoore-charcoal)] px-6 py-2 rounded-full flex items-center gap-2 shadow-lg hover:bg-[var(--kenmoore-olive)] hover:text-white transition-colors duration-300"
                  >
                    <FiShoppingCart size={16} />
                    Add to Cart
                  </motion.button>

                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={hoveredId === product.id ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 0.15 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-[var(--kenmoore-charcoal)] p-2 rounded-full shadow-lg hover:bg-[var(--kenmoore-gold)] transition-colors duration-300"
                    aria-label="Add to wishlist"
                  >
                    <FaHeart size={16} />
                  </motion.button>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[var(--kenmoore-beige)]/90 backdrop-blur-sm text-[var(--kenmoore-charcoal)] px-3 py-1 rounded-full text-sm font-sans">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="font-sans text-[var(--kenmoore-charcoal)] mb-2">
                  {product.name}
                </h3>
                <p className="font-sans text-[var(--kenmoore-olive)]">
                  ${product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
