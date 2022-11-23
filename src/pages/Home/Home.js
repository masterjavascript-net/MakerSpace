import React from "react";
import Gallery from "../../components/Gallery";
import { Helmet } from "react-helmet";
import Hero from "../../components/Hero/hero.component";
import TestImg from "../../assets/test.svg";

function Home({ content }) {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero/>

      <div className="mid-line" style={{width:'40vw', height:'4px', backgroundColor:'#10c9c3',borderRadius:'1rem', margin:'0 auto 4rem', position:'relative'}}>
      {
        // <img src={TestImg} alt="" className="arrow-down" style={{transform:'scaleX(-1) rotate(145deg)', position:'absolute',right:'-50px', top:'65px'}}></img>
      }
      </div>

      <Gallery content={content} />
    </>
  );
}

export default Home;
