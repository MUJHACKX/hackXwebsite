import React from 'react'

export default function Cards() {
  return (
    <div className='flex justify-center w-full mt-6'>
    <div className='grid grid-rows-3 grid-cols-2  gap-10 w-1/2  sm:flex sm:justify-center sm:gap-10'>
    <img src="001.png" alt="sd 2" className="w-20 h-auto rounded-lg lg:w-32 transition-transform duration-300 hover:scale-110" />
    <img src="002.png" alt="sdd 2" className="w-20 h-auto rounded-lg lg:w-32 transition-transform duration-300 hover:scale-110" />
    <img src="003.png" alt="sddd 2" className="w-20 h-auto rounded-lg lg:w-32 transition-transform duration-300 hover:scale-110" />
    <img src="004.png" alt="sdddd 2" className="w-20 h-auto rounded-lg lg:w-32 transition-transform duration-300 hover:scale-110" />
    <img src="005.png" alt="sddddd 2" className="w-20 h-auto rounded-lg lg:w-32 transition-transform duration-300 hover:scale-110" />
    <img src="006.png" alt="sddddddd 2" className="w-20 h-auto rounded-lg lg:w-32 transition-transform duration-300 hover:scale-110" />
    {/* Apply Tailwind CSS classes for the last image */}
    <img src="007.png" alt="sdddddddd 2" className="w-20 h-auto rounded-lg lg:w-32 col-span-2 justify-self-center  transition-transform duration-300 hover:scale-110" />
  </div>
  </div>
  )
}