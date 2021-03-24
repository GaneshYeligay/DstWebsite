import React from "react";
import hardwareImgae from "../dist/img/service/hardware-new.jpg";
import customeWebAppDev from "../dist/img/service/Custom_web_app_development.png";
import blockchain from "../dist/img/service/BLOCKCHAIN_ML_CHATBOTS.png";
import ai_based_mobile_app from "../dist/img/service/Product re-engineering.png";
const Service = () => {
  return (
    <React.Fragment>
      {/* hardware */}
      <section className="team-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-5  wow fadeInLeft">
              <img
                src={hardwareImgae}
                className="img-thumbnail"
                style={{
                  borderRadius: "15px",
                  border: "none",
                  boxShadow: "7px 10px #acaead",
                  padding: "0",
                  paddingBottom: "0"
                }}
                alt="Digital Marketing"
              />
            </div>
            <div className="col-sm-7  wow fadeInRight smallScreen">
              <div style={{ marginLeft: "20px" }}>
                <h3 style={{ color: "#0e76bc" }}>HARDWARE</h3>
                <p>
                  • Smart Hardware Board Design, which includes product/system
                  architecture, schematic design, FPGA design, a design
                  analysis.
                  <br />
                  • PCB Layout Engineering Services
                  <br />
                  • Industrial Design
                  <br />
                  • Product Verification and Validation
                  <br />
                  • Prototype Manufacturing
                  <br />
                  • Strong expertise in part modeling, sheet metal part Modeling
                  and assembly modeling using Solid works, Catia and AUTOCAD
                  <br />• Smooth transition to contract manufacturer and support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM WEB APP DEVELOPMENT */}

      <section className="team-area">
        <div className="container" style={{ overflow: "hidden" }}>
          <div className="row">
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5  wow fadeInLeft">
              <img
                src={customeWebAppDev}
                className="img-thumbnail"
                style={{
                  borderRadius: "15px",
                  border: "none",
                  boxShadow: "7px 10px #acaead",
                  padding: "0",
                  paddingBottom: "0"
                }}
                alt="Custom web app development"
              />
            </div>
            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 wow fadeInRight smallScreen">
              <div style={{ marginLeft: "20px" }}>
                <h3 style={{ color: "#0e76bc" }}>CUSTOM WEB APP DEVELOPMENT</h3>
                <p className="mb-md">
                  We provide custom web application development services ranging
                  from basic landing pages to complex customized web solutions
                  helping clients achieve their business goals effectively.
                </p>
                <p>
                  • Pre-support audits and assessment
                  <br />
                  • Infrastructure audits and assessment
                  <br />• Current system audits and assessment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCKCHAIN, ML & CHATBOTS */}

      <section className="team-area bg-f9 service">
        <div className="container" style={{ overflow: "hidden" }}>
          <div className="row">
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 wow fadeInRight pull-right">
              <img
                src={blockchain}
                className="img-thumbnail"
                style={{
                  borderRadius: "15px",
                  border: "none",
                  boxShadow: "7px 10px #acaead",
                  padding: "0",
                  paddingBottom: "0"
                }}
                alt="BLOCKCHAIN, ML & CHATBOTS"
              />
            </div>
            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7  wow fadeInLeft smallScreen">
              <h3 style={{ color: "#0e76bc" }}>BLOCKCHAIN, ML & CHATBOTS</h3>
              <p className="mb-md">
                We build real-time chatbots which understands your business and
                enhances its knowledge with time
              </p>
              <p>
                • Customer service website chatbots
                <br />
                • Facebook based service chatbots
                <br />• Personalized chatbots for training purposes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI BASED MOBILE APPS */}

      <section className="team-area">
        <div className="container" style={{ overflow: "hidden" }}>
          <div className="row">
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5  wow fadeInLeft">
              <img
                src={ai_based_mobile_app}
                className="img-thumbnail"
                style={{
                  borderRadius: "15px",
                  border: "none",
                  boxShadow: "7px 10px #acaead",
                  padding: "0",
                  paddingBottom: "0"
                }}
                alt="AI BASED MOBILE APPS"
              />
            </div>
            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 wow fadeInRight smallScreen">
              <div style={{ marginLeft: "20px" }}>
                <h3 style={{ color: "#0e76bc" }}>AI BASED MOBILE APPS</h3>
                <p className="mb-md">
                  Deliver outstanding, personalized customer experiences across
                  all your channels through data-driven insights into every
                  customer’s needs.
                </p>
                <p>
                  • Online service/product comparison apps
                  <br />
                  • Finance report & stock market apps
                  <br />• Personal finance management apps
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*ENTERPRISE MOBILITY SOLUTIONS*/}
      <section className="team-area bg-f9 service">
        <div className="container" style={{ overflow: "hidden" }}>
          <div className="row">
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 wow fadeInRight pull-right">
              <img
                src={blockchain}
                className="img-thumbnail"
                style={{
                  borderRadius: "15px",
                  border: "none",
                  boxShadow: "7px 10px #acaead",
                  padding: "0",
                  paddingBottom: "0"
                }}
                alt="ENTERPRISE MOBILITY SOLUTIONS"
              />
            </div>
            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7  wow fadeInLeft smallScreen">
              <h3 style={{ color: "#0e76bc" }}>
                ENTERPRISE MOBILITY SOLUTIONS
              </h3>
              <p className="mb-md">
                With the help of latest tools, frameworks and SDKs, our mobile
                app development teams build connected products for smart
                businesses and deliver quality enterprise mobility solutions.
              </p>
              <p>
                • Smart home solutions
                <br />
                • Wearable gadget apps
                <br />• Voice based IoT solutions
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Service;
