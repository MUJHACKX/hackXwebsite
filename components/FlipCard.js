import { motion } from "framer-motion";

const FlipCard = ({ value, heading }) => {
  // this will be used to animate the Flip Counter
  const digit1 = Math.floor(value / 10);
  const digit2 = value % 10;
  return (
    <div className="flex flex-col bg-primary/10 items-center w-[5rem] lg:w-[10rem]">
      <div className="flex flex-row w-full justify-center">
        <motion.p
          className="font-medium text-[2rem] lg:text-[4rem] w-[40%] text-center"
        >
          {digit1}
        </motion.p>
        <motion.p
          className="font-medium text-[2rem] lg:text-[4rem] w-[40%] text-center"
        >
          {digit2}
        </motion.p>

      </div>

      <p className="lg:text-xl pb-4">{heading}</p>
    </div>
  );
}

export default FlipCard;
