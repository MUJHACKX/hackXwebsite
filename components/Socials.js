import Link from "next/link";
import {RiInstagramLine, RiDribbbleLine} from 'react-icons/ri';
import LinkButton from "./LinkButton";

const problemStatementsReleased = false;

const Socials = () => {
  return <div className="flex items-center gap-x-5 mb-8 text-lg">
    {/* <Link href={' '} className=" hover:text-accent translate-all duration 300">
      <RiYoutubeLine />
    </Link> */}
    <Link href={'https://instagram.com/muj.hackx?igshid=MzRlODBiNWFlZA=='} target="_blank"
          className=" hover:text-accent translate-all duration 300">
      <RiInstagramLine/>
    </Link>
    <Link href={'https://jaipur.manipal.edu/'} target="_blank"
          className=" hover:text-accent translate-all duration 300">
      <RiDribbbleLine/>
    </Link>
    <LinkButton ps_released={problemStatementsReleased}/>
    {/*<Link href={'https://linktr.ee/mujhackx'} target="_blank" className=" hover:text-accent translate-all duration 300">*/}
    {/*  <button className="bg-transparent hover:text-accent text-white font-semibold hover:text-accent py-2 px-4 border border-transparent hover:border-teansparent rounded">Register</button>*/}
    {/*</Link>*/}
    {/* <Link href={' '} className=" hover:text-accent translate-all duration 300">
      <RiLinkedinLine />
    </Link>
    <Link href={' '} className=" hover:text-accent translate-all duration 300">
      <RiPinterestLine />
    </Link> */}
  </div>;
};

export default Socials;
