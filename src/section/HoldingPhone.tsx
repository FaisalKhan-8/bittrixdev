import React from 'react';
import phoneHold from '../../public/assets/holdingphone.png';
import Image from 'next/image';
import { Vortex } from '@/components/ui/vortex';
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from '../components/ui/text-reveal-card';
const HoldingPhone = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center overflow-hidden'>
      <Vortex
        backgroundColor='black'
        className=' w-full  h-full flex items-center justify-center'>
        <TextRevealCard
          text='You know the business'
          revealText='I know the chemistry '>
          <TextRevealCardTitle>
            Sometimes, you just need to see it.
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            This is a text reveal card. Hover over the card to reveal the hidden
            text.
          </TextRevealCardDescription>
        </TextRevealCard>
      </Vortex>
    </div>
  );
};

export default HoldingPhone;
