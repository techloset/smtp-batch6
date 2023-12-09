// pages/cart.js
"use client"
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../(components)/navbar/navbar';
import Fotter from '../(components)/footer/footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product Name',
      price: 19.99,
      quantity: 1,
    },
    // Add more items as needed
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const calculateTotalItems = () => {
    return cartItems.reduce((totalItems, item) => totalItems + item.quantity, 0);
  };

  const handleIncreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-8">Shopping Cart</h1>

        <div className="bg-white p-4 shadow-md rounded-md">
          <div className="flex justify-between border-b border-gray-200 mb-4 pb-2">
            <span className="text-lg font-semibold">Product</span>
            <span className="text-lg font-semibold">Price</span>
            <span className="text-lg font-semibold">Quantity</span>
            <span className="text-lg font-semibold">Total</span>
            <span className="text-lg font-semibold">Action</span>
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-4">
                <img
                  src="/product-image.jpg"  // Replace with your actual image path or URL
                  alt="Product"
                  className="w-16 h-16 object-cover rounded"
                />
                <span className="font-semibold">{item.name}</span>
              </div>
              <span>${item.price.toFixed(2)}</span>
              <div className="flex items-center">
                <button
                  onClick={() => handleDecreaseQuantity(item.id)}
                  className="text-blue-500 px-2 py-1"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => handleIncreaseQuantity(item.id)}
                  className="text-blue-500 px-2 py-1"
                >
                  +
                </button>
              </div>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
              <button
                onClick={() => handleDeleteItem(item.id)}
                className="text-red-500 px-2 py-1"
              >
                X
              </button>
            </div>
          ))}

          <div className="mt-6">
          <Link href={{ pathname: '/payment', query: { total: calculateTotal(), totalItems: calculateTotalItems(), cartItems: JSON.stringify(cartItems) } }}>
  <p className="bg-blue-500 text-white px-4 py-2 rounded-md">
    Go to Checkout
  </p>
</Link>
          </div>
        </div>
      </div>
    </div>
    <Fotter/>
    </>
  );
};

export default Cart;
