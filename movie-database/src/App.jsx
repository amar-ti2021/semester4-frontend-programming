// Import Halaman Home
import { Route, Routes } from "react-router-dom";
import Create from "./pages/movie/Create";
import Home from "./pages/Home";
import NowPlaying from "./pages/movie/NowPlaying";
import Popular from "./pages/movie/Popular";
import TopRated from "./pages/movie/TopRated";
import { Layout } from "./layout";
import Counter from "./Counter";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import Detail from "./pages/movie/Detail";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/counter" element={<Counter />}></Route>
            <Route path="/movie/create" element={<Create />}></Route>
            <Route path="/movie/popular" element={<Popular />}></Route>
            <Route path="/movie/top-rated" element={<TopRated />}></Route>
            <Route path="/movie/now-playing" element={<NowPlaying />}></Route>
            <Route path="/movie/:id" element={<Detail />}></Route>
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
