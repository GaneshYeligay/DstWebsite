import React from "react";

import images from "./../../../../dist/img/Product-parterns/ti/arm_based1.png";
import images1 from "./../../../../dist/img/Product-parterns/ti/arm_based2.png";
import images2 from "./../../../../dist/img/Product-parterns/ti/arm_based3.jpg";
import images3 from "./../../../../dist/img/Product-parterns/ti/arm_based4.png";
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
      <Title title="ARM®-Based MCUs" />
      <div className="ArmBasedMCUBreadcrumbPosition">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/prodcts-parterns">Product Partners</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/Ti">Texas Instruments</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <a href="/">Arm Based MCus</a>
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
                <h3>SimpleLink™ Wi-Fi®CC3200 LaunchPad</h3>
                <ul className="clearfix">
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Enables quick development of Internet of Things designs with
                    a single-chip low-power Wi-Fi solution (Wi-Fi 802.11b/g/n
                    standards).
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Wi-Fi network processor with integrated TCP/IP stack, HTTP
                    server,and many other Internet protocols.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Power Wi-Fi battery operated designs for more than a year on
                    two AA batteries.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Get started quickly, no Wi-Fi experience needed.
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
                <h3>EK-TM4C1294XL</h3>
                <ul className="clearfix">
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    120-MHz ARM Cortex-M4 with floating-point (Digital Signal
                    Control CPU).
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Integrated Ethernet(MAC+PHY).
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Two BoosterPackXL interfaces (usingstackable headers).
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
                <h3>EK-TM4C123GXL</h3>
                <ul className="clearfix">
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    ARM-based TI MCU withhigh CPU frequency andhorsepower.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Highly-integrated with various serial communications
                    modules.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Best suited for general purpose applications.
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
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="about-col-three">
                <img src={images3} className="lpkfImage" alt=""></img>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="about-col-three">
                <h3>EK-TM4C129EXL</h3>
                <ul className="clearfix">
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    High-performance 120-MHzARM Cortex-M4F MCU.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Hardware crypto accelerators.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Integrated Ethernet (MAC+PHY).
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Two BoosterPack XL interfaces (using stackable headers).
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Secured cloud connection demonstration with TI RTOS,WolfSSL
                    and Exosite.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <br />

          <div className="col-md-12">
            <h3>DIFFERENT MODELS</h3>
            <div className="table-responsive">
              <table className="table table-striped text-center">
                <thead className="thead-dark">
                  <tr>
                    <th className="text-center" scope="col">
                      Feature CC3200
                    </th>
                    <th className="text-center" scope="col">
                      CC3200-LAUNCHXL
                    </th>
                    <th className="text-center" scope="col">
                      EK-TM4C1294XL
                    </th>
                    <th className="text-center" scope="col">
                      EK-TM4C129EXL
                    </th>
                    <th className="text-center" scope="col">
                      EK-TM4C129EXL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MCU</td>
                    <td>CC3200</td>
                    <td>TM4C1294NCPDT</td>
                    <td>TM4C123GH6PM</td>
                    <td>TM4C129ENCPDT</td>
                  </tr>
                  <tr>
                    <td>Speed</td>
                    <td>80 MHz</td>
                    <td>120 MHz</td>
                    <td>80 MHz</td>
                    <td>120 MHz</td>
                  </tr>
                  <tr>
                    <td>Flash</td>
                    <td>1 MB (external)</td>
                    <td>1 MB</td>
                    <td>256 kB</td>
                    <td>1 MB</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>Up to 256 kB</td>
                    <td>256 kB</td>
                    <td>32 kB</td>
                    <td>256 kB</td>
                  </tr>
                  <tr>
                    <td>EEPROM</td>
                    <td>N/A</td>
                    <td>6 KB</td>
                    <td>2 KB</td>
                    <td>6 KB</td>
                  </tr>
                  <tr>
                    <td>Timers</td>
                    <td>4x 16-bit</td>
                    <td>8x 32-bit</td>
                    <td>6x 32-bit, 6x 64-bit</td>
                    <td>8x 32-bit</td>
                  </tr>
                  <tr>
                    <td>Serial communication</td>
                    <td>SPI, 2 UARTs, 2 I2S, I2C</td>
                    <td>10 I2C, 8 UARTs, 4 QSPI,2 CAN, EPI, USB</td>
                    <td>6 I2C, 4 SPI, 8 UARTs,2 CAN, USB</td>
                    <td>10 I2C, 8 UARTs, 4 QSPI,2 CAN, EPI, USB</td>
                  </tr>
                  <tr>
                    <td>ADC channels</td>
                    <td>12-bit, 4 channels</td>
                    <td>12-bit, 20 channels</td>
                    <td>12-bit, 12channels</td>
                    <td>12-bit, 20 channels</td>
                  </tr>
                  <tr>
                    <td>BoosterPack pins</td>
                    <td>40</td>
                    <td>2 x 40</td>
                    <td>40</td>
                    <td>2 x 40</td>
                  </tr>
                  <tr>
                    <td>Energia support</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Connectivity options</td>
                    <td>Wi-Fi</td>
                    <td>Ethernet, USB, CAN</td>
                    <td>USB, CAN</td>
                    <td>Ethernet, USB, CAN</td>
                  </tr>
                  <tr>
                    <td>Extra features</td>
                    <td>SmartConfig™</td>
                    <td>Cloud support</td>
                    <td>RGB LED</td>
                    <td>Crypto accelerators</td>
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
