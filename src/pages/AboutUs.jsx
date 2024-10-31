import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import AboutSectionOne from "../components/about/AboutSectionOne";
import AboutSectionTwo from "../components/about/AboutSectionTwo";
import AboutSectionThree from "../components/about/AboutSectionThree";
import WorksProcess from "../components/home/WorksProcess";
import GroupCount from "../components/home/GroupCount";
import CustomerSay from "../components/home/CustomerSay";
import PremiumCarRent from "../components/home/PremiumCarRent";

const AboutUs = () => {
  return (
    <>
      <PageHeader title={"About Us"} banner={"/images/about-bg.png"} />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      <WorksProcess />
      <div className="pt-[50px] md:pt-[80px] lg:pt-[100px]"></div>
      <GroupCount />
      <CustomerSay />
      <PremiumCarRent />
    </>
  );
};

export default AboutUs;
