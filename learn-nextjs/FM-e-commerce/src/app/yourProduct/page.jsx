// components/SellWithAmazon.js

import React from "react";
import Navbar from "../(components)/navbar/navbar";
import Modal from "../(components)/learnmodal";
import Link from "next/link";
import LearnModal from "../(components)/learnmodal";
import Image from "next/image";
import Fotter from "../(components)/footer/footer";

const SellWith = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-12 dark:bg-black">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Sell with FM E-Commerce
          </h2>
          {/* Start today Section */}
          <p className="text-gray-600 mb-4 dark:text-gray-200">
            Start today for 5% back on up to $1,000,000 in branded sales.
          </p>

          {/* Learn How Section */}
          <button className="bg-yellow-500 text-white mb-3 py-2 px-6 hover:bg-yellow-600 rounded-2xl">
            <LearnModal
              Titl="Learn more"
              P1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cumque quos, voluptate eos animi debitis aliquam quis dolorum beatae mollitia! Aliquam nulla eaque laborum accusantium autem fuga magnam, impedit nihil non earum libero perspiciatis neque. Dolor velit nostrum impedit facere dolorum officia suscipit amet, rerum et porro dicta! Magni nesciunt, dolorum debitis quis ratione laborum quia labore voluptate necessitatibus voluptates natus voluptatem tenetur tempore cumque ipsa adipisci impedit dolorem? Dolores delectus aliquid deserunt quis iusto ducimus architecto alias? Vitae praesentium aperiam fugit ex cum itaque omnis aut eveniet, adipisci obcaecati! Amet excepturi eveniet delectus est dignissimos labore autem sequi exercitationem unde!"
            />
          </button>
          {/* Sign up Section */}
          <p className="text-gray-600 mb-4 mt-4 dark:text-gray-200 ">
            Sign up today and start selling with FM E-Commerce to unlock
            exclusive benefits.
          </p>
          <Link
            href={"./Login"}
            className="bg-yellow-500 text-white py-2 px-6 rounded-2xl hover:bg-yellow-600"
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-blue-400 dark:bg-purple-950">
        <div className="p-6 md:p-10">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 md:mb-8 leading-tight text-white">
            Start Selling with FM E-Commerce
          </h1>
          <h2 className="text-lg md:text-xl font-light mb-6 md:mb-10 leading-relaxed text-white">
            The fastest-growing and preferred acquisition channel for over half
            our multichannel sellers. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dicta distinctio nam laborum architecto ab eaque
            quam deleniti, tempore neque sed ipsa ullam quos repellendus dolore
            sapiente eius, numquam animi suscipit. Ut quaerat soluta cumque
            autem, officia vel beatae maiores sed quis quos iste sit vitae
            libero possimus facilis fuga, ea fugiat quas dolorem? Neque adipisci
            consequatur rerum qui eos facere tenetur deleniti sequi ut
            reiciendis, aliquam culpa, reprehenderit obcaecati debitis dolorem
            quisquam possimus. Ea distinctio dolorum quis. Magni eos tenetur
            doloribus delectus sit harum, asperiores beatae consequuntur
            perferendis tempora, ea reprehenderit itaque esse incidunt autem
            nesciunt rerum deserunt fugiat eaque.
          </h2>
          <Link
            href="./Login"
            className="bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 transition duration-300 shadow-md"
          >
            Sign Up
          </Link>
        </div>
        <div className="hidden md:block">
          <Image
            src="/amp.png"
            width={1000}
            height={1000}
            alt="Image Alt Text"
          />
        </div>
      </div>
      <Fotter/>
    </>
  );
};

export default SellWith;
