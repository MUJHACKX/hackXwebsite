"use client";

import {useEffect, useState} from "react";
import FlipCard from "./FlipCard";

const Countdown = ({date}) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // update the value every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = (date - now) / 1000;
      setDays(Math.floor(distance / (60 * 60 * 24)));
      setHours(Math.floor((distance % (60 * 60 * 24)) / (60 * 60)));
      setMinutes(Math.floor((distance % (60 * 60)) / 60));
      setSeconds(Math.floor(distance % 60));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-2 text-white select-none cursor-default">
      <FlipCard value={days} heading="Days"/>
      <FlipCard value={hours} heading="Hours"/>
      <FlipCard value={minutes} heading="Minutes"/>
      <FlipCard value={seconds} heading="Seconds"/>
    </div>
  );
}

export default Countdown;
