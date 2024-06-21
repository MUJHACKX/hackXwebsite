import Link from "next/link";
import { RiInstagramLine, RiDribbbleLine, RiLinkedinLine } from 'react-icons/ri';
import LinkButton from "./LinkButton";

const problemStatementsReleased = false;

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 mb-8 text-lg flex-col">
      <div className="mb-2 flex gap-3">
      <Link href={'https://www.linkedin.com/company/mujhackx'} target="_blank"
            className="hover:text-accent translate-all duration 300">
        <RiLinkedinLine />
      </Link>
      <Link href={'https://instagram.com/muj.hackx?igshid=MzRlODBiNWFlZA=='} target="_blank"
            className="hover:text-accent translate-all duration 300">
        <RiInstagramLine />
      </Link>
      <Link href={'https://jaipur.manipal.edu/'} target="_blank"
            className="hover:text-accent translate-all duration 300">
        <RiDribbbleLine />
      </Link>
      </div>
      <LinkButton ps_released={problemStatementsReleased} />
   
    </div>
  );
};

export default Socials;
