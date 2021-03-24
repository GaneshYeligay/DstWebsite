import React from "react";

import images from "../../../../dist/img/Product-parterns/Lpkf/LPKF-Protomat-S63.jpg";
import tableImage from "../../../../dist/img/Product-parterns/Lpkf/lpkf_table2.jpg";
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
      <Title title="LPKF PROTOMAT S63" />
      <div className="LpkfProtomatS63BreadcrumbPosition">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/prodcts-parterns">Product Partners</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/Lpkf">Lpkf</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <a href="/">LPKF Protomat S63</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="container-fluid page-body">
        <div className="container sdp-body" style={containerBody}>
          {/*------Content start------ */}
          <section className="sectionPart">
            <div className="container">
              <div
                className="protomatS63Image row"
                style={{ marginLeft: "15px", marginRight: "15px" }}
              >
                <div
                  className="protomatS63Data col-md-8 col-md-8columnStyle"
                  style={{
                    position: "relative",
                    padding: "20px 15px 0px 15px",
                  }}
                >
                  <div className="divDetails">
                    <p style={paraHeading}>OVERVIEW</p>

                    <p style={{ textAlign: "justify", fontSize: "16px" }}>
                      The ProtoMat S63 is the ideal system for virtually all
                      in-house prototyping applications where speed and security
                      are crucial. It's also perfectly suited for multilayer-
                      and RF applications. The high rotational speed ensures the
                      fine structures of up to 100 μm required by many modern
                      applications.
                    </p>
                  </div>
                </div>
                <div className="imageProtomatS63 col-md-4 col-md-4columnStyle">
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
                      The ProtoMat S103 is an indispensable tool for any
                      prototype or small batch production. Ease-of-use and
                      utmost reliability are the basis for cost-effective and
                      high-quality production.
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
