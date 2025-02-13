import { useEffect, useState } from "react";
import { FaMapPin } from "react-icons/fa";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const LOCAL_STORAGE_KEY = "contactFormData";

// Yup validation schema
const validationSchema = yup.object().shape({
    role: yup.string().required("Please select ticket number"),
    ticket: yup.string().required("Select a ticket"),
  });


function SelectTicket(){

    const [selectedTicket, setSelectedTicket] = useState(null);

    const handleSelect = (option) => {
        setSelectedTicket(option);
      };


    const {
            register,
            handleSubmit,
            setValue,
            watch,
            formState: { errors },
          } = useForm({
            resolver: yupResolver(validationSchema),
            defaultValues: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {
                role: "",
                ticket:"",
            },
          });

              //   Save form data to Local Storage in real-time
            useEffect(() => {
              const subscription = watch((formData) => {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
              });
              return () => subscription.unsubscribe();
            }, [watch]);

  // Submit Handler (now only logs the data, no need for extra localStorage update)
      const onSubmit = (data) => {
        console.log("Form Submitted:", data);

        };

    const navigate = useNavigate();

     // Function to clear everything
    const handleCancel = () => {
    localStorage.clear(); // Clears any stored data (if used)
    navigate("/"); // Navigates to homepage (or stays here)
    window.location.reload(); // Refreshes to reset the form
    };

    return(

        <>
            <div className="mt-24 lg:mx-64 lg:px-12 px-8 py-10 border-2 rounded-4xl border-[#197686] bg-[#05252C]">
                    <div style={{fontFamily: 'Jeju'}} className="text-white lg:flex">
                        <p className="lg:text-3xl text-2xl">Ticket Selection</p>
                        <p className="ml-auto">Step 1/3</p>
                    </div>
                    <div className="lg:border-2 rounded-4xl border-[#197686] bg-[#08252B] my-5 lg:px-5">
                        <div className="text-center my-5 lg:px-6 py-3 border-2 rounded-4xl border-[#07373F] bg-[#05252C] text-white">
                            <h1 className="Tech lg:text-6xl text-4xl text-white">Techember Fest "25</h1>
                            <p className="join lg:text-sm text-xs my-2">Join us for an unforgettable <br className="lg:hidden block"/> experience at<br className="lg:block hidden" /> [Event Name]. Secure <br className="lg:hidden block"/> your spot now.</p>
                            <div className="text-center mt-6 lg:mt-0">
                                <p className="join lg:text-sm text-xs"> [Event Location]<br className="lg:hidden block"/> <span className="lg:block hidden">||</span> March 15, 2025 | 7:00 PM</p>
                            </div>
                        </div>
                        
                        <hr className="border-2 border-[#07373F] my-6"/>

                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <h1 className="join text-white text-xs lg:text-sm pb-2">Select Ticket Type:</h1>
                            <div className="grid lg:grid-cols-2 gap-3 bg-[#052228] border-2 border-[#07373F] rounded-2xl px-2 py-2">
                                <div className={`text-white py-3 px-3 rounded-lg join hover:cursor-pointer ${selectedTicket === "Regular Access" ? "bg-[#2BA4B9]" : "bg-[#052228]"} ${ errors.ticket ? "border-red-500" : "border-[#07373F]"}`} {...register("ticket")} onClick={() => handleSelect("Regular Access")}>
                                    <div className="flex">
                                        <p className="text-[13px]">REGULAR ACCESS </p><span className="bg-[#0E464F] pl-5 pr-1 py-1 rounded-[7px] text-[12px] ml-auto">Free</span>
                                    </div>
                                    <p className="text-xs">20 left!</p>
                                </div>
                                <div className={`text-white py-3 px-3 border-2 border-[#07373F] rounded-lg join hover:cursor-pointer ${selectedTicket === "VIP Access" ? "bg-[#2BA4B9]" : "bg-[#052228]"} ${ errors.ticket ? "border-red-500" : "border-[#07373F]"}`} {...register("ticket")} onClick={() => handleSelect("VIP Access")}>
                                    <div className="flex">
                                        <p className="text-[13px]">VIP ACCESS </p><span className="bg-[#0E464F] pl-5 pr-1 py-1 rounded-[7px] text-[12px] ml-auto">$50</span>
                                    </div>
                                    <p className="text-xs">20 left!</p>
                                </div>
                                <div className={`text-white py-3 px-3 border-2 border-[#07373F] rounded-lg join hover:cursor-pointer ${selectedTicket === "VVIP Access" ? "bg-[#2BA4B9]" : "bg-[#052228]"} ${ errors.ticket ? "border-red-500" : "border-[#07373F]"}`} {...register("ticket")} onClick={() => handleSelect("VVIP Access")}>
                                    <div className="flex">
                                        <p className="text-[13px]">VVIP ACCESS </p><span className="bg-[#0E464F] pl-5 pr-1 py-1 rounded-[7px] text-[12px] ml-auto">$150</span>  
                                    </div>
                                    <p className="text-xs">20 left!</p>
                                </div>
                                {errors.ticket && (
            <p className="text-red-500 text-sm mt-1">{errors.ticket.message}</p>
          )}
                            </div>

                            <h1 className="join text-white mt-10 text-xs lg:text-sm">Number of Tickets</h1>
                            <select name="" id="" className={`w-full border-2 border-[#07373F] rounded-2xl py-3 px-2 text-white ${
              errors.role ? "border-red-500" : "border-gray-300"
            }`} {...register("role")}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>}

                            <div className="grid lg:grid-cols-2 gap-4 my-7 lg:bg-[#041E23] px-8 rounded-2xl">
                                <button onClick={handleCancel} style={{fontFamily: 'Jeju'}} className="border-2 border-[#24A0B5] text-[#24A0B5] w-full py-2.5 rounded-lg">Cancel</button>
                                <button onClick={()=> navigate("/attendeedetails")} style={{fontFamily: 'Jeju'}} className="bg-[#24A0B5] text-white w-full py-2.5 rounded-lg">Next</button>
                            </div>
                        </div>
                        </form>

                    </div>

                </div>
        
        </>
    )
}


export default SelectTicket