import React from "react";
// import SkillDevCards from "../common/skill-dev-cards";
// import { Fade } from "react-reveal";
import radium from "radium";
import crossImage from "../dist/img/afterCorrection/dataImage-mob.png";
import sdp from "../dist/img/afterCorrection/sdp-trs.jpg";
import { Link } from "react-router-dom";
import iotSecurity from "../dist/img/skill-dev/IoT-Security.jpg";
import QTQMl from "../dist/img/skill-dev/qt-qml-4.jpg";
import Embedded from "../dist/img/skill-dev/second-2.jpg";
import EmbeddedIOT from "../dist/img/skill-dev/embedded.jpg";
import rapid from "../dist/img/skill-dev/rapid-prototyping.jpg";

import ml from "../dist/img/ml-python.png";
import rtos from "../dist/img/skill-dev/rtos.jpg";
import handson from "../dist/img/skill-dev/iot-workshop.png";
import security_issues from "../dataset/security_issues.pdf";
import qtqml from "../dataset/qtqml.pdf";
import embIOt from "../dataset/Embedded_Iot.pdf";
import handsonPdf from "../dataset/handson.pdf";
import machineLearning from "../dataset/machine_learning_using_python.pdf";
import rapidpdf from "../dataset/rapid.pdf";
import rtospdf from "../dataset/rtos.pdf";
import background2 from "../dist/img/academic/background2.png";
import skill123 from "../dist/img/afterCorrection/skill123.png";
const SDP = () => {
  // let sdpBody = {
  //   height: "auto",
  //   backgroundColor: "#fff",
  //   marginTop: "5rem",
  //   marginBottom: "3rem"
  // };
  const {
    // bnrHeading,
    // bnrText,
    pageBreak,
    pageHeading,
    pageHeadingBody,
    pageHeadingTitle,
    // carouselPos,
    pageHeadingSubTitle,
  } = styles;
  return (
    <React.Fragment>
      <section>
        <div className="ImageDisplaySdp">
          <div className="arrowImagePositionSdp">
            <img src={crossImage} alt="crossImage"></img>
          </div>
          <div className="dataPresentSdp">
            <h2>Skill Development</h2>
            <p>
              A gap in skills and abilities reveal a golden opportunity, Skill
              does assure employment. We offer DST Skill development program for
              students to enlighten their skills for the industry standards and
              latest technology.
            </p>
          </div>
          <div className="skillDevelopmentImage banner-item-home-img">
            <img src={sdp} alt="Embedded" style={{ width: "86%" }}></img>
          </div>
        </div>
      </section>
      <section>
        <div className="ContainerSDP sdpBannerImage">
          <img
            className="SDPBackgroundImage"
            src={background2}
            alt="background"
          ></img>
          <div className="SDPBannerDataPosition">
            <h2>Skill Development </h2>

            <p>
              A gap in skills and abilities reveal a golden opportunity, Skill
              does assure employment. We offer DST Skill development program for
              students to enlighten their skills for the industry standards and
              latest technology.
            </p>
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
          <div className="SDPImagePosition banner-item-home-img">
            <img src={skill123} alt="team"></img>
          </div>
        </div>
      </section>

      <div className="pageBreak" style={pageBreak}></div>

      <section style={{ textAlign: "-webkit-center" }}>
        <div
          className="row"
          style={{
            width: "100%",
            justifyContent: "center",
            display: "inline-block",
          }}
        >
          <div className="header-section" style={pageHeading}>
            <div className="page-title" style={pageHeadingBody}>
              <h2 style={pageHeadingTitle}>
                <span>Achieving High Standards</span>
              </h2>
            </div>
            <p className="sub-title-text" style={pageHeadingSubTitle}>
              “A winner is someone who recognizes his God-given talents, works
              his tail off to develop them into skills, and uses these skills to
              accomplish his goals.”
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container SDPContainer" style={{ maxWidth: "100%" }}>
          {/* first row first column */}
          <div className="colPaddingSDP col-md-4 col-sm-12 col-xs-12">
            <div className="productCard">
              <div className="content">
                <div className="front">
                  <img src={iotSecurity} alt="iotSecurity"></img>
                  <div className="productCardDetail">
                    <h3>Security Issues & Challenges in Iot</h3>
                  </div>
                </div>
                <div className="back">
                  <h5>Digital Shark Technology, Banglore</h5>
                  <h3>SECURITY ISSUES & CHALLENGES IN IOT</h3>
                  <p>
                    <i
                      className="fa fa-arrow-right"
                      aria-hidden="true"
                      style={{ fontSize: "15px", paddingRight: "5px" }}
                    ></i>
                    Certificate of Completion from Digital Shark
                  </p>
                  <p>
                    {" "}
                    <i
                      className="fa fa-arrow-right"
                      aria-hidden="true"
                      style={{
                        fontSize: "15px",
                        paddingRight: "5px",
                        marginLeft: "-7px",
                      }}
                    ></i>
                    Specialized Custom Modules on Hardware Security
                  </p>
                  {/*  <h4>June 2019 Batch | 5 Days</h4> */}
                  <Link
                    to={security_issues}
                    className="productFlipBtn"
                    target="blank"
                  >
                    View More Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* first row second column */}

          <div className="colPaddingSDP col-md-4 col-sm-12 col-xs-12">
            <div className="productCard">
              <div className="content">
                <div className="front">
                  <img src={QTQMl} alt="iotSecurity"></img>
                  <div className="productCardDetail2">
                    <h3>QT/QML on Embedded Linux Using Beagle Bone</h3>
                  </div>
                </div>
                <div className="back">
                  <h5>Digital Shark Technology, Banglore</h5>
                  <h3>QT/QML on Embedded Linux Using Beagle Bone</h3>
                  <p>
                    <i
                      className="fa fa-arrow-right"
                      aria-hidden="true"
                      style={{ fontSize: "15px", paddingRight: "5px" }}
                    ></i>
                    Certificate of Completion from MeitY & EICT
                  </p>
                  <p>
                    {" "}
                    <i
                      className="fa fa-arrow-right"
                      aria-hidden="true"
                      style={{
                        fontSize: "15px",
                        paddingRight: "5px",
                        marginLeft: "-28px",
                      }}
                    ></i>
                    Specialized Customized Modules on QT
                  </p>
                  {/*   <h4>May 27th – 31th 2019 Batch | 10 days</h4> */}
                  <Link to={qtqml} className="productFlipBtn" target="blank">
                    View More Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* first row third column */}
          <div className="colPaddingSDP  col-md-4 col-sm-12 col-xs-12">
            <div className="productCard">
              <div className="content">
                <div className="front">
                  <img src={Embedded} alt="embedded"></img>
                  <div className="productCardDetail2">
                    <h3>Embedded & IOT Applications Using TI Tools</h3>
                  </div>
                </div>
                <div className="back">
                  <h5 style={{ paddingRight: "4px", paddingLeft: "4px" }}>
                    RAVINDRA COLLEGE OF ENGG FOR WOMEN, KURNOOL, A.P.
                  </h5>
                  <h3>Embedded & IOT Applications Using TI Tools</h3>
                  <p>
                    <i
                      className="fa fa-arrow-right"
                      aria-hidden="true"
                      style={{ fontSize: "15px", paddingRight: "5px" }}
                    ></i>
                    Certificate of Completion from Digital Shark
                  </p>
                  <p>
                    {" "}
                    <i
                      className="fa fa-arrow-right"
                      aria-hidden="true"
                      style={{
                        fontSize: "15px",
                        paddingRight: "5px",
                        marginLeft: "-4px",
                      }}
                    ></i>
                    Specialized Custom Modules for Innovative Projects
                  </p>
                  {/*  <h4>May 17th & 18th 2019 Batch | 2 Days</h4> */}
                  <Link to={embIOt} className="productFlipBtn" target="blank">
                    View More Details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* second row first column */}

          <div className="colPaddingSDP col-md-4 col-sm-12 col-xs-12">
            <div className="productCard">
              <div className="content">
                <div className="front">
                  <img src={EmbeddedIOT} alt="EmbeddedIOT"></img>
                  <div className="productCardDetail">
                    <h3>Iot & Embedded System Design</h3>
                  </div>
                </div>
                <div className="back">
                  <h5 style={{ paddingRight: "4px", paddingLeft: "4px" }}>
                    IIIT BHAGALPUR,
                  </h5>
                  <h3>Iot & Embedded System Design</h3>
                  <p>
                    <i
                      className="fa fa-arrow-right"
                      aria-hidden="true"
                      style={{ fontSize: "15px", paddingRight: "5px" }}
                    ></i>
                    Certificate of Completion from MeitY& EICT
                  </p>
                  <p>
                    {" "}
                    <i
                      className="fa fa-arrow-right"
                      aria-hidden="true"
                      style={{
                        fontSize: "15px",
                        paddingRight: "5px",
                        marginLeft: "0px",
                      }}
                    ></i>
                    Specialized Custom Modules of TI Products
                  </p>
                  {/* <h4>May 27th – 31th 2019 Batch | 5 days</h4> */}
                  <Link to="/sdp" className="productFlipBtn">
                    View More Details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* second row second column */}
          <div className="colPaddingSDP col-md-4 col-sm-12 col-xs-12">
            <div className="productCard">
              <div className="content">
                <div className="front">
                  <img src={ml} alt="ml"></img>
                  <div className="productCardDetail">
                    <h3>Machine Learning Using Python</h3>
                  </div>
                </div>
                <div className="back">
                  <h5 style={{ paddingRight: "4px", paddingLeft: "4px" }}>
                    DIGITAL SHARK TECHNOLOGY, Banglore
                  </h5>
                  <h3>Machine Learning Using Python</h3>
                  <p>
                    <i
                      className="fa fa-arrow-right"
                      aria-hidden="true"
                      style={{ fontSize: "15px", paddingRight: "5px" }}
                    ></i>
                    Certificate of Completion from MeitY & EICT
                  </p>
                  <p>
                    {" "}
                    <i
                      className="fa fa-arrow-right"
                      aria-hidden="true"
                      style={{
                        fontSize: "15px",
                        paddingRight: "5px",
                        marginLeft: "0px",
                      }}
                    ></i>
                    Specialized Custom Modules on Python for Data Analytics &
                    Statistics
                  </p>
                  {/*      <h4>June 2019 Batch | 10 Days</h4> */}
                  <Link
                    to={machineLearning}
                    className="productFlipBtn"
                    target="blank"
                  >
                    View More Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* second row third column */}

          <div className="colPaddingSDP col-md-4 col-sm-12 col-xs-12">
            <div className="productCard">
              <div className="content">
                <div className="front">
                  <img src={rapid} alt="rapid"></img>
                  <div className="productCardDetail2">
                    <h3>Rapid Prototyping of Iot And Applications</h3>
                  </div>
                </div>
                <div className="back">
                  <h5 style={{ paddingRight: "4px", paddingLeft: "4px" }}>
                    DIGITAL SHARK TECHNOLOGY, Banglore
                  </h5>
                  <h3>Rapid Prototyping of Iot And Applications</h3>
                  <p>
                    <i
                      className="fa fa-arrow-right"
                      aria-hidden="true"
                      style={{ fontSize: "15px", paddingRight: "5px" }}
                    ></i>
                    Certificate of Completion from MeitY & EICT
                  </p>
                  <p>
                    {" "}
                    <i
                      className="fa fa-arrow-right"
                      aria-hidden="true"
                      style={{
                        fontSize: "15px",
                        paddingRight: "5px",
                        marginLeft: "0px",
                      }}
                    ></i>
                    Specialized Modules on Instant Prototyping of Innovative
                    Ideas
                  </p>
                  {/*  <h4>May 27th – 31th 2019 Batch | 10 days</h4> */}
                  <Link to={rapidpdf} className="productFlipBtn" target="blank">
                    View More Details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* third row first columnn */}

          <div className="colPaddingSDP col-md-4 col-sm-12 col-xs-12">
            <div className="productCard">
              <div className="content">
                <div className="front">
                  <img src={rtos} alt="rtos"></img>
                  <div className="productCardDetail">
                    <h3>Embedded RTOS</h3>
                  </div>
                </div>
                <div className="back">
                  <h5 style={{ paddingRight: "4px", paddingLeft: "4px" }}>
                    DIGITAL SHARK TECHNOLOGY, Banglore
                  </h5>
                  <h3>EMBEDDED RTOS</h3>
                  <p>
                    <i
                      className="fa fa-arrow-right"
                      aria-hidden="true"
                      style={{ fontSize: "15px", paddingRight: "5px" }}
                    ></i>
                    Certificate of Completion from MeitY & EICT
                  </p>
                  <p>
                    {" "}
                    <i
                      className="fa fa-arrow-right"
                      aria-hidden="true"
                      style={{
                        fontSize: "15px",
                        paddingRight: "5px",
                        marginLeft: "-89px",
                      }}
                    ></i>
                    Specialized Modules on RTOS
                  </p>
                  {/*  <h4>June 2019 Batch | 5 days</h4> */}
                  <Link to={rtospdf} className="productFlipBtn" target="blank">
                    View More Details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* third row second column */}

          <div className="colPaddingSDP col-md-4 col-sm-12 col-xs-12">
            <div className="productCard">
              <div className="content">
                <div className="front">
                  <img src={handson} alt="handson"></img>
                  <div className="productCardDetail2" style={{ height: "28%" }}>
                    <h3>
                      Hands on Workhop on IoT and Embedded System Design using
                      MSP430
                    </h3>
                  </div>
                </div>
                <div className="back">
                  <h5 style={{ paddingRight: "4px", paddingLeft: "4px" }}>
                    DIGITAL SHARK TECHNOLOGY, Banglore
                  </h5>
                  <h3>
                    HANDS ON WORKSHOP ON IOT AND EMBEDDED SYSTEM DESIGN USING
                    MSP430
                  </h3>
                  <p>
                    <i
                      className="fa fa-arrow-right"
                      aria-hidden="true"
                      style={{ fontSize: "15px", paddingRight: "5px" }}
                    ></i>
                    Certificate of Completion from MeitY & EICT
                  </p>
                  <p>
                    {" "}
                    <i
                      className="fa fa-arrow-right"
                      aria-hidden="true"
                      style={{
                        fontSize: "15px",
                        paddingRight: "5px",
                        marginLeft: "-102px",
                      }}
                    ></i>
                    Specialized Modules on IoT
                  </p>
                  {/* <h4>June 2019 Batch | 5 days</h4> */}
                  <Link
                    to={handsonPdf}
                    className="productFlipBtn"
                    target="blank"
                  >
                    View More Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default radium(SDP);
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
  },
  bnrHeading: {
    color: "black",
    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      fontSize: "smaller",
    },
    // Small devices (landscape phones, 576px and up)
    "@media screen and (min-width: 481px) and (max-width:767px)": {
      maxWidth: "70%",
      marginLeft: "-5%",
      marginTop: "12%",
      fontSize: "2.7rem",
    },
    "@media only screen and (width: 640px) and (height: 360px)": {
      marginTop: "-19%",
    },
    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 768px) and (max-width: 991px)": {
      maxWidth: "66%",
      marginLeft: "-5%",
      marginTop: "12%",
    },
    // Large devices (desktops, 992px and up)
    "@media screen and (min-width: 992px) and (max-width: 1199px)": {
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
    "@media screen and (device-width: 640px) and (device-height: 384px) and (orientation: landscape)": {
      marginLeft: "-4%",
      marginTop: "6%",
    },
    "@media screen and (device-width: 823px) and (device-height: 411px) and (orientation: landscape)": {
      marginLeft: "-4%",
      marginTop: "48%",
    },
    "@media screen and (device-width: 667px) and (device-height: 375px) and (orientation: landscape)": {
      marginLeft: "-4%",
      marginTop: "5%",
    },
    "@media screen and (device-width: 812px) and (device-height: 375px) and (orientation: landscape)": {
      marginLeft: "-4%",
      marginTop: "38%",
    },
  },

  bnrText: {
    color: "black",
    fontWeight: "600",
    fontFamily: "Lato, MoolBoran",
    textAlign: "justify",
    /*   maxWidth: "80%",
    marginLeft: "-5%", */
    "@media screen and (width:320px)": {
      marginLeft: "-9%",
      paddingRight: "0",
    },

    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      marginLeft: "-5%",
    },

    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 481px ) and (max-width: 767px)": {
      fontSize: "1.3rem",
      marginLeft: "-10px",
    },
    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 768px) and (max-width: 991px)": {
      fontSize: "1.4rem",
      marginLeft: "-4%",
      maxWidth: "84%",
      lineHeight: "1.8",
    },
    // Large devices (desktops, 992px and up)
    "@media screen and (min-width: 992px) and (max-width: 1199px)": {
      fontSize: "1.5rem",
      marginLeft: "0%",
      maxWidth: "95%",
      letterSpacing: "0.05rem",
      lineHeight: "1.8",
    },
    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      fontSize: "1.7rem",
      fontWeight: "600",
      marginLeft: "-5%",
      maxWidth: "77%",
      letterSpacing: "0.05rem",
      lineHeight: "1.8",
    },
    "@media screen and (device-width: 812px) and (device-height: 375px) and (orientation: landscape)": {
      maxWidth: "85%",
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
    "@media screen and (max-width:789px)": {
      display: "flex",
      flexDirection: "column",
      width: "93%",
      justifyContent: "center",
    },
  },
  pageHeadingBody: {
    "@media  (max-width:575px)": {
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
    marginTop: "1%",
    lineHeight: "1.6",
    fontFamily: "Roboto",
    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      fontSize: "14px",
      padding: "4px 5%",
      textAlign: "center",
    },
    "@media screen and (min-width: 481px) and (max-width: 767px)": {
      fontSize: "15px",
      padding: "10px 12%",
      textAlign: "center",
    },
    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 768px) and (max-width: 991px)": {
      fontSize: "15px",
      padding: "10px 12%",
      textAlign: "center",
    },
    // Large devices (desktops, 992px and up)
    "@media screen and (min-width: 992px) and (max-width: 1199px)": {
      fontSize: "16px",
      padding: "10px 12%",
      textAlign: "center",
      maxWidth: "inherit",
    },
    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      fontSize: "16px",
      padding: "1px 22%",
      textAlign: "center",
      maxWidth: "inherit",
    },
  },
};
