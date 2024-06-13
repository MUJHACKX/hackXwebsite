import React from 'react';

const Banner = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 sm:p-12">
      <div className="w-full max-w-md p-6 text-center bg-white shadow-md rounded-lg">
        <h2 className="mb-4 text-2xl font-bold text-blue-600">Become a HackerEarth Campus Ambassador today!</h2>
        <a className="px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        href='https://forms.gle/WgQjJWdB7bgGH6fw5'
        >
          Apply now
        </a>
      </div>
    
    </div>
  );
}

export default Banner;