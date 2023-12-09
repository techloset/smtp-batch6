import React from "react";
import Navbar from "../(components)/navbar/navbar";
import SimpleCard from "../(components)/simpleCard";
import Link from "next/link";
import Fotter from "../(components)/footer/footer";

export default function page() {
  return (
    <div className="bg-gray-50 text-black dark:bg-black dark:text-white">
      <Navbar />
      <div>
        <div className="text-center font-bold text-3xl"><h1>Your Account</h1></div>
        <div className="bg-gray-50 rounded-lg my-3 p-2 grid 2xl:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-between cursor-pointer">
          <Link href={'/Myaccount/yourOrder'}>
          <div className=" p-1">
            <SimpleCard title={"Your Orders"} des={"Track, return, cancel an order, download invoice or buy again"} imgss={"/orderbox.png"} className=" hover:bg-gray-100" />
          </div>
          </Link>
          <div className=" p-1">
            <SimpleCard title={"Login & security"} des={"Edit login, name, and mobile number"} imgss={"/security.png"} className=" hover:bg-gray-100" />
          </div>
          <div className=" p-1">
            <SimpleCard title={"Your Payments"} des={"View all transactions, manage payment methods and settings"} imgss={"/payment.png"} className=" hover:bg-gray-100" />
          </div>
          <div className=" p-1">
            <SimpleCard title={" Your Addresses"} des={"Edit, remove or set default address"} imgss={"/addressbook.png"} className=" hover:bg-gray-100" />
          </div>
          <div className=" p-1">
            <SimpleCard title={"Your Profiles"} des={"Manage, add, or remove user profiles for personalized experiences"} imgss={"/paccount.png"} className=" hover:bg-gray-100" />
          </div>
          <div className=" p-1">
            <SimpleCard title={"Archived orders"} des={"View and manage your archived orders"} imgss={"/archived.png"} className=" hover:bg-gray-100" />
          </div>
          <div className=" p-1">
            <SimpleCard title={"Your Lists"} des={"View, modify, and share your lists, or create new ones"} imgss={"/lists.png"} className=" hover:bg-gray-100" />
          </div>
          <div className=" p-1">
            <SimpleCard title={"Customer Service"} des={"Browse self service options, help articles or contact us"} imgss={"/contactus.png"} className=" hover:bg-gray-100" />
          </div>
        </div>
      </div>
      <Fotter/>
    </div>
  );
}
