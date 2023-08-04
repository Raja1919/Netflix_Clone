import React from "react";
import "./HomeScreen.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row";
import requests from "../../Helpers/requests";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <Navbar />

      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />

      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />

      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />

      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedymovies} />

      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
