import React from "react";
import Card from "./assets/Card";

import ASLK from "../../../dist/img/Product-parterns/ti/aslk_pro-1.jpg";
import MSP_MCU_LaunchPads from "../../../dist/img/Product-parterns/ti/mcu_launchpads-1.jpg";
import MCU_Launchpads from "../../../dist/img/Product-parterns/ti/cc3200-launchxl-launchpad-25522-1.png";
import PMLK_PRO from "../../../dist/img/Product-parterns/ti/pmlk_pro-1.jpg";
import ARM from "../../../dist/img/Product-parterns/ti/arm-1.jpg";
import HERCULAS from "../../../dist/img/Product-parterns/ti/herculas-1.jpg";
import MSP_430 from "../../../dist/img/Product-parterns/ti/msp430-1.jpg";
import RSLK from "../../../dist/img/Product-parterns/ti/TI-RSLK-8376_white1-1.png";
import Title from "../../common/Title";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const Module = () => {
  let containerBody = {
    backgroundColor: "#fff",
    marginTop: "5rem",
    marginBottom: "3rem",
  };

  return (
    <React.Fragment>
      <Title title="Texas Instruments" />
      <div className="TIBreadcrumbPosition">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/prodcts-parterns">Product Partners</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <a href="/">Texas Instruments</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="container-fluid page-body">
        <div className="container sdp-body" style={containerBody}>
          {/*------Content start------ */}
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <Card
                title="ALSK_PRO"
                img={ASLK}
                style={{
                  fontSize: "large",
                  fontFamily: "Raleway, sans-serif",
                }}
                btlLbl="View more details"
                cardDataStyle="cardStyle3"
                to="/Alsk"
              >
                <span>
                  The Analog System Lab Kit PRO (ASLK PRO) provides students
                  exposure to the fascinating world of analog and mixed-signal
                  processing.
                </span>
              </Card>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <Card
                title="MSP MCU LaunchPads"
                img={MSP_MCU_LaunchPads}
                style={{
                  fontSize: "large",
                  fontFamily: "Raleway, sans-serif",
                }}
                btlLbl="View more details"
                cardDataStyle="cardStyle3"
                btnStyle={{ backgroundColor: "#0f75bc", borderRadius: "2px" }}
                to="/Msp_launchpad"
              >
                <span>
                  The MSP LaunchPad Development Kit is an easy-to-use
                  microcontroller development board for the low-power and
                  low-cost MSP430G2x.
                </span>
              </Card>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <Card
                title="C2000T MCU LaunchPads"
                img={MCU_Launchpads}
                style={{
                  fontSize: "large",
                  fontFamily: "Raleway, sans-serif",
                }}
                btlLbl="View more details"
                cardDataStyle="cardStyle3"
                btnStyle={{ backgroundColor: "#0f75bc", borderRadius: "2px" }}
                to="/C2000_Mcu_launchpad"
              >
                <span>
                  The DSP core and high-performance peripherals make these
                  devices rock in real-time control applications.Dsp core and
                  high
                </span>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <Card
                title="PMLK_PRO"
                img={PMLK_PRO}
                style={{
                  fontSize: "large",
                  fontFamily: "Raleway, sans-serif",
                }}
                btlLbl="View more details"
                cardDataStyle="cardStyle3"
                to="/Pmlk_Pro"
              >
                <span>
                  TI's PMLK Pro helps introduce students to low power,
                  non-isolated DC/DC power supplies. The lab kit was developed
                  in partnership.
                </span>
              </Card>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <Card
                title="ARM®-Based MCUs"
                img={ARM}
                style={{
                  fontSize: "large",
                  fontFamily: "Raleway, sans-serif",
                }}
                btlLbl="View more details"
                cardDataStyle="cardStyle3"
                to="/Arm_Based_Mcu"
              >
                <span>
                  ARM Cortex®-M4-based microcontrollers with integrated
                  connectivity options, both wired and wireless.
                </span>
              </Card>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <Card
                title="HerculesT MCU LaunchPads
              "
                img={HERCULAS}
                style={{
                  fontSize: "large",
                  fontFamily: "Raleway, sans-serif",
                }}
                btlLbl="View more details"
                cardDataStyle="cardStyle3"
                to="/Herculas_Mcu_launchpad"
              >
                <span>
                  Specialized with dual ARM® Cortex®-R lock-step cores and
                  safety features that are ideal for functional safety
                  applications
                </span>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <Card
                title="MSP430 2.4-GHz
              "
                img={MSP_430}
                style={{
                  fontSize: "large",
                  fontFamily: "Raleway, sans-serif",
                }}
                btlLbl="View more details"
                cardDataStyle="cardStyle3"
                to="/Msp_430"
              >
                <span>
                  The eZ430-RF2500 is a complete wireless development tool for
                  the MSP430 and CC2500 that includes all the hardware and
                  software required to develop an entire wireless project with
                  the MSP430 in a convenient USB stick.
                </span>
              </Card>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <Card
                title="RSLK
              "
                img={RSLK}
                style={{
                  fontSize: "large",
                  fontFamily: "Raleway, sans-serif",
                }}
                btlLbl="View more details"
                cardDataStyle="cardStyle3"
                to="/Rslk"
              >
                <span>
                  The TI Robotics Systems Learning Kit (TI-RSLK) is a low-cost
                  robotics kit and classroom curriculum, which provide students
                  with a deeper understanding of how electronic system designs
                  work. The TI Robotics System Learning Kit
                </span>
              </Card>
            </div>
          </div>{" "}
          {/* content end */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Module;
