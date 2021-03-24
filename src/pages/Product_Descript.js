import React, { Component } from "react";
import radium from "radium";
import background from "../dist/img/academic/background2.png";
import iray from "../dist/img/Product-parterns/iray2.png";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import crossImage from "../dist/img/afterCorrection/dataImage-mob.png";
// import { Link } from "react-router-dom";
import manufacture from "../dist/img/Product-parterns/industry.jpg";
import automotive from "../dist/img/Product-parterns/automotive.jpg";
import healthcare from "../dist/img/Product-parterns/healthCare.jpg";
import smartCity from "../dist/img/Product-parterns/smart.jpg";
import Irayinte from "../dist/img/Product-parterns/IrayInte.png";
import IrayImage from "../dist/img/Product-parterns/IrayImage.png";
import IrayExp from "../dist/img/Product-parterns/IrayExp.png";
import IrayFront from "../dist/img/Product-parterns/IrayFront.png";
import IrayTop from "../dist/img/Product-parterns/IrayTop.png";
import IrayReady from "../dist/img/Product-parterns/IrayReady.png";
import MIndustry from "../dist/img/Product-parterns/ManuIndustry.png";
import irayPdf from "../dataset/IRAY.pdf";
class Product_Descript extends Component {
  render() {
    const { pageHeading, pageHeadingBody, pageHeadingTitle } = styles;
    return (
      <React.Fragment>
        <section>
          <div className="ImageProduct">
            <div className="arrowImageProduct">
              <img src={crossImage} alt="cross"></img>
            </div>
            <div className="dataProduct">
              <h2>I-RAY</h2>
              <p>
                We introduces an Industrial IoT device RAY - I, which can sheild
                industrial systems from down-time by detecting the earliest
                signs of malfunction and preventing their aggravation. RAY-I
                being connected to the machines via Standard Interfaces or IoT
                sensors into industrial systems, allows operators to know what's
                going on with the equipment in near real-time, and with high
                accuracy.
              </p>
            </div>
            <div className="LearnMoreLink ">
              {/* <Link to={irayPdf} target="_blank">
                Click here for more details
              </Link> */}
                <a href = {irayPdf} target = "_blank" rel="noopener noreferrer"> Click here for more details</a>
              <i
                className="fa fa-arrow-right"
                aria-hidden="true"
                style={{ color: "blue" }}
              ></i>
            </div>
            <div className="productImage banner-item-home-img">
              <img
                src={iray}
                alt="iray"
                style={{ width: "83%", marginLeft: "9%", marginTop: "-6%" }}
              ></img>
            </div>
          </div>
        </section>

        <section>
          <div className="ContainerProduct productSmallScreen">
            <img
              className="ProductBackgroundImage"
              src={background}
              alt="background"
            ></img>
            <div className="ProductBannerDataPosition">
              <h2>I-ray</h2>
              <p>
                Digital Shark Technology introduces an Industrial IoT device
                I-RAY , which can sheild industrial systems from down-time by
                detecting the earliest signs of malfunction and preventing their
                aggravation. I-RAY being connected to the machines via Standard
                Interfaces or IoT sensors into industrial systems, allows
                stakeholders to know what's going on with the equipment in near
                real-time, and with high accuracy.
              </p>
              <div className="LearnMoreLinkPDF " /* style={{float: "left"}} */>
                {/* <Link to={irayPdf} target="_blank">
                  Click here for more details
                </Link> */}
                 <a href = {irayPdf} target = "_blank" rel="noopener noreferrer"> Click here for more details</a>
                <i
                  className="fa fa-arrow-right"
                  aria-hidden="true"
                  style={{ color: "blue" }}
                ></i>
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
                Learn More{" "}
                <i className="fa fa-arrow-down" aria-hidden="true"></i>
              </div>
            </div>
            <div className="ProductImagePosition banner-item-home-img">
              <img src={iray} alt="iray"></img>
            </div>
          </div>
        </section>

        <section>
          <div
            className="teamDataPosition"
            style={{
              width: "80%",
              justifyContent: "center",
              margin: "0px 10%",
            }}
          >
            <div className="header-section" style={pageHeading}>
              <div className="page-title" style={pageHeadingBody}>
                <h2 style={pageHeadingTitle}>
                  <span>I-RAY</span>
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="containerFAQ">
            <div className="divisionHeader"></div>

            <div className="targetedInd">
              <ExpansionPanel defaultExpanded={true}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel4a-header"
                >
                  <Typography className="typographyHeader">
                    Targeted Industries
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    - Manufacturing Industries
                    <br />
                    - Automotive
                    <br />
                    - Health Care
                    <br />
                    - Smart City
                    <br />
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="typographyHeader">
                  Triggers Critical Alerts
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  - Text & Email Alerts <br />
                  - Optimized Maintanance process
                  <br />
                  - Automated ticket allocation. <br />- Quick actions can be
                  taken to get the machines Up and Running
                  <br />- Customize the timing of alerts based on your
                  preference
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </section>

        <section>
          <div className="container SDPContainer1">
            {/* first row first column */}
            <div div className="row rowSize">
              <div className="colPaddingSDP col-md-6 col-sm-12 col-xs-12">
                <div className="productCard">
                  <div className="content">
                    <div className="front">
                      <img src={manufacture} alt="iotSecurity"></img>
                      <div className="productCardDesc1">
                        <h3>Manufacturing Industries</h3>
                      </div>
                    </div>
                    <div className="back">
                      <h5>Targeted Inustries</h5>
                      <h3
                        style={{
                          marginTop: "10%",
                          padding: "0 20px",
                          marginBottom: "10%",
                        }}
                      >
                        Manufacturing Industries
                      </h3>
                      <p>
                        <i
                          className="fa fa-arrow-right"
                          aria-hidden="true"
                          style={{ fontSize: "15px", paddingRight: "5px" }}
                        ></i>
                        Iot Enabled Monitoring & Predictive Maintenance
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="colPaddingSDP col-md-6 col-sm-12 col-xs-12">
                <div className="productCard">
                  <div className="content">
                    <div className="front">
                      <img src={automotive} alt="iotSecurity"></img>
                      <div className="productCardDesc1">
                        <h3>Automotive</h3>
                      </div>
                    </div>
                    <div className="back">
                      <h5>Targeted Inustries</h5>
                      <h3
                        style={{
                          marginTop: "10%",
                          padding: "0 20px",
                          marginBottom: "10%",
                        }}
                      >
                        Automotive
                      </h3>
                      <p>
                        <i
                          className="fa fa-arrow-right"
                          aria-hidden="true"
                          style={{ fontSize: "15px", paddingRight: "5px" }}
                        ></i>
                        HMI design Automotive Electronics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row rowSize">
              <div className="colPaddingSDP  col-md-6 col-sm-12 col-xs-12">
                <div className="productCard">
                  <div className="content">
                    <div className="front">
                      <img src={healthcare} alt="embedded"></img>
                      <div className="productCardDesc1">
                        <h3>Health Care</h3>
                      </div>
                    </div>
                    <div className="back">
                      <h5>Targeted Inustries</h5>
                      <h3
                        style={{
                          marginTop: "10%",
                          padding: "0 20px",
                          marginBottom: "10%",
                        }}
                      >
                        Health Care
                      </h3>
                      <p>
                        <i
                          className="fa fa-arrow-right"
                          aria-hidden="true"
                          style={{ fontSize: "15px", paddingRight: "5px" }}
                        ></i>
                        Medical Device Design & Development HealthCare IT
                        Solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="colPaddingSDP col-md-6 col-sm-12 col-xs-12">
                <div className="productCard">
                  <div className="content">
                    <div className="front">
                      <img src={smartCity} alt="EmbeddedIOT"></img>
                      <div className="productCardDesc1">
                        <h3>Smart City</h3>
                      </div>
                    </div>
                    <div className="back">
                      <h5>Targeted Inustries</h5>
                      <h3
                        style={{
                          marginTop: "10%",
                          padding: "0 20px",
                          marginBottom: "10%",
                        }}
                      >
                        Smart City
                      </h3>
                      <p>
                        <i
                          className="fa fa-arrow-right"
                          aria-hidden="true"
                          style={{ fontSize: "15px", paddingRight: "5px" }}
                        ></i>
                        Smart Control Room
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div
            className="teamDataPosition"
            style={{
              width: "80%",
              justifyContent: "center",
              margin: "0px 10%",
            }}
          >
            <div className="header-section" style={pageHeading}>
              <div className="page-title" style={pageHeadingBody}>
                <h2 style={pageHeadingTitle}>
                  <span>Manufacturing Industry Challenges</span>
                </h2>
              </div>
            </div>
          </div>
        </section>

        <div className="ManuIndImage">
          <img className="newManuIndImage" alt="" src={MIndustry} />
        </div>
        <section>
          <div
            className="teamDataPosition"
            style={{
              width: "80%",
              justifyContent: "center",
              margin: "0px 10%",
            }}
          >
            <div className="header-section" style={pageHeading}>
              <div className="page-title" style={pageHeadingBody}>
                <h2 style={pageHeadingTitle}>
                  <span>I Ray Integration</span>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <div className="IrayImage">
          <img className="newIrayImage" alt="" src={Irayinte} />
        </div>
        <br />

        <section>
          <div className="containerFAQ">
            <div className="divisionHeader"></div>

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="typographyHeader">
                  I Ray Integration
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  &#8594; I-Ray is a Plug-In Device to Production Machines
                  <br />
                  &#8594; Data is Acquired through Sensors and Gateways
                  <br />
                  &#8594; Uploaded to cloud databases
                  <br />
                  &#8594; Monitor from the remote location
                  <br />
                  &#8594; Take Timely necessary actions
                  <br />
                  &#8594; Perform Predictive Analysis
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </section>
        <br />
        <section>
          <div
            className="teamDataPosition"
            style={{
              width: "80%",
              justifyContent: "center",
              margin: "0px 10%",
            }}
          >
            <div className="header-section" style={pageHeading}>
              <div className="page-title" style={pageHeadingBody}>
                <h2 style={pageHeadingTitle}>
                  <span>Supported Interfaces</span>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="containerFAQ">
            <div className="divisionHeader"></div>

            <ExpansionPanel defaultExpanded={true}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="typographyHeader">
                  Supported Interfaces
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <div className="typo">
                    <div className="col-md-6" style={{ width: "100%" }}>
                      &#8680; Modbus
                      <br />
                      &#8680; Profibus
                      <br />
                      &#8680; OPC
                      <br />
                      &#8680; 12 Channel Analog
                      <br />
                      &#8680; 12 Channel Digital
                      <br />
                      &#8680; CAN bus
                    </div>
                    <div className="col-md-6" style={{ width: "100%" }}>
                      &#8680; RS 485
                      <br />
                      &#8680; RS 232
                      <br />
                      &#8680; Ethernet
                      <br />
                      &#8680; WiFi
                      <br />
                      &#8680; Bluetooth(BLE 4.0)
                      <br />
                      &#8680; USB
                    </div>
                  </div>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </section>
        <br />
        <section>
          <div
            className="teamDataPosition"
            style={{
              width: "80%",
              justifyContent: "center",
              margin: "0px 10%",
            }}
          >
            <div className="header-section" style={pageHeading}>
              <div className="page-title" style={pageHeadingBody}>
                <h2 style={pageHeadingTitle}>
                  <span>Real-Time Production Status</span>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <br />
        <div className="IrayNewImage">
          <img className="newIrayImage" alt="" src={IrayImage} />
        </div>
        <br />
        <section>
          <div
            className="teamDataPosition"
            style={{
              width: "80%",
              justifyContent: "center",
              margin: "0px 10%",
            }}
          >
            <div className="header-section" style={pageHeading}>
              <div className="page-title" style={pageHeadingBody}>
                <h2 style={pageHeadingTitle}>
                  <span>I-RAY Exploded View</span>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <br />
        <div className="IrayExpImage">
          <img className="newIrayImage" alt="" src={IrayExp} />
        </div>
        <br />
        <section>
          <div
            className="teamDataPosition"
            style={{
              width: "80%",
              justifyContent: "center",
              margin: "0px 10%",
            }}
          >
            <div className="header-section" style={pageHeading}>
              <div className="page-title" style={pageHeadingBody}>
                <h2 style={pageHeadingTitle}>
                  <span>I-RAY Product View</span>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="ProductCardSection">
            <div className="prdrowSpacebw row">
              <div className="col-md-4">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={IrayFront} alt="Avatar" />
                      <span className="cardImageText">Iray Front</span>
                    </div>
                    <div className="flip-card-back">
                      <h1>I-RAY Front View</h1>
                      {/*  <p>
                      Our Robotics Lab is dedicated both to research and
                      education. As result we are responsible for the academic
                      development of robotics expertise for undergraduates.
                    </p> */}
                      {/*  <Link to="/" className="innvationImageBtn">
                      View More Details
                    </Link> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={IrayTop} alt="Avatar" />
                      <span className="cardImageText">Iray Top</span>
                    </div>
                    <div className="flip-card-back">
                      <h1>I-RAY with Top Cover</h1>
                      {/* <p>
                      IoT permits direct relation between the physical world and
                      PC based frameworks, associating individuals, procedures
                      and gadgets. If you are looking to help your students to
                      develop skills on IOT domain then we at DST help to
                      support you in this.
                    </p> */}
                      {/*  <Link to="/" className="innvationImageBtn">
                      View More Details
                    </Link> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={IrayReady} alt="Avatar" />
                      <span className="cardImageText">Iray Ready</span>
                    </div>
                    <div className="flip-card-back">
                      <h1>I-RAY Ready Product</h1>
                      {/* <p>
                      At AI Labs we use applied research to achieve competitive
                      advantage. We partner with Universities and Enterprise
                      Analytics Labs to collaborate in areas of applied
                      research. 
                    </p> */}
                      {/*  <Link to="/" className="innvationImageBtn">
                      View More Details
                    </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
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
    // Large devices (desktops, 992px and up)
    "@media (min-width: 992px)": {
      marginLeft: "-5%",
      marginTop: "18%",
    },
    "@media only screen and (width: 1024px) and (height: 1366px)": {
      marginLeft: "2%",
      marginTop: "18%",
    },

    "@media screen and (device-width: 732px) and (device-height: 412px) and (orientation: landscape)": {
      minHeight: "390px",
    },
    "@media screen and (device-width: 960px) and (device-height: 600px) and (orientation: landscape)": {
      marginTop: "-50%",
    },
    "@media screen and (device-width: 640px) and (device-height: 360px) and (orientation: landscape)": {
      minHeight: "350px",
    },
    "@media screen and (device-width: 731px) and (device-height: 411px) and (orientation: landscape)": {
      minHeight: "390px",
    },
    "@media screen and (device-width: 667px) and (device-height: 375px) and (orientation: landscape)": {
      minHeight: "350px",
    },
    "@media screen and (device-width: 736px) and (device-height: 414px) and (orientation: landscape)": {
      minHeight: "400px",
    },
    "@media screen and (device-width: 812px) and (device-height: 375px) and (orientation: landscape)": {
      minHeight: "200px",
    },
    "@media screen and (device-width: 640px) and (device-height: 384px) and (orientation: landscape)": {
      minHeight: "400px",
    },
    "@media screen and (device-width: 823px) and (device-height: 411px) and (orientation: landscape)": {
      minHeight: "600px",
    },
    "@media only screen and (width: 600px) and (height: 1024px)": {
      minHeight: "350px",
    },
  },
  bnrHeading: {
    color: "black",
    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      fontSize: "smaller",
    },
    "@media only screen and (min-device-width : 640px) and (max-device-width : 640px) and (orientation : landscape)": {
      fontSize: "2rem",
    },
    // Small devices (landscape phones, 576px and up)
    "@media screen and (min-width: 481px) and (max-width:767px)": {
      maxWidth: "77%",
      marginLeft: "-1%",
      marginTop: "12%",
    },
    // Medium devices (tablets, 768px and up)
    "@media  screen and (min-width: 768px) and (max-width:991px)": {
      maxWidth: "74%",
      marginLeft: "-5%",
      marginTop: "12%",
      fontSize: "2.7rem",
    },
    // Large devices (desktops, 992px and up)
    "@media  screen and (min-width: 992px) and (max-width: 1199px)": {
      maxWidth: "66%",
      marginLeft: "0%",
      marginTop: "0%",
    },

    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      maxWidth: "70%",
      marginLeft: "5%",
      marginTop: "12%",
      fontSize: "4rem",
    },

    "@media screen and (width:320px)": { fontSize: "smaller" },
    "@media screen and (device-width: 732px) and (device-height: 412px) and (orientation: landscape)": {
      marginTop: "30%",
    },
    "@media screen and (device-width: 731px) and (device-height: 411px) and (orientation: landscape)": {
      marginTop: "40%",
    },
    "@media screen and (device-width: 823px) and (device-height: 411px) and (orientation: landscape)": {
      marginTop: "30%",
    },
    "@media screen and (device-width: 736px) and (device-height: 414px) and (orientation: landscape)": {
      marginTop: "30%",
    },
    "@media screen and (device-width: 812px) and (device-height: 375px) and (orientation: landscape)": {
      marginTop: "30%",
    },
  },

  bnrText: {
    color: "black",
    fontWeight: "600",
    fontFamily: "Lato, MoolBoran",

    "@media screen and (width:320px)": {
      marginLeft: "-9%",
      paddingRight: "0",
    },

    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      marginLeft: "-5%",
    },
    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 481px) and (max-width:767px)": {
      fontSize: "1.3rem",
      marginLeft: "0%",
      maxWidth: "97%",
      lineHeight: "1.5",
    },
    // Large devices (desktops, 992px and up)
    "@media screen and (min-width: 768px) and (max-width:991px) ": {
      fontSize: "1.2em",
      marginLeft: "-4%",
      maxWidth: "96%",
      letterSpacing: "0.05rem",
      lineHeight: "1.8",
    },
    // Extra large devices (large desktops, 1200px)
    "@media  screen and (min-width: 992px) and (max-width: 1199px)": {
      marginLeft: "2%",
      lineHeight: "1.8",
    },
    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      fontSize: "1.7rem",
      fontWeight: "600",
      marginLeft: "5%",
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
    "@media screen and (device-width: 854px) and (device-height: 480px) and (orientation: landscape)": {
      marginTop: "15%",
    },
  },
  pageHeading: {
    "@media (max-width:789px)": {
      display: "flex",
      flexDirection: "column",
      width: "90%",
      justifyContent: "center",
      marginLeft: "5%",
      marginBottom: "5%",
    },
    // Extra large devices (large desktops, 1200px and up)
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
      marginTop: "13%",
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
export default radium(Product_Descript);
