import React from "react";

import images from "../../../../dist/img/Product-parterns/ti/MSP430-2.png";
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
      <Title title="MSP430 2.4-GHz" />
      <div className="MSP430BreadcrumbPosition">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/prodcts-parterns">Product Partners</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/Ti">Texas Instruments</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <a href="/">MSP430</a>
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
                  The eZ430-RF2500 is a complete wireless development tool for
                  the MSP430 and CC2500 that includes all the hardware and
                  software required to develop an entire wireless project with
                  the MSP430 in a convenient USB stick. The tool includes a
                  USB-powered emulator to program and debug your application
                  in-system and two 2.4-GHz wireless target boards featuring the
                  highly integrated MSP430F2274 ultra-low-power MCU. Projects
                  may be developed and instantly deployed using the included
                  battery expansion board and AAA batteries.
                </p>
                <p className="text-justify">
                  All the required software is included such as a complete
                  Integrated Development Environment and SimpliciTI, a propriety
                  low-power star network stack, enabling robust wireless
                  networks out of the box.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="details-col">
                <img src={images} className="lpkfImage" alt="lpkf"></img>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-12">
              <div className="details-col">
                <p className="text-justify mb-md">
                  The eZ430-RF2500 uses the MSP430F22x4 which combines 16-MIPS
                  performance with a 200-ksps 10-bit ADC and 2 op-amps and is
                  paired with the CC2500 multi-channel RF transceiver designed
                  for low-power wireless applications.
                </p>
                <p className="text-justify mb-md">
                  The eZ430-RF emulator interface may be used with any Spy
                  Bi-Wire enabled MSP430, such as the F22xx and F20xx series,
                  and is fully compatible with the eZ430-F2013 and eZ430-T2012
                  target boards. The emulator interface can be used to download
                  and debug your target applications, and can transmit serial
                  data to your PC while in or out of a debug session.
                </p>
                <p className="text-justify mb-md">
                  The ECCN (Export Control Classification Number) classification
                  for this tool will be the same as the included
                  microcontrollers. To find ECCN information for a
                  microcontroller, see the datasheet for that device.
                </p>
                <p>
                  Any use made of Texas Instruments (TI) classifications,
                  whether it be ECCNs or HTS, is without recourse to TI and at
                  the user's risk. HTS and export classifications are subject to
                  change. Your company, as the exporter of record, is
                  responsible for determining the correct classification of any
                  item at the time of export. Any HTS or export classification
                  by TI is for TI's internal use only and shall not be construed
                  as a representation or warranty regarding the proper export
                  classification nor relied upon to make licensing
                  determinations.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-12">
              <div className="details-col">
                <h3>Features</h3>

                <ul className="clearfix">
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    CC2500 - 2.4 GHz, ISM band multi-channel low power
                    transceiver.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    2 LEDs.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    1 pushbutton.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Supports development with some 2xx Spy Bi-Wire devices
                    (refer to Table 1-1 in MSP430 Hardware Tools User's Guide
                    for complete compatibility list).
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Supports MSP430 Application UART allowing serial
                    communication to PC.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Supports eZ430-T2012 and eZ430-RF2500T target boards.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Removable USB stick enclosure.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    SimpliciTI, low power network stack.
                  </li>
                  <li>
                    <i
                      className="far fa-hand-point-right"
                      aria-hidden="true"
                    ></i>
                    Example wireless sensor network project measuring
                    temperature, voltage and signal strength.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="col-md-12">
            <div className="details-col">
              <h3>What's Included</h3>

              <ul className="clearfix">
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  <a
                    href="http://www.ti.com/lit/zip/slac063"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SLAC063, Code Composer Essentials v3.1 SR1 Core Edition -
                    Free 16KB IDE (Rev. K).
                  </a>
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  <a
                    href="http://www.ti.com/lit/pdf/slau144"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SLAU144, MSP430x2xx Family User's Guide (Rev. J).
                  </a>
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  <a
                    href="http://www.ti.com/lit/zip/slac139"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SLAC139, eZ430-RF2500 Sensor Monitor Demo (Rev. G).
                  </a>
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  <a
                    href="http://www.ti.com/lit/zip/slac050"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SLAC050, IAR Embedded Workbench KickStart (IAR 6.20.1 / WIN)
                    (Rev. BA).
                  </a>
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  <a
                    href="http://www.ti.com/lit/zip/slac227"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SLAU227, eZ430-RF2500 Development Tool User's Guide (Rev.
                    F).
                  </a>
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  MSP430F2274 - 32KB Flash, 1KB RAM, 1 USCI (UART, (2) SPI, I2C,
                  IrDA), 10-bit 200 ksps, 2 Op Amps.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  One AAA battery pack with expansion board (batteries
                  included).
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  One eZ430-RF USB debugging interface.
                </li>
                <li>
                  <i className="far fa-hand-point-right" aria-hidden="true"></i>
                  Two eZ430-RF2500T wireless target boards.
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
