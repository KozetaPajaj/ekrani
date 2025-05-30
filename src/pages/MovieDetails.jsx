import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const [media, setMedia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://digital-media-store-latest.onrender.com/api/media/${id}`;

    axios
      .get(url)
      .then((response) => {
        setMedia(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-[#d10000]">Details not found.</p>;

  return (
    <main className="min-h-screen mb-0 xl:mb-[14rem]">
      <div className="relative flex items-center bg-[url('/images/cinema.jpg')] justify-center pb-20 pt-36 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover max-h-[100%] md:max-h-[650px]">
        <div className="absolute bg-black opacity-70 inset-0 z-0"></div>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 z-1  items-start md:items-center justify-center">
          <div className="w-full h-full md:h-[460px] xl:h-[560px] mb-[-14rem]">
            <img
              src={media.imageURL}
              alt={media.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 text-white mt-6 md:mt-0">
            <h2 className="font-bold text-3xl mb-2">{media.year}</h2>
            <h1 className="font-bold text-3xl md:text-4xl mb-2 uppercase">
              {media.title}
            </h1>
            <p className="text-md max-w-md">{media.description}</p>
            <div className="flex justify-start items-start sm:items-center mt-8 flex-col sm:flex-row">
              <div
                onClick={() => window.open(media.trailer, "_blank")}
                className="relative mb-2 sm:mb-0 cursor-pointer flex justify-between items-center after:content-[''] after:hidden sm:after:block after:w-px after:h-[38px] after:opacity-60 after:bg-white after:mr-[30px] after:ml-[20px]"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-transparent rounded-full border border-[#ffffff4d] mr-4">
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-play"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <span>Watch The Trailer</span>
              </div>
              <div className="flex justify-start items-center opacity-70 text-md ">
                <p className="relative flex items-center after:content-[''] after:block after:w-[3px] after:h-[3px] after:bg-white after:rounded-full after:mx-[12px]">
                  {media.duration}
                </p>
                <ul className="flex items-center relative after:content-[''] after:block after:w-[3px] after:h-[3px] after:bg-white after:rounded-full after:mx-[12px]">
                  {media.genres.map((genre, index) => (
                    <li
                      className="mr-2 last:mr-0 after:content-[','] after:ml-2 last:after:content-['']"
                      key={index}
                    >
                      {genre}
                    </li>
                  ))}
                </ul>
                <p>{media.year}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
              <button
                className="py-2 px-4 m-2 cursor-pointer bg-[#74b6b7] duration-300 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 focus:outline-none"
                onClick={() => alert(`Rent for $${media.price?.rent}`)}
              >
                RENT FROM  ${media.price?.rent}
              </button>

              <button
                className="py-2 px-4 m-2 cursor-pointer bg-[#74b6b7] duration-300 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 focus:outline-none"
                onClick={() => alert(`Purchase for $${media.price?.purchase}`)}
              >
                PURCHASE FROM  ${media.price?.purchase}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
