import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../Helpers/axios";
import requests from "../../Helpers/requests";

const Banner = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(requests.fetchNetflixOriginals);
      //   console.log(data);
      setMovie(
        data.data.results[
          Math.floor(Math.random() * data.data.results.length - 1)
        ]
      );
      return data;
    };

    fetchData();
  }, []);

//   console.log(movie);

function desc_shrink(str,len){
    return str?.length > len ? str.substr(0,len-1)+"...":str
}
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
            <button className="banner_button">play</button>
            <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
        {desc_shrink(movie?.overview,150)}
        </h1>
      </div>
    </header>
  );
};

export default Banner;
