// components/FeaturedProducts.js
import React from 'react';
import ProductCard from './productCard';

const FeaturedProducts = ({ products }) => {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
