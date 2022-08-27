import styled from "styled-components";

const FooterWrapper = styled.footer`
  h3 {
    font-family: "Montserrat", sans-serif;
    color: #252525 !important;
    font-weight: 500;
    font-size: 1.25rem;

    span {
      transition: all 0.3s ease-in-out;
      border-bottom: 2px solid #10c9c3;

      a {
        text-decoration: none;
        color: #252525;
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        a {
          color: #10c9c3;
        }
        border-color: #252525;
      }
    }
  }

  p {
    font-size: 15px;
  }

  .contact-info {
    a {
      text-decoration: none;
      color: #252525;
      font-size: 15px;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #10c9c3;
      }
    }
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.25rem;
      a {
        text-decoration: none;
        color: #252525;
        transition: all 0.3s ease-in-out;
        font-size: 15px;

        &:hover {
          color: #10c9c3;
        }
      }
    }
  }
`;

export { FooterWrapper };
