import SideNav from '@/components/SideNav';
import { IoMdPlay } from 'react-icons/io';
import React from 'react';
import { HiArrowLongDown } from 'react-icons/hi2';
import Marquee from 'react-fast-marquee';

const Hero = () => {
  return (
    <>
      <div className='h-screen flex items-center justify-center relative '>
        <div className='w-full h-full flex items-center justify-center overflow-hidden absolute top-0 '>
          <video
           autoPlay loop muted playsInline
            className='background-video relative '>
            <source src='/assets/videos/hero.mp4' type='video/mp4' />
          </video>
          <div className='absolute w-[90%] bottom-[10%]  h-[60%] flex items-center justify-between'>
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
              <div className=' absolute bottom-0 right-0 z-10'>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className=' w-[400px] relative rounded-3xl '>
                  <source src='/assets/videos/hero2.mp4' type='video/mp4' />
                </video>
                <div className='w-[70px] h-[70px] cursor-pointer bg-white opacity-70 absolute z-20 rounded-full left-[-7%] top-[-10%] flex items-center justify-center '>
                  <IoMdPlay className='text-2xl  text-black ' />
                </div>
              </div>
            </div>
          </div>
          <div className='absolute right-10 top-[30%] z-10'>
            <SideNav />
          </div>
        </div>
      </div>
      <Marquee className='mt-5'>
        <h1 className='text-[10rem] font-semibold uppercase text-secondary-color'>
          I can be a React component, multiple React components, or just some
          text.
        </h1>
      </Marquee>
    </>
  );
};

export default Hero;
