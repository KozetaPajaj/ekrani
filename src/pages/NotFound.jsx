import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main classNameName="min-h-screen">
        <div className="px-4 mx-auto max-w-screen-xl pb-20 pt-36 lg:px-6 text-white">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-9xl font-extrabold tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-[#ffffffc2]">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-[#ffffffc2]">
              Sorry, we can't find that page.
            </p>
            <Link
              to="/"
              className="inline-flex text-teal-500 underline font-medium text-sm px-5 py-2.5 text-center my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
    </main>
  );
};

export default NotFound;
