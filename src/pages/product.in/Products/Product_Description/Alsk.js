import React from "react";

import images from "../../../../dist/img/Product-parterns/ti/aslk_pro.jpg";
import Title from "../../../common/Title";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const Module = () => {
  let containerBody = {
    height: "auto",
    backgroundColor: "#fff",
    marginTop: "5rem",
    marginBottom: "3rem",
  };

  return (
    <React.Fragment>
      <Title title="ALSK_PRO" />
      <div className="AslkBreadcrumbPosition">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/prodcts-parterns">Product Partners</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/Ti">Texas Instruments</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <a href="/">Aslk Pro</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="container-fluid page-body product-desc ">
        <div className="container sdp-body" style={containerBody}>
          {/*next content */}
          <div className="containerGyapBreadcrumb"></div>
          <div className="row">
            <div
              className="col-md-8 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".0s"
            >
              <div className="details-col">
                <h3>Overview</h3>
                <p className="text-justify">
                  Introduce your students to analog systems with the Analog
                  System Lab Kit PRO (ASLK PRO). The kit is designed for easy
                  integration into your classroom for undergraduate or
                  postgraduate curriculum and provides students with the
                  platform bed they need to test almost any analog system using
                  general-purpose ICs such as OP-Amps and analog multipliers.
                </p>
              </div>
            </div>
            <div
              className="col-md-4 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".0s"
            >
              <div className="details-col">
                <img src={images} alt="" className="lpkfImage"></img>
              </div>
            </div>
          </div>
          <br />
          <br />
          {/* next content */}
          <div
            className="col-md-12 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay=".0s"
          >
            <div className="details-col">
              <h3>Part I - Learning the basics</h3>
              <p className="text-justify">
                In the fi rst part, the students will be exposed to the
                operation of the basic building blocks of analog systems. Using
                the general purpose operational amplifi ers and the precision
                analog multiplier, the student will build gain stages, buffers,
                instrumentation amplifi ers and voltage regulators. These
                experiments bring out several important issues, such as
                measurement of gain-bandwidth product, slew-rate, as well as
                saturation limits of the operational amplifi ers.
              </p>
            </div>

            <br />
            <br />
          </div>

          {/* next content */}
          <div
            className="col-md-12 wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay=".0s"
          >
            <div className="details-col">
              <h3>Part II - Building analog systems</h3>
              <p className="text-justify">
                In the second part, the students will be focused on learning
                about analog systems. Integrators and differentiators will be
                introduced, which are essential for implementing fi lters that
                can band-limit a signal prior to the sampling process to avoid
                aliasing errors.
              </p>
            </div>

            <br />
            <br />
          </div>
          <br />
          {/* next content */}

          <div
            className="col-md-12 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay=".0s"
          >
            <h3>Everything that an analog engineer needs</h3>
          </div>
          <br />
          <div claclassNamess="details-col">
            <h3>Description</h3>
            <p className="text-justify">
              The Analog System Lab Kit PRO (ASLK PRO) provides students
              exposure to the fascinating world of analog and mixed-signal
              processing. The kit comes with 14 step-by-step experiments and the
              course can be adapted for an undergraduate or postgraduate
              curriculum. As part of the lab course, students will build analog
              systems using analog ICs and study their macro models,
              characteristics and limitations.
            </p>
          </div>
          <br />
          <br />
          <div
            className="col-md-12 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay=".6s"
          >
            <div className="details-col">
              <h3>Features</h3>
              <p>ASLK PRO Kit comes in/with:</p>
              <ul className="clearfix">
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  ASLK PRO board in antistatic bag.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Manual, Schematic and Graph paper book.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Wire jumpers, transistors and diodes.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  14 Lab experiments* catered towards Analog Circuits.
                </li>
              </ul>
            </div>
            <br />
          </div>

          <div
            className="col-md-12 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay=".0s"
          >
            <div className="details-col">
              <h3>Concepts Covered</h3>

              <ul className="clearfix">
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Negative feedback in amplifiers.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Building instrumentation amplifier.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Understanding transient response, frequency response, DC
                  transfer characteristics.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Hysteresis in switching circuits.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Integrators &amp; differentiators.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Filters &amp; frequency response, tuning filters.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Function generator design, voltage controlled oscillator.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Phase lock loop functionality.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Automatic gain / volume control.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Characteristics of DCDC converter.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Design and study low dropout regulator.
                </li>
              </ul>
            </div>

            <br />
            <br />
          </div>
          <br />
          <div
            className="col-md-12 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay=".0s"
          >
            <h3>Analog System Lab Kit PRO</h3>
          </div>
          <br />
          <div
            className="col-md-12 wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay=".2s"
          >
            <div className="details-col">
              <h3>14 step-by-step lab exercises</h3>

              <ul class="clearfix">
                <li>
                  <i class="far fa-hand-point-right"></i>Negative feedback
                  amplifi ers.{" "}
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Instrumentation amplifier.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Regenerative feedback system, astable and monostable
                  multivibrator.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Integrators and differentiator circuits.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Analog filters.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Self-tuned filter.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Function generator and voltage-controlled oscillator/FM
                  generator.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Phase Lock Loop (PLL).
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Automatic gain control (AGC). Automatic volume control (AVC).
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  DC-DC converter.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Low dropout (LDO) regulator.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  LDO integrated circuit.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Digitally controlled gain stage amplifier.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Digitally programmable square and triangular wave
                  generator/oscillator.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Module;
