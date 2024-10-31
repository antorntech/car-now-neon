import React from "react";
import Hero from "../components/home/Hero";
import Partners from "../components/home/Partners";
import OurFleet from "../components/home/OurFleet";
import BigCar from "../components/home/BigCar";
import WorksProcess from "../components/home/WorksProcess";
import AdventureSlider from "../components/home/AdventureSlider";
import GroupService from "../components/home/GroupService";
import GroupCount from "../components/home/GroupCount";
import CustomerSay from "../components/home/CustomerSay";
import PremiumCarRent from "../components/home/PremiumCarRent";

const Home = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <OurFleet />
      <BigCar />
      <WorksProcess />
      <AdventureSlider />
      <GroupService />
      <GroupCount />
      <CustomerSay />
      <PremiumCarRent />
    </div>
  );
};

export default Home;
