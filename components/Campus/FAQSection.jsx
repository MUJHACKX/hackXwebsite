import React, { useState } from 'react';

const FAQSection = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "What is MujHackx Campus Ambassador Program?",
      answer: "The MujHackx Campus Ambassador Program is a platform for students to become representatives of MujHackx at their universities. Ambassadors help promote coding culture and organize events."
    },
    {
      question: "Who can apply for the Campus Ambassador Program?",
      answer: "Any student currently enrolled in a college or university with a passion for coding and community building can apply for the Campus Ambassador Program."
    },
    {
      question: "What are the benefits of being a Campus Ambassador?",
      answer: "Benefits include gaining leadership experience, networking opportunities, access to exclusive MujHackx events, and the chance to improve your coding skills."
    },
    {
      question: "How long does the Campus Ambassador Program last?",
      answer: "The Campus Ambassador Program typically lasts for one academic year, but ambassadors may reapply or be invited to continue based on their performance."
    },
    {
      question: "What are the responsibilities of a Campus Ambassador?",
      answer: "Responsibilities include promoting MujHackx events, organizing coding workshops, engaging with the student community, and providing feedback to MujHackx."
    }
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h6 className="text-lg text-indigo-600 font-medium text-center mb-2">
            FAQs
          </h6>
          <h2 className="text-4xl font-manrope text-center font-bold leading-[3.25rem]">
            Frequently asked questions
          </h2>
        </div>

        <div className="accordion-group" data-accordion="default-accordion">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl accordion-active:bg-indigo-50"
              id={`basic-heading-${index}`}
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between leading-8 w-full transition duration-500 text-left hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                aria-controls={`basic-collapse-${index}`}
                onClick={() => toggle(index)}
              >
                <h5>{faq.question}</h5>
                <svg
                  className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 ${
                    open === index ? 'rotate-180' : ''
                  }`}
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div
                id={`basic-collapse-${index}`}
                className={`accordion-content w-full px-0 overflow-hidden transition-max-height duration-500 ${
                  open === index ? 'max-h-96' : 'max-h-0'
                }`}
                aria-labelledby={`basic-heading-${index}`}
                style={{ maxHeight: open === index ? '250px' : '0px' }}
              >
                <p className="text-base  leading-6">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
