
import React from 'react';
import Image from 'next/image';
export default function SimpleCard (props) {
  return (
    <div className=" hover:bg-gr max-w-md max-h-md mx-auto bg-white dark:bg-gray-800 rounded-md overflow-hidden shadow-md">
      <div className="flex">
        {/* Rounded Image on the left */}
        <Image
          className="object-cover w-1/3 h-full rounded-3xl"
          src={props.imgss}  
          alt="Card Image"
          height={100}
          width={100}
        />

        {/* Title and Description on the right */}
        <div className="p-4 w-2/3">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{props.title}</h2>
          <p className="text-gray-600 dark:text-gray-300">{props.des}</p>
        </div>
      </div>
    </div>
  );
};


