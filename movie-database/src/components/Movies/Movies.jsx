import Movie from "../Movie/Movie";
import { nanoid } from "nanoid";
import StyledMovies from "./StyledMovies";

function Movies(props) {
  const { movies, setMovies } = props;
  const handleClick = () => {
    const movie = {
      id: nanoid(),
      title: "Jigsaw Spiral",
      year: 2021,
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };
    setMovies([...movies, movie]);
  };
  return (
    <StyledMovies>
      <section>
        <h2>{props.pageTitle || "Latest Movies"}</h2>
        <div>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
        <button onClick={handleClick}>add movie</button>
      </section>
    </StyledMovies>
  );
}

export default Movies;
