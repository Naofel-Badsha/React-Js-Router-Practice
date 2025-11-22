import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaJediOrder } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import Rechart1 from "../../../Components/Recharts/Rechart1";
import Rechart2 from "../../../Components/Recharts/Rechart2";
import Barchart from "../../../Components/Recharts/Barchart";

const MainDashboard = () => {
  const [resentOrders, setResentOrders] = useState([]);
  useEffect(() => {
    fetch("../../../../public/resentorders.json")
      .then((res) => res.json())
      .then((data) => setResentOrders(data));
  }, []);
 

  return (
    <div>
      <h1 className="text-xl font-semibold text-[#B18B5E]">Welcome back</h1>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mt-5">
        {/*-----------Card-------1--------*/}
        <div className="bg-white p-6 rounded-2xl shadow-xl ">
          {/*---------User-------------Images-------*/}
          <div>
            <img
              className="w-[50px] py-5"
              src="https://i.ibb.co.com/svn5sJWs/imgi-4-team-2.png"
              alt=""
            />
          </div>
          <div>
            <h3 className="text-[#474747] text-2xl">Congratulations Jhon</h3>
            <p className="text-[#474747] text-[16px]">
              You are the best seller of this monnth
            </p>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-[#474747] font-medium text-2xl mt-5">
                $168.5K
              </h1>
              <p className="text-[#B18B5E] font-medium text-[16px] mt-3">
                58% of sales target
              </p>
              <button className="btn bg-[#B18B5E] hover:bg-sky-600 text-white rounded-full mt-4">
                View Details
              </button>
            </div>

            <div>
              <img
                className="w-[100px] "
                src="https://i.ibb.co.com/TMnr1k3j/gift-box-3.png"
              />
            </div>
          </div>
        </div>

        {/*-----------Card-------2--------*/}
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between">
            <button className="btn bg-[#e8eff7] btn-ghost btn-circle ">
              <FaDollarSign className="text-2xl text-[#B18B5E]  cursor-pointer" />
            </button>

            <div>
              <h1 className="text-[#474747] font-medium text-2xl  mt-5">
                $47.6k
              </h1>
              <p className="text-[#B18B5E] font-medium text-[16px] mt-3">
                Total Sales
              </p>
            </div>
          </div>
          {/*---------------------Charts------------*/}
          <div className="mt-5">
            <Rechart1></Rechart1>
          </div>
        </div>

        {/*-----------Card-------4--------*/}
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between">
            <button className="btn bg-[#e8eff7] btn-ghost btn-circle ">
              <FaJediOrder className="text-2xl text-[#B18B5E] cursor-pointer" />
            </button>

            <div>
              <h1 className="text-[#474747] font-medium text-2xl  mt-5">
                248k
              </h1>
              <p className="text-[#B18B5E] font-medium text-[16px] mt-3">
                Total Orders
              </p>
            </div>
          </div>

          <div className="mt-5">
            <Rechart1></Rechart1>
          </div>
        </div>

        {/*-----------Card-------5--------*/}
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between">
            <button className="btn bg-[#e8eff7] btn-ghost btn-circle ">
              <FaRegEye className="text-2xl text-[#B18B5E] cursor-pointer" />
            </button>

            <div>
              <h1 className="text-[#474747] font-medium text-2xl  mt-5">
                189K
              </h1>
              <p className="text-[#B18B5E] font-medium text-[16px] mt-3">
                Total Visits
              </p>
            </div>
          </div>

          <div className="mt-5">
            <Rechart2></Rechart2>
          </div>
        </div>
      </div>

      {/*-----------Performance-------BArchart-1--------*/}
      <div className="bg-white p-6 rounded-2xl shadow-xl mt-10">
        <div className="flex items-center justify-between">
          <button className="btn bg-[#e8eff7] btn-ghost btn-circle ">
            <FaCartPlus className="text-2xl text-[#494949] cursor-pointer" />
          </button>

          <div>
            <h1 className="text-[#474747] font-medium text-2xl  mt-5">
              Performance
            </h1>
          </div>
        </div>
        {/*---------------------Charts------------*/}
        <div className="mt-">
          <Barchart></Barchart>
        </div>
      </div>



      {/*-----------Resent_Orders-------Product--------*/}
      <div className="bg-white p-6 rounded-2xl shadow-xl mt-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {resentOrders.map((resentOrder) => (
                <tr resentOrder={resentOrder.id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
