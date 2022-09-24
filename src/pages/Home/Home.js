import React from "react";
import Gallery from "../../components/Gallery";
import { Helmet } from "react-helmet";

function Home({ content }) {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div style={{ paddingTop: "88px" }}>
        <Gallery content={content} />
      </div>
    </>
  );
}

export default Home;
