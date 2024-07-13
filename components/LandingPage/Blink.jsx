import {useEffect,useState} from 'react'

export default function Blink() {
    const [mujHackClass, setMujHackClass] = useState('blink-animation');
    const [hack20Class, setHack20Class] = useState('');
  
    useEffect(() => {
      const mujHackTimeout = setTimeout(() => {
        setMujHackClass('');
      }, 5000);
  
      const hack20TimeoutStart = setTimeout(() => {
        setHack20Class('blink-animation');
      }, 5000); // Start blinking after 5 seconds
  
      const hack20TimeoutStop = setTimeout(() => {
        setHack20Class('');
      }, 15000); // Stop blinking after 10 seconds (total of 15 seconds from start)
  
      return () => {
        clearTimeout(mujHackTimeout);
        clearTimeout(hack20TimeoutStart);
        clearTimeout(hack20TimeoutStop);
      };
    }, []);
  
  return (
    <h1 className={`text-white text-6xl sm:text-4xl lg:text-8xl mb-4 bg-gradient-to-r from-amber-200 via-amber-200 to-amber-400 bg-clip-text text-transparent ${mujHackClass}`} style={{ textShadow: '0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.5)' }}>
    MUJ <span className='font-bold'>HACK</span> <span className={`bg-gradient-to-r from-violet-600 via-violet-600 to-indigo-600 bg-clip-text ${hack20Class}`}>2.0</span>
  </h1>
  )
}
