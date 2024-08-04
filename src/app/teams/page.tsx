import Testimoni from "@/components/testimoni";
import React from "react";

type Props = {};

export default function Teams({}: Props) {
  return (
    <div className=" max-w-screen-lg mx-auto">
      <div className=" text-[60px] text-center">Our Team</div>
      <div className=" border-b border-b-[#515151] py-4">
        <Testimoni title="Proffesional Advisor" totalPerson={10} />
      </div>
      <div className=" border-b border-b-[#515151] py-4">
        <Testimoni title="Interior Expert" totalPerson={11} />
      </div>
      <div className=" border-b border-b-[#515151] py-4">
        <Testimoni title="Exterior Expert" totalPerson={6} />
      </div>
    </div>
  );
}
