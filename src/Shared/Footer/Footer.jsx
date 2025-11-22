import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarked, FaMapPin, FaPhone, FaTwitch } from "react-icons/fa";
import { RiArmchairLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#191919]">
      <div className="max-w-[1350px] mx-auto py-28">
        <footer className="footer grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10">
          {/*-------------------Part----1-----------------*/}
          <nav>
            <div className="flex items-center gap-1">
              <RiArmchairLine className="text-4xl text-[#b18b5e]" />
              <span className="text-2xl font-bold text-white">ADDINA</span>
            </div>
            <p className="text-[16px] text-white mt-4">
              It helps designers plan out where the content will sit, the
              content to be written and approved.
            </p>
            <div className="flex gap-5 mt-5">
              <span className="bg-white cursor-pointer w-10 h-10 flex items-center justify-center rounded-full">
                <FaFacebook className="text-xl text-black" />
              </span>
              <span className="bg-white cursor-pointer w-10 h-10 flex items-center justify-center rounded-full">
                <FaTwitch className="text-xl text-black" />
              </span>
              <span className="bg-white cursor-pointer w-10 h-10 flex items-center justify-center rounded-full">
                <FaLinkedin className="text-xl text-black" />
              </span>
              <span className="bg-white cursor-pointer w-10 h-10 flex items-center justify-center rounded-full">
                <FaInstagram className="text-xl text-black" />
              </span>
            </div>
          </nav>

          {/*-------------------Part----2-----------------*/}
          <nav>
            <h6 className="text-[25px] font-semibold text-white">Services</h6>
            <a className="link link-hover text-white text-[16px] font-medium mt-4">
              Log In
            </a>
            <a className="link-hover text-white text-[16px] font-medium link">
              Wishlist
            </a>
            <a className="link-hover text-white text-[16px] font-medium link">
              Return Policy
            </a>
            <a className="link-hover text-white text-[16px] font-medium link">
              Privacy policy
            </a>
            <a className="link-hover text-white text-[16px] font-medium link">
              Shopping FAQs
            </a>
          </nav>

          {/*-------------------Part----3-----------------*/}
          <nav>
            <h6 className="text-[25px] font-semibold text-white">Company</h6>
            <a className="link-hover text-white text-[16px] font-medium link mt-4">
              About us
            </a>
            <a className="link-hover text-white text-[16px] font-medium link">
              Blog
            </a>
            <a className="link-hover text-white text-[16px] font-medium link">
              Pages
            </a>
            <a className="link-hover text-white text-[16px] font-medium link">
              Contact us
            </a>
          </nav>

          {/*-------------------Part----4-----------------*/}
          <nav>
            <h6 className="text-[25px] font-semibold text-white">Contact</h6>
            <p className="text-[16px] text-[#555] font-semibold mt-4">
              4517 Washington Ave. Manchester, Kentucky 39495
            </p>

            <div className="flex items-center gap-10 mt-5">
              <span className="bg-[#B18B5E] cursor-pointer w-10 h-10 flex items-center justify-center rounded-full">
                <FaMapMarked className="text-xl text-white" />
              </span>
              <p className="text-[16px] text-[#fff]">711-2880 Nulla St.</p>
            </div>

            <div className="flex items-center gap-10">
              <span className="bg-[#B18B5E] cursor-pointer w-10 h-10 flex items-center justify-center rounded-full">
                <FaPhone className="text-xl text-white" />
              </span>

              <div>
                <p className="text-[16px] text-white font-medium">
                  +964 742 44 763
                </p>
                <p className="text-[16px] text-[#555] mt-2 font-medium">
                  Mon - Sat: 9 AM - 5 PM.
                </p>
              </div>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
