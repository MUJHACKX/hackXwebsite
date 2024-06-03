import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

const FacultyCard = ({ name, image, line1, line2, count, icon }) => {
  return (
    <div className={`flex flex-col items-center w-full md:w-[${(100/count).toFixed(0)}%]`}>
      <div
        className="transition duration-300 transform rounded-lg shadow-2xl hover:scale-105 hover:shadow-3xl">
        <Image
          className="object-cover rounded-lg"
          src={image}
          width={250}
          height={250}
          alt={name}
          quality={80}
        ></Image>
      </div>
      <div className="px-5 py-4 text-white text-center flex-grow">
        <h1 className="mb-4 text-xl 2xl:text-3xl font-bold text-white">{name}</h1>
        <h2 className="mb-2 md:text-lg lg:text-base text-white">{line1}</h2>
        <h3 className="mb-4 md:text-lg lg:text-base text-white">{line2}</h3>
      </div>
      <div className="flex justify-center mb-3  cursor-pointer">
           <a href={icon} target="_blank" rel="noopener noreferrer"><FaLinkedin  size="1.5em" className="ml-2 hover:text-blue-500" /></a>
      </div>
    </div>
  );
}

export default FacultyCard;
