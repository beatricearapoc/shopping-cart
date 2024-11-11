// ProductCard.js
import React from 'react';
import Button from '../components/Button';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="border p-4 rounded bg-orange-50 text-center">
      <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover mb-2" />
      <h2 className="text-lg font-semibold text-black">{product.title}</h2>
      <p className="text-sm text-black">${product.price}</p>
      <Button
        text="Add to Cart"
        onClick={() => onAddToCart(product)}
        className="bg-red-900 text-orange-50 mt-2"
      />
    </div>
  );
}

export default ProductCard;
