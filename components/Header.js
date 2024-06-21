import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials';

const Header = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.svg" />
      </Head>
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
  <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 pb-8">
      {/* LOGO */}
      <div className="fixed top-0 left-0 px-16 xl:px-0 z-50">
        <Link href={'/'}>
          <Image src={'/logo.svg'} width={220} height={48} alt='' priority={true}/>
        </Link>
      </div>
      {/* Socials */}
      <div className="mt-[90px] lg:mt-0">
        <Socials />
      </div>
    </div>
  </div>
</header>
    </>
  );
};

export default Header;