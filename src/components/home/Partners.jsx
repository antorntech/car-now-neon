import { useContext, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import FleetForm from "../fleet/FleetForm";
import useGetData from "../../hooks/useGetData";
import postData from "../../hooks/usePostData";
import { Link, useNavigate } from "react-router-dom";
import { ContextAvailablity } from "../../context/Availability";

const Partners = () => {
  const { data: locations } = useGetData("locations");
  const navigate = useNavigate();
  const { dispatch } = useContext(ContextAvailablity);

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

    const res = await postData("fleets-pickupfilter", {
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

  const partners = [
    { src: "/images/partners1.svg", alt: "Nissan" },
    { src: "/images/partners2.svg", alt: "Toyota" },
    { src: "/images/partners3.svg", alt: "Kia" },
    { src: "/images/partners4.svg", alt: "Hyundai" },
    { src: "/images/partners5.svg", alt: "Citroën" },
    { src: "/images/partners6.svg", alt: "Peugeot" },
  ];

  return (
    <div
      className="bg-cover bg-center px-4"
      style={{ backgroundImage: `url('/images/partners-bg.jpg')` }}
    >
      <div className="max-w-screen-xl mx-auto h-full relative animate__animated animate__fadeInUp">
        <div className="w-full -mt-16">
          {/* Form Section */}
          <div className="w-full bg-white rounded-2xl shadow-lg">
            <FleetForm
              formData={formData}
              handleFormChange={handleFormChange}
              locations={locations}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
        {/* Partners Section */}
        <div className="py-16 space-y-5">
          <div className="flex justify-center items-center">
            <button className="custom-shadow bg-white px-8 py-3 rounded-md">
              <Link
                to="/longtermform"
                className="bg-white bg-gradient-to-r from-[#74EE15] to-black text-xl inline-block text-transparent bg-clip-text font-semibold"
              >
                Long Term Lease
              </Link>
            </button>
          </div>
          <div className="max-w-screen-xl mx-auto flex items-center gap-12">
            <div className="w-full h-[2px] bg-[#d4d4d469]"></div>
            <div className="w-full h-[2px] bg-[#d4d4d469]"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-5 md:gap-10 mt-5">
            {partners.map((partner, index) => (
              <img
                key={index}
                src={partner.src}
                alt={partner.alt}
                className="h-24 md:h-32 object-contain aspect-square filter grayscale"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
