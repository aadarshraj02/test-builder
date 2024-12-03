import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-zinc-900 px-5 sm:px-10 py-3 flex items-center justify-between">
      <div>
        <h2 className="text-white font-semibold text-2xl">Test</h2>
      </div>
      <div className="flex gap-10">
        <Link to="/login" className="text-white">
          Login
        </Link>
        <Link to="/register" className="text-white">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
