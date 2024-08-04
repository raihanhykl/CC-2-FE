import Testimoni from "@/components/testimoni";
import axios from "axios";
import { log } from "console";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <div className="">
        {/* hero */}
        <div className=" w-[100%]  my-1 relative mx-auto">
          <video
            autoPlay
            loop
            muted
            className=" opacity-30 h-full w-full mx-auto object-contain"
          >
            <source src="hero-vid.mp4" type="video/mp4" className=" " />
          </video>
          <div className=" flex flex-col justify-center absolute w-[65%] top-[19%] left-[15%] sm:w-[50%] sm:top-[25%] sm:left-[30%] ">
            <h1 className=" tracking-wider text-[20px] font-bold text-left sm:text-[20px] lg:text-[50px] ">
              AutoMax Detailing
            </h1>
            <h3 className="  text-[12px] sm:text-[12px] lg:text-[20px]">
              "Elevating Excellence in Auto Care"
            </h3>
            <p className="  font-light text-[7px] sm:text-[8px] lg:text-[16px] text-justify lg:mt-2">
              Experience the Pinnacle of Automotive Detailing with Our Premium
              Services. Our meticulous attention to detail, cutting-edge
              techniques, and premium products ensure your luxury vehicle
              receives the care it deserves. From comprehensive car washes to
              advanced paint protection, autoMax Detailing is committed to
              maintaining and enhancing the beauty and value of your automotive
              investment. Discover the unparalleled quality and sophistication
              that sets us apart.
            </p>
            <button className=" bg-black text-white border-[1px] border-white w-fit px-2 py-1 rounded-[50px] text-[7px] sm:text-[8px] lg:text-[16px] mt-2 md:mt-4 hover:bg-white hover:text-black hover:border-black">
              Book an Appointment
            </button>
          </div>
        </div>

        {/* services */}
        <div className=" flex flex-col gap-2 max-w-screen-lg mx-auto">
          <div className=" autoShow flex w-full border-t-2 border-[#515151] items-center py-8 px-2 mx-auto justify-between mt-2">
            <div className=" flex flex-col pr-2 justify-center">
              <div className=" flex gap-1 items-center">
                <div className=" font-mono text-[#515151] text-[#828282 text-[12px] sm:text-[16px] lg:text-[22px]">
                  1/3
                </div>
                <div className=" text-[12px] px-[9px] sm:px-[4px] sm:text-[20px] lg:text-[28px] ">
                  Pristine Cleaning
                </div>
              </div>
              <div className=" flex ml-9 text-[8px] sm:text-[12px] lg:text-[14px] max-w-screen-lg lg:pl-3">
                <div>
                  Our meticulous cleaning service ensures every inch of your
                  vehicle is spotless. From thorough exterior washes to detailed
                  interior cleaning, we use only the highest quality products to
                  leave your car looking and feeling brand new.
                </div>
              </div>
            </div>
            <div className=" w-full h-full lg:w-[500px] rounded-md">
              <img
                src="cleaning.jpg"
                alt=""
                className=" object-cover rounded-md "
              />
            </div>
          </div>
          <div className=" autoShow flex w-full border-t-2 border-[#515151] items-center py-8 px-2 mx-auto justify-between mt-2">
            <div className=" flex flex-col pr-2 justify-center">
              <div className=" flex gap-1 items-center">
                <div className=" font-mono text-[#515151] text-[#828282 text-[12px] sm:text-[16px] lg:text-[22px]">
                  2/3
                </div>
                <div className=" text-[12px] px-[9px] sm:px-[4px] sm:text-[20px] lg:text-[28px] ">
                  Exquishit Polishing
                </div>
              </div>
              <div className=" flex ml-9 text-[8px] sm:text-[12px] lg:text-[14px] max-w-screen-lg lg:pl-3">
                <div>
                  Our expert polishing service brings out the true beauty of
                  your vehicle. Using advanced techniques and premium polishes,
                  we restore and enhance your car's paintwork to a flawless,
                  mirror-like finish.
                </div>
              </div>
            </div>
            <div className=" w-full h-full lg:w-[500px] rounded-md">
              <img
                src="polishing.jpg"
                alt=""
                className=" object-cover rounded-md "
              />
            </div>
          </div>
          <div className=" autoShow flex w-full border-y-2 border-[#515151] items-center py-8 px-2 mx-auto justify-between mt-2">
            <div className=" flex flex-col pr-2 justify-center">
              <div className=" flex gap-1 items-center">
                <div className=" font-mono text-[#515151] text-[#828282 text-[12px] sm:text-[16px] lg:text-[22px]">
                  3/3
                </div>
                <div className=" text-[12px] px-[9px] sm:px-[4px] sm:text-[20px] lg:text-[28px] ">
                  Ultimate Protecting
                </div>
              </div>
              <div className=" flex ml-9 text-[8px] sm:text-[12px] lg:text-[14px] max-w-screen-lg lg:pl-3">
                <div>
                  Our top-tier protection services safeguard your vehicle
                  against the elements. With options like ceramic coatings and
                  paint protection films, we ensure your car's finish remains
                  pristine and protected for years to come.
                </div>
              </div>
            </div>
            <div className=" w-full h-full lg:w-[500px] rounded-md">
              <img
                src="protecting.jpg"
                alt=""
                className=" object-cover rounded-md "
              />
            </div>
          </div>
        </div>

        {/* testimonials */}
        <Testimoni title={"Our Satisfied Client"} totalPerson={12} />
      </div>
    </>
  );
}
