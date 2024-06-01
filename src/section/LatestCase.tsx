import { HeroParallax } from '@/components/ui/latestCase-parallax';
import React from 'react';
import { products } from '../../public/data/data';

const LatestCase = () => {
  return (
    <div id='latestCase'><HeroParallax  products={products} /></div>
    
  );
};

export default LatestCase;









