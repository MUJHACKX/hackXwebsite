import React, { useEffect } from "react";
import AOS from "aos";
import TimelineCard from "../../components/TimelineCard";
import "aos/dist/aos.css";
import timelineData from "../../data/timelineData";
import Footer from "../../components/Footer";

const Schedule = () => {
  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      duration: 400,
      easing: 'ease',
      anchorPlacement: 'top-bottom',
    });
  }, []);

  const [year, setYear] = React.useState(2024);

  return (
    <div className='bg-primary bg-fixed'>
      <div className='md:pb-[10%] pb-[30%] pt-[45%] md:pt-[10%] h-full bg-primary flex items-center flex-col'>
        <div className="text-4xl md:text-6xl text-center font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent from-indigo-300 to-indigo-300 animate-text">
          Timeline
        </div>
        <div className="flex items-center w-[70%] md:w-[50%] text-xl h-16 mt-8 md:mt-16">
          <button
            className={`w-[50%] m-4 md:m-0 p-4 rounded ${year === 2024 ? 'bg-gradient-to-r from-cyan-500 to-purple-500' : ''}`}
            onClick={() => setYear(2024)}
          >2024
          </button>
          <button
            className={`w-[50%] m-4 md:m-0 p-4 rounded ${year === 2023 ? 'bg-gradient-to-r from-cyan-500 to-purple-500' : ''}`}
            onClick={() => setYear(2023)}
          >2023
          </button>
        </div>
        <div className='justify-center flex' data-aos="fade-up">
          <div className="bg-primary bg-fixed container justify-center items-center justify-items-center align-middle flex">
            <div className="bg-primary bg-fixed flex flex-col text-dracxt">
              {!timelineData[year].customText && timelineData[year].data.map((data, index) => (
                <TimelineCard
                  key={index}
                  direction={data.direction}
                  heading1={data.heading1}
                  heading2={data.heading2}
                  heading3={data.heading3}
                  progress={data.progress}
                  label={data.label}
                  image={data.image}
                  topLine={data.topLine}
                  bottomLine={data.bottomLine}
                />
              ))}
              {timelineData[year].customText && (
                <h1 className="text-4xl font-bold text-center mt-20 h-[44vh]">
                  {timelineData[year].customText}
                </h1>
              )}
            </div>
          </div>
        </div>
        <div className='bg-dracula text-dracxt font-mono'>
          <div className='xl:mx-auto max-w-7xl lg:mx-[10vw] justify-items-center mx-[5vw]'>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Schedule;