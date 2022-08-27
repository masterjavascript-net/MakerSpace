import styled from "styled-components";

const GalleryWrapper = styled.div`
  .gallery-item {
    position: relative;

    .gallery-item-hover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #0c9a95;
      opacity: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s ease-in-out;

      i {
        font-size: 3rem;
        color: #fff;
      }
    }

    &:hover {
      .gallery-item-hover {
        opacity: 0.8;
      }
    }
  }
`;

export { GalleryWrapper };
