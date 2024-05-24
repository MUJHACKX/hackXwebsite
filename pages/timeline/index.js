import React, {useEffect} from "react";
import AOS from "aos";
import TimelineCard from "../../components/TimelineCard";
import "aos/dist/aos.css";
import timelineData from "../../data/timelineData";

const Schedule = () => {
  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      // delay: 200,
      duration: 400,
      easing: 'ease',
      anchorPlacement: 'top-bottom',
    });
  }, [])
  const [year, setYear] = React.useState(2023);
  return (
    <div className='bg-primary bg-fixed'>
      <div className='md:pb-[10%] pb-[30%] pt-[45%] md:pt-[10%] h-full bg-primary flex items-center flex-col'>
        <div className="flex items-center w-[70%] md:w-[50%] text-xl h-16">
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
          {/*component*/}
          <div
            className="bg-primary bg-fixed container justify-center items-center justify-items-center align-middle flex">
            <div className="bg-primary bg-fixed flex flex-col text-dracxt">
              {timelineData[year].customText &&
                <h1 className="text-4xl font-bold text-center mt-20 h-[44vh]">{timelineData[year].customText}</h1>}
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
            </div>
          </div>
        </div>
        <div className='bg-dracula text-dracxt font-mono'>
          <div className='xl:mx-auto max-w-7xl lg:mx-[10vw] justify-items-center mx-[5vw]'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule;
