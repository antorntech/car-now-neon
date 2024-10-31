import React from "react";

const AboutSectionTwo = () => {
  return (
    <div className="w-full px-5 pb-[20px] md:pb-[50px] lg:pb-[100px] overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="w-full md:w-1/2">
            <h4
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-easing="ease-in-sine"
              className="text-xl md:text-2xl lg:text-4xl font-bold text-white"
            >
              Making the Most of Your
            </h4>
            <h1
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-easing="ease-in-sine"
              className="text-2xl md:text-4xl lg:text-6xl font-bold text-[#74EE15]"
            >
              RENTAL <br /> EXPERIENCE
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-easing="ease-in-sine"
              className="my-5 text-gray-600"
            >
              Automate Plus Car Rental is <strong>your trusted partner</strong>{" "}
              for a seamless and enjoyable car rental experience in Malta,
              empowering you to fully immerse yourself in the island's
              captivating beauty without the burden of transportation logistics.
              Our commitment to personalized service and convenience ensures
              that you can effortlessly navigate the island's charm and uncover
              its hidden gems.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-easing="ease-in-sine"
              className="w-full"
            >
              <ul className="w-full flex flex-col gap-5">
                <li className="flex items-start gap-2">
                  <img src="/images/checklist.png" alt="" />

                  <span className="mt-1 text-gray-600">
                    <strong className="me-2">Convenience:</strong>
                    We make it easy for our customers to rent a car. We have a
                    wide network of locations across Malta, and we offer
                    convenient online and in-person booking options.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <img src="/images/checklist.png" alt="" />

                  <span className="mt-1 text-gray-600">
                    <strong className="me-2">Affordability:</strong>
                    We offer competitive rates on a variety of vehicles. We also
                    offer a variety of discounts and promotions to help you save
                    money.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <img src="/images/checklist.png" alt="" />

                  <span className="mt-1 text-gray-600">
                    <strong className="me-2">
                      Excellent Customer Service:
                    </strong>
                    We are committed to providing our customers with excellent
                    customer service. We have a team of experienced and
                    knowledgeable staff who are always happy to help in all the
                    languages.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-easing="ease-in-sine"
              src="/images/group-about.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionTwo;
