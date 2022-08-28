import styled from "styled-components";

const GalleryTabsWrapper = styled.div`
  position: relative;
  z-index: 1;
  div {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  i {
    cursor: pointer;
  }

  .fa-image {
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #007965;
    }
  }

  .fa-clapperboard {
    transition: all 0.2s ease-in-out;
    &:hover {
      color: #ff2442;
    }
  }

  .fa-qrcode {
    transition: all 0.2s ease-in-out;
    &:hover {
      color: #10c9c3;
    }
  }
`;

export { GalleryTabsWrapper };
