import React, { useState } from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import { useLocation } from "react-router-dom";
import useGetData from "../hooks/useGetData";

const Checkout = () => {
  const location = useLocation();
  // Access the id from location state
  const { id } = location.state || {};
  const { data } = useGetData("fleets");
  const car = data?.find((item) => item.id === id);
  console.log(car);

  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    phoneNumber: "",
    whatsappNumber: "",
    flightDetails: "",
    age: "",
    streetAddress: "",
    country: "",
    city: "",
    state: "",
    zipCode: "",
    message: "",
    idCard: null,
    drivingLicense: null,
    paymentMethod: "",
    extras: [],
    refundableDeposit: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleExtrasChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevFormData) => {
      let newExtras = [...prevFormData.extras];
      if (checked) {
        newExtras.push(value);
      } else {
        newExtras = newExtras.filter((extra) => extra !== value);
      }
      return {
        ...prevFormData,
        extras: newExtras,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here (e.g., send data to backend)
    console.log("Form data submitted:", formData);
  };

  return (
    <>
      <PageHeader title={"Checkout"} banner={"/images/hero-bg.png"} />
      <div className="bg-[#F7F8F9] py-10 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form Section */}
          <div className="lg:col-span-2 bg-white p-3 md:p-8 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">
              Plan & Pricing Details
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">First Name*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 !border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#74EE15] focus:!border-t-border-[#74EE15] focus:ring-border-[#199bff]/10"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Surname*</label>
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 !border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#74EE15] focus:!border-t-border-[#74EE15] focus:ring-border-[#199bff]/10"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 !border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#74EE15] focus:!border-t-border-[#74EE15] focus:ring-border-[#199bff]/10"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Phone Number*</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 !border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#74EE15] focus:!border-t-border-[#74EE15] focus:ring-border-[#199bff]/10"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Whatsapp Number</label>
                  <input
                    type="text"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 !border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#74EE15] focus:!border-t-border-[#74EE15] focus:ring-border-[#199bff]/10"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">
                    Flight or Ferry Details
                  </label>
                  <input
                    type="text"
                    name="flightDetails"
                    value={formData.flightDetails}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 !border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#74EE15] focus:!border-t-border-[#74EE15] focus:ring-border-[#199bff]/10"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Age*</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 !border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#74EE15] focus:!border-t-border-[#74EE15] focus:ring-border-[#199bff]/10"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Street Address*</label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 !border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#74EE15] focus:!border-t-border-[#74EE15] focus:ring-border-[#199bff]/10"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Country*</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 !border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#74EE15] focus:!border-t-border-[#74EE15] focus:ring-border-[#199bff]/10"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">City*</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 !border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#74EE15] focus:!border-t-border-[#74EE15] focus:ring-border-[#199bff]/10"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">State*</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 !border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#74EE15] focus:!border-t-border-[#74EE15] focus:ring-border-[#199bff]/10"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Zip Code*</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 !border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#74EE15] focus:!border-t-border-[#74EE15] focus:ring-border-[#199bff]/10"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700">
                  Enter Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 !border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#74EE15] focus:!border-t-border-[#74EE15] focus:ring-border-[#199bff]/10"
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  ID card* (max 4mb)
                </label>
                <input
                  type="file"
                  name="idCard"
                  onChange={handleFileChange}
                  className="w-full border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Driving License* (max 4mb)
                </label>
                <input
                  type="file"
                  name="drivingLicense"
                  onChange={handleFileChange}
                  className="w-full border-gray-300 p-2 rounded"
                  required
                />
              </div>

              {/* Extras Section */}
              <div>
                <label className="block text-gray-700">Extras</label>
                <div className="flex flex-col md:flex-row gap-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value="Child Seat"
                      onChange={handleExtrasChange}
                    />
                    <span>Child Seat (€20.00)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value="Child Booster"
                      onChange={handleExtrasChange}
                    />
                    <span>Child Booster (€20.00)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value="Extra Driver"
                      onChange={handleExtrasChange}
                    />
                    <span>Extra Driver (€25.00)</span>
                  </label>
                </div>
              </div>

              {/* Payment Section */}
              <div>
                <label className="block text-gray-700">Payment</label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="creditCard"
                      onChange={handleInputChange}
                    />
                    <span>Pay with Credit Card</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="googlePay"
                      onChange={handleInputChange}
                    />
                    <span>Google Pay</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="applePay"
                      onChange={handleInputChange}
                    />
                    <span>Apple Pay</span>
                  </label>
                </div>
              </div>

              {/* Refundable Deposit */}
              <div>
                <label className="block text-gray-700">
                  Refundable deposit
                </label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="refundableDeposit"
                      value="payNow"
                      onChange={handleInputChange}
                    />
                    <span>Pay Now</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="refundableDeposit"
                      value="payUponCollection"
                      onChange={handleInputChange}
                    />
                    <span>Pay upon collection</span>
                  </label>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" required />
                  <span>
                    I have read and accept the rental information, the{" "}
                    <a href="#" className="text-blue-500">
                      Terms and Conditions of Rental Agreement
                    </a>
                    , and the Privacy Policy.
                  </span>
                </label>
              </div>
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="bg-white p-3 md:p-8 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">
              Order Summary
              <hr className="border-gray-300 my-4" />
            </h2>
            <div className="mb-5">
              <div className="flex justify-between mb-2 items-center">
                <h3 className="text-lg mb-2">Coupon Applied</h3>
                <p className="text-base font-normal text-gray-700">€0.00</p>
              </div>
              <div className="flex justify-between items-center gap-3">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 !border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-[#74EE15] focus:!border-t-border-[#74EE15] focus:ring-border-[#199bff]/10"
                  required
                />
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-l from-[#74EE15] to-[#59c107] text-white rounded-md shadow-lg"
                >
                  Apply
                </button>
              </div>
            </div>
            <hr className="border-gray-300 my-4" />
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Pickup Date</span>
                <span>17-10-2024 12:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span>Drop Off Date</span>
                <span>24-10-2024 12:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span>Fleet Charges</span>
                <span>€{car?.daily_rate}</span>
              </div>
              <div className="flex justify-between">
                <span>Extra Charges</span>
                <span>€0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Deposit</span>
                <span>€0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>€0.00</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Final Price</span>
                <span>€{car?.daily_rate}</span>
              </div>
              <hr className="border-gray-300 my-4" />
              <div className="w-full">
                <h2 className="text-2xl font-semibold">
                  {car?.brand} {car?.model}
                </h2>
                <p>similar same group vehicle</p>
                <img
                  src={car?.main_image}
                  alt="Toyota Aygo"
                  className="w-full object-contain my-10"
                />
                <button
                  type="submit"
                  className="w-full px-5 py-2 bg-gradient-to-l from-[#74EE15] to-[#59c107] text-white rounded-md shadow-lg"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
