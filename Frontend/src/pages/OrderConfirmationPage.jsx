import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiPackage, FiTruck, FiMail } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OrderConfirmationPage = () => {
  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-20 flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl w-full text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <FiCheckCircle className="w-24 h-24 text-green-500 mx-auto mb-4" />
          </motion.div>

          <motion.h1
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Order Confirmed!
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Thank you for your purchase. Your order has been successfully placed.
          </motion.p>

          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-left">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Order Details</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Number:</span>
                  <span className="font-semibold text-gray-900">{orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Date:</span>
                  <span className="font-semibold text-gray-900">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estimated Delivery:</span>
                  <span className="font-semibold text-gray-900">3-5 Business Days</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-white rounded-lg p-6 shadow-md">
              <FiPackage className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Order Processing</h3>
              <p className="text-sm text-gray-600">Your order is being prepared</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <FiTruck className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Shipping</h3>
              <p className="text-sm text-gray-600">We'll ship your items soon</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <FiMail className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Email Confirmation</h3>
              <p className="text-sm text-gray-600">Check your email for details</p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              to="/shop"
              className="bg-luxury-gold text-luxury-charcoal px-8 py-3 rounded-lg font-semibold hover:bg-luxury-gold-light transition-colors"
            >
              Continue Shopping
            </Link>
            <Link
              to="/"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderConfirmationPage;
