import React from "react";

import images from "../../../../dist/img/Product-parterns/Lpkf/LPKF-Protomat-S103.jpg";

import tableImage from "../../../../dist/img/Product-parterns/Lpkf/lpkf_table3.jpg";
import Title from "../../../common/Title";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const Module = () => {
  let containerBody = {
    height: "auto",
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
    fontSize: "18px",
  };

  return (
    <React.Fragment>
      <Title title="LPKF PROTOMAT S103" />
      <div className="LpkfProtomatS103BreadcrumbPosition">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/prodcts-parterns">Product Partners</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/Lpkf">Lpkf</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <a href="/">LPKF Protomat S103</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="container-fluid page-body">
        <div className="container sdp-body" style={containerBody}>
          {/*------Content start------ */}
          <section className="sectionPart">
            <div className="container">
              <div
                className="protomatS103Image row"
                style={{ marginLeft: "15px", marginRight: "15px" }}
              >
                <div
                  className="protomatS103Data col-md-8 col-md-8columnStyle"
                  style={{
                    position: "relative",
                    padding: "20px 15px 0px 15px",
                  }}
                >
                  <div className="divDetails">
                    <p style={paraHeading}>OVERVIEW</p>

                    <p style={{ textAlign: "justify", fontSize: "16px" }}>
                      The ProtoMat S103 is one of LPKF's top-of-the-line circuit
                      board plotters. The extensively equipped system is
                      suitable for all application areas including multilayer
                      and RF – in FR4 18/18 Cu material it can achieve PCB track
                      widths up to 100 μm. The high rotation speed and precision
                      ensures production of the latest generation of PCBs. The
                      pneumatic non-contact working depth limiter allows
                      substrates with delicate surfaces to be machined.
                    </p>
                  </div>
                </div>
                <div className="imageProtomatS103 col-md-4 col-md-4columnStyle">
                  <div className="divDetails">
                    <img src={images} alt="" className="lpkfImage"></img>
                  </div>
                </div>
              </div>
              <div
                className="row"
                style={{ marginLeft: "15px", marginRight: "15px" }}
              >
                <div className="col-md-12 col-md-12columnStyle">
                  <div className="divDetails">
                    <p style={{ textAlign: "justify", fontSize: "16px" }}>
                      With up to 40 000 rpm, the milling spindle chews through
                      the copper of the base material. The E series LPKF
                      ProtoMats are a low-cost introduction to the world of
                      professional printed circuit board prototyping. What makes
                      them such a winner is the fact that they are so easy to
                      operate.
                    </p>
                    <h4 style={{ fontSize: "22px", marginTop: "20px" }}>
                      FOR MORE DETAILS DOWNLOAD{" "}
                      <a href="lpkf-protomat-e34-44-en.pdf">lpkf</a>
                      <i className="fas fa-file-pdf LinkColor"></i>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="sectionArea">
            <div className="container">
              <div
                className="row"
                style={{ marginLeft: "15px", marginRight: "15px" }}
              >
                <div className="col-md-12">
                  <div className="sectionTableTitle">
                    <h2>TECHNICAL SPECIFICATIONS</h2>
                  </div>
                  <img src={tableImage} alt="" className="imageTable"></img>
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
