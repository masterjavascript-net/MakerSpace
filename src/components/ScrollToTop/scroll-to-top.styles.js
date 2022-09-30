import styled from "styled-components";

export const ScrollToTopComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 30px;
  right: 40px;
  background-color: #fff;
  border-radius: 12px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  /* transition: 0.3s all; */
  z-index:999;

  .scroll-rocket {
    font-size: 24px;
    color: #ff2442;
    transition: .3s all;
  }

  .scroll-fire {
    visibility: hidden;
    position: absolute;
    bottom: -5px;
    transform: rotate(180deg);
    color: rgb(255, 100, 0);
    /* transition: 0.5s all; */
    font-size: 22px;
  }

  .fire-active {
    visibility: visible;
  }

  .rocket-active{
    transform: scale(1.1);
    transform: rotate(-45deg) scale(1.1);
  }

`;
