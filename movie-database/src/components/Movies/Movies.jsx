import Movie from "../Movie/Movie";
import StyledMovies from "./StyledMovies";
import { useSelector } from "react-redux";

function Movies(props) {
  const movies = props.movies || useSelector((store) => store.movies.movies);
  return (
    <StyledMovies>
      <section>
        <h2>{props.pageTitle || "Latest Movies"}</h2>
        <div>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </StyledMovies>
  );
}

export default Movies;
