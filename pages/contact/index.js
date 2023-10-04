import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

function ContactForm() {
  const [state, handleSubmit] = useForm("mzblkeop");

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
          <h2 className="h2 text-center mb-12">
            Let's <span className="text-accent">connect.</span>
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
