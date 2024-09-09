import SideNav from "@/components/SideNav";
import { IoMdPlay } from "react-icons/io";
import React from "react";
import { HiArrowLongDown } from "react-icons/hi2";
import Marquee from "react-fast-marquee";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center relative ">
        <div className="w-full h-full flex items-center justify-center overflow-hidden absolute top-0 ">
          <Spline scene="https://prod.spline.design/bUqW5bou1J2TlDJv/scene.splinecode" />

          <div className="md:block absolute right-5 top-[30%] z-10 hidden">
            <SideNav />
          </div>
        </div>
      </div>
      <Marquee className="mt-5">
        <h1 className="md:text-[10rem] text-[5rem] font-semibold uppercase text-primary-bg-color">
          I can be a React component, multiple React components, or just some
          text.
        </h1>
      </Marquee>
    </>
  );
};

export default Hero;
