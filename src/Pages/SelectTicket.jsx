import { useEffect, useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const LOCAL_STORAGE_KEY = "contactFormData";

// Yup validation schema
const validationSchema = yup.object().shape({
  role: yup.string().required("Please select the number of tickets"),
  ticket: yup.string().required("Select a ticket type"),
});

function SelectTicket() {
  const navigate = useNavigate();

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
      ticket: "",
    },
  });

  // Watch the selected ticket value
  const selectedTicket = watch("ticket");

  // Function to select ticket and update react-hook-form state
  const handleSelect = (option) => {
    setValue("ticket", option);
  };

  // Save form data to localStorage in real-time
  useEffect(() => {
    const subscription = watch((formData) => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  // Submit Handler
  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    // navigate("/attendeedetails");
  };

  // Cancel Function (clears localStorage & refreshes)
  const handleCancel = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div className="mt-6 lg:mx-80 lg:px-12 px-2 mx-7 py-10 border-2 rounded-4xl border-[#197686] bg-[#05252C]">
        <div style={{ fontFamily: "Jeju" }} className="text-white flex">
          <p className="lg:text-3xl text-2xl">Ticket Selection</p>
          <p className="ml-auto mt-1">Step 1/3</p>
        </div>
        <div className="lg:border-2 rounded-4xl border-[#0E464F] bg-[#08252B] my-5 lg:px-5">
          <div className="text-center my-5 lg:px-6 py-3 border-2 rounded-4xl border-[#07373F] bg-[#05252C] text-white">
            <h1 className="Tech lg:text-6xl text-5xl text-white">
              Techember Fest "25
            </h1>
            <p className="join lg:text-sm text-sm my-2">
              Join us for an unforgettable <br className="lg:hidden block" />{" "}
              experience at
              <br className="lg:block hidden" /> [Event Name]! Secure{" "}
              <br className="lg:hidden block" /> your spot now.
            </p>
            <div className="text-center mt-6 lg:mt-0">
              <p className="join lg:text-sm text-sm">
                📍 [Event Location]
                <br className="lg:hidden block" /> || March 15, 2025 | 7:00 PM
              </p>
            </div>
          </div>

          <hr className="border-2 border-[#07373F] my-6" />

          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h1 className="join text-white text-sm lg:text-sm pb-2">
                Select Ticket Type:
              </h1>
              <div className="grid lg:grid-cols-3 gap-2 bg-[#052228] border-2 border-[#07373F] rounded-2xl px-2 py-2">
                <div
                  className={`text-white py-3 px-3 border-2 border-[#197686] rounded-lg join hover:cursor-pointer ${
                    selectedTicket === "Regular Access"
                      ? "bg-[#197686]"
                      : "bg-[#052228]"
                  } ${errors.ticket ? "border-red-500" : "border-[#07373F]"}`}
                  {...register("ticket")}
                  onClick={() => handleSelect("Regular Access")}
                >
                  <div className="join">
                    <p className="font-extrabold text-2xl">Free</p>
                    <p className="text-sm">REGULAR ACCESS</p>
                    <p className="font-light text-xs">20/52</p>
                  </div>
                </div>
                <div
                  className={`text-white py-3 px-3 border-2 border-[#197686] rounded-lg join hover:cursor-pointer ${
                    selectedTicket === "VIP Access"
                      ? "bg-[#197686]"
                      : "bg-[#052228]"
                  } ${errors.ticket ? "border-red-500" : "border-[#07373F]"}`}
                  {...register("ticket")}
                  onClick={() => handleSelect("VIP Access")}
                >
                  <div className="join">
                    <p className="font-extrabold text-2xl">$150</p>
                    <p className="text-sm">VIP ACCESS</p>
                    <p className="font-light text-xs">20/52</p>
                  </div>
                </div>
                <div
                  className={`text-white py-3 px-3 border-2 border-[#197686] rounded-lg join hover:cursor-pointer ${
                    selectedTicket === "VVIP Access"
                      ? "bg-[#197686]"
                      : "bg-[#052228]"
                  } ${errors.ticket ? "border-red-500" : "border-[#07373F]"}`}
                  {...register("ticket")}
                  onClick={() => handleSelect("VVIP Access")}
                >
                  <div className="join">
                    <p className="font-extrabold text-2xl">$150</p>
                    <p className="text-sm">VVIP ACCESS</p>
                    <p className="font-light text-xs">20/52</p>
                  </div>
                </div>
                {errors.ticket && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.ticket.message}
                  </p>
                )}
              </div>

              <h1 className="join text-white mt-10 text-sm lg:text-sm mb-2">
                Number of Tickets
              </h1>
              <select
                name=""
                id=""
                className={`w-full border-2 border-[#07373F] bg-[#08252B] rounded-2xl py-3 px-4 text-white ${
                  errors.role ? "border-red-500" : "border-[#07373F]"
                }`}
                {...register("role")}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              {errors.role && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.role.message}
                </p>
              )}

              <div className="grid lg:grid-cols-2 gap-4 my-7 px-8 rounded-2xl">
                <button
                  onClick={handleCancel}
                  style={{ fontFamily: "Jeju" }}
                  className="border-2 border-[#24A0B5] text-[#24A0B5] w-full py-2.5 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={() => navigate("/attendeedetails")}
                  style={{ fontFamily: "Jeju" }}
                  className="bg-[#24A0B5] text-white w-full py-2.5 rounded-lg"
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SelectTicket;
