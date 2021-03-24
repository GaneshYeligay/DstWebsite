import React from "react";

import dm3000_series_1 from "../../../../dist/img/Product-parterns/ragol/dm3000_series_1.png";
import dm3000_series_2 from "../../../../dist/img/Product-parterns/ragol/dm3000_series_2.png";
// import ContactFloatingBtn from "../../../../../src/common/contact-floating-button/index";
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
      <Title title="MULTIMETERS & DATA ACQUISITION" />

      <div className="container-fluid page-body product-desc">
        <div className="multiMeterBreadcrumbPosition">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/prodcts-parterns">Product Partners</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="/Rigol">Rigol</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              <a href="/">Digital Multimeters</a>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="container sdp-body" style={containerBody}>
          {/*------Content start------ */}
          {/*------start row ------ */}
          <br />
          <div className="row">
            <div className="DM3000Image col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <img
                src={dm3000_series_1}
                className="img-thumbnail"
                alt="DM3000 SERIES | DIGITAL MULTIMETERS"
              />
            </div>
            <div className="DM3000Data col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
              <div class="details-col">
                <h3>DM3000 SERIES | DIGITAL MULTIMETERS</h3>
                <p class="text-justify">
                  The DM3000 Series DMMs give reliable, cost effective, full DMM
                  capabilities measuring DCV, ACV, DCI, ACI, Resistance (2 &amp;
                  4 Wire), Capacitance, Diode Test, Frequency, and Temperature.
                  These DMMs are designed for simple and efficient bench top
                  use, but include software options for datalogging and remote
                  programming from almost any interface. The DM3000 can fit any
                  DMM application with speed, accuracy, reliability, and
                  efficiency well beyond its price.
                </p>
              </div>
            </div>
          </div>
          <br />
          {/* second column */}
          <div className="row">
            <div className="col-md-12">
              <table
                class="table table-bordered  wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".0s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0s",
                  animationName: "fadeInLeft",
                }}
              >
                <thead class="thead-color">
                  <tr>
                    <th scope="col">Product Feature</th>
                    <th scope="col">Customer Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      High accuracy measurements with up to 6.5 digits of
                      resolution
                    </td>
                    <td>Ultimate con?dence in your measurements</td>
                  </tr>
                  <tr>
                    <td>Advanced display features</td>
                    <td>
                      Visualize changes in signals more quickly with histogram
                      and trend displays that enable on screen comparison of
                      results on some models
                    </td>
                  </tr>
                  <tr>
                    <td>Advanced connectivity with USB &amp; LXI</td>
                    <td>
                      Backup measurements by Saving history data to a USB drive
                      or connect to a PC via USB, GPIB, or Ethernet (DM3058E is
                      USB only)
                    </td>
                  </tr>
                  <tr>
                    <td>Easy to use Datalogging software</td>
                    <td>
                      Optional datalogging software (5.5 digit models) for
                      collecting and charting data to the PC over time
                    </td>
                  </tr>
                </tbody>
              </table>{" "}
            </div>
          </div>
          {/* next ele */}
          <section class="table-style-three pb-md">
            <div class="row">
              <div
                class="DM3000MdTb1 col-md-offset-3 col-md-6 col-sm-12 wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".0s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0s",
                  animationName: "fadeInRight",
                }}
              >
                <h3>DIFFERENT MODELS</h3>
                <div class="table-responsive">
                  <table class="table table-striped table-bordered text-center">
                    <thead class="thead-dark">
                      <tr>
                        <th class="text-center" scope="col">
                          Model
                        </th>
                        <th class="text-center" scope="col">
                          Number of Digits
                        </th>
                        <th class="text-center" scope="col">
                          Noise Floor
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>DM3058E</td>
                        <td>5.5 digits</td>
                        <td>8 uV</td>
                      </tr>
                      <tr>
                        <td>DM3058</td>
                        <td>5.5 digits</td>
                        <td>8 uV</td>
                      </tr>
                      <tr>
                        <td>DM3068</td>
                        <td>6.5 digits</td>
                        <td>5 uV</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <hr />
          {/* next ele */}
          <br />
          <div class="row pt-lg">
            <div
              class="DM3000S2Image col-md-4 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".0s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0s",
                animationName: "fadeInLeft",
              }}
            >
              <div class="details-col">
                <img
                  src={dm3000_series_2}
                  class="img-thumbnail"
                  alt="M300 SYSTEM SERIES   |  DATA ACQUISITION MAINFRAMES"
                />
              </div>
            </div>
            <div
              class="M300SData col-md-8 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".0s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0s",
                animationName: "fadeInRight",
              }}
            >
              <div class="details-col">
                <h3>M300 SYSTEM SERIES | DATA ACQUISITION MAINFRAMES</h3>
                <p class="text-justify">
                  Rigol's M300 Series data acquisition and switch system
                  provides accurate, repeatable measurements with industry
                  leading total system cost optimized for general purpose
                  temperature, resistance, and voltage scanning with a breadth
                  of modules to handle all of your DAQ system requirements. A
                  single mainframe can scan and measure up to 128 fully
                  differential measurements in one instrument. Automatically log
                  data to a USB stick attached to the system or control up to 5
                  mainframes from a PC with a single instance of the Ultra
                  Acquire software.
                </p>
              </div>
            </div>
          </div>
          <br />
          {/* next content */}
          <div className="row">
            <div class="col-md-12">
              <table
                class="table table-bordered wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".0s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0s",
                  animationName: "fadeInLeft",
                }}
              >
                <thead class="thead-color">
                  <tr>
                    <th scope="col">Product Feature</th>
                    <th scope="col">Customer Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {" "}
                      DMM scanning of up to 256 channels in a single mainframe
                    </td>
                    <td>
                      Fast acquisition of voltage, resistance, temperature and
                      more for whatever sensors or signals you need to measure
                    </td>
                  </tr>
                  <tr>
                    <td> Log Readings directly to USB drive</td>
                    <td>
                      Never run out of memory and never lose data with per scan
                      data archiving to a USB flash drive.
                    </td>
                  </tr>
                  <tr>
                    <td> 8 module configurations available</td>
                    <td>
                      Create flexible systems customized for your requirements.
                      Simplify setup and debugging with the correct modules.
                    </td>
                  </tr>
                  <tr>
                    <td> Easy to use large format display</td>
                    <td>
                      Visualize switch diagrams, scan modes, and datalogging
                      charts all right on the display. Complete testing without
                      a PC from the lab to the field.
                    </td>
                  </tr>
                  <tr>
                    <td> UltraAcquire data logging software</td>
                    <td>
                      Free data logging software included for quick and easy
                      data transfer to a PC or complex scan configurations.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* next content */}
          <section class="table-style-three pb-md">
            <div class="row">
              <div
                class="M300SMd1Tb1 col-md-offset-3 col-md-6 col-sm-12 wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".0s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0s",
                  animationName: "fadeInRight",
                }}
              >
                <h3>DIFFERENT MODELS</h3>
                <div class="table-responsive">
                  <table class="table table-striped table-bordered text-center">
                    <thead class="thead-dark">
                      <tr>
                        <th class="text-center" scope="col">
                          Model
                        </th>
                        <th class="text-center" scope="col">
                          Number of Slots
                        </th>
                        <th class="text-center" scope="col">
                          Included Module(s)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>M300</td>
                        <td>5 slots</td>
                        <td>NA</td>
                      </tr>
                      <tr>
                        <td>M301</td>
                        <td>5 (DMM uses one of these slots) slots</td>
                        <td>MC3065 DMM Module</td>
                      </tr>
                      <tr>
                        <td>M302</td>
                        <td>
                          5 (DMM and MC3120 use one of these slots each) slots
                        </td>
                        <td>MC3065 DMM and MC3120 Module</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>{" "}
          {/* next content */}
          <hr />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Module;
