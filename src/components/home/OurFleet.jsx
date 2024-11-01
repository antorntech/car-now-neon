import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const OurFleet = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const fleets = [
    {
      id: 1,
      category: "bike",
      name: "Bike",
      image: "/images/bike.png",
    },
    {
      id: 2,
      category: "small",
      name: "Small Car",
      image: "/images/small.png",
    },
    {
      id: 3,
      category: "medium",
      name: "Medium Car",
      image: "/images/medium.png",
    },
    {
      id: 4,
      category: "suv",
      name: "SUV Car",
      image: "/images/suv.png",
    },
  ];

  return (
    <div className="w-full px-5 our-fleets">
      <div className="max-w-screen-xl mx-auto h-full flex justify-center items-center">
        <div className="w-full text-center">
          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="text-3xl md:text-5xl font-bold text-white">
              Discover
            </p>
            <p className="text-3xl md:text-5xl font-bold bg-white bg-gradient-to-r from-[#74EE15] via-[#74EE15] to-[#59c107] inline-block text-transparent bg-clip-text">
              Our Fleet
            </p>
          </div>
          <p className="mt-5 px-5 text-white">
            From compact city cars to spacious SUV, we have a comprehensive
            selection of vehicles to cater to your individual preferences and
            requirements. Whether you're traveling solo, with a partner, or as a
            family, we have the perfect car for your Malta adventure.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <Slider {...settings}>
          {fleets.map((fleet, index) => (
            <div key={index} className="text-center">
              <img
                src={fleet.image}
                alt={fleet.category}
                className="w-full md:w-4/5 mx-auto"
              />
              <button className="my-10 px-5 py-2 bg-gradient-to-l from-[#74EE15] to-[#59c107] text-white rounded-md shadow-lg">
                {fleet.name}
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurFleet;
