import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidenav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static inset-0 bg-zinc-900 text-white w-64 min-h-screen transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-5">
          <button
            onClick={toggleSidenav}
            className="lg:hidden text-white text-2xl"
          >
            &#9776;
          </button>
        </div>
        <ul className="space-y-4 px-5">
          <li>
            <Link to="/" className="block py-2">
              Home
            </Link>
          </li>
          <li></li>
          <li>
            <Link to="/give-test" className="block py-2">
              Give Test
            </Link>
          </li>
          <li>
            <Link to="/profile" className="block py-2">
              My created tests
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
