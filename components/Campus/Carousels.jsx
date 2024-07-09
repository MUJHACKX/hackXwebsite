import React, { useEffect, useRef } from 'react';

const Carousel1 = [
  {
    title: "Internship Eligibility",
    img: "internship_icon.svg"
  },
  {
    title: "HackX Spotlight",
    img: "Spotlight.svg"
  },
  {
    title: "Certificates & LoRs",
    img: "Certificates.svg"
  },
  {
    title: "Milestone Incentives",
    img: "Milestone.svg"
  }
];

const Carousel2 = [
  {
    title: "Networking",
    img: "Networking.svg"
  },
  {
    title: "Development",
    img: "Development.svg"
  },
  {
    title: "MUJ Experience Center",
    img: "MUJExperience.svg"
  },
  {
    title: "Lots of Goodies",
    img: "Goodies.svg"
  }
];

export default function Carousels() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
        }
      });
    }, { threshold: 0.1 });

    const section = sectionRef.current;
    const elements = section.querySelectorAll('.animate-from-left, .animate-from-right');
    
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={sectionRef} className="flex justify-center flex-col w-full h-full gap-6 py-20  lg:py-10  font-mono ">

<div className='flex w-full text-4xl justify-center mt-16 mb-7'>
<h1 className='text-center' style={{ textShadow: '0 0 1px #FFF, 0 0 3px #FFF, 0 0 8px #FFF, 0 0 6px #FFF' }}>
  PERKS YOU WILL BE BENEFITTED WITH
</h1>
</div>

      <div className="md:flex justify-center w-full h-full grid grid-flow-col-2 md:flex-col items-center lg:flex-row gap-6 lg:px-36 md:px-28">
        {Carousel1.map((item, index) => (
          <div
            key={index}
            className={`w-full lg:w-1/4 h-80 flex flex-col justify-center items-center border-2 rounded-lg p-4 bg-black px-7 transition-transform transform hover:scale-105  animate-from-left hover:text-white`}
          >
            <img src={item.img} alt="icon" className="w-24 h-24 mb-4 mt-6" />
            <div className="flex justify-center items-end align-bottom h-1/2 w-full">
              <p className="text-xl text-center w-full h-10 bg-black text-white">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:flex justify-center w-full h-full grid grid-flow-col-2 md:flex-col items-center lg:flex-row gap-6 lg:px-36 md:px-28">
        {Carousel2.map((item, index) => (
          <div
            key={index}
            className={`w-full lg:w-1/4 h-80 flex flex-col justify-center items-center border-2 rounded-lg p-4 bg-black px-7 transition-transform transform hover:scale-105 animate-from-right`}
          >
            <img src={item.img} alt="icon" className="w-24 h-24 mb-4 mt-6" />
            <div className="flex justify-center items-end align-bottom h-1/2 w-full">
              <p className="text-xl text-center w-full h-10 bg-black text-white transition-transform">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
