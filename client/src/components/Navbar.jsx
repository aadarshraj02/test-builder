import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";

const Navbar = () => {
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    setUser({
      email: "",
      fullname: {
        firstName: "",
        lastName: "",
      },
    });
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="bg-zinc-900 px-5 sm:px-10 py-3 flex items-center justify-between">
      <div>
        <h2 className="text-white font-semibold text-2xl">Test</h2>
      </div>
      <div className="flex gap-10">
        {!user.email ? (
          <>
            <Link to="/login" className="text-white">
              Login
            </Link>
            <Link to="/register" className="text-white">
              Register
            </Link>
          </>
        ) : (
          <>
            <Link to="/create-test" className="text-white">
              {user.fullname.firstName} {user.fullname.lastName}
            </Link>
            <button onClick={logoutHandler} className="text-white">
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
