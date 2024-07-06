
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import Count from './Count';
import Blink from './Blink';
export default function Heading() {
   
    return (
    <div>
<section className="relative bg-cover bg-center h-full flex flex-col pt-40" style={{ backgroundImage: "url('/bg.png')", backgroundSize: 'cover' }}>
<div className=" inset-0 bg-black bg-opacity-50 "></div>
      <div className="relative z-10 flex items-center justify-center  h-full gap-7">
        <div className="text-center px-4 sm:px-6 lg:px-8 w-full lg:w-1/2 gap-6 ">
        <p className="hidden text-base w-full text-white sm:text-xl lg:text-lg mb-8 lg:flex justify-center gap-2 glowing-effect">
    <span className='pt-1 pl-7'><RiMoneyRupeeCircleLine /></span> Win from the Biggest Prize Pool of ₹5,00,000/-
</p>
<Blink/>
<p className='text-2xl text-white mb-7 w-full '>Join the ultimate tech showdown: a hackathon where your ideas ignite, your code transforms, and your innovations shine!</p>
         
         
<a class="mb-7 bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-2 px-4 rounded-lg transition duration-300 mt-6 mb-4 hover:bg-blue-800 transform hover:scale-105

"
       href="https://forms.gle/WgQjJWdB7bgGH6fw5"
       role="button">Apply Now</a>
   <p className='text-2xl text-white mt-6'> Registrations open till 14th August, 2024 11:59 PM </p>
   
   <div>

   </div>
        </div>
         </div>
         <div className="flex items-center justify-center w-full mt-6 gap-5">
        <p className='text-white'>Powered By</p>
        <img className='w-20 h-10 bg-white rounded-lg p-2' src="/sponsor-6.png" alt="logo" />
</div>
<Count/>
      </section>

    </div>


  
  )
}
