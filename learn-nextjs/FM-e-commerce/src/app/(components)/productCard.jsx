// components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-700">{product.description}</p>
      <p className="mt-2 text-blue-500 font-bold">${product.price}</p>
    </div>
  );
};

export default ProductCard;
