import React, { Component } from "react";
import radium from "radium";
import axios from "axios";

import "../dist/css/testimonial.css";
import crossImage from "../dist/img/afterCorrection/dataImage-mob.png";

import OwlCarousel from "react-owl-carousel";

import testimonial from "../dist/img/afterCorrection/test-transparent.png";
import domains from "../config/domains.json";
import background2 from "../dist/img/academic/background2.png";
import testimon from "../dist/img/afterCorrection/estimonials.png";

let url;
let item = [];
class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      fields: {},
      errors: {},
      datas: [],
      file: null,
      submitBtn: false,
      dataDetails: {},
    };
    this.handleChangeFile = this.handleChangeFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleValidationfile = this.handleValidationfile.bind(this);
  }
  state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  async componentWillMount() {
    console.log("path is true or false", this.props.pathfromNewsite);
    this.setState({ states: this.props.pathfromNewsite });
    console.log("path is:", domains.path);
    console.log("data prop is:", this.props.url);

    url = this.props.url;
    console.log("data url is:", url);
  }
  handleChangeFile(e) {
    console.log("file change", e.target.files[0]);
    this.setState({ file: e.target.files[0] });
    console.log("data after file set", this.state.file);
  }

  handleValidationfile() {
    if (this.state.file.size && this.state.file.length > 0) {
      return true;
    } else {
      return false;
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
    if (!fields["details"]) {
      formIsValid = false;
      errors["details"] = "Message cannot be empty";
    }
    if (!fields["message"]) {
      formIsValid = false;
      errors["message"] = "Message cannot be empty";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  async handleSubmit(e) {
    if (this.handleValidation() && this.state.file) {
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      // if (this.state.file) {
      this.setState({ submitBtn: true });
      console.log("data in sending file", this.state.file);
      console.log("path before sending", domains.path);
      console.log("data in states is", this.state.states);
      let datas = new FormData();
      if (this.state.states) {
        let otherFields = { ...this.state.fields, active: false, site: true };
        datas.append("image", this.state.file);
        datas.set("otherFields", JSON.stringify(otherFields));
        console.log("data in otherFeilds", otherFields);

        await axios
          .post(domains.path + "/feedback", datas, config)

          .then((res) => {
            console.log("data comming from image server", res);
            if (res.status === 200) {
              console.log("data if status is: 200", res);
              alert("form submitted");
              window.location.reload(false);
            } else {
              alert("form not submitted, try again");
              window.location.reload(false);
            }
          })
          .catch((err) => {
            alert("form not submitted, try again");
          });
      } else {
        let otherFields = { ...this.state.fields, active: false, site: false };
        datas.append("image", this.state.file);
        datas.set("otherFields", JSON.stringify(otherFields));
        console.log("data in otherFeilds", otherFields);

        await axios
          .post(domains.path + "/feedback", datas, config)

          .then((res) => {
            console.log("data comming from image server", res);
            if (res.status === 200) {
              console.log("data if status is: 200", res);
              alert("form submitted");
              window.location.reload(false);
            } else {
              alert("form not submitted, try again");
              window.location.reload(false);
            }
          })
          .catch((err) => {
            alert("form not submitted, try again");
          });
      }
    }
  }

  displayTestimonial() {
    // item = this.props.data;
    return this.props.data.map((data) => {
      return (
        <div className="testimonialDataPosition">
          <div className="testimonialImgPosition">
            {/* {console.log("data in url inside div", url)} */}
            <img
              src={data.id}
              alt="Avatar"
              style={{
                width: "150px",
                minHeight: "150px",
                height: "150px",
                borderRadius: "50%",
              }}
            />
          </div>

          <div className="testimonialData">
            <h4>{data.message}</h4>
            <h3>{data.name}</h3>
            <h5>{data.details}</h5>
          </div>
        </div>
      );
    });
  }
  handleChange(field, e) {
    console.log("image file", e.target.value);
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
    // this.handleValidation();
    console.log("after setting", this.state.fields);
  }
  render() {
    const {
      pageHeading,
      pageHeadingBody,
      pageHeadingTitle,
      pageHeadingSubTitle,
      pageBreak,
    } = styles;

    console.log("data in data details:", this.state.datas);

    item = this.props.data;

    return (
      console.log("data in props froom roots", item),
      console.log("data in return data in image url", this.state.img),
      (
        <React.Fragment>
          <section
            className="about-area-two"
            style={{ backgroundColor: "white" }}
          >
            <section>
              <div className="ContainerTestimonial TestimonialBannerImage">
                <img
                  className="TestimonialBackgroundImage"
                  src={background2}
                  alt="background"
                ></img>
                <div className="TestimonialBannerDataPosition">
                  <h2>Testimonial </h2>

                  <p>
                    Testimonials are our valuable assets and represent our
                    marketing claims with supported evidence, instant proof and
                    support that how they love or like our services and products
                  </p>
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
                <div className="TestimonialImagePosition banner-item-home-img">
                  <img src={testimon} alt="engineering services"></img>
                </div>
              </div>
            </section>
          </section>

          <section>
            <div className="ImageDisplayTestimonial">
              <div className="arrowImagePositionTestimonial">
                <img src={crossImage} alt="crossImage"></img>
              </div>
              <div className="dataPresentTestimonial">
                <h2>Testimonial </h2>
                <p>
                  Testimonials are our valuable assets and represent our
                  marketing claims with supported evidence, instant proof and
                  support that how they love or like our services and products
                </p>
              </div>
              <div className="testimonialsImage banner-item-home-img">
                <img
                  src={testimonial}
                  alt="Embedded"
                  style={{ width: "86%" }}
                ></img>
              </div>
            </div>
          </section>

          <div className="pageBreak" style={pageBreak}></div>
          <section>
            <div
              className="teamDataPosition"
              style={{
                width: "80%",
                justifyContent: "center",
                margin: "0px 10%",
              }}
            >
              <div className="header-section" style={pageHeading}>
                <div className="page-title" style={pageHeadingBody}>
                  <h2 style={pageHeadingTitle}>
                    <span>What People Says</span>
                  </h2>
                </div>
                <p className="testi sub-title-text" style={pageHeadingSubTitle}>
                  If you’re out to change the world in ways that matter, you’re
                  in the right place. Explore our extensive professional areas,
                  resources and opportunities, and discover how you can make all
                  the difference in the lives of others.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="sectionTestimonial">
              <div className="dataRepresentTestimon">
                <h4>What our clients say</h4>
                <h2>client Testimonials</h2>
              </div>
              {console.log("data in state div", this.state.datas)}

              <OwlCarousel
                className="client-carousel"
                loop={true}
                margin={10}
                nav={true}
                dots={false}
                autoplay={true}
                autoplayTimeout={3000}
                items={1}
                responsive={this.state.responsive}
                smartSpeed={1500}
              >
                {this.displayTestimonial()}
              </OwlCarousel>
            </div>
          </section>

          <section>
            <div className="FeedBackForm">
              <div className="FeedBackCardPosition">
                <div className="FormTitle row" style={{ display: "block" }}>
                  <h2>Your Feedback Is Important To Us</h2>
                </div>
                <div className="FormFirstRow row">
                  <div
                    className="col-md-6 col-sm-12 col-xs-12"
                    style={{ textAlign: "left" }}
                  >
                    <label style={{ margin: "1% 0" }}>Name:</label>

                    <input
                      type="text"
                      name="name"
                      ref="name"
                      placeholder="Enter your name"
                      size="30"
                      onChange={this.handleChange.bind(this, "name")}
                      value={this.state.fields["name"]}
                    ></input>
                    <span style={{ color: "red" }}>
                      {this.state.errors["name"]}
                    </span>
                  </div>
                  <div
                    className="firstRowSecondColumn col-md-6 col-sm-12 col-xs-12"
                    style={{ textAlign: "left" }}
                  >
                    <label style={{ margin: "1% 0" }}>Email:</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your Email"
                      ref="email"
                      onChange={this.handleChange.bind(this, "email")}
                      value={this.state.fields["email"]}
                    ></input>
                    <span style={{ color: "red" }}>
                      {this.state.errors["email"]}
                    </span>
                  </div>
                </div>
                <div className="FormSecondRow row">
                  <div
                    className="col-md-12 col-xs-12 col-sm-12"
                    style={{ textAlign: "left" }}
                  >
                    <label style={{ margin: "1% 0" }}>Phone:</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter your phone number"
                      ref="phone"
                      defaultValue={this.state.fields["phone"]}
                      onChange={this.handleChange.bind(this, "phone")}
                      value={this.state.fields["phone"]}
                    ></input>
                    <span style={{ color: "red" }}>
                      {this.state.errors["phone"]}
                    </span>
                  </div>
                </div>
                <div className="FormThirdRow row">
                  <div
                    className="col-md-12 col-xs-12 col-sm-12"
                    style={{ textAlign: "left" }}
                  >
                    <label style={{ margin: "1% 0" }}>Details</label>
                    <input
                      type="text"
                      name="company"
                      ref="company"
                      placeholder="Enter your  Company / College / Hospital etc:"
                      // ref="details"
                      onChange={this.handleChange.bind(this, "details")}
                      value={this.state.fields["details"]}
                    ></input>
                    <span style={{ color: "red" }}>
                      {this.state.errors["details"]}
                    </span>
                  </div>
                </div>
                <div className="FormFourthRow row">
                  <div
                    className="col-md-12 col-xs-12 col-sm-12"
                    style={{ textAlign: "left" }}
                  >
                    <label style={{ margin: "1% 0" }}>Message</label>
                    <input
                      type="text"
                      name="message"
                      placeholder="Enter your  message for us"
                      ref="message"
                      size="300"
                      onChange={this.handleChange.bind(this, "message")}
                      value={this.state.fields["message"]}
                    ></input>
                    <span style={{ color: "red" }}>
                      {this.state.errors["message"]}
                    </span>
                  </div>
                </div>
                <div className="">
                  <input
                    type="file"
                    id="file"
                    name="file"
                    accept="image/*"
                    onChange={this.handleChangeFile}
                  ></input>
                </div>
                <div className="FormFifthRow row ">
                  {console.log("data in render:", this.state.submitBtn)}
                  <button
                    type="submit"
                    value="Submit"
                    onClick={this.handleSubmit}
                    disabled={this.state.submitBtn}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )
    );
  }
}
export default radium(Testimonials);
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
      marginLeft: "-5%",
      marginTop: "18%",
    },
    "@media only screen and (width: 1024px) and (height: 1366px)": {
      marginLeft: "2%",
      marginTop: "18%",
    },
    "@media screen and (device-width: 640px) and (device-height: 360px) and (orientation: landscape)": {
      minHeight: "380px",
    },
    "@media screen and (device-width: 640px) and (device-height: 384px) and (orientation: landscape)": {
      minHeight: "350px",
    },
    "@media screen and (device-width: 732px) and (device-height: 412px) and (orientation: landscape)": {
      minHeight: "400px",
    },
    "@media screen and (device-width: 854px) and (device-height: 480px) and (orientation: landscape)": {
      minHeight: "300px",
    },
    "@media screen and (device-width: 731px) and (device-height: 411px) and (orientation: landscape)": {
      minHeight: "400px",
    },
    "@media screen and (device-width: 823px) and (device-height: 411px) and (orientation: landscape)": {
      minHeight: "500px",
      marginTop: "34%",
    },
    "@media screen and (device-width: 667px) and (device-height: 375px) and (orientation: landscape)": {
      minHeight: "360px",
    },
    "@media screen and (device-width: 736px) and (device-height: 414px) and (orientation: landscape)": {
      minHeight: "420px",
    },
    "@media screen and (device-width: 812px) and (device-height: 375px) and (orientation: landscape)": {
      minHeight: "520px",
    },
    "@media only screen and (width: 800px) and (height: 1280px)": {
      minHeight: "450px",
    },

    "@media only screen and (width: 768px) and (height: 1024px)": {
      minHeight: "450px",
    },
  },
  bnrHeading: {
    color: "black",
    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      fontSize: "smaller",
    },
    // Small devices (landscape phones, 576px and up)
    "@media screen and (min-width: 481px) and (max-width:767px)": {
      maxWidth: "66%",
      marginLeft: "-14%",
      marginTop: "12%",
    },
    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 768px) and (max-width:991px)": {
      maxWidth: "66%",
      marginLeft: "-5%",
      marginTop: "18%",
    },
    // Large devices (desktops, 992px and up)
    "@media screen and (min-width: 992px) and (max-width:1199px)": {
      maxWidth: "66%",
      marginLeft: "0%",
      marginTop: "0%",
    },
    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      maxWidth: "66%",
      marginLeft: "4%",
      marginTop: "12%",
      fontSize: "4rem",
    },
    "@media only screen and (width: 1024px) and (height: 625px)": {
      marginLeft: "12%",
    },
    "@media screen and (width:320px)": { fontSize: "smaller" },
    "@media screen and (device-width: 640px) and (device-height: 360px) and (orientation: landscape)": {
      marginTop: "10%",
    },
    "@media screen and (device-width: 732px) and (device-height: 412px) and (orientation: landscape)": {
      marginTop: "30%",
    },
    "@media screen and (device-width: 731px) and (device-height: 411px) and (orientation: landscape)": {
      marginTop: "40%",
    },
    "@media screen and (device-width: 823px) and (device-height: 411px) and (orientation: landscape)": {
      marginTop: "32%",
    },
    "@media screen and (device-width: 736px) and (device-height: 414px) and (orientation: landscape)": {
      marginTop: "40%",
    },
    "@media screen and (device-width: 812px) and (device-height: 375px) and (orientation: landscape)": {
      marginTop: "40%",
    },
  },

  bnrText: {
    color: "black",
    fontWeight: "600",
    fontFamily: "Lato, MoolBoran",
    textAlign: "justify",

    "@media screen and (width:320px)": {
      marginLeft: "-9%",
      paddingRight: "0",
      lineHeight: "14px",
    },
    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      marginLeft: "-5%",
    },
    "@media screen and (min-width: 481px) and (max-width: 767px)": {
      marginLeft: "-13%",
      fontSize: "1.3rem",
      lineHeight: "1.5",
      fontWeight: "600",
    },
    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 768px) and (max-width: 991px)": {
      fontSize: "1.5rem",
      marginLeft: "-4%",
      maxWidth: "81%",
      fontWeight: "600",
      lineHeight: "1.8",
    },
    // Large devices (desktops, 992px and up)
    "@media screen and (min-width: 992px)  and (max-width:1199px)": {
      fontSize: "1.5rem",
      marginLeft: "1.5%",
      maxWidth: "90%",
      letterSpacing: "0.05rem",
      lineHeight: "1.8",
      fontWeight: "600",
    },

    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      fontSize: "1.7rem",
      fontWeight: "600",
      marginLeft: "5%",
      maxWidth: "77%",
      letterSpacing: "0.05rem",
      lineHeight: "1.8",
    },
    "@media (min-height: 625px) and (max-height: 625px) and (min-width: 1024px) and (max-width: 1024px)": {
      marginLeft: "13%",
    },
  },
  pageTitle: { "@media screen and (max-width:500px)": { margin: "0" } },
  pageBreak: {
    marginTop: "-1%",
    "@media screen and (width:768px)": { marginTop: "-4%", height: "2vh" },
    "@media screen and (max-width:600px)": { marginTop: "3%", height: "1vh" },
    "@media screen and (max-width:500px)": { marginTop: "12%", height: "3vh" },
    "@media screen and (width:320px)": { marginTop: "4%", height: "2vh" },
    "@media screen and (device-width: 854px) and (device-height: 480px) and (orientation: landscape)": {
      marginTop: "6%",
    },
  },
  pageHeading: {
    "@media screen and (max-width:789px)": {
      display: "flex",
      flexDirection: "column",
      width: "93%",
      justifyContent: "center",
    },
  },
  pageHeadingBody: {
    "@media (max-width: 575px)": {
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      background: "#0576be",
      textAlign: "center",
      textTransform: "uppercase",
      fontFamily: "Roboto, GothamBook, sans-serif",
      color: "white",
      paddingTop: "3%",

      paddingBottom: "3%",
      position: "relative",
    },
    "@media screen and (min-width: 576px) and (max-width:789px)": {
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
  },

  pageHeadingTitle: {
    "@media screen and (max-width:789px)": {
      fontSize: "1.6rem",
      letterSpacing: "3px",
      lineHeight: "29px",
    },
  },
  pageHeadingSubTitle: {
    lineHeight: "1.6",
    textAlign: "center",
    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      fontSize: "1.4rem",
      padding: "4px 5%",
      textAlign: "center",
    },
    "@media screen and (min-width: 481px) and (max-width: 767px)": {
      fontSize: "1.5rem",
      padding: "10px 7%",
      textAlign: "center",
    },

    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 768px) and (max-width: 991px)": {
      fontSize: "1.5rem",
      padding: "10px 5%",
      textAlign: "center",
    },
    // Large devices (desktops, 992px and up)
    "@media screen and (min-width: 992px) and (max-width: 1199px)": {
      fontSize: "1.6rem",
      padding: "10px 12%",
      textAlign: "center",
      maxWidth: "inherit",
    },
    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      fontSize: "1.6rem",
      padding: "1px 22%",
      textAlign: "center",
      maxWidth: "inherit",
    },
  },
};
