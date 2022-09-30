import styled from "styled-components";

const AboutWrapper = styled.div`
  
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

  .about-banner {
    background-color: aliceblue;
    position: relative;

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

      .about-title-diff{
        color: #0CC9C3 !important;
      }

      .about-subtitle-diff{
        border-bottom: 1px solid #0CC9C3;
        width: 40%;
        padding-bottom: 7px;
        border-radius: 30px;
      }

    }
  }

  .about-service {
    color: #fff;


    .loadMore-btn{
      width: 160px;
      font-size: 18px;
      padding: .6rem 1rem;
      margin-top: 4rem;
      color: #fff;
      background: transparent;
      border: 1px solid #0CC9C3;
      border-radius: 5px;
      transition: 0.3s;
      z-index:1;

      &:hover{
        background-color: #0CC9C3;
      }
    }
  }
`;

export default AboutWrapper;
