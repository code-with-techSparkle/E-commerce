'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: {
    image: string;
    title: string;
    price: number;
    quantity: number;
  }[];
}

export default function CartSidebar({ isOpen, onClose, cartItems }: CartSidebarProps) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed right-0 top-0 h-full w-[90%] sm:w-[400px] bg-white z-50 shadow-xl flex flex-col"
      >
        <div className="p-6 border-b font-semibold text-xl flex justify-between items-center">
          <span>Shopping Cart</span>
          <button onClick={onClose} className="text-gray-500 text-2xl">&times;</button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item, i) => (
              <div key={i} className="flex gap-4 items-center">
                <Image src={item.image} alt={item.title} width={80} height={100} className="rounded-md w-20 h-24 object-cover" />
                <div className="flex-1">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  <p className="text-md font-medium mt-1">${item.price * item.quantity}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bottom */}
        <div className="border-t p-6">
          <div className="flex justify-between font-medium text-lg mb-4">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-full text-lg hover:bg-gray-900 transition">
            Checkout
          </button>
        </div>
      </motion.div>
    </>
  );
}
