import styled from "styled-components";
import BackgroundImg from "./../../assets/hero-ms-1.jpeg";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  margin-bottom: 8rem;
`;

export const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${BackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(4px);
  position: absolute;
  z-index:-1;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #fff;
  margin: 2rem 0;


  h1 {
    margin-bottom: 1rem;
  }

  p {
    font-size: 18px;
  }
  span{
        color:#10c9c3;
    }

    .hero-btn{
        background-color: transparent;
        color: #fff;
        border: 1px solid #10c9c3;
        border-radius: 7px;
        padding: 5px 20px;
        font-size: 22px;
        margin-top: 1rem;
        transition: 0.3s all;

        &:hover{
            background-color: #fff;
            color:#10c9c3;
            border: 1px solid transparent;
        }
    }

  @media (max-width:992px){
    h1{
      margin-top: 2rem;
    }
  
  }
`;
