import React from 'react';
import { HiArrowLongDown } from 'react-icons/hi2';

const Hero = () => {
  return (
    <div className='h-screen flex items-center justify-center relative '>
      <div className='w-full h-full flex items-center justify-center overflow-hidden absolute top-0 '>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='background-video '>
          <source
            src='/assets/videos/hero.mp4'
            type='video/mp4'
          />
        </video>
        <div className='absolute w-[90%] bottom-[10%] border h-[60%]'>
          <div className='flex items-center justify- justify-between p-4'>
            <div className='flex flex-col items-left justify-center'>
              <h1 className=' text-[5rem] uppercase font-light text-primary-color'>
                WE CREATE Apps
              </h1>
              <div className='flex items-center justify-center gap-2'>
                <div className='bg-white p-5 rounded-full flex items-center justify-center'>
                  <HiArrowLongDown className=' text-3xl' />
                </div>
                <h1 className='text-[6rem]   text-primary-color font-medium uppercase'>
                  Web for human
                </h1>
              </div>
              <h1 className='text-[5rem] font-medium text-primary-color uppercase'>
                Not for{' '}
                <span className=' line-through font-light text-red-500'>
                  Robots
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
