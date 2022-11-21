import React from "react";
import Gallery from "../../components/Gallery";
import { Helmet } from "react-helmet";

function Home({ content }) {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <Gallery content={content} />
      </div>
    </>
  );
}

export default Home;
