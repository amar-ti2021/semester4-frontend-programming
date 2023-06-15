import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

const Detail = () => {
  const { id } = useParams();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getRecommendedMovies();
  }, [id]);

  async function getRecommendedMovies() {
    const response = await axios(ENDPOINTS.RECOMMENDATIONS(id));
    setMovies(response.data.results);
  }
  return (
    <>
      <DetailMovie />
      <Movies pageTitle="Recommended Movies" movies={movies} />
    </>
  );
};

export default Detail;
