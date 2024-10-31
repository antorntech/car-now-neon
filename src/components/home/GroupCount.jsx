import React from "react";

const GroupCount = () => {
  return (
    <div
      className="bg-cover bg-center px-5 py-[80px] md:py-[100px]"
      style={{ backgroundImage: `url('/images/group-count.png')` }}
    >
      <div className="max-w-screen-xl mx-auto h-full flex flex-col justify-center gap-8">
        <div
          data-aos="flip-up"
          data-aos-delay="500"
          className="flex items-center gap-5"
        >
          <div>
            <img src="/images/count1.png" alt="count1" />
          </div>
          <div>
            <h2 className="text-5xl font-bold text-white">10K+</h2>
            <p className="text-white text-xl font-semibold">
              Number of Satisfied Customers
            </p>
          </div>
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="600"
          className="flex items-center gap-5"
        >
          <div>
            <img src="/images/count2.png" alt="count2" />
          </div>
          <div>
            <h2 className="text-5xl font-bold text-white">50+</h2>
            <p className="text-white text-xl font-semibold">
              Number of Vehicles
            </p>
          </div>
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="700"
          className="flex items-center gap-5"
        >
          <div>
            <img src="/images/count3.png" alt="count3" />
          </div>
          <div>
            <h2 className="text-5xl font-bold text-white">10 Years</h2>
            <p className="text-white text-xl font-semibold">Years of Service</p>
          </div>
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="800"
          className="flex items-center gap-5"
        >
          <div>
            <img src="/images/count4.png" alt="count4" />
          </div>
          <div>
            <h2 className="text-5xl font-bold text-white">500+</h2>
            <p className="text-white text-xl font-semibold">
              Number of Coffees Offered to <br /> Our Customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCount;
