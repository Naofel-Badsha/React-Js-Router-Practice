import { FaBars, FaSearch } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { MdCircleNotifications } from "react-icons/md";
import { IoMdCart } from "react-icons/io";

const DashaboardNavbard = () => {
  return (
    <nav className="w-full bg-white py-3 px-10 shadow-xl z-50 sticky top-0 left-0 right-0">
      <div className="flex items-center justify-end gap-8">
        {/*--------------Hambarger-------*/}
        <div className="border rounded-full">
          <button className="btn btn-ghost btn-circle ">
            <FaBars className="text-2xl text-[#494949] cursor-pointer"></FaBars>
          </button>
        </div>

        {/*-------------Search-------1--------*/}
        <div className="flex gap-3 items-center w-full border border-[#DEE2E6] p-2 rounded-full px-3">
          <span className="">
            <FaSearch />
          </span>
          <input
            className="outline-none w-full"
            type="search"
            placeholder="Search Heare..."
          />
        </div>

        {/*-------------Langauges-----2--------*/}
        <div className="p-1 flexi items-center justify-center ">
          <button className="btn btn-ghost btn-circle">
            <img
              className=" w-[30px] rounded-full"
              src="https://i.ibb.co.com/r2VhTryw/istockphoto-1388452601-612x612.jpg"
              alt=""
            />
          </button>
        </div>

        {/*-------------Subscribe-------3------*/}
        <div>
          <button className="btn btn-ghost btn-circle">
            <FaCheckCircle className="text-2xl text-[#494949]" />
          </button>
        </div>

        {/*-------------Others-------4-------*/}
        <div>
          <button className="btn btn-ghost btn-circle">
            <MdDashboard className="text-2xl text-[#494949]" />
          </button>
        </div>

        {/*-------------Notification-----5------*/}
        <div>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <MdCircleNotifications className="text-2xl text-[#494949]" />
              <span className="badge badge-xs indicator-item bg-[#F01414] border border-[#F01414] text-[12px] p-2 text-white rounded-full">
                10
              </span>
            </div>
          </button>
        </div>

        {/*-------------AddToCart--------6------*/}
        <div>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <IoMdCart className="text-2xl text-[#494949]" />
              <span className="badge badge-xs indicator-item bg-[#F01414] border border-[#F01414] text-[12px] p-2 text-white rounded-full">
                8
              </span>
            </div>
          </button>
        </div>

        {/*-------------Profile-------7--------*/}
        <div>
          <button className="btn btn-ghost btn-circle">
            <img
              className="w-[30px]"
              src="https://i.ibb.co.com/svn5sJWs/imgi-4-team-2.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DashaboardNavbard;
