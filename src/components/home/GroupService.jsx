import React from "react";

const GroupService = () => {
  return (
    <div className="w-full px-5 pb-[20px] md:pb-[50px] lg:pb-[100px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="w-full md:w-1/2">
            <img
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-easing="ease-in-sine"
              src="/images/group-service.png"
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-easing="ease-in-sine"
              className="text-2xl md:text-4xl lg:text-6xl font-bold text-white"
            >
              Services with a Wide Range of Cars
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-easing="ease-in-sine"
              className="my-5 text-white"
            >
              We believe that the best way to explore the island is by car, and
              we offer a variety of vehicles to suit all budgets and needs.
              Whether you are looking for a small car for city driving or a
              larger vehicle for exploring the countryside, we have the perfect
              car for you.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-easing="ease-in-sine"
              className="w-full"
            >
              <div className="flex flex-col md:flex-row items-center gap-5 w-full">
                <div className="py-1 border-b-2 border-gray-300 w-full">
                  <span className="text-lg font-semibold text-white">
                    Many Pickup Location
                  </span>
                </div>
                <div className="py-1 border-b-2 border-gray-300 w-full">
                  <span className="text-lg font-semibold text-white">
                    Affordable Rates
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-5 w-full mt-5">
                <div className="py-1 border-b-2 border-gray-300 w-full">
                  <span className="text-lg font-semibold text-white">
                    Vast Vehicle Selection
                  </span>
                </div>
                <div className="py-1 border-b-2 border-gray-300 w-full">
                  <span className="text-lg font-semibold text-white">
                    Exceptional Customer Service
                  </span>
                </div>
              </div>
            </div>
            <button
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-easing="ease-in-sine"
              type="submit"
              className="bg-gradient-to-l from-[#74EE15] to-[#59c107] text-white font-semibold px-6 py-4 mt-5 md:mt-8 rounded-lg transition duration-300"
            >
              Choose a Car
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupService;
