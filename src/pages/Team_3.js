import React from "react";
import kishor from "../dist/img/team/coreTeam/kishore.jpg";
import "../dist/css/custom.css";
import Radium from "radium";
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
                  src={kishor}
                  alt="kishor"
                  className="img-circle"
                  // style={{ margin: "5em 40px" }}
                />
                <p className="dstQuote" style={{ marginBottom: "-2rem" }}></p>
                <p className="textUnder" style={{ textAlign: "center" }}>
                  Focus on making yourself better, not on thinking that you are
                  better.
                </p>
                {/*   <div className="textUnder">
               
              </div> */}
              </div>
            </div>

            <div style={{ paddingTop: "30px" }}>
              <p className="teamName">Kishore M</p>

              <p className="teamSpecialize">Founder & Director</p>
              <p className="teamDetails">
                He is a key member of the agency’s executive team, responsible
                for driving growth and efficiency across Company and clients.
              </p>
              <p className="teamDetails">
                Kishore has played a leadership role in areas including client
                contracts and contractual compliance, finance, reporting,
                delivery, project management, production.
              </p>
              <p className="teamDetails">
                He is associated with many educational and research institutions
                across INDIA like IIT Guwahati, NIT Manipur, DSATM Bangalore,
                SRCE Chennai, BPPIMT Kolkata and many more.
              </p>
              <p className="teamDetails">
                He holds degree in Bachelors of Electronics & Tele-Communication
                from Don Bosco Institute of Technology (VTU), Benguluru.
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
