import React, { useState } from "react";

const LongTermForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    services: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email address is required";
    if (!formData.companyName)
      newErrors.companyName = "Company Name is required";
    if (!formData.services) newErrors.services = "Services required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");

      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        services: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 flex flex-col md:flex-row bg-white custom-shadow rounded-lg">
      <div className="flex-1 md:p-6">
        <div className="flex flex-col justify-center gap-5 mb-4">
          <div className="w-20 h-20 p-5 bg-gray-200 rounded-full flex justify-center items-center">
            <lord-icon
              src="https://cdn.lordicon.com/rsvfayfn.json"
              trigger="loop"
              delay="2000"
              colors="primary:#74EE15"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold">LONG TERM LEASE</h2>
        </div>
        <p className="text-gray-600 text-md md:text-lg my-4">
          From compact city cars to spacious SUVs, our extensive fleet caters to
          diverse needs and travel styles.
        </p>
        <div className="mb-6 flex items-center gap-3">
          <div className="bg-[#74EE15] text-white w-12 h-12 rounded-md flex items-center justify-center">
            <i class="fa-solid fa-envelope text-2xl"></i>
          </div>
          <div>
            <p className="text-[#74EE15] text-lg md:text-xl font-bold">
              Send us a message
            </p>
            <p className="text-gray-600">info@automateplus.com</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-[#74EE15] text-white w-12 h-12 rounded-md flex items-center justify-center">
            <i class="fa-solid fa-phone text-2xl"></i>
          </div>
          <div>
            <p className="text-[#74EE15] text-lg md:text-xl font-bold">
              Setup a call
            </p>
            <p className="text-gray-600">+35699206826</p>
          </div>
        </div>
      </div>

      <div className="flex-1 mt-8 md:mt-0 md:p-6">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-medium mb-2"
            >
              Full Name<span className="text-[#74EE15]">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter Your Name"
              className={`w-full px-4 py-2 border ${
                errors.fullName ? "border-[#74EE15]" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-[#74EE15]`}
            />
            {errors.fullName && (
              <p className="text-[#74EE15] text-sm">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address<span className="text-[#74EE15]">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Your Email"
              className={`w-full px-4 py-2 border ${
                errors.email ? "border-[#74EE15]" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-[#74EE15]`}
            />
            {errors.email && (
              <p className="text-[#74EE15] text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="companyName"
              className="block text-gray-700 font-medium mb-2"
            >
              Company Name<span className="text-[#74EE15]">*</span>
            </label>
            <input
              id="companyName"
              type="text"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Enter Your Company"
              className={`w-full px-4 py-2 border ${
                errors.companyName ? "border-[#74EE15]" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-[#74EE15]`}
            />
            {errors.companyName && (
              <p className="text-[#74EE15] text-sm">{errors.companyName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="services"
              className="block text-gray-700 font-medium mb-2"
            >
              Services<span className="text-[#74EE15]">*</span>
            </label>
            <input
              id="services"
              type="text"
              value={formData.services}
              onChange={handleInputChange}
              placeholder="Enter required services"
              className={`w-full px-4 py-2 border ${
                errors.services ? "border-[#74EE15]" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-[#74EE15]`}
            />
            {errors.services && (
              <p className="text-[#74EE15] text-sm">{errors.services}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Enter Your Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#74EE15]"
            />
          </div>

          <div className="md:col-span-2">
            <button className="px-5 py-2 bg-gradient-to-l from-[#74EE15] to-[#59c107] text-white rounded-md shadow-lg">
              Send Message To Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LongTermForm;
