import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import LongTermForm from "../components/LongTermForm/LongTermForm";
import PremiumCarRent from "../components/home/PremiumCarRent";

const LongTerm = () => {
  return (
    <>
      <PageHeader
        title={"Long-Term Form"}
        subtitle={"BOOK THE BEST CAR AT THE LOWEST PRICE"}
        banner={"/images/longterm-bg.png"}
      />
      <div className="pb-[50px] md:py-[80px] lg:py-[100px]">
        <LongTermForm />
      </div>
      <div className="max-w-screen-xl mx-auto pb-[50px] md:pb-[80px] lg:pb-[100px]">
        <div className="w-full flex flex-col md:flex-row md:items-center gap-12 p-10 md:p-0">
          <div className="w-full md:w-1/3">
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              src="/images/traveling3.png"
              alt=""
              className="w-full object-contain"
            />
          </div>
          <div className="w-full md:w-2/3">
            <div data-aos="fade-up" data-aos-duration="1000" className="w-full">
              <p className="text-3xl md:text-5xl font-bold text-white">
                Tailored LongTerm
              </p>
              <p className="text-3xl md:text-5xl font-bold bg-white bg-gradient-to-r from-[#74EE15] via-[#74EE15] to-[#59c107] inline-block text-transparent bg-clip-text">
                Rental Plans
              </p>
              <p className="mt-5 text-white">
                Our monthly rental plans offer significant savings compared to
                short-term rentals, allowing you to stretch your travel budget
                further. Tailored to suit your individual needs and travel
                plans, our long-term rental options provide the flexibility and
                convenience you need to explore at your own pace, without the
                hassles of daily rental transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center px-5 py-[50px] md:py-[100px]"
        style={{ backgroundImage: `url('/images/longcontact-bg.png')` }}
      >
        <div className="max-w-screen-xl mx-auto h-full flex justify-end">
          <div className="w-full md:w-2/5">
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
              className="text-4xl md:text-6xl font-bold text-white"
            >
              Contact Us
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
              className="text-white py-5"
            >
              Contact us today to discuss your long-term rental needs. We're
              here to help you find the perfect vehicle and ensure a seamless
              rental experience from start to finish
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
              className="mb-6 flex items-center gap-3 mt-5"
            >
              <div className="bg-[#74EE15] text-white w-16 h-16 rounded-md flex items-center justify-center">
                <i className="fa-solid fa-envelope text-5xl" />
              </div>
              <div>
                <p className="text-[#74EE15] text-2xl md:text-3xl font-bold pb-1">
                  Send us a message
                </p>
                <p className="text-white text-2xl">info@automateplus.com</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
              className="flex items-center gap-3"
            >
              <div className="bg-[#74EE15] text-white w-16 h-16 rounded-md flex items-center justify-center">
                <i className="fa-solid fa-phone text-5xl" />
              </div>
              <div>
                <p className="text-[#74EE15] text-2xl md:text-3xl font-bold pb-1">
                  Setup a call
                </p>
                <p className="text-white text-2xl">+35699206826</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-duration="1000"
              className="mt-10"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 border-[3px] border-[#74EE15] focus:outline-none focus:ring-[3px] focus:ring-transparent focus:border-[3px]"
              />
              <button className="mt-3 uppercase px-4 py-3 text-[16px] bg-gradient-to-l from-[#74EE15] to-[#59c107] text-white w-full shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-5 md:px-0 py-[50px] md:py-[80px] lg:py-[100px]">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full flex items-center justify-center gap-4"
        >
          <p className="text-3xl md:text-5xl font-bold text-white">Visit </p>
          <p className="text-3xl md:text-5xl font-bold bg-white bg-gradient-to-r from-[#74EE15] via-[#74EE15] to-[#59c107] inline-block text-transparent bg-clip-text">
            Us Now
          </p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6465.719556211939!2d14.463848!3d35.876953!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDUyJzM3LjAiTiAxNMKwMjcnNTkuMSJF!5e0!3m2!1sen!2snl!4v1726747530964!5m2!1sen!2snl"
            className="w-full h-[300px] md:h-[500px] lg:h-[600px] mt-6 md:mt-8 lg:mt-10"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <PremiumCarRent />
    </>
  );
};

export default LongTerm;
