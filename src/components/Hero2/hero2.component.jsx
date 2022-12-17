import React from "react";

import { Content, HeroContainer, BackgroundImage } from "./hero2.styles";

const Hero2 = () => {
  return (
    <HeroContainer>
      <BackgroundImage />
      <div className="row justify-content-center" style={{backgroundColor: 'rgba(0,0,0, 0.4)'}}>
        <div className="col-11 col-md-6">
          <Content>
            <h1>Maker <span>Space</span></h1>
            <p>
              A maker space is a collaborative work space inside a school,
              library or seperate public/private facility for making, learning,
              innovating, exploring and sharing that uses high tect to no tech
              tools. These spaces are open to kids, adults, and entrepreneurs
              and have a variety of maker equipment including 3D printers,
              robotics and media.
            </p>
            <button className="hero-btn">Go to Gallery</button>
          </Content>
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero2;
