import {motion} from 'framer-motion';
import {FaSheetPlastic} from "react-icons/fa6";

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

const BUTTON_HOVER_EFFECTS = {
  initial: {
    y: 0,
    opacity: 1,
  },
  whileHover: {
    y: -30,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const BUTTON_TEXT_HOVER_EFFECTS = {
  initial: {
    y: 30,
    opacity: 0,
  },
  whileHover: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export default function LinkButton({ps_released = false}) {
  return (
    <div className="flex space-x-4">
      {/* Register Now Button */}
      <motion.a
        href="https://linktr.ee/mujhackx"
        target="_blank"
        initial="initial"
        whileHover="whileHover"
        className="relative inline-flex items-center justify-center px-4 py-2 border border-[#5256a2] rounded-full bg-slate-100 text-black font-medium leading-none cursor-pointer overflow-hidden"
      >
        <motion.div
          variants={ANIM_STATES}
          className="absolute inset-0 bg-[#5256a2] z-0"
        ></motion.div>
        <div className="relative z-10 flex items-center gap-2">
          <motion.div
            variants={BUTTON_HOVER_EFFECTS}
            className="flex items-center gap-2"
          >
            {ps_released ? <FaSheetPlastic/> : null}
            <span>{ps_released ? "Problem Statements" : "Register Now"}</span>
          </motion.div>
          <motion.div
            variants={BUTTON_TEXT_HOVER_EFFECTS}
            className="absolute flex items-center gap-2 text-white"
          >
            {ps_released ? <FaSheetPlastic/> : null}
            <span>{ps_released ? "Problem Statements" : "Register Now"}</span>
          </motion.div>
        </div>
      </motion.a>

    {/* Campus Ambassador Button */}
<motion.a
  href="/campus"
  initial="initial"
  whileHover="whileHover"
  className="relative inline-flex items-center justify-center px-4 py-2 border border-[#5256a2] rounded-full bg-slate-100 text-black font-medium leading-none cursor-pointer overflow-hidden"
>
  <motion.div
    variants={ANIM_STATES}
    className="absolute inset-0 bg-[#5256a2] z-0"
  ></motion.div>
  <div className="relative z-10 flex items-center gap-2">
    <motion.div
      variants={BUTTON_HOVER_EFFECTS}
      className="flex items-center gap-2"
    >
      <span>Campus Ambassador</span>
    </motion.div>
    <motion.div
      variants={BUTTON_TEXT_HOVER_EFFECTS}
      className="absolute flex items-center gap-2 text-white"
    >
      <span>Apply Now</span>
    </motion.div>
  </div>
</motion.a>
    </div>
  );
}