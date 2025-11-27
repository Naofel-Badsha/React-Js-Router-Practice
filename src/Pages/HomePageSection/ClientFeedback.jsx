import "../../../public/HeroSection.css";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { FaQuoteRight } from "react-icons/fa6";

const ClientFeedback = () => {
  return (
    <section className="clientFeedbackBanner mt-28">
      <div className="max-w-[1350px] mx-auto py-30 px-4">
        {/*-------------Heading-------------*/}
        <div className="flex items-center justify-center">
          <div className=" text-center m-auto">
            <div className="flex items-center justify-center">
              <h3 className="uppercase text-center bg-[#454344] text-[#B18B5E] w-fit py-1 px-4 font-bold text-white">
                Testimonials
              </h3>
            </div>
            <h1 className="text-4xl mt-3 md:text-6x lg:text-6x text-center text-[#161616] sm:leading-16 md:text-6xl md:leading-16 lg:text-[58px] font-bold lg:leading-20 text-white">
              Client Feedback
            </h1>
          </div>
        </div>

        {/*--------------Feedback---------------*/}
        <div className="mt-12">
          <div className="grid gap-10  md:grid-cols-2 lg:grid-cols-3">
            {/*----------------Card-----------1-------------*/}
            <div className="bg-white p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-1 mt-3">
                  <TiStarFullOutline className="text-[#E8C54A] text-2xl" />
                  <TiStarFullOutline className="text-[#E8C54A] text-2xl" />
                  <TiStarFullOutline className="text-[#E8C54A] text-2xl" />
                  <TiStarFullOutline className="text-[#E8C54A] text-2xl" />
                  <TiStarHalfOutline className="text-[#E8C54A] text-2xl" />
                </div>

                <div>
                  <FaQuoteRight className="text-4xl md:text-5xl lg:text-6xl text-[#B69369]" />
                </div>
              </div>

              <h3 className="text-xl text-black font-medium">Annette Black</h3>
              <h5 className="text-[18px] text-gray-500] mt-1">Dog Trainer</h5>
              <p className="text-[17px] text-gray-500] mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, rem temporibus? Totam, excepturi impedit.
              </p>
            </div>
            {/*----------------Card-----------2-------------*/}
            <div className="bg-white p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-1 mt-3">
                  <TiStarFullOutline className="text-[#E8C54A] text-2xl" />
                  <TiStarFullOutline className="text-[#E8C54A] text-2xl" />
                  <TiStarFullOutline className="text-[#E8C54A] text-2xl" />
                  <TiStarFullOutline className="text-[#E8C54A] text-2xl" />
                  <TiStarHalfOutline className="text-[#E8C54A] text-2xl" />
                </div>

                <div>
                  <FaQuoteRight className="text-4xl md:text-5xl lg:text-6xl  text-[#B69369]" />
                </div>
              </div>

              <h3 className="text-xl text-black font-medium">Annette Black</h3>
              <h5 className="text-[18px] text-gray-500] mt-1">Dog Trainer</h5>
              <p className="text-[17px] text-gray-500] mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, rem temporibus? Totam, excepturi impedit.
              </p>
            </div>
            {/*----------------Card-----------3-------------*/}
            <div className="bg-white p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-1 mt-3">
                  <TiStarFullOutline className="text-[#E8C54A] text-2xl" />
                  <TiStarFullOutline className="text-[#E8C54A] text-2xl" />
                  <TiStarFullOutline className="text-[#E8C54A] text-2xl" />
                  <TiStarFullOutline className="text-[#E8C54A] text-2xl" />
                  <TiStarHalfOutline className="text-[#E8C54A] text-2xl" />
                </div>

                <div>
                  <FaQuoteRight className="text-4xl md:text-5xl lg:text-6xl  text-[#B69369]" />
                </div>
              </div>

              <h3 className="text-xl text-black font-medium">Annette Black</h3>
              <h5 className="text-[18px] text-gray-500] mt-1">Dog Trainer</h5>
              <p className="text-[17px] text-gray-500] mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, rem temporibus? Totam, excepturi impedit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
