import React from "react";
import Card from "./assets/Card";
import ragol from "../../../dist/img/Product-parterns/ragol/ragol.jpg";
import regolLogoCrppped from "../../../dist/img/Product-parterns/rigol_logo_cropped.png";
import dl3000_series from "../../../dist/img/Product-parterns/ragol/dl3000_series-1.jpg";
import series_10000 from "../../../dist/img/Product-parterns/ragol/1000series-1.jpg";
import dm3000_series from "../../../dist/img/Product-parterns/ragol/dm3000_series_1.png";

import dsg800_series from "../../../dist/img/Product-parterns/ragol/dsg800_series-1.png";
import dsa700_series from "../../../dist/img/Product-parterns/ragol/dsa700_series-1.png";
import dg1000_series from "../../../dist/img/Product-parterns/ragol/dg1000_series-1.png";
import Title from "../../common/Title";
import radium from "radium";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

class Module extends React.Component {
  state = {
    isOpen: false,
  };
  render() {
    let containerBody = {
      height: "100vh",
      backgroundColor: "#fff",
      marginTop: "5rem",
      marginBottom: "3rem",
    };
    let paraHeading = {
      fontFamily: "Raleway, sans-serif",
      color: "#2f2b2b",
      lineHeight: "1.1",
      fontWeight: "600",
      marginTop: "0",
      marginBottom: "10px",
      padding: "0",
      textTransform: "uppercase",
    };

    let paragraph = {
      fontFamily: "Open Sans, sans-serif",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "26px",
      color: "#777171",
    };

    return (
      <React.Fragment>
        <Title
          title="Rigol"
          imgStyle={{
            marginTop: "9rem",
            height: "15rem",
            "@media screen and (min-width:900px)": { marginLeft: "-6%" },
          }}
          img={regolLogoCrppped}
        />
        {/* Breadcrumbs for Rigols ---------> */}
        <div className="RigolBreadcrumbPosition">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/prodcts-parterns">Product Partners</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              <a href="/">Rigol</a>
            </BreadcrumbItem>
            {/* <BreadcrumbItem>
            <a href="/Rigol-DC-POWER-&-LOADS">DC-POWER-&-LOADS</a>
          </BreadcrumbItem> */}
          </Breadcrumb>
        </div>

        {/* Breadcrumbs ends-------------> */}
        <div className="container-fluid page-body">
          <div className="container sdp-body" style={containerBody}>
            {/*------Content start------ */}

            <div className="rowColSpace row two-column-body mt-0">
              {/*First column  */}
              <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                <h3 style={paraHeading}>
                  TRANSFORMING THE TEST AND MEASUREMENT INDUSTRY
                </h3>
                <p className="text-justify" style={paragraph}>
                  Rigol premium line of products includes Digital and Mixed
                  Signal Oscilloscopes, Spectrum Analyzers and RF Signal
                  Generators, Arbitrary waveform Generators, Sensitive
                  Measurement Products, and Data Acquisition Systems. The test
                  solutions combine uncompromised product performance, quality,
                  and advanced product features; all delivered at extremely
                  attractive price points. The solutions delight customers in
                  many applications such as technical education, embedded
                  design, WiFi integration, EMC, and manufacturing. Across all
                  markets and products Rigol deliver customers with
                  unprecedented value for their investment, reduce their overall
                  cost of test, and help speed time to completion of their
                  designs or projects.
                </p>
                <h3 style={paraHeading}>WORLDWIDE PRESENCE</h3>
                <p className="text-justify" style={paragraph}>
                  RIGOL's headquarters is in Beijing China with an R&D and
                  production facility in Suzhou with two international
                  subsidiaries in Beaverton, OR, United States and Munich,
                  Germany. Some 400 employees are serving our customers in more
                  than 60 countries and regions worldwide.
                </p>
                <h3 style={paraHeading}>UNCOMPROMISED QUALITY</h3>
                <p className="text-justify" style={paragraph}>
                  There are no compromises when you choose a Rigol product.
                  Rigol provide all of the performance and features you need to
                  quickly complete your tasks along with the quality and ease of
                  use you demand.
                </p>
              </div>
              {/*Second column  */}

              <div
                className="col-lg-3 col-md-12 col-sm-12 col-xs-12  pull-right  my-auto"
                style={{ border: "1px solid none" }}
              >
                {/*   ------- form start--------- */}
                <div className="text-center " style={{ marginTop: "-20px" }}>
                  {" "}
                  <img src={ragol} alt="" />
                </div>

                {/*----------- form End ------*/}
              </div>

              {/*-----*/}
            </div>

            {/* cords start from here now */}
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <Card
                title="DC POWER & LOADS"
                img={dl3000_series}
                style={{ fontSize: "large", fontFamily: "Raleway, sans-serif" }}
                btlLbl="View more details"
                cardDataStyle="cardStyle2"
                to="/Rigol-DC-POWER-&-LOADS"
              >
                <span>
                  The DL3000 is a cost-effective programmable DC electronic load
                  with performance specifications that rival any instrument in
                  its class.
                </span>
              </Card>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <Card
                title="DIGITAL STORAGE OSCILLOSCOPE"
                img={series_10000}
                style={{ fontSize: "large", fontFamily: "Raleway, sans-serif" }}
                btlLbl="View more details"
                cardDataStyle="cardStyle2"
                btnStyle={{ backgroundColor: "#0f75bc", borderRadius: "2px" }}
                to="/Rigol-Digital-Storage"
              >
                <span>
                  It is a long established fact that a reader will be distracted
                  by the readable readable content of a page when looking at its
                  layout.
                </span>
              </Card>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <Card
                title="MULTIMETERS & DATA ACQUISITION"
                img={dm3000_series}
                style={{
                  fontSize: "large",
                  fontFamily: "Raleway, sans-serif",
                }}
                btlLbl="View more details"
                cardDataStyle="cardStyle2"
                btnStyle={{ backgroundColor: "#0f75bc", borderRadius: "2px" }}
                to="/Rigol_multimeters"
              >
                <span>
                  The DM3000 Series DMMs give reliable, cost effective, full DMM
                  capabilities measuring DCV, ACV, DCI, ACI, Resistance (2 & 4
                  Wire), Capacitance.
                </span>
              </Card>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <Card
                title="RF Signal Generators"
                img={dsg800_series}
                style={{
                  fontSize: "large",
                  fontFamily: "Raleway, sans-serif",
                }}
                btlLbl="View more details"
                cardDataStyle="cardStyle2"
                btnStyle={{ backgroundColor: "#0f75bc", borderRadius: "2px" }}
                to="/RF_SIGNAL_GENERATORS"
              >
                <span>
                  The DSG800 series covers output frequencies from 9 kHz to 3
                  GHz. The instruments provide maximum output power up to +20
                  dBm
                </span>
              </Card>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <Card
                title="Spectrum Analyzer"
                img={dsa700_series}
                style={{
                  fontSize: "large",
                  fontFamily: "Raleway, sans-serif",
                }}
                btlLbl="View more details"
                cardDataStyle="cardStyle2"
                btnStyle={{ backgroundColor: "#0f75bc", borderRadius: "2px" }}
                to="/Rigol-Spectrum_analyzer"
              >
                <span>
                  It is a long established fact that a reader will be distracted
                  by the readable readable content of a page when looking at its
                  layout.
                </span>
              </Card>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <Card
                title="Waveform Generators"
                img={dg1000_series}
                style={{
                  fontSize: "large",
                  fontFamily: "Raleway, sans-serif",
                }}
                btlLbl="View more details"
                cardDataStyle="cardStyle2"
                btnStyle={{ backgroundColor: "#0f75bc", borderRadius: "2px" }}
                to="/Rigol-Waveform_generators"
              >
                <span>
                  RIGOL DG1000 series function/arbitrary waveform generators use
                  Direct Digital Synthesis (DDS) technology.
                </span>
                <br />
                <br />
              </Card>
            </div>

            {/* content end */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default radium(Module);
