import React from "react";
import TiczImg from "../assets/tiez.png"
import TiczText from "../assets/ticz.png"
import { HiArrowLongRight } from "react-icons/hi2";



function NavBar(){

    return(

        <>
            <div className="md:px-32 px-10 py-10">
                <nav className="flex flex-row border-2 border-[#197686] bg-[#05252C] rounded-2xl px-4 py-3">
                    {/* <div className="basis-1/5">

                    </div> */}
                    <div className="basis-1/2 md:basis-1/3 flex">
                        <img className="md:w-[50px] w-[40px] h-[30px] md:h-[40px] py-2 px-3 bg-[#052F35] rounded-lg" src={TiczImg} alt="" />
                        <img className="md:w-[60px] md:h-[30px] w-[40px] h-[30px] md:mt-1 ml-1" src={TiczText} alt="" />
                    </div>
                    <div className="md:basis-1/3 md:block hidden text-white pt-2">
                        <a className="mr-4" href="">Events</a>
                        <a className="mr-4" href="">My Tickets</a>
                        <a className="mr-4" href="">About Project</a>
                    </div>
                    <div className="basis-1/2 md:basis-1/3">
                        <button className="flex ml-auto bg-white md:px-5 md:py-2 px-2 py-2 rounded-lg text-[13px] md:text-1xl">MY TICKETS <HiArrowLongRight className="mt-1 ml-1" /></button>
                    </div>
                    {/* <div className="basis-1/5">

                    </div> */}
                </nav>
            </div>
        
        </>
    )
}


export default NavBar