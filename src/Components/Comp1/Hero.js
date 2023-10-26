import React from "react";
import img1 from "../../assets/Carousal.svg";
import logo7 from "../../assets/logo7.svg";
import logo8 from "../../assets/logo8.svg";
import logo9 from "../../assets/logo9.svg";
import image1 from "../../assets/image1.svg";
import image2 from "../../assets/image2.svg";
import image3 from "../../assets/image3.svg";
import image4 from "../../assets/image4.svg";
import image5 from "../../assets/image5.svg";
import image6 from "../../assets/image6.svg";
import logo10 from "../../assets/logo10.svg";
import logo11 from "../../assets/logo11.svg";
import Rectangle14 from "../../assets/Rectangle 14.svg";
import Rectangle15 from "../../assets/Rectangle 15.svg";
import Rectangle16 from "../../assets/Rectangle 16.svg";

function Hero() {
  return (
    <div>
      <div className="w-full bg-gradient-to-b from-sky-100 to-blue-200 rounded-bl-full rounded-br-full">
        <div className="w-full text-blue-600 text-xl font-medium font-['Poppins'] tracking-widest px-52 flex items-start pt-12">
          REAL ESTATE
        </div>
        <div className="flex justify justify-between w-full px-52 pt-4">
          <div className="flex flex-col gap-4">
            <div className="text-neutral-950 text-6xl font-semibold self-center font-['Poppins'] w-full flex items-start text-left">
              Find a perfect <br />
              home you love..!
            </div>
            <div className="w-full text-zinc-500 text-base font-normal font-['Poppins'] leading-relaxed text-left pr-6">
              Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
              Integer a dolor eu sapien sodales vulputate ac in purus.
              <div className="w-full h-80 relative">
                <img
                  className="w-full h-80 left-0 top-0 absolute rounded-2xl"
                  src={img1}
                />
              </div>
            </div>
          </div>

          <div className="w-96 bg-white rounded-3xl shadow ">
            <div className="p-6 bg-white rounded-tl-2xl rounded-tr-2xl border-b border-neutral-400">
              <div className="flex justify-between items-center px-20">
                <span className="">For Sale</span>
                <span className="">For Rent</span>
              </div>
            </div>
            <div className="px-8 flex flex-col gap-6 py-6">
              <div className="w-full p-4 text-start bg-neutral-300 bg-opacity-20 rounded-2xl border-neutral-300">
                <span className="text-neutral-400 text-base font-normal font-['Poppins'] leading-relaxed">
                  New York, San Francisco, etc
                </span>
              </div>
              <div className=" p-4 bg-neutral-300 bg-opacity-20 rounded-2xl border-neutral-300">
                <div className="flex justify-between px-2">
                  <span className="text-neutral-400 text-base font-normal font-['Poppins'] leading-relaxed">
                    Select Property Type
                  </span>
                  <img src={logo7} />
                </div>
              </div>
              <div className="w-full p-4 bg-neutral-300 bg-opacity-20 rounded-2xl border-neutral-300">
                <div className="flex justify-between px-2">
                  <span className="text-neutral-400 text-base font-normal font-['Poppins'] leading-relaxed">
                    Select Rooms
                  </span>
                  <img src={logo7} />
                </div>
              </div>
              <div className="flex gap-2">
                <img src={logo8} />
                <p className="text-right text-violet-900 text-sm font-normal font-['Poppins'] leading-snug">
                  Advance Search
                </p>
              </div>
              <div className="w-80 p-5  self-center bg-violet-900 rounded-3xl border border-stone-300">
                <div className="flex items-center gap-3 justify-center">
                  <img src={logo9} />
                  <span className="text-center text-white text-base font-medium font-['Poppins']">
                    Search
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex p-10 items-center justify-center gap-6">
          <div className="w-80 bg-white rounded-full shadow p-6">rtghrtg</div>

          <div className="w-80 bg-white rounded-full shadow p-6">rtghrtg</div>
        </div>
        <p className="text-center text-zinc-500 text-base font-medium font-['Poppins'] mt-8">
          Trusted by 100+ Companies across the globe!
        </p>
        <div className="flex justify-evenly">
          <img src={image1} />
          <img src={image2} />
          <img src={image3} />
          <img src={image4} />
          <img src={image5} />
          <img src={image6} />
        </div>
      </div>

      <div className="mt-48 px-10 flex ">
        <div className="">
          <p className="w-52 text-left text-blue-600 text-xl font-medium font-['Poppins'] tracking-widest">
            WHO ARE WE
          </p>
          <p className="w-96 mt-2.5 text-left text-zinc-800 text-4xl font-semibold font-['Poppins'] leading-10">
            Assisting individuals in locating the appropriate real estate.
          </p>
          <p className="w-96 mt-2 text-zinc-500 text-base font-normal font-['Poppins'] leading-relaxed">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
            malesuada leo volutpat.
          </p>
          <div className="w-96 mt-2.5 h-auto bg-white rounded-3xl shadow">
            <div className="flex">
              <div className="flex items-center">
                <img
                  src={logo10}
                  className="ml-5 h-10 w-10 items-center flex"
                />
              </div>
              <div className="">
                <p className="w-72 text-blue-600 text-xl font-medium font-['Poppins']">
                  Donec porttitor euismod
                </p>
                <p className="w-72 text-zinc-500 ml-0.5 text-base font-normal font-['Poppins'] leading-relaxed">
                  Nullam a lacinia ipsum, nec <br /> dignissim purus. Nulla
                </p>
              </div>
            </div>
          </div>
          <div className="w-96 h-auto bg-white rounded-3xl mt-4 shadow">
            <div className="flex">
              <div className="flex items-center">
                <img src={logo11} className=" ml-5 h-10 w-10" />
              </div>
              <div className="">
                <p className="w-auto text-blue-600 text-xl font-medium font-['Poppins']">
                  Donec porttitor euismod
                </p>
                <p className="w-72 pl-0.5 text-zinc-500 text-base font-normal font-['Poppins'] leading-relaxed">
                  Nullam a lacinia ipsum, nec <br />
                  dignissim purus. Nulla
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
          <img src={Rectangle14} className=" w-72 h-96 rounded-3xl mt-16" />
        </div>
        <div className="">
          <div className="">
            <img
              loading="lazy"
              src={Rectangle15}
              className="  w-72 h-72 mt-4"
            />
            <img
              loading="lazy"
              src={Rectangle16}
              className="aspect-[1.27] object-cover object-center w-72 h-44 overflow-hidden self-stretch grow "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
