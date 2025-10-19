import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const totalPrice = getTotalPrice();

  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-6xl mb-4">🛒</div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">Add some products to get started!</p>
              <Link
                to="/shop"
                className="bg-luxury-gold text-luxury-charcoal px-8 py-3 rounded-lg font-semibold hover:bg-luxury-gold-light transition-colors duration-300"
              >
                Continue Shopping
              </Link>
            </motion.div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-6 mb-8">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-gray-50 rounded-xl"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow text-center sm:text-left">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                      <p className="text-gray-600 mb-2">{item.description}</p>
                      <p className="text-lg font-semibold text-luxury-gold">{item.price}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                      >
                        +
                      </button>
                    </div>

                    {/* Item Total */}
                    <div className="text-lg font-semibold text-gray-900 min-w-[80px] text-center">
                      ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Cart Summary */}
              <motion.div
                className="border-t pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-xl font-semibold text-gray-900">
                    Total: <span className="text-luxury-gold">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex gap-4">
                    <Link
                      to="/shop"
                      className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Continue Shopping
                    </Link>
                    {isAuthenticated ? (
                      <button
                        onClick={handleCheckout}
                        className="px-8 py-3 bg-luxury-gold text-luxury-charcoal rounded-lg font-semibold hover:bg-luxury-gold-light transition-colors"
                      >
                        Checkout
                      </button>
                    ) : (
                      <Link
                        to="/login"
                        className="px-8 py-3 bg-luxury-gold text-luxury-charcoal rounded-lg font-semibold hover:bg-luxury-gold-light transition-colors"
                      >
                        Login to Checkout
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;
