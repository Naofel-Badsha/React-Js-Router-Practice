import { Link, NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="">
      <div>
        {/*-------------Profile---------*/}
        <Link to="/">
          <div className="flex gap-4 items-center ">
            <img
              className="w-[60px]"
              src="https://i.ibb.co/gbz6v58b/logo-icon.png"
              alt=""
            />
            <h1 className="text-2xl font-bold">ADDINA</h1>
          </div>
        </Link>
        <hr className="mt-3" />

        {/*------=============------Pages---=======---link------========-----*/}
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
      </div>
    </div>
  );
};

export default Sidebar;
