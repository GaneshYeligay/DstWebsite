import React from "react";

import Nvidia_Nano from "../../../dist/img/Nvidia_Jetson/jetson nano.jpg";
import Jetson_TX1 from "../../../dist/img/Nvidia_Jetson/jetson TX1.png";
import Jetson_TX2 from "../../../dist/img/Nvidia_Jetson/jetson tx2.png";
import Jetson_Xavier from "../../../dist/img/Nvidia_Jetson/jetson Xavier.png";
import Card from "./assets/Card";
import Nvidia from "../../../dist/img/Nvidia_Jetson/jetson Nano developer kit.png";

import DemoDialog from "../../../common/Dialog-box/Discription-dialog-box";

import Title from "../../common/Title";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const Module = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openDialog = (event) => {
    //alert("opened",event)
    setOpen(true);
  };
  let containerBody = {
    height: "auto",
    backgroundColor: "#fff",
    // marginTop: "5rem",
    marginBottom: "3rem",
  };

  return (
    <React.Fragment>
      <Title title="NVIDIA" />
      <div className="NvidiaJetsonBreadcrumbPosition">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/prodcts-parterns">Product Partners</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/Nvidia_ml_labs">Nvidia</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <a href="/">Nvidia Jetson</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="content-wrapper">
        <section className="content">
          <div className="page-header">
            <section className="sectionImage">
              <div className="container-fluid page-body product-desc">
                <DemoDialog
                  setOpen={setOpen}
                  open={open}
                  handleClose={handleClose}
                  handleClickOpen={handleClickOpen}
                />
                <div className="container-fluid sdp-body" style={containerBody}>
                  <div className="row rowStyleDGXSystem1">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <div className="details-col columnStyleDGXSystem1">
                        <h3
                          style={{
                            fontSize: "38px",
                            fontFamily: "Lato, Helvetica, Arial, sans-serif",
                          }}
                        >
                          Nvidia Jetson Series
                        </h3>

                        <h4
                          style={{
                            padding: "30px 40px 0px 40px",
                            fontSize: "24px",
                            fontFamily: "Lato, Helvetica, Arial, sans-serif",
                          }}
                        >
                          NVIDIA JETSON SERIES PROVIDES THE PERFORMANCE AND
                          POWER EFFICIENCY
                        </h4>
                        <p
                          style={{
                            padding: "0px 40px 0px 40px",
                            textAlign: "center",
                          }}
                        >
                          NVIDIA Jetson systems provide the performance and
                          power efficiency to run autonomous machines software,
                          faster and with less power. Each is a complete
                          System-on-Module (SOM), with CPU, GPU, PMIC, DRAM, and
                          flash storage—saving development time and money.
                          Jetson is also extensible. Just select the SOM that’s
                          right for the application, and build the custom system
                          around it to meet its specific needs.
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                      // style={{ left: "5%" }}
                      style={{ textAlign: "center" }}
                    >
                      <img
                        src={Nvidia}
                        alt=""
                        className="img-thumbnail imageStyleFirst"
                        /*  alt="DL3000 Series   |  DC Electronic Loads" */
                        style={{
                          height: "50vh",
                          border: "none",
                          boxShadow: "none",
                          marginTop: "70px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="container-fluid page-body product-desc">
              <div className="container-fluid sdp-body" style={containerBody}>
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ">
                    <Card
                      title="Nvidia Jetson Nano"
                      img={Nvidia_Nano}
                      alt=""
                      style={{
                        fontSize: "large",
                        fontFamily: "Raleway, sans-serif",
                      }}
                      btlLbl="View more details"
                      btnStyle={{
                        backgroundColor: "#0f75bc",
                        borderRadius: "2px",
                      }}
                      cardDataStyle="cardStyle2"
                      onPress={openDialog}
                    >
                      <span>
                        The Jetson Nano module is a small AI computer that has
                        the performance and power efficiency needed to run
                        modern AI workloads, multiple neural networks in
                        parallel and process data from several high-resolution
                        sensors simultaneously.
                      </span>
                    </Card>
                  </div>
                  {/*------ second ------*/}

                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ">
                    <Card
                      title="Jetson TX1"
                      img={Jetson_TX1}
                      style={{
                        fontSize: "large",
                        fontFamily: "Raleway, sans-serif",
                      }}
                      btlLbl="View more details"
                      btnStyle={{
                        backgroundColor: "#0f75bc",
                        borderRadius: "2px",
                      }}
                      cardDataStyle="cardStyle2"
                      onPress={openDialog}
                    >
                      <span>
                        The world's first supercomputer on a module, Jetson TX1
                        is capable of delivering the performance and power
                        efficiency needed for the latest visual computing
                        applications. It's built around the revolutionary NVIDIA
                        Maxwell
                      </span>
                    </Card>
                  </div>
                  {/*------ Third ------*/}
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ">
                    <Card
                      title="Jetson TX2 Series"
                      img={Jetson_TX2}
                      style={{
                        fontSize: "large",
                        fontFamily: "Raleway, sans-serif",
                      }}
                      btlLbl="View more details"
                      btnStyle={{
                        backgroundColor: "#0f75bc",
                        borderRadius: "2px",
                      }}
                      cardDataStyle="cardStyle2"
                      onPress={openDialog}
                    >
                      <span>
                        NVIDIA Jetson TX2 gives you exceptional speed and
                        power-efficiency in an embedded AI computing device.
                        Jetson TX2 is the fastest, most power-efficient embedded
                        AI computing device. This supercomputer-on-a-module
                      </span>
                    </Card>
                  </div>
                  {/*------ Third ------*/}
                </div>

                {/*------ Fourth ------*/}
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ">
                    <Card
                      title="Jetson AGX Xavier"
                      img={Jetson_Xavier}
                      style={{
                        fontSize: "large",
                        fontFamily: "Raleway, sans-serif",
                      }}
                      btlLbl="View more details"
                      btnStyle={{
                        backgroundColor: "#0f75bc",
                        borderRadius: "2px",
                      }}
                      cardDataStyle="cardStyle2"
                      onPress={openDialog}
                    >
                      <span>
                        Jetson AGX Xavier is the first computer designed
                        specifically for autonomous machines. It has six Engines
                        onboard for accelerated sensors data processing and
                        running autonomous machines software, and offers the
                        performance and power.
                      </span>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};
export default Module;
