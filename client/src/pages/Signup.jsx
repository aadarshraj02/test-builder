import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import useUserRegister from "../hooks/useUserRegister";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { signup, loading, error } = useUserRegister();

  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstName,
        lastName,
      },
      email,
      password,
    };

    try {
      const data = await signup(newUser);
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/");

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-black text-white px-8 py-4 text-center sm:text-left">
        <Link to="/" className="px-4 text-3xl">
          Test
        </Link>
      </div>
      <div className="flex flex-grow sm:items-center mt-5 sm:mt-0 justify-center">
        <div className="w-full max-w-md">
          <form className="rounded-md px-8 space-y-6" onSubmit={submitHandler}>
            <div>
              <label htmlFor="fullname" className="block text-xl mb-2">
                Enter your Full Name
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  required
                  placeholder="First Name"
                  className="w-full px-4 py-2 rounded-md border bg-zinc-200"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  required
                  placeholder="Last Name"
                  className="w-full px-4 py-2 rounded-md border bg-zinc-200"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-xl mb-2">
                Enter your Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                required
                placeholder="email@example.com"
                className="w-full px-4 py-2 rounded-md border bg-zinc-200"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-xl mb-2">
                Enter your Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                required
                placeholder="Your password"
                className="w-full px-4 py-2 rounded-md border bg-zinc-200"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <div className="rounded-md px-8 space-y-4">
            <div className="sm:text-right text-center">
              <Link
                to="/login"
                className="text-blue-600 hover:underline text-sm"
              >
                Existing user? Login here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
