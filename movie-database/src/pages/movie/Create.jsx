// Import Navbar, Hero, Movies, Footer Component

import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";

function Create({ movies, setMovies }) {
  return (
    <>
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </>
  );
}

export default Create;
