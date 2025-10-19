import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import product4 from '../assets/images/product4.png'
import product8 from '../assets/images/product8.png'
import product6 from '../assets/images/product6.png'
import product7 from '../assets/images/product7.png'
import product5 from '../assets/images/product5.png'
import product3 from '../assets/images/product3.png'
import product1 from '../assets/images/product1.png'
import product2 from '../assets/images/product2.png'

const productsData = [
  {
    id: 1,
    name: 'Classic Suit',
    description: 'Tailored fit for a sharp look',
    price: '$120',
    category: 'Men',
    image: product1,
  },
  {
    id: 2,
    name: 'Dress Suit',
    description: 'Perfect for evening occasions',
    price: '$150',
    category: 'Men',
    image: product2,
  },
  {
    id: 3,
    name: 'Slides',
    description: 'Durable and stylish accessory',
    price: '$40',
    category: 'Accessories',
    image: product3,
  },
  {
    id: 4,
    name: 'Casual Shirt',
    description: 'Comfortable everyday wear',
    price: '$60',
    category: 'Men',
    image: product4,
  },
  {
    id: 5,
    name: 'Shoes',
    description: 'Add a touch of elegance',
    price: '$35',
    category: 'Accessories',
    image: product5,
  },
  {
    id: 6,
    name: 'Summer Dress',
    description: 'Light and breezy',
    price: '$90',
    category: 'Women',
    image: product6,
  },
  {
    id: 7,
    name: 'Denim Shorts',
    description: 'Classic style for all seasons',
    price: '$110',
    category: 'Men',
    image: product7,
  },
  {
    id: 8,
    name: 'Leather Handbag',
    description: 'Spacious and chic',
    price: '$180',
    category: 'Accessories',
    image: product8,
  },
];

const categories = ['All', 'Men', 'Women', 'Accessories'];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center py-20">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Every Outfit, Elevated
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover premium fashion items designed for every occasion.
          </motion.p>
        </section>

        {/* Filter and Search Section */}
        <section className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 space-y-4 md:space-y-0">
          <div className="flex space-x-4 justify-center md:justify-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-luxury-gold text-luxury-charcoal'
                    : 'bg-gray-200 text-gray-700 hover:bg-luxury-gold hover:text-luxury-charcoal'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="max-w-sm w-full mx-auto md:mx-0">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold"
            />
          </div>
        </section>

        {/* Product Grid */}
        <section>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="h-56 bg-gray-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 flex-grow">{product.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-semibold text-luxury-gold">
                      {product.price}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-luxury-gold text-luxury-charcoal px-4 py-2 rounded-lg font-medium hover:bg-luxury-gold-light transition-colors duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
export default ShopPage;