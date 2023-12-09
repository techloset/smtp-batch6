// pages/orderDetails.js

import Navbar from '@/app/(components)/navbar/navbar';
import React from 'react';

const OrderDetails = () => {

  return (
    <>
    <Navbar/>
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Order Details</h1>

      {/* Order details content goes here */}

      <div className="mt-8">
        <button
          className="bg-blue-500 text-white p-2 rounded mr-4"
        >
          Track Order
        </button>

        <button
          className="bg-red-500 text-white p-2 rounded mr-4"
        >
          Return Order
        </button>

        <button
          className="bg-gray-500 text-white p-2 rounded mr-4"
        >
          Cancel Order
        </button>

        <button
          className="bg-green-500 text-white p-2 rounded mr-4"
        >
          Download Invoice
        </button>

        <button
          className="bg-yellow-500 text-white p-2 rounded"
        >
          Buy Again
        </button>
      </div>
    </div>
    </>
  );
};

export default OrderDetails;

