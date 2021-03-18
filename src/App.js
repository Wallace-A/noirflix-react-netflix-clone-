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
      <Row title="Netflix Detectives" fetchUrl = {requests.fetchNetflixDetectives}
      isLargeRow
      />
      <Row title="Detective" fetchUrl = {requests.fetchDetective}/>
      <Row title="Thrillers" fetchUrl = {requests.fetchThrillers}/>
      <Row title="Crime" fetchUrl = {requests.fetchCrime}/>
      <Row title="Mystery" fetchUrl = {requests.fetchMystery}/>
      <Row title="True Crime" fetchUrl = {requests.fetchTrueCrime}/>
    </div>
    

  );
}

export default App;
