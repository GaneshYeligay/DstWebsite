import React from "react";
import { Link } from "react-router-dom";
import { P } from "../../../../common";

const Card = (props) => {
  return (
    <div className="cardArea_2">
      <IMG height={props.height} width={props.width} img={props.img} />
      <h1
        className="cardTitle"
        style={{
          ...props.style,
          textAlign: "center",
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      >
        {props.title}
      </h1>
      <div class={props.cardDataStyle ? props.cardDataStyle : "cardData"}>
        <P>{props.data ? props.data : props.children}</P>
      </div>
      {props.btlLbl ? (
        <div className="cardButton_2">
          <Link
            to={props.to}
            className="btn btn-primary"
            title="Learn More"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "14px",
              backgroundColor: "rgb(45, 71, 145)",
              width: " 76%",
              minHeight: "4rem",
            }}
            onClick={props.onPress}
          >
            {props.btlLbl}
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
function IMG(props) {
  console.log("dataa ", props);
  if (props.width && props.height) {
    return (
      <img
        src={props.img}
        alt=""
        style={{ width: props.width, height: props.height }}
        className="cardImage"
      />
    );
  } else if (props.width) {
    return (
      <img
        src={props.img}
        alt=""
        style={{ width: props.width }}
        className="cardImage"
      />
    );
  } else if (props.height) {
    return (
      <img
        src={props.img}
        alt=""
        style={{ height: props.height }}
        className="cardImage"
      />
    );
  } else {
    return <img src={props.img} alt="" className="cardImage" />;
  }
}
