import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Typewriter from "typewriter-effect/dist/core";
import { useEffect } from "react";
import Countdown from "../components/Countdown";

const Home = () => {
  useEffect(() => {
    new Typewriter("#typewriter", {
      strings: [
        "Innovate. Code. Create.",
        "Building Tomorrows Solutions Today",
        "Unleash Your Creativity",
      ],
      autoStart: true,
      loop: true,
    });
  }, []);

  return (
    <div className="h-screen flex flex-col items-center overflow-y-auto">
      <div
        className="absolute h-full w-full opacity-30 bg-center md:bg-top"
        style={{
          backgroundImage: 'url("/dotsanimation.svg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="z-[1] w-full flex flex-col items-center pt-[45%] sm:pt-[25%] md:pt-[20%] lg:pt-[10%] xl:pt-[7.5%]">
        <motion.div
          className="text-9xl lg:text-11xl text-center mb-12 text-accent font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent from-indigo-300 to-indigo-300 animate-text shadow"
          style={{
            fontFamily: "Iceland, sans-serif",
            marginTop: "10%", // Adjust this value to add padding
          }}
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          MUJHackx 2.0
        </motion.div>

        <div
          id="typewriter"
          className="text-7xl lg:text-2xl text-center mb-12 text-accent font-bold shadow select-none cursor-default"
        ></div>
        
        <button
          className="flex items-center px-6 py-3 mt-4 text-black bg-white border border-black rounded-lg button-glow"
          style={{ borderRadius: "8px" }}
        >
          <img src="/unstop.png" alt="Unstop logo" className="w-6 h-6 mr-2" />
          <span className="text-lg font-bold">Apply through Unstop</span>
        </button>
        
        <div className="text-2xl lg:text-4xl p-10 cursor-default">
          💵 Prize Pool{" "}
          <span className="text-green-500 font-bold">₹2,00,000/-</span>
        </div>
        <div className="flex flex-col w-[90%] items-center justify-center">
          <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-purple-400 pb-4 md:pt-6">
            Time to go!
          </div>
          <Countdown date={new Date("2024-09-05T00:00:00")} />
        </div>
      </div>
    </div>
  );
};

export default Home;
