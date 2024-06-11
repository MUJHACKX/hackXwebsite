import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="bg-gray-800 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
                        <h4 className="text-white mb-4">Follow Us</h4>
                        <div className="flex">
                            <a href="#" className="text-gray-400 hover:text-white mr-4">
                               <FaLinkedin/>
                                    
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaGithub/>
                            </a>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
                        <h4 className="text-white mb-4">Links</h4>
                        <ul className="list-none">
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Home
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    About
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Services
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
                        <h4 className="text-white mb-4">Company</h4>
                        <ul className="list-none">
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                <span className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>   MUJ</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                <span className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>  MUjhackx</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                <span className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>  MujOnline</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                <span className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'> Privacy Policy</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
                        <h4 className="text-white mb-4">Contact</h4>
                        <ul className="list-none">
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white ">
                                    Email: <span className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'> MujHack.com</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Phone: +1 123 456 7890
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Address: <span className='bg-gradient-to-r from-amber-200 via-amber-200 to-amber-400 bg-clip-text text-transparent'>Manipal University Jaipur</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;