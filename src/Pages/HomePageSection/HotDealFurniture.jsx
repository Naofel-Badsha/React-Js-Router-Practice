import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HotDealFurniture = () => {
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);
  return (
    <section>
      <div className="flex flex-col lg:flex-row">
        {/*----------------Left-----------*/}
        <div
          data-aos="fade-up-right"
          className="flex-1 bg-[#F5F1E6] py-28 px-10 flex items-center justify-end md:justify-center"
        >
          <div className="bg-[#B18B5E] w-[520px]  p-6">
            <div className="border-[1px] border-white p-14">
              <h3 className="text-[16px] font-bold text-white uppercase">
                HOT DEAL furniture
              </h3>
              <h1 className="text-3xl md:text-[40px] lg:text-[40px] font-bold text-white mt-7">
                Live Furniture <br className="hidden md:block" /> Your Love
              </h1>
              <button className="mt-6 bg-white py-3.5 px-8 font-bold hover:bg-sky-100 text-[#18181b] hover:text-[#B18B5E] transition-all duration-300 cursor-pointer">
                BUY NOW
              </button>
            </div>
          </div>
        </div>

        {/*----------------Right-----------*/}
        <div data-aos="fade-left" className="flex-1">
          {/*--------Explien--------------*/}
          <div
            className="relative w-full h-[450px] md:h-[635px] lg:h-[635px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/MDGWt0Vb/imgi-15-bg-image.jpg')",
            }}
          >
            {/*----------------Card-----------1------------*/}
            <div className="absolute top-[72%] left-[57%] -translate-x-1/2 -translate-y-1/2 group">
              <div className="w-16 h-16 bg-white/70 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-all">
                <div className="w-3 h-3 bg-[#B18B5E] rounded-full"></div>
              </div>

              <div className="absolute bottom-22 left-1/2 -translate-x-1/2 bg-white shadow-lg  p-6 w-52  group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold text-[20px] text-gray-800">
                  Dining Table
                </h3>
                <div className="flex text-yellow-400 my-2 text-xl gap-2">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                </div>
                <p className="text-[16px] font-medium text-[#b18b5e]">
                  USD 190.00
                </p>
              </div>
            </div>

            {/*----------------Card-----------2------------*/}
            <div className="absolute hidden md:block top-[55%] left-[22%] -translate-x-1/2 -translate-y-1/2 group">
              <div className="w-16 h-16 bg-white/70 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-all">
                <div className="w-3 h-3 bg-[#B18B5E] rounded-full"></div>
              </div>

              <div className="absolute bottom-22 left-1/2 -translate-x-1/2 bg-white shadow-lg p-6 w-52 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold text-[20px] text-gray-800">
                  Side Table
                </h3>
                <div className="flex text-yellow-400 my-2 text-xl gap-2">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                </div>
                <p className="text-[16px] font-medium text-[#b18b5e]">
                  USD 120.00
                </p>
              </div>
            </div>

            {/*----------------Card-----------3------------*/}
            <div className="absolute hidden md:block top-[40%] left-[80%] -translate-x-1/2 -translate-y-1/2 group">
              <div className="w-16 h-16 bg-white/70 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-all">
                <div className="w-3 h-3 bg-[#B18B5E] rounded-full"></div>
              </div>

              <div className="absolute bottom-22 left-1/2 -translate-x-1/2 bg-white shadow-lg p-6 w-52 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold text-[20px] text-gray-800">
                  Cushion
                </h3>
                <div className="flex text-yellow-400 my-2 text-xl gap-2">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                </div>
                <p className="text-[16px] font-medium text-[#b18b5e]">
                  USD 60.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*--------Explien--------------*/}
    </section>
  );
};

export default HotDealFurniture;
