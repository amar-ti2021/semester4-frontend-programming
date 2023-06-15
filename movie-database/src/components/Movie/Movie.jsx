import { Link } from "react-router-dom";
import StyledMovie from "./StyledMovie";
const Movie = (props) => {
  const { movie } = props;
  return (
    <Link to={`/movie/${movie.id}`}>
      <StyledMovie>
        <img
          src={
            movie.poster ||
            `https://image.tmdb.org/t/p/w300${movie.poster_path}`
          }
          alt={movie.title}
        />
        <h3>{movie.title}</h3>
        <p>{movie.year || movie.release_date}</p>
      </StyledMovie>
    </Link>
  );
};

export default Movie;
