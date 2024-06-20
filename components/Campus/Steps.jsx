import React from 'react';

const Steps = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 sm:p-12">
      <h2 className="mb-6 text-3xl font-bold text-center text-blue-600">Campus Ambassador in 3 simple steps</h2>
      <div className="w-full max-w-md">
        <div className="mb-6 transition-transform transform hover:scale-105">
          <div className="flex items-center p-4 bg-white shadow-md rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 mr-4 text-2xl font-bold text-white bg-blue-600 rounded-full">1</div>
            <div>
              <p className="font-semibold text-black">Fill in the form with all your details.</p>
            </div>
          </div>
        </div>
        <div className="mb-6 transition-transform transform hover:scale-105">
          <div className="flex items-center p-4 bg-white shadow-md rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 mr-4 text-2xl font-bold text-white bg-blue-600 rounded-full">2</div>
            <div>
              <p className="font-semibold text-black">Once you receive an email from us, you are officially a MujHackX2.0 Campus Ambassador!</p>
            </div>
          </div>
        </div>
        <div className="transition-transform transform hover:scale-105">
          <div className="flex items-center p-4 bg-white shadow-md rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 mr-4 text-2xl font-bold text-white bg-blue-600 rounded-full">3</div>
            <div>
              <p className="font-semibold text-black">Get your referral code, start promoting MuJ HackX on your campus, and enjoy various perks!</p>
            </div>
          </div>
        </div>
      
   
      </div>
      
    </div>
  );
}

export default Steps;
