import React from "react";
import TiczImg from "../assets/tiez.png"
import TiczText from "../assets/ticz.png"
import { HiArrowLongRight } from "react-icons/hi2";



function NavBar(){

    return(

        <>
            <div>
                <nav className="flex flex-row">
                    <div className="basis-1/3 flex">
                        <img src={TiczImg} alt="" />
                        <img src={TiczText} alt="" />
                    </div>
                    <div className="basis-1/3">
                        <a href="">Events</a>
                        <a href="">My Tickets</a>
                        <a href="">About Project</a>
                    </div>
                    <div className="basis-1/3">
                        <button>MY TICKETS <HiArrowLongRight /></button>
                    </div>
                </nav>
            </div>
        
        </>
    )
}


export default NavBar