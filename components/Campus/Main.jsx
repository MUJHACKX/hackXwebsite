import React from 'react';

const Main = () => {
  return (
    <div className='h-full w-full font-mono mt-16 mb-20 lg:mt-4 ' s>
      <div className='flex justify-center flex-col w-full items-start h-screen gap-24'>
        <div className='flex justify-center lg:flex-row flex-col  gap-10'>
          <h1 className='text-6xl lg:w-1/3 text-center'>About us</h1>
          <p className='w-50 lg:w-1/2 text-center transition-transform'>
            Our Campus Ambassador program is an incredible opportunity for 
            students to represent our College and help us spread the word about
            our mission. As a Campus Ambassador, you will gain valuable experience,
            enhance your leadership skills, and connect with like-minded individuals.

            You will be the face of our hackathon on your campus, organizing
            events, sharing our story, and promoting our values. This role is perfect
            for proactive, enthusiastic, and passionate students who want to make
            a difference.
          </p>
        </div>
        <div className='flex justify-center lg:flex-row flex-col gap-10 pt-10'>
          <h1 className='text-3xl lg:w-1/3 text-center'>Why choose our Campus Ambassador Program</h1>
          <p className='w-50 lg:w-1/2 text-center'>
            Becoming a Campus Ambassador offers a unique opportunity to develop
            your professional skills, network with industry leaders, and gain
            invaluable experience that will set you apart in the job market.

            You will also receive exclusive training and mentorship, have the chance
            to earn rewards and recognition, and be part of a dynamic and
            supportive community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
