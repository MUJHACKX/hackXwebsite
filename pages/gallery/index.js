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
           
        <SwipeCarousel index1={"1%"} index2={"-95%"} type={"Promotion Highlights"} count={2000} images={[{
      imageUrl: "/promotion1.jpg",
      title: "Title 1",
      id: 0,
    },{
      imageUrl: "/promotion2.jpg",
      title: "Title 2",
      id: 1,
    },{
      imageUrl: "/promotion3.jpg",
      title: "Title 3",
      id: 2,
    },{
      imageUrl: "/promotion4.jpg",
      title: "Title 4",
      id: 3,
    },{
      imageUrl: "/promotion5.jpg",
      title: "Title 5",
      id: 4,
    },{
      imageUrl: "/promotion6.jpg",
      title: "Title 6",
      id: 5,
    }]}></SwipeCarousel>
      <SwipeCarousel index1={"-86%"} index2={"10%"} type={"Glimpse Of Hackathon"}  count={3000} images={[{
      imageUrl: "/glimpse7.jpg",
      title: "Title 1",
      id: 0,
    },{
      imageUrl: "/glimpse6.jpg",
      title: "Title 2",
      id: 1,
    },{
      imageUrl: "/glimpse5.jpg",
      title: "Title 3",
      id: 2,
    },{
      imageUrl: "/glimpse4.jpg",
      title: "Title 4",
      id: 3,
    },{
      imageUrl: "/glimpse3.jpg",
      title: "Title 5",
      id: 4,
    },{
      imageUrl: "/glimpse2.jpg",
      title: "Title 6",
      id: 5,
    },{
      imageUrl: "/glimpse1.jpg",
      title: "Title 7",
      id: 6,
    }]}></SwipeCarousel>  
    <SwipeCarousel index1={"1%"} index2={"-95%"} type={"Official Awards"} count={2000} images={[{
      imageUrl: "/awards1.jpg",
      title: "Title 1",
      id: 0,
    },{
      imageUrl: "/awards2.jpg",
      title: "Title 2",
      id: 1,
    },{
      imageUrl: "/awards3.jpg",
      title: "Title 3",
      id: 2,
    },{
      imageUrl: "/awards4.jpg",
      title: "Title 4",
      id: 3,
    },{
      imageUrl: "/awards5.jpg",
      title: "Title 5",
      id: 4,
    },{
      imageUrl: "/awards6.jpg",
      title: "Title 6",
      id: 5,
    },{
      imageUrl: "/awards7.jpg",
      title: "Title 7",
      id: 6,
    },{
      imageUrl: "/awards8.jpg",
      title: "Title 8",
      id: 7,
    }]}></SwipeCarousel>
    
    <SwipeCarousel index1={"-86%"} index2={"10%"} type={"Media Coverage"} count={3000} images={[{
      imageUrl: "/coverage1.jpg",
      title: "Title 1",
      id: 0,
    },{
      imageUrl: "/coverage2.jpg",
      title: "Title 2",
      id: 1,
    },{
      imageUrl: "/coverage3.jpg",
      title: "Title 3",
      id: 2,
    },{
      imageUrl: "/coverage4.jpg",
      title: "Title 4",
      id: 3,
    },{
      imageUrl: "/coverage5.jpg",
      title: "Title 5",
      id: 4,
    },{
      imageUrl: "/coverage6.jpg",
      title: "Title 6",
      id: 5,
    }]}></SwipeCarousel>

    </div>
} 
export default gallery