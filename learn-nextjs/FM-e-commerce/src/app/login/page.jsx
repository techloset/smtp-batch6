// components/Login.js
"use client";
// components/Login.js
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LearnModal from "../(components)/learnmodal";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted with:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100  dark:bg-gray-800 dark:text-white">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <Image
          src="/Blacklogo.png" // Add your logo path
          alt="Logo"
          className="mx-auto mb-8"
          width={150}
          height={150}
        />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-white font-semibold p-2 rounded hover:bg-yellow-500"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            By signing in, you agree to FM E-Commerce
            <LearnModal
              Titl="Conditions of Use and Privacy Notice"
              P1="Conditions of Use
Last updated: September 14, 2022
Welcome to FM E-Commerce.com. FM E-Commerce.com Services LLC and/or its affiliates  provide website features and other products and services to you when you visit or shop at FM E-Commerce.com, use FM E-Commerce products or services, use FM E-Commerce applications for mobile, or use software provided by FM E-Commerce in connection with any of the foregoing (collectively, FM E-Commerce Service By using the FM E-Commerce Services, you agree, on behalf of yourself and all members of your household and others who use any Service under your account, to the following conditions."
              Css="text-blue-600 hover:underline"
            />
            .
          </p>
        </div>
        <hr className="my-4 border-t border-gray-300" />
        <div className="text-center">
          <p className="text-sm text-gray-600">New to FM E-Commerce?</p>
          <Link href="./Signup" className="text-blue-500 hover:underline">
            Create your FM E-Commerce Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
