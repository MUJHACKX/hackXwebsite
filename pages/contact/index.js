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

const FAQ = () => {
  const data = [
    {
      title: "How do I register ?",
      content: "REVEALED SOON",
    },
    {
      title: "How many team members do I need ?",
      content:
        "You can participate individually or in teams of 3 to 4 members.",
    },
    {
      title: "How much are the participation fees?",
      content: "REVEALED SOON",
    },
    {
      title: "Will the Hackathon be in person or online ?",
      content:
        "MUJHackX 2.0 will be conducted in complete offline/in-person mode.",
    },
    {
      title: "What is the venue for MUJHackX 2.0 ?",
      content:
        "Manipal University Jaipur, explore our beautiful campus while thinking about innovating some crazy thing.",
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
    <div className="bg-primary flex flex-col min-h-screen p-4 md:pb-64 lg:px-0 md:pt-24 pt-16">
      <div className="w-full h-full flex flex-col gap-24 px-4 pt-20 md:px-8 xl:px-20 2xl:px-40">
        <div className="flex flex-col justify-between items-start sm:items-center gap-12 md:gap-0 md:flex-row md:items-start">
          <div className="flex flex-col items-start gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={controls}>
              <TextAnimation text="Everything you need to know!" />
            </motion.div>
            <motion.p
              className="w-full text-[#C3C3C3] font-['Inter'] font-normal text-[1.25rem] sm:max-w-[32rem] lg:max-w-[40rem] xl:max-w-[50rem] 2xl:max-w-[55rem] md:text-[1rem] xl:text-[1.5rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Have questions, need assistance, or just want to connect? Feel
              free to reach out!
            </motion.p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-20">
          <div className="flex flex-col max-w-[448px]">
            <div className="text-white text-3xl md:text-4xl font-medium leading-[44px]">
              FAQs
            </div>
            <div>
              <span className="text-gray-200 text-lg font-normal leading-7">
                Have questions about the hackathon? Explore our FAQ below!&nbsp;
              </span>
              <span className="text-gray-200 text-lg font-normal leading-7">
                Need further assistance? Don't hesitate to reach out to our
                team.
              </span>
            </div>
          </div>
          <div className="max-w-[700px]">
            {data.map((item, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="py-4 md:p-8 !bg-primary">
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
        <div className="w-[80%] flex flex-row items-center self-center gap-10">
          <div className="flex flex-col items-start">
            <div className="text-3xl text-left p-4 font-bold inline-flex flex-row items-center gap-3"> <IoCall /> Call Us</div>
            <div className="flex flex-row px-4 gap-6">
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
          <div className="flex flex-col items-start">
            <div className="text-3xl text-left p-4 font-bold inline-flex flex-row items-center gap-3"><IoIosPin /> Address</div>
            <div className="flex flex-col px-4 gap-0.5">
              <div className="flex flex-col text-xl">
                Manipal University Jaipur, Jaipur-Ajmer Express Highway, Dehmi Kalan,
              </div>
              <div className="flex flex-col text-xl">
                Near GVK Toll Plaza, Jaipur, Rajasthan 303007
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
