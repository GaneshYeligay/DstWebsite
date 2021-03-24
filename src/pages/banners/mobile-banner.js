import React, { Component } from "react";
import cloudservicescrop from "../../dist/img/afterCorrection/services.png";
import iotMobile from "../../dist/img/afterCorrection/iot-trns-mb.png";
import engineeringCrop from "../../dist/img/afterCorrection/embedded-trns-mb.png";
import testauto from "../../dist/img/afterCorrection/TestAutomation.png";
// import biwazeion from "../../dist/img/afterCorrection/abmrepo.png";
import ventilator from "../../dist/img/afterCorrection/ventilatornewabm2.png";
import OwlCarousel from "react-owl-carousel";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import radium from "radium";
import testautopdf from "../../dataset/Test_Automationpdf.pdf";
import biwazeionpdf from "../../dataset/Biwazeionpdf.pdf";
// import { Link } from "react-router-dom";
window.jQuery = window.$ = $;

class OurPartners extends Component {
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
    // let style = { height: "11rem", width: "13rem", padding: "0px" };
    // let bottomLine = {
    //   borderBottom: "4px solid #015e9e",
    //   width: "15%",
    //   alignText: "center",
    //   marginLeft: "43%"
    // };
    return (
      <React.Fragment>
        <div>
          <OwlCarousel
            className="client-carousel"
            loop={true}
            margin={10}
            nav={false}
            dots={false}
            autoplay={true}
            autoplayTimeout={6000}
            items={4}
            responsive={this.state.responsive}
          >
            <div className="dataBnrHome">
              <div className="dataBrnHomePosition">
                <h2>Introducing World's First Tele-ventilator</h2>
                <h2>ALPHA VENTILATOR</h2>
                <p>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  &nbsp;&nbsp;
                  <span>
                    This is a life support ventilator with advanced Ventilator
                    modes.
                  </span>
                  <br></br>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  &nbsp;&nbsp;
                  <span>
                    Has key safety and alarm features as per international
                    regulatory standards.
                  </span>
                  <br></br>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  &nbsp;&nbsp;
                  <span>
                    TELEHEALTH ENABLED feature reduce the number of bedside
                    visits and reduces their exposure to infected patients.
                  </span>
                  <br></br>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  &nbsp;&nbsp;
                  <span>Provides an optimal clinical experience.</span>
                  <br></br>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  &nbsp;&nbsp;
                  <span>
                    Digital Shark Technology is authorised distributor for PAN
                    INDIA.
                  </span>
                </p>
                <div className="link">
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
              <div className="imagePositionHomeBnr banner-item-home-img">
                <img
                  src={ventilator}
                  alt="Embedded"
                  style={{ width: "65%", marginTop: "-7%", marginLeft: "10%" }}
                ></img>
              </div>
            </div>
            <div className="dataBnrHome">
              <div className="dataBrnHomePosition">
                <h2>Embedded Solutions</h2>
                <p>
                  {" "}
                  What we usually consider as impossible are simply engineering
                  problems… there’s no law of physics preventing them and When
                  your dreams include service to others - accomplishing
                  something that contributes to others - it also accelerates the
                  accomplishment of that goal.
                </p>
              </div>
              <div className="imagePositionHomeBnr banner-item-home-img">
                <img
                  src={cloudservicescrop}
                  alt="Embedded"
                  style={{ width: "81%" }}
                ></img>
              </div>
            </div>
            <div className="dataBnrHome">
              <div className="dataBrnHomePosition">
                <h2>Web Tech & Cloud Services</h2>
                <p>
                  {" "}
                  We have extensive experience on developing custom, innovative
                  apps of all types by using latest technologies. We also
                  perform defining the business flows, modules and its
                  complexities, scaling and performance, Cloud Services
                </p>
              </div>
              <div className="imagePositionHomeBnr banner-item-home-img">
                <img
                  src={engineeringCrop}
                  alt="WebTech"
                  style={{ width: "81%" }}
                ></img>
              </div>
            </div>
            <div className="dataBnrHome">
              <div className="dataBrnHomePosition">
                <h2>Test Automation</h2>
                <p>
                  {" "}
                  Digital Shark having high expertise in the design of custom
                  test solutions for most of all facings of electronics and
                  mechanical prototype & production. Digital Shark offers
                  commercial functional test systems for a range of
                  manufacturing test applications, including automotive,
                  consumer, Medical and military-aerospace.
                </p>
                <div
                  className="LearnMoreLinkPDF " /* style={{float: "left"}} */
                >
                  {/* <Link to={testautopdf} target="_blank">
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
              <div className="imagePositionHomeBnr banner-item-home-img">
                <img
                  src={testauto}
                  alt="testauto"
                  style={{ width: "81%" }}
                ></img>
              </div>
            </div>
            <div className="dataBnrHome">
              <div className="dataBrnHomePosition">
                <h2>IOT Solutions</h2>
                <p>
                  {" "}
                  Internet of Things (IoT) is a system of interrelated computing
                  devices, mechanical and digital machines, objects, animals or
                  people that are provided with unique identifiers (UIDs) and
                  the ability to transfer data over a network without requiring
                  human-to-human or human-to-computer interaction.
                </p>
              </div>
              <div className="imagePositionHomeBnr banner-item-home-img">
                <img src={iotMobile} alt="IOT" style={{ width: "81%" }}></img>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </React.Fragment>
    );
  }
}

export default radium(OurPartners);
