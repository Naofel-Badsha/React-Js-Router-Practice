import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ServicesSection = () => {
     useEffect(() => {
       AOS.init({ duration: "2000" });
     }, []);


  return (
    <div className="py-28 max-w-[1350px] mx-auto px-4">
      <div className="flex items-center justify-center flex-wrap gap-8">
        {/*--------------------Box-------1----------*/}
        <div
          data-aos="fade-up-right"
          className="flex gap-5 r items-center m-auto"
        >
          <div>
            <img
              className="w-[70px] m-auto "
              src="https://i.ibb.co/TDjJKvCR/imgi-42-default.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-xl font-medium ">Free Delivery</h1>
            <p className="text-[16px] text-[#555]">
              Free shipping on all order
            </p>
          </div>
        </div>
        {/*--------------------Box-------2----------*/}
        <div
          data-aos="fade-up-left"
          className="flex gap-5 r items-center m-auto"
        >
          <div>
            <img
              className="w-[70px] m-auto "
              src="https://i.ibb.co/273bmm92/imgi-43-default.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-xl font-medium ">Money Return</h1>
            <p className="text-[16px] text-[#555]">
              Back guarantee under 7 day
            </p>
          </div>
        </div>
        {/*--------------------Box-------3----------*/}
        <div
          data-aos="fade-up-right"
          className="flex gap-5 r items-center m-auto"
        >
          <div>
            <img
              className="w-[70px] m-auto "
              src="https://i.ibb.co/W4RKHtWk/imgi-44-default.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-xl font-medium ">Online Support 24/7</h1>
            <p className="text-[16px] text-[#555]">
              Support online 24 hours a day
            </p>
          </div>
        </div>
        {/*--------------------Box-------4----------*/}
        <div
          data-aos="fade-up-left"
          className="flex gap-5 r items-center m-auto"
        >
          <div>
            <img
              className="w-[70px] m-auto "
              src="https://i.ibb.co/jPhNC6L3/imgi-45-default.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-xl font-medium ">Reliable</h1>
            <p className="text-[16px] text-[#555]">Trusted by 1000+ brands</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
