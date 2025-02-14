import React from "react";
import TiczImg from "../assets/tiez.png";
import TiczText from "../assets/ticz.png";
import { HiArrowLongRight } from "react-icons/hi2";

function NavBar() {
  return (
    <>
      <div className="lg:px-32 px-2 py-10 mx-5">
        <nav className="flex flex-row border-2 border-[#197686] bg-[#041E23] rounded-2xl px-4 py-3">
          {/* <div className="basis-1/5">

                    </div> */}
          <div className="basis-1/2 lg:basis-1/3 flex">
            <img
              className="lg:w-[50px] w-[40px] h-[30px] lg:h-[40px] py-2 px-3 bg-[#052F35] rounded-lg"
              src={TiczImg}
              alt=""
            />
            <img
              className="lg:w-[60px] lg:h-[30px] w-[40px] h-[25px] lg:mt-1 ml-1"
              src={TiczText}
              alt=""
            />
          </div>
          <div
            className="lg:basis-1/3 lg:block hidden text-white pt-2 text-center"
            style={{ fontFamily: "Jeju" }}
          >
            <a className="mr-4" href="">
              Events
            </a>
            <a className="mr-4" href="">
              My Tickets
            </a>
            <a className="mr-4" href="">
              About Project
            </a>
          </div>
          <div className="basis-1/2 lg:basis-1/3">
            <button
              style={{ fontFamily: "Jeju" }}
              className="flex ml-auto bg-white lg:px-5 lg:py-2 px-2.5 py-2 rounded-lg text-[13px] lg:text-1xl"
            >
              MY TICKETS <HiArrowLongRight className="mt-1 ml-1" />
            </button>
          </div>
          {/* <div className="basis-1/5">
                    </div> */}
        </nav>
      </div>
    </>
  );
}

export default NavBar;
