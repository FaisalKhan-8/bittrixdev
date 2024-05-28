import React from 'react';
import phone1 from '../../public/assets/phone-01.webp';
import phone2 from '../../public/assets/phone-02.webp';
import Image from 'next/image';

const SmartDev = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='w-full h-full flex flex-col items-start justify-between p-10 relative'>
        <div className='flex flex-col items-left justify-center'>
          <h1 className=' text-text-color text-8xl'>{'{' + 'SMART' + '}'}</h1>
          <h1 className='text-text-color text-8xl'>DEVELOPMENT</h1>
        </div>
        <div className=' w-full flex items-center justify-center'>
          <h1 className=' text-text-color text-9xl uppercase'>
            back ground text
          </h1>
        </div>
        <div className='w-full flex items-center justify-between'>
          <p className='w-1/4 text-wrap text-text-color text-xl'>
            Making your business outstanding is a science. We take it (a)
            seriously and (b) creatively.
          </p>
          <div className='flex items-center justify-center gap-5'>
            <span className=' uppercase text-xl'>Check our portfolio</span>
            <span className=' uppercase text-xl text-text-color'>
              Get In Touch
            </span>
          </div>
        </div>
        <div className='flex items-center  justify-center absolute  top-[30%] left-[40%] '>
          <Image src={phone1} alt='phonn1' className='w-[300px] ' />
          <Image
            src={phone2}
            alt='phonn1'
            className='w-[300px] absolute left-[50%] top-[33%] '
          />
        </div>
      </div>
    </div>
  );
};

export default SmartDev;
