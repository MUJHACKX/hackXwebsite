import Image from "next/image";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import MasonryCarousel from "../../components/carousel";
const gallery = () => {
  return (
    <div className="font bg-[#131424] h-auto ">
      <div className="flex justify-center  ">
        <h2 className="h1 text-center mb-12 text-accent pt-[20vh] sm:pb-[30px]">
          GALLERY
        </h2>
      </div>
      <div className=" flex items-center justify-center m-5  ">
        <Image
          src={"/herogallery.jpeg"}
          width={1000}
          height={1000}
          priority="true"
          className="  rounded-lg hover:shadow-xl"
        ></Image>
      </div>

      <motion.h3
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="h3 text-center sm:mt-16 mt-12 text-accent "
      >
        WINNERS
      </motion.h3>

      {
        //first row
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
              <p className="mb-4 text-3xl font-bold text-primary">
                {"Winners"}
              </p>
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
              <p className="mb-4 text-3xl font-bold text-primary">
                {"Runner Ups"}
              </p>
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
                <p className="mb-4 text-3xl font-bold text-primary">
                  {"Third Place"}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <MasonryCarousel
        type={"Promotion Highlights"}
        images={[
          {
            imageUrl: "/promotion1.jpeg",
            title: "Title 1",
            id: 0,
          },
          {
            imageUrl: "/promotion2.jpeg",
            title: "Title 2",
            id: 1,
          },
          {
            imageUrl: "/promotion3.jpeg",
            title: "Title 3",
            id: 2,
          },
          {
            imageUrl: "/promotion4.jpeg",
            title: "Title 4",
            id: 3,
          },
          {
            imageUrl: "/promotion5.jpeg",
            title: "Title 5",
            id: 4,
          },
          {
            imageUrl: "/promotion6.jpeg",
            title: "Title 6",
            id: 5,
          },
        ]}
      ></MasonryCarousel>

      <MasonryCarousel
        type={"Glimpse Of Hackathon"}
        images={[
          {
            imageUrl: "/glimpse1.JPG",
            title: "Title 1",
            id: 0,
          },
          {
            imageUrl: "/glimpse2.JPG",
            title: "Title 2",
            id: 1,
          },
          {
            imageUrl: "/glimpse3.jpeg",
            title: "Title 3",
            id: 2,
          },
          {
            imageUrl: "/glimpse4.jpeg",
            title: "Title 4",
            id: 3,
          },
          {
            imageUrl: "/glimpse5.jpeg",
            title: "Title 5",
            id: 4,
          },
          {
            imageUrl: "/glimpse6.jpeg",
            title: "Title 6",
            id: 5,
          },
          {
            imageUrl: "/glimpse7.jpeg",
            title: "Title 7",
            id: 6,
          },
        ]}
      ></MasonryCarousel>
      <MasonryCarousel
        type={"Official Awards"}
        images={[
          {
            imageUrl: "/awards1.jpeg",
            title: "Title 1",
            id: 0,
          },
          {
            imageUrl: "/awards8.jpeg",
            title: "Title 2",
            id: 1,
          },
          {
            imageUrl: "/awards3.jpeg",
            title: "Title 3",
            id: 2,
          },
          {
            imageUrl: "/awards4.jpeg",
            title: "Title 4",
            id: 3,
          },
          {
            imageUrl: "/awards2.jpeg",
            title: "Title 5",
            id: 4,
          },
          {
            imageUrl: "/awards6.jpeg",
            title: "Title 6",
            id: 5,
          },
          {
            imageUrl: "/awards7.jpeg",
            title: "Title 7",
            id: 6,
          },
          {
            imageUrl: "/awards5.jpeg",
            title: "Title 8",
            id: 7,
          },
          {
            imageUrl: "/awards9.jpeg",
            title: "Title 9",
            id: 8,
          },
        ]}
      ></MasonryCarousel>

      <MasonryCarousel
        type={"Media Coverage"}
        images={[
          {
            imageUrl: "/coverage1.png",
            title: "Title 1",
            id: 0,
          },
          {
            imageUrl: "/coverage2.png",
            title: "Title 2",
            id: 1,
          },
          {
            imageUrl: "/coverage3.png",
            title: "Title 3",
            id: 2,
          },
          {
            imageUrl: "/coverage4.png",
            title: "Title 4",
            id: 3,
          },
          {
            imageUrl: "/coverage5.png",
            title: "Title 5",
            id: 4,
          },
          {
            imageUrl: "/coverage6.png",
            title: "Title 6",
            id: 5,
          },
        ]}
      ></MasonryCarousel>
    </div>
  );
};
export default gallery;
