import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Bar from "../assets/bar.png";
import User from "../assets/user.png";
import html2canvas from "html2canvas";
import ProgressBar from "../Component/ProgressBar";

const LOCAL_STORAGE_KEY = "contactFormData";

function TicketReady() {
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();

  // Retrieve stored data when component mounts
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  const tickRef = useRef();

  const downloadTicket = () => {
    const input = tickRef.current;
    html2canvas(input, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
    }).then((canvas) => {
      const imgTick = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = imgTick;
      link.download = "ticket.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  const backHome = (data)=>{
    console.log("Form Data:", data);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    navigate("/");
  }


  return (
    <>
      <div className="my-5 lg:mx-94 mx-7 lg:px-12 px-2 py-10 border-2 rounded-4xl border-[#197686] bg-[#05252C]">
        <div style={{ fontFamily: "Jeju" }} className="text-white flex">
          <p className="lg:text-3xl text-2xl">Ready</p>
          <p className="ml-auto">Step 3/3</p>
        </div>
        <ProgressBar />
        <div className="rounded-4xl text-center bg-[#08252B] my-5 lg:px-5 text-white">
          <p className="alat text-2xl">Your Ticket is Booked!</p>
          <p className="join text-xs mt-3">
            You can download or Check your email for a copy or you can download
          </p>
        </div>

        <div
          ref={tickRef}
          className="relative tick lg:w-[60%] lg:h-[500px] h-[530px] mx-auto px-3 py-5"
        >
          <div className="border-2 border-[#197686] rounded-lg text-center">
            <h1 className="Tech lg:text-4xl text-5xl text-white pb-3">
              Techember Fest "25
            </h1>
            <p className="join lg:text-[11px] text-sm text-white">
              📍 04 Rumens road, Ikoyi, Lagos
              <br /> March 15, 2025 | 7:00 PM
            </p>
            <img
              className="mx-auto w-[100px] h-[120px] mt-3 rounded-lg border-4 border-[#197686]"
              src={formData?.avatar ? formData.avatar : User}
              alt="User Avatar"
            />

            {formData ? (
              <div className="join text-[8px] mt-3 text-left border-[2px] bg-[#08292e] border-[#08252B]">
                <div className="grid grid-cols-2">
                  <div className="border-r-1 border-b-1">
                    <p className="text-[8px] text-[#237f91]">Enter your name</p>
                    <p className="text-[10px] text-white pb-1 break-words px-1 py-1">
                      {formData.name}
                    </p>
                  </div>
                  <div className="border-b-1">
                    <p className="text-[8px] text-[#237f91]">
                      Enter your email*
                    </p>
                    <p className="text-[10px] text-white break-words pb-1 px-1 py-1">
                      {formData.email}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="border-r-1 border-b-1">
                    <p className="text-[8px] text-[#237f91]">Ticket Type:</p>
                    <p className="text-[10px] text-white pb-1 break-words px-1 py-1">
                      {formData.ticket}
                    </p>
                  </div>
                  <div className="border-b-1">
                    <p className="text-[8px] text-[#237f91]">Ticket for:</p>
                    <p className="text-[10px] text-white pb-1 break-words px-1 py-1">
                      {formData.role}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[8px] text-[#237f91]">Special request?</p>
                  <p className="text-[10px] text-white pb-1 break-words px-1 py-1">
                    {formData.message}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-red-500">No data found!</p>
            )}
          </div>
          <img
            className="absolute bottom-2 px-8 lg:px-0 lg:pr-6 w-full h-15"
            src={Bar}
            alt=""
          />
        </div>
        



        <div className="lg:block hidden">
        <div className="grid lg:grid-cols-2 gap-4 my-7 px-8 rounded-2xl">
          <button
          // type="submit"
            onClick={()=> backHome()}
            style={{ fontFamily: "Jeju" }}
            className="border-2 border-[#24A0B5] text-[#24A0B5] w-full py-2.5 rounded-lg hover:cursor-pointer"
          >
            Book Another Ticket
          </button>
          <button
            style={{ fontFamily: "Jeju" }}
            onClick={downloadTicket}
            className="bg-[#24A0B5] text-white w-full py-2.5 rounded-lg hover:cursor-pointer"
          >
            Download Ticket
          </button>
        </div>
        </div>

        <div className="lg:hidden block">
        <div className="grid lg:grid-cols-2 gap-4 my-7 px-8 rounded-2xl">
          <button
            style={{ fontFamily: "Jeju" }}
            onClick={downloadTicket}
            className="bg-[#24A0B5] text-white w-full py-2.5 rounded-lg hover:cursor-pointer"
          >
            Download Ticket
          </button>
          <button
          // type="submit"
          onClick={()=> backHome()}
            style={{ fontFamily: "Jeju" }}
            className="border-2 border-[#24A0B5] text-[#24A0B5] w-full py-2.5 rounded-lg hover:cursor-pointer"
          >
            Book Another Ticket
          </button>
        </div>
        </div>
      </div>
    </>
  );
}

export default TicketReady;
