import React from "react";

const AboutSectionThree = () => {
  return (
    <div
      className="w-full flex flex-col justify-center items-center py-[50px] md:py-[50px] lg:py-[100px]"
      style={{
        backgroundImage: `url('/images/unique-feature.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-full text-center"
      >
        <p className="text-4xl md:text-7xl font-bold text-white">Our</p>
        <p className="text-4xl md:text-7xl font-bold bg-white bg-gradient-to-r from-[#74EE15] via-[#74EE15] to-[#59c107] inline-block text-transparent bg-clip-text">
          Unique Features
        </p>
      </div>
      <div className="flex flex-col justify-center items-between gap-12 mt-8 md:mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24">
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-easing="ease-in-sine"
            className="flex items-end gap-5"
          >
            <div>
              <h2 className="text-6xl font-bold text-white mb-2">01</h2>
              <img
                src="/images/about-timer.png"
                alt=""
                className="w-[100px] md:w-full"
              />
            </div>
            <div className="border-[1px] border-[#74EE15] p-3 md:p-5">
              <h2
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-easing="ease-in-sine"
                className="text-xl md:text-3xl text-white"
              >
                Quick Access <br /> Rentals
              </h2>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-easing="ease-in-sine"
            className="flex items-end gap-5"
          >
            <div>
              <h2 className="text-6xl font-bold text-white mb-2">02</h2>
              <img
                src="/images/about-user.png"
                alt=""
                className="w-[100px] md:w-full"
              />
            </div>
            <div className="border-[1px] border-[#74EE15] p-3 md:p-5">
              <h2
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-easing="ease-in-sine"
                className="text-xl md:text-3xl text-white"
              >
                Professional <br /> Service
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24">
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-easing="ease-in-sine"
            className="w-full md:w-1/2 flex items-end gap-5"
          >
            <div>
              <h2 className="text-6xl font-bold text-white mb-2">03</h2>
              <img
                src="/images/about-call.png"
                alt=""
                className="w-[100px] md:w-full"
              />
            </div>
            <div className="border-[1px] border-[#74EE15] p-3 md:p-5">
              <h2
                data-aos="fade-up"
                data-aos-delay="1100"
                data-aos-easing="ease-in-sine"
                className="text-xl md:text-3xl text-white"
              >
                Multilingual
                <br /> Support
              </h2>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-easing="ease-in-sine"
            className="w-full md:w-1/2 flex items-end gap-5"
          >
            <div>
              <h2 className="text-6xl font-bold text-white mb-2">04</h2>
              <img
                src="/images/about-car.png"
                alt=""
                className="w-[100px] md:w-full"
              />
            </div>
            <div className="border-[1px] border-[#74EE15] p-3 md:p-5">
              <h2
                data-aos="fade-up"
                data-aos-delay="1200"
                data-aos-easing="ease-in-sine"
                className="text-xl md:text-3xl text-white"
              >
                Diverse For
                <br /> Traveler
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionThree;
