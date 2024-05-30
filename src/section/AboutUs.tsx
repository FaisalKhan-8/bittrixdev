import React from 'react';
import { about } from '../../public/data/data';
const AboutUs = () => {
  return (
    <div id='about' className='h-screen flex items-center justify-center'>
      <div className='w-full h-full flex flex-col items-start justify-start gap-10 overflow-hidden p-10 '>
        <div className=' flex flex-col items-left justify-center gap-5 w-full'>
          <h1 className='text-xl'>02-About Us</h1>
          <h3 className='text-5xl   '>We Strive to Innovate</h3>
          <hr />
          <p className=' text-3xl text-text-color w-[35%] text-wrap font-light'>
            <span className='font-semibold text-black'>Solid Strategy</span>{' '}
            aligned withbusiness needs and robust data analysis are fundamental
            ingredients to extract actionable insights.
          </p>
        </div>
        <div className='w-full h-full flex items-center justify-between'>
          <div className='grid grid-cols-2 grid-rows-2 gap-3 h-full'>
            {about.map((curr, i) => (
              <div
                key={i}
                className='aboutItem  flex flex-col items-left justify-end  p-4'>
                <video autoPlay loop muted playsInline className='serviceVideo'>
                  <source src={curr.video} type='video/mp4' />
                </video>
                <h1 className=' text-primary-color text-3xl uppercase font-bold'>
                  {curr.title}
                </h1>
                <p className=' text-text-color text-xl text-wrap  w-full'>
                  {curr.description}
                </p>
              </div>
            ))}
          </div>
          <div className=' bg-black w-[600px] h-[600px] flex items-right justify-center rounded-full rotate-90'>
            <div className=' bg-white w-[500px] h-[500px] rounded-full flex items-right justify-center'>
              <div className=' bg-gray-500 w-[400px] h-[400px] rounded-full flex items-right justify-center '>
                <div className=' bg-black w-[300px] h-[300px] rounded-full flex items-center justify-center '></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
