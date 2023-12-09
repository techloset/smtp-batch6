// pages/payment.js
"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Head from 'next/head';

const PaymentPage = () => {
  const router = useRouter();
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Get the entire query string
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    // Parse query parameters
    const parsedTotal = parseFloat(urlParams.get('total') || 0).toFixed(2);
    const parsedTotalItems = parseInt(urlParams.get('totalItems') || 0, 10);
    const parsedCartItems = urlParams.get('cartItems')
      ? JSON.parse(decodeURIComponent(urlParams.get('cartItems')))
      : [];

    setTotal(parsedTotal);
    setTotalItems(parsedTotalItems);
    setCartItems(parsedCartItems);
  }, []);








  const dummyBillingInfo = {
    name: 'John Doe',
    address: '123 Main St, Cityville, State',
    email: 'john.doe@example.com',
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-md">
      <Head>
        <title>Payment</title>
      </Head>

      <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Billing Information */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Billing Information</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500"
                placeholder={dummyBillingInfo.name}
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows="3"
                className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500"
                placeholder={dummyBillingInfo.address}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500"
                placeholder={dummyBillingInfo.email}
              />
            </div>
          </form>
        </div>

        {/* Payment Information */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Payment Information</h2>
          <form className="space-y-4">
            {/* Card Number */}
            <div>
              <label htmlFor="card" className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                id="card"
                name="card"
                className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="**** **** **** ****"
              />
            </div>

            {/* Expiry Date and CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  name="expiry"
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="***"
                />
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700">
                Payment Method
              </label>
              <div className="mt-2 flex items-center space-x-4">
                <div className="bg-gray-200 p-3 rounded-md text-gray-700">Credit Card</div>
                <div className="bg-gray-200 p-3 rounded-md text-gray-700">PayPal</div>
                <div className="bg-gray-200 p-3 rounded-md text-gray-700">Stripe</div>
              </div>
            </div>
          </form>
        </div>
      </div>


      {/* Order Summary */}
      <div className="mt-12 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Order Summary</h2>
        <ul className="space-y-4">
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className="font-medium">{item.name}</span>
              <span className="text-gray-600">
                ${item.price.toFixed(2)} x {item.quantity}
              </span>
            </li>
          ))}
        </ul>
        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold">Total:</span>
          <span className="text-xl font-semibold">${total}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg text-gray-600">Number of Items:</span>
          <span className="text-lg">{totalItems}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="mt-12 flex justify-end">
        <button className="bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
          Complete Purchase
        </button>
      </div> </div>


  );
};

export default PaymentPage;

