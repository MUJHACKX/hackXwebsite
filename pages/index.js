import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import Typewriter from 'typewriter-effect/dist/core';
import {useEffect} from "react";
import Countdown from "../components/Countdown";
import RegisterButton from "../components/RegisterButton";

const Home = () => {
  useEffect(() => {
    new Typewriter('#typewriter', {
      strings: ['Win Prizes.', 'Learn.', 'Build.', 'Innovate.'],
      autoStart: true,
      loop: true,
    });
  })
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="absolute h-full w-full opacity-30 bg-center md:bg-top" style={{
        backgroundImage: 'url("/background.svg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }} />
      <div className="z-[1] w-full flex flex-col items-center">
        <motion.div
          className="text-5xl md:text-8xl text-center mb-12 text-accent pt-[25vh] md:pt-[15vh] font-bold
          bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent from-indigo-300 to-indigo-300 animate-text shadow"
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          MUJHackx 2.0
        </motion.div>
        <div id="typewriter" className="text-4xl md:text-7xl text-center mb-12 text-accent font-bold shadow select-none cursor-default"></div>
        <div className="text-2xl md:text-4xl p-10 cursor-default">
          💵 Prize Pool <span className="text-green-500 font-bold">₹2,00,000/-</span>
        </div>
        <div className="flex flex-col w-[90%] items-center justify-center">
          <div className=" text-4xl md:text-5xl font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-purple-400 pb-4 md:pt-8">Time to go!</div>
          <Countdown
            date={new Date('2024-09-05T00:00:00')}
          />
          <div className="pt-6 md:hidden xl:pt-8 xl:flex">
            <RegisterButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
