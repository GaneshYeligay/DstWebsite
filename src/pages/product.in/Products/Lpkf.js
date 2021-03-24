import React from "react";
import Card from "./assets/Card";
import E34_E44 from "../../../dist/img/Product-parterns/Lpkf/LPKF-ProtoMat-E34-E44.jpg";
import S_103 from "../../../dist/img/Product-parterns/Lpkf/LPKF-Protomat-S103.jpg";
import S_63 from "../../../dist/img/Product-parterns/Lpkf/LPKF-Protomat-S63.jpg";
import Title from "../../common/Title";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const Module = () => {
  let containerBody = {
    height: "100vh",
    backgroundColor: "#fff",
    marginTop: "5rem",
    marginBottom: "3rem",
  };

  return (
    <React.Fragment>
      <Title
        title="Rigol"
        img={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Logo_LPKF_Laser_%26_Electronics.svg/1200px-Logo_LPKF_Laser_%26_Electronics.svg.png"
        }
        imgStyle={{ marginTop: "9rem", height: "10rem" }}
      />
      <div className="LPKFBreadcrumbPosition">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/prodcts-parterns">Product Partners</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <a href="/">LPKF</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="container-fluid page-body">
        <div className="container sdp-body" style={containerBody}>
          {/*------Content start------ */}

          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <Card
              title="LPKF PROTOMAT E34 / E44"
              img={E34_E44}
              style={{ fontSize: "large", fontFamily: "Raleway, sans-serif" }}
              btlLbl="View more details"
              cardDataStyle="cardStyle2"
              to="/Lpkf-protomat-e34"
            >
              <span>
                With up to 40 000 rpm, the milling spindle chews through the
                copper of the base material. The E series LPKF ProtoMats are a
                low-cost..
              </span>
            </Card>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <Card
              title="LPKF PROTOMAT S63"
              img={S_63}
              style={{ fontSize: "large", fontFamily: "Raleway, sans-serif" }}
              btlLbl="View more details"
              cardDataStyle="cardStyle2"
              btnStyle={{ backgroundColor: "#0f75bc", borderRadius: "2px" }}
              to="/Lpkf_protomat_s63"
            >
              <span>
                The ProtoMat S63 is the ideal system for virtually all in-house
                prototyping applications where speed and security are crucial...
              </span>
            </Card>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <Card
              title="LPKF PROTOMAT S103"
              img={S_103}
              style={{ fontSize: "large", fontFamily: "Raleway, sans-serif" }}
              btlLbl="View more details"
              cardDataStyle="cardStyle2"
              btnStyle={{ backgroundColor: "#0f75bc", borderRadius: "2px" }}
              to="/Lpkf_protomat_s103"
            >
              <span>
                The ProtoMat S103 is one of LPKF's top-of-the-line circuit board
                plotters. The extensively equipped system is suitable for all
                application...
              </span>
            </Card>
          </div>

          {/* content end */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Module;
