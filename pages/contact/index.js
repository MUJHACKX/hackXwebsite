import React, { useEffect } from "react";
import TextAnimation from "../../components/TextAnimation";
import { motion, useAnimation } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { IoCall } from "react-icons/io5";
import { IoIosPin } from "react-icons/io";
import Footer from "../../components/Footer";

const FAQ = () => {
  const data = [
    {
      title: "How do I register ?",
      content: "Click on the register now button on the nav menu of the website.",
    },
    {
      title: "How many team members do I need ?",
      content:
        "You can participate individually or in teams of 2 to 4 members.",
    },
    {
      title: "How much are the participation fees?",
      content: "Rs 699 for each participating team, be it 2 or 4 members.",
    },
    {
      title: "Will the Hackathon be in person or online ?",
      content:
        "MUJHackX 2.0 will be conducted in complete offline/in-person mode at Manipal University Jaipur",
    },
    {
      title: "What is the venue for MUJHackX 2.0 ?",
      content:
        "Manipal University Jaipur, Dahmi Kalan, Bagru P.O, Jaipur Ajmer Road 303007, Rajasthan, India",
    },
    {
      title: "What are the prerequisites to participate in this hackathon ?",
      content:
        "No prerequisites are required to participate in this hackathon. This event is open to participants of all skill levels.",
    },
    {
      title:
        "Can my friend join our team after we have already submitted the application for review ?",
      content:
        "Yes, your friend can join the team by submitting an individual application. Once both your friend's individual application and your team's application are accepted, you will be able to add your friend to the team.",
    },
  ];

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 },
    });
  }, [controls]);

  return (
    <div className="bg-primary flex flex-col min-h-screen p-4  lg:px-0 md:pt-24 pt-[150px] ">
      <div className="w-full h-full flex flex-col gap-24 px-4 pt-20 md:px-8 xl:px-20 2xl:px-40">
        <div className="flex flex-col items-center justify-center  gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={controls} className=" font-bold text-[1.8rem] md:text-[2.5rem] lg:text-[3.3rem] bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent
            from-indigo-300 to-indigo-300 animate-text">
            EVERYTHING YOU NEED TO KNOW
          </motion.div>
          <motion.p
            className="flex items-center justify-center md:text-[1.25rem] "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Have questions, need assistance, or just want to connect? Feel
            free to reach out!
          </motion.p>
        </div>
        <div className="flex flex-col lg:justify-around justify-center lg:items-start items-center  lg:flex-row gap-5 lg:gap-32">
          <div className="">
            <div className="flex flex-col max-w-[448px]">
              <div className=" text-3xl md:text-4xl pb-4 xl:pb-6 font-medium leading-[44px] bg-gradient-to-r ease-in-out from-indigo-500 via-purple-500 to-pink-500   text-transparent bg-clip-text">
                FAQs
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="text-gray-200 text-lg font-normal leading-7">
                  Have questions about the hackathon? Explore our FAQ below!&nbsp;
                </span>
                <span className="text-gray-200 text-lg font-normal leading-7">
                  Need further assistance? Don't hesitate to reach out to our
                  team.
                </span>
              </div>
            </div>

            <div className="max-w-[700px] pt-8">
              {data.map((item, index) => (
                <Accordion key={index} type="single" collapsible>
                  <AccordionItem value={`item-${index}`} className=" py-4 md:py-8 !bg-primary">
                    <AccordionTrigger
                      className="max-w-[592px] text-white text-2xl
                    font-medium leading-7"
                    >
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent
                      className="max-w-[592px] text-gray-200 text-lg
                      font-normal font-['Inter'] leading-7"
                    >
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
          <div className="lg:pt-16">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8772831810866!2d75.5652343!3d26.8438552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b8d67402d4eb863!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1717828681903!5m2!1sen!2sin"
              width="600"
              height="450"
              className="rounded-2xl xl:w-[600px] lg:w-[500px] sm:w-[600px] w-[350px] h-[500px] lg:h-[800px] xl:h-[900px]"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <hr className="border-0 h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent my-6" />        <div className="w-full md:w-[90%] flex flex-col md:flex-row items-start md:items-center self-center gap-10">
          <div className="flex flex-col items-start w-[50%] md:w-[65%]">
            <div className="text-3xl text-left p-4 font-bold inline-flex flex-row items-center gap-3"> <IoCall /> Call Us</div>
            <div className="flex flex-col xl:flex-row px-4 gap-6">
              <div className="flex flex-col text-xl">
                <div>+91 95699 13103</div>
                <div>Rishi Joshi</div>
              </div>
              <div className="flex flex-col text-xl">
                <div>+91 82404 73087</div>
                <div>Shristi Krishna</div>
              </div>
              <div className="flex flex-col text-xl">
                <div>+91 95608 87855</div>
                <div>Pulkit Gupta</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start w-[50%] md:w-[35%]">
            <div className="text-3xl text-left p-4 font-bold inline-flex flex-row items-center gap-3 "><IoIosPin /> Address</div>
            <div className="flex flex-col px-4 gap-0.5 ">
              Manipal University Jaipur, Jaipur-Ajmer Express Highway, Dehmi Kalan, Near GVK Toll Plaza, Jaipur, Rajasthan 303007
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default FAQ;
