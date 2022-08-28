import React from "react";
import Gallery from "../../components/Gallery";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Gallery />
    </>
  );
}

export default Home;
