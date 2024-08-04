import React from "react";
import CarouselService from "./components/carousel";

type Props = {};

export default function ServicePage({}: Props) {
  return (
    <>
      <div className=" mb-[100px] lg:mb-[200px] ">
        <div className=" relative my-1 relative mx-auto ">
          <video
            autoPlay
            loop
            muted
            className=" h-[200px] sm:h-[400px] lg:h-[600px] w-[100vw] object-cover opacity-40"
          >
            <source src=" washing-vid.mp4" type="video/mp4" />
          </video>
          <h1 className=" absolute top-[65%] left-[10%] md:left-[20%] right-auto text-[20px] sm:text-[40px] lg:text-[60px] font-[900] tracking wide">
            LUXURIOUS HANDWASH SERVICE
          </h1>
        </div>

        <div className=" flex max-w-screen-xl gap-2 lg:gap-8 mx-auto items-center py-4 md:py-[100px] justify-between">
          <div className=" flex flex-col gap-2 mr-4 w-[50%]">
            <h1 className="  text-[16px] sm:text-[20px] lg:text-[40px] font-[700]">
              GENTEL HANDWASH WITH PREMIUM PRODUCT
            </h1>
            <p className=" text-[7px] sm:text-[8px] lg:text-[16px]  font-[300]">
              Experience the ultimate in automotive care with our comprehensive
              interior deep cleaning service. Every inch of your vehicle’s
              interior, including the trunk, undergoes meticulous steam
              cleaning. Leather upholstery is treated with a pH-neutral leather
              cleaner followed by a conditioner to ensure it remains supple and
              luxurious. Carpets, mats, and fabric seats receive thorough deep
              cleaning and shampoo extraction, restoring them to their original
              freshness.
            </p>
            <button className=" bg-black text-white border-[1px] border-white w-fit px-2 py-1 md:px-4 md;py-2 rounded-[50px] text-[7px] sm:text-[8px] lg:text-[16px] mt-2 md:mt-4 hover:bg-white hover:text-black hover:border-black font-[300]">
              More Information & Book Appointment
            </button>
          </div>
          <div className="  rounded-md">
            <img
              src="interior-img.jpg"
              alt=""
              className=" w-[250px] sm:w-[350px] lg:w-[500px]"
            />
          </div>
        </div>
      </div>
      <div className=" mb-[100px] lg:mb-[200px] ">
        <div className=" relative my-1 relative mx-auto ">
          <video
            autoPlay
            loop
            muted
            className=" h-[200px] sm:h-[400px] lg:h-[600px] w-[100vw] object-cover opacity-40"
          >
            <source src=" interior-vid.mp4" type="video/mp4" />
          </video>
          <h1 className=" absolute top-[65%] left-[10%] md:left-[20%] right-auto text-[20px] sm:text-[40px] lg:text-[60px] font-[900] tracking wide">
            DEEPLY INTERIOR DETAILING
          </h1>
        </div>

        <div className=" flex max-w-screen-xl gap-2 lg:gap-8 mx-auto items-center py-4 md:py-[100px] justify-between">
          <div className=" flex flex-col gap-2 mr-4 w-[50%]">
            <h1 className="  text-[16px] sm:text-[20px] lg:text-[40px] font-[700]">
              PREMIUM INTERIOR DEEP CLEANING
            </h1>
            <p className=" text-[7px] sm:text-[8px] lg:text-[16px]  font-[300]">
              Experience the ultimate in automotive care with our comprehensive
              interior deep cleaning service. Every inch of your vehicle’s
              interior, including the trunk, undergoes meticulous steam
              cleaning. Leather upholstery is treated with a pH-neutral leather
              cleaner followed by a conditioner to ensure it remains supple and
              luxurious. Carpets, mats, and fabric seats receive thorough deep
              cleaning and shampoo extraction, restoring them to their original
              freshness.
            </p>
            <button className=" bg-black text-white border-[1px] border-white w-fit px-2 py-1 md:px-4 md;py-2 rounded-[50px] text-[7px] sm:text-[8px] lg:text-[16px] mt-2 md:mt-4 hover:bg-white hover:text-black hover:border-black font-[300]">
              More Information & Book Appointment
            </button>
          </div>
          <div className="  rounded-md">
            <img
              src="interior-img.jpg"
              alt=""
              className=" w-[250px] sm:w-[350px] lg:w-[500px]"
            />
          </div>
        </div>
      </div>
      <div>
        <div className=" relative my-1 relative mx-auto ">
          <video
            autoPlay
            loop
            muted
            className=" h-[200px] sm:h-[400px] lg:h-[600px] w-[100vw] object-cover opacity-40"
          >
            <source src=" polishing-vid.mp4" type="video/mp4" />
          </video>
          <h1 className=" absolute top-[65%] left-[10%] md:left-[15%] right-auto text-[20px] sm:text-[40px] lg:text-[60px] font-[900] tracking wide">
            SUPERIOR POLISH & COATING GLOSS
          </h1>
        </div>

        <div className=" flex max-w-screen-xl gap-2 lg:gap-8 mx-auto items-center py-4 md:py-8 justify-between">
          <div className=" flex flex-col gap-2 mr-4 w-[50%]">
            <h1 className="  text-[16px] sm:text-[20px] lg:text-[40px] font-[700]">
              SUPERIOR EXTERIOR POLISH & COATING SERVICE
            </h1>
            <p className=" text-[7px] sm:text-[8px] lg:text-[16px]  font-[300]">
              Elevate the appearance of your vehicle with our premium exterior
              polishing service. Our expert technicians meticulously polish your
              car’s exterior to remove imperfections, enhance the paint's
              clarity, and restore its original brilliance. Using high-quality
              polishing compounds and state-of-the-art equipment, we address
              scratches, swirl marks, and oxidation, leaving your car with a
              mirror-like finish. Our multi-stage polishing process ensures that
              every detail is perfected, from the body panels to the trim and
              chrome accents. The final step includes applying a protective
              sealant to preserve the shine and guard against environmental
              damage, ensuring your vehicle maintains its stunning look for
              longer.
            </p>
            <button className=" bg-black text-white border-[1px] border-white w-fit px-2 py-1 md:px-4 md;py-2 rounded-[50px] text-[7px] sm:text-[8px] lg:text-[16px] mt-2 md:mt-4 hover:bg-white hover:text-black hover:border-black font-[300]">
              More Information & Book Appointment
            </button>
          </div>
          <div className="  rounded-md">
            <img
              src="polishing-img.jpg"
              alt=""
              className=" w-[250px] sm:w-[350px] lg:w-[500px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
