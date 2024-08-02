import React from "react";

type Props = {
  //   imageUrl: string;
  //   name: string;
};

export default async function Testimoni({}: Props) {
  const res = await (
    await fetch("https://randomuser.me/api/" + "?results=12")
  ).json();
  const person = res.results;

  return (
    <div className=" flex flex-col gap-6 w-full max-w-screen-lg py-2 mx-auto mt-2">
      <div className=" text-[12px] mx-auto w-fit sm:text-[18px] lg:text-[25px]">
        Our Satisfied Client
      </div>
      <div className=" flex w-[90%] mx-auto overflow-x-auto border-x-[1px] border-[#515151]">
        {person.map((person: any, index: number) => (
          <div
            className=" flex flex-col gap-4 justify-center items-center min-w-[80px] h-24 lg:h-44 sm:min-w-32 sm:h-32 lg:min-w-44 bg-black border-r-[1px] border-r-[#515151]"
            key={index}
          >
            <img
              src={person.picture.large}
              alt=""
              className=" w-[30px] sm:w-[60px] lg:w-[90px] rounded-[50%]"
            />
            <div className=" text-[8px] lg:text-[16px] text-center">
              {person.name.title +
                " " +
                person.name.first +
                " " +
                person.name.last}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
