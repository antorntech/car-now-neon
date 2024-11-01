import React from "react";
import { Link } from "react-router-dom";

const DiscoverSectionThree = () => {
  return (
    <div className="w-full px-5 md:px-0 py-[50px] md:py-[80px] lg:py-[100px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full flex flex-col md:flex-row md:items-center gap-12">
          <div className="w-full md:w-1/3  relative">
            <img
              src="/images/traveling1.png"
              alt=""
              className="w-full object-contain"
            />
            <Link
              to="/fleet"
              className="absolute -bottom-8 -left-12 flex items-center gap-3 bg-white px-8 py-3 rounded-md"
            >
              <img src="/images/car-icon.png" alt="" className="size-12" />
              <span className="text-2xl font-semibold"> Rent A Car</span>
            </Link>
          </div>
          <div className="w-full md:w-2/3">
            <div data-aos="fade-up" data-aos-duration="1000" className="w-full">
              <p className="text-3xl md:text-5xl font-bold text-white">
                Island Enchanting
              </p>
              <p className="text-3xl md:text-5xl font-bold bg-white bg-gradient-to-r from-[#74EE15] via-[#74EE15] to-[#59c107] inline-block text-transparent bg-clip-text">
                Charms
              </p>
              <p className="mt-5 text-2xl text-gray-600">
                Our diverse range of vehicles, from compact city cars to
                spacious minivans, caters to individual preferences and group
                sizes, ensuring that your Malta adventure is tailored to your
                unique requirements. Whether you're seeking the vibrant energy
                of Valletta or the tranquil charm of Gozo, our vehicles will
                provide the perfect mode of transport to explore Malta's diverse
                landscapes and rich heritage.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row md:items-center gap-12 mt-12 md:mt-24 lg:mt-32">
          <div className="w-full md:w-2/3">
            <div data-aos="fade-up" data-aos-duration="1000" className="w-full">
              <p className="text-3xl md:text-5xl font-bold text-white">
                Embark on Your
              </p>
              <p className="text-3xl md:text-5xl font-bold bg-white bg-gradient-to-r from-[#74EE15] via-[#74EE15] to-[#59c107] inline-block text-transparent bg-clip-text">
                Malta Adventure
              </p>
              <p className="mt-5 text-2xl text-gray-600">
                Don't let car rental hinder your Maltese adventure. With Queen
                Car Rental as your guide, you can focus on creating
                unforgettable memories while exploring this captivating island.
                Book your rental today and let us be your partner in unlocking
                the wonders of Malta.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3  relative">
            <img
              src="/images/traveling2.png"
              alt=""
              className="w-full object-contain"
            />
            <Link
              to="/"
              className="absolute -bottom-8 -left-12 flex items-center gap-3 bg-white px-8 py-3 rounded-md"
            >
              <img src="/images/fly-icon.png" alt="" className="size-12" />
              <span className="text-2xl font-semibold"> Visit Automate</span>
            </Link>
          </div>
        </div>
        <div className="mt-14 md:mt-8 lg:mt-12">
          <div data-aos="fade-up" data-aos-duration="1000" className="w-full">
            <p className="text-3xl md:text-5xl font-bold text-white">Our</p>
            <p className="text-3xl md:text-5xl font-bold bg-white bg-gradient-to-r from-[#74EE15] via-[#74EE15] to-[#59c107] inline-block text-transparent bg-clip-text">
              Partners
            </p>
          </div>
          <div className="flex items-center justify-center gap-5">
            <img
              src="/images/partners1.webp"
              alt=""
              className="w-[150px] md:w-[300px]"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <img
              src="/images/partners2.webp"
              alt=""
              className="w-[150px] md:w-[300px]"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSectionThree;
