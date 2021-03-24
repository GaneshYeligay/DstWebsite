import React from "react";

import images from "../../../../dist/img/Product-parterns/ti/msp430.jpg";
import images1 from "../../../../dist/img/Product-parterns/ti/mcu_launchpads-2.jpg";
import images2 from "../../../../dist/img/Product-parterns/ti/msp-exp430FR6989.jpg";
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
      <Title title="MSP MCU LaunchPads" />
      <div className="MspLaunchpadBreadcrumbPosition">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/prodcts-parterns">Product Partners</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/Ti">Texas Instruments</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <a href="/">MSP MCU LaunchPads</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="container-fluid page-body product-desc ">
        <div className="container sdp-body" style={containerBody}>
          <div className="containerGyapBreadcrumb"></div>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="about-col-three">
                <h3>MSP-EXP430G2</h3>
                <ul className="clearfix">
                  <li>
                    <i
                      classNane="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Ultra-low power consumption with popular 16-bit MSP430™
                    architecture.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Suited for general-purpose applications.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Easy to learn for beginners.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    PDIP package for easy embedding after programming.
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
                <h3>MSP-EXP430FR5969</h3>
                <ul className="clearfix">
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Lowest power MSP430™ MCU with ultra-low power active and
                    standby operation.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Integrated 64 kB FRAM for fast, nonvolatile memory-writes.
                    True unified memory allows boundary-free access.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Advanced peripheral integrationincluding a 12-bit
                    differential SAR ADC and AES256 accelerator.
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
                <h3>MSP-EXP430FR5969</h3>
                <ul className="clearfix">
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    40-pin BoosterPack header for easy breadboarding /
                    prototyping.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Integrated 128KB FRAM with 8 MBPS in-system writes.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    EnergyTrace™++ technologycombined with 500-nA RTC is
                    idealfor applications requiring the absolute lowest energy.
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
                      MSP-EXP430G2
                    </th>
                    <th className="text-center" scope="col">
                      MSP-EXP430FR5969
                    </th>
                    <th className="text-center" scope="col">
                      MSP-EXP430FR6989
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MCU</td>
                    <td>MSP432P401R</td>
                    <td>MSP430FR5969</td>
                    <td>MSP430FR6989</td>
                  </tr>
                  <tr>
                    <td>Speed</td>
                    <td>Up to 16 MHz</td>
                    <td>Up to 16 MHz</td>
                    <td>Up to 16 MHz</td>
                  </tr>
                  <tr>
                    <td>Non-volatile memory</td>
                    <td>16 kB Flash</td>
                    <td>64 kB FRAM</td>
                    <td>128 kB FRAM</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>512 B</td>
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
                    <td>2 x 16-bit</td>
                    <td>5 x 16-bit</td>
                    <td>5 x 16-bit</td>
                  </tr>
                  <tr>
                    <td>Serial communication</td>
                    <td>I2C, 2 SPI, UART</td>
                    <td>2 I2C, 4 SPI, 2 UARTs</td>
                    <td>I2C, SPI, UART</td>
                  </tr>
                  <tr>
                    <td>ADC channels</td>
                    <td>10-bit, 8 channels</td>
                    <td>12-bit , 16 channels</td>
                    <td>2 kB12-bit , 16 channels</td>
                  </tr>
                  <tr>
                    <td>BoosterPack pins</td>
                    <td>20</td>
                    <td>20</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>Energia support</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Extra features</td>
                    <td>DIP package</td>
                    <td>Super cap</td>
                    <td>LCD controller</td>
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
