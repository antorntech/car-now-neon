import React from "react";
import { Link } from "react-router-dom";

const DiscoverSectionTwo = () => {
  return (
    <div className="w-full px-5 md:px-0 pb-[50px] md:pb-[80px] lg:pb-[100px]">
      <div className="max-w-screen-xl mx-auto">
        <div data-aos="fade-up" data-aos-duration="1000" className="w-full">
          <p className="text-2xl md:text-5xl font-bold text-white">
            Unleash the Freedom to Explore
          </p>
          <p className="text-2xl md:text-5xl font-bold bg-white bg-gradient-to-r from-[#74EE15] via-[#74EE15] to-[#59c107] inline-block text-transparent bg-clip-text">
            Automate by Car
          </p>
          <p className="mt-5 text-2xl text-gray-600">
            Venture off the beaten path and discover hidden coves, ancient
            ruins, and stunning coastal villages, all at your own pace
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mt-8">
          <div className="w-full md:w-1/2">
            <div className="bg-gradient-to-l from-[#74EE15] to-[#59c107] rounded-md px-6 py-12">
              <h1 className="text-xl md:text-3xl font-bold text-white">
                Backpacking AUTOMATE
              </h1>
              <p className="text-white py-3">
                Traveling is a unique experience as it's the best way to unplug
                from the pushes and pulls of daily life. It helps us to forget
                about our problems, frustrations, and fears at home. During our
                journey, we experience life in different ways. We explore new
                places, cultures, cuisines, traditions, and ways of living.
              </p>
              <Link
                to="/fleet"
                className="w-full inline-block text-center px-5 py-3 bg-white text-slate-800 rounded-md"
              >
                Rent Car
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="group overflow-hidden relative rounded-md">
                <img
                  src="/images/backpack1.png"
                  alt=""
                  className="w-full h-full group-hover:scale-110 transition-all duration-300"
                />
                <div className="w-full h-full absolute top-0 left-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
              </div>
              <div className="group overflow-hidden relative rounded-md">
                <img
                  src="/images/backpack2.jpg"
                  alt=""
                  className="w-full h-full group-hover:scale-110 transition-all duration-300"
                />
                <div className="w-full h-full absolute top-0 left-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
              </div>
              <div className="group overflow-hidden relative rounded-md">
                <img
                  src="/images/backpack3.jpg"
                  alt=""
                  className="w-full h-full group-hover:scale-110 transition-all duration-300"
                />
                <div className="w-full h-full absolute top-0 left-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
              </div>
              <div className="group overflow-hidden relative rounded-md">
                <img
                  src="/images/backpack4.jpg"
                  alt=""
                  className="w-full h-full group-hover:scale-110 transition-all duration-300"
                />
                <div className="w-full h-full absolute top-0 left-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSectionTwo;
