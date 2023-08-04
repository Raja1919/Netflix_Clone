import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../Helpers/axios";

const Row = ({ title, fetchUrl, isLarge = false }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(fetchUrl);
      setMovies(data.data.results);

      return data;
    };
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLarge && movie.poster_path) ||
              (!isLarge && movie.backdrop_path)) && (
              <img
                key={movie.id}
                className={`row_poster ${isLarge && "row_posterLarge"}`}
                src={`${base_url}${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt=""
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
