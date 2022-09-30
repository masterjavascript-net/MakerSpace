import React, { useCallback, useState } from "react";
import AboutWrapper from "./About.styles";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AboutModal from "../../components/AboutModal/about-modal.component";
import AboutCard from "../../components/AboutCard/about-card.component";

function About({ content }) {
  
  //
  const aboutCardsDetails = [
    {
      id: 0,
      title: "3d Modelling and Printing ",
      content:
        "3D modelling is the process of developing a representation of any surface of an object in three dimensions via specialized software in a simulated 3D space. 3D printing is a process of making three dimensional solid objects from a digital file.",
      imageName: "3d-modelling-printing.png",
    },

    {
      id: 1,
      title: "3d Doodle Art",
      content:
        "3D pens condense the idea of a 3D printer into a single pen. Instead of machine code dictating what design is 3D printed, a 3D pen is directly controlled by the artist.",
      imageName: "3d-doodle-art.png",
    },

    {
      id: 2,
      title: "Robotics",
      content:
        "Robotics is a Interdisciplinary branch of computer science and engineering. Robotics involves design, construction, operation, and use of robots. The goal of robotics is to design machines that can help and assist humans.",
      imageName: "robotics.png",
    },

    {
      id: 3,
      title: "Electronic circuits",
      content:
        "(LittleBits, Snap Circuits, Squishy Circuits): An electronic circuit is composed of individual electronic components, such as resistors, transistors, capacitors, inductors and diodes, connected bu conductive wires of traces through which electric current can flow.",
      imageName: "electronic-circuits.png",
    },
    {
      id: 4,
      title: "Green screen technology",
      content:
        "In the fields of photography and videography, a green screen is a backdrop of bright green canvas that allows photo and video editors to change the entire background later on in post-production.",
      imageName: "green-screen-technology.png",
    },

    {
      id: 5,
      title: "3D VR Glasses ",
      content:
        "These glasses enable the wearer to see three dimensional images which give an illusion of depth of perception. For example, if the wearer is using virtual reality for architectural purposes then they will be able to view a building at different angles, and walk through or around it.",
      imageName: "oculus.png",
    },
    // {
    //   id: 4,
    //   title: "Digital Storytelling",
    //   content:
    //     "Digital Storytelling uses multimedia tools to bring narratives to life. Digital Stories can be used to explain a concept, to reflect on a personal experience, to retell a historical event or to make an argument. Digital stories are typically videos that combine audio, images, and video clips to tell a story.",
    //   imageName: "digital-storytelling.png",
    // },
    
  ];

  //
  const [activeCardDetails, setActiveCardDetails] = useState({});
  const [loadMoreSize, setLoadMoreSize] = useState(3);
  const [modalVisibility, setModalVisibility] = useState("0");

  //
  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine);
  }, []);

  //
  const options = {
    preset: "stars",
    fullScreen: false,
  };

  //
  const openModal = (x) => {
    setActiveCardDetails(x);
    // for animation
    setModalVisibility("0");
    setTimeout(() => {
      setModalVisibility("100");
    }, 100);
  };

  //
  const closeModal = (x) => {
    // for animation
    setModalVisibility("0");
    setTimeout(() => {
      setActiveCardDetails(x);
    }, 500);
  };

  return (
    <>
      {activeCardDetails.title !== undefined && (
        <AboutModal
          closeModal={(x) => closeModal(x)}
          details={activeCardDetails}
          modalVisibility={modalVisibility}
        />
      )}

      <AboutWrapper>
        <Helmet>
          <title>About</title>
        </Helmet>

        <div className="about-banner py-5">
          <Particles id="tsparticles" options={options} init={particlesInit} />

          <div className="container pt-5 about-banner-text mt-md-5">
            <div className="row justify-content-center">
              <div className="col-11 col-md-6 text-center">
                <h1 className="text-center">
                  Maker<span className="about-title-diff">Space</span>
                </h1>
                <p>
                  Established in December 2015, the Maker Space of the Baku American Center provides free classes on STEM, 3D designs and printing, robotics, and other classes. Space can be considered as an entrepreneurial lab for young creators. Also, the center includes a special book collection.
                </p>
                <div className="pt-4 d-flex flex-column align-items-center">
                  <h4 className="text-light about-subtitle-diff">
                    Our activities
                  </h4>
                  <i className="fa-solid fa-angle-down text-light fs-1 arrow-down-icon"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="about-service">
            <div className="container pb-5">
              <div className="row">
                {aboutCardsDetails.map((card) => {
                  return (
                    card.id < loadMoreSize && (
                      <div
                        key={card.id}
                        className="col-12 col-lg-6 col-xl-4 px-5 mt-5"
                      >
                        <AboutCard
                          details={card}
                          openModal={(x) => openModal(x)}
                        />
                      </div>
                    )
                  );
                })}
              </div>
              <div className="row justify-content-center">
                {aboutCardsDetails[aboutCardsDetails.length - 1].id + 1 !==
                  loadMoreSize && (
                  <button
                    className="loadMore-btn"
                    onClick={() => setLoadMoreSize(loadMoreSize + 3)}
                  >
                    Load more
                  </button>
                )}
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
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-8 text-center">
                <h1>Do you have a question?</h1>
                <p className="my-3">
                  Let us know what you're looking for in an agency. We'll take a
                  look and see if this could be the start of something
                  beautiful.
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
    </>
  );
}

export default About;
