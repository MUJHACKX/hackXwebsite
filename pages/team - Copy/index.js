//framer motion

import {motion} from 'framer-motion'

//variants
import { fadeIn } from '../../variants'

const Team = () => {
  return <div className="h-full bg-primary">
    <div className="text-center flex flex-col justify-center  xl:text-left h-full
      container mx-auto">
    <motion.h6
        variants={fadeIn('down', 0.4)}
        initial="hidden" 
        animate="show"
        exit="hidden"
        className="h1"
    > 
          Registrations opening from <br /><span className="text-accent">1st October, 2023</span>
        </motion.h6>
        </div>
  </div>;
};

export default Team;
