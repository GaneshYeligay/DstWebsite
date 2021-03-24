import React from "react";
import Card from "./Card";
import background2 from "../../dist/img/academic/background2.png";
import about1 from "../../dist/img/whowe.jpg";
import radium from "radium";
import About2 from "../../dist/img/whatwe.png";
import About3 from "../../dist/img/vision.jpg";
import About4 from "../../dist/img/mission.jpg";
import ContactFloatingBtn from "../../common/contact-floating-button/index";
import "../Technical-finishing-school.css";
import crossImage from "../../dist/img/afterCorrection/dataImage-mob.png";
import about from "../../dist/img/afterCorrection/estimonials.png";
const AboutUs = (props) => {
  return (
    <React.Fragment>
      <div
        className="page-slider AboutUsBannerImage"
        style={{ backgroundColor: "#ffff" }}
      >
        <div
          id="carousel-example-generic"
          className="carousel slide carousel-slider "
        >
          <section>
            <div className="ContainerAbout AboutBannerImage">
              <img
                className="AboutBackgroundImage"
                src={background2}
                alt="background"
              ></img>
              <div className="AboutBannerDataPosition">
                <h2> AboutUs </h2>

                <p>
                  Digital Shark Technology is the brainchild of Product
                  marketing and Product design & services with proven track
                  record in sales & marketing, managing & executing challenging
                  projects on Embedded, Hardware and Software assignments to the
                  satisfaction of clients.
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
              <div className="AboutImagePosition banner-item-home-img">
                <img src={about} alt="team"></img>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section>
        <div className="imageDisplayAboutUs">
          <div className="arrowImagePositionAboutUs">
            <img src={crossImage} alt="crossImage"></img>
          </div>
          <div className="dataPresentAboutUs">
            <h2>AboutUs</h2>
            <p>
              Digital Shark Technology is the brainchild of Product marketing
              and Product design & services with proven track record in sales &
              marketing, managing & executing challenging projects on Embedded,
              Hardware and Software assignments to the satisfaction of clients.
            </p>
          </div>
          <div className="aboutUsImage banner-item-home-img">
            <img src={about} alt="Embedded" style={{ width: "86%" }}></img>
          </div>
        </div>
      </section>

      <section className="about-area-two ">
        <div className="row">
          <div
            className="row"
            style={{
              height: "100%",
              width: "100%",
              background: "white",
              paddingLeft: "37px",
              paddingRight: "20px",
            }}
          >
            <div className="rowABoutUs row">
              <div className="column">
                <div className="columnStyle">
                  <div class="row rowMargin">
                    <div className="aboutUsCardWidth col-md-3 col-sm-6 col-xs-6 colCardStyle ">
                      <Card
                        title="WHO WE ARE ?"
                        img={about1}
                        data={
                          <span>
                            "Digital Shark Technology is the brainchild of
                            Product marketing and Product design & services with
                            proven track record in sales & marketing, managing &
                            executing challenging projects on Embedded, Hardware
                            and Software assignments to the satisfaction of
                            clients".
                          </span>
                        }
                      ></Card>
                    </div>
                    <div className="aboutUsCardWidth col-md-3 col-sm-6 col-xs-6 colCardStyle">
                      <Card
                        title="WHAT WE OFFER ?"
                        img={About2}
                        data={
                          <span>
                            "Our Company offers a wide spectrum of products and
                            a broad range of services and solutions, including
                            materials planning, design services, programming and
                            assembly service and a variety of support services".
                          </span>
                        }
                      ></Card>
                    </div>
                    <div className="aboutUsCardWidth col-md-3 col-sm-6 col-xs-6 colCardStyle">
                      <Card
                        title="OUR VISION"
                        img={About3}
                        data={
                          <span>
                            "To provide a one stop Innovative products, design
                            solutions and services to the industry, academia and
                            research institutes".
                          </span>
                        }
                      ></Card>
                    </div>
                    <div className="aboutUsCardWidth col-md-3 col-sm-6 col-xs-6 colCardStyle">
                      <Card
                        title="OUR MISION"
                        img={About4}
                        data={
                          <span>
                            "To deliver quality products, design solutions &
                            services on schedule with a dedicated team".
                          </span>
                        }
                      ></Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFloatingBtn />
    </React.Fragment>
  );
};

export default radium(AboutUs);
