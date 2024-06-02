import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Logo from '@/../../public/assets/Logo.jpeg';
import Hamburger from '@/components/Hamburger';

const sectionLinks = [
  { name: 'About Us', link: '/#about' },
  { name: 'Cases', link: '/#portfolio' },
  { name: 'Reviews', link: '/#testimonial' },
];

const Navbar = () => {
  return (
    <nav className=' w-full flex items-center justify-center'>
      <div className='w-[90%] grid md:grid-cols-3 grid-cols-2 mt-36 px-4 z-10 absolute'>
        <div className='flex items-center justify-start '>
          <Image
            src={Logo}
            alt='logo'
            className='w-[50px] rounded-full border border-primary-bg-color animate-pulse '
          />
        </div>

        <ul className=' bg-primary-color md:flex hidden items-center justify-evenly border rounded-3xl p-2 w-full'>
          {sectionLinks.map(({ name, link }, index) => (
            <li
              key={name}
              className='text-text-black font-semibold'>
              <Link
                href={link}
                className=''>
                {name}
              </Link>
            </li>
          ))}
          <li className='text-text-black font-semibold'>Contact Us</li>
        </ul>

        <div className='flex items-center justify-end gap-2  '>
          <span className='border p-2 rounded-full bg-primary-color text-gray-500'>
            Become a Client
          </span>
         
          <Hamburger />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
