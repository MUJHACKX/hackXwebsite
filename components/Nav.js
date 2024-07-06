// icons
import { HiHome, HiRectangleGroup } from 'react-icons/hi2';
import { MdTimeline } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { RiGalleryLine } from "react-icons/ri";
import { FaQuestionCircle } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';

// nav data
export const navData = [
  { name: 'Home', path: '/', icon: <HiHome /> },
  { name: 'About', path: '/about', icon: <HiRectangleGroup /> },
  { name: 'Timeline', path: '/timeline', icon: <MdTimeline /> },
  { name: 'Ambassador', path: '/campus', icon: <AiOutlineTeam /> },
  { name: 'Team', path: '/team', icon: <AiOutlineTeam /> },
  { name: 'Gallery', path: '/gallery', icon: <RiGalleryLine /> },
  { name: 'Faqs', path: '/contact', icon: <FaQuestionCircle /> },
];

//next link
import Link from 'next/link';

// next router
import { useRouter } from 'next/router'
import Socials from './Socials';
import Image from 'next/image';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const [sideNav, setSideNav] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  function toggleSideNav() {
    setSideNav(sideNav => !sideNav);
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setIsVisible(scrollPosition > currentScrollPosition || currentScrollPosition < 10);
      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  useEffect(() => {
    if (sideNav) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [sideNav]);

  return (
    <div className='z-50'>
      <nav className={`flex h-[73px] fixed z-30 justify-center bg-[#050019]/30 backdrop-blur-md w-screen transition-transform duration-500 ease-in-out  ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className='flex items-center lg:justify-evenly justify-between w-full px-4 py-2'>
          <div>
            <Link href={'/'}>
              <Image src={'/logo.svg'} width={180} height={32} alt='' priority={true} />
            </Link>
          </div>
          <div className='hidden lg:flex'>
            <ul className='flex items-center justify-center '>
              {navData.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>
                    <div className={`flex flex-col items-center justify-center h-28 mx-3 text-[#F8F3FE] ${pathname === item.path ? 'text-accent' : ''}`} style={{ fontFamily: "inter, sans-serif", fontWeight: 100 }}>
                      <div className='text-lg font-thin'>{item.name}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='lg:flex hidden'>
            <Link href="https://linktr.ee/mujhackx" target="_blank">
              <button className='text-white px-3 py-1 rounded-xl font-bold bg-gradient-to-r ease-in-out hover:animate-text from-violet-600 to-indigo-600'>Register now</button>
            </Link>
          </div>
          <div className='flex lg:hidden'>
            <svg onClick={toggleSideNav} width="60" height="49" viewBox="0 0 60 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 18H47.5" stroke="white" strokeWidth="4" strokeLinecap="round" />
              <path d="M10 31H47.5" stroke="white" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </nav>
      {sideNav ? <SideNavComp toggleSideNav={toggleSideNav} pathname={pathname} /> : null}
    </div>
  );
};

const SideNavComp = ({ toggleSideNav, pathname }) => {
  return (
    <div className='fixed inset-0 flex z-50 '>
      <div className='flex-grow  backdrop-blur-sm transition-all duration-300' onClick={toggleSideNav}></div>
      <div className='flex flex-col bg-[#050019]/40 backdrop-blur-md w-72 h-full transition-all duration-300 transform translate-x-0'>
        <div className='flex justify-end p-11 pb-7'>
          <svg onClick={toggleSideNav} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29 28.5165L2.4835 2.00001" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <path d="M2.48352 28.5165L29 2.00001" stroke="white" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
        <div className=''>
          <ul className=''>
            {navData.map((item, index) => (
              <li key={index}>
                <Link onClick={toggleSideNav} href={item.path}>
                  <div className={`flex flex-col justify-start  h-[18px] p-8 px-4  w-[68px] text-[#F8F3FE] ${pathname === item.path ? 'text-accent' : ''}`} style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    <div className='text-2xl font-bold'>{item.name}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex p-4 pt-8'>
          <Link href="https://linktr.ee/mujhackx" target="_blank">
            <button className='text-white px-4 py-2 rounded-xl font-bold bg-gradient-to-r ease-in-out  hover:animate-text from-violet-600 to-indigo-600'>Register now</button>
          </Link>
        </div>
        <div className='p-4 pl-6'>
          <Socials />
        </div>
      </div>
    </div>
  );
}

export default Nav;

/*
 <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max
  bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>

    { inner }
    <div className='flex w-full xl:flex-col items-center
     justify-between xl:justify-center gap-y-10 px-4 md:px-40
     xl:px-0 h-[80px] xl:h-max py-8 bg-secondary/90 backdrop-blue-sm text-3xl xl:textxl
     xl:rounded-full '>

      {navData.map((link, index)=> {
        return(
        <Link className={`${link.path === pathname && 'text-accent'} relative flex items-center
         group hover:text-accent`}
         href={link.path}
         key = {index}
        >
          { tooltip }
          <div className='absolute pr-14 right-0 hidden xl:group-hover:flex '>
            <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
              <div className='text-[12px] leading-none font-semibold capitalize'>
                {link.name}
              </div>
              {triangle }
              <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px]
              border-r-0 absolute -right-2'></div>
            </div>
          </div>
          <div>{link.icon}</div>
        </Link>);
      })}
    </div>
    </nav>
    */