import CircularProgressBar from './CircularProgressBar';
import Image from "next/image";
import calendarImage from "../public/calendar.png";

function TimelineCard({
                        direction,
                        heading1,
                        heading2,
                        heading3,
                        progress,
                        label,
                        image,
                        topLine = false,
                        bottomLine = false
                      }) {
  const isLeft = direction === 'left';
  return (
    <div className="grid grid-cols-[1fr_15rem] md:grid-cols-9 grid-rows-[3rem_1fr_3rem] md:grid-rows-3 items-center">
      <CircularProgressBar
        progress={progress}
        label={label}
        customStyles={`row-start-2 md:col-start-5 md:col-end-6 md:mr-5 col-start-1 col-end-2 relative`}
      />
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
           className={`${isLeft ? 'md:col-start-4 md:col-end-5' : 'md:col-start-6 md:col-end-7'} md:block hidden col-start-2 col-end-3 row-start-2`}>
        <line
          x1="10"
          y1="50"
          x2="90"
          y2="50"
          stroke="#ccc"
          strokeDasharray="7"
          strokeWidth={8}
        />
      </svg>
      <div className={`${isLeft ? 'md:col-start-1 md:col-end-4' : 'md:col-start-7 md:col-end-10'} mr-2 row-start-1 row-end-4 col-start-2 col-end-5 md:ml-2 ml-10`}>
        <div className={`flex flex-col justify-center ${isLeft ? 'md:items-end' : 'items-start'} items-start`}>
          <Image src={image} alt={`image`} quality={80} className="mb-4 mr-8 ml-8 hidden md:block" style={{width: "10rem", height: "auto"}} sizes="max-width(768px) 10vw" />
          <div className={`flex ${isLeft ? 'md:flex-row' : 'flex-row-reverse'} flex-row-reverse items-center justify-end`}>
            <h3 className="font-semibold text-pracula md:text-3xl text-[1.25rem] mb-1 pl-3 pr-3">{heading1}</h3>
            <Image src={calendarImage} alt="calendar" color={'#fff'} quality={100} className="w-6" />
          </div>
          <h3 className="font-semibold text-pracula md:text-2xl mb-1">{heading2}</h3>
          <p className={`leading-tight md:mt-4 mt-2 ${isLeft ? 'md:text-right' : ''}`}>{heading3}</p>
        </div>
      </div>
      {topLine &&
        <svg viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg"
             className="row-start-1 md:col-start-5 md:col-end-6 col-start-1 col-end-2 h-12 md:h-[8.125rem] w-[8.125rem]">
          <line
            x1="65"
            y1="0"
            x2="65"
            y2="110"
            stroke="#ccc"
            strokeWidth={8}
          />
        </svg>}
      {bottomLine &&
        <svg viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg"
             className="row-start-3 md:col-start-5 md:col-end-6 col-start-1 col-end-2 h-12 md:h-[8.125rem] w-[8.125rem]">
          <line
            x1="65"
            y1="20"
            x2="65"
            y2="130"
            stroke="#ccc"
            strokeWidth={8}
          />
        </svg>}
    </div>
  );
}

export default TimelineCard;
