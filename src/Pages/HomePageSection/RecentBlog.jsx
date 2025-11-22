import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const RecentBlog = () => {
  return (
    <section className="bg-[#F5F1E6] py-28">
      <div className="max-w-[1350px] mx-auto">
        {/*-------------Heading-------------*/}
        <div className="flex items-center justify-center">
          <div className=" text-center m-auto">
            <div className="flex items-center justify-center">
              <h3 className="uppercase text-center bg-[#EAE2D2] w-fit py-1 px-4 text-[#B18B5E] font-bold ">
                Read blog
              </h3>
            </div>
            <h1 className="text-6xl text-center text-[#161616] sm:leading-16 md:text-6xl md:leading-16 lg:text-[52px] font-semibold lg:leading-20">
              Recent Blog
            </h1>
          </div>
        </div>

        {/*---------------Card-----Section------------*/}
        <div className="flex gap-10 flex-col md:flex-row mt-16">
          {/*-------------Left----------Side--------------*/}
          <div className="p-8 flex gap-10 items-center justify-between bg-white">
            <div className="flex-1 ">
              <h5 className="bg-[#F3EEE7] text-[#B18B5E] w-fit py-1 px-2 rounded-full">
                Chair Desigen
              </h5>
              <div className="flex items-center gap-10 mt-4">
                <p className="text-[16px] font-medium text-[#808094]">
                  By Alex Manie
                </p>
                <p className="text-[16px] font-medium text-[#808094]">
                  jan, 2024
                </p>
              </div>
              <h2 className="font-semibold text-[24px] text-black capitalize mt-2">
                arrangement that's nearly perfect.
              </h2>

              <button className="bg-[#B18B5E] p-5 rounded-full group mt-5 cursor-pointer">
                <IoIosArrowForward className="text-xl text-[#fff] :" />
              </button>
            </div>

            <div className="flex-1 flex justify-end">
              <img src="https://i.ibb.co.com/5W6vcxwy/blog-image1.jpg" alt="" />
            </div>
          </div>

          {/*-------------Right----------Side--------------*/}
          <div className="p-8 flex gap-10 items-center justify-between bg-white">
            <div className="flex-1 ">
              <h5 className="bg-[#F3EEE7] text-[#B18B5E] w-fit py-1 px-2 rounded-full">
                Sofa Design
              </h5>
              <div className="flex items-center gap-10 mt-4">
                <p className="text-[16px] font-medium text-[#808094]">
                  By Alex Manie
                </p>
                <p className="text-[16px] font-medium text-[#808094]">
                  jan, 2024
                </p>
              </div>
              <h2 className="font-semibold text-[24px] text-black capitalize mt-2">
                Eworkstation arrangement that's
              </h2>

              <button className="bg-[#B18B5E] p-5 rounded-full group mt-5 cursor-pointer">
                <IoIosArrowForward className="text-xl text-[#fff] :" />
              </button>
            </div>

            <div className="flex-1 flex justify-end">
              <img src="https://i.ibb.co.com/VWFLzMwg/blog-image2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
