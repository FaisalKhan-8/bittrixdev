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
    <nav>
      <div className='w-full grid grid-cols-3 mt-10 bg-primary-color px-4'>
        <div className='flex items-center justify-start'>
          <Image src={Logo} alt='logo' className='w-[50px] rounded-full' />
        </div>

        <ul className='flex items-center justify-evenly border rounded-3xl p-2 w-full'>
          {sectionLinks.map(({ name, link }, index) => (
            <li key={name} className='text-text-black font-semibold'>
              <Link href={link} className=''>
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <div className='flex items-center justify-end gap-2'>
          <span className='border p-2 rounded-full'>Become a Client</span>
          <button className='px-4 py-2 border border-secondary-color text-secondary-color rounded-lg'>
            EN
          </button>
          <Hamburger />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
