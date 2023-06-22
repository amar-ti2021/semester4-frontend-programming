// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
/**
 * Membuat Component Main.
 * Menampung Hero dan Movies
 */
function Main(props) {
  const { movies, setMovies } = props;
  return (
    <main>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
    </main>
  );
}

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */
function Home({ movies, setMovies }) {
  return (
    <>
      <Main movies={movies} setMovies={setMovies} />
    </>
  );
}

export default Home;
