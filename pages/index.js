import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Typewriter from "typewriter-effect/dist/core";
import { useEffect, useState } from "react";
import Countdown from "../components/Countdown";
import Link from "next/link";
import { CanvasRevealEffect } from "../components/BinaryCard";
import FacultyCard from "../components/FacultyCard";
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
  const data = [
    {
      title: "How do I register ?",
      content:
        "Click on the register now button on the nav menu of the website.",
    },
    {
      title: "How many team members do I need ?",
      content:
        "You can participate individually or in teams of 2 to 4 members.",
    },
    {
      title: "How much are the participation fees?",
      content: "Rs 699 for each participating team, be it 2 or 4 members.",
    },
    {
      title: "Will the Hackathon be in person or online ?",
      content:
        "MUJHackX 2.0 will be conducted in complete offline/in-person mode at Manipal University Jaipur",
    },
    {
      title: "What is the venue for MUJHackX 2.0 ?",
      content:
        "Manipal University Jaipur, Dahmi Kalan, Bagru P.O, Jaipur Ajmer Road 303007, Rajasthan, India",
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
  }, []);
  return (
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
            Compete for a Grand Prize Pool of ₹5,00,000 ($6,000)!"
          </div>
        </div>

        <div>
          <h1
            className={`text-white text-5xl sm:text-7xl lg:text-8xl mb-8`}
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            <span
              style={{
                textShadow:
                  "0 0 3px rgba(255, 255, 255, 0.4), 0 0 6px rgba(255, 255, 255, 0.4)",
              }}
            >
              MUJ&nbsp;
            </span>
            <span
              className="font-bold animate-blink"
              style={{
                textShadow:
                  "0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.5)",
              }}
            >
              HACKX&nbsp;
            </span>
            <span
              style={{
                textShadow:
                  "0 0 3px rgba(255, 255, 255, 0.4), 0 0 6px rgba(255, 255, 255, 0.4)",
              }}
            >
              2.0
            </span>
          </h1>
        </div>

        <div className="text-center ">
          <div className="text-xl xl:text-2xl text-white mb-7">
            Join the ultimate tech showdown a hackathon where your ideas ignite,
            your code transforms, and your innovations shine!
          </div>
        </div>

        <div className="flex pb-6">
          <Link
            href="https://unstop.com/hackathons/muj-hackx-20-manipal-university-mu-jaipur-1068307"
            target="_blank"
          >
            <button
              className="text-white px-4 py-2 rounded-lg font-bold sm:text-lg lg:text-xl text-base bg-gradient-to-r ease-in-out hover:animate-text from-[#ae40c0] via-violet-600 to-indigo-600"
              style={{ fontFamily: "Epilogue, sans-serif" }}
            >
              Register now
            </button>
          </Link>
        </div>

        <div className="text-center pb-6">
          <div className="text-sm sm:text-md lg:text-lg">
            Registrations are closed now. We'll see you next year.
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

        <div className="flex items-center pb-10">
          <span className="mr-4">Our Language Partner</span>
          <div className="bg-white rounded-lg flex justify-center items-center px-1">
            <a
              href="https://quillbot.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="py-4 px-11"
                style={{
                  backgroundImage: 'url("/QuillbotLogo.jpg")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center pb-10">
          <span className="text-center">Explore tools by QuillBot</span>
          <div className="flex mt-4 space-x-4">
            <a
              href="https://quillbot.com/paragraph-rewriter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="QuillbotLogo.jpg"
                alt="QuillBot Rewriter"
                className="w-20 h-20"
              />
            </a>
            <a
              href="https://languagetool.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="QuillBotLanguageToolLogo.png"
                alt="QuillBot Language Tool"
                className="w-20 h-20"
              />
            </a>
            <a
              href="https://www.scribbr.com/citation/generator/apa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="QuillBotScribbrLogo.png"
                alt="QuillBot Scribbr"
                className="w-20 h-20"
              />
            </a>
          </div>
        </div>

        <div className="pb-10">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.0391 1.17849C16.8637 1.00305 16.6574 0.915462 16.4204 0.915738C16.1834 0.915737 15.9772 1.00339 15.8019 1.17869L8.99598 7.9846L2.19008 1.17869C2.01477 1.00339 1.80853 0.915807 1.57136 0.915945C1.33404 0.915944 1.12774 1.0036 0.952433 1.1789C0.776991 1.35434 0.689409 1.56058 0.689684 1.79762C0.689684 2.03466 0.777336 2.24083 0.952639 2.41613L8.25042 9.71391C8.46161 9.9251 8.71013 10.0308 8.99598 10.0309C9.28183 10.0308 9.53035 9.9251 9.74153 9.71391L17.0393 2.41613C17.2146 2.24083 17.3022 2.03459 17.3021 1.79741C17.3021 1.5601 17.2144 1.35379 17.0391 1.17849ZM17.0469 8.59527C16.8715 8.41983 16.6653 8.33218 16.4284 8.33231C16.1914 8.33231 15.9852 8.41997 15.8099 8.59527L9.00382 15.4014L2.19791 8.59548C2.02261 8.42017 1.81637 8.33245 1.57919 8.33232C1.34202 8.33245 1.13571 8.42024 0.96027 8.59568C0.784966 8.77099 0.697314 8.97716 0.697314 9.2142C0.69759 9.45123 0.785379 9.6574 0.960683 9.83271L8.25826 17.1303C8.46959 17.3416 8.71811 17.4473 9.00382 17.4473C9.28966 17.4474 9.53825 17.3418 9.74958 17.1305L17.0474 9.83271C17.2227 9.6574 17.3102 9.45116 17.3101 9.21399C17.31 8.97681 17.2223 8.77057 17.0469 8.59527Z"
              fill="#A684C1"
            />
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
      <div
        className={
          wheight < 800 ? (wheight < 700 ? `pt-80` : `pt-56`) : `pt-20`
        }
      >
        <div className="pt-40"></div>
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
        <div
          className="lg:text-5xl md:text-4xl text-2xl "
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Get ready for something big
        </div>
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
      
      {/* Faculty Cards in 3-2 Grid */}
      <div className="text-[#c8d3ef] flex flex-col justify-center items-center">
        <div className="pt-16 md:text-3xl lg:text-5xl sm:text-2xl text-xl ">
          Chief Guest and Keynote Speakers
        </div>
      </div>
    <div className="pt-12 flex flex-col items-center"> {/* Center the entire card section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full md:w-4/5 lg:w-3/4 xl:w-2/3"> {/* Top Row - 3 Cards, adjust width for responsiveness */}
        <FacultyCard 
          name="Dr. Buddha Chandrasekhar" 
          image="/buddha.jpeg" 
          line1="CCO of AICTE and CEO of Anuvadini Ai"
          line2="Ministry of Education"
          count={3} 
          icon="https://www.linkedin.com/in/chandrasekharbudha/?originalSubdomain=in" 
        />
        <FacultyCard 
          name="Mr. Vishal Doshi" 
          image="/vishaltcs.jpeg" 
          line1="Head - Talent Acquisition"
          line2="Tata Consultancy Services"
          count={3} 
          icon="https://www.linkedin.com/in/vishal-doshi-5b672414/?originalSubdomain=in" 
        />
      </div>
    </div>
    <div className="text-[#c8d3ef] flex flex-col justify-center items-center">
        <div className="pt-16 md:text-3xl lg:text-5xl sm:text-2xl text-xl ">
          Guest Speakers and Judges
        </div>
      </div>
    {/* Faculty Cards in 3-2 Grid */}
    <div className="pt-12 flex flex-col items-center"> {/* Center the entire card section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 w-full md:w-4/5 lg:w-3/4 xl:w-2/3"> {/* Top Row - 3 Cards, adjust width for responsiveness */}
        <FacultyCard 
          name="Suraaj Hasija" 
          image="/suraj.png" 
          line1="Senior Manager"
          line2="Scaler"
          count={3} 
          icon="https://www.linkedin.com/in/suraajhasija/" 
        />
        <FacultyCard 
          name="Rohit Kumar Mishra" 
          image="/rohit.png" 
          line1="Project Engineer"
          line2="CDAC-DRDO"
          count={3} 
          //icon="" 
        />
        <FacultyCard 
          name="Mr. Yash Ramani" 
          image="/yash.jpeg" 
          line1="Co-Founder"
          line2="Say Design Studios"
          count={3} 
          icon="https://www.linkedin.com/in/yash-ramani7/?originalSubdomain=in" 
        />
        <FacultyCard 
          name="Mr. Hiten Lulla" 
          image="/hiten.jpeg" 
          line1="Content Creator"
          line2="@hiten.codes"
          count={3} 
          icon="https://www.linkedin.com/in/hiten-lulla-a434201aa/?originalSubdomain=in" 
        />
        
      </div>
    </div>




      {/* SPONSORS OF 2024 HACKX 2.0 */}
      {/*
      <div className="text-[#c8d3ef] flex flex-col justify-center items-center">
        <div className="pt-16 md:text-3xl lg:text-5xl sm:text-2xl text-xl ">
          Introducing CDAC as Official Technical Partner 
        </div>
      </div>
      */}
      <div className="text-[#c8d3ef] flex flex-col justify-center items-center">
        <div className="pt-16 md:text-3xl lg:text-5xl sm:text-2xl text-xl ">
          MUJHACKX 2.0 Official Sponsors
        </div>
      </div>
      <div className="text-[#c8d3ef] flex flex-col justify-center items-center">
        <div className="pt-16 md:text-3xl lg:text-5xl sm:text-2xl text-xl ">
          Hiring Partner
        </div>

        <div className="w-4/5 lg:w-3/5 xl:w-3/6 pt-6 grid grid-cols-1 gap-10 place-items-center">
          {/* Sponsor 1 */}
          <div className="flex flex-col items-center">
            <img
              src="/sponsors/Prog.png"
              alt="Title Sponsor 1"
              className="w-full"
            />
            <div className="text-center pt-4">
              <p className="text-lg font-semibold"></p>
              <p className="text-md">Programming Pathshala</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#c8d3ef] flex flex-col justify-center items-center">
        <div className="pt-16 md:text-3xl lg:text-5xl sm:text-2xl text-xl ">
          Knowledge Partner
        </div>

        <div className="w-4/5 lg:w-3/5 xl:w-3/6 pt-6 grid grid-cols-2 gap-10 place-items-center">
          {/* Sponsor 1 */}
          <div className="flex flex-col items-center">
            <img
              src="/sponsors/Oracle.png"
              alt="Title Sponsor 1"
              className="w-full"
            />
            <div className="text-center pt-4">
              <p className="text-lg font-semibold"></p>
              <p className="text-md">Oracle Academy</p>
            </div>
          </div>

          {/* Sponsor 2 */}
          <div className="flex flex-col items-center">
            <img
              src="/sponsors/Axure2.png"
              alt="Co-Sponsor 1"
              className="w-full"
            />
            <div className="text-center pt-4">
              <p className="text-lg font-semibold"></p>
              <p className="text-md">Axure</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#c8d3ef] flex flex-col justify-center items-center">
        <div className="pt-16 md:text-3xl lg:text-5xl sm:text-2xl text-xl ">
          Startup Partner
        </div>

        <div className="w-4/5 lg:w-3/5 xl:w-3/6 pt-6 grid grid-cols-2 gap-10 place-items-center">
          {/* Sponsor 1 */}
          <div className="flex flex-col items-center">
            <img
              src="/sponsors/DesignStudio.png"
              alt="Title Sponsor 1"
              className="w-full"
            />
            <div className="text-center pt-4">
              <p className="text-lg font-semibold"></p>
              <p className="text-md">Say Design Studio</p>
            </div>
          </div>

          {/* Sponsor 2 */}
          <div className="flex flex-col items-center">
            <img
              src="/sponsors/Bikesetu2.png"
              alt="Co-Sponsor 1"
              className="w-full"
            />
            <div className="text-center pt-4">
              <p className="text-lg font-semibold"></p>
              <p className="text-md">Bikesetu</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-[#c8d3ef] flex flex-col justify-center items-center">
        <div className="pt-16 md:text-3xl lg:text-5xl sm:text-2xl text-xl ">
          Technical Partner
        </div>

        <div className="w-4/5 lg:w-3/5 xl:w-3/6 pt-6 grid grid-cols-1 gap-10 place-items-center">
          {/* Sponsor 1 */}
            
            <div className="text-center">
              <p className="text-lg font-semibold"></p>
              <p className="pt-16 md:text-3xl lg:text-5xl sm:text-2xl text-xl">C-DAC, India</p>
            </div>
        
        </div>
      </div>
      <div className="text-[#c8d3ef] flex flex-col justify-center items-center">
        <div className="pt-16 md:text-3xl lg:text-5xl sm:text-2xl text-xl ">
          Healthcare Partner
        </div>

        <div className="w-4/5 lg:w-3/5 xl:w-3/6 pt-6 grid grid-cols-1 gap-10 place-items-center">
          {/* Sponsor 1 */}
          <div className="flex flex-col items-center">
            <img
              src="/sponsors/Femease.png"
              alt="Title Sponsor 1"
              className="w-full"
            />
            <div className="text-center pt-4">
              <p className="text-lg font-semibold"></p>
              <p className="text-md">Femease</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#c8d3ef] flex flex-col justify-center items-center">
        <div className="pt-16 md:text-3xl lg:text-5xl sm:text-2xl text-xl ">
          Blog Partner
        </div>

        <div className="w-4/5 lg:w-3/5 xl:w-3/6 pt-6 grid grid-cols-1 gap-10 place-items-center">
          {/* Sponsor 1 */}
          <div className="flex flex-col items-center">
            <img
              src="/sponsors/ED.png"
              alt="Title Sponsor 1"
              className="w-full"
            />
            <div className="text-center pt-4">
              <p className="text-lg font-semibold"></p>
              <p className="text-md">ED Times</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#c8d3ef] flex flex-col justify-center items-center">
        <div className="pt-16 md:text-3xl lg:text-5xl sm:text-2xl text-xl ">
          Partner
        </div>

        <div className="w-4/5 lg:w-3/5 xl:w-3/6 pt-6 grid grid-cols-1 gap-10 place-items-center">
          {/* Sponsor 1 */}
          <div className="flex flex-col items-center">
            <img
              src="/sponsors/Fanstore.png"
              alt="Title Sponsor 1"
              className="w-full"
            />
            <div className="text-center pt-4">
              <p className="text-lg font-semibold"></p>
              <p className="text-md">Bobble AI Fanstore</p>
            </div>
          </div>
        </div>
      </div>

      
      <div>
        <div className="flex flex-col jusitfy-center items-center pt-10">
          <div className="flex flex-col ">
            <div className="text-center font-bold text-2xl md:text-3xl lg:text-4xl ">
              Frequently Asked Questions
            </div>
          </div>

          <div className="max-w-[700px] pt-8">
            {data.map((item, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem
                  value={`item-${index}`}
                  className=" py-4 md:py-8"
                >
                  <AccordionTrigger
                    className="max-w-[592px] text-white text-2xl
                    font-medium leading-7"
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
            <button
              className="text-white px-4 py-2 rounded-lg font-bold sm:text-lg lg:text-xl text-base bg-gradient-to-r ease-in-out hover:animate-text from-[#ae40c0] via-violet-600 to-indigo-600"
              style={{ fontFamily: "Epilogue, sans-serif" }}
            >
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
