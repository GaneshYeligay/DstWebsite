import React from "react";

import dsg800 from "../../../../dist/img/Product-parterns/ragol/dsg800_series-1.png";
import DSG3000 from "../../../../dist/img/Product-parterns/ragol/dsg801.png";
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
      <Title title="RF Signal Generators" />

      <div className="container-fluid page-body product-desc">
        <div className="RFSignalBreadcrumbPosition">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/prodcts-parterns">Product Partners</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="/Rigol">Rigol</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              <a href="/">RF Signal Generators</a>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="container sdp-body" style={containerBody}>
          {/*------Content start------ */}
          {/*------start row ------ */}
          <br />
          <div className="row">
            <div className="DSG800Image col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <img
                src={dsg800}
                className="img-thumbnail"
                alt="DL3000 Series   |  DC Electronic Loads"
              />
            </div>
            <div className="DSG8000Data col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
              <div class="details-col">
                <h3>DSG800 SERIES | RF SIGNAL GENERATOR</h3>
                <p class="text-justify">
                  The DSG800 series covers output frequencies from 9 kHz to 3
                  GHz. The instruments provide maximum output power up to +20
                  dBm and low SSB phase noise -115 dBc/Hz, amplitude accuracy of
                  +/- 0.5 dB, and frequency resolution of 0.01 Hz at any
                  frequency. An oven-controlled crystal oscillator time-base
                  option provides &lt; 5 ppb temperature stability and &lt; 30
                  ppb/year aging stability, the most accurate and stable
                  timebase available in this class. For IoT and RF applications
                  from design to debug the DSG800 series provides uncompromised
                  RF signal generation capabilities at an unprecedented value.
                </p>
              </div>{" "}
            </div>
          </div>
          {/* second column */}
          <div className="row">
            <div className="col-md-12">
              <table class="table table-bordered ">
                <thead class="thead-color">
                  <tr>
                    <th scope="col">Product Feature</th>
                    <th scope="col">Customer Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>High Power Output up to +20 dBm</td>
                    <td>
                      Simplifies high power setups. No external amplifier
                      needed.
                    </td>
                  </tr>
                  <tr>
                    <td> Advanced Modulations</td>
                    <td>
                      Engineers can generate more complex signals without
                      additional hardware using the modulation schemes in the
                      DSG800.
                    </td>
                  </tr>
                  <tr>
                    <td> High Accuracy timebase option</td>
                    <td>
                      Your source is only as good as your reference. Stable and
                      accurate clock provides basis for high performance RF
                      output.
                    </td>
                  </tr>
                </tbody>
              </table>{" "}
            </div>
          </div>
          {/* next ele */}
          <section class="table-style-three pb-md">
            <div class="row">
              <div class="DSG800Md1Tb1 col-md-offset-2 col-md-8 col-sm-12 ">
                <h3>DIFFERENT MODELS</h3>
                <div class="table-responsive">
                  <table class="table table-striped table-bordered  text-center">
                    <thead class="thead-dark">
                      <tr>
                        <th class="text-center" scope="col">
                          Model
                        </th>
                        <th class="text-center" scope="col">
                          Max. Frequency
                        </th>
                        <th class="text-center" scope="col">
                          Phase Noise
                        </th>
                        <th class="text-center" scope="col">
                          Amplitude Accuracy (typical)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>DSG815</td>
                        <td>1.5 GHz</td>
                        <td>-105 dBc/Hz</td>
                        <td>0.5 dB</td>
                      </tr>
                      <tr>
                        <td>DSG830</td>
                        <td>3 GHz</td>
                        <td>-105 dBc/Hz</td>
                        <td>0.5 dB</td>
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
            <div class="DSG3000Image col-md-4 wow fadeInLeft">
              <div class="details-col">
                <img
                  src={DSG3000}
                  class="img-thumbnail"
                  alt="DP800 Series   |  Power Supplies"
                />
              </div>
            </div>
            <div
              class="DSG3000Data col-md-8 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".0s"
            >
              <div class="details-col">
                <h3>DSG3000 SERIES | RF SIGNAL GENERATOR</h3>
                <p class="text-justify">
                  The DSG3000 Series offers standard AM/FM/øM analog modulation,
                  as well as options for I/Q modulation and I/Q baseband output.
                  The DSG3060 has a maximum frequency of 6 GHz. Featuring a high
                  signal purity with phase noise measuring -110dBc/Hz@20kHz
                  (typical) and a wide output range of -130dBm to +25dBm, the
                  DSG3000 RF signal generator has standard pulse modulation with
                  an on/off ratio of up to 80dB, with optional pulse train
                  generator available. The DSG3000 series also has an amplitude
                  accuracy of 0.5dB (typical).
                </p>
              </div>
            </div>
          </div>
          <br />
          {/* next content */}
          <div className="row">
            <div class="col-md-12">
              <table class="table table-bordered ">
                <thead class="thead-color">
                  <tr>
                    <th scope="col">Product Feature</th>
                    <th scope="col">Customer Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>High Power Output up to +25 dBm</td>
                    <td>
                      Simplifies high power setups. No external amplifier
                      needed.
                    </td>
                  </tr>
                  <tr>
                    <td>Advanced Modulations</td>
                    <td>
                      Engineers can generate more complex signals without
                      additional hardware using the modulation schemes in the
                      DSG3000.
                    </td>
                  </tr>
                  <tr>
                    <td> IQ Modulation</td>
                    <td>
                      Provides both internal and external IQ modulation
                      capabilities. Accepts User Defined I/Q data. Minimizes
                      workbench footprint while maximizing functionality.
                    </td>
                  </tr>
                  <tr>
                    <td>Power Sensor Readback Option</td>
                    <td>
                      Simplifies test setup. The user can directly read data
                      from popular RF power sensors via a simple USB connection.
                    </td>
                  </tr>
                  <tr>
                    <td>High Accuracy timebase option</td>
                    <td>
                      Your source is only as good as your reference. Stable and
                      accurate clock provides basis for high performance RF
                      output.
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
                class="DSG3000Md1Tb1 col-md-offset-2 col-md-8 col-sm-12 wow fadeInRight"
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
                          Max. Frequency
                        </th>
                        <th class="text-center" scope="col">
                          Phase Noise
                        </th>
                        <th class="text-center" scope="col">
                          Amplitude Accuracy (typical)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>DSG3030</td>
                        <td>3 GHz</td>
                        <td>&lt;-110 dBc/Hz</td>
                        <td>&lt;0.5 dB</td>
                      </tr>
                      <tr>
                        <td>DSG3060</td>
                        <td>6 GHz</td>
                        <td>&lt;-110 dBc/Hz</td>
                        <td>&lt;0.5 dB</td>
                      </tr>
                      <tr>
                        <td>DSG3030 with IQ</td>
                        <td>3 GHz</td>
                        <td>&lt;-110 dBc/Hz</td>
                        <td>&lt;0.5 dB</td>
                      </tr>
                      <tr>
                        <td>DSG3060 with IQ</td>
                        <td>6 GHz</td>
                        <td>&lt;-110 dBc/Hz</td>
                        <td>&lt;0.5 dB</td>
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
