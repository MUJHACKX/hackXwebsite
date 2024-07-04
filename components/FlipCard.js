import { motion } from "framer-motion";

const FlipCard = ({ value, heading }) => {
  // this will be used to animate the Flip Counter
  const digit1 = Math.floor(value / 10);
  const digit2 = value % 10;
  return (
    <div className="flex flex-col   justify-center items-center ">
      <div className="flex flex-row  items-center w-[95px]  lg:w-[14rem] ">
        <div className="lg:ml-4 ml-1 flex flex-col w-3/4 items-center justify-center bg-[#1c153b] border-y-2 border-[#363151] rounded-xl text-center">

          <p
            className="font-medium text-[2rem] lg:text-[4rem] w-[40%]  text-white "
          >
            {digit1}
          </p>

        </div>
        <div className="lg:mx-4 mx-1 w-3/4  bg-[#1c153b] flex flex-col  items-center  text-center justify-center border-y-2 border-[#363151] rounded-xl ">

          <p
            className="font-medium text-[2rem] lg:text-[4rem] w-[40%] text-white "
          >
            {digit2}
          </p>

        </div>
        {heading != "Seconds" ? <span className="text-4xl ">:</span> : <span></span>}
      </div>
      <p className="lg:text-xl py-6 text-lg font-medium text-white">{heading}</p>

    </div>


  );
}

export default FlipCard;
