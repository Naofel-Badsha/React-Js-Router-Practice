import React from "react";
import { NavLink } from "react-router";
import { RiArmchairLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <NavLink className="text-[16px] text-[#161616] font-medium" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-[16px] text-[#161616] font-medium"
          to="/aboutUs"
        >
          About
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          className="text-[16px] text-[#161616] font-medium"
          to="/services"
        >
          Services
        </NavLink>
      </li> */}
      {/* <li>
        <NavLink className="text-[16px] text-[#161616] font-medium" to="/blogs">
          Blogs
        </NavLink>
      </li> */}
      <li>
        <NavLink
          className="text-[16px] text-[#161616] font-medium"
          to="/contactUs"
        >
          Contacts
        </NavLink>
      </li>
      <li>
        <NavLink className="text-[16px] text-[#161616] font-medium" to="/users">
          Users
        </NavLink>
      </li>
      <li>
        <NavLink className="text-[16px] text-[#161616] font-medium" to="/posts">
          Posts
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-[16px] text-[#161616] font-medium"
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 left-0 right-0 bg-white w-full py-4 shadow-sm z-50">
      <nav className="bg-white max-w-[1770px] mx-auto sm:px-3">
        <div className="navbar bg-base-100 ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navLink}
              </ul>
            </div>
            <div className="flex items-center gap-1">
              <RiArmchairLine className="text-4xl text-[#b18b5e]" />
              <span className="text-2xl font-bold">ADDINA</span>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex gap-6">
            <ul className="menu menu-horizontal px-1">{navLink}</ul>
          </div>

          {/*--------Hambarger----wishlist-----addTocart----SerachBar----------*/}
          <div className="navbar-end">
            <div className="flex items-center gap-3">
              {/*------Search----------*/}
              <div className="hidden md:block">
                <div className="rounded-full border border-[#E0E2E3] pl-4 flex items-center justify-between">
                  <input
                    className="outline-none cursor-pointer"
                    type="search"
                    name=""
                    id=""
                    placeholder="Search Heir..."
                  />
                  <span className="ml-4  bg-[#b18b5e] p-4 rounded-full cursor-pointer">
                    <FaSearch className="text-sm text-white"></FaSearch>
                  </span>
                </div>
              </div>

              {/*------wishlist----------*/}
              <div className="flex">
                <FaRegHeart className="text-2xl -mr-2 cursor-pointer" />
                <span className="bg-[#b18b5e] font-light text-white rounded-full w-[25px] h-25px] cursor-pointer m-auto flex items-center justify-center -mt-4">
                  3
                </span>
              </div>

              {/*------addTocart----------*/}
              <div className="flex">
                <GiShoppingBag className="text-2xl -mr-3 cursor-pointer" />
                <span className="bg-[#b18b5e] font-light text-white rounded-full w-[25px] h-25px] cursor-pointer  m-auto flex items-center justify-center -mt-4">
                  8
                </span>
              </div>

              {/*------Hambarger----------*/}
              <div className="flex">
                <HiMenuAlt3 className="text-3xl -mr-2 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
