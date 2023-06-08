import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import HeroStyled from "./HeroStyled";

function Hero() {
  const [movie, setMovie] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const idTrailer = movie && movie.videos.results[0].key;
  const fetchMovie = async () => {
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(url);
    console.log(response.data.results[0]);
    return response.data.results[0];
  };

  async function getDetailMovie() {
    const trendingMovie = await fetchMovie();
    const id = trendingMovie.id;

    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;

    const response = await axios(URL);

    setMovie(response.data);
  }
  useEffect(() => {
    getDetailMovie();
  }, []);
  return (
    <HeroStyled>
      <section className="hero">
        <div className="hero__left">
          <h2 className="hero__title">{movie.title}</h2>
          <h3 className="hero__genre">Genre: {genres}</h3>
          <p className="hero__description">{movie.overview}</p>
          <Button
            as="a"
            href={`https://www.youtube.com/watch?v=${idTrailer}`}
            target="_blank"
            variant="danger"
          >
            Watch
          </Button>
        </div>
        <div className="hero__right">
          <img
            className="hero__image"
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt="placeholder"
          />
        </div>
      </section>
    </HeroStyled>
  );
}

export default Hero;
