import Image from "next/image";
import React from "react";
import testimonialCustomerImg from "../../public/assets/testimonial.png";
import { HiOutlineArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

const Testimonial = () => {
  return (
    <div
      id="testimonial"
      className="flex flex-col md:flex-row items-center justify-around h-screen  p-10 "
    >
      <div className="w-full h-full flex flex-col items-center justify-center  overflow-hidden ">
        <div className=" flex flex-col  md:items-left justify-center md:gap-20 gap-10 px-10">
          <h3 className="md:text-xl">05 — What Our Clients Say</h3>
          <p className="md:text-xl md:w-[30%] text-text-color">
            We supply clients across the entire globe with improved network
            connections.
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col gap-10 px-10">
          <h3 className="md:text-5xl text-xl font-semibold font-sans text-pretty ">
            BittriXdev focuses on the end-user and helps improve retention. They
            excel in user experience and big-picture thinking.
          </h3>
          <hr className="" />
          <div className="flex md:flex-row flex-col gap-5 items-center justify-between">
            <div className="flex gap-5 ">
              <Image
                src={testimonialCustomerImg}
                className="md:w-20 md:h-20 h-14 w-14  object-cover"
                alt=""
              />
              <div className=" flex flex-col items-start justify-center">
                <p className="text-base">Lexie Ernst</p>
                <p className="text-base">Founder & CEO, Visia</p>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <button>
                {" "}
                <HiOutlineArrowLongLeft className=" md:text-4xl text-2xl text-text-color" />
              </button>
              <button>
                <HiArrowLongRight className=" md:text-4xl text-2xl " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
