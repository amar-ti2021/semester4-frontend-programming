// Import Navbar, Hero, Movies, Footer Component

import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function NowPlaying() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  async function getNowPlayingMovies() {
    const response = await axios(URL);
    setMovies(response.data.results);
  }
  return (
    <>
      <Hero />
      <Movies pageTitle="Now Playing" movies={movies} />
    </>
  );
}

export default NowPlaying;
