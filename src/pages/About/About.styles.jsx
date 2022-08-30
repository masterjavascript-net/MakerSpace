import styled from "styled-components";

const AboutWrapper = styled.div`
  .about-banner {
    background-color: aliceblue;
    position: relative;

    #tsparticles {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      padding: 0;
      margin: 0;
      z-index: 0;
    }

    .about-banner-text {
      position: relative;
      z-index: 1;

      h1 {
        font-size: 3rem;
        font-weight: 600;
        color: #fff;
        text-transform: uppercase;
      }

      p {
        color: #fff;
        line-height: 1.5rem;
      }
    }
  }
`;

export default AboutWrapper;
