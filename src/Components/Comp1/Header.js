import React from "react";
import logo1 from "../../assets/logo1.svg";
import logo2 from "../../assets/logo2.svg";
import logo3 from "../../assets/logo3.svg";
import logo4 from "../../assets/logo4.svg";
import logo5 from "../../assets/logo5.svg";
import logo6 from "../../assets/logo6.svg";

function Header() {
  return (
    <div>
      <div className="bg-violet-900 flex  h-10 justify-between">
        <div className="  gap-2 flex ml-32 items-center">
          <img src={logo1} />
          <div className="text-white text-sm ">
            Rezilla, 18 Grattan St, Brooklyn
          </div>
        </div>
        <div className=" flex gap-7 mr-24">
          <div className="flex gap-3.5 items-center">
            <img src={logo2} />
            <div className="text-white text-right text-sm ">
              +1 206-214-2298
            </div>
          </div>

          <div className="self-center flex  gap-3 items-center ">
            <img src={logo3} />
            <div className="text-white text-right text-sm">
              support@rezilla.com
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center h-20 ">
        <div className=" flex ml-28  px-5 py-4 items-center">
          <div className="px-4 py-3.5 rounded-3xl w-20 h-9 bg-blue-600 bg-opacity-30 flex items-center">
            <div className="">Home</div>
          </div>
          <div className="text-zinc-800 text-base font-medium self-stretch font-['Poppins'] px-4 py-3.5  bg-opacity-30 ">
            About
          </div>

          <div className="text-zinc-800 text-base font-medium self-stretch font-['Poppins'] px-4 py-3.5  bg-opacity-30 ">
            Listings
          </div>

          <div className="text-zinc-800 text-base font-medium self-stretch font-['Poppins'] px-4 py-3.5  bg-opacity-30 ">
            Services
          </div>
          <div className="text-zinc-800 text-base font-medium self-stretch font-['Poppins'] px-4 py-3.5  bg-opacity-30 ">
            Blogs
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-12 h-12 justify-center flex items-center bg-violet-900 rounded-full">
            <img src={logo4} />
          </div>
          <span>Rezilla</span>
        </div>
        <div className="flex gap-10 mr-24">
          <div className="gap-1 flex items-center">
            <img src={logo5} />
            <span className="text-zinc-800 text-base font-medium font-['Poppins']">
              Login/Register
            </span>
          </div>
          <div className=" bg-violet-900 px-6 py-3.5 h-12 w-44 rounded-3xl justify-start gap-2.5 inline-flex">
            <button className="flex gap-0.5">
              <img src={logo6} />
              <span className="text-center text-white text-base font-medium font-['Poppins']">
                Add Listing
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
