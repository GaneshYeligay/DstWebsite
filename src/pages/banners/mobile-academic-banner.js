import React, { Component } from "react";
import internship from "../../dist/img/afterCorrection/intern-trs.jpg";
import product from "../../dist/img/afterCorrection/product-trs.jpg";
import sdp from "../../dist/img/afterCorrection/sdp-trs.jpg";
import innovation from "../../dist/img/afterCorrection/innov-trs.jpg";
import technical from "../../dist/img/afterCorrection/techn-trs.jpg";

import OwlCarousel from "react-owl-carousel";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import radium from "radium";
window.jQuery = window.$ = $;

class AcademicMobileBanner extends Component {
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
            autoplayTimeout={2000}
            items={4}
            responsive={this.state.responsive}
          >
            <div className="dataBnrAcademic">
              <div className="dataBrnAcademicPosition">
                <h2>Internship Programs</h2>
                <p>
                  We offer DST internship, a in house training cum assignments
                  of ongoing projects to provide the industry standard
                  experience.
                </p>
              </div>
              <div className="imagePositionAcademicBnr banner-item-home-img">
                <img
                  src={internship}
                  alt="Embedded"
                  style={{ width: "86%" }}
                ></img>
              </div>
            </div>
            <div className="dataBnrAcademic">
              <div className="dataBrnAcademicPosition">
                <h2>Product Partners</h2>
                <p>
                  Find out more about how we can help your organization navigate
                  its next. Let us know your areas of interest so that we can
                  serve you better.
                </p>
              </div>
              <div className="imagePositionAcademicBnr banner-item-home-img">
                <img
                  src={product}
                  alt="Embedded"
                  style={{ width: "86%" }}
                ></img>
              </div>
            </div>
            <div className="dataBnrAcademic">
              <div className="dataBrnAcademicPosition">
                <h2>Skill Development</h2>
                <p>
                  A gap in skills and abilities reveal a golden opportunity,
                  Skill does assure employment. We offer DST Skill development
                  program for students to enlighten there skills for the
                  industry standards, latest technology oriented to grab the
                  golden opportunity.
                </p>
              </div>
              <div className="imagePositionAcademicBnr banner-item-home-img">
                <img src={sdp} alt="Embedded" style={{ width: "81%" }}></img>
              </div>
            </div>
            <div className="dataBnrAcademic">
              <div className="dataBrnAcademicPosition">
                <h2>Innovation Lab</h2>
                <p>
                  Creativity is thinking up new things, Innovation is doing new
                  things, all need is a innovative setup. We offer the full
                  pledged lab setup having industry standard latest equipment,
                  kits and trainings.
                </p>
              </div>
              <div className="imagePositionAcademicBnr banner-item-home-img">
                <img
                  src={innovation}
                  alt="Embedded"
                  style={{ width: "81%" }}
                ></img>
              </div>
            </div>
            <div className="dataBnrAcademic">
              <div className="dataBrnAcademicPosition">
                <h2>Finishing School</h2>
                <p>
                  Keep moving in the direction of your dreams. No matter how
                  slows it may seems, stay focus, you will get to the finish
                  line. DST training for students to enlighten there technical
                  skills, industry best practices and collaborating with
                  expertise engineers.
                </p>
              </div>
              <div className="imagePositionAcademicBnr banner-item-home-img">
                <img
                  src={technical}
                  alt="Embedded"
                  style={{ width: "81%" }}
                ></img>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </React.Fragment>
    );
  }
}

export default radium(AcademicMobileBanner);
