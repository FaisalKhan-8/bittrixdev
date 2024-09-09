import Image from "next/image";
import React from "react";
import Logo from "@/../../public/assets/Logo.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

export const ServiceData = [
  {
    title: "Mobile development",
    link: "#",
  },
  {
    title: "Web development",
    link: "#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Development",
    link: "#",
  },
  {
    title: "Blog",
    link: "#",
  },
  {
    title: "Reviews",
    link: "/#testimonial",
  },
];

const Footer = () => {
  return (
    <div className="bg-[#1a202c] text-white py-10 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-5 lg:gap-10">
          <div className="flex items-center justify-start">
            <div className=" w-[100px] h-[100px]">
              <div className=" w-[100px] h-[100px]">
                <Image
                  src={Logo}
                  alt="logo"
                  className="rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110"
                  style={{
                    filter:
                      "invert(42%) sepia(77%) saturate(2121%) hue-rotate(341deg) brightness(101%) contrast(101%)",
                  }}
                />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We would love to hear from you.
          </h1>
          <div className="flex flex-col items-start gap-5">
            <p className="text-gray-400">
              Feel free to reach out if you want to collaborate with us, or
              simply have a chat.
            </p>
            <button className=" bg-primary-bg-color hover:bg-orange-800 text-white py-3 px-6 rounded-full flex items-center gap-3 transition-all duration-300">
              Become a Client
              <FaArrowRightLong />
            </button>
            <p className="text-gray-400">
              Don&apos;t like the forms? Drop us a line via email.
            </p>
            <p className="text-white">info@bittrixdev.com</p>
          </div>
          <p className="flex items-center text-gray-400">
            © BittrixDev {new Date().getFullYear()}. All rights reserved
            <span className="font-semibold underline ml-2 cursor-pointer hover:text-gray-300 transition-all duration-300">
              Privacy Policy
            </span>
          </p>
        </div>
        <div className="flex flex-col md:items-center md:justify-center justify-start">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 text-start ">
            <div className="flex flex-col  gap-5">
              <h1 className="text-lg font-semibold">Contact Us</h1>
              <p className="text-gray-400">Our Email: info@bittrixdev.com</p>
              <p className="text-gray-400">Our Phone: +91 8976119103</p>
              <p className="text-gray-400">Mumbai, 400070</p>
            </div>
            <div className="flex flex-col items-start gap-5">
              <h1 className="text-lg font-semibold">Follow us</h1>
              <div className="flex  justify-center gap-3 text-gray-400 cursor-pointer hover:text-gray-300 transition-all duration-300">
                <p>Dribbble</p>
                <MdArrowOutward className="text-2xl" />
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-400 cursor-pointer hover:text-gray-300 transition-all duration-300">
                <p>LinkedIn</p>
                <MdArrowOutward className="text-2xl" />
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-400 cursor-pointer hover:text-gray-300 transition-all duration-300">
                <p>Instagram</p>
                <MdArrowOutward className="text-2xl" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-5">
              <h1 className="text-lg font-semibold">Services</h1>
              {ServiceData.map((item, index) => (
                <Link key={index} href={item.link}>
                  <p className="text-gray-400 cursor-pointer hover:text-gray-300 transition-all duration-300">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
