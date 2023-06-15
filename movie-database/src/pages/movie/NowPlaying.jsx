// Import Navbar, Hero, Movies, Footer Component

import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function NowPlaying() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  async function getNowPlayingMovies() {
    const response = await axios(ENDPOINTS.NOW_PLAYING);
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
