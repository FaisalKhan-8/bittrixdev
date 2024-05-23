import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const sectionLinks = [
  { name: 'About Us', link: '/#about' },
  { name: 'Cases', link: '/#portfolio' },
  { name: 'Reviews', link: '/#testimonial' },
];

const Navbar = () => {
  return (
    <nav>
      <div className={` `}>
        <ul className=''>
          {sectionLinks.map(({ name, link }, index) => (
            <li
              key={name}
              className=''>
              <Link
                href={link}
                className=''>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
