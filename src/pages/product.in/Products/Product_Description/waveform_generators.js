import React from "react";

import dg4000_series from "../../../../dist/img/Product-parterns/ragol/dg4000_series-1.png";
import dg1000_series_z from "../../../../dist/img/Product-parterns/ragol/dg1000_series_z.png";
import dg5000_series from "../../../../dist/img/Product-parterns/ragol/dg5000_series-1.png";
import dg1000z_series from "../../../../dist/img/Product-parterns/ragol/dg1000z_series-1.png";
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
      <Title title="Waveform Generators" />
      <div className="container-fluid page-body product-desc">
        <div className="WaveTransformBreadcrumbPosition">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/prodcts-parterns">Product Partners</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="/Rigol">Rigol</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              <a href="/">Waveform Generators</a>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="container sdp-body" style={containerBody}>
          {/*------Content start------ */}
          {/*------start row ------ */}
          <div className="row">
            <div className="DG1000SZImage col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <img
                src={dg1000_series_z}
                className="img-thumbnail"
                alt="DL3000 Series   |  DC Electronic Loads"
              />
            </div>
            <div className="DG1000SZData col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
              <div className="details-col">
                <h3>DG1000 SERIES | ARBITRARY WAVEFORM FUNCTION GENERATORS</h3>
                <p className="text-justify">
                  RIGOL DG1000 series function/arbitrary waveform generators use
                  Direct Digital Synthesis (DDS) technology. They can generate
                  accurate, stable, clean, low distortion signals. Each channel
                  can create sine, square, ramp, pulse,or noise signals and
                  coordinate with the other channel. These instruments each have
                  2 channels with the 2nd channel having a lower voltage output.
                  Each DG1000 can output 4055 point arbitrary waves.
                </p>
              </div>
            </div>
          </div>
          {/* second column */}
          <div className="row">
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
                    <td>Up to 100 MSa/sec Sample Rate</td>
                    <td>
                      Provides fine resolution and detail in MHz speed signals
                    </td>
                  </tr>
                  <tr>
                    <td>
                      AM, FM, PM, FSK, and linear/logarithm Sweep and Pulse
                      train waveform outputs
                    </td>
                    <td>
                      Multiple modulation functions make evaluating and
                      emulating devices communication protocols simple and
                      straightforward.
                    </td>
                  </tr>
                  <tr>
                    <td>Up to 48 built-in waveforms</td>
                    <td>
                      Quickly and easily access more predefined signals without
                      creating them from scratch
                    </td>
                  </tr>
                  <tr>
                    <td>Advanced DDS Sampling Technology</td>
                    <td>
                      Instrument automatically selects the best output point in
                      an arbitrary wave to maintain maximum sampling rate.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* next ele */}
          <section class="table-style-three pb-md">
            <div class="row">
              <div class="DG1000SZMd1Tb1 col-md-offset-2 col-md-9 col-sm-12 wow fadeInRight">
                <h3>DIFFERENT MODELS</h3>
                <div class="table-responsive">
                  <table class="table table-striped table-bordered  text-center">
                    <thead class="thead-dark">
                      <tr>
                        <th class="text-center" scope="col">
                          Model
                        </th>
                        <th class="text-center" scope="col">
                          Output Frequency- SINE
                        </th>
                        <th class="text-center" scope="col">
                          Output Frequency- Square
                        </th>
                        <th class="text-center" scope="col">
                          Channels
                        </th>
                        <th class="text-center" scope="col">
                          Arbitrary Waveform Length
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>DG1022</td>
                        <td>20 MHz</td>
                        <td>5 MHz</td>
                        <td>2 channels</td>
                        <td>4 Kpts</td>
                      </tr>
                      <tr>
                        <td>DG1022A</td>
                        <td>25 MHz</td>
                        <td>5 MHz</td>
                        <td>2 channels</td>
                        <td>4 Kpts</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <hr />
          {/* next ele */}

          <div class="row pt-lg">
            <div class="DG1000ZSImage col-md-4 wow fadeInLeft">
              <div class="details-col">
                <img
                  src={dg1000z_series}
                  class="img-thumbnail"
                  alt="DP800 Series   |  Power Supplies"
                />
              </div>
            </div>
            <div
              class="DG1000ZSData col-md-8 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".0s"
            >
              <div class="details-col">
                <h3>DG1000Z SERIES | ARBITRARY WAVEFORM FUNCTION GENERATORS</h3>
                <p class="text-justify">
                  The DG1000Z Series Waveform Generators adds to RIGOL's
                  extensive portfolio of feature rich test and measurement
                  equipment. Powered by Rigol's innovative SiFi technology, the
                  DG1000Z is ideal for low frequency testing applications
                  requiring high signal fidelity, low noise floor and long
                  arbitrary waveform length. The 2 channel DG1000Z series
                  features Best-In-Class memory depth of 2 MPts on the DG1022Z
                  or 8 Mpts on the 30 and 60 MHz models, all with an available
                  option for 16 Mpts. optional to facilitate deeper, more
                  intricate arbitrary waveforms and includes up to 160 built-in
                  waveforms for quick and easy access to more predefined
                  signals. These generators provide +/-1ppm frequency stability
                  and -125dBc/Hz phase noise for high signal fidelity and low
                  noise, predictable signal generation. The DG1000Z series
                  delivers up to 200 MSa/s sample rate and 14 bits vertical
                  resolution allowing users to achieve fine resolution and
                  signal detail while emulating small voltage changes on a large
                  output range. Available in models up to 60 MHz [The DG1062Z
                  (60MHz)], these generators offer a wide range of modulations
                  including AM, FM, PM, ASK, FSK, PSK and PWM.
                </p>
              </div>
            </div>
          </div>

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
                  <td> Up to 200 MSa/sec Sample Rate</td>
                  <td>
                    Provides fine resolution and detail in high speed signals
                  </td>
                </tr>
                <tr>
                  <td> Harmonic waveform generation</td>
                  <td>
                    Simplify the creation of waves with multiple frequency
                    components. Instead of combining waveforms in a software
                    environment to load into a generator, create waves with
                    multiple harmonics, power levels, and frequencies natively.
                  </td>
                </tr>
                <tr>
                  <td> Up to 160 built-in waveforms</td>
                  <td>
                    Quickly and easily access more predefined signals without
                    creating them from scratch
                  </td>
                </tr>
                <tr>
                  <td> Better arbitrary wave playback with SiFi Technology</td>
                  <td>
                    Improved signal fidelity during arbitrary waveform
                    generation creates low noise, predictable signals utlizing
                    the SiFi technology that enables variable output sample
                    rates.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* next content */}
          <div class="DG1000ZSMd1Tb1 col-md-offset-2 col-md-9 col-sm-12 wow fadeInRight">
            <h3>DIFFERENT MODELS</h3>
            <div class="table-responsive">
              <table class="table table-striped table-bordered  text-center">
                <thead class="thead-dark">
                  <tr>
                    <th class="text-center" scope="col">
                      Model
                    </th>
                    <th class="text-center" scope="col">
                      Output Frequency- SINE
                    </th>
                    <th class="text-center" scope="col">
                      Output Frequency- Square
                    </th>
                    <th class="text-center" scope="col">
                      Channels
                    </th>
                    <th class="text-center" scope="col">
                      Arbitrary Waveform Length
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>DG1022Z</td>
                    <td>25 MHz</td>
                    <td>25 MHz</td>
                    <td>2 channels</td>
                    <td>2 Mpts</td>
                  </tr>
                  <tr>
                    <td>DG1032Z</td>
                    <td>30 MHz</td>
                    <td>25 MHz</td>
                    <td>2 channels</td>
                    <td>8 Mpts</td>
                  </tr>
                  <tr>
                    <td>DG1062Z</td>
                    <td>60 MHz</td>
                    <td>25 MHz</td>
                    <td>2 channels</td>
                    <td>8 Mpts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* next content */}
          <hr />

          <div class="DG4000SImage col-md-4 wow fadeInLeft">
            <div class="details-col">
              <img
                src={dg4000_series}
                class="img-thumbnail"
                alt="DP800 Series   |  Power Supplies"
              />
            </div>
          </div>

          <div class="DG4000SData col-md-8 wow fadeInRight">
            <div class="details-col">
              <h3>DG4000 SERIES | ARBITRARY WAVEFORM GENERATORS</h3>
              <p class="text-justify">
                The DG4000 Series waveform generators are utilized in a wide
                range of applications because of the many functions combined
                into one instrument. With capabilities including Function
                Generation, Arbitrary Waveform Generation, Pulse Generation,
                Harmonic Generation, Analog/Digital Modulation source, and
                Counter the DG4000 series can handle a broad array of signal
                emulation applications from near DC up to 60 or even 200 MHz
                depending on model and function. The DG4000 utilizes Direct
                Digital Synthesizer (DDS) technology which delivers stable,
                precise, low distortion signals. The sleek, upright design
                features a high resolution 7" display screen, while the
                user-friendly interface design and panel layout improves
                efficiency.
              </p>
            </div>
          </div>

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
                  <td> Up to 500 MSa/sec Sample Rate</td>
                  <td>
                    Provides fine resolution and detail in high speed signals
                  </td>
                </tr>
                <tr>
                  <td> 7 inch WVGA large format display</td>
                  <td>
                    Always know what signals are being generated with the
                    intuitive and informative extra large display
                  </td>
                </tr>
                <tr>
                  <td> Up to 130 built-in waveforms</td>
                  <td>
                    Quickly and easily access more predefined signals without
                    creating them from scratch
                  </td>
                </tr>
                <tr>
                  <td> Harmonic waveform generation</td>
                  <td>
                    Simplify the creation of waves with multiple frequency
                    components. Instead of combining waveforms in a software
                    environment to load into a generator, create waves with
                    multiple harmonics, power levels, and frequencies natively.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* next content */}
          <div className="row">
            <div class="DG4000SMd1Tb1 col-md-offset-2 col-md-9 col-sm-12 wow fadeInRight">
              <h3>DIFFERENT MODELS</h3>
              <div class="table-responsive">
                <table class="table table-striped table-bordered  text-center">
                  <thead class="thead-dark">
                    <tr>
                      <th class="text-center" scope="col">
                        Model
                      </th>
                      <th class="text-center" scope="col">
                        Output Frequency- SINE
                      </th>
                      <th class="text-center" scope="col">
                        Output Frequency- Square
                      </th>
                      <th class="text-center" scope="col">
                        Channels
                      </th>
                      <th class="text-center" scope="col">
                        Arbitrary Waveform Length
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>DG4062</td>
                      <td>60 MHz</td>
                      <td>25 MHz</td>
                      <td>2 channels</td>
                      <td>16 Kpts</td>
                    </tr>
                    <tr>
                      <td>DG4102</td>
                      <td>100 MHz</td>
                      <td>40 MHz</td>
                      <td>2 channels</td>
                      <td>16 Kpts</td>
                    </tr>
                    <tr>
                      <td>DG4162</td>
                      <td>160 MHz</td>
                      <td>150 MHz</td>
                      <td>2 channels</td>
                      <td>16 Kpts</td>
                    </tr>
                    <tr>
                      <td>DG4202</td>
                      <td>200 MHz</td>
                      <td>160 MHz</td>
                      <td>2 channels</td>
                      <td>16 Kpts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <hr />
          {/* next ele */}
          <div class="row pt-lg">
            <div class="DG5000SImage col-md-4 wow fadeInLeft">
              <div class="details-col">
                <img
                  src={dg5000_series}
                  class="img-thumbnail"
                  alt="DG5000 SERIES   |  ARBITRARY WAVEFORM GENERATORS"
                />
              </div>
            </div>

            <div class="DG5000SData col-md-8 wow fadeInRight">
              <div class="details-col">
                <h3>DG5000 SERIES | ARBITRARY WAVEFORM GENERATORS</h3>
                <p class="text-justify">
                  The DG5000 Series is a waveform generator combining multiple
                  capabilities including Function Generation, Arbitrary Waveform
                  Generation, IQ Baseband Source/IQ IF Source, Frequency Hopping
                  Source (optional) and Pattern Generation (optional). The
                  DG5000 comes in single and true, independent, dual-channel
                  models that provide adjustable phase and ground levels between
                  the two channels. These instruments utilize Direct Digital
                  Synthesizer (DDS) technology providing stable, precise, low
                  distortion signals. Control signals from the user-friendly
                  interface and layout or program the instrument remotely over
                  USB or LXI to improve efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* next elem */}
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
                  <td>Super high speed function generator</td>
                  <td>
                    Reach your complete frequency range with waveforms up to
                    350MHz
                  </td>
                </tr>
                <tr>
                  <td> Up to 1 GSa/sec Sample Rate</td>
                  <td>
                    Provides fine resolution and detail in high speed signals
                  </td>
                </tr>
                <tr>
                  <td> Deep memory 128 Million point arbitrary waveforms</td>
                  <td>
                    Create high speed waveforms with more detail than ever.
                    These arbitrary waves are some of the longest available in
                    the industry.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* next elem */}
          <section class="table-style-three pb-md">
            <div class="row">
              <div class="DG5000SMd1Tb1 col-md-offset-2 col-md-9 col-sm-12 wow fadeInRight">
                <h3>DIFFERENT MODELS</h3>
                <div class="table-responsive">
                  <table class="table table-striped table-bordered  text-center">
                    <thead class="thead-dark">
                      <tr>
                        <th class="text-center" scope="col">
                          Model
                        </th>
                        <th class="text-center" scope="col">
                          Output Frequency- SINE
                        </th>
                        <th class="text-center" scope="col">
                          Output Frequency- Square
                        </th>
                        <th class="text-center" scope="col">
                          Channels
                        </th>
                        <th class="text-center" scope="col">
                          Arbitrary Waveform Length
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>DG5071</td>
                        <td>70 MHz</td>
                        <td>70 MHz</td>
                        <td>1 channels</td>
                        <td>128 Mpts</td>
                      </tr>
                      <tr>
                        <td>DG5072</td>
                        <td>70 MHz</td>
                        <td>70 MHz</td>
                        <td>2 channels</td>
                        <td>128 Mpts</td>
                      </tr>
                      <tr>
                        <td>DG5101</td>
                        <td>100 MHz</td>
                        <td>100 MHz</td>
                        <td>1 channels</td>
                        <td>128 Mpts</td>
                      </tr>
                      <tr>
                        <td>DG5102</td>
                        <td>100 MHz</td>
                        <td>100 MHz</td>
                        <td>2 channels</td>
                        <td>128 Mpts</td>
                      </tr>
                      <tr>
                        <td>DG5251</td>
                        <td>250 MHz</td>
                        <td>120 MHz</td>
                        <td>1 channels</td>
                        <td>128 Mpts</td>
                      </tr>
                      <tr>
                        <td>DG5252</td>
                        <td>250 MHz</td>
                        <td>120 MHz</td>
                        <td>2 channels</td>
                        <td>128 Mpts</td>
                      </tr>
                      <tr>
                        <td>DG5351</td>
                        <td>350 MHz</td>
                        <td>120 MHz</td>
                        <td>1 channels</td>
                        <td>128 Mpts</td>
                      </tr>
                      <tr>
                        <td>DG5352</td>
                        <td>350 MHz</td>
                        <td>120 MHz</td>
                        <td>2 channels</td>
                        <td>128 Mpts</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/* content end */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Module;
