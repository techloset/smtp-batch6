'use client'
import React, { useState } from 'react';
import { AiOutlineUnorderedList, AiOutlineArrowDown } from 'react-icons/ai';
//  import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiFillHeart,AiOutlineUnorderedList ,AiOutlineArrowDown} from 'react-icons/ai'
//  import { client } from '../../../../sanity/lib/client'
const DropDown = () => {
    const [isOpen, setOpen] = useState(false);
    const [drop, setDrop] = useState([]);
  
    const dropDown1 = async () => {
      try {
        if (!isOpen) {
          setOpen(true);
          // const response = await client.fetch(
          //   *[_type == 'navCategory'],
          //   {},
          //   {
          //     cache: "no-cache",
          //   }
          // );
          // setDrop(response);
        } else {
          // If the dropdown is open, close it and clear the data
          setOpen(false);
          // setDrop([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    return (
        // <div className={isOpen ? 'pb-20  '  : ''}>
          <div>

        <li
          className='flex items-center justify-center mx-4 hover:text-slate-500 cursor-pointer transition duration-300 ease-in border-2 active:border-slate-100 border-transparent rounded-md '
          onClick={dropDown1}
        >
          <AiOutlineUnorderedList size={30} className='dark:text-orange-400'  />
          <button className='p-2'>Shop Categories</button>
          <AiOutlineArrowDown size={30}  className='dark:text-orange-400' />
        </li>
        {isOpen && (
          <div className='absolute ps-14 flex flex-col items-start w-full transition duration-300 '>
              <div  className='hover:bg-slate-600 my-1 w-40 cursor-pointer border-l-transparent hover:border-l-white border-l-4'>
                <h3>1</h3>
              </div>
              <div  className='hover:bg-slate-600 my-1 w-40 cursor-pointer border-l-transparent hover:border-l-white border-l-4'>
                <h3>2</h3>
              </div>
          </div>
        )}
      </div>
    );
  };
  
  export default DropDown;