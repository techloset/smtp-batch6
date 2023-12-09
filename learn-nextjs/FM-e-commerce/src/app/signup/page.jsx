// pages/signup.js
"use client";
import React, { useState } from "react";
import Image from "next/image";
import LearnModal from "../(components)/learnmodal";
import Link from "next/link";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for form submission (e.g., send data to a backend)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100  dark:bg-gray-800 dark:text-white">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <Image
          src="/Blacklogo.png" // Add your logo path
          alt="Logo"
          className="mx-auto mb-3"
          width={120}
          height={120}
        />
        <h2 className="text-2xl font-semibold mb-4">Create account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border rounded"
              placeholder="John Doe"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded"
              placeholder="john.doe@example.com"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border rounded"
              placeholder="********"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full  bg-yellow-400 text-black p-2 rounded"
          >
            Create your FM E-Commerce
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          By creating an account, you agree to FM E-Commerce{" "}
          <LearnModal
              Titl="Conditions of Use and Privacy Notice"
              P1="Conditions of Use
Last updated: September 14, 2022
Welcome to FM E-Commerce.com. FM E-Commerce.com Services LLC and/or its affiliates  provide website features and other products and services to you when you visit or shop at FM E-Commerce.com, use FM E-Commerce products or services, use FM E-Commerce applications for mobile, or use software provided by FM E-Commerce in connection with any of the foregoing (collectively, FM E-Commerce Service By using the FM E-Commerce Services, you agree, on behalf of yourself and all members of your household and others who use any Service under your account, to the following conditions."
              Css="text-blue-600 hover:underline"
            />
          .
        </p>
        <Link href="/Login" className="mt-4 text-sm text-blue-600">
          Already Have a account
        </Link>
      </div>
    </div>
  );
};

export default Signup;
