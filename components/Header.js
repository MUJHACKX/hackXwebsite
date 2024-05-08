import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials';

const Header = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon1.png" />
      </Head>
      <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gao-y-6 py-8">
            {/* LOGaO */}
            <Link href={'/'}>
              <Image src={'/logo.svg'} 
              width={220} 
              height={48} 
              alt= '' 
              priority={true}/>
            </Link>
            {/* Socials */}
            <Socials />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
