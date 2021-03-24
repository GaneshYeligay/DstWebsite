import React from "react";

import dg800_series from "../../../../dist/img/Product-parterns/ragol/dsa800_series-1.png";
import dsa700_series_z from "../../../../dist/img/Product-parterns/ragol/dsa700_series-1.png";
import rsa5000_series from "../../../../dist/img/Product-parterns/ragol/rsa5000_series.jpg";
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
      <Title title="Spectrum Analyzer" />

      <div className="container-fluid page-body product-desc">
        <div className="SpectrumBreadcrumbPosition">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/prodcts-parterns">Product Partners</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="/Rigol">Rigol</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              <a href="/">Spectrum Analyzer</a>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="container sdp-body" style={containerBody}>
          {/*------Content start------ */}
          {/*------start row ------ */}
          <br />
          <div className="DSA700Image col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <img
              src={dsa700_series_z}
              class="img-thumbnail"
              alt="DSA700 SERIES   |  SPECTRUM ANALYZERS"
            />
          </div>
          <div className="DSA700Data col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
            <div class="details-col">
              <h3>DSA700 SERIES | SPECTRUM ANALYZERS</h3>
              <p class="text-justify">
                Rigol's DSA700 series spectrum analyzer makes radio, IoT, and
                educational/hobbyist measurements more accessible than ever with
                value analyzers designed for lower frequency RF test. The DSA700
                shares the popular mechanical package of the DSA800 series
                analyzer with a focus on measurements below 1 GHz. The spectrum
                analyzer offers the ability to measure smaller signals using our
                digital IF filter, which allows for smaller bandwidth settings
                and reduces displayed noise levels. The DSA700 also
                distinguishes between signals with a frequency difference as
                little as 100 Hz. The DSA700 has the capability to monitor FSK
                signals with the 2FSK-DSA option. A complete spectrum analyzer
                for your low frequency signals and systems at an unprecedented
                price.
              </p>
            </div>
          </div>
          <br />
          {/* second column */}
          <div className="col-md-12">
            <table class="table table-bordered  wow fadeInLeft">
              <thead class="thead-color">
                <tr>
                  <th scope="col">Product Feature</th>
                  <th scope="col">Customer Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Low Noise floor as low as -130 dBm</td>
                  <td>
                    View lower powered signals (harmonics, interference sources)
                    and ease trouble-shooting.
                  </td>
                </tr>
                <tr>
                  <td> EMI PreCompliance measurements (option)</td>
                  <td>
                    Use FCC bandwidths, EMI filter, and QuasiPeak Detector to
                    make PreCompliance measurements during the design process
                    saving time and money getting new products to market.
                  </td>
                </tr>
                <tr>
                  <td>Down to 100Hz Minimum Resolution Bandwidth (RBW)</td>
                  <td>
                    Provides enough resolution to separate signals with similar
                    frequencies enabling easier signal identification
                  </td>
                </tr>
                <tr>
                  <td>Standard PreAmplifier included</td>
                  <td>
                    The PreAmplifier significantly improves the instrument's
                    noise floor enabling users to monitor and debug smaller
                    signals.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* next ele */}
          <section class="table-style-three pb-md">
            <div class="display row">
              <div class="DSA700Md1Tb1 col-md-offset-2 col-md-9 col-sm-12 wow fadeInRight">
                <h3>DIFFERENT MODELS</h3>
                <div class="table-responsive">
                  <table class="table table-striped table-bordered  text-center">
                    <thead class="thead-dark">
                      <tr>
                        <th class="text-center" scope="col">
                          Model
                        </th>
                        <th class="text-center" scope="col">
                          DANL
                        </th>
                        <th class="text-center" scope="col">
                          Phase Noise
                        </th>
                        <th class="text-center" scope="col">
                          RBW
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>DSA705</td>
                        <td>-130 dBm</td>
                        <td>-80 dBc/Hz</td>
                        <td>100 Hz</td>
                      </tr>
                      <tr>
                        <td>DSA710</td>
                        <td>-130 dBm</td>
                        <td>-80 dBc/Hz</td>
                        <td>100 Hz</td>
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
            <div class="DG800Image col-md-4 wow fadeInLeft">
              <div class="details-col">
                <img
                  src={dg800_series}
                  class="img-thumbnail"
                  alt="DP800 Series   |  Power Supplies"
                />
              </div>
            </div>
            <div
              class="DSA800Data col-md-8 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".0s"
            >
              <div class="details-col">
                <h3>DSA800 SERIES | SPECTRUM ANALYZERS</h3>
                <p class="text-justify">
                  Rigol's DSA800 Series spectrum analyzers redefine the product
                  category by setting new standards for performance and price.
                  The DSA800 family features a widescreen display, compact
                  design, and easy-to-use interface making it ideal for benchtop
                  or field apps in RF and wireless testing and production. The
                  spectrum analyzer offers the ability to measure smaller
                  signals using our digital IF filter, which allows for smaller
                  bandwidth settings and reduces displayed noise levels. The
                  DSA815 distinguishes between signals with a frequency
                  difference as little as 10 Hz. The DSA832, DSA832E, and DSA875
                  have a DANL (displayed average noise level) down to -161 dBm
                  (typical). In addition, Rigol offers great options including
                  an EMI filter and quasi-peak detector kit, VSWR measurement
                  package, and tracking generator ("-TG" version) for all of
                  these models. A Preamplifier is standard on all models in the
                  family. Whether your application is radio verification at 455
                  MHz or monitoring the 3rd harmonic of 2.4 GHz signals find the
                  right spectrum analyzer in the DSA800 Series.
                </p>
              </div>
            </div>
          </div>
          <br />
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
                  <td>Noise floor as low as -161 dBm</td>
                  <td>
                    View lower powered signals (harmonics, interference sources)
                    and ease trouble-shooting.
                  </td>
                </tr>
                <tr>
                  <td>EMI PreCompliance measurements (option)</td>
                  <td>
                    Use FCC bandwidths, EMI filter, and QuasiPeak Detector to
                    make PreCompliance measurements during the design process
                    saving time and money getting new products to market.
                  </td>
                </tr>
                <tr>
                  <td>Down to 10Hz Minimum Resolution Bandwidth (RBW)</td>
                  <td>
                    Provides high resolution to separate signals with similar
                    frequencies enabling easier signal identification
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    Tracking Generator and VSWR options measurement options
                  </td>
                  <td>
                    Low cost additions provide the ability to test cables,
                    antennas, filters, and active components. VSWR option
                    automates standing wave parameter measurements.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* next content */}
          <div class="row">
            <div class="DSA800Md1Tb1 col-md-offset-2 col-md-9 col-sm-12 wow fadeInRight">
              <h3>DIFFERENT MODELS</h3>
              <div class="table-responsive">
                <table class="table table-striped table-bordered  text-center">
                  <thead class="thead-dark">
                    <tr>
                      <th class="text-center" scope="col">
                        Model
                      </th>
                      <th class="text-center" scope="col">
                        Frequency
                      </th>
                      <th class="text-center" scope="col">
                        DANL
                      </th>
                      <th class="text-center" scope="col">
                        Phase Noise
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>DSA815</td>
                      <td>1.5 GHz</td>
                      <td>-155 dBm</td>
                      <td>-80 dBc/Hz</td>
                    </tr>
                    <tr>
                      <td>DSA815-TG</td>
                      <td>1.5 GHz</td>
                      <td>-155 dBm</td>
                      <td>-80 dBc/Hz</td>
                    </tr>
                    <tr>
                      <td>DSA832E</td>
                      <td>3.2 GHz</td>
                      <td>-158 dBm</td>
                      <td>-90 dBc/Hz</td>
                    </tr>
                    <tr>
                      <td>DSA832E-TG</td>
                      <td>3.2 GHz</td>
                      <td>-158 dBm</td>
                      <td>-90 dBc/Hz</td>
                    </tr>
                    <tr>
                      <td>DSA832</td>
                      <td>3.2 GHz</td>
                      <td>-161 dBm</td>
                      <td>-98 dBc/Hz</td>
                    </tr>
                    <tr>
                      <td>DSA832-TG</td>
                      <td>3.2 GHz</td>
                      <td>-161 dBm</td>
                      <td>-98 dBc/Hz</td>
                    </tr>
                    <tr>
                      <td>DSA875</td>
                      <td>7.5 GHz</td>
                      <td>-161 dBm</td>
                      <td>-98 dBc/Hz</td>
                    </tr>
                    <tr>
                      <td>DSA875-TG</td>
                      <td>7.5 GHz</td>
                      <td>-161 dBm</td>
                      <td>-98 dBc/Hz</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* next content */}
            <hr />
            <br />
            <div class="RSA5000Image col-md-4 wow fadeInLeft">
              <div class="details-col">
                <img
                  src={rsa5000_series}
                  class="img-thumbnail"
                  alt="RSA5000 SERIES   |  SPECTRUM ANALYZERS"
                ></img>
              </div>
            </div>

            <div class="RSA5000Data col-md-8 wow fadeInRight">
              <div class="details-col">
                <h3>RSA5000 SERIES | SPECTRUM ANALYZERS</h3>
                <p class="text-justify">
                  Engineers integrating WiFi, Bluetooth and other modern RF
                  technologies are confronted with complex challenges like
                  frequency hopping signals, channel conflict, and spectrum
                  interference. Real-Time Spectrum Analyzers bring the dimension
                  of time to RF Analysis making it easier to monitor and
                  characterize these complex RF systems. The RSA5000 combines
                  industry leading realtime performance (7.45µs 100% POI), rich
                  data displays, and advanced triggering options allowing the
                  user to quickly capture, identify and analyze these complex
                  events.{" "}
                </p>
              </div>
            </div>
          </div>
          <br />
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
                  <td> DANL as low as -165 dBm with optional preamp</td>
                  <td>
                    View lower powered signals (harmonics, interference sources)
                    and ease trouble-shooting in swept and real-time mode.
                  </td>
                </tr>
                <tr>
                  <td> 1 Hz Minimum Resolution Bandwidth (RBW)</td>
                  <td>
                    Provides high resolution to separate signals with close
                    frequencies enabling easier signal identification for
                    characterization and advanced measurements.
                  </td>
                </tr>
                <tr>
                  <td> 1 ms full span sweep</td>
                  <td>
                    Utilize the fast 1 millisecond full span sweep to quickly
                    identify signals of interest.
                  </td>
                </tr>
                <tr>
                  <td> Up to 40 MHz of Real-Time BW</td>
                  <td>
                    View wider band and hopping signals at one time without
                    additional setup making identifying and analyzing signals of
                    interest faster and easier.
                  </td>
                </tr>
                <tr>
                  <td> 7.45 µs 100% POI</td>
                  <td>
                    Capture pulsed transmissions as short as 7.45 µs with
                    guaranteed capture and power accuracy.
                  </td>
                </tr>
                <tr>
                  <td> 7 Real-Time Visualization Modes</td>
                  <td>
                    Advanced debugging and analysis with combinations of Normal,
                    Density, Spectrogram, and Power vs Time visualizations.
                  </td>
                </tr>
                <tr>
                  <td> Powerful triggering capabilities</td>
                  <td>
                    Identify specific signals of interest with frequency mask,
                    power triggers, or use external triggers to time correlate
                    digital signals for additional analysis.
                  </td>
                </tr>
                <tr>
                  <td> Tracking Generator and VSWR measurements</td>
                  <td>
                    Use the optional tracking generator to test cables,
                    antennas, filters, and active components. VSWR automates
                    standing wave parameter measurements.
                  </td>
                </tr>
                <tr>
                  <td> Flexible usability options</td>
                  <td>
                    Use front panel buttons, touch screen,
                    keyboard/mouse/monitor, and PC based software control in any
                    combination to match the application and customer
                    preference.
                  </td>
                </tr>
                <tr>
                  <td> EMI filters and detectors</td>
                  <td>
                    Standard 6 dB filters for EMI bandwidths as well as Quasi
                    Peak detectors.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* next content */}

          <div class="row">
            <div class="RSA5000Md1Tb1 col-md-offset-2 col-md-8 col-sm-12 wow fadeInRight">
              <h3>DIFFERENT MODELS</h3>
              <div class="table-responsive">
                <table class="table table-striped table-bordered  text-center">
                  <thead class="thead-dark">
                    <tr>
                      <th class="text-center" scope="col">
                        Model
                      </th>
                      <th class="text-center" scope="col">
                        Frequency
                      </th>
                      <th class="text-center" scope="col">
                        DANL
                      </th>
                      <th class="text-center" scope="col">
                        Phase Noise
                      </th>
                      <th class="text-center" scope="col">
                        RBW
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>RSA5032</td>
                      <td>3.2 GHz</td>
                      <td>-165 dBm</td>
                      <td>-108 dBc/Hz</td>
                      <td>1 Hz</td>
                    </tr>
                    <tr>
                      <td>RSA5032-TG</td>
                      <td>3.2 GHz</td>
                      <td>-165 dBm</td>
                      <td>-108 dBc/Hz</td>
                      <td>1 Hz</td>
                    </tr>
                    <tr>
                      <td>RSA5065</td>
                      <td>6.5 GHz</td>
                      <td>-165 dBm</td>
                      <td>-108 dBc/Hz</td>
                      <td>1 Hz</td>
                    </tr>
                    <tr>
                      <td>RSA5065-TG</td>
                      <td>6.5 GHz</td>
                      <td>-165 dBm</td>
                      <td>-108 dBc/Hz</td>
                      <td>1 Hz</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* content end */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Module;
