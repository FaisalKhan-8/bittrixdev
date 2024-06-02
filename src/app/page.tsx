'use client';

import Footer from '@/section/Footer';
import Hero from '@/section/Hero';
import Navbar from '@/section/Navbar';
import Loader from '@/components/Loader';
import { useState } from 'react';
import Service from '@/section/Service';
import AboutUs from '@/section/AboutUs';
import SmartDev from '@/section/SmartDev';
import HoldingPhone from '@/section/HoldingPhone';
import Portfolio from '@/section/Portfolio';
import LatestCase from '@/section/LatestCase';
import Testimonial from '@/section/Testimonial';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };
  return (
    <div className=' overflow-hidden'>
      {showContent && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Service />
            <AboutUs />
            <SmartDev />
            {/* <HoldingPhone /> */}
            <Portfolio />
            <LatestCase />
            <Testimonial />
          </main>
          <Footer />
        </>
      )}
      <Loader
        isLoading={isLoading}
        setIsLoading={handleLoaderLoaded}
      />
    </div>
  );
}
