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
        <div className="min-w-full h-full flex flex-col items-start justify-between p-10 relative">
          <div className="flex flex-col items-left justify-center">
            <h1 className=" text-text-color text-8xl">{"{" + "SMART" + "}"}</h1>
            <h1 className="text-text-color text-8xl">DEVELOPMENT</h1>
          </div>
          <div className=" w-full flex items-center justify-center">
            <Marquee className=" -z-50">
              <h1 className="text-[9rem] font-semibold uppercase text-text-color">
                I can be a React component, multiple React components, or just
                some text.
              </h1>
            </Marquee>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="w-1/4 text-wrap text-text-color text-xl">
              Making your business outstanding is a science. We take it (a)
              seriously and (b) creatively.
            </p>
            <div className="flex items-center justify-center gap-5">
              <span className=" uppercase text-xl text-text-color">
                Check our portfolio
              </span>
              <span className=" uppercase text-xl text-text-color">
                Get In Touch
              </span>
            </div>
          </div>
          <div className="flex items-center  justify-center absolute  top-[30%] left-[40%] ">
            <Image src={phone1} alt="phonn1" className="w-[300px] " />
            <Image
              src={phone2}
              alt="phonn1"
              className="w-[300px] absolute left-[50%] top-[30%] "
            />
          </div>
        </div>
      </div>
    </Vortex>
  );
};

export default SmartDev;
