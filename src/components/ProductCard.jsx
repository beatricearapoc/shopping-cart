// ProductCard.js
import React from 'react';
import Button from '../components/Button';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="border p-4 rounded">
      <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover mb-2" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-sm text-gray-600">${product.price}</p>
      <Button
        text="Add to Cart"
        onClick={() => onAddToCart(product)}
        className="bg-blue-500 text-white mt-2"
      />
    </div>
  );
}

export default ProductCard;
