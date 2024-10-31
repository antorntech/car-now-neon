import React, { useState } from "react";
import CustomModal from "../custommodal/CustomModal";
import { Link } from "react-router-dom";

const FleetCars = ({ cars }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarSelect = (data) => {
    setSelectedCar(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-0">
      {cars?.length > 0 ? (
        cars.map((car) => (
          <div
            key={car.id}
            className="w-full bg-white p-4 rounded-lg shadow-md hover:bg-yellow-300 transition duration-300"
          >
            <span className="bg-gradient-to-l from-[#74EE15] to-[#59c107] text-white text-sm px-3 py-1 rounded-md">
              {car.type}
            </span>
            <div className="w-full flex items-center justify-between mt-3">
              <div>
                <h3 className="text-lg md:text-2xl font-semibold">
                  {car.brand + " " + car.model}
                </h3>
                <p className="text-gray-500 text-sm mb-2">
                  or similar same group vehicle
                </p>
              </div>
              <div>
                <p className="text-xl font-bold">
                  € {parseInt(car.daily_rate).toFixed(2)}
                </p>
                <p>Price per day</p>
              </div>
            </div>
            <img
              src={car.main_image}
              alt={car.name}
              className="h-32 object-contain my-4 mx-auto"
            />

            <div className="flex justify-between w-full">
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
            <div className="mt-4 flex w-full justify-between gap-5">
              <Link
                to="/checkout"
                state={{
                  id: car.id,
                }}
                className="inline-block w-full bg-gradient-to-l from-[#74EE15] to-[#59c107] text-white text-center py-2 px-6 rounded-md"
              >
                Choose
              </Link>
              <button
                onClick={() => handleCarSelect(car)}
                className="w-full bg-gray-100 text-gray-800 py-2 px-6 rounded-md hover:bg-gray-200"
              >
                Details
              </button>
            </div>
            <CustomModal
              isOpen={isModalOpen}
              onClose={closeModal}
              car={selectedCar}
            />
          </div>
        ))
      ) : (
        <div className="flex flex-col justify-center">
          <lord-icon
            src="https://cdn.lordicon.com/hbtheitu.json"
            trigger="loop"
            delay="2000"
            colors="primary:#121331,secondary:#74EE15"
            style={{ width: "100px", height: "80px" }}
          ></lord-icon>
          <p className="text-red-500">No cars found</p>
        </div>
      )}
    </div>
  );
};

export default FleetCars;
