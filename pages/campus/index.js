import React from 'react';

import Contact from "../../components/Campus/Contect.jsx"
import Footer from "../../components/Campus/Footer.jsx"
import ContactData from "../../components/Campus/Data/ContactData.js"
import Main from "../../components/Campus/Main.jsx"
import WhyApplySection from "../../components/Campus/WhyApplySection.jsx"
import Banner from '../../components/Campus/Banner.jsx';
import FAQSection from '../../components/Campus/FAQSection.jsx';
import Steps from '../../components/Campus/Steps.jsx';

const Campus = () => {
  return (
    <div className="bg-white">
      
      <div id="home">
        <Main />
      </div>
      <div id="about">
     
      </div>
      <div id="responsibilities">
        <WhyApplySection />
        <Steps />
        <div className='w-full h-auto bg-white'>
        <img src='hackx2.png'  className='w-full h-101'></img>
        </div>
        
      <Banner />
      <FAQSection />
      </div>
      <h3 className="text-black text-6xl font-bold text-center w-full mb-6 bg-white">Contact Us</h3>
      <div id="contact" className="flex flex-row justify-evenly flex-wrap md:flex-nowrap bg-white mb-7 py-8 rounded-lg ">
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
    </div>
  );
}

export default Campus;