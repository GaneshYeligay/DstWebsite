import React, { Component } from "react";
import { Link } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import rigol from "../dist/img/tab-bar/RigolLogoBig.png";
import lpkf from "../dist/img/tab-bar/LPKF_Logo_RGB_Online_PB.jpg";
import ti from "../dist/img/tab-bar/Ti_logo.png";
import nvidia from "../dist/img/tab-bar/Nvidia.png";
import radium from "radium";
import "../dist/css/ihover.css";
import { Fade } from "react-reveal";

class OurPartners extends Component {
  render() {
    const { pageHeading, pageHeadingBody, pageHeadingTitle } = styles;
    return (
      <React.Fragment>
        <section className="EngSrv-technology-section">
          {/* <div className="custom-mt"> */}
          <div
            className="col-md-12"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
              alignItems: "center",
              flexDirection: "column",
              margin: "0",
              marginTop: "6%",
            }}
          >
            <div className="header-section" style={pageHeading}>
              <div className="page-title" style={pageHeadingBody}>
                <Fade bottom>
                  <h2 style={pageHeadingTitle}>
                    <span>They Trust Us</span>
                  </h2>
                </Fade>
              </div>{" "}
            </div>
          </div>
          <div className="dataTextStyle">
            <div className="colTextStyle" style={{ justifyContent: "center" }}>
              {/* <h3>
                <span>Simplify </span>Your Business With Customized Web
                Solutions
              </h3> */}
              <div className="divClassStyle">
                <p>
                  Digital Shark Technology works with companies, governments,
                  nonprofits and other organizations to address complex
                  challenges on a worldwide scale. Our partners contribute more
                  than money. Their ideas, volunteer power, in-kind support and
                  more are helping build stronger communities.
                </p>
              </div>
            </div>
          </div>
          {/* {ihover["mask1"]} */}
          <div className="row datarowStyle">
            {/* <div className="col-md-12"> */}
            <div class=" pt-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
              <div class="hovereffect">
                <div class="our-prtnr-img-holdr">
                  <img
                    class="img-responsive"
                    src={ti}
                    alt="ti"
                    style={{ border: "none" }}
                  />
                </div>
                <div class="overlay">
                  <h2>Embedded & IOT Kit</h2>
                  <Link class="info" to="/ti">
                    know more
                  </Link>
                </div>
              </div>
            </div>

            <div class="pt-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="hovereffect">
                <div class="our-prtnr-img-holdr">
                  <img
                    class="img-responsive"
                    style={{ border: "none" }}
                    src={rigol}
                    alt="rigol"
                  />
                </div>
                <div class="overlay">
                  <h2>Testing Measurement Equipment</h2>
                  <Link class="info" to="/rigol">
                    know more
                  </Link>
                </div>
              </div>
            </div>

            <div class="pt-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div class="hovereffect">
                <div class="our-prtnr-img-holdr">
                  <img
                    class="img-responsive"
                    src={lpkf}
                    alt="lpkf"
                    style={{ border: "none" }}
                  />
                </div>
                <div class="overlay">
                  <h2>PCB Prototyping Machines</h2>
                  <Link class="info" to="/lpkf">
                    know more
                  </Link>
                </div>
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
            {/* <div className="row datarowStyle"> */}
            {/* <div className="col-md-12"> */}
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 "></div>
            <div class="pt-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
              <div class="hovereffect">
                <div class="our-prtnr-img-holdr">
                  <img
                    class="img-responsive"
                    src={nvidia}
                    alt="nvidia"
                    style={{ border: "none" }}
                  />
                </div>
                <div class="overlay">
                  <h2>AI & DL</h2>
                  <Link class="info" to="/nvidia">
                    know more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>
      </React.Fragment>
    );
  }
}
export default radium(OurPartners);
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
    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      fontSize: "smaller",
    },
    // Small devices (landscape phones, 576px and up)
    "@media (min-width: 576px)": {
      maxWidth: "66%",
      marginLeft: "-5%",
      marginTop: "12%",
    },
    // Medium devices (tablets, 768px and up)
    "@media (min-width: 768px)": {
      maxWidth: "66%",
      marginLeft: "-5%",
      marginTop: "12%",
    },
    // Large devices (desktops, 992px and up)
    "@media (min-width: 992px)": {
      maxWidth: "66%",
      marginLeft: "0%",
      marginTop: "0%",
    },
    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      maxWidth: "70%",
      marginLeft: "-5%",
      marginTop: "12%",
    },

    "@media screen and (width:320px)": { fontSize: "smaller" },
  },

  bnrText: {
    color: "black",
    fontWeight: "500",
    fontFamily: "Lato, MoolBoran",
    /*   maxWidth: "80%",
    marginLeft: "-5%", */
    "@media screen and (width:320px)": {
      marginLeft: "-9%",
      paddingRight: "0",
      lineHeight: "14px",
    },

    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      marginLeft: "-5%",
    },
    // Medium devices (tablets, 768px and up)
    "@media (min-width: 768px)": {
      fontSize: "10px",
      marginLeft: "0%",
      maxWidth: "70%",
    },
    // Large devices (desktops, 992px and up)
    "@media (min-width: 992px)": {
      fontSize: "1em",
      marginLeft: "0%",
      maxWidth: "70%",
    },
    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      fontSize: "1.2em",

      marginLeft: "0%",
      maxWidth: "70%",
    },
  },
  pageTitle: { "@media screen and (max-width:500px)": { margin: "0" } },
  pageBreak: {
    marginTop: "2%",
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
    "@media screen and (max-width:789px)": {
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
  BnrImageStyle: {
    "@media (min-width: 1400px)": { minHeight: "788px" },
  },
};
