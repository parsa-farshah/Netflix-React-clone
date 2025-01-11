import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Main from "../../components/main/Main";
import Row from "../../components/row/Row";
import requests from "../../Request";
import LogIn from "../logIn/LogIn";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Row rowID="1" title="Popular" fetchUrl={requests.requestPopular} />
      <Row rowID="2" title="Trending" fetchUrl={requests.requestTrending} />
      <Row rowID="3" title="Top Rated" fetchUrl={requests.requestTopRated} />
      <Row rowID="4" title="Up Coming" fetchUrl={requests.requestUpcoming} />
    </>
  );
}
