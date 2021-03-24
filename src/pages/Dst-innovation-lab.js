import React from "react";
import radium from "radium";
import "./Technical-finishing-school.css";

import crossImage from "../dist/img/afterCorrection/dataImage-mob.png";
import innovation from "../dist/img/afterCorrection/innov-trs.jpg";

import check1 from "../dist/img/background_images/check5.jpg";
import check6 from "../dist/img/background_images/check9.jpg";
import check7 from "../dist/img/background_images/check10.jpg";
import pdf from "../dataset/Dronelabpdf.pdf";
import dsp from "../dataset/dsp.pdf";

import RoboticLab from "../dist/img/academic/robotic_lab.jpg";
import Ebm_IOT from "../dist/img/academic/iot_lab.jpg";
import AI_lab from "../dist/img/academic/ai_ml_lab.png";
import DSPLab from "../dist/img/academic/ai2.png";
import PowerLab from "../dist/img/academic/power_lab.jpg";
import DroneLab from "../dist/img/academic/drone_lab.jpg";
import { Link } from "react-router-dom";
import background2 from "../dist/img/academic/background2.png";
import innovate from "../dist/img/afterCorrection/innovate.png";
const DstInnovationLab = () => {
  const { pageBreak, pageHeading, pageHeadingBody, pageHeadingTitle } = styles;
  return (
    <React.Fragment>
      <section>
        <section>
          <div className="ContainerInnovation DstBannerImage">
            <img
              className="InnovationBackgroundImage"
              src={background2}
              alt="background"
            ></img>
            <div className="InnovationBannerDataPosition">
              <h2>DST Innovation Lab </h2>

              <p>
                Creativity is intelligence having fun, Innovation distinguishes
                between a leader and a follower. All you need is an innovative
                setup which we will provide. We offer the full-fledged lab setup
                having industry grade standard equipment and kits.
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
                Learn More{" "}
                <i className="fa fa-arrow-down" aria-hidden="true"></i>
              </div>
            </div>
            <div className="InnovationImagePosition banner-item-home-img">
              <img src={innovate} alt="team"></img>
            </div>
          </div>
        </section>
      </section>
      <section>
        <div className="imageDisplayDStInno">
          <div className="arrowImagePositionDstInno">
            <img src={crossImage} alt="crossImage"></img>
          </div>
          <div className="dataPresentDstInno">
            <h2> DST Innovation Lab </h2>
            <p>
              Creativity is intelligence having fun, Innovation distinguishes
              between a leader and a follower. All you need is an innovative
              setup which we will provide. We offer the full-fledged lab setup
              having industry grade standard equipment and kits.
            </p>
          </div>
          <div className="dstInnovationLabImage banner-item-home-img">
            <img src={innovation} alt="Embedded" style={{ width: "86%" }}></img>
          </div>
        </div>
      </section>
      <div className="pageBreak" style={pageBreak}></div>
      <section style={{ textAlign: "-webkit-center" }}>
        <div
          className="row"
          style={{ width: "100%", justifyContent: "center" }}
        >
          <div className="header-section" style={pageHeading}>
            <div className="page-title" style={pageHeadingBody}>
              <h2 style={pageHeadingTitle}>
                <span>Leading Through Innovation</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="sectionOfDSTInnovation">
        <div id="slideshow">
          <div>
            <img src={check1} alt="" />
          </div>
          <div>
            <img
              src={check6}
              alt=""
              style={{
                background: "linear - gradient(to left, #333, #eee 75%)",
              }}
            />
          </div>
          <div>
            <img src={check7} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="academicCardSection">
          <div className="rowSpacebw">
            <div className="col-md-4 col-sm-12 col-xs-12 col-lg-4">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={RoboticLab} alt="Avatar" />
                    <span className="cardImageText">Robotics Lab</span>
                  </div>
                  <div className="flip-card-back">
                    <h1>Robotics Lab</h1>
                    <p>
                      Our Robotics Lab is dedicated both to research and
                      education. As result we are responsible for the academic
                      development of robotics expertise for undergraduates.
                    </p>
                    <Link to="/Rslk" className="innvationImageBtn">
                      View More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 col-lg-4">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={Ebm_IOT} alt="Avatar" />
                    <span className="cardImageText">Embedded & IOT Labs</span>
                  </div>
                  <div className="flip-card-back">
                    <h1>Embedded & IOT Lab</h1>
                    <p>
                      IoT permits direct relation between the physical world and
                      PC based frameworks, associating individuals, procedures
                      and gadgets. If you are looking to help your students to
                      develop skills on IOT domain then we at DST help to
                      support you in this.
                    </p>
                    <Link to="/Ti" className="innvationImageBtn">
                      View More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 col-lg-4">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={AI_lab} alt="Avatar" />
                    <span className="cardImageText">AI and ML Lab</span>
                  </div>
                  <div className="flip-card-back">
                    <h1>AI & ML lab</h1>
                    <p>
                      At AI Labs we use applied research to achieve competitive
                      advantage. We partner with Universities and Enterprise
                      Analytics Labs to collaborate in areas of applied
                      research. 
                    </p>
                    <Link to="/Nvidia_ml_labs" className="innvationImageBtn">
                      View More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12 col-xs-12 col-lg-4">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src={DSPLab} alt="Avatar" />
                    <span className="cardImageText">DSP Lab</span>
                  </div>
                  <div class="flip-card-back">
                    <h1>DSP LAb</h1>
                    <p>
                      Digital Signal Processing (DSP) applications are becoming
                      more prevalent in everyday use. Because of this widespread
                      usage and advances in computer technology, the DSP
                      algorithms themselves are being subjected to more
                      demanding specifications. There is a constant need for
                      designing systems with lower power, higher speed and less
                      space
                    </p>
                    <a href={dsp} className="innvationImageBtn" target="blank">
                      View More Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 col-lg-4">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src={PowerLab} alt="Avatar" />
                    <span className="cardImageText">Power Management Lab</span>
                  </div>
                  <div class="flip-card-back">
                    <h1>Power Management Lab</h1>
                    <p>
                      The TI-PMLK is the first collection of power management
                      curriculum, coursework and labs for education. It is
                      intended to educate students on electronic theory and TI
                      power supply design.
                    </p>
                    <Link to="/Pmlk_Pro" className="innvationImageBtn">
                      View More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 col-lg-4">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src={DroneLab} alt="Avatar" />
                    <span className="cardImageText">Drone Lab</span>
                  </div>
                  <div class="flip-card-back">
                    <h1>Drone Lab</h1>
                    <p>
                      {" "}
                      Drones are becoming increasingly important professional as
                      well as scientific tools. In order to stay competitive in
                      such a fast-paced environment and to lead cutting-edge
                      research, a drone-lab is necessary.
                    </p>
                    <a href={pdf} className="innvationImageBtn" target="blank">
                      View More Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default radium(DstInnovationLab);

let styles = {
  carouselPos: {
    "@media  (min-width:1400px)": {
      marginLeft: "0%",
      marginTop: "18%",
    },
    // Medium devices (tablets, 768px and up)
    "@media (min-width: 768px)": {
      marginLeft: "0%",
      marginTop: "20%",
    },
    "@media (min-width: 800px)": {
      marginLeft: "0%",
      marginTop: "31%",
    },
    // Large devices (desktops, 992px and up)
    "@media (min-width: 992px)": {
      marginLeft: "0%",
      marginTop: "18%",
    },
    "@media screen and (device-width: 640px) and (device-height: 360px) and (orientation: landscape)": {
      minHeight: "200px",
    },
    "@media screen and (device-width: 823px) and (device-height: 411px) and (orientation: landscape)": {
      minHeight: "500px",
    },
    "@media screen and (device-width: 812px) and (device-height: 375px) and (orientation: landscape)": {
      minHeight: "100px",
    },
  },
  bnrHeading: {
    color: "black",
    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      fontSize: "smaller",
    },
    /*  "@media only screen and (min-device-width : 640px) and (max-device-width : 640px) and (orientation : landscape)":{
      fontSize: "2rem",
      marginLeft: "0%",
      
    }, */

    // Small devices (landscape phones, 576px and up)
    "@media screen and (min-width: 481px) and (max-width: 767px)": {
      maxWidth: "66%",
      marginLeft: "-5%",
      marginTop: "-2%",
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
    /* "@media screen and (device-width: 640px) and (device-height: 360px) and (orientation: landscape)":{
      marginTop: "20%"
    }, */
    /*  "@media screen and (device-width: 640px) and (device-height: 360px) and (orientation: landscape)":{
      marginTop: "20%"
    }, */
    "@media screen and (device-width: 812px) and (device-height: 375px) and (orientation: landscape)": {
      marginTop: "5%",
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
    "@media screen and (min-width: 481px) and (max-width: 767px)": {
      fontSize: "1.3rem",
      lineHeight: "1.6",
      maxWidth: "88%",
    },
    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 768px) and (max-width: 991px)": {
      fontSize: "1.4rem",
      marginLeft: "-5%",
      maxWidth: "88%",
      lineHeight: "1.8",
    },
    // Large devices (desktops, 992px and up)
    "@media screen and (min-width: 992px) and (max-width: 1199px)": {
      fontSize: "1.5rem",
      marginLeft: "0%",
      maxWidth: "93%",
      letterSpacing: "0.05rem",
      lineHeight: "1.8",
    },

    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      fontSize: "1.7rem",
      fontWeight: "600",
      marginLeft: "-4%",
      maxWidth: "77%",
      letterSpacing: "0.05rem",
      lineHeight: "1.8",
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
    "@media screen and (min-width: 1200px)": {
      marginTop: "0%",
    },
    "@media screen and (min-width: 1400px)": {
      marginTop: "0%",
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
    "@media screen and (min-width:576px)": {
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      background: "#3c32b7",
      textAlign: "center",
      textTransform: "uppercase",
      fontFamily: "Roboto, GothamBook, sans-serif",
      color: "white",
      paddingTop: "3%",
      marginBottom: "0",
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
      fontSize: "1.4rem",
      padding: "4px 5%",
      textAlign: "center",
      marginTop: "1%",
      lineHeight: "1.6",
    },
    "@media screen and (min-width: 481px) and (max-width: 767px)": {
      textAlign: "center",
      marginTop: "1%",
      lineHeight: "1.6",
    },
    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 768px) and (max-width: 991px)": {
      fontSize: "1.5rem",
      padding: "10px 12%",
      textAlign: "center",
      marginTop: "1%",
      lineHeight: "1.6",
    },
    // Large devices (desktops, 992px and up)
    "@media screen and (min-width: 992px) and (max-width: 1199px)": {
      fontSize: "1.5rem",
      padding: "10px 12%",
      textAlign: "center",
      maxWidth: "inherit",
      marginTop: "1%",
      lineHeight: "1.6",
    },
    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      fontSize: "1.6rem",
      padding: "1px 22%",
      textAlign: "center",
      maxWidth: "inherit",
      lineHeight: "1.6",
    },
  },
};
