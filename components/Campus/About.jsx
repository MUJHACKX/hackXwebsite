import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          About
        </h2>
        <p className="mt-4 text-gray-600 text-base md:text-lg lg:text-xl">
          Our <span className='text-black font-extrabold'>Campus Ambassador program </span>is an incredible opportunity for students to represent our brand and help us spread the word about our mission. As a Campus Ambassador, you will gain valuable experience, enhance your leadership skills, and connect with like-minded individuals.
        </p>
        <p className="mt-4 text-gray-600 text-base md:text-lg lg:text-xl">
          You will be the face of our company on your campus, organizing events, sharing our story, and promoting our values. This role is perfect for proactive, enthusiastic, and passionate students who want to make a difference.
        </p>
      </motion.div>
    </div>
  );
}

export default AboutSection;
