import React from "react";
import { ViewMore } from "../../common/button";
import FormDate from "./Form_Date";
const Card = (props) => {
  let cardArea = props.cardArea;
  let textOnImage = props.textOnImage;
  let mainData = props.mainData;
  return (
    <div className={cardArea ? cardArea : "cardArea"}>
      <IMG height={props.height} width={props.width} img={props.img} />
      <div className={props.textOnImage ? props.textOnImage : ""}>
        {textOnImage ? <FormDate date={textOnImage} /> : ""}
      </div>
      <h1 className="cardTitle" style={props.style}>
        {props.title}
      </h1>
      <div className={props.cardDataStyle ? props.cardDataStyle : "cardData"}>
        {mainData ? (
          <div className="mainData">
            <p style={{ fontSize: "15px", fontWeight: "550" }}>
              {props.mainData}
            </p>
          </div>
        ) : (
          ""
        )}
        <p>{props.data ? props.data : props.children}</p>
      </div>
      {props.btlLbl ? (
        <div
          className={
            props.cardButtonPosition ? props.cardButtonPosition : "cardButton"
          }
        >
          <ViewMore to={props.LinkTo} />
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
        style={{ width: props.width, height: props.height }}
        className="cardImage"
        alt=""
      />
    );
  } else if (props.width) {
    return (
      <img
        src={props.img}
        style={{ width: props.width }}
        className="cardImage"
        alt=""
      />
    );
  } else if (props.height) {
    return (
      <img
        src={props.img}
        style={{ height: props.height }}
        className="cardImage"
        alt=""
      />
    );
  } else {
    return <img src={props.img} className="cardImage" alt="" />;
  }
}
