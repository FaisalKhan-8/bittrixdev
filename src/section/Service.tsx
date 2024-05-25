import React from 'react';
import {services} from '../../public/data/data';

const Service = () => {
  return (
    <div id='services' className='h-screen flex items-center justify-center'>
      <div className='w-full h-full flex flex-col items-center justify-start gap-10 overflow-hidden p-10'>
        <div className=' flex flex-col items-left justify-center gap-5'>
          <h3 className='text-xl'>01-Our Services</h3>
          <p className='text-5xl text-wrap w-3/4 text-text-color'>
            As a tight-knit team of experts, we create memorable and emotional
            websites, digital experiences, and native apps.
          </p>
        </div>
        <div className='w-full flex  items-left justify-center gap-5'>
          {services.map((curr) => (
            <div className='serviceItem flex flex-col items-left justify-end gap-5 p-4'>
              <video autoPlay loop muted playsInline className='serviceVideo'>
                <source src={curr.video} type='video/mp4' />
              </video>
              <h1 className=' text-primary-color text-3xl uppercase font-bold'>
                {curr.title}
              </h1>
              <p className=' text-text-color text-xl text-wrap h-36 w-full'>
                {curr.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
