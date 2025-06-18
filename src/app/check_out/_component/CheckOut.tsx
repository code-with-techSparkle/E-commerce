'use client'
import { useEffect, useState } from 'react';
import Link from "next/link";

interface CartItem {
  image: string;
  title: string;
  price: number;
  quantity: number;
  size: string;
}

const CheckoutPage = () => {

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 1);

  return (
    <div className="bg-white rounded-lg flex max-lg:px-5 max-lg:flex-col gap-8 px-[10%] py-20">
      <div className="w-[50%] max-lg:w-full h-full p-6 max-lg:p-3 rounded-lg shadow-md">
        <div className="flex justify-between">
          <h2 className="text-3xl font-semibold mb-6">Information</h2>
        </div>
        <div className="mb-6">
          <input type="email" placeholder="Email or mobile phone number" name="email" id="email" className="w-full border-gray-400 placeholder:text-[13px] p-3 border rounded mb-3 focus:outline-none focus:ring-2" />
          <label className="flex text-[13px] items-center text-gray-600 mb-10">
            <input type="checkbox" className="mr-2" />Email me with news and offers
          </label>
          <h2 className="pb-3">Delivery</h2>
          <select className="w-full p-3 border border-gray-400 rounded mb-3 focus:outline-none focus:ring-2">
            <option className="text-[13px]">Region</option>
            <option className="text-[13px]">Lahore</option>
            <option className="text-[13px]">Okara</option>
            <option className="text-[13px]">Sumandari</option>
          </select>
          <div className="flex gap-3">
            <input type="text" placeholder="First Name" className="w-full p-3 placeholder:text-[13px] border-gray-400 border rounded mb-3 focus:outline-none focus:ring-2" />
            <input type="text" placeholder="Last Name" className="w-full p-3 border rounded border-gray-400 placeholder:text-[13px] mb-3 focus:outline-none focus:ring-2" />
          </div>
          <input type="text" placeholder="Address" className="w-full p-3 border rounded border-gray-400 mb-3 focus:outline-none focus:ring-2" />
          <div className="flex gap-3">
            <input type="text" placeholder="City" className="w-full p-3 border rounded mb-3 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" placeholder="Postal Code" className="w-full p-3 border border-gray-400 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <input type="text" placeholder="Phone Number" className="w-full p-3 border border-gray-400 rounded mb-3 focus:outline-none focus:ring-2" />
          <label className="flex items-center text-[13px]">
            <input type="checkbox" className="mr-2 text-[10px]" />Save this information for next time
          </label>
        </div>
        <div className="mb-6">
          <h3 className="text-xl mb-3">Payment</h3>
          <p className="text-gray-500 text-[13px] mb-3">All transactions are secure and encrypted.</p>
          <input type="text" placeholder="Card Number" className="w-full p-3 placeholder:text-[13px] border rounded mb-3 border-gray-400 focus:outline-none focus:ring-2" />
          <input type="text" placeholder="Expiration Date" className="w-full p-3 placeholder:text-[13px] border border-gray-400 rounded mb-3 focus:outline-none focus:ring-2" />
          <input type="text" placeholder="CVV" className="w-full p-3 border rounded mb-3 placeholder:text-[13px] border-gray-400 focus:outline-none focus:ring-2" />
        </div>
        <button className="bg-black max-md:hidden text-white w-full py-3 rounded-lg cursor-pointer">Complete order</button>
      </div>
      <div className="min-h-screen w-[50%] max-lg:w-full max-lg:p-0 max-lg:bg-white rounded-2xl max-lg:min-h-full p-6 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md sticky top-24 max-lg:relative max-lg:top-0">
          <h2 className="text-2xl font-bold mb-6 max-lg:text-center">Checkout</h2>

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
    </div>
  );
};

export default CheckoutPage;