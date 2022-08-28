import React from "react";
import { FooterWrapper } from "./Footer.styles";
import { Link } from "react-router-dom";

function Footer({ content: data }) {
  const content = data.filter((item) => item.fields.type === "setting")[0]
    .fields;

  return (
    <FooterWrapper className="border-top">
      <div className="container py-5">
        <div className="row justify-content-between">
          <div className="col-12 col-md-3">
            <h3 className="mb-4">
              MakerSpace{" "}
              <span>
                <a
                  title="Baku American Center"
                  href="https://www.facebook.com/bakuamericancenter/"
                  target={`_blank`}
                >
                  BAC
                </a>
              </span>
            </h3>
            <p>
              © 2017 Piroll. All rights reserved. Design by robirurk. Code by
              nK.
            </p>
          </div>
          <div className="col-12 col-md-3">
            <div className="contact-info mt-3 mt-md-0">
              <a href="mailto:AmericanCenterBaku@gmail.com">{content.email}</a>
              <br />
              <a href="tel:+994 12 441 36 80">{content.phone}</a>
            </div>
          </div>
          <div className="col-12 col-md-2">
            <ul className=" mt-3 mt-md-0">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <a href="">Subscribe</a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <ul className=" mt-3 mt-md-0">
              <li>
                <a href={content.facebook} target={`_blank`}>
                  Facebook
                </a>
              </li>
              <li>
                <a href={content.instagram} target={`_blank`}>
                  Instagram
                </a>
              </li>
              <li>
                <a href={content.twitter} target={`_blank`}>
                  Twitter
                </a>
              </li>
              <li>
                <a href={content.youtube} target={`_blank`}>
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
