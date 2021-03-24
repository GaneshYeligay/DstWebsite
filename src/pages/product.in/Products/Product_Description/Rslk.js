import React from "react";

import images from "../../../../dist/img/Product-parterns/ti/TI RSLK 8376_white1.png";
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
      <Title title="RSLK" />
      <div className="RSLKBreadcrumbPosition">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/prodcts-parterns">Product Partners</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/Ti">Texas Instruments</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <a href="/">RSLK</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="container-fluid page-body product-desc ">
        <div className="container sdp-body" style={containerBody}>
          {/*next content */}
          <div className="containerGyapBreadcrumb"></div>

          <div className="row">
            <div className="col-md-8">
              <div className="details-col">
                <h3>Description</h3>
                <p className="text-justify">
                  The TI Robotics Systems Learning Kit (TI-RSLK) is a low-cost
                  robotics kit and classroom curriculum, which provide students
                  with a deeper understanding of how electronic system designs
                  work. Developed in collaboration with Dr. Jon Valvano,
                  professor, electrical and computer engineering at The
                  University of Texas at Austin.
                </p>
                <p className="text-justify">
                  The first in its series is the Maze Edition that comes with 20
                  learning modules covering basic to advanced topics. TI created
                  the robotics learning kit to fill a gap in existing
                  engineering curriculum by introducing comprehensive courseware
                  that addresses the fundamentals of embedded systems and
                  progresses to more advanced applications learning.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="details-col">
                <img src={images} className="lpkfImage" alt=""></img>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-12">
              <div className="details-col">
                <h3>TI-RSLK Maze Edition Curriculum</h3>
                <p className="text-justify">
                  The TI-RSLK Maze Edition curriculum comes with 20 learning
                  modulescovering basic to advanced topics. Each module is
                  complete with lecture videos and slides, lab documentation and
                  demonstration videos, quizzes and classroom activities. The
                  TI-RSLK is targeted to teach embedded systems and
                  applications, and can be expanded and used in a variety of
                  engineering classes.{" "}
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-12">
              <div className="details-col">
                <h3>The Curriculum Covers:</h3>

                <ul className="clearfix">
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Electrical engineering concepts such as voltage, current,
                    power and energy.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Microcontroller interfacing with sensors, actuators, and
                    motors; concepts of pulse width modulation, flash ROM,
                    analog to digital conversion, digital to analog conversion,
                    and serial data transmission.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Software design and testing using multithreading, and
                    debugging.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Fundamental theories such as Nyquist, Central Limit and
                    Little's Law.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Building systems using finite state machines (FSM), closed
                    loop control, Bluetooth® low energy, and Internet of Things.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Module;
