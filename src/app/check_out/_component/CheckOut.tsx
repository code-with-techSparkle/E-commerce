'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface CartItem {
  image: string;
  title: string;
  price: number;
  quantity: number;
  size: string;
}

export default function Checkout() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6">Checkout</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b py-4 max-sm:flex-col"
            >
              <div className="flex items-center gap-4 max-sm:flex-col">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity} | Size: {item.size}
                  </p>
                </div>
              </div>
              <p className="font-bold text-lg">$ {item.price * item.quantity}</p>
            </div>
          ))
        )}

        <div className="flex justify-between items-center mt-6">
          <h3 className="text-xl font-semibold">Total:</h3>
          <span className="text-2xl font-bold text-green-600">$ {getTotal()}</span>
        </div>

        <div className="mt-8">
          <Link
            href="/thank-you"
            className="block text-center bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Place Order
          </Link>
        </div>
      </div>
    </div>
  );
}
