import React, { useState, useEffect } from 'react';

function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed w-full z-20 top-0 start-0 border-b ${isScrolled ? 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-600' : 'bg-transparent border-transparent'}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://mujhackx.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/logo.svg" className="h-8" alt="Flowbite Logo" />
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <a
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        href="https://forms.gle/WgQjJWdB7bgGH6fw5"
                        role="button"
                    >
                        APPLY NOW
                    </a>
                </div>
                <div className={`items-center justify-between flex w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                    <ul className="hidden md:flex p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:border-gray-700">
                        <li>
                            <a href="#home" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </li>
                        <li>
                            <a href="#responsibilities" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Responsibilities</a>
                        </li>
                        <li>
                            <a href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
