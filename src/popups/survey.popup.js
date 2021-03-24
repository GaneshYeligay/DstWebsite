import React, { useState } from "react";

import "./custome.css";

function Options({ name, option, onClick }) {
  return (
    <div
      className={`option-root`}
      onClick={() => {
        onClick(name);
      }}
    >
      <div className={"chWrapper"}>
        <div className={"numberCircle"}>{option}</div>
      </div>

      <div>{name.title}</div>
    </div>
  );
}

const Questions = {
  question: "Hello,What can we help you with?",
  options: [
    {
      title: "Artificial Intelligence/Machine Learning ",
      question: "Let us know the sector you operate in.",
      options: [
        {
          title: "Automobile",
          question: null,
          options: [],
        },
        {
          title: "Healthcare",
          question: null,
          options: [],
        },
        {
          title: "Industry",
          question: null,
          options: [],
        },
        {
          title: "Other Sector",
          question: null,
          options: [],
        },
      ],
    },
    {
      title: "Embedded Services",
      question: "ES-Let us know the sector you operate in.",
      options: [
        {
          title: "Automobile",
          question: null,
          options: [],
        },
        {
          title: "Healthcare",
          question: null,
          options: [],
        },
        {
          title: "Industry",
          question: null,
          options: [],
        },
        {
          title: "Other Sector",
          question: null,
          options: [],
        },
      ],
    },
    {
      title: "IoT-Internet of Things",
      question: "Let us know the sector you operate in.",
      options: [
        {
          title: "Automobile",
          question: null,
          options: [],
        },
        {
          title: "Healthcare",
          question: null,
          options: [],
        },
        {
          title: "Industry",
          question: null,
          options: [],
        },
        {
          title: "Other Sector",
          question: null,
          options: [],
        },
      ],
    },
    {
      title: "Product Design Service",
      question: "Let us know the sector you operate in.",
      options: [
        {
          title: "Automobile",
          question: null,
          options: [],
        },
        {
          title: "Healthcare",
          question: null,
          options: [],
        },
        {
          title: "Industry",
          question: null,
          options: [],
        },
        {
          title: "Other Sector",
          question: null,
          options: [],
        },
      ],
    },
    {
      title: "Software Design Service",
      question: "(SD)-What are you looking to Design",
      options: [
        {
          title: "Cloud based Solution",
          question: null,
          options: [],
        },
        {
          title: "E-commerce site development",
          question: null,
          options: [],
        },
        {
          title: "Mobile Application",
          question: null,
          options: [],
        },
        {
          title: "Web Application development",
          question: null,
          options: [],
        },
        {
          title: "Embedded Software Development",
          question: null,
          options: [],
        },
      ],
    },
    {
      title: "Test Automation Service",
      question: "TA-T Let us know more about solution you are looking for?",
      options: [
        {
          title: "Boundary Scan Tester",
          question: null,
          options: [],
        },
        {
          title: "Cable Harness Tester ",
          question: null,
          options: [],
        },
        {
          title: "Functional Tester",
          question: null,
          options: [],
        },
        {
          title: "Quality/Environmental Tester",
          question: null,
          options: [],
        },
        {
          title: "RMA Tester",
          question: null,
          options: [],
        },
      ],
    },
  ],
};

function ReactInput({ type, name, placeholder, id, icon }) {
  let myIcon = <i className={icon.icon} aria-hidden="true"></i>;
  if (icon.variant === "material") {
    myIcon = <i className="material-icons">{icon.icon}</i>;
  }

  if (type === "text") {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id={id}>
            {myIcon}
          </span>
        </div>
        <input
          style={{ marginTop: 0 }}
          type="text"
          class="form-control"
          required
          placeholder={placeholder}
          aria-label={name}
          aria-describedby={name}
        />
      </div>
    );
  }
  if (type === "email") {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id={id}>
            {myIcon}
          </span>
        </div>
        <input
          style={{ marginTop: 0 }}
          type="email"
          class="form-control"
          required
          placeholder={placeholder}
          aria-label={name}
          aria-describedby={name}
        />
      </div>
    );
  }
}

function SurveyForm({ stopSurvay, back, turnOff }) {
  return (
    <>
      <div className="modal-body text-center container col-md-12 col-lg-12 col-12">
        <h4>Please Mention the requested details to get a quote from us.</h4>

        <ReactInput
          name={"user-name"}
          icon={{ variant: "material", icon: "supervisor_account" }}
          id={"user-name"}
          placeholder={"Name"}
          type={"text"}
          key={"user-name"}
        />
        <ReactInput
          name={"user-email"}
          icon={{ variant: "material", icon: "work" }}
          id={"user-email"}
          placeholder={"Email"}
          type={"email"}
          key={"user-email"}
        />
        <ReactInput
          name={"user-mobile"}
          icon={{ variant: "material", icon: "ring_volume" }}
          id={"user-mobile"}
          placeholder={"Mobile"}
          type={"text"}
          key={"user-mobile"}
        />
        <ReactInput
          name={"user-workplace"}
          icon={{ variant: "material", icon: "domain" }}
          id={"user-workplace"}
          placeholder={"Company  "}
          type={"text"}
          key={"user-workplace"}
        />
        <ReactInput
          name={"user-website"}
          icon={{ variant: "material", icon: "public" }}
          id={"user-website"}
          placeholder={"Website "}
          type={"text"}
          key={"user-website"}
        />
        <button
          className="btn btn-lg btn-primary submit-my-request"
          onClick={() => {
            turnOff();
          }}
        >
          Request for a quote
        </button>
      </div>
      {back}
    </>
  );
}
function ReviewForm({ stopSurvay, back, turnOff }) {
  const [showSurveyForm, setShowSurveyForm] = useState(false);
  const [reqFormData] = useState({
    question:
      "Tell us more about the Problem-statement or deliverables required for you project",
    tagline: "",
    buttonTitleText: "REQUEST FOR QUOTE",
  });
  if (showSurveyForm) {
    return <SurveyForm stopSurvay={stopSurvay} turnOff={turnOff} back={back} />;
  }
  return (
    <React.Fragment>
      <div className="modal-body text-center container col-md-12 col-lg-12 col-12">
        <h4>{reqFormData.question}</h4>
        <p>{reqFormData.tagline}</p>

        <textarea
          class="form-control"
          aria-label="With textarea"
          rows="6"
          cols="50"
        ></textarea>

        <button
          className="btn btn-lg btn-primary submit-my-request mt-5"
          onClick={() => {
            setShowSurveyForm(true);
          }}
        >
          Request for a Quote
        </button>
      </div>
      {back}
    </React.Fragment>
  );
}

export default ({ turnOff, stopSurvay }) => {
  const [question, setQuestion] = useState(Questions);
  const [end, setEnd] = useState(false);
  //const [response, setResponse] = useState({});

  let assciCharIndex = 65;

  const onClickOption = (option) => {
    console.info("[SelectedOption]", option);
    if (option.question) {
      setQuestion(option);
    } else {
      setEnd(true);
    }
  };
  let backButton = (
    <div className="survey-call-back-wrapper" style={{ cursor: "grab" }}>
      <div
        onClick={() => {
          setQuestion(Questions);
          setEnd(false);
        }}
        className="badge badge-light p-2 pr-6"
        style={{ fontSize: "small", color: "inherit" }}
      >
        <i class="fas fa-arrow-left">
          {" "}
          <span style={{ paddingLeft: "11%", paddingRight: "16px" }}>Back</span>
        </i>
      </div>
    </div>
  );
  if (question && Questions.question === question.question) {
    backButton = null;
  }
  return (
    <div className="modal show ">
      <div className={`modal-dialog modalNewsletter`}>
        <div className="container col-md-12 col-lg-12 col-12">
          <div className="modal-content">
            {/*-----------*/}
            <form method="post">
              <div className={`modal-header`}>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                  onClick={() => {
                    turnOff();
                  }}
                >
                  <span>&times;</span>
                </button>
              </div>
              {end ? (
                <ReviewForm
                  stopSurvay={stopSurvay}
                  turnOff={turnOff}
                  back={backButton}
                />
              ) : (
                <div className="modal-body text-center container col-md-12 col-lg-12 col-12">
                  <h4>{question.question}</h4>

                  {question.options.map((opt, index) => {
                    return (
                      <Options
                        onClick={onClickOption}
                        name={opt}
                        option={String.fromCharCode(assciCharIndex + index)}
                      />
                    );
                  })}
                </div>
              )}
              {end ? null : backButton}
            </form>
            {/*-----------*/}
          </div>
        </div>
      </div>
    </div>
  );
};
