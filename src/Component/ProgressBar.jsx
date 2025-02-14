import React from "react";
import { useLocation } from "react-router-dom";

function ProgressBar() {
  const location = useLocation();

  const progressStatus = {
    "/selectticket": 30,
    "/attendeedetails": 70,
    "/ticketready": 100,
  };

  const progress = progressStatus[location.pathname] || 30;

  return (
    <>
      <div className="w-full bg-[#0E464F] h-2 rounded-md mt-4">
        <div
          className="bg-[#24A0B5] h-full rounded-md transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </>
  );
}

export default ProgressBar;
