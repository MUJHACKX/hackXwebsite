import React,{useState} from 'react';
import Footer from "../../components/LandingPage/Footer.jsx"
import Main from "../../components/Campus/Main.jsx"
import Become from '../../components/Campus/Become.jsx';
import Carousels from '../../components/Campus\/Carousels.jsx';
import Banner from '../../components/Campus/Banner.jsx';
import Steps from '../../components/Campus/Steps.jsx';
const Campus = () => {


  return (
    <div className='w-full font-poppins' style={{ backgroundColor: '#000' }}>
      <Banner/>
      <Main/>
     <Carousels/>
     <Steps/>
      <Become/>
      <Footer/>
    </div>
  );
}

export default Campus;