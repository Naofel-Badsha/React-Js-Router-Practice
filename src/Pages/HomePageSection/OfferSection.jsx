import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OfferSection = () => {
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);
  return (
    <section className="max-w-[1350px] mx-auto px-4">
      <div className="flex gap-10 flex-col lg:flex-row items-center justify-between">
        {/*----------Services--------1-------*/}
        <div
          data-aos="fade-up-right"
          className="flex flex-col-reverse md:flex-row gap-10 items-center justify-between w-full bg-[#EBF9FD] px-16 pb-16 "
        >
          <div className="md:pt-0 lg:pt-0">
            <div className="text-center md:text-start lg:text-start">
              <h5 className="text-[16px] text-[#B18B5E] font-semibold">
                GET 30% OFF
              </h5>
              <h2 className="capitalize text-2xl md:text-[28px] lg:text-[28px] leading-9 text-[#161616] font-medium text-center md:text-start lg:text-start">
                wicker hanging chairs
              </h2>
            </div>

            <div className="flex items-center sm:justify-start justify-center md:items-start lg:justify-start ">
              <button className="mt-6 bg-[#B18B5E] border border-[#B18B5E] py-3 px-6 font-bold hover:border-[#B18B5E] hover:bg-transparent text-white hover:text-[#B18B5E] transition-all">
                BUY NOW
              </button>
            </div>
          </div>
          <div>
            <img
              className="w-[250px]"
              src="https://i.ibb.co.com/mVmhnCyt/imgi-57-off-01-removebg-preview.png"
              alt=""
            />
          </div>
        </div>

        {/*----------Services--------2-------*/}
        <div
          data-aos="fade-left"
          className="flex flex-col-reverse md:flex-row gap-10 items-center justify-between w-full bg-[#EBF9FD] p-16"
        >
          <div className="">
            <h5 className="text-[16px] text-[#B18B5E] font-semibold text-center md:text-start lg:text-start">
              GET 15% OFF
            </h5>
            <h2 className="capitalize text-2xl md:text-[28px] lg:text-[28px] leading-9 text-[#161616] font-medium text-center md:text-start lg:text-start">
              Brasslegged Armchair
            </h2>

            <div className="flex items-center sm:justify-start justify-center md:items-start lg:justify-start ">
              <button className="mt-6 bg-[#B18B5E] border border-[#B18B5E] py-3 px-6 font-bold hover:border-[#B18B5E] hover:bg-transparent text-white hover:text-[#B18B5E] transition-all">
                BUY NOW
              </button>
            </div>
          </div>
          <div>
            <img
              className="w-[240px]"
              src="https://i.ibb.co.com/hJDt0QPx/imgi-58-off-02-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
