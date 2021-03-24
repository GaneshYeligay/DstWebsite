import React from "react";

import images from "../../../../dist/img/Product-parterns/ti/pmlk_pro.jpg";
import images1 from "../../../../dist/img/Product-parterns/ti/pmlk_pro-2.png";
import images2 from "../../../../dist/img/Product-parterns/ti/pmlk_pro_hardware.png";

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
      <Title title="PMLK_PRO" />
      <div className="PMLKBreadcrumbPosition">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/prodcts-parterns">Product Partners</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/Ti">Texas Instruments</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <a href="/">PMLK Pro</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="container-fluid page-body product-desc ">
        <div className="container sdp-body" style={containerBody}>
          {/*next content */}
          <div className="containerGyapBreadcrumb"></div>

          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="about-col-three">
                <h3>Overview</h3>
                <p className="text-justify">
                  TI's PMLK Pro helps introduce students to low power,
                  non-isolated DC/DC power supplies. The lab kit was developed
                  in partnership with Professor Nicola Femia, a world renowned
                  power expert on the faculty at the University of Salerno in
                  Italy. It is comprised of 24 hands-on exercises based on four
                  key topologies using the kit's five hardware boards.{" "}
                </p>
                <p className="text-justify">
                  The experiments cover a variety of possible tests and
                  measurements which can be performed with the boards. The
                  boards have been designed to allow the investigation of the
                  influence of physical parameters and operation conditions of a
                  power supply on its own performances.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="about-col-three">
                <img src={images} className="lpkfImage" alt=""></img>
              </div>
            </div>
          </div>

          <br />
          <br />
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="about-col-three">
                <img src={images1} className="lpkfImage" alt=""></img>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="about-col-three">
                <h3>PMLK PRO lab manual</h3>
                <p className="text-justify">
                  The PMLK PRO lab manual, written by ProfessorNicola Femia, is
                  comprised of 24 power labexperiments covering key power
                  topologies. Each chapter has 6 experiments that walk through
                  casestudies demonstrating different aspects of powersupply
                  design tradeoffs:
                </p>
                <ul className="clearfix">
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Chapter1: LDO.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Chapter 2: Buck.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Chapter 3: Boost.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Chapter 4: Buck-Boost .
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <br />
          <br />
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="about-col-three">
                <h3>Hardware</h3>
                <p>
                  Students will learn the theory behind switching power supplies
                  and linear regulators and delve into issues such as:
                </p>
                <ul className="clearfix">
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Modes of Operation.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Efficiency.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Accuracy.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Power Magnetics.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Control.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Transient Response.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="about-col-three">
                <img src={images2} className="lpkfImage" alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Module;
