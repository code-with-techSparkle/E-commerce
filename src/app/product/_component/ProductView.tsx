'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CartSidebar from './CartSidebar';
import { BsBusFront } from "react-icons/bs";
import { LuLeaf } from 'react-icons/lu';
import { LiaCottonBureau } from 'react-icons/lia';


const sizes = ['XS', 'S', 'M', 'L', 'XL'];

const productImages = [
  'https://ik.imagekit.io/qss3mmw4a/E-commerce/product-1.png?updatedAt=1749986516010',
  'https://ik.imagekit.io/qss3mmw4a/E-commerce/product-1-2?updatedAt=1750064918843',
  'https://ik.imagekit.io/qss3mmw4a/E-commerce/product-1-3?updatedAt=1750064940348',
];

export default function ProductView() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [mainImage, setMainImage] = useState(productImages[0]);
  const [quantity, setQuantity] = useState(1);

  const incrementQty = () => setQuantity((prev) => prev + 1);
  const decrementQty = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const [cartOpen, setCartOpen] = useState(false);
  interface CartItem {
    image: string;
    title: string;
    price: number;
    quantity: number;
    size: string;
  }

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const removeFromCart = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const updateCartQuantity = (index: number, newQty: number) => {
    setCartItems((prev) => {
      const updated = [...prev];
      if (newQty >= 1) updated[index].quantity = newQty;
      return updated;
    });
  };

  const basePrice = 607.6;
  const sizePriceModifier: Record<string, number> = {
    XS: -30,
    S: -15,
    M: 0,
    L: 20,
    XL: 40,
  };

  const currentPrice = basePrice + sizePriceModifier[selectedSize];

  return (
    <>
      <div className="w-full px-4 md:px-8 lg:px-16 py-12 lg:py-24 bg-white text-black">
        <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto">
          {/* Left: Product Images */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 flex flex-col items-start gap-6"
          >
            {/* Main Image */}
            <Image
              src={mainImage}
              alt="Product"
              width={800}
              height={1000}
              className="rounded-xl object-cover w-full h-auto max-h-[500px] sm:max-h-[600px] object-top"
            />

            {/* Thumbnails */}
            <div className="flex gap-3 justify-center flex-wrap">
              {productImages.map((img, index) => (
                <div
                  key={index}
                  className={`cursor-pointer border-2 rounded-xl overflow-hidden ${img === mainImage ? 'border-black' : 'border-transparent'
                    }`}
                  onClick={() => setMainImage(img)}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    width={100}
                    height={120}
                    className="object-cover w-20 h-24 sm:w-24 sm:h-28"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Product Details */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl font-semibold">Alia Knit Trouser</h1>
            <p className="text-base sm:text-lg text-gray-700">
              The Alia trousers bring the comfort of sweatpants into a tailored silhouette. Featuring a racing stripe, tapered leg, and German craftsmanship.
            </p>

            <p className="text-xl sm:text-2xl font-medium">${currentPrice.toFixed(2)}</p>

            {/* Size Selector */}
            <div>
              <p className="mb-2 font-medium">Select Size</p>
              <div className="flex gap-3 flex-wrap">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-full transition ${selectedSize === size
                      ? 'bg-black text-white border-black'
                      : 'border-gray-300'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mt-4">
              <p className="font-medium">Quantity</p>
              <div className="flex justify-between items-center border border-gray-300 rounded-full overflow-hidden">
                <button
                  onClick={decrementQty}
                  className="px-4 py-2 text-lg hover:bg-gray-100"
                >
                  −
                </button>
                <span className="px-6 py-2">{quantity}</span>
                <button
                  onClick={incrementQty}
                  className="px-4 py-2 text-lg hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => {
                setCartItems([
                  ...cartItems,
                  {
                    image: mainImage,
                    title: 'Alia Knit Trouser',
                    price: currentPrice,
                    quantity,
                    size: selectedSize,
                  },
                ]);
                setCartOpen(true);
              }}
              className="w-full bg-black text-white py-4 rounded-full text-base sm:text-lg hover:bg-gray-900 transition"
            >
              Add to Cart
            </button>
            <hr />
            <div className='w-full flex flex-col items-start'>
              <div className='flex justify-center items-center gap-3'>
                <BsBusFront /> Fast & Free Delivery
              </div>
              <div className='flex justify-center items-center gap-3'>
                <LuLeaf />Fast & Free Delivery
              </div>
              <div className='flex justify-center items-center gap-3'>
                <LiaCottonBureau /> Fast & Free Delivery
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onRemove={removeFromCart}
        onUpdateQuantity={updateCartQuantity}
      />

    </>
  );
}
