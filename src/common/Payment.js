import React from "react";
import radium from "radium";
import { H4 } from "../util";
import Header from "./Header";
import "./Technical-finishing-school.css";
import Data from "../WebsiteData/TechnicalFinishingSchool";

const Payment = () => {
  let paraHeading = {
    fontFamily: "Raleway, sans-serif",
    color: "#2f2b2b",
    lineHeight: "1.1",
    fontWeight: "600",
    marginTop: "0",
    marginBottom: "10px",
    padding: "0",
    textTransform: "uppercase",
    fontSize: "22px"
  };
  let inputStyle = {
    border: "1px solid #ced4da",
    height: "39px",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "13px",
    lineHeight: "1.4285714",
    color: "#777171",
    padding: "6px 12px",
    marginTop: "16px"
  };

  let sdpBody = {
    height: "auto",
    backgroundColor: "#fff",
    marginTop: "5rem",
    marginBottom: "3rem"
  };

  let paragraph = {
    fontFamily: "Open Sans, sans-serif",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "26px",
    color: "#777171"
  };

  return (
    <React.Fragment>
      <div className="container-fluid page-bod">
        <section className="about-area-two bg-f9">
          <div className="container">
            <div className="row">
              <div className="col-lg-12-col-md-12">
                <div className="about-col-two">
                  <h1 className="pd-md" style={{ paraHeading }}>
                    {" "}
                    PAYMENT{" "}
                  </h1>
                  <div className="col-lg-12-col-md-12 pb-sm">
                    <h2 className="lowerh" style={{ marginLeft: "26px" }}>
                      {" "}
                      Program Fee: Rs 6000/- Per head{" "}
                    </h2>
                  </div>
                  <ul className="paymentli" style={paragraph}>
                    <li>
                      To enroll to this Internship Program, fee should reach
                      Digital Shark before 3 days of the program start date. You
                      may pay the fee via online bank transfer, cash or direct
                      deposit.
                    </li>
                    <ul className="paymentabc" style={paragraph}>
                      <div className="col-lg-6 col-md-6">
                        <div
                          className="bg-white p-lg pyminheight"
                          style={{ marginLeft: "-60px", marginRight: "15px" }}
                        >
                          <p className="lispan" style={{ fontWeight: "bold" }}>
                            {" "}
                            a) Online Payment Beneficiary{" "}
                          </p>
                          <p>
                            {" "}
                            Digital Shark Technology Pvt Ltd,
                            <br />
                            Account Number:
                            <span className="lispan">015683800002946,</span>
                            <br />
                            <span className="lispan">
                              {" "}
                              Yes Bank, Malleswaram Branch,
                            </span>
                            <br />
                            IFSC:
                            <span className="lispan">YESB0000156 </span>
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div
                          className="bg-white p-lg pyminheight"
                          style={{ marginLeft: "-60px", marginRight: "15px" }}
                        >
                          <p className="lispan" style={{ fontWeight: "bold" }}>
                            {" "}
                            b) Payment by Demand Draft
                          </p>
                          <p>
                            {" "}
                            The demand draft to be drawn in favor of “Digital
                            Shark Technology Pvt. Ltd. And please mark the
                            “University Registration Number” at the back of the
                            demand draft.
                          </p>
                          <div className="row"></div>
                        </div>
                      </div>
                      <div className="clearfix mb-sm"></div>
                    </ul>
                    <li>
                      {" "}
                      Please mark the “University Registration Number” in the
                      payment proof and email to
                      <Link to="mailto:internship@digitalshark.in">
                        {" "}
                        internship@digitalshark.in
                      </Link>
                    </li>
                    <li>
                      {" "}
                      All attendees MUST register and pay the fee before 1 week
                      prior to start date of the program . Full payment is
                      required prior to attending the Program
                    </li>
                  </ul>
                  <ul className="paymentdisc" style={paragraph}>
                    <li>
                      {" "}
                      For general enquiries, please email
                      <Link to="mailto:info@digitalshark.in">
                        {" "}
                        info@digitalshark.in
                      </Link>
                    </li>
                    <li>
                      For design partner, training partner, academic partner and
                      group booking discounts, please contact Mob:
                      <Link to ="tel:7411742565">+91 7411742565</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*   ------- Accommodation --------- */}

        <section className="about-area-two">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 ">
                <div className="about-col-two">
                  <h1 style={{ paraHeading }}>ACCOMODATION</h1>
                  <p className="text-justify" style={paragraph}>
                    {" "}
                    This is non-residential program and no accommodation will be
                    provided. Attendees can contact host hotel directly for
                    information on room prices and availability with the
                    reference of "Digital Shark Technology"
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 ">
                <div className="about-col-two">
                  <h1 style={{ paraHeading }}>EVENT LOCATION </h1>
                  <p className="text-justify" style={paragraph}>
                    #888, 2nd Floor, 80 Feet Ring Road, Papareddypalya,
                    <br />
                    Nagarabhavi 2nd Stage, Bangalore – 560072
                  </p>
                  <p className="text-justify" style={paragraph}>
                    <strong>LandMark: </strong>
                    Above ICICI Bank Nagarabhavi Branch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Major Topics */}

        <section className="about-area-two bg-f9">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 wow fadeInLeft">
                <div className="about-col-two">
                  <h1 style={{ paraHeading }}> MAJOR TOPICS </h1>
                  <ul className="topicli" style={paragraph}>
                    <li>
                      {" "}
                      Theory & Hands-On Session on TIVA C series TM4C123GXL
                      launch pad boards using Energia software / Code composer
                      studio
                    </li>
                    <li>
                      {" "}
                      Theory & Hands-On Session on TIVA C series and Groove Kit
                      TM4C123GXL launch pad boards using 99Energia software/
                      Code composer studio
                    </li>
                    <li> A World of Internet of Things </li>
                    <li>
                      {" "}
                      Theory & Hands-On Session on TIVA C series, CC3100, CC3200
                      and Groove Kit TM4C123GXL launch pad boards using Energia
                      software/ Code composer studio
                    </li>
                    <li>
                      {" "}
                      Theory and Hands-On Session on TIVA C series TM4C129GXL
                      launchpad using Energia software / Code composer studio
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Further Details */}

        <section className="about-area-two p-lg">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="promo-area-three center-767">
                  <h1 className="lowerh" style={{ paraHeading }}>
                    For Further Details Please contact
                  </h1>
                  <span className="intrcont">
                    <Link to ="tel: 08029772666">+91 08029772666</Link>
                    <Link to="tel: 9916633458"> +91 9916633458</Link>
                    <Link to="tel: 7411742565"> +91 7411742565</Link>
                  </span>
                  <h1 className="mt-sm lowerh"> or </h1>
                  <a className="btn btn-primary my-btn" type="button">
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default radium(Payment);
