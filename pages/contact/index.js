// import Circles from '/components/Circles';
// import {BsArrowRight} from 'react-icons/bs';
// import {motion} from 'framer-motion';
// const Contact = () => {
//   return <div className='h-full  bg-primary'>
//     {/* <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.877283914117!2d75.56265937558182!3d26.84385517668822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b8d67402d4eb863!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1694255447850!5m2!1sen!2sin"
//           allowFullScreen=""
//           loading="lazy"
//           referrerpolicy="no-referrer-when-downgrade"
//         ></iframe> */}
//     <div className='container mx-auto pt-40 text-center xl:text-left flex-items-center justify-center'>
//     <div className='flex flex-col w-full '>
//     <h2 className='h2 text-center mb-12'>Let's <span className='text-accent'>connect.</span></h2>
//     <form className='flex-1 flex flex-col gap-6 w-full mx-auto' action="">
//       <div className='flex gap-x-6 w-full'>
//         <input type="text" placeholder='name' className='input' />
//         <input type="text" placeholder='email' className='input' />
//       </div>
//       <input type="text" placeholder='subject' className='input' />
//       <textarea placeholder='message' className='textarea'></textarea>
//       <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-cente overflow-hidden hover:border-accenet group'>
//         <span className='group-hover:-translate-y-[120%] group-hover: opacity-1 transition-all duration-500'>
//          Let's Talk!

//         </span>
//       </button>
//     </form>
//     </div>
//     </div>
//    </div>
// };

// export default Contact;
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

function ContactForm() {
  const [state, handleSubmit] = useForm("mzblkkkp");

  if (state.succeeded) {
    return (
      <div className="text-green-500">
        <p>Message sent successfully!</p>
      </div>
    );
  }

  return (
    <form
      className="flex-1 flex flex-col gap-6 w-full mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-6">
        <div className="flex-1">
          <label htmlFor="name" className="text-white">

          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="input"
            placeholder=" name"
          />
        </div>
        <div className="flex-1"> {/* Email */}
          <label htmlFor="email" className="text-white">

          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="input"
            placeholder="Email Address"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
      </div>
      <textarea
        id="message"
        name="message"
        className="textarea"
        placeholder="Message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button
        type="submit"
        className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-cente overflow-hidden hover:border-accenet group"
        disabled={state.submitting}
      >
        <span className="group-hover:-translate-y-[120%] group-hover:opacity-1 transition-all duration-500">
          {state.submitting ? "Submitting..." : "Submit"}
        </span>
      </button>
    </form>
  );
}

const Contact = () => {
  return (
    <div className="h-full bg-primary">
      <div className="container mx-auto pt-40 text-center xl:text-left flex-items-center justify-center">
        <div className="flex flex-col w-full ">
          <h2 className="h2 text-center mb-12 font-bold bg-gradient-to-r ease-in-out via-purple-500 bg-clip-text text-transparent
            from-indigo-300 to-indigo-300 animate-text">
            Let's Connect.
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
     );
    };

    export default Contact;

