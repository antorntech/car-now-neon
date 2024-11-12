import React from "react";
import ContactForm from "../ContactForm/ContactForm";

const ContactSectionTwo = () => {
  return (
    <div className="px-5 pb-[50px] md:pb-[80px] lg:pb-[100px]">
      <div className="w-full text-center">
        <p className="text-lg md:text-2xl font-bold text-white">
          LET'S CONNECT!
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-3xl md:text-5xl font-bold bg-white bg-gradient-to-r from-[#74EE15] via-[#74EE15] to-[#59c107] inline-block text-transparent bg-clip-text"
        >
          LEAVE US A MESSAGE
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto mt-5 md:mt-8 lg:mt-12">
        <div className="custom-shadow2 rounded-md p-5">
          <p className="text-md md:text-xl w-full md:w-3/4 text-center mx-auto mt-2 text-white">
            Have a question, need assistance, or simply want to share your Malta
            adventure with us? Feel free to leave us a message and we'll get
            back to you as soon as possible.
          </p>
          <hr className="text-gray-300 my-5 w-3/4 mx-auto" />
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSectionTwo;
