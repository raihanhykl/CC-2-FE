import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <>
      <div className=" shadow-sm shadow-white sticky top-0 z-50">
        <div className=" flex justify-between sticky top-0 z-50 py-4 px-4 lg:px-8 bg-black max-w-screen-lg mx-auto">
          {/* navleft */}
          <div>
            <div className=" w-[100px] lg:w-[150px] ">
              <img src="logo2.jpeg" alt="" className="w-full h-[80%]" />
            </div>
          </div>

          {/* navright */}
          <div>
            <div className=" hidden sm:flex gap-6 justify-center">
              <div>Services</div>
              <div>Teams</div>
              <div>About Us</div>
            </div>
            <div className=" text-white sm:hidden">=</div>
          </div>
        </div>
      </div>
    </>
  );
}
