import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../../../public/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="HeroBgBanner bg-[#F6F4EE]">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        loop={true}
        className="mySwiper"
      >
        {/*---------Banner-------Slider-------1---------*/}
        <SwiperSlide>
          <div className="h-screen max-w-[1350px] mx-auto sm:px-3">
            <div className="">
              <div className="flex flex-col md:flex-row gap-20 items-center justify-between h-screen">
                {/*-------Text-------*/}
                <div className="flex-1">
                  <h3 className="uppercase bg-[#ebe5d9] text-[#B18B5E] w-fit py-1 px-4 font-bold">
                    NEW ARRIVAL...
                  </h3>
                  <div>
                    <h1 className="text-6xl sm:leading-16 md:text-6xl md:leading-16 lg:text-[80px] font-medium lg:leading-20 mt-8">
                      Elevate <br /> Your Home <br /> Aesthetics
                    </h1>
                    <p className="text-[18px] font-[400] text-[#555] mt-8 mb-8 ">
                      A furniture e-commerce company operates in the digital{" "}
                      <br /> space, offering a wide range of furniture products
                      for sale <br /> through an online platform.
                    </p>
                    <div className="space-x-5">
                      <button className="bg-[#B18B5E] border border-[#B18B5E] py-4 px-6 font-bold hover:border-[#B18B5E] hover:bg-transparent text-white hover:text-[#B18B5E] transition-all">
                        BUY NOW
                      </button>
                      <button className="bg-transparent border border-[#B18B5E] py-4 px-6 font-bold hover:border-[#B18B5E] hover:bg-[#B18B5E] text-[#B18B5E] hover:text-white transition-all">
                        VIEW DETAILS
                      </button>
                    </div>
                  </div>
                </div>

                {/*-----------Iamges---------*/}
                <div className="flex-1">
                  <div className="">
                    <div className="relative flex items-center justify-end">
                      <img src="https://i.ibb.co/qYLVKC48/circle.png" />

                      <img
                        className=" absolute top-[20%] w-[500px] m-auto "
                        src="https://i.ibb.co/8gnp0MBr/chair1.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/*---------Banner-------Slider-------2---------*/}
        <SwiperSlide>
          <div className="h-screen max-w-[1350px] mx-auto sm:px-3">
            <div className="">
              <div className="flex flex-col md:flex-row gap-20 items-center justify-between h-screen">
                {/*-------Text-------*/}
                <div className="flex-1">
                  <h3 className="uppercase bg-[#ebe5d9] text-[#B18B5E] w-fit py-1 px-4 font-bold">
                    NEW ARRIVAL...
                  </h3>
                  <div>
                    <h1 className="text-6xl text-[#161616] sm:leading-16 md:text-6xl md:leading-16 lg:text-[80px] font-medium lg:leading-20 mt-8">
                      Elevate <br /> Your Home <br /> Aesthetics
                    </h1>
                    <p className="text-[18px] font-[400] text-[#555] mt-8 mb-8 ">
                      A furniture e-commerce company operates in the digital{" "}
                      <br /> space, offering a wide range of furniture products
                      for sale <br /> through an online platform.
                    </p>
                    <div className="space-x-5">
                      <button className="bg-[#B18B5E] border border-[#B18B5E] py-4 px-6 font-bold hover:border-[#B18B5E] hover:bg-transparent text-white hover:text-[#B18B5E] transition-all">
                        BUY NOW
                      </button>
                      <button className="bg-transparent border border-[#B18B5E] py-4 px-6 font-bold hover:border-[#B18B5E] hover:bg-[#B18B5E] text-[#B18B5E] hover:text-white transition-all">
                        VIEW DETAILS
                      </button>
                    </div>
                  </div>
                </div>

                {/*-----------Iamges---------*/}
                <div className="flex-1">
                  <div className="">
                    <div className="relative flex items-center justify-end">
                      <img src="https://i.ibb.co/qYLVKC48/circle.png" />

                      <img
                        className=" absolute top-[20%] w-[500px] m-auto "
                        src="https://i.ibb.co/99cyqYwb/chair3.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/*---------Banner-------Slider-------3---------*/}
        <SwiperSlide>
          <div className="h-screen max-w-[1350px] mx-auto sm:px-3">
            <div className="">
              <div className="flex flex-col md:flex-row gap-20 items-center justify-between h-screen">
                {/*-------Text-------*/}
                <div className="flex-1">
                  <h3 className="uppercase bg-[#ebe5d9] text-[#B18B5E] w-fit py-1 px-4 font-bold">
                    NEW ARRIVAL...
                  </h3>
                  <div>
                    <h1 className="text-6xl sm:leading-16 md:text-6xl md:leading-16 lg:text-[80px] font-medium lg:leading-20 mt-8">
                      Elevate <br /> Your Home <br /> Aesthetics
                    </h1>
                    <p className="text-[18px] font-[400] text-[#555] mt-8 mb-8 ">
                      A furniture e-commerce company operates in the digital{" "}
                      <br /> space, offering a wide range of furniture products
                      for sale <br /> through an online platform.
                    </p>
                    <div className="space-x-5">
                      <button className="bg-[#B18B5E] border border-[#B18B5E] py-4 px-6 font-bold hover:border-[#B18B5E] hover:bg-transparent text-white hover:text-[#B18B5E] transition-all">
                        BUY NOW
                      </button>
                      <button className="bg-transparent border border-[#B18B5E] py-4 px-6 font-bold hover:border-[#B18B5E] hover:bg-[#B18B5E] text-[#B18B5E] hover:text-white transition-all">
                        VIEW DETAILS
                      </button>
                    </div>
                  </div>
                </div>

                {/*-----------Iamges---------*/}
                <div className="flex-1">
                  <div className="">
                    <div className="relative flex items-center justify-end">
                      <img src="https://i.ibb.co/qYLVKC48/circle.png" />

                      <img
                        className=" absolute top-[20%] w-[500px] m-auto "
                        src="https://i.ibb.co/dszCXzwx/chair2.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSection;
