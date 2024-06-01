import React from 'react';
import { portfolio } from '../../public/data/data';
import Link from 'next/link';
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card';
import {BentoGridSecondDemo} from '../components/PortfolioSmallCard'

const Portfolio = () => {
  return (
    <div id='portfolio' className='h-full flex items-center justify-center'>
      <div className='w-full h-full flex flex-col items-start justify-start gap-5  p-10 '>
        <div className=' flex flex-col items-left justify-center gap-5 w-full'>
          <h1 className='text-xl'>03 — Our Portfolio </h1>
          <h3 className='text-5xl'>We don't do cookie cutter solutions</h3>
          <p className=' text-3xl text-text-color w-[35%] text-wrap font-light'>
            Our user-centered design encourages productivity and boosts revenue.
          </p>
        </div>
        <div className='w-full h-full flex items-center justify-center'>
          <div className=' h-full gap-10 grid md:grid-cols-2  sm:grid-cols-1'>
            {portfolio.map((curr, i) => i <=1 && (
              <CardContainer className='inter-var'>
                <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border  '>
                  <CardItem
                    translateZ='50'
                    className='text-xl font-bold text-neutral-600 dark:text-white'>
                    {curr.title}
                  </CardItem>
                  <CardItem
                    as='p'
                    translateZ='60'
                    className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                    {curr.description}
                  </CardItem>
                  <CardItem translateZ='100' className='w-full mt-4'>
                    <video autoPlay loop muted playsInline>
                      <source src={curr.video} type='video/mp4' />
                    </video>
                  </CardItem>
                  <div className='flex justify-between items-center mt-20'>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href='https://twitter.com/mannupaaji'
                      target='__blank'
                      className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white'>
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as='button'
                      className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'>
                      GitHub
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
        <div className='w-full h-full flex items-center justify-center'>
          <BentoGridSecondDemo />
          </div>
      </div>
    </div>
  );
};

export default Portfolio;
