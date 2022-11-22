import styled from "styled-components";

const QrScannerWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  position: relative;

  a {
    color: #241c1c;
  }

  i {
    color: #fff;
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 2rem;
    cursor: pointer;
  }

  .qr-scanner {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader {
    width: 64px;
    height: 64px;
    border: 8px solid #fff;
    border-bottom-color: #10c9c3;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { QrScannerWrapper };
