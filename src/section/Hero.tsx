import { url } from 'inspector';
import React from 'react';
import { HiArrowLongDown } from 'react-icons/hi2';

const Hero = () => {
  return (
    <div className='h-screen flex items-center justify-center relative '>
      <div className='w-full h-full flex items-center justify-center overflow-hidden absolute top-0 '>
        <video autoPlay loop muted playsInline className='background-video '>
          <source src='/assets/videos/hero.mp4' type='video/mp4' />
        </video>
        <div className='absolute w-[90%] bottom-[10%] border h-[50%]'>
          <div className='flex items-center justify- justify-between p-4'>
            <div className='flex flex-col items-left justify-center'>
              <h1 className=' text-[6rem] uppercase font-light text-[#bcb8b1]'>
                WE CREATE Apps
              </h1>
              <div className='flex items-center justify-center gap-2'>
                <div className='bg-white p-5 rounded-full flex items-center justify-center'>
                  <HiArrowLongDown className=' text-3xl' />
                </div>
                <h1 className='text-[6rem]  text-[#bcb8b1] font-medium uppercase'>
                  Web for human
                </h1>
              </div>
              <h1 className='text-[5rem] font-medium text-[#bcb8b1] uppercase'>
                Not for{' '}
                <span className=' line-through font-light text-red-500'>
                  Robos
                </span>
              </h1>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
