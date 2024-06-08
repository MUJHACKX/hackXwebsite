// icons
import { HiHome, HiRectangleGroup } from 'react-icons/hi2';
import { MdTimeline } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { RiGalleryLine } from "react-icons/ri";
import { FaQuestionCircle } from 'react-icons/fa';


// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiRectangleGroup /> },
  { name: 'timeline', path: '/timeline', icon: <MdTimeline /> },
  { name: 'team', path: '/team', icon: <AiOutlineTeam /> },
  { name: 'gallery' ,path: '/gallery',icon: <RiGalleryLine /> },
  // {
  //   name: 'testimonials',
  //   path: '/testimonials',
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  { name: 'faqs', path: '/contact', icon: <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
  fill="currentColor"
>
  <path d="M20 2H4C2.9 2 2 2.9 2 4v14c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 8h12v2H6V8zm0 4h12v2H6v-2zm0 4h7v2H6v-2z"/>

</svg>
},
];

//next link

import Link from 'next/link';

// next router
import {useRouter} from 'next/router'


const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return(
  <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max
  bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>

    {/* inner */}
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
          {/* tooltip */}
          <div className='absolute pr-14 right-0 hidden xl:group-hover:flex '>
            <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
              <div className='text-[12px] leading-none font-semibold capitalize'>
                {link.name}
              </div>
              {/* triangle */}
              <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px]
              border-r-0 absolute -right-2'></div>
            </div>
          </div>
          <div>{link.icon}</div>
        </Link>);
      })}
    </div>
    </nav>
    );
};

export default Nav;
