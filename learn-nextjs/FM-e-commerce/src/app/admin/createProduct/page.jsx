"use client"
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function ProductCreate() {

  const onDrop = useCallback(acceptedFiles => {
    console.log("acceptedFiles",acceptedFiles);
    // Do something with the files
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });




  return (
    <div>
      <div className="container mx-auto p-8 bg-gray-100 rounded-md">
        <title>Add Product</title>

        <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">Add Product</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Billing Information */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Product Information</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Product Title
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder={""}
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder={""}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder={""}
                />
              </div>
            </form>
          </div>

          {/* Payment Information */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Images</h2>
            <form className="space-y-4">
              {/* Card Number */}
        
        

              <div
                {...getRootProps()}
                className={`dropzone p-6 border-2 border-dashed rounded-md ${isDragActive ? 'border-green-500' : 'border-gray-300'
                  }`}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p className="text-green-500">Drop the files here...</p>
                ) : (
                  <p className="text-gray-500">
                    Drag 'n' drop some files here, or click to select files
                  </p>
                )}
              </div>

            </form>
          </div>
        </div>



        {/* Checkout Button */}
        <div className="mt-12 flex justify-end">
          <button className="bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
            Create Product
          </button>
        </div>

      </div>
    </div>
  )
}
