import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";

function HeroSection() {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      axios.get("https://ekrani-api.onrender.com/movies"),
      axios.get("https://ekrani-api.onrender.com/tvShows"),
    ])
      .then(([movieResponse, tvShowResponse]) => {
        setMovies(
          movieResponse.data.map((item) => ({ ...item, type: "movie" }))
        );
        setTvShows(
          tvShowResponse.data.map((item) => ({ ...item, type: "tvShow" }))
        );
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
          Failed to load content. Please try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-[#d10000] text-white px-6 py-2 rounded cursor-pointer"
        >
          Retry
        </button>
      </div>
    );

  const combinedContent = [...movies, ...tvShows].filter(
    (item) => item.year === 2025
  );

  return (
    <div className="w-full pt-32 pb-20">
      <div className="container mx-auto text-left px-8 py-4">
        <h1 className="text-white text-3xl font-bold mb-2 uppercase">
          Top picks
        </h1>
        <p className="text-[#ffffffc2]">TV shows and movies just for you</p>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={6}
        breakpoints={{
          320: { slidesPerView: 1 },
          575: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 6 },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
      >
        {combinedContent.map((item, index) => {
          const linkPath =
            item.type === "movie"
              ? `/movies/${item.id}`
              : `/tvShows/${item.id}`;

          return (
            <SwiperSlide key={`${item.id}-${index}`} className="relative">
              <Link to={linkPath} className="block">
                <div className="h-[350px]">
                  <img
                    src={item.imageURL}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-white text-center mt-2">
                  <h3 className="text-sm font-bold uppercase text-[#ffffffc2]">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default HeroSection;
