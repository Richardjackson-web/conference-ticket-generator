import React from "react";
import "../index.css";
import Sam from "../assets/sam.jpg";
import Reg from "../assets/reg.png";






function TicketReady(){

    return(

        <>

                <div className="mt-24 lg:mx-94 mx-16 lg:px-12 px-8 py-10 border-2 rounded-4xl border-[#197686] bg-[#05252C]">
                
                                    <div style={{fontFamily: 'Jeju'}} className="text-white flex">
                                        <p className="lg:text-3xl text-2xl">Ready</p>
                                        <p className="ml-auto">Step 3/3</p>
                                    </div>
                                    <div className="rounded-4xl text-center bg-[#08252B] my-5 lg:px-5 text-white">
                                        <p className="alat text-2xl">Your Ticket is Booked!</p>
                                        <p className="join text-xs mt-3">You can download or Check your email for a copy</p>
                                    </div>

                                    <div className="flex">
                                        <div className="border-2 border-white bg-[#0E464F] w-[80%] lg:h-42 h-32 rounded-lg">
                                            <div className="flex">
                                                <div className=" pl-2 mt-2">
                                                    <img src={Sam} className="w-[100px]" alt="" />
                                                </div>
                                                <div className="px-3 text-white">
                                                    <div className="flex">
                                                        <h1 className="Tech lg:text-5xl text-xl">Techember<br /> Fest "25</h1>
                                                        <img className="lg:ml-8" src={Reg} alt="" />
                                                    </div>
                                                    <p className="lg:text[14px] text-[8px]">04 Rumens road, Ikoyi, Lagos</p>
                                                    <p className="lg:text[14px] text-[8px]">04 March 15, 2025 | 7:00 PM</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="join text-white lg:text-xs text-[8px]">Ticket for 1 entry only</p>
                                            </div>
                                        </div>
                                        <div className="border-2 border-white bg-[#0E464F] w-[20%] lg:h-42 h-32 rounded-lg">
                                            <div className="flex rotate-270 origin-bottom-right pl-2">
                                                <div>
                                                    <img src={Reg} alt="" />
                                                </div>
                                                <div>
                                                    <h1 className="Tech lg:text-2xl text-2xl text-white">Techember Fest "25</h1>
                                                    <p className="join text-white text-xs">User Name: </p>
                                                </div>
                                            </div>
                                        </div>    
                                    </div>  





                            <div className="grid lg:grid-cols-2 gap-4 my-7 lg:bg-[#041E23] px-8 rounded-2xl">
                                <button onClick={()=> navigate("/")} style={{fontFamily: 'Jeju'}} className="border-2 border-[#24A0B5] text-[#24A0B5] w-full py-2.5 rounded-lg">Book Another Ticket</button>
                                <button style={{fontFamily: 'Jeju'}} className="bg-[#24A0B5] text-white w-full py-2.5 rounded-lg">Download Ticket</button>
                            </div>
                            
                </div>
        
        </>
    )
}


export default TicketReady