import React from "react";
import phone1 from "../../public/assets/phone-01.webp";
import phone2 from "../../public/assets/phone-02.webp";
import Image from "next/image";
import { Vortex } from "@/components/ui/vortex";
import Marquee from "react-fast-marquee";

const SmartDev = () => {
  return (
    <Vortex
      backgroundColor="black"
      baseHue="280"
      className=" min-w-full h-full flex items-center justify-center"
    >
      <div className="h-screen min-w-full flex items-center justify-center ">
        <div className="min-w-full h-full flex flex-col items-start justify-between py-10 relative">
          <div className="flex flex-col items-left justify-center">
            <h1 className=" text-text-color md:text-8xl text-5xl">
              {"{" + "SMART" + "}"}
            </h1>
            <h1 className="text-text-color md:text-8xl text-5xl">
              DEVELOPMENT
            </h1>
          </div>
          <div className=" w-full flex items-center justify-center">
            <Marquee className=" -z-50">
              <h1 className="md:text-[9rem] text-[6rem]  font-semibold uppercase text-gray-800">
                I can be a React component, multiple React components, or just
                some text.
              </h1>
            </Marquee>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="md:w-1/4 w-3/4 text-wrap text-text-color text-xl">
              Making your business outstanding is a science. We take it (a)
              seriously and (b) creatively.
            </p>
            <div className="md:flex items-center justify-center gap-5 hidden ">
              <span className=" uppercase text-xl text-text-color">
                Check our portfolio
              </span>
              <span className=" uppercase text-xl text-text-color">
                Get In Touch
              </span>
            </div>
          </div>
          <div className="flex items-center  justify-center absolute  top-[30%] md:left-[40%] left-[20%] ">
            <Image
              src={
                "https://res.cloudinary.com/bittrixdev/image/upload/v1725863277/phone-01_nnsxud.webp"
              }
              alt="phone1"
              width={300} // Provide width
              height={500} // Provide height
              className="md:w-[300px] object-cover w-[250px]"
            />
            <Image
              src={
                "https://res.cloudinary.com/bittrixdev/image/upload/v1725863252/phone-02_zlfwhb.webp"
              }
              alt="phone2"
              width={300} // Provide width
              height={500} // Provide height
              className="md:w-[300px] w-[250px] object-cover absolute md:left-[50%] left-[20%] top-[30%]"
            />
          </div>
        </div>
      </div>
    </Vortex>
  );
};

export default SmartDev;
