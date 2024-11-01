import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerSay = () => {
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

  const reviews = [
    {
      id: 1,
      name: "Michael Fenech",
      designation: "Customer",
      comments:
        "I had a fantastic rental experience with Car Now Rental, and I would highly recommend them to anyone looking for a reliable and affordable car rental in Malta",
      image: "/images/avatar1.png",
    },
    {
      id: 2,
      name: "David Hardson",
      designation: "Customer",
      comments:
        "I had a fantastic rental experience with Car Now Rental, and I would highly recommend them to anyone looking for a reliable and affordable car rental in Malta",
      image: "/images/avatar2.png",
    },
    {
      id: 3,
      name: "Jessica Brown",
      designation: "Customer",
      comments:
        "I had a fantastic rental experience with Car Now Rental, and I would highly recommend them to anyone looking for a reliable and affordable car rental in Malta",
      image: "/images/avatar3.png",
    },
    {
      id: 4,
      name: "David Hardson",
      designation: "Customer",
      comments:
        "I had a fantastic rental experience with Car Now Rental, and I would highly recommend them to anyone looking for a reliable and affordable car rental in Malta",
      image: "/images/avatar1.png",
    },
    {
      id: 5,
      name: "Michael Fenech",
      designation: "Customer",
      comments:
        "I had a fantastic rental experience with Car Now Rental, and I would highly recommend them to anyone looking for a reliable and affordable car rental in Malta",
      image: "/images/avatar2.png",
    },
  ];

  return (
    <div className="w-full px-5 py-[50px] md:py-[80px] lg:py-[100px]">
      <div className="max-w-screen-xl mx-auto h-full">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full">
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
              className="text-[#74EE15] text-2xl"
            >
              Our testimonials
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
              className="text-3xl md:text-5xl font-bold text-white"
            >
              What They're Talking
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
              className="text-3xl md:text-5xl font-bold bg-white bg-gradient-to-r from-[#74EE15] via-[#74EE15] to-[#59c107] inline-block text-transparent bg-clip-text"
            >
              About Car Now
            </p>
          </div>
          <div>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
              className="text-white"
            >
              Discover the Rave Reviews for Crown Auto Services - Unveiling the
              Praise!
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
          className="mt-5 md:mt-12"
        >
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="text-center">
                <div className="w-full p-3 py-12 relative">
                  <div className="bg-white w-[75px] h-[75px] rounded-full absolute top-[10px] left-1/2 transform translate-x-[-50%] z-50">
                    <img src="/images/quote.png" alt="quote.png" />
                  </div>
                  <div className="review-card p-5 md:p-12 flex flex-col items-center">
                    <p className="text-lg pt-5">{review.comments}</p>
                    <div className="flex items-center gap-2 pt-5 pb-12">
                      <i class="fa-solid fa-star text-[#74EE15]"></i>
                      <i class="fa-solid fa-star text-[#74EE15]"></i>
                      <i class="fa-solid fa-star text-[#74EE15]"></i>
                      <i class="fa-solid fa-star text-[#74EE15]"></i>
                      <i class="fa-solid fa-star text-[#74EE15]"></i>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div>
                      <img src={review.image} alt="avatar.png" />
                    </div>
                    <div>
                      <p className="text-white">{review.name}</p>
                      <p className="text-white">{review.designation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CustomerSay;
