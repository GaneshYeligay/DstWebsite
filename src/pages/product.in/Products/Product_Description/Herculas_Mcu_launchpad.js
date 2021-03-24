import React from "react";

import images from "../../../../dist/img/Product-parterns/ti/herculas_launchpad.png";
import images1 from "../../../../dist/img/Product-parterns/ti/herculas_launchpad1.png";
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
      <Title title="HerculesT MCU LaunchPads" />
      <div className="HerculesBreadcrumbPosition">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/prodcts-parterns">Product Partners</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/Ti">Texas Instruments</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <a href="/">Hercules MCU LaunchPads</a>
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
                <h3>LAUNCHXL-TMS57004 /LAUNCHXL-RM42</h3>
                <ul className="clearfix">
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    ARM Cortex-R4 32-bit lock step cores MCU for safetycritical
                    applications.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Features Hercules TMS570 series MCU designed specifically
                    for safety-critical automotive and transportation
                    applications or RM4 Series MCU designed specifically for
                    safety-critical medical and industrial applications.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    MCU features integrated safety features to simplify SIL-3
                    (TMS570 series: SIL-3 and ASIL D) applications.
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
                    ARM Cortex-R4 32-bit lock step cores MCU for safetycritical
                    applications.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Features Hercules TMS570 series MCU designed specifically
                    for safety-critical automotive and transportation
                    applications or RM4 Series MCU designed specifically for
                    safety-critical medical and industrial applications.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    MCU features integrated safety features to simplify SIL-3
                    (TMS570 Series: SIL-3 and ASIL D) applications.
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
                      LAUNCHXL-TMS57004 / LAUNCHXL-RM42
                    </th>
                    <th className="text-center" scope="col">
                      LAUNCHXL2-TMS57012 / LAUNCHXL2-RM46
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MCU</td>
                    <td>TMS570LS0432 / RM42L432</td>
                    <td>TMS320F28069MPZT</td>
                  </tr>
                  <tr>
                    <td>Speed</td>
                    <td>Up to 100 MHz</td>
                    <td>Up to 16 MHz</td>
                  </tr>
                  <tr>
                    <td>Flash</td>
                    <td>384 kB ECC</td>
                    <td>64 kB FRAM</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>32 kB ECC</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>EEPROM</td>
                    <td>16 kB ECC Flash for EEPROM emulation</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>Timers</td>
                    <td>
                      19-pin programmable High-End Timer (N2HET),Enhanced
                      Quadrature Encoder (eQEP),Pulse Module
                    </td>
                    <td>2 N2HET, 2 eQEP</td>
                  </tr>
                  <tr>
                    <td>Serial communication</td>
                    <td>SPI, I2C, UART</td>
                    <td>2 SPI, I2C, 2 UARTs, CAN</td>
                  </tr>
                  <tr>
                    <td>ADC channels</td>
                    <td>12-bit, 13 channels</td>
                    <td>12-bit, 16 channels</td>
                  </tr>
                  <tr>
                    <td>BoosterPack pins</td>
                    <td>40</td>
                    <td>2 x 40</td>
                  </tr>
                  <tr>
                    <td>Energia support</td>
                    <td>Yes</td>
                    <td>No</td>
                  </tr>

                  <tr>
                    <td>Extra features</td>
                    <td>InstaSPIN™-FOC</td>
                    <td>High-resolution PWM</td>
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
