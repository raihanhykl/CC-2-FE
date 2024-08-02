import React from "react";

type Props = {};

export default function loading({}: Props) {
  return (
    <>
      <center>
        <div className=" bg-gradient-to-r from-sky-500 to-indigo-500 w-[800px] h-14 px-5 mt-8 items-center pt-4 text-white text-[16px] font-bold pl-[40px] rounded-lg tracking-[40px]">
          LOADING
        </div>
      </center>
    </>
  );
}
