import React, { useState } from "react";
import styles1 from "../../dist/css/contact.module.css";
import { Fade } from "react-reveal";

import radium from "radium";
import Form from "./form/form";
import crossImage from "../../dist/img/afterCorrection/dataImage-mob.png";
import BnrImage from "../../dist/img/afterCorrection/test-transparent.png";
import background2 from "../../dist/img/academic/background2.png";
import testimon from "../../dist/img/afterCorrection/estimonials.png";
// import "./Technical-finishing-school.css";

const Contact = (props) => {
  const { pageHeading, pageHeadingBody, pageHeadingTitle } = styles;
  return (
    <React.Fragment>
      <section>{Banner()}</section>
      <section className={styles1["sectionContact"]}>
        <div
          className="container-fluid"
          style={{ width: "90%", height: "auto" }}
        >
          <div className="header-section" style={pageHeading}>
            <div className="page-title" style={pageHeadingBody}>
              <Fade bottom>
                <h2 style={pageHeadingTitle}>
                  <span>Looking for something in particular?</span>
                </h2>
              </Fade>
            </div>

            {/*   <h3 className="title-text"></h3> */}
          </div>

          {/* {console.log("data in url", window.location.href)} */}
          <div
            className="col-sm-12  col-xs-12   col-md-12  col-lg-12  col-xl-12 "
            style={{
              paddingBottom: "30px",
            }}
          >
            <div
              className="testimonialCardSpace col-sm-4  col-xs-12   col-md-4  col-lg-4  col-xl-4 img-thumbnail"
              style={{
                paddingBottom: "5%",
                marginBottom: "15px",
                minWidth: "230px",
              }}
            >
              <div className="contact-col ">
                <i className="fas fa-map-marker-alt iconStyle"></i>
                <p
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "18px",
                    fontStyle: " normal",
                    fontWeight: " 400",
                    lineHeight: " 1.5",
                    color: "black",
                    listStyle: " none",
                    maxWidth: " 350px",
                  }}
                >
                  No 888, 2nd Floor, 80 Feet Ring road Papreddy Palya, 2nd
                  Stage, Nagarbhavi, Bengaluru, Karnataka 560072.
                </p>
              </div>
            </div>

            <div
              className="testimonialCardSpace col-sm-4  col-xs-12   col-md-4  col-lg-4  col-xl-4 img-thumbnail"
              style={{
                paddingBottom: "5%",
                marginBottom: "15px",
                minWidth: "230px",
              }}
            >
              <div className="contact-col .contact-infobox ">
                <i className="far fa-envelope iconStyle"></i>
                <p>
                  <a
                    href="mailto:info@digitalshark.in"
                    style={{
                      fontFamily: "Open Sans, sans-serif",
                      fontSize: "18px",
                      color: "black",
                    }}
                  >
                    info@digitalshark.in
                  </a>
                </p>
              </div>
            </div>

            <div
              className="testimonialCardSpace col-sm-4  col-xs-12   col-md-4  col-lg-4  col-xl-4 img-thumbnail"
              style={{
                paddingBottom: "5%",
                marginBottom: "15px",
                minWidth: "230px",
              }}
            >
              <div className="contact-col  ">
                <i className="fa fa-phone iconStyle" aria-hidden="true"></i>
                <p>
                  <a
                    href="tel:08029772666"
                    style={{
                      fontFamily: "Open Sans, sans-serif",
                      fontSize: "15px",
                      color: "black",
                    }}
                  >
                    080 29772666
                  </a>
                </p>
                <p>
                  {" "}
                  <a
                    href="tel:+919916633458"
                    style={{
                      fontFamily: "Open Sans, sans-serif",
                      fontSize: "15px",
                      color: "black",
                    }}
                  >
                    +91 99166 33458
                  </a>
                  <strong> / </strong>
                  <a
                    href="tel:+917411742565"
                    style={{
                      fontFamily: "Open Sans, sans-serif",
                      fontSize: "15px",
                      color: "black",
                    }}
                  >
                    {" "}
                    7411742565
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12  col-xs-12   col-md-12  col-lg-12  col-xl-12 "
            style={{
              marginBottom: "15px",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15551.929638874572!2d77.5126034!3d12.9729768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4c3a209539881a1b!2sDigital+Shark+Technology+Pvt+Ltd!5e0!3m2!1sen!2sin!4v1527938854418"
              width="100%"
              height="350"
              frameborder="0"
              style={{ border: "0" }}
              allowfullscreen=""
              title="myFrame"
            ></iframe>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

const Banner = (props) => {
  const [flag, setSwitch] = useState(false);

  const switchPressHandler = (e) => {
    if (e.target.id && e.target.id === "true") {
      setSwitch(true);
    }
    if (e.target.id && e.target.id === "false") {
      setSwitch(false);
    }
  };
  const { bnrText } = styles;
  return (
    <div>
      <section>
        <div className="ContainerContact ContactBannerImage">
          <img
            className="ContactBackgroundImage"
            src={background2}
            alt="background"
          ></img>
          <div className="ContactBannerDataPosition">
            <h2> Drop us a line</h2>

            <p
              className="subText"
              style={{
                display: "none",
                "@media screen and (max-width:901px)": {
                  display: "block",
                },
                bnrText,
              }}
            >
              Find out more about how we can help your organization navigate its
              next. Let us know your areas of interest so that we can serve you
              better.
            </p>
            <div
              style={{
                display: "none",
                "@media screen and (min-width:900px)": {
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "left",
                  fontSize: "initial",
                  fontFamily: "Lato",
                  color: "#2473a9",
                },
              }}
            >
              <Form
                switchBgColor={"#2473a9"}
                flag={flag}
                onClick={switchPressHandler}
              />
            </div>
            <div
              className="LearnMoreLink "
              onClick={(e) => {
                window.scrollTo({
                  top: 771,
                  behavior: "smooth",
                });
              }}
            >
              Learn More <i className="fa fa-arrow-down" aria-hidden="true"></i>
            </div>
          </div>
          <div className="ContactImagePosition banner-item-home-img">
            <img src={testimon} alt="team"></img>
          </div>
        </div>
      </section>

      <section>
        <div className="imageDisplayContact">
          <div className="arrowImagePositionContact">
            <img src={crossImage} alt="crossImage"></img>
          </div>
          <div className="dataPresentContact">
            <h2>Drop us a line</h2>
            <p>
              Find out more about how we can help your organization navigate its
              next. Let us know your areas of interest so that we can serve you
              better.
            </p>
          </div>
          <div className="BnrImageContact banner-item-home-img">
            <img src={BnrImage} alt="BnrImage"></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default radium(Contact);
let styles = {
  carouselPos: {
    "@media  (min-width:1400px)": {
      marginLeft: "0%",
      marginTop: "18%",
    },
    // Medium devices (tablets, 768px and up)
    "@media (min-width: 768px)": {
      marginLeft: "0%",
      marginTop: "18%",
    },
    // Large devices (desktops, 992px and up)
    "@media (min-width: 992px)": {
      marginLeft: "0%",
      marginTop: "18%",
    },
    "@media screen and (device-width: 854px) and (device-height: 480px) and (orientation: landscape)": {
      minHeight: "480px",
    },
    "@media screen and (device-width: 823px) and (device-height: 411px) and (orientation: landscape)": {
      minHeight: "500px",
    },
  },
  bnrHeading: {
    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      fontSize: "smaller",
    },
    // Small devices (landscape phones, 576px and up)
    "@media screen and (min-width: 481px) and (max-width: 767px)": {
      maxWidth: "66%",
      marginLeft: "-5%",
      marginTop: "12%",
    },
    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 768px) and (max-width:991px) ": {
      maxWidth: "66%",
      marginLeft: "-5%",
      marginTop: "12%",
    },
    // Large devices (desktops, 992px and up)
    "@media screen and (min-width: 992px) (max-width:1199px)": {
      maxWidth: "66%",
      marginLeft: "0%",
      marginTop: "0%",
    },
    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      maxWidth: "66%",
      marginLeft: "-5%",
      marginTop: "12%",
    },

    "@media screen and (width:320px)": { fontSize: "smaller" },
    "@media screen and (device-width: 640px) and (device-height: 360px) and (orientation: landscape)": {
      fontSize: "2rem",
    },
  },

  bnrText: {
    color: "black",
    fontWeight: "600",
    fontFamily: "Lato, MoolBoran",
    /*   maxWidth: "80%",
    marginLeft: "-5%", */
    "@media screen and (width:320px)": {
      marginLeft: "-9%",
      paddingRight: "0",
    },
    "@media screen and (min-width: 700px) and (max-width: 801px)": {
      fontSize: "1.4rem",
      marginLeft: "0%",
      maxWidth: "70%",
      lineHeight: "1.8",
    },
    "@media screen and (device-width: 640px) and (device-height: 360px) and (orientation: landscape)": {
      marginLeft: "-5px",
      fontSize: "1.4rem",
      // marginLeft: "0%",
      maxWidth: "70%",
      lineHeight: "1.8",
    },
    "@media screen and (device-width: 812px) and (device-height: 375px) and (orientation: landscape)": {
      display: "flex",
    },
    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      marginLeft: "-5%",
    },
    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 481px) and (max-width: 767px)": {
      fontSize: "1.3rem",
      marginLeft: "0%",
      maxWidth: "70%",
    },
    // Large devices (desktops, 992px and up)
    "@media screen and (min-width: 768px) and (max-width:991px) ": {
      fontSize: "1.4rem",
      marginLeft: "0%",
      maxWidth: "70%",
      lineHeight: "1.8",
    },

    "@media screen and (min-width: 992px) and (max-width:1199px) ": {},
    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      fontSize: "1.7rem",
      lineHeight: "1.8",
      marginLeft: "0%",
      maxWidth: "70%",
    },
  },
  pageTitle: { "@media screen and (max-width:500px)": { margin: "0" } },
  pageBreak: {
    marginTop: "-1%",
    "@media screen and (width:768px)": { marginTop: "-4%", height: "2vh" },
    "@media screen and (max-width:600px)": { marginTop: "3%", height: "1vh" },
    "@media screen and (max-width:500px)": { marginTop: "12%", height: "3vh" },
    "@media screen and (width:320px)": { marginTop: "4%", height: "2vh" },
  },
  pageHeading: {
    "@media screen and (max-width: 767px)": {
      display: "flex",
      flexDirection: "column",
      width: "101%",
      justifyContent: "center",
      // marginTop: "16%",
      marginBottom: "4%",
    },
    "@media screen and(min-width: 768px) and (max-width:789px)": {
      display: "flex",
      flexDirection: "column",
      width: "101%",
      justifyContent: "center",
      // marginTop: "16%",
      marginBottom: "4%",
    },
  },
  pageHeadingBody: {
    "@media (max-width: 575px)": {
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      background: "#0576be",
      textAlign: "center",
      textTransform: "uppercase",
      fontFamily: "Roboto, GothamBook, sans-serif",
      color: "white",
      paddingTop: "3%",

      paddingBottom: "3%",
      position: "relative",
    },
    "@media screen and (min-width: 576px) and (max-width:789px)": {
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      background: "#3c32b7",
      textAlign: "center",
      textTransform: "uppercase",
      fontFamily: "Roboto, GothamBook, sans-serif",
      color: "white",
      paddingTop: "3%",

      paddingBottom: "3%",
      position: "relative",
    },
  },

  pageHeadingTitle: {
    "@media screen and (max-width:789px)": {
      fontSize: "1.6rem",
      letterSpacing: "3px",
      lineHeight: "29px",
    },
  },
  pageHeadingSubTitle: {
    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      fontSize: "smaller",
      padding: "4px 5%",
      textAlign: "center",
    },
    // Medium devices (tablets, 768px and up)
    "@media (min-width: 768px)": {
      fontSize: "smaller",
      padding: "10px 12%",
      textAlign: "center",
    },
    // Large devices (desktops, 992px and up)
    "@media (min-width: 992px)": {
      fontSize: "large",
      padding: "10px 12%",
      textAlign: "center",
      maxWidth: "inherit",
    },
    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      fontSize: "large",
      padding: "1px 22%",
      textAlign: "center",
      maxWidth: "inherit",
    },
  },
};
