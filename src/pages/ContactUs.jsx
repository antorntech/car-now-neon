import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import ContactSectionOne from "../components/contact/ContactSectionOne";
import ContactSectionTwo from "../components/contact/ContactSectionTwo";
import PremiumCarRent from "../components/home/PremiumCarRent";

const ContactUs = () => {
  return (
    <>
      <PageHeader title={"Contact Us"} banner={"/images/contact-bg.png"} />
      <ContactSectionOne />
      <ContactSectionTwo />
      <PremiumCarRent />
    </>
  );
};

export default ContactUs;
