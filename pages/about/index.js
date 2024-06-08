import React, {useState} from "react";
import ThemeCard from "../../components/ThemeCard";
import CountAnimation from "../../components/CountAnimation";
import ParticipateAdvantage from "../../components/ParticipateAdvantage";
import {motion} from "framer-motion"
import Image from "next/image";
import themesData from "../../data/themesData";

import SponsorImage1 from "../../public/sponsors/img1.png";
import SponsorImage2 from "../../public/sponsors/img2.jpg";
import SponsorImage3 from "../../public/sponsors/img9.svg";
import SponsorImage4 from "../../public/sponsors/img4.png";
import SponsorImage5 from "../../public/sponsors/img5.jpeg";
import SponsorImage6 from "../../public/sponsors/img6.png";
import SponsorImage7 from "../../public/sponsors/img7.png";
import SponsorImage8 from "../../public/sponsors/img8.jpg";
import SponsorImage9 from "../../public/sponsors/img3.png";
import SponsorImage10 from "../../public/sponsors/img10.png";
import SponsorImage11 from "../../public/sponsors/img11.png";
import SponsorImage12 from "../../public/sponsors/img12.png";
import SponsorImage13 from "../../public/sponsors/img13.jpg";



const advantages = [
  {
    icon: '/img1.svg',
    heading: 'Collaborate and skill up',
    description: 'Connect with people, form a team, learn new skills and develop amazing projects!'
  },
  {
    icon: '/img2.svg',
    heading: 'Win exciting prizes',
    description: 'Top 3 teams plus best projects of each domain will win prizes which will be disclosed soon!'
  },
  {
    icon: '/img3.svg',
    heading: 'Engaging Workshops',
    description: 'Technical workshops and events like no-light event will keep the participants engaged throughout.'
  },
  {
    icon: '/img4.svg',
    heading: 'Mentorship sessions',
    description: 'Get mentorship and guidance from prominent technocrats of the industry.'
  },
  {
    icon: '/img5.svg',
    heading: 'Recruitment offers',
    description: 'Best performers will get recruitment offers from prestigious companies.'
  },
  {
    icon: '/img6.svg',
    heading: 'Expand network',
    description: 'Connect with industry professionals and recruiters and other teams to learn and grow more.'
  }
]

const About = () => {
  const [currentTheme, setCurrentTheme] = useState(0);
  return (
    <div className='bg-primary bg-fixed'>
      <div className='pb-[30%] md:pb-[10%] pt-[45%] xl:pt-[10%] lg:pt-[15%] md:pt-[20%] h-full bg-primary flex items-center flex-col'>
        <div className="w-full md:w-auto flex flex-col items-center">
          <div className="text-4xl md:text-6xl text-center font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent
            from-indigo-300 to-indigo-300 animate-text">
            WHY PARTICIPATE IN HACKX?
          </div>
          <div
            className="flex  justify-center flex-wrap mt-12 items-center w-[90%] md:w-[85%] bg-gradient-to-r from-[#9d00ff1f] to-[#5600ff4d] rounded-2xl pt-4 md:pt-0">
            {
              advantages.map((advantage, index) => (
                <ParticipateAdvantage key={index} icon={advantage.icon} heading={advantage.heading}
                                      description={advantage.description}/>
              ))
            }
          </div>
        </div>
        <div className="w-full md:w-auto mt-28">
          <div className="text-4xl md:text-6xl text-center font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent
            from-indigo-300 to-indigo-300 animate-text">
            THEMES
          </div>
          <div className="flex-col mt-6 md:mt-12 flex items-center">
            <div className="text-2xl md:text-3xl">
              Big Reveal Ahead!
            </div>
            {/*<div className="flex flex-row w-[90%] md:w-[85%] flex-wrap">*/}
            {/*  {*/}
            {/*    themesData.map((theme, index) => (*/}
            {/*      <ThemeCard key={index} index={index} theme={theme} currentTheme={currentTheme}*/}
            {/*                 setCurrentTheme={setCurrentTheme}/>*/}
            {/*    ))*/}
            {/*  }*/}
            {/*</div>*/}
            {/*<div className="flex flex-row p-3 w-[80%]">*/}
            {/*  <div className="md:text-xl mt-4 md:mt-8 ml-2 text-slate-200">{themesData[currentTheme].desc}</div>*/}
            {/*</div>*/}
          </div>
        </div>
        <div className="w-full mt-32 flex flex-col items-center">
          <div className="text-4xl md:text-6xl text-center font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent
            from-indigo-300 to-indigo-300 animate-text">
            LAST YEAR'S SUCCESS
          </div>
          <motion.div
            className="flex flex-row mt-6 md:mt-8 items-center w-full md:w-[80%] flex-grow"
          >
            <div className="flex flex-col flex-grow items-center">
              <CountAnimation targetValue={30}/>
              <div className="md:text-3xl text-center text-slate-200">Universities</div>
            </div>
            <div className="flex flex-col flex-grow items-center">
              <CountAnimation targetValue={1000}/>
              <div className="md:text-3xl text-center text-slate-200">Participants</div>
            </div>
            <div className="flex flex-col flex-grow items-center">
              <CountAnimation targetValue={850}/>
              <div className="md:text-3xl text-center text-slate-200">Projects</div>
            </div>
          </motion.div>
        </div>
        <div className="w-full md:w-auto flex flex-col items-center mt-32">
          <div className="text-4xl md:text-6xl text-center font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent
            from-indigo-300 to-indigo-300 animate-text">
            PAST PARTNERS & SPONSORS
          </div>
          <div className="flex flex-row flex-wrap mt-12 items-center w-[90%] md:w-[60%] rounded-2xl justify-center">
            <Image src={SponsorImage1} alt="sponsor" className="m-4" width={0} height={0} style={{height: '8rem', width: 'auto'}} />
            <Image src={SponsorImage2} alt="sponsor" className="m-4" width={0} height={0} style={{height: '8rem', width: 'auto'}} />
            <Image src={SponsorImage3} alt="sponsor" className="m-4" width={0} height={0} style={{height: '8rem', width: 'auto'}} />
            <Image src={SponsorImage4} alt="sponsor" className="m-4" width={0} height={0} style={{height: '8rem', width: 'auto'}} />
            <Image src={SponsorImage5} alt="sponsor" className="m-4" width={0} height={0} style={{height: '8rem', width: 'auto'}} />
            <Image src={SponsorImage6} alt="sponsor" className="m-4" width={0} height={0} style={{height: '8rem', width: 'auto'}} />
            <Image src={SponsorImage7} alt="sponsor" className="m-4" width={0} height={0} style={{height: '8rem', width: 'auto'}} />
            <Image src={SponsorImage8} alt="sponsor" className="m-4" width={0} height={0} style={{height: '8rem', width: 'auto'}} />
            <Image src={SponsorImage9} alt="sponsor" className="m-4" width={0} height={0} style={{height: '8rem', width: 'auto'}} />
            <Image src={SponsorImage10} alt="sponsor" className="m-4" width={0} height={0} style={{height: '8rem', width: 'auto'}} />
            <Image src={SponsorImage11} alt="sponsor" className="m-4" width={0} height={0} style={{height: '8rem', width: 'auto'}} />
            <Image src={SponsorImage12} alt="sponsor" className="m-4" width={0} height={0} style={{height: '8rem', width: 'auto'}} />
            <Image src={SponsorImage13} alt="sponsor" className="m-4" width={0} height={0} style={{height: '8rem', width: 'auto'}} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;

