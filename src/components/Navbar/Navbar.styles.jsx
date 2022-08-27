import styled from "styled-components";

const NavbarWrapper = styled.div`
  .navbar {
    background-color: #fff;

    .nav-link {
      color: #000;
      font-size: 0.8rem;
      letter-spacing: 0.07em;
      text-transform: uppercase;
      padding: 6px 14.6px;
      font-weight: 500;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: #10c9c3;
      }
    }

    .active {
      color: #10c9c3 !important;
    }

    .navbar-toggler {
      border: none;

      i {
        font-size: 1.5rem;
        color: #000;
      }
    }
  }
`;

export { NavbarWrapper };
