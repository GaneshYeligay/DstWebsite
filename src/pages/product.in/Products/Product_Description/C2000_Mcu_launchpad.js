import React from "react";

import images from "../../../../dist/img/Product-parterns/ti/LAUNCHXL-F28027F.jpg";

import images1 from "../../../../dist/img/Product-parterns/ti/LAUNCHXL-F28069M.jpg";
import images2 from "../../../../dist/img/Product-parterns/ti/LAUNCHXL-F28377S.jpg";
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
      <Title title="C2000T MCU LaunchPads" />
      <div className="C2000TBreadcrumbPosition">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/prodcts-parterns">Product Partners</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/Ti">Texas Instruments</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <a href="/">C2000T MCU LaunchPads</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="container-fluid page-body product-desc ">
        <div className="container sdp-body" style={containerBody}>
          <div className="containerGyapBreadcrumb"></div>

          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="about-col-three">
                <h3>LAUNCHXL-F28027F</h3>
                <ul className="clearfix">
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Best-suited for real-time digital control applications.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Built-in electrically isolated JTAG emulator.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Pre-loaded InstaSPIN-FOC Library in ROM.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Pair with the DRV8301 BoosterPack to spin 3-phase motors.
                  </li>
                </ul>
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
                <h3>LAUNCHXL-F28069M</h3>
                <ul className="clearfix">
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Best-suited for real-time digital control applications.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Built-in electrically isolated JTAG emulator.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Pre-loaded InstaSPIN-MOTION and InstaSPIN-FOC Library in
                    ROM.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Easily create complex motion profiles using SpinTAC
                    software.
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
                <h3>LAUNCHXL-F28377S</h3>
                <ul className="clearfix">
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Best suited for real-time digital control applications.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Highest performance Delfino™ 32-bit MCU.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Access to a wide range of analog and control peripherals
                    such as DACs,PWMs, eCAPs, eQEPs, sigma-delta and others.
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

          <br />
          <br />
          <div className="col-md-12">
            <h3>DIFFERENT MODELS</h3>
            <div className="table-responsive">
              <table className="table table-striped  text-center">
                <thead className="thead-dark">
                  <tr>
                    <th className="text-center" scope="col">
                      Features
                    </th>
                    <th className="text-center" scope="col">
                      LAUNCHXL-F28027F
                    </th>
                    <th className="text-center" scope="col">
                      LAUNCHXL-F28069M
                    </th>
                    <th className="text-center" scope="col">
                      LAUNCHXL-F28377S
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MCU</td>
                    <td>TMS320F28027F</td>
                    <td>TMS320F28069MPZT</td>
                    <td>TMS320F28377SPZPT</td>
                  </tr>
                  <tr>
                    <td>Speed</td>
                    <td>60 MHz</td>
                    <td>Up to 16 MHz</td>
                    <td>Up to 16 MHz</td>
                  </tr>
                  <tr>
                    <td>Non-volatile memory</td>
                    <td>64 kB</td>
                    <td>64 kB FRAM</td>
                    <td>128 kB FRAM</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>10 kB</td>
                    <td>N/A</td>
                    <td>2 kB</td>
                  </tr>
                  <tr>
                    <td>EEPROM</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>Timers</td>
                    <td>3x 32-bit</td>
                    <td>3x 32-bit</td>
                    <td>3x 32-bit</td>
                  </tr>
                  <tr>
                    <td>Serial communication</td>
                    <td>SPI, I2C, UART</td>
                    <td>2 SPI, I2C, 2 UARTs, CAN</td>
                    <td>3 SPI, 2 I2C, 4 UARTs,2 McBSPs, 2 CAN, USB</td>
                  </tr>
                  <tr>
                    <td>ADC channels</td>
                    <td>12-bit, 13 channels</td>
                    <td>12-bit, 16 channels</td>
                    <td>16-bit, 12 channels</td>
                  </tr>
                  <tr>
                    <td>BoosterPack pins</td>
                    <td>40</td>
                    <td>2 x 40</td>
                    <td>2 x 40</td>
                  </tr>
                  <tr>
                    <td>Energia support</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>Extra features</td>
                    <td>InstaSPIN™-FOC</td>
                    <td>High-resolution PWM</td>
                    <td>USB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Module;
