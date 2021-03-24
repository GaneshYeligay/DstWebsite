import React from "react";
import yatish from "../../dist/img/team/coreTeam/yatish.jpg";
// import kishor from "../../dist/img/team/coreTeam/kishore.jpg";
import prashant from "../../dist/img/team/coreTeam/prashnath.jpg";
import "../../dist/css/team.css";
/* import Contactbar from "../../../src/common/contact-side-bar/index"; */
// import { Fade } from "react-reveal";
import Radium from "radium";
import crossImage from "../../dist/img/afterCorrection/dataImage-mob.png";
import team from "../../dist/img/afterCorrection/team-trs.png";
import background2 from "../../dist/img/academic/background2.png";
import Team2 from "../Team_2";
import Team3 from "../Team_3";
const Team = (props) => {
  const {
    // bnrHeading,
    // bnrText,
    pageHeading,
    pageHeadingBody,
    pageHeadingTitle,
    // carouselPos,
    // pageHeadingSubTitle,
    pageBreak,
  } = styles;
  let style = {
    width: "100%",
    display: "flex",
    marginTop: "4rem",
    justifyContent: "center",

    "@media screen and (max-width:800px)": {
      flexDirection: "column-reverse",
      marginTop: "7rem",
    },
    // "@media screen and (max-width:500px)": { flexDirection: "column" }
  };

  return (
    <React.Fragment>
      <section className="about-area-two" style={{ backgroundColor: "white" }}>
        <section>
          <div className="ContainerTeam TeamBannerImage">
            <img
              className="TeamBackgroundImage"
              src={background2}
              alt="background"
            ></img>
            <div className="TeamBannerDataPosition">
              <h2>Unity is our strength </h2>

              <p>
                Alone we can do so little, together we can do so much. when
                there is teamwork and collaboration, wonderful things can be
                achieved, Individual commitment to a group effort--that is what
                makes a company work
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
            <div className="TeamImagePosition banner-item-home-img">
              <img src={team} alt="team"></img>
            </div>
          </div>
        </section>
      </section>

      <section>
        <div className="imageDisplayTeam">
          <div className="arrowImagePositionTeam">
            <img src={crossImage} alt="crossImage"></img>
          </div>
          <div className="dataPresentTeam">
            <h2>Unity is our strength </h2>
            <p>
              Alone we can do so little, together we can do so much. when there
              is teamwork and collaboration, wonderful things can be achieved,
              Individual commitment to a group effort--that is what makes a
              company work
            </p>
          </div>
          <div className="teamImage banner-item-home-img">
            <img src={team} alt="Embedded" style={{ width: "86%" }}></img>
          </div>
        </div>
      </section>
      <div className="pageBreak" style={pageBreak}></div>
      <section>
        <div
          className="teamDataPosition"
          style={{ width: "100%", justifyContent: "center", margin: "0" }}
        >
          <div className="header-section" style={pageHeading}>
            <div className="page-title" style={pageHeadingBody}>
              <h2 style={pageHeadingTitle}>
                <span>OUR TEAM</span>
              </h2>
            </div>
            {/* <p className="sub-title-text">
            If you’re out to change the world in ways that matter, you’re in the
            right place. Explore our extensive professional areas, resources and
            opportunities, and discover how you can make all the difference in
            the lives of others.
          </p> */}
          </div>
        </div>
      </section>
      <section className="team-style-one ">
        <div className="row">
          <div className="row-1" style={style}>
            <div style={{ paddingTop: "30px" }}>
              <p className="teamName">Yatish Muniraju</p>
              <p className="teamSpecialize">Co-founder & CEO</p>
              <p className="teamDetails">
                He has total 13+ years of Industry experience in Digital Signal
                processing and Embedded System domain under various platforms of
                DSP and Microcontroller based system design in the domain of
                Medical, Automotive and Consumer Electronics. He had worked as
                Senior DSP engineer for 5+ years in Tektronix Research and
                Development, India and led different High Speed Signal Integrity
                analysis team such as PCI, DDRA etc . He also worked with GL
                Communication, India for 4+ years as DSP lead in Echo analysis
                team for Telecom domain.
              </p>
              &nbsp;&nbsp;
              <p className="teamDetails">
                He was part of various International conferences and
                participated in High speed Signal Integrity PCI and DDRA
                Standard meetings in US.
              </p>
              &nbsp;&nbsp;
              {/* <p className="teamDetails">
                He also worked with GL Communication, India for 4+ years as DSP
                & Embedded lead in Echo analysis team for Telecom domain.
              </p>&nbsp;&nbsp; */}
              <p className="teamDetails">
                He has an experience in various roles such as Engineering
                Consulting, Training, service management and delivery processes
                from concept through finished product, with close attention to
                profitability, budgets, time frames, quality, service
                requirements and product specifications across India and
                overseas
              </p>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img
                  src={yatish}
                  alt="Yatish Muniraju"
                  className="img-circle"
                  // style={{ margin: "5em 40px" }}
                />
                <p className="dstQuote" style={{ marginBottom: "-2rem" }}></p>
                <p className="textUnder" style={{ textAlign: "center" }}>
                  A great leader not only leads, he turns followers into
                  leaders!
                </p>
                {/*   <div className="textUnder">
               
              </div> */}
              </div>
            </div>
          </div>
          {/* <Team_temp /> */}
        </div>
        {/* <br />
        <br /> */}
      </section>
      <div className="row">
        <Team2 />
      </div>
      <section className="team-style-one " style={{ marginBottom: "20px" }}>
        <div className="row">
          <div className="row-1" style={style}>
            <div style={{ paddingTop: "30px" }}>
              <p className="teamName">Prashanth Ram</p>
              <p className="teamSpecialize">
                Co-Founder and Director of Marketing and Sales
              </p>
              <p className="teamDetails">
                Prashanth Ram, is known for his impressive track record of
                success, commitment to culture and human values, and true
                strategic consultative approach. As a Co-founder & Director of
                Marketing & Sales, he plays a critical role in Digital Shark
                Technology’s executive steering committee guiding direction and
                strategic decisions for the company. He is responsible for the
                growth and culture of the company. He drives by overseeing
                marketing, public relations and business development initiatives
                and developing new and existing lines of business for the
                company.
              </p>
              &nbsp;&nbsp;
              <p className="teamDetails">
                Previous work includes big brands like TI, Qualcomm, HP and
                Capgemini. He handles any situation with Effortless Ease,
                Uncompromising Courage and Solid Confidence. He's responsible
                for pushing Digital Shark Technology to new levels of excellence
                and success through new strategies, idea generation and
                innovation.
              </p>
              &nbsp;&nbsp;
              <p className="teamDetails">
                Prashanth Ram holds an MBA in Marketing from Symbiosis, Pune &
                Master’s in computer systems analysis from Victoria University
                of Wellington, NZ.
              </p>
              {/* <p className="teamDetails">
                Prashanth Ram holds an MBA in Marketing from Symbiosis, Pune &
                Master’s in computer systems analysis from Victoria University
                of Wellington, NZ.
              </p> */}
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img src={prashant} alt="prashant M" className="img-circle" />
                <p className="dstQuote" style={{ marginBottom: "-2rem" }}></p>
                <p className="textUnder" style={{ textAlign: "center" }}>
                  Technology enables as to work from anywhere on the planet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row">
        <Team3 />
      </div>
      {/* <Contactbar /> */}
    </React.Fragment>
  );
};

export default Radium(Team);
let styles = {
  carouselPos: {
    "@media  (min-width:1400px)": {
      marginLeft: "0%",
      marginTop: "18%",
    },
    // Medium devices (tablets, 768px and up)
    "@media (min-width: 768px)": {
      marginLeft: "0%",
      marginTop: "20%",
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

    "@media screen and (device-width: 732px) and (device-height: 412px) and (orientation: landscape)": {
      minHeight: "390px",
    },
    "@media screen and (device-width: 960px) and (device-height: 600px) and (orientation: landscape)": {
      marginTop: "-50%",
    },
    "@media screen and (device-width: 640px) and (device-height: 360px) and (orientation: landscape)": {
      minHeight: "350px",
    },
    "@media screen and (device-width: 731px) and (device-height: 411px) and (orientation: landscape)": {
      minHeight: "390px",
    },
    "@media screen and (device-width: 667px) and (device-height: 375px) and (orientation: landscape)": {
      minHeight: "350px",
    },
    "@media screen and (device-width: 736px) and (device-height: 414px) and (orientation: landscape)": {
      minHeight: "400px",
    },
    "@media screen and (device-width: 812px) and (device-height: 375px) and (orientation: landscape)": {
      minHeight: "200px",
    },
    "@media screen and (device-width: 640px) and (device-height: 384px) and (orientation: landscape)": {
      minHeight: "400px",
    },
    "@media screen and (device-width: 823px) and (device-height: 411px) and (orientation: landscape)": {
      minHeight: "600px",
    },
    "@media only screen and (width: 600px) and (height: 1024px)": {
      minHeight: "350px",
    },
  },
  bnrHeading: {
    color: "black",
    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      fontSize: "smaller",
    },
    "@media only screen and (min-device-width : 640px) and (max-device-width : 640px) and (orientation : landscape)": {
      fontSize: "2rem",
    },
    // Small devices (landscape phones, 576px and up)
    "@media screen and (min-width: 481px) and (max-width:767px)": {
      maxWidth: "77%",
      marginLeft: "-1%",
      marginTop: "12%",
    },
    // Medium devices (tablets, 768px and up)
    "@media  screen and (min-width: 768px) and (max-width:991px)": {
      maxWidth: "74%",
      marginLeft: "-5%",
      marginTop: "12%",
      fontSize: "2.7rem",
    },
    // Large devices (desktops, 992px and up)
    "@media  screen and (min-width: 992px) and (max-width: 1199px)": {
      maxWidth: "66%",
      marginLeft: "0%",
      marginTop: "0%",
    },

    // Extra large devices (large desktops, 1200px and up)

    "@media (min-width: 1200px)": {
      maxWidth: "70%",
      marginLeft: "5%",
      marginTop: "12%",
      fontSize: "4rem",
    },

    "@media screen and (width:320px)": { fontSize: "smaller" },
    "@media screen and (device-width: 732px) and (device-height: 412px) and (orientation: landscape)": {
      marginTop: "30%",
    },
    "@media screen and (device-width: 731px) and (device-height: 411px) and (orientation: landscape)": {
      marginTop: "40%",
    },
    "@media screen and (device-width: 823px) and (device-height: 411px) and (orientation: landscape)": {
      marginTop: "30%",
    },
    "@media screen and (device-width: 736px) and (device-height: 414px) and (orientation: landscape)": {
      marginTop: "30%",
    },
    "@media screen and (device-width: 812px) and (device-height: 375px) and (orientation: landscape)": {
      marginTop: "30%",
    },
    "@media only screen and (width: 1024px) and (height: 625px)": {
      marginLeft: "12%",
    },
  },

  bnrText: {
    color: "black",
    fontWeight: "600",
    fontFamily: "Lato, MoolBoran",
    textAlign: "justify",
    /*   maxWidth: "80%",
    marginLeft: "-5%", */
    "@media screen and (width:320px)": {
      marginLeft: "-9%",
      paddingRight: "0",
    },

    // Small devices 480px or less then
    "@media (max-width: 480px)": {
      marginLeft: "-5%",
    },
    // Medium devices (tablets, 768px and up)
    "@media screen and (min-width: 481px) and (max-width:767px)": {
      fontSize: "1.3rem",
      marginLeft: "0%",
      maxWidth: "97%",
      lineHeight: "1.5",
    },
    // Large devices (desktops, 992px and up)
    "@media screen and (min-width: 768px) and (max-width:991px) ": {
      fontSize: "1.2em",
      marginLeft: "-4%",
      maxWidth: "96%",
      letterSpacing: "0.05rem",
      lineHeight: "1.8",
    },
    // Extra large devices (large desktops, 1200px)
    "@media  screen and (min-width: 992px) and (max-width: 1199px)": {
      marginLeft: "2%",
      lineHeight: "1.8",
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
      marginLeft: "12%",
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
      marginTop: "15%",
    },
  },
  pageHeading: {
    "@media (max-width:789px)": {
      display: "flex",
      flexDirection: "column",
      width: "90%",
      justifyContent: "center",
      marginLeft: "5%",
    },
    // Extra large devices (large desktops, 1200px and up)
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
  },

  pageHeadingTitle: {
    "@media screen and (max-width:789px)": {
      fontSize: "1.6rem",
      letterSpacing: "3px",
      lineHeight: "29px",
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
