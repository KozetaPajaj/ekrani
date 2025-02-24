import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <main>
      <div className="relative flex items-center bg-[url('/images/filmroll.jpg')] justify-center py-20 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover relative items-center">
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
          <div className="text-center">
            <h2 className="text-3xl text-gray-900">Sign Up</h2>
          </div>
          <form className="mt-6 space-y-6" action="#" method="POST">
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
            <div className="mt-6 content-center">
              <label className="text-sm text-gray-700">Password</label>
              <input
                className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-[#00988a]"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-6 content-center">
              <label className="text-sm text-gray-700">Confirm Password</label>
              <input
                className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-[#00988a]"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center">
                <input
                  id="accept_terms"
                  name="accept_terms"
                  type="checkbox"
                  className="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded accent-neutral-700"
                />
                {/* <label htmlFor="accept_terms" className="ml-2 block text-sm text-gray-900">
                  I accept the <a href="#" className="text-[#00c6b1] hover:underline cursor-pointer">Terms and Conditions</a>
                </label> */}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full text-white rounded text-center py-4 duration-300 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 focus:outline-none shadow-lg shadow-teal-500/50"
              >
                Create Account
              </button>
            </div>
            <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
              <span>Already have an account?</span>
              <Link to="/SignIn" className="text-[#00c6b1] hover:underline cursor-pointer">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
