/*import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const SwipeCarousel = ({index1,index2,type,imgArr}) => {
  return (
    <div classNameName="">
      <div classNameName="flex mt-[100px] items-center justify-center">
        <span classNameName="font-semibold  h3 uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   text-transparent bg-clip-text">
          {type}
        </span>
      </div>
      <HorizontalScrollCarousel arr = {[index1,index2]} imgArr={imgArr} />
     
    </div>
  );
};

const HorizontalScrollCarousel = ({arr,imgArr}) => {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], arr);

  return (
    <section ref={targetRef} classNameName="relative h-[200vh] ">
      <div classNameName="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} classNameName="flex gap-4">
          {imgArr.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      classNameName="group relative h-[450px] w-[550px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        classNameName="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div classNameName="absolute inset-0 z-10 grid place-content-center">
       
      </div>
    </div>
  );
};

export default SwipeCarousel;
*/

import React, { useState, useEffect } from 'react';
import Image from 'next/image';


const AutoPlayCarousel = ({images,count,type}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, count); 
    
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    images.forEach(({imageUrl}) => {
      let img ={
        src:""
      };
      img.src = imageUrl;
    });
  }, []);
  return (
    <div>
       <div className="flex mt-[100px] items-center justify-center">
        <span className="font-semibold  h3 uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   text-transparent bg-clip-text">
          {type}
        </span>
      </div>
    <div className='flex justify-center items-center'>
       
    <div className="carousel-container sm:w-[1080px] w-[450px] sm:h-[520px] h-[550px] px-0 md:px-8 ">
      <div className="relative w-full h-96">
        {images.map(({imageUrl, id}) => (
          <div
            key={id}
            className={`absolute w-full h-full  ${
              id === currentIndex ? 'block' : 'hidden'
            }`}
          >
            <div className="w-full h-full " >
            <Image
                src={imageUrl}
                alt={`Slide ${id + 1}`}
                layout="fill"
                objectFit= ""
                priority={true} // Ensure priority loading for smoother transition
                quality={75} // Adjust image quality as needed
                loading="eager" // Load images eagerly
              />            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default AutoPlayCarousel;