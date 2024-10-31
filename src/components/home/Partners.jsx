import React, { act, useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FleetForm from "../fleet/FleetForm";
import useGetData from "../../hooks/useGetData";
import usePostData from "../../hooks/usePostData";
import { Link, useNavigate } from "react-router-dom";
import { ContextAvailablity } from "../../context/Availability";

const Partners = () => {
  const { data: locations } = useGetData("locations");
  const navigate = useNavigate();
  const { state, dispatch } = useContext(ContextAvailablity);

  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: null,
    dropoffDate: null,
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    dispatch({ type: "SET_FORM_DATA", formData: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.pickupLocation ||
      !formData.dropoffLocation ||
      !formData.pickupDate ||
      !formData.dropoffDate
    )
      return;

    const res = await usePostData("fleets-pickupfilter", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data) {
      dispatch({ type: "SET_API_RESPONSE", data: res.data });
      // clear form data
      setFormData({
        pickupLocation: "",
        dropoffLocation: "",
        pickupDate: null,
        dropoffDate: null,
      });
      navigate("/fleet");
    }
  };

  return (
    <div
      className="bg-cover bg-center px-5 h-[100vh] md:h-[75vh]"
      style={{ backgroundImage: `url('/images/partners-bg.jpg')` }}
    >
      <div className="max-w-screen-xl mx-auto h-full relative animate__animated animate__fadeInUp">
        <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-full">
          {/* Form Section */}
          <div className="w-full bg-white px-5 pb-5 md:pb-2 py-2 rounded-2xl shadow-lg">
            <FleetForm
              formData={formData}
              handleFormChange={handleFormChange}
              locations={locations}
              handleSubmit={handleSubmit}
            />
          </div>

          {/* Partners Section */}
          <div className="text-center">
            <button className="custom-shadow bg-white px-8 py-3 rounded-md my-5 md:my-10">
              <Link
                to="/longtermform"
                className="bg-white bg-gradient-to-r from-[#74EE15] to-black text-xl inline-block text-transparent bg-clip-text font-semibold"
              >
                Long Term Lease
              </Link>
            </button>
            <div className="max-w-screen-xl mx-auto flex items-center gap-12">
              <div className="w-full h-[2px] bg-[#d4d4d469]"></div>
              <div className="w-full h-[2px] bg-[#d4d4d469]"></div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-5 mt-5">
              <img
                src="/images/partners1.png"
                alt="Nissan"
                className="w-full h-full p-3 object-contain"
              />
              <img
                src="/images/partners2.png"
                alt="Toyota"
                className="w-full h-full p-3 object-contain"
              />
              <img
                src="/images/partners3.png"
                alt="Kia"
                className="w-full h-full p-3 object-contain"
              />
              <img
                src="/images/partners4.png"
                alt="Hyundai"
                className="w-full h-full p-3 object-contain"
              />
              <img
                src="/images/partners5.png"
                alt="Citroën"
                className="w-full h-full p-3 object-contain"
              />
              <img
                src="/images/partners6.png"
                alt="Peugeot"
                className="w-full h-full p-3 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
