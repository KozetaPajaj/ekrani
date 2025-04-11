import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MoviesGrid = ({ limit }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://digital-media-store-latest.onrender.com/api/media/movies")
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <div className="pb-32 pt-42 px-8 sm:px-16 container mx-auto movies-list">
      <div className="text-left mb-8 w-full flex-col sm:flex-row flex justify-between">
        <div>
          <h1 className="text-white text-3xl font-bold mb-2 uppercase">
            Movies
          </h1>
          <p className="text-[#ffffffc2]">Browse your favorite movies</p>
        </div>
        <input
          className="p-2 cursor-pointer border-1 max-h-[38px] border-white shadow-sm shadow-[#979797] text-white bg-transparent"
          id="search"
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredMovies.length === 0 ? (
        <p className="text-white text-center w-full">No movies found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {filteredMovies.map((movie) => (
            <Link
              to={`/media/${movie.id}`}
              key={movie.id}
              className="text-white"
            >
              <div className="h-[450px] img-wr">
                <img
                  src={movie.imageURL}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-md font-bold mt-2 text-center uppercase">
                {movie.title}
              </h3>
              <p className="text-sm text-[#ffffffc2] text-center">
                {movie.genres.join(" · ")}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviesGrid;
