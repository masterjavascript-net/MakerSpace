import styled from 'styled-components';



export const AboutCardComponent = styled.div`
      width: 100%;
      height: 360px;
      border-radius: 5px;
      /* overflow: hidden; */
      background-color: transparent;
      position: relative;
      cursor: pointer;

      &:hover{
        img{
          transform: scale(1.1);
        }
        .card-title{
          border-color: #0CC9C3;
        }
      }

      .img-wrapper {
        width: 100%;
        height: 85%;

        img {
          width: 100%;
          height: 100%;
          border-radius: 5px;
          object-fit: cover;
          transition: .6s;
        }
      }

      .card-title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 15%;
        background-color: transparent;

        font-size: 20px;
        /* border-top-left-radius: 20px;
        border-top-right-radius: 20px;        
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px; */
        /* border-left: 2px solid #666666; */
        border-bottom: 2px solid #666666;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: 0.5s all;

      }
`