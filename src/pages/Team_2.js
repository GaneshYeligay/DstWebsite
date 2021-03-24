import React from "react";
// import prashant from "../dist/img/team/coreTeam/prashnath.jpg";
import narayanan from "../dist/img/team/coreTeam/narayanan.png";
// import teamImage from "../dist/img/team1.jpg";
import "../dist/css/custom.css";
import Radium from "radium";
/* import Contactbar from "../common/contact-side-bar"; */
const Team = () => {
  let style = {
    width: "100%",
    display: "flex",
    marginTop: "4rem",
    justifyContent: "center",

    "@media screen and (max-width:800px)": {
      flexDirection: "column",
      marginTop: "7rem",
    },
    // "@media screen and (max-width:500px)": { flexDirection: "column" }
  };

  return (
    <React.Fragment>
      {/*        <!-- Team Style Two -->
    <!--- First Start----> */}
      <section className="team-style-two ">
        <div className="row">
          <div className="row-1" style={style}>
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
                  src={narayanan}
                  alt="narayanan"
                  className="img-circle"
                  // style={{ margin: "5em 40px" }}
                />
                <p className="dstQuote" style={{ marginBottom: "-2rem" }}></p>
                <p className="textUnder" style={{ textAlign: "center" }}>
                  Never give up on what you want to do & achieve
                </p>
                {/*   <div className="textUnder">
               
              </div> */}
              </div>
            </div>

            <div style={{ paddingTop: "30px" }}>
              <p className="teamName">Shivakumar Narayana,</p>

              <p className="teamSpecialize">
                Director of Engineering & Business Development
              </p>
              <p className="teamDetails">
                As a Director of Engineering & Business Development in Digital
                Shark Technology, he plays critical role in taking company to a
                next level in adding new accounts with business development,
                with his expertise managing the programs & customer facing for
                successful projects delivery.
              </p>
              <p></p>
              <p className="teamDetails">
                He is having electronic Industry experience of 22+ years with
                expertise in Program Management, Team Building, Customer
                Relationship Management, Test Technical operations, Global EMS
                interactions, Design & Development. In the past worked on
                domains of Defense, Medical & Consumer electronics in companies
                New Kinpo Group, Pace Micro Technology, Sarnoff Corporation, and
                Bharat Electronics
              </p>
              <p></p>
              <p className="teamDetails">
                He is passionate to build strong, professional teams of
                like-minded individuals who share his passion for engineering
                services delivery, operational excellence, technology and
                responsibility. He has managed teams with direct reports across
                the world and he excels in an environment where the ability to
                communicate across cultures and distances
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*   <Contactbar /> */}
    </React.Fragment>
  );
};

export default Radium(Team);
