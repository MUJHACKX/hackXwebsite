import Image from "next/image"
import { fadeIn } from '../../variants'
import {motion} from 'framer-motion'
import  SwipeCarousel  from "../../components/carousel"

const gallery = ()=>{
    return <div className='font bg-[#131424] h-auto '>
                <div className="flex justify-center  ">
                    <h2 className="h1 text-center mb-12 text-accent pt-[20vh] sm:pb-[30px]">GALLERY</h2>
                </div>
            <div className=" flex items-center justify-center m-5  ">
                <Image src={'/herogallery.jpeg'} width={1000} height={1000} className="  rounded-lg hover:shadow-xl" ></Image> 
            </div>
            <motion.h3 
        variants={fadeIn('up', 0.6)}
        initial="hidden" 
        animate="show"
        exit="hidden"
        className="h3 text-center text-[#d1d3e3] mt-[30px] sm:mb-[200px] mb-[150px]  "> 
          Team HackX
        </motion.h3>
            <motion.h3 
        variants={fadeIn('down', 0.4)}
        initial="hidden" 
        animate="show"
        exit="hidden"
        className="h3 text-center sm:mt-16 mt-12 text-accent "> 
          ACHIVERS
        </motion.h3>


    {//first row
    }
        <div className=" flex justify-center  items-center ap-10 m-16 mt-10">
        <div className="border p-1 bg-accent bg-opacity-10 border-accent font-mono rounded-xl">
                <motion.div
                  className="relative overflow-hidden transition duration-300 transform rounded-lg shadow-2xl hover:scale-105 hover:shadow-3xl max-w-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    className="object-cover rounded-lg w-100 h-100"
                    src={"/winner.jpeg"}
                    width={1000}
                    height={1000}
                    alt={""}
                  ></Image>
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-accent bg-opacity-100 opacity-0 hover:opacity-100">
                    <p className="mb-4 text-3xl font-bold text-primary">{"Winners"}</p>
                    
                  </div>
                </motion.div>
              </div>
        </div>
        {
            //second row
        }
        <div className="  flex justify-center items-center flex-col md:justify-around  md:flex-row gap-10 m-16 ">
            {
                //second image
            }
        <div className="  border p-1 bg-accent bg-opacity-10 border-accent font-mono rounded-xl  ">
        <motion.div
                  className="relative overflow-hidden transition duration-300 transform rounded-lg shadow-2xl hover:scale-105 hover:shadow-3xl max-w-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    className="object-cover rounded-lg w-100 h-100"
                    src={"/runnerup.jpeg"}
                    width={1000}
                    height={1000}
                    alt={""}
                  ></Image>
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-accent bg-opacity-100 opacity-0 hover:opacity-100">
                    <p className="mb-4 text-3xl font-bold text-primary">{"Runner Ups"}</p>
                    
                  </div>
                </motion.div>
                </div>
                {
                    //third image
                }
                <div className="mt-10 md:mt-0">
                <div className="  border p-1 bg-accent bg-opacity-10 border-accent font-mono rounded-xl">
                <motion.div
                  className="relative overflow-hidden transition duration-300 transform rounded-lg shadow-2xl hover:scale-105 hover:shadow-3xl max-w-md "
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    className="object-cover rounded-lg w-100 h-100"
                    src={"/third.png"}
                    width={1000}
                    height={1000}
                    alt={""}
                  ></Image>
                  <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-accent bg-opacity-100 opacity-0 hover:opacity-100">
                    <p className="mb-4 text-3xl font-bold text-primary">{"Third Place"}</p>
                  
                  </div>
                </motion.div>
                </div>
                </div>
              
        </div>
        
        <SwipeCarousel index1={"1%"} index2={"-95%"} type={"Promotion Highlights"} imgArr={[{
      url: "/promotion1.jpeg",
      title: "Title 1",
      id: 1,
    },{
      url: "/promotion2.jpeg",
      title: "Title 2",
      id: 2,
    },{
      url: "/promotion3.jpeg",
      title: "Title 3",
      id: 3,
    },{
      url: "/promotion4.jpeg",
      title: "Title 4",
      id: 4,
    },{
      url: "/promotion5.jpeg",
      title: "Title 5",
      id: 5,
    },{
      url: "/promotion6.jpeg",
      title: "Title 6",
      id: 6,
    }]}></SwipeCarousel>
      <SwipeCarousel index1={"-86%"} index2={"10%"} type={"Glimpse Of Hackathon"}imgArr={[{
      url: "/glimpse7.jpeg",
      title: "Title 1",
      id: 1,
    },{
      url: "/glimpse6.JPG",
      title: "Title 2",
      id: 2,
    },{
      url: "/glimpse5.jpeg",
      title: "Title 3",
      id: 3,
    },{
      url: "/glimpse4.jpeg",
      title: "Title 4",
      id: 4,
    },{
      url: "/glimpse3.jpeg",
      title: "Title 5",
      id: 5,
    },{
      url: "/glimpse2.JPG",
      title: "Title 6",
      id: 6,
    },{
      url: "/glimpse1.jpeg",
      title: "Title 7",
      id: 7,
    }]}></SwipeCarousel>  
    <SwipeCarousel index1={"1%"} index2={"-95%"} type={"Official Awards"} imgArr={[{
      url: "/awards1.jpeg",
      title: "Title 1",
      id: 1,
    },{
      url: "/awards2.jpeg",
      title: "Title 2",
      id: 2,
    },{
      url: "/awards3.jpeg",
      title: "Title 3",
      id: 3,
    },{
      url: "/awards4.jpeg",
      title: "Title 4",
      id: 4,
    },{
      url: "/awards5.jpeg",
      title: "Title 5",
      id: 5,
    },{
      url: "/awards6.jpeg",
      title: "Title 6",
      id: 6,
    },{
      url: "/awards7.png",
      title: "Title 7",
      id: 7,
    },{
      url: "/awards8.jpeg",
      title: "Title 8",
      id: 8,
    }]}></SwipeCarousel>
    
    <SwipeCarousel index1={"-86%"} index2={"10%"} type={"Media Coverage"}imgArr={[{
      url: "/coverage1.png",
      title: "Title 1",
      id: 1,
    },{
      url: "/coverage2.png",
      title: "Title 2",
      id: 2,
    },{
      url: "/coverage3.png",
      title: "Title 3",
      id: 3,
    },{
      url: "/coverage4.png",
      title: "Title 4",
      id: 4,
    },{
      url: "/coverage5.png",
      title: "Title 5",
      id: 5,
    },{
      url: "/coverage6.png",
      title: "Title 6",
      id: 6,
    }]}></SwipeCarousel>
    </div>
}

export default gallery