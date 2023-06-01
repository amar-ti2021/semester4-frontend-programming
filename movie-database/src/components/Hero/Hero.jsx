import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import HeroStyled from "./HeroStyled";

function Hero() {
  const [movie, setMovie] = useState("");
  const fetchMovie = async () => {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
    const response = await fetch(url);
    const data = await response.json();

    setMovie(data);
  };
  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <HeroStyled>
      <section className="hero">
        <div className="hero__left">
          <h2 className="hero__title">{movie.Title}</h2>
          <h3 className="hero__genre">Genre: {movie.Genre}</h3>
          <p className="hero__description">{movie.Plot}</p>
          <Button variant="danger">Watch</Button>
        </div>
        <div className="hero__right">
          <img className="hero__image" src={movie.Poster} alt="placeholder" />
        </div>
      </section>
    </HeroStyled>
  );
}

export default Hero;
