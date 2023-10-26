import React from "react";
import frame from "../../assets/Frame 44.svg";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import logo12 from "../../assets/logo12.svg";
import logo13 from "../../assets/logo13.svg";
import logo14 from "../../assets/logo14.svg";

function Component2() {
  return (
    <div className="py-12 ml-10">
      <p className="text-blue-600 text-xl font-medium font-['Poppins'] tracking-widest text-left">
        CHECKOUT OUR NEW
      </p>
      <div className="flex ">
        <p className="text-zinc-800 text-4xl font-semibold font-['Poppins'] leading-10">
          Latest Listed Properties
        </p>
        <div className="float-right ml-72">
          <div className="w-20 h-12 px-7 py-5 mr-10 bg-white rounded-3xl border border-violet-900 justify-start items-center gap-2.5 inline-flex">
            <div className="text-center text-violet-900 text-base font-medium font-['Poppins']">
              All
            </div>
          </div>
          <div className="w-20 h-12 px-7 py-5 bg-violet-900 rounded-3xl justify-start items-center gap-2.5 inline-flex mr-7">
            <div className="text-center text-white text-base font-medium font-['Poppins']">
              Sell
            </div>
          </div>
          <div className="w-24 h-12 px-7 py-5 bg-white rounded-3xl border border-violet-900 justify-start items-center gap-2.5 inline-flex">
            <div className="text-center text-violet-900 text-base font-medium font-['Poppins']">
              Rent
            </div>
          </div>
        </div>
      </div>
      <p className="w-96 h-9 text-zinc-500 text-base font-normal font-['Poppins'] leading-relaxed text-left">
        Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim
        purus.
      </p>
      <img src={frame} className="mt-12 " />

      <div className=" bg-neutral-300 w-full h-auto mt-12">
        <div className="">
          <p className="text-center text-zinc-800 text-xl font-medium font-['Poppins'] tracking-widest">
            OUR SERVICES
          </p>
          <p className="text-center text-neutral-950 text-4xl font-semibold font-['Poppins'] leading-10">
            Donec porttitor euismod dignissim
          </p>
        </div>
        <div className="flex mx-48 justify-between ">
          <div className="w-86 h-auto bg-white rounded-3xl shadow align-center">
            <img src={icon1}></img>
          </div>
          <p className=" text-xl font-medium font-['Poppins']">
            Buy a New Home
          </p>
          <p className="w-56 text-center text-base font-normal font-['Poppins'] leading-relaxed">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus.
          </p>
        </div>
        <div className="relative w-86 h-auto bg-white rounded-3xl shadow ">
          <img src={icon2}></img>
        </div>
        <p className="text-zinc-800 text-xl font-medium font-['Poppins']">
          Sell a House
        </p>
        <p className="w-56 text-center text-zinc-500 text-base font-normal font-['Poppins'] leading-relaxed">
          Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
          dignissim purus.
        </p>
      </div>
      <div className=" relative w-86 h-auto bg-white rounded-3xl shadow">
        <div className=" ">
          <img src={icon3}></img>
        </div>
        <div className="absolute left-[47px] top-[45px]">
          <img className=" " src={logo14}></img>
        </div>
      </div>
      <p className="text-zinc-800 text-xl font-medium font-['Poppins']">
        Rent a House
      </p>
      <p className="w-56 text-center text-zinc-500 text-base font-normal font-['Poppins'] leading-relaxed">
        Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim
        purus.
      </p>
    </div>
  );
}

export default Component2;
