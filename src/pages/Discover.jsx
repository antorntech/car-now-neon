import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import PremiumCarRent from "../components/home/PremiumCarRent";
import AdventureSlider from "../components/home/AdventureSlider";
import DiscoverSectionTwo from "../components/discover/DiscoverSectionTwo";
import DiscoverSectionThree from "../components/discover/DiscoverSectionThree";
import Faq from "../components/faq/Faq";

const Discover = () => {
  return (
    <>
      <PageHeader
        title={"Discover Automate"}
        banner={"/images/discover-bg.png"}
      />
      <AdventureSlider />
      <DiscoverSectionTwo />
      <DiscoverSectionThree />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="py-[20px] md:py-[50px] lg:py-[100px]"
      >
        <Faq />
      </div>

      <PremiumCarRent />
    </>
  );
};

export default Discover;
