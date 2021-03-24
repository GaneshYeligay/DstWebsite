import React, { Component } from "react";
import radium from "radium";
import domains from "../../config/domains.json";
import axios from "axios";
let definedData;
class FeebbackSubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      datas: "",
      forSite: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReject = this.handleReject.bind(this);
  }
  handleReject(e) {
    if (this.state.forSite === 0) {
      window.location = "http://newsite.digitalshark.in/";
    } else {
      window.location = "http://academic.digitalshark.in/";
    }
  }
  async handleSubmit(e) {
    console.log("data in url", definedData._id);
    let id = definedData._id;
    await axios
      .put(domains.path + `/feedback/${id}`)
      .then((response) => {
        console.log("response from feedback", response.data.message);
        if (response.data.message) {
          alert("Data updated for database successful");
          window.location = "http://newsite.digitalshark.in/";
        } else {
          alert("database not updated,try again after sometime ");
        }
      })
      .catch((err) => {
        alert("database not updated,try again after sometime ");
      });
    // if (this.state.forSite == 0) {
    //   console.log("for newsite");
    //   await axios
    //     .post(domains.path + "/dstWebsite/newsiteTestimonialUpdate", id)
    //     .then(response => {
    //       console.log("response from feedback", response.data.message);
    //       if (response.data.message) {
    //         alert("Data updated for database successful");
    //         window.location = "http://newsite.digitalshark.in/";
    //       } else {
    //         alert("database not updated,try again after sometime ");
    //       }
    //     })
    //     .catch(err => {
    //       alert("database not updated,try again after sometime ");
    //     });
    // } else {
    //   console.log("for academic");
    //   await axios
    //     .post(domains.path + "/dstWebsite/academicTestimonialUpdate", id)
    //     .then(response => {
    //       console.log("response from feedback", response.data.message);
    //       if (response.data.message) {
    //         alert("Data updated for database successful");
    //         window.location = "http://academic.digitalshark.in/";
    //       } else {
    //         alert("database not updated,try again after sometime ");
    //       }
    //     })
    //     .catch(err => {
    //       alert("database not updated,try again after sometime ");
    //     });
    // }
  }
  async componentWillMount() {
    console.log("data url is:", window.location.href);
    let sent = window.location.href;

    var url = sent.split(/[\s/]+/);
    console.log("data url is again:", url);

    let id = url[3];
    // let value = url[4];
    // this.setState({ forSite: value });
    console.log("id is:", id);
    await axios
      .get(domains.path + `/feedbackgetById/${id}`)
      .then(async (response) => {
        console.log("datas in feedbackForm", response);
        this.setState({
          datas: response.data,
          getId: response.data._id,
        });
      })
      .catch((err) => {
        alert("failed to load the page");
      });
    // console.log("value is:", value);
    // if (value == 0) {
    //   console.log("get newsite data");
    //   await axios
    //     .get(domains.path + "/dstWebsite/getNewsiteTestimonialById/" + id)
    //     .then(async response => {
    //       console.log("datas in feedbackForm", response);
    //       this.setState({
    //         datas: response.data,
    //         getId: response.data._id
    //       });
    //     })
    //     .catch(err => {
    //       alert("failed to load the page");
    //     });
    // } else {
    //   console.log("get academic data");
    //   await axios
    //     .get(domains.path + "/dstWebsite/getAcademicTestimonialById/" + id)
    //     .then(async response => {
    //       console.log("datas in feedbackForm", response);
    //       this.setState({
    //         datas: response.data
    //       });
    //     })
    //     .catch(err => {
    //       alert("failed to load the page");
    //     });
    // }
  }
  render() {
    console.log("data in datas", this.state.datas, this.state.id);
    definedData = this.state.datas;
    console.log("after assigning to definedData", definedData);
    // console.log("id in render", getId);

    return (
      <React.Fragment>
        <section>
          <div className="feedbackposition">
            <div className="feedbackDataCard">
              <form>
                <div className="row">
                  <div className="form-group">
                    <label>Name :</label> <p>{definedData.name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group">
                    <label>Email :</label> <p>{definedData.email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group">
                    <label>Phone:</label>
                    <p>{definedData.phone}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group">
                    <label>Details:</label>
                    <p>{definedData.details}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group">
                    <label>Message:</label>
                    <p>{definedData.message}</p>
                  </div>
                </div>
                <button
                  type="submit"
                  className="AcceptBtn"
                  onClick={this.handleSubmit}
                >
                  Accept
                </button>

                <button
                  type="submit"
                  className="AcceptBtn"
                  onClick={this.handleReject}
                >
                  Reject
                </button>
              </form>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default radium(FeebbackSubmitForm);
