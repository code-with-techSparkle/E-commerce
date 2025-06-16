'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CartItem {
  image: string;
  title: string;
  price: number;
  quantity: number;
  size: string;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemove: (index: number) => void;
  onUpdateQuantity: (index: number, newQty: number) => void;
}

export default function CartSidebar({
  isOpen,
  onClose,
  cartItems,
  onRemove,
  onUpdateQuantity,
}: CartSidebarProps) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />}

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed right-0 top-0 h-full w-[90%] sm:w-[400px] bg-white z-50 shadow-xl flex flex-col"
      >
        <div className="p-6 border-b font-semibold text-xl flex justify-between items-center">
          <span>Shopping Cart</span>
          <button onClick={onClose} className="text-gray-500 text-2xl">*</button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item, i) => (
              <div key={i} className="flex gap-4 items-center">
                <Image src={item.image} alt={item.title} width={80} height={100} className="rounded-md w-20 h-24 object-cover" />
                <div className="flex-1">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="px-2 py-1 border rounded"
                      onClick={() => onUpdateQuantity(i, item.quantity - 1)}
                      disabled={item.quantity === 1}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-2 py-1 border rounded"
                      onClick={() => onUpdateQuantity(i, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  {/* Price */}
                  <p className="text-md font-medium mt-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => onRemove(i)}
                  className="text-gray-400 hover:text-red-500 text-xl"
                >
                 *
                </button>
              </div>
            ))
          )}
        </div>

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
