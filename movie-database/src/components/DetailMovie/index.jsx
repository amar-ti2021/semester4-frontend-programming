import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../ui/Button";
import ENDPOINTS from "../../utils/constants/endpoints";
import HeroStyled from "../Hero/HeroStyled";

const DetailMovie = () => {
  const [movie, setMovie] = useState("");
  const params = useParams();
  const id = params.id;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const idTrailer = movie && movie.videos.results[0].key;
  async function getDetailMovie() {
    const response = await axios(ENDPOINTS.DETAIL(id));
    setMovie(response.data);
  }
  useEffect(() => {
    getDetailMovie();
  }, [id]);
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
};

export default DetailMovie;
