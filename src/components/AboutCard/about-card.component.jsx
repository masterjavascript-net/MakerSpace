import React from "react";

import {AboutCardComponent} from './about-card.styles'


const AboutCard = ({details, openModal}) => {
  
  const imageName = details.imageName;

  return (
    <AboutCardComponent onClick={() => openModal(details)}>
      <div className="img-wrapper">
        <img src={require(`../../assets/${imageName}`)} alt="img" />
      </div>

      <div className="card-title">{details.title}</div>
    </AboutCardComponent>
  );
};

export default AboutCard;
