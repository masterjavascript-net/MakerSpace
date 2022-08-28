import styled from "styled-components";

const ContactWrapper = styled.div`
  .contact-info {
    h3 {
      margin-bottom: 1rem;
      font-weight: 500;
      line-height: 1.1;
      color: #171717;
      font-size: 2rem;
    }
    p {
      margin-bottom: 1.6rem;
      font-size: 15px;
      font-weight: 400;
      color: rgb(95, 95, 95);
    }
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;

      li {
        margin-bottom: 1rem;
        font-size: 15px;
        font-weight: 400;
        color: rgb(95, 95, 95);
        span {
          padding-right: 5px;
          color: #171717;
          font-weight: 600;
        }
      }
    }
  }

  .contact-form {
    form {
      button {
        background: #10c9c3;
        border-color: #10c9c3;
      }
    }
  }
`;

export { ContactWrapper };
