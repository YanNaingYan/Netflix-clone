import React from "react";
import Row from "./components/Row";
import requests from "./api/api";
import Nav from "./components/Nav";
import Banner from "./components/Banner";

const App = () => {
  return (
    <div className="bg-[rgb(17,17,17)]">
      <Nav>
        <Banner />
        <Row
          title="NETFLIX ORIGINALS"
          isLargeRow
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </Nav>
    </div>
  );
};

export default App;
