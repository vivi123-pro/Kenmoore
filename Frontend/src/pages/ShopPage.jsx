import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const productsData = [
  {
    id: 1,
    name: 'Classic Suit',
    description: 'Tailored fit for a sharp look',
    price: '$120',
    style: 'Formal',
    type: 'Men',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    name: 'Dress Suit',
    description: 'Perfect for evening occasions',
    price: '$150',
    style: 'Formal',
    type: 'Men',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    name: 'Slides',
    description: 'Durable and stylish footwear',
    price: '$40',
    style: 'Casual',
    type: 'Footwear',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 4,
    name: 'Casual Shirt',
    description: 'Comfortable everyday wear',
    price: '$60',
    style: 'Casual',
    type: 'Men',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 5,
    name: 'Shoes',
    description: 'Add a touch of elegance',
    price: '$35',
    style: 'Casual',
    type: 'Footwear',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 6,
    name: 'Summer Dress',
    description: 'Light and breezy',
    price: '$90',
    style: 'Casual',
    type: 'Women',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 7,
    name: 'Denim Shorts',
    description: 'Classic style for all seasons',
    price: '$110',
    style: 'Casual',
    type: 'Men',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 8,
    name: 'Leather Handbag',
    description: 'Spacious and chic',
    price: '$180',
    style: 'Corporate',
    type: 'Accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 9,
    name: 'Business Blazer',
    description: 'Professional and sleek',
    price: '$140',
    style: 'Corporate',
    type: 'Men',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 10,
    name: 'Corporate Skirt',
    description: 'Elegant office wear',
    price: '$80',
    style: 'Corporate',
    type: 'Women',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a6aaaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 11,
    name: 'Formal Tie',
    description: 'Classic accessory',
    price: '$25',
    style: 'Formal',
    type: 'Accessories',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 12,
    name: 'Casual Jeans',
    description: 'Relaxed fit for everyday',
    price: '$70',
    style: 'Casual',
    type: 'Men',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 13,
    name: 'High Heels',
    description: 'Stylish and comfortable',
    price: '$55',
    style: 'Formal',
    type: 'Footwear',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 14,
    name: 'Blouse',
    description: 'Light and feminine',
    price: '$50',
    style: 'Casual',
    type: 'Women',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 15,
    name: 'Leather Belt',
    description: 'Durable and stylish',
    price: '$30',
    style: 'Corporate',
    type: 'Accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 16,
    name: 'Sweater',
    description: 'Cozy and warm',
    price: '$65',
    style: 'Casual',
    type: 'Men',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 17,
    name: 'Evening Gown',
    description: 'Glamorous for special occasions',
    price: '$200',
    style: 'Formal',
    type: 'Women',
    image: 'https://images.unsplash.com/photo-1566479179814-8463c03182b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 18,
    name: 'Sneakers',
    description: 'Sporty and versatile',
    price: '$45',
    style: 'Casual',
    type: 'Footwear',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 19,
    name: 'Watch',
    description: 'Timeless accessory',
    price: '$100',
    style: 'Corporate',
    type: 'Accessories',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 20,
    name: 'Jacket',
    description: 'Layered for any weather',
    price: '$85',
    style: 'Casual',
    type: 'Men',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
];

const styles = ['All', 'Formal', 'Corporate', 'Casual'];
const types = ['All', 'Men', 'Women', 'Footwear', 'Accessories'];

const ShopPage = () => {
  const [selectedStyle, setSelectedStyle] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();

  const filteredProducts = productsData.filter((product) => {
    const matchesStyle =
      selectedStyle === 'All' || product.style === selectedStyle;
    const matchesType =
      selectedType === 'All' || product.type === selectedType;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesStyle && matchesType && matchesSearch;
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
        <section className="mb-8 space-y-4">
          <div className="flex flex-wrap gap-6 justify-center items-end">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Style</label>
              <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold"
              >
                {styles.map((style) => (
                  <option key={style} value={style}>
                    {style}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold"
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold"
              />
            </div>
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