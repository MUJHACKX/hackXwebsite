import React, { useState } from 'react';

const FAQSection = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "What is HackerEarth Campus Ambassador Program?",
      answer: "The HackerEarth Campus Ambassador Program is a platform for students to become representatives of HackerEarth at their universities. Ambassadors help promote coding culture and organize events."
    },
    {
      question: "Who can apply for the Campus Ambassador Program?",
      answer: "Any student currently enrolled in a college or university with a passion for coding and community building can apply for the Campus Ambassador Program."
    },
    {
      question: "What are the benefits of being a Campus Ambassador?",
      answer: "Benefits include gaining leadership experience, networking opportunities, access to exclusive HackerEarth events, and the chance to improve your coding skills."
    },
    {
      question: "How long does the Campus Ambassador Program last?",
      answer: "The Campus Ambassador Program typically lasts for one academic year, but ambassadors may reapply or be invited to continue based on their performance."
    },
    {
      question: "What are the responsibilities of a Campus Ambassador?",
      answer: "Responsibilities include promoting HackerEarth events, organizing coding workshops, engaging with the student community, and providing feedback to HackerEarth."
    }
  ];

  return (
    <div className="p-6 bg-gray-50 sm:p-12">
      <h2 className="mb-6 text-3xl font-bold text-center text-blue-600">Frequently Asked Questions</h2>
      <div className="w-full max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 bg-white rounded-lg shadow-md">
            <button
              onClick={() => toggle(index)}
              className="w-full px-4 py-4 text-left text-lg font-medium text-blue-700 transition-colors duration-200 ease-in-out bg-blue-100 rounded-t-lg hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {faq.question}
              <span className={`float-right transition-transform ${open === index ? 'rotate-180' : 'rotate-0'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </button>
            <div
              className={`px-4 py-4 overflow-hidden transition-all duration-300 ease-in-out bg-white rounded-b-lg ${open === index ? 'max-h-screen' : 'max-h-0'}`}
            >
              <p className={`text-gray-700 ${open === index ? 'block' : 'hidden'}`}>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
