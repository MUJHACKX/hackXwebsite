//links
import Link from "next/link"

//icons
import {RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiPinterestLine, RiLinkedinLine} from 'react-icons/ri'
import {HiArrowRight} from 'react-icons/hi2';


const Socials = () => {
  return <div className="flex items-center gap-x-5 mb-8 text-lg">
    {/* <Link href={' '} className=" hover:text-accent translate-all duration 300">
      <RiYoutubeLine />
    </Link> */}
    <Link href={'https://instagram.com/muj.hackx?igshid=MzRlODBiNWFlZA=='} className=" hover:text-accent translate-all duration 300">
      <RiInstagramLine />
    </Link>
    <Link href={'https://jaipur.manipal.edu/'} className=" hover:text-accent translate-all duration 300">
      <RiDribbbleLine />
    </Link>
    <Link href={'/Register'} className=" hover:text-accent translate-all duration 300">
      <button className="bg-transparent hover:text-accent text-white font-semibold hover:text-accent py-2 px-4 border border-transparent hover:border-teansparent rounded">Register</button>
    </Link>
    {/* <Link href={' '} className=" hover:text-accent translate-all duration 300">
      <RiLinkedinLine />
    </Link>
    <Link href={' '} className=" hover:text-accent translate-all duration 300">
      <RiPinterestLine />
    </Link> */}
    

  </div>;
};

export default Socials;
