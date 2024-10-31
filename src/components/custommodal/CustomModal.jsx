import React from "react";
import { Link } from "react-router-dom";

const CustomModal = ({ isOpen, onClose, car }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      data-aos="fade-in"
      data-aos-duration="500"
    >
      <div className="relative bg-white custom-shadow p-4 rounded-md max-w-full max-h-full md:w-[80vw] md:h-[80vh] overflow-auto animate__animated animate__zoomIn animate__faster">
        <button
          onClick={onClose}
          className="absolute flex justify-center items-center top-4 right-4 md:left-4 bg-slate-600 w-6 h-6 md:w-12 md:h-12 rounded-full"
        >
          <i className="fa-solid fa-xmark text-[12px] md:text-[22px] text-white"></i>
        </button>
        <div className="grid grid-cols-1 md:grid-cols-8 gap-5 w-full h-full">
          <div className="w-full h-full md:col-span-4 order-2 md:order-1 flex items-center justify-center">
            <img
              src={`${car.main_image}`}
              alt="Selected"
              className="w-full object-cover"
            />
          </div>
          <div className="w-full h-full md:col-span-6 md:col-start-5 order-1 md:order-2 flex flex-col justify-center">
            <div class="space-y-4">
              <span className="bg-gradient-to-l from-[#74EE15] to-[#59c107] text-white text-sm px-3 py-1 rounded-md">
                {car.type}
              </span>

              <h1 class="text-3xl font-bold"> {car.brand + " " + car.model}</h1>
              <p class="text-gray-500">
                or similar same group vehicle{" "}
                <span class="text-gray-400">
                  <i class="fas fa-info-circle"></i>
                </span>
              </p>

              <div class="flex items-center justify-between">
                <span class="text-2xl font-bold text-[#59c107]">
                  € {parseInt(car.daily_rate).toFixed(2)}
                </span>
                <span class="text-gray-500 text-md">Price per day</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-bold text-[#59c107]">
                  € {parseInt(car.weekly_rate).toFixed(2)}
                </span>
                <span class="text-gray-500 text-md">Price per week</span>
              </div>

              <div className="flex">
                <Link
                  to="/checkout"
                  className="inline-block w-full bg-gradient-to-l from-[#74EE15] to-[#59c107] text-white text-center py-2 px-6 rounded-md"
                >
                  Choose
                </Link>
              </div>

              <hr />

              <div>
                <h3 class="font-semibold">Price Includes</h3>
                <p class="text-gray-600">Unlimited Mileage</p>
                <p class="text-gray-600">
                  €800 Damage Excess{" "}
                  <span class="text-gray-400">
                    <i class="fas fa-info-circle"></i>
                  </span>
                </p>
              </div>

              <hr />

              <div>
                <h3 class="font-semibold">Not Included</h3>
                <p class="text-gray-600">
                  You can also upgrade your rental options when you've chosen
                  your vehicle.
                </p>
                <p class="text-gray-500 text-sm italic">
                  We can’t guarantee the exact model you’ll get.
                </p>
              </div>

              <hr />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-12 w-full">
                <span className="text-gray-600">
                  <i className="fas fa-users"></i> {car.passengers} passengers
                </span>
                <span className="text-gray-600">
                  <i className="fas fa-door-open"></i> {car.doors} Doors
                </span>
                <span className="text-gray-600">
                  <i className="fas fa-cog"></i> {car.transmission}
                </span>
                <span className="text-gray-600">
                  <i className="fas fa-gas-pump"></i> {car.fuel_type}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
