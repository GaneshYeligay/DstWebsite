import React from "react";
import "../dist/css/engineering-services.css";
const EngineeringEmbedded1 = props => {
  let dataHead = props.dataHead;
  let img = props.img;
  let paradata = props.paradata;
  let pops = props.pops;
  //   let bgColor = props.tooltipStyles;

  return (
    <div className="engineeringEmbd row ">
      <div className="engineeringData col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="colPadding col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="bpe-thumb-container-eng">
            <img className="bpe-thumb-img" src={img} alt="" />
          </div>
        </div>
        <div className="colMarginTop col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="bpe-details-container-eng">
            <p className="bpe-details-title">{dataHead}</p>
           
            
            <span>{paradata}</span>
            <br/>
            {(props.pops)?<span>{pops}</span>:""}
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EngineeringEmbedded1;
