import React from "react";
import { Link } from "react-router-dom";

const PremiumCarRent = () => {
  return (
    <div className="px-5 py-[20px] md:py-[40px] lg:py-[50px] bg-[#F4EFEF]">
      <div className="w-full relative">
        <img
          src="/images/premium-car.png"
          alt=""
          className="w-full h-[150px] md:h-[500px]"
        />
        <div
          className="text-right absolute top-1/2 right-2 md:right-32
        
        transform -translate-y-1/2"
        >
          <h4
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-sm md:text-2xl font-bold text-white"
          >
            Faster, easier access to car rental services
          </h4>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-white text-xl md:text-5xl lg:text-7xl font-bold"
          >
            Premium Car Rental
          </h1>
          <Link
            to="/fleet"
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mt-3 inline-block px-2 py-1 md:px-5 md:py-3 bg-gradient-to-l from-[#74EE15] to-[#59c107] text-white rounded-md shadow-lg"
          >
            Let's Ride With Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PremiumCarRent;
