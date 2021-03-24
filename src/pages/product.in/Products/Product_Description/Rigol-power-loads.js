import React from "react";

import dl3000_series from "../../../../dist/img/Product-parterns/ragol/dl3000_series-1.jpg";
import dp700_series from "../../../../dist/img/Product-parterns/ragol/dp700_series-1.jpg";
import dp800_series from "../../../../dist/img/Product-parterns/ragol/dp800_series-1.jpg";
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
      <Title title="DC POWER & LOADS" />

      <div className="container-fluid page-body product-desc">
        {/* Breadcrumbs for DC-POWER-&-LOADS ---------> */}
        <div className="DCPowerBreadcrumbPosition">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/prodcts-parterns">Product Partners</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="/Rigol">Rigol</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              <a href="/">DC-POWER-&-LOADS</a>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        {/* Breadcrumbs ends-------------> */}
        <div className="container sdp-body" style={containerBody}>
          {/*------Content start------ */}
          {/*------start row ------ */}
          <div className="containerSpeedIf"></div>
          <div className="row">
            <div className="imageDL3000Padding col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <img
                src={dl3000_series}
                className="img-thumbnail"
                alt="DL3000 Series   |  DC Electronic Loads"
              />
            </div>
            <div className="DL3000Data col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
              <div className="details-col">
                <h3>DL3000 Series | DC Electronic Loads</h3>
                <p className="text-justify">
                  The DL3000 is a cost-effective programmable DC electronic load
                  with performance specifications that rival any instrument in
                  its class. With a user-friendly interface including graphical
                  charting, the DL3000 series provides various interfaces for
                  remote communication to meet your diversified test
                  requirements. Test power systems and batteries with
                  configurable static, transient, and advanced application
                  modes.
                </p>
              </div>
            </div>
          </div>
          {/* second column */}
          <div className="containerBreak"></div>
          <div className="row">
            <div className="col-md-12">
              <table className="table table-bordered  ">
                <thead className="thead-color">
                  <tr>
                    <th scope="col">Product Feature</th>
                    <th scope="col">Customer Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dynamic Load Performance and Visualization</td>
                    <td>
                      Learn more with flexible load conditions and on screen
                      waveform graphing
                    </td>
                  </tr>
                  <tr>
                    <td>Up to 5 A/us slew rate and 30 kHz dynamic loading</td>
                    <td>
                      Test further for performance and reliability with the
                      fastest frequency and slew rate in its class
                    </td>
                  </tr>
                  <tr>
                    <td>
                      High resolution and accuracy on voltage and current load
                      conditions
                    </td>
                    <td>
                      Test confidently with impressive voltage and current
                      accuracy, noise, and resolution
                    </td>
                  </tr>
                  <tr>
                    <td>
                      3 Built in application setups for battery testing or
                      Current or Power optimization
                    </td>
                    <td>
                      Quickly characterize your device with automated battery
                      and power step tests without any programming
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Free UltraLoad Software for remote operation and
                      monitoring
                    </td>
                    <td>
                      Full Control and log results from a PC over USB or
                      Ethernet for efficiency and ease of use
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* next ele */}
          <div className="containerBreak"></div>

          <section class="table-style-three pb-md">
            <div class="row">
              <div class="DL3000MdlTbl col-md-offset-2 col-md-8 col-sm-12 ">
                <h3>DIFFERENT MODELS</h3>
                <div class="table-responsive">
                  <table class="table table-striped table-bordered  text-center">
                    <thead class="thead-dark">
                      <tr>
                        <th class="text-center" scope="col">
                          Model
                        </th>
                        <th class="text-center" scope="col">
                          Total Power
                        </th>
                        <th class="text-center" scope="col">
                          Max Voltage
                        </th>
                        <th class="text-center" scope="col">
                          Max Current
                        </th>
                        <th class="text-center" scope="col">
                          Channels
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>DL3021</td>
                        <td>200 Watts</td>
                        <td>150 Volts</td>
                        <td>40 Amps</td>
                        <td>1 channel(s)</td>
                      </tr>
                      <tr>
                        <td>DL3021A</td>
                        <td>200 Watts</td>
                        <td>150 Volts</td>
                        <td>40 Amps</td>
                        <td>1 channel(s)</td>
                      </tr>
                      <tr>
                        <td>DL3031</td>
                        <td>350 Watts</td>
                        <td>150 Volts</td>
                        <td>60 Amps</td>
                        <td>1 channel(s)</td>
                      </tr>
                      <tr>
                        <td>DL3031A</td>
                        <td>350 Watts</td>
                        <td>150 Volts</td>
                        <td>60 Amps</td>
                        <td>1 channel(s)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <hr />
          {/* next ele */}
          <div className="containerSpeedIf"></div>

          <div class="row pt-lg">
            <div class="imageDP700Padding col-md-4 wow fadeInLeft">
              <div class="  details-col">
                <img
                  src={dp700_series}
                  class="img-thumbnail"
                  alt="DP700 Series   |  Power Supplies"
                />
              </div>
            </div>
            <div
              class="DP700Data col-md-8 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".0s"
            >
              <div class="details-col">
                <h3>DP700 Series | Power Supplies</h3>
                <p class="text-justify">
                  RIGOL's DP700 Series power supply is an affordable,
                  programmable linear DC power supply for benchtop applications.
                  With quality performance specifications, reliable output, and
                  a small footprint, the DP700 Series provides incredible
                  benchtop value. The DP700s also support options including
                  timing output, trigger function, and high resolution.
                </p>
              </div>
            </div>
          </div>

          {/* next content */}

          <div className="containerBreak"></div>
          <div className=" col-md-12">
            <table className="table table-bordered ">
              <thead className="thead-color">
                <tr>
                  <th scope="col">Product Feature</th>
                  <th scope="col">Customer Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Low ripple and noise: DP711: &lt;500 ?Vrms/3 mVpp; &lt;2
                    mArms DP712: &lt;500 ?Vrms/4 mVpp; &lt;2 mArms
                  </td>
                  <td>
                    Less noise delivered to your device means easier environment
                    for testing and debugging functions and PreCompliance
                  </td>
                </tr>
                <tr>
                  <td> Fast transient response time: &lt;50 us</td>
                  <td>
                    Fast analog edges introduces fewer variables into your
                    testing during startup and shutdown procedures
                  </td>
                </tr>
                <tr>
                  <td> OVP/OCP/OTP protection</td>
                  <td>
                    Protect your investment in your devices with fast acting
                    protection for unwanted voltage and current conditions
                  </td>
                </tr>
                <tr>
                  <td>Built in V, A, W measurements</td>
                  <td>
                    Live front panel feedback of voltage, current, and power
                    means more confidence as you are running tests. Data
                    available for analysis of issues that need another look
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* next content */}

          <div className="containerBreak"></div>

          <div class="DP700MdlTbl col-md-offset-2 col-md-8 col-sm-12 ">
            <h3>DIFFERENT MODELS</h3>
            <div class="table-responsive">
              <table class="table table-striped table-bordered text-center">
                <thead class="thead-dark">
                  <tr>
                    <th class="text-center" scope="col">
                      Model
                    </th>
                    <th class="text-center" scope="col">
                      Total Power
                    </th>
                    <th class="text-center" scope="col">
                      Max Voltage
                    </th>
                    <th class="text-center" scope="col">
                      Max Current
                    </th>
                    <th class="text-center" scope="col">
                      Channels
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>DP711</td>
                    <td>150 Watts</td>
                    <td>30 Volts</td>
                    <td>5 Amps</td>
                    <td>1 channel(s)</td>
                  </tr>
                  <tr>
                    <td>DP712</td>
                    <td>200 Watts</td>
                    <td>50 Volts</td>
                    <td>3 Amps</td>
                    <td>1 channel(s)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* next content */}
          <hr />
          <div className="containerBreak"></div>

          <div class="imageDP800Padding col-md-4 wow fadeInLeft">
            <div class=" details-col">
              <img
                src={dp800_series}
                class="img-thumbnail"
                alt="DP800 Series   |  Power Supplies"
              />
            </div>
          </div>
          <div class="DP800Data col-md-8 wow fadeInRight">
            <div class="details-col">
              <h3>DP800 Series | Power Supplies</h3>
              <p class="text-justify">
                The DP800 Series Power Supplies combine the ability to source,
                analyze, and coordinate over time on a powerful platform. The
                DP800 Series is a family of linear power supplies systems with
                1, 2, or 3 outputs and 140 to 200 Watts in total. With one
                channel isolated users can reconfigure instruments into any
                number of systems or applications. Built in V, A, and W
                measurements make power monitoring easy, but additional wave
                tracking, timing, and analysis features in the advanced "A"
                models means there are even more ways to use the instruments.
                Digital triggering between instruments also makes it possible to
                reliably combine and connect supplies together. Intuitive to use
                for everything from education labs to the R&amp;D bench, the
                DP800 family of power supplies provide incredible value for any
                application. Select the value models for best price performance
                or upgrade to the "A" model to improve resolution and add
                advanced monitoring, triggering, and programming capabilities.
              </p>
            </div>
          </div>
          <div className="containerBreak"></div>

          {/* next content */}
          <div class="col-md-12">
            <table class="table table-bordered  wow fadeInLeft">
              <thead class="thead-color">
                <tr>
                  <th scope="col">Product Feature</th>
                  <th scope="col">Customer Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Low ripple and noise: &lt;350 ?Vrms/3 mVpp; &lt;2 mArms
                  </td>
                  <td>
                    Less noise delivered to your device means easier environment
                    for testing and debugging functions and PreCompliance
                  </td>
                </tr>
                <tr>
                  <td>Fast transient response time: &lt;50 us</td>
                  <td>
                    Fast analog edges introduces fewer variables into your
                    testing during startup and shutdown procedures
                  </td>
                </tr>
                <tr>
                  <td> OVP/OCP/OTP protection</td>
                  <td>
                    Protect your investment in your devices with fast acting
                    protection for unwanted voltage and current conditions
                  </td>
                </tr>
                <tr>
                  <td>Built in V, A, W measurements</td>
                  <td>
                    Live front panel feedback of voltage, current, and power
                    means more confidence as you are running tests. Data
                    available for analysis of issues that need another look
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* next content */}
          <div className="containerBreak"></div>

          <div class="Dp800MdlTbl col-md-offset-2 col-md-8 col-sm-12 ">
            <h3>DIFFERENT MODELS</h3>
            <div class="table-responsive">
              <table class="table table-striped table-bordered text-center">
                <thead class="thead-dark">
                  <tr>
                    <th class="text-center" scope="col">
                      Model
                    </th>
                    <th class="text-center" scope="col">
                      Total Power
                    </th>
                    <th class="text-center" scope="col">
                      Max Voltage
                    </th>
                    <th class="text-center" scope="col">
                      Max Current
                    </th>
                    <th class="text-center" scope="col">
                      Channels
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>DP831</td>
                    <td>160 Watts</td>
                    <td>30 Volts</td>
                    <td>5 Amps</td>
                    <td>3 channel(s)</td>
                  </tr>
                  <tr>
                    <td>DP832</td>
                    <td>195 Watts</td>
                    <td>30 Volts</td>
                    <td>3 Amps</td>
                    <td>3 channel(s)</td>
                  </tr>
                  <tr>
                    <td>DP811</td>
                    <td>200 Watts</td>
                    <td>40 Volts</td>
                    <td>10 Amps</td>
                    <td>1 channel(s)</td>
                  </tr>
                  <tr>
                    <td>DP821</td>
                    <td>140 Watts</td>
                    <td>60 Volts</td>
                    <td>10 Amps</td>
                    <td>2 channel(s)</td>
                  </tr>
                  <tr>
                    <td>DP831A</td>
                    <td>160 Watts</td>
                    <td>30 Volts</td>
                    <td>5 Amps</td>
                    <td>3 channel(s)</td>
                  </tr>
                  <tr>
                    <td>DP832A</td>
                    <td>195 Watts</td>
                    <td>30 Volts</td>
                    <td>3 Amps</td>
                    <td>3 channel(s)</td>
                  </tr>
                  <tr>
                    <td>DP821A</td>
                    <td>140 Watts</td>
                    <td>60 Volts</td>
                    <td>10 Amps</td>
                    <td>2 channel(s)</td>
                  </tr>
                  <tr>
                    <td>DP811A</td>
                    <td>200 Watts</td>
                    <td>40 Volts</td>
                    <td>10 Amps</td>
                    <td>1 channel(s)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* content end */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Module;
