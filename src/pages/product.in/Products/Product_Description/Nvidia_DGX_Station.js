import React from "react";
import DGXStation from "../../../../dist/img/Nvidia_lab/DgxStation2.png";
import DGX1 from "../../../../dist/img/Nvidia_lab/Nvidia_dgx3.jpg";
import DGX2 from "../../../../dist/img/Nvidia_lab/Nvidia_dgx2.jpg";
import Card from "../../../common/Card";
// import Title from "../../../common/Title";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const DGX_Systems = () => {
  let containerBody = {
    height: "auto",
    backgroundColor: "white",
    marginTop: "4rem",
  };
  let containerBody1 = {
    height: "auto",
    backgroundColor: "#e5eceb",
    marginTop: "4rem",
  };
  const titleStyle1 = {
    fontFamily: "Raleway, sans-serif",
    fontSize: "19px",
    fontWeight: "600",
    // textAlign: "left",
    padding: "10px",
    lineHeight: "1",
    textAlign: "center",
  };
  return (
    <React.Fragment>
      <div className="DGXStationcrumbPosition">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/prodcts-parterns">Product Partners</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/Nvidia_ml_labs">Nvidia</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <a href="/">Nvidia DGX Station</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <section className="sectionImage sectionHeight">
        <div className="container-fluid page-body product-desc">
          <div className="container-fluid sdp-body" style={containerBody}>
            <div className="containerGyapBreadcrumb"></div>

            <div className="row rowStyleDGXSystem1">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="details-col columnStyleDGXSystem1">
                  <h3
                    style={{
                      fontSize: "48px",
                      fontFamily: "Lato, Helvetica, Arial, sans-serif",
                    }}
                  >
                    DGX station
                  </h3>

                  <h4
                    style={{
                      padding: "30px 40px 0px 40px",
                      fontSize: "24px",
                      fontFamily: "Lato, Helvetica, Arial, sans-serif",
                    }}
                  >
                    NVIDIA DGX Station Delivers 50X Faster Deep Learning
                    Training
                  </h4>
                  <p
                    style={{
                      padding: "0px 40px 0px 40px",
                      textAlign: "center",
                    }}
                  >
                    NVIDIA DGX Station is the world’s fastest workstation for
                    leading-edge AI development. This fully integrated and
                    optimized system enables you to get started faster and
                    effortlessly experiment with the power of a data center.
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-4"></div>
                  <div className="col-md-4 colmd4Position">
                    <div className="btnNvidiaDGX">
                      <a href="#section04">Read More</a>
                    </div>
                  </div>
                  <div className="col-md-4"></div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 colRowFirst"
                // style={{ left: "5%" }}
              >
                <img
                  src={DGXStation}
                  className="img-thumbnail imageStyleFirst"
                  alt="DL3000 Series   |  DC Electronic Loads"
                  style={{ height: "70vh", border: "none", boxShadow: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sectionBackground" id="section04">
        <div className="container-fluid page-body product-desc">
          <div className="container-fluid sdp-body" style={containerBody1}>
            <div className="rowStyle row rowStyleDGXSystem2">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 fw-600">
                <Card
                  title="DGX 1 "
                  img={DGX2}
                  height={"200px"}
                  style={titleStyle1}
                  cardArea="cardArea_blog"
                  cardDataStyle="cardContentStyle"
                  mainData="WORLD’S MOST POWERFUL AI SYSTEM"
                  data="
                  Break through the barriers to AI speed and scale with NVIDIA DGX-2, the first 2 petaFLOPS system that engages 16 fully interconnected GPUs for 10X the deep learning performance. Powered by NVIDIA DGX software and an architecture designed for AI-scale built on NVIDIA NVSwitch, DGX-2 enables you to take on the world’s most complex deep learning challenges.
"
                  btlLbl="Read More"
                  btnStyle={{
                    padding: "10px 20px",
                    background: "#015e9e",
                    color: "white",
                    position: "relative",
                    borderRadius: "0px",
                    border: "1px solid #015e9e",
                    fontSize: "19px",
                    fontWeight: "500",
                  }}
                ></Card>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 fw-600">
                <Card
                  title="DGX 2"
                  img={DGX1}
                  height={"200px"}
                  style={titleStyle1}
                  cardArea="cardArea_blog"
                  cardDataStyle="cardContentStyle"
                  mainData="THE FASTEST PATH TO DEEP LEARNING"
                  data="
The essential instrument for AI research, designed to accelerate your data center and streamline your deep learning workflow. Experiment faster, train larger models and get insights starting on day one. Now offered with NVIDIA Volta, NVIDIA DGX-1 delivers industry-leading performance for AI and deep learning.

"
                  btlLbl="Read More"
                  btnStyle={{
                    padding: "10px 20px",
                    background: "#015e9e",
                    color: "white",
                    position: "relative",
                    borderRadius: "0px",
                    border: "1px solid #015e9e",
                    fontSize: "19px",
                    fontWeight: "500",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Open Sans, sans-serif",
                      fontSize: "17px",
                      lineHeight: "27px",
                      textAlign: "justify",
                    }}
                  >
                    <i
                      className="fa fa-user"
                      aria-hidden="true"
                      style={{
                        paddingRight: "5px",
                      }}
                    ></i>
                    By Prashanth Ram
                    <br />
                    <br />
                    An internship turning into a job is one of the best and
                    rewarding outcomes of an internship. Not every, but many
                    internships have the possibility of
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default DGX_Systems;
