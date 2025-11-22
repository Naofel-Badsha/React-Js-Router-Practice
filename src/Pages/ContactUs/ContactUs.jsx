import React from "react";
import { Link } from "react-router";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { MdPhoneCallback } from "react-icons/md";

const ContactUs = () => {
  return (
    <section>
      <div className="aboutbagroundImages py-28 flex items-center justify-center">
        {/*---------------Header------------*/}
        <div>
          <h1 className="text-[56px] text-white font-bold">Contact Us</h1>
          <ul className="flex gap-6 items-center justify-center">
            <li className="text-xl text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="text-xl text-white">
              <Link to="/about">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/*--------------Grid-------Card--------------*/}
      <div className="max-w-[1350px] mx-auto py-28 px-4">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {/*-------------card---------1----------*/}
          <div className="bg-white shadow p-10">
            <div className="bg-[#B18B5E] w-[85px] h-[85px] rounded-full m-auto flex items-center justify-center">
              <FaMapMarkerAlt className="text-3xl text-white" />
            </div>
            <h2 className="text-[20px] font-semibold text-black mt-3 text-center">
              Our Location
            </h2>
            <p className="text-[16px] font-medium text-gray-600 mt-3 text-center">
              House #5, Street Number #98, brasilia- 70000-000, Brazil.
            </p>
          </div>

          {/*-------------card---------2----------*/}
          <div className="bg-white shadow p-10">
            <div className="bg-[#B18B5E] w-[85px] h-[85px] rounded-full m-auto flex items-center justify-center">
              <FaEnvelopeOpenText className="text-3xl text-white" />
            </div>
            <h2 className="text-[20px] font-semibold text-black mt-3 text-center">
              Our Email Address
            </h2>
            <p className="text-[16px] font-medium text-gray-600 mt-3 text-center">
              contact@DOGRI.com
            </p>
            <p className="text-[16px] font-medium text-gray-600 text-center">
              support@DOGRI.com
            </p>
          </div>

          {/*-------------card---------3----------*/}
          <div className="bg-white shadow p-10">
            <div className="bg-[#B18B5E] w-[85px] h-[85px] rounded-full m-auto flex items-center justify-center">
              <MdPhoneCallback className="text-3xl text-white" />
            </div>
            <h2 className="text-[20px] font-semibold text-black mt-3 text-center">
              Contact Phone Number
            </h2>
            <p className="text-[16px] font-medium text-gray-600 mt-3 text-center">
              +380961381876
            </p>
            <p className="text-[16px] font-medium text-gray-600 text-center">
              +380961381877
            </p>
          </div>
        </div>
      </div>

      {/*-----------------Map-------and---------Content-----------*/}
      <div>
        <div>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19757.497675525683!2d-1.254518!3d51.757043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2sus!4v1762968863084!5m2!1sen!2sus"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
