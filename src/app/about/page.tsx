import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <div className=" flex flex-col gap-6 mx-auto max-w-screen-lg py-8">
        <div className=" flex flex-col gap-4  py-8">
          <div className=" w-fit text-[40px] font-[700] border-b-[1px]">
            About Us
          </div>
          <div className=" text-[18px] text-justify">
            Welcome to autoMax Detailing, where excellence in auto care is our
            passion and precision is our promise. Our commitment to delivering
            top-tier automotive detailing services has made us a trusted name in
            the industry. At autoMax Detailing, we believe that every car
            deserves to look its best, and we strive to provide exceptional care
            that reflects our dedication to quality and luxury.
          </div>
        </div>
        <div className=" flex flex-col gap-4 border-t-2 border-[#515151] py-8">
          <div className=" w-fit text-[40px] font-[700] border-b-[1px]">
            Our History
          </div>
          <div className=" text-[18px] text-justify">
            The story of autoMax Detailing began in 1998 with a vision to
            redefine automotive detailing. Our founder, Raihan, was driven by a
            love for cars and a desire to elevate the standard of car care.
            Starting as a small, local business, we quickly gained a reputation
            for our meticulous attention to detail and superior service. Over
            the years, our unwavering commitment to excellence has fueled our
            growth, leading to significant milestones.
          </div>
        </div>
        <div className=" flex flex-col gap-4 border-t-2 border-[#515151] py-8">
          <div className=" w-fit text-[40px] font-[700] border-b-[1px]">
            About Us
          </div>
          <div className=" text-[18px] text-justify">
            Welcome to autoMax Detailing, where excellence in auto care is our
            passion and precision is our promise. Our commitment to delivering
            top-tier automotive detailing services has made us a trusted name in
            the industry. At autoMax Detailing, we believe that every car
            deserves to look its best, and we strive to provide exceptional care
            that reflects our dedication to quality and luxury.
          </div>
        </div>
      </div>
    </>
  );
}
