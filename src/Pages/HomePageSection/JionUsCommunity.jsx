import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const JionUsCommunity = () => {
      useEffect(() => {
        AOS.init({ duration: "2000" });
      }, []);
  return (
    <section className="bg-[#fff] py-28 px-4">
      <div className="max-w-[1350px] mx-auto">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/*----------------Card-------1---------*/}
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            // data-aos-easing="ease-in-sine"
            className="bg-[#D9F3FB] flex flex-col items-start justify-center p-10 "
          >
            <h2 className="text-[26px] font-semibold text-gray-900 mb-2">
              Exclusive offers for you
            </h2>
            <p className="text-gray-700 mb-6">
              Get weekly deals, valuable health information and more.
            </p>
            <button className="border text-[18px] border-gray-800 text-gray-800 px-8 py-3  hover:bg-[#B18B5E] hover:text-white transition duration-300 cursor-pointer">
              SIGN UP &gt;
            </button>
          </div>

          {/*----------------Card-------2---------*/}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="bg-[#F9FFE0] flex flex-col items-start justify-center p-10"
          >
            <h2 className="text-[26px] font-semibold text-gray-900 mb-2">
              Exclusive offers for you
            </h2>
            <p className="text-gray-700 text-[16px] mb-6">
              Get weekly deals, valuable health information and more.
            </p>
            <button className="border text-[18px] border-gray-800 text-gray-800 px-8 py-3  hover:bg-[#B18B5E] hover:text-white transition duration-300 uppercase cursor-pointer">
              Join FREE now &gt;
            </button>
          </div>

          {/*----------------Card-------3---------*/}
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            // data-aos-easing="ease-in-sine"
            className="bg-[#FFE2E5] flex flex-col items-start justify-center p-10"
          >
            <h2 className="text-[26px] font-semibold text-gray-900 mb-2">
              Exclusive offers for you
            </h2>
            <p className="text-gray-700 mb-6">
              Get weekly deals, valuable health information and more.
            </p>
            <div className="flex gap-5">
              <img
                className="bg-gray-900 py-3 px-4"
                src="https://i.ibb.co/xSfGhBMR/imgi-28-play-store.png"
                alt=""
              />
              <img
                className="bg-gray-900 py-3 px-4"
                src="https://i.ibb.co/WvdPxskB/imgi-29-apple-store.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JionUsCommunity;
