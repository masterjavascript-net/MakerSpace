import React, { useCallback } from "react";
import AboutWrapper from "./About.styles";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function About({ content }) {
  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine);
  }, []);

  const options = {
    preset: "stars",
    fullScreen: false,
  };

  return (
    <AboutWrapper>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="about-banner py-5">
        <Particles id="tsparticles" options={options} init={particlesInit} />
        <div className="container py-5 about-banner-text my-md-5">
          <div className="row justify-content-center">
            <div className="col-11 col-md-6 text-center">
              <h1 className="text-center">MakerSpace</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                quos accusamus recusandae qui repudiandae sed voluptas
                consequuntur sint quod nulla amet quisquam doloremque unde
                reprehenderit voluptates nostrum blanditiis, minus temporibus!
              </p>
              <div className="pt-4">
                <h4 className="text-light">Our activities</h4>
                <i class="fa-solid fa-angle-down text-light fs-1"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-service mt-3">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-10 col-md-5 col-lg-3">
              <div className="text-center">
                <i
                  style={{ color: "#ff2442" }}
                  className="fa-solid fa-robot fs-1 mb-2"
                ></i>
                <h4 className="mb-2">Robotics</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, sed?
                </p>
              </div>
            </div>
            <div className="col-10 col-md-5 col-lg-3 mt-3 mt-lg-0">
              <div className="text-center">
                <i
                  style={{ color: "#ff2442" }}
                  className="fa-solid fa-robot fs-1 mb-2"
                ></i>
                <h4 className="mb-2">Robotics</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, sed?
                </p>
              </div>
            </div>
            <div className="col-10 col-md-5 col-lg-3 mt-3 mt-lg-0">
              <div className="text-center">
                <i
                  style={{ color: "#ff2442" }}
                  className="fa-solid fa-robot fs-1 mb-2"
                ></i>
                <h4 className="mb-2">Robotics</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, sed?
                </p>
              </div>
            </div>
            <div className="col-10 col-md-5 col-lg-3 mt-3 mt-lg-0">
              <div className="text-center">
                <i
                  style={{ color: "#ff2442" }}
                  className="fa-solid fa-robot fs-1 mb-2"
                ></i>
                <h4 className="mb-2">Robotics</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, sed?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#f6f8f8",
        }}
        className="about-help py-5"
      >
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-8 text-center">
              <h1>Do you have a question?</h1>
              <p className="my-3">
                Let us know what you're looking for in an agency. We'll take a
                look and see if this could be the start of something beautiful.
              </p>
              <Link
                style={{
                  background: "#10c9c3",
                  borderColor: "#10c9c3",
                }}
                to="/contact"
                className="btn btn-primary rounded-0 py-2 px-4"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
}

export default About;
