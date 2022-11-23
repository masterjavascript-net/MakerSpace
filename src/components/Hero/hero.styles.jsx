import styled from "styled-components";

export const HeroComponent = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 6rem;

  @media (max-width:992px){
    margin-top: 8rem;
  /* margin-bottom: 20rem;; */
  }

  .hero-row{

    @media (max-width:992px){
      flex-direction: column-reverse;
    }
  }

  .arrow-down{
    width: 80px;
    position: absolute;
    left: 140px;
    bottom: -280px;
    transform: rotate(-255deg);
    position:'absolute';
    width:'44px';
    transform:'rotate(145deg)';
    bottom:'-135px';
  }

`;

export const TextContainer = styled.div`
  h1 {
    margin-bottom: 1rem;
  }

  p {
    font-size: 18px;
  }
  span{
        color:#10c9c3;
    }

  @media (max-width:992px){
    h1{
      margin-top: 2rem;
    }
  
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 650px; */
  /* height: 550px; */

  img {
    width: 100%;
    /* height: 100%; */
    border-radius: 2rem;
  }
`;
