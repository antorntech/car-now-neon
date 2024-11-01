import React from "react";

const Hero = () => {
  return (
    <div className="relative px-5 py-2 bg-[url('/images/hero-bg.png')] bg-no-repeat bg-cover bg-bottom h-[40vh] md:h-[80vh] overflow-hidden">
      <img
        className="absolute bottom-[37%] right-[10%] md:bottom-[34%] md:right-[20%] w-1/2 md:w-auto animate__animated animate__fadeInUp"
        src="/images/underline.png"
        alt=""
      />
      <div className="max-w-screen-xl mx-auto h-full flex justify-center items-center">
        <div className="w-full text-center">
          <p className="text-white uppercase text-sm md:text-[26px] mb-0 md:mb-10 animate__animated animate__fadeInUp">
            Rent the best car at lowest price
          </p>
          <h1 className="text-4xl md:text-[120px] font-bold text-white py-2 animate__animated animate__fadeInUp">
            Car Now Rental
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
