import React from "react";
import "../dist/css/custom.css";
const HomeOtherDetails = (props) => {
  let dataHead = props.dataHead;
  let img = props.img;
  let paradata = props.paradata;
  //   let bgColor = props.tooltipStyles;

  return (
    <div className="blog-dataStyle row ">
      <div className="blog-contentData col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="colPadding col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="bpe-thumb-container">
            <img className="bpe-thumb-img" alt="" src={img} />
          </div>
        </div>
        <div className="colMarginTop col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="bpe-details-container">
            <p className="bpe-details-title ">{dataHead}</p>

            <span>{paradata}</span>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeOtherDetails;
