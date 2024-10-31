import React from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import AppLayout from "./layout/AppLayout";

AOS.init();
const App = () => {
  return (
    <>
      <AppLayout />
    </>
  );
};

export default App;
