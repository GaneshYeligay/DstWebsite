import React, { Component } from "react";

import A2GS from "../dist/img/NewSiteCustomer/A2GIS.png";
import ABM from "../dist/img/NewSiteCustomer/ABM.png";
import BGL from "../dist/img/NewSiteCustomer/BGL.png";
import EMlite from "../dist/img/NewSiteCustomer/emilitenew.png";
import OwlCarousel from "react-owl-carousel";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import radium from "radium";
import armax from "../dist/img/NewSiteCustomer/logonew1.png";
import artischain from "../dist/img/NewSiteCustomer/artischainlogo.png";
import Aditya from "../dist/img/NewSiteCustomer/adityaauto.png";
import Apex from "../dist/img/NewSiteCustomer/Apex.png";
import Bharat from "../dist/img/NewSiteCustomer/Bharatelectronics1.png";

window.jQuery = window.$ = $;

class OurCustomersNew extends Component {
  state = {
    responsive: {
      0: {
        items: 2,
      },
      450: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  render() {
    let style = { height: "188px", width: "188px", padding: "19px" };

    return (
      <React.Fragment>
        <section class="client-area">
          <div class="container">
            <div class="row" style={{ display: "block" }}>
              <div class="col-md-6 col-md-offset-3"></div>
            </div>
            <div class="row">
              <div class="col-md-12 home-product-carousel">
                {/* <div class="client-carousel"> */}
                <OwlCarousel
                  className="client-carousel"
                  loop={true}
                  margin={10}
                  nav={false}
                  dots={false}
                  autoplay={true}
                  autoplayTimeout={2000}
                  items={3}
                  responsive={this.state.responsive}
                >
                  <div class="item">
                    <img src={A2GS} style={style} alt="acharya-logo" />
                  </div>

                  <div class="item">
                    <img src={ABM} alt="aec-logo" style={style} />
                  </div>
                  <div class="item">
                    <img src={BGL} alt="aissms" style={style} />
                  </div>
                  <div class="item">
                    <img src={EMlite} alt="ammini-college_logo" style={style} />
                  </div>

                  <div class="item">
                    <img src={armax} alt="ammini-college_logo" style={style} />
                  </div>
                  <div class="item">
                    <img
                      src={artischain}
                      alt="ammini-college_logo"
                      style={style}
                    />
                  </div>
                  <div class="item">
                    <img src={Aditya} alt="ammini-college_logo" style={style} />
                  </div>
                  <div class="item">
                    <img src={Apex} alt="ammini-college_logo" style={style} />
                  </div>
                  <div class="item">
                    <img src={Bharat} alt="ammini-college_logo" style={style} />
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default radium(OurCustomersNew);
