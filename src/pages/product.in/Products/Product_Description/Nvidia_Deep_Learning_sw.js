import React from "react";
import NVIDIA from "../../../../dist/img/Nvidia_lab/Nvidia_dls2.jpg";
import Title from "../../../common/Title";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import nvidiadigit from "../../../../dist/img/Nvidia_lab/nvidiadigit.jpg";

const Deep_Learning_sw = () => {
  return (
    <React.Fragment>
      <Title title="NVIDIA DEEP LEARNING" />

      <section>
        <div className="DGXStationcrumbPosition">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/prodcts-parterns">Product Partners</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="/Nvidia_ml_labs">Nvidia</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              <a href="/">Deep Learning</a>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </section>
      <section>
        <div className="NvidiaDataDesc">
          <div className="row rowNvidiaColor marginrowTopNvidiDL">
            <div className="NvidiaDLImg col-xs-12 col-md-6">
              <div className="sectionNvidiaDLImage">
                <img src={nvidiadigit} alt="Nvidia Digits"></img>
              </div>
            </div>
            <div className="NvidiaDLData col-xs-12 col-md-6">
              <div className="sectionNvidiaDLData">
                <h2>Nvidia Digits</h2>
                <p>
                  {" "}
                  The NVIDIA Deep Learning GPU Training System (DIGITS) puts the
                  power of Deep Learning into the hands of budding Engineers.
                  DIGITS can be used to rapidly train the highly accurate deep
                  neural network (DNNs) for image classification, segmentation
                  and object detection tasks.
                </p>
              </div>
            </div>
          </div>
          <div className="row rowNvidiaSdkColor NvidiaSdkColReverse">
            <div className="NvidiaSdkData col-xs-12 col-md-6">
              <div className="sectionNvidiaSdkData">
                <h2>Nvidia Deep Learning SDK</h2>
                <p>
                  {" "}
                  The NVIDIA Deep Learning SDK provides powerful tools and
                  libraries for designing and deploying GPU-accelerated deep
                  learning applications. It includes libraries for deep learning
                  primitives, inference, video analytics, linear algebra, sparse
                  matrices, and multi-GPU communications.
                </p>
              </div>
            </div>

            <div className="NvidiaSdkImg col-xs-12 col-md-6">
              <div className="sectionNvidiaSdkImage">
                <img src={NVIDIA} alt="Nvidia Digits"></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*     
      <section className="sectionImage">
        <div className="container-fluid page-body product-desc">
          <div className="container-fluid sdp-body productImage">
            <div className="containerGyapBreadcrumb"></div>

            <div className="row rowStyleDGXSystem1">
              <div
                className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 colRowFirst"
              >
                <img
                  src={Nvidia_dls}
                  className="imageStyleDlsFirst"
                  alt="DL3000 Series   |  DC Electronic Loads"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="details-col columnStyleDGXSystem1">
                  <h3
                    style={{
                      fontSize: "48px",
                      fontFamily: "Lato, Helvetica, Arial, sans-serif"
                    }}
                  >
                    NVIDIA DIGITS
                  </h3>
                  <p
                    style={{
                      padding: "0px 40px 0px 40px",
                      textAlign: "center"
                    }}
                  >
                    The NVIDIA Deep Learning GPU Training System (DIGITS) puts
                    the power of Deep Learning into the hands of budding
                    Engineers. DIGITS can be used to rapidly train the highly
                    accurate deep neural network (DNNs) for image
                    classification, segmentation and object detection tasks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sectionBackground">
        <div className="container-fluid page-body product-desc">
          <div
            className="container-fluid sdp-body"
            style={containerBody}
            style={{ marginTop: "4rem" }}
          >
            <div className="row rowStyleDGXSystem2">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="details-col columnStyleDGXSystem2">
                  <h3
                    style={{
                      fontSize: "48px",
                      fontFamily: "Lato, Helvetica, Arial, sans-serif"
                    }}
                  >
                    NVIDIA Deep Learning SDK
                  </h3>

                  <p style={{ padding: "0px 40px 0px 40px" }}>
                    The NVIDIA Deep Learning SDK provides powerful tools and
                    libraries for designing and deploying GPU-accelerated deep
                    learning applications. It includes libraries for deep
                    learning primitives, inference, video analytics, linear
                    algebra, sparse matrices, and multi-GPU communications.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <img
                  src={NVIDIA}
                  className="imageStyleDlsSecond"
                  alt="DL3000 Series   |  DC Electronic Loads"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
     */}
    </React.Fragment>
  );
};
export default Deep_Learning_sw;
