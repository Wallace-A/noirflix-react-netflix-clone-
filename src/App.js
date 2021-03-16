import './App.css';
import React from "react";
import Row from "./Row";
import requests from"./requests";

function App() {
  return (
    <div className="App">
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
