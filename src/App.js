import './App.css';
import React from "react";
import Row from "./Row";
import Banner from "./Banner";
import requests from"./requests";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      {/* Nav Bar */}
      <Nav/>
      {/* Banner */}
      <Banner/>

      {/* Rows */}
      <Row title="NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title="Trending Now" fetchUrl = {requests.fetchTrending}/>
      <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title="Horror Movied" fetchUrl = {requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
      <Row title="Documenatries" fetchUrl = {requests.fetchDocumentaries}/>
    </div>
    

  );
}

export default App;
