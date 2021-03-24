import React from "react";
import Fade from "react-reveal/Fade";
import styles2 from "./careerform.module.css";
import axios from "axios";
import domains from "../../../config/domains.json";

class FormExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      file: null,
      submitBtn: false,
      invalidClass:
        styles2["form-ctl-input"] +
        " " +
        styles2["custom-textbox"] +
        " " +
        styles2["is-invalid"],
      validClass: styles2["form-ctl-input"] + " " + styles2["custom-textbox"],
      invalidFeedback: styles2["invalid-feedback"],
    };
    this.handleChangeFile = this.handleChangeFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  makeField(id, icon, name) {
    const value = this.state[id] || "",
      invalid = !!(value.length % 2), // check if odd
      className = invalid ? this.state.validClass : this.state.validClass;
    return (
      <div className={styles2["form-ctl"]}>
        <div className={styles2["control"]}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <i class="material-icons">{icon}</i>
            <input
              type="text"
              className={className}
              data-id={id}
              placeholder={name}
              value={value}
              style={{
                outline: "none",
                paddingLeft: "5px",
                marginBottom: "2px",
              }}
              onChange={this.handleChange}
            />
          </div>

          <Fade bottom collapse when={invalid}>
            <div
              className={this.state.invalidFeedback}
              style={{ display: "block", fontSize: "small" }}
            >
              Oh no, the number of characters is odd
            </div>
          </Fade>
        </div>
      </div>
    );
  }
  handleChange({ target }) {
    this.setState({
      [target.getAttribute("data-id")]: target.value,
    });
  }
  async handleSubmit() {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    let datas = new FormData();
    this.setState({ submitBtn: true });
    console.log("path before sending", domains.path);
    let otherFields = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
    };
    datas.append("image", this.state.file);
    datas.set("otherFields", JSON.stringify(otherFields));
    console.log("data in otherFeilds", otherFields);
    await axios
      .post(domains.path + "/career", datas, config)
      .then((res) => {
        console.log("data from career page", res);
        if (res.status === 200) {
          alert("form submitted successfully");
          window.location.reload(false);
        } else {
          alert("form not submitted successfully");
          window.location.reload(false);
        }
      })
      .catch((err) => {
        alert("data not saved try again later");
        window.location.reload(false);
      });
  }
  handleChangeFile(e) {
    console.log("file change", e.target.files[0]);
    if (e.target.files[0]) {
      this.setState({ file: e.target.files[0] });
      console.log("data in files inside handleChangeFile", e.target.files[0]);
    }
  }
  render() {
    return (
      <div
        style={{
          display: "-webkit-inline-box",
          justifyContent: "center",
          justifyItems: "left",
          flexDirection: "column",
          alignItems: "left",
          marginTop: "3%",
          marginBottom: "3%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <form autoComplete="off" className={styles2["form"]}>
            {this.makeField("name", "person", "Enter your name")}
            {this.makeField("email", "email", "Enter your Email ID")}
            {this.makeField(
              "phone",
              "stay_current_portrait",
              "Enter your Phone Number"
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <i className="material-icons" style={{ marginLeft: "14%" }}>
                open_in_browser
              </i>
              <input
                type="file"
                id="file"
                aria-label="File browser example"
                accept=".txt, .pdf, .doc"
                onChange={this.handleChangeFile}
              ></input>
            </div>

            <div
              style={{
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: " 1rem",
              }}
            >
              <button
                type="submit"
                value="Submit"
                style={{
                  backgroundColor: "#015e9e",
                  border: "none",
                  outline: "none",
                  padding: "7px 25px 7px 25px",
                  fontWeight: "500",
                  cursor: "pointer",
                  color: "white",
                  fontSize: "16px",
                }}
                onClick={this.handleSubmit}
                disabled={this.state.submitBtn}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormExample;
