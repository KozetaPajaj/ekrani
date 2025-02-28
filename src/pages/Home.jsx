import React from "react";
import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import ContentSection from "../components/ContentSection";
import axios from "axios";
import FeaturedSection from "../components/FeaturedSection";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      axios.get("https://ekrani-api.onrender.com/movies"),
      axios.get("https://ekrani-api.onrender.com/tvShows"),
    ])
      .then(([moviesRes, tvShowsRes]) => {
        setMovies(moviesRes.data);
        setTvShows(tvShowsRes.data);
        setLoading(false);
      })
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  if (loading) return <p className="text-white text-center">Loading...</p>;

  return (
    <main className="min-h-screen home">
      <HeroSection />
      <FeaturedSection title="Featured Movies" items={movies} type="movies" />
      <FeaturedSection
        title="Featured TV Shows"
        items={tvShows}
        type="tvShows"
      />
      <ContentSection />
    </main>
  );
};

export default Home;
