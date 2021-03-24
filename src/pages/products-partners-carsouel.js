import React, { Component } from "react";
import acharya from "../dist/img/parterns/acharya-logo.png";
import aec from "../dist/img/parterns/aec-logo.png";
import aissms from "../dist/img/parterns/aissms.png";
import ammini from "../dist/img/parterns/ammini-college_logo.png";
import anand from "../dist/img/parterns/anand-logo.png";
import b2 from "../dist/img/parterns/b2.png";
import bannari from "../dist/img/parterns/bannari-amman.png";
import bharatiyaV from "../dist/img/parterns/bharatiya-vidyapeeth_kolhapur_logo.png";
import BVDUnew from "../dist/img/parterns/BVDUnew.png";
import dsce from "../dist/img/parterns/dsce.png";
import GITGoodquality from "../dist/img/parterns/GIT-Good-quality.png";
import images_1 from "../dist/img/parterns/ammini-college_logo.png";
import keclogosmall from "../dist/img/parterns/keclogosmall.png";
import rigol_logo from "../dist/img/parterns/rigol_logo_cropped.png";

import OwlCarousel from "react-owl-carousel";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import radium from "radium";
window.jQuery = window.$ = $;

class OurPartners extends Component {
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
    let bottomLine = {
      borderBottom: "4px solid #015e9e",
      width: "15%",
      alignText: "center",
      marginLeft: "43%",
    };
    return (
      <React.Fragment>
        <section class="client-area">
          <div class="container">
            <div class="row" style={{ display: "block" }}>
              <div class="col-md-6 col-sm-offset-3">
                <div class="section-title">
                  <div class="title-style clearfix">
                    <h2>Our Customers</h2>
                  </div>
                  <p style={bottomLine}></p>
                </div>
              </div>
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
                  items={4}
                  responsive={this.state.responsive}
                >
                  <div class="item">
                    <img src={acharya} style={style} alt="acharya-logo" />
                  </div>

                  <div class="item">
                    <img src={aec} alt="aec-logo" style={style} />
                  </div>
                  <div class="item">
                    <img src={aissms} alt="aissms" style={style} />
                  </div>
                  <div class="item">
                    <img src={ammini} alt="ammini-college_logo" style={style} />
                  </div>
                  <div class="item">
                    <img src={anand} alt="anand-logo" style={style} />
                  </div>
                  <div class="item">
                    <img src={b2} alt="" style={style} />
                  </div>
                  <div class="item">
                    <img src={bannari} alt="bannari-amman" style={style} />
                  </div>
                  <div class="item">
                    <img
                      src={bharatiyaV}
                      alt="bharatiya-vidyapeeth_kolhapur"
                      style={style}
                    />
                  </div>
                  <div class="item">
                    <img src={BVDUnew} alt="BVDUnew" style={style} />
                  </div>
                  <div class="item">
                    <img src={dsce} alt="dsce" style={style} />
                  </div>
                  <div class="item">
                    <img
                      src={GITGoodquality}
                      alt="GIT-Good-quality "
                      style={style}
                    />
                  </div>
                  <div class="item">
                    <img src={images_1} alt="" style={style} />
                  </div>
                  <div class="item">
                    <img src={keclogosmall} alt="keclogosmall" style={style} />
                  </div>

                  <div class="item">
                    <img src={rigol_logo} alt="rigol" style={style} />
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

export default radium(OurPartners);
