import React from "react";

const PageHeader = ({ title, subtitle, banner }) => {
  return (
    <div
      className="w-full h-[25vh] md:[40vh] lg:h-[70vh] flex justify-center items-center"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        {subtitle ? (
          <p className="mb-2 text-center text-white text-md lg:text-3xl font-bold animate__animated animate__fadeInUp">
            {subtitle}
          </p>
        ) : null}
        <h1 className="text-white text-4xl lg:text-8xl font-bold animate__animated animate__fadeInUp">
          {title}
        </h1>
        <img
          className="w-1/3 animate__animated animate__fadeInUp"
          src="/images/underline.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default PageHeader;
