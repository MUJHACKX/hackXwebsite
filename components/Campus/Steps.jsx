import React from 'react';
import ImageStepper from './ImageStepper.jsx'; // Adjust the path as necessary

const steps = [
  { label: 'Fill in the Google Form', completed: true },
  { label: 'You will receive E-Mail', completed: false },
  { label: 'Get your referral code', completed: false },
];

function Steps() {
  return (
    <div className="text-center bg-black text-white p-8 text-4xl" style={{backgroundColor: '#261B4B'}}>
      <div className="mb-8">
        <h2 className="text-4xl font-mono font-light">
          You are just 3 Steps away from becoming a part of this{' '}
          <span className="font-serif  inline-block border rounded-sm text-black bg-white px-2 py-1 font-bold">JOURNEY</span>
        </h2>
      </div>
      <ImageStepper className="font-mono m-10 items-center text-center justify-center flex" steps={steps} />
    </div>
  );
}

export default Steps;
