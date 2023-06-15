// Import Navbar, Hero, Movies, Footer Component

import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function Popular() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);
    setMovies(response.data.results);
  }
  return (
    <>
      <Hero />
      <Movies pageTitle="Popular Movies" movies={movies} />
    </>
  );
}

export default Popular;
