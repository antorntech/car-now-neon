import React from "react";

const ContactSectionOne = () => {
  return (
    <div className="px-5 py-[50px] md:py-[80px] lg:py-[100px]">
      <div className="w-full text-center">
        <p className="text-lg md:text-2xl font-bold text-white">
          READY TO HELP YOU
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="hidden text-3xl md:text-5xl font-bold bg-white bg-gradient-to-r from-[#74EE15] via-[#74EE15] to-[#59c107] md:inline-block text-transparent bg-clip-text"
        >
          Send Your Message
        </p>
        <p className="inline-block text-3xl md:text-5xl font-bold bg-white bg-gradient-to-r from-[#74EE15] via-[#74EE15] to-[#59c107] md:hidden text-transparent bg-clip-text">
          Send Your Message
        </p>
        <p className="text-md w-full md:w-1/2 mx-auto mt-2 text-white">
          Our friendly and knowledgeable staff is always available to assist
          you, from initial inquiries to the end of your rental period. We're
          committed to providing exceptional customer service that exceeds your
          expectations.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 md:mt-8 lg:mt-12">
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="flex flex-col justify-center items-center border-2 border-gray-200 hover:border-[#74EE15] transition-all duration-500 pt-4 pb-8 rounded-md"
          >
            <lord-icon
              src="https://cdn.lordicon.com/cnpvyndp.json"
              trigger="loop"
              delay="2000"
              colors="primary:#74EE15"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              Our Location
            </h3>
            <p className="text-md text-gray-400 mt-1">
              172 Triq Il-Vitorja, Automate
            </p>
            <button className="mt-5 px-5 py-2 bg-gradient-to-l from-[#74EE15] to-[#59c107] text-white rounded-md shadow-lg">
              Visit Us
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="flex flex-col justify-center items-center border-2 border-gray-200 hover:border-[#74EE15] transition-all duration-500 pt-4 pb-8 rounded-md"
          >
            <lord-icon
              src="https://cdn.lordicon.com/rsvfayfn.json"
              trigger="loop"
              delay="2000"
              colors="primary:#74EE15"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              Call Anytime
            </h3>
            <p className="text-md text-gray-400 mt-1">+35699206826</p>
            <button className="mt-5 px-5 py-2 bg-gradient-to-l from-[#74EE15] to-[#59c107] text-white rounded-md shadow-lg">
              Enquiry
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            className="flex flex-col justify-center items-center border-2 border-gray-200 hover:border-[#74EE15] transition-all duration-500 pt-4 pb-8 rounded-md"
          >
            <lord-icon
              src="https://cdn.lordicon.com/nzixoeyk.json"
              trigger="loop"
              delay="2000"
              colors="primary:#74EE15"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              Send Email
            </h3>
            <p className="text-md text-gray-400 mt-1">info@automateplus.com</p>
            <button className="mt-5 px-5 py-2 bg-gradient-to-l from-[#74EE15] to-[#59c107] text-white rounded-md shadow-lg">
              Email Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSectionOne;
