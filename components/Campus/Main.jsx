import React from 'react';
import RotatingText from 'react-rotating-text';
const Main = () => {
  const words = ["representative", "ambassador", "leader", "advocate"];
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/meeting.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-amber-200 to-amber-400 bg-clip-text text-transparent  ">Entrepreneurship Cell <span className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'  >MujHack</span></h1>
          <p className="text-white text-lg sm:text-xl lg:text-2xl mb-8">
            Be the <RotatingText items={words} /> of our campus!
        </p><a className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300"
   href="https://forms.gle/WgQjJWdB7bgGH6fw5"
   role="button"
   >Apply Now</a>
        </div>
      </div>
    </section>
  );
};

export default Main;
