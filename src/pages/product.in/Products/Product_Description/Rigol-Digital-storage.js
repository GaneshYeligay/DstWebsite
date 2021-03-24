import React from "react";

import series1000_1 from "../../../../dist/img/Product-parterns/ragol/1000series-1.jpg";
import dg1000zseries_1 from "../../../../dist/img/Product-parterns/ragol/dg1000zseries_1.jpg";
import dg1000zseries_2 from "../../../../dist/img/Product-parterns/ragol/dg1000zseries_2.jpg";
import dg1000zseries_3 from "../../../../dist/img/Product-parterns/ragol/dg1000zseries_3.png";
import dg1000zseries_4 from "../../../../dist/img/Product-parterns/ragol/dg1000zseries_4.png";
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
      <Title title="DIGITAL STORAGE OSCILLOSCOPE" />

      <div className="container-fluid page-body product-desc">
        {/* Breadcrumbs for DC-POWER-&-LOADS ---------> */}
        <div className="OscilloscopreBreadcrumbPosition">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/prodcts-parterns">Product Partners</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="/Rigol">Rigol</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              <a href="/">Digital Storage Oscilloscope</a>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        {/* Breadcrumbs ends-------------> */}
        <div className="container sdp-body" style={containerBody}>
          {/*------Content start------ */}
          {/*------start row ------ */}
          <br />
          <div className="row">
            <div className="DO1000Image col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <img
                src={series1000_1}
                className="img-thumbnail"
                alt="1000 SERIES  | DIGITAL OSCILLOSCOPES"
              />
            </div>
            <div className=" DO1000Data col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
              <div className="details-col">
                <h3>1000 SERIES | DIGITAL OSCILLOSCOPES</h3>
                <p className="text-justify">
                  The 1000 Series from RIGOL include the B, D, and E series
                  oscilloscopes. The E Series are the value leader with 50-100
                  MHz models that include 2 channels and 1 Million points of
                  memory. The D Series add low speed digital capture enabling
                  basic mixed signal analysis in a economic package. The B
                  Series provide more speed and power including our economic 4
                  channel, 200 MHz DS1204B model which provides 2 GSa/sec
                  sampling. With features including FFTs, record and replay,
                  roll mode, alternate trigger mode, and adjustable trigger
                  sensitivity the 1000 Series is a great entry for value
                  oscilloscope requirements.
                </p>
              </div>
            </div>
          </div>
          <br />
          {/* second column */}
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
                    <td>1 to 2 GSa/s Max Sample Rate</td>
                    <td>
                      Provides fine resolution and detail in high speed signals
                    </td>
                  </tr>
                  <tr>
                    <td>5.7" QVGA Display</td>
                    <td>Improved view for an entry level oscilloscope</td>
                  </tr>
                  <tr>
                    <td>Up to 1 Million points of memory</td>
                    <td>
                      memory depth enables signal zoom and analysis of longer
                      waveforms
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Trigger modes including edge, pulse width, slope, video,
                      pattern, continuous time, and alternate
                    </td>
                    <td>
                      Advanced trigger modes speed debugging and analysis.
                      Alternating trigger mode is especially useful for non time
                      correlated signals.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* next ele */}
          <section class="table-style-three pb-md">
            <div class="row">
              <div class="DO1000Md1Tb1 col-md-offset-2 col-md-8 col-sm-12 ">
                <h3>DIFFERENT MODELS</h3>
                <div class="table-responsive">
                  <table class="table table-striped table-bordered  text-center">
                    <thead class="thead-dark">
                      <tr>
                        <th class="text-center" scope="col">
                          Model
                        </th>
                        <th class="text-center" scope="col">
                          Bandwidth
                        </th>
                        <th class="text-center" scope="col">
                          Analog Channels
                        </th>
                        <th class="text-center" scope="col">
                          Digital Channels
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>DS1052E</td>
                        <td>50 MHz</td>
                        <td>2</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>DS1102E</td>
                        <td>100 MHz </td>
                        <td>2</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>DS1052D</td>
                        <td>50 MHz</td>
                        <td>2</td>
                        <td>16</td>
                      </tr>
                      <tr>
                        <td>DS1072CA</td>
                        <td>70 MHz </td>
                        <td>2</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>DS1074B</td>
                        <td>70 MHz</td>
                        <td>4</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>DS1102D</td>
                        <td>100 MHz </td>
                        <td>2</td>
                        <td>16</td>
                      </tr>
                      <tr>
                        <td>DS1102CA</td>
                        <td>100 MHz</td>
                        <td>2</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>DS1104B</td>
                        <td>100 MHz </td>
                        <td>4</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>DS1204B</td>
                        <td>200 MHz</td>
                        <td>4</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>DS1202CA</td>
                        <td>200 MHz </td>
                        <td>2</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>DS1302CA</td>
                        <td>300 MHz </td>
                        <td>2</td>
                        <td></td>
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
            <div class="DG1000zImage col-md-4 wow fadeInLeft">
              <div class="details-col">
                <img
                  src={dg1000zseries_1}
                  class="img-thumbnail"
                  alt="1000Z SERIES | MIXED SIGNAL & DIGITAL OSCILLOSCOPES"
                />
              </div>
            </div>
            <div
              class="DO1000zData col-md-8 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".0s"
            >
              <div class="details-col">
                <h3>1000Z SERIES | MIXED SIGNAL & DIGITAL OSCILLOSCOPES</h3>
                <p class="text-justify">
                  The 1000Z Series is the economic level Digital Oscilloscope
                  platform from Rigol. It offers unprecedented value in customer
                  applications with its innovative technology, industry leading
                  specifications, powerful trigger functions and broad analysis
                  capabilities. The 1000Z Series 4 channel oscilloscopes come in
                  50, 70, or 100 MHz versions with a 7 inch display and Rigol's
                  UltraVision technology. The MSO models include a 16 bit
                  digital input port for mixed signal applications. The "-S"
                  models include a 2 channel integrated waveform generator and
                  the PLUS models are upgradable to MSO versions with the
                  purchase of the RPL1116 digital lead kit. Add the optional
                  analysis, decoding, deep memory, or other configured options
                  for a powerful 4 channel scope at an exceptional price.
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
                    <td>UltraVision Technology</td>
                    <td>
                      Advanced display and analysis capabilities combine with
                      deep memory and high waveform update rate in RIGOL's
                      UltraVision oscilloscope technology
                    </td>
                  </tr>
                  <tr>
                    <td> 16 Digital Channels (MSO Models)</td>
                    <td>
                      Time correlated views between analog and digital channel
                      speeds debug of embedded designs
                    </td>
                  </tr>
                  <tr>
                    <td> Integrated 2 Channel full function 25MHz generator</td>
                    <td>Debug and emulate signals all in one instrument</td>
                  </tr>
                  <tr>
                    <td>Serial Triggering and Analysis Options</td>
                    <td>
                      Speeds analysis and debug of your I2C, RS232 and SPI
                      designs
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* next content */}
          <div className="row">
            <div class="DO1000zMd1Tb1 col-md-offset-2 col-md-8 col-sm-12 ">
              <h3>DIFFERENT MODELS</h3>
              <div class="table-responsive">
                <table class="table table-striped table-bordered text-center">
                  <thead class="thead-dark">
                    <tr>
                      <th class="text-center" scope="col">
                        Model
                      </th>
                      <th class="text-center" scope="col">
                        Bandwidth
                      </th>
                      <th class="text-center" scope="col">
                        Analog Channels
                      </th>
                      <th class="text-center" scope="col">
                        Digital Channels
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>DS1054Z</td>
                      <td>50 MHz</td>
                      <td>4</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>DS1074Z</td>
                      <td>70 MHz</td>
                      <td>4</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>DS1074Z Plus</td>
                      <td>70 MHz</td>
                      <td>4</td>
                      <td>Upgradable</td>
                    </tr>
                    <tr>
                      <td>DS1104Z</td>
                      <td>100 MHz</td>
                      <td>4</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>DS1074Z-S</td>
                      <td>70 MHz</td>
                      <td>4</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>DS1104Z Plus</td>
                      <td>100 MHz</td>
                      <td>4</td>
                      <td>Upgradable</td>
                    </tr>
                    <tr>
                      <td>MSO1074Z</td>
                      <td>70 MHz</td>
                      <td>4</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <td>DS1074Z-S Plus</td>
                      <td>70 MHz</td>
                      <td>4</td>
                      <td>Upgradable</td>
                    </tr>
                    <tr>
                      <td>MSO1104Z</td>
                      <td>100 MHz</td>
                      <td>4</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <td>DS1104Z-S</td>
                      <td>100 MHz</td>
                      <td>4</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>DS1104Z-S Plus</td>
                      <td>100 MHz</td>
                      <td>4</td>
                      <td>Upgradable</td>
                    </tr>
                    <tr>
                      <td>MSO1074Z-S</td>
                      <td>70 MHz</td>
                      <td>4</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <td>MSO1104Z-S</td>
                      <td>100 MHz</td>
                      <td>4</td>
                      <td>16</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* next content */}
            <hr />
          </div>
          <br />
          <div className="row">
            <div class="DG1000zS2Image col-md-4 wow fadeInLeft">
              <div class="details-col">
                <img
                  src={dg1000zseries_2}
                  class="img-thumbnail"
                  alt="2000 SERIES | MIXED SIGNAL & DIGITAL OSCILLOSCOPES"
                />
              </div>
            </div>
            <div class="DO2000Data col-md-8 wow fadeInRight">
              <div class="details-col">
                <h3>2000 SERIES | MIXED SIGNAL &amp; DIGITAL OSCILLOSCOPES</h3>
                <p class="text-justify">
                  The 2000 Series digital oscilloscope is another Best-In-Class
                  instrument from Rigol offering an unmatched feature/value
                  package. The 2000E series are the newest additions to the 2000
                  family. They bring the advanced triggering, large display, and
                  decoding features of the 2000A to customers with a limited
                  budget. This new, low starting price enables customers to
                  analyze higher speed signals with a larger display for less
                  than previously possible. The 2000A Series is a fast and
                  versatile scope covering frequencies up to 300 MHz with two
                  channels and a wide vertical range (500uV/div-10V/div) to
                  deliver an extremely low noise floor to help you capture
                  smaller signals. Add a 2 GSa/s max. sample rate and 14 Mpts.
                  of standard memory depth to its user-friendly interface and 8
                  inch WVGA display and you've got a scope that outperforms the
                  competition in a wide range of bench-top and field
                  applications. The MSO models add16 bits of mixed signal logic
                  channels as well as an option for an embedded 2 channel, 25
                  MHz waveform generator.{" "}
                </p>
              </div>
            </div>
          </div>
          <br /> {/* next content */}
          <div className="row">
            <div class="col-md-12">
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
                      {" "}
                      Low Noise floor with wide vertical range (500uV/div ~
                      10V/div)
                    </td>
                    <td>
                      More easily spot and capture small signals and glitches
                      with the lower noise front end on the 2000A Series.
                    </td>
                  </tr>
                  <tr>
                    <td> Waveform Record and Playback</td>
                    <td>
                      Debug occasional and random glitches using our fast
                      capture, playback, and onboard analysis capabilities.
                    </td>
                  </tr>
                  <tr>
                    <td> 16 Digital Channels (MSO Models)</td>
                    <td>
                      Time correlated views between analog and digital channel
                      speeds debug of embedded designs
                    </td>
                  </tr>
                  <tr>
                    <td> UltraVision Technology</td>
                    <td>
                      Advanced display and analysis capabilities combine with
                      deep memory and high waveform update rate in RIGOL's
                      UltraVision oscilloscope technology
                    </td>
                  </tr>
                  <tr>
                    <td> Integrated 2 Channel full function 25MHz generator</td>
                    <td>Debug and emulate signals all in one instrument</td>
                  </tr>
                </tbody>
              </table>{" "}
            </div>
            {/* next content */}
          </div>
          <div className="row">
            <div class="DO2000Md1Tb1 col-md-offset-2 col-md-8 col-sm-12 ">
              <h3>DIFFERENT MODELS</h3>
              <div class="table-responsive">
                <table class="table table-striped table-bordered  text-center">
                  <thead class="thead-dark">
                    <tr>
                      <th class="text-center" scope="col">
                        Model
                      </th>
                      <th class="text-center" scope="col">
                        Bandwidth
                      </th>
                      <th class="text-center" scope="col">
                        Included Source
                      </th>
                      <th class="text-center" scope="col">
                        Analog Channels
                      </th>
                      <th class="text-center" scope="col">
                        Real-time Sample Rate
                      </th>
                      <th class="text-center" scope="col">
                        Memory Depth
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>DS2102E</td>
                      <td>100 MHz</td>
                      <td>No</td>
                      <td>2</td>
                      <td>1 GSa/s</td>
                      <td>28 Mpts</td>
                    </tr>
                    <tr>
                      <td>DS2072A</td>
                      <td>70 MHz</td>
                      <td>No</td>
                      <td>2</td>
                      <td>2 GSa/s</td>
                      <td>14 Mpts</td>
                    </tr>
                    <tr>
                      <td>DS2202E</td>
                      <td>200 MHz</td>
                      <td>No</td>
                      <td>2</td>
                      <td>1 GSa/s</td>
                      <td>28 Mpts</td>
                    </tr>
                    <tr>
                      <td>DS2102A</td>
                      <td>100 MHz</td>
                      <td>No</td>
                      <td>2</td>
                      <td>2 GSa/s</td>
                      <td>14 Mpts</td>
                    </tr>
                    <tr>
                      <td>DS2072A-S</td>
                      <td>70 MHz</td>
                      <td>Yes</td>
                      <td>2</td>
                      <td>2 GSa/s</td>
                      <td>14 Mpts</td>
                    </tr>
                    <tr>
                      <td>MSO2072A</td>
                      <td>70 MHz</td>
                      <td>No</td>
                      <td>2</td>
                      <td>2 GSa/s</td>
                      <td>14 Mpts</td>
                    </tr>
                    <tr>
                      <td>DS2102A-S</td>
                      <td>100 MHz</td>
                      <td>Yes</td>
                      <td>2</td>
                      <td>2 GSa/s</td>
                      <td>14 Mpts</td>
                    </tr>
                    <tr>
                      <td>MSO2102A</td>
                      <td>100 MHz</td>
                      <td>No</td>
                      <td>2</td>
                      <td>2 GSa/s</td>
                      <td>14 Mpts</td>
                    </tr>

                    <tr>
                      <td>DS2202A</td>
                      <td>200 MHz</td>
                      <td>No</td>
                      <td>2</td>
                      <td>1 GSa/s</td>
                      <td>14 Mpts</td>
                    </tr>
                    <tr>
                      <td>MSO2072A-S</td>
                      <td>70 MHz</td>
                      <td>Yes</td>
                      <td>2</td>
                      <td>2 GSa/s</td>
                      <td>14 Mpts</td>
                    </tr>
                    <tr>
                      <td>MSO2102A-S</td>
                      <td>100 MHz</td>
                      <td>Yes</td>
                      <td>2</td>
                      <td>2 GSa/s</td>
                      <td>14 Mpts</td>
                    </tr>
                    <tr>
                      <td>MSO2202A</td>
                      <td>200 MHz</td>
                      <td>No</td>
                      <td>2</td>
                      <td>2 GSa/s</td>
                      <td>14 Mpts</td>
                    </tr>
                    <tr>
                      <td>DS2202A-S</td>
                      <td>200 MHz</td>
                      <td>Yes</td>
                      <td>2</td>
                      <td>2 GSa/s</td>
                      <td>14 Mpts</td>
                    </tr>
                    <tr>
                      <td>MSO2202A-S</td>
                      <td>200 MHz</td>
                      <td>Yes</td>
                      <td>2</td>
                      <td>2 GSa/s</td>
                      <td>14 Mpts</td>
                    </tr>
                    <tr>
                      <td>DS2302A</td>
                      <td>300 MHz</td>
                      <td>No</td>
                      <td>2</td>
                      <td>2 GSa/s</td>
                      <td>14 Mpts</td>
                    </tr>
                    <tr>
                      <td>MSO2302A</td>
                      <td>300 MHz</td>
                      <td>No</td>
                      <td>2</td>
                      <td>2 GSa/s</td>
                      <td>14 Mpts</td>
                    </tr>
                    <tr>
                      <td>DS2302A-S</td>
                      <td>300 MHz</td>
                      <td>Yes</td>
                      <td>2</td>
                      <td>2 GSa/s</td>
                      <td>14 Mpts</td>
                    </tr>
                    <tr>
                      <td>MSO2302A-S</td>
                      <td>300 MHz</td>
                      <td>Yes</td>
                      <td>2</td>
                      <td>2 GSa/s</td>
                      <td>14 Mpts</td>
                    </tr>
                  </tbody>
                </table>{" "}
              </div>
            </div>
          </div>
          {/* content end */}
          <br />
          <div class="row pt-lg">
            <div
              class="DO4000zS3Image col-md-4 wow fadeInLeft"
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
                  src={dg1000zseries_3}
                  class="img-thumbnail"
                  alt="4000 SERIES   |  MIXED SIGNAL &amp; DIGITAL OSCILLOSCOPES"
                />
              </div>
            </div>
            <div
              class="DO4000Data col-md-8 wow fadeInRight"
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
                <h3>4000 SERIES | MIXED SIGNAL &amp; DIGITAL OSCILLOSCOPES</h3>
                <p class="text-justify">
                  The 4000 series digital oscilloscope is a versatile, high
                  performance mixed signal oscilloscope that incorporates many
                  of today's most advanced technologies and processes. Featuring
                  bandwidths between 100MHz and 500MHz, sample rates up to
                  4GSa/s, 2 or 4 analog channels, and 16 digital logic channels,
                  the 4000 is ideal for a wide variety of engineers working in
                  communications, defense, aerospace, industrial electronics,
                  R&amp;D and educational fields.
                </p>
              </div>
            </div>
          </div>
          <br />
          <section class="table-style-two pb-md">
            <div class="row">
              <div class="col-md-12">
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
                      <td>Up to 4GSa/s Max Sample Rate</td>
                      <td>
                        Provides fine resolution and detail in high speed
                        signals
                      </td>
                    </tr>
                    <tr>
                      <td> 140Mpts Standard Record Length</td>
                      <td>
                        Long acquisitions at high sample rates help debug
                        elusive problems in complex digital streams
                      </td>
                    </tr>
                    <tr>
                      <td> Up to 110,000 wfms/s Waveform Capture rate</td>
                      <td>
                        Minimize scope "dead time" between trigger events and
                        increases observations of random and sporadic events
                      </td>
                    </tr>
                    <tr>
                      <td> 16 Digital Channels (MSO Models)</td>
                      <td>
                        Time correlated views between analog and digital channel
                        speeds debug of embedded designs
                      </td>
                    </tr>
                    <tr>
                      <td> Serial Triggering and Analysis Options</td>
                      <td>
                        Speeds analysis and debug of your I2C, RS232 and SPI
                        designs
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section class="table-style-three pb-md">
            <div class="row">
              <div
                class="DO4000Md1Tb1 col-md-offset-2 col-md-8 col-sm-12 wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".0s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0s",
                  animationName: "fadeInLeft",
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
                          Bandwidth
                        </th>
                        <th class="text-center" scope="col">
                          Analog Channels
                        </th>
                        <th class="text-center" scope="col">
                          Digital Channels
                        </th>
                        <th class="text-center" scope="col">
                          Real-time Sample Rate
                        </th>
                        <th class="text-center" scope="col">
                          Memory Depth
                        </th>
                        <th class="text-center" scope="col">
                          Waveform Capture Rate
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>DS4014E</td>
                        <td>100 MHz</td>
                        <td>4</td>
                        <td></td>
                        <td>1 GSa/s</td>
                        <td>140 Mpts</td>
                        <td>60,000 wfms/s</td>
                      </tr>
                      <tr>
                        <td>DS4012</td>
                        <td>100 MHz</td>
                        <td>2</td>
                        <td></td>
                        <td>4 GSa/s</td>
                        <td>140 Mpts</td>
                        <td>110,000 wfms/s</td>
                      </tr>
                      <tr>
                        <td>DS4014</td>
                        <td>100 MHz</td>
                        <td>4</td>
                        <td></td>
                        <td>4 GSa/s</td>
                        <td>140 Mpts</td>
                        <td>110,000 wfms/s</td>
                      </tr>
                      <tr>
                        <td>DS4024E</td>
                        <td>200 MHz</td>
                        <td>4</td>
                        <td></td>
                        <td>2 GSa/s</td>
                        <td>140 Mpts</td>
                        <td>60,000 wfms/s</td>
                      </tr>
                      <tr>
                        <td>DS4022</td>
                        <td>200 MHz</td>
                        <td>2</td>
                        <td></td>
                        <td>4 GSa/s</td>
                        <td>140 Mpts</td>
                        <td>110,000 wfms/s</td>
                      </tr>
                      <tr>
                        <td>DS4024</td>
                        <td>200 MHz</td>
                        <td>4</td>
                        <td></td>
                        <td>4 GSa/s</td>
                        <td>140 Mpts</td>
                        <td>110,000 wfms/s</td>
                      </tr>
                      <tr>
                        <td>MSO4012</td>
                        <td>100 MHz</td>
                        <td>2</td>
                        <td>16</td>
                        <td>4 GSa/s</td>
                        <td>140 Mpts</td>
                        <td>110,000 wfms/s</td>
                      </tr>
                      <tr>
                        <td>MSO4014</td>
                        <td>100 MHz</td>
                        <td>4</td>
                        <td>16</td>
                        <td>4 GSa/s</td>
                        <td>140 Mpts</td>
                        <td>110,000 wfms/s</td>
                      </tr>

                      <tr>
                        <td>MSO4022</td>
                        <td>200 MHz</td>
                        <td>2</td>
                        <td>16</td>
                        <td>4 GSa/s</td>
                        <td>140 Mpts</td>
                        <td>110,000 wfms/s</td>
                      </tr>
                      <tr>
                        <td>MSO4024</td>
                        <td>200 MHz</td>
                        <td>4</td>
                        <td>16</td>
                        <td>4 GSa/s</td>
                        <td>140 Mpts</td>
                        <td>110,000 wfms/s</td>
                      </tr>
                      <tr>
                        <td>DS4032</td>
                        <td>350 MHz</td>
                        <td>2</td>
                        <td></td>
                        <td>4 GSa/s</td>
                        <td>140 Mpts</td>
                        <td>110,000 wfms/s</td>
                      </tr>
                      <tr>
                        <td>DS4034</td>
                        <td>350 MHz</td>
                        <td>4</td>
                        <td></td>
                        <td>4 GSa/s</td>
                        <td>140 Mpts</td>
                        <td>110,000 wfms/s</td>
                      </tr>
                      <tr>
                        <td>DS4052</td>
                        <td>500 MHz</td>
                        <td>2</td>
                        <td></td>
                        <td>4 GSa/s</td>
                        <td>140 Mpts</td>
                        <td>110,000 wfms/s</td>
                      </tr>
                      <tr>
                        <td>MSO4032</td>
                        <td>350 MHz</td>
                        <td>2</td>
                        <td>16</td>
                        <td>4 GSa/s</td>
                        <td>140 Mpts</td>
                        <td>110,000 wfms/s</td>
                      </tr>
                      <tr>
                        <td>DS4054</td>
                        <td>500 MHz</td>
                        <td>4</td>
                        <td></td>
                        <td>4 GSa/s</td>
                        <td>140 Mpts</td>
                        <td>110,000 wfms/s</td>
                      </tr>
                      <tr>
                        <td>MSO4034</td>
                        <td>350 MHz</td>
                        <td>4</td>
                        <td>16</td>
                        <td>4 GSa/s</td>
                        <td>140 Mpts</td>
                        <td>110,000 wfms/s</td>
                      </tr>
                      <tr>
                        <td>MSO4052</td>
                        <td>500 MHz</td>
                        <td>2</td>
                        <td>16</td>
                        <td>4 GSa/s</td>
                        <td>140 Mpts</td>
                        <td>110,000 wfms/s</td>
                      </tr>
                      <tr>
                        <td>MSO4054</td>
                        <td>500 MHz</td>
                        <td>4</td>
                        <td>16</td>
                        <td>4 GSa/s</td>
                        <td>140 Mpts</td>
                        <td>110,000 wfms/s</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <br />
          <div class="row pt-lg">
            <div
              class="DG1000zS4Image col-md-4 wow fadeInLeft"
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
                  src={dg1000zseries_4}
                  class="img-thumbnail"
                  alt="DS6000 SERIES   |  DIGITAL OSCILLOSCOPES"
                />
              </div>
            </div>
            <div
              class="DS6000Data col-md-8 wow fadeInRight"
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
                <h3>DS6000 SERIES | DIGITAL OSCILLOSCOPES</h3>
                <p class="text-justify">
                  The 6000 Series Digital Oscilloscopes have 600 MHz to 1 GHz of
                  Bandwidth. Detecting high speed signals and device
                  characteristics including ESD, digital video, and differential
                  signals (using an differential probe accessory) is now easier
                  than ever with our most advanced digital oscilloscope
                  platform. With 5 GSa/sec sampling, up to 180,000 waveforms per
                  second and 140 Mpts of memory the 6000 Series demonstrates the
                  ultimate capabilities of our UltraVision technology which is
                  available throughout out latest generation of oscilloscopes.
                </p>
              </div>
            </div>
          </div>
          <br />
          <section class="table-style-two pb-md">
            <div class="row">
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
                      <td> Up to 5GSa/s Max Sample Rate</td>
                      <td>
                        Provides fine resolution and detail in high speed
                        signals
                      </td>
                    </tr>
                    <tr>
                      <td> 140Mpts Standard Record Length</td>
                      <td>
                        Long acquisitions at high sample rates help debug
                        elusive problems in complex digital streams
                      </td>
                    </tr>
                    <tr>
                      <td> Up to 180,000 wfms/s Waveform Capture rate</td>
                      <td>
                        Minimize scope "dead time" between trigger events and
                        increases observations of random and sporadic events
                      </td>
                    </tr>
                    <tr>
                      <td> Waveform Record and Playback</td>
                      <td>
                        Debug occasional and random glitches using our fast
                        capture, playback, and onboard analysis capabilities.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section class="table-style-three pb-md">
            <div class="row">
              <div
                class="DS6000Md1Tb1 col-md-offset-3 col-md-6 col-sm-12 wow fadeInRight"
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
                  <table class="table table-striped table-bordered  text-center">
                    <thead class="thead-dark">
                      <tr>
                        <th class="text-center" scope="col">
                          Model
                        </th>
                        <th class="text-center" scope="col">
                          Bandwidth
                        </th>
                        <th class="text-center" scope="col">
                          Analog Channels
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>DS6062</td>
                        <td>600 MHz</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>DS6064</td>
                        <td>600 MHz</td>
                        <td>4</td>
                      </tr>
                      <tr>
                        <td>DS6102</td>
                        <td>1 GHz</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>DS6104</td>
                        <td>1 GHz</td>
                        <td>4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Module;
