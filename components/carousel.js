import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const SwipeCarousel = ({index1,index2,type,imgArr}) => {
  return (
    <div className="">
      <div className="flex mt-[100px] items-center justify-center">
        <span className="font-semibold  h3 uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   text-transparent bg-clip-text">
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
    <section ref={targetRef} className="relative h-[200vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
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
      className="group relative h-[450px] w-[550px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
       
      </div>
    </div>
  );
};

export default SwipeCarousel;

