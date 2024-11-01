import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-center flex-wrap">
          {/* Column 1: Company Info */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-bold mb-2">
              <img src="/Brand3.png" alt="" />
            </h3>
            <p className="text-gray-400">Shoppy Globe – Your Global Destination for Trendy Shopping!!</p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-gray-300 hover:text-[#E0115F]">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/CategoryProductPage/All"
                  className="text-gray-300 hover:text-[#E0115F]"
                >
                  Products
                </Link>
              </li>
              <li className="mb-2">
                <Link to="" className="text-gray-300 hover:text-[#E0115F]">
                  Profile
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/CartPage" className="text-gray-300 hover:text-[#E0115F]">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-bold mb-8">Follow Us</h3>
            <ul className="flex space-x-4">
              <li className="w-8">
                <Link
                  to="https://github.com/pujaTiwa/"
                  aria-label="Github"
                >
                  <img src="/github.png" alt="Github icon" />
                </Link>
              </li>
              <li className="w-8">
                <Link to="https://www.instagram.com/lifeisnot00?igsh=d2hlYjBvMzNqbmUz" aria-label="Instagram">
                  <img src="/instagram_2111463.png" alt="Instagram icon" />
                </Link>
              </li>
              <li className="w-8">
                <Link
                  to="https://www.linkedin.com/in/puja-tiwari-616428220/"
                  aria-label="LinkedIn"
                >
                  <img src="/twitter_3670151.png" alt="LinkedIn icon" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center pt-6 border-t border-gray-700">
          <p>All rights reserved &copy; 2024 Shoppy Globe.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
