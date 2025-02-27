import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import TVShows from "./pages/TVShows";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/TVShows" element={<TVShows />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/tvShows/:id" element={<MovieDetails />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
