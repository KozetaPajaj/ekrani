import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const { login } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, password };

    try {
      const response = await axios.post(
        "https://digital-media-store-latest.onrender.com/api/users/login",
        formData
      );

      const loggedInUser = response.data;

      if (loggedInUser.userId) {
        const userToStore = {
          userId: loggedInUser.userId,
          firstName: loggedInUser.firstName,
          lastName: loggedInUser.lastName,
          email: loggedInUser.email,
        };
        localStorage.setItem("user", JSON.stringify(userToStore));

        login(loggedInUser);
        console.log(loggedInUser);

        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error.response || error);
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <main>
      <div className="relative flex items-center bg-[url('/images/filmroll.jpg')] justify-center pb-20 pt-36 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover">
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="max-w-md w-full space-y-8 px-10 py-8 bg-white rounded-xl z-10">
          <div className="text-center">
            <h2 className="text-3xl text-gray-900">Sign In</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input
                className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-[#00988a]"
                type="email"
                placeholder="mail@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-8 content-center">
              <label className="text-sm text-gray-700">Password</label>
              <input
                className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-[#00988a]"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errorMessage && (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}
            <div className="flex items-center justify-between">
              <div className="sm:flex flex-col items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 border-gray-300 rounded accent-neutral-700"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900 cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link to="" className="font-medium text-[#00c6b1]">
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full text-white rounded cursor-pointer text-center py-4 duration-300 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 focus:outline-none shadow-lg shadow-teal-500/50"
              >
                Sign in
              </button>
            </div>
            <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
              <span>Don't have an account?</span>
              <Link
                to="/SignUp"
                className="text-[#00c6b1] hover:underline cursor-pointer"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
