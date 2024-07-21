import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Typewriter from "typewriter-effect/dist/core";
import { useEffect, useState } from "react";
import Countdown from "../components/Countdown";
import Link from "next/link";
import { CanvasRevealEffect } from "../components/BinaryCard";
import { CanvasRevealEffectDemo } from "../components/CanvaReveal";
import { update } from "three/examples/jsm/libs/tween.module.js";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import Footer from "../components/Footer";

const Home = () => {
  //   useEffect(() => {
  //     new Typewriter("#typewriter", {
  //       strings: [
  //         "Innovate. Code. Create.",
  //         "Building Tomorrows Solutions Today",
  //         "Unleash Your Creativity",
  //       ],
  //       autoStart: true,
  //       loop: true,
  //     });
  //   }, []);
  const data = [
    {
      title: "How do I register ?",
      content: "REVEALED SOON",
    },
    {
      title: "How many team members do I need ?",
      content:
        "You can participate individually or in teams of 3 to 4 members.",
    },
    {
      title: "How much are the participation fees?",
      content: "REVEALED SOON",
    },
    {
      title: "Will the Hackathon be in person or online ?",
      content:
        "MUJHackX 2.0 will be conducted in complete offline/in-person mode.",
    },
    {
      title: "What is the venue for MUJHackX 2.0 ?",
      content:
        "Manipal University Jaipur, explore our beautiful campus while thinking about innovating some crazy thing.",
    },
    {
      title: "What are the prerequisites to participate in this hackathon ?",
      content:
        "No prerequisites are required to participate in this hackathon. This event is open to participants of all skill levels.",
    },
    {
      title:
        "Can my friend join our team after we have already submitted the application for review ?",
      content:
        "Yes, your friend can join the team by submitting an individual application. Once both your friend's individual application and your team's application are accepted, you will be able to add your friend to the team.",
    },
  ];
  const [wheight, setwHeight] = useState(1000);
  useEffect(() => {
    const updateHeight = () => {
      setwHeight(window.innerHeight);
    };

    // Function to check if window is defined (client-side)
    updateHeight();
  }, []); return (

    // <div className="h-screen flex flex-col items-center overflow-y-auto">
    //   <div
    //     className="absolute h-full w-full opacity-30 "
    //     style={{
    //       backgroundImage: 'url("/dotsanimation.svg")',
    //       backgroundSize: "cover",
    //       backgroundRepeat: "no-repeat",
    //     }}
    //   />
    //   <div className="z-[1] w-full flex flex-col items-center pt-[45%] sm:pt-[25%] md:pt-[20%] lg:pt-[10%] xl:pt-[7.5%]">
    //     <motion.div
    //       className="text-5xl lg:text-9xl text-center mb-12 text-accent font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent from-indigo-300 to-indigo-300 animate-text shadow"
    //       style={{
    //         fontFamily: "Iceland, sans-serif",
    //         marginTop: "10%", // Adjust this value to add padding
    //       }}
    //       variants={fadeIn("down", 0.2)}
    //       initial="hidden"
    //       animate="show"
    //       exit="hidden"
    //     >
    //       MUJHackx 2.0
    //     </motion.div>

    //     <div
    //       className="text-4xl lg:text-6xl text-center mb-4 text-white font-bold shadow select-none cursor-default"
    //       style={{ fontFamily: "Iceland, sans-serif" }}
    //     >
    //       MUJ's Premier 36 Hours Hackathon
    //     </div>

    //     <div
    //       id="typewriter"
    //       className="text-2xl lg:text-2xl text-center mb-12 text-accent font-bold shadow select-none cursor-default"
    //     ></div>

    //     <button
    //       className="flex items-center px-6 py-3 mt-4 text-black bg-white border border-black rounded-lg button-glow"
    //       style={{ borderRadius: "8px" }}
    //     >
    //       <img src="/unstop.png" alt="Unstop logo" className="w-6 h-6 mr-2" />
    //       <span className="text-lg font-bold">Apply through Unstop</span>
    //     </button>

    //     <div className="text-2xl lg:text-4xl p-10 cursor-default">
    //       💵 Prize Pool{" "}
    //       <span className="text-green-500 font-bold">₹5,00,000/-</span>
    //     </div>
    //     <div className="flex flex-col w-[90%] items-center justify-center">
    //       <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-purple-400 pb-4 md:pt-6">
    //         Time to go!
    //       </div>
    //       <div className="text-red-500 mb-40">
    //         <Countdown date={new Date("2024-09-05T00:00:00")} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-[#010223] w-full">
      <div
        className="h-screen flex flex-col items-center "
        style={{
          backgroundImage: 'url("/Xbg.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-[#766b62] mb-16 mt-40 lg:mt-28 flex text-[#f6d763] justify-center items-center rounded-xl lg:py-0 py-1 px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="lg:w-6 w-4 lg:h-6 h-4 text-[#f6d763] mr-2"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6 5.75A.75.75 0 0 1 6.75 5h6.5a.75.75 0 0 1 0 1.5h-2.127c.4.5.683 1.096.807 1.75h1.32a.75.75 0 0 1 0 1.5h-1.32a4.003 4.003 0 0 1-3.404 3.216l1.754 1.754a.75.75 0 0 1-1.06 1.06l-3-3a.75.75 0 0 1 .53-1.28H8c1.12 0 2.067-.736 2.386-1.75H6.75a.75.75 0 0 1 0-1.5h3.636A2.501 2.501 0 0 0 8 6.5H6.75A.75.75 0 0 1 6 5.75Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="text-white lg:text-lg text-sm">
            Win from the Biggest Prize Pool of ₹5,00,000/-
          </div>
        </div>

        <div>
          <h1
            className={`text-white text-5xl sm:text-7xl lg:text-8xl mb-8`}
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            <span style={{ textShadow: '0 0 3px rgba(255, 255, 255, 0.4), 0 0 6px rgba(255, 255, 255, 0.4)' }}>
              MUJ&nbsp;</span>
            <span
              className='font-bold animate-blink'
              style={{ textShadow: '0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.5)' }}
            >
              HACKX&nbsp;</span>
            <span style={{ textShadow: '0 0 3px rgba(255, 255, 255, 0.4), 0 0 6px rgba(255, 255, 255, 0.4)' }}>
              2.0
            </span>
          </h1>
        </div>

        <div className="text-center ">
          <div className="text-xl xl:text-2xl text-white mb-7">
            Join the ultimate tech showdown a hackathon where your ideas ignite, your code transforms, and your innovations shine!
          </div>
        </div>

        <div className="flex pb-6">
          <Link href="https://unstop.com/hackathons/muj-hackx-20-manipal-university-mu-jaipur-1068307" target="_blank">
            <button className="text-white px-4 py-2 rounded-lg font-bold sm:text-lg lg:text-xl text-base bg-gradient-to-r ease-in-out hover:animate-text from-[#ae40c0] via-violet-600 to-indigo-600" style={{ fontFamily: "Epilogue, sans-serif" }}>
              Register now
            </button>
          </Link>
        </div>

        <div className="text-center pb-6">
          <div className="text-sm sm:text-md lg:text-lg">
            Registrations open till <span className="font-bold">25th</span> August, 2024 11:59 PM
          </div>
        </div>

        <div className="flex items-center pb-10">
          <span className="mr-4">powered by</span>
          <div className="bg-white rounded-lg flex justify-center items-center px-1">
            <div
              className="py-4 px-11"
              style={{
                backgroundImage: 'url("/unstop2.png")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>

        <div className="pb-10">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.0391 1.17849C16.8637 1.00305 16.6574 0.915462 16.4204 0.915738C16.1834 0.915737 15.9772 1.00339 15.8019 1.17869L8.99598 7.9846L2.19008 1.17869C2.01477 1.00339 1.80853 0.915807 1.57136 0.915945C1.33404 0.915944 1.12774 1.0036 0.952433 1.1789C0.776991 1.35434 0.689409 1.56058 0.689684 1.79762C0.689684 2.03466 0.777336 2.24083 0.952639 2.41613L8.25042 9.71391C8.46161 9.9251 8.71013 10.0308 8.99598 10.0309C9.28183 10.0308 9.53035 9.9251 9.74153 9.71391L17.0393 2.41613C17.2146 2.24083 17.3022 2.03459 17.3021 1.79741C17.3021 1.5601 17.2144 1.35379 17.0391 1.17849ZM17.0469 8.59527C16.8715 8.41983 16.6653 8.33218 16.4284 8.33231C16.1914 8.33231 15.9852 8.41997 15.8099 8.59527L9.00382 15.4014L2.19791 8.59548C2.02261 8.42017 1.81637 8.33245 1.57919 8.33232C1.34202 8.33245 1.13571 8.42024 0.96027 8.59568C0.784966 8.77099 0.697314 8.97716 0.697314 9.2142C0.69759 9.45123 0.785379 9.6574 0.960683 9.83271L8.25826 17.1303C8.46959 17.3416 8.71811 17.4473 9.00382 17.4473C9.28966 17.4474 9.53825 17.3418 9.74958 17.1305L17.0474 9.83271C17.2227 9.6574 17.3102 9.45116 17.3101 9.21399C17.31 8.97681 17.2223 8.77057 17.0469 8.59527Z" fill="#A684C1" />
          </svg>
        </div>

        <div className="text-center pb-7">
          <div className="md:text-4xl text-3xl lg:text-5xl">
            Showdown starts in
          </div>
        </div>

        <div className="">
          <Countdown date={new Date("2024-09-05T00:00:00")} />
        </div>
      </div>
      <div className={wheight < 800 ? wheight < 700 ? `pt-80` : `pt-56` : `pt-20`}>
        <div className="lg:mx-10 mx-4 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9">
          <img src="/sdg_1.svg" alt="circles" className="w-full" />
          <img src="/sdg_2.svg" alt="circles" className="w-full" />
          <img src="/sdg_3.svg" alt="circles" className="w-full" />
          <img src="/sdg_4.svg" alt="circles" className="w-full" />
          <img src="/sdg_5.svg" alt="circles" className="w-full" />
          <img src="/sdg_6.svg" alt="circles" className="w-full" />
          <img src="/sdg_7.svg" alt="circles" className="w-full" />
          <img src="/sdg_8.svg" alt="circles" className="w-full" />
          <img src="/sdg_9.svg" alt="circles" className="w-full" />

        </div>
      </div>
      <div className="pt-10 text-center ">
        <div className="lg:text-5xl md:text-4xl text-2xl " style={{ fontFamily: "Space Grotesk, sans-serif" }}>Get ready for something big</div>
      </div>
      <div className="pt-8 flex justify-center items-center md:mx-6 mx-3">
        <video className="w-full  " controls muted autoPlay loop>
          <source src="/teaser.mp4" type="Video/mp4" />
          Stop doing wrong to yourself!
        </video>
      </div>
      <div className="pt-12 text-center ">
        <div className="lg:text-5xl md:text-4xl text-3xl">THEMES</div>
      </div>
      <div className="pt-12">

        <CanvasRevealEffectDemo></CanvasRevealEffectDemo>

      </div>
      <div className="text-[#c8d3ef] flex flex-col justify-center items-center">
        <div className="pt-16 md:text-3xl lg:text-5xl sm:text-2xl text-xl ">
          Previous Year Top Sponsors of HACKX
        </div>
        <div className="w-4/5  lg:w-3/5 xl:w-3/6 pt-6 grid grid-cols-4 gap-3 sm:grid-cols-5 lg:grid-cols-5 place-items-center">
          <img src="/s1.png" alt="circles" className="w-full" />
          <img src="/s2.png" alt="circles" className="w-full" />
          <img src="/s3.png" alt="circles" className="w-full" />
          <img src="/s4.png" alt="circles" className="w-full" />
          <img src="/s5.png" alt="circles" className="w-full" />
          <img src="/s6.png" alt="circles" className="w-full" />
          <img src="/s7.png" alt="circles" className="w-full" />
          <img src="/s8.png" alt="circles" className="w-full" />
          <img src="/s9.png" alt="circles" className="w-full" />
          <img src="/s10.png" alt="circles" className="w-full" />
        </div>
      </div>
      <div>
        <div className="flex flex-col jusitfy-center items-center pt-10">
          <div className="flex flex-col ">
            <div className="text-center font-bold text-2xl md:text-3xl lg:text-4xl ">
              Frequently Asked Questions
            </div>

          </div>

          <div className="max-w-[690px] w-fit mx-4 pt-8">
            {data.map((item, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={`item-${index}`} className=" py-4 md:py-8 !bg-[#010223] font-medium font-[inter]">
                  <AccordionTrigger
                    className="max-w-[592px] text-white text-2xl
                    font-medium leading-7 font-['Inter']"
                  >
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent
                    className="max-w-[592px] text-gray-200 text-lg
                      font-normal font-['Inter'] leading-7"
                  >
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}

          </div>
        </div>
      </div>
      <div>
        <div className="flex p-8  items-center justify-center">
          <Link href="/about">
            <button className="text-white px-4 py-2 rounded-lg font-bold sm:text-lg lg:text-xl text-base bg-gradient-to-r ease-in-out hover:animate-text from-[#ae40c0] via-violet-600 to-indigo-600" style={{ fontFamily: "Epilogue, sans-serif" }}>
              Explore more about MUJHackX 2.0
            </button>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>


  );
};

export default Home;
