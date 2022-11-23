import React from "react";
import PaperImg from "../../assets/hero-ms-1.jpeg";

import { HeroComponent, ImageContainer, TextContainer } from "./hero.styles";

const Hero = () => {
  return (
    <HeroComponent>
      <div className="container">
        <div className="row hero-row">
          <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center position-relative">
            <TextContainer>
              <h1>Maker Space, Baku American <span>Center</span></h1>
              <p>
                A maker space is a collaborative work space inside a school,
                library or seperate public/private facility for making,
                learning, innovating, exploring and sharing that uses high tect
                to no tech tools. These spaces are open to kids, adults, and
                entrepreneurs and have a variety of maker equipment including 3D
                printers, robotics and media.
              </p>
            </TextContainer>

            {
            }

          </div>

         

          <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
            <ImageContainer>
              <img src={PaperImg} alt=""></img>
            </ImageContainer>
          </div>
        </div>
      </div>
    </HeroComponent>
  );
};

export default Hero;
