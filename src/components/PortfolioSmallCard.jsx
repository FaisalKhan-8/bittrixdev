import { cn } from '@/utils/cn';
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";

import { portfolio } from '../../public/data/data';


export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-full mx-auto md:auto-rows-[28rem]">
      {portfolio.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          bg={item.video}
        />
      ))}
    </BentoGrid>
  );
}

