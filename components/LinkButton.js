import {motion} from 'framer-motion';
import {FaArrowRight, FaSheetPlastic} from "react-icons/fa6";

const ANIM_STATES = {
  initial: {
    width: '0%',
  },
  whileHover: {
    width: '100%',
    transition: {
      duration: 0.3,
    },
  },
};

export default function LinkButton({ps_released = false}) {
  return (
    <motion.a
      href={ps_released ? "https://linktr.ee/mujhackx" : "https://linktr.ee/mujhackx"}
      target="_blank"
      variants={{
        whileHover: {
          backgroundColor: '#5256a2',
        },
      }}
      initial="initial"
      whileHover="whileHover"
      className="w-max hover:cursor-pointer relative h-10 border border-[#5256a2] flex overflow-hidden bg-slate-100
      gap-2 pr-4 pl-2 text-black rounded-full uppercase font-medium leading-loose poppins text-[1rem] py-[0.125rem]"
    >
      <motion.div
        variants={ANIM_STATES}
        className="rounded-full h-full w-full bg-[#5256a2] -ml-2 absolute top-0"
      ></motion.div>
      <div className="block relative">
        <motion.div
          variants={{
            initial: {
              y: 0,
              opacity: 1,
            },
            whileHover: {
              y: -50,
              opacity: 0,
            },
          }}
          className="flex z-10 items-center gap-2"
        >
          {ps_released ? <FaSheetPlastic/> : <FaArrowRight/>}
          <span className="z-10">{ps_released ? "Problem Statements" : "Register Now"}</span>
        </motion.div>
        <motion.div
          variants={{
            initial: {
              y: 0,
              opacity: 0,
            },
            whileHover: {
              y: -31.5,
              opacity: 1,
            },
          }}
          className="flex z-10 items-center gap-2 text-white"
        >
          {ps_released ? <FaSheetPlastic/> : <FaArrowRight/>}
          <span className="z-10">{ps_released ? "Problem Statements" : "Register Now"}</span>
        </motion.div>
      </div>
    </motion.a>
  );
}