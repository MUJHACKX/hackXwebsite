import React, { useState, useEffect } from 'react';

export default function Count() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-09-09') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div
      className="w-full h-96 rounded-2xl flex gap-9 flex-col items-center justify-center bg-cover bg-center p-7"

    >
      <h2 className='text-white text-2xl lg:5xl'>Showdown start in </h2>
      <div className="flex items-start justify-center w-full gap-1.5 count-down-main">
        <div className="timer">
          <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3">
            <h3 className="countdown-element days font-manrope font-semibold text-2xl text-white text-center">
              {timeLeft.days}
            </h3>
            <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">days</p>
          </div>
        </div>
        <div className="timer">
          <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3">
            <h3 className="countdown-element hours font-manrope font-semibold text-2xl text-white text-center">
              {timeLeft.hours}
            </h3>
            <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">Hour</p>
          </div>
        </div>
        <div className="timer">
          <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3">
            <h3 className="countdown-element minutes font-manrope font-semibold text-2xl text-white text-center">
              {timeLeft.minutes}
            </h3>
            <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">Minutes</p>
          </div>
        </div>
        <div className="timer">
          <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-[96px] flex items-center justify-center flex-col gap-1 px-3">
            <h3 className="countdown-element seconds font-manrope font-semibold text-2xl text-white text-center">
              {timeLeft.seconds}
            </h3>
            <p className="text-lg uppercase font-normal text-white mt-1 text-center w-full">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
}
