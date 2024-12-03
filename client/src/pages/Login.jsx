import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import useLogin from "../hooks/useUserLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const { login, loading, error } = useLogin();
  const { setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await login({ email, password });
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-black text-white px-8 py-4">
        <Link to="/" className="px-4 text-3xl">
          Test
        </Link>
      </div>
      <div className="flex flex-grow sm:items-center mt-5 sm:mt-0 justify-center">
        <div className="w-full max-w-md">
          <form
            className="rounded-md px-8 space-y-6"
            onSubmit={(e) => submitHandler(e)}
          >
            <div>
              <label htmlFor="email" className="block text-xl mb-2">
                What's your email?
              </label>
              <input
                id="email"
                type="email"
                value={email}
                required
                placeholder="email@example.com"
                className={`w-full px-4 py-2 rounded-md border transition-colors duration-300 focus:outline-none ${
                  emailFocused ? "bg-white" : "bg-zinc-200"
                }`}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-xl mb-2">
                Enter your password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                required
                placeholder="Your password"
                className={`w-full px-4 py-2 rounded-md border transition-colors duration-300 focus:outline-none ${
                  passwordFocused ? "bg-white" : "bg-zinc-200"
                }`}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <div className="rounded-md px-8 space-y-4">
            <div className="text-center">
              <Link
                to="/register"
                className="text-blue-600 hover:underline text-sm"
              >
                New here? Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
