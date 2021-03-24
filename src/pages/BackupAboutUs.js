import "../dist/css/custom.css";
import Logo from "./logo";
import about1 from "../dist/img/about1.jpg";
const BackUpAboutUs = () => {
  return (
    <React.Fragment>
      <section className="about-area-two " style={{ background }}>
        <Logo />
        <div
          className="row"
          style={{ height: "100%", width: "100%", padding: "40px" }}
        >
          <div className="row" style={{ paddingTop: "30px", width: "100%" }}>
            <div
              className="col-xs-7"
              style={{ padding: "30px", background: "#333e48" }}
            >
              <p className="AboutUsTitle">WHO WE ARE ?</p>
              <p className="AboutUsDetails">
                Digital Shark Technology is the brainchild of Product marketing
                and Product design & services with proven track record in sales
                & marketing, managing & executing challenging projects on
                Embedded, Hardware and Software assignments to the satisfaction
                of clients. We are acutely aware of the growing necessities for
                quality products and services that must be delivered on
                schedule. We deliver within the budget and are committed to
                continuing its reputation for excellence through experience.
              </p>
            </div>
            <div
              className="col-xs-5"
              style={{ paddingLeft: "0px", paddingRight: "0px" }}
            >
              <img src={about1} style={{ height: "100%" }} />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default BackUpAboutUs;
