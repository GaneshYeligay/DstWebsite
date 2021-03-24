import React from "react";
import radium from "radium";

import "../Technical-finishing-school.css";

import ProductsCarousel from "../products-partners-carsouel";
import Blog from "../common/blog";
import OurPartners from "../OurPartners";
import MobileBanners from "../banners/mobile-academic-banner";
import crossImage from "../../dist/img/afterCorrection/dataImage-mob.png";
import background2 from "../../dist/img/academic/background2.png";
import inovationlab from "../../dist/img/afterCorrection/inovation-lab.png";
import partners1 from "../../dist/img/afterCorrection/partners1.png";
import skill from "../../dist/img/afterCorrection/skill.png";
import internship from "../../dist/img/afterCorrection/internship.png";
import teach from "../../dist/img/afterCorrection/teach.png";
const SDP = () => {
  const { pageBreak } = styles;

  return (
    <React.Fragment>
      <section>
        <div className="ImagAcademicHomeDisplay">
          <div className="arrowImagePositionHome">
            <img src={crossImage} alt="crossImage"></img>
          </div>
          <MobileBanners />
        </div>
      </section>
      <section>
        <div className="academic ContainerBackground homePageDisable">
          <img
            className="imageHomeBannerNew"
            src={background2}
            alt="newsiteImage"
          ></img>
          <div
            id="carousel"
            className="carousel slide carousel-fade"
            // data-ride="carousel"
            style={{ maxWidth: "calc(100% - 81px)" }}
          >
            <ol className="academicIndicator carousel-indicators">
              <li
                data-target="#carousel"
                data-slide-to="0"
                className="active"
                // data-ride="carousel"
              ></li>
              <li data-target="#carousel" data-slide-to="1"></li>
              <li data-target="#carousel" data-slide-to="2"></li>
              <li data-target="#carousel" data-slide-to="3"></li>
              <li data-target="#carousel" data-slide-to="4"></li>
            </ol>

            <div className="carousel-inner">
              <div className="active item">
                <div className="BannerDataPosition">
                  <h2>Innovation Lab</h2>
                  <p>
                    {" "}
                    Creativity is intelligence having fun, Innovation
                    distinguishes between a leader and a follower. All you need
                    is an innovative setup which we will provide. We offer the
                    full-fledged lab setup having industry grade standard
                    equipment and kits.
                  </p>
                </div>
                <div className="imageNewsitePositionAcademic banner-item-home-img ">
                  <img
                    src={inovationlab}
                    alt="embedded"
                    className="dst-home-innovation-lab-bnr-img"
                  ></img>
                </div>
              </div>
              <div className="item">
                <div className="BannerDataPosition ">
                  <h2>Product Partners</h2>
                  <p>
                    {" "}
                    Know more about our partners who will join their hands with
                    us to navigate your organization. Letting us know your area
                    of interest would help us in serving you better.
                  </p>
                </div>
                <div className="imageNewsitePositionAcademic banner-item-home-img">
                  <img
                    src={partners1}
                    alt="embedded"
                    className="dst-home-product-partners-bnr-img"
                  ></img>
                </div>
              </div>
              <div className="item">
                <div className="BannerDataPosition">
                  <h2>Skill Development</h2>
                  <p>
                    {" "}
                    A gap in skills and abilities reveal a golden opportunity,
                    Skill does assure employment. We offer DST Skill development
                    program for students to enlighten their skills for the
                    industry standards and latest technology.
                  </p>
                </div>
                <div className="imageNewsitePositionAcademic banner-item-home-img">
                  <img
                    src={skill}
                    alt="embedded"
                    className="dst-home-skill-development-img"
                  ></img>
                </div>
              </div>
              <div className="item">
                <div className="BannerDataPosition">
                  <h2>Internship Programs</h2>
                  <p>
                    {" "}
                    We offer DST internship, an in-house training programme to
                    work on projects which provides the industry standard
                    experience.
                  </p>
                </div>
                <div className="imageNewsitePositionAcademic banner-item-home-img">
                  <img
                    src={internship}
                    alt="embedded"
                    className="dst-home-internship-programs-img"
                  ></img>
                </div>
              </div>
              <div className="item">
                <div className="BannerDataPosition">
                  <h2>Finishing School</h2>
                  <p>
                    {" "}
                    Keep moving in the direction of your dreams. No matter how
                    slow it may seem, stay focused, you will be accomplishing
                    it. DST trains the students to enlighten their technical
                    skills, industry practices and collaborating with expert
                    engineers.
                  </p>
                </div>
                <div className="imageNewsitePositionAcademic banner-item-home-img">
                  <img
                    src={teach}
                    alt="Finishing School"
                    className="dst-home-finishing-school-img"
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

      {/* <section>
        <div className="bannerImageFixed homePageDisable ">
          <div className="bannerFixedImageNewsite">
            <img src={background} alt="newsite background Image" />
          </div>

          <div id="hero-wrapper">
            <div className="carousel-wrapper">
              <div id="hero-carousel" className="carousel slide carousel-fade">
                <ol className="carsolBackground carousel-indicators">
                  <li
                    data-target="#hero-carousel"
                    data-slide-to="0"
                    className="active "
                  ></li>
                  <li data-target="#hero-carousel " data-slide-to="1"></li>
                  <li data-target="#hero-carousel " data-slide-to="2"></li>
                  <li data-target="#hero-carousel " data-slide-to="3"></li>
                  <li data-target="#hero-carousel " data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="item active">
                    <div className="dataPosition">
                      <div className="dataPres">
                        <h2>Innovation Lab</h2>
                        <p>
                          Creativity is thinking up new things, Innovation is
                          doing new things, all need is a innovative setup. We
                          offer the full pledged lab setup having industry
                          standard latest equipment, kits and trainings.
                        </p>
                      </div>
                    </div>
                    <div className="bannerImagePos">
                      <div className="bannerImage banner-item-home-img">
                        <img
                          src={inovationlab}
                          className="academicImage1"
                          alt="inovationlab"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="dataPosition">
                      <div className="dataPres">
                        <h2>Product Partners</h2>
                        <p>
                          Find out more about how we can help your organization
                          navigate its next. Let us know your areas of interest
                          so that we can serve you better.
                        </p>
                      </div>
                    </div>

                    <div className="bannerImagePos">
                      <div className="bannerImage banner-item-home-img">
                        <img
                          src={partners1}
                          className="academicImage2"
                          alt="partners1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="dataPosition">
                      <div className="dataPres">
                        <h2>Skill Development</h2>
                        <p>
                          A gap in skills and abilities reveal a golden
                          opportunity, Skill does assure employment. We offer
                          DST Skill development program for students to
                          enlighten there skills for the industry standards,
                          latest technology oriented to grab the golden
                          opportunity.
                        </p>
                      </div>
                    </div>
                    <div className="bannerImagePos">
                      <div className="bannerImage banner-item-home-img">
                        <img
                          src={skill}
                          className="academicImage3"
                          alt="skill"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="dataPosition">
                      <div className="dataPres">
                        <h2>Internship Programs</h2>
                        <p>
                          We offer DST internship, a in house training cum
                          assignments of ongoing projects to provide the
                          industry standard experience.
                        </p>
                      </div>
                    </div>

                    <div className="bannerImagePos">
                      <div className="bannerImage banner-item-home-img">
                        <img
                          src={internship}
                          className="academicImage4"
                          alt="internship"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="dataPosition">
                      <div className="dataPres">
                        <h2>Finishing School</h2>
                        <p>
                          Keep moving in the direction of your dreams. No matter
                          how slows it may seems, stay focus, you will get to
                          the finish line. DST training for students to
                          enlighten there technical skills, industry best
                          practices and collaborating with expertise engineers.
                        </p>
                      </div>
                    </div>
                    <div className="bannerImagePos">
                      <div className="bannerImage banner-item-home-img">
                        <img
                          src={teach}
                          className="academicImage5"
                          alt="teach"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="left carousel-control"
                  href="#hero-carousel"
                  data-slide="prev"
                >
                  <i className="fa fa-chevron-left left"></i>
                </a>
                <a
                  className="right carousel-control"
                  href="#hero-carousel"
                  data-slide="next"
                >
                  <i className="fa fa-chevron-right right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    
     */}

      {/* <section>
        <div class="backendImageFixed DisplayBanner">
          <div className="bannerFixedImageAcademic">
            <img src={background} alt="newsite background Image" />
          </div>
          <div id="hero-wrapper">
            <div className="carousel-wrapper">
            </div>
          </div>
        </div>
      </section> */}
      {/* <div
        className="page-slider DisplayBanner"
        style={{ backgroundColor: "#ffff" }}
      >
        <div
          id="carousel-example-generic"
          className="carousel slide carousel-slider "
          data-interval="3000"
          data-pause="false"
          data-ride="carousel"
        >
          <Desktop>
            <ol className="carousel-indicators carousel-indicators-frontend">
              <li
                data-target="#carousel-example-generic"
                data-slide-to="0"
                className="slider-data-bubble"
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="1"
                className="slider-data-bubble "
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="2"
                className="slider-data-bubble active"
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="3"
                className="slider-data-bubble "
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="4"
                className="slider-data-bubble"
              ></li>
            </ol>
          </Desktop>
          <Tablet>
            <ol className="carousel-indicators carousel-indicators-frontend">
              <li
                data-target="#carousel-example-generic"
                data-slide-to="0"
                className="slider-data-bubble"
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="1"
                className="slider-data-bubble"
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="2"
                className="slider-data-bubble"
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="3"
                className="slider-data-bubble"
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="4"
                className="slider-data-bubble"
              ></li>
             
            </ol>
          </Tablet>

          <Mobile>
            <ol className="carousel-indicators carousel-indicators-frontend">
              <li
                data-target="#carousel-example-generic"
                data-slide-to="0"
                className="slider-data-bubble"
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="1"
                className="slider-data-bubble "
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="2"
                className="slider-data-bubble active"
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="3"
                className="slider-data-bubble "
              ></li>
              <li
                data-target="#carousel-example-generic"
                data-slide-to="4"
                className="slider-data-bubble"
              ></li>
            </ol>
          </Mobile>
    
          <div className="carousel-inner" role="listbox">
            <div className="item carousel-item-nine internshipImageacademic">
              <div className="container">
                <div
                  className="carousel-position-six col-xs-6"
                  style={carouselPos}
                >
                  <h2
                    className="carousel-title-v6 carouselPosition"
                    style={bnrHeading}
                  >
                    Internship Programs
                  </h2>
                  <Fade bottom>
                    <p className="subText" style={bnrText}>
                      We offer DST internship, a in house training cum
                      assignments of ongoing projects to provide the industry
                      standard experience.
                    </p>
                  </Fade>
                </div>
              </div>
            </div>
            <div className="item carousel-item-nine partners-academic active">
              <div className="container">
                <div
                  className="carousel-position-six col-xs-6"
                  style={carouselPos}
                >
                  <h2
                    className="carousel-title-v6 carouselPosition"
                    style={bnrHeading}
                  >
                    Product Partners
                  </h2>
                  <Fade bottom>
                    <p className="subText" style={bnrText}>
                      Find out more about how we can help your organization
                      navigate its next. Let us know your areas of interest so
                      that we can serve you better.
                    </p>
                  </Fade>
                </div>
              </div>
            </div>{" "}
            <div className="item carousel-item-nine skill-development ">
              <div className="container">
                <div
                  className="carousel-position-six col-xs-6"
                  style={carouselPos}
                >
                  <h2
                    className="carousel-title-v6 carouselPosition"
                    style={bnrHeading}
                  >
                    Skill Development
                  </h2>
                  <Fade bottom>
                    <p className="subText" style={bnrText}>
                      A gap in skills and abilities reveal a golden opportunity,
                      Skill does assure employment. We offer DST Skill
                      development program for students to enlighten there skills
                      for the industry standards, latest technology oriented to
                      grab the golden opportunity.
                    </p>
                  </Fade>
                </div>
              </div>
            </div>{" "}
            <div className="item carousel-item-nine dstInnovationLab ">
              <div className="container">
                <div
                  className="carousel-position-six col-xs-6"
                  style={carouselPos}
                >
                  <h2
                    className="carousel-title-v6 carouselPosition"
                    style={bnrHeading}
                  >
                    Innovation Lab
                  </h2>
                  <Fade bottom>
                    <p className="subText" style={bnrText}>
                      Creativity is thinking up new things, Innovation is doing
                      new things, all need is a innovative setup. We offer the
                      full pledged lab setup having industry standard latest
                      equipment, kits and trainings.
                    </p>
                  </Fade>
                </div>
              </div>
            </div>{" "}
            <div className="item carousel-item-nine technical-finishing-school-academic ">
              <div className="container">
                <div
                  className="carousel-position-six col-xs-6"
                  style={carouselPos}
                >
                  <h2
                    className="carousel-title-v6 carouselPosition"
                    style={bnrHeading}
                  >
                    Finishing School
                  </h2>
                  <Fade bottom>
                    <p className="subText" style={bnrText}>
                      Keep moving in the direction of your dreams. No matter how
                      slows it may seems, stay focus, you will get to the finish
                      line. DST training for students to enlighten there
                      technical skills, industry best practices and
                      collaborating with expertise engineers.
                    </p>
                  </Fade>
                </div>
              </div>
            </div>{" "}
          </div>

         
          <a
            className="left carousel-control carousel-control-shop carousel-control-frontend"
            href="#carousel-example-generic"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </a>
          <a
            className="right carousel-control carousel-control-shop carousel-control-frontend"
            href="#carousel-example-generic"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
     
     
      */}
      <div className="pageBreak" style={pageBreak}></div>

      <OurPartners />

      <ProductsCarousel />
      <Blog />
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
    "@media (min-width: 576px)": {
      maxWidth: "90%",
      marginLeft: "-5%",
      marginTop: "12%",
    },
    // Medium devices (tablets, 768px and up)
    "@media (min-width: 768px)": {
      maxWidth: "90%",
      marginLeft: "-5%",
      marginTop: "12%",
    },
    // Large devices (desktops, 992px and up)
    "@media (min-width: 992px)": {
      maxWidth: "90%",
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

    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      marginLeft: "-5%",
    },
    "@media screen and (min-width: 481px) and (max-width: 767px)": {
      marginLeft: "-5%",
      fontSize: "1.3rem",
    },
    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 768px) and (max-width: 991px)": {
      fontSize: "1.4rem",
      // marginLeft: "0%",
      maxWidth: "85%",
      marginLeft: "-5%",
      lineHeight: "1.8",
    },
    // Large devices (desktops, 992px and up)
    "@media screen and (min-width: 992px) and (max-width: 1199px)": {
      fontSize: "1.5rem",
      // marginLeft: "0%",
      maxWidth: "88%",
      letterSpacing: "0.05rem",
      lineHeight: "1.8",
      marginLeft: "1%",
    },

    "@media (min-width: 1200px)": {
      fontSize: "1.7rem",
      fontWeight: "600",
      // marginLeft: "0%",y
      maxWidth: "77%",
      letterSpacing: "0.05rem",
      lineHeight: "1.8",
      marginLeft: "-4%",
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
};
