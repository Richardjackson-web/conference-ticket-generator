import React from "react";




function TicketReady(){

    return(

        <>

                <div className="mt-24 lg:mx-94 mx-16 lg:px-12 px-8 py-10 border-2 rounded-4xl border-[#197686] bg-[#05252C]">
                
                                    <div style={{fontFamily: 'Jeju'}} className="text-white flex">
                                        <p className="lg:text-3xl text-2xl">Attendee Details</p>
                                        <p className="ml-auto">Step 2/3</p>
                                    </div>
                                    <div className="lg:border-2 rounded-4xl border-[#197686] bg-[#08252B] my-5 lg:px-5">
                                        <p>Your Ticket is Booked!</p>
                                        <p>You can download or Check your email for a copy</p>
                                    </div>





                            <div className="grid lg:grid-cols-2 gap-4 my-7 lg:bg-[#041E23] px-8 rounded-2xl">
                                <button style={{fontFamily: 'Jeju'}} className="border-2 border-[#24A0B5] text-[#24A0B5] w-full py-2.5 rounded-lg">Book Another Ticket</button>
                                <button style={{fontFamily: 'Jeju'}} className="bg-[#24A0B5] text-white w-full py-2.5 rounded-lg">Download Ticket</button>
                            </div>
                            
                </div>
        
        </>
    )
}


export default TicketReady