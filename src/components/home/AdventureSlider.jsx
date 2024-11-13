/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="next-arrow2">
      <i className="fa-solid fa-angle-right"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="prev-arrow2">
      <i className="fa-solid fa-angle-left"></i>
    </div>
  );
}

const AdventureSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const fleets = [
    {
      id: 1,
      name: "Hanging Out With The Clouds",
      image: "/images/adventure1.jpg"
    },
    {
      id: 2,
      name: "Adventure in the mountains",
      image: "/images/adventure2.jpg"
    },
    {
      id: 3,
      name: "Horseshoe Bend Parking",
      image: "/images/adventure3.jpg"
    },
    {
      id: 4,
      name: "Levico, Italy",
      image: "/images/adventure4.jpg"
    },
    {
      id: 5,
      name: "Arches National Park",
      image: "/images/adventure5.jpg"
    }
  ];

  return (
    <div className="w-full px-5 py-[80px] md:py-[100px] lg:py-[100px]">
      <div className="max-w-screen-xl mx-auto h-full flex justify-center items-center">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full text-center"
        >
          <p className="text-3xl md:text-5xl font-bold text-white">
            Rent a Car Today and Embark Your
          </p>
          <p className="text-3xl md:text-5xl font-bold bg-white bg-gradient-to-r from-[#74EE15] via-[#74EE15] to-[#59c107] inline-block text-transparent bg-clip-text">
            Automate Adventure
          </p>
        </div>
      </div>
      <div className="mt-5 md:mt-12">
        <Slider {...settings}>
          {fleets.map((fleet, index) => (
            <div key={index} className="text-center">
              <div className="w-full p-3">
                <img
                  src={fleet.image}
                  alt={fleet.category}
                  className="w-full h-[300px] md:h-[350px] object-cover"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xl md:text-2xl font-semibold text-white">
                    {fleet.name}
                  </span>
                  <Link to="#0">
                    <i className="fa-solid fa-arrow-right-long text-[#74EE15] text-xl"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AdventureSlider;
