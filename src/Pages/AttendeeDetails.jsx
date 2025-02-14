import { useEffect, useState } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ProgressBar from "../Component/ProgressBar";
import { MdOutlineMail } from "react-icons/md";

function AttendeeDetails() {
  const LOCAL_STORAGE_KEY = "contactFormData";

  // Yup validation schema
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    message: yup
      .string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
    avatar: yup
      .string()
      .url("Invalid URL format")
      .matches(
        /\.(jpeg|jpg|gif|png|webp)$/,
        "Must be a valid image URL (jpeg, jpg, png, gif, webp)"
      ),
  });
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
      name: "",
      email: "",
      avatar: "",
    },
  });

  //   Save form data to Local Storage in real-time
  useEffect(() => {
    const subscription = watch((formData) => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data)); // Ensure latest data is stored
    navigate("/ticketready");
    // localStorage.removeItem(LOCAL_STORAGE_KEY);
  };
  //Clear Local Storage

  const [imageUrl, setImageUrl] = useState("");

  const openWidget = () => {
    window.cloudinary
      .createUploadWidget(
        {
          cloudName: "dour8eemg", // Replace with your Cloudinary cloud name
          uploadPreset: "ticket_uploads", // Set an upload preset in Cloudinary
        },
        (error, result) => {
          if (!error && result.event === "success") {
            const uploadedImageUrl = result.info.secure_url;
            setImageUrl(uploadedImageUrl); // Store locally in component state
            setValue("avatar", uploadedImageUrl); // Update form state

            // Save to Local Storage
            const currentData =
              JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
            const updatedData = { ...currentData, avatar: uploadedImageUrl };
            localStorage.setItem(
              LOCAL_STORAGE_KEY,
              JSON.stringify(updatedData)
            );
          }
        }
      )
      .open();
  };

  return (
    <>
      <div className="mt-5 lg:mx-94 mx-7 lg:px-12 px-2 py-10 border-2 rounded-4xl border-[#197686] bg-[#05252C]">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div style={{ fontFamily: "Jeju" }} className="text-white flex">
            <p className="lg:text-3xl text-2xl">Attendee Details</p>
            <p className="ml-auto">Step 2/3</p>
          </div>
          <ProgressBar />
          <div className="lg:border-2 rounded-4xl border-[#197686] bg-[#08252B] my-5 lg:px-5">
            <div className="join my-5 lg:px-6 py-10 border-2 rounded-4xl border-[#07373F] bg-[#05252C] text-white">
              <h1 className="pb-7 px-3">Upload Profile Photo</h1>

              <div className="relative group lg:bg-[#0E464F] w-full h-[160px] rounded-sm">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="uploaded"
                    className="absolute inset-0 -top-5 w-[220px] h-[200px] rounded-2xl mx-auto"
                    {...register("avatar")}
                  />
                ) : (
                  <div
                    className={`absolute inset-0 -top-4.5 join w-[220px] h-[200px] bg-[#0E464F] border-3 border-[#24A0B5] mx-auto rounded-2xl text-center hover:cursor-pointer pt-16 ${
                      errors.avatar ? "border-red-500" : "border-[#24A0B5]"
                    }`}
                    onClick={openWidget}
                  >
                    <span className="text-white">
                      <AiOutlineCloudDownload className="mx-auto text-2xl" />
                      <p className="text-xs mt-2">
                        Drag & drop or click to
                        <br /> upload
                      </p>
                    </span>
                  </div>
                )}
                {errors.avatar && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.avatar.message}
                  </p>
                )}
                {imageUrl && (
                  <div
                    className="absolute inset-0 -top-5 join w-[220px] h-[200px] bg-[#0E464F] border-3 border-[#24A0B5] mx-auto rounded-2xl text-center hover:cursor-pointer pt-16 opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                    onClick={openWidget}
                  >
                    <span className="text-white">
                      <AiOutlineCloudDownload className="mx-auto text-2xl" />
                      <p className="text-xs mt-2">
                        Drag & drop or click to
                        <br /> upload
                      </p>
                    </span>
                  </div>
                )}
              </div>
            </div>

            <hr className="border-2 border-[#07373F] my-6" />

            <div className="text-white join text-sm">
              <div>
                <label className="" htmlFor="">
                  Enter your name
                </label>
                <input
                  type="text"
                  className={`w-full py-3 pl-4 mt-2 rounded-lg border-1 border-[#07373F] focus:border-[red] focus:border-2 ${
                    errors.name ? "border-red-500" : "border-[#24A0B5]"
                  }`}
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="mt-5 relative">
                <label htmlFor="">Enter your email *</label>
                <input
                  placeholder="hello@avioflagos.io"
                  type="email"
                  className={`w-full py-3 pl-8 mt-2 rounded-lg border-1 border-[#07373F] ${
                    errors.email ? "border-red-500" : "border-[#24A0B5]"
                  }`}
                  {...register("email")}
                />
                <MdOutlineMail className="absolute top-10 left-2 text-xl text-white" />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mt-5">
                <label htmlFor="">Special request?</label>
                <br />
                <textarea
                  placeholder="Textarea"
                  name=""
                  id=""
                  className={`w-full py-10 pl-4 mt-2 rounded-lg border-1 border-[#07373F] ${
                    errors.message ? "border-red-500" : "border-[#24A0B5]"
                  }`}
                  {...register("message")}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="lg:block hidden">
              <div className="grid lg:grid-cols-2 gap-4 my-7 px-8 rounded-2xl">
                <button
                  onClick={() => navigate(-1)}
                  style={{ fontFamily: "Jeju" }}
                  className="border-2 border-[#24A0B5] text-[#24A0B5] w-full py-2.5 rounded-lg hover:cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  style={{ fontFamily: "Jeju" }}
                  className="bg-[#24A0B5] text-white w-full py-2.5 rounded-lg hover:cursor-pointer"
                >
                  Get My Ticket
                </button>
              </div>
              </div>

              <div className="lg:hidden block">
              <div className="grid lg:grid-cols-2 gap-4 my-7 px-8 rounded-2xl">
              <button
                  type="submit"
                  style={{ fontFamily: "Jeju" }}
                  className="bg-[#24A0B5] text-white w-full py-2.5 rounded-lg hover:cursor-pointer"
                >
                  Get My Ticket
                </button>
                <button
                  onClick={() => navigate(-1)}
                  style={{ fontFamily: "Jeju" }}
                  className="border-2 border-[#24A0B5] text-[#24A0B5] w-full py-2.5 rounded-lg hover:cursor-pointer"
                >
                  Back
                </button>
              </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AttendeeDetails;
