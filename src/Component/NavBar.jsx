import React from "react";
import TiczImg from "../assets/tiez.png"
import TiczText from "../assets/ticz.png"
import { HiArrowLongRight } from "react-icons/hi2";
import { FaMapPin } from "react-icons/fa";



function NavBar(){

    return(

        <>
            <div className="md:px-32 px-8 py-10">
                <nav className="flex flex-row border-2 border-[#197686] bg-[#041E23] rounded-2xl px-4 py-3">
                    {/* <div className="basis-1/5">

                    </div> */}
                    <div className="basis-1/2 md:basis-1/3 flex">
                        <img className="md:w-[50px] w-[40px] h-[30px] md:h-[40px] py-2 px-3 bg-[#052F35] rounded-lg" src={TiczImg} alt="" />
                        <img className="md:w-[60px] md:h-[30px] w-[40px] h-[25px] md:mt-1 ml-1" src={TiczText} alt="" />
                    </div>
                    <div className="md:basis-1/3 md:block hidden text-white pt-2 text-center" style={{fontFamily: 'Jeju'}}>
                        <a className="mr-4" href="">Events</a>
                        <a className="mr-4" href="">My Tickets</a>
                        <a className="mr-4" href="">About Project</a>
                    </div>
                    <div className="basis-1/2 md:basis-1/3">
                        <button style={{fontFamily: 'Jeju'}} className="flex ml-auto bg-white md:px-5 md:py-2 px-2.5 py-2 rounded-lg text-[13px] md:text-1xl">MY TICKETS <HiArrowLongRight className="mt-1 ml-1" /></button>
                    </div>
                    {/* <div className="basis-1/5">
-
                    </div> */}
                </nav>


                <div className="mt-24 md:mx-64 md:px-12 px-8 py-10 border-2 rounded-4xl border-[#197686] bg-[#05252C]">
                    <div style={{fontFamily: 'Jeju'}} className="text-white md:flex">
                        <p className="md:text-3xl text-2xl">Ticket Selection</p>
                        <p className="ml-auto">Step 1/3</p>
                    </div>
                    <div className="md:border-2 rounded-4xl border-[#197686] bg-[#08252B] my-5 md:px-5">
                        <div className="text-center my-5 md:px-6 py-3 border-2 rounded-4xl border-[#07373F] bg-[#05252C] text-white">
                            <h1 className="Tech md:text-6xl text-4xl text-white">Techember Fest "25</h1>
                            <p className="join md:text-sm text-xs my-2">Join us for an unforgettable <br className="md:hidden block"/> experience at<br className="md:block hidden" /> [Event Name]. Secure <br className="md:hidden block"/> your spot now.</p>
                            <div className="text-center mt-6 md:mt-0">
                                <p className="join md:text-sm text-xs"> [Event Location]<br className="md:hidden block"/> <span className="md:block hidden">||</span> March 15, 2025 | 7:00 PM</p>
                            </div>
                        </div>
                        
                        <hr className="border-2 border-[#07373F] my-6"/>

                        <div>
                            <h1 className="join text-white text-xs md:text-sm pb-2">Select Ticket Type:</h1>
                            <div className="grid md:grid-cols-2 gap-3 bg-[#052228] border-2 border-[#07373F] rounded-2xl px-2 py-2">
                                <div className="bg-[#2BA4B9] text-white py-3 px-3 rounded-lg join hover:cursor-pointer">
                                    <div className="flex">
                                        <p className="text-[13px]">REGULAR ACCESS </p><span className="bg-[#0E464F] pl-5 pr-1 py-1 rounded-[7px] text-[12px] ml-auto">Free</span>
                                    </div>
                                    <p className="text-xs">20 left!</p>
                                </div>
                                <div className="bg-[#052228] text-white py-3 px-3 border-2 border-[#07373F] rounded-lg join hover:cursor-pointer">
                                    <div className="flex">
                                        <p className="text-[13px]">VIP ACCESS </p><span className="bg-[#0E464F] pl-5 pr-1 py-1 rounded-[7px] text-[12px] ml-auto">$50</span>
                                    </div>
                                    <p className="text-xs">20 left!</p>
                                </div>
                                <div className="bg-[#052228] text-white py-3 px-3 border-2 border-[#07373F] rounded-lg join hover:cursor-pointer">
                                    <div className="flex">
                                        <p className="text-[13px]">VVIP ACCESS </p><span className="bg-[#0E464F] pl-5 pr-1 py-1 rounded-[7px] text-[12px] ml-auto">$150</span>  
                                    </div>
                                    <p className="text-xs">20 left!</p>
                                </div>
                            </div>

                            <h1 className="join text-white mt-10 text-xs md:text-sm">Number of Tickets</h1>
                            <select name="" id="" className="w-full border-2 border-[#07373F] rounded-2xl py-3 px-2 text-white">
                                <option value="">1</option>
                            </select>

                            <div className="grid md:grid-cols-2 gap-4 my-7 md:bg-[#041E23] px-8 rounded-2xl">
                                <button style={{fontFamily: 'Jeju'}} className="border-2 border-[#24A0B5] text-[#24A0B5] w-full py-2.5 rounded-lg">Cancel</button>
                                <button style={{fontFamily: 'Jeju'}} className="bg-[#24A0B5] text-white w-full py-2.5 rounded-lg">Next</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        
        </>
    )
}


export default NavBar