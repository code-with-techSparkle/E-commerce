'use client';
import Product from '@/app/_component/Product';
import React, { useState } from 'react';

const categories = ['All products', 'Women', 'Man', 'Bags'];

const products = [
  {
    name: 'Skyline Sweat',
    price: '$607.60',
    category: 'Women',
    src: 'https://ik.imagekit.io/qss3mmw4a/E-commerce/product-1.png?updatedAt=1749986516010',
  },
  {
    name: 'Nightfall Hoodie',
    price: '$607.60',
    category: 'Man',
    src: 'https://ik.imagekit.io/qss3mmw4a/E-commerce/product-2?updatedAt=1750064978759',
  },
  {
    name: 'Moss Layer',
    price: '$607.60',
    category: 'Man',
    src: 'https://ik.imagekit.io/qss3mmw4a/E-commerce/product-3?updatedAt=1750064998373',
  },
  {
    name: 'Beige Hoodie',
    price: '$607.60',
    category: 'Women',
    src: 'https://ik.imagekit.io/qss3mmw4a/E-commerce/product-4?updatedAt=1750065018223',
  },
  {
    name: 'Gradient Sweat',
    price: '$607.60',
    category: 'Bags',
    src: 'https://ik.imagekit.io/qss3mmw4a/E-commerce/product-5?updatedAt=1750065038754',
  },
  {
    name: 'Neon Zipper',
    price: '$607.60',
    category: 'Bags',
    src: 'https://ik.imagekit.io/qss3mmw4a/E-commerce/product-6?updatedAt=1750065058688',
  },
];

function AllProduct() {
  const [selectedCategory, setSelectedCategory] = useState('All products');

  const filtered = selectedCategory === 'All products'
    ? products
    : products.filter((item) => item.category === selectedCategory);

  return (
    <div className="flex w-full py-12 gap-12 max-md:flex-col px-16 max-xl:px-8 max-md:px-6">
      <aside className="w-1/4 max-md:w-full sticky top-24 self-start max-md:relative max-md:top-0">
        <h2 className="text-3xl font-bold mb-2">All Products</h2>
        <p className="text-sm text-gray-500 mb-6">
          Shop now, not later. Browse the best of our favorite sale styles and brands.
        </p>
        <ul className="space-y-4">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer border-l-2 pl-2 transition duration-200 ${
                selectedCategory === cat
                  ? 'border-black text-black font-semibold'
                  : 'border-transparent text-gray-500'
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      {/* Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 flex-1">
        {filtered.map((product, index) => (
          <Product
            key={index}
            src={product.src}
            name={product.name}
            price={product.price}
            href="/product"
          />
        ))}
      </div>
    </div>
  );
}

export default AllProduct;
