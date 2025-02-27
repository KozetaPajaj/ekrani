import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TvShowsList = () => {
  const [tvShows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://ekrani.onrender.com/tvShows")
      .then((response) => {
        setShows(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="w-full flex justify-center items-center min-h-[300px]">
        <p className="text-white text-lg">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="w-full flex flex-col justify-center items-center min-h-[300px] pt-32">
        <p className="text-[#d10000] text-md mb-4">
          Failed to load movies. Please try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-[#d10000] text-white px-6 py-2 rounded cursor-pointer"
        >
          Retry
        </button>
      </div>
    );

  return (
    <div className="pb-32 pt-42 px-16 container mx-auto">
      <div className="text-left mb-8 w-full">
        <h1 className="text-white text-3xl font-bold mb-2 uppercase">
          TV Shows
        </h1>
        <p className="text-[#ffffffc2]">Browse your favorite movies</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {tvShows.map((tvshows) => {
          return (
            <Link
              to={`/tvShows/${tvshows.id}`}
              key={tvshows.id}
              className="text-white"
            >
              <div className="h-[450px]">
                <img
                  src={tvshows.imageURL}
                  alt={tvshows.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-md font-bold mt-2 text-center uppercase">
                {tvshows.title}
              </h3>
              <p className="text-sm text-[#ffffffc2] text-center">
                {tvshows.genres.join(" · ")}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TvShowsList;
