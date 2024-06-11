import React from 'react';
import About from "../../components/Campus/About.jsx"
import Contact from "../../components/Campus/Contect.jsx"
import Footer from "../../components/Campus/Footer.jsx"
import ContactData from "../../components/Campus/Data/ContactData.js"
import Main from "../../components/Campus/Main.jsx"
import WhyApplySection from "../../components/Campus/WhyApplySection.jsx"

const Campus = () => {
  return (
    <>
   
      <div id="home">
        <Main />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="responsibilities">
        <WhyApplySection />
      </div>
      <div id="contact" className="flex flex-row justify-evenly flex-wrap md:flex-nowrap bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-7 py-8 rounded-lg">
        {ContactData.map((contact, index) => (
          <Contact
            key={index}
            image={contact.image}
            name={contact.name}
            contact={contact.contact}
            socialIcons={Object.entries(contact.socialLinks).map(([name, url]) => ({ name, url }))}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Campus;