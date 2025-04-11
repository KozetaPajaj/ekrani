import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      const response = await fetch(
        "https://digital-media-store-latest.onrender.com/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      const result = await response.json();
      setMessage("Registration successful! 🎉 Redirecting...");
      console.log("User registered:", result);

      const userToStore = {
        userId: result.userId,
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: result.message,
      };
      localStorage.setItem("user", JSON.stringify(userToStore));
      console.log("Saved User:", JSON.stringify(userToStore)); 

      setTimeout(() => {
        navigate("/SignIn");
      }, 1500);
    } catch (error) {
      console.error("Registration error:", error.message);
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <main>
      <div className="relative flex items-center bg-[url('/images/filmroll.jpg')] justify-center pb-20 pt-36 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover">
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
          <div className="text-center">
            <h2 className="text-3xl text-gray-900">Sign Up</h2>
          </div>
          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <input
                className="w-1/2 text-base py-2 border-b border-gray-300 focus:outline-none focus:border-[#00988a]"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                className="w-1/2 text-base py-2 border-b border-gray-300 focus:outline-none focus:border-[#00988a]"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <input
              className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-[#00988a]"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-[#00988a]"
              type="password"
              placeholder="Please enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="flex items-center mt-6">
              <input
                id="accept_terms"
                name="accept_terms"
                type="checkbox"
                className="h-4 w-4 border-gray-300 rounded accent-neutral-700"
                required
              />
              <label
                htmlFor="accept_terms"
                className="ml-2 block text-sm text-gray-900"
              >
                I accept the{" "}
                <Link
                  href=""
                  className="text-[#00c6b1] hover:underline cursor-pointer"
                >
                  Terms and Conditions
                </Link>
              </label>
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer text-white rounded text-center py-4 duration-300 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 focus:outline-none shadow-lg shadow-teal-500/50"
            >
              Create Account
            </button>
            {message && (
              <div className="mt-4 text-center text-sm text-red-500">
                {message}
              </div>
            )}
            <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
              <span>Already have an account?</span>
              <Link
                to="/SignIn"
                className="text-[#00c6b1] hover:underline cursor-pointer"
              >
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
