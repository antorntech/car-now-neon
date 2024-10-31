import React from "react";

const FleetHero = () => (
  <div
    className="w-full h-[25vh] md:[40vh] lg:h-[65vh] flex justify-center items-center rounded-3xl"
    style={{
      backgroundImage: `url('/images/hero-bg.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="w-full h-full flex flex-col items-center justify-center">
      <p className="mb-0 lg:mb-2 text-center text-white text-[12px] lg:text-xl font-bold animate__animated animate__fadeInUp">
        BOOK THE BEST CAR AT THE LOWEST PRICE
      </p>
      <h1 className="text-white text-3xl lg:text-6xl font-bold animate__animated animate__fadeInUp">
        Discover our Fleet
      </h1>
      <img
        className="w-2/3 md:w-1/3 mt-1 md:mt-3 animate__animated animate__fadeInUp"
        src="/images/underline.png"
        alt=""
      />
    </div>
  </div>
);

export default FleetHero;
