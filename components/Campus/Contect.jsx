import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = ({ image, name, contact, socialIcons }) => {
  const iconComponents = {
    twitter: FaTwitter,
    linkedin: FaLinkedin,
    github: FaGithub,
  };

  return (
    <motion.section
      className="flex flex-col items-center justify-center mb-7 mt-6 h-96 w-72 p-6 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.img
        src={image}
        alt={name}
        className="rounded-full w-32 h-32 object-cover bg-gray-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <h2 className="text-2xl font-bold mt-4 text-slate-50 text-center">{name}</h2>
      <p className="text-lg mt-2 text-slate-100 text-center">{contact}</p>
      <div className="flex mt-4 text-slate-200">
        {socialIcons.map((icon, index) => {
          const IconComponent = iconComponents[icon.name];
          return (
            <motion.a
              key={index}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconComponent className="w-6 h-6" />
            </motion.a>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Contact;
