import React, { Component } from "react";
import radium from "radium";
import { Fade } from "react-reveal";
import test1 from "../dist/img/tab-bar/test1.jpg";
import test2 from "../dist/img/tab-bar/test2.jpg";
import test3 from "../dist/img/tab-bar/test3.jpeg";
import test4 from "../dist/img/tab-bar/test4.jpg";
import test5 from "../dist/img/tab-bar/test5.jpg";
import test6 from "../dist/img/tab-bar/test6.jpg";
import HomeDetails from "./HomeDetails";
import HomeOtherDeatils from "./HomeOtherDetails";
import MobileBanners from "./banners/mobile-banner";
import crossImage from "../dist/img/afterCorrection/dataImage-mob.png";
import embedded from "../dist/img/afterCorrection/trasEng.png";
import services from "../dist/img/afterCorrection/services.png";
import background2 from "../dist/img/academic/background2.png";
import testauto from "../dist/img/afterCorrection/TestAutomation.png";
import iot from "../dist/img/academic/IOT.png";
import OurCustomersNew from "./OurCustomersNew";
import biwazeionpdf from "../dataset/Biwazeionpdf.pdf";
import testautopdf from "../dataset/Test_Automationpdf.pdf";
// import { Link } from "react-router-dom";
import ventilator from "../dist/img/afterCorrection/ventilatornewabm2.png";
class HomePage extends Component {
  componentDidMount() {}
  state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  render() {
    const {
      pageBreak,
      pageHeading,
      pageHeadingBody,
      pageHeadingTitle,
    } = styles;
    console.log("NewSite:Homepage Render-Props", this.props);
    return (
      <React.Fragment>
        <section>
          <div className="ImagHomeDisplay">
            <div className="arrowImagePositionHome">
              <img src={crossImage} alt="crossImage"></img>
            </div>
            <MobileBanners />
          </div>
        </section>
        <section>
          <div className="ContainerBackground homePageDisable">
            <img
              className="imageHomeBannerNew"
              src={background2}
              alt="background-curve"
            ></img>
            <div
              id="carousel"
              className="carousel slide carousel-fade"
              style={{ maxWidth: "calc(100% - 81px)", left: "6%" }}
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carousel"
                  data-slide-to="0"
                  className="active"
                  data-ride="carousel"
                ></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
                <li data-target="#carousel" data-slide-to="3"></li>
                <li data-target="#carousel" data-slide-to="4"></li>
              </ol>

              <div className="carousel-inner">
                <div className="active item">
                  <div className="BannerDataPosition alphaBanner">
                    <h2>Introducing World's First Tele-ventilator</h2>
                    <h2>ALPHA VENTILATOR</h2>
                    <p>
                      <i
                        className="far fa-hand-point-right"
                        aria-hidden="true"
                      ></i>
                      &nbsp;
                      <span>
                        This is a life support ventilator with advanced
                        Ventilator modes.
                      </span>
                      <br></br>
                      <i
                        className="far fa-hand-point-right"
                        aria-hidden="true"
                      ></i>
                      &nbsp;
                      <span>
                        Has key safety and alarm features as per international
                        regulatory standards.
                      </span>
                      <br></br>
                      <i
                        className="far fa-hand-point-right"
                        aria-hidden="true"
                      ></i>
                      &nbsp;&nbsp;
                      <span>
                        TELEHEALTH ENABLED feature reduce the number of bedside
                        visits and reduces their exposure to infected patients.
                      </span>
                      <br></br>
                      <i
                        className="far fa-hand-point-right"
                        aria-hidden="true"
                      ></i>
                      &nbsp;&nbsp;
                      <span>Provides an optimal clinical experience.</span>
                      <br></br>
                      <i
                        className="far fa-hand-point-right"
                        aria-hidden="true"
                      ></i>
                      &nbsp;
                      <span>
                        Digital Shark Technology is authorised distributor for
                        PAN INDIA.
                      </span>
                    </p>

                    <div className="link" style={{ float: "left" }}>
                      <a
                        href="https://www.abmrespiratorycare.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click here for website
                      </a>
                    </div>
                    <div
                      className="LearnMoreLinkPDF " /* style={{float: "left"}} */
                    >
                      {/* <Link to={biwazeionpdf} target="_blank">
                        Click here for more...
                      </Link> */}
                       <a href = {biwazeionpdf} target = "_blank" rel="noopener noreferrer">Click here for more...</a>
                      <i
                        className="fa fa-arrow-right"
                        aria-hidden="true"
                        style={{ color: "blue" }}
                      ></i>
                    </div>
                  </div>
                  <div className="imageNewsitePosition banner-item-home-img">
                    <img
                      className="dst-home-ventilator-bnr-img"
                      src={ventilator}
                      alt="Alphatele Ventilator"
                    ></img>
                  </div>
                </div>
                <div className="item">
                  <div className="BannerDataPosition">
                    <h2>Embedded Software Solutions</h2>
                    <p>
                      {" "}
                      Embedded software is computer software, written to control
                      machines or devices that are not typically thought of as
                      computers, commonly known as embedded systems.
                    </p>
                  </div>
                  <div className="imageNewsitePosition banner-item-home-img">
                    <img
                      src={embedded}
                      alt="embedded"
                      className="dst-home-embedded-bnr-img"
                    ></img>
                  </div>
                </div>
                <div className="item">
                  <div className="BannerDataPosition ">
                    <h2>Web Tech & Cloud Services</h2>
                    <p>
                      {" "}
                      We have extensive experience on developing custom,
                      innovative apps of all types by using latest technologies.
                      We also perform defining the business flows, modules and
                      its complexities, scaling and performance, Cloud Services
                    </p>
                  </div>
                  <div className="imageNewsitePosition banner-item-home-img">
                    <img
                      src={services}
                      className="dst-home-web-tech-bnr-img"
                      alt="Web Tech & Cloud Services"
                    ></img>
                  </div>
                </div>
                <div className="item">
                  <div className="BannerDataPosition ">
                    <h2>Test Automation</h2>
                    <p>
                      {" "}
                      Digital Shark having high expertise in the design of
                      custom test solutions for most of all facings of
                      electronics and mechanical prototype & production. Digital
                      Shark offers commercial functional test systems for a
                      range of manufacturing test applications, including
                      automotive,consumer,Medical and military-aerospace.
                    </p>
                    <div
                      className="LearnMoreLinkPDF " /* style={{float: "left"}} */
                    >
                      {/* <Link to={"../dataset/Test_Automationpdf.pdf"} target="_blank">
                        Click here for more...
                      </Link> */}
                       <a href = {testautopdf} target = "_blank" rel="noopener noreferrer">Click here for more...</a>
                      <i
                        className="fa fa-arrow-right"
                        aria-hidden="true"
                        style={{ color: "blue" }}
                      ></i>
                    </div>
                  </div>
                  <div className="imageNewsitePosition banner-item-home-img">
                    <img
                      src={testauto}
                      alt="Test Automation"
                      className="dst-home-test-automation-bnr-img"
                    ></img>
                  </div>
                </div>
                <div className="item">
                  <div className="BannerDataPosition">
                    <h2>IoT Solutions</h2>
                    <p>
                      {" "}
                      Internet of Things (IoT) is a system of interrelated
                      computing devices, mechanical and digital machines,
                      objects, animals or people that are provided with unique
                      identifiers (UIDs) and the ability to transfer data over a
                      network without requiring human-to-human or
                      human-to-computer interaction.
                    </p>
                  </div>
                  <div className="imageNewsitePosition banner-item-home-img">
                    <img
                      src={iot}
                      alt="IoT Solutions"
                      className="dst-home-iot-solutions-bnr-img"
                    ></img>
                  </div>
                </div>
              </div>
              {/* <!-- Carousel nav --> */}
              <a
                className="carousel-control left"
                href="#carousel"
                data-slide="prev"
              >
                &lsaquo;
              </a>
              <a
                className="carousel-control right"
                href="#carousel"
                data-slide="next"
              >
                &rsaquo;
              </a>
            </div>
          </div>
        </section>

        <section
          style={{
            width: "100%",
            margintTop: "1rem",
            "@media screen and (min-width:900px)": {},
          }}
          className="EngSrv-technology-section"
        >
          {/* Technology section */}

          <div className="container  body-section ">
            <div
              className="col-md-12"
              style={{
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <div className="header-section" style={pageHeading}>
                <div className="page-title" style={pageHeadingBody}>
                  <Fade bottom>
                    <h2 style={pageHeadingTitle}>
                      <span>Know Our Work</span>
                    </h2>
                  </Fade>
                </div>{" "}
              </div>

              {/*   <h3 className="title-text"></h3> */}
            </div>

            <div
              style={{
                "@media screen and (min-width:900px)": {},
              }}
            ></div>
          </div>
        </section>
        <section>
          <div id="wdcareers_team" className="mtt_container">
            <span className="mtt_container_text">
              We Turn Your Idea Into Application
            </span>
          </div>
          <div className="sectionNewsiteBlog"></div>
          <HomeOtherDeatils
            img={test1}
            dataHead="Strategic Planning & Requirement Ananlysis"
            paradata="  Before implementing our thoughts and ideas for your web
                          development, we tend to collect all the necessary details
                          for your business to understand the process. We also analyze
                          how you are going to implement your business tricks with the
                          help of our crafted website."
          />
          <HomeDetails
            img={test2}
            dataHead="Intuitive UI Design"
            paradata="  With the nature of your business, we will create a sophisticated user interface that will definitely lure your customers to take prompt action on your website."
          />
          <HomeOtherDeatils
            img={test3}
            dataHead="Robust Architecture"
            paradata="  We build solid websites with respect to the latest technologies to provide the best user experience and user interface to your customers.

"
          />
          <HomeDetails
            img={test4}
            dataHead="Performance Scalability"
            paradata=" Unit testing and Quality checking are the two most prominent aspects of our web development service. We check each and every element of your website before delivering it to you."
          />
          <HomeOtherDeatils
            img={test5}
            dataHead="Go-Live"
            paradata="After testing, the application goes live and handed over to the customer, the project team ensures technical viability & deployment of the websites."
          />
          <HomeDetails
            img={test6}
            dataHead="Maintenance & Support"
            paradata="
Maintenance & Support
We provide an end-to-end solution for websites and take care of after delivery support and maintenance. The maintenance team provides all necessary support in terms of your websites."
          />
        </section>
        <div className="pageBreak" style={pageBreak}></div>
        <section>
          <div
            className="row"
            style={{ width: "100%", justifyContent: "center", margin: "0" }}
          >
            <div className="header-section" style={pageHeading}>
              <div className="page-title" style={pageHeadingBody}>
                <h2 style={pageHeadingTitle}>
                  <span>Our Customers</span>
                </h2>
              </div>
            </div>
          </div>
        </section>

        <OurCustomersNew />
      </React.Fragment>
    );
  }
}

export default radium(HomePage);
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
      marginLeft: "-5%",
      marginTop: "18%",
    },
  },
  webCloudBnrh: {
    color: "black",
    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      fontSize: "smaller",
      maxWidth: "66%",
    },
    // Small devices (landscape phones, 576px and up)
    "@media screen and (min-width: 481px) and (max-width:767px)": {
      maxWidth: "66%",
      marginLeft: "-5%",
      marginTop: "12%",
    },
    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 768px) and (max-width:991px)": {
      maxWidth: "75%",
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
      maxWidth: "90%",
      marginLeft: "-5%",
      marginTop: "12%",
      fontSize: "3.2rem",
    },

    "@media screen and (width:320px)": { fontSize: "smaller" },
  },
  webCloudText: {
    color: "black",
    fontWeight: "500",
    fontFamily: "Lato, MoolBoran",
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
      marginLeft: "-5%",
      fontSize: "1.3rem",
      lineHeight: "1.5",
      fontWeight: "600",
    },

    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 768px) and (max-width:991px)": {
      fontSize: "1.3rem",
      // marginLeft: "0%",
      maxWidth: "76%",
      marginLeft: "-5%",
      fontWeight: "600",
      lineHeight: "1.8",
    },

    // Large devices (desktops, 992px and up)
    "@media screen and (min-width: 992px) and (max-width:1199px)": {
      fontSize: "1.7rem",
      fontWeight: "600",
      // marginLeft: "0%",
      marginLeft: "-4%",
      maxWidth: "77%",
      letterSpacing: "0.05rem",
      lineHeight: "1.8",
    },
    // Extra large devices (large desktops, 1200px)
    "@media only screen and (min-width: 1024px) and (max-width:1024px)": {
      marginLeft: "2%",
    },
    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      fontSize: "1.7rem",
      fontWeight: "600",
      // marginLeft: "0%",
      maxWidth: "77%",
      letterSpacing: "0.05rem",
      lineHeight: "1.8",
      marginLeft: "-4%",
    },
  },
  IoTBnrh: {
    color: "black",
    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      fontSize: "smaller",
      maxWidth: "66%",
    },
    // Small devices (landscape phones, 576px and up)
    "@media screen and (min-width: 481px) and (max-width:767px)": {
      maxWidth: "66%",
      marginLeft: "-13%",
      marginTop: "12%",
    },
    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 768px) and (max-width: 991px)": {
      maxWidth: "75%",
      marginLeft: "-5%",
      marginTop: "12%",
    },
    // Large devices (desktops, 992px and up)
    "@media screen and (min-width: 992px) and (max-width: 1199px)": {
      maxWidth: "80%",
      marginLeft: "0%",
      marginTop: "0%",
    },
    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      maxWidth: "90%",
      marginLeft: "-5%",
      marginTop: "12%",
      fontSize: "3.2rem",
    },

    "@media screen and (width:320px)": {
      fontSize: "smaller",
    },
  },
  IotText: {
    color: "black",
    fontWeight: "500",
    fontFamily: "Lato, MoolBoran",
    /*   maxWidth: "80%",
    marginLeft: "-5%", */
    "@media (width:320px)": {
      marginLeft: "-9%",
      paddingRight: "0",
      lineHeight: "12px",

      maxWidth: "87%",
    },

    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      marginLeft: "-5%",
      lineHeight: "11px",
      // marginLeft: "-5%",
    },
    "@media screen and (min-width: 481px) and (max-width: 767px)": {
      marginLeft: "-13%",
      fontSize: "1.3rem",
      lineHeight: "1.5",
      fontWeight: "600",
    },
    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 768px) and (max-width:991px)": {
      fontSize: "1.3rem",
      // marginLeft: "0%",
      maxWidth: "76%",
      marginLeft: "-5%",
      fontWeight: "600",
      lineHeight: "1.8",
    },

    // Large devices (desktops, 992px and up)

    "@media screen and (min-width: 992px) and (max-width:1199px)": {
      fontSize: "1.2em",
      // marginLeft: "0%",
      marginLeft: "1%",
      maxWidth: "82%",
      letterSpacing: "0.05rem",
      lineHeight: "1.8",
      fontWeight: "600",
    },
    // Extra large devices (large desktops, 1200px)
    "@media only screen and (width: 1024px) and (height:1366px)": {
      marginLeft: "1%",
    },

    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      fontSize: "1.7rem",
      fontWeight: "600",
      // marginLeft: "0%",
      maxWidth: "77%",
      letterSpacing: "0.05rem",
      lineHeight: "1.8",
      marginLeft: "-4%",
    },
  },
  EmbedBnrh: {
    color: "black",
    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      fontSize: "smaller",
      maxWidth: "66%",
    },
    // Small devices (landscape phones, 576px and up)
    "@media screen and (min-width: 481px) and (max-width:767px)": {
      maxWidth: "72%",
      marginLeft: "-5%",
      marginTop: "12%",
    },

    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 768px) and (max-width: 991px)": {
      maxWidth: "75%",
      marginLeft: "-5%",
      marginTop: "12%",
    },
    // Large devices (desktops, 992px and up)
    "@media screen and (min-width: 992px) and (max-width:1199px)": {
      maxWidth: "80%",
      marginLeft: "0%",
      marginTop: "0%",
    },
    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      maxWidth: "90%",
      marginLeft: "-5%",
      marginTop: "12%",
      fontSize: "3.2rem",
    },

    "@media screen and (width:320px)": { fontSize: "smaller" },
  },
  EmbedText: {
    color: "black",
    fontWeight: "500",
    fontFamily: "Lato, MoolBoran",
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

    "@media screen and (min-width: 481px) and (max-width:575px)": {
      marginLeft: "-5%",
    },
    // Small devices (landscape phones, 576px and up)
    "@media screen and (min-width: 576px)  and (max-width:767px)": {
      lineHeight: " 1.5 ",
      fontSize: "1.1rem",
      fontWeight: "600",
    },
    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 768px) and (max-width:991px)": {
      fontSize: "1.3rem",
      // marginLeft: "0%",
      maxWidth: "76%",
      marginLeft: "-5%",
      fontWeight: "600",
      lineHeight: "1.8",
    },
    // Large devices (desktops, 992px and up)
    "@media screen and (min-width: 992px) and (max-width:1199px)": {
      fontSize: "1.2em",
      // marginLeft: "0%",
      marginLeft: "1%",
      maxWidth: "92%",
      letterSpacing: "0.05rem",
      lineHeight: "1.8",
      fontWeight: "600",
    },
    // Extra large devices (large desktops, 1200px and up)
    /* "@media (min-width: 1000px)": {
      marginLeft: "0.5%"
    }, */
    "@media (min-width: 1200px)": {
      fontSize: "1.7rem",
      fontWeight: "600",
      // marginLeft: "0%",
      marginLeft: "-4%",
      maxWidth: "77%",
      letterSpacing: "0.05rem",
      lineHeight: "1.8",
    },
  },
  pageHeading: {
    "@media screen and (max-width:789px)": {
      display: "flex",
      flexDirection: "column",
      width: "93%",
      justifyContent: "center",
    },
    "@media screen and (min-width: 1400px) and (max-width: 1910px)": {
      marginTop: "-20%",
    },
    "@media only screen and (width: 1440px) and (height: 900px)": {
      marginTop: "0%",
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
    "@media screen and (min-width:1499px)": {
      marginTop: "36rem",
    },
  },

  pageHeadingTitle: {
    "@media screen and (max-width:789px)": {
      fontSize: "1.6rem",
      letterSpacing: "3px",
      lineHeight: "29px",
    },
  },
  pageBreak: {
    marginTop: "-1%",
    "@media screen and (width:768px)": { marginTop: "-4%", height: "2vh" },
    "@media screen and (max-width:600px)": { marginTop: "3%", height: "1vh" },
    "@media screen and (max-width:500px)": { marginTop: "12%", height: "3vh" },
    "@media screen and (width:320px)": { marginTop: "4%", height: "2vh" },
    "@media screen and (width: 1500px) and (height: 680px)": {
      marginTop: "16%",
    },
    "@media screen and (device-width: 854px) and (device-height: 480px) and (orientation: landscape)": {
      marginTop: "6%",
    },
  },
  pageSlider: {},
  container: {},
};
