import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import Socials from '../components/Socials';

const Header = () => {
  const [visitorCount, setVisitorCount] = useState(1156);

  useEffect(() => {
    // Simulate a new visitor by incrementing the counter
    setVisitorCount(prevCount => prevCount + 1);
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
            {/* LOGO and Footfall Counter */}
            <div className="flex items-center">
              <Link href={'/'}>
                <Image src={'/logo.svg'} width={220} height={48} alt='' priority={true} />
              </Link>
              <div className="ml-4 text-white text-lg font-bold">
                Visitors: {visitorCount}
              </div>
            </div>
            {/* Socials */}
            <Socials />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
