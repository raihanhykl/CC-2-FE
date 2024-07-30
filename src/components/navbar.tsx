import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <>
      <div className=" shadow-sm shadow-white sticky top-0 z-50 bg-black">
        <div className=" flex justify-between items-center sticky top-0 z-50 py-4 px-4 lg:px-8  max-w-screen-lg mx-auto">
          {/* navleft */}
          <div>
            <div className=" w-[85px] lg:w-[150px] ">
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
            <img src="burger.svg" alt="" className=" w-7 sm:hidden mx-0" />
          </div>
        </div>
      </div>
    </>
  );
}
