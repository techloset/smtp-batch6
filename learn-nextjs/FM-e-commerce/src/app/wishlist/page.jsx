import Fotter from "../(components)/footer/footer";
import Navbar from "../(components)/navbar/navbar";

// pages/index.js
const Wishlist = () => {
  const wishlistItems =[
    { id: 1, name: 'Premium Headphones', price: '$199.99', image: '/headphones.jpg' },
    { id: 2, name: 'Smartwatch', price: '$149.99', image: '/smartwatch.jpg' },
    { id: 3, name: 'Wireless Mouse', price: '$29.99', image: '/mouse.jpg' },
    { id: 4, name: 'Gaming Keyboard', price: '$79.99', image: '/keyboard.jpg' },
    // Add more dummy data as needed
  ];
  return (
    <>
    <Navbar/>
    <div className="mt-11 container mx-auto p-4 dark:bg-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-white dark:text-gray-200">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-white p-4 shadow-md rounded-md dark:bg-gray-700">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <p className="text-lg font-semibold">{item.name}</p>
            <p className="text-gray-600">{item.price}</p>
            <div className="mt-4 flex justify-between">
              <button
                className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600"
              >
                Add to Cart
              </button>
              <button
                className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Fotter/>
    </>
  );
};

export default Wishlist;
