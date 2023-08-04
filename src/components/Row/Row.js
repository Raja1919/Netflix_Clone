import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../Helpers/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, isLarge = false }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(fetchUrl);
      setMovies(data.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.name ||
          movie?.title ||
          movie?.id ||
          movie?.original_name ||
          movie?.original_title
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

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
                onClick={() => handleClick(movie)}
              />
            )
        )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
