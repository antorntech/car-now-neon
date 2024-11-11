import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="bg-black px-5 py-12">
        <div className="max-w-screen-xl mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <img src="/images/logo.jpeg" alt="" width={250} />
              <p className="text-white mt-5 mb-8">
                Car Now Rental is a leading car rental company in Malta,
                offering a wide range of vehicles for both short- and long-term
                rentals. We are committed to providing our customers with a
                convenient, affordable, and enjoyable car rental experience.
              </p>
              <Link to="/">
                <button className="px-4 py-3 text-[16px] bg-gradient-to-l from-[#74EE15] to-[#59c107] text-white rounded-md shadow-lg">
                  Manage My Booking
                </button>
              </Link>
            </div>
            <div>
              <div>
                <h2 className="text-white text-xl md:text-3xl">About Us</h2>
                <div className="w-20 h-1 bg-white mt-2"></div>
              </div>
              <ul className="mt-5 flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-[1px] bg-white"></div>
                  <span className="text-white">+35699206826</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-[1px] bg-white"></div>
                  <span className="text-white">
                    172 Triq Il-Vitorja, Ħal Qormi, Malta
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-[1px] bg-white mt-3"></div>
                  <span className="text-white">
                    Our business hours are: <br /> Mon-Fri: 09:00 - 18:00 <br />{" "}
                    Sat: 09:00 - 13:00 <br /> Sun: Closed
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-[1px] bg-white"></div>
                  <span className="text-white">Privacy and Policy</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-[1px] bg-white"></div>
                  <span className="text-white">Terms and Conditions</span>
                </li>
              </ul>
              <div className="flex items-center gap-3 mt-5">
                <Link>
                  <div className="group border-2 border-white hover:border-[#74EE15] px-[15px] py-2 transition-all duration-500">
                    <i className="fa-brands fa-facebook-f text-[20px] text-white group-hover:text-[#74EE15] transition-all duration-500" />
                  </div>
                </Link>
                <Link>
                  <div className="group border-2 border-white hover:border-[#74EE15] px-3 py-2 transition-all duration-500">
                    <i className="fa-brands fa-whatsapp text-[20px] text-white group-hover:text-[#74EE15] transition-all duration-500" />
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <div>
                <h2 className="text-white text-xl md:text-3xl">News Letter</h2>
                <div className="w-20 h-1 bg-white mt-2"></div>
                <p className="text-white mt-5">
                  Stay up to date with the latest news, announcements and
                  articles.
                </p>
              </div>
              <div className="mt-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border-[3px] border-[#74EE15] focus:outline-none focus:ring-[3px] focus:ring-transparent focus:border-[3px]"
                />
                <button className="mt-3 uppercase px-4 py-3 text-[16px] bg-gradient-to-l from-[#74EE15] to-[#59c107] text-white w-full shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-l from-[#74EE15] to-[#59c107]">
        <p className="text-white text-sm text-center p-5">
          © Car Now Rental - {year} | All Right Reserved | Developed With BY{" "}
          <div>
            <i className="fa fa-heart" /> ANTOR &amp; SANTO
          </div>
        </p>
      </div>
    </>
  );
};

export default Footer;
