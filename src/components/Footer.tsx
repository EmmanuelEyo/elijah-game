import React from "react";
import company_name from "../assets/UTI_Games-LDSP-full.png";

const Footer = () => {
  return (
    <div>
      <footer className="p-4 bg-white dark:bg-gray-900 shadow">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="flex items-center mb-4 ml-6 sm:mb-0">
            <img src={company_name} className="h-28 mr-3" alt="company-name" />
            {/* <span className="text-2xl font-semibold tracking-wider self-center dark:text-white whitespace-nowrap">
              UTIGAMES
            </span> */}
          </a>
          <ul className="flex flex-wrap items-center text-gray-500 dark:text-gray-400 text-sm mb-6 sm:mb-0">
            <li>
              <a className="hover:underline mr-4 md:mr-6" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:underline mr-4 md:mr-6" href="#">
                Cookies Policy
              </a>
            </li>
            <li>
              <a className="hover:underline mr-4 md:mr-6" href="#">
                User Agreement
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-600 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            className="hover:underline mr-2
          "
            href="#"
          >
            UTIGAMES
          </a>
          Inc.All Right Resereved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
