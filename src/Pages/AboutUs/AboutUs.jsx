import React from "react";
import "../../../public/HeroSection.css";
import { Link } from "react-router";

import { FaCirclePlay } from "react-icons/fa6";
import JionUsCommunity from "../HomePageSection/JionUsCommunity";

const AboutUs = () => {
  return (
    <section>
      <div>
        <div className="aboutbagroundImages py-28 flex items-center justify-center">
          {/*---------------Header------------*/}
          <div>
            <h1 className="text-4xl md:text-[46px] lg:text-[56px] text-white font-bold">
              About Us
            </h1>
            <ul className="flex gap-6 items-center justify-center">
              <li className="text-xl text-white">
                <Link to="/">Home</Link>
              </li>
              <li className="text-xl text-white">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>

        {/*---------------Content------------*/}
        <div className="max-w-[1350px] mx-auto py-28 px-4">
          {/*---------------Left------------Side---------*/}
          <div className="flex gap-10 flex-col md:flex-row">
            <div className="flex-1">
              <div>
                <h3 className="text-[18px] font-semibold text-[#C0A27E]">
                  WE DESIGN FURNITURE
                </h3>
                <h1 className="text-3xl text-black font-bold">
                  Our Core Divisions
                </h1>
                <p className="text-[18px] mt-10">
                  Ut leo. Vivamus aliquet elit ac nisl. Aenean leo ligula,
                  porttitor eu, consequat vitae, eleifend ac enim. Sed cursus
                  turpis vitae tortor. Vestibulum ante ipsum primis in faucibus
                  orci luctus et ultrices posuere cubilia Curae; Fusce id
                </p>
              </div>

              <div className="mt-10">
                <span>
                  <p className="text-[18px] text-black font-semibold">
                    Furniture
                  </p>
                  <progress
                    className="progress progress-neutral w-full"
                    value="40"
                    max="70"
                  ></progress>
                </span>
                <span>
                  <p className="text-[18px] text-black font-semibold">
                    Handmade
                  </p>
                  <progress
                    className="progress progress-neutral w-full"
                    value="20"
                    max="52"
                  ></progress>
                </span>
                <span>
                  <p className="text-[18px] text-black font-semibold">Crafts</p>
                  <progress
                    className="progress progress-neutral w-full"
                    value="50"
                    max="80"
                  ></progress>
                </span>
              </div>

              <div className="mt-10">
                <img
                  src="https://i.ibb.co.com/7w3hVBS/about-image2.jpg"
                  alt=""
                />
              </div>
            </div>
            {/*---------------Right-----------Side--------*/}
            <div className="flex-1 flex items-center justify-center">
              <img
                className="w-full sm:h-[600px] object-cover"
                src="https://i.ibb.co.com/FqwJ6Jy8/about-image1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/*-------------------Second------Section-------------*/}
      <div className="aboutbagroundImages py-40 flex items-center justify-center">
        <div className="bg-white w-[80px] h-[80px] cursor-pointer m-auto rounded-full  flex items-center justify-center">
          <FaCirclePlay className="text-3xl" />
        </div>
      </div>

      {/*-------------------Third------Section-------------*/}
      <JionUsCommunity></JionUsCommunity>
    </section>
  );
};

export default AboutUs;
