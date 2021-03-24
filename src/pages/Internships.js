import React, { Component } from "react";
import radium from "radium";
import { H4 } from "../common";
import "./Technical-finishing-school.css";
import crossImage from "../dist/img/afterCorrection/dataImage-mob.png";
import intern from "../dist/img/afterCorrection/intern-trs.jpg";
import image1 from "../dist/img/career3.jpg";
import image2 from "../dist/img/career4.jpg";
import image3 from "../dist/img/career5.jpg";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Leaflet from "../dataset/Leaflet.pdf";
import { Link } from "react-router-dom";
import axios from "axios";
import domains from "../config/domains.json";
import background2 from "../dist/img/academic/background2.png";
import intern123 from "../dist/img/afterCorrection/internship123.png";

class Internships extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      fields: {},
      errors: {},
      datas: [],
      submitBtn: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      this.setState({ submitBtn: true });
      const intershipData = {
        name: this.state.fields["name"],
        email: this.state.fields["email"],
        phone: this.state.fields["phone"],
        college: this.state.fields["college"],
        state: this.state.fields["state"],
        month: this.state.fields["month"],
      };
      console.log("values in sending to intership database", intershipData);
      axios
        .post(domains.path + "/internship", intershipData)
        .then(function (response) {
          console.log("data return from intership ", response);
          if (response.status === 200) {
            alert("form submitted successfully");
            window.location.reload(false);
          } else {
            alert("form not submitted");
            window.location.reload(false);
          }
        })
        .catch(function (error) {
          console.log("error occured", error);
        });
    } else {
      alert("form not submitted");
    }
  }
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    console.log("length of fields", fields.size);
    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Name cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[.a-zA-Z\s-, ]+$/)) {
        formIsValid = false;
        errors["name"] = "Name can contain only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Email cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (regex.test(fields["phone"])) {
      console.log("number is valid");
    } else {
      formIsValid = false;
      errors["phone"] = "Enter valid number";
    }

    if (!fields["college"]) {
      formIsValid = false;
      errors["college"] = "College Name cannot be empty";
    }

    if (typeof fields["college"] !== "undefined") {
      if (!fields["college"].match(/^[.a-zA-Z\s-, ]+$/)) {
        formIsValid = false;
        errors["college"] = "College Name can contain only letters";
      }
    }

    if (!fields["state"]) {
      formIsValid = false;
      errors["state"] = "State cannot be empty";
    }

    if (typeof fields["state"] !== "undefined") {
      if (!fields["state"].match(/^[.a-zA-Z\s-, ]+$/)) {
        formIsValid = false;
        errors["state"] = "State can contain only letters";
      }
    }
    if (fields["month"] === "") {
      formIsValid = false;
      errors["month"] = "Select any month";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }
  handleChange(field, e) {
    console.log("value in state field:", e.target.value);
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
    console.log("after assignning:", this.state.fields);
  }

  render() {
    let inputStyle = {
      border: "1px solid #ced4da",
      height: "39px",
      fontFamily: "Open Sans, sans-serif",
      fontSize: "13px",
      lineHeight: "1.4285714",
      color: "#777171",
      padding: "6px 12px",
      marginTop: "16px",
    };

    let sdpBody = {
      height: "auto",
      backgroundColor: "#fff",
      marginTop: "1rem",
      marginBottom: "3rem",
    };

    const {
      pageBreak,
      pageHeading,
      pageHeadingBody,
      pageHeadingTitle,
    } = styles;

    return (
      <React.Fragment>
        <section>
          <div className="ContainerInternship InternshipBannerImage">
            <img
              className="IntershipBackgroundImage"
              src={background2}
              alt="background"
            ></img>
            <div className="InternshipBannerDataPosition">
              <h2>Internship </h2>

              <p>
                We offer DST internship, an in-house training programme to work
                on projects which provides the industry standard experience.
              </p>

              <div className="LearnMoreLinkPDF " /* style={{float: "left"}} */>
              {/* <Link to={Leaflet} target="_blank">
                Click here for more details
              </Link> */}
               <a href = {Leaflet} target = "_blank" rel="noopener noreferrer"> Click here for more details</a>
              <i
                className="fa fa-arrow-right"
                aria-hidden="true"
                style={{ color: "blue" }}
              ></i>
            </div>
              <div
                className="LearnMoreLink "
                onClick={(e) => {
                  window.scrollTo({
                    top: 771,
                    behavior: "smooth",
                  });
                }}
              >
                Learn More{" "}
                <i className="fa fa-arrow-down" aria-hidden="true"></i>
              </div>
            </div>
            <div className="InternshipImagePosition banner-item-home-img">
              <img src={intern123} alt="team"></img>
            </div>
          </div>
        </section>

        <section>
          <div className="ImageDisplayInternship">
            <div className="arrowImagePositionInternship">
              <img src={crossImage} alt="crossImage"></img>
            </div>
            <div className="dataPresentInternship">
              <h2>Internship </h2>
              <p>
                We offer DST internship, an in-house training programme to work
                on projects which provides the industry standard experience.{" "}
              </p>
            </div>
            <div className="internshipImage banner-item-home-img">
              <img src={intern} alt="Embedded" style={{ width: "86%" }}></img>
            </div>
          </div>
        </section>
        <div className="pageBreak" style={pageBreak}></div>
        <section style={{ textAlign: "-webkit-center" }}>
          <div
            className="row"
            style={{
              width: "100%",
              justifyContent: "center",
              display: "inline-block",
            }}
          >
            <div className="header-section" style={pageHeading}>
              <div className="page-title" style={pageHeadingBody}>
                <h2 style={pageHeadingTitle}>
                  <span>where Theory meets practice</span>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="internshipNewImagesPosition">
            <div className="row imagesAdded">
              <div className="col-md-4 col-xs-12 col-sm-12">
                <img src={image1} alt=""></img>
              </div>
              <div className="col-md-4 col-xs-12 col-sm-12">
                <img src={image2} alt=""></img>
              </div>
              <div className="col-md-4 col-xs-12 col-sm-12">
                <img src={image3} alt=""></img>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="containerFAQ">
            <div className="divisionHeader">
              <h2>Frequently Asked Questions (FAQ's)</h2>
            </div>
            <ExpansionPanel /* expanded={expanded === 'panel1'} onChange={handleChange('panel1')} */
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="typographyHeader">
                  What is embedded and IoT internship?
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  This is a bi-directional exchange of technical information
                  between the technical work forces at Digital Shark Technology
                  and University Students, including hands-on technical
                  training. Structured to meet the needs of today’s embedded
                  design engineers.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel /* expanded={expanded === 'panel2'} onChange={handleChange('panel2')} */
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="typographyHeader">
                  What we do?
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  - Train students on following technologies…….
                  <br />
                  - Firmware development, Embedded Linux introduction, motor
                  control etc.
                  <br />
                  - Network protocol MQTT, SSH, HTTP,TCP/IP
                  <br />
                  - Arm cortex M4f Architecture. <br />
                  - Python for data analysis
                  <br /> - Natural language processing....
                  <Link to={Leaflet} className="intershipLink" target="blank">
                    Click here for more details...
                  </Link>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel /* expanded={expanded === 'panel3'} onChange={handleChange('panel3')} */
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography className="typographyHeader">
                  Who should attend?
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Those who are looking for in-depth knowledge in embedded
                  systems and IoT. Design engineer aspirants will benefit from
                  the Internship by learning about solutions and interfacing
                  with various sensors.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel /* expanded={expanded === 'panel4'} onChange={handleChange('panel4')} */
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <Typography className="typographyHeader">
                  Why you should attend?
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Attendees graduating from the DST’s Internship program will be
                  equipped to go out and use various industry standard products
                  to full advantage. Certificates will be awarded upon
                  completion of the internship.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel /* expanded={expanded === 'panel5'} onChange={handleChange('panel5')} */
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5a-content"
                id="panel5a-header"
              >
                <Typography className="typographyHeader">
                  Benefits of attending our internship
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  - Hassle free internship can be conducted to your own College
                  campus. <br />
                  - Domain knowledge on the Technology and major focus on
                  Hands-On Sessions. <br />
                  - Certified 4 weeks of internship program. <br />- Industrial
                  standard Trainings to Bridge the Gap between Academia and
                  Industries.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </section>
        <section>
          <div className="container page-body containerWidth">
            <div
              className="internshipContainerColSpace container sdp-body"
              style={sdpBody}
            >
              <div className="row two-column-body mt-0">
                <div
                  className="col-lg-12 col-md-12 col-sm-12 col-xs-12  pull-right"
                  style={{ marginLeft: "auto" }}
                >
                  <div className="col-lg-12">
                    <H4 className="text-center">REGISTRATION FORM</H4>
                  </div>

                  {/*   ------- form start--------- */}

                  <form
                    action="#"
                    method="post"
                    id="registerForm"
                    noValidate="noValidate"
                    className="fv-form fv-form-bootstrap"
                  >
                    <button
                      type="submit"
                      className="fv-hidden-submit"
                      style={{ display: "none", width: "0px", height: "0px" }}
                    ></button>
                    <div className="col-md-12 text-center">
                      <div className="form-group">
                        <input
                          style={inputStyle}
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          ref="name"
                          size="30"
                          onChange={this.handleChange.bind(this, "name")}
                          value={undefined}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors["name"]}
                        </span>
                        <small
                          className="help-block"
                          data-fv-validator="notEmpty"
                          data-fv-for="name"
                          data-fv-result="NOT_VALIDATED"
                          style={{ display: "none" }}
                        >
                          Please Enter your name
                        </small>
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          style={inputStyle}
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          ref="email"
                          size="30"
                          onChange={this.handleChange.bind(this, "email")}
                          value={undefined}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors["email"]}
                        </span>
                        <small
                          className="help-block"
                          data-fv-validator="notEmpty"
                          data-fv-for="email"
                          data-fv-result="NOT_VALIDATED"
                          style={{ display: "none" }}
                        >
                          Please Enter email id
                        </small>
                        <small
                          className="help-block"
                          data-fv-validator="regexp"
                          data-fv-for="email"
                          data-fv-result="NOT_VALIDATED"
                          style={{ display: "none" }}
                        >
                          Invalid Email Address
                        </small>
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          name="phone"
                          style={inputStyle}
                          className="form-control"
                          placeholder="Contact number"
                          ref="phone"
                          size="30"
                          onChange={this.handleChange.bind(this, "phone")}
                          value={undefined}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors["phone"]}
                        </span>
                        <small
                          className="help-block"
                          data-fv-validator="notEmpty"
                          data-fv-for="phone"
                          data-fv-result="NOT_VALIDATED"
                          style={{ display: "none" }}
                        >
                          Please Enter phone number
                        </small>
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          name="college"
                          className="form-control"
                          style={inputStyle}
                          placeholder="College name"
                          ref="college"
                          size="30"
                          onChange={this.handleChange.bind(this, "college")}
                          value={this.state.fields["college"]}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors["college"]}
                        </span>
                        <small
                          className="help-block"
                          data-fv-validator="notEmpty"
                          data-fv-for="college_name"
                          data-fv-result="NOT_VALIDATED"
                          style={{ display: "none" }}
                        >
                          Please Enter College Name
                        </small>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="state"
                          className="form-control"
                          placeholder="State"
                          style={inputStyle}
                          ref="state"
                          size="30"
                          onChange={this.handleChange.bind(this, "state")}
                          value={undefined}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors["state"]}
                        </span>
                        <small
                          className="help-block"
                          data-fv-validator="notEmpty"
                          data-fv-for="state"
                          data-fv-result="NOT_VALIDATED"
                          style={{ display: "none" }}
                        >
                          Please enter State
                        </small>
                      </div>
                      <div className="form-group">
                        <select
                          className="form-control"
                          name="month"
                          title="Select Service"
                          data-fv-field="month"
                          style={inputStyle}
                          ref="month"
                          onChange={this.handleChange.bind(this, "month")}
                        >
                          <option value="">Select Month</option>
                          <option value="January">January</option>
                          <option value="February">February</option>
                          <option value="March">March</option>
                          <option value="April">April</option>
                          <option value="May">May</option>
                          <option value="June">June</option>
                          <option value="July">July</option>
                          <option value="August">August</option>
                          <option value="September">September</option>
                          <option value="October">October</option>
                          <option value="November">November</option>
                          <option value="December">December</option>
                        </select>
                        <span style={{ color: "red" }}>
                          {this.state.errors["month"]}
                        </span>
                        <small
                          className="help-block"
                          data-fv-validator="notEmpty"
                          data-fv-for="month"
                          data-fv-result="NOT_VALIDATED"
                          style={{ display: "none" }}
                        >
                          Please Select Month
                        </small>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <input
                        type="submit"
                        value="Submit"
                        onClick={this.handleSubmit}
                        disabled={this.state.submitBtn}
                      ></input>
                    </div>
                  </form>

                  {/*----------- form End ------*/}
                </div>

                {/*-----*/}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default radium(Internships);
let styles = {
  carouselPos: {
    "@media  (min-width:1400px)": {
      marginLeft: "0%",
      marginTop: "18%",
    },
    // Medium devices (tablets, 768px and up)
    "@media (min-width: 768px)": {
      marginLeft: "0%",
      marginTop: "18%",
    },
    // Large devices (desktops, 992px and up)
    "@media (min-width: 992px)": {
      marginLeft: "0%",
      marginTop: "18%",
    },
  },
  bnrHeading: {
    color: "black",
    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      fontSize: "smaller",
    },
    // Small devices (landscape phones, 576px and up)
    "@media screen and (min-width: 481px) and (max-width: 767px)": {
      maxWidth: "66%",
      marginLeft: "-5%",
      marginTop: "12%",
      fontSize: "2.7rem",
    },

    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 768px) and (max-width: 991px)": {
      maxWidth: "66%",
      marginLeft: "-5%",
      marginTop: "12%",
    },
    // Large devices (desktops, 992px and up)
    "@media screen and (min-width: 992px) and (max-width: 1199px)": {
      maxWidth: "66%",
      marginLeft: "0%",
      marginTop: "0%",
    },
    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      maxWidth: "66%",
      marginLeft: "-5%",
      marginTop: "12%",
      fontSize: "4rem",
    },

    "@media screen and (width:320px)": { fontSize: "smaller" },
    "@media screen and (device-width: 823px) and (device-height: 411px) and (orientation: landscape)": {
      marginLeft: "-4%",
      marginTop: "55%",
    },
    "@media screen and (device-width: 812px) and (device-height: 375px) and (orientation: landscape)": {
      marginLeft: "-4%",
      marginTop: "60%",
    },
  },

  bnrText: {
    color: "black",
    fontWeight: "600",
    fontFamily: "Lato, MoolBoran",
    display: "inline-block",
    textAlign: "justify",

    "@media screen and (width:320px)": {
      marginLeft: "-9%",
      paddingRight: "0",
    },

    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      marginLeft: "-5%",
    },
    "@media screen and (min-width: 481px ) and (max-width: 767px)": {
      fontSize: "1.3rem",
      marginLeft: "-10px",
    },
    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 768px) and (max-width: 991px)": {
      fontSize: "1.4rem",
      marginLeft: "-4%",
      maxWidth: "70%",
      lineHeight: "1.8",
    },
    // Large devices (desktops, 992px and up)
    "@media screen and (min-width: 992px) and (max-width: 1199px)": {
      fontSize: "1.5rem",
      marginLeft: "0%",
      maxWidth: "95%",
      letterSpacing: "0.05rem",
      lineHeight: "1.8",
    },
    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      fontSize: "1.7rem",
      fontWeight: "600",
      marginLeft: "-5%",
      maxWidth: "77%",
      letterSpacing: "0.05rem",
      lineHeight: "1.8",
    },
  },
  pageTitle: { "@media screen and (max-width:500px)": { margin: "0" } },
  pageBreak: {
    marginTop: "-1%",
    "@media screen and (width:768px)": { marginTop: "-4%", height: "2vh" },
    "@media screen and (max-width:600px)": { marginTop: "3%", height: "1vh" },
    "@media screen and (max-width:500px)": { marginTop: "12%", height: "3vh" },
    "@media screen and (width:320px)": { marginTop: "4%", height: "2vh" },
    "@media screen and (min-width:480px) and (max-width: 576px)": {
      marginTop: "30%",
    },
  },
  pageHeading: {
    "@media screen and (max-width:575px)": {
      display: "flex",
      flexDirection: "column",
      width: "93%",
      justifyContent: "center",
    },
    "@media screen and (min-width:576px) and (max-width: 767px)": {},
    "@media screen and (min-width:768px) and (max-width: 991px)": {
      marginLeft: "-7%",
    },

    "@media screen and (min-width:992px) and (max-width: 1199px)": {},
    "@media screen and (min-width:1200px) and (max-width: 1299px)": {},
    "@media screen and (min-width:1300px) and (max-width: 1399px)": {},
    "@media (min-width: 1400px)": {},
    "@media only screen and (width:640px) and (height: 360px)": {},
  },
  pageHeadingBody: {
    "@media screen and (max-width:789px)": {
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      background: "#3c32b7",
      textAlign: "center",
      textTransform: "uppercase",
      fontFamily: "Roboto, GothamBook, sans-serif",
      color: "white",
      paddingTop: "3%",

      paddingBottom: "3%",
      position: "relative",
    },
    "@media (max-width:575px)": {
      background: "#3c32b7",
      color: "white",
    },
    "@media screen and (min-width:790px)": {
      width: "94%",
    },
  },

  pageHeadingTitle: {
    "@media screen and (max-width:789px)": {
      fontSize: "1.6rem",
      letterSpacing: "3px",
      lineHeight: "29px",
    },
    "@media (max-width: 575px)": {
      color: "black",
      textTransform: "capitalize",
      fontFamily: "Lato,MoolBoran",
      fontWeight: "600",
      fontSize: "24px",
      letterSpacing: "0",
    },
  },
  pageHeadingSubTitle: {
    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      fontSize: "smaller",
      padding: "4px 5%",
      textAlign: "center",
    },
    // Medium devices (tablets, 768px and up)
    "@media (min-width: 768px)": {
      fontSize: "smaller",
      padding: "10px 12%",
      textAlign: "center",
    },
    // Large devices (desktops, 992px and up)
    "@media (min-width: 992px)": {
      fontSize: "large",
      padding: "10px 12%",
      textAlign: "center",
      maxWidth: "inherit",
    },
    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      fontSize: "large",
      padding: "1px 22%",
      textAlign: "center",
      maxWidth: "inherit",
    },
  },
};
