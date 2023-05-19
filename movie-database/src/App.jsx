// Import Halaman Home
import { Route, Routes } from "react-router-dom";
import CreateMovie from "./pages/movie/CreateMovie";
import Home from "./pages/Home";
import NowPlaying from "./pages/movie/NowPlaying";
import Popular from "./pages/movie/PopularMovie";
import TopRated from "./pages/movie/TopRated";
import { Layout } from "./layout";
import Counter from "./Counter";

function App() {
  /**
   * Menampilkan Halaman Home.
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   */

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/movie/create" element={<CreateMovie />}></Route>
          <Route path="/movie/popular" element={<Popular />}></Route>
          <Route path="/movie/top-rated" element={<TopRated />}></Route>
          <Route path="/movie/now-playing" element={<NowPlaying />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
