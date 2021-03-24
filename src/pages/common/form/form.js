import React from "react";
import Fade from "react-reveal/Fade";
import styles from "./form.module.css";
import domains from "../../../config/domains.json";
import axios from "axios";
class FormExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: "",
      fields: {},
      errors: {},
      datas: [],
      invalidClass:
        styles["form-ctl-input"] +
        " " +
        styles["custom-textbox"] +
        " " +
        styles["is-invalid"],
      validClass: styles["form-ctl-input"] + " " + styles["custom-textbox"],
      invalidFeedback: styles["invalid-feedback"],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }
  handleSubmit(e) {
    console.log("name:", this.state.name);
    console.log("email:", this.state.email);
    console.log("phone:", this.state.phone);
    if (this.handleValidation()) {
      const contactData = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
      };
      axios
        .post(domains.path + "/contact", contactData)

        .then(function (response) {
          console.log("data return from contact", response);
          alert("form submitted successfully");
          window.location.reload(false);
        })
        .catch(function (error) {
          console.log("error occured", error);
          alert("form submit unsuccessfull, try again");
          window.location.reload(false);
        });
    } else {
      alert("form not submited");
    }
  }
  handleValidation(e) {
    let email = this.state.email;
    let name = this.state.name;
    let phone = this.state.phone;
    let errors = {};
    let formIsValid = true;
    //Name
    if (!name) {
      formIsValid = false;
      errors["name"] = "Name cannot be empty";
    }

    if (typeof name !== "undefined") {
      if (!name.match(/^[.a-zA-Z\s-, ]+$/)) {
        formIsValid = false;
        errors["name"] = "Name can contain only letters";
      }
    }

    //Email
    if (!email) {
      formIsValid = false;
      errors["email"] = "Email cannot be empty";
    }

    if (typeof email !== "undefined") {
      let lastAtPos = email.lastIndexOf("@");
      let lastDotPos = email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (regex.test(phone)) {
      console.log("number is valid");
    } else {
      formIsValid = false;
      errors["phone"] = "Enter valid number";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }
  makeField(id, icon, name) {
    let value = "";
    let className = "";
    let invalid = "";

    if ("name" === id) {
      value = this.state[id] || "";
      invalid = !value.match(/^([.a-zA-Z\s-, ]+)?$/);
      className = invalid ? this.state.validClass : this.state.validClass;
    } else if ("email" === id) {
      value = this.state[id] || "";
      invalid = !value.match(
        "^$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+(?:[a-zA-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)$"
      );
      className = invalid ? this.state.validClass : this.state.validClass;
    } else if ("phone" === id) {
      value = this.state[id] || "";
      invalid = !value.match(
        /^(\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4}))?$/
      );
      className = invalid ? this.state.validClass : this.state.validClass;
    }

    return (
      <div className={styles["form-ctl"]}>
        <div className={styles["control"]}>
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
              style={{ outline: "none", paddingLeft: "5px" }}
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
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "left",
          flexDirection: "column",
          alignItems: "left",
        }}
      >
        {/* switch button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
        {/*   form  */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <form autoComplete="off" className={styles["form"]}>
            {this.makeField("name", "person", "Enter your name")}
            {this.makeField("email", "email", "Enter your Email ID")}
            {this.makeField(
              "phone",
              "stay_current_portrait",
              "Enter your Phone Number"
            )}

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: " 1rem",
              }}
            >
              <button
                style={{
                  backgroundColor: "#fff",
                  border: "none",
                  outline: "none",
                  padding: "8px 70px 10px 0",
                  fontWeight: "500",
                  cursor: "pointer",
                  color: "#007ac1",
                  fontSize: "16px",
                }}
                onClick={this.handleSubmit}
              >
                Request a call back
              </button>
              <img
                style={{ height: "1rem" }}
                alt=""
                src="https://cdn.manipalprolearn.com/sites/all/themes/prolearn/images/arrow.png"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormExample;
