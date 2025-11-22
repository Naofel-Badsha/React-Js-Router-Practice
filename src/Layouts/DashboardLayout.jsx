import { NavLink, Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="">
      {/*-----------------------1--------------------------*/}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="drawer-content flex flex-col">
            {/*------------------Navbar----------------*/}
            <div className="navbar bg-base-600 w-full lg:hidden shadow-2xl">
              <div className="flex-none">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>
            </div>
            {/*------Page-------content----------here-----------*/}
            <div className="py-5 px-5 h-full">
              <div className="bg-gray-100 p-5">
                <Outlet></Outlet>
              </div>
            </div>
          </div>

          {/*------Page-------content----------here-----------*/}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/*----------Sidebar----------content------------here------------*/}
            {/*--------------NaVLink--------1---------*/}
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#B18B5E] group-hover:text-white font-semibold"
                    : " w-full text-[#000]  "
                }
              >
                Dashboard
              </NavLink>
            </li>
            {/*--------------NaVLink--------2---------*/}
            <li>
              <NavLink
                to="/dashboard/products"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#B18B5E] group-hover:text-white font-semibold"
                    : " w-full text-[#000]  "
                }
              >
                Products
              </NavLink>
            </li>
            {/*--------------NaVLink--------3---------*/}
            <li>
              <NavLink
                to="/dashboard/recivedOrder"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#B18B5E] group-hover:text-white font-semibold"
                    : " w-full text-[#000]  "
                }
              >
                Recived Order
              </NavLink>
            </li>
            {/*--------------NaVLink--------4---------*/}
            <li>
              <NavLink
                to="/dashboard/addProduct"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#B18B5E] group-hover:text-white font-semibold"
                    : " w-full text-[#000]  "
                }
              >
                Add Product
              </NavLink>
            </li>
            {/*--------------NaVLink--------5---------*/}
            <li>
              <NavLink
                to="/dashboard/updateProduct"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#B18B5E] group-hover:text-white font-semibold"
                    : " w-full text-[#000]  "
                }
              >
                Update Product
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
