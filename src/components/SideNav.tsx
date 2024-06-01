import React from 'react';
import Link from 'next/link';
// its use up side on hero section
const SideNav = () => {
  const sectionLinks = [
    { name: 'Home', link: '/' },
    { name: 'Our Services', link: '/#services' },
    { name: 'About Us', link: '/#about' },
    { name: 'Portfolio', link: '/#latestCase' },
    { name: 'Reviews', link: '/#testimonial' },
    { name: 'Contact Us', link: '/#contact' },
  ];
  return (
    <nav className='w-[200px]   flex items-center justify-end'>
      <ul className=' flex flex-col items-right justify-center text-right gap-5 '>
        {sectionLinks.map(({ name, link }, index) => (
          <li key={name} className='text-slate-400 text-xl font-semibold'>
            <Link href={link} className=''>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
