import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiAdminFill } from "react-icons/ri";
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
const Sidebar = ({ children }) => {
  return (
    <div className="flex dark:bg-black dark:text-white">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-2 flex flex-col justify-between dark:bg-black dark:text-white">
        <div className="flex flex-col  items-center bg-purple-300">
          <Link href="/admin">
            <div className="p-3 rounded-lg inline-block">
            <RiAdminFill size={20} />
            </div>
          </Link>
          <Link href="/admin/customers/">
            <div className="p-3 rounded-lg inline-block">
            <RxPerson size={20} />
            </div>
          </Link>
          <Link href="/admin/orders">
            <div className="p-3 rounded-lg inline-block">
            <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link href="/admin/createProduct/">
            <div className="p-3 rounded-lg inline-block">
            <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link href="/admin/Setting">
            <div className="p-3 rounded-lg inline-block">
            <FiSettings size={20} />
            </div>
          </Link>
        </div>
        <div> hello
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
