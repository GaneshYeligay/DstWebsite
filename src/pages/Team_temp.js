import React from "react";
import yatish from "../dist/img/team/coreTeam/yatish.jpg";
import kishor from "../dist/img/team/coreTeam/kishore.jpg";
import Manoj from "../dist/img/team/coreTeam/manoj.jpg";
import prashant from "../dist/img/team/coreTeam/prashnath.jpg";
import teamImage from "../dist/img/team1.jpg";
import "../dist/css/custom.css";
/* import Contactbar from "../common/contact-side-bar"; */
// import Logo from "./logo";
const Team_temp = () => {
  return (
    <React.Fragment>
      {/*        <!-- Team Style Two -->
    <!--- First Start----> */}
      <section className="team-style-one " style={{ background: "white" }}>
        {/* <div
          className="row"
          style={{ height: "100%", width: "100%", padding: "40px" }}
        > */}

        <div className="row">
          <div
            className="col-xs-4"
            style={{ marginTop: "103px", paddingLeft: "90px" }}
          >
            <div className="">
              <img
                src={prashant}
                alt="Prashanth Ram"
                className="img-circle"
                style={{ margin: "1em 40px" }}
              />
            </div>
            <br />
            <div className="textUnder">
              <p className="dstQuote"></p>
              <br />
              <p>
                Our vision is technology that seamlessly enables opportunities
                for a smarter world.
              </p>
            </div>
          </div>
          <div className="col-xs-8" style={{ paddingTop: "30px" }}>
            <p className="teamName">Prashanth Ram</p>

            <p className="teamSpecialize">Chief Executive Officer</p>
            <p className="teamDetails">
              Prashanth Ram, is known for his impressive track record of
              success, commitment to culture and human values, and true
              strategic consultative approachi. As a CMO, he plays a critical
              role in Digital Shark Technology’s executive steering committee
              guiding direction and strategic decisions for the company. He’s
              responsible for the growth and culture of the company.
            </p>
            <p className="teamDetails">
              Prashanth joined Digital Shark Technology in 2017 as Chief
              Marketing Officer, overseeing marketing, public relations and
              business development initiatives and developing new and existing
              lines of business for the company
            </p>
            <p className="teamDetails">
              Previous work includes big brands like TI, Qualcomm, HP and
              Capgemini. He handles any situation with Effortless Ease,
              Uncompromising Courage and Solid Confidence. He's responsible for
              pushing Digital Shark Technology to new levels of excellence and
              success through new strategies, idea generation and innovation.
            </p>
            <p className="teamDetails">
              Prashanth Ram holds an MBA in Marketing from Symbiosis, Pune &
              Master’s in computer systems analysis from Victoria University of
              Wellington, NZ.
            </p>
          </div>
        </div>

        {/* </div> */}
      </section>
      {/* <Contactbar /> */}
    </React.Fragment>
  );
};

export default Team_temp;